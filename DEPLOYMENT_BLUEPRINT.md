# Nexora AI Agent Mode - Complete Deployment Blueprint

**Organization:** NexoraSIM  
**Public Entry Point:** https://nexorasim.github.io  
**Repository:** nexorasim.github.io  
**Operating Model:** Hybrid cloud, audit-first, reproducible deployments  
**Language:** English-only technical artifacts  
**Style:** Enterprise-grade, no emojis, neutral wording

---

## Executive Summary

This document provides a complete, implementation-ready deployment blueprint for the Nexora AI Agent Mode platform. The system consists of:

1. **Python AI Agent Core**: Multi-provider orchestration engine with OpenAI, Google Gemini, xAI Grok, and generic HTTP support
2. **Desktop GUI**: Cross-platform application packaged with PyInstaller for Windows, macOS, and Linux
3. **Next.js Web Front-End**: Modern web console deployed to GitHub Pages
4. **MCP-Style CLI**: Deployment automation and operations management
5. **CI/CD Pipelines**: GitHub Actions for automated builds and deployments

All components are designed for reproducible, auditable, enterprise-grade deployments.

---

## 1. Repository Structure

### Complete Monorepo Layout

```
nexorasim.github.io/
├── agent/                          # Python AI Agent core
│   ├── nexora_agent/               # Main package
│   │   ├── __init__.py             # Package initialization
│   │   ├── cli.py                  # Command-line interface
│   │   ├── core/                   # Core orchestration
│   │   │   ├── __init__.py
│   │   │   └── agent.py            # Main agent logic
│   │   ├── providers/              # Provider adapters
│   │   │   ├── __init__.py
│   │   │   ├── base.py             # Base provider interface
│   │   │   ├── openai_provider.py  # OpenAI integration
│   │   │   ├── google_gemini.py    # Google Gemini integration
│   │   │   ├── xai_grok.py         # xAI Grok integration
│   │   │   ├── generic_http.py     # Generic HTTP provider
│   │   │   └── provider_factory.py # Provider factory
│   │   ├── config/                 # Configuration management
│   │   │   ├── __init__.py
│   │   │   └── config_loader.py    # Config loading
│   │   └── mcp_cli/                # MCP-style CLI
│   │       ├── __init__.py
│   │       └── mcp_cli.py          # Deployment automation
│   ├── tests/                      # Unit tests
│   │   ├── __init__.py
│   │   ├── test_agent.py
│   │   ├── test_providers.py
│   │   └── test_config.py
│   ├── requirements.txt            # Python dependencies
│   ├── .env.example                # Environment template
│   ├── config.yaml.example         # YAML config template
│   ├── pytest.ini                  # Test configuration
│   └── README.md                   # Agent documentation
│
├── gui/                            # Desktop GUI
│   ├── main.py                     # GUI entry point
│   ├── nexora_agent.spec           # PyInstaller spec file
│   ├── build.sh                    # Build script
│   ├── requirements.txt            # GUI dependencies
│   └── README.md                   # GUI documentation
│
├── web/                            # Next.js front-end
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Landing page
│   │   ├── globals.css             # Global styles
│   │   └── console/                # Console page
│   │       └── page.tsx            # Agent console
│   ├── public/                     # Static assets
│   ├── package.json                # Dependencies
│   ├── next.config.js              # Next.js configuration
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tsconfig.json               # TypeScript configuration
│   └── README.md                   # Web documentation
│
├── docs/                           # Documentation
│   ├── architecture.md             # System architecture
│   ├── deployment.md               # Deployment guide
│   ├── agent-mode.md               # Agent usage
│   ├── providers.md                # Provider configuration
│   └── changelog.md                # Version history
│
├── .github/                        # GitHub configuration
│   └── workflows/                  # CI/CD pipelines
│       ├── deploy-web.yml          # Web deployment
│       ├── build-agent.yml         # Agent/GUI builds
│       └── ci.yml                  # Tests and linting
│
├── .gitignore                      # Git ignore patterns
├── LICENSE                         # License file
├── README.md                       # Main README
└── DEPLOYMENT_BLUEPRINT.md         # This file
```

### Purpose of Each Component

**`/agent/`**: Contains the Python AI Agent core that provides multi-provider orchestration. This is the heart of the system and can be used standalone via CLI or integrated into other applications.

**`/gui/`**: Desktop application that provides a user-friendly interface to the agent. Uses PySide6 for cross-platform compatibility and PyInstaller for standalone executables.

**`/web/`**: Modern web interface built with Next.js 14 and TypeScript. Exports to static files for GitHub Pages deployment.

**`/docs/`**: Comprehensive documentation covering architecture, deployment procedures, usage patterns, and provider configuration.

**`.github/workflows/`**: Automated CI/CD pipelines for testing, building, and deploying all components.

---

## 2. Python AI Agent Core - Detailed Specification

### Technology Stack

- **Python Version**: 3.11+
- **Dependency Management**: pip with requirements.txt
- **Configuration**: Environment variables + YAML (optional)
- **Logging**: Python standard logging module
- **Testing**: pytest with coverage

### Provider Abstraction Architecture

All providers implement the `BaseProvider` abstract class:

```python
class BaseProvider(ABC):
    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self.api_key = config.get("api_key", "")
        self.enabled = config.get("enabled", False)
    
    @abstractmethod
    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute AI request and return standardized response."""
        pass
    
    def is_configured(self) -> bool:
        """Check if provider is properly configured."""
        return bool(self.api_key) and self.enabled
```

### Supported Providers

#### OpenAI Provider
- **Models**: gpt-4, gpt-4-turbo-preview, gpt-3.5-turbo
- **Library**: openai>=1.12.0
- **Authentication**: API key via OPENAI_API_KEY
- **Rate Limits**: Varies by account tier
- **Error Handling**: Rate limit detection, automatic retry

#### Google Gemini Provider
- **Models**: gemini-pro, gemini-pro-vision, gemini-ultra (when available)
- **Library**: google-generativeai>=0.3.0
- **Authentication**: API key via GOOGLE_API_KEY
- **Rate Limits**: 60 requests/min (free tier)
- **Error Handling**: Safety filter detection, quota management

#### xAI Grok Provider
- **Models**: grok-1, grok-beta
- **Library**: requests (HTTP client)
- **Authentication**: API key via XAI_API_KEY
- **Endpoint**: Configurable (default: https://api.x.ai/v1)
- **Error Handling**: Standard HTTP error codes

#### Generic HTTP Provider
- **Purpose**: Support any HTTP/JSON AI API
- **Library**: requests
- **Authentication**: Configurable headers
- **Endpoint**: Fully configurable
- **Use Cases**: Anthropic Claude, Cohere, self-hosted models, custom APIs

### Configuration System

**Environment Variables (.env):**

```bash
# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4
OPENAI_ENABLED=true

# Google Gemini
GOOGLE_API_KEY=AIza...
GEMINI_MODEL=gemini-pro
GEMINI_ENABLED=true

# xAI Grok
XAI_API_KEY=xai-...
XAI_ENDPOINT=https://api.x.ai/v1
XAI_MODEL=grok-1
XAI_ENABLED=false

# Generic HTTP
GENERIC_API_KEY=...
GENERIC_ENDPOINT=https://your-api.com/v1/completions
GENERIC_ENABLED=false

# Agent Configuration
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini,xai_grok
MAX_RETRIES=3
REQUEST_TIMEOUT=30
LOG_LEVEL=INFO
```

**YAML Configuration (config.yaml):**

```yaml
providers:
  openai:
    model: gpt-4
    enabled: true
  google_gemini:
    model: gemini-pro
    enabled: true

agent:
  default_provider: openai
  fallback_providers:
    - google_gemini
    - xai_grok
  max_retries: 3
  timeout: 30

logging:
  level: INFO
  format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
```

### CLI Commands

```bash
# Execute with default provider
python -m nexora_agent.cli run "Your prompt"

# Execute with specific provider
python -m nexora_agent.cli run "Your prompt" --provider google_gemini --model gemini-pro

# Test provider
python -m nexora_agent.cli test-provider --provider openai

# Check provider status
python -m nexora_agent.cli status

# List available providers
python -m nexora_agent.cli list
```

### Python API

```python
from nexora_agent import NexoraAgent
from nexora_agent.config import ConfigLoader

# Initialize with default config
agent = NexoraAgent()

# Execute request
response = agent.execute(
    "Explain quantum computing",
    provider="openai",
    model="gpt-4",
    temperature=0.7,
    max_tokens=1000
)

# Handle response
if response.success:
    print(f"Provider: {response.provider}")
    print(f"Text: {response.text}")
    print(f"Time: {response.metadata['execution_time']}s")
    if 'tokens_used' in response.metadata:
        print(f"Tokens: {response.metadata['tokens_used']}")
else:
    print(f"Error: {response.error}")

# Check provider status
status = agent.get_provider_status()
for provider, info in status.items():
    print(f"{provider}: enabled={info['enabled']}, configured={info['configured']}")
```

### MCP CLI Commands

```bash
# Deploy environment configuration
python -m nexora_agent.mcp_cli.mcp_cli deploy --env prod

# Trigger GitHub Actions workflow
python -m nexora_agent.mcp_cli.mcp_cli workflow build-agent

# Run tests
python -m nexora_agent.mcp_cli.mcp_cli test --component agent

# Health check
python -m nexora_agent.mcp_cli.mcp_cli health https://nexorasim.github.io
```

### Installation Steps

```bash
# Clone repository
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io/agent

# Create virtual environment
python -m venv venv

# Activate (Linux/macOS)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Test installation
python -m nexora_agent.cli status
python -m nexora_agent.cli run "Hello, test the agent"
```

---

## 3. Desktop GUI - Detailed Specification

### Technology Choice: PySide6

**Justification:**
- **Cross-Platform**: Single codebase for Windows, macOS, Linux
- **License**: LGPL (commercial-friendly, no runtime fees)
- **Ecosystem**: Official Qt binding with long-term support
- **PyInstaller**: Excellent compatibility for standalone executables
- **Modern**: Qt6 features (high DPI support, better performance)

**Alternative Considered:** PyQt5
- Rejected due to GPL licensing requirements or commercial license costs

### GUI Architecture

```
┌────────────────────────────────────────┐
│     NexoraGUI (QMainWindow)            │
├────────────────────────────────────────┤
│  - Provider Selector (QComboBox)       │
│  - Prompt Input (QTextEdit)            │
│  - Execute Button (QPushButton)        │
│  - Response Display (QTextEdit)        │
│  - Status Bar (QStatusBar)             │
└───────────────┬────────────────────────┘
                │
                │ imports
                ▼
┌────────────────────────────────────────┐
│   AgentWorker (QThread)                │
│   - Background execution               │
│   - Signal/slot communication          │
└───────────────┬────────────────────────┘
                │
                │ uses
                ▼
┌────────────────────────────────────────┐
│   NexoraAgent (from agent package)     │
│   - No GUI-specific logic              │
└────────────────────────────────────────┘
```

### Features

- Provider selection dropdown (OpenAI, Gemini, Grok, Generic)
- Multi-line prompt input area
- Execute button with loading state
- Response display with syntax highlighting (future)
- Metadata display (provider, execution time, tokens used)
- Status bar with real-time updates
- Error dialogs with detailed messages
- Cross-platform UI with Fusion style

### PyInstaller Configuration

**nexora_agent.spec:**

```python
# -*- mode: python ; coding: utf-8 -*-

a = Analysis(
    ['main.py'],
    pathex=[],
    binaries=[],
    datas=[
        ('../agent/nexora_agent', 'agent/nexora_agent'),
    ],
    hiddenimports=[
        'nexora_agent',
        'nexora_agent.core',
        'nexora_agent.providers',
        'nexora_agent.config',
        'openai',
        'google.generativeai',
        'requests',
        'dotenv',
        'yaml',
    ],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=None,
    noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=None)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name='NexoraAgent',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,  # No console window
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=None,  # Add icon path if available
)

# For macOS
coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='NexoraAgent',
)
```

### Building Instructions

**Windows:**

```bash
cd gui
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
pip install -r ..\agent\requirements.txt
pyinstaller nexora_agent.spec

# Output: dist\NexoraAgent\NexoraAgent.exe
```

**macOS:**

```bash
cd gui
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install -r ../agent/requirements.txt
pyinstaller nexora_agent.spec

# Output: dist/NexoraAgent.app
```

**Linux:**

```bash
cd gui
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install -r ../agent/requirements.txt
pyinstaller nexora_agent.spec

# Output: dist/NexoraAgent/NexoraAgent
```

### Distribution

**Windows:**
- Zip archive: `nexora-agent-windows.zip`
- Optional: Installer with Inno Setup or NSIS

**macOS:**
- Zip archive: `nexora-agent-macos.zip`
- Optional: DMG image with create-dmg
- Code signing recommended for distribution

**Linux:**
- Tar archive: `nexora-agent-linux.tar.gz`
- Optional: AppImage, .deb, or .rpm packages

---

## 4. Next.js Web Front-End - Detailed Specification

### Technology Choice: Next.js 14 with App Router

**Justification:**
- **App Router**: Latest Next.js architecture with React Server Components
- **Static Export**: Perfect for GitHub Pages deployment
- **TypeScript**: Built-in type safety and better developer experience
- **Performance**: Automatic optimization, code splitting, image optimization
- **SEO**: Built-in metadata management
- **Future-Proof**: Official Next.js direction going forward

**Alternative Considered:** Pages Router
- Rejected in favor of modern App Router for long-term support

### Package Manager: npm

**Justification:**
- Default for Next.js, widest compatibility
- Most stable and predictable
- Best documented
- GitHub Actions has best support

### Architecture

```
┌────────────────────────────────────────┐
│        Next.js Application             │
├────────────────────────────────────────┤
│  Pages:                                │
│    - / (Landing)                       │
│    - /console (Agent Console)          │
├────────────────────────────────────────┤
│  Components (future):                  │
│    - Header                            │
│    - Footer                            │
│    - ProviderSelector                  │
│    - PromptInput                       │
│    - ResponseDisplay                   │
└───────────────┬────────────────────────┘
                │
                │ HTTP API
                ▼
┌────────────────────────────────────────┐
│   Backend API (future deployment)     │
│   - Agent proxy                        │
│   - Authentication                     │
│   - Rate limiting                      │
└────────────────────────────────────────┘
```

### Pages

**Landing Page (/):**
- Overview of Nexora AI Agent Mode
- Feature highlights
- Deployment options
- Links to console and documentation

**Console Page (/console):**
- Provider selection dropdown
- Prompt textarea
- Execute button with loading state
- Response display with metadata
- Error handling

### Static Export Configuration

**next.config.js:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',  // Empty for root deployment
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Better for static hosting
}

module.exports = nextConfig
```

### Tailwind CSS Configuration

**tailwind.config.js:**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nexora-primary': '#2563eb',
        'nexora-secondary': '#7c3aed',
      },
    },
  },
  plugins: [],
}
```

### Installation and Build

```bash
# Install dependencies
cd web
npm install

# Development
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
# Output in: out/

# Test production build locally
npx serve out
```

### GitHub Pages Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

**Manual Deployment:**

```bash
cd web
npm run build

# If using gh-pages package
npm install -g gh-pages
gh-pages -d out
```

---

## 5. CI/CD with GitHub Actions

### Workflow Architecture

```
Git Push (main branch)
    │
    ├─→ CI Tests (ci.yml)
    │   ├─→ Lint Python (agent/)
    │   ├─→ Test Python (agent/)
    │   ├─→ Lint JavaScript (web/)
    │   └─→ Build Web (web/)
    │
    ├─→ Deploy Web (deploy-web.yml)
    │   ├─→ Build Next.js
    │   └─→ Deploy to GitHub Pages
    │
    └─→ Build Agent (build-agent.yml) [on release]
        ├─→ Test Agent
        ├─→ Build GUI (Windows)
        ├─→ Build GUI (macOS)
        ├─→ Build GUI (Linux)
        └─→ Upload to GitHub Releases
```

### Web Deployment Workflow

**File:** `.github/workflows/deploy-web.yml`

**Triggers:**
- Push to `main` branch (changes in `web/`)
- Manual dispatch

**Steps:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Build Next.js site
5. Upload artifact
6. Deploy to GitHub Pages

**Result:** Site available at https://nexorasim.github.io

### Agent and GUI Build Workflow

**File:** `.github/workflows/build-agent.yml`

**Triggers:**
- Push to `main` branch (changes in `agent/` or `gui/`)
- Pull requests
- Release creation

**Steps:**
1. **Test Agent:**
   - Install Python 3.11
   - Install dependencies
   - Run pytest with coverage

2. **Build GUI (Windows):**
   - Setup Python on Windows runner
   - Install dependencies
   - Run PyInstaller
   - Create zip archive
   - Upload artifact

3. **Build GUI (macOS):**
   - Setup Python on macOS runner
   - Install dependencies
   - Run PyInstaller
   - Create zip archive
   - Upload artifact

4. **Build GUI (Linux):**
   - Setup Python on Ubuntu runner
   - Install dependencies
   - Run PyInstaller
   - Create tar.gz archive
   - Upload artifact

5. **Create Release:**
   - Download all artifacts
   - Attach to GitHub Release

**Result:** Binaries available in GitHub Releases

### CI Testing Workflow

**File:** `.github/workflows/ci.yml`

**Triggers:**
- Push to `main` or `dev` branches
- Pull requests to `main`

**Steps:**
1. **Agent Tests:**
   - Lint with flake8
   - Run pytest
   - Upload coverage to Codecov

2. **Web Tests:**
   - Run ESLint
   - Build Next.js
   - Verify successful build

### GitHub Secrets Configuration

Required secrets for CI/CD (optional, for testing):

```
OPENAI_API_KEY        # For integration tests
GOOGLE_API_KEY        # For integration tests
XAI_API_KEY           # For integration tests
```

**Setting Secrets:**
1. Go to repository Settings
2. Navigate to Secrets and variables > Actions
3. Click "New repository secret"
4. Add each secret with appropriate value

---

## 6. Documentation Structure

### Required Documentation Files

**1. architecture.md**
- System overview
- Component descriptions
- Data flows
- Provider abstraction
- Technology stack
- Extension points
- Security considerations

**2. deployment.md**
- Prerequisites
- Local development setup
- Environment configuration
- Building instructions
- CI/CD setup
- Production deployment
- Rollback procedures
- Troubleshooting

**3. agent-mode.md**
- Concept explanation
- Supported providers
- Usage patterns (CLI, API, GUI, Web)
- Response format
- Best practices
- Extensibility
- Troubleshooting

**4. providers.md**
- Detailed provider configuration
- API key acquisition
- Rate limits and quotas
- Cost considerations
- Error codes and handling
- Multi-provider strategies
- Security best practices

**5. changelog.md**
- Version history
- Features added
- Bug fixes
- Breaking changes
- Migration guides

### Documentation Standards

- **Format**: Markdown
- **Style**: Clear, concise, technical
- **Language**: English only
- **Tone**: Professional, neutral
- **Code Examples**: Syntax-highlighted, complete, tested
- **Structure**: Hierarchical with clear headings
- **Links**: Relative links between docs

---

## 7. Security and Secrets Management

### API Key Handling

**Development:**
- Store in `.env` file (never commit)
- Use `.env.example` as template
- Document required keys

**Production:**
- Use GitHub Secrets for CI/CD
- Use environment variables on servers
- Consider secrets management services (AWS Secrets Manager, HashiCorp Vault)

**Rotation:**
- Set calendar reminders for key rotation
- Update in all environments
- Test after rotation
- Monitor for unauthorized usage

### Best Practices

1. **Never Commit Secrets**
   ```bash
   # .gitignore
   .env
   .env.*
   !.env.example
   ```

2. **Validate Configuration**
   ```bash
   # Check that secrets are not exposed
   git secrets --scan
   ```

3. **Use Environment-Specific Configs**
   ```bash
   .env.dev
   .env.staging
   .env.prod
   ```

4. **Audit Access**
   - Log all API key usage
   - Monitor for unusual patterns
   - Set up alerts for quota limits

---

## 8. Testing Strategy

### Agent Core Tests

**Location:** `/agent/tests/`

**Framework:** pytest

**Coverage:**
- Unit tests for each provider
- Configuration loading tests
- Agent orchestration tests
- Fallback mechanism tests
- Error handling tests

**Run Tests:**
```bash
cd agent
pytest tests/ -v --cov=nexora_agent --cov-report=term
```

### GUI Tests

**Current State:** Manual testing

**Future Enhancement:**
- Automated GUI testing with pytest-qt
- Screenshot-based regression testing
- Cross-platform CI testing

### Web Tests

**Framework:** Jest + React Testing Library (future)

**Coverage:**
- Component rendering tests
- API integration tests
- User interaction tests

**Run Tests:**
```bash
cd web
npm test
```

### Integration Tests

**Scope:**
- End-to-end provider tests
- CLI command tests
- MCP CLI workflow tests

**Requires:** Valid API keys (run manually or in secure CI environment)

---

## 9. Deployment Procedures

### Local Development Deployment

**1. Agent Core:**
```bash
cd agent
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env
python -m nexora_agent.cli status
```

**2. Desktop GUI:**
```bash
cd gui
source venv/bin/activate
pip install -r requirements.txt
pip install -r ../agent/requirements.txt
python main.py
```

**3. Web Front-End:**
```bash
cd web
npm install
npm run dev
# Access http://localhost:3000
```

### Production Web Deployment

**Automatic (Recommended):**
1. Push changes to `main` branch
2. GitHub Actions automatically builds and deploys
3. Access https://nexorasim.github.io

**Manual:**
```bash
cd web
npm run build
gh-pages -d out
```

### Desktop Binary Release

**Automatic (Recommended):**
1. Create release tag:
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0
   ```
2. GitHub Actions builds binaries for all platforms
3. Binaries attached to GitHub Release

**Manual:**
```bash
# Windows
cd gui
pyinstaller nexora_agent.spec
# Upload dist/NexoraAgent/ to releases

# macOS
cd gui
pyinstaller nexora_agent.spec
# Upload dist/NexoraAgent.app to releases

# Linux
cd gui
pyinstaller nexora_agent.spec
# Upload dist/NexoraAgent/ to releases
```

### Environment Configuration Management

**Using MCP CLI:**
```bash
# Apply development config
python -m nexora_agent.mcp_cli.mcp_cli deploy --env dev

# Apply staging config
python -m nexora_agent.mcp_cli.mcp_cli deploy --env staging

# Apply production config
python -m nexora_agent.mcp_cli.mcp_cli deploy --env prod
```

### Verification Steps

**After Web Deployment:**
```bash
# Check site is accessible
curl -I https://nexorasim.github.io

# Using MCP CLI
python -m nexora_agent.mcp_cli.mcp_cli health https://nexorasim.github.io
```

**After Agent Update:**
```bash
# Test CLI
python -m nexora_agent.cli status
python -m nexora_agent.cli test-provider --provider openai

# Run test suite
pytest tests/ -v
```

**After GUI Release:**
1. Download binary from GitHub Releases
2. Run on clean system (no Python installed)
3. Test all providers
4. Verify .env file handling

---

## 10. Rollback Procedures

### Web Front-End Rollback

**Method 1: Revert Commit**
```bash
git revert <bad-commit-hash>
git push origin main
# Wait for automatic redeployment
```

**Method 2: Deploy Previous Version**
```bash
git checkout <previous-good-tag>
cd web
npm run build
gh-pages -d out
git checkout main
```

### Agent Core Rollback

```bash
# Checkout previous version
git checkout <previous-good-tag>

# Reinstall dependencies
cd agent
pip install -r requirements.txt

# Test
python -m nexora_agent.cli status
```

### Desktop Binaries Rollback

- Users download previous version from GitHub Releases
- GitHub Releases are immutable and permanent
- Previous versions always available

### Configuration Rollback

```bash
# Revert to previous environment config
python -m nexora_agent.mcp_cli.mcp_cli deploy --env prod

# Or manually:
cd agent
cp .env.prod.backup .env
```

---

## 11. Monitoring and Maintenance

### Metrics to Track

**Agent Performance:**
- Provider response times
- Success/failure rates by provider
- Token usage and costs
- Error frequency and types
- Fallback activation rate

**Web Performance:**
- Page load times
- Error rates
- Geographic distribution
- Browser compatibility

**System Health:**
- API key quota usage
- Provider availability
- Service uptime
- Error logs

### Logging

**Agent Logging:**
```python
# Configured via LOG_LEVEL environment variable
# Default format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"

# Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL

# Example log output:
2025-01-24 10:30:15 - nexora_agent - INFO - Executing request with provider: openai
2025-01-24 10:30:17 - nexora_agent - INFO - Request succeeded with openai on attempt 1
```

**Future Enhancements:**
- Structured logging (JSON format)
- Log aggregation (ELK stack, Splunk)
- Real-time monitoring (Datadog, New Relic)
- Error tracking (Sentry)

### Maintenance Tasks

**Weekly:**
- Review error logs
- Check provider status pages
- Verify API key quotas
- Monitor costs

**Monthly:**
- Update dependencies
- Review and rotate API keys
- Analyze usage patterns
- Update documentation

**Quarterly:**
- Security audit
- Performance optimization review
- User feedback analysis
- Dependency vulnerability scan

---

## 12. Troubleshooting Guide

### Common Issues

**Issue: "Provider not configured"**

Solution:
```bash
# 1. Verify .env file exists
ls -la agent/.env

# 2. Check API key is set
grep OPENAI_API_KEY agent/.env

# 3. Verify provider is enabled
grep OPENAI_ENABLED agent/.env

# 4. Test provider
python -m nexora_agent.cli test-provider --provider openai
```

**Issue: PyInstaller build fails**

Solution:
```bash
# 1. Clear previous builds
rm -rf gui/build gui/dist

# 2. Reinstall PyInstaller
pip uninstall pyinstaller
pip install pyinstaller==6.3.0

# 3. Check spec file
cat gui/nexora_agent.spec

# 4. Rebuild with verbose output
cd gui
pyinstaller --clean nexora_agent.spec
```

**Issue: Next.js deployment fails**

Solution:
```bash
# 1. Clear cache
rm -rf web/.next web/out web/node_modules

# 2. Reinstall dependencies
cd web
npm install

# 3. Test local build
npm run build

# 4. Check GitHub Actions logs for specific error
```

**Issue: All providers failing**

Solution:
```bash
# 1. Check network connectivity
ping api.openai.com
ping generativelanguage.googleapis.com

# 2. Verify API keys
python -m nexora_agent.cli status

# 3. Test each provider individually
python -m nexora_agent.cli test-provider --provider openai
python -m nexora_agent.cli test-provider --provider google_gemini

# 4. Check provider status pages
# OpenAI: https://status.openai.com
# Google: https://status.cloud.google.com
```

### Getting Help

- **Documentation**: Check `/docs/` directory
- **GitHub Issues**: Create detailed issue report
- **GitHub Discussions**: Ask questions
- **Provider Support**: Contact provider directly for API issues

---

## 13. Conclusion

This deployment blueprint provides a complete, implementation-ready guide for deploying the Nexora AI Agent Mode platform. All components are designed with enterprise-grade requirements in mind:

- **Reproducibility**: All builds are automated and version-controlled
- **Auditability**: Comprehensive logging and documentation
- **Reliability**: Multi-provider fallback and error handling
- **Maintainability**: Clear separation of concerns and extensibility
- **Security**: Best practices for secrets management

### Next Steps

1. **Initial Setup:**
   - Clone repository
   - Configure environment variables
   - Test agent locally

2. **Development:**
   - Set up development environment
   - Run tests
   - Make changes incrementally

3. **Deployment:**
   - Push to main branch for automatic web deployment
   - Create release tag for binary builds
   - Verify deployments

4. **Maintenance:**
   - Monitor logs and metrics
   - Update dependencies regularly
   - Rotate API keys
   - Respond to user feedback

### Support and Resources

- **Repository**: https://github.com/nexorasim/nexorasim.github.io
- **Documentation**: https://nexorasim.github.io
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

---

**Document Version**: 1.0.0  
**Last Updated**: 2025-01-24  
**Organization**: NexoraSIM  
**Contact**: Via GitHub repository

Built for enterprise deployments with audit-first, reproducible workflows.
