# @nexorasim/agent

Multi-provider AI orchestration agent for NexoraSIM.

## Installation

```bash
npm install @nexorasim/agent
```

## Usage

```javascript
const { NexoraAgent } = require('@nexorasim/agent');

const agent = new NexoraAgent({
  provider: 'openai',
  apiKey: process.env.OPENAI_API_KEY
});

const response = await agent.execute('Your prompt here');
console.log(response.text);
```

## API

### NexoraAgent

#### Constructor Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| provider | string | Yes | AI provider name |
| apiKey | string | Yes | Provider API key |
| timeout | number | No | Request timeout (ms) |

#### Methods

- `execute(prompt: string): Promise<Response>` - Execute AI prompt
- `setProvider(name: string): void` - Switch provider
- `getStatus(): Status` - Get agent status

## Build

```bash
npm install
npm run build
npm test
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Links

- [Documentation](https://nexorasim.github.io)
- [GitHub](https://github.com/nexorasim/nexorasim.github.io)
- [Issues](https://github.com/nexorasim/nexorasim.github.io/issues)
