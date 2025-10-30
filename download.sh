#!/bin/bash
echo "NexoraSIM Enterprise eSIM Platform Installer"
echo "Downloading and installing system..."

git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io

if command -v npm &> /dev/null; then
    npm run install:system
    echo "System installed successfully"
    echo "Run 'npm run dev' to start development server"
else
    echo "Node.js and npm required. Please install Node.js first."
fi