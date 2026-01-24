/**
 * @fileoverview Provider factory for creating provider instances
 */
import { BaseProvider } from './base';
import { ProviderType, ProviderConfig } from '../types';
export declare class ProviderFactory {
    private providers;
    private configs;
    constructor(configs: Record<ProviderType, ProviderConfig>);
    private initializeProviders;
    getProvider(type: ProviderType): BaseProvider;
    getAvailableProviders(): ProviderType[];
    isProviderAvailable(type: ProviderType): boolean;
    getProviderStatus(): Record<ProviderType, {
        available: boolean;
        configured: boolean;
    }>;
    reloadProvider(type: ProviderType): void;
}
//# sourceMappingURL=factory.d.ts.map