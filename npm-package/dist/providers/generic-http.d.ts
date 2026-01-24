/**
 * @fileoverview Generic HTTP provider implementation for custom APIs
 */
import { BaseProvider } from './base';
import { ProviderResponse, ExecuteOptions } from '../types';
export declare class GenericHTTPProvider extends BaseProvider {
    private client;
    constructor(config: any);
    execute(prompt: string, options?: ExecuteOptions): Promise<ProviderResponse>;
    private buildRequestBody;
    private extractResponse;
    private getNestedValue;
}
//# sourceMappingURL=generic-http.d.ts.map