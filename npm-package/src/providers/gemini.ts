/**
 * @fileoverview Google Gemini provider implementation
 */

import axios, { AxiosInstance } from 'axios';
import { BaseProvider } from './base';
import { ProviderResponse, ExecuteOptions } from '../types';

export class GeminiProvider extends BaseProvider {
  private client: AxiosInstance;

  constructor(config: any) {
    super(config);
    
    this.client = axios.create({
      baseURL: 'https://generativelanguage.googleapis.com/v1beta',
      timeout: this.config.timeout || 30000
    });
  }

  async execute(prompt: string, options: ExecuteOptions = {}): Promise<ProviderResponse> {
    this.validateRequest(prompt);

    const model = options.model || this.config.model || 'gemini-pro';
    const temperature = options.temperature ?? this.config.temperature ?? 0.7;
    const maxTokens = options.maxTokens || this.config.maxTokens || 2000;

    return this.executeWithRetry(async () => {
      const response = await this.client.post(
        `/models/${model}:generateContent?key=${this.config.apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            temperature,
            maxOutputTokens: maxTokens,
            topP: 0.8,
            topK: 10
          }
        }
      );

      const candidate = response.data.candidates?.[0];
      if (!candidate || !candidate.content) {
        throw new Error('Invalid response from Gemini API');
      }

      const text = candidate.content.parts?.[0]?.text;
      if (!text) {
        throw new Error('No text content in Gemini response');
      }

      return {
        text: this.sanitizeResponse(text),
        model,
        tokensUsed: response.data.usageMetadata?.totalTokenCount,
        metadata: {
          finishReason: candidate.finishReason,
          promptTokens: response.data.usageMetadata?.promptTokenCount,
          completionTokens: response.data.usageMetadata?.candidatesTokenCount,
          safetyRatings: candidate.safetyRatings
        }
      };
    });
  }
}