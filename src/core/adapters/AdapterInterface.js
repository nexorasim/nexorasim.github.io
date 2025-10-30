// Carrier-agnostic adapter interface and registry scaffolding

export class AdapterInterface {
  constructor(id, endpoints, capabilities) {
    this.id = id;
    this.endpoints = endpoints;
    this.capabilities = capabilities;
  }
  async orderProfile(input, ctx) { throw new Error('NotImplemented'); }
  async revokeProfile(input, ctx) { throw new Error('NotImplemented'); }
  async syncStatus(input, ctx) { throw new Error('NotImplemented'); }
  async health() { return { adapter: this.id, status: 'degraded' }; }
}

export class AdapterRegistry {
  constructor() { this.adapters = new Map(); }
  register(adapter) { this.adapters.set(adapter.id, adapter); }
  get(id) { return this.adapters.get(id); }
  list() { return Array.from(this.adapters.values()).map(a => a.id); }
}

export const registry = new AdapterRegistry();
