/**
 * @fileoverview Tests for NexoraAgent core functionality
 */

import { NexoraAgent } from '../src/core/agent';
import { AgentConfig } from '../src/types';

describe('NexoraAgent', () => {
  let agent: NexoraAgent;
  let mockConfig: Partial<AgentConfig>;

  beforeEach(() => {
    mockConfig = {
      defaultProvider: 'openai',
      fallbackProviders: ['google_gemini'],
      maxRetries: 2,
      requestTimeout: 5000,
      logLevel: 'info',
      providers: {
        openai: {
          enabled: true,
          apiKey: 'test-key',
          model: 'gpt-4',
          timeout: 5000
        },
        google_gemini: {
          enabled: true,
          apiKey: 'test-key',
          model: 'gemini-pro',
          timeout: 5000
        },
        xai_grok: {
          enabled: false,
          apiKey: '',
          model: 'grok-1'
        },
        groq: {
          enabled: false,
          apiKey: '',
          model: 'mixtral-8x7b-32768'
        },
        anthropic: {
          enabled: false,
          apiKey: '',
          model: 'claude-3-opus-20240229'
        },
        generic_http: {
          enabled: false,
          apiKey: '',
          endpoint: ''
        }
      }
    };

    agent = new NexoraAgent(mockConfig);
  });

  describe('initialization', () => {
    it('should initialize with default configuration', () => {
      const defaultAgent = new NexoraAgent();
      expect(defaultAgent).toBeInstanceOf(NexoraAgent);
    });

    it('should initialize with custom configuration', () => {
      expect(agent).toBeInstanceOf(NexoraAgent);
      const config = agent.getConfig();
      expect(config.defaultProvider).toBe('openai');
      expect(config.maxRetries).toBe(2);
    });
  });

  describe('provider status', () => {
    it('should return provider status', () => {
      const status = agent.getProviderStatus();
      expect(status.openai.enabled).toBe(true);
      expect(status.openai.configured).toBe(true);
      expect(status.xai_grok.enabled).toBe(false);
    });
  });

  describe('audit logs', () => {
    it('should initialize with empty audit logs', () => {
      const logs = agent.getAuditLogs();
      expect(logs).toHaveLength(0);
    });

    it('should clear audit logs', () => {
      agent.clearAuditLogs();
      const logs = agent.getAuditLogs();
      expect(logs).toHaveLength(0);
    });
  });

  describe('configuration', () => {
    it('should return configuration', () => {
      const config = agent.getConfig();
      expect(config.defaultProvider).toBe('openai');
      expect(config.providers.openai.enabled).toBe(true);
    });
  });
});