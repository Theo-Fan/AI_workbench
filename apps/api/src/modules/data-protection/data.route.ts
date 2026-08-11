import type { FastifyInstance } from 'fastify';
import { createSqliteBackup } from '../../db/backup-utils.js';

const workspaceTables = [
  'workspaces',
  'tasks',
  'audit_events',
  'checkins',
  'fitness_plans',
  'workout_logs',
  'research_ideas',
  'research_todos',
  'research_reading_logs',
  'learning_resources',
  'english_challenges',
  'content_items',
  'workspace_documents'
] as const;

export async function dataProtectionRoutes(app: FastifyInstance) {
  const db = app.db;
  app.get('/api/v1/workspaces/:workspaceId/export', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const data: Record<string, unknown> = { exportedAt: new Date().toISOString(), schemaVersion: 1, workspaceId };
    for (const table of workspaceTables) {
      data[table] = table === 'workspaces'
        ? db.prepare('SELECT * FROM workspaces WHERE id = ?').all(workspaceId)
        : db.prepare(`SELECT * FROM ${table} WHERE workspace_id = ?`).all(workspaceId);
    }
    data.fitness_types = db.prepare('SELECT * FROM fitness_types').all();
    data.task_links = db.prepare(`
      SELECT task_links.*
      FROM task_links
      JOIN tasks ON tasks.id = task_links.source_task_id
      WHERE tasks.workspace_id = ?
    `).all(workspaceId);
    return { data };
  });
  app.post('/api/v1/workspaces/:workspaceId/backups', async () => {
    const backup = await createSqliteBackup(db, app.config.backupDir);
    return { data: { filename: backup.filename, createdAt: backup.createdAt } };
  });
}
