# Installation Guide

Complete installation instructions for all NexoraSIM components.

## System Requirements

### Minimum Requirements
- Operating System: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- Python: 3.11 or higher
- Node.js: 18.0 or higher
- RAM: 4 GB minimum, 8 GB recommended
- Disk Space: 500 MB for installation

### Recommended Requirements
- Python: 3.11+
- Node.js: 20.0+
- RAM: 16 GB
- Disk Space: 2 GB

## NPM Package Installation

### Using npm

```bash
npm install @nexorasim/nexora-agent
```

### Using yarn

```bash
yarn add @nexorasim/nexora-agent
```

### Using pnpm

```bash
pnpm add @nexorasim/nexora-agent
```

### Verify Installation

```bash
node -e "const {NexoraAgent} = require('@nexorasim/nexora-agent'); console.log('Success');"
```

## Python Agent Installation

### Clone Repository

```bash
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io/agent
```

### Create Virtual Environment

**Linux/macOS:**
```bash
python3 -m venv venv
source venv/bin/activate
```

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Verify Installation

```bash
python -m nexora_agent.cli status
```

## Desktop GUI Installation

### Prerequisites

Install Python agent first (see above).

### Install GUI Dependencies

```bash
cd gui
pip install -r requirements.txt
pip install -r ../agent/requirements.txt
```

### Run GUI

```bash
python main.py
```

### Build Executable (Optional)

**Windows:**
```bash
pyinstaller nexora_agent.spec
dist\NexoraAgent\NexoraAgent.exe
```

**macOS/Linux:**
```bash
pyinstaller nexora_agent.spec
./dist/NexoraAgent/NexoraAgent
```

## Web Frontend Installation

### For Development

```bash
cd web
npm install
npm run dev
```

Visit http://localhost:3000

### For Production Build

```bash
npm run build
```

Output will be in `out/` directory.

## Configuration

### Environment Variables

Create `.env` file in the appropriate directory:

**Python Agent:**
```bash
cd agent
cp .env.example .env
```

**NPM Package:**
Create `.env` in your project root:
```bash
OPENAI_API_KEY=sk-...
GOOGLE_API_KEY=AIza...
XAI_API_KEY=xai-...
GROQ_API_KEY=gsk_...
ANTHROPIC_API_KEY=sk-ant-...
```

### Configuration File (Optional)

**Python Agent:**
```bash
cd agent
cp config.yaml.example config.yaml
```

Edit `config.yaml` with your settings.

## Verification

### NPM Package

```javascript
const { NexoraAgent } = require('@nexorasim/nexora-agent');
const agent = new NexoraAgent();
console.log('NexoraSIM installed successfully');
```

### Python Agent

```bash
python -m nexora_agent.cli status
python -m nexora_agent.cli list
```

### Desktop GUI

Launch the application and verify the interface loads.

### Web Frontend

Visit https://nexorasim.github.io or your local development server.

## Troubleshooting

### NPM Installation Issues

**Error: Cannot find module**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Permission Errors**
```bash
npm install --unsafe-perm
```

### Python Installation Issues

**Error: Python version too old**
```bash
python --version  # Check version
# Install Python 3.11+ from python.org
```

**Error: pip not found**
```bash
python -m ensurepip --upgrade
```

**Error: Virtual environment issues**
```bash
deactivate
rm -rf venv
python -m venv venv
source venv/bin/activate
```

### GUI Installation Issues

**Error: PySide6 not found**
```bash
pip install PySide6>=6.6.0
```

**Error: PyInstaller build fails**
```bash
pip install --upgrade pyinstaller
pyinstaller --clean nexora_agent.spec
```

### Web Frontend Issues

**Error: Port already in use**
```bash
# Change port in package.json or kill process
lsof -ti:3000 | xargs kill  # macOS/Linux
netstat -ano | findstr :3000  # Windows
```

## Platform-Specific Notes

### Windows

- Use PowerShell or Command Prompt
- Activate venv: `venv\Scripts\activate`
- Path separators: Use backslash `\`

### macOS

- May need to install Xcode Command Line Tools
- Use Terminal or iTerm2
- Activate venv: `source venv/bin/activate`

### Linux

- May need to install python3-venv: `sudo apt install python3-venv`
- Use Terminal
- Activate venv: `source venv/bin/activate`

## Updating

### NPM Package

```bash
npm update @nexorasim/nexora-agent
```

### Python Agent

```bash
cd agent
git pull origin main
pip install -r requirements.txt --upgrade
```

### Desktop GUI

```bash
cd gui
git pull origin main
pip install -r requirements.txt --upgrade
```

### Web Frontend

```bash
cd web
git pull origin main
npm install
npm run build
```

## Uninstallation

### NPM Package

```bash
npm uninstall @nexorasim/nexora-agent
```

### Python Agent

```bash
cd agent
deactivate  # If venv is active
rm -rf venv
cd ..
rm -rf nexorasim.github.io
```

### Desktop GUI

Remove the application directory and executable.

## Next Steps

- [Configuration Guide](Configuration) - Configure your installation
- [Getting Started](Getting-Started) - Start using NexoraSIM
- [Provider Setup](Provider-Setup) - Configure AI providers
- [API Reference](API-Reference) - Learn the API

## Support

Having installation issues? Check:

- [Troubleshooting Guide](Troubleshooting)
- [FAQ](FAQ)
- [GitHub Issues](https://github.com/nexorasim/nexorasim.github.io/issues)
