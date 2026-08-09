# AI 工作台

一个面向个人创作者的本地优先工作台，用来统一管理日常计划、健身、学习、科研、内容创作和阶段复盘。

项目采用 Fastify + SQLite 的前后端分离架构，同时保留旧版完整用户体验。旧版的页面、侧栏、主题、快捷键、命令面板、科研编辑器、回收站、导入导出、天气和 Zotero 阅读器仍然是唯一的界面基准。

> 推荐新用户使用 Docker：安装 Docker Desktop 后，执行两条命令即可运行。

## 快速启动

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

- Node.js 20 或更高版本，推荐 Node.js 22 LTS；
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

1. 没有 data/workspace.json：第一次打开工作台会自动创建示例数据。
2. 如果私下复制了旧版 JSON 到 data：运行 npm run setup 或 Docker 首次启动会自动导入。

导入脚本是幂等的，可以重复执行：

    npm run db:import

不要把真实任务、科研笔记、健身记录或 Zotero 信息提交到公开仓库。

## 日常操作

### 工作台入口

| 地址 | 说明 |
| --- | --- |
| http://127.0.0.1:5173 | 本地 Node 开发模式 |
| http://127.0.0.1:8080 | Docker 模式 |
| /workspace.html#dashboard | 工作台首页（推荐，地址简洁） |
| /legacy/creator-workspace.html#dashboard | 旧版兼容别名，保留历史书签 |
| http://127.0.0.1:8788/creator-workspace.html | 旧版直连回退入口 |

旧版工作区包括：首页、每日计划、健身打卡、AI 学习、英语学习、科研待办、文献、灵感、实验、论文、选题灵感、内容复盘、AI 漫剧、新闻热点和数据管理。

### 快捷键

- Cmd/Ctrl + K：全局搜索和命令面板；
- N：快速新建任务；
- 1 至 9：切换常用页面；
- ?：查看快捷键帮助；
- 任务文字双击：编辑任务；
- 聚焦任务复选框后按 Space 或 Enter：切换完成状态。

## SQLite 数据、备份与恢复

## 两种数据存储模式

工作台支持两种可切换的持久化方式，界面和功能完全相同：

1. **SQLite（默认、推荐）**：由 Fastify API 统一读写 `data/workspace.db`，支持事务、乐观锁和服务端备份，适合日常使用以及多浏览器访问。
2. **指定文件夹**：通过 Chrome/Edge 的文件系统权限读写所选目录中的 `workspace.json`，适合 iCloud、Dropbox 或 U 盘的手动/跨设备同步。SQLite 文件不要放进同步盘。

在“数据管理 → 数据同步”中切换：

- 如果页面显示“本地回退”，点击“连接 SQLite”即可重新探测并连接 API；连接已有数据库前会弹出覆盖确认。
- SQLite → 文件夹：选择目录后，如果目录为空，当前 SQLite 数据会自动写入 `workspace.json`；如果已有文件，界面会先确认，再决定是否加载它覆盖当前页面。
- 文件夹 → SQLite：点击“切换到 SQLite”，确认后以当前 `workspace.json` 覆盖数据库中的工作区，并使用版本号检测并发修改。
- 两种模式不会同时写入；切换完成后只有当前模式会继续保存。取消确认不会改变原来的数据源。

文件夹模式需要浏览器支持 File System Access API，并且每次授权只授予你主动选择的目录。若浏览器不支持，页面会自动使用 SQLite（兼容层）或 localStorage（旧版直连回退）。

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
      │    └─ 原样提供 creator-workspace.html
      ├─ Fastify API
      │    ├─ 工作区快照 API（乐观锁）
      │    ├─ 任务、健身、科研、学习、内容 API
      │    ├─ 天气代理
      │    └─ 导出与 SQLite 备份
      ├─ SQLite
      │    ├─ 规范化业务表
      │    └─ workspace_documents.legacy_snapshot
      └─ Zotero Agent
           └─ 本机只读访问 Zotero Local API

技术栈：Node.js 20+、Fastify 5、TypeScript、SQLite、better-sqlite3、Zod、Vite、Nginx、Docker Compose。

### 为什么使用完整快照？

旧版包含科研阶段编辑器、图谱状态、回收站、历史记录和大量交互。直接重写成另一套页面会造成界面或功能差异，因此采用兼容层加 SQLite 快照：

1. 用户看到的页面和旧版一致；
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
| WEB_ORIGIN | http://127.0.0.1:5173 | CORS 前端地址 |
| LEGACY_JSON_PATH | ./data/workspace.json | 旧 JSON 导入源 |

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
