# AI 工作台

一个面向个人创作者的本地优先工作台，用来统一管理日常计划、健身、学习、科研、内容创作和阶段复盘。

项目采用 React + Fastify + SQLite 的严格前后端分离架构。React 前端只通过 HTTP API 读写工作区，Fastify 是 SQLite 和备份目录的唯一访问者。前端源码、构建和运行不依赖根目录的任何旧版 HTML 文件。

> 推荐新用户使用 Docker：安装 Docker Desktop 后，执行两条命令即可运行。

## 快速启动

### macOS 一键启动

在 Finder 中双击项目根目录的 `start-workspace.command`。脚本会检查依赖、使用 Node.js 22 启动前端和 API，并在就绪后自动打开浏览器。

需要关闭时，双击同目录的 `stop-workspace.command`。关闭脚本只处理当前项目中监听 `3001` 和 `5173` 端口的进程，不会关闭其他 Node.js 服务。

### Docker（推荐）

从 Docker Desktop 官方网站安装适合自己系统的版本：

- macOS：安装后打开 Docker Desktop，等待状态显示为 Running。
- Windows：安装 Docker Desktop，并启用 WSL 2。
- Linux：安装 Docker Engine 和 Docker Compose Plugin。

不需要单独安装 Node.js、npm 或 SQLite。

在终端或 Windows PowerShell 执行：

    git clone <你的 GitHub 仓库地址>
    cd AI工作台
    docker compose up --build -d

打开：

    http://127.0.0.1:8080

停止服务：

    docker compose down

查看日志：

    docker compose logs -f

Compose 会自动创建 data 目录和 SQLite 表；如果首次启动时存在 data/workspace.json，则会自动导入旧版数据。数据库和备份保存在项目目录 data 中，因此删除容器不会删除数据。

### 不使用 Docker

环境要求：

- Node.js 22.x（项目固定版本，better-sqlite3 需要匹配 Node ABI）；
- npm 10 或更高版本；
- Chrome、Edge 或其他现代浏览器。

检查版本：

    node --version
    npm --version

在项目根目录执行：

    npm install
    npm run setup
    npm run dev

打开：

    http://127.0.0.1:5173

npm run setup 会检查 Node 版本、创建或升级 SQLite schema、检测并导入旧版 JSON。npm run dev 会同时启动 API 和前端，按 Ctrl+C 可停止两个服务。

如果当前终端不是 Node 22，可以直接运行 `npm run dev:node22`；该命令会使用 Node 22 启动开发服务，避免 `better-sqlite3` 原生 ABI 不匹配导致数据库无法连接。

### 分开启动

排查问题时可以使用两个终端。

终端一：

    npm run db:migrate
    npm run dev:api

终端二：

    npm --workspace apps/web exec vite -- --host 127.0.0.1

API 地址为 http://127.0.0.1:3001，健康检查为 http://127.0.0.1:3001/health，前端地址为 http://127.0.0.1:5173。

## 首次启动与示例数据

个人运行数据不会提交到 GitHub。以下文件默认被 .gitignore 忽略：

    data/workspace.db
    data/workspace.db-wal
    data/workspace.db-shm
    data/workspace.json
    data/backups/*

从 GitHub 克隆干净仓库时：

1. 没有 data/workspace.json：`npm run setup` 或 Docker 会在空数据库中安装 `templates/workspace.default.json` 脱敏示例模板。
2. 如果私下复制了旧版 JSON 到 data：运行 npm run setup 或 Docker 首次启动会自动导入。

`data/` 中的所有运行数据默认禁止提交；唯一可提交的默认数据是独立的脱敏模板 [templates/workspace.default.json](templates/workspace.default.json)。`npm run db:seed` 仅在数据库没有工作区文档时写入模板，不会覆盖个人数据。

导入脚本是幂等的，可以重复执行：

    npm run db:import

不要把真实任务、科研笔记、健身记录或 Zotero 信息提交到公开仓库。

## 日常操作

### 工作台入口

| 地址 | 说明 |
| --- | --- |
| http://127.0.0.1:5173 | 本地 Node 开发模式 |
| http://127.0.0.1:8080 | Docker 模式 |
| / | React 工作台正式入口（推荐） |

### 快捷键

- Cmd/Ctrl + K：全局搜索和命令面板；
- N：快速新建任务；
- 1 至 9：切换常用页面；
- ?：查看快捷键帮助；
- 任务文字双击：编辑任务；
- 聚焦任务复选框后按 Space 或 Enter：切换完成状态。

## SQLite 数据、备份与恢复

## 数据存储模式

工作台只使用 SQLite API。API 不可用时页面会明确报错，不会切换到文件夹、IndexedDB 或 `localStorage` 保存工作区。跨设备迁移通过 JSON 导出/导入或 SQLite 备份完成。

### 数据文件

    data/
    ├── workspace.db       # SQLite 主数据库
    ├── workspace.db-wal   # SQLite WAL 临时文件
    ├── workspace.db-shm   # SQLite 共享内存临时文件
    ├── workspace.json     # 旧版 JSON 导入源，可选
    └── backups/           # SQLite 或 JSON 备份

SQLite 使用 WAL、外键约束和 busy timeout。不要在 API 运行时用文本编辑器修改 db 文件，也不要让 iCloud、Dropbox 或 Git 同步正在运行的 SQLite 文件。

### 创建备份

在工作台的数据管理页面点击“导出”，可获得 JSON 备份。

也可以创建一致性 SQLite 快照：

    npm run db:backup

备份写入 data/backups，并自动保留最新 10 份。API 方式：

    curl -X POST http://127.0.0.1:3001/api/v1/workspaces/default/backups

Docker 模式下备份同样位于项目目录的 data/backups。

### 从 SQLite 备份恢复

恢复前先停止 API：

    docker compose down
    # 或在本地模式按 Ctrl+C 停止 npm run dev

然后将文件名替换为实际备份：

    mv data/workspace.db data/workspace-before-restore.db
    cp data/backups/workspace-2026-08-07T10-00-00-000Z.db data/workspace.db
    rm -f data/workspace.db-wal data/workspace.db-shm
    npm run db:migrate

确认无误后重新启动：

    docker compose up -d
    # 或 npm run dev

恢复前的旧文件会保留为 workspace-before-restore.db。不要删除 data/.workspace-initialized，否则 Docker 下次启动可能再次导入 JSON。

### JSON 导入规则

- JSON 导出适合跨设备、跨版本迁移；
- SQLite 备份适合完整恢复；
- 超过 20 MB、结构错误或包含不安全字段的导入会被拒绝；
- 导入失败不会覆盖当前工作区。

## 架构说明

    浏览器
      │
      ├─ Vite/Nginx 前端
      │    └─ React + TypeScript 静态资产
      ├─ Fastify API
      │    ├─ 工作区文档 API（乐观锁）
      │    ├─ 任务、健身、科研、学习、内容 API
      │    ├─ 天气代理
      │    └─ 导出与 SQLite 备份
      ├─ SQLite
      │    ├─ 规范化业务表
      │    └─ workspace_documents.workspace_document
      └─ Zotero Agent
           └─ 本机只读访问 Zotero Local API

技术栈：Node.js 22.x、Fastify 5、TypeScript、SQLite、better-sqlite3、Zod、Vite、Nginx、Docker Compose。

### 项目目录

```text
AI工作台/
├── apps/
│   ├── web/                 # React/Vite 前端
│   │   ├── public/          # 构建时原样复制的静态资源
│   │   └── src/workspace/    # 工作台界面和独立运行时
│   ├── api/                 # Fastify API、SQLite 和备份
│   └── zotero-agent/        # 可选的 Zotero 本机只读代理
├── packages/contracts/    # 共享 Zod 契约和 TypeScript 类型
├── templates/             # 可提交的脱敏默认数据模板
├── data/                  # 本机数据库与备份（不提交）
├── infra/                 # Nginx 生产反向代理
├── scripts/               # 开发和初始化脚本
├── tests/                 # 契约、API 和架构回归测试
├── Dockerfile.api
├── Dockerfile.web
└── docker-compose.yml
```

根目录不再保留旧版 HTML、重复的页面实现或未被使用的空包。正式界面唯一入口是 `apps/web/src/main.tsx`。

### 为什么使用完整快照？

工作区包含科研阶段编辑器、图谱状态、回收站和历史记录等复合状态，因此当前以有版本号的工作区文档作为权威数据：

1. React 前端独立维护所有页面与交互；
2. API 负责统一持久化、备份和版本冲突；
3. 规范化领域表继续为后续服务提供数据；
4. 后续拆分必须通过逐项等价回归。

## Zotero 集成

Zotero 是可选功能，不影响其他页面。

1. 在 Zotero 设置的高级选项中开启允许其他应用通信。
2. 在项目根目录运行：

    npm run dev:zotero-agent

3. 在工作台进入科研 → 文献，点击“连接 Zotero”。

Agent 只监听 127.0.0.1:8788，只读代理 Zotero Local API，不读取或修改 Zotero SQLite 文件，也不会向远程服务上传附件全文。Docker 前端无法直接访问宿主机 Zotero，需要 Zotero 时请使用本地 Node 模式。

## 配置项

复制环境变量模板：

    cp .env.example .env

普通用户不需要修改这些值。

| 变量 | 默认值 | 作用 |
| --- | --- | --- |
| API_HOST | 127.0.0.1 | API 监听地址，Docker 使用 0.0.0.0 |
| API_PORT | 3001 | API 端口 |
| WORKSPACE_DB_PATH | ./data/workspace.db | SQLite 路径 |
| WORKSPACE_BACKUP_DIR | ./data/backups | 备份目录 |
| WEB_ORIGIN | http://127.0.0.1:5173 | CORS 前端地址；多个来源用逗号分隔 |
| LEGACY_JSON_PATH | ./data/workspace.json | 旧 JSON 导入源 |
| API_BODY_LIMIT_BYTES | 26214400 | API 请求体上限（默认 25 MiB） |
| API_REQUEST_TIMEOUT_MS | 30000 | API 请求和连接超时（毫秒） |
| VITE_API_BASE_URL | 空 | 单独部署前端时的 API 基地址；默认沿用同源 `/api` |

React 前端可通过 `VITE_API_BASE_URL` 与 Fastify API 分别部署到不同域名。

## 故障排查

### 无法连接 API

本地检查：

    curl http://127.0.0.1:3001/health

Docker 检查：

    docker compose ps
    docker compose logs api

### 端口被占用

macOS/Linux：

    lsof -nP -iTCP:3001 -sTCP:LISTEN
    lsof -nP -iTCP:5173 -sTCP:LISTEN

Windows PowerShell：

    Get-NetTCPConnection -LocalPort 3001,5173

关闭旧进程，或调整端口配置。

### SQLite locked 或 database is busy

不要同时启动多个 API，也不要在 API 运行时使用数据库工具写入。关闭旧 API 后重新运行 npm run dev。

### Docker 初始化失败

    docker compose down
    docker compose build --no-cache
    docker compose up -d
    docker compose logs -f db-init api web

同时确认 Docker Desktop 正在运行，并确认当前用户对 data 目录有读写权限。

### 天气显示网络错误

天气来自 Open-Meteo 公共服务。网络受限时会显示降级提示，不影响核心数据。

### Zotero 未连接

确认 Zotero 正在运行、已开启本机 API，并保持 npm run dev:zotero-agent 终端不退出。

## 开发与验证

    npm run typecheck
    npm run build:api
    npm run build:web
    npm test
    npm run db:migrate
    npm run db:backup

提交前建议：

    npm run typecheck && npm run build:api && npm run build:web && npm test
    git diff --check

前端产物位于 apps/web/dist，API 产物位于 apps/api/dist。data、dist 和 node_modules 不应提交。

## GitHub 发布建议

发布前确认：

    git status
    git diff -- data/workspace.json

不要提交 data/workspace.json、workspace.db、备份、.env、密钥、证书、node_modules、构建产物或私人导出文件。建议保留 README、.env.example、Docker 文件、apps、packages、scripts、tests 和 data/.gitkeep。

## 安全边界

当前定位为本机或受信任局域网的单用户工作台：

- 默认只监听本机地址；
- 未实现公网多用户登录、权限管理和租户隔离；
- SQLite 不适合作为多主机实时协同数据库；
- 不要把 API 端口直接暴露到公网；
- 公网部署前应增加认证、HTTPS、访问控制、速率限制和审计。

## 已知边界

- 新闻热点是预置内容，不是自动联网新闻系统；
- SQLite 适合个人工作台和小规模单用户部署；
- iCloud 只适合迁移 JSON 或备份文件，不应同步正在运行的 SQLite 主库；
- 当前完整快照用于保证 UI 和功能一致，后续规范化必须保持回归基线。

## 许可证

当前仓库尚未声明开源许可证。公开发布前请根据你的意愿补充 LICENSE 文件，例如 MIT。
