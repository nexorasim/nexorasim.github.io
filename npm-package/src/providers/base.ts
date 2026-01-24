/**
 * @fileoverview Base provider interface and abstract class
 */

import { ProviderConfig, ProviderResponse, ExecuteOptions } from '../types';

export abstract class BaseProvider {
  protected config: ProviderConfig;

  constructor(config: ProviderConfig) {
    this.config = config;
  }

  /**
   * Execute AI request
   */
  abstract execute(prompt: string, options?: ExecuteOptions): Promise<ProviderResponse>;

  /**
   * Check if provider is properly configured
   */
  isConfigured(): boolean {
    return Boolean(this.config.apiKey) && this.config.enabled;
  }

  /**
   * Get provider configuration
   */
  getConfig(): ProviderConfig {
    return { ...this.config };
  }

  /**
   * Validate request parameters
   */
  protected validateRequest(prompt: string): void {
    if (!prompt || prompt.trim().length === 0) {
      throw new Error('Prompt cannot be empty');
    }

    if (!this.isConfigured()) {
      throw new Error('Provider is not properly configured');
    }
  }

  /**
   * Handle rate limiting and retries
   */
  protected async executeWithRetry<T>(
    operation: () => Promise<T>,
    maxRetries: number = this.config.retries || 3
  ): Promise<T> {
    let lastError: Error;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        
        if (attempt === maxRetries) {
          throw lastError;
        }

        // Exponential backoff
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
        await this.sleep(delay);
      }
    }

    throw lastError!;
  }

  /**
   * Sleep utility
   */
  protected sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Sanitize response text
   */
  protected sanitizeResponse(text: string): string {
    return text.trim().replace(/\r\n/g, '\n');
  }
}