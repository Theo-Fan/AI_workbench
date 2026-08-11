import { randomUUID } from 'node:crypto';
import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { parseJsonObject } from '../shared/request.js';

const createContentSchema = z.object({ group: z.enum(['ideas', 'trends', 'sources']), title: z.string().trim().min(1).max(500), description: z.string().max(5000).optional() });

export async function contentRoutes(app: FastifyInstance) {
  const db = app.db;
  app.get('/api/v1/workspaces/:workspaceId/content', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const items = db.prepare('SELECT * FROM content_items WHERE workspace_id=? AND deleted_at IS NULL ORDER BY kind, group_name, created_at').all(workspaceId).map((row: any) => ({ id: row.id, kind: row.kind, group: row.group_name, title: row.title, description: row.description, metadata: parseJsonObject(row.metadata_json) }));
    const docs = db.prepare('SELECT document_key, data_json FROM workspace_documents WHERE workspace_id=?').all(workspaceId) as Array<{ document_key: string; data_json: string }>;
    return { data: { items, documents: Object.fromEntries(docs.map(document => [document.document_key, parseJsonObject(document.data_json)])) } };
  });
  app.post('/api/v1/workspaces/:workspaceId/content/ideas', async (request, reply) => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || ''); const input = createContentSchema.parse(request.body); const now = new Date().toISOString(); const id = randomUUID();
    db.prepare("INSERT INTO content_items(id, workspace_id, kind, group_name, title, description, metadata_json, created_at, updated_at) VALUES (?, ?, 'inspiration', ?, ?, ?, '{}', ?, ?)").run(id, workspaceId, input.group, input.title, input.description || '', now, now);
    reply.code(201); return { data: { id, kind: 'inspiration', group: input.group, title: input.title, description: input.description || '' } };
  });
}
