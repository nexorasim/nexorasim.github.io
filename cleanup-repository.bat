@echo off
REM NexoraSIM Repository Cleanup Script
REM Removes duplicate folders and unused files

echo ========================================
echo  NexoraSIM Repository Cleanup
echo ========================================
echo  Removing duplicate and unused files...
echo ========================================

REM Remove duplicate deployment folders
if exist "microsoft-deployment" (
    echo Removing microsoft-deployment folder...
    rmdir /s /q "microsoft-deployment"
)

if exist "wsl-dev" (
    echo Removing wsl-dev folder...
    rmdir /s /q "wsl-dev"
)

REM Remove old deployment documentation
del /q "API_FIX_REPORT.md" 2>nul
del /q "AUDIT_REPORT.md" 2>nul
del /q "CHANGELOG.md" 2>nul
del /q "complete-system-check.bat" 2>nul
del /q "complete-system-fix.bat" 2>nul
del /q "COMPREHENSIVE_AUDIT_REPORT.md" 2>nul
del /q "deploy.sh" 2>nul
del /q "DEPLOYMENT_CERTIFICATION.md" 2>nul
del /q "DEPLOYMENT_CHECKLIST.md" 2>nul
del /q "DEPLOYMENT_GUIDE.md" 2>nul
del /q "DEPLOYMENT_READY.md" 2>nul
del /q "DEPLOYMENT_STATUS.md" 2>nul
del /q "DEPLOYMENT_SUCCESS.md" 2>nul
del /q "DEPLOYMENT_SUMMARY.md" 2>nul
del /q "download.sh" 2>nul
del /q "FINAL_DEPLOYMENT.md" 2>nul
del /q "fix-git-issues.bat" 2>nul
del /q "install.ps1" 2>nul
del /q "MICROSOFT_DEPLOYMENT_COMPLETE.md" 2>nul
del /q "nexorasim-ai-dev.ps1" 2>nul
del /q "nexorasim-complete-deploy.bat" 2>nul
del /q "nexorasim-complete.bat" 2>nul
del /q "PRODUCTION_DEPLOYMENT_REPORT.md" 2>nul
del /q "PRODUCTION_DEPLOYMENT_SUMMARY.md" 2>nul
del /q "README_DEPLOYMENT.md" 2>nul
del /q "SYSTEM_STATUS.md" 2>nul
del /q "system-check-all.bat" 2>nul
del /q "website-audit-fix.bat" 2>nul
del /q "website-audit-fix.ps1" 2>nul

REM Remove unused config files
del /q "postcss.config.js" 2>nul
del /q "tailwind.config.js" 2>nul

echo.
echo ========================================
echo  Repository cleanup completed!
echo ========================================
echo  Removed duplicate folders and files
echo  Repository is now clean and organized
echo ========================================

pause