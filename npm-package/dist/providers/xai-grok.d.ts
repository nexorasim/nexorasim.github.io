/**
 * @fileoverview xAI Grok provider implementation
 */
import { BaseProvider } from './base';
import { ProviderResponse, ExecuteOptions } from '../types';
export declare class XAIGrokProvider extends BaseProvider {
    private client;
    constructor(config: any);
    execute(prompt: string, options?: ExecuteOptions): Promise<ProviderResponse>;
}
//# sourceMappingURL=xai-grok.d.ts.map