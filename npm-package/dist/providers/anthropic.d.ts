/**
 * @fileoverview Anthropic Claude provider implementation
 */
import { BaseProvider } from './base';
import { ProviderConfig, ProviderResponse } from '../types';
export declare class AnthropicProvider extends BaseProvider {
    private client;
    private readonly baseURL;
    constructor(config: ProviderConfig);
    execute(prompt: string, options?: Record<string, unknown>): Promise<ProviderResponse>;
    private makeRequest;
    getAvailableModels(): string[];
}
//# sourceMappingURL=anthropic.d.ts.map