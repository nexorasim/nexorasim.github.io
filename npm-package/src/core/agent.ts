/**
 * @fileoverview Core NexoraAgent implementation
 */

import { ProviderFactory } from '../providers/factory';
import { ConfigLoader } from '../config/loader';
import { Logger } from '../utils/logger';
import { 
  AgentConfig, 
  AgentResponse, 
  ExecuteOptions, 
  ProviderType,
  AuditLog 
} from '../types';

export class NexoraAgent {
  private config: AgentConfig;
  private providerFactory: ProviderFactory;
  private logger: Logger;
  private auditLogs: AuditLog[] = [];

  constructor(config?: Partial<AgentConfig>) {
    this.config = ConfigLoader.load(config);
    this.providerFactory = new ProviderFactory(this.config.providers);
    this.logger = new Logger(this.config.logLevel);
    
    this.logger.info('NexoraAgent initialized', {
      defaultProvider: this.config.defaultProvider,
      fallbackProviders: this.config.fallbackProviders,
      enabledProviders: this.getEnabledProviders()
    });
  }

  /**
   * Execute AI request with automatic fallback
   */
  async execute(
    prompt: string, 
    options: ExecuteOptions = {}
  ): Promise<AgentResponse> {
    const startTime = Date.now();
    const requestId = this.generateRequestId();
    const targetProvider = options.provider || this.config.defaultProvider;
    
    this.logger.info('Executing request', {
      requestId,
      provider: targetProvider,
      promptLength: prompt.length
    });

    // Try primary provider
    let response = await this.tryProvider(
      targetProvider, 
      prompt, 
      options, 
      requestId, 
      1
    );

    // Try fallback providers if primary fails
    if (!response.success && this.config.fallbackProviders.length > 0) {
      this.logger.warn('Primary provider failed, trying fallbacks', {
        requestId,
        primaryProvider: targetProvider,
        error: response.error
      });

      for (let i = 0; i < this.config.fallbackProviders.length; i++) {
        const fallbackProvider = this.config.fallbackProviders[i];
        if (!fallbackProvider || fallbackProvider === targetProvider) continue;

        response = await this.tryProvider(
          fallbackProvider, 
          prompt, 
          options, 
          requestId, 
          i + 2
        );

        if (response.success) break;
      }
    }

    // Log audit entry
    const auditEntry: AuditLog = {
      action: 'execute',
      timestamp: new Date().toISOString(),
      provider: response.provider,
      success: response.success,
      duration: Date.now() - startTime,
      metadata: {
        requestId,
        promptLength: prompt.length,
        attempt: response.metadata.attempt,
        model: response.model
      }
    };
    this.auditLogs.push(auditEntry);

    return response;
  }

  /**
   * Try executing with a specific provider
   */
  private async tryProvider(
    provider: ProviderType,
    prompt: string,
    options: ExecuteOptions,
    requestId: string,
    attempt: number
  ): Promise<AgentResponse> {
    const startTime = Date.now();

    try {
      const providerInstance = this.providerFactory.getProvider(provider);
      const providerResponse = await providerInstance.execute(prompt, options);

      const response: AgentResponse = {
        success: true,
        text: providerResponse.text,
        provider,
        model: providerResponse.model,
        metadata: {
          executionTime: Date.now() - startTime,
          tokensUsed: providerResponse.tokensUsed,
          requestId,
          timestamp: new Date().toISOString(),
          attempt,
          ...providerResponse.metadata
        }
      };

      this.logger.info('Provider execution successful', {
        requestId,
        provider,
        executionTime: response.metadata.executionTime,
        tokensUsed: response.metadata.tokensUsed
      });

      return response;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      this.logger.error('Provider execution failed', {
        requestId,
        provider,
        attempt,
        error: errorMessage,
        executionTime: Date.now() - startTime
      });

      return {
        success: false,
        error: errorMessage,
        provider,
        metadata: {
          executionTime: Date.now() - startTime,
          requestId,
          timestamp: new Date().toISOString(),
          attempt
        }
      };
    }
  }

  /**
   * Get status of all providers
   */
  getProviderStatus(): Record<ProviderType, { enabled: boolean; configured: boolean }> {
    const status: Record<string, { enabled: boolean; configured: boolean }> = {};
    
    Object.entries(this.config.providers).forEach(([provider, config]) => {
      status[provider] = {
        enabled: config.enabled,
        configured: Boolean(config.apiKey)
      };
    });

    return status as Record<ProviderType, { enabled: boolean; configured: boolean }>;
  }

  /**
   * Get enabled providers
   */
  private getEnabledProviders(): ProviderType[] {
    return Object.entries(this.config.providers)
      .filter(([, config]) => config.enabled)
      .map(([provider]) => provider as ProviderType);
  }

  /**
   * Generate unique request ID
   */
  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get audit logs
   */
  getAuditLogs(): AuditLog[] {
    return [...this.auditLogs];
  }

  /**
   * Clear audit logs
   */
  clearAuditLogs(): void {
    this.auditLogs = [];
  }

  /**
   * Get configuration
   */
  getConfig(): AgentConfig {
    return { ...this.config };
  }
}