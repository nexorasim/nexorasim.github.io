"use strict";
/**
 * @fileoverview Generic HTTP provider implementation for custom APIs
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericHTTPProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("./base");
class GenericHTTPProvider extends base_1.BaseProvider {
    constructor(config) {
        super(config);
        if (!this.config.endpoint) {
            throw new Error('Generic HTTP provider requires an endpoint configuration');
        }
        this.client = axios_1.default.create({
            baseURL: this.config.endpoint,
            headers: {
                'Authorization': `Bearer ${this.config.apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'NexoraSIM-Agent/1.0.0',
                ...(this.config.headers || {})
            },
            timeout: this.config.timeout || 30000
        });
    }
    async execute(prompt, options = {}) {
        this.validateRequest(prompt);
        const model = options.model || this.config.model || 'default';
        const temperature = options.temperature ?? this.config.temperature ?? 0.7;
        const maxTokens = options.maxTokens || this.config.maxTokens || 2000;
        return this.executeWithRetry(async () => {
            // Support different request formats
            const requestBody = this.buildRequestBody(prompt, {
                model,
                temperature,
                maxTokens,
                ...options
            });
            const response = await this.client.post(this.config.path || '/completions', requestBody);
            // Extract response based on configured format
            const extractedResponse = this.extractResponse(response.data);
            return {
                text: this.sanitizeResponse(extractedResponse.text),
                model: extractedResponse.model || model,
                tokensUsed: extractedResponse.tokensUsed,
                metadata: {
                    ...extractedResponse.metadata,
                    endpoint: this.config.endpoint,
                    responseFormat: this.config.responseFormat || 'auto'
                }
            };
        });
    }
    buildRequestBody(prompt, options) {
        const format = this.config.requestFormat || 'openai';
        switch (format) {
            case 'openai':
                return {
                    model: options.model,
                    messages: [{ role: 'user', content: prompt }],
                    temperature: options.temperature,
                    max_tokens: options.maxTokens
                };
            case 'anthropic':
                return {
                    model: options.model,
                    messages: [{ role: 'user', content: prompt }],
                    temperature: options.temperature,
                    max_tokens: options.maxTokens
                };
            case 'custom':
                return {
                    prompt,
                    model: options.model,
                    temperature: options.temperature,
                    max_tokens: options.maxTokens,
                    ...(this.config.customFields || {})
                };
            default:
                return {
                    prompt,
                    model: options.model,
                    temperature: options.temperature,
                    max_tokens: options.maxTokens
                };
        }
    }
    extractResponse(data) {
        const format = this.config.responseFormat || 'auto';
        // Auto-detect common formats
        if (format === 'auto') {
            if (data.choices && data.choices[0]) {
                // OpenAI-like format
                return {
                    text: data.choices[0].message?.content || data.choices[0].text,
                    model: data.model,
                    tokensUsed: data.usage?.total_tokens,
                    metadata: {
                        finishReason: data.choices[0].finish_reason,
                        usage: data.usage
                    }
                };
            }
            else if (data.content && Array.isArray(data.content)) {
                // Anthropic-like format
                return {
                    text: data.content[0]?.text,
                    model: data.model,
                    tokensUsed: data.usage?.output_tokens,
                    metadata: {
                        stopReason: data.stop_reason,
                        usage: data.usage
                    }
                };
            }
            else if (data.text || data.response) {
                // Simple text response
                return {
                    text: data.text || data.response,
                    model: data.model,
                    tokensUsed: data.tokens_used || data.usage?.total_tokens,
                    metadata: data.metadata || {}
                };
            }
        }
        // Custom extraction based on configuration
        const textPath = this.config.textPath || 'text';
        const modelPath = this.config.modelPath || 'model';
        const tokensPath = this.config.tokensPath || 'tokens_used';
        return {
            text: (this.getNestedValue(data, textPath) || ''),
            model: (this.getNestedValue(data, modelPath) || ''),
            tokensUsed: (this.getNestedValue(data, tokensPath) || 0),
            metadata: data
        };
    }
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }
}
exports.GenericHTTPProvider = GenericHTTPProvider;
//# sourceMappingURL=generic-http.js.map