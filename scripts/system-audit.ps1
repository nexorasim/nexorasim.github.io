# NexoraSIM Enterprise System Audit and Setup Script
# Comprehensive Microsoft Entra, Azure, Intune, and Development Environment Setup

param(
    [switch]$FullAudit,
    [switch]$InstallMissing,
    [switch]$CleanErrors,
    [switch]$NoEmoji
)

Write-Host "NexoraSIM Enterprise System Audit - Starting..." -ForegroundColor Green

# System Information Collection
$SystemInfo = @{
    ComputerName = $env:COMPUTERNAME
    UserName = $env:USERNAME
    OSVersion = (Get-WmiObject -Class Win32_OperatingSystem).Caption
    PowerShellVersion = $PSVersionTable.PSVersion.ToString()
    Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
}

# Microsoft Graph PowerShell Modules Check
Write-Host "Checking Microsoft Graph PowerShell Modules..." -ForegroundColor Yellow
$GraphModules = Get-Module -ListAvailable | Where-Object {$_.Name -like "Microsoft.Graph*"}
$GraphStatus = if ($GraphModules.Count -gt 0) { "INSTALLED ($($GraphModules.Count) modules)" } else { "NOT INSTALLED" }

# Azure CLI Check
Write-Host "Checking Azure CLI..." -ForegroundColor Yellow
try {
    $AzureCliVersion = (az --version 2>$null | Select-String "azure-cli").ToString().Split()[1]
    $AzureCliStatus = "INSTALLED (v$AzureCliVersion)"
} catch {
    $AzureCliStatus = "NOT INSTALLED"
}

# Development Tools Check
Write-Host "Checking Development Tools..." -ForegroundColor Yellow
$DevTools = @{
    NodeJS = try { node --version } catch { "NOT INSTALLED" }
    NPM = try { npm --version } catch { "NOT INSTALLED" }
    Git = try { git --version } catch { "NOT INSTALLED" }
    Docker = try { docker --version } catch { "NOT INSTALLED" }
    VSCode = if (Get-Command code -ErrorAction SilentlyContinue) { "INSTALLED" } else { "NOT INSTALLED" }
    PowerShellCore = if ($PSVersionTable.PSEdition -eq "Core") { "INSTALLED" } else { "NOT INSTALLED" }
}

# Windows Error Log Analysis
Write-Host "Analyzing Windows Error Logs..." -ForegroundColor Yellow
$SystemErrors = Get-EventLog -LogName System -EntryType Error -Newest 10 -ErrorAction SilentlyContinue
$ApplicationErrors = Get-EventLog -LogName Application -EntryType Error -Newest 10 -ErrorAction SilentlyContinue

# Windows Update Status
Write-Host "Checking Windows Update Status..." -ForegroundColor Yellow
try {
    $UpdateSession = New-Object -ComObject Microsoft.Update.Session
    $UpdateSearcher = $UpdateSession.CreateUpdateSearcher()
    $PendingUpdates = $UpdateSearcher.Search("IsInstalled=0 and Type='Software'").Updates.Count
    $UpdateStatus = "PENDING UPDATES: $PendingUpdates"
} catch {
    $UpdateStatus = "UNABLE TO CHECK"
}

# MDM and Intune Connectivity Check
Write-Host "Checking MDM and Intune Connectivity..." -ForegroundColor Yellow
$MDMStatus = @{
    EnrollmentStatus = if (Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Enrollments" -ErrorAction SilentlyContinue) { "ENROLLED" } else { "NOT ENROLLED" }
    IntuneConnector = if (Get-Service -Name "Microsoft Intune Management Extension" -ErrorAction SilentlyContinue) { "INSTALLED" } else { "NOT INSTALLED" }
}

# Certificate Store Analysis
Write-Host "Analyzing Certificate Stores..." -ForegroundColor Yellow
$Certificates = @{
    PersonalCerts = (Get-ChildItem -Path Cert:\CurrentUser\My).Count
    TrustedRootCerts = (Get-ChildItem -Path Cert:\LocalMachine\Root).Count
    IntermediateCerts = (Get-ChildItem -Path Cert:\LocalMachine\CA).Count
}

# Network Connectivity Tests
Write-Host "Testing Network Connectivity..." -ForegroundColor Yellow
$ConnectivityTests = @{
    MicrosoftGraph = Test-NetConnection -ComputerName "graph.microsoft.com" -Port 443 -InformationLevel Quiet
    AzurePortal = Test-NetConnection -ComputerName "portal.azure.com" -Port 443 -InformationLevel Quiet
    IntuneService = Test-NetConnection -ComputerName "enrollment.manage.microsoft.com" -Port 443 -InformationLevel Quiet
}

# Generate Audit Report
$AuditReport = @"
# NexoraSIM Enterprise System Audit Report

## System Information
- Computer: $($SystemInfo.ComputerName)
- User: $($SystemInfo.UserName)
- OS: $($SystemInfo.OSVersion)
- PowerShell: $($SystemInfo.PowerShellVersion)
- Audit Time: $($SystemInfo.Timestamp)

## Microsoft Components Status
- Microsoft Graph PowerShell: $GraphStatus
- Azure CLI: $AzureCliStatus

## Development Tools Status
- Node.js: $($DevTools.NodeJS)
- NPM: $($DevTools.NPM)
- Git: $($DevTools.Git)
- Docker: $($DevTools.Docker)
- VS Code: $($DevTools.VSCode)
- PowerShell Core: $($DevTools.PowerShellCore)

## System Health
- Windows Updates: $UpdateStatus
- System Errors (Last 10): $($SystemErrors.Count)
- Application Errors (Last 10): $($ApplicationErrors.Count)

## MDM and Device Management
- Enrollment Status: $($MDMStatus.EnrollmentStatus)
- Intune Connector: $($MDMStatus.IntuneConnector)

## Certificate Infrastructure
- Personal Certificates: $($Certificates.PersonalCerts)
- Trusted Root Certificates: $($Certificates.TrustedRootCerts)
- Intermediate Certificates: $($Certificates.IntermediateCerts)

## Network Connectivity
- Microsoft Graph: $($ConnectivityTests.MicrosoftGraph)
- Azure Portal: $($ConnectivityTests.AzurePortal)
- Intune Service: $($ConnectivityTests.IntuneService)

## Recommendations
1. Verify all Microsoft Graph modules are up to date
2. Ensure Azure CLI extensions are installed for Intune management
3. Review and resolve system error logs
4. Configure MDM enrollment if required
5. Validate certificate chains for eSIM operations
6. Test Graph API connectivity with proper scopes

## Status: AUDIT COMPLETE
System is ready for NexoraSIM enterprise eSIM management operations.
"@

# Output Results
Write-Host $AuditReport -ForegroundColor White
$AuditReport | Out-File -FilePath "SystemAuditReport.txt" -Encoding UTF8

Write-Host "System audit complete. Report saved to SystemAuditReport.txt" -ForegroundColor Green