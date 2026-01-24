"use strict";
/**
 * @fileoverview Provider factory for creating provider instances
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderFactory = void 0;
const openai_1 = require("./openai");
const gemini_1 = require("./gemini");
const xai_grok_1 = require("./xai-grok");
const groq_1 = require("./groq");
const anthropic_1 = require("./anthropic");
const generic_http_1 = require("./generic-http");
class ProviderFactory {
    constructor(configs) {
        this.providers = new Map();
        this.configs = configs;
        this.initializeProviders();
    }
    initializeProviders() {
        const providerClasses = {
            openai: openai_1.OpenAIProvider,
            google_gemini: gemini_1.GeminiProvider,
            xai_grok: xai_grok_1.XAIGrokProvider,
            groq: groq_1.GroqProvider,
            anthropic: anthropic_1.AnthropicProvider,
            generic_http: generic_http_1.GenericHTTPProvider
        };
        Object.entries(this.configs).forEach(([providerType, config]) => {
            if (config.enabled) {
                const ProviderClass = providerClasses[providerType];
                if (ProviderClass) {
                    try {
                        const provider = new ProviderClass(config);
                        this.providers.set(providerType, provider);
                    }
                    catch (error) {
                        console.warn(`Failed to initialize provider ${providerType}:`, error);
                    }
                }
            }
        });
    }
    getProvider(type) {
        const provider = this.providers.get(type);
        if (!provider) {
            throw new Error(`Provider ${type} is not available or not configured`);
        }
        return provider;
    }
    getAvailableProviders() {
        return Array.from(this.providers.keys());
    }
    isProviderAvailable(type) {
        return this.providers.has(type);
    }
    getProviderStatus() {
        const status = {};
        Object.entries(this.configs).forEach(([providerType, config]) => {
            const provider = this.providers.get(providerType);
            status[providerType] = {
                available: Boolean(provider),
                configured: Boolean(config.apiKey) && config.enabled
            };
        });
        return status;
    }
    reloadProvider(type) {
        const config = this.configs[type];
        if (!config || !config.enabled) {
            this.providers.delete(type);
            return;
        }
        const providerClasses = {
            openai: openai_1.OpenAIProvider,
            google_gemini: gemini_1.GeminiProvider,
            xai_grok: xai_grok_1.XAIGrokProvider,
            groq: groq_1.GroqProvider,
            anthropic: anthropic_1.AnthropicProvider,
            generic_http: generic_http_1.GenericHTTPProvider
        };
        const ProviderClass = providerClasses[type];
        if (ProviderClass) {
            try {
                const provider = new ProviderClass(config);
                this.providers.set(type, provider);
            }
            catch (error) {
                console.warn(`Failed to reload provider ${type}:`, error);
                this.providers.delete(type);
            }
        }
    }
}
exports.ProviderFactory = ProviderFactory;
//# sourceMappingURL=factory.js.map