import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const envSchema = z.object({
  API_HOST: z.string().trim().min(1).optional(),
  API_PORT: z.coerce.number().int().min(1).max(65535).optional(),
  WEB_ORIGIN: z.string().trim().min(1).refine(value => !value.split(',').some(origin => origin.trim() === '*'), 'WEB_ORIGIN 不允许使用通配符').optional(),
  WORKSPACE_DB_PATH: z.string().trim().min(1).optional(),
  WORKSPACE_BACKUP_DIR: z.string().trim().min(1).optional(),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).optional(),
  API_BODY_LIMIT_BYTES: z.coerce.number().int().min(64 * 1024).max(50 * 1024 * 1024).optional(),
  API_REQUEST_TIMEOUT_MS: z.coerce.number().int().min(0).max(300_000).optional(),
});

const env = envSchema.parse(process.env);
const corsOriginValues = (env.WEB_ORIGIN || 'http://127.0.0.1:5173')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);
if (!corsOriginValues.length) throw new Error('WEB_ORIGIN 至少需要一个有效来源');

export type AppConfig = {
  host: string;
  port: number;
  dbPath: string;
  backupDir: string;
  corsOrigin: string | string[];
  logLevel: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent';
  bodyLimitBytes: number;
  requestTimeoutMs: number;
};

export const config: AppConfig = {
  host: env.API_HOST || '127.0.0.1',
  port: env.API_PORT || 3001,
  dbPath: path.resolve(projectRoot, env.WORKSPACE_DB_PATH || 'data/workspace.db'),
  backupDir: path.resolve(projectRoot, env.WORKSPACE_BACKUP_DIR || 'data/backups'),
  corsOrigin: corsOriginValues,
  logLevel: env.LOG_LEVEL || 'info',
  // Legacy snapshots are capped at 20 MiB; leave headroom for JSON overhead.
  bodyLimitBytes: env.API_BODY_LIMIT_BYTES || 25 * 1024 * 1024,
  requestTimeoutMs: env.API_REQUEST_TIMEOUT_MS ?? 30_000,
};
