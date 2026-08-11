import type { FastifyInstance } from 'fastify';
import { toggleCheckinSchema } from '@ai-workspace/contracts';

export async function checkinRoutes(app: FastifyInstance) {
  const db = app.db;
  app.get('/api/v1/workspaces/:workspaceId/checkins/today', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const rows = db.prepare('SELECT id, workspace_id, icon, name, done, updated_at FROM checkins WHERE workspace_id = ? ORDER BY id').all(workspaceId) as Record<string, unknown>[];
    return { data: rows.map(row => ({ id: row.id, workspaceId: row.workspace_id, icon: row.icon, name: row.name, done: Boolean(row.done), updatedAt: row.updated_at })) };
  });
  app.patch('/api/v1/workspaces/:workspaceId/checkins/:id', async (request) => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const id = String((request.params as { id?: string }).id || '');
    const input = toggleCheckinSchema.parse(request.body);
    const result = db.prepare('UPDATE checkins SET done = ?, updated_at = ? WHERE id = ? AND workspace_id = ?').run(input.done ? 1 : 0, new Date().toISOString(), id, workspaceId);
    if (!result.changes) throw Object.assign(new Error('打卡项不存在'), { statusCode: 404 });
    return { data: input };
  });
}
