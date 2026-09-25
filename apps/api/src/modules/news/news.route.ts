import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { isNewsRefreshDue, newsSources, refreshNewsForWorkspace } from './news.service.js';

const querySchema = z.object({
  category: z.enum(['all', 'tech', 'creation', 'hot']).optional().default('all'),
  source: z.string().trim().max(80).optional(),
  q: z.string().trim().max(120).optional(),
  limit: z.coerce.number().int().min(1).max(120).optional().default(80),
});

const parseMetadata = (value: string) => {
  try { return JSON.parse(value || '{}'); } catch { return {}; }
};

export async function newsRoutes(app: FastifyInstance) {
  app.get('/api/v1/workspaces/:workspaceId/news', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const query = querySchema.parse(request.query || {});
    const conditions = ['workspace_id=?', 'active=1'];
    const values: Array<string | number> = [workspaceId];
    if (query.category !== 'all') { conditions.push('category=?'); values.push(query.category); }
    if (query.source) { conditions.push('source_id=?'); values.push(query.source); }
    if (query.q) {
      conditions.push('(title LIKE ? ESCAPE \'\\\' OR summary LIKE ? ESCAPE \'\\\')');
      const escaped = `%${query.q.replace(/[\\%_]/g, '\\$&')}%`;
      values.push(escaped, escaped);
    }
    values.push(query.limit);
    const rows = app.db.prepare(`
      SELECT * FROM news_items WHERE ${conditions.join(' AND ')}
      ORDER BY CASE category WHEN 'hot' THEN 0 WHEN 'tech' THEN 1 ELSE 2 END,
        CASE WHEN rank=0 THEN 9999 ELSE rank END, hot_score DESC, fetched_at DESC
      LIMIT ?
    `).all(...values) as Array<Record<string, any>>;
    const sourceRows = app.db.prepare('SELECT * FROM news_source_status WHERE workspace_id=? ORDER BY source_name').all(workspaceId) as Array<Record<string, any>>;
    const sourceMap = new Map(sourceRows.map(row => [row.source_id, row]));
    const latestRun = app.db.prepare('SELECT * FROM news_refresh_runs WHERE workspace_id=? ORDER BY started_at DESC LIMIT 1').get(workspaceId) as Record<string, any> | undefined;
    const intervalMs = app.config.newsRefreshIntervalMs || 5 * 60 * 60 * 1000;
    const lastSyncedAt = sourceRows.map(row => row.last_success_at).filter(Boolean).sort().at(-1) || null;
    return {
      data: {
        items: rows.map(row => ({
          id: row.id,
          sourceId: row.source_id,
          sourceName: row.source_name,
          category: row.category,
          title: row.title,
          summary: row.summary,
          url: row.url,
          author: row.author,
          imageUrl: row.image_url,
          publishedAt: row.published_at,
          fetchedAt: row.fetched_at,
          hotScore: row.hot_score,
          rank: row.rank,
          metadata: parseMetadata(row.metadata_json),
        })),
        sources: newsSources.map(source => {
          const row = sourceMap.get(source.id);
          return {
            id: source.id,
            name: source.name,
            category: source.category,
            status: row?.status || 'idle',
            lastAttemptAt: row?.last_attempt_at || null,
            lastSuccessAt: row?.last_success_at || null,
            itemCount: row?.item_count || 0,
            error: row?.error_message || '',
          };
        }),
        sync: {
          status: latestRun?.status || 'idle',
          lastSyncedAt,
          nextSyncAt: lastSyncedAt ? new Date(Date.parse(lastSyncedAt) + intervalMs).toISOString() : null,
          intervalHours: intervalMs / 3_600_000,
          due: isNewsRefreshDue(app.db, workspaceId, intervalMs),
        },
      },
    };
  });

  app.post('/api/v1/workspaces/:workspaceId/news/refresh', async request => {
    const workspaceId = String((request.params as { workspaceId?: string }).workspaceId || '');
    const result = await refreshNewsForWorkspace(app.db, workspaceId, { trigger: 'manual' });
    return { data: result };
  });
}
