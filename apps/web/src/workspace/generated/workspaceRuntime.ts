// Standalone workspace runtime owned by the React frontend.
// @ts-nocheck -- parity module; all public access is typed by runtimeBridge.ts.
import type { RenderState, WorkspacePageId } from '../runtimeBridge.js';
import { IELTS_DOWNLOADED_VOCABULARY_SOURCE } from './ieltsVocabularySource.js';

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
    "displayName": "TheoFan",
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
      { "id": "en2", "text": "背单词 100 个", "done": false },
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
      "profile": {
        "target": "IELTS Academic",
        "targetBand": "7.0+",
        "currentBand": "6.5",
        "dailyMinutes": 75,
        "examDate": ""
      },
      "challenge": { "current": 28, "total": 100, "streak": 0, "lastCompletedDate": "" },
      "vocab": {
        "dailyTarget": 100,
        "dailyDate": "",
        "bankVersion": "IELTS Academic Core + Topic Bank · v2.0",
        "words": [],
        "seenIds": [],
        "lastBatchIds": [],
        "favorites": [],
        "lastGeneratedAt": ""
      },
      "listening": {
        "completed": 8,
        "target": 12,
        "streak": 0,
        "lastCompletedDate": "",
        "lastSyncedAt": "",
        "queue": [
          { "id": "listen-1", "title": "Urban farming and the future of food", "source": "BBC Learning English", "level": "Band 6.5–7.0", "duration": "08:42", "skill": "Section 3 · Note completion", "status": "done" },
          { "id": "listen-2", "title": "How coral reefs adapt to warming oceans", "source": "TED-Ed", "level": "Band 7.0+", "duration": "06:18", "skill": "Section 4 · Summary completion", "status": "done" },
          { "id": "listen-3", "title": "A conversation about creative routines", "source": "NPR Life Kit", "level": "Band 6.0–6.5", "duration": "09:05", "skill": "Section 2 · Multiple choice", "status": "done" },
          { "id": "listen-4", "title": "Reading the signals in a changing climate", "source": "BBC Learning English", "level": "Band 7.0", "duration": "07:36", "skill": "Section 3 · Matching headings", "status": "done" },
          { "id": "listen-5", "title": "The science of better sleep", "source": "TED-Ed", "level": "Band 7.0–7.5", "duration": "08:11", "skill": "Section 4 · Flow-chart completion", "status": "done" },
          { "id": "listen-6", "title": "A campus project that changed its neighbourhood", "source": "NPR Life Kit", "level": "Band 6.5", "duration": "09:24", "skill": "Section 2 · Map labelling", "status": "done" },
          { "id": "listen-7", "title": "Why some memories last longer than others", "source": "BBC Learning English", "level": "Band 7.0", "duration": "06:54", "skill": "Section 3 · Multiple choice", "status": "done" },
          { "id": "listen-8", "title": "Designing cities for everyday movement", "source": "TED-Ed", "level": "Band 7.5", "duration": "10:02", "skill": "Section 4 · Note completion", "status": "done" },
          { "id": "listen-9", "title": "How museums bring hidden histories to life", "source": "NPR Life Kit", "level": "Band 7.0", "duration": "08:47", "skill": "Section 2 · Form completion", "status": "next" },
          { "id": "listen-10", "title": "The promise and limits of vertical forests", "source": "BBC Learning English", "level": "Band 7.5", "duration": "07:58", "skill": "Section 3 · Sentence completion", "status": "locked" },
          { "id": "listen-11", "title": "When algorithms make everyday decisions", "source": "TED-Ed", "level": "Band 7.5–8.0", "duration": "09:16", "skill": "Section 4 · Summary completion", "status": "locked" },
          { "id": "listen-12", "title": "A guide to negotiating across cultures", "source": "NPR Life Kit", "level": "Band 7.0", "duration": "08:29", "skill": "Section 2 · Matching information", "status": "locked" }
        ]
      },
      "reading": {
        "dailyGoal": 1,
        "completed": 6,
        "lastFetchedAt": "",
        "lastSource": "",
        "lastTopic": "",
        "remoteTitles": [],
        "activeArticleId": "article-1",
        "articles": [
          { "id": "article-1", "type": "科技与社会", "source": "The Conversation", "level": "Band 7.0", "minutes": 12, "title": "Why small AI tools are changing the way people learn", "excerpt": "From language practice to research notes, narrowly focused AI tools are becoming everyday study partners. The most useful systems do not replace effort; they make feedback easier to reach.", "tags": ["technology", "education"], "url": "https://theconversation.com/", "publishedAt": "2026-08-27", "saved": true },
          { "id": "article-2", "type": "环境科学", "source": "National Geographic", "level": "Band 7.5", "minutes": 15, "title": "The quiet return of wetlands in crowded cities", "excerpt": "Urban wetlands are being restored as living infrastructure. They reduce flood risk, cool neighbourhoods and create habitats without demanding more concrete.", "tags": ["environment", "cities"], "url": "https://www.nationalgeographic.com/", "publishedAt": "2026-08-26", "saved": false },
          { "id": "article-3", "type": "文化与历史", "source": "Smithsonian Magazine", "level": "Band 7.0", "minutes": 10, "title": "What old maps reveal about the way cities remember", "excerpt": "Maps are often treated as neutral records, yet every border, label and blank space reflects a decision about what deserves to be seen.", "tags": ["culture", "history"], "url": "https://www.smithsonianmag.com/", "publishedAt": "2026-08-25", "saved": false },
          { "id": "article-4", "type": "商业与工作", "source": "Harvard Business Review", "level": "Band 7.5", "minutes": 14, "title": "The case for slower, more deliberate collaboration", "excerpt": "Teams that leave room for reflection often make fewer reactive decisions. Deliberate collaboration is not a refusal to move quickly; it is a way to spend speed where it matters.", "tags": ["work", "management"], "url": "https://hbr.org/", "publishedAt": "2026-08-24", "saved": false },
          { "id": "article-5", "type": "心理与健康", "source": "Scientific American", "level": "Band 8.0", "minutes": 13, "title": "Why our attention needs a recovery rhythm", "excerpt": "Attention is not an unlimited resource. Short periods of recovery can improve the quality of the next focused interval more reliably than a longer stretch of forced concentration.", "tags": ["health", "psychology"], "url": "https://www.scientificamerican.com/", "publishedAt": "2026-08-23", "saved": false },
          { "id": "article-6", "type": "艺术与设计", "source": "The Guardian", "level": "Band 7.0", "minutes": 11, "title": "How public spaces make room for unexpected encounters", "excerpt": "Good public design does more than direct movement. It leaves enough ambiguity for people to pause, observe one another and invent their own use for a place.", "tags": ["design", "culture"], "url": "https://www.theguardian.com/", "publishedAt": "2026-08-22", "saved": false }
        ]
      },
      "writing": {
        "weeklyGoal": 2,
        "completed": 0,
        "lastReviewedAt": "",
        "completedPromptIds": [],
        "prompts": [
          { "id": "writing-1", "type": "Task 2 · Opinion", "title": "Should cities charge drivers to enter busy centres?", "focus": "观点展开 · 让步段", "time": 40, "status": "next" },
          { "id": "writing-2", "type": "Task 1 · Report", "title": "The chart shows how households used energy in 2025", "focus": "概述段 · 比较趋势", "time": 20, "status": "planned" },
          { "id": "writing-3", "type": "Task 2 · Discussion", "title": "Is remote work a benefit or a barrier to career growth?", "focus": "双边讨论 · 结论", "time": 40, "status": "planned" }
        ],
        "drafts": []
      },
        "history": []
      },
      "civilService": {
        "profile": {
          "target": "国考 / 省考通用",
          "targetDate": "",
          "targetScore": 75,
          "dailyMinutes": 120
        },
        "weeklyGoal": 10,
        "weeklyCompleted": 5,
        "streak": 4,
        "lastStudyDate": "",
        "totalMinutes": 720,
        "studyHistory": [
          { "date": "2026-08-28", "minutes": 80, "completed": 3 },
          { "date": "2026-08-29", "minutes": 110, "completed": 5 },
          { "date": "2026-08-30", "minutes": 45, "completed": 2 },
          { "date": "2026-08-31", "minutes": 95, "completed": 4 },
          { "date": "2026-09-01", "minutes": 120, "completed": 6 },
          { "date": "2026-09-02", "minutes": 70, "completed": 3 },
          { "date": "2026-09-03", "minutes": 0, "completed": 0 }
        ],
        "subjects": [
          { "id": "quantity", "title": "数量关系", "icon": "∑", "description": "用结构化方法拆解数量题，稳定拿到可得分的中低难度题。", "focus": "比例 · 方程 · 工程 · 排列组合", "progress": 42, "tasks": [
            { "id": "quantity-1", "title": "掌握比例与倍数的统一建模", "done": true },
            { "id": "quantity-2", "title": "完成工程问题 10 题并整理错因", "done": false },
            { "id": "quantity-3", "title": "限时训练：资料型数量题 15 分钟", "done": false }
          ], "weakPoints": ["复杂行程问题容易在单位换算上失分", "排列组合需要先判断是否重复取用"] },
          { "id": "logic", "title": "逻辑判断", "icon": "◇", "description": "建立论证、削弱、加强与翻译推理的稳定判别路径。", "focus": "论证 · 翻译 · 真假 · 分析", "progress": 56, "tasks": [
            { "id": "logic-1", "title": "区分加强、削弱与解释型论证", "done": true },
            { "id": "logic-2", "title": "完成翻译推理基础题 12 题", "done": true },
            { "id": "logic-3", "title": "整理一页常见逻辑连接词", "done": false }
          ], "weakPoints": ["论证题先找结论，再定位隐含前提", "分析推理优先画约束关系而不是凭直觉"] },
          { "id": "analogy", "title": "类比推理", "icon": "≈", "description": "从词项关系、语义属性和造句验证三层完成快速匹配。", "focus": "逻辑关系 · 言语关系 · 经验常识", "progress": 61, "tasks": [
            { "id": "analogy-1", "title": "复习种属、组成与对应关系", "done": true },
            { "id": "analogy-2", "title": "完成成语与词语类比 20 题", "done": true },
            { "id": "analogy-3", "title": "建立易混关系辨析卡片", "done": false }
          ], "weakPoints": ["优先验证关系方向与强度", "成语类比不能只凭感情色彩判断"] },
          { "id": "graphic", "title": "图形推理", "icon": "▦", "description": "形成位置、样式、数量和属性四层观察顺序，减少无效试探。", "focus": "位置 · 样式 · 数量 · 属性", "progress": 35, "tasks": [
            { "id": "graphic-1", "title": "完成图形位置规律专项 15 题", "done": false },
            { "id": "graphic-2", "title": "整理旋转、翻转与叠加规律", "done": true },
            { "id": "graphic-3", "title": "限时完成一组立体图形题", "done": false }
          ], "weakPoints": ["先看位置变化，再看元素数量", "立体截面题需要固定观察视角"] },
          { "id": "data", "title": "资料分析", "icon": "%", "description": "练熟增长率、比重、平均数与比较大小，提升读表和速算效率。", "focus": "增长 · 比重 · 平均 · 速算", "progress": 68, "tasks": [
            { "id": "data-1", "title": "复习增长量与增长率的互换", "done": true },
            { "id": "data-2", "title": "完成一套图表材料并控制在 20 分钟", "done": true },
            { "id": "data-3", "title": "整理十组常用速算技巧", "done": false }
          ], "weakPoints": ["注意基期量与现期量的对应关系", "比较题先估算数量级再精算"] },
          { "id": "general", "title": "常识", "icon": "知", "description": "围绕高频主题搭建知识框架，用碎片时间滚动补齐盲区。", "focus": "法律 · 经济 · 科技 · 人文", "progress": 47, "tasks": [
            { "id": "general-1", "title": "复习宪法与行政法高频考点", "done": true },
            { "id": "general-2", "title": "完成科技人文常识晨读 30 条", "done": false },
            { "id": "general-3", "title": "把本周错题归入知识树", "done": false }
          ], "weakPoints": ["常识需要持续滚动，不适合考前一次性突击", "法律题先抓主体、行为和责任"] },
          { "id": "politics", "title": "政治理论", "icon": "政", "description": "把理论原理、时政表达与材料分析连接起来，形成可复述的知识链。", "focus": "理论 · 时政 · 党史 · 表达", "progress": 52, "tasks": [
            { "id": "politics-1", "title": "梳理新时代党的创新理论框架", "done": true },
            { "id": "politics-2", "title": "完成时政热点专题笔记", "done": false },
            { "id": "politics-3", "title": "用自己的话复述三个核心概念", "done": false }
          ], "weakPoints": ["理论表述要回到关键词和逻辑关系", "时政材料要同时记录背景、措施和意义"] },
          { "id": "essay", "title": "申论", "icon": "文", "description": "从审题、概括到文章写作建立完整闭环，让每次练笔都留下可复用表达。", "focus": "审题 · 概括 · 对策 · 文章", "progress": 39, "tasks": [
            { "id": "essay-1", "title": "完成一篇归纳概括并对照采分点", "done": true },
            { "id": "essay-2", "title": "积累五组公共政策规范表达", "done": false },
            { "id": "essay-3", "title": "完成大作文提纲：基层治理", "done": false }
          ], "weakPoints": ["先拆题干任务，再回材料找对应信息", "文章论点要落到分论点、案例与对策"] }
        ]
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
        { "id": "rl1", "date": "2026-07-25", "title": "Attention Is All You Need", "type": "会议论文", "domain": "LLMs后训练", "tags": ["Transformer"] },
        { "id": "rl2", "date": "2026-07-27", "title": "BERT: Pre-training of Deep Bidirectional Transformers", "type": "会议论文", "domain": "LLMs后训练", "tags": ["预训练"] },
        { "id": "rl3", "date": "2026-07-28", "title": "GPT-3: Language Models are Few-Shot Learners", "type": "会议论文", "domain": "LLMs后训练", "tags": ["大语言模型"] },
        { "id": "rl4", "date": "2026-07-30", "title": "LLaMA: Open and Efficient Foundation Language Models", "type": "预印本", "domain": "LLMs后训练", "tags": ["基础模型"] },
        { "id": "rl5", "date": "2026-08-01", "title": "A Survey of Large Language Models", "type": "期刊论文", "domain": "LLMs后训练", "tags": ["综述"] },
        { "id": "rl6", "date": "2026-08-02", "title": "Chain-of-Thought Prompting", "type": "会议论文", "domain": "LLMs后训练", "tags": ["提示学习"] },
      { "id": "rl7", "date": "2026-08-03", "title": "Retrieval-Augmented Generation for Knowledge-Intensive Tasks", "type": "会议论文", "domain": "知识图谱", "tags": ["RAG"] }
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

// A compact, offline-first IELTS Academic word bank.  The bank is deliberately
// broader than one day's target so the daily picker can avoid repeats while
// still keeping the level focused on high-frequency Band 6.5–8 vocabulary.
function englishWordExample(term, pos) {
  const word = String(term || '').trim();
  const partOfSpeech = String(pos || '').toLowerCase();
  if (!word) return '';
  // Keep the default sentence metalinguistic.  A generated example must not
  // accidentally put an adjective in a verb slot (or vice versa), which is
  // particularly easy to do when a word has more than one part of speech.
  const examples = {
    assess: 'Researchers assess whether the policy improves access to public services.',
    mitigate: 'Tree cover can mitigate the effects of extreme heat in cities.',
    allocate: 'The council allocated additional funding to public transport.',
    reinforce: 'The findings reinforce the case for early intervention.',
    fluctuate: 'Energy prices fluctuate when supply and demand change quickly.',
    retain: 'Spaced retrieval helps learners retain new vocabulary for longer.',
    sustainable: 'The proposal offers a sustainable way to reduce household waste.',
    coherent: 'A coherent argument links each claim to relevant evidence.',
    prevalent: 'The survey found that the practice was prevalent among younger adults.',
    biodiversity: 'Protecting biodiversity requires connected habitats and careful monitoring.'
  };
  return examples[word.toLowerCase()] || 'In IELTS texts, “' + word + '” often appears in discussions of evidence, policy or social change.';
}

const IELTS_WORD_BANK = [
  ['abundant', 'adj.', '丰富的；充足的', '7.0'], ['accumulate', 'v.', '积累；逐渐增加', '7.0'],
  ['adjacent', 'adj.', '邻近的；毗连的', '7.0'], ['advocate', 'v./n.', '提倡；拥护者', '7.0'],
  ['allocate', 'v.', '分配；拨出', '7.0'], ['alter', 'v.', '改变；修改', '6.5'],
  ['ambiguous', 'adj.', '含糊的；模棱两可的', '7.5'], ['analogy', 'n.', '类比；相似之处', '7.5'],
  ['anticipate', 'v.', '预期；预料', '7.0'], ['apparent', 'adj.', '明显的；表面上的', '6.5'],
  ['arbitrary', 'adj.', '任意的；武断的', '8.0'], ['assess', 'v.', '评估；评价', '6.5'],
  ['attribute', 'v./n.', '把……归因于；特征', '7.0'], ['authentic', 'adj.', '真实的；可信的', '6.5'],
  ['bias', 'n./v.', '偏见；使有偏向', '7.0'], ['coherent', 'adj.', '连贯的；条理清楚的', '7.0'],
  ['compel', 'v.', '迫使；使必须', '7.0'], ['comprehensive', 'adj.', '全面的；综合的', '7.0'],
  ['conceive', 'v.', '构想；设想', '7.5'], ['concurrent', 'adj.', '同时发生的', '8.0'],
  ['controversial', 'adj.', '有争议的', '6.5'], ['converse', 'v./adj.', '交谈；相反的', '7.5'],
  ['crucial', 'adj.', '关键的；至关重要的', '6.5'], ['cumulative', 'adj.', '累积的', '7.5'],
  ['decline', 'v./n.', '下降；衰退', '6.5'], ['deduce', 'v.', '推断；演绎', '7.5'],
  ['demonstrate', 'v.', '证明；展示', '6.5'], ['denote', 'v.', '表示；意味着', '7.5'],
  ['derive', 'v.', '获得；源于', '7.0'], ['diminish', 'v.', '减少；削弱', '7.0'],
  ['dispose', 'v.', '处理；布置', '7.5'], ['diverse', 'adj.', '多样的；不同的', '6.5'],
  ['empirical', 'adj.', '以实证为依据的', '8.0'], ['enhance', 'v.', '增强；提高', '6.5'],
  ['equivalent', 'adj./n.', '等同的；对应物', '7.0'], ['erode', 'v.', '侵蚀；逐渐削弱', '7.5'],
  ['explicit', 'adj.', '明确的；直白的', '7.0'], ['facilitate', 'v.', '促进；使便利', '7.0'],
  ['feasible', 'adj.', '可行的', '7.5'], ['fluctuate', 'v.', '波动；起伏', '7.0'],
  ['fundamental', 'adj.', '根本的；基础的', '6.5'], ['hinder', 'v.', '阻碍；妨碍', '7.0'],
  ['hypothesis', 'n.', '假设；假说', '7.0'], ['illustrate', 'v.', '说明；阐明', '6.5'],
  ['implement', 'v.', '实施；执行', '6.5'], ['implicit', 'adj.', '含蓄的；暗含的', '7.5'],
  ['incentive', 'n.', '激励；刺激', '7.0'], ['incorporate', 'v.', '包含；合并', '7.0'],
  ['induce', 'v.', '引起；诱导', '7.5'], ['inevitable', 'adj.', '不可避免的', '6.5'],
  ['infer', 'v.', '推断；推论', '6.5'], ['inhibit', 'v.', '抑制；阻止', '7.5'],
  ['innovative', 'adj.', '创新的', '6.5'], ['integral', 'adj.', '不可或缺的；完整的', '7.5'],
  ['intervene', 'v.', '干预；介入', '7.5'], ['intrinsic', 'adj.', '固有的；内在的', '8.0'],
  ['invoke', 'v.', '援引；引起', '8.0'], ['justify', 'v.', '证明……正当；为……辩护', '7.0'],
  ['likewise', 'adv.', '同样地；也', '6.5'], ['magnitude', 'n.', '规模；重要性', '7.5'],
  ['marginal', 'adj.', '边缘的；微小的', '7.5'], ['mediate', 'v.', '调解；斡旋', '8.0'],
  ['mitigate', 'v.', '缓解；减轻', '7.5'], ['notwithstanding', 'prep./adv.', '尽管；然而', '8.0'],
  ['obtain', 'v.', '获得；取得', '6.5'], ['paradigm', 'n.', '范式；典范', '8.0'],
  ['perspective', 'n.', '观点；视角', '6.5'], ['predominant', 'adj.', '占主导地位的', '7.5'],
  ['preliminary', 'adj.', '初步的；预备的', '7.0'], ['presume', 'v.', '假定；推测', '7.0'],
  ['profound', 'adj.', '深刻的；深远的', '7.0'], ['prohibit', 'v.', '禁止；阻止', '6.5'],
  ['prominent', 'adj.', '显著的；杰出的', '7.0'], ['proportion', 'n.', '比例；部分', '6.5'],
  ['regulate', 'v.', '监管；调节', '6.5'], ['reinforce', 'v.', '加强；巩固', '7.0'],
  ['reluctant', 'adj.', '不情愿的；勉强的', '6.5'], ['resilient', 'adj.', '有韧性的；能复原的', '7.5'],
  ['restrict', 'v.', '限制；约束', '6.5'], ['retain', 'v.', '保留；保持', '7.0'],
  ['rigid', 'adj.', '僵硬的；严格的', '7.0'], ['subordinate', 'adj./n.', '次要的；下属', '8.0'],
  ['subsequent', 'adj.', '随后的；后来的', '7.0'], ['sustain', 'v.', '维持；支撑', '6.5'],
  ['synthesize', 'v.', '综合；合成', '8.0'], ['tangible', 'adj.', '有形的；切实的', '7.5'],
  ['tentative', 'adj.', '暂定的；试探性的', '7.5'], ['trigger', 'v./n.', '触发；诱因', '6.5'],
  ['undergo', 'v.', '经历；经受', '7.0'], ['unprecedented', 'adj.', '前所未有的', '7.5'],
  ['utilize', 'v.', '利用；使用', '6.5'], ['valid', 'adj.', '有效的；合理的', '6.5'],
  ['viable', 'adj.', '可行的；能生存的', '7.5'], ['virtually', 'adv.', '几乎；实际上', '7.0'],
  ['widespread', 'adj.', '广泛的；普遍的', '6.5'], ['yield', 'v./n.', '产生；产量', '7.0'],
  ['adapt', 'v.', '适应；改编', '6.5'], ['aggregate', 'v./n.', '合计；总量', '7.5'],
  ['cease', 'v.', '停止；终止', '7.5'], ['constrain', 'v.', '限制；约束', '7.5'],
  ['correlate', 'v.', '相关；相互关联', '7.5'], ['discrete', 'adj.', '分离的；不连续的', '8.0'],
  ['elicit', 'v.', '引出；诱发', '8.0'], ['exceed', 'v.', '超过；超出', '6.5'],
  ['exploit', 'v.', '利用；开发', '7.0'], ['inherent', 'adj.', '固有的；内在的', '7.5'],
  ['manipulate', 'v.', '操纵；巧妙处理', '7.5'], ['offset', 'v./n.', '抵消；补偿', '7.5'],
  ['persist', 'v.', '坚持；持续存在', '7.0'], ['prevalent', 'adj.', '普遍的；流行的', '7.5'],
  ['provoke', 'v.', '激起；引发', '7.0'], ['quantify', 'v.', '量化；确定数量', '7.5'],
  ['reconcile', 'v.', '调和；使一致', '8.0'], ['refine', 'v.', '改进；提炼', '7.0'],
  ['speculate', 'v.', '推测；投机', '7.0'], ['transform', 'v.', '转变；改变', '6.5'],
  ['transmit', 'v.', '传输；传播', '7.0'], ['underlying', 'adj.', '潜在的；根本的', '7.5'],
  ['unify', 'v.', '统一；使成一体', '7.0'], ['verify', 'v.', '核实；验证', '6.5']
].map((entry, index) => ({
  id: 'ielts-' + String(index + 1).padStart(3, '0'),
  term: entry[0], pos: entry[1], meaning: entry[2], band: entry[3],
  // The previous build approximated IPA by replacing vowels, which looked
  // authoritative but was not reliable pronunciation data.  Leave it blank
  // until a verified dictionary pronunciation is available; the speaker
  // button still provides an immediate browser pronunciation.
  phonetic: '', phoneticVerified: false,
  example: englishWordExample(entry[0], entry[1])
}));

const IELTS_WORD_BANK_EXTRA = 'accessibility|accommodate|accompany|accordingly|acknowledge|acquisition|adaptation|administrative|aesthetic|agricultural|albeit|align|alleviate|amend|amplify|analogous|applicable|appreciate|arise|articulate|aspire|assemble|assert|attain|attitude|autonomous|beneficial|capability|cease|clarify|collaborate|commodity|compatible|compensate|complement|complexity|component|comprise|conceivable|confer|confine|consecutive|consent|considerable|consistency|constitute|contemporary|contradict|conventional|convert|correspond|credible|criterion|cultivate|deviate|devote|differentiate|dilemma|deteriorate|devise|dimension|dominant|duration|dynamic|elaborate|eliminate|emerge|emphasize|encounter|endure|enforce|enormous|ensure|ethical|exhibit|expose|external|extract|flexible|flourish|format|foster|framework|frustrate|generate|genuine|gradual|guarantee|guideline|hierarchy|highlight|identical|ideology|ignite|impose|incentivize|incidence|incline|infrastructure|inherent|innovate|inspect|integrity|interact|intermediate|interpret|interval|isolate|mature|mechanism|modest|modify|monitor|mutual|neglect|negligible|notion|objective|obscure|occupy|ongoing|orient|paradox|passive|persist|plausible|portion|pose|precede|precise|preserve|priority|proportionate|prospect|protocol|pursue|radical|random|rational|recover|refine|reinforce|reliable|resolve|reverse|robust|scenario|schedule|sequence|shift|simultaneous|solely|sphere|stable|statistic|substitute|supplement|surpass|suspend|target|temporary|terminate|territory|trace|trajectory|transparent|trigger|ultimate|uniform|unique|universal|urbanize|validity|variation|welfare|whereas|withdraw|yielding|biodiversity|carbon|climate|conservation|contaminate|deforestation|ecosystem|emission|fertility|habitat|renewable|scarcity|sustainable|vulnerable|wellbeing|curriculum|literacy|pedagogy|qualification|scholarship|tuition|workforce|employment|entrepreneur|productivity|revenue|stakeholder|venture|consumer|regulation|legislation|policy|governance|inequality|migration|population|demographic|heritage|identity|linguistic|mainstream|minority|participation|perception|prejudice|psychological|cognitive|motivation|attention|behaviour|perceive|retain|recall|reasoning|experiment|observation|sample|variable|methodology|analysis|outcome|accuracy|reproduce|evaluate|evidence|assumption|interpretation|correlation|distribution|sequence|chapter|notable|nevertheless|furthermore|thereby|hence|substantial|predominantly|respectively|approximately|dramatically|slightly|overall|contrast|whereby'.split('|').map((term, index) => ({
  id: 'ielts-extra-' + String(index + 1).padStart(3, '0'),
  term,
  pos: /tion$|ity$|ism$|ness$|ment$/.test(term) ? 'n.' : 'v./adj.',
  meaning: '雅思高频表达：' + term,
  band: index % 4 === 0 ? '7.5' : index % 3 === 0 ? '7.0' : '6.5',
  phonetic: '', phoneticVerified: false,
  example: englishWordExample(term, /tion$|ity$|ism$|ness$|ment$/.test(term) ? 'n.' : 'v./adj.')
}));
// The downloaded source is topic-labelled and deliberately kept separate from
// the hand-curated records above.  It fills the offline bank for more than
// sixteen daily batches while retaining the source's Chinese glosses/examples.
// The downloaded MIT source is retained verbatim in its own module for
// attribution, but a handful of OCR/typing mistakes must never reach a
// learner's daily batch. Corrections are applied at runtime so old snapshots
// can continue to resolve corrected source IDs without rewriting the licensed
// source file; explicitly rejected rows are omitted from new batches.
const IELTS_SOURCE_TERM_FIXES = Object.freeze({
  'padal': 'pedal',
  'vagetation': 'vegetation',
  'pretail': 'reptile',
  'approac': 'approach',
  'compus': 'campus',
  'pratical': 'practical',
  'consonent': 'consonant'
});
const IELTS_SOURCE_REJECT_TERMS = new Set(['frigde']);
const IELTS_SOURCE_MEANING_FIXES = Object.freeze({
  'latitude': '纬度',
  'breeze': '微风；和风',
  'gust': '一阵狂风；（情感的）迸发',
  'parallel': '平行的；相似的；与……平行',
  'deforest': '砍伐森林；使森林减少',
  'fertilise': '施肥于；使肥沃',
  'hybridisation': '杂交'
});
const IELTS_SOURCE_EXAMPLE_FIXES = Object.freeze({
  'crust': 'The snow crust was thick enough for us to walk on.',
  'hydrosphere': 'All the water on the Earth\'s surface is part of the hydrosphere.',
  'lithosphere': 'The lithosphere and hydrosphere together form the Earth\'s surface.',
  'mantle': 'The Earth\'s mantle lies between the crust and the core.',
  'disaster': 'The flood was a major disaster for communities in eastern China.',
  'endanger': 'If you work hard without rest, you may endanger your health.',
  'polar': 'In these polar regions, the balance of nature has already been disrupted.',
  'parallel': 'The two lines run parallel to each other.',
  'shiver': 'She began to shiver because she was worried and afraid.',
  'sprinkle': 'We have had only a sprinkle of rain recently.',
  'inevitable': 'Such a difficult operation may not succeed, but it is an inevitable gamble.',
  'vagetation': 'There is not much vegetation in deserts.',
  'vegetation': 'There is not much vegetation in deserts.',
  'classify': 'Librarians spend a lot of time classifying books.',
  'flock': 'Sheep usually flock together.',
  'tame': 'The tame lions can perform alongside the actors.',
  'alumni': 'Many alumni attended the university anniversary.',
  'dilute': 'The nurse diluted the drug with saline solution.',
  'inherent': 'Polarity is inherent in a magnet.',
  'curriculum': 'The staff should work together to revise the school curriculum.',
  'bunch': 'I bought a bunch of lilacs.',
  'short-day': 'Soybean is a typical short-day crop.',
  'decompose': 'Heat can be applied to decompose organic compounds.',
  'subsistence': 'The standard of living was close to subsistence.',
  'boil': 'The watched pot never boils.',
  'scrutinise': 'The committee scrutinised the proposal carefully.',
  'precise': 'The meeting began at that precise moment.',
  'cable': 'The cable car crossed the valley.',
  'alga': 'Some algae are edible.',
  'circulation': 'Sea-surface temperature and atmospheric circulation are strongly coupled.',
  'derive': 'I derived a lot of pleasure from meeting new people at college.',
  'pluck': 'She plucked a rose for her lover.',
  'rear': 'Most farmers in this area rear sheep.',
  'bud': 'The roses are in bud.',
  'hay': 'Farmers make hay while the sun shines.',
  'mature': 'You are a mature person now; you are no longer a boy.',
  'parasite': 'The life of the parasite is maintained by blood-feeding mosquitoes.',
  'dragon': 'Dragons are described as monsters in many Western stories.',
  'galaxy': 'The Sun is only a very small star in the Galaxy.',
  'excrete': 'The function of the kidneys is to excrete waste products.',
  'intelligence': 'Use your intelligence and you will succeed one day.',
  'circuit': 'For many years, he worked on the electrical circuit.',
  'cataclysmic': 'The disappearance of the dinosaurs may be linked to a cataclysmic event.',
  'enhance': 'A good IELTS score enhances my chances of receiving an offer.',
  'impetus': 'The car rolled down the bridge under its own impetus.',
  'abuse': 'It is easy to abuse one\'s power.',
  'scheme': 'All the schemes and intrigues were doomed to failure.',
  'brute': 'We all want to punish the brute.',
  'subgroup': 'According to a subgroup analysis, violence can produce more violence.',
  'lay': 'They lay eggs from July to the middle of August.',
  'fauna': 'The park is home to grizzly bears and other Rocky Mountain fauna.',
  'seal': 'Polar bears set off in search of their favourite meal: seals.',
  'coed': 'The study recruited a representative group of coeds.',
  'sphere': 'We move in different social spheres.',
  'ratio': 'The ratio of 3 to 9 is the same as that of 9 to 27.',
  'feudalism': 'Feudalism was not abolished in England until 1660.'
});

// A quality gate is intentionally conservative: terms and glosses may use
// Chinese (the source is bilingual), while examples must be clean English.
// Empty source examples are filled with the safe, POS-aware fallback above;
// malformed examples are replaced by a curated correction or the fallback.
const IELTS_SOURCE_BAD_TEXT_PATTERN = /\b(?:frigde|padal|vagetation|fertileze|diffcult|shivered|togather|labrarians|algea|atmosheric|cicruit|magent|sailine|persent|muture|drived|powser|util)\b/i;
const IELTS_VOCAB_TERM_PATTERN = /^[A-Za-z][A-Za-z]*(?:[- ][A-Za-z]+)*$/;
const IELTS_VOCAB_POS_PATTERN = /^(?:n|v|adj|adv|prep|conj|pron|det|num|phr|aux)\.?(?:\/(?:n|v|adj|adv|prep|conj|pron|det|num|phr|aux)\.?)*$/i;
function isIELTSVocabularyWordQuality(word) {
  if (!word || typeof word !== 'object') return false;
  const term = String(word.term || '').trim();
  const key = englishWordTermKey(term);
  const pos = String(word.pos || '').trim();
  const meaning = String(word.meaning || '').trim();
  const example = String(word.example || '').trim();
  if (!term || !IELTS_VOCAB_TERM_PATTERN.test(term) || IELTS_SOURCE_REJECT_TERMS.has(key)) return false;
  if (!pos || !IELTS_VOCAB_POS_PATTERN.test(pos)) return false;
  if (!meaning || meaning.toLowerCase() === key || IELTS_SOURCE_BAD_TEXT_PATTERN.test(meaning)) return false;
  if (example && (/\p{Script=Han}/u.test(example) || IELTS_SOURCE_BAD_TEXT_PATTERN.test(example))) return false;
  return true;
}
function normalizeIELTSSourcePos(value) {
  // A couple of rows contain an escaped word-boundary marker or a space
  // between labels ("\\bn." / "adj. n."). Normalize those harmless source
  // artefacts while leaving the original MIT payload untouched.
  return String(value || '').replace(/\\b/g, '').replace(/[\u0000-\u001f]/g, '').trim().replace(/\s+/g, '/');
}

const IELTS_DOWNLOADED_WORDS = IELTS_DOWNLOADED_VOCABULARY_SOURCE.map((entry, index) => {
  const sourceTerm = String(entry[0] || '').trim();
  const sourceKey = sourceTerm.toLowerCase();
  if (IELTS_SOURCE_REJECT_TERMS.has(sourceKey)) return null;
  const term = IELTS_SOURCE_TERM_FIXES[sourceKey] || sourceTerm;
  const termKey = term.toLowerCase();
  const pos = normalizeIELTSSourcePos(entry[1]) || 'n.';
  const rawMeaning = String(entry[2] || '').trim();
  const meaning = IELTS_SOURCE_MEANING_FIXES[sourceKey] || IELTS_SOURCE_MEANING_FIXES[termKey] || rawMeaning;
  const rawExample = String(entry[3] || '').trim();
  const correctedExample = IELTS_SOURCE_EXAMPLE_FIXES[sourceKey] || IELTS_SOURCE_EXAMPLE_FIXES[termKey];
  const normalizedExample = correctedExample || (rawExample && !/\p{Script=Han}/u.test(rawExample) && !IELTS_SOURCE_BAD_TEXT_PATTERN.test(rawExample)
    ? rawExample
    : englishWordExample(term, pos));
  const topic = String(entry[4] || '').trim();
  return {
    id: 'ielts-source-' + String(index + 1).padStart(4, '0'),
    term,
    pos,
    meaning: meaning || '雅思主题词汇：' + term,
    // The source is organised specifically around IELTS themes, rather than
    // claiming a potentially misleading single-word score for each item.
    band: '6.5–7.5',
    topic,
    phonetic: '',
    phoneticVerified: false,
    // A malformed bilingual sentence is worse than a short generated one.
    // The quality gate below makes this fallback explicit and deterministic.
    example: normalizedExample
  };
}).filter(word => word && word.term);
const IELTS_CURATED_TERM_KEYS = new Set(IELTS_WORD_BANK.concat(IELTS_WORD_BANK_EXTRA).map(word => englishWordTermKey(word.term)));
IELTS_WORD_BANK.push(...IELTS_DOWNLOADED_WORDS.filter(word => !IELTS_CURATED_TERM_KEYS.has(englishWordTermKey(word.term))));
// Definitions for the supplemental bank come from the open Datamuse lexical
// dataset at build time.  They are kept as plain text so the app remains
// offline-first; unlike the old placeholder records, each entry has a real
// part of speech and a concise English definition.
const IELTS_EXTRA_DICTIONARY = {"acknowledge":{"pos":"v","def":"(transitive) To admit the knowledge of; to recognize as a fact or truth; to declare one's belief in. (transitive) To own or recognize in a particular quality, character or relationship; to admit the claims or authority of; to give recognition to."},"acquisition":{"pos":"n","def":"The act or process of acquiring. The thing acquired or gained; a gain."},"aesthetic":{"pos":"adj","def":"Concerned with beauty, artistic effect, or appearance. (rarely proscribed) Beautiful or appealing to one's sense of beauty or art."},"adaptation":{"pos":"n","def":"(uncountable) The process of adapting something or becoming adapted to a situation; adjustment, modification. (countable) A change that is made or undergone to suit a condition or environment."},"agricultural":{"pos":"adj","def":"Of or pertaining to agriculture. A product or commodity from agriculture."},"accommodate":{"pos":"v","def":"(transitive) To provide housing for. (transitive) To provide sufficient space for."},"accompany":{"pos":"v","def":"(transitive) To go with or attend as a companion or associate; to keep company with; to go along with. (transitive) To supplement with; add to."},"accessibility":{"pos":"n","def":"The quality of being accessible, or of admitting approach; receptiveness. (computing, web design) Features that increase software usability for users with certain impairments."},"accordingly":{"pos":"adv","def":"(conjunctive) In natural sequence; consequently; so. (manner) Agreeably; correspondingly; suitably"},"administrative":{"pos":"adj","def":"Of or relating to administering or administration."},"align":{"pos":"v","def":"(transitive) To adjust to a line; to range or form in line; to bring into line. (transitive) To organize in a consistent, defined way, perhaps in an abstract sense."},"albeit":{"pos":"conj","def":"Although; even though.","phon":""},"amplify":{"pos":"v","def":"(transitive) To render larger, more extended, or more intense. (transitive) To increase the amplitude of something, especially of an electric current."},"arise":{"pos":"v","def":"(intransitive) To come up from one's bed or place of repose; to get up. (intransitive) To spring up; to come into action, being, or notice; to become operative, sensible, or visible; to begin to act a part; to present itself."},"alleviate":{"pos":"v","def":"(transitive) To reduce or lessen the severity of a pain or difficulty. (transitive), (finance) to pay down partially."},"applicable":{"pos":"adj","def":"Suitable for application, relevant."},"analogous":{"pos":"adj","def":"Having analogy, the status of an analogue; corresponding to something else; bearing some resemblance or similar proportion (often followed by \"to\".) (biology) Functionally similar, but arising through convergent evolution rather than being homologous."},"appreciate":{"pos":"v","def":"(transitive) To view as valuable. (transitive) To be grateful or thankful for."},"amend":{"pos":"v","def":"(transitive) To make better; improve. (transitive) To make a formal alteration (in legislation, a report, etc.) by adding, deleting, or rephrasing."},"aspire":{"pos":"v","def":"(intransitive) To have a strong desire or ambition to achieve something. (intransitive, archaic, literary) To move upward; to be very tall."},"assemble":{"pos":"v","def":"(transitive) To put together. (ergative) To gather as a group."},"assert":{"pos":"v","def":"To declare with assurance or plainly and strongly; to state positively. To maintain or defend, as a cause or a claim, by words or measures; to vindicate a claim or title to."},"attain":{"pos":"v","def":"(transitive) To gain (an object or desired result). (transitive) To reach or come to, by progression or motion; to arrive at (a place, time, state, etc.)."},"autonomous":{"pos":"adj","def":"Self-governing. Intelligent, sentient, self-aware, thinking, feeling, governing independently. Acting on one's own or independently; of a child, acting without being governed by parental or guardian rules."},"attitude":{"pos":"n","def":"(figurative) Disposition or state of mind. (Canada, US, UK, Philippines, informal) Unpleasant behavior."},"beneficial":{"pos":"adj","def":"Helpful or good to something or someone. Something that provides a benefit."},"capability":{"pos":"n","def":"The power or ability to generate an outcome. (computing) A digital token allowing a user or process to interact in a specified way with an object that is subject to access control."},"cease":{"pos":"v","def":"(formal, intransitive) To stop. (formal, transitive) To stop doing (something)."},"articulate":{"pos":"v","def":"(ambitransitive) To speak clearly; to enunciate. (transitive) To make clear or effective."},"clarify":{"pos":"v","def":"(by extension) To make or become clear or easily understood; to explain or resolve in order to remove doubt or obscurity. (ergative, of liquids, such as wine or syrup) To make or become clear or bright by freeing from impurities or turbidity."},"compensate":{"pos":"v","def":"To pay or reward someone in exchange for work done or some other consideration. (ambitransitive) To make up for; to do something in place of something else; to correct, satisfy; to reach an agreement such that the scales are literally or (metaphorically) balanced; to equalize or make even."},"commodity":{"pos":"n","def":"(business) Anything movable (a good) that is bought and sold. (economics) Raw materials, agricultural and other primary products as objects of large-scale trading in specialized exchanges."},"collaborate":{"pos":"v","def":"To work together with others to achieve a common goal. To voluntarily cooperate treasonably, as with an enemy occupation force in one's country."},"complement":{"pos":"n","def":"The totality, the full amount or number which completes something. (nautical) The whole working force of a vessel."},"compatible":{"pos":"adj","def":"Able to get along well. Capable of easy interaction."},"conceivable":{"pos":"adj","def":"Capable of being conceived or imagined."},"component":{"pos":"n","def":"A smaller, self-contained part of a larger entity. Often refers to a manufactured object that is part of a larger device. Making up a larger whole."},"complexity":{"pos":"n","def":"(uncountable) The state of being complex; intricacy; entanglement. (countable) That which is and renders complex; intricacy; complication."},"confer":{"pos":"v","def":"(transitive) To grant as a possession; to bestow. (intransitive) To talk together, to consult, discuss; to collogue."},"consent":{"pos":"v","def":"(intransitive) To express willingness, to give permission. Voluntary agreement or permission."},"consecutive":{"pos":"adj","def":"Following, in succession, without interruption. Having some logical sequence."},"considerable":{"pos":"adj","def":"Significant; worth considering. Large in amount."},"confine":{"pos":"v","def":"(transitive) To restrict (someone or something) to a particular scope or area; to keep in or within certain bounds. (chiefly in the plural) A boundary or limit."},"constitute":{"pos":"v","def":"(transitive) To make up; to compose; to form. (transitive) To set up; to establish; to enact."},"consistency":{"pos":"n","def":"Reliability or uniformity; the quality of being consistent. Correspondence or compatibility."},"contemporary":{"pos":"adj","def":"Modern, of the present age (shorthand for ‘contemporary with the present’). From the same time period, coexistent in time; contemporaneous."},"contradict":{"pos":"v","def":"To deny the truth or validity of (a statement or statements). To oppose (a person) by denying the truth or pertinence of a given statement."},"conventional":{"pos":"adj","def":"Pertaining to a convention, as in following generally accepted principles, methods and behaviour. Ordinary, commonplace."},"comprise":{"pos":"v","def":"(transitive) To be made up of; to consist of (especially a comprehensive list of parts). (sometimes proscribed, usually in the passive) To compose; to constitute."},"convert":{"pos":"v","def":"(transitive) To transform or change (something) into another form, substance, state, or product. (transitive) To change (something) from one use, function, or purpose to another."},"correspond":{"pos":"v","def":"(intransitive, constructed with to) To be equivalent or similar in character, quantity, quality, origin, structure, function etc. (intransitive, constructed with with) To exchange messages, especially by postal letter, over a period of time."},"credible":{"pos":"adj","def":"Believable or plausible. Dependable, trustworthy, or reliable."},"criterion":{"pos":"n","def":"A standard, test, or requirement by which individual things or people may be compared and judged; a gauge."},"cultivate":{"pos":"v","def":"To grow plants, notably crops. To turn or stir soil in preparation for planting or as a method of weed control between growing crop plants."},"deviate":{"pos":"v","def":"(intransitive) To go off course from; to change course; to change plans. (intransitive, figurative) To fall outside of, or part from, some norm; to stray."},"dilemma":{"pos":"n","def":"A circumstance in which a choice must be made between two or more alternatives that seem equally undesirable. Any difficult circumstance or problem."},"devise":{"pos":"v","def":"(transitive) To use one’s intellect to plan or design (something). (transitive) To leave (property) in a will."},"devote":{"pos":"v","def":"to give one's time, focus one's efforts, commit oneself, etc. entirely for, on, or to a certain matter; to consecrate. to consign over; to doom"},"deteriorate":{"pos":"v","def":"(intransitive) To grow worse; to be impaired in quality; to degenerate. (transitive) To make worse; to make inferior in quality or value; to impair."},"dominant":{"pos":"adj","def":"Ruling; governing; prevailing Predominant, common, prevalent, of greatest importance."},"dimension":{"pos":"n","def":"A measure of spatial extent in a particular direction, such as height, width or breadth, or depth. A single aspect of a given thing."},"elaborate":{"pos":"adj","def":"Complex, detailed, or sophisticated. Intricate, fancy, flashy, or showy."},"differentiate":{"pos":"v","def":"(transitive) To show or be the difference or distinction between things. (transitive) To recognize as different or distinct."},"emerge":{"pos":"v","def":"(intransitive) To come into view. (intransitive) To become known."},"dynamic":{"pos":"adj","def":"Changing; active; in motion. Able to change and adapt."},"duration":{"pos":"n","def":"An amount of time or a particular time interval. (in the singular, not followed by \"of\") The time taken for the current situation to end, especially the current war."},"eliminate":{"pos":"v","def":"(transitive) To completely remove, get rid of, put an end to. (transitive) To exclude (from investigation or from further competition)."},"encounter":{"pos":"v","def":"(transitive) To meet (someone) or find (something), especially unexpectedly. A meeting, especially one that is unplanned or unexpected."},"enforce":{"pos":"v","def":"To keep up, impose or bring into effect something, not necessarily by force. To give strength or force to; to affirm, to emphasize."},"endure":{"pos":"v","def":"(intransitive) To continue or carry on, despite obstacles or hardships; to persist. (transitive) To tolerate or put up with something unpleasant."},"ensure":{"pos":"v","def":"(intransitive) To make sure or certain of something (usually some future event or condition). (transitive, obsolete) To make a pledge to (someone); to promise, guarantee (someone of something); to assure."},"emphasize":{"pos":"v","def":"(transitive) To stress, give emphasis or extra weight to (something)."},"ethical":{"pos":"adj","def":"(not comparable) Of or relating to the accepted principles of right and wrong, especially those of some organization or profession. (comparable) Morally approvable; good."},"enormous":{"pos":"adj","def":"Extremely large; greatly exceeding the common size, extent, etc. (obsolete) Deviating from the norm; unusual, extraordinary."},"expose":{"pos":"v","def":"(transitive) To reveal, uncover, make visible, bring to light, introduce (to). (transitive) To subject photographic film to light thereby recording an image."},"exhibit":{"pos":"v","def":"(transitive) To display or show (something) for others to see, especially at an exhibition or contest. (transitive) To demonstrate."},"external":{"pos":"adj","def":"Outside of something; on the exterior. (anatomy) Situated near or toward the surface of the body."},"extract":{"pos":"n","def":"Something that is extracted or drawn out. A portion of a book or document, incorporated distinctly in another work; a citation; a quotation."},"flexible":{"pos":"adj","def":"Capable of adapting or changing to suit new or modified conditions or situations. Capable of being flexed or bent without breaking; able to be turned or twisted without breaking."},"flourish":{"pos":"v","def":"(intransitive) To thrive or grow well. (intransitive) To prosper or fare well."},"format":{"pos":"n","def":"The layout of a publication or document. (by extension) The form of presentation of something."},"foster":{"pos":"v","def":"(transitive) To nurture or bring up offspring, or to provide similar parental care to an unrelated child. (transitive) To promote the development of something; to cultivate and grow a thing."},"genuine":{"pos":"adj","def":"Not counterfeit, spurious, false, or adulterated Belonging to, or proceeding from the original stock; native"},"frustrate":{"pos":"v","def":"(transitive) To disappoint or defeat; to vex by depriving of something expected or desired. (transitive) To hinder or thwart."},"framework":{"pos":"n","def":"(software engineering) A reusable piece of code (and, sometimes, other utilities) providing a standard environment within which an application can be implemented. (figuratively) A basic conceptual structure."},"generate":{"pos":"v","def":"(transitive) To bring into being; give rise to. (transitive) To produce as a result of a chemical or physical process."},"guarantee":{"pos":"n","def":"Anything that assures a certain outcome. A legal assurance of something, e.g. a security for the fulfillment of an obligation."},"gradual":{"pos":"adj","def":"Proceeding or advancing by small, slow, regular steps or degrees (Christianity) An antiphon or responsory after the epistle, in the Mass, which was sung on the steps, or while the deacon ascended the steps."},"hierarchy":{"pos":"n","def":"A social, religious, economic or political system or organization in which people or groups of people are ranked with some superior to others based on their status, authority or some other trait. A body of authoritative officials organized in nested ranks."},"identical":{"pos":"adj","def":"(not comparable) Bearing full likeness by having precisely the same set of characteristics; indistinguishable. (not comparable) Not different or other; not another or others; not different as regards self; selfsame; numerically identical."},"highlight":{"pos":"v","def":"(transitive) To make prominent; emphasize. (figurative) An especially significant or interesting detail or event or period of time."},"ignite":{"pos":"v","def":"(transitive) to set fire to (something), to light (something) (transitive) to spark off (something), to trigger"},"guideline":{"pos":"n","def":"A non-specific rule or principle that provides direction to action or behaviour. A plan or explanation to guide one in setting standards or determining a course of action."},"ideology":{"pos":"n","def":"Doctrine, philosophy, body of beliefs or principles belonging to an individual or group. (uncountable) The study of the origin and nature of ideas."},"impose":{"pos":"v","def":"(transitive) (figurative) To apply, enforce, or establish (something, often regarded as burdensome as a restriction or tax: see verb, sense 1.2.1) with authority. To encroach or intrude, especially in a manner regarded as unfair or unwarranted; to presume, to take advantage of; also, to be a burden or inconvenience."},"incline":{"pos":"v","def":"(chiefly intransitive, chiefly passive voice) To tend to do or believe something, or move or be moved in a certain direction, away from a point of view, attitude, etc. (transitive) To bend or move (something) out of a given plane or direction, often the horizontal or vertical."},"incidence":{"pos":"n","def":"The act of something happening; occurrence. The extent or the relative frequency of something happening."},"infrastructure":{"pos":"n","def":"The facilities, services and installations needed for the functioning of a community or society. (systems theory) An underlying base or foundation for a building, organization, or system."},"innovate":{"pos":"v","def":"(intransitive) To introduce something new to a particular environment; to do something new. (transitive) To introduce (something) as new."},"inspect":{"pos":"v","def":"To examine critically or carefully; especially, to search out problems or determine condition; to scrutinize. To view and examine officially."},"inherent":{"pos":"adj","def":"Naturally as part or consequence of something."},"integrity":{"pos":"n","def":"Steadfast adherence to a strict moral or ethical code. Trustworthiness; keeping one's word."},"interact":{"pos":"v","def":"(of people) To engage in communication and other shared activities (with someone). (of two or more things) To affect each other."},"intermediate":{"pos":"adj","def":"Being between two extremes, or in the middle of a range. Anything in an intermediate position."},"incentivize":{"pos":"v","def":"(transitive, business, economics) To provide incentives for; to encourage. (transitive, business, economics) To provide incentives to."},"interpret":{"pos":"v","def":"To explain or tell the meaning of; to translate orally into intelligible or familiar language or terms. applied especially to language, but also to dreams, signs, conduct, mysteries, etc. To decode the meaning of a topic and then act, whether to continue researching the topic, follow through, act in opposition, or further the understanding through sharing an interpretation."},"isolate":{"pos":"v","def":"(transitive) To set apart or cut off from others. (transitive) To place in quarantine or isolation."},"modest":{"pos":"adj","def":"Not bragging or boasting about oneself or one's achievements; unpretentious, humble. (especially of behavior or clothing) Intending to avoid the encouraging of sexual attraction in others."},"monitor":{"pos":"n","def":"(computing) A device similar to a television set used as to give a graphical display of the output from a computer. Someone who watches over something; a person in charge of something or someone."},"modify":{"pos":"v","def":"(transitive) To change part of. (transitive, grammar) To qualify the meaning of."},"mechanism":{"pos":"n","def":"(within a machine or machinery) Any mechanical means for the conversion or control of motion, or the transmission or control of power. Any combination of cams, gears, links, belts, chains and logical mechanical elements."},"neglect":{"pos":"v","def":"(transitive) To fail to care for or attend to something. (transitive) To fail to do or carry out something due to oversight or carelessness."},"mutual":{"pos":"adj","def":"Having the same relationship, each to each other. Reciprocal."},"interval":{"pos":"n","def":"A period of time. A distance in space."},"mature":{"pos":"adj","def":"Fully developed; grown up in terms of physical appearance, behaviour or thinking; ripe. Brought to a state of complete readiness."},"negligible":{"pos":"adj","def":"Able to be neglected, ignored or excluded from consideration; too small or unimportant to be of concern."},"notion":{"pos":"n","def":"Mental apprehension of whatever may be known, thought, or imagined; idea, concept. A sentiment; an opinion."},"occupy":{"pos":"v","def":"To possess or use the time or capacity of; to engage the service of. (transitive, of time) To take or use."},"ongoing":{"pos":"adj","def":"Presently or currently happening; being in progress. Something that is going on; a happening."},"orient":{"pos":"v","def":"(transitive) To build or place (something) so as to face eastward. (transitive, by extension) To align or place (a person or object) so that his, her, or its east side, north side, etc., is positioned toward the corresponding points of the compass; (specifically, surveying) to rotate (a map attached to a plane table) until the line of direction between any two of its points is parallel to the corresponding direction in nature."},"obscure":{"pos":"adj","def":"Difficult to understand; abstruse. Not well-known."},"objective":{"pos":"adj","def":"Not influenced by the strong emotions or prejudices. Based on observed facts; without purely subjective assessment."},"passive":{"pos":"adj","def":"Being subjected to an action without producing a reaction. Taking no action."},"persist":{"pos":"v","def":"(intransitive) To go on stubbornly or resolutely. (intransitive) To continue to exist."},"plausible":{"pos":"adj","def":"Seemingly or apparently valid, likely, or acceptable; conceivably true or likely. Obtaining approbation; specifically pleasing; apparently right; specious."},"portion":{"pos":"n","def":"An allocated amount. That which is divided off or separated, as a part from a whole; a separated part of anything."},"paradox":{"pos":"n","def":"An apparently self-contradictory statement, which can only be true if it is false, and vice versa. A counterintuitive conclusion or outcome."},"precise":{"pos":"adj","def":"(loosely) Both exact and accurate. (sciences, engineering, of data points, strictly) Consistent, clustered close together, agreeing with each other (this does not mean that they cluster near the true, correct, or accurate value)."},"pose":{"pos":"v","def":"(transitive) To place in an attitude or fixed position, for the sake of effect. (transitive) To constitute (a danger, a threat, a risk, etc.)."},"precede":{"pos":"v","def":"(transitive) To go before, go in front of. (transitive) To cause to be preceded; to preface; to introduce."},"priority":{"pos":"n","def":"An item's relative importance. A goal of a person or an organisation."},"preserve":{"pos":"v","def":"To protect; to keep from harm or injury. To save from decay by the use of some preservative substance, such as sugar or salt; to season and prepare (fruits, meat, etc.) for storage."},"proportionate":{"pos":"adj","def":"In proportion; proportional; commensurable. Harmonious and symmetrical."},"prospect":{"pos":"n","def":"The potential things that may come to pass, often favorable. The act of looking forward; foresight; anticipation."},"radical":{"pos":"adj","def":"Favoring fundamental change, or change at the root cause of a matter. (botany, not comparable) Pertaining to a root (of a plant)."},"pursue":{"pos":"v","def":"(transitive) To aim for, go after (a specified objective, situation etc.). (ambitransitive) To follow urgently, originally with intent to capture or harm; to chase."},"protocol":{"pos":"n","def":"(computing) A set of formal rules describing how to transmit or exchange data, especially across a network. The official rules and guidelines for heads of state and other dignitaries, governing accepted behaviour in relations with other diplomatic representatives or over affairs of state."},"random":{"pos":"adj","def":"Occurring for no particular reason; haphazard, unpredictable. (statistics) Involving an outcome which is impossible to predict, but which may be represented by a probability distribution; in the ideal case, involving outcomes which are equally likely."},"refine":{"pos":"v","def":"(ambitransitive) To improve in accuracy, delicacy, or excellence. (transitive) To purify of coarseness, vulgarity, inelegance, etc.; to polish."},"recover":{"pos":"v","def":"(transitive) To replenish to, resume (a good state of mind or body). (transitive) To get back, to regain (a physical thing; in astronomy and navigation, sight of a thing or a signal)."},"rational":{"pos":"adj","def":"Capable of reasoning. Logically sound; not self-contradictory or otherwise absurd."},"reliable":{"pos":"adj","def":"Suitable or fit to be relied on; worthy of dependence, reliance or trust; dependable, trustworthy Something or someone reliable or dependable"},"resolve":{"pos":"v","def":"(intransitive) To make a firm decision to do something. To become determined to reach a certain goal or take a certain action. (transitive) To find a solution to (a problem)."},"robust":{"pos":"adj","def":"Evincing strength and health; strong; (often, especially) both large and healthy. Able to withstand adverse conditions."},"reverse":{"pos":"adj","def":"Opposite, contrary; going in the opposite direction. Pertaining to engines, vehicle movement etc. moving in a direction opposite to the usual direction."},"reinforce":{"pos":"v","def":"(transitive) To strengthen, especially by addition or augmentation. (transitive) To encourage (a behavior or idea) through repeated stimulus."},"scenario":{"pos":"n","def":"An outline or model of an expected or supposed sequence of events. (dated) An outline of the plot of a dramatic or literary work."},"shift":{"pos":"n","def":"A movement to do something, a beginning. An act of shifting; a slight movement or change."},"schedule":{"pos":"n","def":"A procedural plan, usually but not necessarily tabular in nature, indicating a sequence of operations and the planned times at which those operations are to occur. A serial record of items, systematically arranged."},"simultaneous":{"pos":"adj","def":"Happening at the same moment. (mathematics, of a set of equations) To be solved for the same values of variables."},"sequence":{"pos":"n","def":"A set of things next to each other in a set order; a series. (uncountable) The state of being sequent or following; order of succession."},"sphere":{"pos":"n","def":"(mathematics) A surface in three dimensions consisting of all points equidistant from a center. . An object which appears to be bounded by a sphere; a round object, a ball."},"stable":{"pos":"n","def":"A building, wing or dependency set apart and adapted for lodging and feeding (and training) ungulates, especially horses. Relatively unchanging, steady, permanent; firmly fixed or established; consistent; not easily moved, altered, or destroyed."},"solely":{"pos":"adv","def":"Alone; exclusively."},"statistic":{"pos":"n","def":"A quantity calculated from the data in a sample, which characterises an important aspect in the sample (such as mean or standard deviation). A single item in a statistical study."},"supplement":{"pos":"n","def":"Something added; especially, such an addition added to make up for a deficiency. An extension to a document or publication that adds information, corrects errors, or brings up to date."},"surpass":{"pos":"v","def":"(transitive) To go beyond or exceed (something) in an adjudicative or literal sense."},"suspend":{"pos":"v","def":"To halt something temporarily. To discontinue or interrupt a function, task, position, or event."},"substitute":{"pos":"v","def":"(transitive) To use in place of something else, with the same function. (transitive, in the phrase \"substitute X for Y\") To use X in place of Y."},"target":{"pos":"n","def":"A goal or objective. A person, place, or thing that is frequently attacked, criticized, or ridiculed."},"temporary":{"pos":"adj","def":"Not permanent; existing only for a period or periods of time. Existing only for a short time or short times; transient, ephemeral."},"terminate":{"pos":"v","def":"(transitive) To end something, especially when left in an incomplete state. (transitive) To conclude."},"trace":{"pos":"n","def":"An act of tracing. An enquiry sent out for a missing article, such as a letter or an express package."},"territory":{"pos":"n","def":"A large extent or tract of land; for example a region, country or district. (Canada) One of three of Canada's federal entities, located in the country's Arctic, with fewer powers than a province and created by an act of Parliament rather than by the Constitution: Yukon, Northwest Territories, and Nunavut."},"transparent":{"pos":"adj","def":"(of a material or object) See-through, clear; having the property that light passes through it almost undisturbed, such that one can see through it clearly. (of a system or organization) Open, public; having the property that theories and practices are publicly visible, thereby reducing the chance of corruption."},"trajectory":{"pos":"n","def":"The path an object takes as it moves. (astronomy, space science) The path of a body as it travels through space."},"unique":{"pos":"adj","def":"(not comparable) Being the only one of its kind; unequaled, unparalleled or unmatched. A thing without a like; something unequalled or unparallelled; one of a kind."},"trigger":{"pos":"n","def":"(firearms) A finger-operated lever used to fire a gun. An event that initiates others, or incites a response."},"ultimate":{"pos":"adj","def":"Being the greatest possible; maximum; most extreme. (not comparable) Final; last in a series."},"urbanize":{"pos":"v","def":"To take up an urban way of life. To make something more urban in character."},"validity":{"pos":"n","def":"The state of being valid, authentic or genuine. State of having legal force."},"variation":{"pos":"n","def":"The act of varying; a partial change in the form, position, state, or qualities of a thing. A related but distinct thing."},"uniform":{"pos":"n","def":"A distinctive outfit that serves to identify members of a group, company, prison inmates, etc. (law enforcement) A uniformed police officer (as opposed to a detective)."},"welfare":{"pos":"n","def":"(uncountable) Health, safety, happiness and prosperity; well-being in any respect. (uncountable, chiefly US, informal) Shortened form of \"welfare spending\", \"welfare payments\", or \"welfare assistance\"."},"universal":{"pos":"adj","def":"Common to all members of a group or class. Common to all society; worldwide."},"whereas":{"pos":"n","def":"A clause, as in legal documents, stating whereas. (obsolete) Where (that)."},"yielding":{"pos":"adj","def":"Docile, or inclined to give way to pressure. A concession."},"biodiversity":{"pos":"n","def":"(ecology) The diversity (number and variety of species) of plant and animal life within a region."},"withdraw":{"pos":"v","def":"(transitive) To draw or pull (something) away or back from its original position or situation. (transitive) To take away or take back (something previously given or permitted); to remove, to retract."},"carbon":{"pos":"n","def":"(uncountable) The chemical element (symbol C) with an atomic number of 6. It can be found in pure form for example as graphite, a black, shiny and very soft material, or diamond, a colourless, transparent, crystalline solid and the hardest known material. (countable) An atom of this element, in reference to a molecule containing it."},"climate":{"pos":"n","def":"The long-term manifestations of weather and other atmospheric conditions in a given area or country, now usually represented by the statistical summary of its weather conditions during a period long enough to ensure that representative values are obtained (generally 30 years). (figuratively) The context in general of a particular political, moral, etc., situation."},"contaminate":{"pos":"v","def":"(transitive) To make something dangerous or toxic by introducing impurities or foreign matter. (transitive) To soil, stain, corrupt, or infect by contact or association."},"deforestation":{"pos":"n","def":"The process of destroying a forest and replacing it with something else, especially with an agricultural system. (computing theory) A transformation to eliminate intermediate data structures within a program."},"ecosystem":{"pos":"n","def":"A system formed by an ecological community and its environment that functions as a unit. The interconnectedness of organisms (plants, animals, microbes) with each other and their environment."},"emission":{"pos":"n","def":"Something which is emitted or sent out; issue. The act of emitting; the act of sending forth or putting into circulation."},"habitat":{"pos":"n","def":"(countable, biology) A range; a place where a species naturally occurs. (countable, biology) A terrestrial or aquatic area distinguished by geographic, abiotic and biotic features, whether entirely natural or semi-natural."},"fertility":{"pos":"n","def":"(uncountable) The condition, or the degree, of being fertile. (countable) The birthrate of a population; the number of live births per 1000 people per year."},"renewable":{"pos":"adj","def":"(of a resource) Sustainable; able to be regrown or renewed; having an ongoing or continuous source of supply. Able to be renewed; capable of renewal."},"conservation":{"pos":"n","def":"The act of preserving, guarding, or protecting; the keeping (of a thing) in a safe or entire state; preservation. Wise use of natural resources."},"scarcity":{"pos":"n","def":"(uncountable) The condition of something being scarce or deficient. (countable) An inadequate amount of something; a shortage."},"vulnerable":{"pos":"adj","def":"More or most likely to be exposed to the chance of being attacked or harmed, either physically or emotionally. Open to disclosing one's inner thoughts and feelings, acting in spite of one's instinct to self-preservation."},"sustainable":{"pos":"adj","def":"Able to be produced or sustained for an indefinite period without damaging the environment, or without depleting a resource; renewable. A renewable energy source."},"wellbeing":{"pos":"n","def":"Alternative form of well-being. [A state of health, happiness or prosperity.]"},"curriculum":{"pos":"n","def":"(US) The set of courses, coursework, and content offered at a school or university. (UK, Canada, Australia, Philippines) The set of standards schools are required to teach all students."},"literacy":{"pos":"n","def":"The ability to read and write. (by extension) The ability to understand and evaluate something."},"pedagogy":{"pos":"n","def":"The activities of educating, teaching or instructing. The profession of teaching."},"tuition":{"pos":"n","def":"(Canada, US, Philippines) A sum of money paid for instruction (such as in a private school, boarding school, university, or college). (Ireland, UK) The training or instruction provided by a teacher or tutor."},"scholarship":{"pos":"n","def":"A grant-in-aid to a student. The character or qualities of a scholar."},"workforce":{"pos":"n","def":"The total population of a country or region that is employed or employable. All the workers employed by a specific organization or state, or on a specific project."},"qualification":{"pos":"n","def":"The act or process of qualifying for a position, achievement etc. An ability or attribute that aids someone's chances of qualifying for something; specifically, completed professional training."},"employment":{"pos":"n","def":"The occupation or work for which one is used, and often paid. The state of being employed."},"revenue":{"pos":"n","def":"The total income received from a given source. All income generated for some political entity's treasury by taxation and other means."},"entrepreneur":{"pos":"n","def":"A person who sets up a business; generally, a person who owns and manages a business and assumes its financial risks. (now rare) A person who organizes concerts, plays, or other entertainments; the manager of a theatre or similar venue; an impresario."},"productivity":{"pos":"n","def":"The state of being productive, fertile, or efficient. The rate at which goods or services are produced by a standard population of workers; those workers' degree of efficiency."},"venture":{"pos":"n","def":"A risky or daring undertaking or journey. (transitive) To risk or offer."},"stakeholder":{"pos":"n","def":"(business) A person or organisation with a legitimate interest (a stake) in a given situation, action or enterprise. (law) A person such as a trustee, escrow agent or garnishee, who holds money or assets under trust for another party in a contractual agreement or as part of a claim."},"regulation":{"pos":"n","def":"(countable) A law or administrative rule, issued by an organization, used to guide or prescribe the conduct of members of that organization. (law, often in the plural) A type of law made by the executive branch of a government, usually as authorized by a statute made by the legislative branch giving the executive the authority to do so."},"policy":{"pos":"n","def":"A principle of behaviour, conduct which an entity (government, organization, etc.) applies or seeks to follow, especially as formally expressed by an authoritative body. A document describing such a policy."},"legislation":{"pos":"n","def":"A law which has been enacted by legislature or other governing body. The act of legislating; preparation and enactment of laws."},"migration":{"pos":"n","def":"An instance of moving to live in another place for a while. Seasonal moving of animals, as mammals, birds or fish, especially between breeding and non-breeding areas."},"governance":{"pos":"n","def":"The process, or the power, of governing; government or administration. The specific system by which a political system is ruled."},"inequality":{"pos":"n","def":"A condition or state (of social, cultural, or legal matters) that is not equal; especially, such a condition that is thereby also unfair. Absence of equality."},"consumer":{"pos":"n","def":"(economics) Someone who trades money for goods or services as an individual. (by extension) The consumer base of a product, service or business."},"demographic":{"pos":"n","def":"(chiefly in the plural) A demographic criterion: a characteristic used to classify people for statistical purposes, such as age, race, or gender. A demographic group: a collection of people sharing a value for a certain demographic criterion."},"population":{"pos":"n","def":"The people living within a political or geographical boundary. A count of the number of residents within a political or geographical boundary such as a town, a nation or the world."},"mainstream":{"pos":"adj","def":"Used or accepted broadly rather than by small portions of population, market, scientific community, etc. (usually with the) That which is common; the norm."},"heritage":{"pos":"n","def":"A tradition; a practice or set of values that is passed down from preceding generations through families or through institutional memory. An inheritance; property that may be inherited."},"minority":{"pos":"n","def":"Any subgroup that does not form a numerical majority. (sociology) A group of people seen as distinct who are subordinated and discriminated against in a society."},"identity":{"pos":"n","def":"The difference or character that marks off an individual or collective from the rest of the same kind; selfhood; the sense of who something or someone or oneself is, or the recurring characteristics that enable the recognition of such an individual or group by others or themselves. Sameness, identicalness; the quality or fact of (several specified things) being the same."},"linguistic":{"pos":"adj","def":"Of or relating to language. Of or relating to linguistics."},"participation":{"pos":"n","def":"The act of participating, of taking part in something. The process during which individuals, groups and organizations are consulted about or have the opportunity to become actively involved in a project or program of activity."},"prejudice":{"pos":"n","def":"(countable) An adverse judgment or opinion formed beforehand or without knowledge of the facts. (countable) A preconception, any preconceived opinion or feeling, whether positive or negative."},"perception":{"pos":"n","def":"The organisation, identification and interpretation of sensory information. Conscious understanding of something."},"psychological":{"pos":"adj","def":"Relating to the mind and behavior or to the mental, emotional, and behavioral characteristics pertaining to a specified person, group, or activity. Of or pertaining to psychology."},"behaviour":{"pos":"n","def":"British standard spelling of behavior."},"motivation":{"pos":"n","def":"An incentive or reason for doing something. Willingness of action especially in behavior."},"attention":{"pos":"n","def":"(uncountable) Mental focus. (countable) An action or remark expressing concern for or interest in someone or something, especially romantic interest."},"recall":{"pos":"v","def":"(transitive, intransitive) To call back (a situation, event, etc.) to one's mind; to remember; to recollect. Memory; the ability to remember."},"experiment":{"pos":"n","def":"A test under controlled conditions made to either demonstrate a known truth, examine the validity of a hypothesis, or determine the efficacy or likelihood of something previously untried. (intransitive) To conduct an experiment."},"cognitive":{"pos":"adj","def":"Relating to the part of mental functions that deals with logic, as opposed to affective which deals with emotions. Intellectual."},"observation":{"pos":"n","def":"The act of observing, and the fact of being observed (see observance) The act of noting and recording some event; or the record of such noting."},"perceive":{"pos":"v","def":"(transitive) To become aware of, through the physical senses, to see; to understand. To interpret something in a particular way."},"retain":{"pos":"v","def":"(transitive) Often followed by from: to hold back (someone or something); to check, to prevent, to restrain, to stop. (transitive) (education) To hold back (a pupil) instead of allowing them to advance to the next class or year; to keep back."},"reasoning":{"pos":"n","def":"(uncountable) The deduction of inferences or interpretations from premises, abstract thought, ratiocination; (countable) any instance of this, especially as a process leading to an action, motive. (countable) A Rastafari meeting held for the purposes of chanting, prayer and discussion."},"sample":{"pos":"n","def":"A part or snippet of something taken or presented for inspection, or shown as evidence of the quality of the whole; a specimen. (statistics) A subset or portion of a population that is systematically selected for measurement, observation, or questioning, with the objective of generating statistical information that accurately reflects the characteristics of the entire population."},"variable":{"pos":"adj","def":"(mathematics) Having no fixed quantitative value. (programming) A named memory location in which a program can store intermediate results and from which it can read them."},"methodology":{"pos":"n","def":"(loosely) A collection of methods, practices, procedures and rules used by those who work in some field. The implementation of such methods etc."},"analysis":{"pos":"n","def":"(countable) Decomposition into components in order to study (a complex thing, concept, theory, etc.). (countable) The result of such a process."},"outcome":{"pos":"n","def":"That which is produced or occurs as a result of an event or process. (education) The anticipated or desired results or evidence of a learning experience (often used in the phrase learning outcomes)."},"accuracy":{"pos":"n","def":"The state of being accurate; being free from error; exactness; correctness Exact conformity to truth, or to a rule or model; degree of conformity of a measure to a true or standard value."},"evidence":{"pos":"n","def":"Facts or observations presented in support of an assertion. (law) Anything admitted by a court to prove or disprove alleged matters of fact in a trial."},"evaluate":{"pos":"v","def":"(transitive) To draw conclusions from examining; to assess; to appraise. (transitive, mathematics, computing) To compute or determine the value of (an expression)."},"interpretation":{"pos":"n","def":"(countable) An act of interpreting or explaining something unclear; a translation; a version. (countable) A sense given by an interpreter; an exposition or explanation given; meaning."},"correlation":{"pos":"n","def":"(statistics) One of the several measures of the linear statistical relationship between two random variables, indicating both the strength and direction of the relationship. A reciprocal, parallel or complementary relationship between two or more comparable objects."},"chapter":{"pos":"n","def":"One of the main sections into which a published work is divided, especially a book. A section of a work, a collection of works, or fragments of works, often manuscripts or transcriptions, created by scholars or advocates, not the original authors, to aid in finding portions of the texts."},"notable":{"pos":"adj","def":"Worthy of note; remarkable; memorable; noted or distinguished. Easily noted (without connotations of value); clearly noticeable, conspicuous."},"reproduce":{"pos":"v","def":"(transitive or intransitive, biology) To generate or propagate offspring or organisms sexually or asexually. (transitive) To produce again; to recreate."},"nevertheless":{"pos":"adv","def":"(conjunctive) In spite of what preceded; yet."},"assumption":{"pos":"n","def":"The act of taking for granted, or supposing a thing without proof; a supposition; an unwarrantable claim. The thing supposed; a postulate, or proposition assumed; a supposition."},"distribution":{"pos":"n","def":"An act of distributing or state of being distributed. (business, marketing) The process by which goods get to final consumers over a geographical market, including storing, selling, shipping and advertising."},"furthermore":{"pos":"adv","def":"In addition; besides; further; what's more (i.e. to denote additional information)."},"thereby":{"pos":"adv","def":"(formal) By it; by that; by that means, or as a consequence of that."},"hence":{"pos":"adv","def":"(conjunctive) As a result; therefore, for this reason. (of a length of time) In the future from now."},"respectively":{"pos":"adv","def":"In a relative manner; often used when comparing array lists, where the term denotes that the items in the lists correspond to each other in the order they are given."},"predominantly":{"pos":"adv","def":"In a predominant manner. Most commonly or frequently by a large margin."},"dramatically":{"pos":"adv","def":"In a dramatic manner."},"approximately":{"pos":"adv","def":"Imprecise but close to in quantity or amount."},"overall":{"pos":"adv","def":"Generally; with everything considered. All-encompassing, all around."},"contrast":{"pos":"n","def":"(countable) A difference between two objects, people or concepts. (countable) Something that is opposite of or strikingly different from something else."},"whereby":{"pos":"adv","def":"By which. (nonstandard) Where, wherein, in which."},"slightly":{"pos":"adv","def":"(degree) To a small extent or degree. Slenderly; delicately."},"substantial":{"pos":"adj","def":"Large in size, quantity, or value; ample; significant. Not imaginary; real; actual; true; veritable."}};
const IELTS_EXTRA_POS_LABELS = { n: 'n.', v: 'v.', adj: 'adj.', adv: 'adv.', conj: 'conj.', prep: 'prep.' };
IELTS_WORD_BANK_EXTRA.forEach(word => {
  const dictionary = IELTS_EXTRA_DICTIONARY[word.term];
  if (!dictionary) return;
  word.pos = IELTS_EXTRA_POS_LABELS[dictionary.pos] || word.pos;
  word.meaning = dictionary.def ? '英文释义：' + dictionary.def : '学术语境词汇';
  word.phonetic = String(dictionary.phon || '');
  word.phoneticVerified = Boolean(word.phonetic);
  word.example = englishWordExample(word.term, word.pos);
});
IELTS_WORD_BANK.push(...IELTS_WORD_BANK_EXTRA);
// Terms are deduplicated case-insensitively so source variants such as
// `Pacific`/`pacific` cannot occupy two slots in the daily rotation.
const IELTS_WORD_BANK_DEDUPED = Array.from(new Map(IELTS_WORD_BANK.map(word => [englishWordTermKey(word.term), word])).values());
IELTS_WORD_BANK.splice(0, IELTS_WORD_BANK.length, ...IELTS_WORD_BANK_DEDUPED);
// Only this derived bank is used for new daily batches.  Keep the complete
// bank above for backwards-compatible ID/term resolution and reading hints.
const IELTS_DAILY_VOCABULARY_BANK = IELTS_WORD_BANK.filter(isIELTSVocabularyWordQuality);
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

  // Returns { ok: true } or { conflict: true, remote, remoteVersion } or { ok: false }
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
      return {
        conflict: true,
        remote: body.data.data,
        remoteVersion: Number.isInteger(body.data.version) ? body.data.version : null
      };
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
let dailyPlanViewDate = todayKey();
let dailyPlanCalendarMonth = todayKey().slice(0, 7);
let activeReadingLogTags = [];
let literatureView = 'overview';
let englishVocabFilter = 'all';
let englishVocabPage = 0;
let englishReadingState = { status: 'idle', message: '' };
// Keep one reading refresh in flight at a time.  The refresh traverses a
// search result and several summary endpoints, so a second click must not
// race the first one and overwrite the learner's active article.
let englishReadingRefreshInFlight = null;
// Automatic reading updates are session-level side effects.  Remember the
// local calendar day on which an automatic attempt was made so rerenders (the
// loading state, a successful response, or an offline error) cannot start a
// second request.  A new day gets one fresh attempt without persisting this
// bookkeeping into the learner's workspace data.
let englishReadingAutoRefreshAttemptedDate = '';
let englishWritingPromptId = 'writing-1';
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

function commaTitleHTML(value) {
  const title = String(value == null ? '' : value).trim();
  const commaSplit = title.match(/^([\s\S]*?[，,])\s*([\s\S]+)$/);
  if (!commaSplit) return escapeHTML(title);
  return '<span class="title-line">' + escapeHTML(commaSplit[1]) + '</span><span class="title-line">' + escapeHTML(commaSplit[2]) + '</span>';
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

function englishDaySeed(date = todayKey()) {
  return String(date).split('').reduce((hash, char) => ((hash * 31) + char.charCodeAt(0)) >>> 0, 7);
}

function englishShuffle<T>(items: T[], seed: number) {
  const output = items.slice();
  let state = seed || 1;
  for (let index = output.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    const current = output[index];
    output[index] = output[swapIndex];
    output[swapIndex] = current;
  }
  return output;
}

function englishWordTermKey(value) {
  return String(value == null ? '' : value).trim().toLowerCase();
}

function englishDateKey(value) {
  const key = String(value == null ? '' : value).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return '';
  const [year, month, day] = key.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? key : '';
}

function recentEnglishDate(value, today = todayKey()) {
  const key = englishDateKey(value);
  if (!key) return '';
  return key === today || key === shiftDateKey(today, -1) ? key : '';
}

function normalizeEnglishChallengeState(english) {
  const challenge = english.challenge || (english.challenge = cloneData(DEFAULT_DATA.learning.english.challenge));
  const before = JSON.stringify(challenge);
  const total = Math.max(1, Math.floor(Number(challenge.total) || 100));
  const current = Math.max(0, Math.min(total, Math.floor(Number(challenge.current) || 0)));
  const lastCompletedDate = recentEnglishDate(challenge.lastCompletedDate);
  const rawStreak = Math.max(0, Math.floor(Number(challenge.streak) || 0));
  challenge.total = total;
  challenge.current = current;
  challenge.lastCompletedDate = lastCompletedDate;
  // A streak without a recent completion date is stale (the starter data
  // used to ship with a non-zero streak and an empty date).
  challenge.streak = lastCompletedDate ? Math.max(1, rawStreak) : 0;
  return before !== JSON.stringify(challenge);
}

function normalizeEnglishListeningState(english) {
  const listening = english.listening || (english.listening = cloneData(DEFAULT_DATA.learning.english.listening));
  const defaults = DEFAULT_DATA.learning.english.listening;
  const before = JSON.stringify(listening);
  const sourceQueue = Array.isArray(listening.queue) ? listening.queue : [];
  const queue = [];
  const seen = new Set();

  // Keep user-created/custom entries first, then append any missing seeded
  // sessions. This upgrades old three-item snapshots without losing progress.
  sourceQueue.forEach((entry, index) => {
    if (!entry || typeof entry !== 'object') return;
    const id = String(entry.id || 'listen-' + (index + 1));
    if (seen.has(id)) return;
    seen.add(id);
    queue.push({
      ...entry,
      id,
      title: String(entry.title || 'IELTS listening practice'),
      source: String(entry.source || '精选听力'),
      level: String(entry.level || 'Band 7.0'),
      duration: String(entry.duration || '10:00'),
      skill: String(entry.skill || '听力理解训练')
    });
  });
  defaults.queue.forEach(entry => {
    const id = String(entry.id);
    if (seen.has(id)) return;
    seen.add(id);
    queue.push(cloneData(entry));
  });

  const target = 12;
  // Keep the queue bounded to the weekly target. Older snapshots can contain
  // duplicate/custom rows; the first twelve unique sessions are the ones the
  // learner should see for this cycle.
  const boundedQueue = queue.slice(0, target);
  const requestedCompleted = Number(listening.completed);
  const completedFromStatus = boundedQueue.filter(entry => entry.status === 'done').length;
  const rawCompleted = Number.isFinite(requestedCompleted) ? Math.floor(requestedCompleted) : completedFromStatus;
  const completed = Math.max(0, Math.min(target, rawCompleted));
  // Status is derived from the completion count so legacy states such as
  // completed=8 with a three-item queue become actionable and consistent.
  boundedQueue.forEach((entry, index) => {
    entry.status = index < completed ? 'done' : (index === completed && completed < target ? 'next' : 'locked');
  });
  listening.target = target;
  listening.completed = completed;
  listening.queue = boundedQueue;
  const lastCompletedDate = recentEnglishDate(listening.lastCompletedDate);
  const rawStreak = Math.max(0, Math.floor(Number(listening.streak) || 0));
  listening.lastCompletedDate = lastCompletedDate;
  // Do not display a stale listening streak after the date rolls over.
  listening.streak = lastCompletedDate ? Math.max(1, rawStreak) : 0;
  listening.lastSyncedAt = typeof listening.lastSyncedAt === 'string' ? listening.lastSyncedAt : '';
  return before !== JSON.stringify(listening);
}

function normalizeEnglishWritingState(english) {
  const writing = english.writing || (english.writing = cloneData(DEFAULT_DATA.learning.english.writing));
  const before = JSON.stringify(writing);
  const weeklyGoal = Math.max(1, Math.floor(Number(writing.weeklyGoal) || 2));
  writing.weeklyGoal = weeklyGoal;
  if (!Array.isArray(writing.prompts)) writing.prompts = cloneData(DEFAULT_DATA.learning.english.writing.prompts);
  const promptIds = new Set();
  writing.prompts = writing.prompts.map((prompt, index) => {
    if (!prompt || typeof prompt !== 'object') return null;
    const id = String(prompt.id || 'writing-' + (index + 1)).trim();
    if (!id || promptIds.has(id)) return null;
    promptIds.add(id);
    return {
      ...prompt,
      id,
      type: String(prompt.type || 'Writing'),
      title: String(prompt.title || 'IELTS writing practice'),
      focus: String(prompt.focus || '论证结构'),
      time: Math.max(1, Math.floor(Number(prompt.time) || 30)),
      status: ['next', 'planned', 'done'].includes(prompt.status) ? prompt.status : 'planned'
    };
  }).filter(Boolean);
  if (!Array.isArray(writing.drafts)) writing.drafts = [];
  writing.drafts = writing.drafts.map((draft, index) => {
    if (!draft || typeof draft !== 'object') return null;
    const promptId = String(draft.promptId || '').trim();
    if (!promptId) return null;
    return {
      ...draft,
      id: String(draft.id || 'writing-draft-' + (index + 1)),
      promptId,
      text: String(draft.text || ''),
      updatedAt: String(draft.updatedAt || '')
    };
  }).filter(Boolean);
  const statusCompletedIds = writing.prompts.filter(prompt => prompt.status === 'done').map(prompt => prompt.id);
  const explicitCompletedIds = Array.isArray(writing.completedPromptIds)
    ? writing.completedPromptIds.map(id => String(id || '').trim()).filter(Boolean)
    : [];
  const completedPromptIds = Array.from(new Set(explicitCompletedIds.concat(statusCompletedIds)));
  writing.completedPromptIds = completedPromptIds;
  // Legacy snapshots had only a numeric counter. If there is no prompt ID to
  // attribute it to, discard the phantom count so completion cannot be
  // double-counted later.
  writing.completed = Math.min(weeklyGoal, completedPromptIds.length);
  writing.lastReviewedAt = typeof writing.lastReviewedAt === 'string' ? writing.lastReviewedAt : '';
  return before !== JSON.stringify(writing);
}

function englishHistoryTimestamp(value, fallbackDate = '') {
  const parsed = new Date(value || '');
  if (!Number.isNaN(parsed.getTime())) {
    if (todayKey(parsed) === todayKey() && parsed.getTime() > Date.now() + 5 * 60 * 1000) return new Date().toISOString();
    return parsed.toISOString();
  }
  const dateKey = englishDateKey(fallbackDate);
  if (dateKey) return dateKey === todayKey() ? new Date().toISOString() : new Date(dateKey + 'T12:00:00').toISOString();
  return new Date().toISOString();
}

function normalizeEnglishHistoryState(english) {
  const before = JSON.stringify(english.history || []);
  const allowedModules = new Set(['vocab', 'listening', 'reading', 'writing']);
  const seen = new Set();
  const history = (Array.isArray(english.history) ? english.history : []).map((entry, index) => {
    if (!entry || typeof entry !== 'object') return null;
    const module = String(entry.module || '').trim();
    const title = String(entry.title || '').trim();
    if (!allowedModules.has(module) || !title) return null;
    const occurredAt = englishHistoryTimestamp(entry.occurredAt, entry.date);
    const key = String(entry.key || '').trim();
    const id = String(entry.id || key || 'english-history-' + index).trim();
    const identity = key || id;
    if (!identity || seen.has(identity)) return null;
    seen.add(identity);
    return {
      id,
      key,
      module,
      title,
      detail: String(entry.detail || ''),
      sourceId: String(entry.sourceId || ''),
      date: todayKey(new Date(occurredAt)),
      occurredAt
    };
  }).filter(Boolean).sort((a, b) => String(b.occurredAt).localeCompare(String(a.occurredAt))).slice(0, 160);
  english.history = history;
  return before !== JSON.stringify(history);
}

function seedEnglishHistoryState(english) {
  if (Array.isArray(english.history) && english.history.length) return false;
  const seeded = [];
  const vocab = english.vocab || {};
  const reviewedWords = (vocab.words || []).filter(word => word.familiar && word.lastReviewed);
  if (reviewedWords.length) {
    const latest = reviewedWords.map(word => englishHistoryTimestamp(word.lastReviewed)).sort().at(-1);
    seeded.push({ id: 'history-vocab-' + todayKey(new Date(latest)), key: 'vocab:' + todayKey(new Date(latest)), module: 'vocab', title: '单词学习', detail: '熟悉 ' + reviewedWords.length + ' / ' + (vocab.dailyTarget || 100) + ' 词', sourceId: '', date: todayKey(new Date(latest)), occurredAt: latest });
  }
  const listening = english.listening || {};
  if (englishDateKey(listening.lastCompletedDate)) {
    const completedIndex = Math.max(0, Math.min((listening.queue || []).length - 1, (Number(listening.completed) || 1) - 1));
    const item = (listening.queue || [])[completedIndex];
    seeded.push({ id: 'history-listening-' + (item?.id || listening.lastCompletedDate), key: 'listening:' + (item?.id || listening.lastCompletedDate), module: 'listening', title: '完成听力训练', detail: item ? item.title : '完成一组听力练习', sourceId: item?.id || '', date: listening.lastCompletedDate, occurredAt: englishHistoryTimestamp(listening.lastSyncedAt, listening.lastCompletedDate) });
  }
  (english.reading?.articles || []).forEach(article => {
    if (!englishDateKey(article.lastReadDate)) return;
    seeded.push({ id: 'history-reading-' + article.id, key: 'reading:' + article.id, module: 'reading', title: '完成阅读', detail: article.title || '完成一篇精读', sourceId: article.id || '', date: article.lastReadDate, occurredAt: englishHistoryTimestamp('', article.lastReadDate) });
  });
  const prompts = new Map((english.writing?.prompts || []).map(prompt => [String(prompt.id), prompt]));
  (english.writing?.drafts || []).forEach(draft => {
    if (!draft.completedAt) return;
    const prompt = prompts.get(String(draft.promptId));
    const occurredAt = englishHistoryTimestamp(draft.completedAt);
    seeded.push({ id: 'history-writing-' + draft.promptId, key: 'writing:' + draft.promptId, module: 'writing', title: '完成写作', detail: prompt?.title || '完成一篇写作练习', sourceId: draft.promptId || '', date: todayKey(new Date(occurredAt)), occurredAt });
  });
  if (!seeded.length) return false;
  english.history = seeded;
  normalizeEnglishHistoryState(english);
  return true;
}

function recordEnglishHistory(module, title, detail, key, sourceId = '') {
  const english = DATA?.learning?.english;
  if (!english) return;
  normalizeEnglishHistoryState(english);
  const now = new Date().toISOString();
  const stableKey = String(key || module + ':' + uid());
  const existing = english.history.find(entry => entry.key === stableKey);
  if (existing) {
    existing.title = String(title || existing.title);
    existing.detail = String(detail || existing.detail);
    existing.sourceId = String(sourceId || existing.sourceId || '');
    existing.date = todayKey();
    existing.occurredAt = now;
  } else {
    english.history.unshift({ id: uid(), key: stableKey, module, title: String(title || ''), detail: String(detail || ''), sourceId: String(sourceId || ''), date: todayKey(), occurredAt: now });
  }
  normalizeEnglishHistoryState(english);
}

function recordEnglishListeningCompletion(item) {
  const listening = DATA?.learning?.english?.listening;
  if (!listening || !item || item.status !== 'next') return false;
  const today = todayKey();
  const previousDate = recentEnglishDate(listening.lastCompletedDate, today);
  const previousStreak = Math.max(0, Math.floor(Number(listening.streak) || 0));
  item.status = 'done';
  listening.completed = Math.min(Number(listening.target) || 12, (Number(listening.completed) || 0) + 1);
  const following = (listening.queue || []).find(entry => entry.status === 'locked');
  if (following) following.status = 'next';
  if (previousDate === today) listening.streak = Math.max(1, previousStreak);
  else if (previousDate === shiftDateKey(today, -1)) listening.streak = previousStreak > 0 ? previousStreak + 1 : 1;
  else listening.streak = 1;
  listening.lastCompletedDate = today;
  listening.lastSyncedAt = new Date().toISOString();
  recordEnglishHistory('listening', '完成听力训练', (item.title || '一组听力练习') + (item.skill ? ' · ' + item.skill : ''), 'listening:' + item.id, item.id);
  return true;
}

function resetEnglishListeningProgress() {
  const listening = DATA?.learning?.english?.listening;
  if (!listening) return false;
  listening.completed = 0;
  (listening.queue || []).forEach((item, index) => { item.status = index === 0 ? 'next' : 'locked'; });
  listening.streak = 0;
  listening.lastCompletedDate = '';
  listening.lastSyncedAt = new Date().toISOString();
  return true;
}

function recordEnglishWritingCompletion(promptId, text) {
  const writing = DATA?.learning?.english?.writing;
  if (!writing) return { ok: false, reason: 'missing' };
  const id = String(promptId || '').trim();
  const content = String(text || '').trim();
  if (!id || !content) return { ok: false, reason: 'empty' };
  if (!Array.isArray(writing.completedPromptIds)) writing.completedPromptIds = [];
  const completedPromptIds = new Set(writing.completedPromptIds.map(value => String(value || '').trim()).filter(Boolean));
  if (completedPromptIds.has(id)) return { ok: false, reason: 'duplicate' };
  const weeklyGoal = Math.max(1, Math.floor(Number(writing.weeklyGoal) || 2));
  if (completedPromptIds.size >= weeklyGoal) return { ok: false, reason: 'goal' };
  const now = new Date().toISOString();
  if (!Array.isArray(writing.drafts)) writing.drafts = [];
  const draft = writing.drafts.find(entry => String(entry.promptId || '') === id);
  if (draft) {
    draft.text = String(text);
    draft.updatedAt = now;
    draft.completedAt = now;
  } else {
    writing.drafts.push({ id: uid(), promptId: id, text: String(text), updatedAt: now, completedAt: now });
  }
  completedPromptIds.add(id);
  writing.completedPromptIds = Array.from(completedPromptIds);
  writing.completed = Math.min(weeklyGoal, writing.completedPromptIds.length);
  writing.lastReviewedAt = now;
  const prompt = (writing.prompts || []).find(entry => entry.id === id);
  if (prompt) prompt.status = 'done';
  recordEnglishHistory('writing', '完成写作', prompt?.title || '完成一篇写作练习', 'writing:' + id, id);
  return { ok: true };
}

function ensureEnglishStudyState(root = DATA) {
  const workspace = root;
  if (!workspace || !workspace.learning) return false;
  const before = JSON.stringify({
    english: workspace.learning.english,
    englishTasks: workspace.tasks?.english
  });
  if (!workspace.learning.english) workspace.learning.english = {};
  const english = workspace.learning.english;
  if (!english.profile) english.profile = cloneData(DEFAULT_DATA.learning.english.profile);
  if (!english.challenge) english.challenge = cloneData(DEFAULT_DATA.learning.english.challenge);
  if (!english.vocab) english.vocab = cloneData(DEFAULT_DATA.learning.english.vocab);
  if (!english.listening) english.listening = cloneData(DEFAULT_DATA.learning.english.listening);
  if (!english.reading) english.reading = cloneData(DEFAULT_DATA.learning.english.reading);
  if (!english.writing) english.writing = cloneData(DEFAULT_DATA.learning.english.writing);
  if (!Array.isArray(english.history)) english.history = [];
  if (!Array.isArray(english.listening.queue)) english.listening.queue = cloneData(DEFAULT_DATA.learning.english.listening.queue);
  if (!Array.isArray(english.reading.articles)) english.reading.articles = cloneData(DEFAULT_DATA.learning.english.reading.articles);
  if (!Array.isArray(english.reading.remoteTitles)) english.reading.remoteTitles = [];
  english.reading.remoteTitles = englishReadingRemoteTitleHistory(english.reading.remoteTitles);
  // Migrate older snapshots while keeping user flags (saved/read) intact.
  // The original seed cards remain available, while curated primers fill the
  // local cache so offline reading still spans a broad set of IELTS-like
  // genres. Keep the returned flag so a cleaned reading cache is persisted.
  const readingChanged = normalizeEnglishReadingLibrary(workspace);
  if (!Array.isArray(english.writing.prompts)) english.writing.prompts = cloneData(DEFAULT_DATA.learning.english.writing.prompts);
  if (!Array.isArray(english.writing.drafts)) english.writing.drafts = [];
  const challengeChanged = normalizeEnglishChallengeState(english);
  const listeningChanged = normalizeEnglishListeningState(english);
  const writingChanged = normalizeEnglishWritingState(english);
  let historyChanged = normalizeEnglishHistoryState(english);
  if (!english.history.length) historyChanged = seedEnglishHistoryState(english) || historyChanged;
  const vocab = english.vocab;
  const target = Math.max(20, Math.min(100, Number(vocab.dailyTarget) || 100));
  vocab.dailyTarget = target;
  let changed = false;
  if (!vocab.bankVersion || vocab.bankVersion === 'IELTS Academic Core · v1.0') {
    vocab.bankVersion = 'IELTS Academic Core + Topic Bank · v2.0';
    changed = true;
  }
  // Keep the starter task aligned with the focused IELTS target while leaving
  // any user-authored task wording untouched.
  (Array.isArray(workspace.tasks?.english) ? workspace.tasks.english : []).forEach(task => {
    if (task && (task.id === 'en2' || /^背单词\s*\d+\s*个$/.test(String(task.text || '').trim()))) {
      task.text = '背单词 ' + target + ' 个';
      changed = true;
    }
  });
  if (!Array.isArray(vocab.seenIds)) vocab.seenIds = [];
  if (!Array.isArray(vocab.lastBatchIds)) vocab.lastBatchIds = [];
  if (!Array.isArray(vocab.favorites)) vocab.favorites = [];
  if (!Array.isArray(vocab.words)) vocab.words = [];
  // Keep legacy/partial word records render-safe and make the list stable
  // across migrations (the generated examples are intentionally conservative).
  vocab.words = vocab.words.map((word, index) => ({
    ...word,
    id: String(word.id || 'ielts-user-' + index),
    term: String(word.term || '').trim(),
    meaning: String(word.meaning || ''),
    example: String(word.example || ''),
    phonetic: String(word.phonetic || ''),
    phoneticVerified: Boolean(word.phoneticVerified),
    pos: String(word.pos || ''),
    band: String(word.band || '7.0')
  })).filter(word => word.term);
  const today = todayKey();
  // New batches and canonical seen-ID bookkeeping use only quality-approved
  // records.  Custom/imported words remain untouched below.
  const bankById = new Map(IELTS_DAILY_VOCABULARY_BANK.map(word => [String(word.id), word]));
  const bankByTerm = new Map(IELTS_DAILY_VOCABULARY_BANK.map(word => [englishWordTermKey(word.term), word]));
  const hasCurrentBatch = vocab.dailyDate === today && vocab.words.length >= target && vocab.words.every(word => {
    if (!String(word?.id || '').startsWith('ielts-')) return true;
    const canonical = bankById.get(String(word.id)) || bankByTerm.get(englishWordTermKey(word.term));
    return Boolean(canonical && isIELTSVocabularyWordQuality(canonical));
  });
  vocab.words = vocab.words.map(word => {
    const wordId = String(word.id || '');
    const rawTermKey = englishWordTermKey(word.term);
    const repairedTermKey = IELTS_SOURCE_TERM_FIXES[rawTermKey] || rawTermKey;
    const bankWord = bankById.get(wordId) || bankByTerm.get(repairedTermKey);
    // Generated records that no longer pass the gate (for example the old
    // `frigde` source row) are removed; a corrected alias is repaired in place
    // so review/favourite flags from an existing snapshot survive migration.
    if (wordId.startsWith('ielts-') && !bankWord) {
      changed = true;
      return null;
    }
    // Generated batches are safe to refresh when the bundled lexical record
    // improves.  Custom/imported words keep their own notes untouched.
    if (bankWord && wordId.startsWith('ielts-')) {
      ['term', 'meaning', 'example', 'phonetic', 'phoneticVerified', 'pos', 'band'].forEach(field => {
        if (word[field] !== bankWord[field]) {
          word[field] = bankWord[field];
          changed = true;
        }
      });
    }
    return word;
  });
  const canonicalSeenIds = Array.from(new Set(vocab.seenIds.map(id => String(id)).filter(id => bankById.has(id))));
  const canonicalSeenTerms = new Set(canonicalSeenIds.map(id => englishWordTermKey(bankById.get(id).term)));
  const previousBatchIds = Array.from(new Set((vocab.lastBatchIds.length ? vocab.lastBatchIds : vocab.words.map(word => word.id)).map(id => String(id))));
  const previousBatchTerms = new Set(previousBatchIds.map(id => bankById.get(id)).filter(Boolean).map(word => englishWordTermKey(word.term)));
  if (vocab.seenIds.length !== canonicalSeenIds.length || vocab.seenIds.some((id, index) => String(id) !== canonicalSeenIds[index])) {
    vocab.seenIds = canonicalSeenIds;
    changed = true;
  }
  if (!hasCurrentBatch) {
    // Prefer never-seen words. When a cycle is exhausted, refill from older
    // words but always exclude the immediately preceding batch, preventing
    // adjacent-day repeats even when the bank is smaller than the target.
    const candidates = IELTS_DAILY_VOCABULARY_BANK.filter(word => {
      const term = englishWordTermKey(word.term);
      return !canonicalSeenTerms.has(term) && !previousBatchTerms.has(term);
    });
    const historical = IELTS_DAILY_VOCABULARY_BANK.filter(word => !previousBatchTerms.has(englishWordTermKey(word.term)));
    const seed = englishDaySeed(today);
    const selected = englishShuffle(candidates, seed).concat(
      englishShuffle(historical.filter(word => !candidates.includes(word)), seed ^ 0x9e3779b9)
    ).slice(0, target);
    // A very small imported/custom bank may still be unable to fill 100
    // unique entries. Reuse only as a final fallback, never from yesterday.
    if (selected.length < target) {
      const fallback = englishShuffle(historical, seed ^ 0x85ebca6b);
      let cursor = 0;
      while (selected.length < target && fallback.length) {
        selected.push(fallback[cursor % fallback.length]);
        cursor += 1;
      }
    }
    vocab.words = selected.map((word, index) => ({
      ...word,
      order: index,
      status: 'new',
      familiar: false,
      reviewCount: 0,
      lastReviewed: '',
      favorite: vocab.favorites.includes(word.id)
    }));
    vocab.seenIds = Array.from(new Set(canonicalSeenIds.concat(selected.map(word => word.id))));
    vocab.lastBatchIds = selected.map(word => word.id);
    vocab.dailyDate = today;
    vocab.lastGeneratedAt = new Date().toISOString();
    changed = true;
  } else {
    vocab.words = vocab.words.map((word, index) => ({
      ...word,
      order: Number.isFinite(Number(word.order)) ? Number(word.order) : index,
      status: ['new', 'learning', 'familiar'].includes(word.status) ? word.status : (word.familiar ? 'familiar' : 'new'),
      familiar: Boolean(word.familiar || word.status === 'familiar'),
      reviewCount: Math.max(0, Number(word.reviewCount) || 0),
      favorite: Boolean(word.favorite || vocab.favorites.includes(word.id))
    }));
    if (!vocab.lastBatchIds.length) {
      vocab.lastBatchIds = vocab.words.map(word => word.id);
      changed = true;
    }
  }
  return changed || challengeChanged || listeningChanged || writingChanged || historyChanged || readingChanged || before !== JSON.stringify({
    english: workspace.learning.english,
    englishTasks: workspace.tasks?.english
  });
}

const ENGLISH_READING_TOPICS = [
  { query: 'renewable energy', type: '环境与能源', genre: '科普说明', tag: 'climate' },
  { query: 'marine conservation', type: '环境与生态', genre: '研究综述', tag: 'biodiversity' },
  { query: '15-minute city', type: '城市与交通', genre: '政策评论', tag: 'urban-life' },
  { query: 'behavioral economics', type: '商业与社会', genre: '学术导读', tag: 'decision-making' },
  { query: 'epidemiology', type: '公共健康', genre: '科学说明', tag: 'health' },
  { query: 'evolution of languages', type: '语言与文化', genre: '历史观察', tag: 'linguistics' },
  { query: 'space exploration', type: '科学与探索', genre: '历史叙事', tag: 'space' },
  { query: 'sustainable architecture', type: '建筑与设计', genre: '案例研究', tag: 'design' },
  { query: 'psychology of music', type: '心理与艺术', genre: '跨学科文章', tag: 'creativity' },
  { query: 'Volga trade route', type: '历史与贸易', genre: '历史叙事', tag: 'history' }
];
const ENGLISH_READING_FETCH_TIMEOUT_MS = 12_000;
const ENGLISH_READING_REMOTE_TITLE_LIMIT = 180;
const ENGLISH_READING_REFRESH_TIMEOUT_MS = 30_000;

// Short, original learning primers keep the reading room useful when the
// network is unavailable.  They intentionally cover more than the usual
// technology/environment pair: IELTS Academic passages routinely move
// between science, society, history, culture and design.
const IELTS_READING_LIBRARY_VERSION = 'IELTS Reading Library · v2.0';
const IELTS_READING_OFFLINE_LIBRARY = [
  { id: 'article-7', type: '科学与探索', genre: '科普说明', source: 'IELTS Studio · curated primer', level: 'Band 7.0', minutes: 12, title: 'How citizen scientists help map the night sky', excerpt: 'Large surveys once belonged almost exclusively to professional observatories. Today, volunteers can classify images and report unusual objects through carefully designed online projects. Their contribution is valuable not because every observation is perfect, but because thousands of small observations can reveal patterns that a single research team might miss.', tags: ['science', 'participation'], url: 'https://en.wikipedia.org/wiki/Citizen_science', publishedAt: '2026-08-21', saved: false, read: false },
  { id: 'article-8', type: '公共健康', genre: '证据报告', source: 'IELTS Studio · curated primer', level: 'Band 7.5', minutes: 13, title: 'What wastewater can reveal about a city', excerpt: 'Wastewater monitoring gives public-health teams a population-level signal without asking every resident to complete a survey. Researchers examine chemical and biological traces, compare them over time and combine them with clinical data. The method cannot explain every individual case, yet it can provide an early warning when a health pattern is changing.', tags: ['health', 'evidence'], url: 'https://en.wikipedia.org/wiki/Wastewater-based_epidemiology', publishedAt: '2026-08-20', saved: false, read: false },
  { id: 'article-9', type: '语言与文化', genre: '历史观察', source: 'IELTS Studio · curated primer', level: 'Band 7.0', minutes: 11, title: 'Why languages keep borrowing words', excerpt: 'Borrowed words are often treated as signs of linguistic change rather than linguistic failure. Trade, migration, education and popular culture all create opportunities for one language to adopt a useful expression from another. Over time, speakers reshape the borrowed term so that it fits local sounds, grammar and social meaning.', tags: ['language', 'culture'], url: 'https://en.wikipedia.org/wiki/Loanword', publishedAt: '2026-08-19', saved: false, read: false },
  { id: 'article-10', type: '商业与社会', genre: '学术导读', source: 'IELTS Studio · curated primer', level: 'Band 7.5', minutes: 12, title: 'The quiet influence of default choices', excerpt: 'A default option can guide behaviour even when people remain free to choose something else. In workplaces, schools and digital services, the position of an option may reduce effort and make one path seem normal. Good policy therefore asks not only whether alternatives exist, but also whether they are visible and practical.', tags: ['economics', 'decision-making'], url: 'https://en.wikipedia.org/wiki/Default_effect', publishedAt: '2026-08-18', saved: false, read: false },
  { id: 'article-11', type: '建筑与设计', genre: '案例研究', source: 'IELTS Studio · curated primer', level: 'Band 7.5', minutes: 14, title: 'Designing buildings for a changing climate', excerpt: 'Climate-conscious architecture is more than adding a few efficient devices to a conventional building. Designers consider orientation, shade, ventilation, materials and the daily routines of occupants. A successful building can reduce energy demand while also making indoor spaces healthier and more comfortable.', tags: ['design', 'climate'], url: 'https://en.wikipedia.org/wiki/Sustainable_architecture', publishedAt: '2026-08-17', saved: false, read: false },
  { id: 'article-12', type: '农业与食物', genre: '问题解决', source: 'IELTS Studio · curated primer', level: 'Band 7.0', minutes: 12, title: 'Can rooftop farms feed a growing city?', excerpt: 'Rooftop gardens rarely replace rural agriculture, but they can shorten the distance between production and consumption. Their wider benefits may include insulation, storm-water management and opportunities for community education. The main constraints are structural safety, water access and the cost of maintaining a skilled workforce.', tags: ['food', 'cities'], url: 'https://en.wikipedia.org/wiki/Urban_agriculture', publishedAt: '2026-08-16', saved: false, read: false },
  { id: 'article-13', type: '心理与艺术', genre: '跨学科文章', source: 'IELTS Studio · curated primer', level: 'Band 7.5', minutes: 13, title: 'Why music can make places easier to remember', excerpt: 'Music links rhythm, emotion and attention, which may explain why a familiar song can bring back a detailed memory of a place. Researchers do not regard music as a universal memory switch; the effect depends on personal experience and context. Nevertheless, carefully chosen sound can support learning and orientation.', tags: ['psychology', 'arts'], url: 'https://en.wikipedia.org/wiki/Psychology_of_music', publishedAt: '2026-08-15', saved: false, read: false },
  { id: 'article-14', type: '历史与贸易', genre: '历史叙事', source: 'IELTS Studio · curated primer', level: 'Band 7.0', minutes: 12, title: 'The routes that moved more than goods', excerpt: 'Historic trade routes carried technologies, stories and social customs as well as spices, metals or textiles. Merchants depended on bridges between languages and legal traditions. The effects of a route could therefore continue long after its commercial importance had declined.', tags: ['history', 'migration'], url: 'https://en.wikipedia.org/wiki/Trade_route', publishedAt: '2026-08-14', saved: false, read: false },
  { id: 'article-15', type: '科技与伦理', genre: '观点评论', source: 'IELTS Studio · curated primer', level: 'Band 7.5', minutes: 13, title: 'When an algorithm decides what we notice', excerpt: 'Recommendation systems are built to rank information, yet ranking can gradually shape what users believe is important. Personalisation may save time, but it can also narrow the range of viewpoints encountered. Transparent explanations and deliberate opportunities to explore unfamiliar sources can make the trade-off easier to manage.', tags: ['technology', 'ethics'], url: 'https://en.wikipedia.org/wiki/Recommender_system', publishedAt: '2026-08-13', saved: false, read: false },
  { id: 'article-16', type: '海洋与气候', genre: '科学说明', source: 'IELTS Studio · curated primer', level: 'Band 7.5', minutes: 13, title: 'The chemistry behind a warming sea', excerpt: 'As the ocean absorbs carbon dioxide, its chemistry changes gradually rather than all at once. The resulting shift in acidity can make it harder for some organisms to build shells, while other species may adapt or move. Understanding these different responses is essential when scientists estimate future ecosystem change.', tags: ['ocean', 'climate'], url: 'https://en.wikipedia.org/wiki/Ocean_acidification', publishedAt: '2026-08-12', saved: false, read: false },
  { id: 'article-17', type: '教育与学习', genre: '研究摘要', source: 'IELTS Studio · curated primer', level: 'Band 7.0', minutes: 11, title: 'The case for retrieval practice', excerpt: 'Trying to recall an idea is often more demanding than rereading it, but that effort can strengthen later access to the information. Effective retrieval practice is usually brief and spaced across several sessions. It works best when learners receive feedback and vary the context in which they use a concept.', tags: ['education', 'learning'], url: 'https://en.wikipedia.org/wiki/Testing_effect', publishedAt: '2026-08-11', saved: false, read: false },
  { id: 'article-18', type: '人口与迁移', genre: '社会报告', source: 'IELTS Studio · curated primer', level: 'Band 7.0', minutes: 12, title: 'How migration reshapes regional food', excerpt: 'When people move, they bring recipes, ingredients and ways of organising meals. Local food cultures do not simply disappear or remain unchanged; they often develop through adaptation and exchange. Markets, restaurants and home kitchens each influence which new combinations become familiar.', tags: ['society', 'migration'], url: 'https://en.wikipedia.org/wiki/Food_culture', publishedAt: '2026-08-10', saved: false, read: false }
];

function safeReadingUrl(value, title = '') {
  const fallback = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(String(title || '').trim().replace(/\s+/g, '_'));
  try {
    const parsed = new URL(String(value || fallback), window.location.origin);
    return parsed.protocol === 'https:' ? parsed.href : fallback;
  } catch (_) {
    return fallback;
  }
}

function englishReadingTitleKey(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, '')
    .replace(/[_\s]+/g, ' ')
    .trim()
    .toLocaleLowerCase('en-US');
}

// The reading shelf is intentionally bilingual without pretending that a
// remote summary is a full article.  These compact reference translations are
// paired with the bundled IELTS primers; remotely fetched summaries receive a
// short comprehension rail below.  Keeping the pairings in the runtime also
// means the editorial spread still works when the browser is offline.
const ENGLISH_READING_TITLE_TRANSLATIONS = Object.freeze({
  'why small ai tools are changing the way people learn': '小型 AI 工具正在改变人们学习的方式',
  'the quiet return of wetlands in crowded cities': '拥挤城市中的湿地正在悄然回归',
  'what old maps reveal about the way cities remember': '旧地图揭示城市如何记忆',
  'the case for slower, more deliberate collaboration': '慢而审慎的协作为何值得',
  'why our attention needs a recovery rhythm': '注意力需要恢复节律',
  'how public spaces make room for unexpected encounters': '公共空间如何为意外相遇留出余地',
  'how citizen scientists help map the night sky': '公民科学家如何协助绘制夜空地图',
  'what wastewater can reveal about a city': '污水可以揭示一座城市什么',
  'why languages keep borrowing words': '语言为什么不断借用词语',
  'the quiet influence of default choices': '默认选项的悄然影响',
  'designing buildings for a changing climate': '为变化中的气候设计建筑',
  'can rooftop farms feed a growing city?': '屋顶农场能养活不断扩张的城市吗',
  'why music can make places easier to remember': '音乐为何让地方更容易被记住',
  'the routes that moved more than goods': '运送的不只是货物的路线',
  'when an algorithm decides what we notice': '当算法决定我们注意什么',
  'the chemistry behind a warming sea': '变暖海洋背后的化学变化',
  'the case for retrieval practice': '为什么值得练习主动回忆',
  'how migration reshapes regional food': '迁移如何重塑地方饮食'
});

const ENGLISH_READING_PARAGRAPH_TRANSLATIONS = Object.freeze({
  'why small ai tools are changing the way people learn': [
    '从语言练习到研究笔记，专注于单一任务的 AI 工具正成为日常学习伙伴。',
    '最有用的系统并不会取代努力；它们只是让获得反馈变得更容易。'
  ],
  'the quiet return of wetlands in crowded cities': [
    '城市湿地正作为一种“活的基础设施”得到修复。',
    '它们可以降低洪水风险、为社区降温并创造栖息地，而无需继续增加混凝土建设。'
  ],
  'what old maps reveal about the way cities remember': [
    '地图常被当作中性的记录，然而每一条边界、每一个标签和每一处留白，都反映了对“什么值得被看见”的选择。'
  ],
  'the case for slower, more deliberate collaboration': [
    '给反思留出空间的团队，往往更少做出仓促、反应式的决定。',
    '有意识的协作并不是拒绝快速行动；而是把速度用在真正重要的地方。'
  ],
  'why our attention needs a recovery rhythm': [
    '注意力并不是无限的资源。',
    '短暂的恢复时段，比长时间强迫自己集中，更可靠地提升下一段专注时段的质量。'
  ],
  'how public spaces make room for unexpected encounters': [
    '好的公共空间设计不只是引导人流。',
    '它还保留足够的开放性，让人们停下来观察彼此，并自行创造一个地方的使用方式。'
  ],
  'how citizen scientists help map the night sky': [
    '过去，大型调查几乎只属于专业天文台。',
    '如今，志愿者可以在精心设计的线上项目中分类图像，并报告异常天体。',
    '他们的贡献之所以有价值，并不是因为每次观测都完美，而是因为成千上万条微小观测能够揭示单个研究团队可能错过的模式。'
  ],
  'what wastewater can reveal about a city': [
    '污水监测让公共卫生团队无需要求每位居民填写问卷，也能获得一个群体层面的信号。',
    '研究人员会检测化学和生物痕迹，比较它们随时间的变化，并与临床数据结合。',
    '这种方法无法解释每个个体病例，但能在健康模式发生变化时提供早期预警。'
  ],
  'why languages keep borrowing words': [
    '借词通常被视为语言变化的迹象，而不是语言失败。',
    '贸易、迁移、教育和流行文化都会创造机会，使一种语言从另一种语言中吸收有用表达。',
    '随着时间推移，使用者会重新塑造借词，使其适应本地的语音、语法和社会含义。'
  ],
  'the quiet influence of default choices': [
    '即使人们仍可自由选择其他选项，默认选项也能引导行为。',
    '在工作场所、学校和数字服务中，选项的位置可以减少行动成本，让某条路径看起来更为正常。',
    '因此，好的政策不仅要问替代方案是否存在，还要问它们是否可见且切实可行。'
  ],
  'designing buildings for a changing climate': [
    '气候意识型建筑不只是给传统建筑添加几个高效设备。',
    '设计师会考虑朝向、遮阳、通风、材料以及居住者的日常活动。',
    '成功的建筑既能降低能源需求，也能让室内空间更健康、更舒适。'
  ],
  'can rooftop farms feed a growing city?': [
    '屋顶农场很少能取代乡村农业，但可以缩短生产与消费之间的距离。',
    '它们更广泛的益处可能包括保温、雨洪管理和社区教育机会。',
    '主要限制在于结构安全、供水以及维护一支熟练劳动力的成本。'
  ],
  'why music can make places easier to remember': [
    '音乐把节奏、情绪和注意力连接起来，这或许解释了为什么熟悉的歌曲能唤回对某个地方的细致记忆。',
    '研究人员并不认为音乐是万能的记忆开关；效果取决于个人经历和情境。',
    '不过，经过精心选择的声音可以支持学习和定位。'
  ],
  'the routes that moved more than goods': [
    '历史贸易路线除了香料、金属或纺织品，也运输技术、故事和社会习俗。',
    '商人依赖跨越语言和法律传统的桥梁。',
    '因此，一条路线的影响可能在其商业重要性下降很久之后仍然延续。'
  ],
  'when an algorithm decides what we notice': [
    '推荐系统旨在对信息进行排序，但这种排序会逐渐塑造用户认为什么是重要的。',
    '个性化可以节省时间，却也可能缩小人们接触到的观点范围。',
    '透明的解释和有意识地探索陌生来源的机会，可以让这种取舍更容易管理。'
  ],
  'the chemistry behind a warming sea': [
    '海洋吸收二氧化碳后，其化学性质会逐渐改变，而不是突然变化。',
    '酸度的变化可能使一些生物更难形成外壳，而另一些物种则可能适应或迁移。',
    '科学家估算未来生态系统变化时，理解这些不同反应至关重要。'
  ],
  'the case for retrieval practice': [
    '尝试回忆一个观点通常比重新阅读更费力，但这种努力可以增强日后提取信息的能力。',
    '有效的提取练习通常很短，并分散在几次学习中。',
    '当学习者获得反馈并在不同语境中使用概念时，效果最好。'
  ],
  'how migration reshapes regional food': [
    '人们迁移时，会带来食谱、食材以及组织用餐的方式。',
    '当地饮食文化不会简单消失或保持不变；它们常通过适应与交流发展。',
    '市场、餐馆和家庭厨房都会影响哪些新组合最终变得熟悉。'
  ]
});

function englishReadingRemoteTitleHistory(value) {
  const uniqueTitles = new Set();
  (Array.isArray(value) ? value : []).forEach(title => {
    const normalized = englishReadingTitleKey(title);
    if (normalized) uniqueTitles.add(normalized);
  });
  return Array.from(uniqueTitles).slice(-ENGLISH_READING_REMOTE_TITLE_LIMIT);
}

function englishReadingCandidateUrl(candidate, title = '') {
  const key = String(candidate?.key || '').trim().replace(/^\/+/, '');
  if (key) return safeReadingUrl('https://en.wikipedia.org/wiki/' + encodeURIComponent(key.replace(/ /g, '_')), title);
  return safeReadingUrl(candidate?.content_urls?.desktop?.page || candidate?.url, title);
}

async function englishReadingFetch(url, options = {}) {
  const controller = new AbortController();
  const externalSignal = options.signal;
  const abortFromExternal = () => controller.abort();
  if (externalSignal) {
    if (externalSignal.aborted) controller.abort();
    else externalSignal.addEventListener('abort', abortFromExternal, { once: true });
  }
  const timeout = setTimeout(() => controller.abort(), ENGLISH_READING_FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
    externalSignal?.removeEventListener?.('abort', abortFromExternal);
  }
}

async function englishReadingSummaryForCandidate(candidate) {
  const title = String(candidate?.title || '').trim();
  const key = String(candidate?.key || title).trim().replace(/^\/+/, '');
  if (!key) return null;
  const summaryUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(key.replace(/ /g, '_'));
  const response = await englishReadingFetch(summaryUrl, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error('Wikipedia 摘要响应异常');
  const payload = await response.json();
  const extract = String(payload?.extract || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const resolvedTitle = String(payload?.title || title).replace(/\s+/g, ' ').trim();
  if (!resolvedTitle || extract.length < 180) return null;
  return { ...payload, title: resolvedTitle, extract, url: englishReadingCandidateUrl({ ...candidate, ...payload }, resolvedTitle) };
}

function englishReadingTopicForDay(date = todayKey()) {
  return ENGLISH_READING_TOPICS[englishDaySeed(date) % ENGLISH_READING_TOPICS.length];
}

function normalizeEnglishReadingArticle(article, index = 0) {
  if (!article || typeof article !== 'object') return null;
  const title = String(article.title || '').replace(/\s+/g, ' ').trim().slice(0, 180);
  const excerpt = decodeEnglishHtml(article.excerpt || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 900);
  if (!title || excerpt.length < 40) return null;
  const tags = Array.isArray(article.tags) ? article.tags.map(tag => String(tag || '').trim().slice(0, 32)).filter(Boolean).slice(0, 6) : [];
  const minutes = Math.max(5, Math.min(30, Number(article.minutes) || Math.ceil(excerpt.split(/\s+/).length / 145) || 10));
  return {
    ...article,
    id: String(article.id || 'english-reading-' + index).slice(0, 96),
    type: String(article.type || '跨学科选读').slice(0, 32),
    genre: String(article.genre || '综合文章').slice(0, 32),
    source: String(article.source || '精选来源').replace(/\s+/g, ' ').trim().slice(0, 80),
    level: String(article.level || 'Band 7.0').slice(0, 20),
    minutes,
    title,
    excerpt,
    tags,
    url: safeReadingUrl(article.url, title),
    publishedAt: /^\d{4}-\d{2}-\d{2}$/.test(String(article.publishedAt || '')) ? String(article.publishedAt) : todayKey(),
    saved: Boolean(article.saved),
    read: Boolean(article.read),
    // `completed` is an all-time counter. Keep a per-card marker so toggling
    // an article off and on again (or revisiting it on a later day) cannot
    // inflate that history. Legacy cards that were already marked read are
    // treated as counted during migration.
    readEver: Boolean(article.readEver || article.read || article.lastReadDate),
    lastReadDate: englishDateKey(article.lastReadDate) || ''
  };
}

// The reading detail intentionally works only with the locally stored excerpt.
// It never invents a fuller article: numbered blocks preserve the source text
// verbatim, and the two study aids only point to words/signals that are already
// visible in that text.
function englishReadingPassageParagraphs(value) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (!text) return [];
  const sentences = (text.match(/[^.!?]+(?:[.!?]+(?=\s|$)|$)/g) || [])
    .map(sentence => sentence.trim())
    .filter(Boolean);
  if (!sentences.length) return [text];
  // Keep the detail compact without dropping the tail of a fetched summary.
  if (sentences.length <= 5) return sentences;
  return [...sentences.slice(0, 4), sentences.slice(4).join(' ')];
}

const ENGLISH_READING_CONNECTOR_RULES = [
  { pattern: /\bnot only\b[\s\S]{0,90}?\bbut also\b/i, token: 'not only … but also', relation: '递进' },
  { pattern: /\bas a result\b/i, token: 'as a result', relation: '结果' },
  { pattern: /\brather than\b/i, token: 'rather than', relation: '对照' },
  { pattern: /\bin contrast\b/i, token: 'in contrast', relation: '对比' },
  { pattern: /\bhowever\b/i, token: 'however', relation: '转折' },
  { pattern: /\btherefore\b/i, token: 'therefore', relation: '结果' },
  { pattern: /\bnevertheless\b/i, token: 'nevertheless', relation: '让步' },
  { pattern: /\balthough\b/i, token: 'although', relation: '让步' },
  { pattern: /\bbecause\b/i, token: 'because', relation: '原因' },
  { pattern: /\bwhile\b/i, token: 'while', relation: '对照 / 同时' },
  { pattern: /\byet\b/i, token: 'yet', relation: '转折' },
  { pattern: /\bbut\b/i, token: 'but', relation: '转折' },
  { pattern: /\bover time\b/i, token: 'over time', relation: '时间推进' },
  { pattern: /\binstead\b/i, token: 'instead', relation: '替代' }
];

function englishReadingConnectorHints(value) {
  const text = String(value || '');
  const matches = [];
  const seen = new Set();
  ENGLISH_READING_CONNECTOR_RULES.forEach(rule => {
    const match = rule.pattern.exec(text);
    if (!match || seen.has(rule.token)) return;
    seen.add(rule.token);
    matches.push({ ...rule, index: Number(match.index) || 0 });
  });
  return matches.sort((a, b) => a.index - b.index).slice(0, 4);
}

const ENGLISH_READING_VOCAB_STOPWORDS = new Set([
  'about', 'after', 'again', 'also', 'among', 'another', 'around', 'because',
  'before', 'being', 'between', 'could', 'each', 'every', 'first', 'from',
  'have', 'into', 'more', 'most', 'much', 'only', 'other', 'over', 'than',
  'that', 'their', 'there', 'these', 'they', 'this', 'those', 'through',
  'today', 'under', 'using', 'what', 'when', 'where', 'which', 'while', 'with',
  'would', 'your', 'city', 'cities', 'learn', 'make', 'people', 'small',
  'system', 'systems', 'tool', 'tools', 'way', 'ways'
]);

function englishReadingVocabularyTerms(article, limit = 4) {
  const title = String(article?.title || '');
  const source = (title + ' ' + String(article?.excerpt || '')).replace(/\s+/g, ' ').trim();
  const titleTerms = new Set((title.match(/[A-Za-z][A-Za-z'-]*/g) || []).map(term => term.toLowerCase()));
  const bankTerms = new Set(IELTS_DAILY_VOCABULARY_BANK.map(word => englishWordTermKey(word.term)));
  const candidates = new Map();
  (source.match(/[A-Za-z][A-Za-z'-]*/g) || []).forEach(term => {
    const normalized = term.toLowerCase();
    if (normalized.length < 5 || ENGLISH_READING_VOCAB_STOPWORDS.has(normalized)) return;
    const capitalized = /^[A-Z][a-z]/.test(term);
    const existing = candidates.get(normalized) || { term, count: 0, title: titleTerms.has(normalized), inBank: bankTerms.has(normalized), hasLowercase: false, hasCapitalized: false };
    existing.count += 1;
    existing.hasLowercase = existing.hasLowercase || !capitalized;
    existing.hasCapitalized = existing.hasCapitalized || capitalized;
    candidates.set(normalized, existing);
  });
  return Array.from(candidates.values())
    // Proper names (locations, people, organisations) are useful for factual
    // reading comprehension but are poor standalone study targets. Keep a
    // token only when it also appears in normal lowercase usage or in the
    // curated IELTS bank.
    .filter(item => !(item.hasCapitalized && !item.hasLowercase && !item.inBank))
    .sort((a, b) => {
      const score = item => (item.inBank ? 10 : 0) + (item.title && item.term.length >= 8 ? 3 : 0) + Math.min(item.count, 3) * 2 + Math.max(0, item.term.length - 5);
      return score(b) - score(a) || a.term.localeCompare(b.term);
    })
    .slice(0, limit)
    .map(item => item.term);
}

const ENGLISH_READING_GLOSS = Object.freeze({
  'narrowly focused': '聚焦单一任务的', narrowly: '狭窄地；有限地', focused: '专注的',
  'feedback': '反馈', 'wetlands': '湿地', 'infrastructure': '基础设施',
  'flood': '洪水；淹没', 'habitats': '栖息地', 'neutral': '中性的',
  'border': '边界', 'deliberate': '审慎的；有意识的', 'collaboration': '协作',
  'attention': '注意力', 'recovery': '恢复', 'interval': '时段；间隔',
  'ambiguity': '模糊性；开放空间', 'encounters': '相遇；邂逅',
  'observatories': '天文台', 'classify': '分类', 'wastewater': '污水',
  'population-level': '群体层面的', 'linguistic': '语言学的', 'migration': '迁移',
  'default': '默认选项', 'alternatives': '替代方案', 'orientation': '定位；方向感',
  'insulation': '隔热；保温', 'constraints': '限制条件', 'retrieval': '提取；主动回忆',
  'context': '语境；背景', 'adaptation': '适应；调整', 'ecosystem': '生态系统',
  'recommendation': '推荐', 'personalisation': '个性化', 'acidity': '酸度',
  'organisms': '生物；有机体', 'sustainable': '可持续的', 'evidence': '证据'
});

function englishReadingTranslationInput(article, index) {
  const collections = [article?.paragraphTranslations, article?.translations, article?.zhTranslations];
  for (const collection of collections) {
    const value = Array.isArray(collection) ? collection[index] : collection && typeof collection === 'object' ? collection[index] : '';
    if (String(value || '').trim()) return String(value).replace(/\s+/g, ' ').trim();
  }
  return '';
}

function englishReadingTranslationForParagraph(article, paragraph, index, total) {
  const supplied = englishReadingTranslationInput(article, index);
  if (supplied) return { label: '参考译文', text: supplied, kind: 'translation', note: '以本段英文为准，先独立概括再对照。' };
  const titleKey = englishReadingTitleKey(article?.title);
  const known = ENGLISH_READING_PARAGRAPH_TRANSLATIONS[titleKey];
  if (known && known[index]) {
    const connector = englishReadingConnectorHints(paragraph)[0];
    const note = connector
      ? '信号词：' + connector.token + '（' + connector.relation + '）'
      : index === 0 ? '阅读动作：先找主语、核心动作与结果。' : index === total - 1 ? '阅读动作：回看结论、限制或延伸。' : '阅读动作：找出本段补充信息与上一段的关系。';
    return { label: '参考译文', text: known[index], kind: 'translation', note };
  }
  // Remote summaries do not carry an authorised Chinese translation.  Give a
  // useful, clearly-labelled comprehension cue instead of manufacturing a
  // sentence-by-sentence translation from incomplete source text.
  const topic = String(article?.type || article?.tags?.[0] || '文章主题').replace(/\s+/g, ' ').trim();
  const terms = englishReadingVocabularyTerms({ title: '', excerpt: paragraph }, 2);
  const focus = terms.length ? '“' + terms.join('”与“') + '”' : '核心信息';
  const relation = index === 0 ? '提出核心观察' : index === total - 1 ? '收束结论或延伸' : '补充证据或影响';
  const connector = englishReadingConnectorHints(paragraph)[0];
  const relationText = connector ? '通过“' + connector.token + '”表达' + connector.relation : '呈现前后信息的关系';
  return {
    label: '理解提示',
    text: '本段围绕“' + topic + '”' + relation + '；抓住' + focus + '，' + relationText + '。',
    kind: 'comprehension',
    note: '中文栏是段意提示；完整语境请打开原文。'
  };
}

function englishReadingTitleTranslation(article) {
  const supplied = String(article?.titleTranslation || article?.titleZh || '').replace(/\s+/g, ' ').trim();
  if (supplied) return supplied;
  return ENGLISH_READING_TITLE_TRANSLATIONS[englishReadingTitleKey(article?.title)] || '';
}

function englishReadingVocabularyReview(article, limit = 4) {
  const terms = englishReadingVocabularyTerms(article, limit);
  return terms.map(term => {
    const key = englishWordTermKey(term);
    const bankWord = IELTS_DAILY_VOCABULARY_BANK.find(word => englishWordTermKey(word.term) === key) || IELTS_WORD_BANK.find(word => englishWordTermKey(word.term) === key);
    const rawMeaning = String(bankWord?.meaning || '').replace(/^英文释义：/, '').trim();
    const fallback = ENGLISH_READING_GLOSS[key] || ENGLISH_READING_GLOSS[key.replace(/s$/, '')] || '';
    const meaning = fallback || (rawMeaning && !rawMeaning.startsWith('雅思高频表达') ? rawMeaning.split(/[。.;]/)[0].slice(0, 42) : '') || '回到原文核对语境';
    return { term, meaning, pos: String(bankWord?.pos || '').trim() };
  });
}

function englishReadingDetailStudyHTML(article) {
  const paragraphs = englishReadingPassageParagraphs(article?.excerpt);
  const connectors = englishReadingConnectorHints(article?.excerpt);
  const vocabulary = englishReadingVocabularyReview(article);
  const structure = paragraphs.map((_, index) => {
    const number = String(index + 1).padStart(2, '0');
    const isFirst = index === 0;
    const isLast = index === paragraphs.length - 1;
    const prompt = isFirst
      ? '圈出主题与核心动作'
      : isLast
        ? '回看结论、限制或延伸'
        : '找出补充信息之间的关系';
    return '<div class="english-reading-structure-step"><span>' + number + '</span><div><b>第 ' + number + ' 段</b><small>' + escapeHTML(prompt) + '</small></div></div>';
  }).join('');
  const passage = paragraphs.map((paragraph, index) => {
    const translation = englishReadingTranslationForParagraph(article, paragraph, index, paragraphs.length);
    return '<article class="english-reading-paragraph english-reading-bilingual-row" aria-label="第 ' + String(index + 1).padStart(2, '0') + ' 段双语精读"><div class="english-reading-paragraph-index"><span class="english-reading-paragraph-number">' + String(index + 1).padStart(2, '0') + '</span><small>P' + String(index + 1).padStart(2, '0') + '</small></div><div class="english-reading-english"><p>' + escapeHTML(paragraph) + '</p></div><aside class="english-reading-translation ' + (translation.kind === 'comprehension' ? 'is-comprehension' : '') + '"><div class="english-reading-translation-label"><span>' + escapeHTML(translation.label) + '</span><small>中文</small></div><p>' + escapeHTML(translation.text) + '</p><small class="english-reading-translation-note">' + escapeHTML(translation.note) + '</small></aside></article>';
  }).join('');
  const connectorContent = connectors.length
    ? connectors.map(item => '<span class="english-reading-connector"><b>' + escapeHTML(item.token) + '</b><small>' + escapeHTML(item.relation) + '</small></span>').join('')
    : '<span class="english-reading-empty-tip">这段没有明显的连接词；留意代词、并列和句间指代。</span>';
  const vocabularyContent = vocabulary.length
    ? vocabulary.map(item => '<span class="english-reading-vocabulary-term" data-reading-vocab-term="' + escapeAttribute(item.term) + '"><b>' + escapeHTML(item.term) + '</b><small>' + escapeHTML(item.pos) + '</small><em>' + escapeHTML(item.meaning) + '</em></span>').join('')
    : '<span class="english-reading-empty-tip">先从标题里挑一个名词和一个动词，回原文定位它们的搭配。</span>';
  return '<div class="english-reading-study">' +
    '<section class="english-reading-passage english-reading-bilingual" aria-label="文章摘要双语精读"><div class="english-reading-study-heading"><div><span>Editorial spread · EN / 中文</span><h3>按段精读</h3></div><small>中文栏为参考译文或段意提示<br>仅按已加载摘要分段</small></div><div class="english-reading-bilingual-head" aria-hidden="true"><span>原文 English</span><span>中文理解 / Translation rail</span></div><div class="english-reading-paragraphs">' + passage + '</div></section>' +
    '<div class="english-reading-analysis-grid"><section class="english-reading-analysis"><div class="english-reading-analysis-heading"><b>结构地图</b><small>按段定位，再写一句主旨</small></div><div class="english-reading-structure">' + structure + '</div></section><section class="english-reading-analysis"><div class="english-reading-analysis-heading"><b>连接词提示</b><small>只标出片段中出现的信号词</small></div><div class="english-reading-connector-list">' + connectorContent + '</div></section></div>' +
    '<section class="english-reading-vocabulary english-reading-vocabulary-box"><div class="english-reading-analysis-heading"><div><span>Vocabulary review</span><b>今日词汇复盘</b></div><small>均取自标题或摘要</small></div><div class="english-reading-vocabulary-list">' + vocabularyContent + '</div><p>先回原文定位，再记下词性、搭配和你自己的例句；需要完整释义时进入词汇记忆。</p></section>' +
  '</div>';
}

// Wikimedia search snippets frequently contain entities such as &quot; and
// &#039;. Decode them before quality checks and before presenting the passage;
// the final render still escapes the value, so this never introduces markup.
function decodeEnglishHtml(value) {
  const raw = String(value || '');
  if (!raw || typeof document === 'undefined') return raw;
  const node = document.createElement('textarea');
  node.innerHTML = raw;
  return node.value;
}

const ENGLISH_READING_BLOCKLIST = /(?:\btv series\b|\btelevision drama\b|\bhorse racing\b|\bjockey\b|\bvideo game\b|\bfilm series\b|\bdiscography\b|\balbum\b|\bepisode\b|\bfictional character\b|\bprofessional wrestler\b|\bfootballer\b|\bcricketer\b|\bsoftcore\b|\bpornograph|\bpolitician\b|\bmayor\b|\bprime minister\b|\bbiographical\b)/i;

function isEnglishReadingCandidate(title, excerpt) {
  const normalizedTitle = String(title || '').trim();
  const normalizedExcerpt = String(excerpt || '').trim();
  if (normalizedTitle.length < 5 || normalizedExcerpt.length < 150) return false;
  if (ENGLISH_READING_BLOCKLIST.test(normalizedTitle) || ENGLISH_READING_BLOCKLIST.test(normalizedExcerpt)) return false;
  // Wikimedia occasionally returns a reference-style paragraph rather than a
  // readable article (for example a news citation list). Those fragments are
  // poor IELTS material even when they happen to be long enough.
  if (/\b(?:sixth tone|report says|external links|see also|bibliography|isbn\b|doi:)\b/i.test(normalizedExcerpt)) return false;
  // Reject list/reference snippets that merely concatenate unrelated titles.
  const quotedTitles = (normalizedExcerpt.match(/["“][^"”]{3,}["”]/g) || []).length;
  if (quotedTitles >= 2 || /\b(?:references|disambiguation|may refer to)\b/i.test(normalizedExcerpt)) return false;
  return true;
}

function englishReadingTopicForText(text, fallbackIndex = 0) {
  const value = String(text || '').toLowerCase();
  const signals = [
    ['environment', 'energy', 'climate', 'carbon', 'ecosystem', 'ocean', 'marine', 'biodiversity', 'wetland'],
    ['city', 'urban', 'transport', 'commut', 'housing', 'architecture', 'building', 'design'],
    ['econom', 'business', 'market', 'policy', 'decision', 'workplace', 'labour', 'trade'],
    ['health', 'medical', 'disease', 'epidem', 'public health', 'wastewater'],
    ['language', 'linguistic', 'culture', 'heritage', 'migration', 'historical', 'history'],
    ['space', 'astronom', 'science', 'research', 'experiment', 'technology', 'algorithm'],
    ['psycholog', 'music', 'memory', 'attention', 'learning', 'education', 'school']
  ];
  let bestIndex = -1;
  let bestScore = 0;
  signals.forEach((terms, index) => {
    const score = terms.reduce((total, term) => total + (value.includes(term) ? 1 : 0), 0);
    if (score > bestScore) { bestIndex = index; bestScore = score; }
  });
  const fallback = ENGLISH_READING_TOPICS[fallbackIndex % ENGLISH_READING_TOPICS.length];
  if (bestIndex < 0) return fallback;
  const topicMap = [
    { type: '环境与生态', genre: '科普说明', tag: 'climate' },
    { type: '城市与交通', genre: '政策评论', tag: 'urban-life' },
    { type: '商业与社会', genre: '学术导读', tag: 'decision-making' },
    { type: '公共健康', genre: '科学说明', tag: 'health' },
    { type: '语言与文化', genre: '历史观察', tag: 'culture' },
    { type: '科学与探索', genre: '研究摘要', tag: 'science' },
    { type: '教育与心理', genre: '跨学科文章', tag: 'learning' }
  ];
  return topicMap[bestIndex] || fallback;
}

function normalizeEnglishReadingLibrary(root = DATA) {
  const reading = root?.learning?.english?.reading;
  if (!reading) return false;
  const before = Array.isArray(reading.articles) ? JSON.stringify(reading.articles) : '';
  const beforeRemoteTitles = JSON.stringify(reading.remoteTitles);
  const beforeActiveArticleId = String(reading.activeArticleId || '');
  const beforeLibraryVersion = String(reading.libraryVersion || '');
  const normalized = [];
  const ids = new Set();
  const titles = new Set();
  (Array.isArray(reading.articles) ? reading.articles : [])
    .map(normalizeEnglishReadingArticle)
    .filter(Boolean)
    // Keep the shipped seed cards (even if their short teaser is below the
    // remote-quality threshold); apply strict length/content filtering only to
    // previously fetched external cards.
    .filter(article => {
      const isSeed = String(article.id || '').startsWith('article-');
      const isCurated = String(article.source || '').includes('curated primer');
      if (isSeed || isCurated) return true;
      // Apply the same stricter checks used for fresh remote results when
      // migrating an older cache; otherwise a previously stored list snippet
      // would survive forever simply because it already had an ID.
      return isEnglishReadingRemoteCandidate(article.title, article.excerpt, new Set());
    })
    .forEach(article => {
      const titleKey = englishReadingTitleKey(article.title);
      const duplicate = normalized.find(existing => existing.id === article.id || englishReadingTitleKey(existing.title) === titleKey);
      if (duplicate) {
        // Preserve learner state if an older refresh generated a second ID for
        // the same Wikipedia page.
        duplicate.saved = Boolean(duplicate.saved || article.saved);
        duplicate.read = Boolean(duplicate.read || article.read);
        duplicate.readEver = Boolean(duplicate.readEver || article.readEver);
        if (!duplicate.lastReadDate && article.lastReadDate) duplicate.lastReadDate = article.lastReadDate;
        return;
      }
      ids.add(article.id);
      titles.add(titleKey);
      normalized.push(article);
    });
  IELTS_READING_OFFLINE_LIBRARY
    .filter(article => !ids.has(article.id) && !titles.has(englishReadingTitleKey(article.title)))
    .map(normalizeEnglishReadingArticle)
    .filter(Boolean)
    .forEach(article => {
      ids.add(article.id);
      titles.add(englishReadingTitleKey(article.title));
      normalized.push(article);
    });
  reading.articles = normalized.slice(0, 24);
  reading.remoteTitles = englishReadingRemoteTitleHistory(reading.remoteTitles);
  if (!reading.articles.some(article => article.id === reading.activeArticleId)) {
    reading.activeArticleId = reading.articles[0]?.id || '';
  }
  if (!reading.libraryVersion) reading.libraryVersion = IELTS_READING_LIBRARY_VERSION;
  return before !== JSON.stringify(reading.articles)
    || beforeRemoteTitles !== JSON.stringify(reading.remoteTitles)
    || beforeActiveArticleId !== String(reading.activeArticleId || '')
    || beforeLibraryVersion !== String(reading.libraryVersion || '');
}

async function fetchEnglishResource(url, options = {}, timeoutMs = 9000) {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const upstreamSignal = options.signal;
  const forwardAbort = () => controller?.abort();
  if (upstreamSignal) {
    if (upstreamSignal.aborted) controller?.abort();
    else upstreamSignal.addEventListener?.('abort', forwardAbort, { once: true });
  }
  const timer = setTimeout(() => controller?.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...options,
      ...(controller ? { signal: controller.signal } : {})
    });
  } finally {
    clearTimeout(timer);
    upstreamSignal?.removeEventListener?.('abort', forwardAbort);
  }
}

function isEnglishReadingRemoteCandidate(title, excerpt, seenTitles) {
  const normalizedTitle = englishReadingTitleKey(title);
  const normalizedExcerpt = String(excerpt || '').trim();
  if (!normalizedTitle || !isEnglishReadingCandidate(title, normalizedExcerpt)) return false;
  if (seenTitles.has(normalizedTitle)) return false;
  // Search can return navigation pages, lists and disambiguation hubs. They
  // are poor IELTS passages even when their snippets are long enough.
  if (/^(main page|list of\b|timeline of\b|index of\b|category:|portal:|template:|help:|wikipedia:|file:)/i.test(String(title).trim())) return false;
  if (/\bdisambiguation\b/i.test(String(title))) return false;
  if (/\b(?:disambiguation|may refer to)\b/i.test(normalizedExcerpt)) return false;
  // Organisation/movement lookups are usually terse encyclopedia entries,
  // rather than passages with an argument or evidence trail.
  if (/\b(?:front|party|movement|organization|organisation)\b/i.test(String(title)) && /\b(?:movement|organization|organisation|political)\b/i.test(normalizedExcerpt)) return false;
  return true;
}

async function refreshEnglishReadingMaterials() {
  if (englishReadingRefreshInFlight) {
    showToast('阅读材料正在更新，请稍候', 'warning');
    return englishReadingRefreshInFlight;
  }
  // Queue the implementation in a microtask so the lock is installed before
  // any await point (including a same-tick double click) can start another run.
  const refreshPromise = Promise.resolve().then(() => refreshEnglishReadingMaterialsImpl());
  englishReadingRefreshInFlight = refreshPromise;
  try {
    return await refreshPromise;
  } finally {
    if (englishReadingRefreshInFlight === refreshPromise) englishReadingRefreshInFlight = null;
  }
}

function englishReadingFetchedDate(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  // `lastFetchedAt` is normally an ISO timestamp.  Keep malformed/legacy
  // values as stale rather than treating them as a successful daily refresh.
  const parsed = new Date(raw);
  if (!Number.isFinite(parsed.getTime())) return '';
  return todayKey(parsed);
}

function maybeAutoRefreshEnglishReading() {
  if (!DATA || !['english', 'english-reading'].includes(currentPage)) return;
  const today = todayKey();
  // This marker is intentionally not part of DATA: it is only a guard against
  // duplicate effects during the current browser session/render lifecycle.
  if (englishReadingAutoRefreshAttemptedDate === today) return;
  const reading = DATA.learning?.english?.reading;
  if (!reading) return;
  if (englishReadingFetchedDate(reading.lastFetchedAt) === today) {
    englishReadingAutoRefreshAttemptedDate = today;
    return;
  }
  englishReadingAutoRefreshAttemptedDate = today;
  // The refresh wrapper itself queues its implementation in a microtask. That
  // keeps the loading rerender out of the current render/effect call stack,
  // while still allowing the request to continue if the learner navigates to
  // another page immediately after entering English.
  void refreshEnglishReadingMaterials();
}

async function refreshEnglishReadingMaterialsImpl() {
  ensureEnglishStudyState();
  const reading = DATA.learning.english.reading;
  englishReadingState = { status: 'loading', message: '' };
  rerender();
  const fallbacks = Array.isArray(reading.articles) ? reading.articles : [];
  const topicIndex = englishDaySeed(todayKey()) % ENGLISH_READING_TOPICS.length;
  const selectedTopic = ENGLISH_READING_TOPICS[topicIndex];
  const randomTopic = { type: '跨学科选读', genre: '百科摘要', tag: 'interdisciplinary' };
  const sourcePlans = [
    { id: 'wikimedia-search', label: 'Wikimedia / Wikipedia', topic: selectedTopic, url: 'https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=' + encodeURIComponent(selectedTopic.query) + '&limit=10' },
    { id: 'wikipedia-random', label: 'Wikipedia', topic: randomTopic, url: 'https://en.wikipedia.org/api/rest_v1/page/random/summary' }
  ];
  let lastError = new Error('网络暂不可用');
  // Bound the complete refresh (including up to ten summary lookups) so a
  // slow Wikimedia response cannot leave the reading page spinning forever.
  const refreshDeadline = Date.now() + ENGLISH_READING_REFRESH_TIMEOUT_MS;
  const refreshTimeoutError = () => {
    const error = new Error('获取阅读材料超时，请稍后重试');
    error.name = 'AbortError';
    return error;
  };
  const seenTitles = new Set([
    ...fallbacks.map(existing => englishReadingTitleKey(existing?.title)),
    ...englishReadingRemoteTitleHistory(reading.remoteTitles)
  ].filter(Boolean));
  for (const plan of sourcePlans) {
    if (Date.now() >= refreshDeadline) {
      lastError = refreshTimeoutError();
      break;
    }
    try {
      const response = await fetchEnglishResource(plan.url, { headers: { Accept: 'application/json', 'User-Agent': 'IELTS-Workspace/1.0' } }, Math.min(9000, Math.max(1, refreshDeadline - Date.now())));
      if (!response.ok) throw new Error(plan.label + ' 响应异常');
      const payload = await response.json();
      const candidates = plan.id === 'wikimedia-search' ? (Array.isArray(payload?.pages) ? payload.pages : []) : [payload];
      let candidate = null;
      let detail = null;
      for (const item of candidates.slice(0, 10)) {
        if (Date.now() >= refreshDeadline) throw refreshTimeoutError();
        const title = String(item?.title || '').trim();
        if (!title || seenTitles.has(englishReadingTitleKey(title))) continue;
        const key = String(item?.key || title.replace(/\s+/g, '_')).replace(/^\/+/, '');
        try {
          const detailResponse = await fetchEnglishResource('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(key), { headers: { Accept: 'application/json' } }, Math.min(7000, Math.max(1, refreshDeadline - Date.now())));
          if (detailResponse.ok) detail = await detailResponse.json();
        } catch (_) {
          detail = null;
        }
        // Wikimedia search excerpts are often only one sentence. Require the
        // full Wikipedia summary for search results so a refresh never stores
        // a thin navigation snippet as an IELTS reading passage.
        const extract = decodeEnglishHtml(plan.id === 'wikimedia-search'
          ? detail?.extract || ''
          : detail?.extract || item?.excerpt || item?.extract || '')
          .replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
        if (isEnglishReadingRemoteCandidate(title, extract, seenTitles)) { candidate = item; candidate._extract = extract; candidate._detail = detail; break; }
        detail = null;
      }
      if (!candidate && plan.id === 'wikipedia-random') {
        const title = String(payload?.title || '').trim();
        const extract = decodeEnglishHtml(payload?.extract || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
        if (isEnglishReadingRemoteCandidate(title, extract, seenTitles)) {
          candidate = payload;
          candidate._extract = extract;
          candidate._detail = payload;
        }
      }
      if (!candidate) throw new Error(plan.label + ' 没有合适的 IELTS 材料');
      const title = String(candidate.title || '').trim();
      const extract = String(candidate._extract || '').trim();
      // Search results inherit the selected rotation topic. A random fallback
      // is intentionally marked as interdisciplinary instead of pretending it
      // belongs to today's query.
      const topic = plan.id === 'wikipedia-random' ? randomTopic : englishReadingTopicForText(title + ' ' + extract, topicIndex);
      const id = 'wiki-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) + '-' + Date.now().toString(36);
      const candidateKey = String(candidate.key || candidate._detail?.key || '').trim().replace(/^\/+/, '');
      const detailUrl = (candidateKey ? 'https://en.wikipedia.org/wiki/' + encodeURIComponent(candidateKey.replace(/ /g, '_')) : '') || candidate._detail?.content_urls?.desktop?.page || candidate.url || candidate.content_urls?.desktop?.page || 'https://en.wikipedia.org/wiki/' + encodeURIComponent(title.replace(/ /g, '_'));
      const article = {
        id,
        type: topic.type,
        genre: topic.genre,
        source: plan.label + ' · English summary',
        level: extract.length > 900 ? 'Band 7.5' : extract.length > 500 ? 'Band 7.0' : 'Band 6.5–7.0',
        minutes: Math.max(8, Math.min(18, Math.ceil(extract.split(/\s+/).length / 145))),
        title,
        excerpt: extract.slice(0, 720) + (extract.length > 720 ? '…' : ''),
        tags: [topic.tag, '联网更新', '背景知识', '体裁：' + topic.genre],
        url: safeReadingUrl(detailUrl, title),
        publishedAt: todayKey(),
        saved: false,
        read: false
      };
      // Keep the full local reading shelf after a refresh. The new article is
      // promoted to the front, while the remaining curated/remote cards stay
      // available for topic variety and offline continuity.
      reading.articles = [article, ...fallbacks.filter(existing => existing.id !== article.id)].slice(0, 24);
      reading.activeArticleId = article.id;
      reading.lastFetchedAt = new Date().toISOString();
      reading.lastSource = plan.label;
      reading.lastTopic = topic.type;
      reading.remoteTitles = englishReadingRemoteTitleHistory([...(reading.remoteTitles || []), title]);
      englishReadingState = { status: 'ready', message: '已从' + plan.label + '获取一篇新材料' };
      save();
      rerender();
      showToast('已联网更新阅读材料：' + title, 'success');
      return;
    } catch (error) {
      lastError = error instanceof Error && error.name === 'AbortError'
        ? new Error('获取阅读材料超时，请稍后重试')
        : (error instanceof Error ? error : lastError);
      if (Date.now() >= refreshDeadline) break;
    }
  }
  englishReadingState = { status: 'error', message: lastError.message || '网络暂不可用' };
  rerender();
  showToast('联网暂不可用，继续使用已缓存的阅读材料', 'warning');
}

function activeEnglishReadingArticle() {
  const reading = DATA.learning.english.reading || {};
  const articles = Array.isArray(reading.articles) ? reading.articles : [];
  return articles.find(article => article.id === reading.activeArticleId) || articles[0] || null;
}

function selectEnglishReadingArticle(card, { scrollOnMobile = true } = {}) {
  const id = String(card?.dataset?.englishReadingArticle || '').trim();
  const reading = DATA?.learning?.english?.reading;
  if (!id || !reading) return false;
  const article = (Array.isArray(reading.articles) ? reading.articles : []).find(item => item.id === id);
  if (!article) return false;
  if (reading.activeArticleId !== id) {
    reading.activeArticleId = id;
    save();
  }
  rerender();
  if (scrollOnMobile && typeof window !== 'undefined' && window.innerWidth <= 900) {
    requestAnimationFrame(() => {
      document.querySelector('.english-reading-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  return true;
}

function shiftDateKey(dateKey, amount) {
  const parts = String(dateKey || todayKey()).split('-').map(Number);
  const date = parts.length === 3 && parts.every(Number.isFinite)
    ? new Date(parts[0], parts[1] - 1, parts[2])
    : new Date();
  date.setDate(date.getDate() + amount);
  return todayKey(date);
}

function shiftPlanCalendarMonth(monthKey, amount) {
  const match = String(monthKey || todayKey().slice(0, 7)).match(/^(\d{4})-(\d{2})$/);
  const date = match ? new Date(Number(match[1]), Number(match[2]) - 1, 1) : new Date();
  date.setMonth(date.getMonth() + amount);
  return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
}

const SOLAR_TERM_NAMES = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
const SOLAR_TERM_MINUTES = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
const FIXED_CHINA_FESTIVALS = {
  '01-01': '元旦', '03-08': '妇女节', '05-01': '劳动节', '05-04': '青年节',
  '06-01': '儿童节', '09-10': '教师节', '10-01': '国庆节'
};
const LUNAR_CHINA_FESTIVALS = {
  '正月初一': '春节', '正月十五': '元宵节', '二月初二': '龙抬头',
  '三月初三': '上巳节', '五月初五': '端午节', '七月初七': '七夕节',
  '七月十五': '中元节', '八月十五': '中秋节', '九月初九': '重阳节',
  '十月初一': '寒衣节', '十月十五': '下元节', '腊月初八': '腊八节',
  '腊月廿三': '小年'
};
const LUNAR_DAY_NAMES = ['', '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];

function solarTermsForMonth(year, month) {
  const terms = {};
  if (year < 1900 || year > 2100) return terms;
  const firstIndex = (month - 1) * 2;
  [firstIndex, firstIndex + 1].forEach(index => {
    const timestamp = 31556925974.7 * (year - 1900) + SOLAR_TERM_MINUTES[index] * 60000 + Date.UTC(1900, 0, 6, 2, 5);
    terms[new Date(timestamp).getUTCDate()] = SOLAR_TERM_NAMES[index];
  });
  return terms;
}

function chineseLunarInfo(date) {
  try {
    const formatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', { month: 'long', day: 'numeric' });
    const parts = formatter.formatToParts(date);
    const month = parts.find(part => part.type === 'month')?.value || '';
    const rawDay = parts.find(part => part.type === 'day')?.value || '';
    const day = LUNAR_DAY_NAMES[Number(rawDay)] || rawDay;
    let festival = LUNAR_CHINA_FESTIVALS[month + day] || '';
    if (!festival && month === '腊月') {
      const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 12);
      const tomorrowMonth = formatter.formatToParts(tomorrow).find(part => part.type === 'month')?.value || '';
      if (tomorrowMonth === '正月') festival = '除夕';
    }
    return { month, day, label: day === '初一' ? month : day, festival };
  } catch (_) {
    return { month: '', day: '', label: '', festival: '' };
  }
}

function chinaOfficialHolidaySchedule(year) {
  const schedule = {};
  const markRange = (start, end) => {
    let cursor = start;
    while (cursor <= end) {
      schedule[cursor] = { type: 'holiday' };
      cursor = shiftDateKey(cursor, 1);
    }
  };
  const annual = {
    2024: {
      holidays: [['2024-01-01', '2024-01-01', '元旦假期'], ['2024-02-10', '2024-02-17', '春节假期'], ['2024-04-04', '2024-04-06', '清明假期'], ['2024-05-01', '2024-05-05', '劳动节假期'], ['2024-06-08', '2024-06-10', '端午假期'], ['2024-09-15', '2024-09-17', '中秋假期'], ['2024-10-01', '2024-10-07', '国庆假期']],
      workdays: ['2024-02-04', '2024-02-18', '2024-04-07', '2024-04-28', '2024-05-11', '2024-09-14', '2024-09-29', '2024-10-12']
    },
    2025: {
      holidays: [['2025-01-01', '2025-01-01', '元旦假期'], ['2025-01-28', '2025-02-04', '春节假期'], ['2025-04-04', '2025-04-06', '清明假期'], ['2025-05-01', '2025-05-05', '劳动节假期'], ['2025-05-31', '2025-06-02', '端午假期'], ['2025-10-01', '2025-10-08', '国庆中秋假期']],
      workdays: ['2025-01-26', '2025-02-08', '2025-04-27', '2025-05-10', '2025-09-28', '2025-10-11']
    },
    2026: {
      holidays: [['2026-01-01', '2026-01-03', '元旦假期'], ['2026-02-15', '2026-02-23', '春节假期'], ['2026-04-04', '2026-04-06', '清明假期'], ['2026-05-01', '2026-05-05', '劳动节假期'], ['2026-06-19', '2026-06-21', '端午假期'], ['2026-09-25', '2026-09-27', '中秋假期'], ['2026-10-01', '2026-10-07', '国庆假期']],
      workdays: ['2026-01-04', '2026-02-14', '2026-02-28', '2026-05-09', '2026-09-20', '2026-10-10']
    }
  };
  const arrangement = annual[year];
  if (!arrangement) return schedule;
  arrangement.holidays.forEach(([start, end]) => markRange(start, end));
  arrangement.workdays.forEach(date => {
    schedule[date] = { type: 'workday', label: '调休上班' };
  });
  return schedule;
}

function planDateLabel(dateKey) {
  const parts = String(dateKey || todayKey()).split('-').map(Number);
  const date = parts.length === 3 && parts.every(Number.isFinite)
    ? new Date(parts[0], parts[1] - 1, parts[2])
    : new Date();
  const relation = dateKey === todayKey() ? '今天 · ' : dateKey === shiftDateKey(todayKey(), -1) ? '昨天 · ' : dateKey === shiftDateKey(todayKey(), 1) ? '明天 · ' : '';
  return relation + (date.getMonth() + 1) + '月' + date.getDate() + '日 · 周' + '日一二三四五六'[date.getDay()];
}

function normalizePlanTime(value, fallback = '09:00') {
  const time = String(value || '').trim();
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time) ? time : fallback;
}

function planSlotForTime(value) {
  const hour = Number(normalizePlanTime(value).slice(0, 2));
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  return 'evening';
}

function defaultPlanTimeForSlot(slot) {
  return slot === 'afternoon' ? '13:30' : slot === 'evening' ? '18:30' : '08:30';
}

function roundedPlanTimeForNow(now = new Date()) {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const roundedMinutes = Math.min(23 * 60 + 30, Math.ceil(currentMinutes / 30) * 30);
  return String(Math.floor(roundedMinutes / 60)).padStart(2, '0') + ':' + String(roundedMinutes % 60).padStart(2, '0');
}

function roundPlanTimeToHalfHour(value, fallback = '09:00') {
  const time = normalizePlanTime(value, fallback);
  const parts = time.split(':').map(Number);
  const roundedMinutes = Math.min(23 * 60 + 30, Math.ceil((parts[0] * 60 + parts[1]) / 30) * 30);
  return String(Math.floor(roundedMinutes / 60)).padStart(2, '0') + ':' + String(roundedMinutes % 60).padStart(2, '0');
}

function planAddTimeForSlot(slot, dateKey = todayKey(), now = new Date()) {
  const fixedTime = defaultPlanTimeForSlot(slot);
  if (dateKey !== todayKey()) return fixedTime;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const morningStart = 8 * 60 + 30;
  const noon = 12 * 60;
  const eveningStart = 18 * 60;
  if (slot === 'morning' && currentMinutes >= morningStart && currentMinutes < noon) {
    return roundedPlanTimeForNow(now);
  }
  if (slot === 'afternoon' && currentMinutes >= noon && currentMinutes < eveningStart) {
    return roundedPlanTimeForNow(now);
  }
  if (slot === 'evening' && currentMinutes >= eveningStart) {
    return roundedPlanTimeForNow(now);
  }
  return fixedTime;
}

function planPathForTime(value) {
  return 'tasks.dailyPlan.' + planSlotForTime(value);
}

function isTaskOnPlanDate(task, dateKey) {
  return String(task && task.dueDate || '') === dateKey;
}

function sortedPlanTasks(tasks) {
  return [...(tasks || [])].sort((a, b) => {
    const doneDiff = Number(Boolean(a.done)) - Number(Boolean(b.done));
    if (doneDiff) return doneDiff;
    const timeDiff = normalizePlanTime(a.scheduledTime).localeCompare(normalizePlanTime(b.scheduledTime));
    if (timeDiff) return timeDiff;
    return String(a.createdAt || '').localeCompare(String(b.createdAt || ''));
  });
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
        handleConflict(result.remote, result.remoteVersion);
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
function handleConflict(remote, remoteVersion) {
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
      const normalized = loadWorkspaceSnapshot(remote);
      if (Number.isInteger(remoteVersion) && remoteVersion >= 0) storage._apiVersion = remoteVersion;
      renderPage(currentPage);
      if (normalized) save(); else setSaveState('saved');
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
    // The document API uses optimistic locking and has no blind-overwrite
    // flag. The conflict payload includes the current remote version; adopt
    // it before retrying so this explicit user choice performs one normal,
    // versioned write instead of sending another stale 409 request.
    if (Number.isInteger(remoteVersion) && remoteVersion >= 0) storage._apiVersion = remoteVersion;
    const r = await storage.write(DATA);
    if (r && r.conflict) {
      handleConflict(r.remote, r.remoteVersion);
      setSaveState('error');
      showToast('远端在覆盖前再次更新，请重新选择处理方式', 'warning');
      return;
    }
    setSaveState(r && r.ok ? 'saved' : 'error');
    showToast(r && r.ok ? '已用本地数据覆盖远端' : '覆盖失败', r && r.ok ? 'warning' : 'error');
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

document.getElementById('themeToggle')?.addEventListener('click', cycleTheme);

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
  if (candidate.tasks && candidate.tasks.dailyPlan !== undefined && !isPlainObject(candidate.tasks.dailyPlan)) throw new Error('任务规划格式不正确');
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

function normalizeTask(task, date = todayKey(), defaultTime = '') {
  if (!isPlainObject(task)) return null;
  const text = String(task.text || '').trim();
  if (!text) return null;
  const scheduledTime = task.scheduledTime || defaultTime;
  return {
    ...task,
    id: String(task.id || uid()),
    text,
    done: Boolean(task.done),
    createdAt: task.createdAt || new Date().toISOString(),
    dueDate: task.dueDate || date,
    ...(scheduledTime ? { scheduledTime: normalizePlanTime(scheduledTime, defaultTime || '09:00') } : {})
  };
}

function normalizeTaskList(list, date = todayKey(), defaultTime = '') {
  return (Array.isArray(list) ? list : []).map(task => normalizeTask(task, date, defaultTime)).filter(Boolean);
}

function migrateWorkspaceData(raw) {
  validateWorkspaceData(raw);
  const data = mergeDefaults(cloneData(raw), DEFAULT_DATA);
  if (data.learning && data.learning.research && Array.isArray(data.learning.research.readingLogs)) {
    data.learning.research.readingLogs = data.learning.research.readingLogs.map(log => ({
      ...log,
      type: readingLogType(log),
      domain: readingLogDomain(log),
      journal: readingLogJournal(log),
      authors: readingLogAuthors(log),
      publicationYear: readingLogPublicationYear(log),
      tags: normalizedReadingLogTags(log)
    }));
  }
  const today = todayKey();
  data.tasks.dashboard = normalizeTaskList(data.tasks.dashboard, today);
  data.tasks.aiLearn = normalizeTaskList(data.tasks.aiLearn, today);
  data.tasks.english = normalizeTaskList(data.tasks.english, today);
  data.tasks.comicStoryboard = normalizeTaskList(data.tasks.comicStoryboard, today);
  data.tasks.researchPapers = normalizeTaskList(data.tasks.researchPapers, today);
  // Older snapshots only contain the original challenge object. Fill the
  // focused IELTS modules here as well as at render time so imports and API
  // conflicts are immediately safe to mutate.
  if (data.learning && data.learning.english) {
    const english = data.learning.english;
    if (!english.profile) english.profile = cloneData(DEFAULT_DATA.learning.english.profile);
    if (!english.challenge) english.challenge = cloneData(DEFAULT_DATA.learning.english.challenge);
    if (!english.vocab) english.vocab = cloneData(DEFAULT_DATA.learning.english.vocab);
    if (!english.listening) english.listening = cloneData(DEFAULT_DATA.learning.english.listening);
    if (!english.reading) english.reading = cloneData(DEFAULT_DATA.learning.english.reading);
    if (!english.writing) english.writing = cloneData(DEFAULT_DATA.learning.english.writing);
    // Run the same focused IELTS normalizer used at runtime so imported,
    // conflicted, and reset snapshots are safe before they reach a renderer.
    ensureEnglishStudyState(data);
  }
  ensureCivilServiceState(data);
  const normalizedPlan = { morning: [], afternoon: [], evening: [] };
  ['morning', 'afternoon', 'evening'].forEach(slot => {
    normalizeTaskList(data.tasks.dailyPlan[slot], today, defaultPlanTimeForSlot(slot)).forEach(task => {
      normalizedPlan[planSlotForTime(task.scheduledTime)].push(task);
    });
  });
  data.tasks.dailyPlan = normalizedPlan;
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

// Loading a snapshot outside of boot (for example after reconnecting the API)
// must follow the same migration path as initial startup.  Returning whether
// the serialized payload changed lets callers persist only real upgrades.
function loadWorkspaceSnapshot(raw) {
  const before = JSON.stringify(raw);
  DATA = migrateWorkspaceData(raw);
  return before !== JSON.stringify(DATA);
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

function restoreHistoricalPlanCompletions() {
  if (!DATA.meta) DATA.meta = {};
  if (DATA.meta.planCompletionRepairVersion === 1) return false;
  const completedById = new Map();
  const completedByDateAndText = new Map();
  const dailyHistory = DATA.history && DATA.history.daily;
  Object.values(isPlainObject(dailyHistory) ? dailyHistory : {}).forEach(record => {
    (Array.isArray(record && record.snapshots) ? record.snapshots : []).forEach(snapshot => {
      const plan = snapshot && snapshot.tasks && snapshot.tasks.dailyPlan;
      ['morning', 'afternoon', 'evening'].forEach(slot => {
        (plan && Array.isArray(plan[slot]) ? plan[slot] : []).forEach(task => {
          if (!task || !task.done) return;
          const completedAt = task.completedAt || snapshot.savedAt || new Date().toISOString();
          if (task.id) completedById.set(String(task.id), completedAt);
          completedByDateAndText.set(String(task.dueDate || record.date || '') + '|' + metricTaskKey(task), completedAt);
        });
      });
    });
  });
  let restored = 0;
  ['morning', 'afternoon', 'evening'].forEach(slot => {
    (DATA.tasks.dailyPlan[slot] || []).forEach(task => {
      if (task.done || !task.dueDate || task.dueDate >= todayKey()) return;
      const completedAt = completedById.get(String(task.id)) || completedByDateAndText.get(String(task.dueDate) + '|' + metricTaskKey(task));
      if (!completedAt) return;
      task.done = true;
      task.completedAt = completedAt;
      task.updatedAt = completedAt;
      restored++;
    });
  });
  DATA.meta.planCompletionRepairVersion = 1;
  return true;
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
  if (restoreHistoricalPlanCompletions()) changed = true;
  return changed;
}

// ========================================================================
// CALC HELPERS
// ========================================================================
function calcTaskPercent(tasks) {
  if (!tasks || tasks.length === 0) return 0;
  return Math.round(tasks.filter(t => t.done).length / tasks.length * 100);
}

function dayElapsedPercent(now = new Date()) {
  const minutesElapsed = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  return Math.min(100, Math.max(0, Math.round(minutesElapsed / (24 * 60) * 100)));
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

function taskListHTML(path, tasks, options = {}) {
  let html = '<ul class="task-list">';
  if (!tasks || tasks.length === 0) {
    html += emptyStateHTML('📝', '暂无任务', '在下方输入框添加第一条任务');
  } else {
    for (const t of tasks) {
      html += '<li class="task-item ' + (t.done ? 'done' : '') + '">' +
        '<div class="task-checkbox ' + (t.done ? 'done' : '') + '" data-path="' + path + '" data-id="' + t.id + '" role="checkbox" aria-checked="' + t.done + '" aria-label="' + escapeHTML((t.done ? '取消完成：' : '完成：') + t.text) + '" tabindex="0">' + (t.done ? '✓' : '') + '</div>' +
        (options.showTime ? '<input class="task-time-input" type="time" step="1800" value="' + escapeAttribute(normalizePlanTime(t.scheduledTime, options.defaultTime || '09:00')) + '" data-task-time data-path="' + path + '" data-id="' + t.id + '" aria-label="调整任务时间（每半小时）：' + escapeAttribute(t.text) + '">' : '') +
        '<span class="task-text" data-path="' + path + '" data-id="' + t.id + '" title="双击编辑">' + escapeHTML(t.text) + '</span>' +
        '<button class="task-delete" data-path="' + path + '" data-id="' + t.id + '" title="删除" aria-label="删除任务：' + escapeHTML(t.text) + '">✕</button>' +
      '</li>';
    }
  }
  html += '</ul>';
  html += '<div class="add-task-row">' +
    (options.showTime ? '<input class="add-task-time" type="time" step="1800" value="' + escapeAttribute(options.defaultTime || '09:00') + '" data-schedule-time data-path="' + path + '" aria-label="任务时间（每半小时）">' : '') +
    '<input class="add-task-input" data-path="' + path + '"' + (options.planDate ? ' data-due-date="' + escapeAttribute(options.planDate) + '"' : '') + ' placeholder="添加任务，回车快速创建" aria-label="添加任务">' +
    '<button class="add-btn" data-path="' + path + '"' + (options.planDate ? ' data-due-date="' + escapeAttribute(options.planDate) + '"' : '') + '>添加</button>' +
    '</div>';
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
  const source = Array.isArray(log.tags)
    ? log.tags
    : String(log.tags || '').split(/[,，;；、]+/);
  return source
    .map(tag => String(tag || '').trim())
    .filter(Boolean);
}

const READING_TYPES = ['期刊论文', '会议论文', '预印本', '学位论文', '图书', '图书章节', '报告', '网页', '数据集', '其他文献'];
const READING_DOMAIN_SUGGESTIONS = ['矩阵博弈', 'LLMs后训练', '多智能体强化学习', '强化学习', '自然语言处理', '知识图谱', '计算机视觉', '其他'];
const READING_TAG_COLORS = [
  '#4778df', '#169b91', '#c6802b', '#7958cf',
  '#d35b78', '#5f70ba', '#4b9a62', '#c7613c',
  '#2e9cbd', '#9b6a3e', '#a657d1', '#6f8f32'
];
const READING_TAG_LIGHT_COLORS = [
  '#88c3b0', '#79c0b8', '#d3a35c', '#a083d3',
  '#d487a2', '#8e9fd2', '#79ba8e', '#d27e63',
  '#7dbbd1', '#ba966e', '#a878cf', '#a5bd70'
];
// Keep the overview labels deterministic and easy to scan. The Chinese
// collator orders Chinese names by their pronunciation while also handling
// Latin labels and embedded numbers (for example, “Q-Learning” and “SDs”).
const READING_LOG_LABEL_COLLATOR = new Intl.Collator('zh-CN', {
  numeric: true,
  sensitivity: 'base'
});
function sortReadingLogLabels(values) {
  return [...values].sort((a, b) => {
    const left = String(a || '').trim();
    const right = String(b || '').trim();
    return READING_LOG_LABEL_COLLATOR.compare(left, right) || left.localeCompare(right);
  });
}

function readingLogDomainOptions() {
  const existing = (DATA.learning.research.readingLogs || []).map(log => readingLogDomain(log));
  return Array.from(new Set([...READING_DOMAIN_SUGGESTIONS, ...existing.map(value => String(value || '').trim()).filter(Boolean)]));
}

function readingLogJournalOptions() {
  const defaults = ['Nature', 'Nature Communications', 'Science', 'NeurIPS', 'ICML', 'ICLR'];
  const existing = (DATA.learning.research.readingLogs || []).map(log => readingLogJournal(log));
  return Array.from(new Set([...defaults, ...existing.map(value => String(value || '').trim()).filter(Boolean)]));
}

function readingLogAuthorOptions() {
  return Array.from(new Set((DATA.learning.research.readingLogs || [])
    .flatMap(log => readingLogAuthors(log))
    .map(value => String(value || '').trim())
    .filter(Boolean)));
}

function readingLogSubtagOptions() {
  return sortReadingLogLabels(Array.from(new Set((DATA.learning.research.readingLogs || [])
    .flatMap(log => editableReadingLogTags(log))
    .map(value => String(value || '').trim())
    .filter(Boolean))));
}

function readingLogType(log) {
  return String(log.type || log.itemType || '其他文献').trim() || '其他文献';
}

function readingLogDomain(log) {
  const explicit = String(log.domain || log.field || '').trim();
  return explicit || '未指定领域';
}

function readingLogJournal(log) {
  return String(log.journal || log.venue || log.publication || '').trim();
}

function readingLogAuthors(log) {
  const source = Array.isArray(log.authors) ? log.authors : (log.authors || log.author || '');
  return (Array.isArray(source) ? source : String(source).split(/[,，;；、]+/))
    .map(author => String(author || '').trim())
    .filter(Boolean)
    .filter((author, index, authors) => authors.indexOf(author) === index);
}

function readingLogPublicationYear(log) {
  const explicit = [log.publicationYear, log.publishedYear, log.year]
    .map(value => String(value == null ? '' : value).trim())
    .map(value => value.match(/\b(?:19|20)\d{2}\b/))
    .find(Boolean);
  if (explicit) return explicit[0];

  const rawTags = Array.isArray(log.tags)
    ? log.tags
    : String(log.tags || '').split(/[,，;；、\s]+/);
  const inferred = rawTags
    .map(tag => String(tag || '').trim())
    .find(tag => /^(?:19|20)\d{2}$/.test(tag));
  return inferred || '';
}

function readingLogStructuredTags(log) {
  return [readingLogJournal(log), ...readingLogAuthors(log)].filter(Boolean);
}

function readingLogStructuredTagParts(log) {
  const parts = new Set(readingLogStructuredTags(log));
  readingLogStructuredTags(log).forEach(tag => {
    String(tag).split(/\s+/).filter(Boolean).forEach(part => parts.add(part));
  });
  return parts;
}

function normalizedReadingLogTags(log) {
  const publicationYear = readingLogPublicationYear(log);
  const structuredTags = new Set([readingLogDomain(log), publicationYear, ...readingLogStructuredTags(log)]);
  const structuredTagParts = readingLogStructuredTagParts(log);
  const tags = readingLogTags(log).filter(tag => !structuredTags.has(tag) && !structuredTagParts.has(tag));
  return Array.from(new Set([readingLogDomain(log), publicationYear, ...readingLogStructuredTags(log), ...tags].filter(Boolean)));
}

function editableReadingLogTags(log) {
  const structuredTags = new Set([readingLogDomain(log), readingLogPublicationYear(log), ...readingLogStructuredTags(log)]);
  const structuredTagParts = readingLogStructuredTagParts(log);
  return Array.from(new Set(readingLogTags(log).filter(tag => !structuredTags.has(tag) && !structuredTagParts.has(tag))));
}

function readingLogTagLabel(log) {
  const tags = normalizedReadingLogTags(log);
  return tags.length ? tags.join(' / ') : '未分类';
}

// 主标签优先使用分散的色相，避免相邻研究类别同时落在绿色系。
const READING_DOMAIN_COLOR_ORDER = [3, 0, 7, 4, 8, 2, 10, 5, 9, 1, 6, 11];

function readingLogDomainColorIndex(tag) {
  const target = String(tag || '').trim();
  const logs = typeof DATA !== 'undefined' ? DATA.learning?.research?.readingLogs || [] : [];
  const domains = Array.from(new Set(logs.map(log => readingLogDomain(log)).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, 'zh-CN'));
  const position = domains.indexOf(target);
  if (position < 0) return null;
  return READING_DOMAIN_COLOR_ORDER[position % READING_DOMAIN_COLOR_ORDER.length];
}

function readingLogTagColorIndex(tag) {
  const target = String(tag || '').trim();
  const domainIndex = readingLogDomainColorIndex(target);
  if (domainIndex !== null) return domainIndex;
  let hash = 0;
  for (const character of target) hash = (hash * 31 + character.codePointAt(0)) >>> 0;

  // Keep colors stable for the same label while avoiding palette collisions
  // between labels currently visible in the reading log whenever possible.
  const knownLabels = new Set();
  const logs = typeof DATA !== 'undefined' ? DATA.learning?.research?.readingLogs || [] : [];
  logs.forEach(log => normalizedReadingLogTags(log).forEach(label => knownLabels.add(label)));
  const occupied = new Set();
  for (const label of Array.from(knownLabels).sort((a, b) => a.localeCompare(b))) {
    let labelHash = 0;
    for (const character of label) labelHash = (labelHash * 31 + character.codePointAt(0)) >>> 0;
    let index = labelHash % READING_TAG_COLORS.length;
    while (occupied.has(index) && occupied.size < READING_TAG_COLORS.length) index = (index + 1) % READING_TAG_COLORS.length;
    occupied.add(index);
    if (label === target) return index;
  }
  return hash % READING_TAG_COLORS.length;
}

function readingLogTagColorClass(tag) {
  return 'reading-log-tag-color-' + readingLogTagColorIndex(tag);
}

function readingLogTagColorValue(tag) {
  return READING_TAG_COLORS[readingLogTagColorIndex(tag)];
}

function readingLogTagLightColorValue(tag) {
  return READING_TAG_LIGHT_COLORS[readingLogTagColorIndex(tag)];
}

function readingLogTagPillsHTML(log) {
  const domain = readingLogDomain(log);
  return normalizedReadingLogTags(log).map((tag, index) =>
    '<button class="reading-log-pill reading-log-tag-pill' + (index === 0 && tag === domain ? ' is-primary' : '') + (activeReadingLogTags.includes(tag) ? ' is-active' : '') + ' ' + readingLogTagColorClass(tag) + '" type="button" data-reading-tag="' + escapeAttribute(tag) + '" title="按标签筛选：' + escapeAttribute(tag) + '" aria-label="按标签筛选：' + escapeAttribute(tag) + '">' + escapeHTML(tag) + '</button>'
  ).join('');
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
  // 历史阅读记录始终保留；热力图会单独按近六个月的时间窗口筛选显示。
  return false;
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
  const logDomains = new Map();
  const logTags = new Map();
  logs.forEach(log => {
    const domain = readingLogDomain(log);
    logDomains.set(domain, (logDomains.get(domain) || 0) + 1);
    normalizedReadingLogTags(log).forEach(label => {
      logTags.set(label, (logTags.get(label) || 0) + 1);
    });
  });
  const domains = Array.from(logDomains.entries())
    .map(([label, count]) => ({ label, count, percent: logs.length ? Math.round(count / logs.length * 100) : 0 }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  const tags = Array.from(logTags.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  const dates = logs.map(l => l.date).filter(Boolean).sort();
  const recentYears = dates.length ? dates[dates.length - 1] + ' / ' + dates[0] : '暂无记录';
  const daysWithLogs = new Set(logs.map(l => l.date).filter(Boolean)).size;
  const today = todayKey(new Date());
  const todayCount = logs.filter(log => log.date === today).length;
  const latestDate = dates.length ? dates[dates.length - 1] : '';
  return { total: logs.length, loaded: logs.length, domains, tags, recentYears, tagged: tags.length, localLogs: logs.length, connected, daysWithLogs, todayCount, latestDate };
}

function literatureDomainPieChartHTML(stats) {
  if (!stats.domains || !stats.domains.length) return '<div class="literature-pie-wrap"><div class="literature-pie-figure"><div class="literature-pie-center"><div><div class="literature-pie-center-value">0</div><div class="literature-pie-center-label">文献数量</div></div></div></div><div class="literature-pie-legend"><div class="literature-pie-legend-item"><span class="literature-pie-dot" style="background:#d4dce8"></span><span class="literature-pie-label">未指定领域</span><span class="literature-pie-pct">0</span></div></div></div>';
  const total = stats.total || stats.domains.reduce((sum, t) => sum + t.count, 0);
  const hasActiveDomain = stats.domains.some(domain => activeReadingLogTags.includes(domain.label));
  const cx = 70, cy = 70, r = 58;
  let cumulative = 0;
  let slices = '';
  let legend = '';
  stats.domains.forEach((domain, i) => {
    const angle = (domain.count / total) * 2 * Math.PI;
    const startAngle = cumulative;
    cumulative += angle;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(startAngle + angle);
    const y2 = cy + r * Math.sin(startAngle + angle);
    const largeArc = angle > Math.PI ? 1 : 0;
    const color = readingLogTagLightColorValue(domain.label);
    const accessibleLabel = domain.label + '，' + domain.count + ' 篇，占 ' + domain.percent + '%';
    slices += '<path class="literature-pie-slice' + (activeReadingLogTags.includes(domain.label) ? ' is-active' : '') + '" data-pie-index="' + i + '" data-pie-label="' + escapeHTML(domain.label) + '" data-reading-tag="' + escapeAttribute(domain.label) + '" data-pie-count="' + domain.count + '" tabindex="0" role="button" aria-pressed="' + activeReadingLogTags.includes(domain.label) + '" aria-label="' + escapeHTML(accessibleLabel) + '" d="M' + cx + ',' + cy + ' L' + x1.toFixed(2) + ',' + y1.toFixed(2) +
      ' A' + r + ',' + r + ' 0 ' + largeArc + ',1 ' + x2.toFixed(2) + ',' + y2.toFixed(2) + ' Z" ' +
      'fill="' + color + '" stroke="var(--card-bg)" stroke-width="2">' +
      '<title>' + escapeHTML(domain.label) + ': ' + domain.count + ' (' + domain.percent + '%)</title></path>';
    legend += '<div class="literature-pie-legend-item' + (activeReadingLogTags.includes(domain.label) ? ' is-active' : '') + '" data-pie-index="' + i + '" data-pie-label="' + escapeHTML(domain.label) + '" data-reading-tag="' + escapeAttribute(domain.label) + '" data-pie-count="' + domain.count + '" tabindex="0" role="button" aria-pressed="' + activeReadingLogTags.includes(domain.label) + '" aria-label="按主标签筛选：' + escapeHTML(accessibleLabel) + '" style="--pie-color:' + color + '">' +
      '<span class="literature-pie-dot" style="background:' + color + '"></span>' +
      '<span class="literature-pie-label">' + escapeHTML(domain.label) + '</span>' +
      '<span class="literature-pie-pct">' + domain.count + '</span>' +
    '</div>';
  });
  return '<div class="literature-pie-wrap' + (hasActiveDomain ? ' has-active' : '') + '">' +
    '<div class="literature-pie-figure">' +
      '<svg class="literature-pie-svg" viewBox="0 0 140 140" width="148" height="148" aria-label="文献领域分布饼图">' + slices + '</svg>' +
      '<div class="literature-pie-center"><div><div class="literature-pie-center-value">' + (stats.total || 0) + '</div><div class="literature-pie-center-label">文献数量</div></div></div>' +
    '</div>' +
    '<div class="literature-pie-legend" aria-label="文献领域图例">' + legend + '</div>' +
  '</div>';
}

function literatureTagGroups() {
  const logs = DATA.learning.research.readingLogs || [];
  const unique = values => Array.from(new Set(values.map(value => String(value || '').trim()).filter(Boolean)));
  const groups = [
    { key: 'domain', label: '主标签', tags: sortReadingLogLabels(unique(logs.map(log => readingLogDomain(log)))) },
    { key: 'year', label: '年份', tags: unique(logs.map(log => readingLogPublicationYear(log))).sort((a, b) => b.localeCompare(a)) },
    { key: 'author', label: '作者', tags: sortReadingLogLabels(unique(logs.flatMap(log => readingLogAuthors(log)))) },
    { key: 'journal', label: '发表期刊', tags: sortReadingLogLabels(unique(logs.map(log => readingLogJournal(log)))) },
    { key: 'subtag', label: '子标签', tags: sortReadingLogLabels(unique(logs.flatMap(log => editableReadingLogTags(log)))) }
  ];
  return groups.filter(group => group.tags.length);
}

function literatureOverviewHTML() {
  const stats = literatureOverviewStats();

  // --- Left column: grouped tags ---
  const tagGroups = literatureTagGroups();
  const tagButtonHTML = tag => {
    const isActive = activeReadingLogTags.includes(tag);
    const label = escapeHTML(tag);
    return '<button class="literature-tag-chip ' + readingLogTagColorClass(tag) + (isActive ? ' is-active' : '') + '" type="button" data-reading-tag="' + escapeAttribute(tag) + '" aria-pressed="' + isActive + '" title="筛选标签：' + label + '">' + label + '</button>';
  };
  const tagGroupsHTML = tagGroups.length
    ? tagGroups.map(group => '<section class="literature-tag-group" data-tag-group="' + group.key + '">' +
        '<div class="literature-tag-group-title"><span class="literature-tag-group-dot"></span>' + escapeHTML(group.label) + '<span class="literature-tag-group-count">' + group.tags.length + '</span></div>' +
        '<div class="literature-tag-group-list">' + group.tags.map(tagButtonHTML).join('') + '</div>' +
      '</section>').join('')
    : '<span class="literature-tag-empty">暂无标签</span>';

  const leftHTML = '<section class="literature-overview-panel literature-overview-main">' +
    '<div>' +
      '<div class="literature-overview-kicker">阅读节奏</div>' +
      '<div class="literature-overview-title">本地阅读总览</div>' +
    '</div>' +
    '<div class="literature-tag-groups" aria-label="文献标签分类">' + tagGroupsHTML + '</div>' +
  '</section>';

  // --- Middle column: pie chart (top) + heatmap (bottom) ---
  const pieHTML = '<section class="literature-overview-panel">' +
    '<div class="literature-overview-kicker">阅读构成</div>' +
    '<div class="literature-progress-title" style="margin-top:8px;">文献领域分布</div>' +
    literatureDomainPieChartHTML(stats) +
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
      middleHTML +
      leftHTML +
      checkinHTML +
    '</div>' +
  '</div>';
}

const MS_CYCLE = { pending: 'active', active: 'done', done: 'pending' };
const MS_ICON = { pending: '⚪', active: '🔵', done: '✅' };

function readingLogListHTML() {
  const logs = DATA.learning.research.readingLogs || [];
  if (!logs.length) return emptyStateHTML('📖', '暂无阅读打卡记录', '点击右上角 + 添加你今天读了什么文献');
  const activeTags = activeReadingLogTags;
  const filtered = activeTags.length
    ? logs.filter(log => {
      const tags = new Set(normalizedReadingLogTags(log));
      return activeTags.every(tag => tags.has(tag));
    })
    : logs;
  const ordered = [...filtered].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')) || String(b.id || '').localeCompare(String(a.id || '')));
  const filterHTML = activeTags.length
    ? '<div class="reading-log-filter" role="status" aria-live="polite">' +
        '<span class="reading-log-filter-label">已选 <strong>' + activeTags.length + ' 个标签</strong> · ' + ordered.length + ' 篇</span>' +
        '<div class="reading-log-filter-tags">' + activeTags.map(tag => '<button class="reading-log-filter-tag ' + readingLogTagColorClass(tag) + '" type="button" data-reading-tag="' + escapeAttribute(tag) + '" title="取消筛选：' + escapeAttribute(tag) + '">' + escapeHTML(tag) + ' ×</button>').join('') + '</div>' +
        '<button class="reading-log-filter-clear" type="button" data-action="clear-reading-log-tag" title="清除全部标签筛选" aria-label="清除全部标签筛选">清除</button>' +
      '</div>'
    : '';
  if (!ordered.length) {
    return filterHTML + '<div class="reading-log-empty">没有同时带“' + escapeHTML(activeTags.join('、')) + '”标签的阅读记录。</div>';
  }
  return filterHTML + '<div class="reading-log-scroll">' + ordered.map(log =>
    '<div class="reading-log-row">' +
      '<div class="reading-log-main">' +
        '<button class="reading-log-title" type="button" data-reading-log-edit="' + escapeAttribute(log.id) + '" title="点击编辑：' + escapeAttribute(log.title || '未命名文献') + '" aria-label="编辑阅读记录：' + escapeAttribute(log.title || '未命名文献') + '">' + escapeHTML(log.title || '未命名文献') + '</button>' +
        '<div class="reading-log-meta">' +
          readingLogTagPillsHTML(log) +
        '</div>' +
        '<div class="reading-log-date">' + escapeHTML(log.date || '未记录日期') + '</div>' +
      '</div>' +
          '<button class="inspire-delete reading-log-delete" data-reading-log-del="' + log.id + '" title="删除这条阅读记录" aria-label="删除阅读记录">×</button>' +
    '</div>'
  ).join('') + '</div>';
}

function openReadingLogModal(editingLog = null, supplement = false) {
  let modalTags = editingLog ? editableReadingLogTags(editingLog) : [];
  let draggedTagIndex = -1;
  let dragTargetChip = null;
  let dragTargetSide = '';
  let longPressTimer = null;
  let pointerDragActive = false;
  let pointerDragId = null;
  let pointerPressPoint = null;
  let ignoreTagClickUntil = 0;
  let editingTagIndex = -1;
  let subtagMenuOpen = false;
  const domainValue = editingLog ? (String(editingLog.domain || '').trim() || readingLogDomain(editingLog)) : '';
  const journalValue = editingLog ? readingLogJournal(editingLog) : '';
  const authorsValue = editingLog ? readingLogAuthors(editingLog).join('、') : '';
  const publicationYearValue = editingLog ? readingLogPublicationYear(editingLog) : '';
  const comboOptionsHTML = options => options.map(option => '<button type="button" class="reading-log-domain-option" role="option" aria-selected="false" data-reading-combo-option="' + escapeAttribute(option) + '">' + escapeHTML(option) + '</button>').join('');
  const readingLogComboHTML = ({ inputId, toggleId, menuId, value, placeholder, label, options }) =>
    '<div class="reading-log-combobox">' +
      '<input class="add-task-input reading-log-combobox-input" id="' + inputId + '" autocomplete="off" style="width:100%;" placeholder="' + escapeAttribute(placeholder) + '" value="' + escapeAttribute(value) + '" role="combobox" aria-label="' + escapeAttribute(label) + '" aria-autocomplete="list" aria-controls="' + menuId + '" aria-expanded="false">' +
      '<button type="button" class="reading-log-combobox-toggle" id="' + toggleId + '" aria-label="展开' + escapeAttribute(label) + '选项" aria-expanded="false"><span aria-hidden="true"></span></button>' +
      '<div class="reading-log-domain-menu reading-log-suggestion-menu" id="' + menuId + '" role="listbox" hidden>' + comboOptionsHTML(options) + '</div>' +
    '</div>';
  const subtagOptionsHTML = query => {
    const normalizedQuery = String(query || '').trim().toLocaleLowerCase();
    const options = readingLogSubtagOptions()
      .filter(tag => !modalTags.includes(tag))
      .filter(tag => !normalizedQuery || tag.toLocaleLowerCase().includes(normalizedQuery));
    return options.length
      ? options.map(tag => '<button type="button" class="reading-log-domain-option" role="option" aria-selected="false" data-reading-subtag-option="' + escapeAttribute(tag) + '">' + escapeHTML(tag) + '</button>').join('')
      : '<div class="reading-log-domain-empty">没有可选子标签，可直接输入新标签</div>';
  };
  const tagEditorHTML = () => '<div class="reading-log-tag-picker">' +
    '<div class="reading-log-tag-editor" id="readingLogTagEditor">' +
    modalTags.map((tag, index) => '<span class="reading-log-tag-chip' + (editingTagIndex === index ? ' is-editing' : '') + '" draggable="false" data-reading-tag-index="' + index + '" title="' + (editingTagIndex === index ? '编辑子标签' : '长按拖动；双击编辑子标签') + '">' +
      '<span class="reading-log-tag-drag" aria-hidden="true">⠿</span>' +
      (editingTagIndex === index
        ? '<input class="reading-log-tag-edit-input" data-edit-reading-tag="' + index + '" aria-label="编辑子标签 ' + escapeAttribute(tag) + '" value="' + escapeAttribute(tag) + '" autocomplete="off">'
        : '<span class="reading-log-tag-label">' + escapeHTML(tag) + '</span>') +
      '<button type="button" class="reading-log-tag-remove" draggable="false" data-remove-reading-tag="' + escapeAttribute(tag) + '" aria-label="移除子标签 ' + escapeAttribute(tag) + '">×</button>' +
    '</span>').join('') +
    '<input id="readingLogTagInput" class="reading-log-tag-input" placeholder="输入或选择多个子标签" aria-label="添加子标签" autocomplete="off" aria-controls="readingLogSubtagSuggestions" aria-expanded="' + String(subtagMenuOpen) + '">' +
    '<button type="button" class="reading-log-combobox-toggle reading-log-tag-toggle' + (subtagMenuOpen ? ' is-open' : '') + '" id="readingLogTagToggle" aria-label="展开子标签选项" aria-expanded="' + String(subtagMenuOpen) + '"><span aria-hidden="true"></span></button>' +
    '</div>' +
    '<div class="reading-log-domain-menu reading-log-suggestion-menu reading-log-subtag-menu" id="readingLogSubtagSuggestions" role="listbox"' + (subtagMenuOpen ? '' : ' hidden') + '>' + subtagOptionsHTML('') + '</div>' +
    '</div>';
  let html = '<div class="modal-content" style="max-width:500px;">' +
    '<h3 style="margin-bottom:16px;">' + (editingLog ? '编辑文献打卡' : (supplement ? '补卡' : '添加文献打卡')) + '</h3>' +
    '<div style="display:grid;gap:12px;">' +
        '<div><label style="font-size:12px;color:var(--text-muted);">文献名称</label><input class="add-task-input" id="readingLogTitle" style="width:100%;margin-top:4px;" placeholder="输入文献名称" value="' + escapeAttribute(editingLog?.title || '') + '"></div>' +
      '<div class="reading-log-domain-field"><label style="font-size:12px;color:var(--text-muted);">主标签（文献领域，用于饼图统计）</label>' + readingLogComboHTML({ inputId: 'readingLogDomain', toggleId: 'readingLogDomainToggle', menuId: 'readingLogDomainSuggestions', value: domainValue, placeholder: '输入或选择主标签，如：矩阵博弈、LLMs后训练', label: '主标签', options: readingLogDomainOptions() }) + '<div class="reading-log-domain-hint">已有领域会在输入时提示；输入新领域并保存即可创建</div></div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">发表年份（仅填写年份）</label><input class="add-task-input reading-log-publication-year" id="readingLogPublicationYear" type="text" inputmode="numeric" maxlength="4" pattern="(?:19|20)\\d{2}" style="width:100%;margin-top:4px;" placeholder="如：2025" value="' + escapeAttribute(publicationYearValue) + '"></div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">发表期刊名称（作为标签显示）</label>' + readingLogComboHTML({ inputId: 'readingLogJournal', toggleId: 'readingLogJournalToggle', menuId: 'readingLogJournalSuggestions', value: journalValue, placeholder: '输入或选择发表期刊名称，如：Nature、NeurIPS', label: '发表期刊名称', options: readingLogJournalOptions() }) + '</div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">作者（作为标签显示，多位作者用逗号分隔）</label>' + readingLogComboHTML({ inputId: 'readingLogAuthors', toggleId: 'readingLogAuthorsToggle', menuId: 'readingLogAuthorsSuggestions', value: authorsValue, placeholder: '输入或选择作者，可用逗号分隔多人', label: '作者', options: readingLogAuthorOptions() }) + '</div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">子标签（可添加多个）</label>' + tagEditorHTML() + '<div class="reading-log-tag-hint">长按标签可拖动排序；双击标签可编辑；新标签默认添加到末尾</div></div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">文献类型</label><div class="reading-log-select-wrap"><select class="add-task-input reading-log-select" id="readingLogType" style="width:100%;">' + READING_TYPES.map(type => '<option value="' + escapeAttribute(type) + '"' + (readingLogType(editingLog || {}) === type ? ' selected' : '') + '>' + escapeHTML(type) + '</option>').join('') + '</select><span class="reading-log-select-chevron" aria-hidden="true"></span></div></div>' +
      '<div><label style="font-size:12px;color:var(--text-muted);">打卡时间</label><div style="position:relative;margin-top:4px;"><input class="add-task-input" id="readingLogDate" type="date" style="width:100%;padding-right:12px;" value="' + escapeAttribute(editingLog?.date || new Date().toISOString().slice(0, 10)) + '"><button class="card-btn reading-log-random-btn" type="button" id="randomReadingLogDate" title="根据发表年份随机生成补卡时间" aria-label="随机生成补卡时间"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 12a9 9 0 1 1-2.64-6.36L21 8"></path><path d="M21 3v5h-5"></path></svg></button></div>' + (supplement ? '<div style="font-size:11px;color:var(--text-muted);margin-top:4px;">随机日期范围：文章发表后至今天</div>' : '') + '</div>' +
    '</div>' +
    '<div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end;">' +
      '<button class="btn btn-outline btn-sm" type="button" id="cancelReadingLog">取消</button>' +
      '<button class="btn btn-primary btn-sm" id="confirmReadingLog">' + (editingLog ? '保存修改' : '确认添加') + '</button>' +
  '</div>' +
  '</div>';
  showModal(html);
  document.getElementById('cancelReadingLog').addEventListener('click', closeModal);
  document.getElementById('randomReadingLogDate').addEventListener('click', () => {
    const year = document.getElementById('readingLogPublicationYear').value.match(/^(?:19|20)\d{2}$/)?.[0];
    if (!year) { showToast('请先填写有效的发表年份', 'warning'); return; }
    const start = new Date(Number(year), 0, 1);
    const end = new Date(); end.setHours(0, 0, 0, 0);
    if (start > end) { showToast('发表年份不能晚于当前日期', 'warning'); return; }
    const day = start.getTime() + Math.floor(Math.random() * (end.getTime() - start.getTime() + 86400000));
    document.getElementById('readingLogDate').value = todayKey(new Date(day));
  });
  const bindReadingLogCombo = ({ inputId, toggleId, menuId, getOptions, queryValue = value => value, selectValue = (input, value) => { input.value = value; } }) => {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    let highlightedIndex = -1;
    const setMenuOpen = open => {
      menu.hidden = !open;
      input.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-expanded', String(open));
      toggle.classList.toggle('is-open', open);
      if (!open) highlightedIndex = -1;
    };
    const renderOptions = () => {
      const normalizedQuery = String(queryValue(input.value) || '').trim().toLocaleLowerCase();
      const options = getOptions().filter(option => !normalizedQuery || option.toLocaleLowerCase().includes(normalizedQuery));
      menu.innerHTML = options.length
        ? comboOptionsHTML(options)
        : '<div class="reading-log-domain-empty">输入内容后即可创建新选项</div>';
      highlightedIndex = -1;
    };
    const updateHighlight = index => {
      const options = Array.from(menu.querySelectorAll('[data-reading-combo-option]'));
      if (!options.length) {
        highlightedIndex = -1;
        return;
      }
      highlightedIndex = Math.max(0, Math.min(index, options.length - 1));
      options.forEach((option, optionIndex) => {
        const active = optionIndex === highlightedIndex;
        option.classList.toggle('is-highlighted', active);
        option.setAttribute('aria-selected', String(active));
      });
      options[highlightedIndex].scrollIntoView({ block: 'nearest' });
    };
    const selectOption = option => {
      if (!option) return;
      selectValue(input, option.dataset.readingComboOption || '');
      setMenuOpen(false);
      input.focus();
    };
    toggle.addEventListener('mousedown', event => event.preventDefault());
    toggle.addEventListener('click', () => {
      const willOpen = menu.hidden;
      renderOptions();
      setMenuOpen(willOpen);
      if (willOpen) input.focus();
    });
    input.addEventListener('focus', () => {
      renderOptions();
      setMenuOpen(true);
    });
    input.addEventListener('input', () => {
      renderOptions();
      setMenuOpen(true);
    });
    input.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (menu.hidden) {
          renderOptions();
          setMenuOpen(true);
        }
        const options = menu.querySelectorAll('[data-reading-combo-option]');
        if (!options.length) return;
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        const nextIndex = highlightedIndex < 0
          ? (direction > 0 ? 0 : options.length - 1)
          : (highlightedIndex + direction + options.length) % options.length;
        updateHighlight(nextIndex);
        return;
      }
      if (event.key === 'Enter' && !menu.hidden && highlightedIndex >= 0) {
        event.preventDefault();
        selectOption(menu.querySelectorAll('[data-reading-combo-option]')[highlightedIndex]);
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
      }
    });
    input.addEventListener('blur', () => setTimeout(() => setMenuOpen(false), 160));
    menu.addEventListener('mousedown', event => event.preventDefault());
    menu.addEventListener('click', event => {
      const option = event.target.closest('[data-reading-combo-option]');
      if (!option) return;
      selectOption(option);
    });
    renderOptions();
  };
  bindReadingLogCombo({
    inputId: 'readingLogDomain',
    toggleId: 'readingLogDomainToggle',
    menuId: 'readingLogDomainSuggestions',
    getOptions: readingLogDomainOptions
  });
  bindReadingLogCombo({
    inputId: 'readingLogJournal',
    toggleId: 'readingLogJournalToggle',
    menuId: 'readingLogJournalSuggestions',
    getOptions: readingLogJournalOptions
  });
  bindReadingLogCombo({
    inputId: 'readingLogAuthors',
    toggleId: 'readingLogAuthorsToggle',
    menuId: 'readingLogAuthorsSuggestions',
    getOptions: readingLogAuthorOptions,
    queryValue: value => String(value || '').split(/[,，;；、]+/).pop(),
    selectValue: (input, value) => {
      const parts = String(input.value || '').split(/[,，;；、]+/).slice(0, -1).map(part => part.trim()).filter(Boolean);
      input.value = [...parts, value].join('、');
    }
  });
  const replaceModalTagEditor = () => {
    const picker = document.querySelector('.reading-log-tag-picker');
    if (!picker) return;
    draggedTagIndex = -1;
    dragTargetChip = null;
    dragTargetSide = '';
    pointerDragActive = false;
    pointerDragId = null;
    pointerPressPoint = null;
    picker.outerHTML = tagEditorHTML();
    bindModalTagEditor();
  };
  let subtagHighlightedIndex = -1;
  const addModalTag = (value, keepMenuOpen = false) => {
    // Commas delimit multiple tags; whitespace is part of a tag name so
    // entries such as “AI 安全” remain a single subtag.
    String(value || '').split(/[,，;；、]+/).map(tag => tag.trim()).filter(Boolean).forEach(tag => {
      if (!modalTags.includes(tag)) modalTags.push(tag);
    });
    subtagMenuOpen = keepMenuOpen;
    subtagHighlightedIndex = -1;
    replaceModalTagEditor();
    if (keepMenuOpen) requestAnimationFrame(() => document.getElementById('readingLogTagInput')?.focus());
  };
  const finishModalTagEdit = (index, value, input = null) => {
    if (editingTagIndex !== index) return;
    const next = String(value || '').trim();
    if (!next) {
      input?.focus();
      return;
    }
    if (modalTags.some((tag, tagIndex) => tagIndex !== index && tag === next)) {
      showToast('该子标签已存在，请换一个名称', 'warning');
      input?.focus();
      input?.select();
      return;
    }
    modalTags[index] = next;
    editingTagIndex = -1;
    replaceModalTagEditor();
  };
  const beginModalTagEdit = index => {
    if (!Number.isInteger(index) || index < 0 || index >= modalTags.length) return;
    editingTagIndex = index;
    subtagMenuOpen = false;
    replaceModalTagEditor();
    requestAnimationFrame(() => {
      const editInput = document.querySelector('[data-edit-reading-tag="' + index + '"]');
      editInput?.focus();
      editInput?.select();
    });
  };
  const bindModalTagEditor = () => {
    const editor = document.getElementById('readingLogTagEditor');
    const input = document.getElementById('readingLogTagInput');
    const toggle = document.getElementById('readingLogTagToggle');
    const menu = document.getElementById('readingLogSubtagSuggestions');
    const setSubtagMenuOpen = open => {
      subtagMenuOpen = open;
      menu.hidden = !open;
      input.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-expanded', String(open));
      toggle.classList.toggle('is-open', open);
      if (!open) subtagHighlightedIndex = -1;
    };
    const renderSubtagOptions = () => {
      menu.innerHTML = subtagOptionsHTML(input.value);
      subtagHighlightedIndex = -1;
    };
    const updateSubtagHighlight = index => {
      const options = Array.from(menu.querySelectorAll('[data-reading-subtag-option]'));
      if (!options.length) {
        subtagHighlightedIndex = -1;
        return;
      }
      subtagHighlightedIndex = Math.max(0, Math.min(index, options.length - 1));
      options.forEach((option, optionIndex) => {
        const active = optionIndex === subtagHighlightedIndex;
        option.classList.toggle('is-highlighted', active);
        option.setAttribute('aria-selected', String(active));
      });
      options[subtagHighlightedIndex].scrollIntoView({ block: 'nearest' });
    };
    const selectSubtagOption = option => {
      if (!option) return;
      // The old input's blur handler must not re-add the query (for example, "ip")
      // after selecting an existing option such as "IPD".
      input.value = '';
      addModalTag(option.dataset.readingSubtagOption || '', true);
    };
    const syncTagIndices = () => editor.querySelectorAll('.reading-log-tag-chip').forEach((chip, index) => {
      chip.dataset.readingTagIndex = String(index);
    });
    const moveDraggedTagTo = (targetChip, event) => {
      const sourceIndex = draggedTagIndex;
      const originalTargetIndex = Number(targetChip?.dataset.readingTagIndex);
      if (!targetChip || !Number.isInteger(sourceIndex) || !Number.isInteger(originalTargetIndex) || sourceIndex < 0 || sourceIndex >= modalTags.length) return;
      const rect = targetChip.getBoundingClientRect();
      const moveAfter = event.clientX > rect.left + rect.width / 2;
      const side = moveAfter ? 'after' : 'before';
      if (targetChip === dragTargetChip && side === dragTargetSide) return;
      dragTargetChip = targetChip;
      dragTargetSide = side;
      let targetIndex = originalTargetIndex + (moveAfter ? 1 : 0);
      if (targetIndex > sourceIndex) targetIndex -= 1;
      if (targetIndex === sourceIndex) return;
      const sourceChip = editor.querySelector('.reading-log-tag-chip[data-reading-tag-index="' + sourceIndex + '"]');
      if (!sourceChip) return;
      const [movedTag] = modalTags.splice(sourceIndex, 1);
      modalTags.splice(targetIndex, 0, movedTag);
      if (sourceIndex < originalTargetIndex) targetChip.after(sourceChip);
      else targetChip.before(sourceChip);
      draggedTagIndex = targetIndex;
      syncTagIndices();
    };
    editor.addEventListener('click', event => {
      if (performance.now() < ignoreTagClickUntil) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      const remove = event.target.closest('[data-remove-reading-tag]');
      if (!remove) return;
      event.preventDefault();
      event.stopPropagation();
      modalTags = modalTags.filter(tag => tag !== remove.dataset.removeReadingTag);
      replaceModalTagEditor();
    });
    editor.querySelectorAll('[data-edit-reading-tag]').forEach(editInput => {
      const index = Number(editInput.dataset.editReadingTag);
      editInput.addEventListener('pointerdown', event => event.stopPropagation());
      editInput.addEventListener('click', event => event.stopPropagation());
      editInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          finishModalTagEdit(index, editInput.value, editInput);
        } else if (event.key === 'Escape') {
          event.preventDefault();
          editingTagIndex = -1;
          replaceModalTagEditor();
        }
      });
      editInput.addEventListener('blur', () => {
        setTimeout(() => finishModalTagEdit(index, editInput.value, editInput), 0);
      });
    });
    editor.querySelectorAll('.reading-log-tag-chip').forEach(chip => {
      const startPointerDrag = () => {
        const sourceIndex = Number(chip.dataset.readingTagIndex);
        if (!Number.isInteger(sourceIndex) || sourceIndex < 0 || sourceIndex >= modalTags.length) return;
        draggedTagIndex = sourceIndex;
        dragTargetChip = null;
        dragTargetSide = '';
        pointerDragActive = true;
        editor.classList.add('is-dragging');
        chip.classList.add('is-drag-source');
      };
      const clearPointerDrag = () => {
        if (longPressTimer) clearTimeout(longPressTimer);
        longPressTimer = null;
        pointerDragActive = false;
        pointerDragId = null;
        pointerPressPoint = null;
        draggedTagIndex = -1;
        dragTargetChip = null;
        dragTargetSide = '';
        editor.classList.remove('is-dragging');
        editor.querySelectorAll('.reading-log-tag-chip.is-drag-source').forEach(source => source.classList.remove('is-drag-source'));
      };
      chip.addEventListener('pointerdown', event => {
        if (event.target.closest?.('[data-remove-reading-tag], [data-edit-reading-tag]')) return;
        const sourceIndex = Number(chip.dataset.readingTagIndex);
        if (!Number.isInteger(sourceIndex)) return;
        pointerDragId = event.pointerId;
        pointerPressPoint = { x: event.clientX, y: event.clientY };
        chip.setPointerCapture?.(event.pointerId);
        longPressTimer = setTimeout(() => {
          startPointerDrag();
        }, 320);
      });
      chip.addEventListener('pointermove', event => {
        if (pointerDragId !== event.pointerId) return;
        if (!pointerDragActive) {
          const start = pointerPressPoint || { x: event.clientX, y: event.clientY };
          const moved = Math.hypot(event.clientX - start.x, event.clientY - start.y) > 8;
          // Native mouse drags usually begin moving before a long-press timer
          // can fire (including Computer Use and trackpad input). Start the
          // drag on movement for a mouse, while keeping the long-press gesture
          // for touch/pen pointers to avoid accidental reordering while scrolling.
          if (moved) startPointerDrag();
          if (!pointerDragActive) return;
        }
        event.preventDefault();
        const target = document.elementFromPoint(event.clientX, event.clientY)?.closest?.('.reading-log-tag-chip');
        if (target && target.parentElement === editor) moveDraggedTagTo(target, event);
      });
      chip.addEventListener('pointerup', event => {
        if (pointerDragId !== event.pointerId) return;
        if (pointerDragActive) {
          event.preventDefault();
          // Prevent the release from being interpreted as a click (including
          // an accidental click on a neighbouring tag's remove button).
          ignoreTagClickUntil = performance.now() + 350;
        }
        chip.releasePointerCapture?.(event.pointerId);
        clearPointerDrag();
      });
      chip.addEventListener('pointercancel', event => {
        if (pointerDragId === event.pointerId) chip.releasePointerCapture?.(event.pointerId);
        clearPointerDrag();
      });
      chip.addEventListener('dblclick', event => {
        if (event.target.closest?.('[data-remove-reading-tag]')) return;
        event.preventDefault();
        event.stopPropagation();
        beginModalTagEdit(Number(chip.dataset.readingTagIndex));
      });
    });
    toggle.addEventListener('mousedown', event => event.preventDefault());
    toggle.addEventListener('click', () => {
      const willOpen = menu.hidden;
      renderSubtagOptions();
      setSubtagMenuOpen(willOpen);
      if (willOpen) input.focus();
    });
    input.addEventListener('focus', () => {
      renderSubtagOptions();
      setSubtagMenuOpen(true);
    });
    input.addEventListener('input', () => {
      renderSubtagOptions();
      setSubtagMenuOpen(true);
    });
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter' && !menu.hidden && subtagHighlightedIndex >= 0) {
        event.preventDefault();
        const option = menu.querySelectorAll('[data-reading-subtag-option]')[subtagHighlightedIndex];
        selectSubtagOption(option);
        return;
      }
      if (event.key === 'Enter' || event.key === ',' || event.key === '，') {
        event.preventDefault();
        addModalTag(input.value);
        return;
      }
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (menu.hidden) {
          renderSubtagOptions();
          setSubtagMenuOpen(true);
        }
        const options = menu.querySelectorAll('[data-reading-subtag-option]');
        if (!options.length) return;
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        const nextIndex = subtagHighlightedIndex < 0
          ? (direction > 0 ? 0 : options.length - 1)
          : (subtagHighlightedIndex + direction + options.length) % options.length;
        updateSubtagHighlight(nextIndex);
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        setSubtagMenuOpen(false);
      }
    });
    input.addEventListener('blur', () => setTimeout(() => {
      if (input.value.trim()) addModalTag(input.value);
      else setSubtagMenuOpen(false);
    }, 160));
    menu.addEventListener('mousedown', event => event.preventDefault());
    menu.addEventListener('click', event => {
      const option = event.target.closest('[data-reading-subtag-option]');
      if (!option) return;
      selectSubtagOption(option);
    });
  };
  bindModalTagEditor();
  document.getElementById('confirmReadingLog').addEventListener('click', async () => {
    const confirmButton = document.getElementById('confirmReadingLog');
    if (!confirmButton || confirmButton.disabled) return;
    const title = document.getElementById('readingLogTitle').value.trim();
    const pendingTag = document.getElementById('readingLogTagInput').value;
    if (pendingTag) addModalTag(pendingTag);
    const tags = Array.from(new Set(modalTags));
    const domain = document.getElementById('readingLogDomain').value.trim();
    const journal = document.getElementById('readingLogJournal').value.trim();
    const authors = readingLogAuthors({ authors: document.getElementById('readingLogAuthors').value });
    const publicationYear = document.getElementById('readingLogPublicationYear').value.replace(/\D/g, '').slice(0, 4);
    const type = document.getElementById('readingLogType').value;
    const date = document.getElementById('readingLogDate').value;
    if (!title || !date || !domain) { showToast('请填写文献名称、研究领域和打卡时间', 'warning'); return; }
    if (publicationYear && !/^(?:19|20)\d{2}$/.test(publicationYear)) { showToast('发表年份请填写 1900 至 2099 年之间的四位数字', 'warning'); return; }
    const publicationStart = publicationYear ? todayKey(new Date(Number(publicationYear), 0, 1)) : '';
    if ((supplement && publicationStart && date < publicationStart) || date > todayKey(new Date())) {
      showToast(supplement ? '补卡日期必须在文章发表后至今天之间' : '打卡日期不能晚于今天', 'warning');
      return;
    }
    const logs = DATA.learning.research.readingLogs || [];
    DATA.learning.research.readingLogs = logs;
    const titleKey = readingLogTitleKey(title);
    const existing = logs.find(log => log.id !== editingLog?.id && readingLogTitleKey(log.title) === titleKey);
    if (existing) {
      showToast('该文献已于 ' + (existing.date || '此前') + ' 打卡，已阻止重复记录', 'warning');
      return;
    }
    confirmButton.disabled = true;
    confirmButton.setAttribute('aria-busy', 'true');
    confirmButton.textContent = editingLog ? '保存中…' : '检查中…';
    const zoteroStatus = editingLog ? null : await zoteroReadStatusForTitle(title);
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
    // Journal and authors are first-class visible/filterable tags, but remain
    // separate structured fields so they are never copied into the subtag editor.
    const persistedTags = Array.from(new Set([domain, publicationYear, journal, ...authors, ...tags].filter(Boolean)));
    if (editingLog) {
      Object.assign(editingLog, { date, title, type, domain, journal, authors, publicationYear, tags: persistedTags });
    } else {
      logs.push({ id: uid(), date, title, type, domain, journal, authors, publicationYear, tags: persistedTags, isSupplement: supplement });
    }
    const pruned = pruneReadingLogs();
    save();
    closeModal();
    rerender();
    showToast(editingLog ? '阅读记录已更新' : (supplement ? '补卡成功' : (pruned ? '已添加阅读记录，并清理历史' : '已添加阅读记录')), 'success');
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
  if (currentPage.startsWith('civil-')) {
    requestAnimationFrame(() => {
      const tabs = document.querySelector('.civil-module-tabs');
      const activeTab = tabs && tabs.querySelector('.civil-module-tab.is-active');
      if (activeTab) activeTab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  }
  // Entering either the English overview or the reading room is the daily
  // refresh trigger.  The helper owns a session/date guard, so this lifecycle
  // hook remains safe across React commits and ordinary rerenders.
  maybeAutoRefreshEnglishReading();
  // The weather control lives in the persistent React top bar, so it must be
  // initialized regardless of which page is currently open.
  if (!weatherAutoRefreshStarted) {
    weatherAutoRefreshStarted = true;
    fetchWeather({ force: true });
  }
  // The persistent top bar is committed by React after the runtime's first
  // render; repaint here as well to cover that initial mount race.
  paintWeather();
  if (currentPage === 'dashboard') {
    requestAnimationFrame(mountDashboardEyes);
  } else {
    dashboardEyesCleanup();
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
    '<section class="research-idea-hero"><div><div class="research-idea-eyebrow">Idea to Paper Journey</div><h2>' + commaTitleHTML('让一个 Idea，沿着证据长成一篇 Paper') + '</h2><div class="research-idea-hero-copy">从最初的问题意识出发，持续沉淀研究动机、相关工作、方法设计与实验方案，让每一次判断、取舍和修改都有迹可循。</div></div>' +
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
      '<section class="research-lab-head research-lab-head--narrative"><div><div class="research-lab-eyebrow">Evidence Building</div><h2>' + commaTitleHTML('让一个假设，在实验中经得起检验') + '</h2><p>实验从一个清晰的问题开始；建立 Idea 后，把方案、结果与分析沉淀为可复盘的验证链路。</p></div></section>' +
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
    '<section class="research-lab-head research-lab-head--narrative"><div><div class="research-lab-eyebrow">Evidence Building</div><h2>' + commaTitleHTML('让一个假设，在实验中经得起检验') + '</h2><p>围绕同一条 Idea，记录每一次设计、观察与判断，让实验过程可追溯、可复盘。</p></div><div class="research-lab-selector"><label for="researchExperimentIdeaSelect">关联 Idea</label><select id="researchExperimentIdeaSelect" class="research-lab-select">' + options + '</select></div></section>' +
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
  if (!ideas.length) return '<div class="research-paper-page"><section class="research-paper-hero research-paper-hero--narrative"><div><div class="research-paper-eyebrow">Writing to Submission</div><h2>' + commaTitleHTML('让一个发现，在写作中被完整表达') + '</h2><p>从结构化写作到投稿与返修，让每一项成果都有清晰的下一步。</p></div></section><section class="research-paper-onboarding"><span class="research-lab-onboarding-mark">▧</span><div><div class="research-lab-section-kicker">开始写作</div><h3>先从一个明确的 Idea 开始</h3><p>建立研究路径后，即可创建关联论文，并沿着写作、投稿、审稿的节奏持续推进。</p></div><button type="button" class="research-paper-new" data-action="research-experiment-go-ideas">去建立 Idea</button></section></div>';
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
  return '<div class="research-paper-page"><section class="research-paper-hero research-paper-hero--narrative"><div><div class="research-paper-eyebrow">Writing to Submission</div><h2>' + commaTitleHTML('让一个发现，在写作中被完整表达') + '</h2><p>从结构化写作到投稿与返修，让每一项成果都有清晰的下一步。</p></div><div class="research-paper-create"><label for="researchPaperIdeaSelect">关联 Idea</label><select id="researchPaperIdeaSelect" class="research-paper-idea-select">' + ideaOptions + '</select><button type="button" class="research-paper-new" data-action="research-paper-new">＋ 新建论文</button></div></section>' +
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
  return '<div class="research-todo-page"><section class="research-todo-hero"><div><div class="research-todo-eyebrow">Research Action Flow</div><h2>待办</h2><p>记录研究任务，关联对应 Idea，并按照完成期限和优先级逐项推进。</p></div><div class="research-todo-capture"><input id="researchTodoQuickInput" class="research-todo-title-input" placeholder="记下一件需要推进的研究行动…" aria-label="快速添加科研任务"><input id="researchTodoQuickDue" class="research-todo-due-input" type="date" aria-label="完成期限" title="完成期限"><button type="button" data-action="research-todo-quick-add">添加任务</button></div></section>' +
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
const AIR_QUALITY_ENDPOINT = workspaceApiUrl('/api/weather/air-quality');
const GEOCODE_ENDPOINT = workspaceApiUrl('/api/weather/geocode');

// status: 'idle' | 'loading' | 'ready' | 'error'
const weatherState = { status: 'idle', data: null, error: '', place: '' };
let weatherAutoRefreshStarted = false;
let dashboardEyesCleanup = () => {};

// WMO weather interpretation codes → label + glyph (day / night)
const WMO_CODES = {
  0:  ['晴',       '☀️', '🌙'],
  1:  ['晴间多云', '🌤️', '🌙'],
  2:  ['多云',     '⛅', '☁️'],
  3:  ['阴',       '☁️', '☁️'],
  45: ['雾',       '🌫️', '🌫️'],
  48: ['冻雾',     '🌫️', '🌫️'],
  51: ['轻微细雨', '🌦️', '🌧️'],
  53: ['中等细雨', '🌦️', '🌧️'],
  55: ['强细雨',   '🌧️', '🌧️'],
  56: ['轻度冻雨', '🌧️', '🌧️'],
  57: ['强冻雨',   '🌧️', '🌧️'],
  61: ['小雨',     '🌦️', '🌧️'],
  63: ['中雨',     '🌧️', '🌧️'],
  65: ['大雨',     '🌧️', '🌧️'],
  66: ['轻度冻雨', '🌧️', '🌧️'],
  67: ['强冻雨',   '🌧️', '🌧️'],
  71: ['小雪',     '🌨️', '🌨️'],
  73: ['中雪',     '🌨️', '🌨️'],
  75: ['大雪',     '❄️', '❄️'],
  77: ['雪粒',     '🌨️', '🌨️'],
  80: ['小阵雨',   '🌦️', '🌧️'],
  81: ['中到大阵雨', '🌧️', '🌧️'],
  82: ['强阵雨',   '⛈️', '⛈️'],
  85: ['小阵雪',   '🌨️', '🌨️'],
  86: ['大阵雪',   '❄️', '❄️'],
  95: ['雷阵雨',   '⛈️', '⛈️'],
  96: ['雷阵雨伴小冰雹', '⛈️', '⛈️'],
  99: ['强雷阵雨伴冰雹', '⛈️', '⛈️']
};

function wmoInfo(code, isDay) {
  const e = WMO_CODES[code] || ['未知', '🌡️', '🌡️'];
  return { label: e[0], glyph: isDay === 0 ? e[2] : e[1] };
}

// Keep weather symbols in the same quiet, outlined language as the dashboard.
// Emoji have wildly different weights between operating systems and made this
// otherwise restrained panel feel visually inconsistent.
function weatherGlyph(code, isDay, className = '') {
  const rain = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(Number(code));
  const snow = [71, 73, 75, 77, 85, 86].includes(Number(code));
  const cloudy = [2, 3, 45, 48].includes(Number(code));
  const partly = [1].includes(Number(code));
  const sky = isDay === 0
    ? '<path d="M16.2 5.1A6.8 6.8 0 1 0 19 17.8 7.2 7.2 0 0 1 16.2 5.1Z"/>'
    : '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.2v2.1M12 19.7v2.1M2.2 12h2.1M19.7 12h2.1M5.1 5.1l1.5 1.5M17.4 17.4l1.5 1.5M18.9 5.1l-1.5 1.5M6.6 17.4l-1.5 1.5"/>';
  let body = sky;
  if (cloudy || partly || rain || snow) {
    body = (partly ? '<circle cx="8" cy="8" r="3.1"/><path d="M8 2.3v1.4M8 12.3v1.4M2.3 8h1.4M12.3 8h1.4"/>' : '') +
      '<path d="M6.8 17.2h10a4.1 4.1 0 0 0 .4-8.2 5.5 5.5 0 0 0-10.5 1.8A3.3 3.3 0 0 0 6.8 17.2Z"/>';
  }
  if (rain) body += '<path d="M8.5 19.3l-1 2M13 19.3l-1 2M17.5 19.3l-1 2"/>';
  if (snow) body += '<path d="M9 20.1h0M13 20.1h0M17 20.1h0" stroke-width="3" stroke-linecap="round"/>';
  return '<svg class="ov-weather-icon ' + className + '" viewBox="0 0 24 24" fill="none" aria-hidden="true">' + body + '</svg>';
}

function weatherDaylightHTML() {
  const daily = weatherState.data && weatherState.data.daily;
  const format = (value) => value ? new Date(value).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '—';
  return '<div class="personal-daylight">' +
    '<div class="personal-daylight-item"><span class="personal-daylight-icon personal-daylight-icon--sunrise"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h16M6 20h12M12 3v3M5.6 8.6l2.1 2.1M18.4 8.6l-2.1 2.1M3 14h18"/><path d="M7 14a5 5 0 0 1 10 0"/></svg></span><div><small>日出</small><strong>' + format(daily && daily.sunrise && daily.sunrise[0]) + '</strong></div></div>' +
    '<div class="personal-daylight-item"><span class="personal-daylight-icon personal-daylight-icon--sunset"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h16M6 20h12M12 3v3M5.6 8.6l2.1 2.1M18.4 8.6l-2.1 2.1M3 14h18"/><path d="M7 14a5 5 0 0 1 10 0"/></svg></span><div><small>日落</small><strong>' + format(daily && daily.sunset && daily.sunset[0]) + '</strong></div></div>' +
  '</div>';
}

function weatherConfig() {
  const w = (DATA && DATA.settings && DATA.settings.weather) || {};
  return {
    city: w.city || '上海',
    country: typeof w.country === 'string' && w.country ? w.country : '中国',
    province: typeof w.province === 'string' ? w.province : '上海市',
    district: typeof w.district === 'string' ? w.district : '',
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
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,visibility,uv_index,precipitation_probability',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max',
    language: 'zh-CN',
    country_code: cfg.country === '中国' ? 'CN' : '',
    timezone: 'auto',
    forecast_days: '4'
  });

  try {
    const airParams = new URLSearchParams({
      latitude: String(cfg.lat),
      longitude: String(cfg.lon),
      current: 'european_aqi,us_aqi,pm10,pm2_5',
      timezone: 'auto'
    });
    const [res, airResult] = await Promise.all([
      fetch(WEATHER_ENDPOINT + '?' + params.toString(), { cache: 'no-store' }),
      fetch(AIR_QUALITY_ENDPOINT + '?' + airParams.toString(), { cache: 'no-store' }).catch(() => null)
    ]);
    if (!res.ok) {
      let message = '天气服务返回 ' + res.status;
      try { const body = await res.json(); message = body && body.error && body.error.message ? body.error.message : message; } catch (_) { /* keep status */ }
      throw new Error(message);
    }
    const json = await res.json();
    if (!json || !json.current) throw new Error('天气数据格式异常');
    if (airResult && airResult.ok) {
      try { json.air_quality = await airResult.json(); } catch (_) { /* air data is optional */ }
    }
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

function weatherAirQuality(data) {
  const current = data && data.air_quality && data.air_quality.current;
  const aqi = current ? Number(current.european_aqi) : Number.NaN;
  if (!Number.isFinite(aqi)) return { label: '暂无数据', short: '—', level: 'unknown', aqi: '—', pm25: '—', pm10: '—' };
  let label = '优', level = 'good';
  if (aqi > 100) { label = '极差'; level = 'very-poor'; }
  else if (aqi > 80) { label = '很差'; level = 'very-poor'; }
  else if (aqi > 60) { label = '差'; level = 'poor'; }
  else if (aqi > 40) { label = '一般'; level = 'moderate'; }
  else if (aqi > 20) { label = '尚可'; level = 'fair'; }
  return {
    label,
    short: label,
    level,
    aqi: Math.round(aqi),
    pm25: Number.isFinite(Number(current.pm2_5)) ? Math.round(Number(current.pm2_5)) : '—',
    pm10: Number.isFinite(Number(current.pm10)) ? Math.round(Number(current.pm10)) : '—'
  };
}

function weatherPanelHTML() {
  const cfg = weatherConfig();
  const head = '<div class="ov-weather-head">' +
    '<button class="ov-weather-place" data-action="weather-city" title="切换城市">' +
      '<svg class="ov-location-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="10" cy="7" r="2"/></svg><span class="ov-weather-place-name">' + escapeHTML(cfg.city) + '</span><span class="ov-caret">⌄</span>' +
    '</button>' +
    '<div class="ov-weather-head-actions"><button class="ov-weather-city-switch" data-action="weather-city">切换城市</button><button class="ov-weather-locate" data-action="weather-locate" title="使用当前位置" aria-label="使用当前位置">+</button></div>' +
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
  const air = weatherAirQuality(d);
  const daily = d.daily || {};
  const units = d.current_units || {};
  const tempUnit = units.temperature_2m || '°C';
  const visibility = Number.isFinite(Number(cur.visibility)) ? (Number(cur.visibility) / 1000).toFixed(Number(cur.visibility) < 10000 ? 1 : 0) : '—';
  const uv = Number.isFinite(Number(cur.uv_index)) ? Number(cur.uv_index).toFixed(0) : '—';
  const wind = Number.isFinite(Number(cur.wind_speed_10m)) ? (Number(cur.wind_speed_10m) / 3.6).toFixed(1) : '—';
  const metric = (label, value, unit) => '<div class="ov-weather-metric"><span>' + label + '</span><strong>' + value + (unit ? '<small>' + unit + '</small>' : '') + '</strong></div>';
  const metrics = '<div class="ov-weather-metrics">' +
    metric('湿度', Math.round(cur.relative_humidity_2m || 0), '%') +
    metric('风速', wind, 'm/s') +
    metric('紫外线', uv, '') +
    metric('能见度', visibility, 'km') +
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
        '<span class="ov-fc-glyph" title="' + escapeAttribute(fi.label) + '">' + weatherGlyph(daily.weather_code[i], 1, 'ov-weather-icon--small') + '</span>' +
        '<strong>' + Math.round(daily.temperature_2m_max[i]) + '°/' + Math.round(daily.temperature_2m_min[i]) + '°</strong>' +
      '</div>');
    }
    forecast = '<div class="ov-weather-forecast">' + cards.join('') + '</div>';
  }

  const updated = cur.time ? new Date(cur.time).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '';
  const precipitation = Number.isFinite(Number(cur.precipitation_probability)) ? Math.round(Number(cur.precipitation_probability)) + '%' : '—';
  const weatherNote = '<div class="ov-weather-note"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12a6 6 0 0 1 12 0H6Zm6 0v7M9 21h6"/><path d="M5 12H3m18 0h-2M7.8 6.8 6.4 5.4m9.8 1.4 1.4-1.4"/></svg>降水概率 <b>' + precipitation + '</b></span><span>体感 <b>' + Math.round(cur.apparent_temperature) + '°</b></span></div>' +
    '<div class="ov-weather-air"><span>空气质量 <b class="weather-aqi weather-aqi--' + air.level + '">' + escapeHTML(String(air.short)) + '</b></span><span>AQI <strong>' + air.aqi + '</strong></span><span>PM2.5 <strong>' + air.pm25 + '</strong></span><span>PM10 <strong>' + air.pm10 + '</strong></span></div>';

  return '<div class="ov-weather">' + head +
    '<div class="ov-weather-now">' +
      '<div class="ov-weather-glyph" title="' + escapeAttribute(info.label) + '">' + weatherGlyph(cur.weather_code, cur.is_day) + '</div>' +
      '<div style="min-width:0;">' +
        '<div class="ov-weather-temp">' + Math.round(cur.temperature_2m) + '<sup>' + escapeHTML(tempUnit) + '</sup></div>' +
        '<div class="ov-weather-desc"><span>' + escapeHTML(info.label) + '</span><b class="weather-aqi weather-aqi--' + air.level + '">空气' + escapeHTML(String(air.short)) + '</b></div>' +
      '</div>' +
    '</div>' +
    metrics + forecast + weatherNote +
    '<div class="ov-weather-provider"><span>' + (updated ? '更新于 ' + escapeHTML(updated) : '实时天气') + '</span><a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Weather · Open-Meteo</a></div>' +
  '</div>';
}

// A dashboard is a glanceable starting point, not a weather page. Keep the
// live reading available in the hero without giving it a whole column.
function dashboardWeatherCompactHTML() {
  const cfg = weatherConfig();
  if (weatherState.status === 'ready' && weatherState.data && weatherState.data.current) {
    const cur = weatherState.data.current;
    const info = wmoInfo(cur.weather_code, cur.is_day);
    return '<div class="dashboard-weather">' +
      '<button class="dashboard-weather-location" data-action="weather-city" title="切换城市：' + escapeAttribute(cfg.city) + '" aria-label="切换城市，当前' + escapeAttribute(cfg.city) + '"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="10" cy="7" r="2"/></svg></button>' +
      '<button class="dashboard-weather-summary" data-action="weather-detail" title="查看' + escapeAttribute(cfg.city) + '详细天气" aria-label="查看' + escapeAttribute(cfg.city) + '详细天气">' +
        weatherGlyph(cur.weather_code, cur.is_day, 'dashboard-weather-glyph') +
        '<strong>' + Math.round(cur.temperature_2m) + '°</strong><small>' + escapeHTML(info.label) + '</small>' +
      '</button>' +
    '</div>';
  }
  return '<div class="dashboard-weather dashboard-weather--loading"><button class="dashboard-weather-location" data-action="weather-city" title="切换城市：' + escapeAttribute(cfg.city) + '" aria-label="切换城市，当前' + escapeAttribute(cfg.city) + '"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="10" cy="7" r="2"/></svg></button><button class="dashboard-weather-summary" data-action="weather-detail"><small>' + (weatherState.status === 'loading' ? '天气加载中' : '查看天气') + '</small></button></div>';
}

function showWeatherDetails() {
  const backdrop = document.getElementById('weatherPopoverBackdrop');
  const popover = document.getElementById('weatherPopover');
  if (!backdrop || !popover) return;
  popover.innerHTML = '<div class="workspace-weather-popover-toolbar"><div><span>LOCAL WEATHER</span><strong>天气详情</strong></div><button type="button" data-action="weather-detail-close" aria-label="关闭天气详情">×</button></div><div class="workspace-weather-popover-content">' + weatherPanelHTML() + '</div>';
  backdrop.classList.add('show');
  popover.classList.add('show');
  backdrop.setAttribute('aria-hidden', 'false');
  popover.setAttribute('aria-hidden', 'false');
}

function closeWeatherDetails() {
  const backdrop = document.getElementById('weatherPopoverBackdrop');
  const popover = document.getElementById('weatherPopover');
  if (backdrop) { backdrop.classList.remove('show'); backdrop.setAttribute('aria-hidden', 'true'); }
  if (popover) { popover.classList.remove('show'); popover.setAttribute('aria-hidden', 'true'); }
}

// Repaint just the weather panel — avoids a full page rerender
function paintWeather() {
  const slot = document.getElementById('ovWeatherSlot');
  if (slot) slot.innerHTML = weatherPanelHTML();
  const dashboardWeather = document.getElementById('ovDashboardWeather');
  if (dashboardWeather) dashboardWeather.innerHTML = dashboardWeatherCompactHTML();
  const globalDashboardWeather = document.getElementById('globalDashboardWeather');
  if (globalDashboardWeather) globalDashboardWeather.innerHTML = dashboardWeatherCompactHTML();
  const popover = document.getElementById('weatherPopover');
  if (popover && popover.classList.contains('show')) showWeatherDetails();
  const daylightSlot = document.getElementById('ovTimeDaylightSlot');
  if (daylightSlot) daylightSlot.innerHTML = weatherDaylightHTML();
}

function mountDashboardEyes() {
  const eyes = document.getElementById('dashboardEyes');
  if (!eyes) return;
  dashboardEyesCleanup();
  const reset = () => {
    eyes.style.setProperty('--eye-x', '0px');
    eyes.style.setProperty('--eye-y', '0px');
  };
  const followPointer = (event) => {
    const rect = eyes.getBoundingClientRect();
    const x = Math.max(-6, Math.min(6, (event.clientX - (rect.left + rect.width / 2)) / 16));
    const y = Math.max(-5, Math.min(5, (event.clientY - (rect.top + rect.height / 2)) / 16));
    eyes.style.setProperty('--eye-x', x.toFixed(2) + 'px');
    eyes.style.setProperty('--eye-y', y.toFixed(2) + 'px');
  };
  const reactToClick = () => {
    eyes.classList.remove('is-pulsing');
    void eyes.offsetWidth;
    eyes.classList.add('is-pulsing');
  };
  const reactToKey = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    reactToClick();
  };
  document.addEventListener('pointermove', followPointer);
  window.addEventListener('blur', reset);
  eyes.addEventListener('click', reactToClick);
  eyes.addEventListener('keydown', reactToKey);
  dashboardEyesCleanup = () => {
    document.removeEventListener('pointermove', followPointer);
    window.removeEventListener('blur', reset);
    eyes.removeEventListener('click', reactToClick);
    eyes.removeEventListener('keydown', reactToKey);
    dashboardEyesCleanup = () => {};
  };
  reset();
}

const WEATHER_COUNTRIES = [
  ['中国', 'CN'], ['日本', 'JP'], ['韩国', 'KR'], ['新加坡', 'SG'], ['美国', 'US'],
  ['英国', 'GB'], ['加拿大', 'CA'], ['澳大利亚', 'AU'], ['法国', 'FR'], ['德国', 'DE']
];
const CHINA_PROVINCE_CITIES = {
  '北京市': ['北京市'], '天津市': ['天津市'], '上海市': ['上海市'], '重庆市': ['重庆市'],
  '河北省': ['石家庄市', '唐山市', '秦皇岛市', '保定市'], '山西省': ['太原市', '大同市', '晋中市'],
  '辽宁省': ['沈阳市', '大连市', '鞍山市'], '吉林省': ['长春市', '吉林市'], '黑龙江省': ['哈尔滨市', '齐齐哈尔市'],
  '江苏省': ['南京市', '苏州市', '无锡市', '常州市', '南通市'], '浙江省': ['杭州市', '宁波市', '温州市', '嘉兴市', '绍兴市'],
  '安徽省': ['合肥市', '芜湖市', '黄山市'], '福建省': ['福州市', '厦门市', '泉州市'], '江西省': ['南昌市', '赣州市', '九江市'],
  '山东省': ['济南市', '青岛市', '烟台市', '威海市'], '河南省': ['郑州市', '洛阳市', '开封市'],
  '湖北省': ['武汉市', '宜昌市', '襄阳市'], '湖南省': ['长沙市', '株洲市', '岳阳市'],
  '广东省': ['广州市', '深圳市', '珠海市', '佛山市', '东莞市', '惠州市'], '海南省': ['海口市', '三亚市'],
  '四川省': ['成都市', '绵阳市', '乐山市'], '贵州省': ['贵阳市', '遵义市'], '云南省': ['昆明市', '大理市', '丽江市'],
  '陕西省': ['西安市', '咸阳市', '宝鸡市'], '甘肃省': ['兰州市', '天水市'], '青海省': ['西宁市'],
  '台湾省': ['台北市', '高雄市', '台中市'], '内蒙古自治区': ['呼和浩特市', '包头市'],
  '广西壮族自治区': ['南宁市', '桂林市', '柳州市'], '西藏自治区': ['拉萨市'],
  '宁夏回族自治区': ['银川市'], '新疆维吾尔自治区': ['乌鲁木齐市', '喀什市'], '香港特别行政区': ['香港'], '澳门特别行政区': ['澳门']
};
const CHINA_CITY_GEOCODE_NAMES = {
  '北京市':'Beijing','天津市':'Tianjin','上海市':'Shanghai','重庆市':'Chongqing',
  '石家庄市':'Shijiazhuang','唐山市':'Tangshan','秦皇岛市':'Qinhuangdao','保定市':'Baoding',
  '太原市':'Taiyuan','大同市':'Datong','晋中市':'Jinzhong','沈阳市':'Shenyang','大连市':'Dalian','鞍山市':'Anshan',
  '长春市':'Changchun','吉林市':'Jilin','哈尔滨市':'Harbin','齐齐哈尔市':'Qiqihar',
  '南京市':'Nanjing','苏州市':'Suzhou','无锡市':'Wuxi','常州市':'Changzhou','南通市':'Nantong',
  '杭州市':'Hangzhou','宁波市':'Ningbo','温州市':'Wenzhou','嘉兴市':'Jiaxing','绍兴市':'Shaoxing',
  '合肥市':'Hefei','芜湖市':'Wuhu','黄山市':'Huangshan','福州市':'Fuzhou','厦门市':'Xiamen','泉州市':'Quanzhou',
  '南昌市':'Nanchang','赣州市':'Ganzhou','九江市':'Jiujiang','济南市':'Jinan','青岛市':'Qingdao','烟台市':'Yantai','威海市':'Weihai',
  '郑州市':'Zhengzhou','洛阳市':'Luoyang','开封市':'Kaifeng','武汉市':'Wuhan','宜昌市':'Yichang','襄阳市':'Xiangyang',
  '长沙市':'Changsha','株洲市':'Zhuzhou','岳阳市':'Yueyang','广州市':'Guangzhou','深圳市':'Shenzhen','珠海市':'Zhuhai',
  '佛山市':'Foshan','东莞市':'Dongguan','惠州市':'Huizhou','海口市':'Haikou','三亚市':'Sanya',
  '成都市':'Chengdu','绵阳市':'Mianyang','乐山市':'Leshan','贵阳市':'Guiyang','遵义市':'Zunyi',
  '昆明市':'Kunming','大理市':'Dali','丽江市':'Lijiang','西安市':'Xian','咸阳市':'Xianyang','宝鸡市':'Baoji',
  '兰州市':'Lanzhou','天水市':'Tianshui','西宁市':'Xining','台北市':'Taipei','高雄市':'Kaohsiung','台中市':'Taichung',
  '呼和浩特市':'Hohhot','包头市':'Baotou','南宁市':'Nanning','桂林市':'Guilin','柳州市':'Liuzhou','拉萨市':'Lhasa',
  '银川市':'Yinchuan','乌鲁木齐市':'Urumqi','喀什市':'Kashgar','香港':'Hong Kong','澳门':'Macao'
};
const CHINA_CITY_DISTRICTS = {
  '北京市': ['东城区', '西城区', '朝阳区', '海淀区', '丰台区', '通州区', '昌平区', '大兴区'],
  '上海市': ['黄浦区', '徐汇区', '长宁区', '静安区', '浦东新区', '闵行区', '宝山区'],
  '广州市': ['越秀区', '海珠区', '荔湾区', '天河区', '白云区', '番禺区', '黄埔区'],
  '深圳市': ['福田区', '罗湖区', '南山区', '盐田区', '宝安区', '龙岗区', '龙华区'],
  '杭州市': ['上城区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '临平区'],
  '南京市': ['玄武区', '秦淮区', '建邺区', '鼓楼区', '栖霞区', '雨花台区'],
  '成都市': ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '高新区', '天府新区'],
  '武汉市': ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '洪山区', '东西湖区']
};

function weatherCountryCode(country) {
  const entry = WEATHER_COUNTRIES.find(item => item[0] === country);
  return entry ? entry[1] : '';
}

function promptWeatherCityDetailed() {
  const cfg = weatherConfig();
  closeWeatherDetails();
  const countries = WEATHER_COUNTRIES.map(item => '<option value="' + escapeAttribute(item[0]) + '"' + (item[0] === cfg.country ? ' selected' : '') + '>' + escapeHTML(item[0]) + '</option>').join('');
  showModal(
    '<div class="weather-location-dialog">' +
      '<div class="weather-location-heading"><div><span>// LOCATION FILTER</span><div class="modal-title">选择天气位置</div></div><button class="weather-location-current" id="weatherUseCurrent" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>使用当前位置</button></div>' +
      '<p class="weather-location-intro">按国家、省份、城市与区县逐级筛选。中国为默认国家，也可直接输入不在推荐列表中的地点。</p>' +
      '<div class="weather-location-grid">' +
        '<label><span>国家 / 地区</span><select id="weatherCountry">' + countries + '</select></label>' +
        '<label><span>省份 / 州</span><input id="weatherProvince" list="weatherProvinceList" value="' + escapeAttribute(cfg.province || '') + '" placeholder="请选择或输入"><datalist id="weatherProvinceList"></datalist></label>' +
        '<label><span>城市</span><input id="weatherCity" list="weatherCityList" value="' + escapeAttribute((cfg.city || '').startsWith('当前位置') ? '' : (cfg.city || '').split(' · ')[0]) + '" placeholder="请选择或输入"><datalist id="weatherCityList"></datalist></label>' +
        '<label><span>区县</span><input id="weatherDistrict" list="weatherDistrictList" value="' + escapeAttribute(cfg.district || '') + '" placeholder="可选"><datalist id="weatherDistrictList"></datalist></label>' +
      '</div>' +
      '<div class="weather-location-searchbar"><span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.5 15.5 4.4 4.4"/></svg></span><div id="weatherLocationSummary">选择后查询准确坐标</div><button id="weatherLocationSearch" type="button">查询位置</button></div>' +
      '<div class="weather-location-results" id="weatherLocationResults"><div class="weather-location-empty">选择地区后点击“查询位置”</div></div>' +
      '<a class="weather-location-attribution" href="https://photon.komoot.io/" target="_blank" rel="noreferrer">位置搜索 Photon · 数据 © OpenStreetMap contributors</a>' +
      '<div class="modal-actions"><button class="modal-btn cancel" id="modalCancel">取消</button></div>' +
    '</div>'
  );

  const country = document.getElementById('weatherCountry');
  const province = document.getElementById('weatherProvince');
  const city = document.getElementById('weatherCity');
  const district = document.getElementById('weatherDistrict');
  const provinceList = document.getElementById('weatherProvinceList');
  const cityList = document.getElementById('weatherCityList');
  const districtList = document.getElementById('weatherDistrictList');
  const results = document.getElementById('weatherLocationResults');
  const summary = document.getElementById('weatherLocationSummary');
  const setOptions = (node, values) => { node.innerHTML = values.map(value => '<option value="' + escapeAttribute(value) + '"></option>').join(''); };
  const updateLists = () => {
    setOptions(provinceList, country.value === '中国' ? Object.keys(CHINA_PROVINCE_CITIES) : []);
    setOptions(cityList, country.value === '中国' ? (CHINA_PROVINCE_CITIES[province.value] || []) : []);
    setOptions(districtList, country.value === '中国' ? (CHINA_CITY_DISTRICTS[city.value] || []) : []);
    summary.textContent = [country.value, province.value, city.value, district.value].filter(Boolean).join(' · ') || '选择后查询准确坐标';
  };
  country.addEventListener('change', () => { province.value = ''; city.value = ''; district.value = ''; updateLists(); });
  province.addEventListener('change', () => { city.value = ''; district.value = ''; updateLists(); });
  city.addEventListener('change', () => { district.value = ''; updateLists(); });
  district.addEventListener('input', updateLists);
  updateLists();

  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('weatherUseCurrent').addEventListener('click', () => { closeModal(); locateWeather(); });
  document.getElementById('weatherLocationSearch').addEventListener('click', async () => {
    const parts = [district.value, city.value, province.value, country.value].filter(Boolean);
    const query = parts.join(', ');
    if (!query) { showToast('请至少选择或输入城市', 'warning'); city.focus(); return; }
    results.innerHTML = '<div class="weather-location-loading"><i></i>正在查找匹配位置…</div>';
    try {
      const params = new URLSearchParams({ name: query, count: '10', language: 'zh', format: 'json' });
      const res = await fetch(GEOCODE_ENDPOINT + '?' + params.toString());
      if (!res.ok) throw new Error('位置查询失败 ' + res.status);
      const json = await res.json();
      let hits = (json && json.results) || [];
      const code = weatherCountryCode(country.value);
      hits = hits.map(hit => {
        let score = 0;
        if (code && hit.country_code === code) score += 8;
        if (province.value && String(hit.admin1 || '').includes(province.value.replace(/[省市]$/, ''))) score += 5;
        if (city.value && [hit.name, hit.admin2, hit.admin3].some(value => String(value || '').includes(city.value.replace(/市$/, '')))) score += 4;
        if (district.value && [hit.name, hit.admin2, hit.admin3, hit.admin4].some(value => String(value || '').includes(district.value.replace(/[区县]$/, '')))) score += 6;
        return { hit, score };
      }).sort((a, b) => b.score - a.score).map(item => item.hit).slice(0, 8);
      if (!hits.length) throw new Error('没有找到匹配位置，请尝试简化区县名称');
      results.innerHTML = hits.map((hit, index) => {
        const path = [hit.country, hit.admin1, hit.admin2, hit.admin3].filter((value, idx, array) => value && array.indexOf(value) === idx);
        return '<button class="weather-location-result" type="button" data-weather-result="' + index + '"><span class="weather-location-result-pin"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="10" cy="7" r="2"/></svg></span><span><strong>' + escapeHTML(hit.name) + '</strong><small>' + escapeHTML(path.join(' · ')) + '</small></span><b>选择</b></button>';
      }).join('');
      results.querySelectorAll('[data-weather-result]').forEach(button => button.addEventListener('click', async () => {
        const hit = hits[Number(button.dataset.weatherResult)];
        const chosenCountry = hit.country || country.value;
        const chosenProvince = hit.admin1 || province.value;
        const chosenDistrict = district.value || (hit.admin3 && hit.admin3 !== hit.name ? hit.admin3 : '');
        const display = chosenDistrict || hit.name;
        DATA.settings.weather = {
          city: display + (chosenProvince && chosenProvince !== display ? ' · ' + chosenProvince : ''),
          country: chosenCountry,
          province: chosenProvince,
          district: chosenDistrict,
          lat: Number(hit.latitude),
          lon: Number(hit.longitude)
        };
        save();
        closeModal();
        weatherState.status = 'loading';
        paintWeather();
        await fetchWeather({ force: true });
        showToast('天气位置已切换到 ' + display, 'success');
      }));
    } catch (err) {
      results.innerHTML = '<div class="weather-location-empty weather-location-empty--error">' + escapeHTML((err && err.message) || '位置查询失败') + '</div>';
    }
  });
}

function promptWeatherCity() {
  const cfg = weatherConfig();
  closeWeatherDetails();
  const provinceNames = Object.keys(CHINA_PROVINCE_CITIES);
  const initialProvince = CHINA_PROVINCE_CITIES[cfg.province] ? cfg.province : '北京市';
  const configuredCity = String(cfg.city || '').split(' · ')[0];
  const initialCities = CHINA_PROVINCE_CITIES[initialProvince] || [];
  const initialCity = initialCities.includes(configuredCity) ? configuredCity : initialCities[0];
  const provinceOptions = provinceNames.map(name => '<option value="' + escapeAttribute(name) + '"' + (name === initialProvince ? ' selected' : '') + '>' + escapeHTML(name) + '</option>').join('');
  const cityOptions = initialCities.map(name => '<option value="' + escapeAttribute(name) + '"' + (name === initialCity ? ' selected' : '') + '>' + escapeHTML(name) + '</option>').join('');

  showModal(
    '<div class="weather-location-dialog weather-location-dialog--simple">' +
      '<div class="weather-location-heading"><div><span>// CITY WEATHER</span><div class="modal-title">选择天气城市</div></div></div>' +
      '<p class="weather-location-intro">选择省份和城市，即可直接切换并显示该市天气。</p>' +
      '<div class="weather-location-grid">' +
        '<label><span>省份</span><select id="weatherProvince">' + provinceOptions + '</select></label>' +
        '<label><span>城市</span><select id="weatherCity">' + cityOptions + '</select></label>' +
      '</div>' +
      '<div class="weather-location-simple-status" id="weatherLocationStatus" aria-live="polite"></div>' +
      '<div class="weather-location-simple-footer"><div class="modal-actions"><button class="modal-btn cancel" id="modalCancel">取消</button><button class="modal-btn primary" id="weatherLocationApply">显示天气</button></div></div>' +
    '</div>'
  );

  const province = document.getElementById('weatherProvince');
  const city = document.getElementById('weatherCity');
  const status = document.getElementById('weatherLocationStatus');
  const apply = document.getElementById('weatherLocationApply');
  const updateCities = () => {
    const cities = CHINA_PROVINCE_CITIES[province.value] || [];
    city.innerHTML = cities.map(name => '<option value="' + escapeAttribute(name) + '">' + escapeHTML(name) + '</option>').join('');
  };
  province.addEventListener('change', updateCities);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  apply.addEventListener('click', async () => {
    const selectedProvince = province.value;
    const selectedCity = city.value;
    if (!selectedProvince || !selectedCity) {
      status.textContent = '请选择省份和城市。';
      status.classList.add('is-error');
      return;
    }
    status.classList.remove('is-error');
    status.textContent = '正在获取' + selectedCity + '天气…';
    apply.disabled = true;
    apply.textContent = '加载中…';
    try {
      const params = new URLSearchParams({ name: CHINA_CITY_GEOCODE_NAMES[selectedCity] || selectedCity, count: '8', language: 'zh', format: 'json' });
      const res = await fetch(GEOCODE_ENDPOINT + '?' + params.toString());
      if (!res.ok) throw new Error('城市定位失败 ' + res.status);
      const json = await res.json();
      const cityName = selectedCity.replace(/市$/, '');
      const provinceName = selectedProvince.replace(/[省市]$/, '');
      const hits = ((json && json.results) || []).filter(hit => Number.isFinite(Number(hit.latitude)) && Number.isFinite(Number(hit.longitude)));
      const ranked = hits.map(hit => {
        let score = hit.country_code === 'CN' ? 8 : 0;
        if (String(hit.admin1 || '').includes(provinceName)) score += 5;
        if ([hit.name, hit.admin2, hit.admin3].some(value => String(value || '').includes(cityName))) score += 7;
        return { hit, score };
      }).sort((a, b) => b.score - a.score);
      if (!ranked.length) throw new Error('暂时无法定位该城市，请稍后重试');
      const hit = ranked[0].hit;
      DATA.settings.weather = {
        city: selectedCity,
        country: '中国',
        province: selectedProvince,
        district: '',
        lat: Number(hit.latitude),
        lon: Number(hit.longitude)
      };
      save();
      closeModal();
      weatherState.status = 'loading';
      paintWeather();
      await fetchWeather({ force: true });
      showToast('已显示' + selectedCity + '天气', 'success');
    } catch (err) {
      status.textContent = (err && err.message) || '天气加载失败，请稍后重试';
      status.classList.add('is-error');
      apply.disabled = false;
      apply.textContent = '显示天气';
    }
  });
}

function locateWeather() {
  if (!navigator.geolocation) { showToast('当前浏览器不支持定位', 'warning'); return; }
  showToast('正在获取位置…', 'info');
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    const cfg = weatherConfig();
    const city = '当前位置';
    DATA.settings.weather = { city, country: cfg.country || '中国', province: '', district: '', lat: latitude, lon: longitude };
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

function refreshDayElapsedProgress() {
  if (DATA && DATA.settings && DATA.settings.lastActiveDate !== todayKey()) {
    const changed = ensureTemporalState();
    const vocabChanged = ensureEnglishStudyState();
    if (changed || vocabChanged) { save(); rerender(); }
  }
  if (currentPage !== 'daily-plan') return;
  document.querySelectorAll('.daily-plan-page .workspace-stat').forEach(stat => {
    const label = stat.querySelector('.workspace-stat-label');
    const value = stat.querySelector('.workspace-stat-value');
    if (label && value && label.textContent.trim() === '今日进度') {
      value.textContent = dayElapsedPercent() + '%';
    }
  });
}

function compactResourceListHTML(items) {
  if (!items || !items.length) return emptyStateHTML('📚', '暂无学习资源', '通过右上角按钮添加一条资源');
  return '<div class="study-resource-list">' + items.map((item, index) =>
    '<div class="study-resource"><div class="study-resource-index">' + String(index + 1).padStart(2, '0') + '</div>' +
      '<div><div class="study-resource-title">' + escapeHTML(item.title) + '</div><div class="study-resource-desc">' + escapeHTML(item.desc || '暂未添加说明') + '</div></div>' +
      '<button class="study-resource-delete" data-path="learning.ai.resources" data-id="' + item.id + '" title="删除资源" aria-label="删除资源">×</button></div>'
  ).join('') + '</div>';
}

function dailyPlanCalendarHTML(selectedDate, dailyPlan, calendarMonth) {
  const activeDate = /^\d{4}-\d{2}-\d{2}$/.test(selectedDate || '') ? selectedDate : todayKey();
  const visibleMonth = /^\d{4}-\d{2}$/.test(calendarMonth || '') ? calendarMonth : activeDate.slice(0, 7);
  const [year, month] = visibleMonth.split('-').map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const leadingBlanks = (new Date(year, month - 1, 1).getDay() + 6) % 7;
  const today = todayKey();
  const tasks = ['morning', 'afternoon', 'evening'].flatMap(slot => dailyPlan[slot] || []);
  const solarTerms = solarTermsForMonth(year, month);
  const officialSchedule = chinaOfficialHolidaySchedule(year);
  const cells = [];
  for (let index = 0; index < leadingBlanks; index++) {
    cells.push('<div class="daily-plan-calendar-blank" aria-hidden="true"></div>');
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = String(year).padStart(4, '0') + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
    const dayTasks = tasks.filter(task => isTaskOnPlanDate(task, date));
    const completed = dayTasks.filter(task => task.done).length;
    const isComplete = dayTasks.length > 0 && completed === dayTasks.length;
    const holiday = officialSchedule[date];
    const lunar = chineseLunarInfo(new Date(year, month - 1, day, 12));
    const fixedFestival = FIXED_CHINA_FESTIVALS[date.slice(5)] || '';
    const culturalLabel = lunar.festival || fixedFestival || solarTerms[day] || lunar.label;
    const secondaryLabel = solarTerms[day] && solarTerms[day] !== culturalLabel ? solarTerms[day] : '';
    const classes = [
      'daily-plan-calendar-day',
      date === activeDate ? 'is-selected' : '',
      date === today ? 'is-today' : '',
      date > today ? 'is-future' : '',
      [0, 6].includes(new Date(year, month - 1, day, 12).getDay()) ? 'is-weekend' : '',
      (lunar.festival || fixedFestival || solarTerms[day] === '清明') ? 'has-festival' : '',
      solarTerms[day] ? 'has-solar-term' : '',
      holiday?.type === 'holiday' ? 'is-holiday' : '',
      holiday?.type === 'workday' ? 'is-workday' : '',
      isComplete ? 'is-complete' : '',
      dayTasks.length && !isComplete ? 'has-tasks' : ''
    ].filter(Boolean).join(' ');
    const taskSummary = dayTasks.length
      ? '<span class="daily-plan-calendar-count">' + completed + '/' + dayTasks.length + '</span>'
      : '<span class="daily-plan-calendar-empty">可规划</span>';
    const scheduleBadge = holiday ? '<span class="daily-plan-calendar-badge">' + (holiday.type === 'holiday' ? '休' : '班') + '</span>' : '';
    cells.push('<button class="' + classes + '" type="button" data-plan-calendar-date="' + date + '" aria-label="查看' + year + '年' + month + '月' + day + '日规划，' + escapeAttribute([culturalLabel, solarTerms[day] !== culturalLabel ? solarTerms[day] : '', dayTasks.length ? completed + '项已完成，共' + dayTasks.length + '项' : '暂无任务'].filter(Boolean).join('，')) + '"><span class="daily-plan-calendar-top"><span class="daily-plan-calendar-number">' + day + '</span>' + scheduleBadge + '</span><span class="daily-plan-calendar-culture">' + escapeHTML(culturalLabel) + (secondaryLabel ? '<small>' + escapeHTML(secondaryLabel) + '</small>' : '') + '</span>' + taskSummary + '</button>');
  }
  const trailingBlanks = (7 - ((leadingBlanks + daysInMonth) % 7)) % 7;
  for (let index = 0; index < trailingBlanks; index++) {
    cells.push('<div class="daily-plan-calendar-blank" aria-hidden="true"></div>');
  }
  const yearOptions = Array.from({ length: 21 }, (_, index) => year - 10 + index)
    .map(optionYear => '<option value="' + optionYear + '"' + (optionYear === year ? ' selected' : '') + '>' + optionYear + '年</option>')
    .join('');
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1)
    .map(optionMonth => '<option value="' + String(optionMonth).padStart(2, '0') + '"' + (optionMonth === month ? ' selected' : '') + '>' + optionMonth + '月</option>')
    .join('');
  return '<section class="daily-plan-calendar-panel"><div class="daily-plan-calendar-heading"><h2 aria-label="' + year + '年' + month + '月"><span>' + year + '</span><i>/</i><strong>' + String(month).padStart(2, '0') + '</strong></h2><div class="daily-plan-calendar-nav"><button type="button" data-plan-calendar-month-shift="-12" aria-label="上一年">«</button><button type="button" data-plan-calendar-month-shift="-1" aria-label="上个月">‹</button><button type="button" data-plan-calendar-current>本月</button><button type="button" data-plan-calendar-month-shift="1" aria-label="下个月">›</button><button type="button" data-plan-calendar-month-shift="12" aria-label="下一年">»</button><span class="daily-plan-calendar-nav-divider" aria-hidden="true"></span><label class="daily-plan-calendar-select"><select data-plan-calendar-year aria-label="选择年份">' + yearOptions + '</select></label><label class="daily-plan-calendar-select"><select data-plan-calendar-month aria-label="选择月份">' + monthOptions + '</select></label></div><span>点击日期查看或安排当天任务</span></div>' +
    '<div class="daily-plan-calendar-weekdays" aria-hidden="true"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>' +
    '<div class="daily-plan-calendar-grid">' + cells.join('') + '</div>' +
    '<div class="daily-plan-calendar-legend"><span><i class="is-today"></i>今天</span><span><i class="has-tasks"></i>已有规划</span><span><i class="is-complete"></i>全部完成</span></div></section>';
}

function dailyPlanPageHTML() {
  const dp = DATA.tasks.dailyPlan;
  const review = DATA.weeklyReview;
  const selectedDate = dailyPlanViewDate || todayKey();
  const selectedDateLabel = planDateLabel(selectedDate);
  const selectedDateShort = selectedDate === todayKey() ? '今日' : selectedDateLabel.split(' · ')[0];
  const slots = [
    { key: 'morning', label: '上午 · 专注时段', defaultTime: planAddTimeForSlot('morning', selectedDate) },
    { key: 'afternoon', label: '下午 · 执行时段', defaultTime: planAddTimeForSlot('afternoon', selectedDate) },
    { key: 'evening', label: '晚上 · 收束时段', defaultTime: planAddTimeForSlot('evening', selectedDate) }
  ];
  const all = slots.flatMap(slot => sortedPlanTasks((dp[slot.key] || []).filter(task => isTaskOnPlanDate(task, selectedDate))));
  const done = all.filter(task => task.done).length;
  const percent = calcTaskPercent(all);
  const firstPending = all.find(task => !task.done);
  const firstPendingPath = firstPending ? planPathForTime(firstPending.scheduledTime) : '';
  const taskCards = slots.map(slot => {
    const tasks = sortedPlanTasks((dp[slot.key] || []).filter(task => isTaskOnPlanDate(task, selectedDate)));
    const completed = tasks.filter(task => task.done).length;
    return '<section class="workspace-task-card"><div class="card-header"><div class="card-title"><span class="dot"></span>' + slot.label + '</div><span class="card-tag">' + completed + '/' + tasks.length + '</span></div>' + taskListHTML('tasks.dailyPlan.' + slot.key, tasks, { showTime: true, defaultTime: slot.defaultTime, planDate: selectedDate }) + '</section>';
  }).join('');
  return '<div class="workspace-page daily-plan-page">' +
    '<section class="workspace-hero"><div><div class="workspace-kicker">Task planning</div><div class="workspace-hero-title">' + commaTitleHTML('把近期任务，拆成清晰可执行的安排') + '</div><div class="workspace-hero-copy">既可以安排今天，也可以提前整理未来几天或一周的重点；根据实际节奏推进，未完成事项可继续调整和结转。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="open-palette">快速添加或搜索</button><button class="btn btn-outline btn-sm" data-action="rollover-plan">结转未完成事项</button></div></div>' +
    '<div class="workspace-hero-side">' + workspaceProgressHTML(selectedDateShort + '计划完成度', percent, done + ' / ' + all.length + ' 项已完成') +
    '<div class="workspace-next">' + (firstPending ? '<button class="workspace-next-mark is-task-toggle" type="button" data-path="' + firstPendingPath + '" data-id="' + firstPending.id + '" aria-label="完成下一项待办：' + escapeAttribute(firstPending.text) + '"></button>' : '<div class="workspace-next-mark is-done">✓</div>') + '<div><div class="workspace-next-label">下一项待办</div><div class="workspace-next-title">' + escapeHTML(firstPending ? normalizePlanTime(firstPending.scheduledTime) + ' · ' + firstPending.text : selectedDateShort + '计划已全部完成') + '</div></div></div></div></section>' +
    '<div class="workspace-stat-strip">' + workspaceStatHTML(done, '已完成', true) + workspaceStatHTML(all.length - done, '待完成', false) + workspaceStatHTML(dayElapsedPercent() + '%', '今日进度', true) + workspaceStatHTML('第 ' + review.week + ' 周', '当前复盘周期', false) + '</div>' +
    '<div class="workspace-section-heading"><h2>时段计划</h2><span>点击左侧完成任务；调整时间会自动移动分栏</span></div><div class="daily-plan-grid">' + taskCards + '</div>' +
    dailyPlanCalendarHTML(selectedDate, dp, dailyPlanCalendarMonth) + '</div>';
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
    '<section class="workspace-hero"><div><div class="workspace-kicker">Training logbook</div><div class="workspace-hero-title">' + commaTitleHTML('本周训练，按计划留下真实记录') + '</div><div class="workspace-hero-copy">计划负责方向，训练日志记录真实投入。完成计划时可以补充时长、消耗与备注，周数据会自动汇总。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="add-workout-log">记录一次训练</button></div></div>' +
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
    '<section class="workspace-hero"><div><div class="workspace-kicker">Learning studio</div><div class="workspace-hero-title">' + commaTitleHTML('把输入、练习和输出组织成闭环') + '</div><div class="workspace-hero-copy">每次学习都落在一项可检查的任务上。把资源沉淀在右侧，完成后整理成可复用的工作流或文章。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="add-resource">添加学习资源</button><button class="btn btn-outline btn-sm" data-action="open-palette">搜索任务</button></div></div><div class="workspace-hero-side">' + workspaceProgressHTML('本轮学习完成度', percent, done + ' / ' + tasks.length + ' 个任务已完成') + '<div class="workspace-next"><div class="workspace-next-mark"></div><div><div class="workspace-next-label">继续推进</div><div class="workspace-next-title">' + escapeHTML(nextTask ? nextTask.text : '这一轮学习任务已完成，可以整理输出') + '</div></div></div></div></section>' +
    '<div class="workspace-stat-strip">' + workspaceStatHTML(done, '已完成任务', true) + workspaceStatHTML(tasks.length - done, '待完成任务', false) + workspaceStatHTML(resources.length, '资源库条目', false) + workspaceStatHTML(percent + '%', '当前完成度', false) + '</div>' +
    '<div class="study-main-grid"><section class="study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>本轮学习任务</div><span class="card-tag">' + done + '/' + tasks.length + '</span></div>' + taskListHTML('tasks.aiLearn', tasks) + '</section><section class="study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>学习资源库</div><button class="card-btn" data-action="add-resource" title="添加资源" aria-label="添加资源">+</button></div>' + compactResourceListHTML(resources) + '</section></div></div>';
}

function englishModuleTabs(active) {
  const tabs = [
    ['english', '总览'],
    ['english-vocab', '词汇记忆'],
    ['english-listening', '听力训练'],
    ['english-reading', '阅读精读'],
    ['english-writing', '写作训练']
  ];
  return '<nav class="english-module-tabs" aria-label="英语学习模块" role="tablist">' + tabs.map(([id, label]) =>
    '<button type="button" class="english-module-tab' + (active === id ? ' is-active' : '') + '" data-action="english-go-' + id + '" role="tab" aria-selected="' + (active === id) + '">' + escapeHTML(label) + '</button>'
  ).join('') + '</nav>';
}

function englishSkillStatCard(action, accent, icon, title, value, target, unit, detail, progress, cadence) {
  const safeProgress = Math.min(100, Math.max(0, Number(progress) || 0));
  const progressLabel = Math.round(safeProgress) + '%';
  const accessibleMetric = value + ' / ' + target + ' ' + unit;
  return '<button type="button" class="english-skill-stat-card ' + accent + '" data-action="' + action + '" aria-label="打开' + escapeAttribute(title) + '，' + escapeAttribute(accessibleMetric) + '" style="--skill-progress:' + safeProgress + '">' +
    '<span class="english-skill-stat-top"><span class="english-skill-stat-icon" aria-hidden="true">' + icon + '</span><strong>' + escapeHTML(title) + '</strong><span class="english-skill-stat-cadence">' + escapeHTML(cadence) + '</span></span>' +
    '<span class="english-skill-stat-body"><span class="english-skill-stat-metric"><strong>' + escapeHTML(String(value)) + '</strong><span>/ ' + escapeHTML(String(target)) + '</span></span><span class="english-skill-stat-unit">' + escapeHTML(unit) + '</span></span>' +
    '<span class="english-skill-stat-detail">' + escapeHTML(detail) + '</span>' +
    '<span class="english-skill-stat-foot"><span class="english-skill-stat-progress" aria-hidden="true"><i style="width:' + safeProgress + '%"></i></span><span class="english-skill-stat-progress-label">' + progressLabel + '</span></span>' +
  '</button>';
}

function englishRecentStatusHTML(history, metrics) {
  const today = todayKey();
  const dateKeys = Array.from({ length: 7 }, (_, index) => shiftDateKey(today, index - 6));
  const recent = history.filter(entry => dateKeys.includes(entry.date || todayKey(new Date(entry.occurredAt || 0))));
  const activeDates = new Set(recent.map(entry => entry.date || todayKey(new Date(entry.occurredAt || 0))));
  const vocabRecent = recent.filter(entry => entry.module === 'vocab').reduce((total, entry) => {
    const match = String(entry.detail || '').match(/熟悉\s*(\d+)/);
    return total + (match ? Number(match[1]) || 0 : 0);
  }, 0);
  const listeningRecent = recent.filter(entry => entry.module === 'listening').length;
  const readingRecent = recent.filter(entry => entry.module === 'reading').length;
  const writingRecent = recent.filter(entry => entry.module === 'writing').length;
  const completedPractices = listeningRecent + readingRecent + writingRecent;
  const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
  const weeklyBars = dateKeys.map(key => {
    const date = new Date(key + 'T00:00:00');
    const dayEntries = recent.filter(entry => (entry.date || todayKey(new Date(entry.occurredAt || 0))) === key);
    const vocabCount = dayEntries.filter(entry => entry.module === 'vocab').reduce((total, entry) => {
      const match = String(entry.detail || '').match(/熟悉\s*(\d+)/);
      return total + (match ? Number(match[1]) || 0 : 0);
    }, 0);
    const listeningCount = dayEntries.filter(entry => entry.module === 'listening').length;
    const readingCount = dayEntries.filter(entry => entry.module === 'reading').length;
    const writingCount = dayEntries.filter(entry => entry.module === 'writing').length;
    const load = Math.min(4, Math.min(1, vocabCount / Math.max(1, metrics.vocabTarget)) + Math.min(1, listeningCount) + Math.min(1, readingCount / Math.max(1, metrics.readingTarget)) + Math.min(1, writingCount));
    const height = dayEntries.length ? Math.max(10, Math.round(load / 4 * 100)) : 4;
    const label = '周' + dayNames[date.getDay()];
    const summary = label + '：熟悉 ' + vocabCount + ' 词，完成 ' + (listeningCount + readingCount + writingCount) + ' 项训练';
    return '<span class="english-week-bar' + (dayEntries.length ? ' is-active' : '') + (key === today ? ' is-today' : '') + '" title="' + escapeAttribute(summary) + '" aria-label="' + escapeAttribute(summary) + '"><span><i style="height:' + height + '%"></i></span><small>' + label + '</small></span>';
  }).join('');
  const statusRow = (icon, name, summary, progressText, progress) => {
    const safeProgress = Math.min(100, Math.max(0, Number(progress) || 0));
    return '<div class="english-recent-module"><span class="english-recent-module-icon" aria-hidden="true">' + icon + '</span><span class="english-recent-module-copy"><strong>' + escapeHTML(name) + '</strong><span>' + escapeHTML(summary) + '</span></span><span class="english-recent-module-progress"><span><i style="width:' + safeProgress + '%"></i></span><small>' + escapeHTML(progressText) + '</small></span></div>';
  };
  return '<div class="english-recent-status-body"><div class="english-recent-rhythm"><div class="english-recent-rhythm-head"><span><small>学习活跃度</small><strong>' + activeDates.size + '<em>/ 7 天</em></strong></span><p>熟悉 ' + vocabRecent + ' 词 · 完成 ' + completedPractices + ' 项训练</p></div><div class="english-week-chart" role="img" aria-label="最近七天学习活跃度柱状图">' + weeklyBars + '</div></div><div class="english-recent-modules">' +
    statusRow('Aa', '单词', '近 7 天熟悉 ' + vocabRecent + ' 词', '今日 ' + metrics.vocabValue + ' / ' + metrics.vocabTarget, metrics.vocabProgress) +
    statusRow('◖)', '听力', '近 7 天完成 ' + listeningRecent + ' 组', '总进度 ' + metrics.listeningValue + ' / ' + metrics.listeningTarget, metrics.listeningProgress) +
    statusRow('▤', '阅读', '近 7 天精读 ' + readingRecent + ' 篇', '今日 ' + metrics.readingValue + ' / ' + metrics.readingTarget, metrics.readingProgress) +
    statusRow('✎', '写作', '近 7 天完成 ' + writingRecent + ' 篇', '本周 ' + metrics.writingValue + ' / ' + metrics.writingTarget, metrics.writingProgress) +
  '</div></div>';
}

function englishLearningPageHTML() {
  const englishStateChanged = ensureEnglishStudyState();
  if (englishStateChanged) save();
  const english = DATA.learning.english;
  const profile = english.profile || {};
  const vocab = english.vocab || { dailyTarget: 100, words: [], bankVersion: 'IELTS Academic Core' };
  const tasks = DATA.tasks.english || [];
  const done = tasks.filter(task => task.done).length;
  const vocabWords = Array.isArray(vocab.words) ? vocab.words : [];
  const vocabTarget = Math.max(1, Number(vocab.dailyTarget) || 100);
  const familiar = vocabWords.filter(word => word.familiar || word.status === 'familiar').length;
  const learningCount = vocabWords.filter(word => !word.familiar && word.status === 'learning').length;
  const vocabSeenCount = Array.isArray(vocab.seenIds) ? vocab.seenIds.length : 0;
  const vocabProgress = Math.round(familiar / vocabTarget * 100);
  const listening = english.listening || {};
  const listeningCompleted = Math.max(0, Number(listening.completed) || 0);
  const listeningTarget = Math.max(1, Number(listening.target) || 12);
  const reading = english.reading || {};
  const writing = english.writing || {};
  const articles = Array.isArray(reading.articles) ? reading.articles : [];
  const readingCompleted = Math.max(0, Number(reading.completed) || 0);
  const readingDailyGoal = Math.max(1, Number(reading.dailyGoal) || 1);
  const today = todayKey();
  const listeningDailyGoal = 1;
  const listeningToday = listening.lastCompletedDate === today ? 1 : 0;
  const listeningProgress = Math.round(listeningToday / listeningDailyGoal * 100);
  const readingToday = articles.filter(article => article.read && article.lastReadDate === today).length;
  const readingProgress = Math.round(readingToday / readingDailyGoal * 100);
  const readingTopics = new Set(articles.map(article => article.type).filter(Boolean)).size;
  const writingCompleted = Math.max(0, Number(writing.completed) || 0);
  const writingGoal = Math.max(1, Number(writing.weeklyGoal) || 2);
  const writingDrafts = Array.isArray(writing.drafts) ? writing.drafts : [];
  const writingPrompts = Array.isArray(writing.prompts) ? writing.prompts : [];
  const writingProgress = Math.round(writingCompleted / writingGoal * 100);
  const history = Array.isArray(english.history) ? english.history : [];
  const activeArticle = articles.find(article => article.id === reading.activeArticleId) || articles[0];
  const nextTask = tasks.find(task => !task.done);
  return '<div class="workspace-page english-learning-page">' +
    englishModuleTabs('english') +
    '<section class="workspace-hero english-overview-hero"><div><div class="workspace-kicker">IELTS Academic · Study overview</div><div class="workspace-hero-title">' + commaTitleHTML('让雅思备考，成为稳定的每日节奏') + '</div><div class="workspace-hero-copy">把每天的输入拆成词汇、听力、阅读和写作四个短练习。今天不追求一次学完，而是让每次练习都留下可复用的进步。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="english-vocab-open">开始今日 ' + escapeHTML(String(vocab.dailyTarget || 100)) + ' 词</button><button class="btn btn-outline btn-sm" data-action="english-reading-refresh">联网更新阅读</button></div></div><div class="workspace-hero-side">' + workspaceProgressHTML('今日任务完成度', calcTaskPercent(tasks), done + ' / ' + tasks.length + ' 项已完成') + '<div class="workspace-next"><div class="workspace-next-mark"></div><div><div class="workspace-next-label">下一项练习</div><div class="workspace-next-title">' + escapeHTML(nextTask ? nextTask.text : '今日任务已完成，可以记录挑战进度') + '</div></div></div></div></section>' +
    '<section class="study-card english-skill-dashboard" aria-label="单词、听力、阅读与写作学习统计"><div class="card-header"><div class="card-title"><span class="dot"></span>四项能力数据</div><span class="card-tag">IELTS · Band ' + escapeHTML(profile.targetBand || '7.0+') + '</span></div><div class="english-skill-stat-list">' +
      englishSkillStatCard('english-vocab-open', 'is-vocab', 'Aa', '单词', familiar, vocabTarget, '今日熟悉', '复习 ' + learningCount + ' 词 · 已见 ' + vocabSeenCount + ' 词', vocabProgress, '今日') +
      englishSkillStatCard('english-listening-open', 'is-listening', '◖)', '听力', listeningToday, listeningDailyGoal, '今日完成', '总进度 ' + listeningCompleted + ' / ' + listeningTarget + ' 组 · 连续 ' + (listening.streak || 0) + ' 天', listeningProgress, '今日') +
      englishSkillStatCard('english-reading-open', 'is-reading', '▤', '阅读', readingToday, readingDailyGoal, '今日精读', '累计 ' + readingCompleted + ' 篇 · ' + readingTopics + ' 类主题', readingProgress, '今日') +
      englishSkillStatCard('english-writing-open', 'is-writing', '✎', '写作', writingCompleted, writingGoal, '本周完成', '草稿 ' + writingDrafts.length + ' 份 · 待练 ' + writingPrompts.length + ' 题', writingProgress, '本周') +
    '</div></section>' +
    '<section class="study-card english-history-card"><div class="card-header"><div class="card-title"><span class="dot"></span>近 7 天学习状态</div><span class="card-tag">持续记录</span></div>' + englishRecentStatusHTML(history, { vocabValue: familiar, vocabTarget, vocabProgress, listeningValue: listeningCompleted, listeningTarget, listeningProgress: Math.round(listeningCompleted / listeningTarget * 100), readingValue: readingToday, readingTarget: readingDailyGoal, readingProgress, writingValue: writingCompleted, writingTarget: writingGoal, writingProgress }) + '</section>' +
    '<section class="english-reading-spotlight study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>今日阅读 · 主题轮换</div><button class="card-btn" data-action="english-reading-open" title="打开阅读训练" aria-label="打开阅读训练">↗</button></div>' + (activeArticle ? '<div class="english-reading-spotlight-body"><div><span class="english-article-type">' + escapeHTML(activeArticle.type || '综合') + '</span><h3>' + escapeHTML(activeArticle.title) + '</h3><p>' + escapeHTML(activeArticle.excerpt) + '</p><div class="english-article-meta"><span>' + escapeHTML(activeArticle.source || '精选来源') + '</span><span>' + escapeHTML(activeArticle.level || 'Band 7.0') + '</span><span>' + escapeHTML(String(activeArticle.minutes || 12) + ' min') + '</span></div></div><button class="btn btn-outline btn-sm" data-action="english-reading-open">进入精读</button></div>' : emptyStateHTML('▤', '还没有阅读材料', '点击“联网更新阅读”获取今日文章')) + '</section>' +
    '</div>';
}

function englishVocabWordRow(word) {
  const familiar = Boolean(word.familiar || word.status === 'familiar');
  const status = familiar ? '已熟悉' : word.status === 'learning' ? '复习中' : '待学习';
  const statusClass = familiar ? 'is-familiar' : word.status === 'learning' ? 'is-learning' : 'is-new';
  const phonetic = word.phoneticVerified && word.phonetic
    ? '<span class="english-word-phonetic">' + escapeHTML(word.phonetic) + '</span>'
    : '<span class="english-word-phonetic is-unverified">点击发音</span>';
  return '<article class="english-word-row ' + statusClass + '" data-word-row="' + escapeAttribute(word.id) + '">' +
    '<div class="english-word-index">' + String((word.order || 0) + 1).padStart(2, '0') + '</div>' +
    '<div class="english-word-main"><div class="english-word-heading"><h3>' + escapeHTML(word.term) + '</h3>' + phonetic + '<span class="english-word-pos">' + escapeHTML(word.pos || '') + '</span><span class="english-word-band">' + escapeHTML('Band ' + (word.band || '7.0')) + '</span></div><p class="english-word-meaning">' + escapeHTML(word.meaning || '') + '</p>' + (word.example ? '<p class="english-word-example">' + escapeHTML(word.example) + '</p>' : '') + '</div>' +
    '<div class="english-word-actions"><span class="english-word-status ' + statusClass + '">' + status + '</span><button type="button" class="english-word-icon" data-english-vocab-action="pronounce" data-word-id="' + escapeAttribute(word.id) + '" aria-label="播放 ' + escapeAttribute(word.term) + ' 发音" title="播放发音">◖)</button><button type="button" class="english-word-favorite ' + (word.favorite ? 'is-active' : '') + '" data-english-vocab-action="favorite" data-word-id="' + escapeAttribute(word.id) + '" aria-label="' + (word.favorite ? '取消收藏' : '收藏') + '" title="' + (word.favorite ? '取消收藏' : '收藏') + '">☆</button><button type="button" class="btn btn-outline btn-sm english-word-review" data-english-vocab-action="familiar" data-word-id="' + escapeAttribute(word.id) + '">' + (familiar ? '再练一次' : '熟悉了') + '</button></div>' +
  '</article>';
}

function englishVocabPageHTML() {
  const englishStateChanged = ensureEnglishStudyState();
  if (englishStateChanged) save();
  const vocab = DATA.learning.english.vocab;
  const words = Array.isArray(vocab.words) ? vocab.words : [];
  const familiarCount = words.filter(word => word.familiar).length;
  const learningCount = words.filter(word => !word.familiar && word.status === 'learning').length;
  const favoriteCount = words.filter(word => word.favorite).length;
  const filters = [['all', '全部', words.length], ['new', '待学习', words.filter(word => !word.familiar && word.status === 'new').length], ['learning', '复习中', learningCount], ['familiar', '已熟悉', familiarCount], ['favorite', '收藏', favoriteCount]];
  const filtered = words.filter(word => englishVocabFilter === 'all' || englishVocabFilter === 'favorite' ? (englishVocabFilter === 'all' || word.favorite) : englishVocabFilter === 'familiar' ? word.familiar : !word.familiar && word.status === englishVocabFilter);
  const ordered = filtered.slice().sort((a, b) => Number(Boolean(a.familiar)) - Number(Boolean(b.familiar)) || (Number(a.order) || 0) - (Number(b.order) || 0));
  const pageSize = 20;
  const pageCount = Math.max(1, Math.ceil(ordered.length / pageSize));
  englishVocabPage = Math.max(0, Math.min(englishVocabPage, pageCount - 1));
  const pageWords = ordered.slice(englishVocabPage * pageSize, (englishVocabPage + 1) * pageSize);
  return '<div class="workspace-page english-vocab-page">' + englishModuleTabs('english-vocab') +
    '<section class="workspace-hero english-subpage-hero"><div><button class="english-back-link" type="button" data-action="english-overview">← 返回英语总览</button><div class="workspace-kicker">Vocabulary lab · ' + escapeHTML(vocab.bankVersion || 'IELTS Academic Core') + '</div><div class="workspace-hero-title">' + commaTitleHTML('每日 ' + String(vocab.dailyTarget || 100) + ' 词，先把最常用的雅思表达记牢') + '</div><div class="workspace-hero-copy">熟悉的词会自动下沉到列表底部；“复习中”保留在当前批次，直到你愿意再次确认。词库按 Band 6.5–8.0 分层，避免每天抽到不匹配的内容。</div></div><div class="workspace-hero-side english-vocab-hero-side"><div class="english-vocab-progress-head"><span>今日熟悉度</span><strong>' + familiarCount + ' / ' + (vocab.dailyTarget || 100) + '</strong></div><div class="english-linear-progress"><span style="width:' + Math.round(familiarCount / Math.max(1, vocab.dailyTarget || 100) * 100) + '%"></span></div><small>已学习 ' + (learningCount + familiarCount) + ' · 收藏 ' + favoriteCount + '</small></div></section>' +
    '<div class="workspace-stat-strip english-stat-strip">' + workspaceStatHTML((vocab.dailyTarget || 100) + ' 词', '今日目标', true) + workspaceStatHTML(familiarCount, '已熟悉', false) + workspaceStatHTML(learningCount, '复习中', false) + workspaceStatHTML((vocab.seenIds || []).length, '词库已见', false) + '</div>' +
    '<section class="english-vocab-toolbar"><div class="english-vocab-filters" role="tablist" aria-label="词汇筛选">' + filters.map(([id, label, count]) => '<button type="button" class="english-vocab-filter ' + (englishVocabFilter === id ? 'is-active' : '') + '" data-english-vocab-filter="' + id + '" role="tab" aria-selected="' + (englishVocabFilter === id) + '">' + label + '<b>' + count + '</b></button>').join('') + '</div><div class="english-vocab-toolbar-note"><span class="english-sync-dot ' + (englishReadingState.status === 'loading' ? 'is-loading' : '') + '"></span>每天自动生成 · 已按熟悉度排序</div></section>' +
    '<section class="english-vocab-list study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>今日词汇 · 第 ' + (englishVocabPage + 1) + ' / ' + pageCount + ' 页</div><span class="card-tag">' + ordered.length + ' 词</span></div>' + (pageWords.length ? pageWords.map(englishVocabWordRow).join('') : emptyStateHTML('Aa', '没有匹配词汇', '换一个筛选条件试试')) + '<div class="english-vocab-pagination"><button type="button" class="btn btn-outline btn-sm" data-english-vocab-page="prev" ' + (englishVocabPage <= 0 ? 'disabled' : '') + '>← 上一页</button><span>第 ' + (englishVocabPage + 1) + ' / ' + pageCount + ' 页 · 每页 20 词</span><button type="button" class="btn btn-outline btn-sm" data-english-vocab-page="next" ' + (englishVocabPage >= pageCount - 1 ? 'disabled' : '') + '>下一页 →</button></div></section>' +
  '</div>';
}

function englishListeningPageHTML() {
  const englishStateChanged = ensureEnglishStudyState();
  if (englishStateChanged) save();
  const english = DATA.learning.english;
  const listening = english.listening || { completed: 0, target: 12, streak: 0, queue: [] };
  const queue = Array.isArray(listening.queue) ? listening.queue : [];
  const percent = Math.round((Number(listening.completed) || 0) / Math.max(1, Number(listening.target) || 12) * 100);
  return '<div class="workspace-page english-listening-page">' + englishModuleTabs('english-listening') +
    '<section class="workspace-hero english-subpage-hero"><div><button class="english-back-link" type="button" data-action="english-overview">← 返回英语总览</button><div class="workspace-kicker">Listening studio · IELTS Academic</div><div class="workspace-hero-title">' + commaTitleHTML('把听力拆成可重复的场景训练') + '</div><div class="workspace-hero-copy">每次练习只聚焦一个任务：先听大意，再抓关键词，最后回看错题。完成一组后会自动解锁下一组材料。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="english-listening-start">开始下一组</button><button class="btn btn-outline btn-sm" data-action="english-listening-reset">重置本周进度</button></div></div><div class="workspace-hero-side"><div class="english-listening-score"><strong>' + (listening.completed || 0) + '</strong><span>/ ' + (listening.target || 12) + ' 组完成</span></div><div class="english-linear-progress"><span style="width:' + percent + '%"></span></div><small>连续练习 ' + (listening.streak || 0) + ' 天 · 建议每组 15 分钟</small></div></section>' +
    '<div class="workspace-stat-strip english-stat-strip">' + workspaceStatHTML((listening.completed || 0) + '/' + (listening.target || 12), '本周组数', true) + workspaceStatHTML((listening.streak || 0) + ' 天', '连续练习', false) + workspaceStatHTML('15 min', '单组建议', false) + workspaceStatHTML('S3–S4', '当前重点', false) + '</div>' +
    '<div class="english-listening-layout"><section class="study-card"><div class="card-header"><div class="card-title"><span class="dot"></span>训练队列</div><span class="card-tag">按难度递进</span></div><div class="english-session-list">' + (queue.length ? queue.map((item, index) => '<article class="english-session-row ' + (item.status === 'locked' ? 'is-locked' : item.status === 'done' ? 'is-done' : 'is-next') + '"><span class="english-session-index">' + String(index + 1).padStart(2, '0') + '</span><div class="english-session-copy"><small>' + escapeHTML(item.source || '精选听力') + ' · ' + escapeHTML(item.level || 'Band 7.0') + '</small><h3>' + escapeHTML(item.title) + '</h3><p>' + escapeHTML(item.skill || '听力理解训练') + ' · ' + escapeHTML(item.duration || '10:00') + '</p></div><button type="button" class="btn ' + (item.status === 'locked' ? 'btn-ghost' : 'btn-outline') + ' btn-sm" data-english-listening-item="' + escapeAttribute(item.id) + '" ' + (item.status === 'locked' ? 'disabled' : '') + '>' + (item.status === 'done' ? '已完成' : item.status === 'locked' ? '未解锁' : '开始练习') + '</button></article>').join('') : emptyStateHTML('◖)', '暂无听力材料', '联网更新后会出现新的训练组')) + '</div></section><aside class="study-card english-listening-tips"><div class="card-header"><div class="card-title"><span class="dot"></span>本组策略</div></div><div class="english-tip-stack"><div><b>01 · 先听主旨</b><span>第一遍不暂停，只记录人物、地点和转折。</span></div><div><b>02 · 再抓信号词</b><span>留意 however、whereas、as a result 等连接。</span></div><div><b>03 · 最后复盘</b><span>把错题改写成一句完整英文，而不只记答案。</span></div></div></aside></div></div>';
}

function englishReadingArticleCard(article, active) {
  const sourceLink = safeReadingUrl(article.url, article.title);
  return '<article class="english-article-card ' + (active ? 'is-active' : '') + '" data-english-reading-article="' + escapeAttribute(article.id) + '" role="button" tabindex="0" aria-pressed="' + String(Boolean(active)) + '" aria-label="选择文章：' + escapeAttribute(article.title || '未命名文章') + '"><div class="english-article-card-top"><span class="english-article-type">' + escapeHTML(article.type || '综合') + '</span><span>' + escapeHTML(article.genre || '综合文章') + '</span><span>' + escapeHTML(article.level || 'Band 7.0') + '</span></div><h3>' + escapeHTML(article.title) + '</h3><p>' + escapeHTML(article.excerpt || '') + '</p><div class="english-article-meta"><span>' + escapeHTML(article.source || '精选来源') + '</span><span>' + escapeHTML(String(article.minutes || 12) + ' min') + '</span><span>' + escapeHTML(article.publishedAt || '') + '</span><a href="' + escapeAttribute(sourceLink) + '" target="_blank" rel="noopener noreferrer" data-reading-source-link="' + escapeAttribute(article.id) + '">阅读原文 ↗</a></div></article>';
}

function englishReadingPageHTML() {
  const englishStateChanged = ensureEnglishStudyState();
  if (englishStateChanged) save();
  const english = DATA.learning.english;
  const reading = english.reading || { articles: [], dailyGoal: 1, completed: 0 };
  const articles = Array.isArray(reading.articles) ? reading.articles : [];
  const active = articles.find(article => article.id === reading.activeArticleId) || articles[0];
  // `completed` is durable history.  `article.read` only describes the
  // current shelf, so the UI labels the two pieces separately.
  const readCount = Math.max(0, Number(reading.completed) || 0);
  const today = todayKey();
  // Daily progress is based on an explicit reading action today, never on the
  // all-time counter.  Older read flags without a timestamp remain visible as
  // history but are deliberately not guessed as today's activity.
  const todayReadCount = articles.filter(article => article.read && article.lastReadDate === today).length;
  const dailyProgress = Math.min(100, Math.round(todayReadCount / Math.max(1, Number(reading.dailyGoal) || 1) * 100));
  // The visible state is driven by the status so the success/error render
  // produced inside the implementation is not kept disabled by the promise
  // reference for one extra microtask.
  const refreshBusy = englishReadingState.status === 'loading';
  const freshnessStatus = englishReadingState.status === 'loading' ? '正在更新' : englishReadingState.status === 'error' ? '暂时离线' : '内容已就绪';
  const freshnessDetail = englishReadingState.status === 'error'
    ? (englishReadingState.message || '继续使用已缓存的阅读材料')
    : (reading.lastFetchedAt ? '上次更新 ' + new Date(reading.lastFetchedAt).toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '内置精选 + Wikimedia / Wikipedia');
  const detailTitleTranslation = active ? englishReadingTitleTranslation(active) : '';
  const detailHTML = active
    ? '<div class="english-detail-kicker">' + escapeHTML(active.type || '综合') + ' · ' + escapeHTML(active.genre || '综合文章') + ' · ' + escapeHTML(active.source || '精选来源') + '</div><h2>' + escapeHTML(active.title) + '</h2>' + (detailTitleTranslation ? '<p class="english-reading-title-translation">' + escapeHTML(detailTitleTranslation) + '</p>' : '') + '<div class="english-detail-meta"><span>' + escapeHTML(active.level || 'Band 7.0') + '</span><span>' + escapeHTML(String(active.minutes || 12) + ' min') + '</span><span>' + escapeHTML((active.tags || []).join(' · ')) + '</span></div>' + englishReadingDetailStudyHTML(active) + '<div class="english-reading-annotation"><b>精读提示</b><span>先用 3 分钟写出每段主旨，再圈出因果、转折与比较关系；最后把 3 个词放进自己的句子。中文释义不在摘要中时，回到原文或词典核对。</span></div><div class="english-detail-actions"><button class="btn btn-primary btn-sm" data-action="english-reading-mark-read">' + (active.read ? '取消当前标记' : '标记为读完') + '</button><button class="btn btn-outline btn-sm" data-action="english-reading-save">' + (active.saved ? '已收藏' : '收藏文章') + '</button><a class="btn btn-ghost btn-sm" href="' + escapeAttribute(safeReadingUrl(active.url, active.title)) + '" target="_blank" rel="noopener noreferrer" data-reading-source-link="' + escapeAttribute(active.id) + '">阅读原文 ↗</a></div>'
    : emptyStateHTML('▤', '选择一篇文章开始精读', '左侧会显示不同主题的 IELTS 难度材料');
  return '<div class="workspace-page english-reading-page">' + englishModuleTabs('english-reading') +
    '<section class="workspace-hero english-subpage-hero"><div><button class="english-back-link" type="button" data-action="english-overview">← 返回英语总览</button><div class="workspace-kicker">Reading studio · varied source rotation</div><div class="workspace-hero-title">' + commaTitleHTML('每天读一篇，主题可以大一点') + '</div><div class="workspace-hero-copy">文章会在科技、环境、文化、商业、心理与设计之间轮换，保持 IELTS Academic 的阅读密度，也让词汇和背景知识不局限在单一领域。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="english-reading-refresh"' + (refreshBusy ? ' disabled aria-disabled="true"' : '') + '>' + (refreshBusy ? '正在更新…' : '联网获取今日文章') + '</button><button class="btn btn-outline btn-sm" data-action="english-reading-mark-read">' + (active?.read ? '取消当前标记' : '标记当前读完') + '</button></div></div><div class="workspace-hero-side"><div class="english-reading-freshness"><span class="english-sync-dot ' + (englishReadingState.status === 'loading' ? 'is-loading' : '') + '"></span><strong>' + freshnessStatus + '</strong><small>' + escapeHTML(freshnessDetail) + '</small></div><div class="english-linear-progress"><span style="width:' + dailyProgress + '%"></span></div><small class="english-reading-progress-label">今日进度 ' + todayReadCount + ' / ' + (reading.dailyGoal || 1) + ' · 累计历史 ' + readCount + '</small></div></section>' +
    '<div class="workspace-stat-strip english-stat-strip">' + workspaceStatHTML(reading.dailyGoal || 1, '今日目标', true) + workspaceStatHTML(readCount, '累计读完 · 历史', false) + workspaceStatHTML(articles.length, '当前文章', false) + workspaceStatHTML(new Set(articles.map(article => article.type).filter(Boolean)).size + ' 类', '主题覆盖', false) + '</div>' +
    '<div class="english-reading-layout"><section class="study-card english-article-library"><div class="card-header"><div class="card-title"><span class="dot"></span>今日文章库</div><span class="card-tag">主题轮换 · 当前库</span></div><div class="english-article-list">' + (articles.length ? articles.map(article => englishReadingArticleCard(article, active && article.id === active.id)).join('') : emptyStateHTML('▤', '还没有文章', '点击联网获取今日材料')) + '</div></section><section class="study-card english-reading-detail">' + detailHTML + '</section></div>' +
  '</div>';
}

function englishWritingPageHTML() {
  const englishStateChanged = ensureEnglishStudyState();
  if (englishStateChanged) save();
  const english = DATA.learning.english;
  const writing = english.writing || { prompts: [], drafts: [], weeklyGoal: 2, completed: 0 };
  const prompts = Array.isArray(writing.prompts) ? writing.prompts : [];
  const activePrompt = prompts.find(prompt => prompt.id === englishWritingPromptId) || prompts[0];
  const drafts = Array.isArray(writing.drafts) ? writing.drafts : [];
  const draft = activePrompt ? drafts.find(item => item.promptId === activePrompt.id) : null;
  return '<div class="workspace-page english-writing-page">' + englishModuleTabs('english-writing') +
    '<section class="workspace-hero english-subpage-hero"><div><button class="english-back-link" type="button" data-action="english-overview">← 返回英语总览</button><div class="workspace-kicker">Writing studio · Task 1 + Task 2</div><div class="workspace-hero-title">' + commaTitleHTML('把观点写清楚，再把语言写漂亮') + '</div><div class="workspace-hero-copy">每周保留两次完整输出：一次练结构，一次练语言。题目覆盖图表、观点、双边讨论和问题解决，写完后留下自评。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="english-writing-complete">完成本次写作</button><button class="btn btn-outline btn-sm" data-action="english-writing-new">换一道题</button></div></div><div class="workspace-hero-side"><div class="english-writing-score"><strong>' + (writing.completed || 0) + '</strong><span>/ ' + (writing.weeklyGoal || 2) + ' 本周完成</span></div><div class="english-linear-progress"><span style="width:' + Math.min(100, Math.round((writing.completed || 0) / Math.max(1, writing.weeklyGoal || 2) * 100)) + '%"></span></div><small>建议先写提纲，再进入限时练习</small></div></section>' +
    '<div class="workspace-stat-strip english-stat-strip">' + workspaceStatHTML((writing.completed || 0) + '/' + (writing.weeklyGoal || 2), '本周目标', true) + workspaceStatHTML('40 min', 'Task 2 建议', false) + workspaceStatHTML('20 min', 'Task 1 建议', false) + workspaceStatHTML(drafts.length, '保留草稿', false) + '</div>' +
    '<div class="english-writing-layout"><section class="study-card english-writing-prompts"><div class="card-header"><div class="card-title"><span class="dot"></span>题目队列</div><span class="card-tag">本周建议</span></div><div class="english-prompt-list">' + (prompts.length ? prompts.map(prompt => '<button type="button" class="english-prompt-row ' + (activePrompt && prompt.id === activePrompt.id ? 'is-active' : '') + '" data-english-writing-prompt="' + escapeAttribute(prompt.id) + '"><span class="english-prompt-type">' + escapeHTML(prompt.type || 'Writing') + '</span><span class="english-prompt-copy"><strong>' + escapeHTML(prompt.title) + '</strong><small>' + escapeHTML(prompt.focus || '') + ' · ' + escapeHTML(String(prompt.time || 30) + ' min') + '</small></span><i>→</i></button>').join('') : emptyStateHTML('✎', '暂无写作题目', '稍后会生成新的练习')) + '</div></section><section class="study-card english-writing-desk">' + (activePrompt ? '<div class="english-detail-kicker">' + escapeHTML(activePrompt.type || 'Writing') + ' · 结构训练</div><h2>' + escapeHTML(activePrompt.title) + '</h2><div class="english-writing-focus"><span>本题重点</span><b>' + escapeHTML(activePrompt.focus || '论证结构') + '</b><small>先写 3 句提纲，再进入正文。</small></div><textarea class="english-writing-draft" data-english-writing-draft="' + escapeAttribute(activePrompt.id) + '" placeholder="在这里写下你的提纲或第一版答案…">' + escapeHTML(draft ? draft.text : '') + '</textarea><div class="english-writing-desk-foot"><span>草稿会随输入自动保存到当前工作台</span><button class="btn btn-primary btn-sm" data-action="english-writing-save">保存草稿</button></div>' : emptyStateHTML('✎', '选择一道题开始写作', '左侧题目会保留你的练习轨迹')) + '</section></div>' +
  '</div>';
}

// ========================================================================
// CIVIL SERVICE STUDY
// ========================================================================
function ensureCivilServiceState(root = DATA) {
  if (!root.learning) root.learning = {};
  if (!root.learning.civilService) root.learning.civilService = cloneData(DEFAULT_DATA.learning.civilService);
  const study = root.learning.civilService;
  const defaults = DEFAULT_DATA.learning.civilService;
  mergeDefaults(study, defaults);
  study.profile.targetScore = Math.max(1, Math.min(100, Number(study.profile.targetScore) || defaults.profile.targetScore));
  study.profile.dailyMinutes = Math.max(1, Math.min(1440, Number(study.profile.dailyMinutes) || defaults.profile.dailyMinutes));
  study.weeklyGoal = Math.max(1, Math.min(100, Number(study.weeklyGoal) || defaults.weeklyGoal));
  study.weeklyCompleted = Math.max(0, Number(study.weeklyCompleted) || 0);
  study.streak = Math.max(0, Number(study.streak) || 0);
  study.totalMinutes = Math.max(0, Number(study.totalMinutes) || 0);
  study.studyHistory = (Array.isArray(study.studyHistory) ? study.studyHistory : []).filter(item => item && item.date).map(item => ({
    date: String(item.date), minutes: Math.max(0, Number(item.minutes) || 0), completed: Math.max(0, Number(item.completed) || 0)
  })).slice(-60);
  study.subjects = (Array.isArray(study.subjects) ? study.subjects : []).filter(item => item && item.id).map(item => {
    item.id = String(item.id);
    item.title = String(item.title || '未命名科目');
    item.icon = String(item.icon || '知');
    item.description = String(item.description || '');
    item.focus = String(item.focus || '基础训练');
    item.progress = Math.max(0, Math.min(100, Number(item.progress) || 0));
    item.tasks = (Array.isArray(item.tasks) ? item.tasks : []).filter(task => task && task.id).map(task => ({
      ...task, id: String(task.id), title: String(task.title || '学习任务'), done: Boolean(task.done)
    }));
    item.weakPoints = Array.isArray(item.weakPoints) ? item.weakPoints.map(value => String(value)).filter(Boolean).slice(0, 4) : [];
    item.note = String(item.note || '');
    return item;
  });
  return study;
}

function civilServiceStudy() {
  return ensureCivilServiceState(DATA);
}

function civilServiceSubject(subjectId) {
  return civilServiceStudy().subjects.find(subject => subject.id === subjectId) || null;
}

function civilServiceStats() {
  const study = civilServiceStudy();
  const subjects = study.subjects;
  const tasks = subjects.flatMap(subject => subject.tasks || []);
  const done = tasks.filter(task => task.done).length;
  const mastery = subjects.length ? Math.round(subjects.reduce((total, subject) => total + subject.progress, 0) / subjects.length) : 0;
  const active = subjects.filter(subject => subject.progress < 60).length;
  return { study, subjects, tasks, done, mastery, active, taskPercent: tasks.length ? Math.round(done / tasks.length * 100) : 0 };
}

function civilServiceRecordStudy(subjectId, minutes = 25) {
  const study = civilServiceStudy();
  const amount = Math.max(5, Math.min(240, Number(minutes) || 25));
  const today = todayKey();
  let record = study.studyHistory.find(item => item.date === today);
  if (!record) {
    record = { date: today, minutes: 0, completed: 0 };
    study.studyHistory.push(record);
  }
  record.minutes += amount;
  record.completed += 1;
  study.studyHistory.sort((a, b) => a.date.localeCompare(b.date));
  study.studyHistory = study.studyHistory.slice(-60);
  study.totalMinutes += amount;
  if (study.lastStudyDate !== today) {
    study.streak = study.lastStudyDate === shiftDateKey(today, -1) ? Math.max(1, study.streak) + 1 : 1;
    study.lastStudyDate = today;
  }
  study.weeklyCompleted += 1;
  const subject = subjectId ? study.subjects.find(item => item.id === subjectId) : null;
  if (subject) subject.progress = Math.min(100, subject.progress + 2);
}

function civilServiceToggleTask(subjectId, taskId) {
  const subject = civilServiceSubject(subjectId);
  const task = subject && subject.tasks.find(item => item.id === taskId);
  if (!subject || !task) return;
  task.done = !task.done;
  if (task.done) {
    task.completedAt = new Date().toISOString();
    civilServiceRecordStudy(subjectId);
  } else {
    delete task.completedAt;
    subject.progress = Math.max(0, subject.progress - 1);
  }
  save();
  rerender();
  showToast(task.done ? '已记录公考学习进展' : '已取消该项完成状态', 'success');
}

function civilServiceHistoryHTML() {
  const study = civilServiceStudy();
  const byDate = new Map(study.studyHistory.map(item => [item.date, item]));
  const today = todayKey();
  const cells = Array.from({ length: 14 }, (_, index) => {
    const date = shiftDateKey(today, index - 13);
    const item = byDate.get(date);
    const level = !item || !item.minutes ? 0 : item.minutes >= 100 ? 3 : item.minutes >= 60 ? 2 : 1;
    return '<span class="civil-history-cell level-' + level + '" title="' + escapeAttribute(date + ' · ' + (item?.minutes || 0) + ' 分钟') + '" aria-label="' + escapeAttribute(date + '学习' + (item?.minutes || 0) + '分钟') + '"></span>';
  }).join('');
  return '<div class="civil-history-wrap"><div class="civil-history-cells">' + cells + '</div><div class="civil-history-legend"><span>近 14 天学习节奏</span><span><i class="level-0"></i>未学习 <i class="level-1"></i>轻量 <i class="level-2"></i>标准 <i class="level-3"></i>深度</span></div></div>';
}

function civilServiceProgressChartHTML(subjects) {
  const width = 720;
  const baseline = 152;
  const chartHeight = 112;
  const barWidth = 48;
  const gap = 33;
  const bars = subjects.map((subject, index) => {
    const x = 18 + index * (barWidth + gap);
    const height = Math.max(2, Math.round(chartHeight * subject.progress / 100));
    const y = baseline - height;
    return '<g class="civil-chart-bar" data-civil-service-subject="' + escapeAttribute(subject.id) + '" role="button" tabindex="0" aria-label="打开' + escapeAttribute(subject.title) + '，掌握度 ' + subject.progress + '%"><title>' + escapeHTML(subject.title + '：' + subject.progress + '%') + '</title><rect x="' + x + '" y="' + y + '" width="' + barWidth + '" height="' + height + '" rx="8"></rect><text x="' + (x + barWidth / 2) + '" y="' + (y - 9) + '" text-anchor="middle">' + subject.progress + '%</text><text x="' + (x + barWidth / 2) + '" y="' + (baseline + 24) + '" text-anchor="middle">' + escapeHTML(subject.title.slice(0, 4)) + '</text></g>';
  }).join('');
  const mobileBars = subjects.map(subject => '<button type="button" class="civil-progress-mobile-row" data-civil-service-subject="' + escapeAttribute(subject.id) + '" aria-label="打开' + escapeAttribute(subject.title) + '，掌握度 ' + subject.progress + '%"><span><strong>' + escapeHTML(subject.title) + '</strong><b>' + subject.progress + '%</b></span><i><em style="width:' + subject.progress + '%"></em></i></button>').join('');
  return '<div class="civil-progress-chart" role="img" aria-label="公考各科掌握度对比"><svg viewBox="0 0 ' + width + ' 205" preserveAspectRatio="none"><line x1="12" y1="' + baseline + '" x2="' + (width - 10) + '" y2="' + baseline + '"></line><line x1="12" y1="' + (baseline - chartHeight / 2) + '" x2="' + (width - 10) + '" y2="' + (baseline - chartHeight / 2) + '"></line><line x1="12" y1="' + (baseline - chartHeight) + '" x2="' + (width - 10) + '" y2="' + (baseline - chartHeight) + '"></line><text class="civil-chart-axis" x="' + (width - 11) + '" y="' + (baseline - chartHeight + 4) + '" text-anchor="end">100</text><text class="civil-chart-axis" x="' + (width - 11) + '" y="' + (baseline + 4) + '" text-anchor="end">0</text>' + bars + '</svg></div><div class="civil-progress-mobile" aria-label="公考各科掌握度对比">' + mobileBars + '</div>';
}

function civilServiceTabs(active) {
  const tabs = [['civil-service', '总览'], ...civilServiceStudy().subjects.map(subject => [subject.id, subject.title])];
  return '<nav class="civil-module-tabs" aria-label="公考学习模块" role="tablist">' + tabs.map(([id, label]) => '<button type="button" class="civil-module-tab' + (active === id ? ' is-active' : '') + '" data-action="civil-go-' + escapeAttribute(id) + '" role="tab" aria-selected="' + String(active === id) + '">' + escapeHTML(label) + '</button>').join('') + '</nav>';
}

function civilServiceOverviewPageHTML() {
  const stats = civilServiceStats();
  const weeklyPercent = Math.min(100, Math.round(stats.study.weeklyCompleted / Math.max(1, stats.study.weeklyGoal) * 100));
  const nextSubject = stats.subjects.slice().sort((a, b) => a.progress - b.progress)[0];
  const subjectCards = stats.subjects.map(subject => {
    const done = (subject.tasks || []).filter(task => task.done).length;
    return '<button type="button" class="civil-subject-card" data-civil-service-subject="' + escapeAttribute(subject.id) + '" aria-label="打开' + escapeAttribute(subject.title) + '"><span class="civil-subject-card-top"><i>' + escapeHTML(subject.icon) + '</i><strong>' + escapeHTML(subject.title) + '</strong><em>' + subject.progress + '%</em></span><span class="civil-subject-card-focus">' + escapeHTML(subject.focus) + '</span><span class="civil-subject-card-progress"><i style="width:' + subject.progress + '%"></i></span><span class="civil-subject-card-foot"><small>' + done + '/' + subject.tasks.length + ' 项训练已完成</small><b>进入科目 →</b></span></button>';
  }).join('');
  return '<div class="workspace-page civil-service-page">' + civilServiceTabs('civil-service') +
    '<section class="workspace-hero civil-overview-hero"><div><div class="workspace-kicker">Civil service studio · 行测 + 申论</div><div class="workspace-hero-title">' + commaTitleHTML('把八个科目，推进成一条上岸路径') + '</div><div class="workspace-hero-copy">公考学习不只看刷题数量。这里把知识掌握、今日训练和持续投入放在同一张进度地图上，让你知道现在在哪里、下一步该补什么。</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="civil-service-log-session">记录 25 分钟学习</button><button class="btn btn-outline btn-sm" data-action="civil-go-' + escapeAttribute(nextSubject ? nextSubject.id : 'civil-service') + '">优先补强 ' + escapeHTML(nextSubject ? nextSubject.title : '当前薄弱科目') + '</button></div></div><div class="workspace-hero-side"><div class="civil-overview-score"><span>综合掌握度</span><strong>' + stats.mastery + '%</strong><small>目标分数 ' + stats.study.profile.targetScore + ' · 每日建议 ' + stats.study.profile.dailyMinutes + ' 分钟</small></div><div class="english-linear-progress"><span style="width:' + stats.mastery + '%"></span></div><small>连续学习 ' + stats.study.streak + ' 天 · ' + (stats.active ? stats.active + ' 个科目值得优先补强' : '各科目均已进入稳定区间') + '</small></div></section>' +
    '<div class="workspace-stat-strip civil-stat-strip">' + workspaceStatHTML(stats.mastery + '%', '综合掌握度', true) + workspaceStatHTML(stats.study.totalMinutes + ' min', '累计投入', false) + workspaceStatHTML(stats.study.weeklyCompleted + '/' + stats.study.weeklyGoal, '本周训练目标', false) + workspaceStatHTML(stats.done + '/' + stats.tasks.length, '科目任务完成', false) + '</div>' +
    '<div class="civil-overview-grid"><section class="study-card civil-progress-card"><div class="card-header"><div class="card-title"><span class="dot"></span>八科掌握度地图</div><span class="card-tag">点击柱状图进入科目</span></div>' + civilServiceProgressChartHTML(stats.subjects) + '<div class="civil-chart-note"><span><i></i>掌握度基于阶段自评与训练记录</span><b>当前最低：' + escapeHTML(nextSubject ? nextSubject.title : '暂无') + ' · ' + (nextSubject?.progress || 0) + '%</b></div></section><section class="study-card civil-rhythm-card"><div class="card-header"><div class="card-title"><span class="dot"></span>学习节奏</div><span class="card-tag">持续比突击重要</span></div><div class="civil-weekly-progress"><div><span>本周目标</span><strong>' + stats.study.weeklyCompleted + ' / ' + stats.study.weeklyGoal + ' 次训练</strong></div><div class="workspace-progress-track"><div class="workspace-progress-fill" style="width:' + weeklyPercent + '%"></div></div></div>' + civilServiceHistoryHTML() + '<div class="civil-rhythm-summary"><span><b>' + stats.study.streak + '</b>天</span><small>当前连续学习</small><span><b>' + Math.round(stats.study.totalMinutes / 60 * 10) / 10 + '</b>小时</span><small>累计投入时长</small></div></section></div>' +
    '<section class="civil-subject-section"><div class="civil-section-heading"><div><span>Subject map</span><h2>从薄弱项开始，逐科建立优势</h2></div><p>每个科目保留自己的训练清单和错题提醒；完成任务会自动更新总览进度。</p></div><div class="civil-subject-grid">' + subjectCards + '</div></section>' +
    '</div>';
}

function civilServiceSubjectPageHTML(subjectId) {
  const subject = civilServiceSubject(subjectId);
  if (!subject) return civilServiceOverviewPageHTML();
  const done = subject.tasks.filter(task => task.done).length;
  const percent = subject.tasks.length ? Math.round(done / subject.tasks.length * 100) : 0;
  const taskHTML = subject.tasks.length ? subject.tasks.map(task => '<button type="button" class="civil-task-row' + (task.done ? ' is-done' : '') + '" data-civil-task="' + escapeAttribute(task.id) + '" data-civil-subject="' + escapeAttribute(subject.id) + '" aria-pressed="' + String(task.done) + '"><span class="civil-task-check">' + (task.done ? '✓' : '') + '</span><span><strong>' + escapeHTML(task.title) + '</strong><small>' + (task.done ? '已完成 · 继续保持' : '待完成 · 完成后计入学习进展') + '</small></span><i>' + (task.done ? '已完成' : '完成') + '</i></button>').join('') : emptyStateHTML('□', '暂无训练任务', '稍后补充该科目的练习计划');
  const weakHTML = (subject.weakPoints || []).map((point, index) => '<li><b>0' + (index + 1) + '</b><span>' + escapeHTML(point) + '</span></li>').join('');
  return '<div class="workspace-page civil-service-page civil-subject-page">' + civilServiceTabs(subject.id) +
    '<section class="workspace-hero civil-subject-hero"><div><button class="civil-back-link" type="button" data-action="civil-go-civil-service">← 返回公考总览</button><div class="workspace-kicker">Subject lab · ' + escapeHTML(subject.focus) + '</div><div class="workspace-hero-title">' + commaTitleHTML(subject.title + '，把方法练成反应') + '</div><div class="workspace-hero-copy">' + escapeHTML(subject.description) + '</div><div class="workspace-hero-actions"><button class="btn btn-primary btn-sm" data-action="civil-service-log-session">记录本次 25 分钟</button><button class="btn btn-outline btn-sm" data-action="civil-service-next-subject">切换下一科</button></div></div><div class="workspace-hero-side"><div class="civil-subject-score"><span>阶段掌握度</span><strong>' + subject.progress + '%</strong><small>' + done + ' / ' + subject.tasks.length + ' 项今日训练完成</small></div><div class="english-linear-progress"><span style="width:' + subject.progress + '%"></span></div><small>当前科目建议：先完成清单，再复盘薄弱点</small></div></section>' +
    '<div class="workspace-stat-strip civil-stat-strip">' + workspaceStatHTML(subject.progress + '%', '阶段掌握度', true) + workspaceStatHTML(done + '/' + subject.tasks.length, '训练完成', false) + workspaceStatHTML(subject.focus.split(' · ')[0] || '基础', '当前重点', false) + workspaceStatHTML(civilServiceStudy().streak + ' 天', '连续学习', false) + '</div>' +
    '<div class="civil-subject-layout"><section class="study-card civil-task-card"><div class="card-header"><div class="card-title"><span class="dot"></span>今日训练清单</div><span class="card-tag">' + percent + '% 完成</span></div><div class="civil-task-list">' + taskHTML + '</div><div class="civil-task-progress"><div class="workspace-progress-head"><span>本组完成度</span><strong>' + percent + '%</strong></div><div class="workspace-progress-track"><div class="workspace-progress-fill" style="width:' + percent + '%"></div></div></div></section><aside class="study-card civil-weak-card"><div class="card-header"><div class="card-title"><span class="dot"></span>薄弱点提醒</div><span class="card-tag">复盘入口</span></div><ul class="civil-weak-list">' + (weakHTML || '<li><span>继续积累错题，系统会在这里形成提醒。</span></li>') + '</ul><label class="civil-note-label" for="civilNote-' + escapeAttribute(subject.id) + '">本次复盘笔记</label><textarea id="civilNote-' + escapeAttribute(subject.id) + '" class="civil-note-input" data-civil-notes="' + escapeAttribute(subject.id) + '" placeholder="记下一个易错点、一个方法或下一次训练安排…">' + escapeHTML(subject.note) + '</textarea><small class="civil-note-hint">输入会自动保存到当前工作台</small></aside></div>' +
    '</div>';
}

// ========================================================================
// PAGES
// ========================================================================
function secondaryPageHeroHTML(eyebrow, title, copy) {
  return '<section class="secondary-page-hero"><div class="secondary-page-eyebrow">' + escapeHTML(eyebrow) + '</div><h2>' + commaTitleHTML(title) + '</h2><p>' + escapeHTML(copy) + '</p></section>';
}

const PAGES = {
  dashboard: {
    title: '仪表盘',
    render: () => {
      const tasks = DATA.tasks.dashboard;
      const done = tasks.filter(t => t.done).length;
      const percent = calcTaskPercent(tasks);
      const checkins = DATA.checkins.daily;
      const ciDone = checkins.filter(c => c.done).length;
      const now = new Date();
      const dateFull = (now.getMonth() + 1) + '月' + now.getDate() + '日';
      const weekday = '星期' + '日一二三四五六'[now.getDay()];
      const remainingTasks = tasks.length - done;
      const savedDisplayName = String(DATA.settings.displayName || 'TheoFan').trim() || 'TheoFan';
      const displayName = savedDisplayName.toLowerCase() === 'theofan' ? 'TheoFan' : savedDisplayName;
      const hour = now.getHours();
      const dayPartNotes = [
        [5, '深夜了', '早点休息'],
        [7, '清晨好', '新的一天'],
        [9, '早上好', '继续加油'],
        [11, '上午好', '专心工作'],
        [14, '中午好', '小憩一会'],
        [17, '下午好', '继续加油'],
        [19, '傍晚好', '放松一下'],
        [22, '晚上好', '慢慢收尾'],
        [24, '深夜了', '早点休息']
      ];
      const currentDayPart = dayPartNotes.find(note => hour < note[0]) || dayPartNotes[dayPartNotes.length - 1];
      const overviewNote = [currentDayPart[1], currentDayPart[2]];
      const dashboardStats = [
        ['今日待办', remainingTasks, '项等待推进', true],
        ['已完成', done, '项已划掉', false],
        ['今日进度', percent + '%', '完成度', true],
        ['每日打卡', ciDone + '/' + checkins.length, '保持节奏', false]
      ].map(stat => '<div class="dashboard-stat' + (stat[3] ? ' is-accent' : '') + '"><small>' + stat[0] + '</small><strong>' + stat[1] + '</strong><span>' + stat[2] + '</span></div>').join('');
      const hero = '<section class="dashboard-hero" id="dashboardHero">' +
        '<div class="dashboard-hero-copy"><div class="dashboard-kicker"><b>//</b> WORKBENCH DASHBOARD <i></i> ' + escapeHTML(dateFull) + escapeHTML(weekday) + '</div><h2>👋 欢迎回来，<span class="dashboard-display-name">' + escapeHTML(displayName) + '</span></h2><p><b>' + escapeHTML(overviewNote[0]) + '</b>，今天还有 <strong>' + remainingTasks + '</strong> 项待完成。<em>' + escapeHTML(overviewNote[1]) + '。</em></p></div>' +
        '<div class="dashboard-hero-right"><div class="dashboard-eyes" id="dashboardEyes" role="button" tabindex="0" aria-label="仪表盘助手，会跟随鼠标移动；点击可以互动"><span class="dashboard-eye"><i></i></span><span class="dashboard-eye"><i></i></span></div></div>' +
      '</section><section class="dashboard-stat-strip">' + dashboardStats + '</section>';
      const focusCard = '<div class="card"><div class="card-header"><div class="card-title"><span class="dot"></span>今日完成度</div><span class="card-tag">' + percent + '%</span></div>' + taskListHTML('tasks.dashboard', tasks) + '</div>';
      const checkinCard = '<div class="card"><div class="card-header"><div class="card-title"><span class="dot"></span>每日打卡</div><span class="card-tag">' + ciDone + '/' + checkins.length + '</span></div>' + checkinHTML('daily', checkins) + '</div>';
      const learningCard = '<div class="card"><div class="card-header"><div class="card-title"><span class="dot"></span>学习进度</div></div>' + barHTMLAuto('AI 学习', calcTaskPercent(DATA.tasks.aiLearn)) + barHTMLAuto('英语学习', calcTaskPercent(DATA.tasks.english)) + barHTMLAuto('科研文献', calcTaskPercent(DATA.tasks.researchPapers)) + '</div>';
      return hero + '<div class="personal-work-grid">' + focusCard + checkinCard + learningCard + '</div>';
    }
  },

  'daily-plan': {
    title: '任务规划',
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
      return secondaryPageHeroHTML('Content Discovery', '把零散想法，整理成值得创作的方向', '收集正在发生的变化，也保留那些还不成熟、但值得继续追问的念头。') + '<div class="card-grid">' +
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
      return secondaryPageHeroHTML('Creative Review', '让每一次发布，都沉淀为下一次判断', '用真实反馈校准方向，把有效的方法留下，把不再适用的做法及时放下。') + '<div class="card-grid">' +
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
      return secondaryPageHeroHTML('Visual Storytelling', '把故事拆成可推进的画面与节奏', '从主题、分镜到发布记录，让每一段创作都有清晰的下一步。') + '<div class="card-grid">' +
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
      return englishLearningPageHTML();
    }
  },

  'english-vocab': { title: '雅思词汇', render: englishVocabPageHTML },
  'english-listening': { title: '雅思听力', render: englishListeningPageHTML },
  'english-reading': { title: '雅思阅读', render: englishReadingPageHTML },
  'english-writing': { title: '雅思写作', render: englishWritingPageHTML },

  'civil-service': { title: '公考学习', render: civilServiceOverviewPageHTML },
  'civil-quantity': { title: '数量关系', render: () => civilServiceSubjectPageHTML('quantity') },
  'civil-logic': { title: '逻辑判断', render: () => civilServiceSubjectPageHTML('logic') },
  'civil-analogy': { title: '类比推理', render: () => civilServiceSubjectPageHTML('analogy') },
  'civil-graphic': { title: '图形推理', render: () => civilServiceSubjectPageHTML('graphic') },
  'civil-data': { title: '资料分析', render: () => civilServiceSubjectPageHTML('data') },
  'civil-general': { title: '常识', render: () => civilServiceSubjectPageHTML('general') },
  'civil-politics': { title: '政治理论', render: () => civilServiceSubjectPageHTML('politics') },
  'civil-essay': { title: '申论', render: () => civilServiceSubjectPageHTML('essay') },

  research: {
    title: '文献管理',
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
      return '<div class="literature-page">' + secondaryPageHeroHTML('Reading to Knowledge', '让每一篇文献，都进入可复用的知识网络', '把阅读、标注与关联整理成长期积累，让新的研究判断有据可循。') + literatureTabs + currentViewHTML + '</div>';
    }
  },

  'research-inspiration': {
    title: '灵感构思',
    render: () => researchIdeaHTML()
  },

  'research-experiments': {
    title: '实验验证',
    render: () => researchExperimentHTML()
  },

  'research-papers': {
    title: '写作投稿',
    render: () => researchPaperHTML()
  },

  news: {
    title: '新闻热点',
    render: () => {
      const n = DATA.news;
      return secondaryPageHeroHTML('Signals and Trends', '从每日信息流里，留下真正值得跟进的信号', '区分短暂热度与长期变化，让资讯服务于研究、学习与创作。') + '<div class="card-grid">' +
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
    title: '设置',
    render: () => {
      const isAPI = storage.mode === 'api';
      const isFSAA = storage.mode === 'fsaa';
      const all = countAllTasks();
      const inspCount = DATA.inspirations.ideas.length + DATA.inspirations.trends.length + DATA.inspirations.sources.length;
      const theme = currentThemePref();
      const icloudPath = '项目目录/data/（可选择任意本地或 iCloud 文件夹）';

      const wcfg = weatherConfig();

      return secondaryPageHeroHTML('Workspace Preferences', '让工作台保持顺手、稳定与可掌控', '集中管理外观、天气、数据同步与备份方式。') + '<div class="settings-card">' +
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
PAGES['english-vocab'].render = englishVocabPageHTML;
PAGES['english-listening'].render = englishListeningPageHTML;
PAGES['english-reading'].render = englishReadingPageHTML;
PAGES['english-writing'].render = englishWritingPageHTML;

// ========================================================================
// PAGE RENDERING + NAVIGATION
// ========================================================================
const PAGE_ORDER = ['dashboard', 'daily-plan', 'fitness', 'inspiration', 'review', 'comic', 'ai-learn', 'english', 'civil-service', 'research', 'news', 'settings', 'research-inspiration', 'research-experiments', 'research-papers', 'english-vocab', 'english-listening', 'english-reading', 'english-writing', 'civil-quantity', 'civil-logic', 'civil-analogy', 'civil-graphic', 'civil-data', 'civil-general', 'civil-politics', 'civil-essay'];

// Page-level titles and dates duplicate the persistent navigation and each
// page's own content heading, so every workspace view uses the open canvas.
function mainHeaderHTML(page, pageId) {
  return '';
}

function pageIdFromHash() {
  try {
    const candidate = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (candidate === 'research-todo') return 'daily-plan';
    return PAGES[candidate] ? candidate : 'dashboard';
  } catch (error) {
    return 'dashboard';
  }
}

function renderPage(pageId, options = {}) {
  if (pageId === 'research-todo') pageId = 'daily-plan';
  const page = PAGES[pageId];
  if (!page) return;
  currentPage = pageId;
  if (options.syncUrl !== false && location.hash !== '#' + pageId) {
    history.pushState(null, '', '#' + pageId);
  }

  document.querySelectorAll('.menu-item').forEach(m => {
    const isEnglishChild = ['english-vocab', 'english-listening', 'english-reading', 'english-writing'].includes(pageId);
    const isActive = m.dataset.page === pageId || (m.dataset.page === 'english' && isEnglishChild);
    m.classList.toggle('active', isActive);
    if (isActive) m.setAttribute('aria-current', 'page');
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
function addTask(path, text, options = {}) {
  const dueDate = options.dueDate || todayKey();
  const isPlanTask = path.startsWith('tasks.dailyPlan.');
  const planSlot = isPlanTask ? path.split('.').pop() : '';
  const planDefaultTime = isPlanTask ? planAddTimeForSlot(planSlot, dueDate) : '';
  const requestedTime = options.scheduledTime || planDefaultTime;
  const scheduledTime = isPlanTask ? roundPlanTimeToHalfHour(requestedTime, planDefaultTime) : requestedTime;
  const targetPath = path.startsWith('tasks.dailyPlan.') ? planPathForTime(scheduledTime) : path;
  const arr = getNestedData(targetPath);
  if (!Array.isArray(arr)) return;
  const task = normalizeTask({ id: uid(), text, done: false, scheduledTime }, dueDate, scheduledTime);
  if (!task) return;
  arr.push(task);
  save();
  rerender();
  showToast('已添加', 'success');
}

function reschedulePlanTask(path, id, scheduledTime) {
  const source = getNestedData(path);
  if (!Array.isArray(source)) return;
  const index = source.findIndex(task => task.id === id);
  if (index < 0) return;
  const task = source[index];
  task.scheduledTime = roundPlanTimeToHalfHour(scheduledTime, task.scheduledTime || defaultPlanTimeForSlot(path.split('.').pop()));
  task.updatedAt = new Date().toISOString();
  const targetPath = planPathForTime(task.scheduledTime);
  if (targetPath !== path) {
    source.splice(index, 1);
    const target = getNestedData(targetPath);
    if (Array.isArray(target)) target.push(task);
  }
  save();
  rerender();
  showToast('任务时间已调整为 ' + task.scheduledTime, 'success');
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
  const sourceDate = dailyPlanViewDate || todayKey();
  const nextDate = shiftDateKey(sourceDate, 1);
  snapshotDailyState(sourceDate, 'manual-rollover');
  let moved = 0;
  for (const key of ['morning', 'afternoon', 'evening']) {
    dp[key].forEach(task => {
      if (!task.done && isTaskOnPlanDate(task, sourceDate)) {
        task.carriedFrom = sourceDate;
        task.dueDate = nextDate;
        task.updatedAt = new Date().toISOString();
        moved++;
      }
    });
  }
  dailyPlanViewDate = nextDate;
  dailyPlanCalendarMonth = nextDate.slice(0, 7);
  save();
  rerender();
  showToast(moved > 0 ? '已将 ' + moved + ' 项未完成任务结转到 ' + planDateLabel(nextDate) : '所选日期没有未完成任务需要结转', 'success');
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
    'research': ['tasks.researchPapers']
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
    ['tasks.researchPapers', '科研文献']
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

document.getElementById('kbdHelpBtn')?.addEventListener('click', showShortcutsHelp);

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
    if (document.getElementById('weatherPopover')?.classList.contains('show')) { closeWeatherDetails(); return; }
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
  const selectedTags = new Set(activeReadingLogTags);
  const hasSelectedDomain = Array.from(wrap.querySelectorAll('[data-pie-index][data-reading-tag]')).some(item => selectedTags.has(item.dataset.readingTag));
  wrap.classList.toggle('has-active', index !== undefined || hasSelectedDomain);
  wrap.querySelectorAll('[data-pie-index]').forEach(item => {
    item.classList.toggle('is-active', item.dataset.pieIndex === index || selectedTags.has(item.dataset.readingTag));
  });
  setLiteratureLinkedTagActive(interactive.dataset.pieLabel || '');
}

function clearLiteraturePieActive(wrap) {
  if (!wrap) return;
  const selectedTags = new Set(activeReadingLogTags);
  const hasSelectedDomain = Array.from(wrap.querySelectorAll('[data-pie-index][data-reading-tag]')).some(item => selectedTags.has(item.dataset.readingTag));
  wrap.classList.toggle('has-active', hasSelectedDomain);
  wrap.querySelectorAll('[data-pie-index]').forEach(item => {
    item.classList.toggle('is-active', selectedTags.has(item.dataset.readingTag));
  });
  clearLiteratureLinkedTagActive();
}

function setLiteratureLinkedTagActive(domain) {
  const target = String(domain || '');
  document.querySelectorAll('.literature-tag-group[data-tag-group="domain"] [data-reading-tag]').forEach(item => {
    item.classList.toggle('is-linked-active', Boolean(target) && item.dataset.readingTag === target);
  });
}

function clearLiteratureLinkedTagActive() {
  document.querySelectorAll('.literature-tag-group[data-tag-group="domain"] [data-reading-tag].is-linked-active').forEach(item => {
    item.classList.remove('is-linked-active');
  });
}

function setLiteratureDomainHighlight(domain) {
  const target = String(domain || '');
  document.querySelectorAll('.literature-pie-wrap').forEach(wrap => {
    if (!target) {
      clearLiteraturePieActive(wrap);
      return;
    }
    const item = Array.from(wrap.querySelectorAll('[data-pie-index]')).find(candidate => candidate.dataset.pieLabel === target);
    if (item) setLiteraturePieActive(item);
  });
}

function clearLiteratureDomainHighlight() {
  document.querySelectorAll('.literature-pie-wrap').forEach(clearLiteraturePieActive);
}

document.addEventListener('pointerover', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell) showReadingLogTooltip(heatmapCell, e.clientX, e.clientY);
  const pieItem = e.target.closest && e.target.closest('.literature-pie-wrap [data-pie-index]');
  if (pieItem) setLiteraturePieActive(pieItem);
  const domainTag = e.target.closest && e.target.closest('.literature-tag-group[data-tag-group="domain"] [data-reading-tag]');
  if (domainTag) setLiteratureDomainHighlight(domainTag.dataset.readingTag || '');
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
  const domainTag = e.target.closest && e.target.closest('.literature-tag-group[data-tag-group="domain"] [data-reading-tag]');
  if (domainTag && (!e.relatedTarget || !domainTag.contains(e.relatedTarget))) clearLiteratureDomainHighlight();
});

document.addEventListener('focusin', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell) showReadingLogTooltip(heatmapCell);
  const pieItem = e.target.closest && e.target.closest('.literature-pie-wrap [data-pie-index]');
  if (pieItem) setLiteraturePieActive(pieItem);
  const domainTag = e.target.closest && e.target.closest('.literature-tag-group[data-tag-group="domain"] [data-reading-tag]');
  if (domainTag) setLiteratureDomainHighlight(domainTag.dataset.readingTag || '');
});

document.addEventListener('focusout', (e) => {
  const heatmapCell = e.target.closest && e.target.closest('.literature-heatmap-panel .hm-cell.has-reading-log');
  if (heatmapCell) hideReadingLogTooltip();
  const pieWrap = e.target.closest && e.target.closest('.literature-pie-wrap');
  if (pieWrap && (!e.relatedTarget || !pieWrap.contains(e.relatedTarget))) clearLiteraturePieActive(pieWrap);
  const domainTag = e.target.closest && e.target.closest('.literature-tag-group[data-tag-group="domain"] [data-reading-tag]');
  if (domainTag) clearLiteratureDomainHighlight();
});

// ========================================================================
// GLOBAL CLICK DELEGATION
// ========================================================================
document.addEventListener('click', (e) => {
  const t = e.target;

  // Let the explicit source link open in a new tab without the delegated
  // article-card handler immediately re-rendering the reading page.
  if (t.closest?.('[data-reading-source-link]')) return;

  const planCalendarMonthShift = t.closest('[data-plan-calendar-month-shift]');
  if (planCalendarMonthShift) {
    dailyPlanCalendarMonth = shiftPlanCalendarMonth(dailyPlanCalendarMonth, Number(planCalendarMonthShift.dataset.planCalendarMonthShift) || 0);
    rerender();
    return;
  }

  const englishVocabFilterButton = t.closest('[data-english-vocab-filter]');
  if (englishVocabFilterButton) {
    englishVocabFilter = englishVocabFilterButton.dataset.englishVocabFilter || 'all';
    englishVocabPage = 0;
    rerender();
    return;
  }

  const englishVocabPageButton = t.closest('[data-english-vocab-page]');
  if (englishVocabPageButton) {
    englishVocabPage += englishVocabPageButton.dataset.englishVocabPage === 'next' ? 1 : -1;
    rerender();
    return;
  }

  const englishWordAction = t.closest('[data-english-vocab-action]');
  if (englishWordAction) {
    ensureEnglishStudyState();
    const word = (DATA.learning.english.vocab.words || []).find(item => item.id === englishWordAction.dataset.wordId);
    if (!word) return;
    const action = englishWordAction.dataset.englishVocabAction;
    if (action === 'favorite') {
      word.favorite = !word.favorite;
      const favorites = DATA.learning.english.vocab.favorites || [];
      DATA.learning.english.vocab.favorites = word.favorite ? Array.from(new Set(favorites.concat(word.id))) : favorites.filter(id => id !== word.id);
      save(); rerender();
      showToast(word.favorite ? '已加入收藏' : '已取消收藏', 'success');
    } else if (action === 'familiar') {
      word.familiar = !word.familiar;
      word.status = word.familiar ? 'familiar' : 'learning';
      word.reviewCount = (Number(word.reviewCount) || 0) + 1;
      word.lastReviewed = new Date().toISOString();
      // Familiar words naturally sink to the end while preserving the order
      // among the remaining words.
      const words = DATA.learning.english.vocab.words || [];
      words.forEach((item, index) => { if (!Number.isFinite(Number(item.order))) item.order = index; });
      words.sort((a, b) => Number(Boolean(a.familiar)) - Number(Boolean(b.familiar)) || Number(a.order) - Number(b.order));
      words.forEach((item, index) => { item.order = index; });
      const familiarCount = words.filter(item => item.familiar).length;
      recordEnglishHistory('vocab', '单词学习', '熟悉 ' + familiarCount + ' / ' + (DATA.learning.english.vocab.dailyTarget || 100) + ' 词', 'vocab:' + todayKey());
      save(); rerender();
      showToast(word.familiar ? '已标记熟悉，词汇下沉到列表底部' : '已放回复习队列', 'success');
    } else if (action === 'pronounce') {
      if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        showToast('当前设备暂不支持发音播放', 'warning');
        return;
      }
      try {
        const speech = new SpeechSynthesisUtterance(word.term);
        speech.lang = 'en-US';
        window.speechSynthesis?.speak(speech);
      } catch (_) {
        showToast('当前设备暂不支持发音播放', 'warning');
      }
    }
    return;
  }

  const englishListeningItem = t.closest('[data-english-listening-item]');
  if (englishListeningItem) {
    ensureEnglishStudyState();
    const listening = DATA.learning.english.listening || {};
    const item = (listening.queue || []).find(entry => entry.id === englishListeningItem.dataset.englishListeningItem);
    if (!item || item.status === 'locked') return;
    if (item.status === 'done') {
      showToast('这组听力已经完成，可以再次复盘', 'success');
      return;
    }
    if (recordEnglishListeningCompletion(item)) {
      save(); rerender();
      showToast('已完成一组听力练习，下一组已解锁', 'success');
    }
    return;
  }

  const englishReadingArticle = t.closest('[data-english-reading-article]');
  if (englishReadingArticle) {
    selectEnglishReadingArticle(englishReadingArticle);
    return;
  }

  const englishWritingPrompt = t.closest('[data-english-writing-prompt]');
  if (englishWritingPrompt) {
    englishWritingPromptId = englishWritingPrompt.dataset.englishWritingPrompt || englishWritingPromptId;
    rerender();
    return;
  }

  const civilSubject = t.closest('[data-civil-service-subject]');
  if (civilSubject) {
    const subjectId = civilSubject.dataset.civilServiceSubject || '';
    if (subjectId === 'civil-service') renderPage('civil-service');
    else renderPage('civil-' + subjectId);
    return;
  }

  const civilTask = t.closest('[data-civil-task][data-civil-subject]');
  if (civilTask) {
    civilServiceToggleTask(civilTask.dataset.civilSubject, civilTask.dataset.civilTask);
    return;
  }

  if (t.closest('[data-plan-calendar-current]')) {
    dailyPlanCalendarMonth = todayKey().slice(0, 7);
    dailyPlanViewDate = todayKey();
    rerender();
    return;
  }

  const planCalendarDate = t.closest('[data-plan-calendar-date]');
  if (planCalendarDate) {
    dailyPlanViewDate = planCalendarDate.dataset.planCalendarDate || todayKey();
    dailyPlanCalendarMonth = dailyPlanViewDate.slice(0, 7);
    rerender();
    requestAnimationFrame(() => document.querySelector('.daily-plan-page .workspace-hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    return;
  }

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
  const nextTaskToggle = t.closest('.workspace-next-mark.is-task-toggle[data-path][data-id]');
  if (nextTaskToggle) {
    toggleTask(nextTaskToggle.dataset.path, nextTaskToggle.dataset.id);
    return;
  }

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
  const readingLogEdit = t.closest('[data-reading-log-edit]');
  if (readingLogEdit) {
    const log = (DATA.learning.research.readingLogs || []).find(item => item.id === readingLogEdit.dataset.readingLogEdit);
    if (log) openReadingLogModal(log);
    return;
  }

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
    activeReadingLogTags = activeReadingLogTags.includes(tag)
      ? activeReadingLogTags.filter(item => item !== tag)
      : [...activeReadingLogTags, tag];
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
      const row = input.closest('.add-task-row');
      const timeInput = row && row.querySelector('[data-schedule-time]');
      addTask(path, input.value.trim(), { dueDate: t.dataset.dueDate || input.dataset.dueDate || todayKey(), scheduledTime: timeInput ? timeInput.value : '' });
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
    case 'civil-go-civil-service':
      renderPage('civil-service');
      break;
    case 'civil-go-quantity':
    case 'civil-go-logic':
    case 'civil-go-analogy':
    case 'civil-go-graphic':
    case 'civil-go-data':
    case 'civil-go-general':
    case 'civil-go-politics':
    case 'civil-go-essay':
      renderPage('civil-' + action.replace('civil-go-', ''));
      break;
    case 'civil-service-log-session': {
      civilServiceRecordStudy(currentPage.startsWith('civil-') && currentPage !== 'civil-service' ? currentPage.replace('civil-', '') : '');
      save();
      rerender();
      showToast('已记录 25 分钟公考学习', 'success');
      break;
    }
    case 'civil-service-next-subject': {
      const next = civilServiceStats().subjects.slice().sort((a, b) => a.progress - b.progress)[0];
      if (next) renderPage('civil-' + next.id);
      break;
    }
    case 'english-overview':
      renderPage('english');
      break;
    case 'english-go-english':
      renderPage('english');
      break;
    case 'english-go-english-vocab':
    case 'english-go-english-listening':
    case 'english-go-english-reading':
    case 'english-go-english-writing':
      renderPage(action.replace('english-go-', ''));
      break;
    case 'english-vocab-open':
      renderPage('english-vocab');
      break;
    case 'english-listening-open':
      renderPage('english-listening');
      break;
    case 'english-reading-open':
      renderPage('english-reading');
      break;
    case 'english-writing-open':
      renderPage('english-writing');
      break;
    case 'english-reading-refresh':
      refreshEnglishReadingMaterials();
      break;
    case 'english-reading-mark-read': {
      ensureEnglishStudyState();
      const article = activeEnglishReadingArticle();
      if (!article) break;
      const reading = DATA.learning.english.reading;
      article.read = !article.read;
      // The number is a durable history.  Removing an item from the current
      // shelf must not erase a session the learner has already recorded.
      if (article.read) {
        if (!article.readEver) {
          reading.completed = Math.max(0, Number(reading.completed) || 0) + 1;
          article.readEver = true;
        }
        article.lastReadDate = todayKey();
        recordEnglishHistory('reading', '完成阅读', (article.title || '完成一篇精读') + (article.source ? ' · ' + article.source : ''), 'reading:' + article.id, article.id);
      }
      save(); rerender();
      showToast(article.read ? '已记录阅读完成（累计历史 +1）' : '已取消当前文章标记，累计历史不变', 'success');
      break;
    }
    case 'english-reading-save': {
      const article = activeEnglishReadingArticle();
      if (!article) break;
      article.saved = !article.saved;
      save(); rerender();
      showToast(article.saved ? '文章已收藏' : '已取消收藏', 'success');
      break;
    }
    case 'english-listening-start': {
      ensureEnglishStudyState();
      const listening = DATA.learning.english.listening;
      const next = (listening.queue || []).find(item => item.status === 'next');
      if (!next) { showToast('本周听力队列已完成', 'success'); break; }
      if (recordEnglishListeningCompletion(next)) {
        save(); rerender();
        showToast('已完成一组听力练习，下一组已解锁', 'success');
      }
      break;
    }
    case 'english-listening-reset': {
      ensureEnglishStudyState();
      if (resetEnglishListeningProgress()) {
        save(); rerender();
        showToast('已重置本周听力进度', 'success');
      }
      break;
    }
    case 'english-writing-new': {
      const prompts = DATA.learning.english.writing.prompts || [];
      const currentIndex = Math.max(0, prompts.findIndex(item => item.id === englishWritingPromptId));
      englishWritingPromptId = prompts[(currentIndex + 1) % Math.max(1, prompts.length)]?.id || englishWritingPromptId;
      rerender();
      break;
    }
    case 'english-writing-save': {
      const input = document.querySelector('[data-english-writing-draft]');
      if (!input) break;
      const writing = DATA.learning.english.writing;
      if (!Array.isArray(writing.drafts)) writing.drafts = [];
      const promptId = input.dataset.englishWritingDraft;
      const existing = writing.drafts.find(item => item.promptId === promptId);
      if (existing) { existing.text = input.value; existing.updatedAt = new Date().toISOString(); }
      else writing.drafts.push({ id: uid(), promptId, text: input.value, updatedAt: new Date().toISOString() });
      save(); rerender();
      showToast('草稿已保存', 'success');
      break;
    }
    case 'english-writing-complete': {
      ensureEnglishStudyState();
      const input = document.querySelector('[data-english-writing-draft]');
      const promptId = input?.dataset?.englishWritingDraft || englishWritingPromptId;
      const result = recordEnglishWritingCompletion(promptId, input?.value || '');
      if (!result.ok) {
        const message = result.reason === 'empty' ? '请先写下非空草稿，再记录完成' : result.reason === 'duplicate' ? '这道题已经计入本周完成数' : result.reason === 'goal' ? '本周写作目标已完成' : '请先选择一道写作题';
        showToast(message, 'warning');
        break;
      }
      save(); rerender();
      showToast('已记录本周写作完成', 'success');
      break;
    }
    case 'research-experiment-go-ideas':
      researchInspirationState.view = 'overview';
      renderPage('research-inspiration');
      break;
    case 'open-palette': openPalette(); break;
    case 'weather-city': promptWeatherCity(); break;
    case 'weather-detail': showWeatherDetails(); break;
    case 'weather-detail-close': closeWeatherDetails(); break;
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
            // API snapshots may come from an older workspace schema. Run the
            // same migration/IELTS normalizer used during initial boot so a
            // newly opened English page never sees a partial module state.
            const normalized = loadWorkspaceSnapshot(result.data);
            const purged = purgeTrash();
            applyTheme();
            if (normalized || purged) save(); else setSaveState('saved');
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
            let normalized = false;
            if (result && result.data) {
              normalized = loadWorkspaceSnapshot(result.data);
              purged = purgeTrash();
              applyTheme();
            }
            if (normalized || purged) save(); else setSaveState('saved');
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
          let normalized = false;
          let purged = 0;
          if (result && result.data) {
            normalized = loadWorkspaceSnapshot(result.data);
            purged = purgeTrash();
            applyTheme();
          }
          if (normalized || purged) save(); else setSaveState('saved');
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
    case 'add-reading-log-supplement':
      openReadingLogModal(null, true);
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
      activeReadingLogTags = [];
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
      const row = t.closest('.add-task-row');
      const timeInput = row && row.querySelector('[data-schedule-time]');
      addTask(t.dataset.path, t.value.trim(), { dueDate: t.dataset.dueDate || todayKey(), scheduledTime: timeInput ? timeInput.value : '' });
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
  if (e.target.matches('[data-plan-calendar-year]')) {
    dailyPlanCalendarMonth = e.target.value + '-' + dailyPlanCalendarMonth.slice(5, 7);
    rerender();
    return;
  }
  if (e.target.matches('[data-plan-calendar-month]')) {
    dailyPlanCalendarMonth = dailyPlanCalendarMonth.slice(0, 4) + '-' + e.target.value;
    rerender();
    return;
  }
  if (e.target.matches('[data-task-time][data-path][data-id]')) {
    reschedulePlanTask(e.target.dataset.path, e.target.dataset.id, e.target.value);
    return;
  }
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
  if (e.target.matches && e.target.matches('[data-civil-notes]')) {
    const subject = civilServiceSubject(e.target.dataset.civilNotes);
    if (subject) {
      subject.note = e.target.value;
      save();
    }
    return;
  }
  if (e.target.matches && e.target.matches('[data-english-writing-draft]')) {
    const writing = DATA.learning.english.writing;
    if (!Array.isArray(writing.drafts)) writing.drafts = [];
    const promptId = e.target.dataset.englishWritingDraft;
    const existing = writing.drafts.find(item => item.promptId === promptId);
    if (existing) { existing.text = e.target.value; existing.updatedAt = new Date().toISOString(); }
    else writing.drafts.push({ id: uid(), promptId, text: e.target.value, updatedAt: new Date().toISOString() });
    save();
    return;
  }
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
  const englishReadingArticle = e.target.closest?.('[data-english-reading-article]');
  if ((e.key === ' ' || e.key === 'Enter') && englishReadingArticle && !e.target.closest?.('[data-reading-source-link]')) {
    e.preventDefault();
    selectEnglishReadingArticle(englishReadingArticle);
    return;
  }
  const civilSubject = e.target.closest?.('[data-civil-service-subject]');
  if ((e.key === ' ' || e.key === 'Enter') && civilSubject) {
    e.preventDefault();
    const subjectId = civilSubject.dataset.civilServiceSubject || '';
    renderPage(subjectId === 'civil-service' ? 'civil-service' : 'civil-' + subjectId);
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
  let civilServiceStateChanged = false;
  if (saved) {
    try {
      const civilServiceBefore = JSON.stringify(saved.learning?.civilService ?? null);
      DATA = migrateWorkspaceData(saved);
      civilServiceStateChanged = civilServiceBefore !== JSON.stringify(DATA.learning.civilService);
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
      const civilServiceBefore = JSON.stringify(initialWrite.remote.learning?.civilService ?? null);
      DATA = migrateWorkspaceData(initialWrite.remote);
      civilServiceStateChanged = civilServiceBefore !== JSON.stringify(DATA.learning.civilService);
      if (Number.isInteger(initialWrite.remoteVersion) && initialWrite.remoteVersion >= 0) {
        storage._apiVersion = initialWrite.remoteVersion;
      }
    }
  }

  // Housekeeping
  const englishStateChanged = ensureEnglishStudyState();
  migrateFitnessData();
  const temporalChanged = ensureTemporalState();
  const prunedReadingLogs = pruneReadingLogs();
  const purgedTrash = purgeTrash();
  recordCheckinToday();
  recordWeeklyTrend();
  if (!DATA.meta) DATA.meta = { revision: 0, deviceId: DEVICE_ID, savedAt: '' };

  if (englishStateChanged || civilServiceStateChanged || prunedReadingLogs || purgedTrash || temporalChanged || recoveredInvalidData) save();
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
setInterval(refreshDayElapsedProgress, 60 * 1000);


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
        setTheme(pref) { setTheme(pref); },
        setDisplayName(name) {
          const nextName = String(name || '').trim();
          if (!nextName || DATA.settings.displayName === nextName) return;
          DATA.settings.displayName = nextName;
          save();
          rerender();
        }
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
