/**
 * @fileoverview NexoraSIM Nexora Agent - Enterprise AI Orchestration Platform
 * @version 1.0.0
 * @license MIT
 */

export { NexoraAgent } from './core/agent';
export { ProviderFactory } from './providers/factory';
export { BaseProvider } from './providers/base';
export { OpenAIProvider } from './providers/openai';
export { GeminiProvider } from './providers/gemini';
export { XAIGrokProvider } from './providers/xai-grok';
export { GroqProvider } from './providers/groq';
export { AnthropicProvider } from './providers/anthropic';
export { GenericHTTPProvider } from './providers/generic-http';
export { ConfigLoader } from './config/loader';
export { Logger } from './utils/logger';
export { 
  AgentConfig, 
  ProviderConfig, 
  AgentResponse, 
  ProviderType 
} from './types';

// Version information
export const VERSION = '1.0.0';
export const BUILD_DATE = new Date().toISOString();

// Default export
export default {
  NexoraAgent,
  ProviderFactory,
  VERSION,
  BUILD_DATE
};