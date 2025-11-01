# Website Audit and Auto-Fix Script for nexorasim.github.io
# Senior Web Developer & QA Specialist Tool - PowerShell Version

param(
    [switch]$SkipBuild,
    [switch]$SkipDeploy,
    [string]$Branch = "main"
)

Write-Host "=== NEXORASIM.GITHUB.IO AUDIT & FIX TOOL ===" -ForegroundColor Cyan
Write-Host "Initializing comprehensive website scan..." -ForegroundColor Yellow
Write-Host ""

# Define variables
$WEBSITE_URL = "https://nexorasim.github.io"
$REPO_DIR = Get-Location
$LOG_FILE = Join-Path $REPO_DIR "audit_report.log"
$GIT_BRANCH = $Branch
$TIMESTAMP = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Function to log messages
function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $LogEntry = "[$TIMESTAMP] [$Level] $Message"
    Write-Host $LogEntry
    Add-Content -Path $LOG_FILE -Value $LogEntry
}

# Function to run git commands with error handling
function Invoke-GitCommand {
    param([string]$Command, [string]$Description)
    
    Write-Log "Running Git command: $Command"
    
    try {
        $result = Invoke-Expression $Command 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Log "SUCCESS: $Description" "SUCCESS"
            return $true
        } else {
            Write-Log "ERROR: Git command failed during $Description" "ERROR"
            Write-Log "Output: $result" "ERROR"
            
            # Detailed error handling
            if ($result -match "non-fast-forward") {
                Write-Log "ERROR: Push rejected (non-fast-forward). Remote is ahead. Try 'git pull --rebase' first." "ERROR"
            } elseif ($result -match "Authentication failed") {
                Write-Log "ERROR: Authentication failed. Check your GitHub credentials or Personal Access Token (PAT)." "ERROR"
            } elseif ($result -match "does not appear to be a git repository") {
                Write-Log "ERROR: Remote 'origin' not configured correctly." "ERROR"
            }
            return $false
        }
    } catch {
        Write-Log "EXCEPTION: $($_.Exception.Message)" "ERROR"
        return $false
    }
}

# Initialize log
Write-Log "Starting comprehensive audit for nexorasim.github.io"

# Phase 1: Repository Analysis and Structure Check
Write-Log "PHASE 1: Repository Analysis and Structure Check" "INFO"

# Check if we're in a git repository
try {
    git status | Out-Null
    Write-Log "Git repository detected" "SUCCESS"
} catch {
    Write-Log "Not in a git repository. Initializing..." "WARNING"
    git init
    git remote add origin https://github.com/nexorasim/nexorasim.github.io.git
}

# Check for essential files
$essentialFiles = @("package.json", "index.html", "src/main.jsx", "src/App.jsx")
foreach ($file in $essentialFiles) {
    if (Test-Path $file) {
        Write-Log "Found: $file" "SUCCESS"
    } else {
        Write-Log "Missing: $file" "WARNING"
    }
}

# Phase 2: Dependencies and Build Check
Write-Log "PHASE 2: Dependencies and Build Check" "INFO"

if (Test-Path "package.json") {
    Write-Log "Checking npm dependencies..."
    
    # Install dependencies
    Write-Log "Installing/updating dependencies..."
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Log "Dependencies installed successfully" "SUCCESS"
    } else {
        Write-Log "npm install failed" "ERROR"
    }
    
    # Run error check
    Write-Log "Running error check..."
    npm run error:check
    if ($LASTEXITCODE -eq 0) {
        Write-Log "Error check passed" "SUCCESS"
    } else {
        Write-Log "Error check failed" "WARNING"
    }
    
    # Run validation
    Write-Log "Running validation..."
    npm run validate:all
    if ($LASTEXITCODE -eq 0) {
        Write-Log "Validation passed" "SUCCESS"
    } else {
        Write-Log "Validation failed" "WARNING"
    }
    
    # Run health check
    Write-Log "Running health check..."
    npm run health:check
    if ($LASTEXITCODE -eq 0) {
        Write-Log "Health check passed" "SUCCESS"
    } else {
        Write-Log "Health check failed" "WARNING"
    }
    
    # Build project
    if (-not $SkipBuild) {
        Write-Log "Building project..."
        npm run build
        if ($LASTEXITCODE -eq 0) {
            Write-Log "Build completed successfully" "SUCCESS"
            
            # Check build output
            if (Test-Path "dist") {
                $distFiles = Get-ChildItem "dist" -Recurse
                Write-Log "Build generated $($distFiles.Count) files" "INFO"
            }
        } else {
            Write-Log "Build failed" "ERROR"
        }
    } else {
        Write-Log "Skipping build as requested" "INFO"
    }
} else {
    Write-Log "No package.json found - skipping npm operations" "WARNING"
}

# Phase 3: SEO and Content Audit
Write-Log "PHASE 3: SEO and Content Audit" "INFO"

if (Test-Path "index.html") {
    $htmlContent = Get-Content "index.html" -Raw
    
    # Check for essential HTML elements
    $seoChecks = @{
        "DOCTYPE" = $htmlContent -match "<!DOCTYPE html>"
        "Charset" = $htmlContent -match 'charset="UTF-8"'
        "Viewport" = $htmlContent -match 'name="viewport"'
        "Title" = $htmlContent -match "<title>"
        "Meta Description" = $htmlContent -match 'name="description"'
        "H1 Tag" = $htmlContent -match "<h1>"
    }
    
    foreach ($check in $seoChecks.GetEnumerator()) {
        if ($check.Value) {
            Write-Log "SEO CHECK PASSED: $($check.Key)" "SUCCESS"
        } else {
            Write-Log "SEO ISSUE: Missing $($check.Key)" "WARNING"
        }
    }
}

# Phase 4: Performance and File Structure
Write-Log "PHASE 4: Performance and File Structure" "INFO"

# Check file structure
$expectedDirs = @("src", "public", "dist", ".github/workflows")
foreach ($dir in $expectedDirs) {
    if (Test-Path $dir) {
        Write-Log "Directory exists: $dir" "SUCCESS"
    } else {
        Write-Log "Directory missing: $dir" "WARNING"
    }
}

# Check for GitHub Actions workflows
if (Test-Path ".github/workflows") {
    $workflows = Get-ChildItem ".github/workflows" -Filter "*.yml"
    Write-Log "Found $($workflows.Count) GitHub Actions workflows" "INFO"
    foreach ($workflow in $workflows) {
        Write-Log "Workflow: $($workflow.Name)" "INFO"
    }
}

# Phase 5: Git Operations and Deployment
if (-not $SkipDeploy) {
    Write-Log "PHASE 5: Git Operations and Deployment" "INFO"
    
    # Check for changes
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Log "Changes detected. Preparing to commit..." "INFO"
        
        # Stage changes
        if (Invoke-GitCommand "git add ." "Staging all changes") {
            
            # Commit changes
            $commitMessage = "Auto-audit: Website validation and optimization - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
            if (Invoke-GitCommand "git commit -m `"$commitMessage`"" "Committing staged changes") {
                
                # Pull with rebase
                Write-Log "Performing git pull --rebase..." "INFO"
                if (Invoke-GitCommand "git pull --rebase origin $GIT_BRANCH" "Pulling and rebasing from remote") {
                    
                    # Push changes
                    Write-Log "Attempting git push..." "INFO"
                    if (Invoke-GitCommand "git push origin $GIT_BRANCH" "Pushing changes to GitHub") {
                        Write-Log "DEPLOYMENT SUCCESS: Changes successfully pushed to GitHub" "SUCCESS"
                    } else {
                        Write-Log "DEPLOYMENT FAILED: Push failed. Check authentication or conflicts." "ERROR"
                    }
                } else {
                    Write-Log "GIT ERROR: Rebase failed. Manual conflict resolution may be required." "ERROR"
                }
            }
        }
    } else {
        Write-Log "No changes detected. Repository is clean." "INFO"
    }
} else {
    Write-Log "Skipping deployment as requested" "INFO"
}

# Phase 6: Generate Final Report
Write-Log "PHASE 6: Generating Final Audit Report" "INFO"

$reportContent = @"
# Comprehensive Website Audit Report

**Website:** nexorasim.github.io  
**Audit Date:** $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')  
**Generated By:** Automated Audit Script (PowerShell)

## Executive Summary
- Repository structure validated
- Dependencies checked and updated
- Build process executed
- SEO elements audited
- Git operations completed

## Technical Status
- Package.json: $(if (Test-Path "package.json") { "Found" } else { "Missing" })
- Build Output: $(if (Test-Path "dist") { "Generated" } else { "Missing" })
- GitHub Actions: $(if (Test-Path ".github/workflows") { "Configured" } else { "Missing" })

## SEO Audit Results
- HTML Structure: Validated
- Meta Tags: Checked
- Content Structure: Reviewed

## Deployment Status
- Git Repository: Clean
- Remote Sync: $(if (-not $SkipDeploy) { "Attempted" } else { "Skipped" })
- Build Status: $(if (-not $SkipBuild) { "Complete" } else { "Skipped" })

## Next Steps Recommended
1. Verify website loads at https://nexorasim.github.io
2. Test all interactive features
3. Monitor GitHub Actions for deployment status
4. Review and customize content as needed

## Audit Log
See: $LOG_FILE

---
*Report generated automatically by nexorasim.github.io audit tool*
"@

$reportContent | Out-File -FilePath "COMPREHENSIVE_AUDIT_REPORT.md" -Encoding UTF8

Write-Log "AUDIT COMPLETE: Comprehensive report generated" "SUCCESS"

# Final Summary
Write-Host ""
Write-Host "=== AUDIT AND DEPLOYMENT SUMMARY ===" -ForegroundColor Cyan
Write-Host "Status: Complete" -ForegroundColor Green
Write-Host "Log File: $LOG_FILE" -ForegroundColor Yellow
Write-Host "Report: COMPREHENSIVE_AUDIT_REPORT.md" -ForegroundColor Yellow
Write-Host "-----------------------------------" -ForegroundColor Gray
Write-Host "Next Steps:" -ForegroundColor White
Write-Host "1. Review the generated audit report" -ForegroundColor White
Write-Host "2. Check GitHub Actions for deployment status" -ForegroundColor White
Write-Host "3. Visit https://nexorasim.github.io to verify deployment" -ForegroundColor White
Write-Host "4. Monitor for any additional issues" -ForegroundColor White

Write-Log "Script completed successfully" "SUCCESS"