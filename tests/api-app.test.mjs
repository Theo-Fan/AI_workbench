import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

test('API 应用工厂可独立注入请求并返回统一错误协议', async () => {
  // better-sqlite3 is a native addon. CI/developer shells can run a
  // different Node ABI than the repository's pinned Node 22 toolchain; the
  // dedicated Node 22 verification command runs this test instead of hiding
  // the incompatibility behind a flaky import failure.
  if (process.versions.modules !== '127') {
    console.warn(`跳过 API 应用工厂 smoke test：当前 Node ABI ${process.versions.modules}，需要 Node 22 ABI 127`);
    return;
  }
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-workspace-api-test-'));
  process.env.WORKSPACE_DB_PATH = path.join(tempDir, 'workspace.db');
  process.env.WORKSPACE_BACKUP_DIR = path.join(tempDir, 'backups');
  process.env.LOG_LEVEL = 'silent';

  const { buildApp } = await import('../apps/api/dist/app.js');
  const app = await buildApp({ logger: false });
  try {
    const health = await app.inject({ method: 'GET', url: '/health' });
    assert.equal(health.statusCode, 200);
    assert.deepEqual(health.json().status, 'ok');
    assert.equal(health.json().database, 'open');

    const workspace = await app.inject({ method: 'GET', url: '/api/v1/workspaces/default' });
    assert.equal(workspace.statusCode, 200);
    assert.equal(workspace.json().data.id, 'default');

    const emptyDocument = await app.inject({ method: 'GET', url: '/api/v1/workspaces/default/document' });
    assert.equal(emptyDocument.statusCode, 200);
    assert.deepEqual(emptyDocument.json().data, { data: null, version: 0 });

    const savedDocument = await app.inject({ method: 'PUT', url: '/api/v1/workspaces/default/document', payload: { data: { tasks: { dashboard: [] } }, expectedVersion: 0 } });
    assert.equal(savedDocument.statusCode, 200);
    assert.equal(savedDocument.json().data.version, 1);

    const conflict = await app.inject({ method: 'PUT', url: '/api/v1/workspaces/default/document', payload: { data: { tasks: {} }, expectedVersion: 0 } });
    assert.equal(conflict.statusCode, 409);
    assert.equal(conflict.json().error.code, 'VERSION_CONFLICT');

    const now = new Date().toISOString();
    app.db.prepare('INSERT INTO workspaces(id, name, schema_version, created_at, updated_at) VALUES (?, ?, 4, ?, ?)').run('previous-format', 'Previous format', now, now);
    app.db.prepare('INSERT INTO workspace_documents(workspace_id, document_key, data_json, updated_at) VALUES (?, ?, ?, ?)').run('previous-format', 'legacy_snapshot', JSON.stringify({ data: { preserved: true }, version: 7 }), now);
    const previousDocument = await app.inject({ method: 'GET', url: '/api/v1/workspaces/previous-format/document' });
    assert.deepEqual(previousDocument.json().data, { data: { preserved: true }, version: 7 });
    const migratedDocument = await app.inject({ method: 'PUT', url: '/api/v1/workspaces/previous-format/document', payload: { data: { preserved: true, migrated: true }, expectedVersion: 7 } });
    assert.equal(migratedDocument.json().data.version, 8);
    assert.ok(app.db.prepare("SELECT 1 FROM workspace_documents WHERE workspace_id = ? AND document_key = 'workspace_document'").get('previous-format'));

    const invalidTask = await app.inject({ method: 'POST', url: '/api/v1/workspaces/default/tasks', payload: { scope: 'dailyPlan', text: '   ' } });
    assert.equal(invalidTask.statusCode, 400);
    assert.equal(invalidTask.json().error.code, 'VALIDATION_ERROR');
    assert.ok(Array.isArray(invalidTask.json().error.details));

    const missingWorkspace = await app.inject({ method: 'GET', url: '/api/v1/workspaces/missing-workspace/tasks' });
    assert.equal(missingWorkspace.statusCode, 404);
    assert.equal(missingWorkspace.json().error.code, 'WORKSPACE_NOT_FOUND');

    const ready = await app.inject({ method: 'GET', url: '/ready' });
    assert.equal(ready.statusCode, 200);
    assert.equal(ready.json().status, 'ready');

    const backup = await app.inject({ method: 'POST', url: '/api/v1/workspaces/default/backups' });
    assert.equal(backup.statusCode, 200);
    assert.match(backup.json().data.filename, /^workspace-.*\.db$/);
    assert.equal(fs.existsSync(path.join(tempDir, 'backups', backup.json().data.filename)), true);
  } finally {
    await app.close();
  }

  // Closing an embedded Fastify instance must not poison a subsequent one in
  // the same process. This is also the lifecycle used by test runners/workers.
  const secondApp = await buildApp({ logger: false });
  try {
    const health = await secondApp.inject({ method: 'GET', url: '/health' });
    assert.equal(health.statusCode, 200);
  } finally {
    await secondApp.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});
