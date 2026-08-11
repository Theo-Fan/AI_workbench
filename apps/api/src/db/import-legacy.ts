import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { closeDatabase, openDatabase } from './client.js';
import { ensureSchema } from './schema.js';

type LegacyTask = {
  id?: string;
  text?: string;
  done?: boolean;
  canonicalId?: string;
  createdAt?: string;
  updatedAt?: string;
  completedAt?: string;
  dueDate?: string;
};

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const sourcePath = path.resolve(projectRoot, process.env.LEGACY_JSON_PATH || 'data/workspace.json');
const db = openDatabase();
const raw = JSON.parse(fs.readFileSync(sourcePath, 'utf8')) as Record<string, any>;
const now = new Date().toISOString();
const taskGroups: Array<[string, string, string | null]> = [
  ['dashboard', 'dashboard', null],
  ['aiLearn', 'aiLearn', null],
  ['english', 'english', null],
  ['comicStoryboard', 'comicStoryboard', null],
  ['researchPapers', 'researchPapers', null],
  ['dailyPlan.morning', 'dailyPlan', 'morning'],
  ['dailyPlan.afternoon', 'dailyPlan', 'afternoon'],
  ['dailyPlan.evening', 'dailyPlan', 'evening']
];

ensureSchema(db);
db.prepare(`INSERT OR IGNORE INTO workspaces(id, name, schema_version, created_at, updated_at) VALUES ('default', 'AI工作台', 4, ?, ?)`).run(now, now);

const insertTask = db.prepare(`
  INSERT INTO tasks(id, workspace_id, scope, slot, text, done, canonical_id, created_at, updated_at, completed_at, due_date, version)
  VALUES (?, 'default', ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)
  ON CONFLICT(id) DO UPDATE SET scope=excluded.scope, slot=excluded.slot, text=excluded.text,
    done=excluded.done, canonical_id=excluded.canonical_id, updated_at=excluded.updated_at,
    completed_at=excluded.completed_at, due_date=excluded.due_date, deleted_at=NULL
`);
const insertCheckin = db.prepare(`INSERT INTO checkins(id, workspace_id, icon, name, done, updated_at) VALUES (?, 'default', ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET icon=excluded.icon, name=excluded.name, done=excluded.done, updated_at=excluded.updated_at`);
const insertType = db.prepare(`INSERT OR REPLACE INTO fitness_types(id, icon, name, unit) VALUES (?, ?, ?, ?)`);
const insertPlan = db.prepare(`INSERT INTO fitness_plans(id, workspace_id, day, type_id, target, done, version) VALUES (?, 'default', ?, ?, ?, ?, 0) ON CONFLICT(id) DO UPDATE SET day=excluded.day, type_id=excluded.type_id, target=excluded.target, done=excluded.done`);
const insertLog = db.prepare(`INSERT INTO workout_logs(id, workspace_id, date, type_id, duration, calories, note, created_at) VALUES (?, 'default', ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET date=excluded.date, type_id=excluded.type_id, duration=excluded.duration, calories=excluded.calories, note=excluded.note`);
const insertIdea = db.prepare(`INSERT INTO research_ideas(id, workspace_id, title, content, category, tags_json, status, favorite, archived, metadata_json, created_at, updated_at) VALUES (?, 'default', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET title=excluded.title, content=excluded.content, category=excluded.category, tags_json=excluded.tags_json, status=excluded.status, favorite=excluded.favorite, archived=excluded.archived, metadata_json=excluded.metadata_json, updated_at=excluded.updated_at, deleted_at=NULL`);
const insertResearchTodo = db.prepare(`INSERT INTO research_todos(id, workspace_id, idea_id, title, stage, priority, due_date, status, notes, created_at, updated_at, completed_at) VALUES (?, 'default', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET idea_id=excluded.idea_id, title=excluded.title, stage=excluded.stage, priority=excluded.priority, due_date=excluded.due_date, status=excluded.status, notes=excluded.notes, updated_at=excluded.updated_at, completed_at=excluded.completed_at, deleted_at=NULL`);
const insertReadingLog = db.prepare(`INSERT INTO research_reading_logs(id, workspace_id, date, title, tags_json, metadata_json, created_at) VALUES (?, 'default', ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET date=excluded.date, title=excluded.title, tags_json=excluded.tags_json, metadata_json=excluded.metadata_json`);
const insertResource = db.prepare(`INSERT INTO learning_resources(id, workspace_id, domain, title, description, created_at, updated_at) VALUES (?, 'default', ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET title=excluded.title, description=excluded.description, updated_at=excluded.updated_at, deleted_at=NULL`);
const upsertEnglishChallenge = db.prepare(`INSERT INTO english_challenges(workspace_id, current, total, streak, last_completed_date) VALUES ('default', ?, ?, ?, ?) ON CONFLICT(workspace_id) DO UPDATE SET current=excluded.current, total=excluded.total, streak=excluded.streak, last_completed_date=excluded.last_completed_date`);
const insertContentItem = db.prepare(`INSERT INTO content_items(id, workspace_id, kind, group_name, title, description, metadata_json, created_at, updated_at) VALUES (?, 'default', ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET kind=excluded.kind, group_name=excluded.group_name, title=excluded.title, description=excluded.description, metadata_json=excluded.metadata_json, updated_at=excluded.updated_at, deleted_at=NULL`);
const upsertDocument = db.prepare(`INSERT INTO workspace_documents(workspace_id, document_key, data_json, updated_at) VALUES ('default', ?, ?, ?) ON CONFLICT(workspace_id, document_key) DO UPDATE SET data_json=excluded.data_json, updated_at=excluded.updated_at`);
const insertWorkspaceDocument = db.prepare(`INSERT OR IGNORE INTO workspace_documents(workspace_id, document_key, data_json, updated_at) VALUES ('default', 'workspace_document', ?, ?)`);

const importTransaction = db.transaction(() => {
  let imported = 0;
  for (const [pathKey, scope, slot] of taskGroups) {
    const parts = pathKey.split('.');
    let list: unknown = raw.tasks;
    for (const part of parts) list = list && (list as Record<string, unknown>)[part];
    if (!Array.isArray(list)) continue;
    for (const task of list as LegacyTask[]) {
      const text = String(task.text || '').trim();
      if (!text) continue;
      const createdAt = task.createdAt || now;
      const updatedAt = task.updatedAt || createdAt;
      insertTask.run(task.id || `${scope}-${imported}`, scope, slot, text, task.done ? 1 : 0,
        task.canonicalId || null, createdAt, updatedAt, task.completedAt || null, task.dueDate || null);
      imported++;
    }
  }
  for (const checkin of (raw.checkins?.daily || []) as Array<Record<string, unknown>>) {
    if (checkin.id && checkin.name) insertCheckin.run(String(checkin.id), String(checkin.icon || '✅'), String(checkin.name), checkin.done ? 1 : 0, now);
  }
  for (const type of (raw.fitness?.types || []) as Array<Record<string, unknown>>) {
    if (type.id) insertType.run(String(type.id), String(type.icon || '🏅'), String(type.name || '其他'), String(type.unit || ''));
  }
  for (const plan of (raw.fitness?.plan || []) as Array<Record<string, unknown>>) {
    if (plan.id && plan.typeId) insertPlan.run(String(plan.id), String(plan.day || ''), String(plan.typeId), String(plan.target || ''), plan.done ? 1 : 0);
  }
  for (const log of (raw.fitness?.logs || []) as Array<Record<string, unknown>>) {
    if (log.id && log.date && log.typeId) insertLog.run(String(log.id), String(log.date), String(log.typeId), Number(log.duration) || 0, Number(log.calories) || 0, String(log.note || ''), now);
  }
  for (const idea of (raw.learning?.research?.inspirations?.items || []) as Array<Record<string, any>>) {
    if (idea.id && idea.title) insertIdea.run(String(idea.id), String(idea.title), String(idea.content || ''), String(idea.category || ''), JSON.stringify(Array.isArray(idea.tags) ? idea.tags : []), String(idea.status || '待验证'), idea.favorite ? 1 : 0, idea.archived ? 1 : 0, JSON.stringify({ sourceType: idea.sourceType || '', sourceReference: idea.sourceReference || '', project: idea.project || '', occurredAt: idea.occurredAt || '', development: idea.development || {} }), String(idea.createdAt || now), String(idea.updatedAt || idea.createdAt || now));
  }
  for (const todo of (raw.learning?.research?.todos?.items || []) as Array<Record<string, any>>) {
    if (todo.id && todo.title) insertResearchTodo.run(String(todo.id), todo.ideaId || null, String(todo.title), String(todo.stage || ''), String(todo.priority || 'medium'), todo.dueDate || null, String(todo.status || 'todo'), String(todo.notes || ''), String(todo.createdAt || now), String(todo.updatedAt || todo.createdAt || now), todo.completedAt || null);
  }
  for (const log of (raw.learning?.research?.readingLogs || []) as Array<Record<string, any>>) {
    if (log.id && log.date && log.title) insertReadingLog.run(String(log.id), String(log.date), String(log.title), JSON.stringify(Array.isArray(log.tags) ? log.tags : (log.type ? [log.type] : [])), JSON.stringify(log), now);
  }
  for (const resource of (raw.learning?.ai?.resources || []) as Array<Record<string, any>>) {
    if (resource.id && resource.title) insertResource.run(String(resource.id), 'ai', String(resource.title), String(resource.desc || ''), now, now);
  }
  const challenge = raw.learning?.english?.challenge;
  if (challenge) upsertEnglishChallenge.run(Number(challenge.current) || 0, Number(challenge.total) || 100, Number(challenge.streak) || 0, String(challenge.lastCompletedDate || ''));
  for (const [kind, list] of Object.entries(raw.inspirations || {}) as Array<[string, Array<Record<string, any>>]>) {
    for (const item of (Array.isArray(list) ? list : [])) if (item.id && item.title) insertContentItem.run(String(item.id), 'inspiration', kind, String(item.title), String(item.desc || ''), '{}', now, now);
  }
  for (const item of (raw.review?.topContent || []) as Array<Record<string, any>>) if (item.id && item.title) insertContentItem.run(String(item.id), 'review_top', '', String(item.title), String(item.desc || ''), JSON.stringify({ rank: item.rank || '' }), now, now);
  for (const item of (raw.comic?.published || []) as Array<Record<string, any>>) if (item.id && item.title) insertContentItem.run(String(item.id), 'comic_published', '', String(item.title), String(item.desc || ''), '{}', now, now);
  for (const [group, list] of Object.entries(raw.news || {}) as Array<[string, Array<Record<string, any>>]>) for (const item of (Array.isArray(list) ? list : [])) if (item.id && item.title) insertContentItem.run(String(item.id), 'news', group, String(item.title), String(item.desc || ''), '{}', now, now);
  upsertDocument.run('review', JSON.stringify(raw.review || {}), now);
  upsertDocument.run('comic_current', JSON.stringify(raw.comic?.current || {}), now);
  upsertDocument.run('weekly_review', JSON.stringify(raw.weeklyReview || {}), now);
  insertWorkspaceDocument.run(JSON.stringify({ data: raw, version: 0 }), now);
  return imported;
});

console.log(`Imported ${importTransaction()} tasks from ${sourcePath}`);
closeDatabase(db);
