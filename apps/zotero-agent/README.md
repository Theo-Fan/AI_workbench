# Zotero Agent

该包由 `src/server.js` 提供独立运行入口。它只监听 `127.0.0.1:8788`，只读代理 Zotero Local API；不提供前端页面，也不会把 Zotero SQLite 文件暴露给工作台 API 或远程服务。

```bash
npm run dev:zotero-agent
```
