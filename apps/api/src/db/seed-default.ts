import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { closeDatabase, openDatabase } from './client.js';
import { ensureDefaultWorkspace, ensureSchema } from './schema.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const templatePath = path.resolve(projectRoot, process.env.WORKSPACE_DEFAULT_TEMPLATE || 'templates/workspace.default.json');
const database = openDatabase();

try {
  ensureSchema(database);
  ensureDefaultWorkspace(database);

  const existing = database.prepare(`
    SELECT 1 FROM workspace_documents
    WHERE workspace_id = 'default' AND document_key IN ('workspace_document', 'legacy_snapshot')
    LIMIT 1
  `).get();

  if (existing) {
    console.log('工作区已有数据，跳过默认模板（未覆盖任何内容）。');
  } else {
    const parsed = JSON.parse(fs.readFileSync(templatePath, 'utf8')) as unknown;
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('默认工作区模板格式无效');
    const now = new Date().toISOString();
    database.prepare(`
      INSERT INTO workspace_documents(workspace_id, document_key, data_json, updated_at)
      VALUES ('default', 'workspace_document', ?, ?)
    `).run(JSON.stringify({ data: parsed, version: 0 }), now);
    console.log(`已安装脱敏默认工作区模板：${templatePath}`);
  }
} finally {
  closeDatabase(database);
}
