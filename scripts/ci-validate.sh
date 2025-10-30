#!/usr/bin/env bash
set -euo pipefail

echo "[ci-validate] Running system and data API validations"
node scripts/validate-all.js || { echo "validate-all failed"; exit 1; }
node scripts/error-check.js || { echo "error-check failed"; exit 1; }
node scripts/health-check.js || { echo "health-check failed"; exit 1; }
node scripts/enable-all.js || { echo "enable-all failed"; exit 1; }

echo "[ci-validate] All checks passed"
