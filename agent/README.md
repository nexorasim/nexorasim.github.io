# Nexora AI Agent

Multi-provider AI orchestration agent supporting OpenAI, Google Gemini, xAI Grok, and generic HTTP endpoints.

## Installation

```bash
cd agent
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Configuration

Copy `.env.example` to `.env` and configure your API keys:

```bash
cp .env.example .env
```

Edit `.env` with your API keys and preferences.

## Usage

### Command Line

```bash
# Run with default provider
python -m nexora_agent.cli run "What is artificial intelligence?"

# Run with specific provider
python -m nexora_agent.cli run "Explain quantum computing" --provider google_gemini

# Test a provider
python -m nexora_agent.cli test-provider --provider openai

# Check provider status
python -m nexora_agent.cli status

# List available providers
python -m nexora_agent.cli list
```

### Python API

```python
from nexora_agent import NexoraAgent

agent = NexoraAgent()
response = agent.execute("Tell me about the future of AI", provider="openai")

if response.success:
    print(response.text)
    print(f"Provider: {response.provider}")
    print(f"Metadata: {response.metadata}")
else:
    print(f"Error: {response.error}")
```

## MCP CLI

MCP-style deployment and operations CLI:

```bash
# Apply environment configuration
python -m nexora_agent.mcp_cli.mcp_cli deploy --env prod

# Trigger GitHub Actions workflow
python -m nexora_agent.mcp_cli.mcp_cli workflow build-agent

# Run tests
python -m nexora_agent.mcp_cli.mcp_cli test --component agent

# Health check
python -m nexora_agent.mcp_cli.mcp_cli health https://nexorasim.github.io
```

## Testing

```bash
pytest tests/
```

## Architecture

- `nexora_agent/core/`: Core agent orchestration logic
- `nexora_agent/providers/`: Provider adapters (OpenAI, Gemini, xAI, Generic)
- `nexora_agent/config/`: Configuration management
- `nexora_agent/mcp_cli/`: MCP-style deployment CLI
