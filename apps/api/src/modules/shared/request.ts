import type { FastifyRequest } from 'fastify';
import type Database from 'better-sqlite3';

export function workspaceIdFrom(request: FastifyRequest): string {
  const value = (request.params as { workspaceId?: unknown } | undefined)?.workspaceId;
  // Workspace IDs are persisted as path segments. Reject separators/control
  // characters up front so malformed IDs cannot be logged or propagated to
  // downstream integrations as ambiguous identifiers.
  if (typeof value !== 'string' || value.length < 1 || value.length > 128 || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(value)) {
    throw Object.assign(new Error('workspaceId 无效'), { statusCode: 400, code: 'INVALID_WORKSPACE_ID' });
  }
  return value;
}

export function assertWorkspaceExists(database: Database.Database, workspaceId: string): void {
  if (!database.prepare('SELECT 1 FROM workspaces WHERE id = ?').get(workspaceId)) {
    throw Object.assign(new Error('工作区不存在'), { statusCode: 404, code: 'WORKSPACE_NOT_FOUND' });
  }
}

/** Parse persisted JSON defensively so one corrupt document cannot break an API response. */
export function parseJsonObject(value: unknown, fallback: Record<string, unknown> = {}): Record<string, unknown> {
  if (typeof value !== 'string') return fallback;
  try {
    const parsed: unknown = JSON.parse(value);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as Record<string, unknown> : fallback;
  } catch { return fallback; }
}

export function parseJsonArray(value: unknown, fallback: unknown[] = []): unknown[] {
  if (typeof value !== 'string') return fallback;
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch { return fallback; }
}
