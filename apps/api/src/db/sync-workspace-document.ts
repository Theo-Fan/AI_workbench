import type Database from 'better-sqlite3';

type JsonObject = Record<string, any>;

const taskGroups: Array<[string, string, string | null]> = [
  ['dashboard', 'dashboard', null],
  ['aiLearn', 'aiLearn', null],
  ['english', 'english', null],
  ['comicStoryboard', 'comicStoryboard', null],
  ['researchPapers', 'researchPapers', null],
  ['researchTodo', 'researchTodo', null],
  ['dailyPlan.morning', 'dailyPlan', 'morning'],
  ['dailyPlan.afternoon', 'dailyPlan', 'afternoon'],
  ['dailyPlan.evening', 'dailyPlan', 'evening'],
];

const arrayAt = (value: unknown, path: string): JsonObject[] => {
  let current = value as any;
  for (const part of path.split('.')) current = current?.[part];
  return Array.isArray(current) ? current.filter(item => item && typeof item === 'object' && !Array.isArray(item)) : [];
};
const objectAt = (value: unknown, path: string): JsonObject | null => {
  let current = value as any;
  for (const part of path.split('.')) current = current?.[part];
  return current && typeof current === 'object' && !Array.isArray(current) ? current : null;
};
const requiredString = (item: JsonObject, key: string, entity: string) => {
  const value = String(item[key] ?? '').trim();
  if (!value) throw Object.assign(new Error(`${entity}缺少${key}`), { statusCode: 400, code: 'INVALID_WORKSPACE_DOCUMENT' });
  return value;
};
const optionalString = (value: unknown, fallback = '') => value == null ? fallback : String(value);
const nullableString = (value: unknown) => {
  const result = optionalString(value).trim();
  return result || null;
};
const nonnegativeInteger = (value: unknown) => Math.max(0, Math.trunc(Number(value) || 0));
const jsonArray = (value: unknown) => JSON.stringify(Array.isArray(value) ? value : []);

/**
 * Rebuild all normalized, workspace-owned projections from the authoritative
 * workspace document. The caller must run this inside the same transaction as
 * the document write so a failed projection can never leave a partial save.
 */
export function syncNormalizedTablesFromDocument(
  db: Database.Database,
  workspaceId: string,
  data: JsonObject,
  documentVersion: number,
  now = new Date().toISOString(),
) {
  const existingTasks = new Map((db.prepare('SELECT * FROM tasks WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingCheckins = new Map((db.prepare('SELECT * FROM checkins WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingPlans = new Map((db.prepare('SELECT * FROM fitness_plans WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingLogs = new Map((db.prepare('SELECT * FROM workout_logs WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingIdeas = new Map((db.prepare('SELECT * FROM research_ideas WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingTodos = new Map((db.prepare('SELECT * FROM research_todos WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingReadingLogs = new Map((db.prepare('SELECT * FROM research_reading_logs WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingResources = new Map((db.prepare('SELECT * FROM learning_resources WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const existingContent = new Map((db.prepare('SELECT * FROM content_items WHERE workspace_id = ?').all(workspaceId) as JsonObject[]).map(row => [String(row.id), row]));
  const taskIds = db.prepare('SELECT id FROM tasks WHERE workspace_id = ?').all(workspaceId) as Array<{ id: string }>;
  if (taskIds.length) {
    const placeholders = taskIds.map(() => '?').join(',');
    db.prepare(`DELETE FROM task_links WHERE source_task_id IN (${placeholders}) OR mirror_task_id IN (${placeholders})`)
      .run(...taskIds.map(row => row.id), ...taskIds.map(row => row.id));
  }

  // The document is authoritative. Replacing each projection also guarantees
  // that items deleted in the UI disappear from the corresponding API table.
  for (const table of ['tasks', 'checkins', 'fitness_plans', 'workout_logs', 'research_todos', 'research_ideas', 'research_reading_logs', 'learning_resources', 'english_challenges', 'content_items']) {
    db.prepare(`DELETE FROM ${table} WHERE workspace_id = ?`).run(workspaceId);
  }

  const insertTask = db.prepare(`INSERT INTO tasks(id, workspace_id, scope, slot, text, done, canonical_id, created_at, updated_at, completed_at, due_date, version) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  const tasksByCanonicalId = new Map<string, string[]>();
  for (const [path, scope, slot] of taskGroups) {
    for (const task of arrayAt(data.tasks, path)) {
      const id = requiredString(task, 'id', '任务');
      const text = requiredString(task, 'text', `任务 ${id}`);
      const previous = existingTasks.get(id);
      const createdAt = optionalString(task.createdAt, optionalString(previous?.created_at, now));
      insertTask.run(id, workspaceId, scope, slot, text, task.done ? 1 : 0, nullableString(task.canonicalId), createdAt,
        optionalString(task.updatedAt, optionalString(previous?.updated_at, createdAt)), nullableString(task.completedAt ?? previous?.completed_at), nullableString(task.dueDate ?? previous?.due_date), task.version == null ? nonnegativeInteger(previous?.version) : nonnegativeInteger(task.version));
      const canonicalId = nullableString(task.canonicalId);
      if (canonicalId) tasksByCanonicalId.set(canonicalId, [...(tasksByCanonicalId.get(canonicalId) || []), id]);
    }
  }
  const insertTaskLink = db.prepare('INSERT OR IGNORE INTO task_links(source_task_id, mirror_task_id) VALUES (?, ?)');
  for (const ids of tasksByCanonicalId.values()) {
    for (const sourceId of ids) for (const mirrorId of ids) if (sourceId !== mirrorId) insertTaskLink.run(sourceId, mirrorId);
  }

  const insertCheckin = db.prepare('INSERT INTO checkins(id, workspace_id, icon, name, done, updated_at) VALUES (?, ?, ?, ?, ?, ?)');
  for (const checkin of arrayAt(data, 'checkins.daily')) {
    const id = requiredString(checkin, 'id', '打卡项');
    insertCheckin.run(id, workspaceId, optionalString(checkin.icon, '✅'), requiredString(checkin, 'name', `打卡项 ${id}`), checkin.done ? 1 : 0, optionalString(checkin.updatedAt, optionalString(existingCheckins.get(id)?.updated_at, now)));
  }

  const upsertType = db.prepare(`INSERT INTO fitness_types(id, icon, name, unit) VALUES (?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET icon=excluded.icon, name=excluded.name, unit=excluded.unit`);
  for (const type of arrayAt(data, 'fitness.types')) {
    const id = requiredString(type, 'id', '健身类型');
    upsertType.run(id, optionalString(type.icon, '🏅'), optionalString(type.name, '其他'), optionalString(type.unit));
  }
  const knownTypes = new Set((db.prepare('SELECT id FROM fitness_types').all() as Array<{ id: string }>).map(row => row.id));
  const insertPlan = db.prepare('INSERT INTO fitness_plans(id, workspace_id, day, type_id, target, done, version) VALUES (?, ?, ?, ?, ?, ?, ?)');
  for (const plan of arrayAt(data, 'fitness.plan')) {
    const id = requiredString(plan, 'id', '健身计划');
    const typeId = requiredString(plan, 'typeId', `健身计划 ${id}`);
    if (!knownTypes.has(typeId)) throw Object.assign(new Error(`健身计划 ${id} 引用了不存在的类型 ${typeId}`), { statusCode: 400, code: 'INVALID_WORKSPACE_DOCUMENT' });
    insertPlan.run(id, workspaceId, optionalString(plan.day), typeId, optionalString(plan.target), plan.done ? 1 : 0, plan.version == null ? nonnegativeInteger(existingPlans.get(id)?.version) : nonnegativeInteger(plan.version));
  }
  const insertLog = db.prepare('INSERT INTO workout_logs(id, workspace_id, date, type_id, duration, calories, note, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
  for (const log of arrayAt(data, 'fitness.logs')) {
    const id = requiredString(log, 'id', '训练记录');
    const typeId = requiredString(log, 'typeId', `训练记录 ${id}`);
    if (!knownTypes.has(typeId)) throw Object.assign(new Error(`训练记录 ${id} 引用了不存在的类型 ${typeId}`), { statusCode: 400, code: 'INVALID_WORKSPACE_DOCUMENT' });
    insertLog.run(id, workspaceId, requiredString(log, 'date', `训练记录 ${id}`), typeId, nonnegativeInteger(log.duration), nonnegativeInteger(log.calories), optionalString(log.note), optionalString(log.createdAt, optionalString(existingLogs.get(id)?.created_at, now)));
  }

  const ideas = arrayAt(data, 'learning.research.inspirations.items');
  const ideaIds = new Set(ideas.map(idea => requiredString(idea, 'id', '科研灵感')));
  const insertIdea = db.prepare(`INSERT INTO research_ideas(id, workspace_id, title, content, category, tags_json, status, favorite, archived, metadata_json, created_at, updated_at, version) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  for (const idea of ideas) {
    const id = requiredString(idea, 'id', '科研灵感');
    const previous = existingIdeas.get(id);
    const createdAt = optionalString(idea.createdAt, optionalString(previous?.created_at, now));
    insertIdea.run(id, workspaceId, requiredString(idea, 'title', `科研灵感 ${id}`), optionalString(idea.content), optionalString(idea.category), jsonArray(idea.tags), optionalString(idea.status, '待验证'), idea.favorite ? 1 : 0, idea.archived ? 1 : 0,
      JSON.stringify({ sourceType: optionalString(idea.sourceType), sourceReference: optionalString(idea.sourceReference), project: optionalString(idea.project), occurredAt: optionalString(idea.occurredAt), development: idea.development && typeof idea.development === 'object' ? idea.development : {} }), createdAt, optionalString(idea.updatedAt, optionalString(previous?.updated_at, createdAt)), idea.version == null ? nonnegativeInteger(previous?.version) : nonnegativeInteger(idea.version));
  }
  const insertTodo = db.prepare(`INSERT INTO research_todos(id, workspace_id, idea_id, title, stage, priority, due_date, status, notes, created_at, updated_at, completed_at, version) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  for (const todo of arrayAt(data, 'learning.research.todos.items')) {
    const id = requiredString(todo, 'id', '科研待办');
    const previous = existingTodos.get(id);
    const createdAt = optionalString(todo.createdAt, optionalString(previous?.created_at, now));
    const ideaId = nullableString(todo.ideaId);
    insertTodo.run(id, workspaceId, ideaId && ideaIds.has(ideaId) ? ideaId : null, requiredString(todo, 'title', `科研待办 ${id}`), optionalString(todo.stage), optionalString(todo.priority, 'medium'), nullableString(todo.dueDate), optionalString(todo.status, 'todo'), optionalString(todo.notes), createdAt, optionalString(todo.updatedAt, optionalString(previous?.updated_at, createdAt)), nullableString(todo.completedAt ?? previous?.completed_at), todo.version == null ? nonnegativeInteger(previous?.version) : nonnegativeInteger(todo.version));
  }
  const insertReadingLog = db.prepare('INSERT INTO research_reading_logs(id, workspace_id, date, title, tags_json, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)');
  for (const log of arrayAt(data, 'learning.research.readingLogs')) {
    const id = requiredString(log, 'id', '阅读记录');
    insertReadingLog.run(id, workspaceId, requiredString(log, 'date', `阅读记录 ${id}`), requiredString(log, 'title', `阅读记录 ${id}`), jsonArray(Array.isArray(log.tags) ? log.tags : (log.type ? [log.type] : [])), JSON.stringify(log), optionalString(log.createdAt, optionalString(existingReadingLogs.get(id)?.created_at, now)));
  }

  const insertResource = db.prepare('INSERT INTO learning_resources(id, workspace_id, domain, title, description, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)');
  for (const resource of arrayAt(data, 'learning.ai.resources')) {
    const id = requiredString(resource, 'id', '学习资源');
    const previous = existingResources.get(id);
    const createdAt = optionalString(resource.createdAt, optionalString(previous?.created_at, now));
    insertResource.run(id, workspaceId, 'ai', requiredString(resource, 'title', `学习资源 ${id}`), optionalString(resource.desc ?? resource.description), createdAt, optionalString(resource.updatedAt, optionalString(previous?.updated_at, createdAt)));
  }
  const challenge = objectAt(data, 'learning.english.challenge');
  if (challenge) db.prepare('INSERT INTO english_challenges(workspace_id, current, total, streak, last_completed_date) VALUES (?, ?, ?, ?, ?)').run(workspaceId, nonnegativeInteger(challenge.current), nonnegativeInteger(challenge.total) || 100, nonnegativeInteger(challenge.streak), optionalString(challenge.lastCompletedDate));

  const insertContent = db.prepare('INSERT INTO content_items(id, workspace_id, kind, group_name, title, description, metadata_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
  const addContent = (items: JsonObject[], kind: string, group: string, metadata: (item: JsonObject) => JsonObject = () => ({})) => {
    for (const item of items) {
      const id = requiredString(item, 'id', '内容项');
      const previous = existingContent.get(id);
      const createdAt = optionalString(item.createdAt, optionalString(previous?.created_at, now));
      insertContent.run(id, workspaceId, kind, group, requiredString(item, 'title', `内容项 ${id}`), optionalString(item.desc ?? item.description), JSON.stringify(metadata(item)), createdAt, optionalString(item.updatedAt, optionalString(previous?.updated_at, createdAt)));
    }
  };
  for (const group of ['ideas', 'trends', 'sources']) addContent(arrayAt(data, `inspirations.${group}`), 'inspiration', group);
  addContent(arrayAt(data, 'review.topContent'), 'review_top', '', item => ({ rank: optionalString(item.rank) }));
  addContent(arrayAt(data, 'comic.published'), 'comic_published', '');
  for (const group of ['tech', 'creation', 'hotlist']) addContent(arrayAt(data, `news.${group}`), 'news', group);

  const upsertDocument = db.prepare(`INSERT INTO workspace_documents(workspace_id, document_key, data_json, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(workspace_id, document_key) DO UPDATE SET data_json=excluded.data_json, updated_at=excluded.updated_at`);
  upsertDocument.run(workspaceId, 'review', JSON.stringify(data.review || {}), now);
  upsertDocument.run(workspaceId, 'comic_current', JSON.stringify(data.comic?.current || {}), now);
  upsertDocument.run(workspaceId, 'weekly_review', JSON.stringify(data.weeklyReview || {}), now);
  db.prepare(`INSERT INTO workspace_sync_state(workspace_id, document_version, synced_at) VALUES (?, ?, ?) ON CONFLICT(workspace_id) DO UPDATE SET document_version=excluded.document_version, synced_at=excluded.synced_at`).run(workspaceId, documentVersion, now);
}

export function reconcileWorkspaceDocuments(db: Database.Database) {
  const rows = db.prepare(`SELECT workspace_id, data_json FROM workspace_documents WHERE document_key = 'workspace_document'`).all() as Array<{ workspace_id: string; data_json: string }>;
  for (const row of rows) {
    let stored: { data?: JsonObject; version?: number };
    try { stored = JSON.parse(row.data_json); } catch { continue; }
    if (!stored?.data || !Number.isInteger(stored.version)) continue;
    const state = db.prepare('SELECT document_version FROM workspace_sync_state WHERE workspace_id = ?').get(row.workspace_id) as { document_version: number } | undefined;
    if (state?.document_version === stored.version) continue;
    db.transaction(() => syncNormalizedTablesFromDocument(db, row.workspace_id, stored.data!, stored.version!))();
  }
}

export function mutateWorkspaceDocument(
  db: Database.Database,
  workspaceId: string,
  mutate: (data: JsonObject) => void,
) {
  return db.transaction(() => {
    const row = db.prepare(`
      SELECT data_json FROM workspace_documents
      WHERE workspace_id = ? AND document_key IN ('workspace_document', 'legacy_snapshot')
      ORDER BY CASE document_key WHEN 'workspace_document' THEN 0 ELSE 1 END
      LIMIT 1
    `).get(workspaceId) as { data_json?: string } | undefined;
    if (!row?.data_json) throw Object.assign(new Error('工作区文档不存在'), { statusCode: 409, code: 'WORKSPACE_DOCUMENT_MISSING' });
    let stored: { data?: JsonObject; version?: number };
    try { stored = JSON.parse(row.data_json); } catch { throw Object.assign(new Error('工作区文档损坏'), { statusCode: 500, code: 'WORKSPACE_DOCUMENT_CORRUPT' }); }
    if (!stored.data || !Number.isInteger(stored.version)) throw Object.assign(new Error('工作区文档格式无效'), { statusCode: 500, code: 'WORKSPACE_DOCUMENT_CORRUPT' });
    mutate(stored.data);
    const nextVersion = Number(stored.version) + 1;
    const now = new Date().toISOString();
    syncNormalizedTablesFromDocument(db, workspaceId, stored.data, nextVersion, now);
    db.prepare(`
      INSERT INTO workspace_documents(workspace_id, document_key, data_json, updated_at)
      VALUES (?, 'workspace_document', ?, ?)
      ON CONFLICT(workspace_id, document_key) DO UPDATE SET data_json=excluded.data_json, updated_at=excluded.updated_at
    `).run(workspaceId, JSON.stringify({ data: stored.data, version: nextVersion }), now);
    db.prepare('UPDATE workspaces SET updated_at = ? WHERE id = ?').run(now, workspaceId);
    return { data: stored.data, version: nextVersion, now };
  })();
}
