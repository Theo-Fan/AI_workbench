import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import type Database from 'better-sqlite3';

const defaultRetention = 10;

function restrictPermissions(filePath: string, mode: number) {
  try { fs.chmodSync(filePath, mode); } catch { /* best effort on Windows/readonly mounts */ }
}

/**
 * Create a consistent SQLite backup and publish it atomically.
 * A temporary file prevents the API or a user from observing a partial copy.
 */
export async function createSqliteBackup(database: Database.Database, backupDir: string, retention = defaultRetention) {
  fs.mkdirSync(backupDir, { recursive: true });
  restrictPermissions(backupDir, 0o700);

  const createdAt = new Date().toISOString();
  const stem = `workspace-${createdAt.replace(/[:.]/g, '-')}`;
  let filename = `${stem}.db`;
  let destination = path.join(backupDir, filename);
  let suffix = 0;
  while (fs.existsSync(destination)) {
    suffix += 1;
    filename = `${stem}-${suffix}.db`;
    destination = path.join(backupDir, filename);
  }

  const temporary = path.join(backupDir, `.${filename}.${randomUUID()}.tmp`);
  try {
    await database.backup(temporary);
    restrictPermissions(temporary, 0o600);
    fs.renameSync(temporary, destination);
    restrictPermissions(destination, 0o600);
  } catch (error) {
    try { fs.unlinkSync(temporary); } catch { /* no-op: preserve the original error */ }
    throw error;
  }

  const backups = fs.readdirSync(backupDir)
    .filter(name => name.endsWith('.db'))
    .sort()
    .reverse();
  for (const obsolete of backups.slice(Math.max(1, retention))) {
    fs.unlinkSync(path.join(backupDir, obsolete));
  }
  return { filename, destination, createdAt };
}
