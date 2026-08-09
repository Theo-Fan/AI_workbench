import type { FastifyInstance } from 'fastify';
import { db } from '../../db/client.js';

export async function workspaceRoutes(app: FastifyInstance) {
  app.get('/api/v1/workspaces/:workspaceId', async (request) => {
    const id = String((request.params as { workspaceId?: string }).workspaceId || '');
    const row = db.prepare('SELECT id, name, schema_version, created_at, updated_at FROM workspaces WHERE id = ?').get(id) as Record<string, unknown> | undefined;
    if (!row) throw Object.assign(new Error('工作区不存在'), { statusCode: 404 });
    return { data: { id: row.id, name: row.name, schemaVersion: row.schema_version, createdAt: row.created_at, updatedAt: row.updated_at } };
  });
}
