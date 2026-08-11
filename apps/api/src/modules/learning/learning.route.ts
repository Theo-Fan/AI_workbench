import type { FastifyInstance } from 'fastify';

export async function learningRoutes(app: FastifyInstance) {
  const db = app.db;
  app.get('/api/v1/workspaces/:workspaceId/learning', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const resources = db.prepare("SELECT id, domain, title, description FROM learning_resources WHERE workspace_id = ? AND deleted_at IS NULL ORDER BY created_at").all(workspaceId);
    const challenge = db.prepare('SELECT current, total, streak, last_completed_date FROM english_challenges WHERE workspace_id = ?').get(workspaceId) || { current: 0, total: 100, streak: 0, last_completed_date: '' };
    return { data: { resources, englishChallenge: challenge } };
  });
}
