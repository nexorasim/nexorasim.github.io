@echo off
REM NexoraSIM Microsoft-Only Deployment Script
REM Deploy to GitHub Pages with full validation

echo.
echo ========================================
echo  NexoraSIM Entertainment Server Deploy
echo ========================================
echo  Microsoft-Only Stack ^| 300 Pages
echo  iOS 26 Design ^| Premium Landing Site
echo ========================================
echo.

REM Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js 18+
    exit /b 1
)

REM Check npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm not found. Please install npm 9+
    exit /b 1
)

echo Node.js and npm detected

REM Install dependencies
echo.
echo Installing Microsoft dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ npm install failed
    exit /b 1
)

echo Dependencies installed

REM Validate Microsoft Stack
echo.
echo Validating Microsoft-only stack...
call npm run validate
if %errorlevel% neq 0 (
    echo ❌ Microsoft stack validation failed
    exit /b 1
)

echo Microsoft stack validated

REM Build production
echo.
echo Building production bundle...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    exit /b 1
)

echo Production build completed

REM Deploy to GitHub Pages
echo.
echo Deploying to GitHub Pages...
call node scripts/deploy-github.js
if %errorlevel% neq 0 (
    echo ❌ Deployment failed
    exit /b 1
)

echo.
echo DEPLOYMENT SUCCESSFUL
echo ========================
echo Live at: https://nexorasim.com
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