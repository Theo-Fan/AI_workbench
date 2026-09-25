import test from 'node:test';
import assert from 'node:assert/strict';

test('新闻聚合按来源隔离失败，并对同一外部条目去重', async () => {
  if (process.versions.modules !== '127') {
    console.warn(`跳过新闻数据库测试：当前 Node ABI ${process.versions.modules}，需要 Node 22 ABI 127`);
    return;
  }
  const Database = (await import('better-sqlite3')).default;
  const { ensureSchema, ensureDefaultWorkspace } = await import('../apps/api/dist/db/schema.js');
  const { isNewsRefreshDue, refreshNewsForWorkspace } = await import('../apps/api/dist/modules/news/news.service.js');
  const db = new Database(':memory:');
  ensureSchema(db);
  ensureDefaultWorkspace(db);

  let failHackerNews = false;
  const mockFetch = async url => {
    const value = String(url);
    if (value.includes('iesdouyin.com')) return new Response(JSON.stringify({ status_code: 0, word_list: [{ word: 'AI 创作', hot_value: 8888, label: 1 }] }), { status: 200, headers: { 'content-type': 'application/json' } });
    if (value.endsWith('/topstories.json')) {
      if (failHackerNews) return new Response('down', { status: 503 });
      return new Response(JSON.stringify([101, 102]), { status: 200 });
    }
    if (value.includes('/item/')) {
      const id = Number(value.match(/item\/(\d+)/)?.[1]);
      return new Response(JSON.stringify({ id, title: `Story ${id}`, url: `https://example.com/${id}`, by: 'author', score: id, descendants: 3, time: 1_700_000_000 }), { status: 200 });
    }
    if (value.includes('api.bilibili.com')) return new Response(JSON.stringify({ code: 0, data: { list: [{ aid: 201, bvid: 'BV1TEST', title: '创作方法', desc: '如何做好内容', pubdate: 1_700_000_000, owner: { name: '创作者' }, stat: { view: 9000, like: 600, reply: 10 } }] } }), { status: 200 });
    return new Response('not found', { status: 404 });
  };

  try {
    const first = await refreshNewsForWorkspace(db, 'default', { trigger: 'manual', fetcher: mockFetch });
    assert.equal(first.status, 'success');
    assert.equal(first.itemCount, 4);
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM news_items WHERE active=1').get().count, 4);
    assert.equal(isNewsRefreshDue(db, 'default', 5 * 60 * 60 * 1000), false);

    const second = await refreshNewsForWorkspace(db, 'default', { trigger: 'manual', fetcher: mockFetch });
    assert.equal(second.status, 'success');
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM news_items').get().count, 4);

    failHackerNews = true;
    const partial = await refreshNewsForWorkspace(db, 'default', { trigger: 'manual', fetcher: mockFetch });
    assert.equal(partial.status, 'partial');
    assert.equal(db.prepare("SELECT active FROM news_items WHERE source_id='hacker-news' LIMIT 1").get().active, 1);
    assert.equal(db.prepare("SELECT status FROM news_source_status WHERE source_id='hacker-news'").get().status, 'degraded');
  } finally {
    db.close();
  }
});
