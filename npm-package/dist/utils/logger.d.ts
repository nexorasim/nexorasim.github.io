/**
 * @fileoverview Enterprise-grade logger with audit capabilities
 */
import { LogEntry } from '../types';
export declare class Logger {
    private level;
    private logs;
    private maxLogs;
    private levels;
    constructor(level?: string);
    debug(message: string, context?: Record<string, unknown>): void;
    info(message: string, context?: Record<string, unknown>): void;
    warn(message: string, context?: Record<string, unknown>): void;
    error(message: string, context?: Record<string, unknown>): void;
    private log;
    getLogs(level?: string): LogEntry[];
    clearLogs(): void;
    setLevel(level: string): void;
    getLevel(): string;
    exportLogs(format?: 'json' | 'csv'): string;
}
//# sourceMappingURL=logger.d.ts.map