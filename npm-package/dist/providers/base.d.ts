/**
 * @fileoverview Base provider interface and abstract class
 */
import { ProviderConfig, ProviderResponse, ExecuteOptions } from '../types';
export declare abstract class BaseProvider {
    protected config: ProviderConfig;
    constructor(config: ProviderConfig);
    /**
     * Execute AI request
     */
    abstract execute(prompt: string, options?: ExecuteOptions): Promise<ProviderResponse>;
    /**
     * Check if provider is properly configured
     */
    isConfigured(): boolean;
    /**
     * Get provider configuration
     */
    getConfig(): ProviderConfig;
    /**
     * Validate request parameters
     */
    protected validateRequest(prompt: string): void;
    /**
     * Handle rate limiting and retries
     */
    protected executeWithRetry<T>(operation: () => Promise<T>, maxRetries?: number): Promise<T>;
    /**
     * Sleep utility
     */
    protected sleep(ms: number): Promise<void>;
    /**
     * Sanitize response text
     */
    protected sanitizeResponse(text: string): string;
}
//# sourceMappingURL=base.d.ts.map