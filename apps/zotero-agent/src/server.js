#!/usr/bin/env node

const http = require('http');
const { URL } = require('url');

const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT || 8788);
const ZOTERO_API = 'http://127.0.0.1:23119/api';
const WEATHER_FORECAST_API = 'https://api.open-meteo.com/v1/forecast';
const WEATHER_GEOCODE_API = 'https://geocoding-api.open-meteo.com/v1/search';
const MAX_LIMIT = 100;
const MAX_KNOWLEDGE_KEYS = 24;
const knowledgeTextCache = new Map();

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

async function weatherRequest(endpoint, params = {}) {
  const target = new URL(endpoint);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') target.searchParams.set(key, String(value));
  }
  let upstream;
  try {
    upstream = await fetch(target, { signal: AbortSignal.timeout(8000) });
  } catch (error) {
    const failure = new Error(error.name === 'TimeoutError' ? '天气服务请求超时。' : '无法连接天气服务。');
    failure.statusCode = 503;
    throw failure;
  }
  if (!upstream.ok) {
    const failure = new Error(`天气服务返回 HTTP ${upstream.status}。`);
    failure.statusCode = upstream.status;
    throw failure;
  }
  const text = await upstream.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    const failure = new Error('天气服务返回了无法识别的数据。');
    failure.statusCode = 502;
    throw failure;
  }
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

function normalizePaperText(value) {
  return String(value || '')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function paperSection(content, headingPattern, nextHeadingPattern, maxLength) {
  const text = normalizePaperText(content);
  const match = headingPattern.exec(text);
  if (!match) return '';
  const start = match.index + match[0].length;
  const tail = text.slice(start, start + maxLength * 2);
  const next = nextHeadingPattern.exec(tail);
  return normalizePaperText(tail.slice(0, next ? next.index : maxLength)).slice(0, maxLength);
}

function extractKnowledgeSections(content) {
  const abstractText = paperSection(
    content,
    /(?:^|\n)\s*(?:abstract|摘要)\s*[:：]?\s*/im,
    /(?:^|\n)\s*(?:keywords?|index terms?|1\.?\s+introduction|introduction|关键词|引言)\s*[:：]?\s*/im,
    3600
  );
  const introductionText = paperSection(
    content,
    /(?:^|\n)\s*(?:(?:1|i)\.?\s+)?(?:introduction|引言)\s*[:：]?\s*/im,
    /(?:^|\n)\s*(?:(?:2|ii)\.?\s+)?(?:related work|background|preliminar(?:y|ies)|method(?:s|ology)?|problem formulation|literature review|研究背景|相关工作|方法)\s*[:：]?\s*/im,
    9000
  );
  return { abstractText, introductionText };
}

async function knowledgeTextForItem(key) {
  const cached = knowledgeTextCache.get(key);
  if (cached && Date.now() - cached.cachedAt < 10 * 60 * 1000) return cached.value;
  const result = { key, abstractText: '', introductionText: '', source: 'metadata' };
  try {
    const children = await zoteroGet(`/users/0/items/${key}/children`);
    const attachments = (children.data || [])
      .filter(item => item && item.data && item.data.itemType === 'attachment')
      .sort((a, b) => {
        const score = item => /pdf/i.test(item.data.contentType || '') ? 2 : /html/i.test(item.data.contentType || '') ? 1 : 0;
        return score(b) - score(a);
      });
    for (const attachment of attachments.slice(0, 3)) {
      try {
        const fulltext = await zoteroGet(`/users/0/items/${attachment.key}/fulltext`);
        const fullContent = normalizePaperText(fulltext.data && fulltext.data.content);
        const sections = extractKnowledgeSections(fullContent);
        if (!sections.introductionText && fullContent) sections.introductionText = fullContent.slice(0, 9000);
        if (!sections.abstractText && !sections.introductionText) continue;
        Object.assign(result, sections, { source: 'indexed-fulltext', attachmentKey: attachment.key });
        break;
      } catch (error) {
        if (error.statusCode !== 404) throw error;
      }
    }
  } catch (error) {
    if (error.statusCode !== 404) console.warn(`knowledge text unavailable for ${key}:`, error.message);
  }
  knowledgeTextCache.set(key, { value: result, cachedAt: Date.now() });
  return result;
}

async function handleApi(requestUrl, response) {
  if (requestUrl.pathname === '/api/weather/forecast') {
    const latitude = Number(requestUrl.searchParams.get('latitude'));
    const longitude = Number(requestUrl.searchParams.get('longitude'));
    if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90 || !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
      return sendJson(response, 400, { error: '请提供有效的天气坐标。' });
    }
    const data = await weatherRequest(WEATHER_FORECAST_API, {
      latitude,
      longitude,
      current: requestUrl.searchParams.get('current') || undefined,
      daily: requestUrl.searchParams.get('daily') || undefined,
      timezone: requestUrl.searchParams.get('timezone') || 'auto',
      forecast_days: Math.max(1, Math.min(7, Number.parseInt(requestUrl.searchParams.get('forecast_days'), 10) || 4))
    });
    return sendJson(response, 200, data);
  }

  if (requestUrl.pathname === '/api/weather/geocode') {
    const name = String(requestUrl.searchParams.get('name') || '').trim();
    if (!name || name.length > 120) return sendJson(response, 400, { error: '请提供有效的城市名称。' });
    const data = await weatherRequest(WEATHER_GEOCODE_API, {
      name,
      count: Math.max(1, Math.min(10, Number.parseInt(requestUrl.searchParams.get('count'), 10) || 1)),
      language: requestUrl.searchParams.get('language') || 'zh',
      format: requestUrl.searchParams.get('format') || 'json',
      latitude: requestUrl.searchParams.get('latitude') || undefined,
      longitude: requestUrl.searchParams.get('longitude') || undefined
    });
    return sendJson(response, 200, data);
  }

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

  if (requestUrl.pathname === '/api/zotero/knowledge-text') {
    const keys = Array.from(new Set(String(requestUrl.searchParams.get('keys') || '')
      .split(',')
      .map(key => key.trim().toUpperCase())
      .filter(key => /^[A-Z0-9]{8}$/.test(key))))
      .slice(0, MAX_KNOWLEDGE_KEYS);
    if (!keys.length) return sendJson(response, 400, { error: '请提供有效的 Zotero 文献 key。' });
    const documents = await Promise.all(keys.map(knowledgeTextForItem));
    return sendJson(response, 200, { documents });
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
    if (requestUrl.pathname.startsWith('/api/zotero/') || requestUrl.pathname.startsWith('/api/weather/')) return await handleApi(requestUrl, response);
    if (requestUrl.pathname === '/' || requestUrl.pathname === '/health') return sendJson(response, 200, { status: 'ok', service: 'zotero-agent' });
    return sendText(response, 404, 'Not found');
  } catch (error) {
    return sendJson(response, error.statusCode || 502, { error: error.message || 'Zotero 桥接服务发生错误。' });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`AI工作台 Zotero Agent 已启动：http://${HOST}:${PORT}/health`);
  console.log(`仅代理只读请求到 ${ZOTERO_API}，且只监听 ${HOST}。`);
});
