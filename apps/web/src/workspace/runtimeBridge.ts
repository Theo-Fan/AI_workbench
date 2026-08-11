export const workspacePageIds = [
  'dashboard', 'daily-plan', 'research-todo', 'research', 'research-inspiration',
  'research-experiments', 'research-papers', 'fitness', 'ai-learn', 'english',
  'inspiration', 'review', 'comic', 'news', 'settings'
] as const;

export type WorkspacePageId = typeof workspacePageIds[number];
export type RenderState = { pageId: WorkspacePageId; mode: 'page' | 'refresh'; revision: number };
export type WorkspaceStorageState = { mode: 'api'; lastSaved: string | null; deviceId: string; apiEnabled: true; requireApi: true };
export type WorkspaceClientConfig = { apiBaseUrl: string; requireApi: boolean };
export interface WorkspaceActions {
  openDrawer(): void;
  closeDrawer(): void;
  cycleTheme(): void;
  showShortcuts(): void;
  toggleTask(path: string, id: string): void;
  addTask(path: string, text: string): void;
  addInspire(path: string, title: string, desc: string): void;
  toggleCheckin(category: string, id: string): void;
  toggleFitnessPlan(id: string): void;
  dispatchAction(action: string): void;
  deleteItem(path: string, id: string): void;
  clearDone(paths: string[]): void;
  rolloverPlan(): void;
  setTheme(theme: 'light' | 'dark' | 'system'): void;
}

export interface WorkspaceRuntime {
  navigate(pageId: WorkspacePageId): void;
  getCurrentPage(): WorkspacePageId;
  getRenderState(): RenderState;
  getPageMarkup(): string;
  getData(): unknown;
  getStorageState(): WorkspaceStorageState;
  actions: WorkspaceActions;
  subscribe(listener: (state: RenderState) => void): () => void;
  notifyCommitted(): void;
}

declare global {
  interface Window {
    __AI_WORKSPACE_RUNTIME__?: WorkspaceRuntime;
    __AI_WORKSPACE_CLIENT_CONFIG__?: WorkspaceClientConfig;
  }
}
