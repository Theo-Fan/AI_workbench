import { config } from '../config.js';
import { closeDatabase, openDatabase } from './client.js';
import { createSqliteBackup } from './backup-utils.js';

const database = openDatabase();
try {
  const backup = await createSqliteBackup(database, config.backupDir);
  console.log(`SQLite 备份已创建：${backup.destination}`);
} finally {
  closeDatabase(database);
}
