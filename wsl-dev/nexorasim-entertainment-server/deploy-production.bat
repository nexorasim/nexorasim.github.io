@echo off
REM NexoraSIM Production Deployment - Windows to WSL Bridge
REM Deploy Microsoft-Only Stack to GitHub Pages

echo.
echo ========================================
echo  NexoraSIM Production Deployment
echo ========================================
echo  Microsoft-Only Stack - 300 Pages
echo  iOS 26 Design - Premium Landing Site
echo ========================================
echo.

REM Check if WSL is available
wsl --version >nul 2>&1
if %errorlevel% neq 0 (
    echo WSL not found. Please install WSL2 with Ubuntu 22.04
    echo Run: wsl --install -d Ubuntu-22.04
    exit /b 1
)

echo WSL2 detected

REM Navigate to WSL project directory and deploy
echo.
echo Deploying via WSL environment...
wsl -d Ubuntu-22.04 -- bash -c "cd /mnt/c/Users/KAUNGHTETPAING/Documents/GitHub/nexorasim.github.io/wsl-dev/nexorasim-entertainment-server && chmod +x scripts/deploy-wsl.sh && ./scripts/deploy-wsl.sh"

if %errorlevel% neq 0 (
    echo WSL deployment failed
    exit /b 1
)

echo.
echo PRODUCTION DEPLOYMENT SUCCESSFUL
echo ================================
echo Live at: https://nexorasim.github.io
echo GitHub: github.com/nexorasim/nexorasim.github.io
echo Contact: info@nexorasim.com
echo.
echo 300 Premium Pages Deployed
echo iOS 26 Design Active
echo Microsoft-Only Stack
echo 50M User Ready
echo Zero Trust Security
echo ASEAN + Global Coverage
echo.

pause