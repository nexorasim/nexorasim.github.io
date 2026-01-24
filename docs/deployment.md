# Nexora AI Agent Mode - Deployment Guide

## Prerequisites

### System Requirements

**For Agent Development:**
- Python 3.11 or higher
- pip package manager
- Virtual environment support (venv)
- Git

**For GUI Development:**
- All agent requirements
- PySide6 system dependencies (usually auto-installed)

**For Web Development:**
- Node.js 20.x or higher
- npm 9.x or higher
- Git

**For CI/CD:**
- GitHub account with repository access
- GitHub CLI (optional, for MCP CLI workflow triggers)

### API Keys and Credentials

Obtain API keys from the following providers:

1. **OpenAI:** https://platform.openai.com/api-keys
2. **Google Gemini:** https://makersuite.google.com/app/apikey
3. **xAI (Grok):** Contact xAI for API access
4. **Generic HTTP:** Depends on your custom provider

## Local Development Setup

### 1. Clone Repository

```bash
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io
```

### 2. Python Agent Core Setup

```bash
cd agent

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your API keys
nano .env  # or use your preferred editor
```

### 3. Test Agent Core

```bash
# Test CLI
python -m nexora_agent.cli status

# Run a test prompt
python -m nexora_agent.cli run "Hello, test the agent" --provider openai

# Test specific provider
python -m nexora_agent.cli test-provider --provider google_gemini
```

### 4. Desktop GUI Setup

```bash
cd ../gui

# Use same virtual environment or create new one
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt
pip install -r ../agent/requirements.txt

# Run GUI
python main.py
```

### 5. Web Front-End Setup

```bash
cd ../web

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in browser
```

## Environment Configuration

### Agent Configuration Files

**`.env` Structure:**

```bash
# OpenAI Configuration
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4
OPENAI_ENABLED=true

# Google Gemini Configuration
GOOGLE_API_KEY=AIza...
GEMINI_MODEL=gemini-pro
GEMINI_ENABLED=true

# xAI Grok Configuration
XAI_API_KEY=xai-...
XAI_ENDPOINT=https://api.x.ai/v1
XAI_MODEL=grok-1
XAI_ENABLED=false

# Generic HTTP Provider Configuration
GENERIC_API_KEY=...
GENERIC_ENDPOINT=https://your-api.com/v1/completions
GENERIC_ENABLED=false

# Agent Configuration
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini,xai_grok
MAX_RETRIES=3
REQUEST_TIMEOUT=30

# Logging
LOG_LEVEL=INFO
```

### Environment-Specific Configuration

Create separate configuration files for different environments:

```bash
cd agent
cp .env.example .env.dev
cp .env.example .env.staging
cp .env.example .env.prod
```

Edit each file with environment-specific settings:

- **`.env.dev`:** Local development, verbose logging, mock providers
- **`.env.staging`:** Pre-production, test API keys, monitoring enabled
- **`.env.prod`:** Production, real API keys, rate limiting, comprehensive logging

### Switching Environments with MCP CLI

```bash
python -m nexora_agent.mcp_cli.mcp_cli deploy --env dev
python -m nexora_agent.mcp_cli.mcp_cli deploy --env staging
python -m nexora_agent.mcp_cli.mcp_cli deploy --env prod
```

## Building Desktop Application

### Windows

```bash
cd gui

# Ensure virtual environment is activated
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
pip install -r ..\agent\requirements.txt

# Build with PyInstaller
pyinstaller nexora_agent.spec

# Binary location: dist\NexoraAgent\NexoraAgent.exe
```

### macOS

```bash
cd gui

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
pip install -r ../agent/requirements.txt

# Build with PyInstaller
pyinstaller nexora_agent.spec

# App bundle location: dist/NexoraAgent.app
```

### Linux

```bash
cd gui

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
pip install -r ../agent/requirements.txt

# Build with PyInstaller
pyinstaller nexora_agent.spec

# Binary location: dist/NexoraAgent/NexoraAgent

# Optional: Create AppImage or .deb package
```

### Testing Built Application

Before distributing:

1. **Run the executable on a clean system** (without Python installed)
2. **Test all providers** to ensure API keys are read correctly
3. **Check for missing dependencies** or DLL errors
4. **Verify configuration file handling**

## Building and Deploying Web Front-End

### Local Build

```bash
cd web

# Install dependencies
npm install

# Build for production
npm run build

# Static files in: out/
```

### Manual Deployment to GitHub Pages

```bash
# Build the site
cd web
npm run build

# Deploy to GitHub Pages (example using gh-pages package)
npm install -g gh-pages
gh-pages -d out
```

### Automated Deployment via GitHub Actions

The repository includes automated deployment workflows.

**Trigger Deployment:**

1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Update web front-end"
   git push origin main
   ```

2. **GitHub Actions automatically:**
   - Checks out code
   - Installs dependencies
   - Builds Next.js site
   - Deploys to GitHub Pages

3. **Monitor deployment:**
   - Go to repository on GitHub
   - Click "Actions" tab
   - View workflow run status

4. **Access deployed site:**
   - https://nexorasim.github.io

### Deployment Verification

```bash
# Using MCP CLI
python -m nexora_agent.mcp_cli.mcp_cli health https://nexorasim.github.io

# Manual verification
curl -I https://nexorasim.github.io
```

## CI/CD Workflows

### GitHub Actions Configuration

The repository includes three main workflows:

#### 1. Web Deployment (`.github/workflows/deploy-web.yml`)

**Triggers:**
- Push to `main` branch (changes in `web/`)
- Manual dispatch

**Steps:**
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Build Next.js site
5. Deploy to GitHub Pages

#### 2. Agent and GUI Build (`.github/workflows/build-agent.yml`)

**Triggers:**
- Push to `main` branch (changes in `agent/` or `gui/`)
- Pull requests
- Release creation

**Steps:**
1. Test Python agent core
2. Build GUI for Windows, macOS, Linux (on release)
3. Create archives
4. Upload to GitHub Releases

#### 3. CI Tests (`.github/workflows/ci.yml`)

**Triggers:**
- Push to `main` or `dev` branches
- Pull requests

**Steps:**
1. Lint and test agent code
2. Lint and build web code
3. Upload coverage reports

### Setting Up GitHub Secrets

For CI/CD to work properly, configure these secrets:

1. **Go to repository Settings > Secrets and variables > Actions**
2. **Add secrets:**
   - `OPENAI_API_KEY` (for testing)
   - `GOOGLE_API_KEY` (for testing)
   - Other provider keys as needed

### Manual Workflow Trigger

**Via GitHub UI:**
1. Go to "Actions" tab
2. Select workflow
3. Click "Run workflow"
4. Select branch and options
5. Click "Run workflow"

**Via GitHub CLI:**
```bash
gh workflow run deploy-web.yml
gh workflow run build-agent.yml
```

**Via MCP CLI:**
```bash
python -m nexora_agent.mcp_cli.mcp_cli workflow deploy-web.yml
```

## Production Deployment

### Pre-Deployment Checklist

- [ ] All tests passing in CI/CD
- [ ] Configuration reviewed for production settings
- [ ] API keys validated and have sufficient quota
- [ ] Documentation updated
- [ ] Change log updated
- [ ] Version numbers incremented
- [ ] Security review completed
- [ ] Backup of current production state

### Deployment Steps

#### 1. Prepare Release

```bash
# Update version numbers
# - agent/nexora_agent/__init__.py
# - web/package.json
# - gui/main.py

# Commit changes
git add .
git commit -m "Release v1.0.0"
git push origin main
```

#### 2. Create GitHub Release

```bash
# Tag the release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Or use GitHub UI to create release
```

#### 3. Monitor Deployment

```bash
# Check GitHub Actions
# - Verify all workflows complete successfully
# - Download artifacts if needed

# Verify web deployment
curl https://nexorasim.github.io

# Test desktop binaries
# - Download from GitHub Releases
# - Test on target platforms
```

#### 4. Post-Deployment Verification

```bash
# Run health checks
python -m nexora_agent.mcp_cli.mcp_cli health https://nexorasim.github.io

# Test all providers
python -m nexora_agent.cli test-provider --provider openai
python -m nexora_agent.cli test-provider --provider google_gemini

# Monitor logs for errors
```

### Rollback Procedures

#### Web Front-End Rollback

**Method 1: Revert Commit**
```bash
git revert <commit-hash>
git push origin main
# Wait for automatic redeployment
```

**Method 2: Manual Redeploy Previous Version**
```bash
git checkout <previous-tag>
cd web
npm run build
gh-pages -d out
```

#### Desktop Application Rollback

1. **Users download previous version from GitHub Releases**
2. **Uninstall current version**
3. **Install previous version**

#### Agent Core Rollback

```bash
# Revert to previous version
git checkout <previous-tag>

# Reinstall dependencies
cd agent
pip install -r requirements.txt

# Apply previous environment config
python -m nexora_agent.mcp_cli.mcp_cli deploy --env prod
```

## Monitoring and Maintenance

### Log Monitoring

**Agent Logs:**
```bash
# View logs in real-time
tail -f agent.log

# Search for errors
grep ERROR agent.log

# Analyze provider performance
grep "execution_time" agent.log | awk '{sum+=$NF; count++} END {print sum/count}'
```

### Performance Monitoring

**Key Metrics:**
- Provider response times
- Success/failure rates
- Token usage
- Error frequency

**Implement Monitoring (Future):**
```python
# Example: Send metrics to monitoring service
import sentry_sdk

sentry_sdk.init(
    dsn="your-sentry-dsn",
    traces_sample_rate=1.0,
)
```

### Maintenance Tasks

**Weekly:**
- [ ] Review error logs
- [ ] Check API key quotas
- [ ] Monitor provider status pages

**Monthly:**
- [ ] Update dependencies
- [ ] Review and rotate API keys
- [ ] Analyze usage patterns
- [ ] Backup configurations

**Quarterly:**
- [ ] Security audit
- [ ] Performance optimization
- [ ] Documentation review
- [ ] User feedback analysis

## Troubleshooting

### Common Issues

#### Issue: "Provider not configured" error

**Solution:**
```bash
# Verify .env file exists and has correct keys
cat agent/.env

# Ensure .env is loaded
export $(cat agent/.env | xargs)

# Test configuration
python -m nexora_agent.cli status
```

#### Issue: PyInstaller build fails

**Solution:**
```bash
# Clear previous builds
rm -rf gui/build gui/dist

# Reinstall dependencies
pip install --force-reinstall -r gui/requirements.txt

# Rebuild
cd gui
pyinstaller nexora_agent.spec
```

#### Issue: Next.js build fails on GitHub Actions

**Solution:**
```bash
# Check Node version in workflow
# Ensure it matches local development

# Clear npm cache
npm cache clean --force

# Rebuild locally
cd web
rm -rf node_modules .next
npm install
npm run build
```

#### Issue: GitHub Pages not updating

**Solution:**
1. Check GitHub Actions workflow status
2. Verify GitHub Pages settings in repository
3. Clear browser cache
4. Wait 5-10 minutes for CDN propagation

### Getting Help

- **Documentation:** Check `/docs/` directory
- **Issues:** Create GitHub issue with details
- **Community:** Contact via GitHub Discussions

## Conclusion

This deployment guide covers local development, CI/CD setup, production deployment, and maintenance for the Nexora AI Agent Mode platform. Follow these procedures to ensure reproducible, auditable, and reliable deployments.

For architecture details, see `/docs/architecture.md`.
For agent usage, see `/docs/agent-mode.md`.
For provider configuration, see `/docs/providers.md`.
