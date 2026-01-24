"use strict";
/**
 * @fileoverview Groq provider implementation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroqProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("./base");
class GroqProvider extends base_1.BaseProvider {
    constructor(config) {
        super(config);
        this.client = axios_1.default.create({
            baseURL: 'https://api.groq.com/openai/v1',
            headers: {
                'Authorization': `Bearer ${this.config.apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'NexoraSIM-Agent/1.0.0'
            },
            timeout: this.config.timeout || 30000
        });
    }
    async execute(prompt, options = {}) {
        this.validateRequest(prompt);
        const model = options.model || this.config.model || 'mixtral-8x7b-32768';
        const temperature = options.temperature ?? this.config.temperature ?? 0.7;
        const maxTokens = options.maxTokens || this.config.maxTokens || 2000;
        return this.executeWithRetry(async () => {
            const response = await this.client.post('/chat/completions', {
                model,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature,
                max_tokens: maxTokens,
                stream: false
            });
            const choice = response.data.choices[0];
            if (!choice || !choice.message) {
                throw new Error('Invalid response from Groq API');
            }
            return {
                text: this.sanitizeResponse(choice.message.content),
                model: response.data.model,
                tokensUsed: response.data.usage?.total_tokens,
                metadata: {
                    finishReason: choice.finish_reason,
                    promptTokens: response.data.usage?.prompt_tokens,
                    completionTokens: response.data.usage?.completion_tokens,
                    responseId: response.data.id,
                    systemFingerprint: response.data.system_fingerprint
                }
            };
        });
    }
}
exports.GroqProvider = GroqProvider;
//# sourceMappingURL=groq.js.map