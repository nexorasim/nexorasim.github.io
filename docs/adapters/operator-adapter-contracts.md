# SM-DP+ Adapter Contracts

Carrier-agnostic abstraction for operator-specific SM-DP+ implementations.

## Core Interface
```ts
export interface SmdpAdapter {
  id: 'MPT' | 'ATOM' | 'U9' | 'MYTEL' | string;
  capabilities: {
    pushMode: boolean; // supports push to device
    pullMode: boolean; // supports LPA-assisted pull
    revoke: boolean;
    asyncCallbacks: boolean; // supports callback webhooks
  };
  endpoints: {
    baseUrl: string;
  };

  orderProfile(input: OrderInput, ctx: AdapterContext): Promise<AdapterResult>;
  revokeProfile(input: RevokeInput, ctx: AdapterContext): Promise<AdapterResult>;
  syncStatus(input: SyncInput, ctx: AdapterContext): Promise<AdapterResult>;
  health(): Promise<Health>;
}

export type OrderInput = {
  tenantId: string; iccid: string; eid: string; msisdn?: string; planId?: string; metadata?: Record<string, any>
};
export type RevokeInput = { tenantId: string; iccid: string; reason?: string };
export type SyncInput = { tenantId: string; iccid: string };
export type Health = { adapter: string; status: 'healthy' | 'degraded' | 'down'; details?: any };
export type AdapterResult = { ok: boolean; status: string; data?: any; retryAfterSec?: number; correlationId?: string };

export type AdapterContext = {
  correlationId: string;
  policyVersion: string;
  retryCount: number;
  headers?: Record<string, string>;
  timeoutMs?: number;
};
```

## Operator Contracts
- MPT: Requires ECDSA client certificate; async callbacks.
- ATOM: Synchronous order with polling status; revocation immediate.
- U9: Pull mode only; LPA must fetch activation code; no revoke.
- MYTEL: Push mode preferred; supports both order and revoke; rate limits 100 rps.

## Error Handling
- All methods must return AdapterResult with `ok=false` and `retryAfterSec` on transient errors; include `correlationId`.

## Registration
Adapters register via a manifest within the platform layer:
```json
{
  "adapters": [
    {"id": "MPT", "module": "./MPTAdapter.js"},
    {"id": "ATOM", "module": "./ATOMAdapter.js"},
    {"id": "U9", "module": "./U9Adapter.js"},
    {"id": "MYTEL", "module": "./MYTELAdapter.js"}
  ]
}
```
