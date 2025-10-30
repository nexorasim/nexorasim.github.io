import { AdapterInterface } from './AdapterInterface';

export default class MPTAdapter extends AdapterInterface {
  constructor() {
    super('MPT', { baseUrl: 'https://mpt.smdp+' }, { pushMode: true, pullMode: true, revoke: true, asyncCallbacks: true });
  }
  async orderProfile(input, ctx) {
    return { ok: true, status: 'accepted', data: { correlationId: ctx.correlationId } };
  }
  async revokeProfile(input, ctx) {
    return { ok: true, status: 'revocation-accepted' };
  }
  async syncStatus(input, ctx) {
    return { ok: true, status: 'provisioned', data: { iccid: input.iccid } };
  }
  async health() { return { adapter: this.id, status: 'healthy' }; }
}
