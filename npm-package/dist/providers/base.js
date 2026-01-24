"use strict";
/**
 * @fileoverview Base provider interface and abstract class
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
class BaseProvider {
    constructor(config) {
        this.config = config;
    }
    /**
     * Check if provider is properly configured
     */
    isConfigured() {
        return Boolean(this.config.apiKey) && this.config.enabled;
    }
    /**
     * Get provider configuration
     */
    getConfig() {
        return { ...this.config };
    }
    /**
     * Validate request parameters
     */
    validateRequest(prompt) {
        if (!prompt || prompt.trim().length === 0) {
            throw new Error('Prompt cannot be empty');
        }
        if (!this.isConfigured()) {
            throw new Error('Provider is not properly configured');
        }
    }
    /**
     * Handle rate limiting and retries
     */
    async executeWithRetry(operation, maxRetries = this.config.retries || 3) {
        let lastError;
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await operation();
            }
            catch (error) {
                lastError = error instanceof Error ? error : new Error('Unknown error');
                if (attempt === maxRetries) {
                    throw lastError;
                }
                // Exponential backoff
                const delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
                await this.sleep(delay);
            }
        }
        throw lastError;
    }
    /**
     * Sleep utility
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * Sanitize response text
     */
    sanitizeResponse(text) {
        return text.trim().replace(/\r\n/g, '\n');
    }
}
exports.BaseProvider = BaseProvider;
//# sourceMappingURL=base.js.map