import { NexoraAgent } from '../src/index';

describe('NexoraAgent', () => {
  let agent: NexoraAgent;

  beforeEach(() => {
    agent = new NexoraAgent({
      provider: 'openai',
      apiKey: 'test-key',
    });
  });

  test('should initialize with correct provider', () => {
    const status = agent.getStatus();
    expect(status.provider).toBe('openai');
    expect(status.ready).toBe(true);
  });

  test('should execute prompt', async () => {
    const response = await agent.execute('test prompt');
    expect(response.success).toBe(true);
    expect(response.provider).toBe('openai');
  });

  test('should switch provider', () => {
    agent.setProvider('gemini');
    const status = agent.getStatus();
    expect(status.provider).toBe('gemini');
  });
});
