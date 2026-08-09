import type { FastifyInstance } from 'fastify';
import { updateLegacyWorkspaceSnapshotSchema } from '@ai-workspace/contracts';
import { db } from '../../db/client.js';

const documentKey = 'legacy_snapshot';
const maxSnapshotBytes = 20 * 1024 * 1024;

type StoredSnapshot = { data: Record<string, unknown>; version: number };

function isSafeJson(value: unknown, depth = 0): boolean {
  if (depth > 100 || value === null || typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') return depth <= 100;
  if (Array.isArray(value)) return value.every(item => isSafeJson(item, depth + 1));
  if (typeof value !== 'object') return false;
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) return false;
  return Object.entries(value as Record<string, unknown>).every(([key, item]) => key !== '__proto__' && key !== 'constructor' && key !== 'prototype' && isSafeJson(item, depth + 1));
}

function parseStoredSnapshot(value: string | undefined): StoredSnapshot | null {
  if (!value) return null;
  const parsed = JSON.parse(value) as unknown;
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
  const candidate = parsed as Partial<StoredSnapshot>;
  const version = candidate.version;
  if (!candidate.data || typeof candidate.data !== 'object' || Array.isArray(candidate.data) || typeof version !== 'number' || !Number.isInteger(version) || version < 0) return null;
  return { data: candidate.data as Record<string, unknown>, version };
}

export async function legacyWorkspaceRoutes(app: FastifyInstance) {
  app.get('/api/v1/workspaces/:workspaceId/legacy-snapshot', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    if (!db.prepare('SELECT 1 FROM workspaces WHERE id = ?').get(workspaceId)) throw Object.assign(new Error('工作区不存在'), { statusCode: 404 });
    const row = db.prepare('SELECT data_json FROM workspace_documents WHERE workspace_id = ? AND document_key = ?').get(workspaceId, documentKey) as { data_json?: string } | undefined;
    const snapshot = parseStoredSnapshot(row?.data_json);
    return { data: snapshot || { data: null, version: 0 } };
  });

  app.put('/api/v1/workspaces/:workspaceId/legacy-snapshot', async (request, reply) => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    if (!db.prepare('SELECT 1 FROM workspaces WHERE id = ?').get(workspaceId)) throw Object.assign(new Error('工作区不存在'), { statusCode: 404 });
    const input = updateLegacyWorkspaceSnapshotSchema.parse(request.body);
    if (!isSafeJson(input.data)) throw Object.assign(new Error('工作区快照包含不安全或不支持的数据'), { statusCode: 400 });
    const json = JSON.stringify(input.data);
    if (Buffer.byteLength(json, 'utf8') > maxSnapshotBytes) throw Object.assign(new Error('工作区快照超过 20 MB 限制'), { statusCode: 413 });

    const result = db.transaction(() => {
      const row = db.prepare('SELECT data_json FROM workspace_documents WHERE workspace_id = ? AND document_key = ?').get(workspaceId, documentKey) as { data_json?: string } | undefined;
      const current = parseStoredSnapshot(row?.data_json) || { data: {}, version: 0 };
      if (input.expectedVersion !== current.version) return { conflict: true as const, current };
      const next = { data: input.data, version: current.version + 1 };
      const now = new Date().toISOString();
      db.prepare(`
        INSERT INTO workspace_documents(workspace_id, document_key, data_json, updated_at)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(workspace_id, document_key) DO UPDATE SET data_json = excluded.data_json, updated_at = excluded.updated_at
      `).run(workspaceId, documentKey, JSON.stringify(next), now);
      db.prepare('UPDATE workspaces SET updated_at = ? WHERE id = ?').run(now, workspaceId);
      return { conflict: false as const, next };
    })();

    if (result.conflict) return reply.code(409).send({ error: { code: 'VERSION_CONFLICT', message: '工作区已在其他位置更新' }, data: result.current });
    return { data: result.next };
  });
}
