import { useState } from 'react';
import type { FormEvent } from 'react';

const ACCOUNT_SESSION_KEY = 'ai-workspace-account-session';
const ACCOUNT_USERS_KEY = 'ai-workspace-account-users';

export type WorkspaceAccount = {
  kind: 'local' | 'signed-in';
  id: string;
  name: string;
  email: string;
};

type StoredWorkspaceUser = WorkspaceAccount & {
  kind: 'signed-in';
  passwordSalt: string;
  passwordHash: string;
};

type AccountCredentials = { email: string; password: string };
type RegistrationDetails = AccountCredentials & { name: string };

function readJSON<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : fallback;
  } catch {
    return fallback;
  }
}

function accountUsers() {
  return readJSON<StoredWorkspaceUser[]>(ACCOUNT_USERS_KEY, []);
}

function persistSession(account: WorkspaceAccount | null) {
  if (account) localStorage.setItem(ACCOUNT_SESSION_KEY, JSON.stringify(account));
  else localStorage.removeItem(ACCOUNT_SESSION_KEY);
}

function randomToken(length = 12) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, value => value.toString(16).padStart(2, '0')).join('');
}

async function passwordDigest(password: string, salt: string) {
  const bytes = new TextEncoder().encode(salt + ':' + password);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), value => value.toString(16).padStart(2, '0')).join('');
}

export function loadWorkspaceAccount(): WorkspaceAccount | null {
  const account = readJSON<WorkspaceAccount | null>(ACCOUNT_SESSION_KEY, null);
  if (!account || !['local', 'signed-in'].includes(account.kind)) return null;
  // Older builds created a generic local session without asking for a name.
  // Treat it as a first visit so the new personalized entry dialog appears.
  if (account.kind === 'local' && (!account.name.trim() || account.name === '本地工作台')) return null;
  return account;
}

export function enterLocalWorkspace(displayName: string) {
  const name = displayName.trim().replace(/工作台$/, '').trim();
  if (!name) throw new Error('请输入你的名称');
  const account: WorkspaceAccount = {
    kind: 'local',
    id: 'LOCAL',
    name,
    email: '个人工作空间 · 本地保存'
  };
  persistSession(account);
  return account;
}

export async function registerWorkspaceAccount(details: RegistrationDetails) {
  const name = details.name.trim();
  const email = details.email.trim().toLowerCase();
  if (name.length < 2) throw new Error('请输入至少 2 个字符的用户名称');
  if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error('请输入有效的邮箱地址');
  if (details.password.length < 8) throw new Error('密码至少需要 8 个字符');
  const users = accountUsers();
  if (users.some(user => user.email === email)) throw new Error('该邮箱已经创建过用户');
  const salt = randomToken();
  const user: StoredWorkspaceUser = {
    kind: 'signed-in',
    id: 'U' + String(Date.now()).slice(-7),
    name,
    email,
    passwordSalt: salt,
    passwordHash: await passwordDigest(details.password, salt)
  };
  localStorage.setItem(ACCOUNT_USERS_KEY, JSON.stringify([...users, user]));
  const session: WorkspaceAccount = { kind: user.kind, id: user.id, name: user.name, email: user.email };
  persistSession(session);
  return session;
}

export async function loginWorkspaceAccount(credentials: AccountCredentials) {
  const email = credentials.email.trim().toLowerCase();
  const user = accountUsers().find(item => item.email === email);
  if (!user) throw new Error('没有找到该用户，请先创建用户');
  const passwordHash = await passwordDigest(credentials.password, user.passwordSalt);
  if (passwordHash !== user.passwordHash) throw new Error('邮箱或密码不正确');
  const session: WorkspaceAccount = { kind: user.kind, id: user.id, name: user.name, email: user.email };
  persistSession(session);
  return session;
}

export function updateWorkspaceAccount(account: WorkspaceAccount, name: string, email: string) {
  const nextName = name.trim();
  const nextEmail = email.trim().toLowerCase();
  if (nextName.length < 2) throw new Error('请输入至少 2 个字符的用户名称');
  if (!/^\S+@\S+\.\S+$/.test(nextEmail)) throw new Error('请输入有效的邮箱地址');
  if (account.kind === 'signed-in') {
    const users = accountUsers();
    if (users.some(user => user.id !== account.id && user.email === nextEmail)) throw new Error('该邮箱已被其他用户使用');
    localStorage.setItem(ACCOUNT_USERS_KEY, JSON.stringify(users.map(user => user.id === account.id ? { ...user, name: nextName, email: nextEmail } : user)));
  }
  const next = { ...account, name: nextName, email: nextEmail };
  persistSession(next);
  return next;
}

export function clearWorkspaceAccountSession() {
  persistSession(null);
}

export function WorkspaceAvatar({ account, size = 'medium' }: { account: WorkspaceAccount; size?: 'small' | 'medium' | 'large' }) {
  const mark = account.kind === 'local' ? '⌂' : (account.name.trim().charAt(0) || 'U').toUpperCase();
  return <span className={`workspace-avatar workspace-avatar--${size}${account.kind === 'local' ? ' is-local' : ''}`} aria-hidden="true">{mark}</span>;
}

function AccessChoice({ onLocal, onMode }: { onLocal: () => void; onMode: (mode: 'login' | 'register') => void }) {
  return <div className="account-choice">
    <div className="account-panel-heading"><span>选择进入方式</span><strong>你的工作台，由你决定如何保存</strong></div>
    <button className="account-choice-item" type="button" onClick={onLocal}>
      <span className="account-choice-icon">⌂</span><span><strong>直接进入工作台</strong><small>无需注册，继续使用当前设备与现有数据</small></span><b>→</b>
    </button>
    <button className="account-choice-item is-primary" type="button" onClick={() => onMode('login')}>
      <span className="account-choice-icon">◎</span><span><strong>登录并同步数据</strong><small>使用个人身份进入，并为后续跨设备同步做好准备</small></span><b>→</b>
    </button>
    <div className="account-choice-footer">还没有用户？<button type="button" onClick={() => onMode('register')}>创建新用户</button></div>
  </div>;
}

function AccountForm({ mode, onBack, onLogin, onRegister }: {
  mode: 'login' | 'register';
  onBack: () => void;
  onLogin: (details: AccountCredentials) => Promise<void>;
  onRegister: (details: RegistrationDetails) => Promise<void>;
}) {
  const [name, setName] = useState('TheoFan');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      if (mode === 'login') await onLogin({ email, password });
      else await onRegister({ name, email, password });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : '暂时无法完成操作');
    } finally {
      setSubmitting(false);
    }
  };
  return <form className="account-form" onSubmit={submit}>
    <button className="account-form-back" type="button" onClick={onBack}>← 返回</button>
    <div className="account-panel-heading"><span>{mode === 'login' ? 'Welcome back' : 'Create profile'}</span><strong>{mode === 'login' ? '登录个人工作台' : '创建你的工作台用户'}</strong></div>
    {mode === 'register' && <label><span>用户名称</span><input value={name} onChange={event => setName(event.target.value)} autoComplete="name" placeholder="例如 TheoFan" /></label>}
    <label><span>邮箱地址</span><input value={email} onChange={event => setEmail(event.target.value)} type="email" autoComplete="email" placeholder="name@example.com" /></label>
    <label><span>密码</span><input value={password} onChange={event => setPassword(event.target.value)} type="password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} placeholder="至少 8 个字符" /></label>
    {error && <div className="account-form-error" role="alert">{error}</div>}
    <button className="account-submit" type="submit" disabled={submitting}>{submitting ? '正在处理…' : mode === 'login' ? '登录工作台' : '创建并进入'}</button>
    <p>账户凭据当前仅保存在本机，用于验证界面与个人资料流程；工作台数据仍由现有 SQLite 服务保存。</p>
  </form>;
}

export function WorkspaceAccessScreen({ onLocal, onLogin, onRegister }: {
  onLocal: () => void;
  onLogin: (details: AccountCredentials) => Promise<void>;
  onRegister: (details: RegistrationDetails) => Promise<void>;
}) {
  const [mode, setMode] = useState<'choice' | 'login' | 'register'>('choice');
  return <main className="account-access-shell">
    <div className="account-access-brand"><span className="account-brand-mark">PW</span><span><strong>个人工作台</strong><small>PERSONAL WORKSPACE</small></span></div>
    <section className="account-access-layout">
      <div className="account-access-copy">
        <div className="account-access-kicker"><b>//</b> YOUR WORKSPACE, YOUR RHYTHM</div>
        <h1><span>一个入口，</span><span>保留你的工作节奏</span></h1>
        <p>从任务规划到科研、学习与创作，让每一类工作都可以按照你的习惯组织。你可以轻量地直接开始，也可以创建个人身份。</p>
        <div className="account-access-points"><span>独立资料</span><span>模块可配置</span><span>为同步预留</span></div>
      </div>
      <div className="account-access-panel">
        {mode === 'choice'
          ? <AccessChoice onLocal={onLocal} onMode={setMode} />
          : <AccountForm mode={mode} onBack={() => setMode('choice')} onLogin={onLogin} onRegister={onRegister} />}
      </div>
    </section>
    <div className="account-access-foot">个人工作空间 · 数据由你掌控</div>
  </main>;
}

export function WorkspaceNameDialog({ onContinue, onAccount }: {
  onContinue: (name: string) => void;
  onAccount: () => void;
}) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextName = name.trim().replace(/工作台$/, '').trim();
    if (!nextName) {
      setError('请输入你的名称');
      return;
    }
    if (nextName.length > 24) {
      setError('名称请控制在 24 个字符以内');
      return;
    }
    onContinue(nextName);
  };
  return <div className="account-dialog-backdrop account-name-backdrop" role="presentation">
    <form className="account-name-dialog" role="dialog" aria-modal="true" aria-labelledby="workspaceNameTitle" onSubmit={submit}>
      <div className="account-name-kicker"><b>//</b> PERSONAL WORKSPACE</div>
      <h2 id="workspaceNameTitle">欢迎来到个人工作台</h2>
      <p>输入你的名称，我们会用它为工作台添加专属问候和标识。</p>
      <label><span>你的名称</span><input value={name} onChange={event => { setName(event.target.value); setError(''); }} autoFocus autoComplete="name" placeholder="例如 TheoFan" maxLength={24} /></label>
      {error && <div className="account-form-error" role="alert">{error}</div>}
      <button className="account-name-submit" type="submit">进入工作台</button>
      <div className="account-name-account">已有账户？<button type="button" onClick={onAccount}>登录或创建用户</button></div>
    </form>
  </div>;
}

function MenuIcon({ kind }: { kind: 'profile' | 'settings' | 'data' | 'shortcut' | 'login' | 'logout' }) {
  const paths = {
    profile: <><circle cx="12" cy="8" r="3.5"/><path d="M5.5 21v-2.2a6.5 6.5 0 0 1 13 0V21"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.8-1L14.4 3h-4.8l-.4 3.1a8 8 0 0 0-1.8 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.8 1l.4 3.1h4.8l.4-3.1a8 8 0 0 0 1.8-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z"/></>,
    data: <><ellipse cx="12" cy="5.5" rx="7" ry="3"/><path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
    shortcut: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 10h.01M11 10h.01M15 10h2M7 14h2M11 14h6"/></>,
    login: <><path d="M14 4h5v16h-5M10 8l4 4-4 4M14 12H3"/></>,
    logout: <><path d="M10 4H5v16h5M14 8l4 4-4 4M18 12H8"/></>
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[kind]}</svg>;
}

export function WorkspaceAccountMenu({ account, placement, onClose, onProfile, onSettings, onData, onShortcuts, onLogin, onSignOut }: {
  account: WorkspaceAccount;
  placement: 'topbar' | 'sidebar';
  onClose: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onData: () => void;
  onShortcuts: () => void;
  onLogin: () => void;
  onSignOut: () => void;
}) {
  const action = (callback: () => void) => () => { onClose(); callback(); };
  return <>
    <button className="account-menu-dismiss" type="button" aria-label="关闭用户菜单" onClick={onClose}></button>
    <section className={`workspace-account-menu is-${placement}`} aria-label="用户菜单">
      <header><WorkspaceAvatar account={account} size="large"/><span><strong>{account.name}</strong><small>{account.email}</small></span><b>{account.kind === 'signed-in' ? 'ID ' + account.id.replace(/^U/, '') : 'LOCAL'}</b></header>
      <div className="workspace-account-menu-items">
        {account.kind === 'signed-in' && <button type="button" onClick={action(onProfile)}><MenuIcon kind="profile"/><span>个人资料</span></button>}
        <button type="button" onClick={action(onSettings)}><MenuIcon kind="settings"/><span>工作台设置</span></button>
        <button type="button" onClick={action(onData)}><MenuIcon kind="data"/><span>数据与同步</span></button>
        <button type="button" onClick={action(onShortcuts)}><MenuIcon kind="shortcut"/><span>快捷键说明</span></button>
      </div>
      <footer>{account.kind === 'signed-in'
        ? <button type="button" onClick={action(onSignOut)}><MenuIcon kind="logout"/><span>退出登录</span></button>
        : <button type="button" onClick={action(onLogin)}><MenuIcon kind="login"/><span>登录并同步</span></button>}
      </footer>
    </section>
  </>;
}

export function WorkspaceProfileDialog({ account, onClose, onSave }: {
  account: WorkspaceAccount;
  onClose: () => void;
  onSave: (name: string, email: string) => void;
}) {
  const [name, setName] = useState(account.name);
  const [email, setEmail] = useState(account.email);
  const [error, setError] = useState('');
  const submit = (event: FormEvent) => {
    event.preventDefault();
    try { onSave(name, email); } catch (cause) { setError(cause instanceof Error ? cause.message : '保存失败'); }
  };
  return <div className="account-dialog-backdrop" role="presentation" onMouseDown={event => { if (event.currentTarget === event.target) onClose(); }}>
    <form className="account-profile-dialog" role="dialog" aria-modal="true" aria-labelledby="accountProfileTitle" onSubmit={submit}>
      <div className="account-profile-heading"><WorkspaceAvatar account={account} size="large"/><span><small>// PERSONAL PROFILE</small><strong id="accountProfileTitle">编辑个人资料</strong></span><button type="button" aria-label="关闭" onClick={onClose}>×</button></div>
      <label><span>用户名称</span><input value={name} onChange={event => setName(event.target.value)} /></label>
      <label><span>邮箱地址</span><input value={email} onChange={event => setEmail(event.target.value)} type="email" /></label>
      <div className="account-profile-id"><span>用户 ID</span><strong>{account.id}</strong></div>
      {error && <div className="account-form-error" role="alert">{error}</div>}
      <div className="account-profile-actions"><button type="button" onClick={onClose}>取消</button><button type="submit">保存资料</button></div>
    </form>
  </div>;
}
