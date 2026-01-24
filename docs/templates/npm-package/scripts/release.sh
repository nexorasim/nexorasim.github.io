#!/bin/bash

set -e

# Check if version type is provided
if [ -z "$1" ]; then
  echo "Usage: ./scripts/release.sh [patch|minor|major]"
  exit 1
fi

VERSION_TYPE=$1

echo "Running tests..."
npm test

echo "Running audit..."
npm audit --audit-level=high

echo "Building package..."
npm run build

echo "Bumping version ($VERSION_TYPE)..."
npm version $VERSION_TYPE -m "Release v%s"

echo "Pushing to remote..."
git push origin main --tags

echo "Release completed successfully"
