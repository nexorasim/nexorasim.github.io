# @nexorasim/nexora-agent

Enterprise-grade AI deployment and orchestration platform with multi-provider support.

## Overview

NexoraSIM Nexora Agent is a TypeScript/JavaScript library that provides seamless integration with multiple AI providers including OpenAI, Google Gemini, xAI Grok, Groq, and custom HTTP endpoints. Built for enterprise deployments with audit-first, reproducible workflows.

## Features

- **Multi-provider Support**: OpenAI, Google Gemini, xAI Grok, Groq, Anthropic Claude, and generic HTTP APIs
- **Automatic Fallback**: Seamless provider switching on failures
- **Enterprise Ready**: Comprehensive logging, audit trails, and error handling
- **TypeScript First**: Full type safety and IntelliSense support
- **Configurable**: Environment variables and programmatic configuration
- **Extensible**: Easy to add custom providers

## Installation

```bash
npm install @nexorasim/nexora-agent
```

## Quick Start

```typescript
import { NexoraAgent } from '@nexorasim/nexora-agent';

// Initialize with environment variables
const agent = new NexoraAgent();

// Execute AI request
const response = await agent.execute('Explain quantum computing');

if (response.success) {
  console.log(response.text);
  console.log(`Provider: ${response.provider}`);
  console.log(`Tokens used: ${response.metadata.tokensUsed}`);
} else {
  console.error(`Error: ${response.error}`);
}
```

## Configuration

### Environment Variables

```bash
# Default provider
DEFAULT_PROVIDER=openai
FALLBACK_PROVIDERS=google_gemini,groq

# OpenAI
OPENAI_ENABLED=true
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4

# Google Gemini
GEMINI_ENABLED=true
GOOGLE_API_KEY=AIza...
GEMINI_MODEL=gemini-pro

# xAI Grok
XAI_ENABLED=true
XAI_API_KEY=xai-...
XAI_MODEL=grok-1
XAI_ENDPOINT=https://api.x.ai/v1

# Groq
GROQ_ENABLED=true
GROQ_API_KEY=gsk_...
GROQ_MODEL=mixtral-8x7b-32768

# Anthropic Claude
ANTHROPIC_ENABLED=true
ANTHROPIC_API_KEY=sk-ant-...
ANTHROPIC_MODEL=claude-3-sonnet-20240229

# Generic HTTP
GENERIC_ENABLED=false
GENERIC_API_KEY=...
GENERIC_ENDPOINT=https://your-api.com/v1
GENERIC_REQUEST_FORMAT=openai
GENERIC_RESPONSE_FORMAT=auto
```

### Programmatic Configuration

```typescript
import { NexoraAgent } from '@nexorasim/nexora-agent';

const agent = new NexoraAgent({
  defaultProvider: 'openai',
  fallbackProviders: ['google_gemini', 'groq'],
  maxRetries: 3,
  requestTimeout: 30000,
  logLevel: 'info',
  providers: {
    openai: {
      enabled: true,
      apiKey: 'sk-...',
      model: 'gpt-4',
      temperature: 0.7,
      maxTokens: 2000
    },
    google_gemini: {
      enabled: true,
      apiKey: 'AIza...',
      model: 'gemini-pro',
      temperature: 0.7,
      maxTokens: 2000
    }
    // ... other providers
  }
});
```

## API Reference

### NexoraAgent

#### Constructor

```typescript
new NexoraAgent(config?: Partial<AgentConfig>)
```

#### Methods

##### execute(prompt, options?)

Execute an AI request with automatic fallback.

```typescript
async execute(
  prompt: string, 
  options?: ExecuteOptions
): Promise<AgentResponse>
```

**Parameters:**
- `prompt` (string): The input prompt
- `options` (ExecuteOptions, optional): Execution options

**Options:**
- `provider` (ProviderType): Override default provider
- `model` (string): Override default model
- `temperature` (number): Control randomness (0-1)
- `maxTokens` (number): Maximum response tokens
- `timeout` (number): Request timeout in milliseconds
- `retries` (number): Number of retry attempts

**Returns:** Promise<AgentResponse>

##### getProviderStatus()

Get the status of all configured providers.

```typescript
getProviderStatus(): Record<ProviderType, { enabled: boolean; configured: boolean }>
```

##### getAuditLogs()

Get audit logs for compliance and monitoring.

```typescript
getAuditLogs(): AuditLog[]
```

##### clearAuditLogs()

Clear stored audit logs.

```typescript
clearAuditLogs(): void
```

### Types

#### AgentResponse

```typescript
interface AgentResponse {
  success: boolean;
  text?: string;
  error?: string;
  provider: ProviderType;
  model?: string;
  metadata: {
    executionTime: number;
    tokensUsed?: number;
    requestId: string;
    timestamp: string;
    attempt: number;
    [key: string]: unknown;
  };
}
```

#### ProviderType

```typescript
type ProviderType = 
  | 'openai' 
  | 'google_gemini' 
  | 'xai_grok' 
  | 'groq' 
  | 'anthropic'
  | 'generic_http';
```

## Examples

### Basic Usage

```typescript
import { NexoraAgent } from '@nexorasim/nexora-agent';

const agent = new NexoraAgent();

// Simple request
const response = await agent.execute('What is artificial intelligence?');
console.log(response.text);
```

### Provider-Specific Request

```typescript
// Use specific provider
const response = await agent.execute(
  'Explain machine learning', 
  { provider: 'google_gemini' }
);
```

### Custom Parameters

```typescript
// Custom temperature and token limit
const response = await agent.execute(
  'Write a creative story', 
  { 
    temperature: 0.9,
    maxTokens: 1000,
    model: 'gpt-4-turbo'
  }
);
```

### Error Handling

```typescript
try {
  const response = await agent.execute('Your prompt');
  
  if (response.success) {
    console.log('Success:', response.text);
    console.log('Provider:', response.provider);
    console.log('Execution time:', response.metadata.executionTime, 'ms');
  } else {
    console.error('AI request failed:', response.error);
  }
} catch (error) {
  console.error('Unexpected error:', error);
}
```

### Monitoring and Audit

```typescript
// Check provider status
const status = agent.getProviderStatus();
console.log('OpenAI available:', status.openai.enabled && status.openai.configured);

// Get audit logs
const logs = agent.getAuditLogs();
logs.forEach(log => {
  console.log(`${log.timestamp}: ${log.action} with ${log.provider} - ${log.success ? 'SUCCESS' : 'FAILED'}`);
});
```

### Generic HTTP Provider

```typescript
const agent = new NexoraAgent({
  providers: {
    generic_http: {
      enabled: true,
      apiKey: 'your-api-key',
      endpoint: 'https://your-api.com/v1',
      requestFormat: 'openai', // or 'anthropic', 'custom'
      responseFormat: 'auto',  // or 'openai', 'anthropic', 'custom'
      headers: {
        'Custom-Header': 'value'
      }
    }
  }
});

const response = await agent.execute('Your prompt', { provider: 'generic_http' });
```

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
npm run test:coverage
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Publishing

```bash
# Patch version
npm run version:patch

# Minor version
npm run version:minor

# Major version
npm run version:major
```

## Security

- API keys are never logged or exposed
- All requests use HTTPS
- Configurable request timeouts prevent hanging
- Audit logs track all operations for compliance

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- Documentation: [https://nexorasim.github.io](https://nexorasim.github.io)
- Issues: [GitHub Issues](https://github.com/nexorasim/nexorasim.github.io/issues)
- Discussions: [GitHub Discussions](https://github.com/nexorasim/nexorasim.github.io/discussions)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

---

Built with enterprise deployments in mind | NexoraSIM 2025