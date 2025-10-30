import { AdapterInterface } from './AdapterInterface';

export default class MYTELAdapter extends AdapterInterface {
  constructor() {
    super('MYTEL', { baseUrl: 'https://mytel.smdp+' }, { pushMode: true, pullMode: true, revoke: true, asyncCallbacks: false });
  }
  async orderProfile(input, ctx) {
    return { ok: true, status: 'accepted' };
  }
  async revokeProfile(input, ctx) {
    return { ok: true, status: 'revocation-accepted' };
  }
  async syncStatus(input, ctx) {
    return { ok: true, status: 'provisioned' };
  }
  async health() { return { adapter: this.id, status: 'healthy' }; }
}
