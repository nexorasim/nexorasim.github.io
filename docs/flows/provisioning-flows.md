# Provisioning Flowcharts

```mermaid
flowchart TD
  A[Order Received] --> B{Select Operator}
  B -->|MPT| C1[MPT Adapter: orderProfile]
  B -->|ATOM| C2[ATOM Adapter: orderProfile]
  B -->|U9| C3[U9 Adapter: orderProfile]
  B -->|MYTEL| C4[MYTEL Adapter: orderProfile]

  C1 --> D{Result}
  C2 --> D
  C3 --> D
  C4 --> D

  D -->|ok| E[Persist profile: provisioning]
  D -->|retryAfter| F[Queue retry with backoff]
  D -->|fail| G[Persist failure + audit]

  E --> H[Wait for callback or poll]
  H --> I{Provisioned?}
  I -->|Yes| J[Update state: provisioned + audit]
  I -->|No| F

  G --> K[Notify integrations]

```

## Sync Flow
```mermaid
sequenceDiagram
  participant O as Orchestrator
  participant A as Adapter
  participant S as SM-DP+
  O->>A: syncStatus(iccid)
  A->>S: GET /status?iccid
  S-->>A: 200 state
  A-->>O: AdapterResult{ok,true,data:state}
  O->>O: Update inventory + emit event
```

## Offline Fallback
- If device/posture is offline, order is accepted and queued. UI shows pending.
- On reconnect, orchestrator replays queued commands and resumes polling.

## SIM Swap Detection
- Periodic EUICC sync; if EID-ICCID mismatch, emit SwapDetected, lock actions until step-up auth.
