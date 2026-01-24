/**
 * @fileoverview OpenAI provider implementation
 */
import { BaseProvider } from './base';
import { ProviderResponse, ExecuteOptions } from '../types';
export declare class OpenAIProvider extends BaseProvider {
    private client;
    constructor(config: any);
    execute(prompt: string, options?: ExecuteOptions): Promise<ProviderResponse>;
}
//# sourceMappingURL=openai.d.ts.map