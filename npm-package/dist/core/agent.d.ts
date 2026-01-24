/**
 * @fileoverview Core NexoraAgent implementation
 */
import { AgentConfig, AgentResponse, ExecuteOptions, ProviderType, AuditLog } from '../types';
export declare class NexoraAgent {
    private config;
    private providerFactory;
    private logger;
    private auditLogs;
    constructor(config?: Partial<AgentConfig>);
    /**
     * Execute AI request with automatic fallback
     */
    execute(prompt: string, options?: ExecuteOptions): Promise<AgentResponse>;
    /**
     * Try executing with a specific provider
     */
    private tryProvider;
    /**
     * Get status of all providers
     */
    getProviderStatus(): Record<ProviderType, {
        enabled: boolean;
        configured: boolean;
    }>;
    /**
     * Get enabled providers
     */
    private getEnabledProviders;
    /**
     * Generate unique request ID
     */
    private generateRequestId;
    /**
     * Get audit logs
     */
    getAuditLogs(): AuditLog[];
    /**
     * Clear audit logs
     */
    clearAuditLogs(): void;
    /**
     * Get configuration
     */
    getConfig(): AgentConfig;
}
//# sourceMappingURL=agent.d.ts.map