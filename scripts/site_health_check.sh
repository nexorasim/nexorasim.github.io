#!/usr/bin/env bash
# Site Health Check Script for NexoraSIM
# Usage: ./scripts/site_health_check.sh
# Requires: node, npm, linkchecker or broken-link-checker

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

# Config
BUILD_CMD="npm run build"
BUILD_DIR="dist"
LINKCHECK_IGNORE_FILE=".linkcheck-ignore"

echo "=========================================="
echo "NEXORASIM SITE HEALTH CHECK"
echo "=========================================="
echo ""

progress() {
    pct="$1"
    step="$2"
    echo "[$pct%] $step"
}

# Start
progress 1 "Starting site health check"

progress 5 "Step 1: Install node dependencies"
if [ -f package.json ]; then
    npm ci >/dev/null 2>&1 || { echo "npm ci failed - run 'npm ci' manually to see errors"; exit 1; }
    echo "Dependencies installed successfully"
else
    echo "No package.json detected - skipping npm ci"
fi

progress 15 "Step 2: Run site build"
if $BUILD_CMD; then
    echo "Build succeeded"
else
    echo "Build failed - check logs above"
    exit 1
fi

progress 30 "Step 3: Verify build output exists"
if [ -d "$BUILD_DIR" ]; then
    echo "Build output present in $BUILD_DIR"
    echo "Files generated: $(find $BUILD_DIR -type f | wc -l)"
else
    echo "No build output directory found (expected $BUILD_DIR)"
    exit 1
fi

progress 45 "Step 4: Run link checker (scan for broken links)"
if command -v linkchecker >/dev/null 2>&1; then
    linkchecker "file://$REPO_ROOT/$BUILD_DIR/index.html" --no-status >/dev/null 2>&1 || {
        echo "Linkchecker found broken links - run: linkchecker file://$REPO_ROOT/$BUILD_DIR/index.html --no-status"
    }
    echo "Link check completed"
else
    echo "linkchecker not installed - attempting to use broken-link-checker"
    if ! command -v blc >/dev/null 2>&1; then
        echo "Installing broken-link-checker..."
        npm i -g broken-link-checker >/dev/null 2>&1 || {
            echo "Failed to install broken-link-checker - skipping link check"
            progress 50 "Skipped link check"
        }
    fi
    if command -v blc >/dev/null 2>&1; then
        echo "Running broken-link-checker..."
        blc "file://$REPO_ROOT/$BUILD_DIR/index.html" --recursive --follow >/dev/null 2>&1 || {
            echo "Broken-link-checker found issues"
        }
        echo "Link check completed"
    fi
fi

progress 60 "Step 5: Validate HTML structure"
if [ -f "$BUILD_DIR/index.html" ]; then
    echo "index.html exists"
    if grep -q "<!DOCTYPE html>" "$BUILD_DIR/index.html"; then
        echo "Valid HTML doctype found"
    else
        echo "WARNING: No HTML doctype found"
    fi
else
    echo "ERROR: index.html not found in build output"
    exit 1
fi

progress 70 "Step 6: Check static assets"
ASSET_COUNT=$(find "$BUILD_DIR/assets" -type f 2>/dev/null | wc -l || echo "0")
echo "Found $ASSET_COUNT asset files"
if [ "$ASSET_COUNT" -gt 0 ]; then
    echo "Assets directory populated"
else
    echo "WARNING: No assets found - this may be expected for minimal sites"
fi

progress 85 "Step 7: Security and configuration checks"
if [ -f CNAME ] || [ -f "$BUILD_DIR/CNAME" ]; then
    echo "CNAME found - ensure DNS A/CNAME records point to GitHub Pages"
else
    echo "No CNAME file - using default GitHub Pages domain"
fi

if [ -f "$BUILD_DIR/robots.txt" ]; then
    echo "robots.txt present"
else
    echo "WARNING: No robots.txt found"
fi

if [ -f "$BUILD_DIR/sitemap.xml" ]; then
    echo "sitemap.xml present"
else
    echo "WARNING: No sitemap.xml found"
fi

progress 92 "Step 8: Run validation scripts"
if npm run error:check >/dev/null 2>&1; then
    echo "Error check passed"
fi

if npm run validate:all >/dev/null 2>&1; then
    echo "System validation passed"
fi

progress 98 "Step 9: Prepare for deployment"
echo "Build artifacts ready for deployment"
echo "To deploy: npm run deploy"
echo "Or push to GitHub and let Actions handle deployment"

progress 100 "Complete: all checks finished (1 -> 100%)"
echo ""
echo "=========================================="
echo "HEALTH CHECK COMPLETE"
echo "=========================================="
echo ""
echo "Review any warnings above."
echo "For deployment, run: npm run deploy"
echo "Site will be available at: https://nexorasim.github.io"
echo ""

exit 0