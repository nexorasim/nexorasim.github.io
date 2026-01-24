/**
 * @fileoverview Jest test setup
 */

// Mock environment variables for testing
process.env.NODE_ENV = 'test';
process.env.DEFAULT_PROVIDER = 'openai';
process.env.OPENAI_ENABLED = 'true';
process.env.OPENAI_API_KEY = 'test-key';
process.env.GEMINI_ENABLED = 'true';
process.env.GOOGLE_API_KEY = 'test-key';

// Global test timeout
jest.setTimeout(10000);

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};