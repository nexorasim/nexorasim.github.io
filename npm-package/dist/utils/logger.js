"use strict";
/**
 * @fileoverview Enterprise-grade logger with audit capabilities
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(level = 'info') {
        this.logs = [];
        this.maxLogs = 1000;
        this.levels = {
            debug: 0,
            info: 1,
            warn: 2,
            error: 3
        };
        this.level = level;
    }
    debug(message, context) {
        this.log('debug', message, context);
    }
    info(message, context) {
        this.log('info', message, context);
    }
    warn(message, context) {
        this.log('warn', message, context);
    }
    error(message, context) {
        this.log('error', message, context);
    }
    log(level, message, context) {
        if (this.levels[level] < this.levels[this.level]) {
            return;
        }
        const entry = {
            level,
            message,
            timestamp: new Date().toISOString(),
            context
        };
        // Store in memory
        this.logs.push(entry);
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }
        // Output to console
        const contextStr = context ? ` ${JSON.stringify(context)}` : '';
        const logMessage = `[${entry.timestamp}] ${level.toUpperCase()}: ${message}${contextStr}`;
        switch (level) {
            case 'debug':
                console.debug(logMessage);
                break;
            case 'info':
                console.info(logMessage);
                break;
            case 'warn':
                console.warn(logMessage);
                break;
            case 'error':
                console.error(logMessage);
                break;
        }
    }
    getLogs(level) {
        if (!level)
            return [...this.logs];
        return this.logs.filter(log => log.level === level);
    }
    clearLogs() {
        this.logs = [];
    }
    setLevel(level) {
        if (!(level in this.levels)) {
            throw new Error(`Invalid log level: ${level}`);
        }
        this.level = level;
    }
    getLevel() {
        return this.level;
    }
    exportLogs(format = 'json') {
        if (format === 'json') {
            return JSON.stringify(this.logs, null, 2);
        }
        if (format === 'csv') {
            const headers = 'timestamp,level,message,context\n';
            const rows = this.logs.map(log => {
                const context = log.context ? JSON.stringify(log.context).replace(/"/g, '""') : '';
                return `"${log.timestamp}","${log.level}","${log.message.replace(/"/g, '""')}","${context}"`;
            }).join('\n');
            return headers + rows;
        }
        throw new Error(`Unsupported export format: ${format}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map