# AI 工作台

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

- macOS 双击启动器时，运行数据位于 iCloud Drive 的 `AA-VibeCoding-DATA/self_workbench/workspace.db`；代码仍保留在项目目录。
- 首次启动会导入同一 iCloud 文件夹中的 `workspace.json`（如存在），否则写入 `templates/workspace.default.json` 示例数据。
- 不要在两台设备上同时运行工作台；请先在一台设备停止服务并等待 iCloud 同步完成，再在另一台启动。
- 可在工作台的数据管理页导出 JSON；也可创建 SQLite 备份：

```bash
npm run db:backup
```

通过 macOS 双击启动器运行时，备份文件保存在 iCloud 的 `AA-VibeCoding-DATA/self_workbench/backups/`，自动保留最近 10 份。命令行直接运行时仍可通过 `WORKSPACE_DB_PATH`、`WORKSPACE_BACKUP_DIR` 和 `LEGACY_JSON_PATH` 指定位置。请勿将真实任务、笔记或健康记录提交到公开仓库。

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

## 公考学习

- 在「设置备考目标」填写考试日期、目标分数、每日时长和每周练习目标。
- 训练计划支持添加、编辑、日期安排和完成状态筛选；勾选任务只改变任务状态。
- 「记录学习」填写实际时长及题数，支持听课、申论等不计题数的学习；误记可在最近记录中撤销。
- 正确率按新记录的总题数加权计算，本周练习按周一至今天统计。原有历史时长保留，阶段掌握度改为手动自评。
- 错题保存题目或来源、错因和正确思路；展开答案后可选择「还需巩固」或「已掌握」，自动安排下一次复习。
- 科目复盘笔记随输入自动保存。以上内容与工作台一起存入现有 SQLite 文档并参与 JSON 导出。

## 内容创作与新闻热点

- 「创作总览」按选题池、制作中、待审核、待发布、已发布组织内容，可逐步推进状态并查看近期排期。
- 「新闻热点」由 API 服务聚合抖音热榜、Hacker News 与哔哩哔哩热门，默认每 5 小时自动更新，也可在页面手动刷新。
- 每个来源独立抓取；单个来源故障时会保留最近一次成功数据，不会清空整页。相同平台条目会按外部 ID 去重。
- 新闻可一键转为选题，并同步加入创作流水线，形成“热点 → 选题 → 制作 → 发布 → 复盘”的闭环。
- 可通过 `NEWS_REFRESH_INTERVAL_HOURS` 调整抓取周期。生产使用时请遵守各来源的服务条款与访问策略。
