# NexoraSIM - Nexora AI Agent Mode

**Enterprise-grade AI deployment and orchestration platform**

Public entry point: [https://nexorasim.github.io](https://nexorasim.github.io)

## Overview

Nexora AI Agent Mode is a multi-provider AI orchestration platform designed for enterprise deployments with audit-first, reproducible workflows. The system provides seamless integration with OpenAI, Google Gemini, xAI Grok, and custom AI providers through a unified interface.

## Architecture

This is a monorepo containing:

- **Python AI Agent Core** (`/agent/`): Multi-provider orchestration engine
- **Desktop GUI** (`/gui/`): Cross-platform application with PyInstaller
- **Web Front-End** (`/web/`): Next.js + TypeScript console
- **Documentation** (`/docs/`): Comprehensive guides and references
- **CI/CD** (`.github/workflows/`): Automated build and deployment

## Quick Start

### Prerequisites

- Python 3.11+
- Node.js 20+
- Git

### Agent Core

```bash
cd agent
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API keys
python -m nexora_agent.cli run "Test prompt"
```

### Desktop GUI

```bash
cd gui
pip install -r requirements.txt
pip install -r ../agent/requirements.txt
python main.py
```

### Web Front-End

```bash
cd web
npm install
npm run dev
# Open http://localhost:3000
```

## Features

- Multi-provider AI integration (OpenAI, Gemini, Grok, custom)
- Automatic fallback and retry mechanisms
- Cross-platform desktop application
- Modern web console
- MCP-style deployment automation
- CI/CD with GitHub Actions
- Comprehensive documentation
- Audit-ready logging
- Enterprise-grade architecture

## Documentation

- [Architecture](docs/architecture.md): System design and components
- [Deployment](docs/deployment.md): Setup and deployment guide
- [Agent Mode](docs/agent-mode.md): Usage and concepts
- [Providers](docs/providers.md): Provider configuration
- [Changelog](docs/changelog.md): Version history

## Repository Structure

```
nexorasim.github.io/
├── agent/                 # Python AI Agent core
│   ├── nexora_agent/      # Main package
│   │   ├── core/          # Agent orchestration
│   │   ├── providers/     # Provider adapters
│   │   ├── config/        # Configuration management
│   │   └── mcp_cli/       # MCP-style CLI
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
├── gui/                   # Desktop GUI
│   ├── main.py            # GUI entry point
│   ├── nexora_agent.spec  # PyInstaller config
│   ├── requirements.txt
│   └── README.md
├── web/                   # Next.js front-end
│   ├── app/               # Next.js App Router
│   ├── package.json
│   ├── next.config.js
│   └── README.md
├── docs/                  # Documentation
│   ├── architecture.md
│   ├── deployment.md
│   ├── agent-mode.md
│   ├── providers.md
│   └── changelog.md
├── .github/
│   └── workflows/         # CI/CD pipelines
│       ├── deploy-web.yml
│       ├── build-agent.yml
│       └── ci.yml
└── README.md              # This file
```

## Deployment

### Web Front-End

Automatically deployed to GitHub Pages on push to `main` branch.

Access at: [https://nexorasim.github.io](https://nexorasim.github.io)

### Desktop Binaries

Built automatically on release creation. Download from:
[GitHub Releases](https://github.com/nexorasim/nexorasim.github.io/releases)

### Agent Core

Install via pip (future) or clone repository and install dependencies.

## Configuration

All components use environment variables for configuration:

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

# Agent Settings
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini,xai_grok
MAX_RETRIES=3
REQUEST_TIMEOUT=30
LOG_LEVEL=INFO
```

See [Provider Configuration Guide](docs/providers.md) for details.

## Usage

### Command Line

```bash
# Run with default provider
nexora-agent run "Your prompt here"

# Specify provider
nexora-agent run "Your prompt" --provider google_gemini

# Test provider
nexora-agent test-provider --provider openai

# Check status
nexora-agent status
```

### Python API

```python
from nexora_agent import NexoraAgent

agent = NexoraAgent()
response = agent.execute("Your prompt", provider="openai")

if response.success:
    print(response.text)
else:
    print(f"Error: {response.error}")
```

### MCP CLI

```bash
# Deploy configuration
nexora-mcp deploy --env prod

# Trigger workflow
nexora-mcp workflow build-agent

# Run tests
nexora-mcp test --component agent

# Health check
nexora-mcp health https://nexorasim.github.io
```

## Development

### Running Tests

```bash
# Agent tests
cd agent
pytest tests/

# Web tests
cd web
npm test
```

### Building Binaries

```bash
# Desktop GUI
cd gui
pyinstaller nexora_agent.spec
# Output: dist/NexoraAgent/
```

### Building Web

```bash
cd web
npm run build
# Output: out/
```

## Contributing

Contributions are welcome. Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

See individual component README files for specific guidelines.

## License

See [LICENSE](LICENSE) file for details.

## Support

- Documentation: [https://nexorasim.github.io](https://nexorasim.github.io)
- Issues: [GitHub Issues](https://github.com/nexorasim/nexorasim.github.io/issues)
- Discussions: [GitHub Discussions](https://github.com/nexorasim/nexorasim.github.io/discussions)

## Organization

**NexoraSIM**
- Operating Model: Hybrid cloud, audit-first, reproducible deployments
- Language: English-only for all technical artifacts
- Style: Neutral, reusable, enterprise-grade

## Acknowledgments

- OpenAI for GPT models
- Google for Gemini models
- xAI for Grok models
- Open source community for tools and libraries

---

Built with enterprise deployments in mind | NexoraSIM 2025
