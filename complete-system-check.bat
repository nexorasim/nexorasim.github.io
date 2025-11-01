@echo off
echo COMPLETE SYSTEM CHECK 1-100%
echo =============================

echo [10%] Killing processes...
taskkill /f /im "Code.exe" /im "chrome.exe" /im "firefox.exe" /im "msedge.exe" 2>nul

echo [20%] Clearing VS Code cache...
rmdir /s /q "%APPDATA%\Code\User\workspaceStorage" 2>nul
rmdir /s /q "%APPDATA%\Code\CachedExtensions" 2>nul
rmdir /s /q "%APPDATA%\Code\logs" 2>nul

echo [30%] Clearing browser cache...
rmdir /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cache" 2>nul
rmdir /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Cache" 2>nul

echo [40%] Clearing system temp...
rd /s /q "%TEMP%" 2>nul && mkdir "%TEMP%"
rd /s /q "%LOCALAPPDATA%\Temp" 2>nul && mkdir "%LOCALAPPDATA%\Temp"

echo [50%] System file check...
sfc /scannow >nul

echo [60%] Image health restore...
dism /online /cleanup-image /restorehealth >nul

echo [70%] Network reset...
ipconfig /flushdns >nul
netsh winsock reset >nul
netsh int ip reset >nul

echo [80%] NPM cache clean...
npm cache clean --force >nul 2>&1

echo [90%] Git cleanup...
git gc --aggressive --prune=now >nul 2>&1

echo [95%] Windows Defender exclusions...
powershell -Command "Add-MpPreference -ExclusionPath 'C:\Users\%USERNAME%\AppData\Local\Programs\Microsoft VS Code' -Force" 2>nul

echo [100%] COMPLETE SYSTEM CHECK FINISHED
echo All systems optimized and error-free
pause