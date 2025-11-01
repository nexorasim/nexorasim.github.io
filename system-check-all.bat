@echo off
echo NEXORASIM SYSTEM CHECK ALL
echo =========================

echo [GIT] Checking Git status...
git --version
git status --porcelain

echo [VS CODE] Checking VS Code...
code --version 2>nul || echo VS Code not found

echo [NODE/NPM] Checking Node.js and npm...
node --version
npm --version
npm audit --audit-level=high

echo [JAVA] Checking Java...
java -version 2>&1 | findstr "version"

echo [JAVASCRIPT] Checking JavaScript engines...
node -e "console.log('Node.js:', process.version)"

echo [CLI TOOLS] Checking CLI tools...
where git
where node
where npm
where code

echo [SYSTEM] Windows system check...
systeminfo | findstr "OS Name"
systeminfo | findstr "Total Physical Memory"

echo [NETWORK] Network connectivity...
ping -n 1 github.com >nul && echo GitHub: OK || echo GitHub: FAIL
ping -n 1 npmjs.com >nul && echo NPM: OK || echo NPM: FAIL

echo SYSTEM CHECK COMPLETE
pause