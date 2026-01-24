/**
 * @fileoverview Configuration loader with environment variable support
 */
import { AgentConfig } from '../types';
export declare class ConfigLoader {
    static load(overrides?: Partial<AgentConfig>): AgentConfig;
    private static parseFallbackProviders;
    private static parseHeaders;
    private static mergeConfig;
    static validate(config: AgentConfig): void;
}
//# sourceMappingURL=loader.d.ts.map