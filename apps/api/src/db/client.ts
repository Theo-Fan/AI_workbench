import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';
import { config } from '../config.js';

/** Open one explicitly owned SQLite connection. Importing this module is side-effect free. */
export function openDatabase(dbPath = config.dbPath): Database.Database {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  // Workspace data may contain private notes; keep the database directory and
  // file owner-readable even when the host umask is permissive.
  try { fs.chmodSync(path.dirname(dbPath), 0o700); } catch { /* best effort on filesystems without chmod */ }
  const instance = new Database(dbPath);
  try { fs.chmodSync(dbPath, 0o600); } catch { /* best effort on Windows/readonly mounts */ }
  // Apple's File Provider may rename or evict SQLite WAL sidecar files while
  // the database is open (for example, workspace.db-wal -> workspace 2.db-wal).
  // That leaves SQLite unable to write even though the main database remains
  // healthy. Use the single-file rollback journal for iCloud Drive paths;
  // regular local and Docker paths keep WAL's concurrency benefits.
  const isAppleFileProviderPath = dbPath.includes(`${path.sep}Mobile Documents${path.sep}`);
  instance.pragma(`journal_mode = ${isAppleFileProviderPath ? 'DELETE' : 'WAL'}`);
  instance.pragma('foreign_keys = ON');
  instance.pragma('busy_timeout = 5000');
  return instance;
}

export function closeDatabase(database: Database.Database) {
  if (database.open) database.close();
}
