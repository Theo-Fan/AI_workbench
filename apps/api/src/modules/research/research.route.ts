import { randomUUID } from 'node:crypto';
import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { db } from '../../db/client.js';

const createIdeaSchema = z.object({ title: z.string().trim().min(1).max(500), content: z.string().max(20_000).optional(), category: z.string().max(100).optional(), tags: z.array(z.string().max(80)).max(30).optional() });
const updateTodoSchema = z.object({ status: z.enum(['inbox', 'todo', 'doing', 'done']).optional(), priority: z.enum(['low', 'medium', 'high']).optional(), dueDate: z.string().date().nullable().optional(), version: z.number().int().nonnegative() }).refine(value => Object.keys(value).length > 1, '至少更新一个字段');

export async function researchRoutes(app: FastifyInstance) {
  app.get('/api/v1/workspaces/:workspaceId/research', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const ideas = db.prepare('SELECT * FROM research_ideas WHERE workspace_id = ? AND deleted_at IS NULL ORDER BY favorite DESC, updated_at DESC').all(workspaceId).map((row: any) => ({ id: row.id, title: row.title, content: row.content, category: row.category, tags: JSON.parse(row.tags_json), status: row.status, favorite: Boolean(row.favorite), archived: Boolean(row.archived), metadata: JSON.parse(row.metadata_json), createdAt: row.created_at, updatedAt: row.updated_at, version: row.version }));
    const todos = db.prepare('SELECT * FROM research_todos WHERE workspace_id = ? AND deleted_at IS NULL ORDER BY status, due_date IS NULL, due_date, updated_at DESC').all(workspaceId).map((row: any) => ({ id: row.id, ideaId: row.idea_id, title: row.title, stage: row.stage, priority: row.priority, dueDate: row.due_date, status: row.status, notes: row.notes, completedAt: row.completed_at, version: row.version }));
    const readingLogs = db.prepare('SELECT * FROM research_reading_logs WHERE workspace_id = ? ORDER BY date DESC LIMIT 60').all(workspaceId).map((row: any) => ({ id: row.id, date: row.date, title: row.title, tags: JSON.parse(row.tags_json) }));
    return { data: { ideas, todos, readingLogs } };
  });
  app.post('/api/v1/workspaces/:workspaceId/research/ideas', async (request, reply) => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const input = createIdeaSchema.parse(request.body); const now = new Date().toISOString(); const id = randomUUID();
    db.prepare(`INSERT INTO research_ideas(id, workspace_id, title, content, category, tags_json, status, metadata_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, '待验证', '{}', ?, ?)`).run(id, workspaceId, input.title, input.content || '', input.category || '', JSON.stringify(input.tags || []), now, now);
    reply.code(201); return { data: { id, ...input, status: '待验证', createdAt: now, updatedAt: now, version: 0 } };
  });
  app.patch('/api/v1/workspaces/:workspaceId/research/todos/:id', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || ''); const id = String((request.params as { id?: string }).id || ''); const input = updateTodoSchema.parse(request.body);
    const row = db.prepare('SELECT * FROM research_todos WHERE id = ? AND workspace_id = ? AND deleted_at IS NULL').get(id, workspaceId) as any;
    if (!row) throw Object.assign(new Error('科研待办不存在'), { statusCode: 404 });
    if (row.version !== input.version) throw Object.assign(new Error('科研待办已被更新'), { statusCode: 409, code: 'VERSION_CONFLICT' });
    const status = input.status || row.status; const now = new Date().toISOString();
    db.prepare('UPDATE research_todos SET status=?, priority=?, due_date=?, completed_at=?, updated_at=?, version=version+1 WHERE id=?').run(status, input.priority || row.priority, input.dueDate === undefined ? row.due_date : input.dueDate, status === 'done' ? (row.completed_at || now) : null, now, id);
    return { data: { id, status, version: row.version + 1 } };
  });
}
