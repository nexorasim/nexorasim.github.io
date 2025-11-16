# NexoraSIM Enterprise System Audit Script
Write-Host "NexoraSIM Enterprise System Audit - Starting..." -ForegroundColor Green

# System Information
$SystemInfo = @{
    ComputerName = $env:COMPUTERNAME
    UserName = $env:USERNAME
    OSVersion = (Get-WmiObject -Class Win32_OperatingSystem).Caption
    PowerShellVersion = $PSVersionTable.PSVersion.ToString()
    Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
}

# Microsoft Graph Check
Write-Host "Checking Microsoft Graph PowerShell..." -ForegroundColor Yellow
$GraphModules = Get-Module -ListAvailable | Where-Object {$_.Name -like "Microsoft.Graph*"}
$GraphStatus = if ($GraphModules.Count -gt 0) { "INSTALLED ($($GraphModules.Count) modules)" } else { "NOT INSTALLED" }

# Azure CLI Check
Write-Host "Checking Azure CLI..." -ForegroundColor Yellow
try {
    $AzureCliOutput = az --version 2>$null
    $AzureCliStatus = "INSTALLED"
} catch {
    $AzureCliStatus = "NOT INSTALLED"
}

# Development Tools Check
Write-Host "Checking Development Tools..." -ForegroundColor Yellow
$NodeStatus = try { node --version; "INSTALLED" } catch { "NOT INSTALLED" }
$NPMStatus = try { npm --version; "INSTALLED" } catch { "NOT INSTALLED" }
$GitStatus = try { git --version; "INSTALLED" } catch { "NOT INSTALLED" }
$DockerStatus = try { docker --version; "INSTALLED" } catch { "NOT INSTALLED" }

# Windows Errors Check
Write-Host "Checking Windows System Errors..." -ForegroundColor Yellow
$SystemErrors = Get-EventLog -LogName System -EntryType Error -Newest 5 -ErrorAction SilentlyContinue
$ErrorCount = if ($SystemErrors) { $SystemErrors.Count } else { 0 }

# Generate Report
$Report = @"
# NexoraSIM Enterprise System Audit Report

## System Information
- Computer: $($SystemInfo.ComputerName)
- User: $($SystemInfo.UserName)
- OS: $($SystemInfo.OSVersion)
- PowerShell: $($SystemInfo.PowerShellVersion)
- Audit Time: $($SystemInfo.Timestamp)

## Microsoft Components
- Microsoft Graph PowerShell: $GraphStatus
- Azure CLI: $AzureCliStatus

## Development Tools
- Node.js: $NodeStatus
- NPM: $NPMStatus
- Git: $GitStatus
- Docker: $DockerStatus

## System Health
- Recent System Errors: $ErrorCount

## Status: AUDIT COMPLETE
System components verified for NexoraSIM enterprise operations.
"@

Write-Host $Report -ForegroundColor White
$Report | Out-File -FilePath "SystemAuditReport.txt" -Encoding UTF8
Write-Host "Audit complete. Report saved to SystemAuditReport.txt" -ForegroundColor Green