#!/usr/bin/env node

const fs = require('fs');
const http = require('http');
const path = require('path');
const { URL } = require('url');

const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT || 8788);
const ZOTERO_API = 'http://127.0.0.1:23119/api';
const ROOT = __dirname;
const MAX_LIMIT = 100;

function sendJson(response, status, body) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  response.end(JSON.stringify(body));
}

function sendText(response, status, body, contentType = 'text/plain; charset=utf-8') {
  response.writeHead(status, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  response.end(body);
}

function safeLimit(value, fallback = 50) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(1, Math.min(parsed, MAX_LIMIT));
}

function safeStart(value) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return 0;
  return Math.max(0, parsed);
}

function zoteroErrorMessage(status) {
  if (status === 403) return 'Zotero 本机 API 未授权。请在 Zotero 设置 → 高级中启用“允许同一台电脑上的其他应用与 Zotero 通信”。';
  if (status === 404) return '未找到对应的 Zotero 数据。';
  return `Zotero Local API 返回 HTTP ${status}。`;
}

async function zoteroRequest(apiPath, params = {}, parseJson = true) {
  const target = new URL(`${ZOTERO_API}${apiPath}`);
  target.searchParams.set('v', '3');
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') target.searchParams.set(key, String(value));
  }

  let upstream;
  try {
    upstream = await fetch(target, {
      headers: { 'Zotero-API-Version': '3' },
      signal: AbortSignal.timeout(5000)
    });
  } catch (error) {
    const message = error.name === 'TimeoutError'
      ? '连接 Zotero Local API 超时。请确认 Zotero 正在运行。'
      : '无法连接 Zotero Local API。请确认 Zotero 正在运行，并已启用本机 API。';
    const failure = new Error(message);
    failure.statusCode = 503;
    throw failure;
  }

  if (!upstream.ok) {
    const failure = new Error(zoteroErrorMessage(upstream.status));
    failure.statusCode = upstream.status;
    throw failure;
  }

  if (!parseJson) return { headers: upstream.headers };

  const text = await upstream.text();
  try {
    return { data: text ? JSON.parse(text) : null, headers: upstream.headers };
  } catch {
    const failure = new Error('Zotero Local API 返回了无法识别的数据。');
    failure.statusCode = 502;
    throw failure;
  }
}

function zoteroGet(apiPath, params = {}) {
  return zoteroRequest(apiPath, params, true);
}

function compactItem(item) {
  const data = item.data || {};
  return {
    key: item.key,
    version: item.version,
    itemType: data.itemType,
    title: data.title || data.noteTitle || '未命名条目',
    date: data.date || '',
    creators: Array.isArray(data.creators) ? data.creators.map(creator => creator.name || [creator.firstName, creator.lastName].filter(Boolean).join(' ')).filter(Boolean) : [],
    abstractNote: data.abstractNote || '',
    tags: Array.isArray(data.tags) ? data.tags.map(tag => tag.tag).filter(Boolean) : [],
    collections: Array.isArray(data.collections) ? data.collections : [],
    url: data.url || ''
  };
}

function compactChild(item) {
  const data = item.data || {};
  if (data.itemType === 'note') {
    return {
      key: item.key,
      type: 'note',
      title: data.noteTitle || '文献笔记',
      note: data.note || '',
      tags: Array.isArray(data.tags) ? data.tags.map(tag => tag.tag).filter(Boolean) : []
    };
  }
  return {
    key: item.key,
    type: data.itemType || 'attachment',
    title: data.title || data.filename || '附件',
    contentType: data.contentType || '',
    url: data.url || ''
  };
}

function serveWorkspace(response, filename) {
  const allowed = new Map([
    ['/', 'creator-workspace.html'],
    ['/creator-workspace.html', 'creator-workspace.html'],
    ['/README.md', 'README.md'],
    ['/assets/vendor/mathjax/tex-mml-chtml.js', 'assets/vendor/mathjax/tex-mml-chtml.js'],
    ['/assets/vendor/mathjax/tex-mml-svg.js', 'assets/vendor/mathjax/tex-mml-svg.js']
  ]);
  const target = allowed.get(filename);
  if (!target) return false;
  const fullPath = path.join(ROOT, target);
  try {
    const body = fs.readFileSync(fullPath);
    const contentType = target.endsWith('.html')
      ? 'text/html; charset=utf-8'
      : target.endsWith('.js')
        ? 'application/javascript; charset=utf-8'
        : 'text/markdown; charset=utf-8';
    response.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'unsafe-inline'; script-src 'self' 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'"
    });
    response.end(body);
    return true;
  } catch (error) {
    sendJson(response, 500, { error: '无法读取工作台页面。', detail: error.message });
    return true;
  }
}

async function handleApi(requestUrl, response) {
  if (requestUrl.pathname === '/api/zotero/health') {
    const result = await zoteroRequest('/', {}, false);
    return sendJson(response, 200, {
      ok: true,
      apiVersion: result.headers.get('zotero-api-version') || '3',
      serverId: result.headers.get('zotero-server-id') || ''
    });
  }

  if (requestUrl.pathname === '/api/zotero/collections') {
    const result = await zoteroGet('/users/0/collections/top');
    const collections = (result.data || []).map(item => ({
      key: item.key,
      name: item.data && item.data.name ? item.data.name : '未命名收藏夹',
      parentCollection: item.data && item.data.parentCollection ? item.data.parentCollection : false
    }));
    return sendJson(response, 200, { collections });
  }

  if (requestUrl.pathname === '/api/zotero/items') {
    const collection = requestUrl.searchParams.get('collection');
    const query = requestUrl.searchParams.get('q');
    const limit = safeLimit(requestUrl.searchParams.get('limit'));
    const start = safeStart(requestUrl.searchParams.get('start'));
    const apiPath = collection
      ? `/users/0/collections/${encodeURIComponent(collection)}/items/top`
      : '/users/0/items/top';
    const result = await zoteroGet(apiPath, {
      limit,
      start,
      sort: 'dateModified',
      direction: 'desc',
      q: query || undefined,
      qmode: query ? 'everything' : undefined
    });
    const items = (result.data || []).map(compactItem);
    const totalHeader = Number.parseInt(result.headers.get('total-results'), 10);
    const total = Number.isFinite(totalHeader) ? totalHeader : start + items.length;
    return sendJson(response, 200, {
      items,
      total,
      start,
      limit,
      hasMore: start + items.length < total
    });
  }

  const itemMatch = requestUrl.pathname.match(/^\/api\/zotero\/items\/([A-Z0-9]{8})(?:\/(children))?$/);
  if (itemMatch) {
    const [, key, children] = itemMatch;
    const result = await zoteroGet(`/users/0/items/${key}${children ? '/children' : ''}`);
    if (children) return sendJson(response, 200, { children: (result.data || []).map(compactChild) });
    return sendJson(response, 200, { item: compactItem(result.data) });
  }

  return sendJson(response, 404, { error: '未找到接口。' });
}

const server = http.createServer(async (request, response) => {
  if (request.method !== 'GET') return sendJson(response, 405, { error: '仅支持只读 GET 请求。' });

  const requestUrl = new URL(request.url, `http://${HOST}:${PORT}`);
  try {
    if (requestUrl.pathname.startsWith('/api/zotero/')) return await handleApi(requestUrl, response);
    if (serveWorkspace(response, requestUrl.pathname)) return;
    return sendText(response, 404, 'Not found');
  } catch (error) {
    return sendJson(response, error.statusCode || 502, { error: error.message || 'Zotero 桥接服务发生错误。' });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`AI工作台 Zotero bridge 已启动：http://${HOST}:${PORT}/creator-workspace.html`);
  console.log(`仅代理只读请求到 ${ZOTERO_API}，且只监听 ${HOST}。`);
});
