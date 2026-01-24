/**
 * @fileoverview Generic HTTP provider implementation for custom APIs
 */

import axios, { AxiosInstance } from 'axios';
import { BaseProvider } from './base';
import { ProviderResponse, ExecuteOptions } from '../types';

export class GenericHTTPProvider extends BaseProvider {
  private client: AxiosInstance;

  constructor(config: any) {
    super(config);
    
    if (!this.config.endpoint) {
      throw new Error('Generic HTTP provider requires an endpoint configuration');
    }
    
    this.client = axios.create({
      baseURL: this.config.endpoint,
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'NexoraSIM-Agent/1.0.0',
        ...(this.config.headers as Record<string, string> || {})
      },
      timeout: this.config.timeout || 30000
    });
  }

  async execute(prompt: string, options: ExecuteOptions = {}): Promise<ProviderResponse> {
    this.validateRequest(prompt);

    const model = options.model || this.config.model || 'default';
    const temperature = options.temperature ?? this.config.temperature ?? 0.7;
    const maxTokens = options.maxTokens || this.config.maxTokens || 2000;

    return this.executeWithRetry(async () => {
      // Support different request formats
      const requestBody = this.buildRequestBody(prompt, {
        model,
        temperature,
        maxTokens,
        ...options
      });

      const response = await this.client.post(
        (this.config.path as string) || '/completions',
        requestBody
      );

      // Extract response based on configured format
      const extractedResponse = this.extractResponse(response.data);

      return {
        text: this.sanitizeResponse(extractedResponse.text),
        model: extractedResponse.model || model,
        tokensUsed: extractedResponse.tokensUsed,
        metadata: {
          ...extractedResponse.metadata,
          endpoint: this.config.endpoint,
          responseFormat: this.config.responseFormat || 'auto'
        }
      };
    });
  }

  private buildRequestBody(prompt: string, options: any): any {
    const format = this.config.requestFormat || 'openai';

    switch (format) {
      case 'openai':
        return {
          model: options.model,
          messages: [{ role: 'user', content: prompt }],
          temperature: options.temperature,
          max_tokens: options.maxTokens
        };
      
      case 'anthropic':
        return {
          model: options.model,
          messages: [{ role: 'user', content: prompt }],
          temperature: options.temperature,
          max_tokens: options.maxTokens
        };
      
      case 'custom':
        return {
          prompt,
          model: options.model,
          temperature: options.temperature,
          max_tokens: options.maxTokens,
          ...(this.config.customFields as Record<string, unknown> || {})
        };
      
      default:
        return {
          prompt,
          model: options.model,
          temperature: options.temperature,
          max_tokens: options.maxTokens
        };
    }
  }

  private extractResponse(data: any): {
    text: string;
    model?: string;
    tokensUsed?: number;
    metadata?: any;
  } {
    const format = this.config.responseFormat || 'auto';

    // Auto-detect common formats
    if (format === 'auto') {
      if (data.choices && data.choices[0]) {
        // OpenAI-like format
        return {
          text: data.choices[0].message?.content || data.choices[0].text,
          model: data.model,
          tokensUsed: data.usage?.total_tokens,
          metadata: {
            finishReason: data.choices[0].finish_reason,
            usage: data.usage
          }
        };
      } else if (data.content && Array.isArray(data.content)) {
        // Anthropic-like format
        return {
          text: data.content[0]?.text,
          model: data.model,
          tokensUsed: data.usage?.output_tokens,
          metadata: {
            stopReason: data.stop_reason,
            usage: data.usage
          }
        };
      } else if (data.text || data.response) {
        // Simple text response
        return {
          text: data.text || data.response,
          model: data.model,
          tokensUsed: data.tokens_used || data.usage?.total_tokens,
          metadata: data.metadata || {}
        };
      }
    }

    // Custom extraction based on configuration
    const textPath = this.config.textPath || 'text';
    const modelPath = this.config.modelPath || 'model';
    const tokensPath = this.config.tokensPath || 'tokens_used';

    return {
      text: (this.getNestedValue(data as any, textPath as string) || '') as string,
      model: (this.getNestedValue(data as any, modelPath as string) || '') as string,
      tokensUsed: (this.getNestedValue(data as any, tokensPath as string) || 0) as number,
      metadata: data
    };
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }
}