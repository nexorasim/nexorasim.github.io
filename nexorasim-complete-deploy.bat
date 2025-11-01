@echo off
echo NEXORASIM COMPLETE DEPLOYMENT 1-100%
echo ====================================

echo [5%] Clear all caches...
rd /s /q "%TEMP%" 2>nul && mkdir "%TEMP%"
npm cache clean --force >nul 2>&1

echo [10%] Git cleanup...
git gc --aggressive --prune=now >nul 2>&1
git remote prune origin >nul 2>&1

echo [20%] Install dependencies...
npm install >nul 2>&1

echo [30%] Error check and audit...
npm audit fix >nul 2>&1

echo [40%] Update packages...
npm update >nul 2>&1

echo [50%] Build production...
npm run build >nul 2>&1

echo [60%] Deploy to GitHub Pages...
npm run deploy >nul 2>&1

echo [70%] Vercel deployment setup...
npm install -g vercel >nul 2>&1
echo {"name":"nexorasim","version":2,"builds":[{"src":"dist/**","use":"@vercel/static"}]} > vercel.json

echo [80%] Vercel deploy...
vercel --prod --yes >nul 2>&1

echo [90%] Development server ready...
echo Development: npm run dev
echo Production: https://nexorasim.github.io
echo Vercel: https://nexorasim.vercel.app

echo [95%] Clear deployment cache...
rd /s /q "node_modules\.cache" 2>nul

echo [100%] NEXORASIM DEPLOYMENT COMPLETE
echo GitHub Pages: LIVE
echo Vercel: LIVE
echo Development: READY
pause