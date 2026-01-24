/**
 * @fileoverview Anthropic Claude provider implementation
 */

import axios, { AxiosInstance } from 'axios';
import { BaseProvider } from './base';
import { AgentResponse, ProviderConfig } from '../types';

export class AnthropicProvider extends BaseProvider {
  private client: AxiosInstance;
  private readonly baseURL = 'https://api.anthropic.com/v1';

  constructor(config: ProviderConfig) {
    super(config);
    
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'x-api-key': this.config.apiKey,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'User-Agent': 'NexoraSIM-Agent/1.0.0'
      },
      timeout: this.config.timeout || 30000
    });
  }

  async execute(prompt: string, options?: Record<string, unknown>): Promise<AgentResponse> {
    this.validateRequest(prompt);

    const model = (options?.model as string) || this.config.model || 'claude-3-sonnet-20240229';
    const temperature = (options?.temperature as number) || this.config.temperature || 0.7;
    const maxTokens = (options?.maxTokens as number) || this.config.maxTokens || 2000;

    const payload = {
      model,
      max_tokens: maxTokens,
      temperature,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    };

    return this.executeWithRetry(
      () => this.makeRequest(payload),
      this.config.retries || 3
    );
  }

  private async makeRequest(payload: Record<string, unknown>): Promise<AgentResponse> {
    const startTime = Date.now();

    try {
      const response = await this.client.post('/messages', payload);
      const data = response.data;
      const content = data.content || [];

      if (!content.length || !content[0].text) {
        throw new Error('No content in Anthropic response');
      }

      const executionTime = Date.now() - startTime;

      return {
        success: true,
        text: content[0].text.trim(),
        provider: 'anthropic',
        model: data.model,
        metadata: {
          executionTime,
          tokensUsed: (data.usage?.output_tokens || 0) + (data.usage?.input_tokens || 0),
          inputTokens: data.usage?.input_tokens,
          outputTokens: data.usage?.output_tokens,
          stopReason: data.stop_reason,
          responseId: data.id,
          stopSequence: data.stop_sequence,
          timestamp: new Date().toISOString(),
          requestId: this.generateRequestId(),
          attempt: 1
        }
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.error?.message || error.message;
        throw new Error(`Anthropic API error (${status}): ${message}`);
      }
      throw error;
    }
  }

  getAvailableModels(): string[] {
    return [
      'claude-3-opus-20240229',
      'claude-3-sonnet-20240229',
      'claude-3-haiku-20240307',
      'claude-2.1',
      'claude-2.0',
      'claude-instant-1.2'
    ];
  }
}
