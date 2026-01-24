# Nexora AI Agent Mode - Architecture

## Overview

Nexora AI Agent Mode is an enterprise-grade AI deployment and orchestration platform designed for multi-provider AI integration with audit-first, reproducible deployments.

## System Architecture

### Components

#### 1. Python AI Agent Core

The core orchestration layer that manages multi-provider AI interactions.

**Location:** `/agent/nexora_agent/`

**Key Modules:**

- `core/agent.py`: Main agent orchestration logic
- `providers/`: Provider adapters for different AI backends
  - `openai_provider.py`: OpenAI GPT integration
  - `google_gemini.py`: Google Gemini integration
  - `xai_grok.py`: xAI Grok integration
  - `generic_http.py`: Generic HTTP API adapter
- `config/`: Configuration management
- `mcp_cli/`: MCP-style deployment automation

**Architecture Pattern:**

```
┌─────────────────────────────────────────┐
│         Nexora Agent Core               │
├─────────────────────────────────────────┤
│  Agent Orchestrator                     │
│  - Request routing                      │
│  - Fallback logic                       │
│  - Retry mechanisms                     │
└──────────────┬──────────────────────────┘
               │
    ┌──────────┴───────────┐
    │ Provider Factory      │
    └──────────┬───────────┘
               │
    ┌──────────┴────────────────────┐
    │                               │
┌───▼────┐  ┌──────┐  ┌──────┐  ┌────────┐
│ OpenAI │  │Gemini│  │ Grok │  │Generic │
│Provider│  │Provid│  │Provid│  │  HTTP  │
└────────┘  └──────┘  └──────┘  └────────┘
```

**Provider Abstraction:**

All providers implement the `BaseProvider` interface:

```python
class BaseProvider(ABC):
    @abstractmethod
    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        pass
```

This ensures:
- Uniform response format across all providers
- Easy addition of new providers
- Provider switching without code changes

#### 2. Desktop GUI

**Location:** `/gui/`

**Framework:** PySide6 (Qt for Python)

**Justification for PySide6:**
- Cross-platform support (Windows, macOS, Linux)
- LGPL license (commercial-friendly)
- Official Qt binding with long-term support
- Excellent PyInstaller compatibility
- Modern Qt6 features

**Architecture:**

```
┌─────────────────────────────────────┐
│     GUI Layer (PySide6)             │
│  - Main Window                      │
│  - Provider Selector                │
│  - Prompt Input                     │
│  - Response Display                 │
└──────────────┬──────────────────────┘
               │
               │ imports
               │
┌──────────────▼──────────────────────┐
│   Nexora Agent Core                 │
│   (No GUI-specific logic)           │
└─────────────────────────────────────┘
```

**Separation of Concerns:**
- GUI handles only presentation and events
- All AI logic remains in the agent core
- No provider-specific code in GUI layer

#### 3. Next.js Web Front-End

**Location:** `/web/`

**Framework:** Next.js 14 with App Router

**Justification for App Router:**
- Latest stable architecture from Next.js
- Better performance with React Server Components
- Improved routing and layouts
- Enhanced static export capabilities
- Future-proof for ongoing Next.js development

**Package Manager:** npm (default, most stable for Next.js)

**Architecture:**

```
┌─────────────────────────────────────┐
│      Next.js Frontend               │
│  Pages:                             │
│    - Home (/)                       │
│    - Console (/console)             │
└──────────────┬──────────────────────┘
               │
               │ HTTP API calls
               │
┌──────────────▼──────────────────────┐
│   Backend API (Future)              │
│   - Agent proxy endpoint            │
│   - Authentication                  │
│   - Rate limiting                   │
└─────────────────────────────────────┘
```

**Static Export Configuration:**
- Configured for GitHub Pages deployment
- Optimized image handling
- Client-side API integration pattern

#### 4. MCP-Style CLI

**Location:** `/agent/nexora_agent/mcp_cli/`

**Purpose:** Deployment automation and operations

**Commands:**

```bash
# Environment management
nexora-mcp deploy --env prod

# Workflow automation
nexora-mcp workflow build-agent

# Testing
nexora-mcp test --component agent

# Health checks
nexora-mcp health https://nexorasim.github.io
```

**Integration with CI/CD:**
- Triggers GitHub Actions workflows via API
- Applies environment-specific configurations
- Runs post-deployment verification

### Data Flows

#### Request Flow (CLI/GUI)

```
User Input
    ↓
Agent.execute(prompt, provider)
    ↓
Provider Factory
    ↓
Specific Provider
    ↓
AI Backend API
    ↓
AgentResponse
    ↓
User Output
```

#### Request Flow (Web Console)

```
Browser (React)
    ↓ HTTP POST
Backend API Endpoint
    ↓
Agent.execute(prompt, provider)
    ↓
Provider Chain (same as above)
    ↓
JSON Response
    ↓
Browser Display
```

### Security and Secrets Handling

**API Keys:**
- Stored in `.env` files (never committed)
- Environment-specific files: `.env.dev`, `.env.staging`, `.env.prod`
- Loaded via `python-dotenv`
- Access via `os.environ.get()`

**Best Practices:**
- Never hardcode API keys
- Use GitHub Secrets for CI/CD
- Rotate keys regularly
- Audit key usage

### Extension Points

**Adding New Providers:**

1. Create new provider class in `nexora_agent/providers/`
2. Inherit from `BaseProvider`
3. Implement `execute()` method
4. Register in `ProviderFactory.PROVIDER_MAP`
5. Add configuration to `.env.example`

**Example:**

```python
class NewProvider(BaseProvider):
    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        # Implementation
        pass

# In provider_factory.py
PROVIDER_MAP = {
    "new_provider": NewProvider,
    # ...
}
```

## Technology Stack Summary

| Component | Technology | Version | Justification |
|-----------|-----------|---------|---------------|
| Agent Core | Python | 3.11+ | Modern features, type hints, performance |
| Dependency Mgmt | pip + requirements.txt | - | Standard, reproducible, CI/CD friendly |
| GUI Framework | PySide6 | 6.6.0+ | Cross-platform, LGPL, Qt6 features |
| GUI Packaging | PyInstaller | 6.3.0+ | Industry standard, platform-specific binaries |
| Web Framework | Next.js | 14.1.0 | App Router, static export, TypeScript |
| Web Language | TypeScript | 5.3.3+ | Type safety, better DX |
| CSS Framework | Tailwind CSS | 3.4.1 | Utility-first, rapid development |
| HTTP Client | Axios | 1.6.5 | Promise-based, interceptors |
| CI/CD | GitHub Actions | - | Native GitHub integration |
| Hosting | GitHub Pages | - | Free, automatic deployment |

## Deployment Architecture

### Environments

1. **Development (`dev`)**
   - Local machine
   - Mock providers for testing
   - Verbose logging

2. **Staging (`staging`)**
   - Pre-production testing
   - Real provider credentials (test accounts)
   - Monitoring enabled

3. **Production (`prod`)**
   - Public deployment
   - Production API keys
   - Rate limiting
   - Comprehensive logging and monitoring

### CI/CD Pipeline

```
Code Push (main branch)
    ↓
GitHub Actions Triggered
    ↓
┌─────────────────┬────────────────┐
│                 │                │
│  Web Build      │  Agent Tests   │
│  - npm install  │  - pip install │
│  - npm build    │  - pytest      │
│  - Static export│                │
│        ↓        │                │
│  GitHub Pages   │                │
└─────────────────┴────────────────┘
         ↓
   Deployment Complete
         ↓
   Post-deploy Checks
   (via MCP CLI)
```

### Rollback Strategy

**Web Front-End:**
1. GitHub Pages keeps history
2. Revert commit triggers new deployment
3. Or manually deploy previous `out/` artifact

**Desktop Binaries:**
1. GitHub Releases are immutable
2. Users can download previous versions
3. Tag-based versioning

**Agent Core:**
1. Git revert or checkout
2. Rebuild and redeploy
3. Environment config rollback via MCP CLI

## Monitoring and Observability

**Logging:**
- Structured logging with Python `logging` module
- Configurable log levels per environment
- Log format: `%(asctime)s - %(name)s - %(levelname)s - %(message)s`

**Metrics to Track:**
- Provider success/failure rates
- Average response times
- Token usage per provider
- Fallback frequency
- Error types and frequency

**Future Enhancements:**
- Integration with monitoring services (e.g., Sentry, Datadog)
- Real-time dashboards
- Alert systems for provider failures

## Scalability Considerations

**Current Architecture:**
- Single-instance agent (CLI/GUI)
- Stateless web front-end
- Can scale via multiple deployments

**Future Scaling:**
- Add backend API server (FastAPI/Flask)
- Implement request queuing (Redis/Celery)
- Load balancing across multiple agent instances
- Database for request history and analytics

## Conclusion

The Nexora AI Agent Mode architecture is designed for:
- **Flexibility:** Easy provider switching and addition
- **Reliability:** Fallback mechanisms and retry logic
- **Maintainability:** Clear separation of concerns
- **Scalability:** Extension points for future growth
- **Auditability:** Comprehensive logging and configuration management
