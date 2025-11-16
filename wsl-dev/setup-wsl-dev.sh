#!/bin/bash

# NexoraSIM WSL Development Environment Setup
# Microsoft-Only Stack Development Environment

echo "Setting up NexoraSIM WSL Development Environment"
echo "Microsoft-Only Stack | iOS 26 Design | 300 Pages"

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18 LTS
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git
sudo apt-get install -y git

# Install build essentials
sudo apt-get install -y build-essential

# Install Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Install GitHub CLI
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh -y

# Create project structure
mkdir -p nexorasim-entertainment-server
cd nexorasim-entertainment-server

# Initialize package.json
cat > package.json << 'EOF'
{
  "name": "nexorasim-entertainment-server",
  "version": "2.0.0",
  "description": "NexoraSIM Entertainment Server - Premium Microsoft-Only Landing Website",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0 --port 5173",
    "build": "vite build --base ./",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist",
    "validate": "node scripts/validate-microsoft-stack.js",
    "azure:deploy": "az staticwebapp deploy --name nexorasim --source-location ./dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "@microsoft/mgt-react": "^4.0.0",
    "@microsoft/mgt-element": "^4.0.0",
    "@fluentui/react": "^8.110.0",
    "@fluentui/react-components": "^9.45.0",
    "three": "^0.158.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "gsap": "^3.12.2",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8",
    "gh-pages": "^6.1.0",
    "typescript": "^5.3.0"
  },
  "homepage": "https://nexorasim.github.io",
  "repository": {
    "type": "git",
    "url": "https://github.com/nexorasim/nexorasim.github.io.git"
  }
}
EOF

# Create directory structure
mkdir -p src/{components,pages,styles,utils,data}
mkdir -p public
mkdir -p scripts
mkdir -p azure/bicep

echo "WSL Development Environment Setup Complete"
echo "Next steps:"
echo "1. cd nexorasim-entertainment-server"
echo "2. npm install"
echo "3. npm run dev"
echo "4. Open http://localhost:5173"