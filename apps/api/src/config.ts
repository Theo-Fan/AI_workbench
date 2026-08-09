import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

const numberEnv = (name: string, fallback: number) => {
  const value = Number.parseInt(process.env[name] || '', 10);
  return Number.isFinite(value) ? value : fallback;
};

export const config = {
  host: process.env.API_HOST || '127.0.0.1',
  port: numberEnv('API_PORT', 3001),
  dbPath: path.resolve(projectRoot, process.env.WORKSPACE_DB_PATH || 'data/workspace.db'),
  backupDir: path.resolve(projectRoot, process.env.WORKSPACE_BACKUP_DIR || 'data/backups'),
  corsOrigin: process.env.WEB_ORIGIN || 'http://127.0.0.1:5173'
};
