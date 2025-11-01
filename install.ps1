Write-Host "NexoraSIM Enterprise eSIM Platform Installer" -ForegroundColor Green
Write-Host "Installing system components..." -ForegroundColor Yellow

if (Get-Command npm -ErrorAction SilentlyContinue) {
    npm run install:system
    Write-Host "System installed successfully" -ForegroundColor Green
    Write-Host "Available commands:" -ForegroundColor Cyan
    Write-Host "  npm run dev          - Start development server" -ForegroundColor White
    Write-Host "  npm run error:check  - Run error validation" -ForegroundColor White
    Write-Host "  npm run health:check - System health monitoring" -ForegroundColor White
    Write-Host "  npm run enable:all   - Enable all components" -ForegroundColor White
} else {
    Write-Host "Node.js and npm required. Please install Node.js first." -ForegroundColor Red
}