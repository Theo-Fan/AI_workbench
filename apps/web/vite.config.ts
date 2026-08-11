import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'), '');
  const apiTarget = env.VITE_API_DEV_TARGET || `http://127.0.0.1:${env.API_PORT || '3001'}`;
  const zoteroTarget = env.VITE_ZOTERO_DEV_TARGET || 'http://127.0.0.1:8788';
  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api/zotero': zoteroTarget,
        '/api': apiTarget,
        '/health': apiTarget,
        '/ready': apiTarget,
        '/zotero-agent': { target: zoteroTarget, rewrite: url => url.replace(/^\/zotero-agent/, '') }
      }
    }
  };
});
