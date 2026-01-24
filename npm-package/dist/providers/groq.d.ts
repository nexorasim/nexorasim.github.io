/**
 * @fileoverview Groq provider implementation
 */
import { BaseProvider } from './base';
import { ProviderResponse, ExecuteOptions } from '../types';
export declare class GroqProvider extends BaseProvider {
    private client;
    constructor(config: any);
    execute(prompt: string, options?: ExecuteOptions): Promise<ProviderResponse>;
}
//# sourceMappingURL=groq.d.ts.map