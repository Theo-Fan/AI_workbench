import type { FastifyInstance } from 'fastify';
import { db } from '../../db/client.js';

export async function dashboardRoutes(app: FastifyInstance) {
  app.get('/api/v1/workspaces/:workspaceId/dashboard', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const taskTotal = Number((db.prepare('SELECT COUNT(*) AS count FROM tasks WHERE workspace_id = ? AND deleted_at IS NULL').get(workspaceId) as { count: number }).count);
    const taskDone = Number((db.prepare('SELECT COUNT(*) AS count FROM tasks WHERE workspace_id = ? AND deleted_at IS NULL AND done = 1').get(workspaceId) as { count: number }).count);
    const checkins = db.prepare('SELECT COUNT(*) AS total, COALESCE(SUM(done), 0) AS done FROM checkins WHERE workspace_id = ?').get(workspaceId) as { total: number; done: number };
    const logs = db.prepare("SELECT COUNT(*) AS count, COALESCE(SUM(duration), 0) AS duration, COALESCE(SUM(calories), 0) AS calories FROM workout_logs WHERE workspace_id = ? AND date >= date('now', 'weekday 1', '-6 days')").get(workspaceId) as { count: number; duration: number; calories: number };
    return { data: { tasks: { done: taskDone, total: taskTotal, rate: taskTotal ? Math.round(taskDone / taskTotal * 100) : 0 }, checkins: { done: Number(checkins.done), total: Number(checkins.total) }, fitness: { sessions: Number(logs.count), duration: Number(logs.duration), calories: Number(logs.calories) } } };
  });
}
