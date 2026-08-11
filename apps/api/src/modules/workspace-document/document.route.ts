import type { FastifyInstance } from 'fastify';
import { updateWorkspaceDocumentSchema } from '@ai-workspace/contracts';

const documentKey = 'workspace_document';
const previousDocumentKey = 'legacy_snapshot';
const maxDocumentBytes = 20 * 1024 * 1024;

type StoredDocument = { data: Record<string, unknown>; version: number };

function isSafeJson(value: unknown, depth = 0): boolean {
  if (depth > 100 || value === null || typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') return depth <= 100;
  if (Array.isArray(value)) return value.every(item => isSafeJson(item, depth + 1));
  if (typeof value !== 'object') return false;
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) return false;
  return Object.entries(value as Record<string, unknown>).every(([key, item]) => key !== '__proto__' && key !== 'constructor' && key !== 'prototype' && isSafeJson(item, depth + 1));
}

function parseStoredDocument(value: string | undefined): StoredDocument | null {
  if (!value) return null;
  let parsed: unknown;
  try { parsed = JSON.parse(value) as unknown; } catch { return null; }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
  const candidate = parsed as Partial<StoredDocument>;
  if (!candidate.data || typeof candidate.data !== 'object' || Array.isArray(candidate.data) || !Number.isInteger(candidate.version) || Number(candidate.version) < 0) return null;
  return { data: candidate.data as Record<string, unknown>, version: Number(candidate.version) };
}

function readDocument(db: FastifyInstance['db'], workspaceId: string): StoredDocument | null {
  const row = db.prepare(`
    SELECT data_json FROM workspace_documents
    WHERE workspace_id = ? AND document_key IN (?, ?)
    ORDER BY CASE document_key WHEN ? THEN 0 ELSE 1 END
    LIMIT 1
  `).get(workspaceId, documentKey, previousDocumentKey, documentKey) as { data_json?: string } | undefined;
  return parseStoredDocument(row?.data_json);
}

export async function workspaceDocumentRoutes(app: FastifyInstance) {
  const db = app.db;

  app.get('/api/v1/workspaces/:workspaceId/document', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const document = readDocument(db, workspaceId);
    return { data: document || { data: null, version: 0 } };
  });

  app.put('/api/v1/workspaces/:workspaceId/document', async (request, reply) => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const input = updateWorkspaceDocumentSchema.parse(request.body);
    if (!isSafeJson(input.data)) throw Object.assign(new Error('工作区文档包含不安全或不支持的数据'), { statusCode: 400 });
    const json = JSON.stringify(input.data);
    if (Buffer.byteLength(json, 'utf8') > maxDocumentBytes) throw Object.assign(new Error('工作区文档超过 20 MB 限制'), { statusCode: 413 });

    const result = db.transaction(() => {
      const current = readDocument(db, workspaceId) || { data: {}, version: 0 };
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
