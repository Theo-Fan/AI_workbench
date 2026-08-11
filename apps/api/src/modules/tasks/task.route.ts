import type { FastifyInstance } from 'fastify';
import { randomUUID } from 'node:crypto';
import { createTaskSchema, taskScopeSchema, updateTaskSchema } from '@ai-workspace/contracts';

const workspaceParam = (params: unknown) => {
  const value = (params as { workspaceId?: unknown })?.workspaceId;
  if (typeof value !== 'string' || !value) throw Object.assign(new Error('workspaceId 无效'), { statusCode: 400 });
  return value;
};

const mapTask = (row: Record<string, unknown>) => ({
  id: row.id,
  workspaceId: row.workspace_id,
  scope: row.scope,
  slot: row.slot,
  text: row.text,
  done: Boolean(row.done),
  canonicalId: row.canonical_id,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
  completedAt: row.completed_at,
  dueDate: row.due_date,
  version: row.version
});

export async function taskRoutes(app: FastifyInstance) {
  const db = app.db;
  app.get('/api/v1/workspaces/:workspaceId/tasks', async (request) => {
    const workspaceId = workspaceParam(request.params);
    const query = request.query as { scope?: string; includeDeleted?: string };
    const scope = query.scope ? taskScopeSchema.parse(query.scope) : undefined;
    const includeDeleted = query.includeDeleted === 'true';
    const rows = db.prepare(`
      SELECT * FROM tasks
      WHERE workspace_id = ? ${scope ? 'AND scope = ?' : ''} ${includeDeleted ? '' : 'AND deleted_at IS NULL'}
      ORDER BY due_date IS NULL, due_date, created_at
    `).all(...(scope ? [workspaceId, scope] : [workspaceId])) as Record<string, unknown>[];
    return { data: rows.map(mapTask) };
  });

  app.post('/api/v1/workspaces/:workspaceId/tasks', async (request, reply) => {
    const workspaceId = workspaceParam(request.params);
    const input = createTaskSchema.parse(request.body);
    const now = new Date().toISOString();
    const id = randomUUID();
    db.prepare(`
      INSERT INTO tasks(id, workspace_id, scope, slot, text, done, canonical_id, created_at, updated_at, due_date)
      VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?, ?)
    `).run(id, workspaceId, input.scope, input.slot ?? null, input.text, input.canonicalId ?? null, now, now, input.dueDate ?? null);
    reply.code(201);
    return { data: { id, workspaceId, ...input, done: false, canonicalId: input.canonicalId ?? null, createdAt: now, updatedAt: now, completedAt: null, version: 0 } };
  });

  app.patch('/api/v1/workspaces/:workspaceId/tasks/:taskId', async (request) => {
    const workspaceId = workspaceParam(request.params);
    const taskId = String((request.params as { taskId?: string }).taskId || '');
    const input = updateTaskSchema.parse(request.body);
    const current = db.prepare('SELECT * FROM tasks WHERE id = ? AND workspace_id = ? AND deleted_at IS NULL').get(taskId, workspaceId) as Record<string, unknown> | undefined;
    if (!current) throw Object.assign(new Error('任务不存在'), { statusCode: 404 });
    if (Number(current.version) !== input.version) throw Object.assign(new Error('任务已被其他客户端更新'), { statusCode: 409, code: 'VERSION_CONFLICT' });
    const now = new Date().toISOString();
    const done = input.done ?? Boolean(current.done);
    db.prepare(`UPDATE tasks SET text = ?, done = ?, due_date = ?, completed_at = ?, updated_at = ?, version = version + 1 WHERE id = ? AND workspace_id = ?`).run(
      input.text ?? current.text, done ? 1 : 0, input.dueDate ?? current.due_date, done ? (Boolean(current.done) ? current.completed_at : now) : null, now, taskId, workspaceId
    );
    const next = db.prepare('SELECT * FROM tasks WHERE id = ?').get(taskId) as Record<string, unknown>;
    return { data: mapTask(next) };
  });

  app.delete('/api/v1/workspaces/:workspaceId/tasks/:taskId', async (request, reply) => {
    const workspaceId = workspaceParam(request.params);
    const taskId = String((request.params as { taskId?: string }).taskId || '');
    const now = new Date().toISOString();
    const result = db.prepare('UPDATE tasks SET deleted_at = ?, updated_at = ?, version = version + 1 WHERE id = ? AND workspace_id = ? AND deleted_at IS NULL').run(now, now, taskId, workspaceId);
    if (!result.changes) throw Object.assign(new Error('任务不存在'), { statusCode: 404 });
    reply.code(204);
    return null;
  });
}
