export interface NexoraAgentOptions {
  provider: string;
  apiKey: string;
  timeout?: number;
}

export interface Response {
  success: boolean;
  text: string;
  provider: string;
  error?: string;
}

export interface Status {
  provider: string;
  ready: boolean;
}

export class NexoraAgent {
  private provider: string;
  private apiKey: string;
  private timeout: number;

  constructor(options: NexoraAgentOptions) {
    this.provider = options.provider;
    this.apiKey = options.apiKey;
    this.timeout = options.timeout || 30000;
  }

  async execute(prompt: string): Promise<Response> {
    return {
      success: true,
      text: 'Example response',
      provider: this.provider,
    };
  }

  setProvider(name: string): void {
    this.provider = name;
  }

  getStatus(): Status {
    return {
      provider: this.provider,
      ready: true,
    };
  }
}
