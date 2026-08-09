# Zotero Agent

该包是旧版 `zotero-bridge.js` 的受管运行入口。它只监听 `127.0.0.1:8788`，只读代理 Zotero Local API；不会把 Zotero SQLite 文件暴露给工作台 API 或远程服务。

```bash
npm run dev:zotero-agent
```
