/**
 * @fileoverview Provider factory for creating provider instances
 */

import { BaseProvider } from './base';
import { OpenAIProvider } from './openai';
import { GeminiProvider } from './gemini';
import { XAIGrokProvider } from './xai-grok';
import { GroqProvider } from './groq';
import { AnthropicProvider } from './anthropic';
import { GenericHTTPProvider } from './generic-http';
import { ProviderType, ProviderConfig } from '../types';

export class ProviderFactory {
  private providers: Map<ProviderType, BaseProvider> = new Map();
  private configs: Record<ProviderType, ProviderConfig>;

  constructor(configs: Record<ProviderType, ProviderConfig>) {
    this.configs = configs;
    this.initializeProviders();
  }

  private initializeProviders(): void {
    const providerClasses = {
      openai: OpenAIProvider,
      google_gemini: GeminiProvider,
      xai_grok: XAIGrokProvider,
      groq: GroqProvider,
      anthropic: AnthropicProvider,
      generic_http: GenericHTTPProvider
    };

    Object.entries(this.configs).forEach(([providerType, config]) => {
      if (config.enabled) {
        const ProviderClass = providerClasses[providerType as ProviderType];
        if (ProviderClass) {
          try {
            const provider = new ProviderClass(config);
            this.providers.set(providerType as ProviderType, provider);
          } catch (error) {
            console.warn(`Failed to initialize provider ${providerType}:`, error);
          }
        }
      }
    });
  }

  getProvider(type: ProviderType): BaseProvider {
    const provider = this.providers.get(type);
    if (!provider) {
      throw new Error(`Provider ${type} is not available or not configured`);
    }
    return provider;
  }

  getAvailableProviders(): ProviderType[] {
    return Array.from(this.providers.keys());
  }

  isProviderAvailable(type: ProviderType): boolean {
    return this.providers.has(type);
  }

  getProviderStatus(): Record<ProviderType, { available: boolean; configured: boolean }> {
    const status: Record<string, { available: boolean; configured: boolean }> = {};
    
    Object.entries(this.configs).forEach(([providerType, config]) => {
      const provider = this.providers.get(providerType as ProviderType);
      status[providerType] = {
        available: Boolean(provider),
        configured: Boolean(config.apiKey) && config.enabled
      };
    });

    return status as Record<ProviderType, { available: boolean; configured: boolean }>;
  }

  reloadProvider(type: ProviderType): void {
    const config = this.configs[type];
    if (!config || !config.enabled) {
      this.providers.delete(type);
      return;
    }

    const providerClasses = {
      openai: OpenAIProvider,
      google_gemini: GeminiProvider,
      xai_grok: XAIGrokProvider,
      groq: GroqProvider,
      anthropic: AnthropicProvider,
      generic_http: GenericHTTPProvider
    };

    const ProviderClass = providerClasses[type];
    if (ProviderClass) {
      try {
        const provider = new ProviderClass(config);
        this.providers.set(type, provider);
      } catch (error) {
        console.warn(`Failed to reload provider ${type}:`, error);
        this.providers.delete(type);
      }
    }
  }
}