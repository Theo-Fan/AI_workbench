import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const legacyWorkspaceFile = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../creator-workspace.html');

if (!fs.existsSync(legacyWorkspaceFile)) {
  throw new Error(`旧版工作台文件不存在：${legacyWorkspaceFile}。请确认项目目录未被移动到不完整的位置。`);
}

function legacyWorkspaceCompat(): Plugin {
  const assetNames = ['workspace.html', 'legacy/creator-workspace.html'];
  const serveWorkspace = (request: any, response: any, next: () => void) => {
    if (request.method !== 'GET' && request.method !== 'HEAD') return next();
    if (!fs.existsSync(legacyWorkspaceFile)) {
      response.statusCode = 500;
      response.end('旧版工作台文件不存在，请检查项目目录。');
      return;
    }
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Cache-Control', 'no-store');
    response.end(fs.readFileSync(legacyWorkspaceFile));
  };
  return {
    name: 'legacy-workspace-compat',
    configureServer(server) {
      for (const assetName of assetNames) server.middlewares.use('/' + assetName, serveWorkspace);
    },
    generateBundle() {
      const source = fs.readFileSync(legacyWorkspaceFile);
      for (const assetName of assetNames) this.emitFile({ type: 'asset', fileName: assetName, source });
    }
  };
}

export default defineConfig({
  plugins: [react(), legacyWorkspaceCompat()],
  server: {
    port: 5173,
    proxy: {
      '/api/zotero': 'http://127.0.0.1:8788',
      '/api': 'http://127.0.0.1:3001',
      '/health': 'http://127.0.0.1:3001',
      '/zotero-agent': { target: 'http://127.0.0.1:8788', rewrite: url => url.replace(/^\/zotero-agent/, '') }
    }
  }
});
