/**
 * @fileoverview Configuration loader with environment variable support
 */

import { config } from 'dotenv';
import { AgentConfig, ProviderType } from '../types';

export class ConfigLoader {
  static load(overrides: Partial<AgentConfig> = {}): AgentConfig {
    // Load environment variables
    config();

    const defaultConfig: AgentConfig = {
      defaultProvider: (process.env.DEFAULT_PROVIDER as ProviderType) || 'openai',
      fallbackProviders: this.parseFallbackProviders(process.env.FALLBACK_PROVIDERS),
      maxRetries: parseInt(process.env.MAX_RETRIES || '3'),
      requestTimeout: parseInt(process.env.REQUEST_TIMEOUT || '30000'),
      logLevel: (process.env.LOG_LEVEL as any) || 'info',
      providers: {
        openai: {
          enabled: process.env.OPENAI_ENABLED === 'true',
          apiKey: process.env.OPENAI_API_KEY,
          model: process.env.OPENAI_MODEL || 'gpt-4',
          timeout: parseInt(process.env.OPENAI_TIMEOUT || '30000'),
          retries: parseInt(process.env.OPENAI_RETRIES || '3'),
          temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
          maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '2000')
        },
        google_gemini: {
          enabled: process.env.GEMINI_ENABLED === 'true',
          apiKey: process.env.GOOGLE_API_KEY,
          model: process.env.GEMINI_MODEL || 'gemini-pro',
          timeout: parseInt(process.env.GEMINI_TIMEOUT || '30000'),
          retries: parseInt(process.env.GEMINI_RETRIES || '3'),
          temperature: parseFloat(process.env.GEMINI_TEMPERATURE || '0.7'),
          maxTokens: parseInt(process.env.GEMINI_MAX_TOKENS || '2000')
        },
        xai_grok: {
          enabled: process.env.XAI_ENABLED === 'true',
          apiKey: process.env.XAI_API_KEY,
          model: process.env.XAI_MODEL || 'grok-1',
          endpoint: process.env.XAI_ENDPOINT || 'https://api.x.ai/v1',
          timeout: parseInt(process.env.XAI_TIMEOUT || '30000'),
          retries: parseInt(process.env.XAI_RETRIES || '3'),
          temperature: parseFloat(process.env.XAI_TEMPERATURE || '0.7'),
          maxTokens: parseInt(process.env.XAI_MAX_TOKENS || '2000')
        },
        groq: {
          enabled: process.env.GROQ_ENABLED === 'true',
          apiKey: process.env.GROQ_API_KEY,
          model: process.env.GROQ_MODEL || 'mixtral-8x7b-32768',
          timeout: parseInt(process.env.GROQ_TIMEOUT || '30000'),
          retries: parseInt(process.env.GROQ_RETRIES || '3'),
          temperature: parseFloat(process.env.GROQ_TEMPERATURE || '0.7'),
          maxTokens: parseInt(process.env.GROQ_MAX_TOKENS || '2000')
        },
        anthropic: {
          enabled: process.env.ANTHROPIC_ENABLED === 'true',
          apiKey: process.env.ANTHROPIC_API_KEY,
          model: process.env.ANTHROPIC_MODEL || 'claude-3-sonnet-20240229',
          timeout: parseInt(process.env.ANTHROPIC_TIMEOUT || '30000'),
          retries: parseInt(process.env.ANTHROPIC_RETRIES || '3'),
          temperature: parseFloat(process.env.ANTHROPIC_TEMPERATURE || '0.7'),
          maxTokens: parseInt(process.env.ANTHROPIC_MAX_TOKENS || '2000')
        },
        generic_http: {
          enabled: process.env.GENERIC_ENABLED === 'true',
          apiKey: process.env.GENERIC_API_KEY,
          model: process.env.GENERIC_MODEL || 'default',
          endpoint: process.env.GENERIC_ENDPOINT,
          timeout: parseInt(process.env.GENERIC_TIMEOUT || '30000'),
          retries: parseInt(process.env.GENERIC_RETRIES || '3'),
          temperature: parseFloat(process.env.GENERIC_TEMPERATURE || '0.7'),
          maxTokens: parseInt(process.env.GENERIC_MAX_TOKENS || '2000'),
          requestFormat: process.env.GENERIC_REQUEST_FORMAT || 'openai',
          responseFormat: process.env.GENERIC_RESPONSE_FORMAT || 'auto',
          textPath: process.env.GENERIC_TEXT_PATH,
          modelPath: process.env.GENERIC_MODEL_PATH,
          tokensPath: process.env.GENERIC_TOKENS_PATH,
          headers: this.parseHeaders(process.env.GENERIC_HEADERS)
        }
      }
    };

    return this.mergeConfig(defaultConfig, overrides);
  }

  private static parseFallbackProviders(value?: string): ProviderType[] {
    if (!value) return ['google_gemini', 'groq'];
    return value.split(',').map(p => p.trim() as ProviderType);
  }

  private static parseHeaders(value?: string): Record<string, string> {
    if (!value) return {};
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  }

  private static mergeConfig(
    defaultConfig: AgentConfig, 
    overrides: Partial<AgentConfig>
  ): AgentConfig {
    return {
      ...defaultConfig,
      ...overrides,
      providers: {
        ...defaultConfig.providers,
        ...overrides.providers
      }
    };
  }

  static validate(config: AgentConfig): void {
    const errors: string[] = [];

    // Check if at least one provider is enabled
    const enabledProviders = Object.entries(config.providers)
      .filter(([, providerConfig]) => providerConfig.enabled);

    if (enabledProviders.length === 0) {
      errors.push('At least one provider must be enabled');
    }

    // Check if default provider is enabled
    if (!config.providers[config.defaultProvider]?.enabled) {
      errors.push(`Default provider '${config.defaultProvider}' is not enabled`);
    }

    // Check if enabled providers have API keys
    enabledProviders.forEach(([provider, providerConfig]) => {
      if (!providerConfig.apiKey && provider !== 'generic_http') {
        errors.push(`Provider '${provider}' is enabled but missing API key`);
      }
    });

    // Check generic HTTP provider configuration
    const genericConfig = config.providers.generic_http;
    if (genericConfig.enabled && !genericConfig.endpoint) {
      errors.push('Generic HTTP provider is enabled but missing endpoint');
    }

    if (errors.length > 0) {
      throw new Error(`Configuration validation failed:\n${errors.join('\n')}`);
    }
  }
}