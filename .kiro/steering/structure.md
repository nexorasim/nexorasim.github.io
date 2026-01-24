# Project Structure & Organization

## Repository Layout

This is a **monorepo** containing multiple related components:

```
nexorasim.github.io/
├── agent/                 # Python AI Agent core (main component)
├── gui/                   # Desktop GUI application
├── web/                   # Next.js web frontend
├── docs/                  # Comprehensive documentation
├── .github/workflows/     # CI/CD pipelines
├── .kiro/steering/        # AI assistant steering rules
├── memory/                # Project requirements and planning
├── scripts/               # Utility scripts
├── .gitignore             # Git ignore patterns
├── LICENSE                # Project license
├── README.md              # Main project documentation
└── DEPLOYMENT_BLUEPRINT.md # Complete deployment guide
```

## Component Details

### `/agent/` - Python AI Agent Core
**Purpose**: Multi-provider AI orchestration engine (heart of the system)

```
agent/
├── nexora_agent/          # Main Python package
│   ├── core/              # Agent orchestration logic
│   │   └── agent.py       # Main agent class
│   ├── providers/         # Provider adapters
│   │   ├── base.py        # Abstract base provider
│   │   ├── openai_provider.py
│   │   ├── google_gemini.py
│   │   ├── xai_grok.py
│   │   ├── generic_http.py
│   │   └── provider_factory.py
│   ├── config/            # Configuration management
│   │   └── config_loader.py
│   ├── mcp_cli/           # MCP-style deployment CLI
│   │   └── mcp_cli.py
│   └── cli.py             # Command-line interface
├── tests/                 # Unit tests
├── requirements.txt       # Python dependencies
├── .env.example           # Environment template
└── config.yaml.example    # YAML config template
```

### `/gui/` - Desktop Application
**Purpose**: Cross-platform GUI wrapper for the agent

```
gui/
├── main.py                # GUI entry point (PySide6)
├── nexora_agent.spec      # PyInstaller configuration
├── build.sh               # Build script
└── requirements.txt       # GUI-specific dependencies
```

### `/web/` - Web Frontend
**Purpose**: Modern web interface deployed to GitHub Pages

```
web/
├── app/                   # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Global styles
│   └── console/           # Agent console page
│       └── page.tsx
├── package.json           # Dependencies and scripts
├── package-lock.json      # npm lock file
├── yarn.lock              # yarn lock file (alternative)
├── next.config.js         # Next.js configuration (static export)
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── tsconfig.json          # TypeScript configuration
```

### `/docs/` - Documentation
**Purpose**: Comprehensive technical documentation

```
docs/
├── architecture.md        # System design and components
├── deployment.md          # Setup and deployment guide
├── agent-mode.md          # Usage patterns and concepts
├── providers.md           # Provider configuration details
└── changelog.md           # Version history
```

### `/.github/workflows/` - CI/CD
**Purpose**: Automated build and deployment pipelines

```
.github/workflows/
├── deploy-web.yml         # Web deployment to GitHub Pages
├── build-agent.yml        # Agent/GUI builds for releases
└── ci.yml                 # Tests and linting
```

## Architecture Patterns

### Provider Abstraction
All AI providers implement the `BaseProvider` interface for uniform handling:
- Consistent response format across providers
- Easy addition of new providers
- Provider switching without code changes
- Automatic fallback mechanisms

### Separation of Concerns
- **Agent Core**: Pure business logic, no UI dependencies
- **GUI**: Presentation layer only, imports agent core
- **Web**: Static frontend, communicates via HTTP API (future)
- **Documentation**: Comprehensive guides separate from code

### Configuration Management
- Environment variables via `.env` files
- Optional YAML configuration for complex setups
- Environment-specific configs (dev, staging, prod)
- MCP CLI for deployment automation

## File Naming Conventions

### Python Files
- **Modules**: snake_case (e.g., `config_loader.py`)
- **Classes**: PascalCase (e.g., `NexoraAgent`)
- **Functions**: snake_case (e.g., `execute_request`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_TIMEOUT`)

### Web Files
- **Components**: PascalCase (e.g., `ProviderSelector.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `apiClient.ts`)
- **Styles**: kebab-case (e.g., `globals.css`)

### Configuration Files
- **Environment**: `.env`, `.env.example`, `.env.prod`
- **Config**: `config.yaml.example`, `next.config.js`
- **Build**: `requirements.txt`, `package.json`, `nexora_agent.spec`

## Import Patterns

### Python Imports
```python
# Standard library first
import os
import logging

# Third-party packages
import openai
import requests

# Local imports
from nexora_agent.core import NexoraAgent
from nexora_agent.providers.base import BaseProvider
```

### TypeScript Imports
```typescript
// React and Next.js
import React from 'react'
import { NextPage } from 'next'

// Third-party libraries
import axios from 'axios'

// Local components and utilities
import { ProviderSelector } from '@/components/ProviderSelector'
import { apiClient } from '@/utils/apiClient'
```

## Testing Structure

### Python Tests
- **Location**: `agent/tests/`
- **Framework**: pytest
- **Coverage**: Unit tests for each provider and core functionality
- **Naming**: `test_*.py` files with `test_*` functions

### Future Web Tests
- **Framework**: Jest + React Testing Library
- **Location**: `web/__tests__/` or `web/tests/`
- **Coverage**: Component rendering and API integration

## Documentation Standards

- **Format**: Markdown (.md files)
- **Style**: Clear, technical, enterprise-grade
- **Language**: English only
- **Tone**: Professional, neutral, no emojis
- **Code Examples**: Syntax-highlighted, complete, tested
- **Structure**: Hierarchical headings with clear navigation