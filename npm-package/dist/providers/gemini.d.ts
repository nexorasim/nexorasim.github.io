/**
 * @fileoverview Google Gemini provider implementation
 */
import { BaseProvider } from './base';
import { ProviderResponse, ExecuteOptions } from '../types';
export declare class GeminiProvider extends BaseProvider {
    private client;
    constructor(config: any);
    execute(prompt: string, options?: ExecuteOptions): Promise<ProviderResponse>;
}
//# sourceMappingURL=gemini.d.ts.map