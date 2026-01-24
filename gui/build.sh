#!/bin/bash
# Build script for all platforms

set -e

echo "Building Nexora Agent Desktop GUI..."

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
fi

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt
pip install -r ../agent/requirements.txt

# Build with PyInstaller
echo "Building with PyInstaller..."
pyinstaller nexora_agent.spec

echo "Build complete. Binary available in dist/"

# Platform-specific instructions
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "Linux binary: dist/NexoraAgent/NexoraAgent"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo "macOS app bundle: dist/NexoraAgent.app"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    echo "Windows executable: dist/NexoraAgent/NexoraAgent.exe"
fi
