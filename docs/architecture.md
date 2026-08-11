# AI 工作台架构

## 目标与边界

项目采用严格前后端分离架构。默认入口 `/` 加载 React 应用；前端源码、构建和运行不读取根目录的旧版 HTML 文件。

## 运行组件

- `apps/web`：Vite 静态前端。开发期将 `/api` 代理到 Fastify；生产期由反向代理或同域网关转发。
- `apps/api`：Fastify API。`app.ts` 负责创建应用、装配路由、注入数据库和统一错误协议；`server.ts` 只负责监听端口与进程退出。
- `data/workspace.db`：SQLite 主数据；备份写入 `data/backups`。数据库不由前端进程直接访问。
- `apps/zotero-agent`：可选本机只读集成，由 `src/server.js` 独立启动，与正式工作区 API 分离。
- `packages/contracts`：前后端共享的 Zod 请求和响应类型。
- `templates/workspace.default.json`：脱敏、可提交的首次启动数据；`db:seed` 只能向空工作区写入它。

## 数据路径

```text
Browser/Vite static UI
        |
        | HTTP /api/*
        v
Fastify application factory
        |-- request/CORS/timeout boundary
        |-- route-level database dependency
        |
        v
SQLite + backup directory
```

正式 React 工作台使用 `/api/v1/workspaces/default/document` 作为当前权威工作区文档。API 不可用时停止初始化并显示错误；前端没有文件夹、IndexedDB 或 `localStorage` 工作区回退路径。后端会兼容读取早期数据库中的 `legacy_snapshot` 键，并在下次写入时自动迁移到 `workspace_document`。

同源生产部署由 Nginx/网关把 `/api`、`/health` 和 `/ready` 反向代理到 API。独立域名部署时，构建 React 前端时设置 `VITE_API_BASE_URL`，并在 API 侧将 `WEB_ORIGIN` 设为精确的前端来源。所有正式工作台请求（快照、备份、天气、CCFDDL 和 Zotero 代理）都使用该 API 基地址。

## 关键约束

1. 前端源码不得直接依赖 `better-sqlite3`、数据库文件路径或 SQL。
2. API 入口不得在模块导入时监听端口；测试通过 `buildApp()` 和 Fastify `inject()` 运行。路由从 `app.db` 获得数据连接，不自行导入全局单例。
3. 环境变量由 Zod 校验；非法端口和日志级别必须启动失败。
4. API 错误统一为 `{ error: { code, message, details? } }`。
5. Web 构建不得读取、复制或执行项目根目录中的旧版 HTML 文件。
6. 项目固定 Node.js 22.x；`better-sqlite3` 必须使用同一 Node ABI 安装和测试。
7. `/health` 用于存活检查；`/ready` 会实际执行 SQLite 探针，供容器调度与反向代理健康检查使用。
8. API 默认限制请求体 25 MiB、请求/连接 30 秒；可用 `API_BODY_LIMIT_BYTES`、`API_REQUEST_TIMEOUT_MS` 调整。前后端跨域部署时以 `WEB_ORIGIN`（逗号分隔白名单）和构建时 `VITE_API_BASE_URL` 配对配置。
9. Vite 开发代理默认跟随 `API_PORT`；需要连接另一台开发 API 时使用 `VITE_API_DEV_TARGET`，Zotero 代理使用 `VITE_ZOTERO_DEV_TARGET`。
10. SQLite schema 创建和迁移登记在同一事务中执行；新增表/索引时应继续增加迁移版本，不要在路由处理器中执行 DDL。
11. `scripts/dev.mjs` 会拒绝非 Node 22 运行时；`npm run dev:node22` 提供自包含启动入口，避免 `better-sqlite3` ABI 不一致。
12. `data/**` 始终视为私密运行数据；默认模板必须位于 `templates/`，且不得包含设备标识、保存时间或用户记录。

## 常用验证

```bash
nvm use
npm run typecheck
npm run build:web
npm run build:api
npm test
npm run test:api
```

## 生产运行建议

- 保持 API 位于受信任网络；当前项目没有多用户认证或租户授权层。
- 把 `WEB_ORIGIN` 设置为确切的前端来源，避免使用通配符；跨域前端构建使用 `VITE_API_BASE_URL`。
- SQLite、备份目录及备份文件会以尽力而为的 `0700/0600` 权限创建；在 Windows 或受限挂载卷上由宿主文件系统决定最终权限。
- 发布产物只包含 Vite 从 `apps/web` 构建的 React 静态资产。

## 回滚

架构层代码可按文件回滚。数据库操作前保留 `data/workspace.db` 与 `data/backups/`，不要通过删除数据库或重置整个工作树回退代码。
