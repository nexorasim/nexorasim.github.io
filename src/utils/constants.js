export const API_CONFIG = {
  BASE_URL: process.env.VITE_API_BASE_URL || 'https://api.nexorasim.com',
  VERSION: 'v2',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3
}

export const OPERATORS = {
  MPT: 'mpt',
  MYTEL: 'mytel', 
  ATOM: 'atom',
  U9: 'u9'
}

export const PROFILE_STATES = {
  CREATED: 'created',
  DOWNLOADED: 'downloaded',
  INSTALLED: 'installed',
  ENABLED: 'enabled',
  DISABLED: 'disabled',
  DELETED: 'deleted'
}

export const DEVICE_TYPES = {
  CONSUMER: 'consumer',
  IOT: 'iot',
  ENTERPRISE: 'enterprise'
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
}