import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';
import { config } from '../config.js';

export const db: Database.Database = (() => {
  fs.mkdirSync(path.dirname(config.dbPath), { recursive: true });
  const instance = new Database(config.dbPath);
  instance.pragma('journal_mode = WAL');
  instance.pragma('foreign_keys = ON');
  instance.pragma('busy_timeout = 5000');
  return instance;
})();

export function closeDatabase() {
  if (db.open) db.close();
}
