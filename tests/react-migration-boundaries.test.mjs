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

test('14 个工作台页面由独立 React 入口承载', () => {
  const bridge = read('apps/web/src/workspace/runtimeBridge.ts');
  const pageSurface = read('apps/web/src/workspace/PageSurface.tsx');
  const vite = read('apps/web/vite.config.ts');
  const routeBlock = bridge.match(/workspacePageIds\s*=\s*\[([\s\S]*?)\]\s*as const/)?.[1] || '';
  assert.equal((routeBlock.match(/'[^']+'/g) || []).length, 14);
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
