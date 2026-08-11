// Standalone workspace runtime owned by the React frontend.
// @ts-nocheck -- parity module; all public access is typed by runtimeBridge.ts.
import type { RenderState, WorkspacePageId } from '../runtimeBridge.js';

let mounted = false;
let generatedRuntime;

export function getGeneratedWorkspaceRuntime() {
  return generatedRuntime;
}

export async function mountGeneratedWorkspaceRuntime() {
  if (mounted) return;
  if (window.__AI_WORKSPACE_RUNTIME__) {
    generatedRuntime = window.__AI_WORKSPACE_RUNTIME__;
    mounted = true;
    return;
  }
  mounted = true;

// ========================================================================
// DEFAULT DATA (v4.0)
// ========================================================================
const DEFAULT_DATA = {
  "version": "4.0",
  "meta": { "revision": 0, "deviceId": "", "savedAt": "" },
  "settings": {
    "theme": "system",
    "onboarded": false,
    "weather": { "city": "上海", "lat": 31.2222, "lon": 121.4581 },
    "lastActiveDate": "",
    "lastPlanWeek": ""
  },
  "trash": [],
  "history": { "daily": {} },
  "checkinHistory": {},
  "weeklyTrend": [],
  "tasks": {
    "dashboard": [
      { "id": "d1", "text": "写一篇 AI 工具测评文章", "done": true },
      { "id": "d2", "text": "整理本周选题灵感库", "done": true },
      { "id": "d3", "text": "复盘上周内容数据", "done": true },
      { "id": "d4", "text": "录制漫剧分镜脚本", "done": false },
      { "id": "d5", "text": "英语精读 30 分钟", "done": false },
      { "id": "d6", "text": "阅读论文 1 篇", "done": false }
    ],
    "dailyPlan": {
      "morning": [
        { "id": "m1", "text": "AI 工具测评文章", "done": true },
        { "id": "m2", "text": "整理选题灵感库", "done": true },
        { "id": "m3", "text": "漫剧分镜脚本", "done": false }
      ],
      "afternoon": [
        { "id": "a1", "text": "复盘上周内容数据", "done": true },
        { "id": "a2", "text": "英语精读 30 分钟", "done": false },
        { "id": "a3", "text": "阅读论文 1 篇", "done": false }
      ],
      "evening": [
        { "id": "e1", "text": "整理明日选题", "done": false },
        { "id": "e2", "text": "社群互动回复", "done": false },
        { "id": "e3", "text": "睡前冥想 15 分钟", "done": false }
      ]
    },
    "aiLearn": [
      { "id": "al1", "text": "完成提示词进阶课程第 5 节", "done": true },
      { "id": "al2", "text": "实践：用 GPT 搭建工作流", "done": true },
      { "id": "al3", "text": "阅读 Agent 框架文档", "done": false },
      { "id": "al4", "text": "整理学习笔记输出文章", "done": false }
    ],
    "english": [
      { "id": "en1", "text": "精读外刊 1 篇（30min）", "done": false },
      { "id": "en2", "text": "背单词 50 个", "done": false },
      { "id": "en3", "text": "听力练习 20 分钟", "done": false },
      { "id": "en4", "text": "口语模仿 3 段", "done": false }
    ],
    "comicStoryboard": [
      { "id": "cs1", "text": "场景 9：深夜书房", "done": false },
      { "id": "cs2", "text": "场景 10：灵感迸发", "done": false },
      { "id": "cs3", "text": "场景 11：奋笔疾书", "done": false },
      { "id": "cs4", "text": "场景 12：发布时刻", "done": false }
    ],
    "researchPapers": [
      { "id": "rp1", "text": "Survey: LLM for Academic Writing", "done": true },
      { "id": "rp2", "text": "Paper: Prompt Engineering in Research", "done": true },
      { "id": "rp3", "text": "Paper: RAG for Literature Review", "done": true },
      { "id": "rp4", "text": "Paper: Multi-Agent for Research", "done": false }
    ],
    "researchTodo": [
      { "id": "rt1", "text": "整理本周重点阅读文献", "done": false },
      { "id": "rt2", "text": "补充实验设计方案", "done": false }
    ]
  },
  "checkins": {
    "daily": [
      { "id": "c1", "icon": "🏃", "name": "晨跑 3km", "done": true },
      { "id": "c2", "icon": "📚", "name": "AI 学习", "done": true },
      { "id": "c3", "icon": "📝", "name": "内容创作", "done": true },
      { "id": "c4", "icon": "📖", "name": "英语精读", "done": false },
      { "id": "c5", "icon": "🧘", "name": "睡前冥想", "done": false }
    ]
  },
  "stats": {
    "dashboard": { "focusHours": "4h", "output": "3" },
    "fitness": { "goal": 7 }
  },
  "fitness": {
    "types": [
      { "id": "ft-run", "icon": "🏃", "name": "跑步", "unit": "km" },
      { "id": "ft-stairs", "icon": "🪜", "name": "爬楼梯", "unit": "层" },
      { "id": "ft-swim", "icon": "🏊", "name": "游泳", "unit": "m" },
      { "id": "ft-strength", "icon": "🏋️", "name": "力量训练", "unit": "组" },
      { "id": "ft-cycle", "icon": "🚴", "name": "骑行", "unit": "km" },
      { "id": "ft-yoga", "icon": "🧘", "name": "瑜伽", "unit": "分钟" }
    ],
    "plan": [
      { "id": "fp1", "day": "周一", "typeId": "ft-run", "target": "3km", "done": true },
      { "id": "fp2", "day": "周二", "typeId": "ft-strength", "target": "4 组", "done": true },
      { "id": "fp3", "day": "周三", "typeId": "ft-yoga", "target": "30 分钟", "done": true },
      { "id": "fp4", "day": "周四", "typeId": "ft-cycle", "target": "10km", "done": true },
      { "id": "fp5", "day": "周五", "typeId": "ft-run", "target": "3km", "done": true },
      { "id": "fp6", "day": "周六", "typeId": "ft-swim", "target": "500m", "done": false },
      { "id": "fp7", "day": "周日", "typeId": "ft-stairs", "target": "30 层", "done": false }
    ],
    "logs": [
      { "id": "fl1", "date": "2026-07-27", "typeId": "ft-run", "duration": 25, "calories": 210, "note": "晨跑 3km" },
      { "id": "fl2", "date": "2026-07-28", "typeId": "ft-strength", "duration": 40, "calories": 260, "note": "胸背训练" },
      { "id": "fl3", "date": "2026-07-29", "typeId": "ft-yoga", "duration": 30, "calories": 90, "note": "" },
      { "id": "fl4", "date": "2026-07-30", "typeId": "ft-cycle", "duration": 45, "calories": 380, "note": "通勤骑行" },
      { "id": "fl5", "date": "2026-07-31", "typeId": "ft-run", "duration": 24, "calories": 205, "note": "晨跑 3km" }
    ]
  },
  "inspirations": {
    "ideas": [
      { "id": "i1", "title": "AI 辅助科研工作流全攻略", "desc": "从文献检索到论文写作，一套完整流程" },
      { "id": "i2", "title": "用 AI 漫剧讲好一个故事", "desc": "分镜设计 + 提示词工程实战" },
      { "id": "i3", "title": "英语学习 100 天打卡总结", "desc": "方法论 + 工具 + 踩坑经验" },
      { "id": "i4", "title": "健身打卡数据可视化", "desc": "用图表展示你的运动轨迹" },
      { "id": "i5", "title": "每日计划工具横评", "desc": "5 款主流工具深度对比" },
      { "id": "i6", "title": "创作者的一天 vlog", "desc": "记录高效创作的完整一天" }
    ],
    "trends": [
      { "id": "t1", "title": "🔥 AI Agent 实战", "desc": "自动化工作流是当前最大热点" },
      { "id": "t2", "title": "🔥 AI 漫剧/短剧", "desc": "短内容消费持续增长" },
      { "id": "t3", "title": "📈 终身学习方法论", "desc": "知识焦虑驱动学习类内容需求" },
      { "id": "t4", "title": "📈 健康生活方式", "desc": "运动 + 冥想类内容受众扩大" }
    ],
    "sources": [
      { "id": "s1", "title": "📌 社群热议话题", "desc": "读者提问和讨论中挖掘痛点" },
      { "id": "s2", "title": "📌 热搜榜单", "desc": "结合热点做时效性内容" },
      { "id": "s3", "title": "📌 个人实践复盘", "desc": "把踩过的坑变成内容" },
      { "id": "s4", "title": "📌 跨领域迁移", "desc": "把 A 领域方法用到 B 领域" }
    ]
  },
  "review": {
    "week": 31,
    "stats": { "published": 5, "reads": "2.3w", "interactions": 186 },
    "interactionRate": 43,
    "topContent": [
      { "id": "tc1", "rank": "🥇", "title": "AI 工具测评：5 款神器横评", "desc": "阅读 8.2k · 互动 72 · 收藏 340" },
      { "id": "tc2", "rank": "🥈", "title": "创作者时间管理术", "desc": "阅读 5.6k · 互动 45 · 收藏 210" },
      { "id": "tc3", "rank": "🥉", "title": "英语学习 30 天心得", "desc": "阅读 4.1k · 互动 38 · 收藏 180" }
    ],
    "actions": {
      "continue": "AI 工具类选题互动最高，持续深耕",
      "start": "增加漫剧类视觉内容，抓住短内容红利",
      "stop": "纯文字长文阅读完成率低，改为图文"
    }
  },
  "comic": {
    "current": { "title": "《AI 创作者的日常》第 3 集", "storyboards": "8/12" },
    "published": [
      { "id": "p1", "title": "第 1 集 · 灵感来了", "desc": "播放 1.2w · 点赞 230" },
      { "id": "p2", "title": "第 2 集 · 卡壳时刻", "desc": "播放 8.6k · 点赞 180" }
    ]
  },
  "learning": {
    "ai": {
      "resources": [
        { "id": "lr1", "title": "📚 提示词工程指南", "desc": "系统化学习提示词设计方法论" },
        { "id": "lr2", "title": "📚 LangChain 实战教程", "desc": "从零搭建 AI 应用开发能力" },
        { "id": "lr3", "title": "📚 AI 绘画原理与实践", "desc": "理解扩散模型，掌握出图技巧" }
      ]
    },
    "english": {
      "challenge": { "current": 28, "total": 100, "streak": 12, "lastCompletedDate": "" }
    },
    "research": {
      "current": { "title": "AI 辅助科研写作效率研究", "desc": "探索 LLM 对论文写作流程的影响与优化" },
      "milestones": [
        { "id": "ms1", "icon": "✅", "title": "文献调研", "desc": "已完成 · 收集 32 篇相关文献", "status": "done" },
        { "id": "ms2", "icon": "🔵", "title": "实验设计", "desc": "进行中 · 预计 2 周内完成", "status": "active" },
        { "id": "ms3", "icon": "⚪", "title": "数据收集", "desc": "待开始", "status": "pending" },
        { "id": "ms4", "icon": "⚪", "title": "论文撰写", "desc": "待开始", "status": "pending" }
      ],
      "readingLogs": [
        { "id": "rl1", "date": "2026-07-25", "title": "Attention Is All You Need", "type": "会议论文" },
        { "id": "rl2", "date": "2026-07-27", "title": "BERT: Pre-training of Deep Bidirectional Transformers", "type": "会议论文" },
        { "id": "rl3", "date": "2026-07-28", "title": "GPT-3: Language Models are Few-Shot Learners", "type": "会议论文" },
        { "id": "rl4", "date": "2026-07-30", "title": "LLaMA: Open and Efficient Foundation Language Models", "type": "预印本" },
        { "id": "rl5", "date": "2026-08-01", "title": "A Survey of Large Language Models", "type": "期刊论文" },
        { "id": "rl6", "date": "2026-08-02", "title": "Chain-of-Thought Prompting", "type": "会议论文" },
      { "id": "rl7", "date": "2026-08-03", "title": "Retrieval-Augmented Generation for Knowledge-Intensive Tasks", "type": "会议论文" }
    ],
    "inspirations": {
      "items": [
        {
          "id": "ri1",
          "title": "将阅读轨迹作为 RAG 的个性化检索信号",
          "content": "不同研究者的阅读序列能够反映其问题空间。可尝试将近期阅读论文的主题分布编码为查询侧先验，并比较个性化重排对科研问答质量的影响。",
          "category": "研究方法",
          "tags": ["RAG", "个性化", "阅读行为"],
          "status": "待验证",
          "sourceType": "论文阅读",
          "sourceReference": "Retrieval-Augmented Generation for Knowledge-Intensive Tasks",
          "project": "AI 辅助科研写作效率研究",
          "favorite": true,
          "archived": false,
          "createdAt": "2026-08-05T10:40:00",
          "updatedAt": "2026-08-05T10:40:00",
          "occurredAt": "2026-08-05"
        },
        {
          "id": "ri2",
          "title": "用失败样本驱动论文写作辅助的自我修正",
          "content": "把导师批注、审稿意见和历史改稿版本抽取为失败案例，构建面向论证完整性与证据匹配度的修正提示。优先验证其对方法章节改写的收益。",
          "category": "研究设计",
          "tags": ["LLM", "论文写作", "自我修正"],
          "status": "进行中",
          "sourceType": "会议讨论",
          "sourceReference": "组会记录 · 8 月第 1 周",
          "project": "AI 辅助科研写作效率研究",
          "favorite": false,
          "archived": false,
          "createdAt": "2026-08-04T16:20:00",
          "updatedAt": "2026-08-05T09:15:00",
          "occurredAt": "2026-08-04"
        },
        {
          "id": "ri3",
          "title": "构建面向科研任务的多维引用可信度评分",
          "content": "引用是否可信不应只看相关性，还可结合出处类型、证据跨度、时效性和与研究问题的直接关联。先在文献综述摘要任务上设计小规模评测集。",
          "category": "评估与基准",
          "tags": ["评测", "引用", "可信度"],
          "status": "待整理",
          "sourceType": "实验观察",
          "sourceReference": "文献综述写作试验",
          "project": "AI 辅助科研写作效率研究",
          "favorite": false,
          "archived": false,
          "createdAt": "2026-08-02T14:10:00",
          "updatedAt": "2026-08-02T14:10:00",
          "occurredAt": "2026-08-02"
        },
        {
          "id": "ri4",
          "title": "将研究问题拆解为可追踪的证据链",
          "content": "每个研究问题拆成主张、所需证据、候选数据和反例，使后续文献阅读与实验设计可以直接回链到问题本身。",
          "category": "知识组织",
          "tags": ["研究问题", "证据链", "知识管理"],
          "status": "已采用",
          "sourceType": "个人复盘",
          "sourceReference": "科研工作流复盘",
          "project": "科研工作台",
          "favorite": true,
          "archived": true,
          "createdAt": "2026-07-28T11:30:00",
          "updatedAt": "2026-08-01T18:00:00",
          "occurredAt": "2026-07-28"
        }
      ]
    }
  }
},
  "weeklyReview": {
    "week": 31,
    "good": "连续 5 天更新内容，选题质量提升明显",
    "improve": "科研文献阅读偏少，下周需增加投入",
    "focus": "AI 漫剧系列上线 + 英语打卡满 30 天"
  },
  "news": {
    "tech": [
      { "id": "n1", "title": "🔥 GPT-5 发布引发行业讨论", "desc": "多模态能力大幅提升，推理成本下降 40%" },
      { "id": "n2", "title": "🔥 国产大模型百花齐放", "desc": "多家厂商发布开源模型，性能逼近 GPT-4" },
      { "id": "n3", "title": "📈 AI Agent 商业化加速", "desc": "多家创业公司获得大额融资" }
    ],
    "creation": [
      { "id": "cn1", "title": "📰 短剧市场持续增长", "desc": "AI 生成内容占比提升，创作门槛降低" },
      { "id": "cn2", "title": "📰 知识付费回暖", "desc": "AI 学习类课程需求旺盛" },
      { "id": "cn3", "title": "📰 内容平台算法更新", "desc": "推荐机制更注重完播率和互动" }
    ],
    "hotlist": [
      { "id": "h1", "title": "1. AI 编程助手普及", "desc": "开发者使用率突破 60%" },
      { "id": "h2", "title": "2. 终身学习理念走红", "desc": "\"学习如何学习\"成热门话题" },
      { "id": "h3", "title": "3. 数字健康关注升温", "desc": "屏幕时间管理工具需求增长" },
      { "id": "h4", "title": "4. AI 绘画版权争议", "desc": "行业规范逐步建立中" },
      { "id": "h5", "title": "5. 远程办公常态化", "desc": "混合办公模式成为主流" }
    ]
  }
};

// ========================================================================
// CONSTANTS
// ========================================================================
const DATA_SCHEMA_VERSION = 4;
const TRASH_KEEP_DAYS = 30;
const ZOTERO_PAGE_SIZE = 50;
const ZOTERO_FETCH_BATCH_SIZE = 100;
const GRAPH_MAX_NODES = 420;
const GRAPH_MAX_LINKS = 900;
const GRAPH_RELATED_MAX_PAPERS = 240;
const GRAPH_MAX_CONCEPT_NODES = 300;
const WORKSPACE_CLIENT_CONFIG = window.__AI_WORKSPACE_CLIENT_CONFIG__ || {};
const WORKSPACE_API_ORIGIN = String(WORKSPACE_CLIENT_CONFIG.apiBaseUrl || '').replace(/\/$/, '');
const workspaceApiUrl = path => WORKSPACE_API_ORIGIN ? WORKSPACE_API_ORIGIN + (path.startsWith('/') ? path : '/' + path) : path;
const WORKSPACE_API_SNAPSHOT_URL = workspaceApiUrl('/api/v1/workspaces/default/document');
const WORKSPACE_API_BACKUP_URL = workspaceApiUrl('/api/v1/workspaces/default/backups');
const WORKSPACE_API_TIMEOUT_MS = 30_000;

function workspaceApiFetch(url, options = {}) {
  if (options.signal) return fetch(url, options);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WORKSPACE_API_TIMEOUT_MS);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timeout));
}

const DEVICE_ID = 'web-' + (globalThis.crypto?.randomUUID?.() || (Date.now().toString(36) + Math.random().toString(36).slice(2, 10)));

// ========================================================================
// API-ONLY STORAGE LAYER
// ========================================================================
class StorageManager {
  constructor() {
    this.mode = 'api';
    this.lastSaved = null;
    this._apiVersion = 0;
    this._useWorkspaceApi = true;
  }

  get isFSAASupported() {
    return false;
  }

  async init() {
    try {
      const response = await workspaceApiFetch(WORKSPACE_API_SNAPSHOT_URL, { headers: { 'Accept': 'application/json' } });
      if (!response.ok) throw new Error('工作区 API 暂不可用');
      return true;
    } catch (error) {
      throw new Error('无法连接工作台 API，为避免数据分叉已停止加载', { cause: error });
    }
  }

  async connectApi() {
    return { connected: true, data: await this.read(), loadedExisting: true };
  }

  async connect() {
    throw new Error('前后端分离模式不支持浏览器文件夹存储');
  }

  async switchToApi() {
    return { ok: true, data: DATA };
  }

  restoreApiMode() { this.mode = 'api'; }

  async disconnect() {
    throw new Error('前后端分离模式不允许断开工作台 API');
  }

  async read() {
    const response = await workspaceApiFetch(WORKSPACE_API_SNAPSHOT_URL, { headers: { 'Accept': 'application/json' } });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body && body.error ? body.error.message : '读取工作区失败');
    const snapshot = body && body.data;
    if (!snapshot || !snapshot.data) return null;
    this._apiVersion = Number.isInteger(snapshot.version) ? snapshot.version : 0;
    return snapshot.data;
  }

  // Returns { ok: true } or { conflict: true, remote } or { ok: false }
  async write(data) {
    if (!data.meta) data.meta = {};
    data.meta.revision = (typeof data.meta.revision === 'number' ? data.meta.revision : 0) + 1;
    data.meta.deviceId = DEVICE_ID;
    data.meta.savedAt = new Date().toISOString();
    data.lastSaved = data.meta.savedAt;
    this.lastSaved = data.lastSaved;

    const response = await workspaceApiFetch(WORKSPACE_API_SNAPSHOT_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ data, expectedVersion: this._apiVersion })
    });
    const body = await response.json().catch(() => ({}));
    if (response.status === 409 && body && body.data && body.data.data) {
      return { conflict: true, remote: body.data.data };
    }
    if (!response.ok) throw new Error(body && body.error ? body.error.message : '保存工作区失败');
    this._apiVersion = body && body.data && Number.isInteger(body.data.version) ? body.data.version : this._apiVersion + 1;
    return { ok: true };
  }

  async requestPermission() {
    throw new Error('前后端分离模式不使用浏览器文件权限');
  }
}

// ========================================================================
// STATE
// ========================================================================
const storage = new StorageManager();
let DATA = null;
let currentPage = 'dashboard';
let activeReadingLogTag = '';
let literatureView = 'overview';
let researchInspirationState = {
  query: '',
  scope: 'active',
  category: '',
  tag: '',
  status: '',
  source: '',
  sort: 'updated',
  group: 'none',
  view: 'overview',
  stage: 'idea',
  selectedId: '',
  focusMode: false
};
let researchIdeaModalState = {
  mode: 'create',      // 'create' | 'edit'
  id: '',
  saving: false,
  tags: []
};
let researchExperimentState = {
  ideaId: '',
  experimentId: ''
};
let researchPaperState = {
  ideaId: '',
  paperId: ''
};
let researchTodoState = {
  scope: 'all',
  ideaId: '',
  query: ''
};
let researchTodoModalId = '';
let saveState = 'idle';         // 'idle' | 'saving' | 'saved' | 'error'
let conflictOpen = false;
let saveRequested = false;
let saveInFlight = null;
let modalPreviouslyFocused = null;
let undoState = null;           // { tid, timer }
let zoteroState = {
  status: 'idle',
  message: '',
  collections: [],
  items: [],
  total: 0,
  nextStart: 0,
  hasMore: false,
  loadingMore: false,
  selectedCollection: '',
  query: '',
  selectedItem: null,
  children: [],
  detailLoading: false,
  detailRequestVersion: 0,
  graphScope: 'all',
  graphSelectedNodeId: null,
  graphAllItems: [],
  graphAllCacheKey: '',
  graphAllLoading: false,
  connectRequestVersion: 0,
  itemsRequestVersion: 0,
  readStatusByKey: {},
  readStatusLoading: false,
  readStatusRequestVersion: 0
};

// ========================================================================
// UTILITIES
// ========================================================================
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function escapeAttribute(str) {
  return escapeHTML(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function isoWeekInfo(input = new Date()) {
  const d = new Date(Date.UTC(input.getFullYear(), input.getMonth(), input.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return { year: d.getUTCFullYear(), week };
}

function weekNum(d = new Date()) {
  return isoWeekInfo(d).week;
}

function weekKey(d = new Date()) {
  const info = isoWeekInfo(d);
  return info.year + '-W' + String(info.week).padStart(2, '0');
}

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
}

// ========================================================================
// TOAST (with optional action button)
// ========================================================================
function showToast(msg, type = '', opts = {}) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const span = document.createElement('span');
  span.textContent = msg;
  toast.appendChild(span);

  let dismissed = false;
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }

  if (opts.actionLabel && typeof opts.onAction === 'function') {
    const btn = document.createElement('button');
    btn.className = 'toast-action';
    btn.textContent = opts.actionLabel;
    btn.addEventListener('click', () => {
      opts.onAction();
      dismiss();
    });
    toast.appendChild(btn);
  }

  container.appendChild(toast);
  const ttl = opts.duration || (opts.actionLabel ? 5000 : 2200);
  setTimeout(dismiss, ttl);
  return { dismiss };
}

// ========================================================================
// MODAL
// ========================================================================
function showModal(html) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  modalPreviouslyFocused = document.activeElement;
  content.innerHTML = html;
  const title = content.querySelector('.modal-title, .research-idea-modal-title, .research-todo-modal-title');
  if (title) { title.id = 'modalTitle'; title.setAttribute('tabindex', '-1'); }
  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    const first = content.querySelector('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])');
    (first || title || content).focus();
  });
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
  if (modalPreviouslyFocused && document.contains(modalPreviouslyFocused)) modalPreviouslyFocused.focus();
  modalPreviouslyFocused = null;
}

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
});

// ========================================================================
// SAVE (with 3-state indicator + conflict handling)
// ========================================================================
const scheduleSave = debounce(() => { flushSave(); }, 800);

function save() {
  saveRequested = true;
  setSaveState('saving');
  scheduleSave();
}

async function flushSave() {
  if (!DATA) return;
  saveRequested = true;
  if (saveInFlight) return saveInFlight;
  saveInFlight = (async () => {
    while (saveRequested && DATA) {
      saveRequested = false;
      setSaveState('saving');
      let result;
      try {
        result = await storage.write(DATA);
      } catch (error) {
        console.error('保存失败:', error);
        setSaveState('error');
        break;
      }
      if (result && result.conflict) {
        handleConflict(result.remote);
        setSaveState('error');
        break;
      }
      if (!result || !result.ok) {
        setSaveState('error');
        break;
      }
      setSaveState('saved');
    }
  })().finally(() => { saveInFlight = null; });
  return saveInFlight;
}

function setSaveState(state) {
  saveState = state;
  updateSyncIndicator();
}

function updateSyncIndicator() {
  const el = document.getElementById('syncIndicator');
  const text = document.getElementById('syncText');
  if (!el || !text) return;

  if (saveState === 'error') {
    el.className = 'sync-indicator error';
    text.textContent = '保存失败 · 点击重试';
    return;
  }
  if (saveState === 'saving') {
    el.className = 'sync-indicator saving';
    text.textContent = '保存中…';
    return;
  }
  if (storage.mode === 'api') {
    el.className = 'sync-indicator connected';
    const time = storage.lastSaved ? new Date(storage.lastSaved).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '';
    text.textContent = 'SQLite 已同步' + (time ? ' · ' + time : '');
  } else if (storage.mode === 'fsaa') {
    el.className = 'sync-indicator connected';
    const time = storage.lastSaved ? new Date(storage.lastSaved).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '';
    text.textContent = '已同步' + (time ? ' · ' + time : '');
  } else {
    el.className = 'sync-indicator local';
    text.textContent = '本地存储（点击数据管理连接 iCloud）';
  }
}

document.getElementById('syncIndicator').addEventListener('click', () => {
  if (saveState === 'error') flushSave();
});

// --- Conflict resolution ---
function handleConflict(remote) {
  if (conflictOpen) return;
  conflictOpen = true;
  const remoteTime = remote.meta && remote.meta.savedAt
    ? new Date(remote.meta.savedAt).toLocaleString('zh-CN')
    : '未知时间';
  showModal(
    '<div class="modal-title">⚠️ 检测到同步冲突</div>' +
    '<p style="font-size:14px;color:var(--text-sub);line-height:1.7;">' +
    '数据已在另一台设备上更新（' + escapeHTML(remoteTime) + '）。<br>' +
    '继续保存将覆盖对方的修改。请选择处理方式：' +
    '</p>' +
    '<div class="modal-actions" style="flex-direction:column;align-items:stretch;">' +
    '<button class="modal-btn confirm" id="conflictLoadRemote">加载远端数据（推荐）</button>' +
    '<button class="modal-btn outline" id="conflictExportLocal">导出本地副本后加载远端</button>' +
    '<button class="modal-btn danger" id="conflictKeepLocal">保留本地，覆盖远端</button>' +
    '</div>'
  );
  const loadRemote = () => {
    try {
      DATA = migrateWorkspaceData(remote);
      storage._lastRevision = (remote.meta && remote.meta.revision) || 0;
      renderPage(currentPage);
      setSaveState('saved');
      return true;
    } catch (error) {
      showToast('远端数据校验失败，已保留本地数据', 'error');
      setSaveState('error');
      return false;
    }
  };
  document.getElementById('conflictLoadRemote').addEventListener('click', () => {
    closeModal(); conflictOpen = false;
    if (loadRemote()) showToast('已加载远端最新数据', 'success');
  });
  document.getElementById('conflictExportLocal').addEventListener('click', () => {
    closeModal(); conflictOpen = false;
    exportData('workspace-local-backup');
    if (loadRemote()) showToast('本地副本已导出，远端数据已加载', 'success');
  });
  document.getElementById('conflictKeepLocal').addEventListener('click', async () => {
    closeModal(); conflictOpen = false;
    const r = await storage.write(DATA, { force: true });
    setSaveState(r.ok ? 'saved' : 'error');
    showToast(r.ok ? '已用本地数据覆盖远端' : '覆盖失败', r.ok ? 'warning' : 'error');
  });
}

// ========================================================================
// THEME MANAGER
// ========================================================================
const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');

function currentThemePref() {
  return (DATA && DATA.settings && DATA.settings.theme) || 'system';
}

function applyTheme() {
  const pref = currentThemePref();
  const resolved = pref === 'system' ? (themeMedia.matches ? 'dark' : 'light') : pref;
  document.documentElement.dataset.theme = resolved;
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (icon && label) {
    if (pref === 'light') { icon.textContent = '🌞'; label.textContent = '浅色模式'; }
    else if (pref === 'dark') { icon.textContent = '🌙'; label.textContent = '深色模式'; }
    else { icon.textContent = '🖥️'; label.textContent = '跟随系统'; }
  }
}

function cycleTheme() {
  const order = ['light', 'dark', 'system'];
  const cur = currentThemePref();
  const next = order[(order.indexOf(cur) + 1) % order.length];
  DATA.settings.theme = next;
  applyTheme();
  save();
  renderPage(currentPage);
  showToast(next === 'light' ? '已切换到浅色模式' : next === 'dark' ? '已切换到深色模式' : '已跟随系统主题', 'success');
}

function setTheme(pref) {
  DATA.settings.theme = pref;
  applyTheme();
  save();
  renderPage(currentPage);
}

themeMedia.addEventListener('change', () => {
  if (currentThemePref() === 'system') applyTheme();
});

document.getElementById('themeToggle').addEventListener('click', cycleTheme);

// ========================================================================
// DATA PATH HELPERS
// ========================================================================
function getNestedData(path) {
  const parts = path.split('.');
  let obj = DATA;
  for (const p of parts) { if (obj == null) return undefined; obj = obj[p]; }
  return obj;
}

function setNestedData(path, value) {
  const parts = path.split('.');
  let obj = DATA;
  for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
  obj[parts[parts.length - 1]] = value;
}

function mergeDefaults(data, defaults) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) data = {};
  for (const key in defaults) {
    const defaultValue = defaults[key];
    if (!(key in data) || data[key] === null || data[key] === undefined) {
      data[key] = JSON.parse(JSON.stringify(defaults[key]));
    } else if (typeof defaultValue === 'object' && !Array.isArray(defaultValue) && defaultValue !== null) {
      data[key] = mergeDefaults(data[key], defaultValue);
    }
  }
  return data;
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function assertSafeDataGraph(value, depth = 0) {
  if (depth > 60) throw new Error('数据嵌套层级过深');
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach(item => assertSafeDataGraph(item, depth + 1));
    return;
  }
  for (const key of Object.keys(value)) {
    if (key === '__proto__' || key === 'prototype' || key === 'constructor') {
      throw new Error('数据包含不安全字段');
    }
    assertSafeDataGraph(value[key], depth + 1);
  }
}

function validateWorkspaceData(candidate) {
  if (!isPlainObject(candidate)) throw new Error('根数据必须是对象');
  assertSafeDataGraph(candidate);
  if (candidate.version !== undefined && typeof candidate.version !== 'string') throw new Error('版本号格式不正确');
  if (candidate.tasks !== undefined && !isPlainObject(candidate.tasks)) throw new Error('任务数据格式不正确');
  if (candidate.tasks && candidate.tasks.dailyPlan !== undefined && !isPlainObject(candidate.tasks.dailyPlan)) throw new Error('每日计划格式不正确');
  const arrayPaths = [
    ['tasks', 'dashboard'], ['tasks', 'aiLearn'], ['tasks', 'english'], ['tasks', 'comicStoryboard'], ['tasks', 'researchPapers'],
    ['tasks', 'dailyPlan', 'morning'], ['tasks', 'dailyPlan', 'afternoon'], ['tasks', 'dailyPlan', 'evening'],
    ['checkins', 'daily'], ['fitness', 'plan'], ['fitness', 'logs'], ['trash']
  ];
  for (const parts of arrayPaths) {
    let value = candidate;
    for (const part of parts) value = value && value[part];
    if (value !== undefined && !Array.isArray(value)) throw new Error(parts.join('.') + ' 必须是数组');
  }
  return true;
}

function normalizeTask(task, date = todayKey()) {
  if (!isPlainObject(task)) return null;
  const text = String(task.text || '').trim();
  if (!text) return null;
  return {
    ...task,
    id: String(task.id || uid()),
    text,
    done: Boolean(task.done),
    createdAt: task.createdAt || new Date().toISOString(),
    dueDate: task.dueDate || date
  };
}

function normalizeTaskList(list, date = todayKey()) {
  return (Array.isArray(list) ? list : []).map(task => normalizeTask(task, date)).filter(Boolean);
}

function migrateWorkspaceData(raw) {
  validateWorkspaceData(raw);
  const data = mergeDefaults(cloneData(raw), DEFAULT_DATA);
  const today = todayKey();
  data.tasks.dashboard = normalizeTaskList(data.tasks.dashboard, today);
  data.tasks.aiLearn = normalizeTaskList(data.tasks.aiLearn, today);
  data.tasks.english = normalizeTaskList(data.tasks.english, today);
  data.tasks.comicStoryboard = normalizeTaskList(data.tasks.comicStoryboard, today);
  data.tasks.researchPapers = normalizeTaskList(data.tasks.researchPapers, today);
  ['morning', 'afternoon', 'evening'].forEach(slot => {
    data.tasks.dailyPlan[slot] = normalizeTaskList(data.tasks.dailyPlan[slot], today);
  });
  if (!isPlainObject(data.history)) data.history = { daily: {} };
  if (!isPlainObject(data.history.daily)) data.history.daily = {};
  if (!isPlainObject(data.meta)) data.meta = {};
  const currentYear = isoWeekInfo().year;
  data.weeklyTrend = (Array.isArray(data.weeklyTrend) ? data.weeklyTrend : []).map(entry => {
    if (!isPlainObject(entry)) return null;
    const numericWeek = Number(entry.week);
    const key = typeof entry.key === 'string' && /^\d{4}-W\d{2}$/.test(entry.key)
      ? entry.key
      : Number.isFinite(numericWeek) ? currentYear + '-W' + String(numericWeek).padStart(2, '0') : '';
    if (!key) return null;
    return { key, week: Number(key.slice(-2)), rate: Math.max(0, Math.min(100, Number(entry.rate) || 0)) };
  }).filter(Boolean).slice(-8);
  data.meta.schemaVersion = DATA_SCHEMA_VERSION;
  data.version = '4.0';
  return data;
}

function resetDoneFlags(list) {
  (Array.isArray(list) ? list : []).forEach(task => {
    task.done = false;
    task.completedAt = '';
    task.updatedAt = new Date().toISOString();
  });
}

function snapshotDailyState(date, reason = 'date-change') {
  if (!date || !DATA || !DATA.history) return;
  if (!isPlainObject(DATA.history.daily)) DATA.history.daily = {};
  const record = DATA.history.daily[date] || { date, snapshots: [] };
  record.snapshots.push({
    reason,
    savedAt: new Date().toISOString(),
    tasks: {
      dashboard: cloneData(DATA.tasks.dashboard),
      dailyPlan: cloneData(DATA.tasks.dailyPlan),
      english: cloneData(DATA.tasks.english)
    },
    checkins: cloneData(DATA.checkins.daily)
  });
  record.snapshots = record.snapshots.slice(-5);
  DATA.history.daily[date] = record;
  const dates = Object.keys(DATA.history.daily).sort();
  dates.slice(0, Math.max(0, dates.length - 90)).forEach(key => delete DATA.history.daily[key]);
}

function ensureTemporalState() {
  const today = todayKey();
  const currentWeek = weekKey();
  let changed = false;
  if (!DATA.settings.lastActiveDate) {
    DATA.settings.lastActiveDate = today;
    changed = true;
  } else if (DATA.settings.lastActiveDate !== today) {
    snapshotDailyState(DATA.settings.lastActiveDate, 'date-change');
    resetDoneFlags(DATA.tasks.dashboard);
    ['morning', 'afternoon', 'evening'].forEach(slot => resetDoneFlags(DATA.tasks.dailyPlan[slot]));
    resetDoneFlags(DATA.tasks.english);
    (DATA.checkins.daily || []).forEach(item => { item.done = false; });
    DATA.settings.lastActiveDate = today;
    changed = true;
  }
  if (!DATA.settings.lastPlanWeek) {
    DATA.settings.lastPlanWeek = currentWeek;
    changed = true;
  } else if (DATA.settings.lastPlanWeek !== currentWeek) {
    if (!isPlainObject(DATA.history.fitness)) DATA.history.fitness = {};
    DATA.history.fitness[DATA.settings.lastPlanWeek] = {
      savedAt: new Date().toISOString(),
      plan: cloneData(DATA.fitness.plan || [])
    };
    resetDoneFlags(DATA.fitness.plan || []);
    DATA.settings.lastPlanWeek = currentWeek;
    changed = true;
  }
  return changed;
}

// ========================================================================
// CALC HELPERS
// ========================================================================
function calcTaskPercent(tasks) {
  if (!tasks || tasks.length === 0) return 0;
  return Math.round(tasks.filter(t => t.done).length / tasks.length * 100);
}

function metricTaskKey(task) {
  return String(task && (task.canonicalId || task.text) || '')
    .trim().toLocaleLowerCase().replace(/\s+/g, ' ');
}

function metricTasks() {
  const dp = DATA.tasks.dailyPlan;
  // dashboard is an overview mirror of today's plan; exclude exact text
  // duplicates from the aggregate while keeping unique dashboard actions.
  const today = [
    ...dp.morning, ...dp.afternoon, ...dp.evening,
    ...DATA.tasks.dashboard
  ];
  const other = [
    ...DATA.tasks.aiLearn, ...DATA.tasks.english,
    ...DATA.tasks.comicStoryboard, ...DATA.tasks.researchPapers
  ];
  const merged = new Map();
  [...today, ...other].forEach(task => {
    const key = metricTaskKey(task) || task.id;
    const existing = merged.get(key);
    if (!existing) merged.set(key, { ...task });
    else existing.done = Boolean(existing.done || task.done);
  });
  return [...merged.values()];
}

function calcAllTasksPercent() {
  return calcTaskPercent(metricTasks());
}

function countAllTasks() {
  const all = metricTasks();
  return { done: all.filter(t => t.done).length, total: all.length };
}

function todayCN() {
  const d = new Date();
  return (d.getMonth() + 1) + '月' + d.getDate() + '日 周' + '日一二三四五六'[d.getDay()];
}

// ========================================================================
// CHECK-IN HISTORY + STREAK (module linkage: auto-computed)
// ========================================================================
function recordCheckinToday() {
  DATA.checkinHistory[todayKey()] = DATA.checkins.daily.filter(c => c.done).length;
}

function checkinThreshold() {
  return Math.max(1, Math.ceil((DATA.checkins.daily.length || 5) * 0.6));
}

function calcStreak() {
  const th = checkinThreshold();
  const qualifies = (key) => (DATA.checkinHistory[key] || 0) >= th;
  let streak = 0;
  const d = new Date();
  if (!qualifies(todayKey(d))) d.setDate(d.getDate() - 1); // today still in progress
  while (qualifies(todayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
    if (streak > 370) break;
  }
  return streak;
}

// ========================================================================
// FITNESS HELPERS (types / plan / logs)
// ========================================================================
function fitnessType(typeId) {
  return (DATA.fitness.types || []).find(t => t.id === typeId) || { id: typeId, icon: '🏅', name: '其他', unit: '' };
}

function weekStartKey(d = new Date()) {
  const day = d.getDay(); // 0=Sun
  const diff = day === 0 ? 6 : day - 1; // Monday as week start
  const m = new Date(d);
  m.setDate(d.getDate() - diff);
  return todayKey(m);
}

function weekLogs() {
  const start = weekStartKey();
  return (DATA.fitness.logs || []).filter(l => l.date >= start);
}

function weekStats() {
  const logs = weekLogs();
  return {
    sessions: logs.length,
    duration: logs.reduce((s, l) => s + (parseInt(l.duration) || 0), 0),
    calories: logs.reduce((s, l) => s + (parseInt(l.calories) || 0), 0)
  };
}

// Fitness streak: consecutive days with >= 1 workout log
function calcFitnessStreak() {
  const dates = new Set((DATA.fitness.logs || []).map(l => l.date));
  let streak = 0;
  const d = new Date();
  if (!dates.has(todayKey(d))) d.setDate(d.getDate() - 1);
  while (dates.has(todayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
    if (streak > 370) break;
  }
  return streak;
}

// Heatmap based on workout log counts per day
function fitnessPlanForDay(dayName) {
  return (DATA.fitness.plan || []).filter(item => item.day === dayName);
}

function fitnessDayKey(date) {
  return todayKey(date);
}

function fitnessHeatmapHTML() {
  const today = new Date();
  const monthKeys = [];
  const anchor = new Date(today.getFullYear(), today.getMonth(), 1);
  for (let i = 3; i >= 0; i--) {
    const month = new Date(anchor.getFullYear(), anchor.getMonth() - i, 1);
    monthKeys.push(month);
  }
  const logs = new Set((DATA.fitness.logs || []).map(log => log.date));
  const weekdayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const monthHTML = monthKeys.map(month => {
    const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const firstWeekday = month.getDay();
    let cells = '';
    for (let i = 0; i < firstWeekday; i++) cells += '<span class="fitness-day is-empty" aria-hidden="true"></span>';
    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(month.getFullYear(), month.getMonth(), day);
      const key = fitnessDayKey(date);
      const planned = fitnessPlanForDay(weekdayNames[date.getDay() === 0 ? 6 : date.getDay() - 1]).length > 0;
      const done = logs.has(key);
      const future = date > today;
      const classes = ['fitness-day', planned ? 'is-planned' : '', done ? 'is-done' : '', future ? 'is-future' : '', key === fitnessDayKey(today) ? 'is-today' : ''].filter(Boolean).join(' ');
      const label = planned ? '已安排训练' : '休息日';
      cells += '<span class="' + classes + '" title="' + key + ' · ' + (done ? '已完成训练' : label) + '" aria-label="' + key + '，' + (done ? '已完成训练' : label) + '"></span>';
    }
    return '<section class="fitness-month"><div class="fitness-month-title">' + (month.getMonth() + 1) + '月</div><div class="fitness-month-grid">' + cells + '</div></section>';
  }).join('');
  return '<div class="fitness-month-heatmap" aria-label="近四个月训练热力图">' + monthHTML + '</div><div class="fitness-heatmap-legend"><span class="fitness-legend-plan"></span><span>计划日</span><span class="fitness-legend-mark">✓</span><span>已完成训练</span></div>';
}

// Migrate legacy checkins.fitness -> fitness.plan (one-time)
function migrateFitnessData() {
  if (DATA.checkins && Array.isArray(DATA.checkins.fitness)) {
    const iconMap = { '🏃': 'ft-run', '🏋️': 'ft-strength', '🧘': 'ft-yoga', '🚴': 'ft-cycle', '🏊': 'ft-swim', '🪜': 'ft-stairs' };
    if (!DATA.fitness) DATA.fitness = JSON.parse(JSON.stringify(DEFAULT_DATA.fitness));
    DATA.fitness.plan = DATA.checkins.fitness.map(c => {
      const parts = (c.name || '').split(' ');
      return {
        id: c.id || uid(),
        day: parts[0] || '',
        typeId: iconMap[c.icon] || 'ft-run',
        target: parts.slice(1).join(' '),
        done: !!c.done
      };
    });
    delete DATA.checkins.fitness;
  }
  if (DATA.stats && DATA.stats.fitness && ('running' in DATA.stats.fitness || 'strength' in DATA.stats.fitness)) {
    DATA.stats.fitness = { goal: DATA.stats.fitness.goal || 7 };
  }
}

// ========================================================================
// HEATMAP (last 25 weeks)
// ========================================================================
function heatmapHTML() {
  const total = DATA.checkins.daily.length || 5;
  const weeks = 25;
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - (weeks * 7 - 1));
  start.setDate(start.getDate() - start.getDay()); // align to Sunday

  let cells = '';
  const cursor = new Date(start);
  for (let i = 0; i < weeks * 7; i++) {
    if (cursor > today) {
      cells += '<div class="hm-cell future"></div>';
    } else {
      const key = todayKey(cursor);
      const c = DATA.checkinHistory[key] || 0;
      let lvl = '';
      if (c > 0) {
        const ratio = c / total;
        lvl = ratio <= 0.4 ? 'h1' : ratio <= 0.6 ? 'h2' : ratio < 1 ? 'h3' : 'h4';
      }
      cells += '<div class="hm-cell ' + lvl + '" title="' + key + ' · ' + c + '/' + total + ' 项打卡"></div>';
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return '<div class="heatmap-wrap"><div class="heatmap">' + cells + '</div>' +
    '<div class="heatmap-legend">少 ' +
    '<span class="hm-cell"></span><span class="hm-cell h1"></span><span class="hm-cell h2"></span>' +
    '<span class="hm-cell h3"></span><span class="hm-cell h4"></span> 多</div></div>';
}

// ========================================================================
// WEEKLY TREND
// ========================================================================
function recordWeeklyTrend() {
  if (!Array.isArray(DATA.weeklyTrend)) DATA.weeklyTrend = [];
  const wk = weekNum();
  const key = weekKey();
  const rate = calcAllTasksPercent();
  const existing = DATA.weeklyTrend.find(w => w.key === key);
  if (existing) existing.rate = rate;
  else DATA.weeklyTrend.push({ key, week: wk, rate });
  DATA.weeklyTrend = DATA.weeklyTrend.slice(-8);
}

function trendChartHTML() {
  const data = (DATA.weeklyTrend || []).slice(-8);
  if (data.length < 2) {
    return emptyStateHTML('📈', '趋势数据积累中', '持续使用几天后，这里会显示近 8 周完成率走势');
  }
  const W = 300, H = 80, pad = 14;
  const stepX = (W - pad * 2) / (data.length - 1);
  const pts = data.map((d, i) => [
    Math.round(pad + i * stepX),
    Math.round(H - pad - (d.rate / 100) * (H - pad * 2 - 8))
  ]);
  const line = pts.map(p => p.join(',')).join(' ');
  const area = pad + ',' + (H - pad) + ' ' + line + ' ' + (W - pad) + ',' + (H - pad);
  let dots = '', labels = '';
  pts.forEach((p, i) => {
    dots += '<circle class="trend-dot" cx="' + p[0] + '" cy="' + p[1] + '" r="3"/>';
    labels += '<text class="trend-label" x="' + p[0] + '" y="' + (H - 2) + '" text-anchor="middle">W' + String(data[i].week).padStart(2, '0') + '</text>';
  });
  return '<svg class="trend-chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="近8周完成率趋势">' +
    '<polygon class="trend-area" points="' + area + '"/>' +
    '<polyline class="trend-line" points="' + line + '"/>' + dots + labels + '</svg>';
}

// ========================================================================
// TRASH (soft delete + undo + retention purge)
// ========================================================================
function purgeTrash() {
  const cutoff = Date.now() - TRASH_KEEP_DAYS * 86400000;
  const before = DATA.trash.length;
  DATA.trash = DATA.trash.filter(t => new Date(t.deletedAt).getTime() > cutoff);
  return before - DATA.trash.length;
}

function softDelete(path, id) {
  const arr = getNestedData(path);
  if (!Array.isArray(arr)) return;
  const idx = arr.findIndex(x => x.id === id);
  if (idx === -1) return;
  const item = arr[idx];
  arr.splice(idx, 1);
  const entry = { tid: uid(), path: path, item: item, deletedAt: new Date().toISOString() };
  DATA.trash.unshift(entry);
  save();
  rerender();
  showToast('已移入回收站', '', {
    actionLabel: '撤销',
    onAction: () => restoreTrashEntry(entry.tid, idx)
  });
}

function restoreTrashEntry(tid, origIdx) {
  const ti = DATA.trash.findIndex(t => t.tid === tid);
  if (ti === -1) return;
  const entry = DATA.trash[ti];
  DATA.trash.splice(ti, 1);
  const target = getNestedData(entry.path);
  if (Array.isArray(target)) {
    const at = typeof origIdx === 'number' ? Math.min(origIdx, target.length) : target.length;
    target.splice(at, 0, entry.item);
  }
  save();
  rerender();
  showToast('已恢复', 'success');
}

function clearDoneTasks(paths) {
  const entries = [];
  let cleared = 0;
  for (const path of paths) {
    const arr = getNestedData(path);
    if (!Array.isArray(arr)) continue;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].done || arr[i].status === 'done') {
        entries.unshift({ tid: uid(), path: path, item: arr[i], deletedAt: new Date().toISOString() });
        arr.splice(i, 1);
        cleared++;
      }
    }
  }
  if (cleared === 0) return;
  DATA.trash = entries.concat(DATA.trash);
  save();
  rerender();
  showToast('已清除 ' + cleared + ' 项已完成任务', 'success', {
    actionLabel: '撤销',
    onAction: () => {
      for (const e of entries) {
        const ti = DATA.trash.findIndex(t => t.tid === e.tid);
        if (ti !== -1) {
          DATA.trash.splice(ti, 1);
          const target = getNestedData(e.path);
          if (Array.isArray(target)) target.push(e.item);
        }
      }
      save();
      rerender();
      showToast('已恢复', 'success');
    }
  });
}

function trashItemLabel(item) {
  if (item.text) return item.text;
  if (item.title) return item.title;
  if (item.typeId) {
    const t = fitnessType(item.typeId);
    return t.icon + ' ' + (item.day ? item.day + ' · ' : '') + t.name + (item.target ? ' · ' + item.target : '');
  }
  return '(未命名)';
}

function trashEntryType(path) {
  const types = {
    'learning.research.inspirations.items': '科研灵感',
    'learning.research.experiments.items': '科研实验',
    'learning.research.papers.items': '科研论文',
    'learning.research.todos.items': '科研待办',
    'learning.research.readingLogs': '阅读记录',
    'learning.research.milestones': '科研里程碑'
  };
  return types[path] || '数据记录';
}

function trashListHTML() {
  if (!DATA.trash.length) {
    return emptyStateHTML('🗑️', '回收站是空的', '删除的内容会在这里保留 ' + TRASH_KEEP_DAYS + ' 天');
  }
  let html = DATA.trash.slice(0, 20).map(t => {
    const label = trashItemLabel(t.item);
    const time = new Date(t.deletedAt).toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const expiresAt = new Date(t.deletedAt).getTime() + TRASH_KEEP_DAYS * 86400000;
    const daysLeft = Math.max(1, Math.ceil((expiresAt - Date.now()) / 86400000));
    return '<div class="trash-item">' +
      '<span class="t-text" title="' + escapeHTML(label) + '">' + escapeHTML(label) + '</span>' +
      '<span class="t-meta">' + escapeHTML(trashEntryType(t.path)) + ' · ' + time + ' · ' + daysLeft + ' 天后清理</span>' +
      '<button class="btn btn-outline btn-sm" data-trash-restore="' + t.tid + '">恢复</button>' +
      '<button class="btn btn-danger btn-sm" data-trash-del="' + t.tid + '">彻底删除</button>' +
      '</div>';
  }).join('');
  if (DATA.trash.length > 20) {
    html += '<div class="settings-desc" style="padding-top:8px;">… 以及更早的 ' + (DATA.trash.length - 20) + ' 条</div>';
  }
  html += '<div style="margin-top:12px;text-align:right;"><button class="btn btn-danger btn-sm" data-action="empty-trash">清空回收站</button></div>';
  return html;
}

// ========================================================================
// RENDER HELPERS
// ========================================================================
function emptyStateHTML(emoji, text, hint) {
  return '<div class="empty-state">' +
    '<div class="emoji">' + emoji + '</div>' +
    '<div class="empty-text">' + escapeHTML(text) + '</div>' +
    (hint ? '<div class="empty-hint">' + escapeHTML(hint) + '</div>' : '') +
    '</div>';
}

function ringHTML(percent, label, value, hint) {
  const r = 34, c = 2 * Math.PI * r;
  const offset = c * (1 - percent / 100);
  return '<div class="progress-ring">' +
    '<div class="ring-wrap">' +
      '<svg class="ring-svg" width="80" height="80" aria-hidden="true">' +
        '<circle class="ring-track" cx="40" cy="40" r="' + r + '" fill="none" stroke-width="7"/>' +
        '<circle class="ring-fill" cx="40" cy="40" r="' + r + '" fill="none" stroke-width="7" stroke-dasharray="' + c + '" stroke-dashoffset="' + offset + '"/>' +
      '</svg>' +
      '<div class="ring-center"><div class="ring-percent">' + percent + '%</div></div>' +
    '</div>' +
    '<div class="progress-info">' +
      '<div class="label">' + escapeHTML(label) + '</div>' +
      '<div class="value">' + escapeHTML(value) + '</div>' +
      (hint ? '<div class="hint">' + escapeHTML(hint) + '</div>' : '') +
    '</div>' +
  '</div>';
}

function barHTMLAuto(name, value) {
  return '<div class="bar-item">' +
    '<div class="bar-header"><span>' + escapeHTML(name) + '</span>' +
      '<span class="bar-value-group"><span class="bar-value-text">' + value + '%</span></span>' +
    '</div>' +
    '<div class="bar-track bar-track-readonly"><div class="bar-fill" style="width:' + value + '%"></div></div>' +
  '</div>';
}

// Editable bar — only for non-completion metrics (review.interaction)
function barHTML(category, id, name, value) {
  return '<div class="bar-item">' +
    '<div class="bar-header"><span>' + escapeHTML(name) + '</span>' +
      '<span class="bar-value-group">' +
        '<input class="bar-value-edit" data-cat="' + category + '" data-id="' + id + '" type="number" min="0" max="100" value="' + value + '" aria-label="' + escapeHTML(name) + '百分比">%' +
      '</span>' +
    '</div>' +
    '<div class="bar-track" data-cat="' + category + '" data-id="' + id + '"><div class="bar-fill" style="width:' + value + '%"></div></div>' +
  '</div>';
}

function taskListHTML(path, tasks) {
  let html = '<ul class="task-list">';
  if (!tasks || tasks.length === 0) {
    html += emptyStateHTML('📝', '暂无任务', '在下方输入框添加第一条任务');
  } else {
    for (const t of tasks) {
      html += '<li class="task-item ' + (t.done ? 'done' : '') + '">' +
        '<div class="task-checkbox ' + (t.done ? 'done' : '') + '" data-path="' + path + '" data-id="' + t.id + '" role="checkbox" aria-checked="' + t.done + '" aria-label="' + escapeHTML((t.done ? '取消完成：' : '完成：') + t.text) + '" tabindex="0">' + (t.done ? '✓' : '') + '</div>' +
        '<span class="task-text" data-path="' + path + '" data-id="' + t.id + '" title="双击编辑">' + escapeHTML(t.text) + '</span>' +
        '<button class="task-delete" data-path="' + path + '" data-id="' + t.id + '" title="删除" aria-label="删除任务：' + escapeHTML(t.text) + '">✕</button>' +
      '</li>';
    }
  }
  html += '</ul>';
  html += '<div class="add-task-row">' +
    '<input class="add-task-input" data-path="' + path + '" placeholder="添加任务，回车快速创建" aria-label="添加任务">' +
    '<button class="add-btn" data-path="' + path + '">添加</button>' +
  '</div>';
  const doneCount = (tasks || []).filter(t => t.done).length;
  if (doneCount > 0) {
    html += '<div class="clear-done-row"><button class="clear-done-btn" data-clear-path="' + path + '">清除已完成（' + doneCount + '）</button></div>';
  }
  return html;
}

function checkinHTML(category, items) {
  if (!items || items.length === 0) return emptyStateHTML('✅', '暂无打卡项', '');
  let html = '';
  for (const c of items) {
    html += '<div class="checkin-row" data-cat="' + category + '" data-id="' + c.id + '" role="button" tabindex="0" aria-pressed="' + c.done + '">' +
      '<div class="checkin-name"><span class="ci-icon">' + c.icon + '</span> ' + escapeHTML(c.name) + '</div>' +
      '<span class="checkin-status ' + (c.done ? 'done' : 'pending') + '">' + (c.done ? '已完成' : '待完成') + '</span>' +
    '</div>';
  }
  return html;
}

function inspireListHTML(path, items) {
  let html = '';
  if (!items || items.length === 0) {
    html += emptyStateHTML('💡', '暂无内容', '在下方添加第一条');
  } else {
    for (const i of items) {
      html += '<div class="inspire-item">' +
        '<div class="inspire-title">' + escapeHTML(i.title) + '</div>' +
        '<div class="inspire-desc">' + escapeHTML(i.desc) + '</div>' +
        '<button class="inspire-delete" data-path="' + path + '" data-id="' + i.id + '" title="删除" aria-label="删除">✕</button>' +
      '</div>';
    }
  }
  html += '<div class="inspire-add-form">' +
    '<input class="add-task-input" data-cat="' + path + '" data-field="title" placeholder="标题" aria-label="标题">' +
    '<input class="add-task-input" data-cat="' + path + '" data-field="desc" placeholder="描述" aria-label="描述">' +
    '<button class="add-btn" data-cat="' + path + '">添加</button>' +
  '</div>';
  return html;
}

// Read-only list with modal-based add (topContent / published / resources)
function simpleListHTML(path, items, emptyEmoji, emptyText) {
  if (!items || items.length === 0) {
    return emptyStateHTML(emptyEmoji || '📭', emptyText || '暂无内容', '点击右上角 + 添加');
  }
  return items.map(i =>
    '<div class="inspire-item">' +
      '<div class="inspire-title">' + (i.rank ? escapeHTML(i.rank + ' ') : '') + escapeHTML(i.title) + '</div>' +
      '<div class="inspire-desc">' + escapeHTML(i.desc) + '</div>' +
      '<button class="inspire-delete" data-path="' + path + '" data-id="' + i.id + '" title="删除" aria-label="删除">✕</button>' +
    '</div>'
  ).join('');
}

function statBox(path, value, label, readonly) {
  if (readonly) {
    return '<div class="stat-box readonly"><div class="stat-num">' + escapeHTML(String(value)) + '</div><div class="stat-label">' + escapeHTML(label) + '</div></div>';
  }
  return '<div class="stat-box"><div class="stat-num" data-stat="' + path + '" title="点击编辑">' + escapeHTML(String(value)) + '</div><div class="stat-label">' + escapeHTML(label) + '</div></div>';
}

function zoteroItemTypeLabel(type) {
  const labels = {
    journalArticle: '期刊论文',
    conferencePaper: '会议论文',
    book: '图书',
    bookSection: '图书章节',
    thesis: '学位论文',
    report: '报告',
    preprint: '预印本',
    webpage: '网页',
    patent: '专利',
    dataset: '数据集',
    manuscript: '手稿',
    computerProgram: '软件',
    presentation: '演示文稿',
    map: '地图',
    document: '文档'
  };
  return labels[type] || type || '其他文献';
}

function readingLogTags(log) {
  const source = Array.isArray(log.tags) ? log.tags.join(',') : (log.tags || log.type || '未分类');
  return String(source)
    .split(/[,，;；、\s]+/)
    .map(tag => tag.trim())
    .filter(Boolean);
}

function readingLogTagLabel(log) {
  const tags = readingLogTags(log);
  return tags.length ? tags.join(' / ') : '未分类';
}

async function zoteroReadStatusForTitle(title) {
  if (zoteroState.status !== 'connected') return null;
  const titleKey = readingLogTitleKey(title);
  const item = (zoteroState.items || []).find(candidate => readingLogTitleKey(candidate.title) === titleKey);
  if (!item || !item.key) return null;
  const cached = (zoteroState.readStatusByKey || {})[item.key];
  if (cached && cached.checked) return { ...cached, item };
  try {
    const result = await zoteroFetch('/items/' + encodeURIComponent(item.key) + '/children');
    const note = findAIReadingNoteByConvention(result.children || []);
    const status = { checked: true, read: Boolean(note), noteTitle: note ? note.title || '' : '' };
    zoteroState.readStatusByKey = { ...(zoteroState.readStatusByKey || {}), [item.key]: status };
    return { ...status, item };
  } catch (error) {
    return { checked: true, read: false, error: error.message || '读取失败', item };
  }
}

const READING_LOG_RETENTION_MONTHS = 6;

function readingLogTitleKey(title) {
  return String(title || '')
    .normalize('NFKC')
    .toLocaleLowerCase('zh-CN')
    .replace(/[\s\p{P}\p{S}_]+/gu, '');
}

function readingLogRangeStart(date = new Date()) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(1);
  start.setMonth(start.getMonth() - (READING_LOG_RETENTION_MONTHS - 1));
  return start;
}

function pruneReadingLogs() {
  const research = DATA && DATA.learning && DATA.learning.research;
  if (!research || !Array.isArray(research.readingLogs)) return false;
  const cutoffKey = todayKey(readingLogRangeStart());
  const originalLength = research.readingLogs.length;
  research.readingLogs = research.readingLogs.filter(log => String(log.date || '') >= cutoffKey);
  return research.readingLogs.length !== originalLength;
}

function readingLogHeatmapHTML() {
  const logs = DATA.learning.research.readingLogs || [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const rangeStart = readingLogRangeStart(today);
  const counts = {};
  const titlesByDate = {};
  for (const log of logs) {
    if (log.date >= todayKey(rangeStart) && log.date <= todayKey(today)) {
      counts[log.date] = (counts[log.date] || 0) + 1;
      if (!titlesByDate[log.date]) titlesByDate[log.date] = [];
      titlesByDate[log.date].push(log.title);
    }
  }

  const months = [];
  let monthCursor = new Date(rangeStart);
  while (monthCursor <= today) {
    months.push({
      year: monthCursor.getFullYear(),
      month: monthCursor.getMonth(),
      label: (monthCursor.getMonth() + 1) + '月'
    });
    monthCursor.setMonth(monthCursor.getMonth() + 1);
  }

  let monthHTML = '';
  for (const month of months) {
    const first = new Date(month.year, month.month, 1);
    const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
    const lead = first.getDay();
    let cells = '';
    // lead 占位符：不可见但保持星期行对齐
    for (let blank = 0; blank < lead; blank++) {
      cells += '<div class="hm-cell future" aria-hidden="true"></div>';
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const cursor = new Date(month.year, month.month, day);
      // 未来日期不渲染格子
      if (cursor > today) continue;
      const key = todayKey(cursor);
      const count = counts[key] || 0;
      const titles = (titlesByDate[key] || []).filter(Boolean);
      const level = count === 0 ? '' : count === 1 ? 'h1' : count === 2 ? 'h2' : count === 3 ? 'h3' : 'h4';
      const detailAttrs = titles.length
        ? ' has-reading-log" tabindex="0" role="button" aria-label="' + escapeAttribute(key + '，打卡 ' + titles.length + ' 篇文献') + '" data-reading-date="' + escapeAttribute(key) + '" data-reading-titles="' + escapeAttribute(JSON.stringify(titles)) + '"'
        : '" aria-label="' + escapeAttribute(key + '，无文献打卡') + '"';
      cells += '<div class="hm-cell ' + level + detailAttrs + '></div>';
    }
    monthHTML += '<div class="heatmap-month">' +
      '<div class="hm-month-label">' + month.label + '</div>' +
      '<div class="heatmap">' + cells + '</div>' +
    '</div>';
  }
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'].map(day => '<span>' + day + '</span>').join('');
  return '<div class="heatmap-wrap">' +
    '<div class="heatmap-timeline"><div class="heatmap-weekdays">' + weekdays + '</div><div class="heatmap-grids">' + monthHTML + '</div></div>' +
  '</div>';
}

function fitReadingLogHeatmap() {
  const wrap = document.querySelector('.literature-heatmap-panel .heatmap-wrap');
  if (!wrap) return;
  const grids = wrap.querySelector('.heatmap-grids');
  const months = grids ? Array.from(grids.children) : [];
  if (!months.length) return;
  const weekdays = wrap.querySelector('.heatmap-weekdays');
  const panel = wrap.closest('.literature-heatmap-panel');
  const panelWidth = panel ? panel.clientWidth : wrap.clientWidth;
  const panelStyle = panel ? getComputedStyle(panel) : null;
  const horizontalPadding = panelStyle
    ? parseFloat(panelStyle.paddingLeft || 0) + parseFloat(panelStyle.paddingRight || 0)
    : 0;
  const timelineGap = parseFloat(getComputedStyle(wrap.querySelector('.heatmap-timeline')).gap || 0);
  const weekdaysWidth = weekdays ? weekdays.getBoundingClientRect().width : 0;
  const available = Math.max(120, panelWidth - horizontalPadding - weekdaysWidth - timelineGap);
  const monthGap = parseFloat(getComputedStyle(grids).gap || 0);
  const cellGap = 2;
  const columnsByMonth = months.map(month => {
    const grid = month.querySelector('.heatmap');
    return grid ? Math.max(1, Math.ceil(grid.children.length / 7)) : 1;
  });
  // 标题和月份间距按完整月份的日历跨度布局；当前月未来日期不渲染，
  // 但保留完整月份的列宽，让 8 月标题居中于整个月份，而非仅居中于已显示日期。
  const now = new Date();
  const fullColumnsByMonth = months.map((month, index) => {
    const monthDate = new Date(now.getFullYear(), now.getMonth() - (months.length - 1 - index), 1);
    const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
    return Math.max(columnsByMonth[index] || 1, Math.ceil((monthDate.getDay() + daysInMonth) / 7));
  });
  const totalColumns = fullColumnsByMonth.reduce((sum, columns) => sum + columns, 0);
  const fixedGaps = Math.max(0, months.length - 1) * monthGap +
    columnsByMonth.reduce((sum, columns) => sum + Math.max(0, columns - 1) * cellGap, 0);
  const cell = Math.max(3, Math.min(12, Math.floor((available - fixedGaps) / totalColumns)));
  const visualCell = Math.max(3, Math.min(12, Math.floor((available - (
    Math.max(0, months.length - 1) * monthGap +
    columnsByMonth.reduce((sum, columns) => sum + Math.max(0, columns - 1) * cellGap, 0)
  )) / columnsByMonth.reduce((sum, columns) => sum + columns, 0))));

  wrap.style.setProperty('--hm-cell', visualCell + 'px');
  wrap.style.setProperty('--hm-gap', cellGap + 'px');
  months.forEach((month, index) => {
    const grid = month.querySelector('.heatmap');
    const columns = columnsByMonth[index] || 1;
    const label = month.querySelector('.hm-month-label');
    const fullColumns = fullColumnsByMonth[index] || columns;
    if (grid) {
      grid.style.setProperty('--hm-cell', visualCell + 'px');
      grid.style.setProperty('--hm-gap', cellGap + 'px');
    }
    if (label) {
      const labelWidth = fullColumns * cell + Math.max(0, fullColumns - 1) * cellGap;
      label.style.width = labelWidth + 'px';
      label.classList.add('is-sized');
    }
  });
  grids.style.width = '100%';
}

function literatureOverviewStats() {
  const connected = zoteroState.status === 'connected' || zoteroState.status === 'loading';
  const logs = DATA.learning.research.readingLogs || [];
  const logTypes = new Map();
  let tagTotal = 0;
  logs.forEach(log => {
    const tags = readingLogTags(log);
    tagTotal += tags.length || 1;
    (tags.length ? tags : ['未分类']).forEach(label => {
      logTypes.set(label, (logTypes.get(label) || 0) + 1);
    });
  });
  const types = Array.from(logTypes.entries())
    .map(([label, count]) => ({ label, count, percent: tagTotal ? Math.round(count / tagTotal * 100) : 0 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  const dates = logs.map(l => l.date).filter(Boolean).sort();
  const recentYears = dates.length ? dates[dates.length - 1] + ' / ' + dates[0] : '暂无记录';
  const daysWithLogs = new Set(logs.map(l => l.date).filter(Boolean)).size;
  const today = todayKey(new Date());
  const todayCount = logs.filter(log => log.date === today).length;
  const latestDate = dates.length ? dates[dates.length - 1] : '';
  return { total: logs.length, loaded: logs.length, types, recentYears, tagged: tagTotal, localLogs: logs.length, connected, daysWithLogs, todayCount, latestDate };
}

function literatureTypePieChartHTML(stats) {
  if (!stats.types || !stats.types.length) return '<div class="literature-pie-wrap"><div class="literature-pie-figure"><div class="literature-pie-center"><div><div class="literature-pie-center-value">0</div><div class="literature-pie-center-label">文献数量</div></div></div></div><div class="literature-pie-legend"><div class="literature-pie-legend-item"><span class="literature-pie-dot" style="background:#b0c4d8"></span><span class="literature-pie-label">未分类</span><span class="literature-pie-pct">0</span></div></div></div>';
  const colors = ['#4d83ff', '#14b8a6', '#e38a42', '#8b5cf6', '#64748b', '#f84d7d', '#22c55e', '#a855f7'];
  const total = stats.types.reduce((sum, t) => sum + t.count, 0);
  const cx = 70, cy = 70, r = 58;
  let cumulative = 0;
  let slices = '';
  let legend = '';
  stats.types.forEach((type, i) => {
    const angle = (type.count / total) * 2 * Math.PI;
    const startAngle = cumulative;
    cumulative += angle;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(startAngle + angle);
    const y2 = cy + r * Math.sin(startAngle + angle);
    const largeArc = angle > Math.PI ? 1 : 0;
    const color = colors[i % colors.length];
    const accessibleLabel = type.label + '，' + type.count + ' 篇，占 ' + type.percent + '%';
    slices += '<path class="literature-pie-slice" data-pie-index="' + i + '" data-pie-label="' + escapeHTML(type.label) + '" data-pie-count="' + type.count + '" tabindex="0" role="button" aria-label="' + escapeHTML(accessibleLabel) + '" d="M' + cx + ',' + cy + ' L' + x1.toFixed(2) + ',' + y1.toFixed(2) +
      ' A' + r + ',' + r + ' 0 ' + largeArc + ',1 ' + x2.toFixed(2) + ',' + y2.toFixed(2) + ' Z" ' +
      'fill="' + color + '" stroke="var(--card-bg)" stroke-width="2">' +
      '<title>' + escapeHTML(type.label) + ': ' + type.count + ' (' + type.percent + '%)</title></path>';
    legend += '<div class="literature-pie-legend-item" data-pie-index="' + i + '" data-pie-label="' + escapeHTML(type.label) + '" data-pie-count="' + type.count + '" tabindex="0" role="button" aria-label="突出显示' + escapeHTML(accessibleLabel) + '" style="--pie-color:' + color + '">' +
      '<span class="literature-pie-dot" style="background:' + color + '"></span>' +
      '<span class="literature-pie-label">' + escapeHTML(type.label) + '</span>' +
      '<span class="literature-pie-pct">' + type.count + '</span>' +
    '</div>';
  });
  return '<div class="literature-pie-wrap">' +
    '<div class="literature-pie-figure">' +
      '<svg class="literature-pie-svg" viewBox="0 0 140 140" width="148" height="148" aria-label="文献类型分布饼图">' + slices + '</svg>' +
      '<div class="literature-pie-center"><div><div class="literature-pie-center-value">' + (stats.total || 0) + '</div><div class="literature-pie-center-label">文献数量</div></div></div>' +
    '</div>' +
    '<div class="literature-pie-legend">' + legend + '</div>' +
  '</div>';
}

function literatureOverviewHTML() {
  const stats = literatureOverviewStats();

  // --- Left column: overview metrics ---
  const monthDays = new Set((DATA.learning.research.readingLogs || []).filter(log => String(log.date || '').slice(0, 7) === todayKey(new Date()).slice(0, 7)).map(log => log.date)).size;
  const rhythmPercent = Math.min(100, Math.round((stats.daysWithLogs || 0) / 20 * 100));
  const tagChips = stats.types.length
    ? stats.types.map(type => {
      const isActive = activeReadingLogTag === type.label;
      const label = escapeHTML(type.label);
      return '<button class="literature-tag-chip' + (isActive ? ' is-active' : '') + '" type="button" data-reading-tag="' + escapeAttribute(type.label) + '" aria-pressed="' + isActive + '" title="筛选标签：' + label + '">' + label + '</button>';
    }).join('')
    : '<span class="literature-tag-chip">未分类</span>';

  const leftHTML = '<section class="literature-overview-panel literature-overview-main">' +
    '<div>' +
      '<div class="literature-overview-kicker">阅读节奏</div>' +
      '<div class="literature-overview-title">本地阅读总览</div>' +
      '<div class="literature-metric-grid">' +
        '<div class="literature-metric"><div class="literature-metric-value">' + stats.total.toLocaleString('zh-CN') + '</div><div class="literature-metric-label">本地已读</div></div>' +
        '<div class="literature-metric"><div class="literature-metric-value">' + (stats.todayCount || 0).toLocaleString('zh-CN') + '</div><div class="literature-metric-label">今日打卡</div></div>' +
        '<div class="literature-metric"><div class="literature-metric-value">' + (stats.daysWithLogs || 0).toLocaleString('zh-CN') + '</div><div class="literature-metric-label">累计天数</div></div>' +
        '<div class="literature-metric"><div class="literature-metric-value">' + stats.types.length.toLocaleString('zh-CN') + '</div><div class="literature-metric-label">涵盖标签</div></div>' +
      '</div>' +
    '</div>' +
    '<div class="literature-overview-rhythm">' +
      '<div class="literature-rhythm-track"><div class="literature-rhythm-fill" style="width:' + Math.max(4, rhythmPercent) + '%"></div></div>' +
      '<div class="literature-rhythm-grid">' +
        '<div class="literature-rhythm-item"><div class="literature-rhythm-value">' + monthDays.toLocaleString('zh-CN') + '</div><div class="literature-rhythm-label">本月活跃</div></div>' +
        '<div class="literature-rhythm-item"><div class="literature-rhythm-value">' + (stats.total || 0).toLocaleString('zh-CN') + '</div><div class="literature-rhythm-label">文献数量</div></div>' +
        '<div class="literature-rhythm-item"><div class="literature-rhythm-value">' + (stats.latestDate ? stats.latestDate.slice(5).replace('-', '/') : '--') + '</div><div class="literature-rhythm-label">最近一次</div></div>' +
      '</div>' +
      '<div class="literature-tag-cloud">' + tagChips + '</div>' +
    '</div>' +
  '</section>';

  // --- Middle column: pie chart (top) + heatmap (bottom) ---
  const pieHTML = '<section class="literature-overview-panel">' +
    '<div class="literature-overview-kicker">阅读构成</div>' +
    '<div class="literature-progress-title" style="margin-top:8px;">文献类型分布</div>' +
    literatureTypePieChartHTML(stats) +
  '</section>';

  const heatmapHTML = '<section class="literature-overview-panel literature-activity-card">' +
    '<div>' +
      '<div class="literature-overview-kicker">阅读活动</div>' +
      '<div class="literature-progress-title" style="margin-top:8px;">打卡记录</div>' +
    '</div>' +
    '<div class="literature-activity-summary">' +
      '<div class="literature-activity-metric"><div class="literature-activity-value">' + (stats.todayCount || 0).toLocaleString('zh-CN') + '</div><div class="literature-activity-label">今天</div></div>' +
      '<div class="literature-activity-metric"><div class="literature-activity-value">' + (stats.daysWithLogs || 0).toLocaleString('zh-CN') + '</div><div class="literature-activity-label">打卡天数</div></div>' +
      '<div class="literature-activity-metric"><div class="literature-activity-value">' + (stats.localLogs || 0).toLocaleString('zh-CN') + '</div><div class="literature-activity-label">文献</div></div>' +
    '</div>' +
    '<div class="literature-heatmap-panel">' + readingLogHeatmapHTML() + '</div>' +
  '</section>';

  const middleHTML = '<div class="literature-middle-col">' + pieHTML + heatmapHTML + '</div>';

  // --- Right column: reading check-in list ---
  const checkinHTML = '<section class="literature-checkin-panel">' +
    '<div class="card-header" style="padding:0;margin-bottom:10px;">' +
      '<div class="card-title"><span class="dot"></span>文献阅读打卡</div>' +
      '<div class="card-actions"><button class="card-btn" data-action="add-reading-log" title="添加阅读记录">+</button></div>' +
    '</div>' +
    readingLogListHTML() +
  '</section>';

  return '<div class="card literature-overview-card">' +
    '<div class="literature-overview-inner">' +
      leftHTML +
      middleHTML +
      checkinHTML +
    '</div>' +
  '</div>';
}

const MS_CYCLE = { pending: 'active', active: 'done', done: 'pending' };
const MS_ICON = { pending: '⚪', active: '🔵', done: '✅' };

function readingLogListHTML() {
  const logs = DATA.learning.research.readingLogs || [];
  if (!logs.length) return emptyStateHTML('📖', '暂无阅读打卡记录', '点击右上角 + 添加你今天读了什么文献');
  const activeTag = activeReadingLogTag;
  const filtered = activeTag ? logs.filter(log => readingLogTags(log).includes(activeTag)) : logs;
  const ordered = [...filtered].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')) || String(b.id || '').localeCompare(String(a.id || '')));
  const filterHTML = activeTag
    ? '<div class="reading-log-filter" role="status" aria-live="polite">' +
        '<span class="reading-log-filter-label">标签 <strong>' + escapeHTML(activeTag) + '</strong> · ' + ordered.length + ' 篇</span>' +
        '<button class="reading-log-filter-clear" type="button" data-action="clear-reading-log-tag" title="清除标签筛选" aria-label="清除标签筛选">×</button>' +
      '</div>'
    : '';
  if (!ordered.length) {
    return filterHTML + '<div class="reading-log-empty">没有带“' + escapeHTML(activeTag) + '”标签的阅读记录。</div>';
  }
  return filterHTML + '<div class="reading-log-scroll">' + ordered.map(log =>
    '<div class="reading-log-row">' +
      '<div class="reading-log-main">' +
        '<div class="reading-log-title" title="' + escapeAttribute(log.title || '未命名文献') + '">' + escapeHTML(log.title || '未命名文献') + '</div>' +
        '<div class="reading-log-meta">' +
          '<span class="reading-log-pill" title="' + escapeAttribute(readingLogTagLabel(log)) + '">' + escapeHTML(readingLogTagLabel(log)) + '</span>' +
          '<span class="reading-log-date">' + escapeHTML(log.date || '未记录日期') + '</span>' +
        '</div>' +
      '</div>' +
      '<button class="inspire-delete" style="position:static;opacity:1;flex-shrink:0;" data-reading-log-del="' + log.id + '" title="删除" aria-label="删除阅读记录">✕</button>' +
    '</div>'
  ).join('') + '</div>';
}

function openReadingLogModal() {
  let html = '<div class="modal-content" style="max-width:480px;">' +
    '<h3 style="margin-bottom:16px;">添加文献打卡</h3>' +
    '<div style="display:grid;gap:12px;">' +
        '<div><label style="font-size:12px;color:var(--text-muted);">文献名称</label><input class="add-task-input" id="readingLogTitle" style="width:100%;margin-top:4px;" placeholder="输入文献名称"></div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">标签</label><input class="add-task-input" id="readingLogTags" style="width:100%;margin-top:4px;" placeholder="例如：MARL, RL, Game, SSDs"></div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">打卡时间</label><input class="add-task-input" id="readingLogDate" type="date" style="width:100%;margin-top:4px;" value="' + new Date().toISOString().slice(0, 10) + '"></div>' +
    '</div>' +
    '<div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end;">' +
      '<button class="btn btn-outline btn-sm" onclick="closeModal()">取消</button>' +
      '<button class="btn btn-primary btn-sm" id="confirmReadingLog">确认添加</button>' +
    '</div>' +
  '</div>';
  showModal(html);
  document.getElementById('confirmReadingLog').addEventListener('click', async () => {
    const confirmButton = document.getElementById('confirmReadingLog');
    if (!confirmButton || confirmButton.disabled) return;
    const title = document.getElementById('readingLogTitle').value.trim();
    const tags = readingLogTags({ tags: document.getElementById('readingLogTags').value });
    const date = document.getElementById('readingLogDate').value;
    if (!title || !date || !tags.length) { showToast('请填写文献名称、标签和打卡时间', 'warning'); return; }
    const cutoff = readingLogRangeStart();
    if (date < todayKey(cutoff) || date > todayKey(new Date())) {
      showToast('仅保留近六个月的记录，请选择有效日期', 'warning');
      return;
    }
    const logs = DATA.learning.research.readingLogs || [];
    DATA.learning.research.readingLogs = logs;
    const titleKey = readingLogTitleKey(title);
    const existing = logs.find(log => readingLogTitleKey(log.title) === titleKey);
    if (existing) {
      showToast('该文献已于 ' + (existing.date || '此前') + ' 打卡，已阻止重复记录', 'warning');
      return;
    }
    confirmButton.disabled = true;
    confirmButton.setAttribute('aria-busy', 'true');
    confirmButton.textContent = '检查中…';
    const zoteroStatus = await zoteroReadStatusForTitle(title);
    if (zoteroStatus && zoteroStatus.read) {
      confirmButton.disabled = false;
      confirmButton.removeAttribute('aria-busy');
      confirmButton.textContent = '确认添加';
      showToast('该文献在 Zotero 中已有阅读笔记，已阻止重复打卡', 'warning');
      return;
    }
    if (zoteroStatus && zoteroStatus.error) {
      confirmButton.disabled = false;
      confirmButton.removeAttribute('aria-busy');
      confirmButton.textContent = '确认添加';
      showToast('无法确认 Zotero 阅读状态，请稍后重试', 'warning');
      return;
    }
    logs.push({ id: uid(), date, title, tags });
    const pruned = pruneReadingLogs();
    save();
    closeModal();
    rerender();
    showToast(pruned ? '已添加阅读记录，并清理三个月前历史' : '已添加阅读记录', 'success');
  });
}

function milestoneHTML() {
  const ms = DATA.learning.research.milestones;
  if (!ms.length) return emptyStateHTML('🚩', '暂无里程碑', '点击右上角 + 添加');
  return ms.map(m =>
    '<div class="checkin-row" data-ms="' + m.id + '" role="button" tabindex="0" title="点击切换状态">' +
      '<div class="checkin-name"><span class="ci-icon">' + MS_ICON[m.status] + '</span>' +
        '<div><div style="color:var(--text-main);font-weight:500;">' + escapeHTML(m.title) + '</div>' +
        '<div style="font-size:11px;color:var(--text-muted);">' + escapeHTML(m.desc) + '</div></div>' +
      '</div>' +
      '<button class="inspire-delete" style="position:static;opacity:1;flex-shrink:0;" data-ms-del="' + m.id + '" title="删除" aria-label="删除里程碑">✕</button>' +
    '</div>'
  ).join('');
}

// ========================================================================
// ZOTERO KNOWLEDGE GRAPH
// ========================================================================
let knowledgeGraphRuntime = null;
let knowledgeGraphFullscreen = false;
let knowledgeGraphMounted = false;
let knowledgeGraphGenerating = false;

function autoResizeResearchTextarea(textarea) {
  if (!textarea || textarea.hidden) return;
  textarea.style.height = 'auto';
  textarea.style.height = Math.max(46, textarea.scrollHeight) + 'px';
}

function autoResizeResearchTextareas(root) {
  (root || document).querySelectorAll('textarea[data-research-idea-stage-field], textarea[data-research-experiment-field], textarea[data-research-paper-field]').forEach(autoResizeResearchTextarea);
}

function afterPageRender() {
  requestAnimationFrame(() => autoResizeResearchTextareas(document.getElementById('mainContent')));
  if (currentPage === 'dashboard') {
    startClock();
    // On every site entry, request the latest weather once; later rerenders reuse state.
    if (!weatherAutoRefreshStarted) {
      weatherAutoRefreshStarted = true;
      fetchWeather({ force: true });
    }
  } else {
    stopClock();
  }
  if (currentPage === 'research' && knowledgeGraphMounted) {
    requestAnimationFrame(() => mountKnowledgeGraph());
  } else {
    knowledgeGraphFullscreen = false;
    document.body.classList.remove('graph-fullscreen-open');
    stopKnowledgeGraph();
  }
  if (currentPage === 'research') {
    requestAnimationFrame(() => fitReadingLogHeatmap());
  }
}

function knowledgeGraphHTML() {
  const graph = buildZoteroKnowledgeGraph();
  const connected = zoteroState.status === 'connected' || zoteroState.status === 'loading';
  const papers = graph.nodes.filter(node => node.type === 'paper').length;
  const semanticNodes = graph.nodes.filter(node => node.type === 'concept' || node.type === 'entity').length;
  const strongLinks = graph.links.filter(link => link.weight >= 2).length;
  const graphScopeOptions = [
    ['50', '最近 50 篇'],
    ['100', '最近 100 篇'],
    ['200', '最近 200 篇'],
    ['all', '全部文献' + (zoteroState.total ? '（' + zoteroState.total + '）' : '')],
    ['related', '当前文献邻域']
  ].map(option => '<option value="' + option[0] + '"' +
    (zoteroState.graphScope === option[0] ? ' selected' : '') +
    (option[0] === 'related' && !zoteroState.selectedItem ? ' disabled' : '') +
    '>' + option[1] + '</option>').join('');
  const topConcepts = graph.nodes
    .filter(node => node.type === 'concept' || node.type === 'entity')
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5);
  const topHTML = topConcepts.length
    ? topConcepts.map(node => '<div class="graph-legend-item"><span class="graph-legend-left">' + graphNodeSymbolHTML(node.type) + '<span>' + escapeHTML(node.label) + '</span></span><span class="graph-legend-count">' + Math.round(node.weight) + '</span></div>').join('')
    : '<div class="graph-insight-desc">暂无可排序的主题节点。</div>';
  return '<div class="card knowledge-graph-card' + (knowledgeGraphFullscreen ? ' is-web-fullscreen' : '') + '" id="knowledgeGraphCard">' +
    '<div class="knowledge-graph-head">' +
      '<div>' +
        '<div class="knowledge-graph-eyebrow">Literature Relationship Map</div>' +
        '<div class="knowledge-graph-title"><span class="graph-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 6.5a2.5 2.5 0 1 1 3.98 2.02l2.68 3.13a2.5 2.5 0 0 1 2.87.32l2.22-1.48a2.5 2.5 0 1 1 .83 1.25l-2.22 1.48a2.5 2.5 0 1 1-4.83-.6L9.85 9.49A2.5 2.5 0 0 1 8.5 9v5.12a2.5 2.5 0 1 1-1.5 0V9A2.5 2.5 0 0 1 7 6.5Z"/></svg></span>文献知识图谱</div>' +
      '</div>' +
      '<div class="knowledge-graph-toolbar">' +
        '<label class="graph-scope-control"><span>图谱范围</span><select class="graph-scope-select" id="zoteroGraphScope" aria-label="选择知识图谱文献范围">' + graphScopeOptions + '</select></label>' +
        '<span class="graph-live-badge">实时力导向</span>' +
        '<div class="knowledge-graph-tools" aria-label="知识图谱操作">' +
          '<button class="graph-tool-btn" data-graph-action="fit" type="button" title="恢复图谱的默认缩放与位置">◎ 重置</button>' +
          '<button class="graph-tool-btn graph-fullscreen-btn' + (knowledgeGraphFullscreen ? ' active' : '') + '" data-graph-action="fullscreen" type="button" aria-pressed="' + (knowledgeGraphFullscreen ? 'true' : 'false') + '" title="' + (knowledgeGraphFullscreen ? '退出网页全屏（Esc）' : '网页全屏') + '">' +
            '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 3H3v4M13 3h4v4M17 13v4h-4M7 17H3v-4"/></svg><span>' + (knowledgeGraphFullscreen ? '退出' : '全屏') + '</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="knowledge-graph-stage">' +
      '<div class="knowledge-graph-shell" id="knowledgeGraphShell">' +
        (connected && !knowledgeGraphMounted
          ? '<div class="knowledge-graph-empty" id="knowledgeGraphEmpty">' +
              '<div class="empty-icon"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M12 3a4 4 0 0 1 3.87 5.02l2.29 1.33a3.2 3.2 0 1 1-.8 1.38l-2.3-1.33a4 4 0 0 1-2.31 1.48v2.32a3.2 3.2 0 1 1-1.5 0v-2.32a4 4 0 0 1-2.31-1.48l-2.3 1.33a3.2 3.2 0 1 1-.8-1.38l2.29-1.33A4 4 0 0 1 12 3Z"/></svg></div>' +
              '<div class="empty-title">连接已就绪</div>' +
              '<button class="btn btn-primary btn-sm" data-action="generate-knowledge-graph" type="button" style="margin-top:16px;"' + (knowledgeGraphGenerating ? ' disabled aria-busy="true"' : '') + '>' + (knowledgeGraphGenerating ? '正在生成…' : '生成知识图谱') + '</button>' +
            '</div>'
          : '<canvas class="knowledge-graph-canvas" id="knowledgeGraphCanvas" aria-label="Zotero 文献知识图谱"></canvas>' +
            '<div class="knowledge-graph-empty" id="knowledgeGraphEmpty"' + (graph.nodes.length || !connected ? '' : ' style="display:none;"') + '>' +
              '<div class="empty-icon"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M12 3a4 4 0 0 1 3.87 5.02l2.29 1.33a3.2 3.2 0 1 1-.8 1.38l-2.3-1.33a4 4 0 0 1-2.31 1.48v2.32a3.2 3.2 0 1 1-1.5 0v-2.32a4 4 0 0 1-2.31-1.48l-2.3 1.33a3.2 3.2 0 1 1-.8-1.38l2.29-1.33A4 4 0 0 1 12 3Z"/></svg></div>' +
              '<div class="empty-title">' + (connected ? '暂无可生成图谱的文献数据' : '连接 Zotero 后生成文献知识图谱') + '</div>' +
            '</div>') +
        '<div class="knowledge-graph-tip">滚轮缩放 · 拖动画布平移 · 拖动节点实时重组关系 · 点击节点查看介绍 · 点击空白恢复全局</div>' +
      '</div>' +
      '<aside class="knowledge-graph-side" aria-label="图谱洞察">' +
        '<div class="graph-insight-panel graph-node-detail" id="graphNodeDetail">' +
          '<div class="graph-node-placeholder"><div><div class="graph-node-placeholder-icon">⌁</div><div class="graph-insight-title">选择一个节点</div><div class="graph-insight-desc">点击概念、文献、作者、标签或实体，查看它在当前文献网络中的介绍与关联脉络。</div></div></div>' +
        '</div>' +
        '<div class="graph-insight-panel"><div class="graph-insight-title">图谱概览</div><div class="graph-insight-desc">当前范围包含 ' + graph.sourceCount + ' 篇文献，实际绘制 ' + papers + ' 个文献节点与 ' + semanticNodes + ' 个概念/实体节点，识别到 ' + strongLinks + ' 条强关系。' + (graph.truncated ? '所有文献节点均会保留，仅压缩低权重语义节点与关系以保护交互性能。' : '拖动任意节点时，其直接邻居会依照关系强度实时响应。') + '</div></div>' +
        '<div class="graph-insight-panel"><div class="graph-insight-title">关系图例</div><div class="graph-legend">' +
          '<div class="graph-legend-item"><span class="graph-legend-left">' + graphNodeSymbolHTML('paper') + '文献</span><span class="graph-legend-count">Paper</span></div>' +
          '<div class="graph-legend-item"><span class="graph-legend-left">' + graphNodeSymbolHTML('tag') + '标签</span><span class="graph-legend-count">Tag</span></div>' +
          '<div class="graph-legend-item"><span class="graph-legend-left">' + graphNodeSymbolHTML('author') + '作者</span><span class="graph-legend-count">Author</span></div>' +
          '<div class="graph-legend-item"><span class="graph-legend-left">' + graphNodeSymbolHTML('concept') + '概念</span><span class="graph-legend-count">Concept</span></div>' +
          '<div class="graph-legend-item"><span class="graph-legend-left">' + graphNodeSymbolHTML('entity') + '实体</span><span class="graph-legend-count">Entity</span></div>' +
          '<div class="graph-legend-item"><span class="graph-legend-left"><span class="graph-legend-line" style="background:rgba(84,105,255,.5)"></span>强关系</span><span class="graph-legend-count">weight ≥ 2</span></div>' +
        '</div></div>' +
        '<div class="graph-insight-panel"><div class="graph-insight-title">核心概念与实体</div><div class="graph-legend">' + topHTML + '</div></div>' +
      '</aside>' +
    '</div>' +
    '<div class="knowledge-graph-tooltip" id="knowledgeGraphTooltip"></div>' +
  '</div>';
}

function graphNodeSymbolHTML(type) {
  const safeType = ['paper', 'tag', 'author', 'concept', 'entity'].includes(type) ? type : 'concept';
  return '<span class="graph-node-symbol ' + safeType + '" aria-hidden="true"></span>';
}

function normalizeGraphTerm(value) {
  return String(value || '')
    .replace(/^#+/, '')
    .replace(/[\u00a0\s]+/g, ' ')
    .replace(/[.,;:!?，。；：！？[\]{}<>《》“”"]/g, '')
    .trim();
}

function graphTermKey(type, value) {
  const normalized = normalizeGraphTerm(value);
  const trailingAcronym = normalized.match(/\(([A-Z][A-Z0-9-]{1,})\)\s*$/);
  if (type === 'entity' && trailingAcronym) return type + ':' + trailingAcronym[1].toLowerCase();
  const singular = new Map([
    ['agents', 'agent'], ['algorithms', 'algorithm'], ['approaches', 'approach'], ['behaviors', 'behavior'],
    ['concepts', 'concept'], ['dilemmas', 'dilemma'], ['environments', 'environment'], ['games', 'game'],
    ['interactions', 'interaction'], ['languages', 'language'], ['methods', 'method'], ['models', 'model'],
    ['networks', 'network'], ['policies', 'policy'], ['processes', 'process'], ['strategies', 'strategy'],
    ['systems', 'system'], ['tasks', 'task']
  ]);
  const canonical = normalized
    .normalize('NFKC')
    .toLowerCase()
    .replace(/\([^)]*\)\s*$/, '')
    .replace(/[’']/g, '')
    .replace(/&/g, ' and ')
    .replace(/[-–—_/]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\bmultiagent\b/g, 'multi agent')
    .replace(/\bbehaviours?\b/g, match => match.endsWith('s') ? 'behaviors' : 'behavior')
    .split(' ')
    .map(word => singular.get(word) || word)
    .join(' ');
  if (type === 'author' && /^[a-z .-]+$/.test(canonical)) {
    return type + ':' + canonical.split(' ').filter(Boolean).sort().join(' ');
  }
  const aliases = new Map([
    ['marl', 'multi agent reinforcement learning'],
    ['llm', 'large language model'], ['llms', 'large language model'],
    ['mas', 'multi agent system'], ['mdp', 'markov decision process'], ['pomdp', 'partially observable markov decision process'],
    ['ssd', 'sequential social dilemma'], ['ssds', 'sequential social dilemma'],
    ['rl', 'reinforcement learning'], ['nlp', 'natural language processing'],
    ['prisoners dilemma', 'prisoner dilemma'], ['prisoner s dilemma', 'prisoner dilemma']
  ]);
  return type + ':' + (aliases.get(canonical) || canonical);
}

function extractKnowledgeTerms(item) {
  const metadataTerms = [];
  const semanticTerms = new Map();
  const pushMetadata = (type, label, weight) => {
    const normalized = normalizeGraphTerm(label);
    if (!normalized || normalized.length < 2 || normalized.length > 42) return;
    metadataTerms.push({ type, label: normalized, weight });
  };

  const pushSemantic = (type, label, weight, source, description = '') => {
    const normalized = normalizeGraphTerm(label).replace(/\s+\(([A-Z0-9-]+)\)\s+\1$/i, ' ($1)');
    if (!normalized || normalized.length < 3 || normalized.length > 72) return;
    const key = graphTermKey(type, normalized);
    const existing = semanticTerms.get(key);
    if (existing) {
      existing.weight += weight;
      existing.sources.add(source);
      if (description && !existing.descriptions.includes(description)) existing.descriptions.push(description);
      return;
    }
    semanticTerms.set(key, { type, label: normalized, weight, sources: new Set([source]), descriptions: description ? [description] : [] });
  };

  (item.tags || []).slice(0, 5).forEach(tag => pushMetadata('tag', tag, 3.2));
  (item.creators || []).slice(0, 4).forEach(author => pushMetadata('author', author, 1.45));

  const selectedNote = item.key === (zoteroState.selectedItem && zoteroState.selectedItem.key)
    ? notePreviewText(findAIManagerNote(zoteroState.children), 1200)
    : '';
  const segments = [
    { name: 'title', text: String(item.title || ''), weight: 3.1 },
    { name: 'abstract', text: String(item.abstractNote || item.indexedAbstractText || ''), weight: 1.25 },
    { name: 'introduction', text: String(item.introductionText || ''), weight: 0.42 },
    { name: 'note', text: selectedNote, weight: 0.48 }
  ].filter(segment => segment.text.trim());
  const source = segments.map(segment => segment.text).join('\n');
  const cleanContext = value => String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/^\s*(?:abstract|introduction|引言|摘要)\s*[:：-]?\s*/i, '')
    .trim()
    .slice(0, 360);
  const sentenceAt = (text, index) => {
    const sourceText = String(text || '');
    const start = Math.max(sourceText.lastIndexOf('.', Math.max(0, index - 1)), sourceText.lastIndexOf('\n', Math.max(0, index - 1)), sourceText.lastIndexOf('。', Math.max(0, index - 1))) + 1;
    const tail = sourceText.slice(index, index + 520);
    const boundary = tail.match(/[!?。]|\.(?=\s+(?:[A-Z][a-z]|[A-Z]{2,}))/);
    const newline = tail.indexOf('\n');
    const candidates = [boundary ? index + boundary.index + 1 : -1, newline >= 0 ? index + newline : -1].filter(value => value > index + 40);
    const end = candidates.length ? Math.min(...candidates) : Math.min(sourceText.length, index + 360);
    return cleanContext(sourceText.slice(start, end));
  };
  const contextFor = (text, needle) => {
    const index = String(text || '').toLowerCase().indexOf(String(needle || '').toLowerCase());
    return index >= 0 ? sentenceAt(text, index) : '';
  };
  const conceptDescriptions = new Map([
    ['Cooperation', '多个主体通过协调行动获得共同或互惠收益，是多智能体系统与社会困境研究中的核心行为机制。'],
    ['Social Dilemmas', '个体理性选择与群体整体利益发生冲突的一类博弈情境，常用于研究合作如何产生和维持。'],
    ['Reinforcement Learning', '智能体通过与环境交互并利用奖励反馈学习决策策略的方法。'],
    ['Multi-Agent Reinforcement Learning (MARL)', '多个相互作用的智能体同时通过奖励反馈学习策略，重点处理协作、竞争与环境非平稳性。'],
    ["Prisoner's Dilemma", '经典社会困境博弈：个体选择背叛在局部上更有利，但双方合作能产生更高的整体收益。'],
    ['Large Language Models (LLMs)', '在大规模文本上训练、能够理解和生成自然语言的参数化模型。'],
    ['Markov Decision Process (MDP)', '用状态、动作、转移概率和奖励形式化序贯决策问题的数学框架。'],
    ['Partially Observable Markov Decision Process (POMDP)', '智能体无法直接观察完整状态时使用的序贯决策模型。'],
    ['Opponent Shaping', '智能体在学习自身策略的同时，主动影响其他智能体后续学习过程的方法。'],
    ['Autonomous Driving', '利用感知、预测、规划与控制系统，使车辆能够在较少或无需人工干预的情况下完成驾驶任务。'],
    ['Evolutionary Game Theory', '结合博弈论与群体演化，研究策略在选择和复制过程中如何扩散与稳定。'],
    ['Mechanism Design', '通过设计规则、激励与信息结构，引导自利参与者实现期望系统目标。'],
    ['Inequity Aversion', '主体对不平等结果产生负效用的行为偏好，可用于解释公平性与合作行为。'],
    ['Reciprocity', '主体根据对方过去的合作或背叛行为给予相应回应的互动机制。']
  ]);
  const conceptPatterns = [
    [/\bmulti[- ]agent reinforcement learning\b/gi, 'Multi-Agent Reinforcement Learning (MARL)'],
    [/\b(?:sequential|markov|intertemporal) social dilemmas?\b/gi, 'Sequential Social Dilemmas (SSDs)'],
    [/\blarge language models?\b/gi, 'Large Language Models (LLMs)'],
    [/\bnatural language processing\b/gi, 'Natural Language Processing (NLP)'],
    [/\bmulti[- ]agent systems?\b/gi, 'Multi-Agent Systems (MAS)'],
    [/\bpartially observable markov decision processes?\b/gi, 'Partially Observable Markov Decision Process (POMDP)'],
    [/\bmarkov decision processes?\b/gi, 'Markov Decision Process (MDP)'],
    [/\breinforcement learning\b/gi, 'Reinforcement Learning'],
    [/\b(?:autonomous driving|self[- ]driving|autonomous vehicles?)\b/gi, 'Autonomous Driving'],
    [/\bopponent shaping\b/gi, 'Opponent Shaping'],
    [/\bsocial dilemmas?\b/gi, 'Social Dilemmas'],
    [/\bevolutionary games?\b/gi, 'Evolutionary Game Theory'],
    [/\bevolutionary dynamics\b/gi, 'Evolutionary Dynamics'],
    [/\bdominant strateg(?:y|ies)\b/gi, 'Dominant Strategies'],
    [/\bzero[- ]determinant strateg(?:y|ies)\b/gi, 'Zero-Determinant Strategies'],
    [/\bprisoner['’]?s dilemmas?\b/gi, "Prisoner's Dilemma"],
    [/\bpublic goods games?\b/gi, 'Public Goods Game'],
    [/\bpolicy gradients?\b/gi, 'Policy Gradient'],
    [/\bcollective action\b/gi, 'Collective Action'],
    [/\bstrategic interactions?\b/gi, 'Strategic Interaction'],
    [/\bcooperation\b/gi, 'Cooperation'],
    [/\breciprocity\b/gi, 'Reciprocity'],
    [/\bmechanism design\b/gi, 'Mechanism Design'],
    [/\bgame theory\b/gi, 'Game Theory'],
    [/\binequity aversion\b/gi, 'Inequity Aversion'],
    [/\bpartner choice\b/gi, 'Partner Choice'],
    [/\bknowledge graphs?\b/gi, 'Knowledge Graph'],
    [/\bhuman[- ]ai collaboration\b/gi, 'Human-AI Collaboration'],
    [/\bmachine learning\b/gi, 'Machine Learning'],
    [/\bartificial intelligence\b/gi, 'Artificial Intelligence']
  ];
  const knownConceptAcronyms = new Set(['AI', 'ML', 'RL', 'MARL', 'LLM', 'LLMS', 'NLP', 'MAS', 'MDP', 'POMDP', 'SSD', 'SSDS']);
  conceptPatterns.forEach(([pattern, label]) => {
    segments.forEach(segment => {
      const hits = segment.text.match(pattern) || [];
      if (hits.length) pushSemantic('concept', label, segment.weight + Math.min(2, hits.length - 1) * 0.55, segment.name, conceptDescriptions.get(label) || contextFor(segment.text, hits[0]));
    });
  });

  const namedSuffix = /\b(?:algorithm|framework|architecture|dataset|benchmark|environment|simulator|platform|toolkit|protocol|model)\b/i;
  const definedAcronyms = new Set();
  for (const match of source.matchAll(/\b([A-Z][A-Za-z-]+(?:\s+[A-Za-z][A-Za-z-]+){1,7})\s*\(([A-Z]{2,}[A-Za-z0-9-]*)\)/g)) {
    const acronym = match[2].toUpperCase();
    definedAcronyms.add(acronym);
    const type = knownConceptAcronyms.has(acronym) || !namedSuffix.test(match[1]) ? 'concept' : 'entity';
    pushSemantic(type, match[1] + ' (' + match[2] + ')', 3.6, 'definition', sentenceAt(source, match.index));
  }
  const acronymCounts = new Map();
  (source.match(/\b(?:[A-Z]{2,}[A-Z0-9-]*|[A-Z]+-\d+)\b/g) || []).forEach(value => acronymCounts.set(value, (acronymCounts.get(value) || 0) + 1));
  acronymCounts.forEach((count, acronym) => {
    if (definedAcronyms.has(acronym) || knownConceptAcronyms.has(acronym) || ['PDF', 'DOI', 'IEEE', 'ACM', 'AAAI', 'FIG', 'TABLE', 'USA', 'US', 'UK', 'EU', 'CC', 'BY', 'HTTP', 'HTTPS'].includes(acronym)) return;
    if (count >= 2 || String(item.title || '').includes(acronym)) pushSemantic('entity', acronym, 2.1 + Math.min(2, count) * 0.45, 'named-entity', contextFor(source, acronym));
  });
  for (const match of source.matchAll(/\b([A-Z][A-Za-z0-9-]*(?:\s+[A-Z][A-Za-z0-9-]*){0,3}\s+(?:Dataset|Benchmark|Environment|Simulator|Platform|Toolkit|Game))\b/g)) {
    pushSemantic('entity', match[1], 3.1, 'named-entity', sentenceAt(source, match.index));
  }

  const stop = new Set([
    'a','an','the','and','or','but','if','while','with','without','from','to','of','in','on','for','by','at','as','that','this','these','those','into','via','using','use','used','based','toward','towards','through','across','between','among','under','over','than','such','our','their','its','we','they','it','is','are','was','were','be','been','being','can','could','may','might','will','would','do','does','did','have','has','had','how','much','many','few','what','why','when','where','which','whether','who','whom','whose','more','most','less','least','very','also','only','paper','study','research','analysis','result','results','method','methods','approach','approaches','framework','frameworks','model','models','system','systems','propose','proposes','proposed','show','shows','demonstrate','demonstrates','present','presents','achieve','achieves','increase','increases','improve','improves','allow','allows','provide','provides','investigate','investigates','examine','examines','consider','considers','find','finds','found','reveal','reveals','suggest','suggests','focus','focuses','et','al','fig','figure','figures','table','tables','supplementary','appendix','copyright','rights','reserved','publisher','press','journal','volume','issue','page','pages','article','available','online','preprint','arxiv','http','https','www','com','org','license','creative','commons','corresponding','author','authors','university','department','email'
  ]);
  const weakBoundary = new Set(['existing','novel','new','current','different','effective','general','several','various','recent','simple','complex','better','improved','exploring','learned','large','small','possible','potential','important','significant','main','key','high','low']);
  const scholarlyHeads = new Set(['agent','agents','algorithm','algorithms','behavior','behaviors','behaviour','behaviours','cooperation','coordination','decision','decisions','dilemma','dilemmas','dynamics','environment','environments','game','games','governance','incentive','incentives','intelligence','interaction','interactions','learning','mechanism','mechanisms','network','networks','policy','policies','reciprocity','strategy','strategies','system','systems']);
  const phraseScores = new Map();
  segments.forEach(segment => {
    const sentences = segment.text.split(/[.!?;:\n]+/);
    sentences.forEach(sentence => {
      const tokens = sentence.match(/[A-Za-z][A-Za-z0-9-]*/g) || [];
      let run = [];
      const flush = () => {
        for (let size = 2; size <= Math.min(5, run.length); size++) {
          for (let start = 0; start + size <= run.length; start++) {
            const words = run.slice(start, start + size);
            if (weakBoundary.has(words[0]) || weakBoundary.has(words[words.length - 1])) continue;
            const phrase = words.join(' ');
            const current = phraseScores.get(phrase) || { score: 0, title: false, count: 0, context: '' };
            current.score += segment.weight;
            current.title = current.title || segment.name === 'title';
            current.count++;
            if (!current.context) current.context = cleanContext(sentence);
            phraseScores.set(phrase, current);
          }
        }
        run = [];
      };
      tokens.forEach(token => {
        const lower = token.toLowerCase();
        if (stop.has(lower) || /^[A-Z]{2,}[A-Z0-9-]*$/.test(token)) flush();
        else run.push(lower);
      });
      flush();
    });
  });
  const titleCase = phrase => phrase.split(' ').map((word, index) => {
    if (index > 0 && ['and','or','of','in','for','with'].includes(word)) return word;
    return word.startsWith('multi-') ? 'Multi-' + word.slice(6).replace(/^./, char => char.toUpperCase()) : word.replace(/^./, char => char.toUpperCase());
  }).join(' ');
  const chosenPhrases = [];
  Array.from(phraseScores.entries())
    .filter(([, meta]) => meta.title || meta.score >= 2.35 || meta.count >= 3)
    .sort((a, b) => (b[1].score + Math.min(4, b[0].split(' ').length) * 0.16) - (a[1].score + Math.min(4, a[0].split(' ').length) * 0.16))
    .forEach(([phrase, meta]) => {
      if (chosenPhrases.length >= 8) return;
      const words = phrase.split(' ');
      const head = words[words.length - 1];
      if (!scholarlyHeads.has(head) && !/(?:tion|sion|ment|ity|ism|ics|ance|ence|ship|ness|ysis)$/.test(head)) return;
      if (chosenPhrases.some(existing => existing.includes(phrase) || phrase.includes(existing))) return;
      const overlapsKnown = Array.from(semanticTerms.values()).some(term => term.type === 'concept' && (term.label.toLowerCase().includes(phrase) || phrase.includes(term.label.toLowerCase().replace(/\s*\([^)]*\)$/, ''))));
      if (overlapsKnown) return;
      chosenPhrases.push(phrase);
      pushSemantic('concept', titleCase(phrase), Math.min(4.2, meta.score), meta.title ? 'title' : 'abstract-introduction', meta.context);
    });

  const semantic = Array.from(semanticTerms.values())
    .map(term => ({ ...term, sources: Array.from(term.sources), description: term.descriptions[0] || '' }))
    .sort((a, b) => b.weight - a.weight)
    .filter((term, index, all) => !all.slice(0, index).some(other => other.type === term.type && (other.label.toLowerCase().includes(term.label.toLowerCase()) || term.label.toLowerCase().includes(other.label.toLowerCase()))))
    .slice(0, 13);
  return metadataTerms.concat(semantic);
}

function graphScopeLabel(scope = zoteroState.graphScope) {
  if (scope === '50') return '最近 50 篇';
  if (scope === '100') return '最近 100 篇';
  if (scope === '200') return '最近 200 篇';
  if (scope === 'related') return '当前文献邻域';
  return '全部文献';
}

function zoteroGraphCacheKey() {
  return (zoteroState.selectedCollection || '*') + '\n' + (zoteroState.query || '');
}

function getZoteroGraphScopeItems() {
  const allItems = zoteroState.items || [];
  const scope = zoteroState.graphScope || '100';
  if (scope === 'all') {
    const cached = zoteroState.graphAllCacheKey === zoteroGraphCacheKey()
      ? (zoteroState.graphAllItems || [])
      : [];
    const items = cached.length ? cached : allItems;
    return {
      items,
      available: Math.max(zoteroState.total || 0, items.length),
      truncated: false,
      label: graphScopeLabel(scope)
    };
  }
  if (scope === 'related') {
    const selected = zoteroState.selectedItem;
    if (!selected) {
      return {
        items: allItems.slice(0, Math.min(50, GRAPH_RELATED_MAX_PAPERS)),
        available: allItems.length,
        truncated: allItems.length > 50,
        label: '当前文献邻域（请先选择文献）'
      };
    }
    const selectedTerms = new Map(extractKnowledgeTerms(selected).map(term => [graphTermKey(term.type, term.label), term.weight]));
    const selectedCollections = new Set(selected.collections || []);
    const scored = allItems
      .filter(item => item.key !== selected.key)
      .map(item => {
        let score = 0;
        extractKnowledgeTerms(item).forEach(term => {
          const key = graphTermKey(term.type, term.label);
          if (selectedTerms.has(key)) score += selectedTerms.get(key) + term.weight;
        });
        (item.collections || []).forEach(key => {
          if (selectedCollections.has(key)) score += 2.4;
        });
        return { item, score };
      })
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, GRAPH_RELATED_MAX_PAPERS - 1)
      .map(entry => entry.item);
    const selectedFromList = allItems.find(item => item.key === selected.key) || selected;
    return {
      items: [selectedFromList, ...scored],
      available: allItems.length,
      truncated: scored.length >= GRAPH_RELATED_MAX_PAPERS - 1,
      label: graphScopeLabel(scope)
    };
  }
  const requested = Math.max(1, parseInt(scope, 10) || 100);
  const limit = requested;
  return {
    items: allItems.slice(0, limit),
    available: allItems.length,
    truncated: false,
    label: graphScopeLabel(scope)
  };
}

function buildZoteroKnowledgeGraph() {
  const scoped = getZoteroGraphScopeItems();
  const items = scoped.items;
  const selectedKey = zoteroState.selectedItem && zoteroState.selectedItem.key;
  const nodeMap = new Map();
  const linkMap = new Map();
  const paperSignatures = [];
  const addNode = (node) => {
    const existing = nodeMap.get(node.id);
    if (existing) {
      existing.weight += node.weight || 1;
      existing.refs = Array.from(new Set([...(existing.refs || []), ...(node.refs || [])]));
      if (!existing.description && node.description) existing.description = node.description;
      if (node.label.length > existing.label.length && /\([A-Z0-9-]+\)$/.test(node.label)) existing.label = node.label;
      return existing;
    }
    node.weight = node.weight || 1;
    node.refs = node.refs || [];
    nodeMap.set(node.id, node);
    return node;
  };
  const addLink = (source, target, weight, type) => {
    if (!source || !target || source === target) return;
    const pair = [source, target].sort().join('->');
    const existing = linkMap.get(pair);
    if (existing) {
      existing.weight += weight;
      return;
    }
    linkMap.set(pair, { source, target, weight, type });
  };

  items.forEach((item, index) => {
    const paperId = 'paper:' + item.key;
    const title = normalizeGraphTerm(item.title) || '未命名文献';
    addNode({ id: paperId, label: title, type: 'paper', refKey: item.key, weight: item.key === selectedKey ? 5 : 2.2, refs: [item.key], index });
    const terms = extractKnowledgeTerms(item);
    const signature = new Map();
    terms.forEach(term => {
      const id = graphTermKey(term.type, term.label);
      addNode({ id, label: term.label, type: term.type, weight: term.weight, refs: [item.key], description: term.description || '' });
      addLink(paperId, id, term.weight, term.type);
      if (term.type === 'concept' || term.type === 'entity' || term.type === 'tag') signature.set(id, term.weight);
    });
    paperSignatures.push({ paperId, signature });
    const strongTerms = terms.filter(term => term.type !== 'author').slice(0, 7);
    for (let i = 0; i < strongTerms.length; i++) {
      for (let j = i + 1; j < strongTerms.length; j++) {
        addLink(graphTermKey(strongTerms[i].type, strongTerms[i].label), graphTermKey(strongTerms[j].type, strongTerms[j].label), 0.45, 'co');
      }
    }
  });

  for (let i = 0; i < paperSignatures.length; i++) {
    const a = paperSignatures[i];
    for (let j = i + 1; j < paperSignatures.length; j++) {
      const b = paperSignatures[j];
      let shared = 0;
      let dot = 0;
      let normA = 0;
      let normB = 0;
      a.signature.forEach(weight => { normA += weight * weight; });
      b.signature.forEach(weight => { normB += weight * weight; });
      a.signature.forEach((weight, key) => {
        if (!b.signature.has(key)) return;
        shared++;
        dot += weight * b.signature.get(key);
      });
      if (!shared || !normA || !normB) continue;
      const similarity = dot / Math.sqrt(normA * normB);
      if (similarity >= 0.16 || shared >= 2) addLink(a.paperId, b.paperId, 0.65 + similarity * 3 + Math.min(3, shared) * 0.25, 'related');
    }
  }

  const allNodes = Array.from(nodeMap.values());
  const paperNodes = allNodes.filter(node => node.type === 'paper');
  const conceptNodes = allNodes.filter(node => node.type !== 'paper').sort((a, b) => b.weight - a.weight);
  const standardMaxNodes = Math.min(GRAPH_MAX_NODES, Math.round(130 + Math.max(0, items.length - 50) * 1.4));
  const conceptLimit = zoteroState.graphScope === 'all'
    ? Math.min(GRAPH_MAX_CONCEPT_NODES, Math.max(80, Math.round(Math.sqrt(Math.max(1, items.length)) * 22)))
    : Math.max(0, standardMaxNodes - paperNodes.length);
  const nodes = paperNodes.concat(conceptNodes.slice(0, conceptLimit));
  const allowed = new Set(nodes.map(node => node.id));
  const candidateLinks = Array.from(linkMap.values())
    .filter(link => allowed.has(link.source) && allowed.has(link.target))
    .sort((a, b) => b.weight - a.weight);
  const maxLinks = zoteroState.graphScope === 'all'
    ? Math.max(GRAPH_MAX_LINKS, paperNodes.length * 4)
    : Math.min(GRAPH_MAX_LINKS, Math.round(260 + Math.max(0, items.length - 50) * 3.2));
  const requiredLinks = [];
  const requiredKeys = new Set();
  candidateLinks.forEach(link => {
    const paperId = link.source.startsWith('paper:') ? link.source : link.target.startsWith('paper:') ? link.target : '';
    if (!paperId || requiredKeys.has(paperId)) return;
    requiredKeys.add(paperId);
    requiredLinks.push(link);
  });
  const requiredLinkIds = new Set(requiredLinks.map(link => [link.source, link.target].sort().join('->')));
  const links = requiredLinks.concat(candidateLinks.filter(link => !requiredLinkIds.has([link.source, link.target].sort().join('->'))))
    .slice(0, Math.max(maxLinks, requiredLinks.length));
  assignKnowledgeGraphContentCategories(nodes);
  return {
    nodes,
    links,
    selectedKey,
    sourceCount: items.length,
    availableCount: scoped.available,
    scopeLabel: scoped.label,
    truncated: scoped.truncated || conceptNodes.length > conceptLimit || candidateLinks.length > links.length
  };
}

function graphContentCategoryLabel(value) {
  return String(value || '')
    .replace(/^Computer Science\s*[-–—:]\s*/i, '')
    .replace(/^FOS\s*:\s*/i, '')
    .trim() || '其他主题';
}

function graphTopicAbbreviation(value) {
  const text = graphContentCategoryLabel(value);
  const lower = text.toLowerCase();
  const acronym = text.match(/\(([A-Z]{2,}[A-Za-z0-9-]*)\)$/);
  if (acronym) return acronym[1];
  const mappings = [
    [/sequential social dilemmas?/, 'SSDs'],
    [/multi[- ]agent reinforcement learning/, 'MARL'],
    [/large language models?/, 'LLMs'],
    [/multi[- ]agent systems?/, 'MAS'],
    [/artificial intelligence/, 'AI'],
    [/machine learning/, 'ML'],
    [/reinforcement learning/, 'RL'],
    [/natural language processing|computation and language/, 'NLP'],
    [/computer science and game theory|game theory/, 'GT'],
    [/computers and society/, 'CSoc'],
    [/social dilemmas?/, 'SDs'],
    [/opponent shaping/, 'OS'],
    [/cooperation|cooperative/, 'COOP'],
    [/robotics?/, 'ROB'],
    [/medicine|medical|医学/, 'MED'],
    [/其他主题|other/, 'OTHER']
  ];
  const mapped = mappings.find(([pattern]) => pattern.test(lower));
  if (mapped) return mapped[1];
  const words = text.match(/[A-Za-z0-9]+/g) || [];
  if (words.length >= 2) return words.slice(0, 5).map(word => word[0].toUpperCase()).join('');
  return (words[0] || text).replace(/[^A-Za-z0-9]/g, '').slice(0, 6).toUpperCase() || 'OTHER';
}

function graphThemeName(broad, detail = 'General') {
  const broadCode = graphTopicAbbreviation(broad);
  if (detail === 'General') return broadCode;
  const detailCode = graphTopicAbbreviation(detail);
  if (detailCode === broadCode) return broadCode;

  const independentMethods = new Set(['RL', 'MARL', 'LLMs', 'NLP']);
  const generalMethods = new Set(['AI', 'ML']);
  const applicationDomains = new Set(['SSDs', 'SDs', 'MAS', 'GT', 'CSoc', 'ROB', 'MED']);

  if (independentMethods.has(detailCode) && (generalMethods.has(broadCode) || broadCode === 'OTHER')) {
    return detailCode;
  }
  if (independentMethods.has(broadCode) && (generalMethods.has(detailCode) || detailCode === 'OTHER')) {
    return broadCode;
  }
  if (broadCode === 'MARL' || detailCode === 'MARL') return 'MARL';
  if (applicationDomains.has(broadCode) && independentMethods.has(detailCode)) {
    return broadCode + '-' + detailCode;
  }
  if (independentMethods.has(broadCode) && applicationDomains.has(detailCode)) {
    return detailCode + '-' + broadCode;
  }
  if (generalMethods.has(broadCode) && applicationDomains.has(detailCode)) {
    return detailCode + '-' + broadCode;
  }
  if (applicationDomains.has(broadCode) && generalMethods.has(detailCode)) {
    return broadCode + '-' + detailCode;
  }
  if (broadCode === 'OTHER') return detailCode;
  return broadCode + '-' + detailCode;
}

function graphReadableTopicLabel(value) {
  const words = graphContentCategoryLabel(value)
    .replace(/\s*\([A-Z][A-Z0-9-]{1,}\)\s*$/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const lowercaseWords = new Set(['and', 'or', 'of', 'in', 'for', 'with', 'to']);
  return words.map((word, index) => {
    if (index > 0 && lowercaseWords.has(word.toLowerCase())) return word.toLowerCase();
    if (/^[A-Z0-9]{2,}$/.test(word)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

function assignKnowledgeGraphContentCategories(nodes) {
  const papers = nodes.filter(node => node.type === 'paper');
  const maxCoverage = Math.max(3, Math.ceil(papers.length * 0.72));
  const concepts = nodes
    .filter(node => (node.type === 'tag' || node.type === 'concept') && (node.refs || []).length >= 2)
    .sort((a, b) => {
      const aCoverage = (a.refs || []).length;
      const bCoverage = (b.refs || []).length;
      const aScore = Math.min(aCoverage, maxCoverage) * 3 + a.weight + (a.type === 'tag' ? 1000 : 0);
      const bScore = Math.min(bCoverage, maxCoverage) * 3 + b.weight + (b.type === 'tag' ? 1000 : 0);
      return bScore - aScore;
    });
  const categories = [];
  concepts.forEach(node => {
    if ((node.refs || []).length > maxCoverage && concepts.length > 6) return;
    const normalized = node.label.toLowerCase();
    if (categories.some(category => {
      const existing = category.label.toLowerCase();
      return existing === normalized || (existing.length > 5 && normalized.length > 5 && (existing.includes(normalized) || normalized.includes(existing)));
    })) return;
    categories.push({ id: node.id, label: node.label, refs: new Set(node.refs || []), weight: node.weight, type: node.type });
  });
  const selectedCategories = categories.slice(0, Math.min(6, Math.max(1, categories.length)));
  const paperCategory = new Map();
  papers.forEach(paper => {
    const matches = selectedCategories
      .filter(category => category.refs.has(paper.refKey))
      .sort((a, b) => {
        const aScore = (a.type === 'tag' ? 2.5 : 1) + a.weight / Math.pow(Math.max(1, a.refs.size), 0.35);
        const bScore = (b.type === 'tag' ? 2.5 : 1) + b.weight / Math.pow(Math.max(1, b.refs.size), 0.35);
        return bScore - aScore;
      });
    const category = matches[0];
    const label = graphThemeName(category ? category.label : '其他主题');
    paper.categoryKey = category ? category.id : 'other';
    paper.categoryLabel = label;
    paperCategory.set(paper.refKey, { key: paper.categoryKey, label });
  });
  const genericSubtopics = new Set([
    'learning', 'agents', 'agent', 'games', 'game', 'dilemmas', 'dilemma', 'large', 'language', 'through',
    'complex', 'effective', 'different', 'social', 'reinforcement', 'multi-agent', 'multiagent', 'environment', 'environments'
  ]);
  const refinedLabels = new Map();
  selectedCategories.forEach(category => {
    const baseLabel = graphContentCategoryLabel(category.label);
    const subtopic = nodes
      .filter(node => node.type === 'concept' && !genericSubtopics.has(node.label.toLowerCase()))
      .map(node => {
        const overlap = (node.refs || []).filter(refKey => category.refs.has(refKey)).length;
        return { node, overlap, score: overlap * 4 + node.weight };
      })
      .filter(entry => entry.overlap >= 2 && !baseLabel.toLowerCase().includes(entry.node.label.toLowerCase()) && !entry.node.label.toLowerCase().includes(baseLabel.toLowerCase()))
      .sort((a, b) => b.score - a.score)[0];
    let refined = graphThemeName(baseLabel);
    if (subtopic) {
      refined = graphThemeName(baseLabel, subtopic.node.label);
    }
    refinedLabels.set(category.id, refined);
  });
  const otherRefs = new Set(papers.filter(paper => paper.categoryKey === 'other').map(paper => paper.refKey));
  if (otherRefs.size) {
    const otherSubtopic = nodes
      .filter(node => node.type === 'concept' && !genericSubtopics.has(node.label.toLowerCase()))
      .map(node => {
        const overlap = (node.refs || []).filter(refKey => otherRefs.has(refKey)).length;
        return { node, overlap, score: overlap * 4 + node.weight };
      })
      .filter(entry => entry.overlap >= 2)
      .sort((a, b) => b.score - a.score)[0];
    if (otherSubtopic) {
      refinedLabels.set('other', graphThemeName('其他主题', otherSubtopic.node.label));
    }
  }
  const refsForKeyword = (matcher) => {
    const refs = new Set();
    nodes.filter(node => node.type === 'concept' && matcher(node.label)).forEach(node => {
      (node.refs || []).forEach(refKey => refs.add(refKey));
    });
    return refs;
  };
  const ssdsRefs = refsForKeyword(label => /\bsequential social dilemmas?\b/i.test(label) || /^SSDs?$/i.test(label));
  const sdsRefs = refsForKeyword(label => /^Social Dilemmas?$/i.test(label));
  papers.forEach(paper => {
    if (refinedLabels.has(paper.categoryKey)) paper.categoryLabel = refinedLabels.get(paper.categoryKey);
    if (ssdsRefs.has(paper.refKey)) {
      paper.categoryLabel = 'SSDs-MARL';
    } else if (sdsRefs.has(paper.refKey)) {
      paper.categoryLabel = 'SDs-RL';
    }
    paper.categoryKey = 'theme:' + paper.categoryLabel;
    paperCategory.set(paper.refKey, { key: paper.categoryKey, label: paper.categoryLabel });
  });
  const genericThemeConcepts = /^(?:artificial intelligence|machine learning|reinforcement learning|multi-agent reinforcement learning(?: \(marl\))?|multi-agent systems?(?: \(mas\))?|cooperation|social dilemmas?|sequential social dilemmas?(?: \(ssds\))?|game theory|computer science|learning|agents?)$/i;
  const applicationDomainConcepts = /\b(?:autonomous driving|self-driving|autonomous vehicles?|robotics?|healthcare|medicine|medical|cybersecurity|climate|energy|transportation|traffic|education|finance|agriculture|manufacturing)\b/i;
  const applicationDomainLabels = [
    [/\b(?:autonomous driving|self[- ]driving|autonomous vehicles?)\b/i, 'Autonomous Driving'],
    [/\b(?:healthcare|medicine|medical)\b/i, 'Healthcare'],
    [/\b(?:cybersecurity|cyber security)\b/i, 'Cybersecurity'],
    [/\b(?:climate change|climate policy)\b/i, 'Climate Change'],
    [/\b(?:traffic management|urban traffic|transportation systems?)\b/i, 'Transportation'],
    [/\b(?:industrial robotics?|robotic manipulation)\b/i, 'Robotics'],
    [/\b(?:artificial superintelligence|from AGI to ASI)\b/i, 'Artificial Superintelligence']
  ];
  papers.forEach(paper => {
    const recognizedDomain = applicationDomainLabels.find(([pattern]) => pattern.test(paper.label));
    if (!recognizedDomain) return;
    paper.categoryLabel = recognizedDomain[1];
    paper.categoryKey = 'theme:' + paper.categoryLabel;
  });
  const smallThemeGroups = new Map();
  papers.forEach(paper => {
    const group = smallThemeGroups.get(paper.categoryLabel) || [];
    group.push(paper);
    smallThemeGroups.set(paper.categoryLabel, group);
  });
  smallThemeGroups.forEach(group => {
    if (!group.length || group.length > 2) return;
    const groupRefs = new Set(group.map(paper => paper.refKey));
    const evidenceText = group.map(paper => paper.label).concat(
      nodes
        .filter(node => node.type !== 'paper' && (node.refs || []).some(refKey => groupRefs.has(refKey)))
        .flatMap(node => [node.label, node.description || ''])
    ).join(' ');
    const recognizedDomain = applicationDomainLabels.find(([pattern]) => pattern.test(evidenceText));
    const candidate = nodes
      .filter(node => node.type === 'concept' && !genericThemeConcepts.test(node.label))
      .map(node => {
        const refs = node.refs || [];
        const overlap = refs.filter(refKey => groupRefs.has(refKey)).length;
        const exactCoverage = overlap === groupRefs.size;
        const globalCoverage = refs.length;
        const wordCount = graphReadableTopicLabel(node.label).split(/\s+/).filter(Boolean).length;
        const score = (exactCoverage ? 45 : 0)
          + overlap * 15
          + (applicationDomainConcepts.test(node.label) ? 80 : 0)
          + (wordCount >= 2 && wordCount <= 5 ? 8 : 0)
          + (node.description ? 3 : 0)
          + node.weight
          + 12 / Math.max(1, globalCoverage);
        return { node, overlap, globalCoverage, score };
      })
      .filter(entry => entry.overlap === groupRefs.size && entry.globalCoverage <= Math.max(6, groupRefs.size * 3))
      .sort((a, b) => b.score - a.score)[0];
    if (!recognizedDomain && !candidate) return;
    const preciseLabel = recognizedDomain ? recognizedDomain[1] : graphReadableTopicLabel(candidate.node.label);
    if (!preciseLabel || preciseLabel.length > 42) return;
    group.forEach(paper => {
      paper.categoryLabel = preciseLabel;
      paper.categoryKey = 'theme:' + preciseLabel;
    });
  });
  paperCategory.clear();
  papers.forEach(paper => {
    paperCategory.set(paper.refKey, { key: paper.categoryKey, label: paper.categoryLabel });
  });
  nodes.filter(node => node.type !== 'paper').forEach(node => {
    const counts = new Map();
    (node.refs || []).forEach(refKey => {
      const category = paperCategory.get(refKey);
      if (!category) return;
      const current = counts.get(category.key) || { ...category, count: 0 };
      current.count++;
      counts.set(category.key, current);
    });
    const category = Array.from(counts.values()).sort((a, b) => b.count - a.count)[0] || { key: 'other', label: graphThemeName('其他主题') };
    node.categoryKey = category.key;
    node.categoryLabel = category.label;
  });
}

function stopKnowledgeGraph() {
  if (!knowledgeGraphRuntime) return;
  cancelAnimationFrame(knowledgeGraphRuntime.raf);
  if (knowledgeGraphRuntime.resizeObserver) knowledgeGraphRuntime.resizeObserver.disconnect();
  knowledgeGraphRuntime = null;
}

function setKnowledgeGraphFullscreen(active) {
  const card = document.getElementById('knowledgeGraphCard');
  if (!card) return;
  knowledgeGraphFullscreen = Boolean(active);
  card.classList.toggle('is-web-fullscreen', knowledgeGraphFullscreen);
  document.body.classList.toggle('graph-fullscreen-open', knowledgeGraphFullscreen);
  const button = card.querySelector('[data-graph-action="fullscreen"]');
  if (button) {
    button.classList.toggle('active', knowledgeGraphFullscreen);
    button.setAttribute('aria-pressed', String(knowledgeGraphFullscreen));
    button.title = knowledgeGraphFullscreen ? '退出网页全屏（Esc）' : '网页全屏';
    const label = button.querySelector('span');
    if (label) label.textContent = knowledgeGraphFullscreen ? '退出' : '全屏';
  }
  requestAnimationFrame(() => {
    if (!knowledgeGraphRuntime) return;
    resizeKnowledgeGraph(knowledgeGraphRuntime);
    fitKnowledgeGraph(knowledgeGraphRuntime);
  });
}

function toggleKnowledgeGraphFullscreen() {
  setKnowledgeGraphFullscreen(!knowledgeGraphFullscreen);
}

function mountKnowledgeGraph() {
  const canvas = document.getElementById('knowledgeGraphCanvas');
  const shell = document.getElementById('knowledgeGraphShell');
  const tooltip = document.getElementById('knowledgeGraphTooltip');
  if (!canvas || !shell || !tooltip) return;
  stopKnowledgeGraph();
  const graph = buildZoteroKnowledgeGraph();
  const empty = document.getElementById('knowledgeGraphEmpty');
  if (empty) empty.style.display = graph.nodes.length ? 'none' : 'flex';
  knowledgeGraphRuntime = createKnowledgeGraphRuntime(canvas, shell, tooltip, graph);
}

function layoutKnowledgeGraphNodes(nodes) {
  const radius = 78 + Math.sqrt(Math.max(1, nodes.length)) * 27;
  const categoryMap = new Map();
  nodes.forEach(node => {
    const key = node.categoryLabel || node.categoryKey || 'OTHER';
    if (!categoryMap.has(key)) categoryMap.set(key, { key, label: node.categoryLabel || '其他主题', nodes: [] });
    categoryMap.get(key).nodes.push(node);
  });
  const categories = Array.from(categoryMap.values()).sort((a, b) => b.nodes.length - a.nodes.length);
  const palette = ['84, 105, 255', '20, 173, 157', '134, 96, 226', '236, 120, 75', '42, 148, 210', '196, 91, 148', '113, 129, 151'];
  const positioned = [];
  const clusters = categories.map((category, categoryIndex) => {
    const angle = categories.length === 1 ? 0 : -Math.PI / 2 + categoryIndex * Math.PI * 2 / categories.length;
    const centerDistance = categories.length === 1 ? 0 : radius * 0.46;
    const centerX = Math.cos(angle) * centerDistance;
    const centerY = Math.sin(angle) * centerDistance;
    const buckets = ['paper', 'concept', 'entity', 'author', 'tag'].map(type => category.nodes.filter(node => node.type === type));
    const mixed = [];
    let cursor = 0;
    while (mixed.length < category.nodes.length) {
      const bucket = buckets[cursor % buckets.length];
      if (bucket.length) mixed.push(bucket.shift());
      cursor++;
    }
    const clusterRadius = Math.min(radius * 0.34, 34 + Math.sqrt(Math.max(1, mixed.length)) * 18);
    mixed.forEach((node, localIndex) => {
      const localRadius = 12 + Math.sqrt(localIndex + 1) * 15;
      const localAngle = localIndex * 2.399963 + angle;
      const x = centerX + Math.cos(localAngle) * localRadius;
      const y = centerY + Math.sin(localAngle) * localRadius;
      positioned.push({ ...node, x, y, homeX: x, homeY: y, vx: 0, vy: 0, releaseEase: 0 });
    });
    return {
      key: category.key,
      label: category.label,
      count: category.nodes.length,
      paperCount: category.nodes.filter(node => node.type === 'paper').length,
      x: centerX,
      y: centerY,
      radius: clusterRadius,
      color: palette[categoryIndex % palette.length]
    };
  });
  return { nodes: positioned, radius, clusters };
}

function createKnowledgeGraphRuntime(canvas, shell, tooltip, graph) {
  const ctx = canvas.getContext('2d');
  const circular = layoutKnowledgeGraphNodes(graph.nodes);
  const state = {
    canvas, shell, tooltip, ctx,
    nodes: circular.nodes,
    links: graph.links.map(link => ({ ...link })),
    layoutRadius: circular.radius,
    contentClusters: circular.clusters,
    nodeById: new Map(),
    hover: null,
    selected: null,
    pressedNode: null,
    draggingNode: null,
    panning: false,
    moved: false,
    labelIds: new Set(),
    heat: 0.42,
    transform: { x: 0, y: 0, k: 1 },
    pointer: { x: 0, y: 0, lastX: 0, lastY: 0, graphX: 0, graphY: 0, targetGraphX: 0, targetGraphY: 0, dragOffsetX: 0, dragOffsetY: 0, velocityX: 0, velocityY: 0 },
    width: 1,
    height: 1,
    dpr: 1,
    startedAt: performance.now(),
    reduceMotion: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    raf: 0,
    resizeObserver: null
  };
  state.nodes.forEach(node => state.nodeById.set(node.id, node));
  state.links = state.links.map(link => ({ ...link, sourceNode: state.nodeById.get(link.source), targetNode: state.nodeById.get(link.target) })).filter(link => link.sourceNode && link.targetNode);
  state.labelIds = new Set(state.nodes.slice().sort((a, b) => b.weight - a.weight).slice(0, 16).map(node => node.id));
  initKnowledgeGraphEvents(state);
  state.resizeObserver = new ResizeObserver(() => resizeKnowledgeGraph(state));
  state.resizeObserver.observe(shell);
  resizeKnowledgeGraph(state);
  fitKnowledgeGraph(state);
  const restoredSelection = state.nodeById.get(zoteroState.graphSelectedNodeId);
  if (restoredSelection) {
    state.selected = restoredSelection;
    renderKnowledgeGraphNodeDetail(state, restoredSelection);
  }
  tickKnowledgeGraph(state);
  return state;
}

function resizeKnowledgeGraph(state) {
  const rect = state.shell.getBoundingClientRect();
  state.width = Math.max(1, rect.width);
  state.height = Math.max(1, rect.height);
  state.dpr = Math.min(2, window.devicePixelRatio || 1);
  state.canvas.width = Math.floor(state.width * state.dpr);
  state.canvas.height = Math.floor(state.height * state.dpr);
  state.canvas.style.width = state.width + 'px';
  state.canvas.style.height = state.height + 'px';
}

function screenToGraph(state, sx, sy) {
  return { x: (sx - state.width / 2 - state.transform.x) / state.transform.k, y: (sy - state.height / 2 - state.transform.y) / state.transform.k };
}

function graphToScreen(state, node) {
  return { x: state.width / 2 + state.transform.x + node.x * state.transform.k, y: state.height / 2 + state.transform.y + node.y * state.transform.k };
}

function graphNodeColor(type) {
  if (type === 'paper') return '#5677ee';
  if (type === 'tag') return '#14ad9d';
  if (type === 'author') return '#718197';
  if (type === 'entity') return '#e38a42';
  return '#8660e2';
}

function graphNodeRadius(node) {
  const base = node.type === 'paper' ? 6.6 : node.type === 'tag' ? 5.4 : node.type === 'entity' ? 5 : node.type === 'author' ? 4.2 : 4.4;
  return Math.min(18, base + Math.sqrt(Math.max(1, node.weight)) * 1.35);
}

function initKnowledgeGraphEvents(state) {
  const canvas = state.canvas;
  const pointFromEvent = (event) => {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    const p = pointFromEvent(event);
    const before = screenToGraph(state, p.x, p.y);
    const nextK = Math.max(0.28, Math.min(3.2, state.transform.k * Math.exp(-event.deltaY * 0.0012)));
    state.transform.k = nextK;
    state.transform.x = p.x - state.width / 2 - before.x * nextK;
    state.transform.y = p.y - state.height / 2 - before.y * nextK;
  }, { passive: false });
  canvas.addEventListener('pointerdown', (event) => {
    canvas.setPointerCapture(event.pointerId);
    const p = pointFromEvent(event);
    const g = screenToGraph(state, p.x, p.y);
    state.pointer.x = p.x;
    state.pointer.y = p.y;
    state.pointer.lastX = p.x;
    state.pointer.lastY = p.y;
    state.pointer.graphX = g.x;
    state.pointer.graphY = g.y;
    state.pointer.targetGraphX = g.x;
    state.pointer.targetGraphY = g.y;
    state.pointer.velocityX = 0;
    state.pointer.velocityY = 0;
    state.moved = false;
    const node = findGraphNodeAt(state, p.x, p.y);
    state.pressedNode = node;
    if (node) {
      state.draggingNode = node;
      node.fx = node.x;
      node.fy = node.y;
      state.pointer.dragOffsetX = node.x - g.x;
      state.pointer.dragOffsetY = node.y - g.y;
      state.pointer.targetGraphX = node.x;
      state.pointer.targetGraphY = node.y;
      state.hover = node;
      state.heat = 1;
      canvas.classList.add('dragging');
    } else {
      state.panning = true;
      canvas.classList.add('dragging');
    }
  });
  canvas.addEventListener('pointermove', (event) => {
    const p = pointFromEvent(event);
    state.pointer.x = p.x;
    state.pointer.y = p.y;
    if (Math.abs(p.x - state.pointer.lastX) + Math.abs(p.y - state.pointer.lastY) > 2) state.moved = true;
    if (state.draggingNode) {
      const g = screenToGraph(state, p.x, p.y);
      state.pointer.velocityX = (g.x - state.pointer.graphX) * 0.18;
      state.pointer.velocityY = (g.y - state.pointer.graphY) * 0.18;
      state.pointer.graphX = g.x;
      state.pointer.graphY = g.y;
      state.pointer.targetGraphX = g.x + state.pointer.dragOffsetX;
      state.pointer.targetGraphY = g.y + state.pointer.dragOffsetY;
      state.hover = state.draggingNode;
      state.heat = 1;
      updateKnowledgeGraphTooltip(state, event.clientX, event.clientY);
    } else if (state.panning) {
      state.transform.x += p.x - state.pointer.lastX;
      state.transform.y += p.y - state.pointer.lastY;
    } else {
      state.hover = findGraphNodeAt(state, p.x, p.y);
      canvas.classList.toggle('node-hover', Boolean(state.hover));
      updateKnowledgeGraphTooltip(state, event.clientX, event.clientY);
    }
    state.pointer.lastX = p.x;
    state.pointer.lastY = p.y;
  });
  const finishPointer = (event, cancelled) => {
    const releasedNode = state.draggingNode;
    const clickedNode = !cancelled && !state.moved ? state.pressedNode : null;
    const clickedBlank = !cancelled && !state.moved && !state.pressedNode;
    if (state.draggingNode) {
      state.draggingNode.fx = null;
      state.draggingNode.fy = null;
      state.draggingNode.vx = state.pointer.velocityX * 0.45;
      state.draggingNode.vy = state.pointer.velocityY * 0.45;
      state.draggingNode.releaseEase = 1;
      state.heat = Math.max(state.heat, 0.86);
    }
    state.draggingNode = null;
    state.pressedNode = null;
    state.panning = false;
    canvas.classList.remove('dragging');
    if (clickedNode) selectKnowledgeGraphNode(state, clickedNode);
    if (clickedBlank) clearKnowledgeGraphSelection(state);
    if (releasedNode && event && canvas.hasPointerCapture && canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  };
  canvas.addEventListener('pointerup', (event) => finishPointer(event, false));
  canvas.addEventListener('pointercancel', (event) => finishPointer(event, true));
  canvas.addEventListener('pointerleave', () => {
    if (state.draggingNode || state.panning) return;
    state.hover = null;
    canvas.classList.remove('node-hover');
    updateKnowledgeGraphTooltip(state, 0, 0);
  });
  document.querySelectorAll('[data-graph-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.graphAction;
      if (action === 'fit') fitKnowledgeGraph(state);
      if (action === 'fullscreen') toggleKnowledgeGraphFullscreen();
    });
  });
}

function findGraphNodeAt(state, sx, sy) {
  for (let i = state.nodes.length - 1; i >= 0; i--) {
    const node = state.nodes[i];
    const p = graphToScreen(state, node);
    const r = graphNodeRadius(node) * state.transform.k + 6;
    const dx = sx - p.x;
    const dy = sy - p.y;
    if (dx * dx + dy * dy <= r * r) return node;
  }
  return null;
}

function updateKnowledgeGraphTooltip(state, clientX, clientY) {
  const tip = state.tooltip;
  const node = state.hover;
  if (!node) {
    tip.classList.remove('show');
    return;
  }
  const typeLabel = graphNodeTypeLabel(node.type);
  tip.innerHTML = '<div class="tip-title">' + escapeHTML(node.label) + '</div><div class="tip-meta">' + typeLabel + ' · 关联 ' + (node.refs || []).length + ' 篇文献</div>';
  tip.style.left = Math.min(window.innerWidth - 320, clientX + 14) + 'px';
  tip.style.top = Math.min(window.innerHeight - 120, clientY + 14) + 'px';
  tip.classList.add('show');
}

function selectKnowledgeGraphNode(state, node) {
  state.selected = node;
  state.hover = node;
  zoteroState.graphSelectedNodeId = node.id;
  state.heat = Math.max(state.heat, 0.7);
  renderKnowledgeGraphNodeDetail(state, node);
  if (node.type === 'paper' && node.refKey && (!zoteroState.selectedItem || zoteroState.selectedItem.key !== node.refKey)) {
    loadZoteroItem(node.refKey);
  }
}

function clearKnowledgeGraphSelection(state) {
  state.selected = null;
  state.hover = null;
  zoteroState.graphSelectedNodeId = null;
  state.heat = Math.max(state.heat, 0.35);
  state.canvas.classList.remove('node-hover');
  state.tooltip.classList.remove('show');
  const panel = document.getElementById('graphNodeDetail');
  if (panel) {
    panel.innerHTML = '<div class="graph-node-placeholder"><div><div class="graph-node-placeholder-icon">⌁</div><div class="graph-insight-title">全局图谱</div><div class="graph-insight-desc">当前已恢复全部节点与关系预览。点击任意节点可再次聚焦它的一阶关联网络。</div></div></div>';
  }
}

function graphNodeTypeLabel(type) {
  if (type === 'paper') return '文献';
  if (type === 'tag') return '主题标签';
  if (type === 'author') return '作者';
  if (type === 'entity') return '实体';
  return '学术概念';
}

function graphTextSnippet(value, max = 180) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  return text.length > max ? text.slice(0, max).trim() + '…' : text;
}

function renderKnowledgeGraphNodeDetail(state, node) {
  const panel = document.getElementById('graphNodeDetail');
  if (!panel || !node) return;
  const directLinks = state.links
    .filter(link => link.source === node.id || link.target === node.id)
    .sort((a, b) => b.weight - a.weight);
  const neighbors = directLinks
    .map(link => link.source === node.id ? link.targetNode : link.sourceNode)
    .filter(Boolean);
  const relatedPapers = (node.refs || [])
    .map(key => state.nodeById.get('paper:' + key))
    .filter(Boolean);
  const paper = node.type === 'paper'
    ? (zoteroState.items || []).find(item => item.key === node.refKey)
    : null;
  const relatedNames = [];
  for (const related of [...neighbors, ...relatedPapers]) {
    if (related.id === node.id || relatedNames.includes(related.label)) continue;
    relatedNames.push(related.label);
    if (relatedNames.length >= 4) break;
  }
  let summary = '';
  if (node.type === 'paper') {
    const authorText = paper && paper.creators && paper.creators.length ? paper.creators.slice(0, 3).join('、') : '作者信息暂缺';
    const dateText = paper && paper.date ? '，发表于 ' + paper.date : '';
    const abstractText = graphTextSnippet(paper && paper.abstractNote, 155);
    summary = '这篇文献由 ' + authorText + ' 创作' + dateText + '。在当前图谱中，它连接了 ' + directLinks.length + ' 个概念、实体、作者或标签节点。' + (abstractText ? ' 摘要要点：' + abstractText : '');
  } else if (node.type === 'author') {
    summary = node.label + ' 是当前文献集合中的作者节点，共关联 ' + relatedPapers.length + ' 篇已加载文献。其连接结构可以帮助识别稳定研究方向与共同出现的主题。';
  } else if (node.type === 'tag') {
    summary = '“' + node.label + '”是 Zotero 中的主题标签，覆盖 ' + relatedPapers.length + ' 篇文献。标签连接越密集，说明它越可能是当前资料库中的核心研究方向。';
  } else if (node.type === 'entity') {
    const entityContext = graphTextSnippet(node.description, 280);
    summary = entityContext || ('“' + node.label + '”是从标题、摘要或引言中识别出的命名实体，可能对应算法、模型、数据集、实验环境或研究工具，共关联 ' + relatedPapers.length + ' 篇文献。');
  } else {
    const conceptContext = graphTextSnippet(node.description, 280);
    summary = conceptContext || ('“' + node.label + '”是从论文标题、摘要或引言中抽象出的学术概念，关联 ' + relatedPapers.length + ' 篇文献；其权重综合了出现位置、跨文献覆盖与共现强度。');
  }
  const relationsHTML = relatedNames.length
    ? '<div class="graph-node-relations">' + relatedNames.map(name => '<div class="graph-node-relation">' + escapeHTML(name) + '</div>').join('') + '</div>'
    : '<div class="graph-insight-desc">当前没有更多可展示的直接关联。</div>';
  const openButton = node.type === 'paper' && node.refKey
    ? '<button class="btn btn-primary btn-sm graph-node-action" type="button" data-graph-open-paper="' + escapeHTML(node.refKey) + '">重新加载上方详情与笔记</button>'
    : '';
  panel.innerHTML =
    '<div class="graph-node-kicker">' + graphNodeSymbolHTML(node.type) + escapeHTML(graphNodeTypeLabel(node.type)) + '</div>' +
    '<div class="graph-node-name">' + escapeHTML(node.label) + '</div>' +
    '<div class="graph-insight-title" style="margin-top:13px;">基本介绍</div>' +
    '<div class="graph-node-summary">' + escapeHTML(summary) + '</div>' +
    '<div class="graph-node-metrics">' +
      '<span class="graph-node-metric">' + directLinks.length + ' 个直接连接</span>' +
      '<span class="graph-node-metric">' + relatedPapers.length + ' 篇关联文献</span>' +
      '<span class="graph-node-metric">权重 ' + Math.round(node.weight * 10) / 10 + '</span>' +
    '</div>' +
    (relatedNames.length ? '<div class="graph-insight-title" style="margin-top:14px;">关键关联</div>' : '') +
    relationsHTML +
    openButton;
  const open = panel.querySelector('[data-graph-open-paper]');
  if (open) open.addEventListener('click', () => loadZoteroItem(open.dataset.graphOpenPaper));
}

function fitKnowledgeGraph(state) {
  if (!state.nodes.length) return;
  const xs = state.nodes.map(node => node.x);
  const ys = state.nodes.map(node => node.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const graphW = Math.max(160, maxX - minX);
  const graphH = Math.max(160, maxY - minY);
  const pad = state.width < 700 ? 70 : 110;
  const scaleX = Math.max(0.1, (state.width - pad * 2) / graphW);
  const scaleY = Math.max(0.1, (state.height - pad * 2) / graphH);
  state.transform.k = Math.max(0.42, Math.min(1.32, Math.min(scaleX, scaleY)));
  state.transform.x = -((minX + maxX) / 2) * state.transform.k;
  state.transform.y = -((minY + maxY) / 2) * state.transform.k;
}

function tickKnowledgeGraph(state) {
  simulateKnowledgeGraph(state);
  drawKnowledgeGraph(state);
  state.raf = requestAnimationFrame(() => tickKnowledgeGraph(state));
}

function simulateKnowledgeGraph(state) {
  const nodes = state.nodes;
  const selectedKey = zoteroState.selectedItem && zoteroState.selectedItem.key;
  const energy = 0.34 + Math.max(0, state.heat) * 0.9;
  const motionScale = (node) => 1 - Math.min(1, node.releaseEase || 0) * 0.68;
  if (state.draggingNode) {
    const ease = state.reduceMotion ? 0.58 : 0.44;
    const dx = state.pointer.targetGraphX - state.draggingNode.fx;
    const dy = state.pointer.targetGraphY - state.draggingNode.fy;
    let stepX = dx * ease;
    let stepY = dy * ease;
    const stepLength = Math.sqrt(stepX * stepX + stepY * stepY) || 1;
    const maxStep = 28 / Math.max(0.45, state.transform.k);
    if (stepLength > maxStep) {
      stepX = stepX / stepLength * maxStep;
      stepY = stepY / stepLength * maxStep;
    }
    state.draggingNode.fx += stepX;
    state.draggingNode.fy += stepY;
    state.draggingNode.x = state.draggingNode.fx;
    state.draggingNode.y = state.draggingNode.fy;
    state.draggingNode.vx = 0;
    state.draggingNode.vy = 0;
  }
  const exhaustiveRepulsion = nodes.length <= 360;
  const repulsionSamples = exhaustiveRepulsion ? nodes.length : Math.min(32, nodes.length - 1);
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    const comparisons = exhaustiveRepulsion ? nodes.length - i - 1 : repulsionSamples;
    for (let offset = 0; offset < comparisons; offset++) {
      const j = exhaustiveRepulsion ? i + offset + 1 : (i + (offset + 1) * 37) % nodes.length;
      if (j === i) continue;
      const b = nodes[j];
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      let d2 = dx * dx + dy * dy + 0.01;
      const d = Math.sqrt(d2);
      const force = Math.min(2.25, 1100 / d2) * energy;
      dx /= d;
      dy /= d;
      const aMotion = motionScale(a);
      const bMotion = motionScale(b);
      a.vx -= dx * force * aMotion;
      a.vy -= dy * force * aMotion;
      b.vx += dx * force * bMotion;
      b.vy += dy * force * bMotion;
    }
  }
  state.links.forEach(link => {
    const a = link.sourceNode;
    const b = link.targetNode;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    const target = link.type === 'co' ? 108 : 132;
    const strength = Math.min(0.017, 0.0032 + link.weight * 0.00155) * energy;
    const f = (d - target) * strength;
    const fx = dx / d * f;
    const fy = dy / d * f;
    const aMotion = motionScale(a);
    const bMotion = motionScale(b);
    a.vx += fx * aMotion;
    a.vy += fy * aMotion;
    b.vx -= fx * bMotion;
    b.vy -= fy * bMotion;
  });
  nodes.forEach(node => {
    const nodeMotion = motionScale(node);
    const homePull = 0.0065 * Math.max(0.62, energy);
    node.vx += ((node.homeX || 0) - node.x) * homePull * nodeMotion;
    node.vy += ((node.homeY || 0) - node.y) * homePull * nodeMotion;
    node.vx += -node.x * 0.0012 * nodeMotion;
    node.vy += -node.y * 0.0012 * nodeMotion;
    if ((state.selected && node.id === state.selected.id) || (selectedKey && node.refKey === selectedKey)) {
      node.vx += -node.x * 0.018 * nodeMotion;
      node.vy += -node.y * 0.018 * nodeMotion;
    }
    if (node.fx != null && node.fy != null) {
      node.x = node.fx;
      node.y = node.fy;
      node.vx = 0;
      node.vy = 0;
      return;
    }
    node.vx *= 0.82;
    node.vy *= 0.82;
    node.x += node.vx;
    node.y += node.vy;
    if (node.releaseEase) {
      node.releaseEase *= 0.94;
      if (node.releaseEase < 0.02) node.releaseEase = 0;
    }
  });
  state.heat = state.draggingNode ? Math.max(0.92, state.heat * 0.995) : Math.max(0.06, state.heat * 0.965);
}

function drawKnowledgeGraph(state) {
  const ctx = state.ctx;
  const dpr = state.dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, state.width, state.height);
  const isDark = document.documentElement.dataset.theme === 'dark';
  drawKnowledgeGraphCircleGuide(state, isDark);
  const hover = state.hover;
  const selectedKey = zoteroState.selectedItem && zoteroState.selectedItem.key;
  const focusNode = hover || state.selected;
  const draggingFocus = Boolean(state.draggingNode && focusNode === state.draggingNode);
  const elapsed = state.reduceMotion ? 0 : (performance.now() - state.startedAt) / 1000;
  const pulse = state.reduceMotion ? 0.5 : (Math.sin(elapsed * 2.2) + 1) / 2;
  const related = new Set();
  if (focusNode) {
    related.add(focusNode.id);
    state.links.forEach(link => {
      if (link.source === focusNode.id) related.add(link.target);
      if (link.target === focusNode.id) related.add(link.source);
    });
  }

  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  state.links.forEach(link => {
    const a = graphToScreen(state, link.sourceNode);
    const b = graphToScreen(state, link.targetNode);
    const focus = !focusNode || (related.has(link.source) && related.has(link.target));
    const directFocus = Boolean(focusNode && (link.source === focusNode.id || link.target === focusNode.id));
    const dragDirect = draggingFocus && directFocus;
    const strong = link.weight >= 2;
    const alpha = dragDirect
      ? 0.88
      : !focusNode
        ? (strong ? 0.115 : 0.038)
        : directFocus
          ? (strong ? 0.64 : 0.42)
          : focus
            ? (strong ? 0.25 : 0.11)
            : 0.018;
    const color = link.type === 'tag'
      ? '20, 184, 166'
      : link.type === 'author'
        ? (isDark ? '148, 163, 184' : '100, 116, 139')
        : link.type === 'entity'
          ? '227, 138, 66'
          : link.type === 'concept'
          ? '139, 92, 246'
          : '84, 105, 255';
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const curve = Math.min(18, Math.max(-18, (dx + dy) * 0.012));
    ctx.quadraticCurveTo(mx - dy * 0.035 + curve, my + dx * 0.035 - curve, b.x, b.y);
    ctx.strokeStyle = 'rgba(' + color + ', ' + alpha + ')';
    const globalWidthScale = focusNode ? 1 : 0.72;
    ctx.lineWidth = Math.max(0.45, Math.min(2.8, link.weight * 0.36)) * Math.max(0.65, state.transform.k) * globalWidthScale + (dragDirect ? 1.15 : 0);
    ctx.shadowColor = dragDirect ? 'rgba(' + color + ', 0.38)' : 'transparent';
    ctx.shadowBlur = dragDirect ? 7 : 0;
    ctx.stroke();
  });
  ctx.restore();

  state.nodes.forEach(node => {
    const p = graphToScreen(state, node);
    const baseR = graphNodeRadius(node) * state.transform.k;
    const isSelected = node === state.selected || (node.type === 'paper' && node.refKey === selectedKey);
    const isHovered = node === hover;
    const isDragRelated = draggingFocus && node !== state.draggingNode && related.has(node.id);
    const isFocus = !focusNode || related.has(node.id);
    const alpha = isFocus ? 1 : 0.30;
    const fill = graphNodeColor(node.type);
    const glowColor = node.type === 'tag'
      ? '20, 173, 157'
      : node.type === 'entity'
        ? '227, 138, 66'
      : node.type === 'concept'
        ? '134, 96, 226'
        : node.type === 'author'
          ? '113, 129, 151'
          : '86, 119, 238';
    const r = baseR * (isDragRelated ? 1.08 : 1) + ((isSelected || isHovered) ? pulse * 1.4 : 0);

    if (isSelected || isHovered || isDragRelated) {
      const glowRadius = r * ((isDragRelated ? 3.7 : 4.8) + pulse * 0.9);
      const glow = ctx.createRadialGradient(p.x, p.y, r * 0.2, p.x, p.y, glowRadius);
      glow.addColorStop(0, 'rgba(' + glowColor + ', ' + (isDragRelated ? '0.24' : '0.36') + ')');
      glow.addColorStop(0.42, 'rgba(' + glowColor + ', ' + (isDragRelated ? '0.10' : '0.16') + ')');
      glow.addColorStop(1, 'rgba(' + glowColor + ', 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    drawKnowledgeGraphNodeGlyph(ctx, node, p, r, {
      isDark,
      isSelected,
      isHovered,
      isRelated: isDragRelated,
      alpha,
      fill
    });
  });

  {
    const occupied = [];
    const candidates = state.nodes
      .filter(node => node === state.selected || node === hover || (draggingFocus && related.has(node.id)) || (state.labelIds.has(node.id) && state.transform.k > 0.62))
      .sort((a, b) => ((b === state.selected) - (a === state.selected)) || ((b === hover) - (a === hover)) || b.weight - a.weight);
    candidates.forEach(node => {
      const p = graphToScreen(state, node);
      const r = graphNodeRadius(node) * state.transform.k;
      const label = node.label.length > 28 ? node.label.slice(0, 27) + '…' : node.label;
      ctx.font = '600 11.5px -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif';
      const w = Math.min(250, ctx.measureText(label).width + 16);
      const x = Math.max(10, Math.min(state.width - w - 10, p.x + r + 8));
      const y = Math.max(10, Math.min(state.height - 34, p.y - 12));
      const box = { x, y, w, h: 24 };
      const overlaps = occupied.some(other => box.x < other.x + other.w + 5 && box.x + box.w + 5 > other.x && box.y < other.y + other.h + 4 && box.y + box.h + 4 > other.y);
      const priority = node === state.selected || node === hover;
      if (overlaps && !priority) return;
      occupied.push(box);
      ctx.fillStyle = isDark ? 'rgba(15, 23, 34, 0.92)' : 'rgba(255, 255, 255, 0.94)';
      ctx.strokeStyle = priority
        ? (isDark ? 'rgba(125,145,255,0.62)' : 'rgba(84,105,255,0.38)')
        : (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(70,90,120,0.11)');
      ctx.lineWidth = priority ? 1.3 : 1;
      roundRect(ctx, x, y, w, 24, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = isDark ? '#edf3fb' : '#1f2937';
      ctx.fillText(label, x + 8, y + 16);
    });
  }
  drawKnowledgeGraphThemeLabels(state, isDark);
}

function drawKnowledgeGraphCircleGuide(state, isDark) {
  const ctx = state.ctx;
  const center = graphToScreen(state, { x: 0, y: 0 });
  const radius = state.layoutRadius * state.transform.k;
  const gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius);
  gradient.addColorStop(0, isDark ? 'rgba(100, 120, 255, 0.045)' : 'rgba(84, 105, 255, 0.025)');
  gradient.addColorStop(0.72, isDark ? 'rgba(100, 120, 255, 0.022)' : 'rgba(84, 105, 255, 0.012)');
  gradient.addColorStop(1, 'rgba(84, 105, 255, 0)');
  ctx.save();
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.setLineDash([5, 9]);
  ctx.strokeStyle = isDark ? 'rgba(150, 165, 255, 0.13)' : 'rgba(84, 105, 255, 0.09)';
  ctx.lineWidth = 1;
  ctx.stroke();
  (state.contentClusters || []).forEach(cluster => {
    const clusterCenter = graphToScreen(state, cluster);
    const clusterRadius = cluster.radius * state.transform.k;
    ctx.setLineDash([3, 7]);
    ctx.fillStyle = 'rgba(' + cluster.color + ', ' + (isDark ? '0.045' : '0.028') + ')';
    ctx.strokeStyle = 'rgba(' + cluster.color + ', ' + (isDark ? '0.18' : '0.12') + ')';
    ctx.beginPath();
    ctx.arc(clusterCenter.x, clusterCenter.y, clusterRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.restore();
}

function drawKnowledgeGraphThemeLabels(state, isDark) {
  const ctx = state.ctx;
  const occupied = [];
  (state.contentClusters || []).forEach(cluster => {
    const center = graphToScreen(state, cluster);
    const radius = cluster.radius * state.transform.k;
    const rawLabel = cluster.label + ' · ' + cluster.paperCount + ' 篇';
    ctx.font = '700 11px -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif';
    let label = rawLabel;
    while (label.length > 8 && ctx.measureText(label).width > 224) label = label.slice(0, -2);
    if (label !== rawLabel) label = label.replace(/[\s·-]+$/, '') + '…';
    const width = ctx.measureText(label).width + 20;
    const height = 27;
    const anchors = [
      { x: center.x - width / 2, y: center.y - radius - height - 8 },
      { x: center.x + radius + 8, y: center.y - height / 2 },
      { x: center.x - width / 2, y: center.y + radius + 8 },
      { x: center.x - radius - width - 8, y: center.y - height / 2 }
    ];
    const candidates = anchors.map(box => {
      const bounded = {
        x: Math.max(8, Math.min(state.width - width - 8, box.x)),
        y: Math.max(8, Math.min(state.height - height - 8, box.y)),
        w: width,
        h: height
      };
      let score = Infinity;
      state.nodes.forEach(node => {
        const point = graphToScreen(state, node);
        const dx = Math.max(bounded.x - point.x, 0, point.x - (bounded.x + bounded.w));
        const dy = Math.max(bounded.y - point.y, 0, point.y - (bounded.y + bounded.h));
        score = Math.min(score, Math.sqrt(dx * dx + dy * dy) - graphNodeRadius(node) * state.transform.k);
      });
      if (occupied.some(other => bounded.x < other.x + other.w + 6 && bounded.x + bounded.w + 6 > other.x && bounded.y < other.y + other.h + 5 && bounded.y + bounded.h + 5 > other.y)) score -= 1000;
      return { box: bounded, score };
    });
    const chosen = candidates.sort((a, b) => b.score - a.score)[0].box;
    occupied.push(chosen);
    ctx.save();
    ctx.shadowColor = isDark ? 'rgba(0,0,0,0.28)' : 'rgba(33, 50, 90, 0.10)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = isDark ? 'rgba(21, 30, 44, 0.92)' : 'rgba(255, 255, 255, 0.92)';
    ctx.strokeStyle = 'rgba(' + cluster.color + ', ' + (isDark ? '0.40' : '0.26') + ')';
    ctx.lineWidth = 1;
    roundRect(ctx, chosen.x, chosen.y, chosen.w, chosen.h, 9);
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.stroke();
    ctx.fillStyle = 'rgba(' + cluster.color + ', ' + (isDark ? '0.90' : '0.82') + ')';
    ctx.fillText(label, chosen.x + 10, chosen.y + 18);
    ctx.restore();
  });
}

function traceKnowledgeGraphNode(ctx, node, p, r) {
  ctx.beginPath();
  if (node.type === 'paper') {
    const w = r * 1.72;
    const h = r * 1.48;
    roundRect(ctx, p.x - w / 2, p.y - h / 2, w, h, Math.max(2.5, r * 0.34));
    return;
  }
  if (node.type === 'tag') {
    ctx.moveTo(p.x, p.y - r);
    ctx.lineTo(p.x + r, p.y);
    ctx.lineTo(p.x, p.y + r);
    ctx.lineTo(p.x - r, p.y);
    ctx.closePath();
    return;
  }
  if (node.type === 'entity') {
    for (let side = 0; side < 6; side++) {
      const angle = -Math.PI / 2 + side * Math.PI / 3;
      const x = p.x + Math.cos(angle) * r;
      const y = p.y + Math.sin(angle) * r;
      if (side === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    return;
  }
  ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
}

function drawKnowledgeGraphNodeGlyph(ctx, node, p, r, options) {
  const { isDark, isSelected, isHovered, isRelated, alpha, fill } = options;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.shadowColor = isDark ? 'rgba(0,0,0,0.38)' : 'rgba(38, 59, 91, 0.20)';
  ctx.shadowBlur = isSelected || isHovered ? 12 : 6;
  ctx.shadowOffsetY = 2;
  const gradient = ctx.createLinearGradient(p.x, p.y - r, p.x, p.y + r);
  gradient.addColorStop(0, colorMixForGraph(fill, '#ffffff', isDark ? 0.10 : 0.20));
  gradient.addColorStop(1, colorMixForGraph(fill, '#101827', isDark ? 0.12 : 0.08));
  traceKnowledgeGraphNode(ctx, node, p, r);
  ctx.fillStyle = node.type === 'author'
    ? (isDark ? 'rgba(35, 47, 64, 0.96)' : 'rgba(255, 255, 255, 0.96)')
    : gradient;
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.lineWidth = node.type === 'author' ? Math.max(1.7, r * 0.18) : 1;
  ctx.strokeStyle = node.type === 'author'
    ? fill
    : (isDark ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.78)');
  ctx.stroke();

  const ink = node.type === 'author' ? fill : 'rgba(255,255,255,0.90)';
  ctx.strokeStyle = ink;
  ctx.fillStyle = ink;
  ctx.lineCap = 'round';
  ctx.lineWidth = Math.max(1, r * 0.12);
  if (node.type === 'paper') {
    const lineW = r * 0.56;
    [-0.22, 0.22].forEach(offset => {
      ctx.beginPath();
      ctx.moveTo(p.x - lineW / 2, p.y + r * offset);
      ctx.lineTo(p.x + lineW / 2, p.y + r * offset);
      ctx.stroke();
    });
  } else if (node.type === 'tag') {
    ctx.beginPath();
    ctx.arc(p.x + r * 0.32, p.y - r * 0.32, Math.max(1.2, r * 0.13), 0, Math.PI * 2);
    ctx.fill();
  } else if (node.type === 'author') {
    ctx.beginPath();
    ctx.arc(p.x, p.y - r * 0.20, Math.max(1.5, r * 0.22), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p.x, p.y + r * 0.54, r * 0.44, Math.PI * 1.08, Math.PI * 1.92);
    ctx.stroke();
  } else if (node.type === 'entity') {
    ctx.beginPath();
    ctx.moveTo(p.x, p.y - r * 0.38);
    ctx.lineTo(p.x + r * 0.34, p.y);
    ctx.lineTo(p.x, p.y + r * 0.38);
    ctx.lineTo(p.x - r * 0.34, p.y);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(1.4, r * 0.2), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p.x, p.y, r * 0.54, 0, Math.PI * 2);
    ctx.globalAlpha = alpha * 0.42;
    ctx.stroke();
  }

  if (isSelected || isHovered || isRelated) {
    ctx.globalAlpha = alpha;
    ctx.lineWidth = isSelected ? 2.2 : isRelated ? 1.35 : 1.5;
    ctx.strokeStyle = isRelated
      ? (isDark ? 'rgba(161,180,255,0.62)' : 'rgba(76,105,231,0.48)')
      : (isDark ? 'rgba(220,229,255,0.90)' : 'rgba(70,91,225,0.72)');
    traceKnowledgeGraphNode(ctx, node, p, r + (isSelected ? 3.4 : isRelated ? 2.6 : 2.2));
    ctx.stroke();
  }
  ctx.restore();
}

function colorMixForGraph(hexA, hexB, amount) {
  const parse = (hex) => {
    const clean = String(hex).replace('#', '');
    const value = parseInt(clean.length === 3 ? clean.split('').map(char => char + char).join('') : clean, 16);
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
  };
  const a = parse(hexA);
  const b = parse(hexB);
  const mixed = a.map((value, index) => Math.round(value + (b[index] - value) * amount));
  return 'rgb(' + mixed.join(',') + ')';
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// ========================================================================
// ZOTERO LOCAL BRIDGE (read-only)
// ========================================================================
function zoteroBridgeHint() {
  return '未检测到 Zotero 本机 Agent。请在项目根目录运行“npm run dev:zotero-agent”后重试。';
}

function zoteroFetch(path) {
  return fetch(workspaceApiUrl('/api/zotero' + path), { headers: { 'Accept': 'application/json' } })
    .catch(() => {
      throw new Error(zoteroBridgeHint());
    })
    .then(async response => {
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || '无法读取 Zotero 数据');
      return body;
    });
}

async function enrichZoteroKnowledgeText(items) {
  const documentsByKey = new Map();
  for (let start = 0; start < items.length; start += 24) {
    const keys = items.slice(start, start + 24).map(item => item.key).filter(Boolean);
    if (!keys.length) continue;
    try {
      const result = await zoteroFetch('/knowledge-text?keys=' + encodeURIComponent(keys.join(',')));
      (result.documents || []).forEach(document => documentsByKey.set(document.key, document));
    } catch (error) {
      console.warn('Zotero 全文知识抽取暂不可用，已回退到标题与摘要：', error.message);
      break;
    }
  }
  items.forEach(item => {
    const document = documentsByKey.get(item.key);
    if (!document) return;
    item.indexedAbstractText = document.abstractText || '';
    item.introductionText = document.introductionText || '';
    item.knowledgeSource = document.source || 'metadata';
  });
  return items;
}

async function fetchAllZoteroItems({ collection = '', query = '' } = {}) {
  const items = [];
  const seen = new Set();
  let start = 0;
  let total = 0;
  let hasMore = true;
  while (hasMore) {
    const params = new URLSearchParams({ limit: String(ZOTERO_FETCH_BATCH_SIZE), start: String(start) });
    if (collection) params.set('collection', collection);
    if (query) params.set('q', query);
    const result = await zoteroFetch('/items?' + params.toString());
    const page = result.items || [];
    page.forEach(item => {
      if (!item || seen.has(item.key)) return;
      seen.add(item.key);
      items.push(item);
    });
    total = Number.isFinite(result.total) ? result.total : Math.max(total, items.length);
    start = (result.start || start) + page.length;
    hasMore = Boolean(result.hasMore) && page.length > 0;
  }
  await enrichZoteroKnowledgeText(items);
  return { items, total: Math.max(total, items.length), nextStart: start, hasMore: false };
}

function resetZoteroReadStatus() {
  zoteroState.readStatusByKey = {};
  zoteroState.readStatusLoading = false;
  zoteroState.readStatusRequestVersion++;
}

async function refreshZoteroReadStatuses(items = zoteroState.items || []) {
  const candidates = items.filter(item => item && item.key);
  if (!candidates.length || zoteroState.status !== 'connected') return;
  const requestVersion = ++zoteroState.readStatusRequestVersion;
  zoteroState.readStatusLoading = true;
  rerender();
  const nextStatus = { ...(zoteroState.readStatusByKey || {}) };
  let changed = false;
  for (let start = 0; start < candidates.length; start += 6) {
    if (requestVersion !== zoteroState.readStatusRequestVersion) return;
    const batch = candidates.slice(start, start + 6);
    await Promise.all(batch.map(async item => {
      try {
        const result = await zoteroFetch('/items/' + encodeURIComponent(item.key) + '/children');
        const children = result.children || [];
        const note = findAIReadingNoteByConvention(children);
        nextStatus[item.key] = { checked: true, read: Boolean(note), noteTitle: note ? note.title || '' : '' };
      } catch (error) {
        nextStatus[item.key] = { checked: true, read: false, error: error.message || '读取失败' };
      }
      changed = true;
    }));
    if (changed && requestVersion === zoteroState.readStatusRequestVersion) {
      zoteroState.readStatusByKey = { ...nextStatus };
      rerender();
    }
  }
  if (requestVersion === zoteroState.readStatusRequestVersion) {
    zoteroState.readStatusLoading = false;
    zoteroState.readStatusByKey = nextStatus;
    rerender();
  }
}

function zoteroStatusHTML() {
  if (zoteroState.status === 'connected') {
    return '<span class="storage-badge fsaa">✓ Zotero 已连接</span>';
  }
  if (zoteroState.status === 'loading') {
    return '<span class="storage-badge local">正在连接 Zotero…</span>';
  }
  return '<span class="storage-badge local">Zotero 未连接</span>';
}

function zoteroItemHTML(item) {
  const meta = [];
  if (item.creators && item.creators.length) meta.push(item.creators.slice(0, 2).join('、'));
  if (item.date) meta.push(item.date);
  if (item.tags && item.tags.length) meta.push(item.tags.slice(0, 3).map(tag => '#' + tag).join(' '));
  return '<button class="zotero-item' + (zoteroState.selectedItem && zoteroState.selectedItem.key === item.key ? ' selected' : '') + '" data-zotero-item="' + item.key + '">' +
    '<span class="zotero-item-title">' + escapeHTML(item.title) + '</span>' +
    '<span class="zotero-item-meta">' + escapeHTML(meta.join(' · ') || item.itemType || '文献') + '</span>' +
  '</button>';
}

function findAIReadingNoteByConvention(children = []) {
  const notes = children.filter(child => child && child.type === 'note');
  const managerMarker = /^AI\s*管家\s*[-—–:：]/i;
  const summaryMarker = /^AI\s*总结\s*[-—–:：]/i;
  const managerTag = /^AI\s*管家\s*[-—–:：]?$/i;
  const summaryTag = /^AI\s*总结\s*[-—–:：]?$/i;
  const findByConvention = (marker, tagMarker) => notes.find(note =>
    marker.test(String(note.title || '').trim()) ||
    (note.tags || []).some(tag => tagMarker.test(String(tag || '').trim())) ||
    marker.test(stripHTML(note.note).trim())
  );
  return findByConvention(managerMarker, managerTag) ||
    findByConvention(summaryMarker, summaryTag) ||
    null;
}

function findAIManagerNote(children = zoteroState.children || []) {
  const notes = children.filter(child => child && child.type === 'note');
  return findAIReadingNoteByConvention(children) || notes[0] || null;
}

function notePreviewText(note, limit = 520) {
  const text = stripHTML(note && note.note).replace(/\u00a0/g, ' ').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  if (!text) return '';
  return text.length > limit ? text.slice(0, limit).trimEnd() + '…' : text;
}

function zoteroNotesHTML() {
  if (zoteroState.detailLoading) {
    return emptyStateHTML('⏳', '正在加载文献详情与笔记', '已从知识图谱选择文献，正在读取 Zotero 条目和关联笔记。');
  }
  const item = zoteroState.selectedItem;
  if (!item) return emptyStateHTML('📚', '选择一篇文献查看详情', '可查看文献基本信息和对应的 Zotero 子笔记。');
  const details = [];
  if (item.creators && item.creators.length) details.push('作者：' + item.creators.join('、'));
  if (item.date) details.push('日期：' + item.date);
  if (item.itemType) details.push('类型：' + item.itemType);
  if (item.tags && item.tags.length) details.push('标签：' + item.tags.map(tag => '#' + tag).join(' '));

  const aiNote = findAIManagerNote();
  let noteHTML;
  if (!aiNote) {
    noteHTML = emptyStateHTML('📝', '未找到文献笔记', '该 Zotero 条目目前没有可读取的子笔记。');
  } else {
    const preview = notePreviewText(aiNote);
    const fullLength = stripHTML(aiNote.note).trim().length;
    noteHTML = '<div class="zotero-note-preview">' +
      '<div class="zotero-note-preview-main">' +
        '<div class="zotero-note-preview-title">文献笔记 · ' + escapeHTML(aiNote.title || '未命名笔记') + '</div>' +
        '<div class="zotero-note-preview-text">' + escapeHTML(preview || '该阅读笔记暂时没有可预览的文字内容。') + '</div>' +
        '<div class="zotero-note-preview-meta">' + (fullLength ? '约 ' + fullLength.toLocaleString('zh-CN') + ' 字符 · 预览已自动收起' : '笔记内容为空') + '</div>' +
      '</div>' +
      '<button class="btn btn-primary btn-sm zotero-read-btn" data-action="zotero-read-note" type="button"' + (fullLength ? '' : ' disabled aria-disabled="true"') + '>阅读完整笔记</button>' +
    '</div>';
  }

  return '<div class="zotero-paper-info">' +
      '<div class="zotero-paper-title">' + escapeHTML(item.title) + '</div>' +
      '<div class="zotero-paper-meta">' + escapeHTML(details.join(' · ') || 'Zotero 文献条目') + '</div>' +
      (item.abstractNote ? '<div class="zotero-paper-abstract">' + escapeHTML(item.abstractNote) + '</div>' : '') +
    '</div>' +
    '<div class="zotero-note-section-title"><div class="settings-label">文献笔记</div><span class="card-tag">预览</span></div>' + noteHTML;
}

function stripHTML(value) {
  const div = document.createElement('div');
  div.innerHTML = value || '';
  return div.textContent || div.innerText || '';
}

function normalizeZoteroMath(root) {
  const mathNodes = Array.from(root.querySelectorAll('.math'));
  mathNodes.forEach(node => {
    let tex = (node.textContent || '').replace(/\u00a0/g, ' ').trim();
    if (!tex) return;
    let display = false;
    if (tex.startsWith('$$') && tex.endsWith('$$') && tex.length >= 4) {
      tex = tex.slice(2, -2).trim();
      display = true;
    } else if (tex.startsWith('$') && tex.endsWith('$') && tex.length >= 2) {
      tex = tex.slice(1, -1).trim();
      display = /\\displaystyle\b/.test(tex) || /\n/.test(tex);
    } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
      tex = tex.slice(2, -2).trim();
      display = true;
    } else if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
      tex = tex.slice(2, -2).trim();
    }
    tex = tex.replace(/\r\n?/g, '\n').replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n');
    node.textContent = display ? '\\[' + tex + '\\]' : '\\(' + tex + '\\)';
    node.className = display ? 'math zotero-math-display' : 'math zotero-math-inline';
  });
  return mathNodes.length;
}

function sanitizeZoteroNoteHTML(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (!/<[a-z][\s\S]*>/i.test(raw)) {
    return '<p>' + escapeHTML(raw).replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';
  }

  const template = document.createElement('template');
  template.innerHTML = raw;
  const allowedTags = new Set(['A', 'ABBR', 'B', 'BLOCKQUOTE', 'BR', 'CODE', 'DEL', 'DIV', 'EM', 'H1', 'H2', 'H3', 'H4', 'HR', 'I', 'IMG', 'LI', 'MARK', 'OL', 'P', 'PRE', 'S', 'SPAN', 'STRONG', 'SUB', 'SUP', 'TABLE', 'TBODY', 'TD', 'TH', 'THEAD', 'TR', 'U', 'UL']);
  const allowedAttrs = new Set(['alt', 'class', 'colspan', 'href', 'rowspan', 'src', 'title']);

  Array.from(template.content.querySelectorAll('*')).forEach(node => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(...node.childNodes);
      return;
    }
    Array.from(node.attributes).forEach(attr => {
      const name = attr.name.toLowerCase();
      if (!allowedAttrs.has(name)) node.removeAttribute(attr.name);
    });
    if (node.tagName === 'A') {
      const href = node.getAttribute('href') || '';
      if (!/^(https?:|zotero:|mailto:|#)/i.test(href)) node.removeAttribute('href');
      else {
        node.setAttribute('target', '_blank');
        node.setAttribute('rel', 'noopener noreferrer');
      }
    }
    if (node.tagName === 'IMG') {
      const src = node.getAttribute('src') || '';
      if (!/^(https?:|data:image\/|blob:)/i.test(src)) node.remove();
    }
  });
  normalizeZoteroMath(template.content);
  return template.innerHTML;
}

let mathJaxLoading = null;
function ensureMathJax() {
  if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') return Promise.resolve(window.MathJax);
  if (mathJaxLoading) return mathJaxLoading;
  window.MathJax = {
    startup: { typeset: false },
    tex: {
      inlineMath: [['\\(', '\\)'], ['$', '$']],
      displayMath: [['\\[', '\\]'], ['$$', '$$']],
      processEscapes: true,
      processEnvironments: true,
      packages: { '[+]': ['ams'] }
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
      processHtmlClass: 'math|zotero-math-inline|zotero-math-display'
    },
    svg: {
      fontCache: 'local',
      scale: 1.08,
      displayAlign: 'center',
      displayIndent: '0'
    }
  };
  mathJaxLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = new URL('assets/vendor/mathjax/tex-mml-svg.js', document.baseURI).href;
    script.async = true;
    script.onload = () => {
      const ready = window.MathJax && window.MathJax.startup && window.MathJax.startup.promise;
      Promise.resolve(ready).then(() => resolve(window.MathJax)).catch(reject);
    };
    script.onerror = () => reject(new Error('公式渲染组件加载失败'));
    document.head.appendChild(script);
  }).catch(error => {
    mathJaxLoading = null;
    throw error;
  });
  return mathJaxLoading;
}

async function renderReaderMath() {
  const content = document.getElementById('noteReaderContent');
  const status = document.getElementById('noteReaderStatus');
  if (!content || !status) return;
  const source = stripHTML(content.innerHTML);
  const hasFormula = content.querySelector('.math, .zotero-math-inline, .zotero-math-display') || /\$[\s\S]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\]/.test(source);
  if (!hasFormula) {
    status.textContent = '已加载完整 Zotero 笔记';
    return;
  }
  status.textContent = '正在排版 LaTeX 公式…';
  try {
    const mathJax = await ensureMathJax();
    if (!document.getElementById('noteReader').classList.contains('show')) return;
    if (typeof mathJax.typesetClear === 'function') mathJax.typesetClear([content]);
    await mathJax.typesetPromise([content]);
    status.textContent = 'LaTeX 公式已完成排版';
  } catch (error) {
    status.textContent = '公式渲染组件暂不可用，已保留 LaTeX 原文，可稍后重新打开重试。';
  }
}

function openZoteroNoteReader() {
  const item = zoteroState.selectedItem;
  const note = findAIManagerNote();
  const body = note && String(note.note || '').trim();
  if (!item || !note) {
    showToast('未找到该文献的“AI 管家”阅读笔记', 'warning');
    return;
  }
  if (!body || !stripHTML(body).trim()) {
    showToast('该阅读笔记内容为空', 'warning');
    return;
  }

  const meta = [];
  if (item.creators && item.creators.length) meta.push(item.creators.join('、'));
  if (item.date) meta.push(item.date);
  const reader = document.getElementById('noteReader');
  document.getElementById('noteReaderTitle').textContent = 'AI 阅读笔记';
  document.getElementById('noteReaderPaperTitle').textContent = item.title || '未命名文献';
  document.getElementById('noteReaderPaperMeta').textContent = meta.join(' · ') || '来自 Zotero 的只读文献笔记';
  document.getElementById('noteReaderStatus').textContent = '正在加载完整笔记…';
  document.getElementById('noteReaderContent').innerHTML = sanitizeZoteroNoteHTML(body);
  reader.classList.add('show');
  reader.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('noteReaderScroll').scrollTop = 0;
  setTimeout(() => document.getElementById('noteReaderClose').focus(), 0);
  renderReaderMath();
}

function finishCloseZoteroNoteReader() {
  const reader = document.getElementById('noteReader');
  reader.classList.remove('show');
  reader.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.getElementById('noteReaderContent').innerHTML = '';
  document.getElementById('noteReaderStatus').textContent = '';
}

function closeZoteroNoteReader() {
  const reader = document.getElementById('noteReader');
  if (document.fullscreenElement && reader.contains(document.fullscreenElement)) {
    document.exitFullscreen().catch(() => {}).finally(finishCloseZoteroNoteReader);
    return;
  }
  finishCloseZoteroNoteReader();
}

function toggleZoteroNoteFullscreen() {
  const reader = document.getElementById('noteReader');
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => showToast('无法退出全屏，请按 Esc 重试', 'warning'));
    return;
  }
  if (!reader.requestFullscreen) {
    showToast('当前浏览器不支持系统全屏，阅读器已保持沉浸式铺满窗口', 'warning');
    return;
  }
  reader.requestFullscreen().catch(() => showToast('无法进入全屏，请检查浏览器权限', 'warning'));
}

function syncNoteReaderFullscreenButton() {
  const button = document.getElementById('noteReaderFullscreen');
  if (!button) return;
  const active = Boolean(document.fullscreenElement);
  button.textContent = active ? '退出全屏' : '全屏';
  button.setAttribute('aria-label', active ? '退出全屏阅读' : '进入全屏阅读');
}

document.getElementById('noteReaderClose').addEventListener('click', closeZoteroNoteReader);
document.getElementById('noteReaderFullscreen').addEventListener('click', toggleZoteroNoteFullscreen);
document.addEventListener('fullscreenchange', syncNoteReaderFullscreenButton);

async function refreshZoteroLibrary() {
  if (zoteroState.status === 'loading') return;
  const requestVersion = ++zoteroState.connectRequestVersion;
  zoteroState.status = 'loading';
  zoteroState.message = '正在连接 Zotero…';
  zoteroState.loadingMore = false;
  resetZoteroReadStatus();
  rerender();
  try {
    const [health, collections, items] = await Promise.all([
      zoteroFetch('/health'),
      zoteroFetch('/collections'),
      fetchAllZoteroItems()
    ]);
    if (requestVersion !== zoteroState.connectRequestVersion) return;
    zoteroState.status = health.ok ? 'connected' : 'error';
    zoteroState.collections = collections.collections || [];
    zoteroState.items = items.items || [];
    zoteroState.total = Number.isFinite(items.total) ? items.total : zoteroState.items.length;
    zoteroState.nextStart = (items.start || 0) + zoteroState.items.length;
    zoteroState.hasMore = Boolean(items.hasMore);
    zoteroState.selectedCollection = '';
    zoteroState.query = '';
    zoteroState.selectedItem = null;
    zoteroState.children = [];
    zoteroState.detailLoading = false;
    zoteroState.detailRequestVersion++;
    zoteroState.graphSelectedNodeId = null;
    zoteroState.graphAllItems = zoteroState.items.slice();
    zoteroState.graphAllCacheKey = zoteroGraphCacheKey();
    zoteroState.graphAllLoading = false;
  } catch (error) {
    if (requestVersion !== zoteroState.connectRequestVersion) return;
    zoteroState.status = 'error';
    zoteroState.message = error.message || '无法连接 Zotero';
  }
  rerender();
}

async function loadZoteroItems({ append = false } = {}) {
  if (zoteroState.status === 'loading') return;
  const requestVersion = ++zoteroState.itemsRequestVersion;
  zoteroState.status = 'loading';
  zoteroState.message = '正在读取 Zotero 文献…';
  zoteroState.loadingMore = false;
  zoteroState.graphAllLoading = true;
  resetZoteroReadStatus();
  rerender();
  try {
    const result = await fetchAllZoteroItems({
      collection: zoteroState.selectedCollection,
      query: zoteroState.query
    });
    if (requestVersion !== zoteroState.itemsRequestVersion) return;
    zoteroState.items = result.items || [];
    zoteroState.selectedItem = null;
    zoteroState.children = [];
    zoteroState.detailLoading = false;
    zoteroState.detailRequestVersion++;
    zoteroState.graphSelectedNodeId = null;
    zoteroState.total = Number.isFinite(result.total) ? result.total : zoteroState.items.length;
    zoteroState.nextStart = result.nextStart || zoteroState.items.length;
    zoteroState.hasMore = false;
    zoteroState.loadingMore = false;
    zoteroState.graphAllLoading = false;
    zoteroState.status = 'connected';
    zoteroState.graphAllItems = zoteroState.items.slice();
    zoteroState.graphAllCacheKey = zoteroGraphCacheKey();
  } catch (error) {
    if (requestVersion !== zoteroState.itemsRequestVersion) return;
    zoteroState.loadingMore = false;
    zoteroState.graphAllLoading = false;
    zoteroState.status = 'error';
    zoteroState.message = error.message || '无法读取 Zotero 文献';
  }
  rerender();
}

function loadMoreZoteroItems() {
  return loadZoteroItems({ append: true });
}

async function loadZoteroItem(key) {
  if (!key) return;
  zoteroState.graphSelectedNodeId = 'paper:' + key;
  if (zoteroState.selectedItem && zoteroState.selectedItem.key === key && !zoteroState.detailLoading) {
    rerender();
    return;
  }
  const requestVersion = ++zoteroState.detailRequestVersion;
  zoteroState.detailLoading = true;
  rerender();
  try {
    const [itemResult, childResult] = await Promise.all([
      zoteroFetch('/items/' + encodeURIComponent(key)),
      zoteroFetch('/items/' + encodeURIComponent(key) + '/children')
    ]);
    if (requestVersion !== zoteroState.detailRequestVersion) return;
    zoteroState.selectedItem = itemResult.item;
    zoteroState.children = childResult.children || [];
    zoteroState.readStatusByKey = {
      ...(zoteroState.readStatusByKey || {}),
      [key]: {
        checked: true,
        read: Boolean(findAIReadingNoteByConvention(zoteroState.children)),
        noteTitle: (findAIReadingNoteByConvention(zoteroState.children) || {}).title || ''
      }
    };
    zoteroState.status = 'connected';
  } catch (error) {
    if (requestVersion !== zoteroState.detailRequestVersion) return;
    zoteroState.status = 'connected';
    showToast(error.message || '无法读取 Zotero 文献详情', 'error');
  } finally {
    if (requestVersion === zoteroState.detailRequestVersion) {
      zoteroState.detailLoading = false;
      rerender();
    }
  }
}

// ========================================================================
// RESEARCH INSPIRATION
// ========================================================================
const RESEARCH_IDEA_STATUS = ['待验证', '进行中', '已完成'];
const RESEARCH_IDEA_STAGES = [
  { key: 'idea', label: 'Idea 定义', short: 'Idea', desc: '先把模糊的直觉变成一个可讨论、可边界化的研究问题。', fields: [
    ['problem', '核心问题', '你真正想回答的问题是什么？', '用一句疑问句写下研究问题…'],
    ['observation', '最初观察', '灵感从哪个现象、异常或矛盾中产生？', '记录你看到的现象、反常识结果或未解释的细节…'],
    ['scope', '一句话 Idea', '如果只有 30 秒，你会如何讲清这个想法？', '我们希望通过…来解决…']
  ]},
  { key: 'motivation', label: 'Motivation', short: 'Motivation', desc: '证明这不只是一个有趣的点子，而是一个值得被解决的问题。', fields: [
    ['pain', '为什么重要', '谁正在因为这个问题付出什么代价？', '描述实际需求、理论矛盾或当前方法的核心痛点…'],
    ['gap', '现有工作缺口', '已有方法为什么不够？', '列出关键 related work，以及它们未能解决的缺口…'],
    ['novelty', '新意与贡献', '相比现有工作，你带来了什么新理解、新方法或新能力？', '用 2–3 条写下预期的 novelty 与 contributions…']
  ]},
  { key: 'solution', label: 'Related Work', short: 'Related Work', desc: '系统定位最相关的研究脉络，明确已有工作的边界与本研究的切入位置。', fields: [
    ['landscape', '研究脉络', '这个问题属于哪些主要研究方向？', '按主题整理相关工作，而不是单纯罗列论文…'],
    ['limitations', '关键工作与局限', '最相关方法做了什么，还缺少什么？', '记录代表性论文、核心方法、主要结论与局限…'],
    ['positioning', '本研究定位', '你的 Idea 与已有工作的关系是延伸、组合还是修正？', '说明直接对比对象、差异点与预期新贡献…']
  ]},
  { key: 'implementation', label: 'Method', short: 'Method', desc: '先梳理整体框架，再展开具体实现，让方法设计更清晰、易复现。', fields: [
    ['framework', '整体框架', '你的方法整体如何工作？各模块之间如何连接？', '描述总体架构、完整 pipeline、数据流，以及模型组件之间的关系…'],
    ['implementation', '具体实现', '如何把整体框架落地为可运行、可复现的系统？', '说明各模块的实现细节、训练/推理流程、代码与数据安排、技术风险及备选方案…']
  ]},
  { key: 'experiment', label: 'Experiment', short: 'Experiment', desc: '让每个实验都对应一个研究问题，并能支撑或否定核心主张。', fields: [
    ['questions', '研究问题（RQ）', '每组实验要回答什么？', '列出 RQ1 / RQ2 / RQ3，并标注对应的论文主张…'],
    ['setup', '数据与实验设置', '在什么数据、环境与约束下验证？', '数据集、划分方式、硬件、训练细节、随机种子…'],
    ['baselines', 'Baselines 与对照', '要超过谁，如何保证比较公平？', '强 baseline、简单 baseline、上界/下界与对照组…'],
    ['metrics', '指标与统计', '什么数据能真正衡量成功？', '主指标、次指标、显著性检验、置信区间…'],
    ['ablations', '消融与分析', '如何证明收益来自你宣称的机制？', '消融实验、敏感性分析、失败案例与可视化计划…']
  ]}
];

function researchIdeaStore() {
  const research = DATA.learning.research;
  if (!research.inspirations) research.inspirations = { items: [] };
  if (!Array.isArray(research.inspirations.items)) research.inspirations.items = [];
  research.inspirations.items.forEach(item => {
    researchIdeaDevelopment(item);
    item.status = researchIdeaDerivedStatus(item);
  });
  return research.inspirations.items;
}

function researchIdeaDevelopment(item) {
  if (!item.development || typeof item.development !== 'object') item.development = {};
  RESEARCH_IDEA_STAGES.forEach((stage, index) => {
    if (!item.development[stage.key] || typeof item.development[stage.key] !== 'object') item.development[stage.key] = {};
    const record = item.development[stage.key];
    if (typeof record.done !== 'boolean') record.done = false;
    if (typeof record.status !== 'string') record.status = record.done ? 'done' : 'pending';
    stage.fields.forEach(field => {
      const key = field[0];
      if (typeof record[key] !== 'string') record[key] = '';
    });
  });
  const idea = item.development.idea;
  if (!item.development._legacyImported) {
    if (!idea.observation && item.content) idea.observation = item.content;
    if (!idea.scope && item.title) idea.scope = item.title;
    item.development._legacyImported = true;
  }
  if (!item.development._noveltyMoved) {
    const oldNovelty = item.development.solution && item.development.solution.novelty;
    if (!item.development.motivation.novelty && oldNovelty) item.development.motivation.novelty = oldNovelty;
    item.development._noveltyMoved = true;
  }
  if (!item.development._impactMerged) {
    const motivation = item.development.motivation;
    const oldImpact = String(motivation.impact || '').trim();
    if (oldImpact) motivation.novelty = motivation.novelty.trim() ? motivation.novelty.trim() + '\n\n价值补充：' + oldImpact : oldImpact;
    item.development._impactMerged = true;
  }
  // Method 阶段由“系统架构 / 实现清单 / 技术风险与备选”整理为
  // “整体框架 / 具体实现”两部分；保留旧数据，避免升级后内容丢失。
  if (!item.development._methodReorganized) {
    const method = item.development.implementation;
    if (!method.framework && method.architecture) method.framework = method.architecture;
    const legacyImplementation = [method.modules, method.risks].filter(value => String(value || '').trim()).join('\n\n');
    if (!method.implementation && legacyImplementation) method.implementation = legacyImplementation;
    item.development._methodReorganized = true;
  }
  return item.development;
}

function researchIdeaStageStatus(record) {
  if (!record) return 'pending';
  if (record.done) return 'done';
  const hasContent = Object.keys(record).some(key => key !== 'done' && key !== 'status' && String(record[key] || '').trim());
  return hasContent ? 'active' : 'pending';
}

function researchIdeaStageStatusLabel(status) {
  return status === 'done' ? '已完成' : status === 'active' ? '进行中' : '未开始';
}

function researchIdeaStageProgress(record, stage) {
  const total = stage && Array.isArray(stage.fields) ? stage.fields.length : 0;
  const completed = stage && record ? stage.fields.filter(field => String(record[field[0]] || '').trim()).length : 0;
  return { completed, total };
}

function researchDdlCountdown(value) {
  if (!value) return '未设置';
  const target = new Date(value.length === 10 ? value + 'T23:59:59+08:00' : /[zZ]|[+-]\d{2}:?\d{2}$/.test(value) ? value : value + ':00+08:00');
  const diff = target.getTime() - Date.now();
  if (!Number.isFinite(diff)) return '日期无效';
  if (diff < 0) return '已截止';
  const totalMinutes = Math.ceil(diff / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  return '剩余 <strong>' + days + '天 ' + hours + '小时 ' + minutes + '分钟</strong>';
}

function researchDdlInputValue(value) {
  if (!value) return '';
  const match = String(value).match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})/);
  return match ? match[1] : String(value).slice(0, 10) + 'T23:59';
}

async function refreshResearchConferenceDDL(item, venue) {
  const query = String(venue || '').trim();
  if (!query) return;
  try {
    const response = await fetch(workspaceApiUrl('/api/ccfddl?query=' + encodeURIComponent(query)), { headers: { 'Accept': 'application/json' } });
    const body = await response.json().catch(() => ({}));
    if (!response.ok || !body.data) throw new Error('未找到对应会议的 CCFDDL');
    item.targetVenue = query;
    item.abstractDeadline = body.data.abstractDeadline || '';
    item.paperDeadline = body.data.paperDeadline || '';
    item.ddlSource = body.data.source;
    item.ddlTimezone = body.data.timezone;
    item.updatedAt = new Date().toISOString();
    save();
    rerender();
    showToast('已从 CCFDDL 更新摘要与正文 DDL（北京时间）', 'success');
  } catch (error) {
    // Journals generally have no single deadline; leave both fields empty.
    item.abstractDeadline = '';
    item.paperDeadline = '';
    item.ddlSource = 'journal-or-not-found';
    item.updatedAt = new Date().toISOString();
    save();
    rerender();
    showToast(error.message || '未找到会议 DDL，已按无固定 DDL 处理', 'warning');
  }
}

function updateResearchStageStatusUI(textarea) {
  const key = textarea && textarea.dataset.researchIdeaStageKey;
  if (!key) return;
  const item = researchIdeaStore().find(x => x.id === (textarea.dataset.researchIdeaId || researchInspirationState.selectedId));
  if (!item) return;
  const record = researchIdeaDevelopment(item)[key];
  const status = researchIdeaStageStatus(record);
  const stage = RESEARCH_IDEA_STAGES.find(item => item.key === key);
  const progress = researchIdeaStageProgress(record, stage);
  const partial = status === 'active' && progress.completed < progress.total;
  const tab = document.querySelector('[data-research-idea-stage="' + key + '"]');
  if (tab) {
    tab.classList.toggle('is-done', status === 'done');
    tab.classList.toggle('is-in-progress', status === 'active');
    tab.classList.toggle('is-partial', partial);
    const number = tab.querySelector('.research-stage-tab-number');
    if (number) number.textContent = status === 'done' ? '✓' : (RESEARCH_IDEA_STAGES.findIndex(stage => stage.key === key) + 1);
    const statusLabel = tab.querySelector('.research-stage-tab-status');
    if (statusLabel) statusLabel.textContent = researchIdeaStageStatusLabel(status);
  }
  const state = document.querySelector('.research-stage-panel-head .research-stage-save-state');
  if (state && key === researchInspirationState.stage) state.textContent = researchIdeaStageStatusLabel(status) + ' · 自动保存 · Markdown + LaTeX';
}

function researchIdeaProgress(item) {
  const development = researchIdeaDevelopment(item);
  const done = RESEARCH_IDEA_STAGES.filter(stage => development[stage.key].done).length;
  const firstOpen = RESEARCH_IDEA_STAGES.find(stage => !development[stage.key].done);
  return { done, percent: Math.round(done / RESEARCH_IDEA_STAGES.length * 100), current: firstOpen || RESEARCH_IDEA_STAGES[RESEARCH_IDEA_STAGES.length - 1] };
}

function researchIdeaDerivedStatus(item) {
  const progress = researchIdeaProgress(item);
  if (progress.done === 0) return '待验证';
  if (progress.done === RESEARCH_IDEA_STAGES.length) return '已完成';
  return '进行中';
}

function researchIdeaStatusClass(status) {
  if (status === '进行中') return 'status-active';
  if (status === '已完成') return 'status-done';
  return '';
}

function researchIdeaDate(value) {
  if (!value) return '未记录';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).slice(0, 10);
  return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
}

function researchIdeaFilters(items) {
  const categories = [...new Set(items.map(item => item.category).filter(Boolean))].sort();
  const tags = [...new Set(items.flatMap(item => Array.isArray(item.tags) ? item.tags : []))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  const sources = [...new Set(items.map(item => item.sourceType).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  return { categories, tags, sources };
}

function researchIdeaVisibleItems() {
  const state = researchInspirationState;
  const query = state.query.trim().toLowerCase();
  const matches = researchIdeaStore().filter(item => {
    if (state.scope === 'active' && item.archived) return false;
    if (state.scope === 'favorite' && (!item.favorite || item.archived)) return false;
    if (state.scope === 'archive' && !item.archived) return false;
    if (state.category === '__uncategorized__' && item.category) return false;
    if (state.category && state.category !== '__uncategorized__' && item.category !== state.category) return false;
    if (state.tag && !(item.tags || []).includes(state.tag)) return false;
    if (state.status && item.status !== state.status) return false;
    if (state.source && item.sourceType !== state.source) return false;
    if (query) {
      const text = [item.title, item.content, item.category, item.sourceType, item.sourceReference, item.project, ...(item.tags || [])].join(' ').toLowerCase();
      if (!text.includes(query)) return false;
    }
    return true;
  });
  return matches.sort((a, b) => {
    if (state.sort === 'created') return String(b.createdAt || '').localeCompare(String(a.createdAt || ''));
    if (state.sort === 'occurred') return String(b.occurredAt || b.createdAt || '').localeCompare(String(a.occurredAt || a.createdAt || ''));
    if (state.sort === 'title') return String(a.title || '').localeCompare(String(b.title || ''), 'zh-CN');
    if (state.sort === 'category') return String(a.category || '未分类').localeCompare(String(b.category || '未分类'), 'zh-CN') || String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
    if (state.sort === 'source') return String(a.sourceType || '未记录').localeCompare(String(b.sourceType || '未记录'), 'zh-CN') || String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
    if (state.sort === 'favorite') return Number(b.favorite) - Number(a.favorite) || String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
    return String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
  });
}

function researchIdeaActiveFilterText() {
  const state = researchInspirationState;
  const parts = [];
  if (state.scope === 'favorite') parts.push('收藏');
  else if (state.scope === 'archive') parts.push('已归档');
  if (state.category) parts.push(state.category === '__uncategorized__' ? '未分类' : state.category);
  if (state.tag) parts.push('# ' + state.tag);
  if (state.status) parts.push(state.status);
  if (state.source) parts.push(state.source);
  if (state.query.trim()) parts.push('“' + state.query.trim() + '”');
  return parts.join(' · ');
}

function researchIdeaHasActiveFilter() {
  const s = researchInspirationState;
  return !!(s.query.trim() || s.scope !== 'active' || s.category || s.tag || s.status || s.source);
}

function researchIdeaSidebarButton(label, count, active, attrs) {
  return '<button class="research-idea-filter' + (active ? ' is-active' : '') + '" type="button" ' + attrs + '>' +
    '<span class="research-idea-filter-text">' + escapeHTML(label) + '</span><span class="research-idea-filter-count">' + count + '</span></button>';
}

function researchIdeaGroupLabel(item) {
  const mode = researchInspirationState.group;
  if (mode === 'category') return item.category || '未分类';
  if (mode === 'source') return item.sourceType || '未记录来源';
  if (mode === 'month') {
    const raw = item.occurredAt || item.createdAt;
    if (!raw) return '日期未记录';
    const date = new Date(raw);
    return Number.isNaN(date.getTime()) ? String(raw).slice(0, 7) : date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' });
  }
  return '';
}

function researchIdeaListHTML(visible) {
  const card = item => {
    const progress = researchIdeaProgress(item);
    return '<button type="button" class="research-idea-card' + (item.id === researchInspirationState.selectedId ? ' is-active' : '') + '" data-research-idea-select="' + item.id + '" aria-pressed="' + (item.id === researchInspirationState.selectedId) + '">' +
      '<div class="research-idea-card-top"><span>' + escapeHTML(item.category || '未分类') + '</span><span class="research-idea-status ' + researchIdeaStatusClass(item.status) + '">' + escapeHTML(item.status || '待验证') + '</span></div>' +
      '<div class="research-idea-card-title">' + escapeHTML(item.title || '未命名灵感') + (item.favorite ? ' <span class="research-idea-favorite-mark" aria-label="已收藏">★</span>' : '') + '</div>' +
      '<div class="research-idea-card-summary">' + escapeHTML(item.content || '') + '</div>' +
      '<div class="research-idea-card-footer"><div class="research-idea-card-progress"><div class="research-idea-card-progress-label"><span>' + escapeHTML(progress.current.short) + '</span><span>' + progress.done + '/' + RESEARCH_IDEA_STAGES.length + '</span></div><div class="research-idea-card-progress-track"><span style="width:' + progress.percent + '%"></span></div></div><span class="research-idea-card-date">' + escapeHTML(researchIdeaDate(item.occurredAt || item.updatedAt)) + '</span></div>' +
    '</button>';
  };
  if (!visible.length) return '<div class="research-idea-empty"><div><div style="font-size:28px;margin-bottom:10px;">⌕</div>没有找到匹配的灵感。<br>试试清除筛选，或记录一条新思路。</div></div>';
  if (researchInspirationState.group === 'none') return visible.map(card).join('');
  const groups = new Map();
  visible.forEach(item => {
    const key = researchIdeaGroupLabel(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return [...groups.entries()].map(([label, groupItems]) =>
    '<section class="research-idea-group"><div class="research-idea-group-title">' + escapeHTML(label) + ' · ' + groupItems.length + '</div>' + groupItems.map(card).join('') + '</section>'
  ).join('');
}

function researchIdeaOverviewHTML(items, visible, filters) {
  const activeItems = items.filter(item => !item.archived);
  const categoryButtons = [
    '<button type="button" class="research-overview-category' + (!researchInspirationState.category ? ' is-active' : '') + '" data-research-idea-category="">全部 Idea <span>' + activeItems.length + '</span></button>',
    ...filters.categories.map(category => '<button type="button" class="research-overview-category' + (researchInspirationState.category === category ? ' is-active' : '') + '" data-research-idea-category="' + escapeAttribute(category) + '">' + escapeHTML(category) + ' <span>' + activeItems.filter(item => item.category === category).length + '</span></button>'),
    '<button type="button" class="research-overview-category' + (researchInspirationState.category === '__uncategorized__' ? ' is-active' : '') + '" data-research-idea-category="__uncategorized__">未分类 <span>' + activeItems.filter(item => !item.category).length + '</span></button>'
  ].join('');
  const categoryOptions = current => '<option value=""' + (!current ? ' selected' : '') + '>未分类</option>' + filters.categories.map(category => '<option value="' + escapeAttribute(category) + '"' + (current === category ? ' selected' : '') + '>' + escapeHTML(category) + '</option>').join('') + '<option value="__new__">＋ 新建分类…</option>';
  const rows = visible.map(item => {
    const progress = researchIdeaProgress(item);
    const summary = item.content || (researchIdeaDevelopment(item).idea || {}).observation || '暂无摘要';
    const currentLabel = progress.done === RESEARCH_IDEA_STAGES.length ? '已完成' : progress.current.label;
    return '<tr>' +
      '<td><button type="button" class="research-overview-idea" data-research-idea-open="' + item.id + '">' + escapeHTML(item.title || '未命名 Idea') + '</button><div class="research-overview-summary">' + escapeHTML(summary) + '</div></td>' +
      '<td><select class="research-overview-category-select" data-research-idea-category-select="' + item.id + '" aria-label="调整 ' + escapeAttribute(item.title || 'Idea') + ' 的分类">' + categoryOptions(item.category || '') + '</select></td>' +
      '<td><div class="research-overview-progress-label"><b>' + escapeHTML(currentLabel) + '</b><span>' + progress.done + '/' + RESEARCH_IDEA_STAGES.length + ' · ' + progress.percent + '%</span></div><div class="research-overview-progress"><span style="width:' + progress.percent + '%"></span></div></td>' +
      '<td><span class="research-idea-status ' + researchIdeaStatusClass(item.status) + '">' + escapeHTML(item.status || '待验证') + '</span></td>' +
      '<td>' + escapeHTML(researchIdeaDate(item.updatedAt || item.createdAt)) + '</td>' +
      '<td><div class="research-overview-actions"><button type="button" class="research-overview-action' + (item.favorite ? ' is-active' : '') + '" data-research-idea-overview-favorite="' + item.id + '" title="' + (item.favorite ? '取消收藏' : '收藏') + '">★</button><button type="button" class="research-overview-action" data-research-idea-open="' + item.id + '" title="打开研究路径">→</button><button type="button" class="research-overview-action is-danger" data-research-idea-overview-delete="' + item.id + '" title="移入回收站" aria-label="删除 ' + escapeAttribute(item.title || 'Idea') + '">🗑</button></div></td>' +
    '</tr>';
  }).join('');
  const activeFilter = researchIdeaHasActiveFilter() ? '<span class="research-idea-active-filter">已筛选：' + escapeHTML(researchIdeaActiveFilterText()) + '<button type="button" class="research-idea-active-filter-clear" data-action="research-idea-clear-filter" aria-label="清除筛选">✕</button></span>' : '';
  return '<section class="research-overview" aria-label="Idea 列表总览">' +
    '<div class="research-overview-head"><div class="research-overview-title-row"><div><div class="research-overview-title">Idea 列表总览</div><div class="research-overview-desc">集中分类与整理研究想法，快速了解每条 Idea 的当前阶段与推进情况。</div></div><button type="button" class="research-overview-manage" data-action="research-idea-manage-categories">管理分类</button></div><div class="research-overview-categories">' + categoryButtons + '</div></div>' +
    '<div class="research-overview-toolbar"><div><div class="research-idea-search-wrap"><span class="research-idea-search-symbol">⌕</span><input class="research-idea-search" id="researchIdeaSearch" value="' + escapeAttribute(researchInspirationState.query) + '" placeholder="搜索 Idea、内容、标签或来源" aria-label="搜索 Idea">' + (researchInspirationState.query ? '<button type="button" class="research-idea-search-clear" data-action="research-idea-clear-query" aria-label="清除搜索">×</button>' : '') + '</div></div>' +
      '<div class="research-overview-scopes"><button type="button" class="research-overview-scope' + (researchInspirationState.scope === 'active' ? ' is-active' : '') + '" data-research-idea-scope="active">活跃</button><button type="button" class="research-overview-scope' + (researchInspirationState.scope === 'favorite' ? ' is-active' : '') + '" data-research-idea-scope="favorite">收藏</button><button type="button" class="research-overview-scope' + (researchInspirationState.scope === 'archive' ? ' is-active' : '') + '" data-research-idea-scope="archive">归档</button></div>' +
      '<select id="researchIdeaSort" class="research-idea-compact-select" aria-label="Idea 排序"><option value="updated"' + (researchInspirationState.sort === 'updated' ? ' selected' : '') + '>最近更新</option><option value="occurred"' + (researchInspirationState.sort === 'occurred' ? ' selected' : '') + '>灵感时间</option><option value="created"' + (researchInspirationState.sort === 'created' ? ' selected' : '') + '>创建时间</option><option value="favorite"' + (researchInspirationState.sort === 'favorite' ? ' selected' : '') + '>收藏优先</option><option value="category"' + (researchInspirationState.sort === 'category' ? ' selected' : '') + '>分类排序</option><option value="title"' + (researchInspirationState.sort === 'title' ? ' selected' : '') + '>标题排序</option></select>' +
      '<div class="research-overview-count">' + activeFilter + '共 ' + visible.length + ' 条</div></div>' +
    (rows ? '<div class="research-overview-table-wrap"><table class="research-overview-table"><thead><tr><th>Idea</th><th>分类</th><th>Idea → Paper</th><th>状态</th><th>更新</th><th>操作</th></tr></thead><tbody>' + rows + '</tbody></table></div>' : '<div class="research-overview-empty">当前分类下还没有 Idea。<br>可以清除筛选，或从上方建立一条新的研究路径。</div>') +
  '</section>';
}

function researchIdeaHTML() {
  const items = researchIdeaStore();
  const filters = researchIdeaFilters(items);
  const visible = researchIdeaVisibleItems();
  if (!researchInspirationState.selectedId || !visible.some(item => item.id === researchInspirationState.selectedId)) {
    researchInspirationState.selectedId = visible[0] ? visible[0].id : '';
  }
  const selected = visible.find(item => item.id === researchInspirationState.selectedId) || null;
  const countScope = key => items.filter(item => key === 'active' ? !item.archived : key === 'favorite' ? item.favorite && !item.archived : item.archived).length;
  const activeItems = items.filter(item => !item.archived);
  const developingCount = activeItems.filter(item => { const p = researchIdeaProgress(item); return p.done > 0 && p.done < RESEARCH_IDEA_STAGES.length; }).length;
  const completedCount = activeItems.filter(item => researchIdeaProgress(item).done === RESEARCH_IDEA_STAGES.length).length;
  const compactCategoryOptions = '<option value=""' + (!researchInspirationState.category ? ' selected' : '') + '>全部分类</option><option value="__uncategorized__"' + (researchInspirationState.category === '__uncategorized__' ? ' selected' : '') + '>未分类</option>' + filters.categories.map(category => '<option value="' + escapeAttribute(category) + '"' + (researchInspirationState.category === category ? ' selected' : '') + '>' + escapeHTML(category) + '</option>').join('');
  const compactStatusOptions = '<option value="">全部状态</option>' + RESEARCH_IDEA_STATUS.map(status => '<option value="' + escapeAttribute(status) + '"' + (researchInspirationState.status === status ? ' selected' : '') + '>' + escapeHTML(status) + '</option>').join('');
  const compactSourceOptions = '<option value="">全部来源</option>' + filters.sources.map(source => '<option value="' + escapeAttribute(source) + '"' + (researchInspirationState.source === source ? ' selected' : '') + '>' + escapeHTML(source) + '</option>').join('');
  const compactTagOptions = '<option value="">全部标签</option>' + filters.tags.map(tag => '<option value="' + escapeAttribute(tag) + '"' + (researchInspirationState.tag === tag ? ' selected' : '') + '># ' + escapeHTML(tag) + '</option>').join('');
  const advancedFilterCount = Number(!!researchInspirationState.status) + Number(!!researchInspirationState.source) + Number(!!researchInspirationState.tag);
  const sidebar =
    '<aside class="research-idea-sidebar" aria-label="科研灵感筛选">' +
      '<div class="research-idea-compact-section"><div class="research-idea-sidebar-label">灵感库</div>' +
        researchIdeaSidebarButton('全部灵感', countScope('active'), researchInspirationState.scope === 'active', 'data-research-idea-scope="active"') +
        researchIdeaSidebarButton('我的收藏', countScope('favorite'), researchInspirationState.scope === 'favorite', 'data-research-idea-scope="favorite"') +
        researchIdeaSidebarButton('已归档', countScope('archive'), researchInspirationState.scope === 'archive', 'data-research-idea-scope="archive"') +
      '</div>' +
      '<div class="research-idea-compact-section"><div class="research-idea-sidebar-label">组织</div><div class="research-idea-compact-field"><label for="researchIdeaCategoryFilter">分类</label><select id="researchIdeaCategoryFilter" class="research-idea-compact-select">' + compactCategoryOptions + '</select></div><button type="button" class="research-idea-category-manage" data-action="research-idea-manage-categories">管理分类</button></div>' +
      '<details class="research-idea-more-filters"' + (advancedFilterCount ? ' open' : '') + '><summary>更多筛选' + (advancedFilterCount ? '<span class="research-idea-filter-badge">' + advancedFilterCount + '</span>' : '') + '</summary><div class="research-idea-more-body"><div class="research-idea-compact-field"><label for="researchIdeaStatusFilter">推进状态</label><select id="researchIdeaStatusFilter" class="research-idea-compact-select">' + compactStatusOptions + '</select></div><div class="research-idea-compact-field"><label for="researchIdeaSourceFilter">来源</label><select id="researchIdeaSourceFilter" class="research-idea-compact-select">' + compactSourceOptions + '</select></div><div class="research-idea-compact-field"><label for="researchIdeaTagFilter">标签</label><select id="researchIdeaTagFilter" class="research-idea-compact-select">' + compactTagOptions + '</select></div></div></details>' +
    '</aside>';
  const list = researchIdeaListHTML(visible);
  const detail = selected ? researchIdeaDetailHTML(selected) : '<section class="research-idea-detail"><div class="research-idea-empty">选择一条灵感查看详情，<br>或新建一条研究思路。</div></section>';
  const activeFilter = researchIdeaHasActiveFilter()
    ? '<span class="research-idea-active-filter">筛选：' + escapeHTML(researchIdeaActiveFilterText()) +
      '<button type="button" class="research-idea-active-filter-clear" data-action="research-idea-clear-filter" aria-label="清除筛选">✕</button></span>'
    : '';
  const viewbar = '<div class="research-idea-viewbar"><div class="research-idea-view-tabs" role="tablist" aria-label="Idea 视图"><button type="button" class="research-idea-view-tab' + (researchInspirationState.view === 'overview' ? ' is-active' : '') + '" data-research-idea-view="overview" role="tab" aria-selected="' + (researchInspirationState.view === 'overview') + '">▦ Idea 总览</button><button type="button" class="research-idea-view-tab' + (researchInspirationState.view === 'journey' ? ' is-active' : '') + '" data-research-idea-view="journey" role="tab" aria-selected="' + (researchInspirationState.view === 'journey') + '">→ 研究路径</button></div><div class="research-idea-view-note">' + (researchInspirationState.view === 'overview' ? '分类、筛选与整理所有 Idea' : '把当前 Idea 逐步推进为 Paper') + '</div></div>';
  const journeyWorkspace = '<div class="research-idea-workspace">' + sidebar +
    '<section class="research-idea-list-pane" aria-label="科研灵感列表">' +
      '<div class="research-idea-toolbar">' + activeFilter + '<div class="research-idea-search-wrap"><span class="research-idea-search-symbol">⌕</span><input class="research-idea-search" id="researchIdeaSearch" value="' + escapeAttribute(researchInspirationState.query) + '" placeholder="搜索标题、内容、标签或来源" aria-label="搜索科研灵感">' + (researchInspirationState.query ? '<button type="button" class="research-idea-search-clear" data-action="research-idea-clear-query" aria-label="清除搜索">×</button>' : '') + '</div>' +
      '<div class="research-idea-toolbar-meta"><span>显示 ' + visible.length + ' / ' + items.length + '</span><select id="researchIdeaGroup" class="research-idea-sort" aria-label="分组"><option value="none"' + (researchInspirationState.group === 'none' ? ' selected' : '') + '>不分组</option><option value="month"' + (researchInspirationState.group === 'month' ? ' selected' : '') + '>按时间分组</option><option value="category"' + (researchInspirationState.group === 'category' ? ' selected' : '') + '>按主题分组</option><option value="source"' + (researchInspirationState.group === 'source' ? ' selected' : '') + '>按来源分组</option></select><select id="researchIdeaSort" class="research-idea-sort" aria-label="排序"><option value="updated"' + (researchInspirationState.sort === 'updated' ? ' selected' : '') + '>最近更新</option><option value="occurred"' + (researchInspirationState.sort === 'occurred' ? ' selected' : '') + '>灵感时间</option><option value="created"' + (researchInspirationState.sort === 'created' ? ' selected' : '') + '>创建时间</option><option value="favorite"' + (researchInspirationState.sort === 'favorite' ? ' selected' : '') + '>收藏优先</option><option value="category"' + (researchInspirationState.sort === 'category' ? ' selected' : '') + '>主题排序</option><option value="source"' + (researchInspirationState.sort === 'source' ? ' selected' : '') + '>来源排序</option><option value="title"' + (researchInspirationState.sort === 'title' ? ' selected' : '') + '>标题排序</option></select></div></div>' +
      '<div class="research-idea-list">' + list + '</div>' +
    '</section>' + detail + '</div>';
  return '<div class="research-idea-page">' +
    '<section class="research-idea-hero"><div><div class="research-idea-eyebrow">Idea to Paper Journey</div><h2>让一个 Idea，<br>沿着证据长成一篇 Paper</h2><div class="research-idea-hero-copy">从最初的问题意识出发，持续沉淀研究动机、相关工作、方法设计与实验方案，让每一次判断、取舍和修改都有迹可循。</div></div>' +
    '<div class="research-idea-stats" aria-label="研究路径概览"><div class="research-idea-stat"><strong>' + activeItems.length + '</strong><span>研究路径</span></div><div class="research-idea-stat"><strong>' + developingCount + '</strong><span>推进中</span></div><div class="research-idea-stat"><strong>' + completedCount + '</strong><span>已完成</span></div></div></section>' +
    '<div class="research-idea-capture"><span class="research-idea-capture-icon">✦</span><input id="researchIdeaQuickTitle" type="text" placeholder="先写下这个 Idea 想解决的问题…" aria-label="快速记录灵感"><span class="research-idea-capture-hint">Enter 快速建立路径</span><button type="button" class="research-idea-primary" data-action="research-idea-new">新建研究路径</button></div>' + viewbar +
    (researchInspirationState.view === 'overview' ? researchIdeaOverviewHTML(items, visible, filters) : journeyWorkspace) + '</div>';
}

function researchMarkdownInline(text) {
  const images = [];
  const withImageTokens = String(text || '').replace(/!\[([^\]]*)\]\(([^\s)]+)\)/g, (match, alt, url) => {
    const safeUrl = /^(?:https?:\/\/|data:image\/(?:png|jpe?g|gif|webp);base64,)/i.test(url);
    if (!safeUrl) return match;
    const token = '@@RESEARCH_IMAGE_' + images.length + '@@';
    images.push('<img src="' + escapeAttribute(url) + '" alt="' + escapeAttribute(alt || '实验图片') + '" loading="lazy">');
    return token;
  });
  let html = escapeHTML(withImageTokens)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_]+)__/g, '<strong>$1</strong>');
  images.forEach((image, index) => { html = html.replace('@@RESEARCH_IMAGE_' + index + '@@', image); });
  return html;
}

function researchMarkdownHTML(source) {
  const text = String(source || '').replace(/\r\n?/g, '\n').trim();
  if (!text) return '';
  const lines = text.split('\n');
  let html = '';
  let listType = '';
  const closeList = () => {
    if (listType) html += '</' + listType + '>';
    listType = '';
  };
  lines.forEach(line => {
    const bullet = line.match(/^\s*[-*+]\s+(.+)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (bullet || numbered) {
      const nextType = bullet ? 'ul' : 'ol';
      if (listType !== nextType) { closeList(); listType = nextType; html += '<' + listType + '>'; }
      html += '<li>' + researchMarkdownInline((bullet || numbered)[1]) + '</li>';
      return;
    }
    closeList();
    if (!line.trim()) return;
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = Math.min(4, heading[1].length + 1);
      html += '<h' + level + '>' + researchMarkdownInline(heading[2]) + '</h' + level + '>';
      return;
    }
    if (/^>\s?/.test(line)) {
      html += '<p><em>' + researchMarkdownInline(line.replace(/^>\s?/, '')) + '</em></p>';
      return;
    }
    html += '<p>' + researchMarkdownInline(line) + '</p>';
  });
  closeList();
  return html;
}

async function renderResearchStagePreview(wrapper) {
  if (!wrapper) return;
  const textarea = wrapper.querySelector('textarea');
  const preview = wrapper.querySelector('[data-research-stage-preview]');
  if (!textarea || !preview) return;
  const rendered = researchMarkdownHTML(textarea.value);
  preview.classList.toggle('is-empty', !rendered);
  preview.innerHTML = rendered || '暂无内容，返回编辑后输入 Markdown 或 LaTeX。';
  try {
    const mathJax = await ensureMathJax();
    if (!preview.isConnected || preview.hidden) return;
    if (typeof mathJax.typesetClear === 'function') mathJax.typesetClear([preview]);
    await mathJax.typesetPromise([preview]);
  } catch (error) {
    // Keep the Markdown preview and original LaTeX source visible when rendering is unavailable.
  }
}

function researchIdeaStagePanelHTML(item, stage, stageIndex) {
  const development = researchIdeaDevelopment(item);
  const record = development[stage.key];
  const fields = stage.fields.map(field => {
    const fieldId = 'ideaStage_' + stage.key + '_' + field[0];
    return '<div class="research-stage-field" data-research-stage-field-wrap>' +
      '<div class="research-stage-field-top"><label for="' + fieldId + '">' + escapeHTML(field[1]) + '<span>' + escapeHTML(field[2]) + '</span></label><div class="research-stage-mode" aria-label="编辑或预览"><button type="button" class="research-stage-mode-btn is-active" data-research-stage-mode="edit">编辑</button><button type="button" class="research-stage-mode-btn" data-research-stage-mode="preview">预览</button></div></div>' +
      '<textarea id="' + fieldId + '" data-research-idea-stage-field="' + escapeAttribute(field[0]) + '" data-research-idea-stage-key="' + escapeAttribute(stage.key) + '" placeholder="' + escapeAttribute(field[3]) + '">' + escapeHTML(record[field[0]] || '') + '</textarea>' +
      '<div class="research-stage-preview math" data-research-stage-preview hidden></div></div>';
  }).join('');
  return '<div class="research-stage-panel">' +
    '<div class="research-stage-panel-head"><div><div class="research-stage-overline">Step ' + (stageIndex + 1) + ' of ' + RESEARCH_IDEA_STAGES.length + '</div><div class="research-stage-title">' + escapeHTML(stage.label) + '</div><div class="research-stage-desc">' + escapeHTML(stage.desc) + '</div></div><div class="research-stage-save-state">' + researchIdeaStageStatusLabel(researchIdeaStageStatus(record)) + ' · 自动保存 · Markdown + LaTeX</div></div>' +
    '<div class="research-stage-fields">' + fields + '</div>' +
    '<div class="research-stage-actions"><button type="button" class="research-stage-btn" data-research-idea-stage-nav="prev"' + (stageIndex === 0 ? ' disabled' : '') + '>← 上一步</button>' +
      '<div class="research-stage-action-group"><button type="button" class="research-stage-btn complete' + (record.done ? ' is-done' : '') + '" data-action="research-idea-stage-complete">' + (record.done ? '✓ 已完成' : '标记本阶段完成') + '</button>' +
      (stageIndex < RESEARCH_IDEA_STAGES.length - 1 ? '<button type="button" class="research-stage-btn" data-research-idea-stage-nav="next">下一步 →</button>' : '') + '</div></div>' +
  '</div>';
}

function researchIdeaDetailHTML(item) {
  const archiveLabel = item.archived ? '取消归档' : '归档';
  const development = researchIdeaDevelopment(item);
  const progress = researchIdeaProgress(item);
  let stageIndex = RESEARCH_IDEA_STAGES.findIndex(stage => stage.key === researchInspirationState.stage);
  if (stageIndex < 0) stageIndex = 0;
  const activeStage = RESEARCH_IDEA_STAGES[stageIndex];
  const stageNav = RESEARCH_IDEA_STAGES.map((stage, index) =>
    (() => {
      const status = researchIdeaStageStatus(development[stage.key]);
      const progress = researchIdeaStageProgress(development[stage.key], stage);
      const partial = status === 'active' && progress.completed < progress.total;
      const marker = status === 'done' ? '✓' : index + 1;
      return '<button type="button" class="research-stage-tab' + (stage.key === activeStage.key ? ' is-active' : '') + (status === 'done' ? ' is-done' : status === 'active' ? ' is-in-progress' : '') + (partial ? ' is-partial' : '') + '" data-research-idea-stage="' + stage.key + '" aria-pressed="' + (stage.key === activeStage.key) + '" aria-label="' + escapeAttribute(stage.short + '：' + researchIdeaStageStatusLabel(status)) + '"><span class="research-stage-tab-number">' + marker + '</span><span class="research-stage-tab-label">' + escapeHTML(stage.short) + '</span><span class="research-stage-tab-status">' + researchIdeaStageStatusLabel(status) + '</span></button>';
    })()
  ).join('');
  return (researchInspirationState.focusMode ? '<div class="research-focus-backdrop" data-action="research-idea-focus-close"></div>' : '') + '<section class="research-idea-detail' + (researchInspirationState.focusMode ? ' is-focus-mode' : '') + '" aria-label="科研灵感详情">' +
    '<div class="research-idea-detail-header"><div><div class="research-idea-kicker">' + escapeHTML(item.category || '未分类') + (item.archived ? ' · 已归档' : '') + '</div><h2 class="research-idea-detail-title">' + escapeHTML(item.title || '未命名灵感') + '</h2></div>' +
    '<div class="research-idea-detail-actions">' +
      (researchInspirationState.focusMode ? '<button type="button" class="research-idea-icon-btn" data-action="research-idea-focus-close" title="退出放大（Esc）" aria-label="退出放大">↙</button>' : '<button type="button" class="research-idea-icon-btn" data-action="research-idea-focus-open" title="放大编辑" aria-label="放大编辑">⛶</button>') +
      '<button type="button" class="research-idea-icon-btn' + (item.favorite ? ' is-active' : '') + '" data-action="research-idea-favorite" title="' + (item.favorite ? '取消收藏' : '收藏') + '" aria-label="' + (item.favorite ? '取消收藏' : '收藏') + '">★</button>' +
      '<button type="button" class="research-idea-icon-btn" data-action="research-idea-edit" title="编辑灵感" aria-label="编辑灵感">✎</button>' +
      '<button type="button" class="research-idea-icon-btn' + (item.archived ? ' is-active' : '') + '" data-action="research-idea-archive" title="' + archiveLabel + '" aria-label="' + archiveLabel + '">📦</button>' +
      '<button type="button" class="research-idea-icon-btn is-danger" data-action="research-idea-delete" title="删除灵感" aria-label="删除灵感">🗑</button>' +
    '</div></div>' +
    '<div class="research-idea-meta-grid">' +
      '<div class="research-idea-meta"><div class="research-idea-meta-label">状态</div><div class="research-idea-meta-value">' + escapeHTML(item.status || '待验证') + '</div></div>' +
      '<div class="research-idea-meta"><div class="research-idea-meta-label">灵感时间</div><div class="research-idea-meta-value">' + escapeHTML(researchIdeaDate(item.occurredAt || item.createdAt)) + '</div></div>' +
      '<div class="research-idea-meta"><div class="research-idea-meta-label">证据来源</div><div class="research-idea-meta-value">' + escapeHTML(item.sourceType || '未记录') + '</div></div>' +
      '<div class="research-idea-meta"><div class="research-idea-meta-label">关联项目</div><div class="research-idea-meta-value">' + escapeHTML(item.project || '未关联') + '</div></div>' +
    '</div>' +
    '<div class="research-ddl-card" aria-label="目标会议与投稿截止日期">' +
      '<div class="research-ddl-field"><label>目标会议 / 期刊</label><input data-research-ddl-field="venue" data-research-ddl-id="' + escapeAttribute(item.id) + '" value="' + escapeAttribute(item.targetVenue || '') + '" placeholder="如 NeurIPS / IEEE S&P"><span class="research-ddl-link">填写后自动查询（北京时间）</span></div>' +
      '<div class="research-ddl-field"><label>摘要 DDL（北京时间）</label><input type="datetime-local" data-research-ddl-field="abstractDeadline" data-research-ddl-id="' + escapeAttribute(item.id) + '" value="' + escapeAttribute(researchDdlInputValue(item.abstractDeadline)) + '"><strong class="research-ddl-countdown">' + (item.ddlSource === 'journal-or-not-found' ? '无' : researchDdlCountdown(item.abstractDeadline)) + '</strong></div>' +
      '<div class="research-ddl-field"><label>正文 DDL（北京时间）</label><input type="datetime-local" data-research-ddl-field="paperDeadline" data-research-ddl-id="' + escapeAttribute(item.id) + '" value="' + escapeAttribute(researchDdlInputValue(item.paperDeadline)) + '"><strong class="research-ddl-countdown">' + (item.ddlSource === 'journal-or-not-found' ? '无' : researchDdlCountdown(item.paperDeadline)) + '</strong></div>' +
    '</div>' +
    '<div class="research-idea-tags" aria-label="Idea 标签">' + (item.tags || []).map(tag => '<span class="research-idea-tag-editable"><span># ' + escapeHTML(tag) + '</span><button type="button" class="research-idea-tag-remove" data-research-idea-tag-remove-inline="' + escapeAttribute(tag) + '" aria-label="删除标签 ' + escapeAttribute(tag) + '">×</button></span>').join('') + '<button type="button" class="research-idea-tag-add" data-action="research-idea-tag-add">＋ 添加标签</button></div>' +
    '<div class="research-journey"><div class="research-journey-summary"><div class="research-journey-label">从 Idea 到 Paper <span>已完成 ' + progress.done + ' / ' + RESEARCH_IDEA_STAGES.length + ' 个阶段</span></div><div class="research-journey-percent">' + progress.percent + '%</div></div><div class="research-journey-track"><span style="width:' + progress.percent + '%"></span></div>' +
    '<nav class="research-stage-nav" aria-label="Idea 到 Paper 研究阶段">' + stageNav + '</nav>' + researchIdeaStagePanelHTML(item, activeStage, stageIndex) + '</div>' +
    '</section>';
}

// ========================================================================
// RESEARCH IDEA MODAL (new / edit)
// ========================================================================
function researchIdeaModalField(label, html, full) {
  return '<div class="research-idea-form-field' + (full ? ' full' : '') + '"><label>' + escapeHTML(label) + '</label>' + html + '</div>';
}

function researchIdeaCategoryOptions(selected) {
  const categories = researchIdeaFilters(researchIdeaStore()).categories;
  const opts = ['<option value="">未分类</option>'];
  categories.forEach(c => {
    opts.push('<option value="' + escapeAttribute(c) + '"' + (c === selected ? ' selected' : '') + '>' + escapeHTML(c) + '</option>');
  });
  opts.push('<option value="__new__">＋ 新建分类…</option>');
  return opts.join('');
}

function openResearchIdeaModal(mode, item) {
  const state = researchIdeaModalState;
  state.mode = mode;
  state.saving = false;

  const title = mode === 'edit' ? '编辑灵感' : '新建灵感';
  const sub = mode === 'edit' ? '编辑这条研究路径的基础信息。具体推进记录在详情页分阶段保存。' : '创建后将按 Idea、Motivation、Related Work、Method、Experiment 与 Paper 的路径逐步推进。';
  const isEdit = mode === 'edit';
  const i = item || { title: '', content: '', category: '', tags: [], status: '待验证', sourceType: '', sourceReference: '', project: '', occurredAt: '' };

  const tagsHTML = (i.tags || []).map(tag =>
    '<span class="research-idea-form-tag">' + escapeHTML(tag) +
    '<button type="button" data-idea-tag-remove="' + escapeAttribute(tag) + '" aria-label="移除标签 ' + escapeHTML(tag) + '">✕</button></span>'
  ).join('');

  const html =
    '<div class="research-idea-modal-title">' + escapeHTML(title) + '</div>' +
    '<div class="research-idea-modal-sub">' + escapeHTML(sub) + '</div>' +
    '<div class="research-idea-form-grid">' +
      researchIdeaModalField('标题', '<input type="text" id="ideaTitle" placeholder="一句话描述这条研究思路" value="' + escapeAttribute(i.title || '') + '">', true) +
      researchIdeaModalField('最初观察 / 想法', '<textarea id="ideaContent" placeholder="这个 Idea 从什么现象、问题或矛盾中产生？">' + escapeHTML(i.content || '') + '</textarea>', true) +
      researchIdeaModalField('分类', '<select id="ideaCategory">' + researchIdeaCategoryOptions(i.category || '') + '</select>') +
      researchIdeaModalField('新建分类', '<input type="text" id="ideaNewCategory" placeholder="仅在选择“新建分类”时填写" style="display:none;">') +
      researchIdeaModalField('推进状态（随阶段更新）', '<select id="ideaStatus" disabled>' + RESEARCH_IDEA_STATUS.map(s => '<option value="' + escapeAttribute(s) + '"' + (s === (i.status || '待验证') ? ' selected' : '') + '>' + escapeHTML(s) + '</option>').join('') + '</select>') +
      researchIdeaModalField('来源类型', '<select id="ideaSourceType">' + ['', '论文阅读', '会议讨论', '实验观察', '个人复盘', '文献综述', '其他'].map(s => '<option value="' + escapeAttribute(s) + '"' + (s === (i.sourceType || '') ? ' selected' : '') + '>' + (s ? escapeHTML(s) : '未选择') + '</option>').join('') + '</select>') +
      researchIdeaModalField('来源参考', '<input type="text" id="ideaSourceReference" placeholder="论文标题、会议记录或出处链接" value="' + escapeAttribute(i.sourceReference || '') + '">') +
      researchIdeaModalField('关联项目', '<input type="text" id="ideaProject" placeholder="所属科研项目" value="' + escapeAttribute(i.project || '') + '">') +
      researchIdeaModalField('灵感日期', '<input type="date" id="ideaOccurredAt" value="' + escapeAttribute(i.occurredAt || '') + '">') +
      researchIdeaModalField('标签', '<div class="research-idea-form-tags" id="ideaTagBox">' + tagsHTML +
        '<input type="text" id="ideaTagInput" class="research-idea-form-tag-input" placeholder="输入后回车添加" aria-label="添加标签"></div>', true) +
    '</div>' +
    '<div class="research-idea-modal-actions">' +
      '<button type="button" class="research-idea-modal-btn cancel" id="ideaModalCancel">取消</button>' +
      '<button type="button" class="research-idea-modal-btn confirm" id="ideaModalOk">' + (isEdit ? '保存修改' : '创建研究路径') + '</button>' +
    '</div>';

  showModal(html);

  document.getElementById('ideaModalCancel').addEventListener('click', closeModal);
  document.getElementById('ideaModalOk').addEventListener('click', submitResearchIdeaModal);

  // 新建分类选项联动
  const catSel = document.getElementById('ideaCategory');
  const newCatInput = document.getElementById('ideaNewCategory');
  if (catSel) {
    const sync = () => {
      const show = catSel.value === '__new__';
      newCatInput.style.display = show ? '' : 'none';
      if (show) newCatInput.focus();
    };
    catSel.addEventListener('change', sync);
    sync();
  }

  // 标签输入：Enter 添加
  const tagInput = document.getElementById('ideaTagInput');
  if (tagInput) {
    const tags = (i.tags || []).slice();
    researchIdeaModalState.tags = tags;
    tagInput.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const v = tagInput.value.trim();
      if (v && !tags.includes(v)) {
        tags.push(v);
        researchIdeaModalRefreshTags();
      }
      tagInput.value = '';
    });
    document.getElementById('ideaTagBox').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-idea-tag-remove]');
      if (!btn) return;
      const idx = tags.indexOf(btn.dataset.ideaTagRemove);
      if (idx !== -1) {
        tags.splice(idx, 1);
        researchIdeaModalRefreshTags();
      }
    });
  }

  document.getElementById('ideaTitle').focus();
}

function researchIdeaModalRefreshTags() {
  const list = researchIdeaModalState.tags || [];
  const box = document.getElementById('ideaTagBox');
  if (!box) return;
  box.innerHTML = list.map(t =>
    '<span class="research-idea-form-tag">' + escapeHTML(t) +
    '<button type="button" data-idea-tag-remove="' + escapeAttribute(t) + '" aria-label="移除标签 ' + escapeHTML(t) + '">✕</button></span>'
  ).join('') + '<input type="text" id="ideaTagInput" class="research-idea-form-tag-input" placeholder="输入后回车添加" aria-label="添加标签">';
  const ni = document.getElementById('ideaTagInput');
  ni.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const v = ni.value.trim();
    if (v && !list.includes(v)) {
      list.push(v);
      researchIdeaModalRefreshTags();
    }
    ni.value = '';
  });
  ni.focus();
}

function submitResearchIdeaModal() {
  if (researchIdeaModalState.saving) return;
  const title = (document.getElementById('ideaTitle') || {}).value;
  const content = (document.getElementById('ideaContent') || {}).value;
  if (!title || !title.trim()) {
    const t = document.getElementById('ideaTitle');
    if (t) { t.style.borderColor = 'var(--danger)'; t.focus(); }
    return;
  }

  const catSel = document.getElementById('ideaCategory');
  let category = catSel ? catSel.value : '';
  const newCat = (document.getElementById('ideaNewCategory') || {}).value;
  if (catSel && catSel.value === '__new__' && newCat.trim()) category = newCat.trim();

  const status = (document.getElementById('ideaStatus') || {}).value || '待验证';
  const sourceType = (document.getElementById('ideaSourceType') || {}).value || '';
  const sourceReference = (document.getElementById('ideaSourceReference') || {}).value || '';
  const project = (document.getElementById('ideaProject') || {}).value || '';
  const occurredAt = (document.getElementById('ideaOccurredAt') || {}).value || '';
  const tags = (researchIdeaModalState.tags || []).filter(Boolean);

  const now = new Date().toISOString();
  const items = researchIdeaStore();

  if (researchIdeaModalState.mode === 'edit') {
    const item = items.find(x => x.id === researchIdeaModalState.id);
    if (item) {
      item.title = title.trim();
      item.content = content || '';
      item.category = category;
      item.status = status;
      item.sourceType = sourceType;
      item.sourceReference = sourceReference;
      item.project = project;
      item.occurredAt = occurredAt;
      item.tags = tags;
      item.updatedAt = now;
    }
  } else {
    const id = uid();
    const item = {
      id,
      title: title.trim(),
      content: content || '',
      category,
      tags,
      status,
      sourceType,
      sourceReference,
      project,
      favorite: false,
      archived: false,
      createdAt: now,
      updatedAt: now,
      occurredAt: occurredAt || now.slice(0, 10)
    };
    items.push(item);
    researchInspirationState.selectedId = id;
    researchInspirationState.stage = 'idea';
    researchInspirationState.view = 'journey';
  }

  closeModal();
  save();
  rerender();
  showToast(researchIdeaModalState.mode === 'edit' ? '灵感已更新' : '灵感已记录', 'success');
}

function quickCaptureResearchIdea() {
  const input = document.getElementById('researchIdeaQuickTitle');
  const title = input ? input.value.trim() : '';
  if (!title) {
    if (input) { input.classList.add('input-error'); input.focus(); setTimeout(() => input.classList.remove('input-error'), 500); }
    return;
  }
  const now = new Date().toISOString();
  const id = uid();
  researchIdeaStore().push({
    id, title, content: '', category: '', tags: [], status: '待验证', sourceType: '', sourceReference: '', project: '',
    favorite: false, archived: false, createdAt: now, updatedAt: now, occurredAt: now.slice(0, 10)
  });
  researchInspirationState.scope = 'active';
  researchInspirationState.category = '';
  researchInspirationState.tag = '';
  researchInspirationState.status = '';
  researchInspirationState.source = '';
  researchInspirationState.query = '';
  researchInspirationState.selectedId = id;
  researchInspirationState.stage = 'idea';
  save();
  rerender();
  showToast('已收进灵感库，可继续补充细节', 'success');
}

function openResearchIdeaCategoryManager() {
  const categories = researchIdeaFilters(researchIdeaStore()).categories;
  if (!categories.length) {
    showToast('暂无可管理的分类，新建灵感时即可创建分类', 'warning');
    return;
  }
  const rows = categories.map((category, index) =>
    '<div class="modal-field"><label>' + escapeHTML(category) + ' · ' + researchIdeaStore().filter(item => item.category === category).length + ' 条</label><input type="text" class="idea-category-rename" data-original="' + escapeAttribute(category) + '" value="' + escapeAttribute(category) + '" aria-label="重命名分类 ' + escapeAttribute(category) + '"></div>'
  ).join('');
  showModal('<div class="research-idea-modal-title">管理灵感分类</div><div class="research-idea-modal-sub">修改名称可批量更新所有相关灵感；清空名称则移入“未分类”。</div>' + rows + '<div class="research-idea-modal-actions"><button type="button" class="research-idea-modal-btn cancel" id="ideaCategoryCancel">取消</button><button type="button" class="research-idea-modal-btn confirm" id="ideaCategorySave">保存分类</button></div>');
  document.getElementById('ideaCategoryCancel').addEventListener('click', closeModal);
  document.getElementById('ideaCategorySave').addEventListener('click', () => {
    const changes = [...document.querySelectorAll('.idea-category-rename')].map(input => ({ from: input.dataset.original, to: input.value.trim() }));
    changes.forEach(change => researchIdeaStore().forEach(item => { if (item.category === change.from) item.category = change.to; }));
    if (researchInspirationState.category) {
      const activeChange = changes.find(change => change.from === researchInspirationState.category);
      researchInspirationState.category = activeChange ? activeChange.to : researchInspirationState.category;
    }
    closeModal();
    save();
    rerender();
    showToast('分类已更新', 'success');
  });
}

// ========================================================================
// RESEARCH EXPERIMENT LAB
// ========================================================================
const RESEARCH_EXPERIMENT_FIELDS = [
  ['motivation', '实验动机', '这个实验要验证哪个假设或回答哪个研究问题？', '说明实验的必要性、对应的 RQ 与预期现象…'],
  ['settings', '实验设置', '数据、baseline、参数、环境与评估指标如何配置？', '记录数据集、划分、模型版本、超参数、硬件和指标…'],
  ['results', '实验结果', '关键定量与定性结果是什么？', '记录主结果、表格草稿、可视化、显著性与异常现象…'],
  ['analysis', '结果分析', '结果是否支持假设，为什么，下一步要做什么？', '解释机制、失败原因、局限、意外发现与后续实验…']
];

function researchExperimentStore() {
  const research = DATA.learning.research;
  if (!research.experiments || typeof research.experiments !== 'object') research.experiments = { items: [] };
  if (!Array.isArray(research.experiments.items)) research.experiments.items = [];
  return research.experiments.items;
}

function researchLabFieldHTML(config) {
  const imageTools = config.allowImages ? '<button type="button" class="research-image-upload-btn" data-research-experiment-image-trigger aria-label="向实验结果添加图片">＋ 添加图片</button><input type="file" data-research-experiment-image-input accept="image/png,image/jpeg,image/gif,image/webp" hidden>' : '';
  return '<div class="research-stage-field" data-research-stage-field-wrap data-section-number="' + escapeAttribute(config.sectionNumber || '') + '">' +
    '<div class="research-stage-field-top"><label for="' + escapeAttribute(config.id) + '">' + escapeHTML(config.label) + '<span>' + escapeHTML(config.hint) + '</span></label><div class="research-stage-tools">' + imageTools + '<div class="research-stage-mode" aria-label="编辑或预览"><button type="button" class="research-stage-mode-btn is-active" data-research-stage-mode="edit">编辑</button><button type="button" class="research-stage-mode-btn" data-research-stage-mode="preview">预览</button></div></div></div>' +
    '<textarea id="' + escapeAttribute(config.id) + '" ' + config.dataAttrs + ' placeholder="' + escapeAttribute(config.placeholder) + '">' + escapeHTML(config.value || '') + '</textarea>' +
    '<div class="research-stage-preview math" data-research-stage-preview hidden></div></div>';
}

function researchExperimentHTML() {
  const ideas = researchIdeaStore().filter(item => !item.archived);
  if (!ideas.length) {
    return '<div class="research-lab-page">' +
      '<section class="research-lab-head research-lab-head--narrative"><div><div class="research-lab-eyebrow">Evidence Building</div><h2>让一个假设，<br>在实验中经得起检验</h2><p>实验从一个清晰的问题开始；建立 Idea 后，把方案、结果与分析沉淀为可复盘的验证链路。</p></div></section>' +
      '<section class="research-lab-onboarding"><div class="research-lab-onboarding-copy"><span class="research-lab-onboarding-mark">⌁</span><div><div class="research-lab-section-kicker">开始验证</div><h3>先建立一条研究路径</h3><p>选择一个值得验证的问题，再在这里记录假设、实验设置、结果与结论。</p></div></div><div class="research-lab-onboarding-steps"><div><b>01</b><span>提出问题</span><em>在灵感中记录研究动机</em></div><div><b>02</b><span>设计验证</span><em>配置方案与对照条件</em></div><div><b>03</b><span>沉淀证据</span><em>复盘结果与下一步</em></div></div><button type="button" class="research-lab-btn primary" data-action="research-experiment-go-ideas">去建立 Idea</button></section></div>';
  }
  if (!ideas.some(item => item.id === researchExperimentState.ideaId)) researchExperimentState.ideaId = ideas[0].id;
  const idea = ideas.find(item => item.id === researchExperimentState.ideaId);
  researchInspirationState.selectedId = idea.id;
  const development = researchIdeaDevelopment(idea);
  const experimentPlan = development.experiment;
  const options = ideas.map(item => '<option value="' + item.id + '"' + (item.id === idea.id ? ' selected' : '') + '>' + escapeHTML(item.title || '未命名 Idea') + '</option>').join('');
  const records = researchExperimentStore().filter(item => item.ideaId === idea.id).sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')));
  if (!records.some(record => record.id === researchExperimentState.experimentId)) researchExperimentState.experimentId = records[0] ? records[0].id : '';
  const selected = records.find(record => record.id === researchExperimentState.experimentId) || null;
  const tabs = records.map((record, index) => '<button type="button" class="research-experiment-tab' + (record.id === researchExperimentState.experimentId ? ' is-active' : '') + '" data-research-experiment-select="' + record.id + '">' + escapeHTML(record.title || '实验 ' + (index + 1)) + '</button>').join('');
  const filledPlan = RESEARCH_IDEA_STAGES.find(stage => stage.key === 'experiment').fields.filter(field => String(experimentPlan[field[0]] || '').trim()).length;
  const editorFields = selected ? RESEARCH_EXPERIMENT_FIELDS.map((field, index) => researchLabFieldHTML({
    id: 'labExperiment_' + selected.id + '_' + field[0], label: field[1], hint: field[2], placeholder: field[3], value: selected[field[0]],
    dataAttrs: 'data-research-experiment-field="' + escapeAttribute(field[0]) + '" data-research-experiment-id="' + selected.id + '"',
    allowImages: field[0] === 'results',
    sectionNumber: String(index + 1).padStart(2, '0')
  })).join('') : '';
  const editor = selected ? '<div class="research-experiment-editor"><div class="research-experiment-editor-head"><input class="research-experiment-title-input" data-research-experiment-field="title" data-research-experiment-id="' + selected.id + '" value="' + escapeAttribute(selected.title || '') + '" placeholder="实验名称" aria-label="实验名称"><button type="button" class="research-experiment-delete" data-action="research-experiment-delete" title="删除实验" aria-label="删除实验">🗑</button></div><div class="research-experiment-fields">' + editorFields + '</div></div>' : '<div class="research-lab-empty"><div class="research-lab-empty-icon">⌁</div><strong>这个 Idea 还没有实验记录</strong><span>从研究动机、实验设置到结果分析，建立可追溯的验证过程。</span><button type="button" class="research-lab-btn primary" data-action="research-experiment-new">＋ 创建第一组实验</button></div>';
  return '<div class="research-lab-page">' +
    '<section class="research-lab-head research-lab-head--narrative"><div><div class="research-lab-eyebrow">Evidence Building</div><h2>让一个假设，<br>在实验中经得起检验</h2><p>围绕同一条 Idea，记录每一次设计、观察与判断，让实验过程可追溯、可复盘。</p></div><div class="research-lab-selector"><label for="researchExperimentIdeaSelect">关联 Idea</label><select id="researchExperimentIdeaSelect" class="research-lab-select">' + options + '</select></div></section>' +
    '<section class="research-lab-section"><div class="research-lab-section-head"><div><div class="research-lab-section-kicker">实验记录</div><div class="research-lab-section-title">验证方案与结果</div><div class="research-lab-section-note">当前关联“' + escapeHTML(idea.title || '未命名 Idea') + '”；阶段计划已填写 ' + filledPlan + ' / ' + RESEARCH_IDEA_STAGES.find(stage => stage.key === 'experiment').fields.length + ' 项。</div></div><div class="research-lab-head-actions"><button type="button" class="research-lab-btn" data-action="research-experiment-open-plan">查看阶段计划</button><button type="button" class="research-lab-btn primary" data-action="research-experiment-new">＋ 新建实验</button></div></div>' +
      (records.length ? '<div class="research-experiment-tabs">' + tabs + '</div>' : '') + editor + '</section></div>';
}

function insertResearchExperimentImage(textarea, file) {
  if (!textarea || !file) return;
  if (!/^image\/(?:png|jpeg|gif|webp)$/i.test(file.type || '')) {
    showToast('请选择 PNG、JPG、GIF 或 WebP 图片', 'warning');
    return;
  }
  if (file.size > 8 * 1024 * 1024) {
    showToast('单张图片请控制在 8MB 以内', 'warning');
    return;
  }
  const record = researchExperimentStore().find(item => item.id === textarea.dataset.researchExperimentId);
  if (!record) return;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = String(reader.result || '');
    if (!dataUrl.startsWith('data:image/')) return;
    const alt = String(file.name || '实验结果图片').replace(/[\][()]/g, '').replace(/\.[^.]+$/, '') || '实验结果图片';
    const markdown = '![' + alt + '](' + dataUrl + ')';
    const start = Number.isFinite(textarea.selectionStart) ? textarea.selectionStart : textarea.value.length;
    const end = Number.isFinite(textarea.selectionEnd) ? textarea.selectionEnd : start;
    const before = start > 0 && textarea.value.charAt(start - 1) !== '\n' ? '\n\n' : '';
    const after = end < textarea.value.length && textarea.value.charAt(end) !== '\n' ? '\n\n' : '\n';
    textarea.setRangeText(before + markdown + after, start, end, 'end');
    autoResizeResearchTextarea(textarea);
    record.results = textarea.value;
    record.updatedAt = new Date().toISOString();
    save();
    const wrapper = textarea.closest('[data-research-stage-field-wrap]');
    const preview = wrapper && wrapper.querySelector('[data-research-stage-preview]');
    if (preview && !preview.hidden) renderResearchStagePreview(wrapper);
    textarea.focus();
    showToast('图片已添加到实验结果', 'success');
  };
  reader.onerror = () => showToast('图片读取失败，请重试', 'error');
  reader.readAsDataURL(file);
}

// ========================================================================
// RESEARCH PAPER WORKSPACE
// ========================================================================
const RESEARCH_PAPER_SECTIONS = [
  ['abstract', '标题与摘要'],
  ['introduction', 'Introduction'],
  ['relatedWork', 'Related Work'],
  ['method', 'Method'],
  ['experiment', 'Experiment'],
  ['conclusion', 'Conclusion'],
  ['polish', '全文校对']
];
const RESEARCH_SUBMISSION_STAGES = ['待投稿', '已投稿', '审稿中', '返修中', '已录用'];

function researchPaperStore() {
  const research = DATA.learning.research;
  if (!research.papers || typeof research.papers !== 'object') research.papers = { items: [] };
  if (!Array.isArray(research.papers.items)) research.papers.items = [];
  return research.papers.items;
}

function normalizeResearchPaper(paper) {
  if (!paper.sections || typeof paper.sections !== 'object') paper.sections = {};
  RESEARCH_PAPER_SECTIONS.forEach(section => { if (typeof paper.sections[section[0]] !== 'boolean') paper.sections[section[0]] = false; });
  if (!paper.submissionStage && researchPaperProgress(paper) === 100) paper.submissionStage = '待投稿';
  return paper;
}

function researchPaperProgress(paper) {
  const sections = paper.sections || {};
  const done = RESEARCH_PAPER_SECTIONS.filter(section => sections[section[0]]).length;
  return Math.round(done / RESEARCH_PAPER_SECTIONS.length * 100);
}

function researchPaperStatus(paper) {
  const progress = researchPaperProgress(paper);
  if (progress < 100) return '写作中';
  return paper.submissionStage || '待投稿';
}

function researchPaperHTML() {
  const ideas = researchIdeaStore().filter(item => !item.archived);
  const papers = researchPaperStore().map(normalizeResearchPaper);
  if (!ideas.length) return '<div class="research-paper-page"><section class="research-paper-hero research-paper-hero--narrative"><div><div class="research-paper-eyebrow">Writing to Submission</div><h2>让一个发现，<br>在写作中被完整表达</h2><p>从结构化写作到投稿与返修，让每一项成果都有清晰的下一步。</p></div></section><section class="research-paper-onboarding"><span class="research-lab-onboarding-mark">▧</span><div><div class="research-lab-section-kicker">开始写作</div><h3>先从一个明确的 Idea 开始</h3><p>建立研究路径后，即可创建关联论文，并沿着写作、投稿、审稿的节奏持续推进。</p></div><button type="button" class="research-paper-new" data-action="research-experiment-go-ideas">去建立 Idea</button></section></div>';
  if (!ideas.some(item => item.id === researchPaperState.ideaId)) researchPaperState.ideaId = ideas[0].id;
  const idea = ideas.find(item => item.id === researchPaperState.ideaId);
  const scoped = papers.filter(paper => paper.ideaId === idea.id).sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')));
  if (!scoped.some(paper => paper.id === researchPaperState.paperId)) researchPaperState.paperId = scoped[0] ? scoped[0].id : '';
  const selected = scoped.find(paper => paper.id === researchPaperState.paperId) || null;
  const ideaOptions = ideas.map(item => '<option value="' + item.id + '"' + (item.id === idea.id ? ' selected' : '') + '>' + escapeHTML(item.title || '未命名 Idea') + '</option>').join('');
  const completed = papers.filter(paper => researchPaperProgress(paper) === 100).length;
  const writing = papers.filter(paper => researchPaperProgress(paper) < 100).length;
  const submitted = papers.filter(paper => ['已投稿', '审稿中', '返修中'].includes(paper.submissionStage)).length;
  const accepted = papers.filter(paper => paper.submissionStage === '已录用').length;
  const list = scoped.length ? scoped.map(paper => {
    const progress = researchPaperProgress(paper);
    return '<button type="button" class="research-paper-card' + (paper.id === researchPaperState.paperId ? ' is-active' : '') + '" data-research-paper-select="' + paper.id + '"><div class="research-paper-card-title">' + escapeHTML(paper.title || '未命名论文') + '</div><div class="research-paper-card-meta"><span>' + escapeHTML(researchPaperStatus(paper)) + '</span><span>' + progress + '%</span></div><div class="research-paper-mini-progress"><span style="width:' + progress + '%"></span></div></button>';
  }).join('') : '<div class="research-lab-empty research-paper-list-empty"><div class="research-lab-empty-icon">✦</div><strong>这个 Idea 还没有论文</strong><span>先建立一篇论文，再逐步推进写作与投稿。</span><button type="button" class="research-paper-new" data-action="research-paper-new">＋ 创建第一篇论文</button></div>';
  let detail = '<div class="research-paper-detail-empty">选择或新建一篇论文后，在这里推进写作与投稿。</div>';
  if (selected) {
    const progress = researchPaperProgress(selected);
    const status = researchPaperStatus(selected);
    const sections = RESEARCH_PAPER_SECTIONS.map(section => '<button type="button" class="research-paper-section' + (selected.sections[section[0]] ? ' is-done' : '') + '" data-research-paper-section="' + section[0] + '">' + escapeHTML(section[1]) + '</button>').join('');
    const stageIndex = Math.max(0, RESEARCH_SUBMISSION_STAGES.indexOf(selected.submissionStage || '待投稿'));
    const submission = RESEARCH_SUBMISSION_STAGES.map((stage, index) => '<button type="button" class="research-submission-step' + (index <= stageIndex && progress === 100 ? ' is-reached' : '') + (index === stageIndex && progress === 100 ? ' is-active' : '') + '" data-research-paper-submission="' + stage + '"' + (progress < 100 ? ' disabled' : '') + '><span>' + (index + 1) + '</span><br>' + stage + '</button>').join('');
    detail = '<div class="research-paper-detail"><div class="research-paper-meta">' +
      '<div class="research-paper-field"><label>论文标题</label><input data-research-paper-field="title" data-research-paper-id="' + selected.id + '" value="' + escapeAttribute(selected.title || '') + '" placeholder="输入论文标题"></div>' +
      '<div class="research-paper-field"><label>目标期刊 / 会议</label><input data-research-paper-field="venue" data-research-paper-id="' + selected.id + '" value="' + escapeAttribute(selected.venue || '') + '" placeholder="如 NeurIPS 2027"></div>' +
      '<div class="research-paper-field"><label>投稿截止日期</label><input type="date" data-research-paper-field="deadline" data-research-paper-id="' + selected.id + '" value="' + escapeAttribute(selected.deadline || '') + '"></div>' +
      '<button type="button" class="research-paper-delete" data-action="research-paper-delete" title="删除论文" aria-label="删除论文">🗑</button></div>' +
      '<div class="research-paper-progress-head"><div><h3>当前论文进度 · ' + escapeHTML(status) + '</h3><p>' + (progress === 100 ? '写作已完成，已进入投稿环节。' : '完成各论文模块后，将自动进入“待投稿”。') + '</p></div><div class="research-paper-progress-value">' + progress + '%</div></div>' +
      '<div class="research-paper-progress-track"><span style="width:' + progress + '%"></span></div><div class="research-paper-sections">' + sections + '</div>' +
      '<div class="research-submission' + (progress < 100 ? ' is-locked' : '') + '"><div class="research-submission-head"><h3>投稿进度</h3><span>' + (progress < 100 ? '论文完成后自动开启' : '点击节点更新当前状态') + '</span></div><div class="research-submission-steps">' + submission + '</div></div>' +
      '<div class="research-paper-notes"><label for="researchPaperNotes">投稿记录</label><textarea id="researchPaperNotes" data-research-paper-field="submissionNotes" data-research-paper-id="' + selected.id + '" placeholder="记录投稿日期、稿件编号、审稿意见、返修要求与重要沟通…">' + escapeHTML(selected.submissionNotes || '') + '</textarea></div></div>';
  }
  const statsHTML = papers.length
    ? '<div class="research-paper-stats"><div class="research-paper-stat"><strong>' + papers.length + '</strong><span>全部论文</span></div><div class="research-paper-stat"><strong>' + writing + '</strong><span>写作中</span></div><div class="research-paper-stat"><strong>' + submitted + '</strong><span>投稿进行中</span></div><div class="research-paper-stat"><strong>' + accepted + '</strong><span>已录用</span></div></div>'
    : '<div class="research-paper-zero-progress"><span>论文进度</span><strong>尚未开始</strong><em>选择一个 Idea 后，创建第一篇论文即可开启写作流程。</em></div>';
  return '<div class="research-paper-page"><section class="research-paper-hero research-paper-hero--narrative"><div><div class="research-paper-eyebrow">Writing to Submission</div><h2>让一个发现，<br>在写作中被完整表达</h2><p>从结构化写作到投稿与返修，让每一项成果都有清晰的下一步。</p></div><div class="research-paper-create"><label for="researchPaperIdeaSelect">关联 Idea</label><select id="researchPaperIdeaSelect" class="research-paper-idea-select">' + ideaOptions + '</select><button type="button" class="research-paper-new" data-action="research-paper-new">＋ 新建论文</button></div></section>' +
    statsHTML +
    '<section class="research-paper-workspace"><aside class="research-paper-list"><div class="research-paper-list-head">论文列表 <span>' + completed + ' 篇已完成</span></div>' + list + '</aside>' + detail + '</section></div>';
}

// ========================================================================
// RESEARCH TODO WORKSPACE
// ========================================================================
const RESEARCH_TODO_PRIORITIES = [['high', '高优先级'], ['medium', '中优先级'], ['low', '低优先级']];

function researchTodoStore() {
  const research = DATA.learning.research;
  if (!research.todos || typeof research.todos !== 'object') {
    const legacy = Array.isArray(DATA.tasks.researchTodo) ? DATA.tasks.researchTodo : [];
    const now = new Date().toISOString();
    research.todos = { items: legacy.map(task => ({
      id: task.id || uid(), title: task.text || '', ideaId: '', stage: '', priority: 'medium', dueDate: '',
      status: task.done ? 'done' : 'todo', notes: '', createdAt: now, updatedAt: now,
      completedAt: task.done ? now : ''
    })) };
  }
  if (!Array.isArray(research.todos.items)) research.todos.items = [];
  research.todos.items.forEach(item => { item.status = item.status === 'done' ? 'done' : 'todo'; });
  return research.todos.items;
}

function researchTodoPriorityRank(priority) {
  return priority === 'high' ? 0 : priority === 'medium' ? 1 : 2;
}

function researchTodoVisibleItems() {
  const today = todayKey();
  const query = researchTodoState.query.trim().toLowerCase();
  return researchTodoStore().filter(item => {
    const done = item.status === 'done';
    if (researchTodoState.scope === 'overdue' && (done || !item.dueDate || item.dueDate >= today)) return false;
    if (researchTodoState.scope === 'completed' && !done) return false;
    if (researchTodoState.ideaId && item.ideaId !== researchTodoState.ideaId) return false;
    if (query && !String(item.title || '').toLowerCase().includes(query) && !String(item.notes || '').toLowerCase().includes(query)) return false;
    return true;
  }).sort((a, b) => {
    const dueA = a.dueDate || '9999-12-31';
    const dueB = b.dueDate || '9999-12-31';
    if (dueA !== dueB) return dueA.localeCompare(dueB);
    const priority = researchTodoPriorityRank(a.priority) - researchTodoPriorityRank(b.priority);
    if (priority) return priority;
    return String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
  });
}

function researchTodoRowHTML(item, ideaMap) {
  const today = todayKey();
  const done = item.status === 'done';
  const overdue = !done && item.dueDate && item.dueDate < today;
  const dueClass = overdue ? ' is-overdue' : item.dueDate ? ' is-due' : '';
  const dueLabel = item.dueDate ? (item.dueDate === today ? '今天' : item.dueDate.slice(5).replace('-', '/')) : '';
  const meta = [];
  if (item.ideaId && ideaMap[item.ideaId]) meta.push('<span class="research-todo-chip">' + escapeHTML(ideaMap[item.ideaId]) + '</span>');
  if (item.priority === 'high') meta.push('<span class="research-todo-chip is-high">高优先级</span>');
  if (dueLabel) meta.push('<span class="research-todo-chip' + dueClass + '">' + (overdue ? '逾期 · ' : '') + escapeHTML(dueLabel) + '</span>');
  return '<div class="research-todo-row' + (done ? ' is-done' : '') + '"><button type="button" class="research-todo-check' + (done ? ' is-done' : '') + '" data-research-todo-toggle="' + item.id + '" aria-label="' + (done ? '恢复为未完成' : '标记为已完成') + '">' + (done ? '✓' : '') + '</button><div class="research-todo-main"><div class="research-todo-title">' + escapeHTML(item.title || '未命名任务') + '</div><div class="research-todo-meta">' + meta.join('') + '</div></div><button type="button" class="research-todo-edit" data-research-todo-edit="' + item.id + '" aria-label="编辑任务">•••</button></div>';
}

function researchTodoHTML() {
  const items = researchTodoStore();
  const ideas = researchIdeaStore().filter(item => !item.archived);
  const ideaMap = Object.fromEntries(ideas.map(item => [item.id, item.title || '未命名 Idea']));
  const today = todayKey();
  const active = items.filter(item => item.status !== 'done').length;
  const todayCount = items.filter(item => item.status !== 'done' && item.dueDate === today).length;
  const overdue = items.filter(item => item.status !== 'done' && item.dueDate && item.dueDate < today).length;
  const sevenDaysAgo = Date.now() - 7 * 86400000;
  const completedWeek = items.filter(item => item.status === 'done' && item.completedAt && new Date(item.completedAt).getTime() >= sevenDaysAgo).length;
  const visible = researchTodoVisibleItems();
  const ideaOptions = '<option value="">全部 Idea</option>' + ideas.map(item => '<option value="' + item.id + '"' + (researchTodoState.ideaId === item.id ? ' selected' : '') + '>' + escapeHTML(item.title || '未命名 Idea') + '</option>').join('');
  const groupDefs = researchTodoState.scope === 'completed'
    ? [['completed', '已完成', visible]]
    : researchTodoState.scope === 'overdue'
      ? [['overdue', '逾期', visible]]
      : [
        ['overdue', '逾期', visible.filter(item => item.status !== 'done' && item.dueDate && item.dueDate < today)],
        ['today', '今天截止', visible.filter(item => item.status !== 'done' && item.dueDate === today)],
        ['upcoming', '接下来', visible.filter(item => item.status !== 'done' && item.dueDate && item.dueDate > today)],
        ['unscheduled', '未排期', visible.filter(item => item.status !== 'done' && !item.dueDate)],
        ['completed', '已完成', visible.filter(item => item.status === 'done')]
      ];
  const groups = groupDefs.filter(group => group[2].length).map(group => '<section class="research-todo-group"><div class="research-todo-group-head">' + group[1] + ' <span>' + group[2].length + '</span></div>' + group[2].map(item => researchTodoRowHTML(item, ideaMap)).join('') + '</section>').join('');
  const scopes = [['all', '全部任务'], ['overdue', '逾期'], ['completed', '已完成']].map(scope => '<button type="button" class="research-todo-scope' + (researchTodoState.scope === scope[0] ? ' is-active' : '') + '" data-research-todo-scope="' + scope[0] + '">' + scope[1] + '</button>').join('');
  return '<div class="research-todo-page"><section class="research-todo-hero"><div><div class="research-todo-eyebrow">Research Action Flow</div><h2>科研行动台</h2><p>记录研究任务，关联对应 Idea，并按照完成期限和优先级逐项推进。</p></div><div class="research-todo-capture"><input id="researchTodoQuickInput" class="research-todo-title-input" placeholder="记下一件需要推进的研究行动…" aria-label="快速添加科研任务"><input id="researchTodoQuickDue" class="research-todo-due-input" type="date" aria-label="完成期限" title="完成期限"><button type="button" data-action="research-todo-quick-add">添加任务</button></div></section>' +
    '<div class="research-todo-stats"><div class="research-todo-stat"><strong>' + active + '</strong><span>当前任务</span></div><div class="research-todo-stat"><strong>' + todayCount + '</strong><span>今天截止</span></div><div class="research-todo-stat' + (overdue ? ' is-risk' : '') + '"><strong>' + overdue + '</strong><span>已经逾期</span></div><div class="research-todo-stat"><strong>' + completedWeek + '</strong><span>本周完成</span></div></div>' +
    '<section class="research-todo-panel"><div class="research-todo-toolbar"><div class="research-todo-scopes">' + scopes + '</div><input id="researchTodoSearch" class="research-todo-search" value="' + escapeAttribute(researchTodoState.query) + '" placeholder="搜索任务"><select id="researchTodoIdeaFilter" class="research-todo-filter">' + ideaOptions + '</select></div><div class="research-todo-body">' + (groups || '<div class="research-todo-empty">当前视图没有任务。<br>从上方快速记录下一件研究行动。</div>') + '</div></section></div>';
}

function quickAddResearchTodo() {
  const input = document.getElementById('researchTodoQuickInput');
  const dueInput = document.getElementById('researchTodoQuickDue');
  const title = input ? input.value.trim() : '';
  if (!title) {
    if (input) input.focus();
    showToast('先写下需要完成的研究行动', 'warning');
    return;
  }
  const dueDate = dueInput ? dueInput.value : '';
  if (!dueDate) {
    if (dueInput) dueInput.focus();
    showToast('请选择任务的完成期限', 'warning');
    return;
  }
  const now = new Date().toISOString();
  const linkedIdea = researchTodoState.ideaId || (researchIdeaStore().some(item => item.id === researchInspirationState.selectedId) ? researchInspirationState.selectedId : '');
  researchTodoStore().push({ id: uid(), title, ideaId: linkedIdea, priority: 'medium', dueDate, status: 'todo', notes: '', createdAt: now, updatedAt: now, completedAt: '' });
  save();
  rerender();
  showToast('任务已添加', 'success');
  requestAnimationFrame(() => { const next = document.getElementById('researchTodoQuickInput'); if (next) next.focus(); });
}

function openResearchTodoModal(item) {
  const task = item || { id: '', title: '', ideaId: '', priority: 'medium', dueDate: '', status: 'todo', notes: '' };
  researchTodoModalId = task.id || '';
  const ideas = researchIdeaStore().filter(idea => !idea.archived);
  const ideaOptions = '<option value="">暂不关联</option>' + ideas.map(idea => '<option value="' + idea.id + '"' + (task.ideaId === idea.id ? ' selected' : '') + '>' + escapeHTML(idea.title || '未命名 Idea') + '</option>').join('');
  const priorityOptions = RESEARCH_TODO_PRIORITIES.map(priority => '<option value="' + priority[0] + '"' + (task.priority === priority[0] ? ' selected' : '') + '>' + priority[1] + '</option>').join('');
  showModal('<div class="research-todo-modal-title">编辑科研任务</div><div class="research-todo-modal-sub">明确任务归属与完成期限，让下一步行动足够具体。</div><div class="research-todo-form"><div class="research-todo-form-field full"><label>任务内容</label><input id="researchTodoModalTitle" value="' + escapeAttribute(task.title || '') + '" placeholder="具体、可执行的研究动作"></div><div class="research-todo-form-field"><label>关联 Idea</label><select id="researchTodoModalIdea">' + ideaOptions + '</select></div><div class="research-todo-form-field"><label>优先级</label><select id="researchTodoModalPriority">' + priorityOptions + '</select></div><div class="research-todo-form-field full"><label>完成期限（必填）</label><input type="date" id="researchTodoModalDue" value="' + escapeAttribute(task.dueDate || '') + '" required></div><div class="research-todo-form-field full"><label>补充说明</label><textarea id="researchTodoModalNotes" placeholder="记录交付标准、依赖条件或参考信息…">' + escapeHTML(task.notes || '') + '</textarea></div></div><div class="research-todo-form-actions"><div>' + (task.id ? '<button type="button" class="research-idea-modal-btn cancel" id="researchTodoModalDelete">删除</button>' : '') + '</div><div><button type="button" class="research-idea-modal-btn cancel" id="researchTodoModalCancel">取消</button><button type="button" class="research-idea-modal-btn confirm" id="researchTodoModalSave">保存</button></div></div>');
  document.getElementById('researchTodoModalCancel').addEventListener('click', closeModal);
  document.getElementById('researchTodoModalSave').addEventListener('click', saveResearchTodoModal);
  const deleteButton = document.getElementById('researchTodoModalDelete');
  if (deleteButton) deleteButton.addEventListener('click', () => { closeModal(); deleteResearchTodo(task.id); });
  requestAnimationFrame(() => document.getElementById('researchTodoModalTitle').focus());
}

function saveResearchTodoModal() {
  const title = document.getElementById('researchTodoModalTitle').value.trim();
  if (!title) { showToast('任务内容不能为空', 'warning'); return; }
  const task = researchTodoStore().find(item => item.id === researchTodoModalId);
  if (!task) return;
  const dueDate = document.getElementById('researchTodoModalDue').value;
  if (!dueDate) { showToast('完成期限不能为空', 'warning'); document.getElementById('researchTodoModalDue').focus(); return; }
  task.title = title;
  task.ideaId = document.getElementById('researchTodoModalIdea').value;
  task.priority = document.getElementById('researchTodoModalPriority').value;
  task.dueDate = dueDate;
  task.notes = document.getElementById('researchTodoModalNotes').value;
  task.updatedAt = new Date().toISOString();
  closeModal();
  save();
  rerender();
  showToast('任务已更新', 'success');
}

function deleteResearchTodo(id) {
  const task = researchTodoStore().find(item => item.id === id);
  if (!task) return;
  showConfirm('将任务移入回收站？', '「' + escapeHTML(task.title || '未命名任务') + '」将在回收站保留 ' + TRASH_KEEP_DAYS + ' 天，期间可以恢复。', '移入回收站', () => softDelete('learning.research.todos.items', id));
}

// ========================================================================
// PUBLIC INFO — clock, date context, weather
// ========================================================================
const WEATHER_CACHE_KEY = 'ai-workspace-weather';
const WEATHER_TTL = 30 * 60 * 1000; // 30 min
const WEATHER_ENDPOINT = workspaceApiUrl('/api/weather/forecast');
const GEOCODE_ENDPOINT = workspaceApiUrl('/api/weather/geocode');

// status: 'idle' | 'loading' | 'ready' | 'error'
const weatherState = { status: 'idle', data: null, error: '', place: '' };
let weatherAutoRefreshStarted = false;
let clockTimer = null;

// WMO weather interpretation codes → label + glyph (day / night)
const WMO_CODES = {
  0:  ['晴',       '☀️', '🌙'],
  1:  ['晴间多云', '🌤️', '🌙'],
  2:  ['多云',     '⛅', '☁️'],
  3:  ['阴',       '☁️', '☁️'],
  45: ['有雾',     '🌫️', '🌫️'],
  48: ['冻雾',     '🌫️', '🌫️'],
  51: ['小毛雨',   '🌦️', '🌧️'],
  53: ['毛雨',     '🌦️', '🌧️'],
  55: ['浓毛雨',   '🌧️', '🌧️'],
  56: ['冻毛雨',   '🌧️', '🌧️'],
  57: ['冻毛雨',   '🌧️', '🌧️'],
  61: ['小雨',     '🌦️', '🌧️'],
  63: ['中雨',     '🌧️', '🌧️'],
  65: ['大雨',     '🌧️', '🌧️'],
  66: ['冻雨',     '🌧️', '🌧️'],
  67: ['冻雨',     '🌧️', '🌧️'],
  71: ['小雪',     '🌨️', '🌨️'],
  73: ['中雪',     '🌨️', '🌨️'],
  75: ['大雪',     '❄️', '❄️'],
  77: ['雪粒',     '🌨️', '🌨️'],
  80: ['阵雨',     '🌦️', '🌧️'],
  81: ['强阵雨',   '🌧️', '🌧️'],
  82: ['暴雨',     '⛈️', '⛈️'],
  85: ['阵雪',     '🌨️', '🌨️'],
  86: ['强阵雪',   '❄️', '❄️'],
  95: ['雷阵雨',   '⛈️', '⛈️'],
  96: ['雷阵雨伴冰雹', '⛈️', '⛈️'],
  99: ['雷暴伴冰雹',   '⛈️', '⛈️']
};

function wmoInfo(code, isDay) {
  const e = WMO_CODES[code] || ['未知', '🌡️', '🌡️'];
  return { label: e[0], glyph: isDay === 0 ? e[2] : e[1] };
}

function weatherConfig() {
  const w = (DATA && DATA.settings && DATA.settings.weather) || {};
  return {
    city: w.city || '上海',
    lat: typeof w.lat === 'number' ? w.lat : 31.2222,
    lon: typeof w.lon === 'number' ? w.lon : 121.4581
  };
}

function greetingFor(hour) {
  if (hour < 5)  return { text: '夜深了',     emoji: '🌙', sub: '早点休息，明天的状态更重要' };
  if (hour < 9)  return { text: '早上好',     emoji: '🌅', sub: '先看一眼今天的重点，再开始动手' };
  if (hour < 12) return { text: '上午好',     emoji: '☀️', sub: '专注时段，适合处理最难的那件事' };
  if (hour < 14) return { text: '中午好',     emoji: '🍵', sub: '休息一会儿，下午还有半天' };
  if (hour < 18) return { text: '下午好',     emoji: '🌤️', sub: '执行时段，把清单一条条划掉' };
  if (hour < 22) return { text: '晚上好',     emoji: '🌆', sub: '复盘今天，顺手规划明天' };
  return { text: '夜里好', emoji: '🌛', sub: '收个尾就好，别熬太晚' };
}

function dayProgressPercent(now = new Date()) {
  const mins = now.getHours() * 60 + now.getMinutes();
  return Math.round(mins / 1440 * 100);
}

// Cached read — never triggers a network request
function readWeatherCache() {
  try {
    const raw = localStorage.getItem(WEATHER_CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (!cached || !cached.savedAt || !cached.data) return null;
    if (Date.now() - cached.savedAt > WEATHER_TTL) return { ...cached, stale: true };
    return cached;
  } catch (_) { return null; }
}

function writeWeatherCache(data, place) {
  try {
    localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data, place }));
  } catch (_) { /* quota or private mode — cache is optional */ }
}

async function fetchWeather(opts = {}) {
  const cfg = weatherConfig();
  const cache = readWeatherCache();

  // Serve fresh cache for the same place unless a refresh is forced
  if (!opts.force && cache && !cache.stale && cache.place === cfg.city) {
    weatherState.status = 'ready';
    weatherState.data = cache.data;
    weatherState.place = cache.place;
    return;
  }

  weatherState.status = 'loading';
  weatherState.error = '';
  if (opts.repaint !== false) paintWeather();

  const params = new URLSearchParams({
    latitude: String(cfg.lat),
    longitude: String(cfg.lon),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto',
    forecast_days: '4'
  });

  try {
    const res = await fetch(WEATHER_ENDPOINT + '?' + params.toString(), { cache: 'no-store' });
    if (!res.ok) throw new Error('天气服务返回 ' + res.status);
    const json = await res.json();
    if (!json || !json.current) throw new Error('天气数据格式异常');
    weatherState.status = 'ready';
    weatherState.data = json;
    weatherState.place = cfg.city;
    weatherState.error = '';
    writeWeatherCache(json, cfg.city);
  } catch (err) {
    // Fall back to any cached reading, even a stale one — better than an empty panel
    if (cache && cache.data) {
      weatherState.status = 'ready';
      weatherState.data = cache.data;
      weatherState.place = cache.place;
      weatherState.error = '';
    } else {
      weatherState.status = 'error';
      // Network-level failures surface as opaque TypeErrors — show something readable
      weatherState.error = (err instanceof TypeError || !navigator.onLine)
        ? '网络不可用，暂时无法获取天气'
        : ((err && err.message) || '天气获取失败');
      weatherState.data = null;
    }
  }
  paintWeather();
}

function weatherPanelHTML() {
  const cfg = weatherConfig();
  const head = '<div class="ov-weather-head">' +
    '<button class="ov-weather-place" data-action="weather-city" title="切换城市">' +
      '<span>📍</span><span class="ov-weather-place-name">' + escapeHTML(cfg.city) + '</span><span class="ov-caret">▼</span>' +
    '</button>' +
    '<button class="ov-weather-locate" data-action="weather-locate" title="使用当前位置" aria-label="使用当前位置">◎</button>' +
  '</div>';

  if (weatherState.status === 'loading') {
    return '<div class="ov-weather">' + head +
      '<div class="ov-weather-state">' +
        '<div style="width:100%;display:flex;flex-direction:column;gap:9px;">' +
          '<div class="ov-weather-skeleton" style="height:34px;width:62%;"></div>' +
          '<div class="ov-weather-skeleton" style="width:84%;"></div>' +
          '<div class="ov-weather-skeleton" style="width:56%;"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  if (weatherState.status !== 'ready' || !weatherState.data) {
    const msg = weatherState.status === 'error' ? weatherState.error : '天气尚未加载';
    return '<div class="ov-weather">' + head +
      '<div class="ov-weather-state">' +
        '<div class="ov-ws-glyph">🌧️</div>' +
        '<div class="ov-ws-text">' + escapeHTML(msg) + '</div>' +
        '<div class="ov-ws-hint">需要联网获取实时天气</div>' +
        '<button class="btn btn-outline btn-sm" data-action="weather-refresh">重试</button>' +
      '</div>' +
    '</div>';
  }

  const d = weatherState.data;
  const cur = d.current;
  const info = wmoInfo(cur.weather_code, cur.is_day);
  const daily = d.daily || {};
  const units = d.current_units || {};
  const tempUnit = units.temperature_2m || '°C';

  const today = {
    max: daily.temperature_2m_max ? Math.round(daily.temperature_2m_max[0]) : null,
    min: daily.temperature_2m_min ? Math.round(daily.temperature_2m_min[0]) : null
  };

  const metrics = '<div class="ov-weather-metrics">' +
    '<div class="ov-weather-metric"><span>体感</span><strong>' + Math.round(cur.apparent_temperature) + '°</strong></div>' +
    '<div class="ov-weather-metric"><span>湿度</span><strong>' + Math.round(cur.relative_humidity_2m) + '%</strong></div>' +
    '<div class="ov-weather-metric"><span>风速</span><strong>' + Math.round(cur.wind_speed_10m) + '</strong></div>' +
    '<div class="ov-weather-metric"><span>高/低</span><strong>' +
      (today.max !== null ? today.max + '°/' + today.min + '°' : '—') + '</strong></div>' +
  '</div>';

  // Next three days (index 0 is today)
  let forecast = '';
  if (daily.time && daily.time.length > 1) {
    const labels = ['明天', '后天'];
    const cards = [];
    for (let i = 1; i < Math.min(4, daily.time.length); i++) {
      const dt = new Date(daily.time[i] + 'T00:00:00');
      const label = labels[i - 1] || ('周' + '日一二三四五六'[dt.getDay()]);
      const fi = wmoInfo(daily.weather_code[i], 1);
      cards.push('<div class="ov-fc-day">' +
        '<span>' + escapeHTML(label) + '</span>' +
        '<span class="ov-fc-glyph" title="' + escapeAttribute(fi.label) + '">' + fi.glyph + '</span>' +
        '<strong>' + Math.round(daily.temperature_2m_max[i]) + '°/' + Math.round(daily.temperature_2m_min[i]) + '°</strong>' +
      '</div>');
    }
    forecast = '<div class="ov-weather-forecast">' + cards.join('') + '</div>';
  }

  const updated = cur.time ? new Date(cur.time).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '';

  return '<div class="ov-weather">' + head +
    '<div class="ov-weather-now">' +
      '<div class="ov-weather-glyph" title="' + escapeAttribute(info.label) + '">' + info.glyph + '</div>' +
      '<div style="min-width:0;">' +
        '<div class="ov-weather-temp">' + Math.round(cur.temperature_2m) + '<sup>' + escapeHTML(tempUnit) + '</sup></div>' +
        '<div class="ov-weather-desc">' + escapeHTML(info.label) + '</div>' +
      '</div>' +
    '</div>' +
    metrics + forecast +
    (updated ? '<div class="ov-weather-updated">更新于 ' + escapeHTML(updated) + '</div>' : '') +
  '</div>';
}

// Repaint just the weather panel — avoids a full page rerender
function paintWeather() {
  const slot = document.getElementById('ovWeatherSlot');
  if (slot) slot.innerHTML = weatherPanelHTML();
}

function paintClock() {
  const now = new Date();
  const el = document.getElementById('ovClock');
  if (!el) return;
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  el.innerHTML = h + ':' + m + '<span class="ov-clock-sec">' + s + '</span>';

  const bar = document.getElementById('ovDayFill');
  const pct = document.getElementById('ovDayPct');
  const p = dayProgressPercent(now);
  if (bar) bar.style.width = p + '%';
  if (pct) pct.textContent = p + '%';
}

function startClock() {
  stopClock();
  paintClock();
  clockTimer = setInterval(paintClock, 1000);
}

function stopClock() {
  if (clockTimer) { clearInterval(clockTimer); clockTimer = null; }
}

async function promptWeatherCity() {
  const cfg = weatherConfig();
  const input = await showPrompt('切换城市', '输入城市名称，将通过 Open-Meteo 公共接口查询坐标与天气。', cfg.city, '例如：北京 / 杭州 / Tokyo');
  if (input === null) return;
  const query = input.trim();
  if (!query) { showToast('请输入城市名称', 'warning'); return; }

  weatherState.status = 'loading';
  paintWeather();
  try {
    const params = new URLSearchParams({ name: query, count: '1', language: 'zh', format: 'json' });
    const res = await fetch(GEOCODE_ENDPOINT + '?' + params.toString());
    if (!res.ok) throw new Error('城市查询失败 ' + res.status);
    const json = await res.json();
    const hit = json && json.results && json.results[0];
    if (!hit) throw new Error('没有找到「' + query + '」');
    DATA.settings.weather = {
      city: hit.name + (hit.admin1 && hit.admin1 !== hit.name ? ' · ' + hit.admin1 : ''),
      lat: hit.latitude,
      lon: hit.longitude
    };
    save();
    await fetchWeather({ force: true });
    showToast('已切换到 ' + DATA.settings.weather.city, 'success');
  } catch (err) {
    weatherState.status = 'error';
    weatherState.error = (err && err.message) || '城市查询失败';
    paintWeather();
    showToast(weatherState.error, 'error');
  }
}

function locateWeather() {
  if (!navigator.geolocation) { showToast('当前浏览器不支持定位', 'warning'); return; }
  showToast('正在获取位置…', 'info');
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    let city = '当前位置';
    try {
      const params = new URLSearchParams({
        latitude: String(latitude), longitude: String(longitude), count: '1', language: 'zh', format: 'json'
      });
      const res = await fetch(GEOCODE_ENDPOINT + '?' + params.toString());
      if (res.ok) {
        const json = await res.json();
        const hit = json && json.results && json.results[0];
        if (hit && hit.name) city = hit.name;
      }
    } catch (_) { /* keep the generic label */ }
    DATA.settings.weather = { city, lat: latitude, lon: longitude };
    save();
    await fetchWeather({ force: true });
    showToast('已更新为 ' + city, 'success');
  }, (err) => {
    showToast(err && err.code === 1 ? '定位权限被拒绝' : '定位失败，可手动切换城市', 'warning');
  }, { timeout: 8000, maximumAge: 10 * 60 * 1000 });
}

// ========================================================================
// FOCUS WORKSPACE RENDERERS
// ========================================================================
function workspaceProgressHTML(label, percent, note) {
  return '<div class="workspace-progress-head"><span>' + escapeHTML(label) + '</span><strong>' + percent + '%</strong></div>' +
    '<div class="workspace-progress-track" aria-label="' + escapeHTML(label) + ' ' + percent + '%"><div class="workspace-progress-fill" style="width:' + percent + '%"></div></div>' +
    (note ? '<div class="workspace-progress-note">' + escapeHTML(note) + '</div>' : '');
}

function workspaceStatHTML(value, label, accent) {
  return '<div class="workspace-stat' + (accent ? ' is-accent' : '') + '"><div class="workspace-stat-value">' + escapeHTML(String(value)) + '</div><div class="workspace-stat-label">' + escapeHTML(label) + '</div></div>';
}

function compactResourceListHTML(items) {
  if (!items || !items.length) return emptyStateHTML('📚', '暂无学习资源', '通过右上角按钮添加一条资源');
  return '<div class="study-resource-list">' + items.map((item, index) =>
    '<div class="study-resource"><div class="study-resource-index">' + String(index + 1).padStart(2, '0') + '</div>' +
      '<div><div class="study-resource-title">' + escapeHTML(item.title) + '</div><div class="study-resource-desc">' + escapeHTML(item.desc || '暂未添加说明') + '</div></div>' +
      '<button class="study-resource-delete" data-path="learning.ai.resources" data-id="' + item.id + '" title="删除资源" aria-label="删除资源">×</button></div>'
  ).join('') + '</div>';
}

function currentWeekdayName() {
  const day = new Date().getDay();
  return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][day];
}

function linkedTodayActionsHTML() {
  const dayName = currentWeekdayName();
  const fitnessItems = fitnessPlanForDay(dayName);
  const englishItems = DATA.tasks.english || [];
  const items = [];
  fitnessItems.forEach(item => {
    const type = fitnessType(item.typeId);
    items.push({ kind: 'fitness', item, title: type.name + (item.target ? ' · ' + item.target : ''), meta: '健身计划 · ' + dayName, done: !!item.done });
  });
  englishItems.forEach(item => {
    items.push({ kind: 'english', item, title: item.text, meta: '英语练习 · 今日', done: !!item.done });
  });
  if (!items.length) return '<section class="workspace-sync-panel"><div class="workspace-section-heading"><h2>今日专项行动</h2><span>来自训练与学习计划</span></div><div class="workspace-next"><div class="workspace-next-mark"></div><div><div class="workspace-next-label">还没有关联事项</div><div class="workspace-next-title">在健身打卡设置本周训练，或在英语学习添加今日练习。</div></div></div></section>';
  return '<section class="workspace-sync-panel"><div class="workspace-section-heading"><h2>今日专项行动</h2><span>' + items.filter(item => item.done).length + '/' + items.length + ' 已完成</span></div><div class="workspace-sync-list">' + items.map(entry => {
    const mark = entry.kind === 'fitness'
      ? '<span class="workspace-sync-mark' + (entry.done ? ' is-done' : '') + '" data-plan-toggle="' + entry.item.id + '" role="checkbox" aria-checked="' + entry.done + '" tabindex="0" aria-label="切换训练计划完成状态">' + (entry.done ? '✓' : '') + '</span>'
      : '<span class="workspace-sync-mark' + (entry.done ? ' is-done' : '') + '" data-path="tasks.english" data-id="' + entry.item.id + '" role="checkbox" aria-checked="' + entry.done + '" tabindex="0" aria-label="切换英语练习完成状态">' + (entry.done ? '✓' : '') + '</span>';
    return '<div class="workspace-sync-item' + (entry.done ? ' is-done' : '') + '">' + mark + '<div><div class="workspace-sync-title">' + escapeHTML(entry.title) + '</div><div class="workspace-sync-meta">' + escapeHTML(entry.meta) + '</div></div><span class="workspace-sync-tag">' + (entry.done ? '完成' : '待办') + '</span></div>';
  }).join('') + '</div></section>';
}

function dailyPlanPageHTML() {
  const dp = DATA.tasks.dailyPlan;
  const review = DATA.weeklyReview;
  const slots = [
    { key: 'morning', label: '上午 · 专注时段', icon: '☀' },
    { key: 'afternoon', label: '下午 · 执行时段', icon: '●' },
    { key: 'evening', label: '晚上 · 收束时段', icon: '○' }
  ];
  const all = slots.flatMap(slot => dp[slot.key] || []);
  const done = all.filter(task => task.done).length;
  const percent = calcTaskPercent(all);
  const firstPending = all.find(task => !task.done);
  const taskCards = slots.map(slot => {
    const tasks = dp[slot.key] || [];
    const completed = tasks.filter(task => task.done).length;
    return '<section class="workspace-task-card"><div class="card-header"><div class="card-title"><span class="dot"></span>' + slot.icon + ' ' + slot.label + '</div><span class="card-tag">' + completed + '/' + tasks.length + '</span></div>' + taskListHTML('tasks.dailyPlan.' + slot.key, tasks) + '</section>';
  }).join('');
  return '<div class="workspace-page daily-plan-page">' +
    '<section class="workspace-hero"><div><div class="workspace-kicker">Daily operating system</div><div class="workspace-hero-title">把今天拆成可完成的三个时段</div><div class="workspace-hero-copy">先完成最重要的一项，再让计划带动节奏。未完成事项可以在晚间复盘后统一结转。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="open-palette">快速添加或搜索</button><button class="btn btn-outline btn-sm" data-action="rollover-plan">结转未完成事项</button></div></div>' +
    '<div class="workspace-hero-side">' + workspaceProgressHTML('今日计划完成度', percent, done + ' / ' + all.length + ' 项已完成') +
    '<div class="workspace-next"><div class="workspace-next-mark"></div><div><div class="workspace-next-label">下一项待办</div><div class="workspace-next-title">' + escapeHTML(firstPending ? firstPending.text : '今日计划已全部完成') + '</div></div></div></div></section>' +
    '<div class="workspace-stat-strip">' + workspaceStatHTML(done, '已完成', true) + workspaceStatHTML(all.length - done, '待完成', false) + workspaceStatHTML(dp.morning.filter(task => task.done).length + '/' + dp.morning.length, '上午进度', false) + workspaceStatHTML('第 ' + review.week + ' 周', '当前复盘周期', false) + '</div>' +
    '<div class="workspace-section-heading"><h2>时段计划</h2><span>双击任务文字即可编辑</span></div><div class="daily-plan-grid">' + taskCards + '</div>' +
    linkedTodayActionsHTML() + '<div class="workspace-bottom-grid"><section class="workspace-note-panel"><div class="workspace-section-heading"><h2>本周复盘</h2><span>点击文字直接编辑</span></div>' +
    '<div class="workspace-note-row"><div class="workspace-note-label">做得好的</div><div class="workspace-note-value" contenteditable="true" data-wr="good">' + escapeHTML(review.good) + '</div></div>' +
    '<div class="workspace-note-row"><div class="workspace-note-label">待改进</div><div class="workspace-note-value" contenteditable="true" data-wr="improve">' + escapeHTML(review.improve) + '</div></div>' +
    '<div class="workspace-note-row"><div class="workspace-note-label">下周重点</div><div class="workspace-note-value" contenteditable="true" data-wr="focus">' + escapeHTML(review.focus) + '</div></div></section>' +
    '<section class="workspace-note-panel workspace-execution-panel"><div class="workspace-section-heading"><h2>执行提示</h2><span>今日</span></div><div class="workspace-next"><div class="workspace-next-mark"></div><div><div class="workspace-next-label">优先级建议</div><div class="workspace-next-title">优先完成上午的深度工作，再处理沟通与整理类事项。</div></div></div></section></div></div>';
}

function fitnessPageHTML() {
  const fit = DATA.fitness;
  const plan = fit.plan || [];
  const logs = (fit.logs || []).slice(-6).reverse();
  const completed = plan.filter(item => item.done).length;
  const percent = calcTaskPercent(plan);
  const stats = weekStats();
  const streak = calcFitnessStreak();
  const goal = (DATA.stats.fitness && DATA.stats.fitness.goal) || 7;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);
  const planRows = plan.length ? plan.map(item => {
    const type = fitnessType(item.typeId);
    return '<div class="fit-plan-row' + (item.done ? ' done' : '') + '" data-plan-toggle="' + item.id + '"><span class="fp-icon">' + type.icon + '</span><div class="fp-main"><div class="fp-name">' + escapeHTML(item.day + ' · ' + type.name) + '</div><div class="fp-target">' + escapeHTML(item.target || '未设置目标') + '</div></div><span class="checkin-status ' + (item.done ? 'done' : 'pending') + '">' + (item.done ? '已完成' : '待完成') + '</span><button class="inspire-delete" style="position:static;opacity:1;flex-shrink:0;" data-path="fitness.plan" data-id="' + item.id + '" title="删除计划" aria-label="删除计划">×</button></div>';
  }).join('') : emptyStateHTML('🏋', '本周还没有训练计划', '使用下方表单补充一项');
  const dayOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(day => '<option value="' + day + '">' + day + '</option>').join('');
  const typeOptions = (fit.types || []).map(type => '<option value="' + type.id + '">' + type.icon + ' ' + escapeHTML(type.name) + '</option>').join('');
  const logRows = logs.length ? logs.map(log => {
    const type = fitnessType(log.typeId);
    const details = [log.duration ? log.duration + ' 分钟' : '', log.calories ? log.calories + ' 千卡' : '', log.date ? log.date.slice(5) : ''].filter(Boolean).join(' · ');
    return '<div class="fit-log-row"><span class="fl-icon">' + type.icon + '</span><div class="fl-main"><div class="fl-title">' + escapeHTML(type.name + (log.note ? ' · ' + log.note : '')) + '</div><div class="fl-meta">' + escapeHTML(details) + '</div></div><button class="inspire-delete" style="position:static;opacity:1;flex-shrink:0;" data-path="fitness.logs" data-id="' + log.id + '" title="删除记录" aria-label="删除记录">×</button></div>';
  }).join('') : emptyStateHTML('📋', '暂无训练记录', '完成一次训练后会显示在这里');
  return '<div class="workspace-page fitness-page">' +
    '<section class="workspace-hero"><div><div class="workspace-kicker">Training logbook</div><div class="workspace-hero-title">本周训练，按计划留下真实记录</div><div class="workspace-hero-copy">计划负责方向，训练日志记录真实投入。完成计划时可以补充时长、消耗与备注，周数据会自动汇总。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="add-workout-log">记录一次训练</button></div></div>' +
    '<div class="fitness-hero-side fitness-hero-heatmap"><div class="fitness-hero-heatmap-head"><div class="fitness-hero-heatmap-title">打卡记录</div><span class="card-tag">近 4 个月</span></div>' + fitnessHeatmapHTML() + '</div></section>' +
    '<div class="workspace-stat-strip">' + workspaceStatHTML(stats.sessions + ' 次', '本周训练', true) + workspaceStatHTML(stats.duration + ' min', '累计时长', false) + workspaceStatHTML(stats.calories + ' kcal', '活动消耗', false) + workspaceStatHTML(streak + ' 天', '连续训练', false) + '</div>' +
    '<div class="fitness-layout"><section class="workspace-task-card fitness-list"><div class="card-header"><div class="card-title"><span class="dot"></span>本周训练计划</div><span class="card-tag">' + completed + '/' + plan.length + '</span></div>' + planRows + '<div class="fit-add-form"><div class="fit-add-row"><select class="fit-select" id="planDay">' + dayOptions + '</select><select class="fit-select" id="planType" style="flex:1;">' + typeOptions + '</select></div><div class="fit-add-row"><input class="add-task-input" id="planTarget" placeholder="目标，如 3km / 30 分钟 / 4 组" aria-label="训练目标"><button class="add-btn" data-action="add-plan-item">添加计划</button></div></div></section>' +
    '<div class="fitness-side-stack"><section class="workspace-task-card fitness-log-card"><div class="card-header"><div class="card-title"><span class="dot"></span>最近训练记录</div><button class="card-btn" data-action="add-workout-log" title="记录训练" aria-label="记录训练">+</button></div>' + logRows + '</section></div></div></div>';
}

function aiLearningPageHTML() {
  const tasks = DATA.tasks.aiLearn || [];
  const resources = DATA.learning.ai.resources || [];
  const done = tasks.filter(task => task.done).length;
  const percent = calcTaskPercent(tasks);
  const nextTask = tasks.find(task => !task.done);
  return '<div class="workspace-page ai-learning-page">' +
    '<section class="workspace-hero"><div><div class="workspace-kicker">Learning studio</div><div class="workspace-hero-title">把输入、练习和输出组织成闭环</div><div class="workspace-hero-copy">每次学习都落在一项可检查的任务上。把资源沉淀在右侧，完成后整理成可复用的工作流或文章。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="add-resource">添加学习资源</button><button class="btn btn-outline btn-sm" data-action="open-palette">搜索任务</button></div></div><div class="workspace-hero-side">' + workspaceProgressHTML('本轮学习完成度', percent, done + ' / ' + tasks.length + ' 个任务已完成') + '<div class="workspace-next"><div class="workspace-next-mark"></div><div><div class="workspace-next-label">继续推进</div><div class="workspace-next-title">' + escapeHTML(nextTask ? nextTask.text : '这一轮学习任务已完成，可以整理输出') + '</div></div></div></div></section>' +
    '<div class="workspace-stat-strip">' + workspaceStatHTML(done, '已完成任务', true) + workspaceStatHTML(tasks.length - done, '待完成任务', false) + workspaceStatHTML(resources.length, '资源库条目', false) + workspaceStatHTML(percent + '%', '当前完成度', false) + '</div>' +
    '<div class="study-main-grid"><section class="study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>本轮学习任务</div><span class="card-tag">' + done + '/' + tasks.length + '</span></div>' + taskListHTML('tasks.aiLearn', tasks) + '</section><section class="study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>学习资源库</div><button class="card-btn" data-action="add-resource" title="添加资源" aria-label="添加资源">+</button></div>' + compactResourceListHTML(resources) + '</section></div></div>';
}

function englishLearningPageHTML() {
  const english = DATA.learning.english;
  const challenge = english.challenge || { current: 0, total: 100, streak: 0 };
  const tasks = DATA.tasks.english || [];
  const done = tasks.filter(task => task.done).length;
  const total = Math.max(1, Number(challenge.total) || 100);
  const current = Math.min(total, Math.max(0, Number(challenge.current) || 0));
  const percent = Math.round(current / total * 100);
  const circumference = 2 * Math.PI * 48;
  const offset = circumference * (1 - percent / 100);
  const nextTask = tasks.find(task => !task.done);
  return '<div class="workspace-page english-learning-page">' +
    '<section class="workspace-hero"><div><div class="workspace-kicker">Language practice</div><div class="workspace-hero-title">让英语练习成为稳定的每日节奏</div><div class="workspace-hero-copy">挑战进度记录长期投入，今日任务承接具体动作。完成今日全部任务后，可以一键完成当天挑战。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="complete-english-day">完成今日挑战</button><button class="btn btn-outline btn-sm" data-action="open-palette">添加学习任务</button></div></div><div class="workspace-hero-side">' + workspaceProgressHTML('今日任务完成度', calcTaskPercent(tasks), done + ' / ' + tasks.length + ' 项已完成') + '<div class="workspace-next"><div class="workspace-next-mark"></div><div><div class="workspace-next-label">下一项练习</div><div class="workspace-next-title">' + escapeHTML(nextTask ? nextTask.text : '今日任务已完成，可以记录挑战进度') + '</div></div></div></div></section>' +
    '<div class="workspace-stat-strip">' + workspaceStatHTML('第 ' + current + ' 天', '挑战进度', true) + workspaceStatHTML(challenge.streak + ' 天', '连续练习', false) + workspaceStatHTML(done + '/' + tasks.length, '今日任务', false) + workspaceStatHTML(percent + '%', '百日挑战完成度', false) + '</div>' +
    '<div class="study-main-grid"><section class="study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>100 天挑战</div><span class="card-tag">累计 ' + current + '/' + total + '</span></div><div class="english-challenge"><div class="english-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="english-ring-track" cx="60" cy="60" r="48" fill="none" stroke-width="9"></circle><circle class="english-ring-fill" cx="60" cy="60" r="48" fill="none" stroke-width="9" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset + '"></circle></svg><div class="english-ring-center">' + percent + '%<small>挑战进度</small></div></div><div class="english-challenge-copy"><h3>' + current + ' / ' + total + ' 天</h3><p>已经连续练习 ' + challenge.streak + ' 天。维持短而稳定的输入与输出，比偶尔冲刺更重要。</p><button class="btn btn-outline btn-sm" data-action="complete-english-day">记录今天</button></div></div><div class="english-rhythm"><div class="english-rhythm-row"><div class="english-rhythm-day">输入</div><div class="english-rhythm-copy">精读、听力和词汇积累，构建可理解的语言材料。</div></div><div class="english-rhythm-row"><div class="english-rhythm-day">输出</div><div class="english-rhythm-copy">口语模仿或短写作，把当天输入转成可调用的表达。</div></div></div></section><section class="study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>今日练习</div><span class="card-tag">' + done + '/' + tasks.length + '</span></div>' + taskListHTML('tasks.english', tasks) + '</section></div></div>';
}

// ========================================================================
// PAGES
// ========================================================================
const PAGES = {
  dashboard: {
    title: '首页',
    render: () => {
      const tasks = DATA.tasks.dashboard;
      const done = tasks.filter(t => t.done).length;
      const percent = calcTaskPercent(tasks);
      const checkins = DATA.checkins.daily;
      const ciDone = checkins.filter(c => c.done).length;
      const inspirations = DATA.inspirations.ideas.slice(0, 3);
      const streak = calcStreak();
      const all = countAllTasks();

      const now = new Date();
      const greet = greetingFor(now.getHours());
      const dayPct = dayProgressPercent(now);
      const dateFull = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日';
      const weekday = '星期' + '日一二三四五六'[now.getDay()];
      const remainingTasks = tasks.length - done;

      // --- hero: greeting + live clock + date context + weather ---
      const hero = '<div class="ov-hero">' +
        '<div class="ov-hero-left">' +
          '<span class="ov-eyebrow"><span class="ov-eyebrow-emoji">' + greet.emoji + '</span>' + escapeHTML(greet.text) + '</span>' +
          '<h2 class="ov-greeting">' + (remainingTasks > 0
            ? '今天还有 ' + remainingTasks + ' 件事待完成'
            : (tasks.length > 0 ? '今天的任务全部完成 🎉' : '今天还没有安排任务')) + '</h2>' +
          '<div class="ov-greeting-sub">' + escapeHTML(greet.sub) + '</div>' +
          '<div class="ov-clock-row">' +
            '<div class="ov-clock" id="ovClock" role="timer" aria-label="当前时间">--:--<span class="ov-clock-sec">--</span></div>' +
          '</div>' +
          '<div class="ov-datebar">' +
            '<strong>' + escapeHTML(dateFull) + '</strong>' +
            '<span class="ov-dot-sep"></span><span>' + escapeHTML(weekday) + '</span>' +
            '<span class="ov-chip">第 ' + weekNum() + ' 周</span>' +
          '</div>' +
          '<div class="ov-daybar">' +
            '<div class="ov-daybar-head"><span>今日已过</span><strong id="ovDayPct">' + dayPct + '%</strong></div>' +
            '<div class="ov-daybar-track"><div class="ov-daybar-fill" id="ovDayFill" style="width:' + dayPct + '%"></div></div>' +
          '</div>' +
        '</div>' +
        '<div id="ovWeatherSlot">' + weatherPanelHTML() + '</div>' +
      '</div>';

      // --- KPI strip ---
      const kpi = (glyph, accent, value, unit, label) =>
        '<div class="ov-kpi" style="--kpi-accent:' + accent + ';">' +
          '<div class="ov-kpi-glyph">' + glyph + '</div>' +
          '<div class="ov-kpi-body">' +
            '<div class="ov-kpi-value">' + value + (unit ? '<small>' + escapeHTML(unit) + '</small>' : '') + '</div>' +
            '<div class="ov-kpi-label">' + escapeHTML(label) + '</div>' +
          '</div>' +
        '</div>';

      const kpis = '<div class="ov-kpis">' +
        kpi('◎', 'var(--primary)', percent + '<small>%</small>', '', '今日完成度') +
        kpi('✓', 'var(--success)', ciDone, '/ ' + checkins.length, '每日打卡') +
        kpi('🔥', '#f5813a', streak, '天', '连续打卡') +
        kpi('∑', '#7c6cf0', all.done, '/ ' + all.total, '全部任务进度') +
      '</div>';

      // --- left column: today's tasks + trend ---
      const left = '<div class="ov-col">' +
        '<div class="card">' +
          '<div class="ov-focus-head">' +
            '<div class="ov-focus-ring">' +
              ringHTML(percent, '今日完成度', done + ' / ' + tasks.length + ' 项任务',
                percent === 100 ? '全部完成，太棒了！' : '继续加油') +
            '</div>' +
            '<div class="stat-row" style="margin-top:0;flex:0 0 auto;">' +
              statBox('stats.dashboard.focusHours', DATA.stats.dashboard.focusHours, '专注时长') +
              statBox('stats.dashboard.output', DATA.stats.dashboard.output, '今日产出') +
            '</div>' +
          '</div>' +
          taskListHTML('tasks.dashboard', tasks) +
        '</div>' +
        linkedTodayActionsHTML() +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>完成率趋势</div><span class="card-tag">近 8 周</span></div>' +
          trendChartHTML() +
        '</div>' +
      '</div>';

      // --- right column: check-ins + learning + inspirations ---
      const right = '<div class="ov-col">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>每日打卡</div><span class="card-tag">' + ciDone + '/' + checkins.length + '</span></div>' +
          checkinHTML('daily', checkins) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>学习进度</div><span class="card-tag">自动</span></div>' +
          barHTMLAuto('AI 学习', calcTaskPercent(DATA.tasks.aiLearn)) +
          barHTMLAuto('英语学习', calcTaskPercent(DATA.tasks.english)) +
          barHTMLAuto('科研文献', calcTaskPercent(DATA.tasks.researchPapers)) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>最新灵感</div><span class="card-tag">' + DATA.inspirations.ideas.length + ' 条</span></div>' +
          (inspirations.length === 0 ? emptyStateHTML('💡', '暂无灵感', '去「选题灵感」页添加第一条') :
            inspirations.map(i =>
              '<div class="inspire-item"><div class="inspire-title">' + escapeHTML(i.title) + '</div>' +
              '<div class="inspire-desc">' + escapeHTML(i.desc) + '</div></div>').join('')) +
        '</div>' +
      '</div>';

      return hero + kpis + '<div class="ov-grid">' + left + right + '</div>';
    }
  },

  'daily-plan': {
    title: '每日计划',
    render: () => {
      const dp = DATA.tasks.dailyPlan;
      const wr = DATA.weeklyReview;
      const slots = [
        { key: 'morning', label: '上午 · 专注时段', icon: '🌅' },
        { key: 'afternoon', label: '下午 · 执行时段', icon: '☀️' },
        { key: 'evening', label: '晚上 · 复盘时段', icon: '🌙' }
      ];
      let cards = slots.map(s => {
        const tasks = dp[s.key];
        const done = tasks.filter(t => t.done).length;
        return '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>' + s.icon + ' ' + s.label + '</div><span class="card-tag">' + done + '/' + tasks.length + '</span></div>' +
          taskListHTML('tasks.dailyPlan.' + s.key, tasks) +
        '</div>';
      }).join('');

      cards += '<div class="card">' +
        '<div class="card-header"><div class="card-title"><span class="dot"></span>本周复盘</div><span class="card-tag">第' + wr.week + '周</span></div>' +
        '<div class="inspire-item"><div class="inspire-title">👍 做得好的</div><div class="inspire-desc" contenteditable="true" data-wr="good">' + escapeHTML(wr.good) + '</div></div>' +
        '<div class="inspire-item"><div class="inspire-title">📈 待改进</div><div class="inspire-desc" contenteditable="true" data-wr="improve">' + escapeHTML(wr.improve) + '</div></div>' +
        '<div class="inspire-item"><div class="inspire-title">🎯 下周重点</div><div class="inspire-desc" contenteditable="true" data-wr="focus">' + escapeHTML(wr.focus) + '</div></div>' +
        '<div class="clear-done-row"><button class="clear-done-btn" data-action="rollover-plan">结转未完成任务到明天</button></div>' +
      '</div>';

      return '<div class="card-grid">' + cards + '</div>';
    }
  },

  fitness: {
    title: '健身打卡',
    render: () => {
      const fit = DATA.fitness;
      const plan = fit.plan || [];
      const pDone = plan.filter(p => p.done).length;
      const pPercent = calcTaskPercent(plan);
      const ws = weekStats();
      const streak = calcFitnessStreak();
      const goal = (DATA.stats.fitness && DATA.stats.fitness.goal) || 7;
      const logs = (fit.logs || []).slice(-8).reverse();

      // Plan rows
      let planHTML = '';
      if (plan.length === 0) {
        planHTML = emptyStateHTML('🏋️', '本周还没有健身任务', '在下方添加本周训练计划');
      } else {
        for (const p of plan) {
          const t = fitnessType(p.typeId);
          planHTML += '<div class="fit-plan-row' + (p.done ? ' done' : '') + '" data-plan-toggle="' + p.id + '">' +
            '<span class="fp-icon">' + t.icon + '</span>' +
            '<div class="fp-main"><div class="fp-name">' + escapeHTML(p.day + ' · ' + t.name) + '</div>' +
            (p.target ? '<div class="fp-target">目标 ' + escapeHTML(p.target) + '</div>' : '') + '</div>' +
            '<span class="checkin-status ' + (p.done ? 'done' : 'pending') + '">' + (p.done ? '已完成' : '待完成') + '</span>' +
            '<button class="inspire-delete" style="position:static;opacity:1;flex-shrink:0;" data-path="fitness.plan" data-id="' + p.id + '" title="删除" aria-label="删除任务">✕</button>' +
          '</div>';
        }
      }
      // Plan add form: day select + type select + target input
      const dayOpts = ['周一','周二','周三','周四','周五','周六','周日'].map(d =>
        '<option value="' + d + '">' + d + '</option>').join('');
      const typeOpts = (fit.types || []).map(t =>
        '<option value="' + t.id + '">' + t.icon + ' ' + escapeHTML(t.name) + '</option>').join('');
      planHTML += '<div class="fit-add-form">' +
        '<div class="fit-add-row">' +
          '<select class="fit-select" id="planDay">' + dayOpts + '</select>' +
          '<select class="fit-select" id="planType" style="flex:1;">' + typeOpts + '</select>' +
        '</div>' +
        '<div class="fit-add-row">' +
          '<input class="add-task-input" id="planTarget" placeholder="目标（如 3km / 30 分钟 / 4 组）" aria-label="目标">' +
          '<button class="add-btn" data-action="add-plan-item">添加</button>' +
        '</div>' +
      '</div>';

      // Log rows
      let logsHTML = '';
      if (logs.length === 0) {
        logsHTML = emptyStateHTML('📋', '暂无训练记录', '完成打卡或手动记录一次训练');
      } else {
        for (const l of logs) {
          const t = fitnessType(l.typeId);
          const meta = [];
          if (l.duration) meta.push(l.duration + ' 分钟');
          if (l.calories) meta.push(l.calories + ' 千卡');
          meta.push(l.date.slice(5));
          logsHTML += '<div class="fit-log-row">' +
            '<span class="fl-icon">' + t.icon + '</span>' +
            '<div class="fl-main"><div class="fl-title">' + escapeHTML(t.name) + (l.note ? ' · ' + escapeHTML(l.note) : '') + '</div>' +
            '<div class="fl-meta">' + escapeHTML(meta.join(' · ')) + '</div></div>' +
            '<button class="inspire-delete" style="position:static;opacity:1;flex-shrink:0;" data-path="fitness.logs" data-id="' + l.id + '" title="删除" aria-label="删除记录">✕</button>' +
          '</div>';
        }
      }

      return '<div class="card-grid">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>本周任务</div><span class="card-tag">' + pDone + '/' + plan.length + '</span></div>' +
          planHTML +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>本周数据</div><span class="card-tag">自动统计</span></div>' +
          ringHTML(pPercent, '任务完成度', pDone + ' / ' + plan.length + ' 项', pDone >= goal ? '已达标，太棒了！' : '再完成 ' + Math.max(0, goal - pDone) + ' 项就达标啦') +
          '<div class="stat-row">' +
            statBox(null, ws.sessions + ' 次', '训练次数', true) +
            statBox(null, ws.duration + ' min', '总时长', true) +
            statBox(null, ws.calories + ' kcal', '总消耗', true) +
          '</div>' +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>连续训练</div><span class="card-tag">🔥 按记录计算</span></div>' +
          '<div style="text-align:center;padding:20px 0;">' +
            '<div style="font-size:48px;font-weight:700;color:var(--primary);">' + streak + '</div>' +
            '<div style="font-size:14px;color:var(--text-sub);margin-top:6px;">天连续训练</div>' +
            '<div style="font-size:12px;color:var(--text-muted);margin-top:12px;">' + (streak >= 30 ? '🏆 已达成 30 天里程碑！' : '距 30 天里程碑还差 ' + Math.max(0, 30 - streak) + ' 天') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header">' +
            '<div class="card-title"><span class="dot"></span>训练记录</div>' +
            '<div class="card-actions"><button class="card-btn" data-action="add-workout-log" title="记录一次训练">+</button></div>' +
          '</div>' +
          logsHTML +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>训练热力图</div><span class="card-tag">近 25 周</span></div>' +
          fitnessHeatmapHTML() +
        '</div>' +
      '</div>';
    }
  },

  inspiration: {
    title: '选题灵感',
    render: () => {
      const ins = DATA.inspirations;
      return '<div class="card-grid">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>本周灵感库</div><span class="card-tag">' + ins.ideas.length + ' 条</span></div>' +
          inspireListHTML('inspirations.ideas', ins.ideas) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>热门方向</div><span class="card-tag">趋势</span></div>' +
          inspireListHTML('inspirations.trends', ins.trends) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>灵感来源</div><span class="card-tag">渠道</span></div>' +
          inspireListHTML('inspirations.sources', ins.sources) +
        '</div>' +
      '</div>';
    }
  },

  review: {
    title: '内容复盘',
    render: () => {
      const rv = DATA.review;
      const all = countAllTasks();
      return '<div class="card-grid">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>上周数据概览</div><span class="card-tag">第' + rv.week + '周</span></div>' +
          '<div class="stat-row" style="margin-top:0;">' +
            statBox('review.stats.published', rv.stats.published, '发布内容') +
            statBox('review.stats.reads', rv.stats.reads, '阅读量') +
            statBox('review.stats.interactions', rv.stats.interactions, '互动数') +
          '</div>' +
          barHTMLAuto('内容完成率（全部任务）', calcAllTasksPercent()) +
          barHTML('review.interaction', 'ri', '互动转化率', rv.interactionRate) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>完成率趋势</div><span class="card-tag">近 8 周</span></div>' +
          trendChartHTML() +
          '<div class="settings-desc" style="margin-top:8px;">当前共 ' + all.done + '/' + all.total + ' 项任务已完成（自动汇总）</div>' +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header">' +
            '<div class="card-title"><span class="dot"></span>表现最佳</div>' +
            '<div class="card-actions"><button class="card-btn" data-action="add-topcontent" title="添加">+</button></div>' +
          '</div>' +
          simpleListHTML('review.topContent', rv.topContent, '🏆', '暂无内容') +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>复盘总结</div><span class="card-tag">行动项</span></div>' +
          '<div class="inspire-item"><div class="inspire-title">✅ 继续做</div><div class="inspire-desc" contenteditable="true" data-review-action="continue">' + escapeHTML(rv.actions.continue) + '</div></div>' +
          '<div class="inspire-item"><div class="inspire-title">⚠️ 开始做</div><div class="inspire-desc" contenteditable="true" data-review-action="start">' + escapeHTML(rv.actions.start) + '</div></div>' +
          '<div class="inspire-item"><div class="inspire-title">❌ 停止做</div><div class="inspire-desc" contenteditable="true" data-review-action="stop">' + escapeHTML(rv.actions.stop) + '</div></div>' +
          '<div class="clear-done-row"><button class="clear-done-btn" data-action="gen-weekly-draft">✨ 自动生成本周小结</button></div>' +
        '</div>' +
      '</div>';
    }
  },

  comic: {
    title: 'AI 漫剧',
    render: () => {
      const cm = DATA.comic;
      const sb = DATA.tasks.comicStoryboard;
      const sbDone = sb.filter(t => t.done).length;
      return '<div class="card-grid">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>当前制作</div><span class="card-tag">进行中</span></div>' +
          '<div class="inspire-item">' +
            '<div class="inspire-title" contenteditable="true" data-comic="title">' + escapeHTML(cm.current.title) + '</div>' +
            '<div class="inspire-desc">分镜进度：' + sbDone + ' / ' + sb.length + '（自动）</div>' +
          '</div>' +
          barHTMLAuto('完成进度', calcTaskPercent(sb)) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>分镜任务</div><span class="card-tag">' + sbDone + '/' + sb.length + '</span></div>' +
          taskListHTML('tasks.comicStoryboard', sb) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header">' +
            '<div class="card-title"><span class="dot"></span>已发布</div>' +
            '<div class="card-actions"><button class="card-btn" data-action="add-published" title="添加">+</button></div>' +
          '</div>' +
          simpleListHTML('comic.published', cm.published, '🎬', '暂无已发布剧集') +
        '</div>' +
      '</div>';
    }
  },

  'ai-learn': {
    title: 'AI 学习',
    render: () => {
      const ai = DATA.learning.ai;
      const tasks = DATA.tasks.aiLearn;
      const done = tasks.filter(t => t.done).length;
      return '<div class="card-grid">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>学习任务</div><span class="card-tag">' + done + '/' + tasks.length + '</span></div>' +
          barHTMLAuto('学习任务完成度', calcTaskPercent(tasks)) +
          taskListHTML('tasks.aiLearn', tasks) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header">' +
            '<div class="card-title"><span class="dot"></span>学习资源</div>' +
            '<div class="card-actions"><button class="card-btn" data-action="add-resource" title="添加">+</button></div>' +
          '</div>' +
          simpleListHTML('learning.ai.resources', ai.resources, '📚', '暂无学习资源') +
        '</div>' +
      '</div>';
    }
  },

  english: {
    title: '英语学习',
    render: () => {
      const en = DATA.learning.english;
      const tasks = DATA.tasks.english;
      const done = tasks.filter(t => t.done).length;
      return '<div class="card-grid">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>100 天挑战</div><span class="card-tag">第 ' + en.challenge.current + ' 天</span></div>' +
          ringHTML(Math.round(en.challenge.current / en.challenge.total * 100), '挑战进度', en.challenge.current + ' / ' + en.challenge.total + ' 天', '连续 ' + en.challenge.streak + ' 天') +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>今日任务</div><span class="card-tag">' + done + '/' + tasks.length + '</span></div>' +
          barHTMLAuto('英语任务完成度', calcTaskPercent(tasks)) +
          taskListHTML('tasks.english', tasks) +
        '</div>' +
      '</div>';
    }
  },

  'research-todo': {
    title: '科研待办',
    render: () => researchTodoHTML()
  },

  research: {
    title: '文献',
    render: () => {
      const rs = DATA.learning.research;
      const papers = DATA.tasks.researchPapers;
      const pDone = papers.filter(t => t.done).length;
      const collections = zoteroState.collections || [];
      const items = zoteroState.items || [];
      const connectionMessage = zoteroState.status === 'error'
        ? '<div class="settings-desc" style="margin-top:10px;color:var(--danger);">' + escapeHTML(zoteroState.message || '未连接 Zotero。') + '</div>'
        : '<div class="settings-desc" style="margin-top:10px;">通过本机只读桥接读取 Zotero 文献、标签、摘要和关联笔记；数据不会写回 Zotero。</div>';
      const collectionOptions = '<option value="">全部收藏夹</option>' + collections.map(collection =>
        '<option value="' + escapeHTML(collection.key) + '"' + (zoteroState.selectedCollection === collection.key ? ' selected' : '') + '>' + escapeHTML(collection.name) + '</option>'
      ).join('');
      const loadedCount = items.length;
      const totalCount = Math.max(zoteroState.total || 0, loadedCount);
      const countLabel = zoteroState.status === 'connected' || loadedCount
        ? '已加载 ' + loadedCount + ' / ' + totalCount
        : '尚未加载';
      const zoteroList = items.length
        ? '<div class="zotero-list">' + items.map(zoteroItemHTML).join('') + '</div>'
        : zoteroState.status === 'loading'
          ? emptyStateHTML('⏳', '正在读取 Zotero 文献', '请稍候…')
          : emptyStateHTML('📚', '暂无已加载文献', zoteroState.status === 'connected' ? '尝试切换收藏夹或清空搜索条件。' : '启动 Zotero 后，点击“连接 Zotero”。');
      const remaining = Math.max(0, totalCount - loadedCount);
      const paginationHTML = zoteroState.status === 'connected' && items.length
        ? '<div class="zotero-pagination">' +
            '<div class="zotero-pagination-status">' +
              (zoteroState.hasMore ? '还有 ' + remaining + ' 篇未加载；每次追加 ' + ZOTERO_PAGE_SIZE + ' 篇。' : '当前范围内的文献已全部加载。') +
            '</div>' +
            (zoteroState.hasMore
              ? '<button class="btn btn-outline btn-sm zotero-load-more" data-action="zotero-load-more"' + (zoteroState.loadingMore ? ' disabled' : '') + '>' + (zoteroState.loadingMore ? '正在加载…' : '加载更多 ' + Math.min(ZOTERO_PAGE_SIZE, remaining) + ' 篇') + '</button>'
              : '') +
          '</div>'
        : '';
      const libraryWorkspaceHTML =
      '<div class="card-grid zotero-row literature-library-grid">' +
        '<div class="card zotero-library-card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>Zotero 文献库</div><div class="zotero-library-meta"><span class="zotero-count-badge">' + countLabel + '</span>' + zoteroStatusHTML() + '</div></div>' +
          '<div class="zotero-toolbar">' +
            '<select class="fit-select" id="zoteroCollection" aria-label="选择 Zotero 收藏夹">' + collectionOptions + '</select>' +
            '<input class="add-task-input" id="zoteroQuery" value="' + escapeHTML(zoteroState.query) + '" placeholder="搜索标题、作者、标签或笔记" aria-label="搜索 Zotero 文献">' +
            '<button class="btn btn-primary btn-sm" data-action="zotero-connect"' + (zoteroState.status === 'loading' ? ' disabled' : '') + '>' + (zoteroState.status === 'loading' ? '连接中…' : '连接 Zotero') + '</button>' +
            '<button class="btn btn-outline btn-sm" data-action="zotero-search"' + (zoteroState.status === 'loading' ? ' disabled' : '') + '>搜索</button>' +
          '</div>' +
          connectionMessage +
          '<div style="margin-top:14px;">' + zoteroList + paginationHTML + '</div>' +
        '</div>' +
        '<div class="card zotero-detail-card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>文献详情与笔记</div><span class="card-tag">只读</span></div>' +
          '<div class="zotero-detail-body">' + zoteroNotesHTML() + '</div>' +
        '</div>' +
      '</div>';
      const literatureTabs = '<div class="literature-view-tabs" role="tablist" aria-label="文献工作区视图">' +
        '<button type="button" class="literature-view-tab' + (literatureView === 'overview' ? ' is-active' : '') + '" data-literature-view="overview" role="tab" aria-selected="' + (literatureView === 'overview') + '">阅读总览</button>' +
        '<button type="button" class="literature-view-tab' + (literatureView === 'library' ? ' is-active' : '') + '" data-literature-view="library" role="tab" aria-selected="' + (literatureView === 'library') + '">Zotero 文献库</button>' +
        '<button type="button" class="literature-view-tab' + (literatureView === 'graph' ? ' is-active' : '') + '" data-literature-view="graph" role="tab" aria-selected="' + (literatureView === 'graph') + '">知识图谱</button>' +
      '</div>';
      const currentViewHTML = literatureView === 'library'
        ? libraryWorkspaceHTML
        : literatureView === 'graph'
          ? knowledgeGraphHTML()
          : literatureOverviewHTML();
      return '<div class="literature-page">' + literatureTabs + currentViewHTML + '</div>';
    }
  },

  'research-inspiration': {
    title: '科研灵感',
    render: () => researchIdeaHTML()
  },

  'research-experiments': {
    title: '实验',
    render: () => researchExperimentHTML()
  },

  'research-papers': {
    title: '论文',
    render: () => researchPaperHTML()
  },

  news: {
    title: '新闻热点',
    render: () => {
      const n = DATA.news;
      return '<div class="card-grid">' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>科技动态</div><span class="card-tag">' + n.tech.length + ' 条</span></div>' +
          inspireListHTML('news.tech', n.tech) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>创作资讯</div><span class="card-tag">' + n.creation.length + ' 条</span></div>' +
          inspireListHTML('news.creation', n.creation) +
        '</div>' +
        '<div class="card">' +
          '<div class="card-header"><div class="card-title"><span class="dot"></span>热榜趋势</div><span class="card-tag">TOP ' + n.hotlist.length + '</span></div>' +
          inspireListHTML('news.hotlist', n.hotlist) +
        '</div>' +
      '</div>';
    }
  },

  settings: {
    title: '数据管理',
    render: () => {
      const isAPI = storage.mode === 'api';
      const isFSAA = storage.mode === 'fsaa';
      const all = countAllTasks();
      const inspCount = DATA.inspirations.ideas.length + DATA.inspirations.trends.length + DATA.inspirations.sources.length;
      const theme = currentThemePref();
      const icloudPath = '项目目录/data/（可选择任意本地或 iCloud 文件夹）';

      const wcfg = weatherConfig();

      return '<div class="settings-card">' +
        '<h3>🎨 外观</h3>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">主题模式</div><div class="settings-desc">浅色 / 深色 / 跟随系统自动切换</div></div>' +
          '<div class="theme-seg">' +
            '<button class="theme-seg-btn' + (theme === 'light' ? ' active' : '') + '" data-theme="light">🌞 浅色</button>' +
            '<button class="theme-seg-btn' + (theme === 'dark' ? ' active' : '') + '" data-theme="dark">🌙 深色</button>' +
            '<button class="theme-seg-btn' + (theme === 'system' ? ' active' : '') + '" data-theme="system">🖥️ 系统</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="settings-card">' +
        '<h3>🌤️ 首页天气</h3>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">天气城市</div>' +
          '<div class="settings-desc">首页顶部显示实时天气。城市与坐标通过 Open-Meteo 公共接口查询，仅发送坐标，不发送任何工作台数据；结果在本地缓存 30 分钟。</div></div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">' +
            '<span class="settings-value">' + escapeHTML(wcfg.city) + '</span>' +
            '<button class="btn btn-outline btn-sm" data-action="weather-city">切换城市</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="settings-card">' +
        '<h3>☁️ 数据同步</h3>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">存储方式</div>' +
          '<div class="settings-desc">' + (isAPI ? '当前由 Fastify API 保存到 SQLite（推荐）。需要跨设备手动同步时，可切换到指定文件夹模式。' : isFSAA ? '当前读写所选文件夹中的 workspace.json；适合 iCloud/网盘同步，但同一时间只能由一个设备写入。' : '当前为浏览器本地回退存储。点击“连接 SQLite”可交互式连接数据库，也可以选择文件夹保存。') + '</div></div>' +
          '<span class="storage-badge ' + (isAPI || isFSAA ? 'fsaa' : 'local') + '">' + (isAPI ? '✓ SQLite' : isFSAA ? '✓ 指定文件夹' : '本地回退') + '</span>' +
        '</div>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">数据文件夹</div>' +
          '<div class="settings-desc"><code class="inline-code">' + icloudPath + '</code></div></div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            (isFSAA
              ? '<button class="btn btn-outline btn-sm" data-action="reconnect">重新授权</button><button class="btn btn-primary btn-sm" data-action="use-api">切换到 SQLite</button>'
              : isAPI
                ? '<button class="btn btn-outline btn-sm" data-action="connect">选择文件夹并切换</button>'
                : '<button class="btn btn-primary btn-sm" data-action="connect-api">连接 SQLite</button><button class="btn btn-outline btn-sm" data-action="connect">选择数据文件夹</button>') +
          '</div>' +
        '</div>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">上次保存</div></div>' +
          '<span class="settings-value">' + (storage.lastSaved ? new Date(storage.lastSaved).toLocaleString('zh-CN') : '—') + '</span>' +
        '</div>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">数据版本</div><div class="settings-desc">修订号 r' + (DATA.meta.revision || 0) + ' · 设备 ' + (DATA.meta.deviceId || DEVICE_ID).slice(0, 12) + '</div></div>' +
          '<span class="settings-value">v' + (DATA.version || '3.0') + '</span>' +
        '</div>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">自动备份</div><div class="settings-desc">可创建一致性 SQLite 快照；服务端会保留最近 10 份备份</div></div>' +
        '</div>' +
      '</div>' +

      '<div class="settings-card">' +
        '<h3>🗑️ 回收站</h3><div class="settings-desc" style="margin:-4px 0 12px;">删除的数据将在这里保留 ' + TRASH_KEEP_DAYS + ' 天，之后自动永久清理。</div>' +
        trashListHTML() +
      '</div>' +

      '<div class="settings-card">' +
        '<h3>📦 数据操作</h3>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">备份与恢复</div><div class="settings-desc">导出为 JSON 文件，或从备份文件恢复</div></div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-outline btn-sm" data-action="export">导出 JSON</button><button class="btn btn-outline btn-sm" data-action="import">导入 JSON</button>' + (isAPI ? '<button class="btn btn-outline btn-sm" data-action="backup-db">备份 SQLite</button>' : '') + '</div>' +
        '</div>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">数据概览</div><div class="settings-desc">任务 ' + all.done + '/' + all.total + ' · 灵感 ' + inspCount + ' 条 · 回收站 ' + DATA.trash.length + ' 条</div></div>' +
        '</div>' +
        '<div class="settings-row">' +
          '<div><div class="settings-label">重置数据</div><div class="settings-desc">恢复为初始示例数据（当前数据会先自动导出备份）</div></div>' +
          '<button class="btn btn-danger btn-sm" data-action="reset">重置</button>' +
        '</div>' +
      '</div>' +

      '<div class="settings-card">' +
        '<h3>📖 使用说明</h3>' +
        '<div class="settings-desc" style="line-height:1.8;">' +
          '<p><strong>1. SQLite API（当前默认）：</strong>重构版通过 Fastify API 将完整旧版工作区快照保存到 SQLite，避免改变原有页面交互；可通过「导出 / 导入」或服务端备份迁移。</p>' +
          '<p><strong>2. 文件系统同步（回退）：</strong>仍可连接当前目录下的 <code class="inline-code">data/</code> 文件夹（完整路径 <code class="inline-code">' + icloudPath + '</code>），数据保存为 <code class="inline-code">workspace.json</code>，通过 iCloud 在设备间同步。</p>' +
          '<p><strong>3. 快捷键：</strong><code class="inline-code">Cmd/Ctrl + K</code> 全局搜索 · <code class="inline-code">N</code> 新建任务 · <code class="inline-code">1-9</code> 切换页面 · <code class="inline-code">?</code> 快捷键帮助</p>' +
          '<p><strong>4. 提示：</strong>旧版直连入口仍支持 localStorage 回退；多设备使用 SQLite 时请通过 API 访问，不要直接同步正在运行的 <code class="inline-code">workspace.db</code>。</p>' +
        '</div>' +
        '<div class="settings-row" style="margin-top:8px;">' +
          '<div><div class="settings-label">新手引导</div></div>' +
          '<button class="btn btn-outline btn-sm" data-action="show-onboarding">重新查看</button>' +
        '</div>' +
      '</div>';
    }
  }
};

// The original task and data contracts stay in place; these page-specific renderers
// only replace presentation and add focused entry points.
PAGES['daily-plan'].render = dailyPlanPageHTML;
PAGES.fitness.render = fitnessPageHTML;
PAGES['ai-learn'].render = aiLearningPageHTML;
PAGES.english.render = englishLearningPageHTML;

// ========================================================================
// PAGE RENDERING + NAVIGATION
// ========================================================================
const PAGE_ORDER = ['dashboard', 'daily-plan', 'fitness', 'inspiration', 'review', 'comic', 'ai-learn', 'english', 'research', 'news', 'settings', 'research-todo', 'research-inspiration', 'research-experiments', 'research-papers'];

// The overview hero already shows a full date + week line, so the page header
// there is just the title.
function mainHeaderHTML(page, pageId) {
  const dateLine = pageId === 'dashboard'
    ? ''
    : '<div class="date">' + todayCN() + ' · 第' + weekNum() + '周</div>';
  return '<div class="main-header">' +
    '<div><h1>' + page.title + '</h1>' + dateLine + '</div>' +
    '<div class="header-actions">' +
      '<button class="btn btn-outline btn-sm" data-action="open-palette" title="Cmd/Ctrl+K">🔍 搜索</button>' +
    '</div>' +
  '</div>';
}

function pageIdFromHash() {
  try {
    const candidate = decodeURIComponent(location.hash.replace(/^#/, ''));
    return PAGES[candidate] ? candidate : 'dashboard';
  } catch (error) {
    return 'dashboard';
  }
}

function renderPage(pageId, options = {}) {
  const page = PAGES[pageId];
  if (!page) return;
  currentPage = pageId;
  if (options.syncUrl !== false && location.hash !== '#' + pageId) {
    history.pushState(null, '', '#' + pageId);
  }

  document.querySelectorAll('.menu-item').forEach(m => {
    m.classList.toggle('active', m.dataset.page === pageId);
    if (m.dataset.page === pageId) m.setAttribute('aria-current', 'page');
    else m.removeAttribute('aria-current');
  });

  const main = document.getElementById('mainContent');
  main.innerHTML =
    '<div class="page-enter">' +
      mainHeaderHTML(page, pageId) +
      page.render() +
      '<div class="bottom-spacer"></div>' +
    '</div>';
  main.scrollTop = 0;
  afterPageRender();

  // Close mobile drawer after navigation
  closeDrawer();
}

function rerender() {
  const main = document.getElementById('mainContent');
  const scrollTop = main.scrollTop;
  const page = PAGES[currentPage];
  if (!page) return;
  const enter = main.querySelector('.page-enter');
  if (enter) {
    enter.classList.remove('page-enter'); // avoid replaying animation on data updates
    enter.innerHTML =
      mainHeaderHTML(page, currentPage) +
      page.render() +
      '<div class="bottom-spacer"></div>';
    main.scrollTop = scrollTop;
    afterPageRender();
  } else {
    renderPage(currentPage);
    main.scrollTop = scrollTop;
  }
}

document.querySelectorAll('.menu-item').forEach(m => {
  m.setAttribute('role', 'button');
  m.setAttribute('tabindex', '0');
  m.addEventListener('click', () => renderPage(m.dataset.page));
  m.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); renderPage(m.dataset.page); }
  });
});

window.addEventListener('hashchange', () => renderPage(pageIdFromHash(), { syncUrl: false }));

// --- Mobile drawer ---
function openDrawer() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('show');
}
function closeDrawer() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('show');
}
document.getElementById('hamburger').addEventListener('click', openDrawer);
document.getElementById('drawerBackdrop').addEventListener('click', closeDrawer);

// ========================================================================
// DATA MUTATIONS
// ========================================================================
function addTask(path, text) {
  const arr = getNestedData(path);
  if (!Array.isArray(arr)) return;
  const task = normalizeTask({ id: uid(), text, done: false }, todayKey());
  if (!task) return;
  arr.push(task);
  save();
  rerender();
  showToast('已添加', 'success');
}

function toggleTask(path, id) {
  const arr = getNestedData(path);
  if (!Array.isArray(arr)) return;
  const t = arr.find(x => x.id === id);
  if (!t) return;
  t.done = !t.done;
  t.updatedAt = new Date().toISOString();
  t.completedAt = t.done ? t.updatedAt : '';
  const key = metricTaskKey(t);
  if (key) {
    const mirrorPaths = ['tasks.dashboard', 'tasks.dailyPlan.morning', 'tasks.dailyPlan.afternoon', 'tasks.dailyPlan.evening'];
    mirrorPaths.forEach(mirrorPath => {
      const mirror = getNestedData(mirrorPath);
      if (Array.isArray(mirror)) mirror.forEach(candidate => {
        if (candidate !== t && metricTaskKey(candidate) === key) {
          candidate.done = t.done;
          candidate.updatedAt = t.updatedAt;
          candidate.completedAt = t.completedAt;
        }
      });
    });
  }
  recordWeeklyTrend();
  save();
  rerender();
}

function addInspire(path, title, desc) {
  const arr = getNestedData(path);
  if (!Array.isArray(arr)) return;
  arr.push({ id: uid(), title: title, desc: desc || '' });
  save();
  rerender();
}

function toggleCheckin(cat, id) {
  const arr = DATA.checkins[cat];
  if (!Array.isArray(arr)) return;
  const c = arr.find(x => x.id === id);
  if (!c) return;
  c.done = !c.done;
  if (cat === 'daily') recordCheckinToday();
  save();
  rerender();
}

// Rollover unfinished daily-plan tasks ("结转未完成到明天")
function rolloverPlan() {
  const dp = DATA.tasks.dailyPlan;
  const today = todayKey();
  const tomorrowDate = new Date(); tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = todayKey(tomorrowDate);
  snapshotDailyState(today, 'manual-rollover');
  let moved = 0;
  for (const key of ['morning', 'afternoon', 'evening']) {
    const remaining = dp[key].filter(t => !t.done);
    moved += remaining.length;
    dp[key] = remaining.map(t => normalizeTask({ ...t, id: uid(), done: false, carriedFrom: today, dueDate: tomorrow }, tomorrow));
  }
  save();
  rerender();
  showToast(moved > 0 ? '已将 ' + moved + ' 项未完成任务结转到明天' : '没有未完成任务需要结转', 'success');
}

// Auto-generate weekly review draft from live data (P3)
function genWeeklyDraft() {
  const all = countAllTasks();
  const pct = calcAllTasksPercent();
  const streak = calcStreak();
  const checkinsDone = DATA.checkins.daily.filter(c => c.done).length;
  const ideas = DATA.inspirations.ideas.length;

  DATA.weeklyReview.week = weekNum();
  DATA.weeklyReview.good = '本周完成任务 ' + all.done + '/' + all.total + '（' + pct + '%），连续打卡 ' + streak + ' 天';
  const weak = [];
  if (calcTaskPercent(DATA.tasks.english) < 50) weak.push('英语学习');
  if (calcTaskPercent(DATA.tasks.researchPapers) < 50) weak.push('科研文献');
  if (calcTaskPercent(DATA.tasks.aiLearn) < 50) weak.push('AI 学习');
  DATA.weeklyReview.improve = weak.length ? weak.join('、') + ' 完成率偏低，下周需增加投入' : '各领域进度均衡，继续保持';
  DATA.weeklyReview.focus = '灵感库已积累 ' + ideas + ' 条选题，优先转化 2-3 条为正式内容';
  save();
  rerender();
  showToast('已根据当前数据生成本周小结', 'success');
}

// ========================================================================
// MODAL-BASED ADD (topContent / published / resource / milestone)
// ========================================================================
function showAddModal(title, fields, onSubmit) {
  const fieldsHTML = fields.map((f, i) =>
    '<div class="modal-field"><label>' + escapeHTML(f.label) + '</label>' +
    '<input id="modalField' + i + '" placeholder="' + escapeHTML(f.placeholder || '') + '"></div>'
  ).join('');
  showModal(
    '<div class="modal-title">' + escapeHTML(title) + '</div>' + fieldsHTML +
    '<div class="modal-actions">' +
      '<button class="modal-btn cancel" id="modalCancel">取消</button>' +
      '<button class="modal-btn confirm" id="modalOk">添加</button>' +
    '</div>'
  );
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('modalOk').addEventListener('click', () => {
    const values = fields.map((f, i) => document.getElementById('modalField' + i).value.trim());
    if (!values[0]) {
      document.getElementById('modalField0').style.borderColor = 'var(--danger)';
      return;
    }
    closeModal();
    onSubmit(values);
  });
  const first = document.getElementById('modalField0');
  if (first) first.focus();
}

function showConfirm(title, message, confirmLabel, onConfirm, onCancel) {
  showModal(
    '<div class="modal-title">' + escapeHTML(title) + '</div>' +
    '<p style="font-size:14px;color:var(--text-sub);line-height:1.7;">' + message + '</p>' +
    '<div class="modal-actions">' +
      '<button class="modal-btn cancel" id="modalCancel">取消</button>' +
      '<button class="modal-btn danger" id="modalOk">' + escapeHTML(confirmLabel) + '</button>' +
    '</div>'
  );
  document.getElementById('modalCancel').addEventListener('click', () => {
    closeModal();
    if (typeof onCancel === 'function') onCancel();
  });
  document.getElementById('modalOk').addEventListener('click', () => { closeModal(); onConfirm(); });
}

// Single-field prompt modal. Resolves with the entered string, or null on cancel.
function showPrompt(title, message, value, placeholder) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      closeModal();
      resolve(result);
    };

    showModal(
      '<div class="modal-title">' + escapeHTML(title) + '</div>' +
      (message ? '<p style="font-size:13px;color:var(--text-sub);line-height:1.7;margin-bottom:14px;">' + escapeHTML(message) + '</p>' : '') +
      '<div class="modal-field"><input id="promptInput" value="' + escapeAttribute(value || '') + '" placeholder="' + escapeAttribute(placeholder || '') + '"></div>' +
      '<div class="modal-actions">' +
        '<button class="modal-btn cancel" id="modalCancel">取消</button>' +
        '<button class="modal-btn confirm" id="modalOk">确定</button>' +
      '</div>'
    );

    // Backdrop click / Escape close the overlay directly — treat that as cancel
    const overlay = document.getElementById('modalOverlay');
    const observer = new MutationObserver(() => {
      if (!overlay.classList.contains('show') && !settled) {
        settled = true;
        observer.disconnect();
        resolve(null);
      }
    });
    observer.observe(overlay, { attributes: true, attributeFilter: ['class'] });
    const originalFinish = finish;
    const finishAndStop = (result) => { observer.disconnect(); originalFinish(result); };

    const input = document.getElementById('promptInput');
    document.getElementById('modalCancel').addEventListener('click', () => finishAndStop(null));
    document.getElementById('modalOk').addEventListener('click', () => finishAndStop(input ? input.value : ''));
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); finishAndStop(input.value); }
      });
      requestAnimationFrame(() => { input.focus(); input.select(); });
    }
  });
}

// ========================================================================
// WORKOUT LOG MODAL (complete plan item / standalone log)
// ========================================================================
function openWorkoutModal(planItem) {
  const types = DATA.fitness.types || [];
  let selectedType = planItem ? planItem.typeId : (types[0] && types[0].id);

  const chips = types.map(t =>
    '<button class="chip' + (t.id === selectedType ? ' selected' : '') + '" data-chip="' + t.id + '">' + t.icon + ' ' + escapeHTML(t.name) + '</button>'
  ).join('');

  const title = planItem
    ? '完成打卡 · ' + planItem.day + ' ' + fitnessType(planItem.typeId).name
    : '记录一次训练';

  showModal(
    '<div class="modal-title">' + escapeHTML(title) + '</div>' +
    '<div class="modal-field"><label>健身类型</label><div class="chip-picker" id="chipPicker">' + chips + '</div></div>' +
    '<div class="modal-field"><label>时长（分钟）</label><input id="wlDuration" type="number" min="0" placeholder="如 30"></div>' +
    '<div class="modal-field"><label>消耗（千卡）</label><input id="wlCalories" type="number" min="0" placeholder="如 250"></div>' +
    '<div class="modal-field"><label>备注（可选）</label><input id="wlNote" placeholder="如 晨跑 3km"></div>' +
    '<div class="modal-actions">' +
      '<button class="modal-btn cancel" id="modalCancel">取消</button>' +
      (planItem ? '<button class="modal-btn outline" id="wlSkip">不记数据，直接打卡</button>' : '') +
      '<button class="modal-btn confirm" id="modalOk">' + (planItem ? '记录并完成' : '保存记录') + '</button>' +
    '</div>'
  );

  document.getElementById('chipPicker').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    selectedType = chip.dataset.chip;
    document.querySelectorAll('#chipPicker .chip').forEach(c =>
      c.classList.toggle('selected', c.dataset.chip === selectedType));
  });

  document.getElementById('modalCancel').addEventListener('click', closeModal);

  const doLog = (withData) => {
    if (withData) {
      const dur = parseInt(document.getElementById('wlDuration').value) || 0;
      const cal = parseInt(document.getElementById('wlCalories').value) || 0;
      const note = document.getElementById('wlNote').value.trim();
      DATA.fitness.logs.push({
        id: uid(), date: todayKey(), typeId: selectedType,
        duration: dur, calories: cal, note: note
      });
    }
    if (planItem) planItem.done = true;
    closeModal();
    save();
    rerender();
    showToast(planItem ? '打卡完成，数据已记录 💪' : '训练记录已保存', 'success');
  };

  document.getElementById('modalOk').addEventListener('click', () => doLog(true));
  const skipBtn = document.getElementById('wlSkip');
  if (skipBtn) skipBtn.addEventListener('click', () => doLog(false));

  const durInput = document.getElementById('wlDuration');
  if (durInput) durInput.focus();
}

// ========================================================================
// EXPORT / IMPORT / RESET
// ========================================================================
function exportData(prefix) {
  const blob = new Blob([JSON.stringify(DATA, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (prefix || 'workspace') + '-' + todayKey() + '.json';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 100);
  showToast('已导出数据文件', 'success');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.addEventListener('change', async () => {
    const file = input.files && input.files[0];
    if (!file) return;
    try {
      if (file.size > 20 * 1024 * 1024) throw new Error('文件超过 20 MB 限制');
      const text = await file.text();
      const data = JSON.parse(text);
      DATA = migrateWorkspaceData(data);
      purgeTrash();
      recordCheckinToday();
      applyTheme();
      save();
      renderPage(currentPage);
      showToast('数据导入成功', 'success');
    } catch (err) {
      showToast('导入失败：' + (err && err.message ? err.message : '文件格式错误'), 'error');
    }
  });
  input.click();
}

function resetData() {
  showConfirm('重置数据', '将恢复为初始示例数据。当前数据会先自动导出一份备份到下载目录。', '重置', () => {
    exportData('workspace-before-reset');
    DATA = migrateWorkspaceData(cloneData(DEFAULT_DATA));
    DATA.settings.onboarded = true;
    applyTheme();
    save();
    renderPage(currentPage);
    showToast('已重置为示例数据', 'success');
  });
}

// ========================================================================
// COMMAND PALETTE (Cmd/Ctrl+K)
// ========================================================================
const COMMANDS = [
  { id: 'cmd-theme', icon: '🌙', text: '切换主题', run: () => cycleTheme() },
  { id: 'cmd-export', icon: '📤', text: '导出数据', run: () => exportData('workspace') },
  { id: 'cmd-import', icon: '📥', text: '导入数据', run: () => importData() },
  { id: 'cmd-clear-done', icon: '🧹', text: '清除当前页已完成任务', run: () => clearDoneOnPage() },
  { id: 'cmd-rollover', icon: '⏭️', text: '结转未完成任务到明天', run: () => rolloverPlan() },
  { id: 'cmd-weekly', icon: '✨', text: '自动生成本周小结', run: () => genWeeklyDraft() },
  { id: 'cmd-settings', icon: '⚙️', text: '打开数据管理', run: () => renderPage('settings') },
  { id: 'cmd-onboard', icon: '🎓', text: '查看新手引导', run: () => startOnboarding(true) },
  { id: 'cmd-trash', icon: '🗑️', text: '清空回收站', run: () => emptyTrash() }
];

let paletteItems = [];
let paletteIndex = 0;

function clearDoneOnPage() {
  const map = {
    'dashboard': ['tasks.dashboard'],
    'daily-plan': ['tasks.dailyPlan.morning', 'tasks.dailyPlan.afternoon', 'tasks.dailyPlan.evening'],
    'ai-learn': ['tasks.aiLearn'],
    'english': ['tasks.english'],
    'comic': ['tasks.comicStoryboard'],
    'research': ['tasks.researchPapers'],
    'research-todo': ['learning.research.todos.items']
  };
  const paths = map[currentPage];
  if (!paths) { showToast('当前页面没有任务列表', 'warning'); return; }
  clearDoneTasks(paths);
}

function emptyTrash() {
  if (!DATA.trash.length) { showToast('回收站已经是空的', 'warning'); return; }
  showConfirm('清空回收站', '将永久删除回收站中的 ' + DATA.trash.length + ' 条内容，此操作不可撤销。', '清空', () => {
    DATA.trash = [];
    save();
    rerender();
    showToast('回收站已清空', 'success');
  });
}

function buildPaletteIndex() {
  const items = [];
  // Pages
  for (const pid of PAGE_ORDER) {
    const p = PAGES[pid];
    if (p) items.push({ type: 'page', icon: '📄', text: p.title, meta: '页面', run: () => renderPage(pid) });
  }
  // Tasks
  const taskGroups = [
    ['tasks.dashboard', '首页'],
    ['tasks.dailyPlan.morning', '上午计划'],
    ['tasks.dailyPlan.afternoon', '下午计划'],
    ['tasks.dailyPlan.evening', '晚上计划'],
    ['tasks.aiLearn', 'AI学习'],
    ['tasks.english', '英语'],
    ['tasks.comicStoryboard', '漫剧分镜'],
    ['tasks.researchPapers', '科研文献'],
    ['tasks.researchTodo', '科研待办']
  ];
  for (const [path, label] of taskGroups) {
    const arr = getNestedData(path) || [];
    for (const t of arr) {
      items.push({
        type: 'task', icon: t.done ? '✅' : '⬜', text: t.text, meta: label,
        run: () => { toggleTask(path, t.id); }
      });
    }
  }
  // Inspirations + news
  const inspGroups = [
    ['inspirations.ideas', '灵感'], ['inspirations.trends', '趋势'], ['inspirations.sources', '来源'],
    ['news.tech', '科技'], ['news.creation', '创作'], ['news.hotlist', '热榜']
  ];
  for (const [path, label] of inspGroups) {
    const arr = getNestedData(path) || [];
    for (const i of arr) {
      items.push({
        type: 'inspire', icon: '💡', text: i.title, meta: label,
        run: () => renderPage(path.startsWith('news') ? 'news' : 'inspiration')
      });
    }
  }
  return items;
}

function openPalette() {
  document.getElementById('paletteOverlay').classList.add('show');
  const input = document.getElementById('paletteInput');
  input.value = '';
  renderPaletteList('');
  setTimeout(() => input.focus(), 50);
}

function closePalette() {
  document.getElementById('paletteOverlay').classList.remove('show');
}

function renderPaletteList(query) {
  const q = query.trim();
  const list = document.getElementById('paletteList');

  if (q.startsWith('>')) {
    const cq = q.slice(1).trim().toLowerCase();
    paletteItems = COMMANDS.filter(c => !cq || c.text.toLowerCase().includes(cq))
      .map(c => ({ type: 'cmd', icon: c.icon, text: c.text, meta: '命令', run: c.run }));
  } else {
    const all = buildPaletteIndex();
    paletteItems = q
      ? all.filter(i => i.text.toLowerCase().includes(q.toLowerCase())).slice(0, 30)
      : all.filter(i => i.type === 'page').concat(all.filter(i => i.type !== 'page').slice(0, 12));
  }
  paletteIndex = 0;

  if (!paletteItems.length) {
    list.innerHTML = '<div class="palette-empty">没有匹配的结果</div>';
    return;
  }

  let lastMeta = null;
  list.innerHTML = paletteItems.map((item, idx) => {
    let groupLabel = '';
    if (item.meta !== lastMeta) {
      groupLabel = '<div class="palette-group-label">' + escapeHTML(item.meta) + '</div>';
      lastMeta = item.meta;
    }
    return groupLabel +
      '<div class="palette-item' + (idx === paletteIndex ? ' selected' : '') + '" data-idx="' + idx + '">' +
        '<span class="pi-icon">' + item.icon + '</span>' +
        '<span>' + escapeHTML(item.text) + '</span>' +
        '<span class="pi-meta">' + escapeHTML(item.meta) + '</span>' +
      '</div>';
  }).join('');
}

function runPaletteItem(idx) {
  const item = paletteItems[idx];
  if (!item) return;
  closePalette();
  item.run();
}

document.getElementById('paletteInput').addEventListener('input', (e) => renderPaletteList(e.target.value));
document.getElementById('paletteInput').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); paletteIndex = Math.min(paletteIndex + 1, paletteItems.length - 1); renderPaletteList(document.getElementById('paletteInput').value); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); paletteIndex = Math.max(paletteIndex - 1, 0); renderPaletteList(document.getElementById('paletteInput').value); }
  else if (e.key === 'Enter') { e.preventDefault(); runPaletteItem(paletteIndex); }
  else if (e.key === 'Escape') { closePalette(); }
});
document.getElementById('paletteList').addEventListener('click', (e) => {
  const item = e.target.closest('.palette-item');
  if (item) runPaletteItem(parseInt(item.dataset.idx, 10));
});
document.getElementById('paletteOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'paletteOverlay') closePalette();
});

// ========================================================================
// KEYBOARD SHORTCUTS
// ========================================================================
function showShortcutsHelp() {
  showModal(
    '<div class="modal-title">⌨️ 快捷键</div>' +
    '<div style="font-size:13px;color:var(--text-sub);line-height:2;">' +
    '<div><code class="inline-code">Cmd/Ctrl + K</code> 全局搜索 / 命令面板</div>' +
    '<div><code class="inline-code">N</code> 聚焦当前页新建任务输入框</div>' +
    '<div><code class="inline-code">1 ~ 9</code> 快速切换页面</div>' +
    '<div><code class="inline-code">Enter</code> 在输入框中快速添加</div>' +
    '<div><code class="inline-code">Esc</code> 关闭弹窗 / 面板</div>' +
    '<div><code class="inline-code">?</code> 显示本帮助</div>' +
    '</div>' +
    '<div class="modal-actions"><button class="modal-btn confirm" id="modalOk">知道了</button></div>'
  );
  document.getElementById('modalOk').addEventListener('click', closeModal);
}

document.getElementById('kbdHelpBtn').addEventListener('click', showShortcutsHelp);

document.addEventListener('keydown', (e) => {
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay.classList.contains('show') && e.key === 'Tab') {
    const focusable = [...modalOverlay.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')]
      .filter(el => !el.disabled && el.offsetParent !== null);
    if (focusable.length) {
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  const mod = e.metaKey || e.ctrlKey;

  // Cmd/Ctrl+K — palette
  if (mod && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    const overlay = document.getElementById('paletteOverlay');
    if (overlay.classList.contains('show')) closePalette(); else openPalette();
    return;
  }

  // Esc — close topmost layer
  if (e.key === 'Escape') {
    if (knowledgeGraphFullscreen) {
      setKnowledgeGraphFullscreen(false);
      return;
    }
    if (document.getElementById('noteReader').classList.contains('show')) {
      if (document.fullscreenElement) return;
      closeZoteroNoteReader();
      return;
    }
    if (document.getElementById('paletteOverlay').classList.contains('show')) { closePalette(); return; }
    if (document.getElementById('modalOverlay').classList.contains('show')) { closeModal(); return; }
    closeDrawer();
    return;
  }

  // Below: skip when typing or modifier held
  if (mod || e.altKey || isTypingTarget(e.target)) return;

  // ? — help
  if (e.key === '?') { e.preventDefault(); showShortcutsHelp(); return; }

  // N — focus new-task input on current page
  if (e.key.toLowerCase() === 'n') {
    const input = document.querySelector('#mainContent .add-task-input');
    if (input) { e.preventDefault(); input.focus(); }
    return;
  }

  // 1-9 — switch pages
  if (/^[1-9]$/.test(e.key)) {
    const idx = parseInt(e.key, 10) - 1;
    if (idx < PAGE_ORDER.length) renderPage(PAGE_ORDER[idx]);
    return;
  }
});

// ========================================================================
// ONBOARDING (3-step, first run)
// ========================================================================
const ONBOARD_STEPS = [
  {
    emoji: '👋', title: '欢迎来到 AI 工作台',
    desc: '这里是你的个人创作管理中心：任务、打卡、灵感、复盘、学习进度全部集中在一处，所有数据都由你自己掌控。'
  },
  {
    emoji: '☁️', title: '数据存在哪里？',
    desc: '推荐连接当前目录下的 <code class="inline-code">data/</code> 文件夹——数据会保存为 <code class="inline-code">workspace.json</code> 并随 iCloud 在你的设备间自动同步。<br><br>不连接也可以使用，数据会保存在浏览器本地。<br><br>删除的内容会先进入<strong>回收站</strong>（保留 30 天），5 秒内可一键撤销。'
  },
  {
    emoji: '⌨️', title: '高效操作技巧',
    desc: '按 <code class="inline-code">Cmd/Ctrl + K</code> 随时唤起全局搜索，输入 <code class="inline-code">&gt;</code> 执行命令。<br>按 <code class="inline-code">N</code> 快速新建任务，按 <code class="inline-code">1-9</code> 切换页面。<br>完成比例会根据任务勾选<strong>自动计算</strong>，无需手动调整。'
  }
];
let onboardStep = 0;

function startOnboarding(force) {
  if (!force && DATA.settings.onboarded) return;
  onboardStep = 0;
  renderOnboardStep();
  document.getElementById('onboardOverlay').classList.add('show');
}

function renderOnboardStep() {
  const s = ONBOARD_STEPS[onboardStep];
  const isLast = onboardStep === ONBOARD_STEPS.length - 1;
  document.getElementById('onboardContent').innerHTML =
    '<div class="ob-emoji">' + s.emoji + '</div>' +
    '<div class="ob-title">' + s.title + '</div>' +
    '<div class="ob-desc">' + s.desc + '</div>' +
    '<div class="ob-dots">' + ONBOARD_STEPS.map((_, i) =>
      '<div class="ob-dot' + (i === onboardStep ? ' active' : '') + '"></div>').join('') + '</div>' +
    '<div class="ob-actions">' +
      (onboardStep > 0 ? '<button class="modal-btn cancel" id="obPrev">上一步</button>' : '') +
      '<button class="modal-btn outline" id="obSkip">跳过</button>' +
      '<button class="modal-btn confirm" id="obNext">' + (isLast ? '开始使用' : '下一步') + '</button>' +
    '</div>';

  document.getElementById('obNext').addEventListener('click', () => {
    if (isLast) finishOnboarding();
    else { onboardStep++; renderOnboardStep(); }
  });
  document.getElementById('obSkip').addEventListener('click', finishOnboarding);
  const prev = document.getElementById('obPrev');
  if (prev) prev.addEventListener('click', () => { onboardStep--; renderOnboardStep(); });
}

function finishOnboarding() {
  document.getElementById('onboardOverlay').classList.remove('show');
  if (!DATA.settings.onboarded) {
    DATA.settings.onboarded = true;
    save();
  }
  if (storage.mode === 'local' && storage.isFSAASupported) {
    setTimeout(() => showToast('提示：到「数据管理」连接 data 文件夹可启用 iCloud 同步', 'warning', { duration: 4000 }), 600);
  }
}

// ========================================================================
// LITERATURE VISUAL INTERACTIONS
// ========================================================================
let readingLogTooltip = null;

function getReadingLogTooltip() {
  if (readingLogTooltip && readingLogTooltip.isConnected) return readingLogTooltip;
  readingLogTooltip = document.createElement('div');
  readingLogTooltip.className = 'reading-log-tooltip';
  readingLogTooltip.setAttribute('role', 'tooltip');
  readingLogTooltip.setAttribute('aria-hidden', 'true');
  document.body.appendChild(readingLogTooltip);
  return readingLogTooltip;
}

function positionReadingLogTooltip(anchor, clientX, clientY) {
  const tooltip = getReadingLogTooltip();
  const gap = 10;
  const rect = anchor.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const cursorPositioned = Number.isFinite(clientX) && Number.isFinite(clientY);
  let left = cursorPositioned ? clientX + 12 : rect.left + rect.width / 2 - tooltipRect.width / 2;
  let top = cursorPositioned ? clientY + 14 : rect.top - tooltipRect.height - gap;
  left = Math.max(12, Math.min(left, window.innerWidth - tooltipRect.width - 12));
  if (top + tooltipRect.height > window.innerHeight - 12) top = rect.top - tooltipRect.height - gap;
  if (top < 12) top = rect.bottom + gap;
  tooltip.style.left = Math.round(left) + 'px';
  tooltip.style.top = Math.round(top) + 'px';
}

function showReadingLogTooltip(cell, clientX, clientY) {
  if (!cell || !cell.classList.contains('has-reading-log')) return;
  let titles = [];
  try { titles = JSON.parse(cell.dataset.readingTitles || '[]'); } catch (error) { titles = []; }
  if (!titles.length) return;
  const tooltip = getReadingLogTooltip();
  tooltip.innerHTML = '<div><span class="reading-log-tooltip-date">' + escapeHTML(cell.dataset.readingDate || '') + '</span>' +
    '<span class="reading-log-tooltip-count">' + titles.length + ' 篇</span></div>' +
    '<div class="reading-log-tooltip-list">' + titles.map(title => '<div class="reading-log-tooltip-item">' + escapeHTML(title) + '</div>').join('') + '</div>';
  tooltip.setAttribute('aria-hidden', 'false');
  tooltip.classList.add('show');
  positionReadingLogTooltip(cell, clientX, clientY);
}

function hideReadingLogTooltip() {
  const tooltip = getReadingLogTooltip();
  tooltip.classList.remove('show');
  tooltip.setAttribute('aria-hidden', 'true');
}

function setLiteraturePieActive(interactive) {
  const wrap = interactive ? interactive.closest('.literature-pie-wrap') : null;
  if (!wrap) return;
  const index = interactive.dataset.pieIndex;
  wrap.classList.toggle('has-active', index !== undefined);
  wrap.querySelectorAll('[data-pie-index]').forEach(item => {
    item.classList.toggle('is-active', item.dataset.pieIndex === index);
  });
}

function clearLiteraturePieActive(wrap) {
  if (!wrap) return;
  wrap.classList.remove('has-active');
  wrap.querySelectorAll('[data-pie-index].is-active').forEach(item => item.classList.remove('is-active'));
}

document.addEventListener('pointerover', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell) showReadingLogTooltip(heatmapCell, e.clientX, e.clientY);
  const pieItem = e.target.closest && e.target.closest('.literature-pie-wrap [data-pie-index]');
  if (pieItem) setLiteraturePieActive(pieItem);
});

document.addEventListener('pointermove', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell && readingLogTooltip && readingLogTooltip.classList.contains('show')) {
    positionReadingLogTooltip(heatmapCell, e.clientX, e.clientY);
  }
});

document.addEventListener('pointerout', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell && (!e.relatedTarget || !heatmapCell.contains(e.relatedTarget))) hideReadingLogTooltip();
  const pieWrap = e.target.closest && e.target.closest('.literature-pie-wrap');
  if (pieWrap) {
    const nextItem = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest('.literature-pie-wrap [data-pie-index]') : null;
    if (nextItem && nextItem.closest('.literature-pie-wrap') === pieWrap) setLiteraturePieActive(nextItem);
    else clearLiteraturePieActive(pieWrap);
  }
});

document.addEventListener('focusin', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell) showReadingLogTooltip(heatmapCell);
  const pieItem = e.target.closest && e.target.closest('.literature-pie-wrap [data-pie-index]');
  if (pieItem) setLiteraturePieActive(pieItem);
});

document.addEventListener('focusout', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell) hideReadingLogTooltip();
  const pieWrap = e.target.closest && e.target.closest('.literature-pie-wrap');
  if (pieWrap && (!e.relatedTarget || !pieWrap.contains(e.relatedTarget))) clearLiteraturePieActive(pieWrap);
});

// ========================================================================
// GLOBAL CLICK DELEGATION
// ========================================================================
document.addEventListener('click', (e) => {
  const t = e.target;

  if (t.closest('[data-action="research-idea-focus-open"]')) {
    researchInspirationState.focusMode = true;
    document.body.classList.add('research-focus-active');
    rerender();
    return;
  }
  if (t.closest('[data-action="research-idea-focus-close"]')) {
    researchInspirationState.focusMode = false;
    document.body.classList.remove('research-focus-active');
    rerender();
    return;
  }

  // --- Research todo workflow ---
  const todoScope = t.closest('[data-research-todo-scope]');
  if (todoScope) {
    researchTodoState.scope = todoScope.dataset.researchTodoScope || 'active';
    rerender();
    return;
  }

  const todoToggle = t.closest('[data-research-todo-toggle]');
  if (todoToggle) {
    const task = researchTodoStore().find(item => item.id === todoToggle.dataset.researchTodoToggle);
    if (task) {
      const now = new Date().toISOString();
      if (task.status === 'done') {
        task.status = 'todo';
        task.completedAt = '';
      } else {
        task.status = 'done';
        task.completedAt = now;
      }
      task.updatedAt = now;
      save();
      rerender();
    }
    return;
  }

  const todoEdit = t.closest('[data-research-todo-edit]');
  if (todoEdit) {
    const task = researchTodoStore().find(item => item.id === todoEdit.dataset.researchTodoEdit);
    if (task) openResearchTodoModal(task);
    return;
  }

  // --- Task checkbox toggle ---
  const checkbox = t.closest('.task-checkbox');
  if (checkbox && checkbox.dataset.path) {
    toggleTask(checkbox.dataset.path, checkbox.dataset.id);
    return;
  }

  // --- Linked workspace actions: dashboard and daily-plan mirrors ---
  const linkedFitnessMark = t.closest('.workspace-sync-mark[data-plan-toggle]');
  if (linkedFitnessMark) {
    const item = (DATA.fitness.plan || []).find(plan => plan.id === linkedFitnessMark.dataset.planToggle);
    if (item) {
      if (item.done) {
        item.done = false;
        save();
        rerender();
      } else {
        openWorkoutModal(item);
      }
    }
    return;
  }

  const linkedTaskMark = t.closest('.workspace-sync-mark[data-path][data-id]');
  if (linkedTaskMark) {
    toggleTask(linkedTaskMark.dataset.path, linkedTaskMark.dataset.id);
    return;
  }

  // --- Task delete (soft) ---
  const taskDel = t.closest('.task-delete');
  if (taskDel && taskDel.dataset.path) {
    softDelete(taskDel.dataset.path, taskDel.dataset.id);
    return;
  }

  // --- Inspire/news delete (soft) ---
  const inspDel = t.closest('.inspire-delete');
  if (inspDel) {
    if (inspDel.dataset.readingLogDel) {
      softDelete('learning.research.readingLogs', inspDel.dataset.readingLogDel);
      return;
    }
    if (inspDel.dataset.msDel) {
      softDelete('learning.research.milestones', inspDel.dataset.msDel);
      return;
    }
    if (inspDel.dataset.path && inspDel.dataset.id) {
      softDelete(inspDel.dataset.path, inspDel.dataset.id);
      return;
    }
  }

  // --- Reading-log tag filter ---
  const literatureViewBtn = t.closest('[data-literature-view]');
  if (literatureViewBtn) {
    literatureView = ['overview', 'library', 'graph'].includes(literatureViewBtn.dataset.literatureView)
      ? literatureViewBtn.dataset.literatureView
      : 'overview';
    rerender();
    return;
  }

  const readingTag = t.closest('[data-reading-tag]');
  if (readingTag) {
    const tag = readingTag.dataset.readingTag || '';
    activeReadingLogTag = activeReadingLogTag === tag ? '' : tag;
    rerender();
    return;
  }

  // --- Research idea: sidebar scope filter ---
  const ideaScope = t.closest('[data-research-idea-scope]');
  if (ideaScope && !ideaScope.dataset.researchIdeaCategory && !ideaScope.dataset.researchIdeaTag) {
    const scope = ideaScope.dataset.researchIdeaScope;
    if (scope === 'archive') {
      researchInspirationState.scope = 'archive';
      researchInspirationState.category = '';
      researchInspirationState.tag = '';
      researchInspirationState.selectedId = '';
    } else {
      researchInspirationState.scope = scope;
    }
    rerender();
    return;
  }

  // --- Research idea: sidebar category filter ---
  const ideaCategory = t.closest('[data-research-idea-category]');
  if (ideaCategory) {
    const category = ideaCategory.dataset.researchIdeaCategory || '';
    researchInspirationState.category = researchInspirationState.category === category ? '' : category;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }

  // --- Research idea: inline tag removal ---
  const ideaTagRemove = t.closest('[data-research-idea-tag-remove-inline]');
  if (ideaTagRemove) {
    const item = researchIdeaStore().find(x => x.id === researchInspirationState.selectedId);
    const tag = ideaTagRemove.dataset.researchIdeaTagRemoveInline || '';
    if (item && tag) {
      item.tags = (item.tags || []).filter(value => value !== tag);
      item.updatedAt = new Date().toISOString();
      if (researchInspirationState.tag === tag) researchInspirationState.tag = '';
      save();
      rerender();
      showToast('标签已删除', 'success');
    }
    return;
  }

  // --- Research idea: sidebar tag filter ---
  const ideaTagBtn = t.closest('[data-research-idea-tag]');
  if (ideaTagBtn) {
    const tag = ideaTagBtn.dataset.researchIdeaTag || '';
    researchInspirationState.tag = researchInspirationState.tag === tag ? '' : tag;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }

  // --- Research idea: status / source filters ---
  const ideaStatusBtn = t.closest('[data-research-idea-status]');
  if (ideaStatusBtn) {
    const status = ideaStatusBtn.dataset.researchIdeaStatus || '';
    researchInspirationState.status = researchInspirationState.status === status ? '' : status;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }

  const ideaSourceBtn = t.closest('[data-research-idea-source]');
  if (ideaSourceBtn) {
    const source = ideaSourceBtn.dataset.researchIdeaSource || '';
    researchInspirationState.source = researchInspirationState.source === source ? '' : source;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }

  // --- Research idea: Markdown / LaTeX edit-preview switch ---
  const experimentImageTrigger = t.closest('[data-research-experiment-image-trigger]');
  if (experimentImageTrigger) {
    const wrapper = experimentImageTrigger.closest('[data-research-stage-field-wrap]');
    const input = wrapper && wrapper.querySelector('[data-research-experiment-image-input]');
    if (input) input.click();
    return;
  }

  const stageModeBtn = t.closest('[data-research-stage-mode]');
  if (stageModeBtn) {
    const wrapper = stageModeBtn.closest('[data-research-stage-field-wrap]');
    if (!wrapper) return;
    const mode = stageModeBtn.dataset.researchStageMode;
    const textarea = wrapper.querySelector('textarea');
    const preview = wrapper.querySelector('[data-research-stage-preview]');
    wrapper.querySelectorAll('[data-research-stage-mode]').forEach(button => button.classList.toggle('is-active', button.dataset.researchStageMode === mode));
    if (mode === 'preview') {
      textarea.hidden = true;
      preview.hidden = false;
      renderResearchStagePreview(wrapper);
    } else {
      preview.hidden = true;
      textarea.hidden = false;
      autoResizeResearchTextarea(textarea);
      textarea.focus();
    }
    return;
  }

  // --- Research experiment: switch record ---
  const experimentSelect = t.closest('[data-research-experiment-select]');
  if (experimentSelect) {
    researchExperimentState.experimentId = experimentSelect.dataset.researchExperimentSelect || '';
    rerender();
    return;
  }

  // --- Research paper: selection and progress ---
  const paperSelect = t.closest('[data-research-paper-select]');
  if (paperSelect) {
    researchPaperState.paperId = paperSelect.dataset.researchPaperSelect || '';
    rerender();
    return;
  }

  const paperSection = t.closest('[data-research-paper-section]');
  if (paperSection) {
    const paper = researchPaperStore().find(item => item.id === researchPaperState.paperId);
    const key = paperSection.dataset.researchPaperSection;
    if (paper && RESEARCH_PAPER_SECTIONS.some(section => section[0] === key)) {
      normalizeResearchPaper(paper);
      paper.sections[key] = !paper.sections[key];
      const progress = researchPaperProgress(paper);
      if (progress === 100 && !paper.submissionStage) paper.submissionStage = '待投稿';
      if (progress < 100 && paper.submissionStage === '待投稿') paper.submissionStage = '';
      paper.updatedAt = new Date().toISOString();
      save();
      rerender();
      showToast(progress === 100 ? '论文已完成，已自动进入待投稿' : '论文进度已更新', 'success');
    }
    return;
  }

  const paperSubmission = t.closest('[data-research-paper-submission]');
  if (paperSubmission) {
    const paper = researchPaperStore().find(item => item.id === researchPaperState.paperId);
    const stage = paperSubmission.dataset.researchPaperSubmission;
    if (paper && researchPaperProgress(paper) === 100 && RESEARCH_SUBMISSION_STAGES.includes(stage)) {
      paper.submissionStage = stage;
      if (stage === '已投稿' && !paper.submittedAt) paper.submittedAt = new Date().toISOString().slice(0, 10);
      paper.updatedAt = new Date().toISOString();
      save();
      rerender();
      showToast('投稿进度已更新为“' + stage + '”', 'success');
    }
    return;
  }

  // --- Research idea: overview / journey view switch ---
  const ideaViewBtn = t.closest('[data-research-idea-view]');
  if (ideaViewBtn) {
    researchInspirationState.view = ideaViewBtn.dataset.researchIdeaView === 'journey' ? 'journey' : 'overview';
    rerender();
    return;
  }

  const ideaOpenBtn = t.closest('[data-research-idea-open]');
  if (ideaOpenBtn) {
    const item = researchIdeaStore().find(x => x.id === ideaOpenBtn.dataset.researchIdeaOpen);
    if (item) {
      researchInspirationState.selectedId = item.id;
      researchInspirationState.stage = researchIdeaProgress(item).current.key;
      researchInspirationState.view = 'journey';
      rerender();
    }
    return;
  }

  const ideaOverviewFavorite = t.closest('[data-research-idea-overview-favorite]');
  if (ideaOverviewFavorite) {
    const item = researchIdeaStore().find(x => x.id === ideaOverviewFavorite.dataset.researchIdeaOverviewFavorite);
    if (item) {
      item.favorite = !item.favorite;
      item.updatedAt = new Date().toISOString();
      save();
      rerender();
      showToast(item.favorite ? '已收藏' : '已取消收藏', 'success');
    }
    return;
  }

  const ideaOverviewDelete = t.closest('[data-research-idea-overview-delete]');
  if (ideaOverviewDelete) {
    const item = researchIdeaStore().find(x => x.id === ideaOverviewDelete.dataset.researchIdeaOverviewDelete);
    if (item) {
      showConfirm('将灵感移入回收站？', '「' + escapeHTML(item.title || '未命名灵感') + '」将在回收站保留 ' + TRASH_KEEP_DAYS + ' 天，期间可以恢复。', '移入回收站', () => {
        if (researchInspirationState.selectedId === item.id) researchInspirationState.selectedId = '';
        softDelete('learning.research.inspirations.items', item.id);
      });
    }
    return;
  }

  // --- Research idea: Idea-to-Paper stage navigation ---
  const ideaStageBtn = t.closest('[data-research-idea-stage]');
  if (ideaStageBtn) {
    researchInspirationState.stage = ideaStageBtn.dataset.researchIdeaStage || 'idea';
    rerender();
    return;
  }

  const ideaStageNav = t.closest('[data-research-idea-stage-nav]');
  if (ideaStageNav) {
    const currentIndex = Math.max(0, RESEARCH_IDEA_STAGES.findIndex(stage => stage.key === researchInspirationState.stage));
    const delta = ideaStageNav.dataset.researchIdeaStageNav === 'prev' ? -1 : 1;
    const nextStage = RESEARCH_IDEA_STAGES[Math.max(0, Math.min(RESEARCH_IDEA_STAGES.length - 1, currentIndex + delta))];
    if (nextStage) researchInspirationState.stage = nextStage.key;
    rerender();
    return;
  }

  // --- Research idea: select card ---
  const ideaSelect = t.closest('[data-research-idea-select]');
  if (ideaSelect) {
    researchInspirationState.selectedId = ideaSelect.dataset.researchIdeaSelect;
    const selectedIdea = researchIdeaStore().find(item => item.id === researchInspirationState.selectedId);
    if (selectedIdea) researchInspirationState.stage = researchIdeaProgress(selectedIdea).current.key;
    rerender();
    return;
  }

  // --- Add task button ---
  if (t.classList.contains('add-btn') && t.dataset.path) {
    const path = t.dataset.path;
    const input = document.querySelector('.add-task-input[data-path="' + path + '"]');
    if (input && input.value.trim()) {
      addTask(path, input.value.trim());
      setTimeout(() => {
        const ni = document.querySelector('.add-task-input[data-path="' + path + '"]');
        if (ni) ni.focus();
      }, 50);
    } else if (input) {
      input.classList.add('input-error');
      setTimeout(() => input.classList.remove('input-error'), 500);
    }
    return;
  }

  // --- Add inspire button ---
  if (t.classList.contains('add-btn') && t.dataset.cat) {
    const cat = t.dataset.cat;
    const form = t.closest('.inspire-add-form');
    const titleInput = form ? form.querySelector('[data-field="title"]') : null;
    const descInput = form ? form.querySelector('[data-field="desc"]') : null;
    if (titleInput && titleInput.value.trim()) {
      addInspire(cat, titleInput.value.trim(), descInput ? descInput.value.trim() : '');
      showToast('已添加', 'success');
      setTimeout(() => {
        const ni = document.querySelector('.inspire-add-form [data-cat="' + cat + '"][data-field="title"]');
        if (ni) ni.focus();
      }, 50);
    } else if (titleInput) {
      titleInput.classList.add('input-error');
      setTimeout(() => titleInput.classList.remove('input-error'), 500);
    }
    return;
  }

  // --- Checkin toggle ---
  const checkinRow = t.closest('.checkin-row[data-cat]');
  if (checkinRow && checkinRow.dataset.cat && checkinRow.dataset.id) {
    toggleCheckin(checkinRow.dataset.cat, checkinRow.dataset.id);
    return;
  }

  // --- Milestone cycle ---
  const msRow = t.closest('.checkin-row[data-ms]');
  if (msRow) {
    const ms = DATA.learning.research.milestones.find(m => m.id === msRow.dataset.ms);
    if (ms) {
      ms.status = MS_CYCLE[ms.status] || 'pending';
      save();
      rerender();
    }
    return;
  }

  // --- Fitness plan row: open workout log modal (or undo) ---
  const planRow = t.closest('.fit-plan-row[data-plan-toggle]');
  if (planRow) {
    const item = (DATA.fitness.plan || []).find(p => p.id === planRow.dataset.planToggle);
    if (item) {
      if (item.done) {
        item.done = false;
        save();
        rerender();
      } else {
        openWorkoutModal(item);
      }
    }
    return;
  }

  // --- Clear done per-list ---
  const clearBtn = t.closest('.clear-done-btn[data-clear-path]');
  if (clearBtn) {
    clearDoneTasks([clearBtn.dataset.clearPath]);
    return;
  }

  // --- Bar track click (+10, manual bars only) ---
  const track = t.closest('.bar-track[data-cat]');
  if (track && track.dataset.cat === 'review.interaction') {
    DATA.review.interactionRate = Math.min(100, DATA.review.interactionRate + 10);
    save();
    rerender();
    return;
  }

  // --- Stat box edit (click) ---
  const statNum = t.closest('.stat-num[data-stat]');
  if (statNum && !statNum.querySelector('input')) {
    const path = statNum.dataset.stat;
    const oldVal = statNum.textContent;
    const input = document.createElement('input');
    input.className = 'stat-num-edit';
    input.value = oldVal;
    statNum.textContent = '';
    statNum.appendChild(input);
    input.focus();
    input.select();
    const commit = () => {
      const v = input.value.trim();
      if (v) { setNestedData(path, v); save(); }
      rerender();
    };
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') { ev.preventDefault(); input.blur(); }
      if (ev.key === 'Escape') { input.removeEventListener('blur', commit); rerender(); }
    });
    return;
  }

  // --- Zotero collection, search, and item selection ---
  const zoteroItem = t.closest('[data-zotero-item]');
  if (zoteroItem) {
    loadZoteroItem(zoteroItem.dataset.zoteroItem);
    return;
  }

  // --- Card + buttons ---
  const cardBtn = t.closest('.card-btn[data-action]');
  if (cardBtn) {
    handleAction(cardBtn.dataset.action);
    return;
  }

  // --- Settings / other action buttons ---
  const actionBtn = t.closest('[data-action]');
  if (actionBtn) {
    handleAction(actionBtn.dataset.action);
    return;
  }

  // --- Theme segmented buttons ---
  const themeBtn = t.closest('.theme-seg-btn[data-theme]');
  if (themeBtn) {
    setTheme(themeBtn.dataset.theme);
    return;
  }

  // --- Trash restore / delete-forever ---
  if (t.dataset.trashRestore) {
    restoreTrashEntry(t.dataset.trashRestore);
    return;
  }
  if (t.dataset.trashDel) {
    const ti = DATA.trash.findIndex(x => x.tid === t.dataset.trashDel);
    if (ti !== -1) {
      DATA.trash.splice(ti, 1);
      save();
      rerender();
      showToast('已彻底删除', 'success');
    }
    return;
  }
});

// ========================================================================
// ACTION DISPATCH
// ========================================================================
function handleAction(action) {
  switch (action) {
    case 'research-experiment-go-ideas':
      researchInspirationState.view = 'overview';
      renderPage('research-inspiration');
      break;
    case 'open-palette': openPalette(); break;
    case 'weather-city': promptWeatherCity(); break;
    case 'weather-locate': locateWeather(); break;
    case 'weather-refresh': fetchWeather({ force: true }); break;
    case 'zotero-connect':
      refreshZoteroLibrary();
      break;
    case 'zotero-load-more':
      loadMoreZoteroItems();
      break;
    case 'zotero-read-note':
      openZoteroNoteReader();
      break;
    case 'zotero-search': {
      const collection = document.getElementById('zoteroCollection');
      const query = document.getElementById('zoteroQuery');
      zoteroState.selectedCollection = collection ? collection.value : '';
      zoteroState.query = query ? query.value.trim() : '';
      loadZoteroItems();
      break;
    }
    case 'connect-api':
      showConfirm('连接 SQLite 数据库', '连接后将读取 SQLite 中的工作区快照。若数据库已有数据，它会替换当前浏览器本地回退数据；若数据库为空，则会初始化为当前数据。', '连接并加载', async () => {
        try {
          const result = await storage.connectApi();
          if (result && result.data) {
            DATA = mergeDefaults(result.data, DEFAULT_DATA);
            const purged = purgeTrash();
            applyTheme();
            if (purged) save(); else setSaveState('saved');
          }
          updateSyncIndicator();
          renderPage(currentPage);
          showToast(result && result.loadedExisting ? '已连接 SQLite，并加载数据库数据' : '已连接 SQLite，当前数据已写入数据库', 'success');
        } catch (err) {
          updateSyncIndicator();
          renderPage(currentPage);
          showToast(err && err.message ? err.message : '连接 SQLite 失败', 'error');
        }
      });
      break;
    case 'connect':
      {
        const previousMode = storage.mode;
        storage.connect().then((result) => {
          const applyFolderData = () => {
            let purged = 0;
            if (result && result.data) {
              DATA = mergeDefaults(result.data, DEFAULT_DATA);
              purged = purgeTrash();
              applyTheme();
            }
            if (purged) save(); else setSaveState('saved');
            renderPage(currentPage);
            showToast(result && result.loadedExisting ? '已切换到指定文件夹，并加载已有数据' : '已切换到指定文件夹，当前数据已写入 workspace.json', 'success');
          };

          // Never silently replace an active SQLite workspace with an
          // existing folder snapshot. The user can cancel and remain on API.
          if (previousMode === 'api' && result && result.loadedExisting) {
            showConfirm('文件夹已有数据', '所选文件夹中的 workspace.json 将替换当前页面中的 SQLite 工作区数据。继续前请确认该文件夹是你要使用的版本。', '加载文件夹数据', () => {
              applyFolderData();
            }, () => {
              storage.restoreApiMode();
              updateSyncIndicator();
              renderPage(currentPage);
              showToast('已取消切换，继续使用 SQLite', '');
            });
            return;
          }
          applyFolderData();
        }).catch((err) => {
          if (err && err.name !== 'AbortError') showToast(err.message || '连接失败', 'error');
        });
      }
      break;
    case 'use-api':
      showConfirm('切换到 SQLite', '当前文件夹中的 workspace.json 将覆盖 SQLite 中的工作区数据。建议先确认文件夹数据完整，再继续。', '覆盖并切换', async () => {
        try {
          const result = await storage.switchToApi();
          if (result && result.data) {
            DATA = mergeDefaults(result.data, DEFAULT_DATA);
            purgeTrash();
            applyTheme();
          }
          setSaveState('saved');
          renderPage(currentPage);
          showToast('已切换到 SQLite，文件夹数据已写入数据库', 'success');
        } catch (err) {
          storage.mode = 'api';
          updateSyncIndicator();
          renderPage(currentPage);
          showToast(err && err.message ? err.message : '切换到 SQLite 失败', 'error');
        }
      });
      break;
    case 'reconnect':
      storage.requestPermission().then((ok) => {
        updateSyncIndicator();
        renderPage(currentPage);
        showToast(ok ? '授权成功，同步已恢复' : '未获得授权', ok ? 'success' : 'warning');
      });
      break;
    case 'disconnect':
      handleAction(storage._useWorkspaceApi ? 'use-api' : 'disconnect-local');
      break;
    case 'disconnect-local':
      showConfirm('断开数据文件夹', '断开后将保留当前页面数据，并切换为浏览器本地存储；文件夹中的 workspace.json 不会被删除。', '断开并保留数据', async () => {
        await storage.disconnect();
        const result = await storage.write(DATA, { force: true });
        setSaveState(result && result.ok ? 'saved' : 'error');
        renderPage(currentPage);
        showToast(result && result.ok ? '已断开并保留当前数据' : '已断开，但本地保存失败', result && result.ok ? 'warning' : 'error');
      });
      break;
    case 'export': exportData('workspace'); break;
    case 'import': importData(); break;
    case 'backup-db':
      workspaceApiFetch(WORKSPACE_API_BACKUP_URL, { method: 'POST', headers: { 'Accept': 'application/json' } })
        .then(async (response) => {
          const body = await response.json().catch(() => ({}));
          if (!response.ok) throw new Error(body && body.error ? body.error.message : '创建 SQLite 备份失败');
          showToast('SQLite 备份已创建：' + ((body.data && body.data.filename) || 'workspace.db'), 'success');
        })
        .catch((err) => showToast(err && err.message ? err.message : '创建 SQLite 备份失败', 'error'));
      break;
    case 'reset': resetData(); break;
    case 'empty-trash': emptyTrash(); break;
    case 'show-onboarding': startOnboarding(true); break;
    case 'rollover-plan': rolloverPlan(); break;
    case 'gen-weekly-draft': genWeeklyDraft(); break;
    case 'add-plan-item': {
      const dayEl = document.getElementById('planDay');
      const typeEl = document.getElementById('planType');
      const targetEl = document.getElementById('planTarget');
      if (!dayEl || !typeEl) break;
      DATA.fitness.plan.push({
        id: uid(),
        day: dayEl.value,
        typeId: typeEl.value,
        target: targetEl ? targetEl.value.trim() : '',
        done: false
      });
      save();
      rerender();
      showToast('已添加到本周任务', 'success');
      break;
    }
    case 'add-reading-log':
      openReadingLogModal();
      break;
    case 'research-todo-quick-add':
      quickAddResearchTodo();
      break;
    case 'research-idea-new': {
      researchIdeaModalState.tags = [];
      const quickTitle = (document.getElementById('researchIdeaQuickTitle') || {}).value || '';
      openResearchIdeaModal('create', quickTitle.trim() ? { title: quickTitle.trim(), tags: [], status: '待验证' } : null);
      break;
    }
    case 'research-experiment-new': {
      const idea = researchIdeaStore().find(item => item.id === researchExperimentState.ideaId && !item.archived);
      if (!idea) {
        showToast('请先选择一条可关联的 Idea', 'warning');
        break;
      }
      const related = researchExperimentStore().filter(item => item.ideaId === idea.id);
      const now = new Date().toISOString();
      const record = {
        id: uid(),
        ideaId: idea.id,
        title: '实验 ' + (related.length + 1),
        motivation: '',
        settings: '',
        results: '',
        analysis: '',
        status: '计划中',
        createdAt: now,
        updatedAt: now
      };
      researchExperimentStore().push(record);
      researchExperimentState.experimentId = record.id;
      save();
      rerender();
      showToast('实验记录已创建', 'success');
      break;
    }
    case 'research-experiment-delete': {
      const record = researchExperimentStore().find(item => item.id === researchExperimentState.experimentId);
      if (!record) break;
      showConfirm('将实验移入回收站？', '「' + escapeHTML(record.title || '未命名实验') + '」及其记录将在回收站保留 ' + TRASH_KEEP_DAYS + ' 天，期间可以恢复。', '移入回收站', () => {
        researchExperimentState.experimentId = '';
        softDelete('learning.research.experiments.items', record.id);
      });
      break;
    }
    case 'research-experiment-open-plan': {
      const idea = researchIdeaStore().find(item => item.id === researchExperimentState.ideaId);
      if (!idea) break;
      researchInspirationState.selectedId = idea.id;
      researchInspirationState.view = 'journey';
      researchInspirationState.stage = 'experiment';
      renderPage('research-inspiration');
      break;
    }
    case 'research-paper-new': {
      const idea = researchIdeaStore().find(item => item.id === researchPaperState.ideaId && !item.archived);
      if (!idea) {
        showToast('请先选择一条关联 Idea', 'warning');
        break;
      }
      const now = new Date().toISOString();
      const paper = {
        id: uid(),
        ideaId: idea.id,
        title: idea.title || '未命名论文',
        venue: '',
        deadline: '',
        sections: Object.fromEntries(RESEARCH_PAPER_SECTIONS.map(section => [section[0], false])),
        submissionStage: '',
        submissionNotes: '',
        submittedAt: '',
        createdAt: now,
        updatedAt: now
      };
      researchPaperStore().push(paper);
      researchPaperState.paperId = paper.id;
      save();
      rerender();
      showToast('论文已创建并关联当前 Idea', 'success');
      break;
    }
    case 'research-paper-delete': {
      const paper = researchPaperStore().find(item => item.id === researchPaperState.paperId);
      if (!paper) break;
      showConfirm('将论文移入回收站？', '「' + escapeHTML(paper.title || '未命名论文') + '」的写作与投稿记录将在回收站保留 ' + TRASH_KEEP_DAYS + ' 天，期间可以恢复。', '移入回收站', () => {
        researchPaperState.paperId = '';
        softDelete('learning.research.papers.items', paper.id);
      });
      break;
    }
    case 'research-idea-manage-categories':
      openResearchIdeaCategoryManager();
      break;
    case 'research-idea-tag-add': {
      const item = researchIdeaStore().find(x => x.id === researchInspirationState.selectedId);
      if (!item) break;
      showAddModal('添加 Idea 标签', [{ label: '标签名称', placeholder: '如：RAG、引用、可信度' }], vals => {
        const tag = (vals[0] || '').trim().replace(/^#\s*/, '');
        if (!tag) return;
        if ((item.tags || []).includes(tag)) {
          showToast('该标签已存在', 'warning');
          return;
        }
        if (!Array.isArray(item.tags)) item.tags = [];
        item.tags.push(tag);
        item.updatedAt = new Date().toISOString();
        save();
        rerender();
        showToast('标签已添加', 'success');
      });
      break;
    }
    case 'research-idea-edit': {
      const idea = researchIdeaStore().find(x => x.id === researchInspirationState.selectedId);
      if (idea) {
        researchIdeaModalState.id = idea.id;
        researchIdeaModalState.tags = (idea.tags || []).slice();
        openResearchIdeaModal('edit', idea);
      }
      break;
    }
    case 'research-idea-favorite': {
      const item = researchIdeaStore().find(x => x.id === researchInspirationState.selectedId);
      if (item) {
        item.favorite = !item.favorite;
        save();
        rerender();
        showToast(item.favorite ? '已收藏' : '已取消收藏', 'success');
      }
      break;
    }
    case 'research-idea-stage-complete': {
      const item = researchIdeaStore().find(x => x.id === researchInspirationState.selectedId);
      const stageIndex = RESEARCH_IDEA_STAGES.findIndex(stage => stage.key === researchInspirationState.stage);
      const stage = RESEARCH_IDEA_STAGES[stageIndex];
      if (item && stage) {
        const record = researchIdeaDevelopment(item)[stage.key];
        record.done = !record.done;
        item.updatedAt = new Date().toISOString();
        const progress = researchIdeaProgress(item);
        item.status = researchIdeaDerivedStatus(item);
        if (record.done && stageIndex < RESEARCH_IDEA_STAGES.length - 1) researchInspirationState.stage = RESEARCH_IDEA_STAGES[stageIndex + 1].key;
        save();
        rerender();
        showToast(record.done ? '本阶段已完成，继续推进下一步' : '已重新打开本阶段', 'success');
      }
      break;
    }
    case 'research-idea-archive': {
      const item = researchIdeaStore().find(x => x.id === researchInspirationState.selectedId);
      if (item) {
        item.archived = !item.archived;
        if (item.archived) {
          item.favorite = false;
          researchInspirationState.selectedId = '';
        }
        save();
        rerender();
        showToast(item.archived ? '已归档' : '已恢复', 'success');
      }
      break;
    }
    case 'research-idea-delete': {
      const item = researchIdeaStore().find(x => x.id === researchInspirationState.selectedId);
      if (!item) break;
      showConfirm('将灵感移入回收站？', '「' + escapeHTML(item.title || '未命名灵感') + '」将在回收站保留 ' + TRASH_KEEP_DAYS + ' 天，期间可以恢复。', '移入回收站', () => {
        researchInspirationState.selectedId = '';
        softDelete('learning.research.inspirations.items', item.id);
      });
      break;
    }
    case 'research-idea-clear-filter':
      researchInspirationState.query = '';
      researchInspirationState.scope = 'active';
      researchInspirationState.category = '';
      researchInspirationState.tag = '';
      researchInspirationState.status = '';
      researchInspirationState.source = '';
      rerender();
      break;
    case 'research-idea-clear-query':
      researchInspirationState.query = '';
      rerender();
      break;
    case 'clear-reading-log-tag':
      activeReadingLogTag = '';
      rerender();
      break;
    case 'generate-knowledge-graph':
      if (knowledgeGraphGenerating || zoteroState.status !== 'connected') {
        if (zoteroState.status !== 'connected') showToast('请先连接 Zotero，再生成知识图谱', 'warning');
        break;
      }
      knowledgeGraphGenerating = true;
      rerender();
      requestAnimationFrame(() => {
        knowledgeGraphMounted = true;
        rerender();
        requestAnimationFrame(() => {
          try {
            const canvas = document.getElementById('knowledgeGraphCanvas');
            if (!canvas || !knowledgeGraphRuntime) throw new Error('图谱画布未能初始化');
            showToast('知识图谱已生成', 'success');
          } catch (error) {
            knowledgeGraphMounted = false;
            showToast(error.message || '知识图谱生成失败，请重试', 'error');
            rerender();
          } finally {
            knowledgeGraphGenerating = false;
          }
        });
      });
      break;
    case 'add-workout-log':
      openWorkoutModal(null);
      break;
    case 'complete-english-day': {
      const challenge = DATA.learning.english.challenge;
      const tasks = DATA.tasks.english || [];
      const today = todayKey();
      if (!tasks.length || tasks.some(task => !task.done)) {
        showToast('请先完成今日全部英语任务，再记录挑战', 'warning');
        break;
      }
      if (challenge.lastCompletedDate === today) {
        showToast('今天的挑战已经记录过了', 'warning');
        break;
      }
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      challenge.streak = challenge.lastCompletedDate === todayKey(yesterday) ? (Number(challenge.streak) || 0) + 1 : 1;
      challenge.total = Math.max(1, Number(challenge.total) || 100);
      challenge.current = Math.min(challenge.total, (Number(challenge.current) || 0) + 1);
      challenge.lastCompletedDate = today;
      save();
      rerender();
      showToast('英语挑战已记录，连续练习 ' + challenge.streak + ' 天', 'success');
      break;
    }
    case 'add-topcontent':
      showAddModal('添加表现最佳内容', [
        { label: '排名', placeholder: '🥇' },
        { label: '标题', placeholder: '内容标题' },
        { label: '数据描述', placeholder: '阅读 0k · 互动 0 · 收藏 0' }
      ], (vals) => {
        DATA.review.topContent.push({ id: uid(), rank: vals[0] || '📄', title: vals[1], desc: vals[2] });
        save(); rerender(); showToast('已添加', 'success');
      });
      break;
    case 'add-published':
      showAddModal('添加已发布剧集', [
        { label: '标题', placeholder: '第 X 集 · 标题' },
        { label: '数据描述', placeholder: '播放 0 · 点赞 0' }
      ], (vals) => {
        DATA.comic.published.push({ id: uid(), title: vals[0], desc: vals[1] });
        save(); rerender(); showToast('已添加', 'success');
      });
      break;
    case 'add-resource':
      showAddModal('添加学习资源', [
        { label: '标题', placeholder: '📚 资源名称' },
        { label: '描述', placeholder: '资源简介' }
      ], (vals) => {
        DATA.learning.ai.resources.push({ id: uid(), title: vals[0], desc: vals[1] });
        save(); rerender(); showToast('已添加', 'success');
      });
      break;
  }
}

// ========================================================================
// ENTER-TO-ADD
// ========================================================================
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const t = e.target;

  // Task add input
  if (t.classList.contains('add-task-input') && t.dataset.path) {
    e.preventDefault();
    if (t.value.trim()) {
      addTask(t.dataset.path, t.value.trim());
      setTimeout(() => {
        const ni = document.querySelector('.add-task-input[data-path="' + t.dataset.path + '"]');
        if (ni) ni.focus();
      }, 50);
    } else {
      t.classList.add('input-error');
      setTimeout(() => t.classList.remove('input-error'), 500);
    }
    return;
  }

  // Inspire add form
  if (t.classList.contains('add-task-input') && t.dataset.cat && t.dataset.field) {
    e.preventDefault();
    const cat = t.dataset.cat;
    const form = t.closest('.inspire-add-form');
    const titleInput = form ? form.querySelector('[data-field="title"]') : null;
    const descInput = form ? form.querySelector('[data-field="desc"]') : null;
    if (titleInput && titleInput.value.trim()) {
      addInspire(cat, titleInput.value.trim(), descInput ? descInput.value.trim() : '');
      showToast('已添加', 'success');
      setTimeout(() => {
        const ni = document.querySelector('.inspire-add-form [data-cat="' + cat + '"][data-field="title"]');
        if (ni) ni.focus();
      }, 50);
    } else if (titleInput) {
      titleInput.classList.add('input-error');
      setTimeout(() => titleInput.classList.remove('input-error'), 500);
    }
  }
});

// ========================================================================
// INLINE EDITS (dblclick task text / contenteditable / bar value)
// ========================================================================
document.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('task-text')) {
    const path = e.target.dataset.path;
    const id = e.target.dataset.id;
    const arr = getNestedData(path);
    const task = arr ? arr.find(x => x.id === id) : null;
    if (!task) return;
    const input = document.createElement('input');
    input.className = 'task-text-edit';
    input.value = task.text;
    e.target.replaceWith(input);
    input.focus();
    input.select();
    const commit = () => {
      const v = input.value.trim();
      if (v) { task.text = v; save(); }
      rerender();
    };
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') { ev.preventDefault(); input.blur(); }
      if (ev.key === 'Escape') { input.removeEventListener('blur', commit); rerender(); }
    });
  }
});

document.addEventListener('blur', (e) => {
  const t = e.target;
  if (t && t.dataset && t.dataset.researchDdlField && t.dataset.researchDdlId) {
    const item = researchIdeaStore().find(x => x.id === t.dataset.researchDdlId);
    if (item) {
      if (t.dataset.researchDdlField === 'venue') {
        refreshResearchConferenceDDL(item, t.value);
        return;
      }
      item[t.dataset.researchDdlField] = t.value;
      item.updatedAt = new Date().toISOString();
      save();
      rerender();
    }
    return;
  }
  if (t && t.dataset && t.dataset.researchPaperField && t.dataset.researchPaperId) {
    const paper = researchPaperStore().find(item => item.id === t.dataset.researchPaperId);
    if (paper) {
      paper[t.dataset.researchPaperField] = t.value;
      paper.updatedAt = new Date().toISOString();
      save();
    }
    return;
  }
  if (t && t.dataset && t.dataset.researchExperimentField && t.dataset.researchExperimentId) {
    const record = researchExperimentStore().find(item => item.id === t.dataset.researchExperimentId);
    if (record) {
      record[t.dataset.researchExperimentField] = t.value;
      record.updatedAt = new Date().toISOString();
      save();
    }
    return;
  }
  if (t && t.dataset && t.dataset.researchIdeaStageField && t.dataset.researchIdeaStageKey) {
    const ideaId = t.dataset.researchIdeaId || researchInspirationState.selectedId;
    const item = researchIdeaStore().find(x => x.id === ideaId);
    if (item) {
      const stage = researchIdeaDevelopment(item)[t.dataset.researchIdeaStageKey];
      if (stage) {
        stage[t.dataset.researchIdeaStageField] = t.value;
        item.updatedAt = new Date().toISOString();
        if (t.dataset.researchIdeaStageKey === 'idea' && t.dataset.researchIdeaStageField === 'observation') item.content = t.value;
        save();
      }
    }
    return;
  }
  if (!t || !t.isContentEditable) return;
  const text = t.textContent.trim();

  if (t.dataset.reviewAction) {
    DATA.review.actions[t.dataset.reviewAction] = text;
    save();
  } else if (t.dataset.research) {
    DATA.learning.research.current[t.dataset.research] = text;
    save();
  } else if (t.dataset.comic) {
    DATA.comic.current[t.dataset.comic] = text;
    save();
  } else if (t.dataset.wr) {
    DATA.weeklyReview[t.dataset.wr] = text;
    save();
  }
}, true);

document.addEventListener('change', (e) => {
  if (e.target.matches('[data-research-experiment-image-input]')) {
    const wrapper = e.target.closest('[data-research-stage-field-wrap]');
    const textarea = wrapper && wrapper.querySelector('textarea[data-research-experiment-field="results"]');
    const file = e.target.files && e.target.files[0];
    if (textarea && file) insertResearchExperimentImage(textarea, file);
    e.target.value = '';
    return;
  }
  if (e.target.id === 'researchExperimentIdeaSelect') {
    researchExperimentState.ideaId = e.target.value;
    researchExperimentState.experimentId = '';
    researchInspirationState.selectedId = e.target.value;
    rerender();
    return;
  }
  if (e.target.id === 'researchPaperIdeaSelect') {
    researchPaperState.ideaId = e.target.value;
    researchPaperState.paperId = '';
    researchInspirationState.selectedId = e.target.value;
    rerender();
    return;
  }
  if (e.target.id === 'researchTodoIdeaFilter') {
    researchTodoState.ideaId = e.target.value;
    rerender();
    return;
  }
  if (e.target.matches('[data-research-idea-category-select]')) {
    const item = researchIdeaStore().find(x => x.id === e.target.dataset.researchIdeaCategorySelect);
    if (item) {
      if (e.target.value === '__new__') {
        e.target.value = item.category || '';
        showAddModal('新建 Idea 分类', [{ label: '分类名称', placeholder: '如：研究方法、评估与基准' }], vals => {
          const category = (vals[0] || '').trim();
          if (!category) return;
          item.category = category;
          item.updatedAt = new Date().toISOString();
          save();
          rerender();
          showToast('已新建并移入“' + category + '”', 'success');
        });
        return;
      }
      item.category = e.target.value;
      item.updatedAt = new Date().toISOString();
      save();
      rerender();
      showToast(item.category ? '已移入“' + item.category + '”' : '已移入未分类', 'success');
    }
    return;
  }
  if (e.target.id === 'researchIdeaCategoryFilter') {
    researchInspirationState.category = e.target.value;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }
  if (e.target.id === 'researchIdeaStatusFilter') {
    researchInspirationState.status = e.target.value;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }
  if (e.target.id === 'researchIdeaSourceFilter') {
    researchInspirationState.source = e.target.value;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }
  if (e.target.id === 'researchIdeaTagFilter') {
    researchInspirationState.tag = e.target.value;
    researchInspirationState.selectedId = '';
    rerender();
    return;
  }
  if (e.target.id === 'zoteroGraphScope') {
    zoteroState.graphScope = e.target.value;
    rerender();
    return;
  }
  if (e.target.id === 'zoteroCollection') {
    zoteroState.selectedCollection = e.target.value;
    zoteroState.query = (document.getElementById('zoteroQuery') || {}).value || '';
    loadZoteroItems();
    return;
  }
  if (e.target.id === 'researchIdeaSort') {
    researchInspirationState.sort = e.target.value;
    rerender();
    return;
  }
  if (e.target.id === 'researchIdeaGroup') {
    researchInspirationState.group = e.target.value;
    rerender();
    return;
  }
  if (e.target.classList.contains('bar-value-edit')) {
    if (e.target.dataset.cat === 'review.interaction') {
      DATA.review.interactionRate = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
      save();
      rerender();
    }
  }
});

// Research idea search: live filtering (input event, delegated)
document.addEventListener('input', (e) => {
  if (e.target.matches && e.target.matches('textarea[data-research-idea-stage-field], textarea[data-research-experiment-field], textarea[data-research-paper-field]')) {
    autoResizeResearchTextarea(e.target);
    if (e.target.matches('textarea[data-research-idea-stage-field]')) {
      const item = researchIdeaStore().find(x => x.id === (e.target.dataset.researchIdeaId || researchInspirationState.selectedId));
      const record = item && researchIdeaDevelopment(item)[e.target.dataset.researchIdeaStageKey];
      if (item && record) {
        record[e.target.dataset.researchIdeaStageField] = e.target.value;
        item.updatedAt = new Date().toISOString();
        if (e.target.dataset.researchIdeaStageKey === 'idea' && e.target.dataset.researchIdeaStageField === 'observation') item.content = e.target.value;
        updateResearchStageStatusUI(e.target);
        save();
      }
    }
  }
  if (e.target.id === 'researchIdeaSearch') {
    researchInspirationState.query = e.target.value;
    const caret = e.target.selectionStart;
    rerender();
    requestAnimationFrame(() => {
      const next = document.getElementById('researchIdeaSearch');
      if (next) { next.focus(); next.setSelectionRange(caret, caret); }
    });
  }
  if (e.target.id === 'researchTodoSearch') {
    researchTodoState.query = e.target.value;
    const caret = e.target.selectionStart;
    rerender();
    requestAnimationFrame(() => {
      const next = document.getElementById('researchTodoSearch');
      if (next) { next.focus(); next.setSelectionRange(caret, caret); }
    });
  }
});

document.addEventListener('paste', (e) => {
  const textarea = e.target;
  if (!textarea.matches || !textarea.matches('textarea[data-research-experiment-field="results"]')) return;
  const items = [...((e.clipboardData && e.clipboardData.items) || [])];
  const imageItem = items.find(item => item.kind === 'file' && /^image\//i.test(item.type));
  if (!imageItem) return;
  const file = imageItem.getAsFile();
  if (!file) return;
  e.preventDefault();
  insertResearchExperimentImage(textarea, file);
});

document.addEventListener('dragover', (e) => {
  const textarea = e.target;
  if (!textarea.matches || !textarea.matches('textarea[data-research-experiment-field="results"]')) return;
  const files = [...((e.dataTransfer && e.dataTransfer.items) || [])];
  if (!files.some(item => item.kind === 'file' && /^image\//i.test(item.type))) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
});

document.addEventListener('drop', (e) => {
  const textarea = e.target;
  if (!textarea.matches || !textarea.matches('textarea[data-research-experiment-field="results"]')) return;
  const file = [...((e.dataTransfer && e.dataTransfer.files) || [])].find(item => /^image\//i.test(item.type));
  if (!file) return;
  e.preventDefault();
  insertResearchExperimentImage(textarea, file);
});

function handleResearchStageEditorKeydown(e) {
  const textarea = e.target;
  const isStageEditor = textarea.matches('textarea[data-research-idea-stage-field], textarea[data-research-experiment-field]');
  const isPaperNotes = textarea.matches('textarea[data-research-paper-field]');
  if ((!isStageEditor && !isPaperNotes) || e.isComposing) return false;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  // Keep focus in the editor and provide familiar code-editor indentation.
  if (e.key === 'Tab' && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    const value = textarea.value;
    const indent = '  ';
    if (e.shiftKey) {
      const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1;
      const selectionEnd = end === start ? value.indexOf('\n', start) === -1 ? value.length : value.indexOf('\n', start) : end;
      const selected = value.slice(lineStart, selectionEnd);
      let removedBeforeStart = 0;
      let removedTotal = 0;
      const unindented = selected.split('\n').map((line, index) => {
        const remove = line.startsWith(indent) ? indent.length : line.startsWith(' ') ? 1 : 0;
        if (index === 0) removedBeforeStart = Math.min(remove, Math.max(0, start - lineStart));
        removedTotal += remove;
        return line.slice(remove);
      }).join('\n');
      if (removedTotal) {
        textarea.setRangeText(unindented, lineStart, selectionEnd, 'end');
        textarea.setSelectionRange(Math.max(lineStart, start - removedBeforeStart), Math.max(lineStart, end - removedTotal));
      }
    } else if (start !== end) {
      const selectionStart = value.lastIndexOf('\n', start - 1) + 1;
      const selected = value.slice(selectionStart, end);
      const indented = selected.replace(/^|\n/g, match => match + indent);
      textarea.setRangeText(indented, selectionStart, end, 'end');
      textarea.setSelectionRange(selectionStart, selectionStart + indented.length);
    } else {
      textarea.setRangeText(indent, start, end, 'end');
    }
    return true;
  }

  if (!isStageEditor) return false;
  if (e.key === '$' && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    const value = textarea.value;
    if (start !== end) {
      const selected = value.slice(start, end);
      textarea.setRangeText('$' + selected + '$', start, end, 'end');
      textarea.setSelectionRange(start + 1, end + 1);
      return true;
    }
    const previous = value.charAt(start - 1);
    const next = value.charAt(start);
    if (previous === '$' && next === '$') {
      textarea.setRangeText('$$$$', start - 1, start + 1, 'end');
      textarea.setSelectionRange(start + 1, start + 1);
      return true;
    }
    if (next === '$') {
      textarea.setSelectionRange(start + 1, start + 1);
      return true;
    }
    textarea.setRangeText('$$', start, end, 'end');
    textarea.setSelectionRange(start + 1, start + 1);
    return true;
  }

  if (e.key !== 'Enter' || e.shiftKey || e.metaKey || e.ctrlKey || e.altKey || start !== end) return false;
  const value = textarea.value;
  const lineStart = value.lastIndexOf('\n', start - 1) + 1;
  const nextBreak = value.indexOf('\n', start);
  const lineEnd = nextBreak === -1 ? value.length : nextBreak;
  if (start !== lineEnd) return false;
  const line = value.slice(lineStart, lineEnd);
  const numbered = line.match(/^(\s*)(\d+)([.)])\s+(.*)$/);
  const bullet = line.match(/^(\s*)([-*+])\s+(.*)$/);
  if (!numbered && !bullet) return false;
  e.preventDefault();
  if (numbered) {
    const indent = numbered[1];
    if (!numbered[4].trim()) {
      textarea.setRangeText(indent, lineStart, lineEnd, 'end');
      textarea.setSelectionRange(lineStart + indent.length, lineStart + indent.length);
    } else {
      const prefix = '\n' + indent + (Number(numbered[2]) + 1) + numbered[3] + ' ';
      textarea.setRangeText(prefix, start, end, 'end');
    }
    return true;
  }
  const indent = bullet[1];
  if (!bullet[3].trim()) {
    textarea.setRangeText(indent, lineStart, lineEnd, 'end');
    textarea.setSelectionRange(lineStart + indent.length, lineStart + indent.length);
  } else {
    textarea.setRangeText('\n' + indent + bullet[2] + ' ', start, end, 'end');
  }
  return true;
}

// Checkbox keyboard support (Space/Enter on focused checkbox)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && researchInspirationState.focusMode) {
    researchInspirationState.focusMode = false;
    document.body.classList.remove('research-focus-active');
    rerender();
    return;
  }
  if (handleResearchStageEditorKeydown(e)) {
    requestAnimationFrame(() => autoResizeResearchTextarea(e.target));
    return;
  }
  if (e.key === 'Enter' && e.target.id === 'researchIdeaQuickTitle') {
    e.preventDefault();
    quickCaptureResearchIdea();
    return;
  }
  if (e.key === 'Enter' && (e.target.id === 'researchTodoQuickInput' || e.target.id === 'researchTodoQuickDue')) {
    e.preventDefault();
    quickAddResearchTodo();
    return;
  }
  if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('task-checkbox')) {
    e.preventDefault();
    toggleTask(e.target.dataset.path, e.target.dataset.id);
  }
  if ((e.key === ' ' || e.key === 'Enter') && e.target.matches('.workspace-sync-mark[data-plan-toggle]')) {
    e.preventDefault();
    const item = (DATA.fitness.plan || []).find(plan => plan.id === e.target.dataset.planToggle);
    if (item) {
      if (item.done) {
        item.done = false;
        save();
        rerender();
      } else {
        openWorkoutModal(item);
      }
    }
  }
  if ((e.key === ' ' || e.key === 'Enter') && e.target.matches('.workspace-sync-mark[data-path][data-id]')) {
    e.preventDefault();
    toggleTask(e.target.dataset.path, e.target.dataset.id);
  }
  if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('checkin-row') && e.target.dataset.cat) {
    e.preventDefault();
    toggleCheckin(e.target.dataset.cat, e.target.dataset.id);
  }
});

window.addEventListener('resize', debounce(() => {
  if (currentPage === 'research') fitReadingLogHeatmap();
}, 120));

// ========================================================================
// INIT
// ========================================================================
async function init() {
  await storage.init();

  const saved = await storage.read();
  let recoveredInvalidData = false;
  if (saved) {
    try {
      DATA = migrateWorkspaceData(saved);
    } catch (error) {
      console.warn('Saved workspace data invalid; starting from defaults:', error);
      DATA = migrateWorkspaceData(cloneData(DEFAULT_DATA));
      recoveredInvalidData = true;
    }
  } else {
    DATA = migrateWorkspaceData(cloneData(DEFAULT_DATA));
    DATA.meta.deviceId = DEVICE_ID;
    // Persist starter data through the API. If another client initialized the
    // workspace first, optimistic locking returns its document instead.
    const initialWrite = await storage.write(DATA);
    if (initialWrite && initialWrite.conflict && initialWrite.remote) {
      DATA = migrateWorkspaceData(initialWrite.remote);
    }
  }

  // Housekeeping
  migrateFitnessData();
  const temporalChanged = ensureTemporalState();
  const prunedReadingLogs = pruneReadingLogs();
  const purgedTrash = purgeTrash();
  recordCheckinToday();
  recordWeeklyTrend();
  if (!DATA.meta) DATA.meta = { revision: 0, deviceId: DEVICE_ID, savedAt: '' };

  if (prunedReadingLogs || purgedTrash || temporalChanged || recoveredInvalidData) save();
  applyTheme();
  updateSyncIndicator();
  renderPage(pageIdFromHash());

  // First-run onboarding
  if (!DATA.settings.onboarded) {
    setTimeout(() => startOnboarding(false), 400);
  } else if (storage.mode === 'local' && storage.isFSAASupported) {
    setTimeout(() => showToast('提示：连接 data 文件夹以启用 iCloud 同步', 'warning', { duration: 4000 }), 1000);
  } else if (storage.mode === 'local' && !storage.isFSAASupported) {
    setTimeout(() => showToast('当前浏览器不支持文件同步，数据仅保存在本地', 'warning', { duration: 4000 }), 1000);
  }
}

const WORKSPACE_INIT_PROMISE = init();


  ;(() => {
    let reactRenderMode = 'page';
    let reactRevision = 0;
    const reactSubscribers = new Set();
    const renderState = () => ({ pageId: currentPage, mode: reactRenderMode, revision: reactRevision });
    const pageMarkup = () => {
      const page = PAGES[currentPage];
      if (!page) return '';
      const enterClass = reactRenderMode === 'page' ? ' class="page-enter"' : '';
      return '<div' + enterClass + '>' + mainHeaderHTML(page, currentPage) + page.render() + '<div class="bottom-spacer"></div></div>';
    };
    const notifyReact = () => {
      reactRevision += 1;
      reactSubscribers.forEach(listener => listener(renderState()));
    };
    renderPage = function reactWorkspaceRenderPage(pageId, options = {}) {
      const page = PAGES[pageId];
      if (!page) return;
      currentPage = pageId;
      if (options.syncUrl !== false && location.hash !== '#' + pageId) history.pushState(null, '', '#' + pageId);
      const main = document.getElementById('mainContent');
      if (main) main.scrollTop = 0;
      reactRenderMode = 'page';
      if (document.getElementById('sidebar')) closeDrawer();
      notifyReact();
    };
    rerender = function reactWorkspaceRerender() {
      reactRenderMode = 'refresh';
      notifyReact();
    };
    generatedRuntime = Object.freeze({
      navigate(pageId) { renderPage(pageId); },
      getCurrentPage() { return currentPage; },
      getRenderState: renderState,
      getPageMarkup: pageMarkup,
      getData() { return DATA; },
      getStorageState() { return { mode: 'api', lastSaved: storage.lastSaved, deviceId: DEVICE_ID, apiEnabled: true, requireApi: true }; },
      actions: Object.freeze({
        openDrawer() { openDrawer(); },
        closeDrawer() { closeDrawer(); },
        cycleTheme() { cycleTheme(); },
        showShortcuts() { showShortcutsHelp(); },
        toggleTask(path, id) { toggleTask(path, id); },
        addTask(path, text) { addTask(path, text); },
        addInspire(path, title, desc) { addInspire(path, title, desc); },
        toggleCheckin(category, id) { toggleCheckin(category, id); },
        toggleFitnessPlan(id) {
          const item = (DATA.fitness.plan || []).find(plan => plan.id === id);
          if (!item) return;
          if (item.done) { item.done = false; save(); rerender(); }
          else openWorkoutModal(item);
        },
        dispatchAction(action) { handleAction(action); },
        deleteItem(path, id) { softDelete(path, id); },
        clearDone(paths) { clearDoneTasks(paths); },
        rolloverPlan() { rolloverPlan(); },
        setTheme(pref) { setTheme(pref); }
      }),
      subscribe(listener) {
        reactSubscribers.add(listener);
        return () => reactSubscribers.delete(listener);
      },
      notifyCommitted() { afterPageRender(); }
    });
    window.__AI_WORKSPACE_RUNTIME__ = generatedRuntime;
  })();

await WORKSPACE_INIT_PROMISE;
}
