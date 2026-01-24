"use strict";
/**
 * @fileoverview Google Gemini provider implementation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("./base");
class GeminiProvider extends base_1.BaseProvider {
    constructor(config) {
        super(config);
        this.client = axios_1.default.create({
            baseURL: 'https://generativelanguage.googleapis.com/v1beta',
            timeout: this.config.timeout || 30000
        });
    }
    async execute(prompt, options = {}) {
        this.validateRequest(prompt);
        const model = options.model || this.config.model || 'gemini-pro';
        const temperature = options.temperature ?? this.config.temperature ?? 0.7;
        const maxTokens = options.maxTokens || this.config.maxTokens || 2000;
        return this.executeWithRetry(async () => {
            const response = await this.client.post(`/models/${model}:generateContent?key=${this.config.apiKey}`, {
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature,
                    maxOutputTokens: maxTokens,
                    topP: 0.8,
                    topK: 10
                }
            });
            const candidate = response.data.candidates?.[0];
            if (!candidate || !candidate.content) {
                throw new Error('Invalid response from Gemini API');
            }
            const text = candidate.content.parts?.[0]?.text;
            if (!text) {
                throw new Error('No text content in Gemini response');
            }
            return {
                text: this.sanitizeResponse(text),
                model,
                tokensUsed: response.data.usageMetadata?.totalTokenCount,
                metadata: {
                    finishReason: candidate.finishReason,
                    promptTokens: response.data.usageMetadata?.promptTokenCount,
                    completionTokens: response.data.usageMetadata?.candidatesTokenCount,
                    safetyRatings: candidate.safetyRatings
                }
            };
        });
    }
}
exports.GeminiProvider = GeminiProvider;
//# sourceMappingURL=gemini.js.map