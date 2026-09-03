#!/bin/zsh

set -u

PROJECT_DIR="${0:A:h}"
WORKSPACE_URL="http://127.0.0.1:5173/"
ICLOUD_DATA_DIR="$HOME/Library/Mobile Documents/com~apple~CloudDocs/AA-VibeCoding-DATA/self_workbench"

# Finder launches .command files with a much smaller PATH than an interactive
# shell.  Add the usual macOS Node.js locations so a fresh machine can find a
# Homebrew, Volta, asdf, fnm, or nvm installation.
export PATH="/opt/homebrew/opt/node@22/bin:/usr/local/opt/node@22/bin:/opt/homebrew/bin:/usr/local/bin:$HOME/.volta/bin:$HOME/.asdf/shims:$HOME/.local/share/fnm/aliases/default/bin:$PATH"
if ! command -v npm >/dev/null 2>&1 && [[ -s "$HOME/.nvm/nvm.sh" ]]; then
  source "$HOME/.nvm/nvm.sh" >/dev/null 2>&1
fi

cd "$PROJECT_DIR" || exit 1

# Keep source code in the repository, but persist all private runtime data in
# iCloud Drive. Explicit environment overrides remain available for tests and
# advanced deployments.
mkdir -p "$ICLOUD_DATA_DIR/backups" || exit 1
export WORKSPACE_DB_PATH="${WORKSPACE_DB_PATH:-$ICLOUD_DATA_DIR/workspace.db}"
export WORKSPACE_BACKUP_DIR="${WORKSPACE_BACKUP_DIR:-$ICLOUD_DATA_DIR/backups}"
export LEGACY_JSON_PATH="${LEGACY_JSON_PATH:-$ICLOUD_DATA_DIR/workspace.json}"

pause_on_error() {
  echo
  echo "启动失败：$1"
  echo "按回车键关闭窗口。"
  read -r
  exit 1
}

open_workspace() {
  if [[ "${WORKSPACE_NO_OPEN:-0}" != "1" ]]; then
    open "$WORKSPACE_URL"
  fi
}

if curl -fsS --max-time 2 "$WORKSPACE_URL" >/dev/null 2>&1; then
  echo "AI 工作台已在运行：$WORKSPACE_URL"
  open_workspace
  exit 0
fi

command -v npm >/dev/null 2>&1 || pause_on_error "未找到 npm，请安装 Node.js 22（推荐：brew install node@22），然后重新启动。"
NPM_CLI="$(npm root -g)/npm/bin/npm-cli.js"
[[ -f "$NPM_CLI" ]] || pause_on_error "无法定位 npm CLI，请重新安装 Node.js。"

NODE22=(node)
if [[ "$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null)" != "22" ]]; then
  NODE22=(npm exec --yes --package=node@22 -- node)
fi

native_dependencies_work() {
  "${NODE22[@]}" -e "const Database = require('better-sqlite3'); new Database(':memory:').close(); require('rollup'); if (process.platform === 'darwin') require('fsevents')" >/dev/null 2>&1
}

if [[ ! -d node_modules ]]; then
  echo "首次运行，正在安装项目依赖…"
  npm install || pause_on_error "依赖安装失败。"
elif ! native_dependencies_work; then
  echo "检测到从其他设备复制或被 macOS 隔离的依赖，正在安全地重新安装…"
  npm ci || pause_on_error "依赖重新安装失败。"
fi

if ! native_dependencies_work; then
  echo "正在修复当前设备的原生依赖…"
  "${NODE22[@]}" "$NPM_CLI" rebuild better-sqlite3 fsevents || pause_on_error "原生依赖修复失败。"
fi

echo "正在启动 AI 工作台…"
echo "工作台地址：$WORKSPACE_URL"
echo "需要停止时，在此窗口按 Ctrl+C。"
echo

(
  for attempt in {1..120}; do
    if curl -fsS --max-time 2 "$WORKSPACE_URL" >/dev/null 2>&1; then
      open_workspace
      exit 0
    fi
    sleep 0.5
  done
  echo "工作台启动超时，请查看当前窗口中的错误信息。"
) &
WATCHER_PID=$!

cleanup() {
  kill "$WATCHER_PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT INT TERM

"${NODE22[@]}" scripts/dev.mjs || pause_on_error "开发服务未能正常启动。"
