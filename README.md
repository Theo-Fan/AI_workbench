# AI 工作台

一个本地优先的个人工作台，用于管理任务、日程、学习、健身、科研与内容创作，并支持阶段复盘和数据备份。

![每日计划页面](.workbuddy/previews/daily-plan.png)

技术栈：React + TypeScript、Fastify、SQLite、Docker Compose。

## 快速开始

推荐使用 Docker，无需单独安装 Node.js 或 SQLite：

```bash
git clone <仓库地址>
cd AI工作台
docker compose up --build -d
```

打开 <http://127.0.0.1:8080>。

常用命令：

```bash
docker compose logs -f  # 查看日志
docker compose down     # 停止服务
```

Docker 会自动初始化数据库；数据保存在本机 `data/` 目录，删除容器不会删除数据。

## 本地开发

环境要求：Node.js 22.x、npm 10+。

```bash
npm install
npm run setup
npm run dev
```

打开 <http://127.0.0.1:5173>。API 默认运行在 <http://127.0.0.1:3001>，可通过 `/health` 检查状态。

macOS 用户也可以直接双击 `start-workspace.command` 启动，双击 `stop-workspace.command` 停止。

## 数据与备份

- 运行数据位于 `data/workspace.db`，默认不会提交到 Git。
- 首次启动会导入 `data/workspace.json`（如存在），否则写入 `templates/workspace.default.json` 示例数据。
- 可在工作台的数据管理页导出 JSON；也可创建 SQLite 备份：

```bash
npm run db:backup
```

备份文件保存在 `data/backups/`，自动保留最近 10 份。请勿将真实任务、笔记或健康记录提交到公开仓库，也不要用网盘同步正在使用的 SQLite 数据库文件。

## 常用操作

- `Cmd/Ctrl + K`：搜索与命令面板
- `N`：新建任务
- `1`–`9`：切换常用页面
- `?`：查看快捷键

## 项目结构

```text
apps/
├── web/            # React/Vite 前端
├── api/            # Fastify API、SQLite 与备份
└── zotero-agent/   # 可选的本机只读 Zotero 代理
packages/contracts/ # 共享类型与数据契约
templates/          # 脱敏示例数据
data/               # 本机数据库与备份（不提交）
scripts/            # 初始化与开发脚本
tests/              # 自动化测试
```

前端只通过 API 访问数据，Fastify 是 SQLite 与备份文件的唯一访问入口。

## 开发命令

```bash
npm run typecheck   # 类型检查
npm test            # 运行测试
npm run build:web   # 构建前端
npm run build:api   # 构建 API
npm run db:migrate  # 迁移数据库
```
