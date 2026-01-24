# Technology Stack & Build System

## Core Technologies

### Python Agent Core
- **Python**: 3.11+ (modern features, type hints, performance)
- **Dependency Management**: pip with requirements.txt (standard, reproducible)
- **Configuration**: Environment variables (.env) + optional YAML
- **Logging**: Python standard logging module
- **Testing**: pytest with coverage reporting

### Desktop GUI
- **Framework**: PySide6 (Qt for Python) - LGPL license, cross-platform
- **Packaging**: PyInstaller 6.3.0+ for standalone executables
- **Platforms**: Windows, macOS, Linux

### Web Frontend
- **Framework**: Next.js 14 with App Router (modern architecture)
- **Language**: TypeScript 5.3.3+ (type safety)
- **Styling**: Tailwind CSS 3.4.1 (utility-first)
- **HTTP Client**: Axios 1.6.5 (promise-based)
- **Package Managers**: npm (primary) or yarn (alternative)

### CI/CD & Deployment
- **CI/CD**: GitHub Actions (native integration)
- **Web Hosting**: GitHub Pages (free, automatic deployment)
- **Binary Distribution**: GitHub Releases

## Common Commands

### Agent Development
```bash
# Setup
cd agent
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Configuration
cp .env.example .env
# Edit .env with API keys

# Testing
pytest tests/ -v --cov=nexora_agent
python -m nexora_agent.cli status
python -m nexora_agent.cli test-provider --provider openai

# Code Quality
black nexora_agent/  # Format code
ruff check nexora_agent/  # Lint code
mypy nexora_agent/  # Type checking

# Usage
python -m nexora_agent.cli run "Your prompt"
python -m nexora_agent.cli run "Your prompt" --provider google_gemini
python -m nexora_agent.cli list  # List available providers
```

### Desktop GUI
```bash
# Setup
cd gui
pip install -r requirements.txt
pip install -r ../agent/requirements.txt

# Development
python main.py

# Building
pyinstaller nexora_agent.spec
# Output: dist/NexoraAgent/
```

### Web Frontend
```bash
# Setup (npm - recommended)
cd web
npm install

# Setup (yarn - alternative)
cd web
yarn install

# Development
npm run dev
# or
yarn dev
# Open http://localhost:3000

# Building
npm run build
# or
yarn build
# Output: out/

# Linting & Type Checking
npm run lint
# or
yarn lint
npx tsc --noEmit  # Type check without emitting files

# Testing (future)
npm test
# or
yarn test
```

### MCP CLI Operations
```bash
# Environment management
python -m nexora_agent.mcp_cli.mcp_cli deploy --env prod

# Workflow automation
python -m nexora_agent.mcp_cli.mcp_cli workflow build-agent

# Health checks
python -m nexora_agent.mcp_cli.mcp_cli health https://nexorasim.github.io
```

## Key Dependencies

### Python (agent/requirements.txt)
- openai==1.13.3 (OpenAI API client)
- google-generativeai==0.4.1 (Google Gemini API)
- requests==2.31.0 (HTTP client for generic providers)
- urllib3==2.2.1 (HTTP library dependency)
- python-dotenv==1.0.1 (environment variable loading)
- PyYAML==6.0.1 (YAML configuration support)
- pydantic==1.10.14 (data validation)

### Python Dev Tools (agent/requirements.txt)
- pytest==7.4.4 (testing framework)
- black==24.2.0 (code formatting)
- ruff==0.2.2 (fast Python linter)
- mypy==1.8.0 (static type checking)
- types-PyYAML==6.0.12.12 (type stubs for PyYAML)

### GUI (gui/requirements.txt)
- PySide6>=6.6.0 (Qt for Python)
- PyInstaller>=6.3.0 (executable packaging)

### Web (web/package.json)
- next==14.1.0 (React framework)
- react==^18.2.0 (UI library)
- react-dom==^18.2.0 (React DOM renderer)
- typescript==^5.3.3 (type system)
- tailwindcss==^3.4.1 (CSS framework)
- axios==^1.6.5 (HTTP client)

### Web Dev Tools (web/package.json)
- @types/node==^20.11.5 (Node.js type definitions)
- @types/react==^18.2.48 (React type definitions)
- @types/react-dom==^18.2.18 (React DOM type definitions)
- autoprefixer==^10.4.17 (CSS vendor prefixing)
- eslint==^8.56.0 (JavaScript/TypeScript linting)
- eslint-config-next==14.1.0 (Next.js ESLint configuration)
- postcss==^8.4.33 (CSS processing)

## Build Configurations

### PyInstaller (nexora_agent.spec)
- Single-file executable with embedded dependencies
- Cross-platform compatibility
- Hidden imports for dynamic loading
- No console window for GUI mode

### Next.js (next.config.js)
- Static export for GitHub Pages
- Image optimization disabled for static hosting
- Trailing slash for better static hosting compatibility

### Tailwind (tailwind.config.js)
- Custom color scheme with nexora-primary and nexora-secondary
- Utility-first approach for rapid development

## Environment Setup

### Prerequisites
- Python 3.11+ with pip
- Node.js 20+ with npm or yarn
- Git for version control

### Development Tools (Recommended)
- **Code Editor**: VS Code with Python and TypeScript extensions
- **Python Tools**: Black (formatting), Ruff (linting), MyPy (type checking)
- **Node.js Tools**: ESLint (linting), Prettier (formatting)
- **Version Control**: Git with conventional commit messages

### Virtual Environment Best Practices
```bash
# Always use virtual environments for Python development
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Verify Python version
python --version  # Should be 3.11+

# Upgrade pip to latest version
python -m pip install --upgrade pip
```

### Common Environment Variables
```bash
# Required for agent functionality
OPENAI_API_KEY=sk-...
GOOGLE_API_KEY=AIza...
XAI_API_KEY=xai-...
GENERIC_API_KEY=...
GENERIC_ENDPOINT=https://your-api.com/v1/completions

# Optional configuration
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini,xai_grok
LOG_LEVEL=INFO
MAX_RETRIES=3
REQUEST_TIMEOUT=30

# Provider-specific settings
OPENAI_MODEL=gpt-4
OPENAI_ENABLED=true
GEMINI_MODEL=gemini-pro
GEMINI_ENABLED=true
XAI_MODEL=grok-1
XAI_ENABLED=false
XAI_ENDPOINT=https://api.x.ai/v1
GENERIC_ENABLED=false
```

## Troubleshooting

### GitHub Actions Issues
```bash
# Check workflow status
gh workflow list
gh run list --workflow=ci.yml

# View specific run logs
gh run view <run-id>

# Re-run failed workflows
gh run rerun <run-id>
```

### Python Issues
```bash
# Module not found errors
pip install -r requirements.txt
pip list  # Verify installations

# Import errors
export PYTHONPATH="${PYTHONPATH}:$(pwd)"  # Add current dir to path

# Virtual environment issues
deactivate && source venv/bin/activate  # Restart venv

# Linting issues
ruff check nexora_agent --fix  # Auto-fix issues
black nexora_agent  # Format code
mypy nexora_agent  # Type checking
```

### Node.js Issues
```bash
# Dependency conflicts (npm)
rm -rf node_modules package-lock.json
npm install

# Dependency conflicts (yarn)
rm -rf node_modules yarn.lock
yarn install

# Build failures
npm run build -- --verbose  # Verbose output
npm cache clean --force      # Clear npm cache
# or
yarn build --verbose
yarn cache clean
```

### GUI Build Issues
```bash
# PyInstaller failures
pip install --upgrade pyinstaller
pyinstaller --clean nexora_agent.spec  # Clean build

# Missing dependencies
pip install -r requirements.txt -r ../agent/requirements.txt
```

## CI/CD Best Practices

### Workflow Triggers
- **CI Tests**: Run on all pushes and pull requests
- **Web Deployment**: Only on main branch changes to web/ directory
- **Agent Builds**: Only on releases for binary distribution
- **Manual Triggers**: Available via workflow_dispatch for all workflows

### Dependency Management
- Use exact versions in requirements.txt for reproducible builds
- Cache dependencies in GitHub Actions for faster builds
- Separate dev dependencies from production dependencies

### Security
- Never commit API keys or secrets
- Use GitHub Secrets for sensitive environment variables
- Rotate secrets regularly and update in repository settings

### Monitoring
- Check GitHub Actions status regularly
- Set up notifications for failed workflows
- Monitor deployment status on GitHub Pages