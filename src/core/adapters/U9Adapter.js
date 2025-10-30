import { AdapterInterface } from './AdapterInterface';

export default class U9Adapter extends AdapterInterface {
  constructor() {
    super('U9', { baseUrl: 'https://u9.smdp+' }, { pushMode: false, pullMode: true, revoke: false, asyncCallbacks: false });
  }
  async orderProfile(input, ctx) {
    return { ok: true, status: 'activation-code-issued' };
  }
  async revokeProfile(input, ctx) {
    return { ok: false, status: 'not-supported' };
  }
  async syncStatus(input, ctx) {
    return { ok: true, status: 'pending-activation' };
  }
  async health() { return { adapter: this.id, status: 'healthy' }; }
}
