"use strict";
/**
 * @fileoverview Anthropic Claude provider implementation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("./base");
class AnthropicProvider extends base_1.BaseProvider {
    constructor(config) {
        super(config);
        this.baseURL = 'https://api.anthropic.com/v1';
        this.client = axios_1.default.create({
            baseURL: this.baseURL,
            headers: {
                'x-api-key': this.config.apiKey,
                'Content-Type': 'application/json',
                'anthropic-version': '2023-06-01',
                'User-Agent': 'NexoraSIM-Agent/1.0.0'
            },
            timeout: this.config.timeout || 30000
        });
    }
    async execute(prompt, options) {
        this.validateRequest(prompt);
        const model = options?.model || this.config.model || 'claude-3-sonnet-20240229';
        const temperature = options?.temperature || this.config.temperature || 0.7;
        const maxTokens = options?.maxTokens || this.config.maxTokens || 2000;
        const payload = {
            model,
            max_tokens: maxTokens,
            temperature,
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
        };
        return this.executeWithRetry(() => this.makeRequest(payload), this.config.retries || 3);
    }
    async makeRequest(payload) {
        const startTime = Date.now();
        try {
            const response = await this.client.post('/messages', payload);
            const data = response.data;
            const content = data.content || [];
            if (!content.length || !content[0].text) {
                throw new Error('No content in Anthropic response');
            }
            const executionTime = Date.now() - startTime;
            return {
                text: content[0].text.trim(),
                model: data.model,
                tokensUsed: (data.usage?.output_tokens || 0) + (data.usage?.input_tokens || 0),
                metadata: {
                    executionTime,
                    inputTokens: data.usage?.input_tokens,
                    outputTokens: data.usage?.output_tokens,
                    stopReason: data.stop_reason,
                    responseId: data.id,
                    stopSequence: data.stop_sequence,
                    timestamp: new Date().toISOString(),
                    requestId: `anthropic-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    attempt: 1
                }
            };
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                const status = error.response?.status;
                const message = error.response?.data?.error?.message || error.message;
                throw new Error(`Anthropic API error (${status}): ${message}`);
            }
            throw error;
        }
    }
    getAvailableModels() {
        return [
            'claude-3-opus-20240229',
            'claude-3-sonnet-20240229',
            'claude-3-haiku-20240307',
            'claude-2.1',
            'claude-2.0',
            'claude-instant-1.2'
        ];
    }
}
exports.AnthropicProvider = AnthropicProvider;
//# sourceMappingURL=anthropic.js.map