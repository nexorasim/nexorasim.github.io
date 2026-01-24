#!/bin/bash

set -e

echo "Cleaning previous build..."
rm -rf dist

echo "Building TypeScript..."
npm run build

echo "Running tests..."
npm test

echo "Running linter..."
npm run lint

echo "Build completed successfully"
