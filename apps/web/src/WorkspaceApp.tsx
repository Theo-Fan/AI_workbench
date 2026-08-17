import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import './workspace/generated/workspace-baseline.css';
import './workspace/generated/dashboard-v2.css';
import { PageSurface } from './workspace/PageSurface.js';
import { mountGeneratedWorkspaceRuntime } from './workspace/generated/workspaceRuntime.js';
import type { RenderState, WorkspacePageId } from './workspace/runtimeBridge.js';
import { workspaceActions } from './workspace/workspaceActions.js';
import { syncWorkspaceStore, useWorkspaceRenderState } from './workspace/workspaceStore.js';

const ActivePageContext = createContext('dashboard');

function NavIcon({ children }: { children: ReactNode }) {
  return <span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24">{children}</svg></span>;
}

function MenuItem({ page, title, children, path }: { page: WorkspacePageId; title: string; children: ReactNode; path: ReactNode }) {
  const active = useContext(ActivePageContext) === page;
  const navigate = () => window.__AI_WORKSPACE_RUNTIME__?.navigate(page);
  return <div
    className={`menu-item${active ? ' active' : ''}`}
    data-page={page}
    title={title}
    role="button"
    tabIndex={0}
    aria-current={active ? 'page' : undefined}
    onClickCapture={event => { event.stopPropagation(); navigate(); }}
    onKeyDownCapture={event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      event.stopPropagation();
      navigate();
    }}
  >
    <NavIcon>{path}</NavIcon><span className="label">{children}</span>
  </div>;
}

function HeaderNavItem({ page, children }: { page: WorkspacePageId; children: ReactNode }) {
  const active = useContext(ActivePageContext) === page;
  const navigate = () => window.__AI_WORKSPACE_RUNTIME__?.navigate(page);
  return <button className={`topbar-nav-item${active ? ' active' : ''}`} type="button" onClick={navigate}>{children}</button>;
}

function MenuDisclosure({ title, expanded, active, onToggle, children, path }: { title: string; expanded: boolean; active: boolean; onToggle: () => void; children: ReactNode; path: ReactNode }) {
  return <div className={`menu-disclosure${expanded ? ' expanded' : ''}${active ? ' has-active-child' : ''}`}>
    <button className="menu-disclosure-trigger" type="button" title={title} aria-expanded={expanded} onClick={onToggle}>
      <NavIcon>{path}</NavIcon><span className="label">{title}</span><svg className="menu-disclosure-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
    </button>
    <div className="menu-submenu" hidden={!expanded}>{children}</div>
  </div>;
}

function WorkspaceShell({ renderState }: { renderState: RenderState | null }) {
  const activePage = renderState?.pageId || 'dashboard';
  // A new workspace starts in the compact state; once the user chooses a state,
  // preserve that choice across refreshes.
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(() => localStorage.getItem('ai-workspace-sidebar') !== 'expanded');
  const [expandedMenus, setExpandedMenus] = useState<string[]>(() => {
    const savedState = localStorage.getItem('ai-workspace-expanded-menus');
    if (!savedState) return [];
    try {
      const parsedState = JSON.parse(savedState);
      return Array.isArray(parsedState) ? parsedState.filter((item): item is string => typeof item === 'string') : [];
    } catch {
      return [];
    }
  });
  const previousActivePage = useRef(activePage);
  useEffect(() => {
    localStorage.setItem('ai-workspace-expanded-menus', JSON.stringify(expandedMenus));
  }, [expandedMenus]);
  useEffect(() => {
    if (previousActivePage.current === activePage) return;
    previousActivePage.current = activePage;
    const group = ['research-todo', 'research', 'research-inspiration', 'research-experiments', 'research-papers'].includes(activePage)
      ? 'research'
      : ['ai-learn', 'english'].includes(activePage)
        ? 'learning'
        : ['inspiration', 'review', 'comic'].includes(activePage)
          ? 'creation'
          : null;
    if (group) setExpandedMenus(current => current.includes(group) ? current : [...current, group]);
  }, [activePage]);
  const toggleSidebar = () => setSidebarCollapsed(current => {
    const next = !current;
    localStorage.setItem('ai-workspace-sidebar', next ? 'collapsed' : 'expanded');
    return next;
  });
  return <ActivePageContext.Provider value={activePage}><div className={`workspace-shell${isSidebarCollapsed ? ' is-sidebar-collapsed' : ''}`}>
    <button className="hamburger" id="hamburger" aria-label="打开菜单" onClick={() => workspaceActions.openDrawer()}>☰</button>
    <div className="drawer-backdrop" id="drawerBackdrop" onClick={() => workspaceActions.closeDrawer()}></div>

    <header className="app-topbar">
      <div className="topbar-brand">
        <button className="sidebar-collapse-toggle" type="button" onClick={toggleSidebar} aria-label={isSidebarCollapsed ? '展开侧边栏' : '收起侧边栏'} title={isSidebarCollapsed ? '展开侧边栏' : '收起侧边栏'}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M10 4v16"/></svg>
        </button>
        <div className="topbar-brand-copy"><strong>AI工作台</strong><span>PERSONAL WORKSPACE</span></div>
      </div>
      <nav className="topbar-nav" aria-label="快速导航">
        <HeaderNavItem page="dashboard">仪表盘</HeaderNavItem>
        <HeaderNavItem page="daily-plan">每日计划</HeaderNavItem>
        <HeaderNavItem page="research">科研</HeaderNavItem>
        <HeaderNavItem page="comic">创作</HeaderNavItem>
      </nav>
      <div className="topbar-actions">
        <div className="topbar-weather-slot" id="globalDashboardWeather" aria-live="polite"></div>
        <button className="topbar-search" type="button" title="搜索（Cmd/Ctrl + K）" aria-label="搜索" onClick={() => workspaceActions.dispatchAction('open-palette')}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.5 15.5 4.4 4.4"/></svg><span>搜索</span></button>
        <button className="topbar-icon-button" type="button" title="切换主题" aria-label="切换主题" onClick={() => workspaceActions.cycleTheme()}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/></svg></button>
      </div>
    </header>

    <aside className="sidebar" id="sidebar" role="navigation" aria-label="主导航">
      <div className="sync-indicator offline" id="syncIndicator" role="status" aria-live="polite">
        <span className="sync-dot"></span><span id="syncText">初始化中…</span>
      </div>

      <div className="menu-scroll">
        <div className="menu-primary-list">
          <div className="menu-section-label">常规</div>
          <MenuItem page="dashboard" title="仪表盘" path={<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" />}>仪表盘</MenuItem>
          <MenuItem page="daily-plan" title="每日计划" path={<><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4M16 2v4M3 10h18m-11 5 2 2 4-4" /></>}>每日计划</MenuItem>
          <div className="menu-section-label">工作</div>
          <MenuDisclosure title="科研" expanded={expandedMenus.includes('research')} active={['research-todo', 'research', 'research-inspiration', 'research-experiments', 'research-papers'].includes(activePage)} onToggle={() => setExpandedMenus(current => current.includes('research') ? current.filter(item => item !== 'research') : [...current, 'research'])} path={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v19H6.5A2.5 2.5 0 0 1 4 18.5v-14A2.5 2.5 0 0 1 6.5 2Z" /></>}>
            <MenuItem page="research-todo" title="待办" path={<><rect x="4" y="4" width="16" height="16" rx="3" /><path d="m8 12 2.5 2.5L16 9" /></>}>待办</MenuItem>
            <MenuItem page="research" title="文献" path={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v19H6.5A2.5 2.5 0 0 1 6.5 2Z" /><path d="M8 7h8M8 11h8" /></>}>文献</MenuItem>
            <MenuItem page="research-inspiration" title="灵感" path={<path d="M9 18h6M10 22h4M8.1 14.7A7 7 0 1 1 15.9 14.7c-.8.7-1.4 1.6-1.6 2.6H9.7c-.2-1-.8-1.9-1.6-2.6Z" />}>灵感</MenuItem>
            <MenuItem page="research-experiments" title="实验" path={<><path d="M9 3h6M10 3v6.2l-4.7 8.1A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.2-3.7L14 9.2V3" /><path d="M8.5 14h7" /></>}>实验</MenuItem>
            <MenuItem page="research-papers" title="论文" path={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></>}>论文</MenuItem>
          </MenuDisclosure>
          <MenuDisclosure title="内容创作" expanded={expandedMenus.includes('creation')} active={['inspiration', 'review', 'comic'].includes(activePage)} onToggle={() => setExpandedMenus(current => current.includes('creation') ? current.filter(item => item !== 'creation') : [...current, 'creation'])} path={<><path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9Z" /><path d="m19 16-.8 2.2L16 19l2.2.8L19 22l.8-2.2L22 19l-2.2-.8Z" /></>}>
            <MenuItem page="inspiration" title="选题灵感" path={<><path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9Z" /><path d="m19 16-.8 2.2L16 19l2.2.8L19 22l.8-2.2L22 19l-2.2-.8Z" /></>}>选题灵感</MenuItem>
            <MenuItem page="review" title="内容复盘" path={<><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2m-6 9 2 2 4-4m-6 7h6" /></>}>内容复盘</MenuItem>
            <MenuItem page="comic" title="AI 漫剧" path={<><path d="M4 5h16v14H4zM4 10h16M7 5l3 5m2-5 3 5m2-5 3 5m-11 4 5 3-5 3Z" /></>}>AI 漫剧</MenuItem>
          </MenuDisclosure>
          <div className="menu-section-label">生活</div>
          <MenuItem page="fitness" title="健身打卡" path={<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11" />}>健身打卡</MenuItem>
          <MenuDisclosure title="学习" expanded={expandedMenus.includes('learning')} active={['ai-learn', 'english'].includes(activePage)} onToggle={() => setExpandedMenus(current => current.includes('learning') ? current.filter(item => item !== 'learning') : [...current, 'learning'])} path={<><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M12 2v3M8 12h.01M16 12h.01M9 16h6" /></>}>
            <MenuItem page="ai-learn" title="AI 学习" path={<><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M12 2v3M8 12h.01M16 12h.01M9 16h6" /></>}>AI 学习</MenuItem>
            <MenuItem page="english" title="英语学习" path={<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>}>英语学习</MenuItem>
          </MenuDisclosure>
          <div className="menu-section-label">资讯</div>
          <MenuItem page="news" title="新闻热点" path={<><path d="M4 5h16v14H4z" /><path d="M8 9h8M8 13h8M8 17h5" /></>}>新闻热点</MenuItem>
        </div>

      </div>

      <div className="sidebar-footer">
        <MenuItem page="settings" title="设置" path={<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-3v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.1-2.1.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5.3v-3h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h3v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.1 2.1-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v3h-.2a1.7 1.7 0 0 0-1.5 1Z" /></>}>设置</MenuItem>
      </div>
    </aside>

    <PageSurface state={renderState} />

    <div className="modal-overlay" id="modalOverlay" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="modalTitle"><div className="modal" id="modalContent"></div></div>

    <div className="note-reader-overlay" id="noteReader" role="dialog" aria-modal="true" aria-labelledby="noteReaderTitle" aria-hidden="true">
      <div className="note-reader-shell" id="noteReaderShell"><div className="note-reader-toolbar"><div className="note-reader-heading"><div className="note-reader-kicker">ZOTERO 阅读笔记</div><div className="note-reader-title" id="noteReaderTitle">文献笔记</div></div><div className="note-reader-actions"><button className="btn btn-outline btn-sm" id="noteReaderFullscreen" type="button" aria-label="进入全屏阅读">全屏</button><button className="btn btn-primary btn-sm" id="noteReaderClose" type="button" aria-label="关闭笔记阅读器">退出阅读</button></div></div><div className="note-reader-scroll" id="noteReaderScroll"><article className="note-reader-paper"><header className="note-reader-source"><div className="note-reader-source-title" id="noteReaderPaperTitle"></div><div className="note-reader-source-meta" id="noteReaderPaperMeta"></div></header><div className="note-reader-status" id="noteReaderStatus" aria-live="polite"></div><div className="note-reader-content" id="noteReaderContent"></div></article></div></div>
    </div>

    <div className="palette-overlay" id="paletteOverlay"><div className="palette" role="dialog" aria-label="全局搜索"><div className="palette-input-row"><span className="p-icon">🔍</span><input className="palette-input" id="paletteInput" placeholder="搜索任务、灵感、页面… 输入 > 执行命令" autoComplete="off" /><span className="palette-kbd">Esc</span></div><div className="palette-list" id="paletteList"></div></div></div>
    <div className="onboard-overlay" id="onboardOverlay"><div className="onboard" id="onboardContent" role="dialog" aria-label="新手引导"></div></div>
    <div className="toast-container" id="toastContainer" aria-live="polite"></div>
  </div></ActivePageContext.Provider>;
}

export function WorkspaceApp() {
  const mountedRef = useRef(false);
  const [error, setError] = useState<string>();
  const renderState = useWorkspaceRenderState();

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    void (async () => { try {
      document.title = 'AI工作台';
      if (window.__AI_WORKSPACE_RUNTIME__) {
        syncWorkspaceStore();
        return;
      }
      await mountGeneratedWorkspaceRuntime();
      syncWorkspaceStore();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : '工作台加载失败');
    } })();
  }, []);

  return createPortal(<>{error ? <main className="main" role="main"><div className="error-card" role="alert">{error}</div></main> : <WorkspaceShell renderState={renderState} />}</>, document.body);
}
