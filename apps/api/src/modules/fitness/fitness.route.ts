import type { FastifyInstance } from 'fastify';

const mapPlan = (row: Record<string, unknown>) => ({ id: row.id, workspaceId: row.workspace_id, day: row.day, typeId: row.type_id, target: row.target, done: Boolean(row.done), version: row.version });
const mapLog = (row: Record<string, unknown>) => ({ id: row.id, workspaceId: row.workspace_id, date: row.date, typeId: row.type_id, duration: row.duration, calories: row.calories, note: row.note, createdAt: row.created_at });

export async function fitnessRoutes(app: FastifyInstance) {
  const db = app.db;
  app.get('/api/v1/workspaces/:workspaceId/fitness', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const types = db.prepare('SELECT id, icon, name, unit FROM fitness_types ORDER BY id').all();
    const plans = db.prepare('SELECT * FROM fitness_plans WHERE workspace_id = ? ORDER BY day, id').all(workspaceId).map(row => mapPlan(row as Record<string, unknown>));
    const logs = db.prepare('SELECT * FROM workout_logs WHERE workspace_id = ? ORDER BY date DESC, created_at DESC LIMIT 120').all(workspaceId).map(row => mapLog(row as Record<string, unknown>));
    return { data: { types, plans, logs } };
  });
}
