/**
 * @fileoverview Enterprise-grade logger with audit capabilities
 */

import { LogEntry } from '../types';

export class Logger {
  private level: string;
  private logs: LogEntry[] = [];
  private maxLogs: number = 1000;

  private levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };

  constructor(level: string = 'info') {
    this.level = level;
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log('debug', message, context);
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log('info', message, context);
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.log('warn', message, context);
  }

  error(message: string, context?: Record<string, unknown>): void {
    this.log('error', message, context);
  }

  private log(level: string, message: string, context?: Record<string, unknown>): void {
    if (this.levels[level as keyof typeof this.levels] < this.levels[this.level as keyof typeof this.levels]) {
      return;
    }

    const entry: LogEntry = {
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

  getLogs(level?: string): LogEntry[] {
    if (!level) return [...this.logs];
    return this.logs.filter(log => log.level === level);
  }

  clearLogs(): void {
    this.logs = [];
  }

  setLevel(level: string): void {
    if (!(level in this.levels)) {
      throw new Error(`Invalid log level: ${level}`);
    }
    this.level = level;
  }

  getLevel(): string {
    return this.level;
  }

  exportLogs(format: 'json' | 'csv' = 'json'): string {
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