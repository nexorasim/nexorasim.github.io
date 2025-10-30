import { AdapterInterface } from './AdapterInterface';

export default class ATOMAdapter extends AdapterInterface {
  constructor() {
    super('ATOM', { baseUrl: 'https://atom.smdp+' }, { pushMode: false, pullMode: true, revoke: true, asyncCallbacks: false });
  }
  async orderProfile(input, ctx) {
    return { ok: true, status: 'accepted' };
  }
  async revokeProfile(input, ctx) {
    return { ok: true, status: 'revocation-accepted' };
  }
  async syncStatus(input, ctx) {
    return { ok: true, status: 'provisioning' };
  }
  async health() { return { adapter: this.id, status: 'healthy' }; }
}
