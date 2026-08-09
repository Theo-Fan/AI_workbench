import { db } from './client.js';

export function ensureSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      version INTEGER PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS workspaces (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      schema_version INTEGER NOT NULL DEFAULT 4,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      scope TEXT NOT NULL,
      slot TEXT,
      text TEXT NOT NULL,
      done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)),
      canonical_id TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      completed_at TEXT,
      due_date TEXT,
      version INTEGER NOT NULL DEFAULT 0,
      deleted_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_tasks_workspace_scope ON tasks(workspace_id, scope, deleted_at);
    CREATE INDEX IF NOT EXISTS idx_tasks_workspace_due_date ON tasks(workspace_id, due_date);
    CREATE TABLE IF NOT EXISTS task_links (
      source_task_id TEXT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
      mirror_task_id TEXT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
      PRIMARY KEY (source_task_id, mirror_task_id)
    );
    CREATE TABLE IF NOT EXISTS audit_events (
      id TEXT PRIMARY KEY,
      workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      entity_type TEXT NOT NULL,
      entity_id TEXT NOT NULL,
      action TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_audit_workspace_created ON audit_events(workspace_id, created_at);
    CREATE TABLE IF NOT EXISTS checkins (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      icon TEXT NOT NULL, name TEXT NOT NULL, done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)), updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS fitness_types (id TEXT PRIMARY KEY, icon TEXT NOT NULL, name TEXT NOT NULL, unit TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS fitness_plans (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      day TEXT NOT NULL, type_id TEXT NOT NULL REFERENCES fitness_types(id), target TEXT NOT NULL DEFAULT '',
      done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)), version INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS workout_logs (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      date TEXT NOT NULL, type_id TEXT NOT NULL REFERENCES fitness_types(id), duration INTEGER NOT NULL DEFAULT 0,
      calories INTEGER NOT NULL DEFAULT 0, note TEXT NOT NULL DEFAULT '', created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_workout_logs_workspace_date ON workout_logs(workspace_id, date);
    CREATE TABLE IF NOT EXISTS research_ideas (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      title TEXT NOT NULL, content TEXT NOT NULL DEFAULT '', category TEXT NOT NULL DEFAULT '', tags_json TEXT NOT NULL DEFAULT '[]',
      status TEXT NOT NULL DEFAULT '待验证', favorite INTEGER NOT NULL DEFAULT 0, archived INTEGER NOT NULL DEFAULT 0,
      metadata_json TEXT NOT NULL DEFAULT '{}', created_at TEXT NOT NULL, updated_at TEXT NOT NULL, version INTEGER NOT NULL DEFAULT 0, deleted_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_research_ideas_workspace_updated ON research_ideas(workspace_id, archived, deleted_at, updated_at DESC);
    CREATE TABLE IF NOT EXISTS research_todos (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      idea_id TEXT REFERENCES research_ideas(id) ON DELETE SET NULL, title TEXT NOT NULL, stage TEXT NOT NULL DEFAULT '',
      priority TEXT NOT NULL DEFAULT 'medium', due_date TEXT, status TEXT NOT NULL DEFAULT 'todo', notes TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL, updated_at TEXT NOT NULL, completed_at TEXT, version INTEGER NOT NULL DEFAULT 0, deleted_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_research_todos_workspace_status ON research_todos(workspace_id, status, due_date, deleted_at);
    CREATE TABLE IF NOT EXISTS research_reading_logs (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      date TEXT NOT NULL, title TEXT NOT NULL, tags_json TEXT NOT NULL DEFAULT '[]', metadata_json TEXT NOT NULL DEFAULT '{}', created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_research_reading_logs_workspace_date ON research_reading_logs(workspace_id, date DESC);
    CREATE TABLE IF NOT EXISTS learning_resources (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      domain TEXT NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL DEFAULT '', created_at TEXT NOT NULL, updated_at TEXT NOT NULL, deleted_at TEXT
    );
    CREATE TABLE IF NOT EXISTS english_challenges (
      workspace_id TEXT PRIMARY KEY REFERENCES workspaces(id) ON DELETE CASCADE,
      current INTEGER NOT NULL DEFAULT 0, total INTEGER NOT NULL DEFAULT 100, streak INTEGER NOT NULL DEFAULT 0, last_completed_date TEXT NOT NULL DEFAULT ''
    );
    CREATE TABLE IF NOT EXISTS content_items (
      id TEXT PRIMARY KEY, workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
      kind TEXT NOT NULL, group_name TEXT NOT NULL DEFAULT '', title TEXT NOT NULL, description TEXT NOT NULL DEFAULT '',
      metadata_json TEXT NOT NULL DEFAULT '{}', created_at TEXT NOT NULL, updated_at TEXT NOT NULL, deleted_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_content_items_workspace_kind ON content_items(workspace_id, kind, group_name, deleted_at);
    CREATE TABLE IF NOT EXISTS workspace_documents (
      workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE, document_key TEXT NOT NULL,
      data_json TEXT NOT NULL, updated_at TEXT NOT NULL, PRIMARY KEY(workspace_id, document_key)
    );
  `);
  db.prepare(`INSERT OR IGNORE INTO schema_migrations(version, applied_at) VALUES (?, ?)`).run(1, new Date().toISOString());
}
