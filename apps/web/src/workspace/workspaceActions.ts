import { getGeneratedWorkspaceRuntime } from './generated/workspaceRuntime.js';
import type { WorkspaceActions } from './runtimeBridge.js';

function runtimeActions(): WorkspaceActions {
  const actions = getGeneratedWorkspaceRuntime()?.actions ?? window.__AI_WORKSPACE_RUNTIME__?.actions;
  if (!actions) throw new Error('工作台操作尚未初始化');
  return actions;
}

export const workspaceActions = {
  openDrawer() { runtimeActions().openDrawer(); },
  closeDrawer() { runtimeActions().closeDrawer(); },
  cycleTheme() { runtimeActions().cycleTheme(); },
  showShortcuts() { runtimeActions().showShortcuts(); },
  toggleTask(path: string, id: string) { runtimeActions().toggleTask(path, id); },
  addTask(path: string, text: string) { runtimeActions().addTask(path, text); },
  addInspire(path: string, title: string, desc = '') { runtimeActions().addInspire(path, title, desc); },
  toggleCheckin(category: string, id: string) { runtimeActions().toggleCheckin(category, id); },
  toggleFitnessPlan(id: string) { runtimeActions().toggleFitnessPlan(id); },
  dispatchAction(action: string) { runtimeActions().dispatchAction(action); },
  deleteItem(path: string, id: string) { runtimeActions().deleteItem(path, id); },
  clearDone(paths: string[]) { runtimeActions().clearDone(paths); },
  rolloverPlan() { runtimeActions().rolloverPlan(); },
  setTheme(theme: 'light' | 'dark' | 'system') { runtimeActions().setTheme(theme); },
  setDisplayName(name: string) { runtimeActions().setDisplayName(name); },
};
