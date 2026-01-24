# Nexora AI Agent Mode

## Overview

Nexora AI Agent Mode is a unified AI orchestration layer that provides seamless integration with multiple AI providers through a consistent interface. The agent automatically handles provider selection, fallback mechanisms, and retry logic to ensure high availability and reliability.

## Concept

### What is Agent Mode?

Agent Mode refers to the operational paradigm where the Nexora Agent acts as an intelligent orchestrator that:

1. **Abstracts Provider Complexity:** Users interact with a single, unified API regardless of the underlying AI provider
2. **Ensures Reliability:** Automatic fallback to alternative providers if the primary fails
3. **Optimizes Performance:** Route requests to the most appropriate provider based on configuration
4. **Maintains Auditability:** Comprehensive logging and metadata for all requests

### Key Principles

**Provider Agnostic:**
- Application code doesn't depend on specific provider APIs
- Switching providers requires only configuration changes
- No code modifications needed

**Fault Tolerant:**
- Automatic retry on transient failures
- Fallback to configured backup providers
- Graceful degradation

**Configuration Driven:**
- Environment-based configuration
- Runtime provider selection
- Easy testing and development

**Audit First:**
- Every request logged with metadata
- Provider usage tracking
- Performance metrics collection

## Supported Providers

### 1. OpenAI

**Models:** GPT-4, GPT-3.5-turbo, and others

**Configuration:**
```bash
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4
OPENAI_ENABLED=true
```

**API Endpoint:** https://api.openai.com/v1

**Rate Limits:**
- Varies by account tier
- TPM (tokens per minute) limits
- RPM (requests per minute) limits

**Best For:**
- General-purpose text generation
- Complex reasoning tasks
- Code generation

**Error Handling:**
- Rate limit errors trigger retry with backoff
- Invalid key errors fail immediately
- Timeout errors trigger fallback

### 2. Google Gemini

**Models:** gemini-pro, gemini-pro-vision

**Configuration:**
```bash
GOOGLE_API_KEY=AIza...
GEMINI_MODEL=gemini-pro
GEMINI_ENABLED=true
```

**API Endpoint:** Via google-generativeai SDK

**Rate Limits:**
- Free tier: 60 requests per minute
- Paid tier: Higher limits based on plan

**Best For:**
- Multimodal tasks (text + images)
- Long context understanding
- Fast inference

**Error Handling:**
- Quota exceeded triggers fallback
- Safety filter blocks logged as errors
- Connection errors trigger retry

### 3. xAI Grok

**Models:** grok-1, grok-beta

**Configuration:**
```bash
XAI_API_KEY=xai-...
XAI_ENDPOINT=https://api.x.ai/v1
XAI_MODEL=grok-1
XAI_ENABLED=true
```

**API Endpoint:** https://api.x.ai/v1

**Rate Limits:**
- Depends on xAI account tier
- Contact xAI for details

**Best For:**
- Real-time information tasks
- Conversational AI
- X/Twitter integration

**Error Handling:**
- Standard HTTP error codes
- Rate limits trigger fallback
- Authentication errors fail immediately

### 4. Generic HTTP Provider

**Purpose:** Support any custom AI API that follows HTTP/JSON patterns

**Configuration:**
```bash
GENERIC_API_KEY=...
GENERIC_ENDPOINT=https://your-api.com/v1/completions
GENERIC_ENABLED=true
```

**Expected Request Format:**
```json
{
  "prompt": "Your prompt here",
  "temperature": 0.7,
  "max_tokens": 1000
}
```

**Expected Response Format:**
```json
{
  "text": "Generated response",
  "output": "Alternative field name",
  "response": "Another alternative"
}
```

**Customization:**
The generic provider can be extended to support custom:
- Request headers
- Payload formats
- Response parsing
- Authentication methods

**Best For:**
- Self-hosted models
- Custom fine-tuned models
- Internal AI services
- Alternative AI providers (Anthropic Claude, Cohere, etc.)

**Error Handling:**
- HTTP status codes
- Custom error response parsing
- Configurable retry logic

## Provider Selection and Fallback

### Configuration

**Default Provider:**
```bash
DEFAULT_PROVIDER=openai
```

The agent will attempt to use this provider first for all requests.

**Fallback Chain:**
```bash
FALLBACK_PROVIDERS=google_gemini,xai_grok
```

If the default provider fails, the agent tries each fallback in order.

### Selection Logic

```
User Request
    ↓
1. Try DEFAULT_PROVIDER with retries
    ↓ (if fails)
2. Try first FALLBACK_PROVIDER with retries
    ↓ (if fails)
3. Try second FALLBACK_PROVIDER with retries
    ↓ (if all fail)
Return error with details
```

### Retry Configuration

```bash
MAX_RETRIES=3
REQUEST_TIMEOUT=30
```

**Retry Behavior:**
- Each provider gets `MAX_RETRIES` attempts
- Timeout for each attempt: `REQUEST_TIMEOUT` seconds
- Exponential backoff between retries (future enhancement)

### Manual Provider Selection

Users can override the default by specifying a provider:

**CLI:**
```bash
python -m nexora_agent.cli run "Your prompt" --provider google_gemini
```

**Python API:**
```python
response = agent.execute("Your prompt", provider="xai_grok")
```

**GUI:**
Select from dropdown menu before executing.

**Web Console:**
Select from provider dropdown in the interface.

## Usage Patterns

### Command-Line Interface

**Basic Usage:**
```bash
# Use default provider
nexora-agent run "Explain quantum computing"

# Specify provider
nexora-agent run "Explain quantum computing" --provider google_gemini

# Specify model
nexora-agent run "Write a poem" --provider openai --model gpt-3.5-turbo
```

**Testing:**
```bash
# Test specific provider
nexora-agent test-provider --provider openai

# Check all provider status
nexora-agent status

# List available providers
nexora-agent list
```

### Python API

**Basic Usage:**
```python
from nexora_agent import NexoraAgent

# Initialize agent with default config
agent = NexoraAgent()

# Execute with default provider
response = agent.execute("What is machine learning?")

if response.success:
    print(f"Provider: {response.provider}")
    print(f"Response: {response.text}")
    print(f"Time: {response.metadata['execution_time']}s")
else:
    print(f"Error: {response.error}")
```

**Advanced Usage:**
```python
from nexora_agent import NexoraAgent
from nexora_agent.config import ConfigLoader

# Custom configuration
config = ConfigLoader(config_path="custom_config.yaml")
agent = NexoraAgent(config)

# Execute with specific parameters
response = agent.execute(
    "Generate a creative story",
    provider="openai",
    model="gpt-4",
    temperature=0.9,
    max_tokens=500
)

# Check provider status
status = agent.get_provider_status()
for provider, info in status.items():
    print(f"{provider}: enabled={info['enabled']}, configured={info['configured']}")
```

### Desktop GUI

**Workflow:**
1. Launch application
2. Select provider from dropdown
3. Enter prompt in text area
4. Click "Execute" button
5. View response with metadata

**Features:**
- Real-time execution with progress indication
- Provider selection
- Response display with formatting
- Metadata display (execution time, tokens, model)
- Error handling with user-friendly messages

### Web Console

**Workflow:**
1. Navigate to https://nexorasim.github.io/console
2. Select provider
3. Enter prompt
4. Click "Execute"
5. View response and metadata

**Features:**
- Modern, responsive interface
- Provider selection
- Prompt history (future enhancement)
- Export responses (future enhancement)

## Response Format

### AgentResponse Object

```python
@dataclass
class AgentResponse:
    success: bool              # True if request succeeded
    text: str                  # Generated text response
    provider: str              # Provider that handled the request
    error: Optional[str]       # Error message if failed
    metadata: Dict[str, Any]   # Additional information
    timestamp: datetime        # When response was generated
```

### Metadata Fields

**Common Fields:**
- `execution_time`: Time taken in seconds
- `model`: Model used for generation

**Provider-Specific Fields:**
- `tokens_used`: (OpenAI, xAI) Total tokens consumed
- `status_code`: (Generic HTTP) HTTP response code

### Example Responses

**Success:**
```python
AgentResponse(
    success=True,
    text="Machine learning is a subset of artificial intelligence...",
    provider="openai",
    error=None,
    metadata={
        "model": "gpt-4",
        "execution_time": 2.34,
        "tokens_used": 156
    },
    timestamp=datetime(2025, 1, 24, 10, 30, 0)
)
```

**Failure:**
```python
AgentResponse(
    success=False,
    text="",
    provider="openai",
    error="Rate limit exceeded. Try again later.",
    metadata={
        "execution_time": 0.12
    },
    timestamp=datetime(2025, 1, 24, 10, 30, 0)
)
```

## Best Practices

### Configuration Management

1. **Never commit `.env` files:** Use `.env.example` as template
2. **Use environment-specific configs:** `.env.dev`, `.env.prod`
3. **Rotate API keys regularly:** Update in configuration
4. **Test configuration changes:** Use `status` command

### Provider Selection

1. **Set appropriate defaults:** Most reliable provider as default
2. **Configure meaningful fallbacks:** Based on provider capabilities
3. **Test all providers:** Before production deployment
4. **Monitor provider performance:** Track success rates and latency

### Error Handling

1. **Always check `response.success`:** Before using response text
2. **Log errors for analysis:** Track patterns and issues
3. **Provide user feedback:** Clear error messages in UI
4. **Implement retry logic:** In application layer if needed

### Performance Optimization

1. **Set appropriate timeouts:** Balance speed and reliability
2. **Monitor token usage:** Control costs
3. **Cache responses:** For repeated queries (future enhancement)
4. **Use appropriate models:** Balance capability and speed

## Extensibility

### Adding Custom Providers

See `/docs/architecture.md` for detailed instructions on adding new providers.

**Quick Overview:**

1. Create provider class in `nexora_agent/providers/`
2. Inherit from `BaseProvider`
3. Implement `execute()` method
4. Register in `ProviderFactory`
5. Add configuration to `.env.example`
6. Update documentation

### Customizing Behavior

**Custom Configuration Loader:**
```python
from nexora_agent.config import ConfigLoader

class MyConfigLoader(ConfigLoader):
    def _load_config(self):
        # Custom loading logic
        config = super()._load_config()
        # Modify config
        return config

agent = NexoraAgent(config=MyConfigLoader())
```

**Custom Provider:**
```python
from nexora_agent.providers import BaseProvider, AgentResponse

class MyCustomProvider(BaseProvider):
    def execute(self, prompt, **kwargs):
        # Custom implementation
        return AgentResponse(
            success=True,
            text="Custom response",
            provider="my_custom"
        )
```

## Troubleshooting

### Provider Not Working

1. **Check configuration:**
   ```bash
   nexora-agent status
   ```

2. **Test provider:**
   ```bash
   nexora-agent test-provider --provider openai
   ```

3. **Verify API key:**
   - Check `.env` file
   - Verify key on provider's website
   - Check account quota/billing

4. **Check logs:**
   ```bash
   tail -f agent.log
   ```

### Performance Issues

1. **Increase timeout:**
   ```bash
   REQUEST_TIMEOUT=60
   ```

2. **Reduce max tokens:**
   ```python
   response = agent.execute(prompt, max_tokens=500)
   ```

3. **Use faster model:**
   ```bash
   OPENAI_MODEL=gpt-3.5-turbo
   ```

### All Providers Failing

1. **Check network connectivity**
2. **Verify all API keys**
3. **Check provider status pages**
4. **Review error logs**
5. **Test with simple prompt**

## Conclusion

Nexora AI Agent Mode provides a robust, flexible, and reliable way to integrate multiple AI providers into your applications. By abstracting provider complexity and implementing intelligent fallback mechanisms, it ensures high availability and simplifies development.

For more information:
- Architecture: `/docs/architecture.md`
- Deployment: `/docs/deployment.md`
- Provider Details: `/docs/providers.md`
- Changelog: `/docs/changelog.md`
