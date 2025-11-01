@echo off
echo COMPLETE SYSTEM FIX - VS CODE GIT GITHUB WINDOWS

taskkill /f /im "Code.exe" 2>nul
rmdir /s /q "%APPDATA%\Code\User\workspaceStorage" 2>nul
rmdir /s /q "%APPDATA%\Code\CachedExtensions" 2>nul
rmdir /s /q "%APPDATA%\Code\logs" 2>nul
echo {"update.mode":"default"} > "%APPDATA%\Code\User\settings.json"
rmdir /s /q "%USERPROFILE%\.vscode\extensions" 2>nul

git config --global user.name "NexoraSIM"
git config --global user.email "admin@nexorasim.com"
git gc --aggressive --prune=now
git remote prune origin

rd /s /q "%TEMP%" 2>nul && mkdir "%TEMP%"
sfc /scannow
dism /online /cleanup-image /restorehealth
cleanmgr /sagerun:1
ipconfig /flushdns
netsh winsock reset

powershell -Command "Add-MpPreference -ExclusionPath 'C:\Users\%USERNAME%\AppData\Local\Programs\Microsoft VS Code' -Force" 2>nul

echo COMPLETE SYSTEM FIX FINISHED
pause