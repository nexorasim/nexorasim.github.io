/**
 * @fileoverview Type definitions for NexoraSIM Nexora Agent
 */

export type ProviderType = 
  | 'openai' 
  | 'google_gemini' 
  | 'xai_grok' 
  | 'groq' 
  | 'anthropic'
  | 'generic_http';

export interface AgentConfig {
  defaultProvider: ProviderType;
  fallbackProviders: ProviderType[];
  maxRetries: number;
  requestTimeout: number;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  providers: Record<ProviderType, ProviderConfig>;
}

export interface ProviderConfig {
  enabled: boolean;
  apiKey?: string;
  model?: string;
  endpoint?: string;
  maxTokens?: number;
  temperature?: number;
  timeout?: number;
  retries?: number;
  [key: string]: unknown;
}

export interface AgentResponse {
  success: boolean;
  text?: string;
  error?: string;
  provider: ProviderType;
  model?: string;
  metadata: {
    executionTime: number;
    tokensUsed?: number;
    requestId: string;
    timestamp: string;
    attempt: number;
    [key: string]: unknown;
  };
}

export interface ProviderResponse {
  text: string;
  model?: string;
  tokensUsed?: number;
  metadata?: Record<string, unknown>;
}

export interface ExecuteOptions {
  provider?: ProviderType;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  timeout?: number;
  retries?: number;
  metadata?: Record<string, unknown>;
}

export interface LogEntry {
  level: string;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

export interface AuditLog {
  action: string;
  timestamp: string;
  user?: string;
  provider: ProviderType;
  success: boolean;
  duration: number;
  metadata: Record<string, unknown>;
}