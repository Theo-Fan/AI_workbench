import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const webSourceDir = path.join(root, 'apps/web/src');

function allFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? allFiles(absolute) : [absolute];
  });
}

test('React 前端是独立源码，构建和运行不依赖 creator-workspace.html', () => {
  const app = read('apps/web/src/App.tsx');
  const workspace = read('apps/web/src/WorkspaceApp.tsx');
  const vite = read('apps/web/vite.config.ts');
  const dockerfile = read('Dockerfile.web');
  const packageJson = read('package.json');
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  const zoteroAgent = read('apps/zotero-agent/src/server.js');
  assert.match(app, /<WorkspaceApp\s*\/>/);
  assert.doesNotMatch(workspace, /workspaceRuntimeText|workspaceStyleText|createElement\(['"]script['"]\)/);
  for (const source of [vite, dockerfile, packageJson, runtime, zoteroAgent]) assert.doesNotMatch(source, /creator-workspace\.html|workspace:extract/);
  assert.doesNotMatch(vite, /node:fs|readFileSync|legacyWorkspaceCompat/);
});

test('默认前端入口加载 React 应用', () => {
  const index = read('apps/web/index.html');
  assert.match(index, /<div id="root"><\/div>/);
  assert.match(index, /<script type="module" src="\/src\/main\.tsx"><\/script>/);
  assert.doesNotMatch(index, /workspace\.html|location\.replace|http-equiv="refresh"/);
});

test('React 源码没有 innerHTML 提交或非 TypeScript 业务源文件', () => {
  const files = allFiles(webSourceDir);
  const combined = files.filter(file => /\.(ts|tsx|css)$/.test(file)).map(file => fs.readFileSync(file, 'utf8')).join('\n');
  assert.doesNotMatch(combined, /dangerouslySetInnerHTML/);
  assert.deepEqual(files.filter(file => /\.(jsx|js)$/.test(file)), []);
});

test('工作台页面由独立 React 入口承载', () => {
  const bridge = read('apps/web/src/workspace/runtimeBridge.ts');
  const pageSurface = read('apps/web/src/workspace/PageSurface.tsx');
  const vite = read('apps/web/vite.config.ts');
  const routeBlock = bridge.match(/workspacePageIds\s*=\s*\[([\s\S]*?)\]\s*as const/)?.[1] || '';
  const pageIds = routeBlock.match(/'[^']+'/g) || [];
  assert.equal(pageIds.length, 27);
  assert.ok(pageIds.includes("'english-vocab'"));
  assert.ok(pageIds.includes("'english-listening'"));
  assert.ok(pageIds.includes("'english-reading'"));
  assert.ok(pageIds.includes("'english-writing'"));
  assert.ok(pageIds.includes("'civil-service'"));
  assert.ok(pageIds.includes("'civil-quantity'"));
  assert.ok(pageIds.includes("'civil-logic'"));
  assert.ok(pageIds.includes("'civil-analogy'"));
  assert.ok(pageIds.includes("'civil-graphic'"));
  assert.ok(pageIds.includes("'civil-data'"));
  assert.ok(pageIds.includes("'civil-general'"));
  assert.ok(pageIds.includes("'civil-politics'"));
  assert.ok(pageIds.includes("'civil-essay'"));
  assert.match(pageSurface, /getPageMarkup\(\)/);
  assert.match(pageSurface, /<ReactMarkupPage/);
  assert.doesNotMatch(pageSurface, /\.\/pages\//);
  assert.doesNotMatch(pageSurface, /reactPageIds|state\.pageId\s*===/);
  assert.doesNotMatch(vite, /workspace\.html|legacy/);
});

test('前后端通过 HTTP API 分离，前端开发服务器不承载数据库逻辑', () => {
  const app = read('apps/api/src/app.ts');
  const server = read('apps/api/src/server.ts');
  const documentApi = read('apps/api/src/modules/workspace-document/document.route.ts');
  const config = read('apps/api/src/config.ts');
  const vite = read('apps/web/vite.config.ts');
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  const main = read('apps/web/src/main.tsx');
  const databaseClient = read('apps/api/src/db/client.ts');
  const compose = read('docker-compose.yml');
  assert.match(app, /app\.register\(workspaceDocumentRoutes\)/);
  assert.match(server, /buildApp\(\)/);
  assert.match(documentApi, /\/api\/v1\/workspaces\/:workspaceId\/document/);
  assert.match(config, /WORKSPACE_DB_PATH/);
  assert.match(vite, /'\/api': apiTarget/);
  assert.match(vite, /VITE_API_DEV_TARGET/);
  assert.match(runtime, /workspaceApiUrl\('\/api\/v1\/workspaces\/default\/document'\)/);
  assert.match(main, /requireApi:\s*true/);
  assert.match(main, /VITE_API_BASE_URL/);
  assert.doesNotMatch(runtime, /showDirectoryPicker|indexedDB|creator-workspace-data/);
  assert.doesNotMatch(runtime, /localStorage\.setItem\(STORAGE_KEY/);
  assert.match(runtime, /await WORKSPACE_INIT_PROMISE/);
  assert.match(runtime, /workspaceApiFetch\(WORKSPACE_API_SNAPSHOT_URL/);
  assert.doesNotMatch(vite, /better-sqlite3|workspace\.db|CREATE TABLE/);
  assert.match(databaseClient, /export function openDatabase/);
  assert.doesNotMatch(databaseClient, /export let db|=\s*openDatabase\(\)/);
  assert.match(compose, /api:[\s\S]*WEB_ORIGIN:\s*http:\/\/127\.0\.0\.1:8080,http:\/\/localhost:8080/);
});

test('私密数据默认忽略，脱敏模板与前端默认数据一致', () => {
  const gitignore = read('.gitignore');
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  const template = JSON.parse(read('templates/workspace.default.json'));
  const start = runtime.indexOf('const DEFAULT_DATA = ') + 'const DEFAULT_DATA = '.length;
  const end = runtime.indexOf('\n};\n\n//', start) + 2;
  assert.ok(start > 'const DEFAULT_DATA = '.length);
  assert.ok(end > start);
  assert.deepEqual(template, JSON.parse(runtime.slice(start, end)));
  assert.match(gitignore, /^data\/\*\*/m);
  assert.match(gitignore, /^!data\/\.gitkeep$/m);
  assert.equal(template.meta.deviceId, '');
  assert.equal(template.meta.savedAt, '');
});

test('英语学习默认数据支持完整听力队列与跨日词汇批次', () => {
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  const template = JSON.parse(read('templates/workspace.default.json'));
  const english = template.learning.english;
  const listening = english.listening;
  assert.equal(english.vocab.dailyTarget, 100);
  assert.deepEqual(english.vocab.lastBatchIds, []);
  assert.equal(listening.target, 12);
  assert.equal(listening.queue.length, 12);
  assert.equal(listening.completed, 8);
  assert.deepEqual(listening.queue.map(item => item.status), [
    'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done',
    'next', 'locked', 'locked', 'locked'
  ]);
  assert.match(runtime, /normalizeEnglishListeningState\(english\)/);
  assert.match(runtime, /lastBatchIds/);
  assert.match(runtime, /previousBatchTerms/);
  assert.match(runtime, /always exclude the immediately preceding batch/);
});

test('英语学习快照加载统一走迁移并持久化规范化结果', () => {
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  assert.match(runtime, /function loadWorkspaceSnapshot\(raw\)/);
  assert.match(runtime, /const normalized = loadWorkspaceSnapshot\(result\.data\)/);
  assert.match(runtime, /normalized \|\| purged\) save\(\)/);
  assert.doesNotMatch(runtime, /DATA\s*=\s*mergeDefaults\(result\.data/);
  assert.match(runtime, /remoteVersion/);
  assert.match(runtime, /storage\._apiVersion = remoteVersion/);
});

test('英语学习默认状态的跨日字段与写作去重字段齐全', () => {
  const template = JSON.parse(read('templates/workspace.default.json'));
  const english = template.learning.english;
  assert.equal(english.challenge.streak, 0);
  assert.equal(english.challenge.lastCompletedDate, '');
  assert.equal(english.listening.streak, 0);
  assert.equal(english.listening.lastCompletedDate, '');
  assert.deepEqual(english.writing.completedPromptIds, []);
  assert.equal(english.writing.completed, 0);
  assert.deepEqual(english.history, []);
});

test('英语总览以四项能力数据取代重复模块入口卡', () => {
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  const overviewStart = runtime.indexOf('function englishLearningPageHTML()');
  const overviewEnd = runtime.indexOf('\nfunction englishVocabWordRow', overviewStart);
  const overview = runtime.slice(overviewStart, overviewEnd);
  assert.ok(overviewStart >= 0 && overviewEnd > overviewStart);
  assert.doesNotMatch(overview, /english-module-grid|englishModuleCard/);
  assert.doesNotMatch(overview, /english-stat-strip/);
  assert.match(overview, /english-skill-dashboard/);
  assert.match(overview, /listeningToday/);
  assert.match(overview, /readingToday/);
  assert.match(overview, /english-history-card/);
  assert.match(overview, /近 7 天学习状态/);
  assert.match(overview, /englishRecentStatusHTML/);
  assert.match(runtime, /english-week-chart/);
  assert.doesNotMatch(overview, /englishHistoryListHTML/);
  assert.doesNotMatch(overview, /english-skill-stat-arrow/);
});

test('英语学习四个模块的完成动作都会写入持久化历史', () => {
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  assert.match(runtime, /function normalizeEnglishHistoryState\(english\)/);
  assert.match(runtime, /function seedEnglishHistoryState\(english\)/);
  assert.match(runtime, /function recordEnglishHistory\(module, title, detail, key, sourceId = ''\)/);
  assert.match(runtime, /recordEnglishHistory\('vocab'/);
  assert.match(runtime, /recordEnglishHistory\('listening'/);
  assert.match(runtime, /recordEnglishHistory\('reading'/);
  assert.match(runtime, /recordEnglishHistory\('writing'/);
});

test('公考学习包含完整八科、可持久化迁移和响应式总览', () => {
  const runtime = read('apps/web/src/workspace/generated/workspaceRuntime.ts');
  const styles = read('apps/web/src/styles.css');
  const civilService = JSON.parse(read('templates/workspace.default.json')).learning.civilService;
  assert.deepEqual(civilService.subjects.map(subject => subject.id), [
    'quantity', 'logic', 'analogy', 'graphic', 'data', 'general', 'politics', 'essay'
  ]);
  assert.match(runtime, /ensureCivilServiceState\(data\)/);
  assert.match(runtime, /civilServiceStateChanged/);
  assert.match(runtime, /const subject = subjectId \? study\.subjects\.find\(item => item\.id === subjectId\) : null/);
  assert.match(runtime, /class="civil-progress-mobile"/);
  assert.match(styles, /\.civil-module-tabs \{ display:flex; width:max-content; max-width:100%/);
  assert.match(styles, /@media \(max-width:520px\)[^{]*\{[^}]*\.civil-module-tabs \{ width:100%; \}[^}]*\.civil-progress-chart \{ display:none; \}[^}]*\.civil-progress-mobile \{ display:grid/);
});
