# NexoraSIM ePM Portal Architecture

This document describes the production-grade, carrier-agnostic, posture-aware architecture for the NexoraSIM eSIM Profile Management (ePM) Portal, deployable via nexorasim.github.io.

## Layered Architecture

```mermaid
flowchart TB
  subgraph Device Layer
    M[Mobile]:::dev
    B[BYOD]:::dev
    I[IoT Endpoints]:::dev
    W[WARP Client]:::zt
    ZTS[CF Zero Trust SIM]:::zt
  end

  subgraph Operator Layer
    MPT[MPT SM-DP+]:::op
    ATOM[ATOM SM-DP+]:::op
    U9[U9 SM-DP+]:::op
    MY[MYTEL SM-DP+]:::op
    TIF[Traffic Inspection/Policy]:::op
  end

  subgraph Platform Layer
    O[Orchestration Engine]:::plat
    AG[API Gateway (Public/Internal)]:::plat
    MC[Management Console]:::plat
    IL[Integration Layer (BSS/OSS/CRM/Billing)]:::plat
    ADP[Adapter Framework]:::plat
    Q[Retry Queues/Outbox]:::plat
    AUD[Audit & Compliance]:::plat
    CFG[Policy/Config Store]:::plat
  end

  M -->|CF Access/WARP| AG
  B -->|CF Access/WARP| AG
  I -->|CF SIM/Access| AG
  W -.-> AG
  ZTS -.-> AG

  AG --> O
  O --> Q
  O --> CFG
  O --> AUD
  O --> ADP
  O --> IL

  ADP --> MPT
  ADP --> ATOM
  ADP --> U9
  ADP --> MY
  TIF -. Policy Feed .- O

  classDef dev fill:#e3f2fd,stroke:#2196f3,color:#000
  classDef op fill:#fff3e0,stroke:#fb8c00,color:#000
  classDef plat fill:#e8f5e9,stroke:#43a047,color:#000
  classDef zt fill:#ede7f6,stroke:#673ab7,color:#000
```

## Data Flows
- Device onboarding: Device authenticates via Cloudflare Access; WARP/Zero Trust SIM enforces posture. Public API Gateway issues short-lived tokens.
- Profile lifecycle: Orchestration receives order, selects operator, calls adapter, monitors state, writes audit logs, and updates inventory.
- Retry/outbox: All calls to SM-DP+ and integrations use idempotent, deduplicated commands persisted to a queue with exponential backoff.
- Analytics: Events emitted to a telemetry bus (console fallback) consumed by dashboards.

## Security and Zero Trust
- Cloudflare Access for admin/user console, service-to-service mTLS between components.
- Gateway policies for egress to SM-DP+ endpoints with Browser Isolation for console access.
- Per-tenant keys/claims; policy versioning in CFG with signed revisions.

## Multi-tenancy & RBAC
- Tenant isolation at data layer using tenant_id partitioning and scoped tokens.
- RBAC roles: superadmin, operator-admin, support, auditor, API-client.
- All API endpoints require tenant-scoped claims; audit logs include tenant, subject, action, policy version.

## Observability
- Structured logs (JSON), correlation IDs, request and domain events.
- Health checks per adapter and gateway; synthetic probes.

## High Availability
- Stateless services with backoff and circuit breakers around external SM-DP+ calls.
- Offline provisioning fallback with deferred activation and sync on reconnection.

## Extensibility
- Adapter interface contracts define capability flags per operator; new adapters register via manifest.
