import fs from 'node:fs';
import path from 'node:path';
import { config } from '../config.js';
import { closeDatabase, db } from './client.js';

fs.mkdirSync(config.backupDir, { recursive: true });
const filename = `workspace-${new Date().toISOString().replace(/[:.]/g, '-')}.db`;
const destination = path.join(config.backupDir, filename);
await db.backup(destination);
const backups = fs.readdirSync(config.backupDir).filter(name => name.endsWith('.db')).sort().reverse();
for (const obsolete of backups.slice(10)) fs.unlinkSync(path.join(config.backupDir, obsolete));
console.log(`SQLite 备份已创建：${destination}`);
closeDatabase();
