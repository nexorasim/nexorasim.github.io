# Getting Started with NexoraSIM

This guide will help you get started with NexoraSIM AI Agent Mode platform.

## Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.11 or higher
- Node.js 20 or higher
- Git
- npm or yarn (for NPM package)
- pip (Python package manager)

## Choose Your Platform

NexoraSIM supports multiple platforms. Choose the one that fits your needs:

### 1. NPM Package (Recommended for Node.js)

Best for: JavaScript/TypeScript applications, Node.js backends, web applications

```bash
npm install @nexorasim/nexora-agent
```

See [NPM Package Guide](NPM-Package-Guide) for details.

### 2. Python Agent

Best for: Python applications, CLI usage, scripting

```bash
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io/agent
pip install -r requirements.txt
```

See [Python Agent Guide](Python-Agent-Guide) for details.

### 3. Desktop GUI

Best for: Desktop users, visual interface, no coding required

```bash
cd gui
pip install -r requirements.txt
python main.py
```

See [Desktop GUI Guide](Desktop-GUI-Guide) for details.

### 4. Web Console

Best for: Browser-based access, quick testing, demos

Visit: https://nexorasim.github.io

See [Web Frontend Guide](Web-Frontend-Guide) for details.

## Quick Start: NPM Package

### Installation

```bash
npm install @nexorasim/nexora-agent
```

### Basic Usage

```typescript
import { NexoraAgent } from '@nexorasim/nexora-agent';

// Initialize agent
const agent = new NexoraAgent({
  defaultProvider: 'openai',
  providers: {
    openai: {
      enabled: true,
      apiKey: process.env.OPENAI_API_KEY,
      model: 'gpt-4'
    }
  }
});

// Execute request
const response = await agent.execute('Explain quantum computing');

if (response.success) {
  console.log(response.text);
  console.log(`Provider: ${response.provider}`);
  console.log(`Tokens: ${response.metadata.tokensUsed}`);
}
```

## Quick Start: Python Agent

### Installation

```bash
cd agent
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Configuration

```bash
cp .env.example .env
# Edit .env with your API keys
```

### Basic Usage

```python
from nexora_agent.core import NexoraAgent

# Initialize agent
agent = NexoraAgent()

# Execute request
response = agent.execute("Explain quantum computing")

print(response['text'])
print(f"Provider: {response['provider']}")
print(f"Tokens: {response['metadata']['tokens_used']}")
```

### CLI Usage

```bash
# Run a prompt
python -m nexora_agent.cli run "Explain quantum computing"

# List available providers
python -m nexora_agent.cli list

# Check status
python -m nexora_agent.cli status

# Test a specific provider
python -m nexora_agent.cli test-provider --provider openai
```

## Configuration

### Environment Variables

Create a `.env` file with your API keys:

```bash
# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4

# Google Gemini
GOOGLE_API_KEY=AIza...
GEMINI_MODEL=gemini-pro

# xAI Grok
XAI_API_KEY=xai-...
XAI_MODEL=grok-1

# Groq
GROQ_API_KEY=gsk_...
GROQ_MODEL=mixtral-8x7b-32768

# Anthropic Claude
ANTHROPIC_API_KEY=sk-ant-...
ANTHROPIC_MODEL=claude-3-opus-20240229

# Configuration
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini,anthropic
LOG_LEVEL=INFO
MAX_RETRIES=3
REQUEST_TIMEOUT=30
```

See [Configuration Guide](Configuration) for detailed options.

## Supported AI Providers

NexoraSIM supports 6 AI providers out of the box:

1. **OpenAI** - GPT-4, GPT-3.5-turbo
2. **Google Gemini** - gemini-pro
3. **xAI Grok** - grok-1
4. **Groq** - mixtral-8x7b-32768
5. **Anthropic Claude** - claude-3-opus-20240229
6. **Generic HTTP** - Custom API endpoints

See [Provider Setup](Provider-Setup) for configuration details.

## Next Steps

### Learn More
- [Configuration Guide](Configuration) - Detailed configuration options
- [API Reference](API-Reference) - Complete API documentation
- [Provider Setup](Provider-Setup) - Configure AI providers
- [Examples](Examples) - Code examples and tutorials

### Advanced Topics
- [Custom Providers](Tutorial-Custom-Providers) - Add your own providers
- [Fallback Strategies](Advanced-Fallback) - Configure fallback behavior
- [Logging and Monitoring](Logging-Monitoring) - Track and monitor requests
- [Deployment](Deployment-Guide) - Deploy to production

## Troubleshooting

### Common Issues

**API Key Not Found**
- Ensure `.env` file exists and contains valid API keys
- Check environment variable names match configuration

**Provider Not Available**
- Verify provider is enabled in configuration
- Check API key is valid and has sufficient credits

**Import Errors**
- Ensure package is installed: `npm install @nexorasim/nexora-agent`
- Check Node.js version: `node --version` (requires 18+)

See [Troubleshooting Guide](Troubleshooting) for more solutions.

## Support

Need help? Here are your options:

- Check this wiki for documentation
- Review [Examples](Examples) for code samples
- Open an issue on [GitHub](https://github.com/nexorasim/nexorasim.github.io/issues)
- Read the [FAQ](FAQ)

## Contributing

Interested in contributing? See our [Contributing Guide](Contributing).

## License

MIT License - See [LICENSE](https://github.com/nexorasim/nexorasim.github.io/blob/main/LICENSE)
