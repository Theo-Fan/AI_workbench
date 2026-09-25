import type { FastifyInstance } from 'fastify';
import { isNewsRefreshDue, refreshNewsForWorkspace } from './news.service.js';

export function startNewsScheduler(app: FastifyInstance) {
  const intervalMs = app.config.newsRefreshIntervalMs || 5 * 60 * 60 * 1000;
  let stopped = false;
  let running = false;

  const tick = async (trigger: 'startup' | 'schedule') => {
    if (stopped || running) return;
    running = true;
    try {
      const workspaces = app.db.prepare('SELECT id FROM workspaces').all() as Array<{ id: string }>;
      for (const workspace of workspaces) {
        if (!isNewsRefreshDue(app.db, workspace.id, intervalMs)) continue;
        const result = await refreshNewsForWorkspace(app.db, workspace.id, { trigger });
        if (result.status === 'failed') app.log.warn({ workspaceId: workspace.id }, 'All news sources failed');
      }
    } catch (error) {
      app.log.error({ err: error }, 'News scheduler failed');
    } finally {
      running = false;
    }
  };

  void tick('startup');
  // Check due state frequently so a restart shortly before the five-hour
  // boundary does not postpone the next refresh by another full interval.
  const dueCheckIntervalMs = Math.min(intervalMs, 5 * 60 * 1000);
  const timer = setInterval(() => { void tick('schedule'); }, dueCheckIntervalMs);
  timer.unref?.();
  return () => { stopped = true; clearInterval(timer); };
}
