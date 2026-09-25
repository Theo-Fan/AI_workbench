import { createHash, randomUUID } from 'node:crypto';
import type Database from 'better-sqlite3';

export type NewsCategory = 'tech' | 'creation' | 'hot';

export type NewsItemInput = {
  externalId: string;
  category: NewsCategory;
  title: string;
  summary: string;
  url: string;
  sourceId: string;
  sourceName: string;
  author?: string;
  imageUrl?: string;
  publishedAt?: string | null;
  hotScore?: number;
  rank?: number;
  metadata?: Record<string, unknown>;
};

type SourceAdapter = {
  id: string;
  name: string;
  category: NewsCategory;
  fetch: (fetcher: typeof fetch) => Promise<NewsItemInput[]>;
};

const MAX_RESPONSE_BYTES = 2 * 1024 * 1024;
const SOURCE_TIMEOUT_MS = 12_000;
const activeRefreshes = new Map<string, Promise<NewsRefreshResult>>();

function compactText(value: unknown, limit = 360) {
  return String(value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, limit);
}

function stableKey(value: string) {
  return createHash('sha256').update(value).digest('hex').slice(0, 24);
}

function safeHttpUrl(value: unknown, fallback = '') {
  try {
    const url = new URL(String(value || ''));
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : fallback;
  } catch {
    return fallback;
  }
}

async function fetchJson<T>(fetcher: typeof fetch, url: string, headers: Record<string, string> = {}): Promise<T> {
  const response = await fetcher(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'Personal-Workspace-News/1.0',
      ...headers,
    },
    signal: AbortSignal.timeout(SOURCE_TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const declaredSize = Number(response.headers.get('content-length') || 0);
  if (declaredSize > MAX_RESPONSE_BYTES) throw new Error('响应体过大');
  const body = await response.text();
  if (Buffer.byteLength(body, 'utf8') > MAX_RESPONSE_BYTES) throw new Error('响应体过大');
  try {
    return JSON.parse(body) as T;
  } catch {
    throw new Error('上游返回了无效 JSON');
  }
}

const douyinSource: SourceAdapter = {
  id: 'douyin-hot',
  name: '抖音热榜',
  category: 'hot',
  async fetch(fetcher) {
    const payload = await fetchJson<{ status_code?: number; word_list?: Array<{ word?: string; hot_value?: number; label?: number }> }>(
      fetcher,
      'https://www.iesdouyin.com/web/api/v2/hotsearch/billboard/word/',
      { Referer: 'https://www.douyin.com/hot' },
    );
    if (payload.status_code !== 0 || !Array.isArray(payload.word_list)) throw new Error('热榜数据不可用');
    return payload.word_list.slice(0, 24).map((item, index) => {
      const title = compactText(item.word, 180);
      return {
        externalId: stableKey(title),
        category: 'hot' as const,
        title,
        summary: `抖音热度 ${Number(item.hot_value || 0).toLocaleString('zh-CN')}`,
        url: `https://www.douyin.com/search/${encodeURIComponent(title)}?type=general`,
        sourceId: 'douyin-hot',
        sourceName: '抖音热榜',
        hotScore: Math.max(0, Math.trunc(Number(item.hot_value) || 0)),
        rank: index + 1,
        metadata: { label: item.label || 0 },
      };
    }).filter(item => item.title);
  },
};

const hackerNewsSource: SourceAdapter = {
  id: 'hacker-news',
  name: 'Hacker News',
  category: 'tech',
  async fetch(fetcher) {
    const ids = await fetchJson<number[]>(fetcher, 'https://hacker-news.firebaseio.com/v0/topstories.json');
    if (!Array.isArray(ids)) throw new Error('榜单数据不可用');
    const stories = await Promise.all(ids.slice(0, 14).map(id => fetchJson<Record<string, unknown>>(fetcher, `https://hacker-news.firebaseio.com/v0/item/${id}.json`)));
    return stories.map((story, index) => {
      const externalId = String(story.id || ids[index]);
      const title = compactText(story.title, 240);
      return {
        externalId,
        category: 'tech' as const,
        title,
        summary: `${Number(story.score || 0)} points · ${Number(story.descendants || 0)} comments`,
        url: safeHttpUrl(story.url, `https://news.ycombinator.com/item?id=${externalId}`),
        sourceId: 'hacker-news',
        sourceName: 'Hacker News',
        author: compactText(story.by, 80),
        publishedAt: Number(story.time) ? new Date(Number(story.time) * 1000).toISOString() : null,
        hotScore: Math.max(0, Math.trunc(Number(story.score) || 0)),
        rank: index + 1,
        metadata: { comments: Math.max(0, Math.trunc(Number(story.descendants) || 0)) },
      };
    }).filter(item => item.title);
  },
};

const bilibiliSource: SourceAdapter = {
  id: 'bilibili-popular',
  name: '哔哩哔哩热门',
  category: 'creation',
  async fetch(fetcher) {
    const payload = await fetchJson<{ code?: number; data?: { list?: Array<Record<string, any>> } }>(fetcher, 'https://api.bilibili.com/x/web-interface/popular?pn=1&ps=20');
    if (payload.code !== 0 || !Array.isArray(payload.data?.list)) throw new Error('热门内容不可用');
    return payload.data.list.slice(0, 18).map((item, index) => {
      const externalId = String(item.bvid || item.aid || stableKey(String(item.title || index)));
      const views = Math.max(0, Math.trunc(Number(item.stat?.view) || 0));
      const likes = Math.max(0, Math.trunc(Number(item.stat?.like) || 0));
      return {
        externalId,
        category: 'creation' as const,
        title: compactText(item.title, 240),
        summary: compactText(item.desc, 260) || `${views.toLocaleString('zh-CN')} 播放 · ${likes.toLocaleString('zh-CN')} 点赞`,
        url: item.bvid ? `https://www.bilibili.com/video/${item.bvid}` : `https://www.bilibili.com/video/av${item.aid}`,
        sourceId: 'bilibili-popular',
        sourceName: '哔哩哔哩热门',
        author: compactText(item.owner?.name, 100),
        imageUrl: safeHttpUrl(String(item.pic || '').replace(/^http:/, 'https:')),
        publishedAt: Number(item.pubdate) ? new Date(Number(item.pubdate) * 1000).toISOString() : null,
        hotScore: views,
        rank: index + 1,
        metadata: { likes, replies: Math.max(0, Math.trunc(Number(item.stat?.reply) || 0)), category: compactText(item.tname, 80) },
      };
    }).filter(item => item.title);
  },
};

export const newsSources: ReadonlyArray<SourceAdapter> = [douyinSource, hackerNewsSource, bilibiliSource];

export type NewsRefreshResult = {
  runId: string;
  status: 'success' | 'partial' | 'failed';
  itemCount: number;
  startedAt: string;
  completedAt: string;
  sources: Array<{ id: string; name: string; status: 'healthy' | 'degraded'; itemCount: number; error: string }>;
};

function persistSourceItems(db: Database.Database, workspaceId: string, source: SourceAdapter, items: NewsItemInput[], fetchedAt: string) {
  db.transaction(() => {
    db.prepare('UPDATE news_items SET active=0 WHERE workspace_id=? AND source_id=?').run(workspaceId, source.id);
    const upsert = db.prepare(`
      INSERT INTO news_items(id, workspace_id, source_id, external_id, category, title, summary, url, source_name, author, image_url, published_at, fetched_at, hot_score, rank, active, metadata_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
      ON CONFLICT(workspace_id, source_id, external_id) DO UPDATE SET
        category=excluded.category, title=excluded.title, summary=excluded.summary, url=excluded.url,
        source_name=excluded.source_name, author=excluded.author, image_url=excluded.image_url,
        published_at=excluded.published_at, fetched_at=excluded.fetched_at, hot_score=excluded.hot_score,
        rank=excluded.rank, active=1, metadata_json=excluded.metadata_json
    `);
    for (const item of items) {
      upsert.run(
        `news_${stableKey(`${workspaceId}|${source.id}|${item.externalId}`)}`,
        workspaceId,
        source.id,
        item.externalId,
        item.category,
        item.title,
        item.summary,
        item.url,
        item.sourceName,
        item.author || '',
        item.imageUrl || '',
        item.publishedAt || null,
        fetchedAt,
        Math.max(0, Math.trunc(item.hotScore || 0)),
        Math.max(0, Math.trunc(item.rank || 0)),
        JSON.stringify(item.metadata || {}),
      );
    }
    db.prepare(`
      INSERT INTO news_source_status(workspace_id, source_id, source_name, status, last_attempt_at, last_success_at, item_count, error_message)
      VALUES (?, ?, ?, 'healthy', ?, ?, ?, '')
      ON CONFLICT(workspace_id, source_id) DO UPDATE SET source_name=excluded.source_name, status='healthy',
        last_attempt_at=excluded.last_attempt_at, last_success_at=excluded.last_success_at,
        item_count=excluded.item_count, error_message=''
    `).run(workspaceId, source.id, source.name, fetchedAt, fetchedAt, items.length);
    db.prepare("DELETE FROM news_items WHERE workspace_id=? AND active=0 AND fetched_at < datetime('now', '-14 days')").run(workspaceId);
  })();
}

function persistSourceFailure(db: Database.Database, workspaceId: string, source: SourceAdapter, attemptedAt: string, message: string) {
  db.prepare(`
    INSERT INTO news_source_status(workspace_id, source_id, source_name, status, last_attempt_at, item_count, error_message)
    VALUES (?, ?, ?, 'degraded', ?, 0, ?)
    ON CONFLICT(workspace_id, source_id) DO UPDATE SET source_name=excluded.source_name, status='degraded',
      last_attempt_at=excluded.last_attempt_at, error_message=excluded.error_message
  `).run(workspaceId, source.id, source.name, attemptedAt, compactText(message, 300));
}

async function performRefresh(db: Database.Database, workspaceId: string, trigger: 'startup' | 'schedule' | 'manual', fetcher: typeof fetch): Promise<NewsRefreshResult> {
  const runId = randomUUID();
  const startedAt = new Date().toISOString();
  db.prepare("INSERT INTO news_refresh_runs(id, workspace_id, trigger_type, status, started_at) VALUES (?, ?, ?, 'running', ?)").run(runId, workspaceId, trigger, startedAt);
  const markRefreshing = db.prepare(`
    INSERT INTO news_source_status(workspace_id, source_id, source_name, status, last_attempt_at)
    VALUES (?, ?, ?, 'refreshing', ?)
    ON CONFLICT(workspace_id, source_id) DO UPDATE SET source_name=excluded.source_name, status='refreshing', last_attempt_at=excluded.last_attempt_at
  `);
  db.transaction(() => {
    for (const source of newsSources) markRefreshing.run(workspaceId, source.id, source.name, startedAt);
  })();

  const settled = await Promise.all(newsSources.map(async source => {
    try {
      const items = await source.fetch(fetcher);
      if (!items.length) throw new Error('未抓取到有效内容');
      const fetchedAt = new Date().toISOString();
      persistSourceItems(db, workspaceId, source, items, fetchedAt);
      return { id: source.id, name: source.name, status: 'healthy' as const, itemCount: items.length, error: '' };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      persistSourceFailure(db, workspaceId, source, new Date().toISOString(), message);
      return { id: source.id, name: source.name, status: 'degraded' as const, itemCount: 0, error: message };
    }
  }));

  const healthyCount = settled.filter(source => source.status === 'healthy').length;
  const itemCount = settled.reduce((total, source) => total + source.itemCount, 0);
  const status = healthyCount === newsSources.length ? 'success' : healthyCount > 0 ? 'partial' : 'failed';
  const completedAt = new Date().toISOString();
  const errors = settled.filter(source => source.error).map(source => ({ sourceId: source.id, message: source.error }));
  db.prepare('UPDATE news_refresh_runs SET status=?, completed_at=?, item_count=?, error_json=? WHERE id=?')
    .run(status, completedAt, itemCount, JSON.stringify(errors), runId);
  return { runId, status, itemCount, startedAt, completedAt, sources: settled };
}

export function refreshNewsForWorkspace(
  db: Database.Database,
  workspaceId: string,
  options: { trigger?: 'startup' | 'schedule' | 'manual'; fetcher?: typeof fetch } = {},
) {
  const existing = activeRefreshes.get(workspaceId);
  if (existing) return existing;
  const operation = performRefresh(db, workspaceId, options.trigger || 'manual', options.fetcher || fetch)
    .finally(() => activeRefreshes.delete(workspaceId));
  activeRefreshes.set(workspaceId, operation);
  return operation;
}

export function isNewsRefreshDue(db: Database.Database, workspaceId: string, intervalMs: number, now = Date.now()) {
  const latest = db.prepare("SELECT completed_at FROM news_refresh_runs WHERE workspace_id=? AND status IN ('success', 'partial') AND completed_at IS NOT NULL ORDER BY completed_at DESC LIMIT 1")
    .get(workspaceId) as { completed_at?: string } | undefined;
  if (!latest?.completed_at) return true;
  const completedAt = Date.parse(latest.completed_at);
  return !Number.isFinite(completedAt) || now - completedAt >= intervalMs;
}
