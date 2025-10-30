# Deployment Blueprint: NexoraSIM ePM Portal

This blueprint details deployment via GitHub Pages (nexorasim.github.io) and production runtime considerations.

## Build and Hosting
- Framework: Vite + React already present in repo. Output: `dist/`.
- GitHub Pages: Publish from `gh-pages` branch or `docs/` folder; we recommend GitHub Action to push `dist/` to `gh-pages`.

### GitHub Pages Steps
1. Create repo settings → Pages → Deploy from branch `gh-pages` (root), or use Actions.
2. Add workflow to build and deploy on push to `main`.

### Sample Workflow (reference)
```yaml
name: Deploy ePM Portal
on:
  push:
    branches: [ main ]
permissions:
  contents: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Runtime Topology
- Public UI hosted on Pages.
- API endpoints proxied via Cloudflare (Zero Trust Gateway/Access) to backend services (can be external managed services or serverless). Stubbed APIs can be simulated in the UI until backend is bound.

## Isolation & RBAC
- Tenant isolation via tenant_id in JWT and data partitioning in backends.
- Enforce RBAC in API gateway with route-based policies and claims mapping.

## Retry Queues
- Outbox pattern for SM-DP+ calls: persist command → dispatch → track status → retry/backoff (e.g., 1s, 5s, 25s, 2m, 10m) with jitter. Dead-letter after N attempts with alerting.

## Monitoring Hooks
- Health endpoints per adapter: `/health/adapters/{id}`.
- Emit domain events: `ProfileProvisioned`, `ProfileRevoked`, `AdapterTimeout`, `SwapDetected`.
- Hook to external observability (e.g., Datadog, Cloudflare Logs) via environment configuration.

## Zero Trust Integration
- Protect management console paths with Cloudflare Access (SSO), device posture checks (WARP), isolation for sensitive admin pages.
- Gateway egress policies for SM-DP+ hostnames per operator.

## Bilingual UI
- i18n: English and Burmese via `src/hooks/useLanguage.jsx`. Content keys in UI must use translation hook; default to English.

## Offline Fallback & SIM Swap Detection
- UI queues provisioning instructions client-side when offline; backend replays queued commands on reconnect.
- Swap detection via periodic EUICC info sync, compare EID/ICCID bindings; raise audit event and require step-up auth.

## Deployment Commands
- npm ci
- npm run build
- npm run preview (local)

To push to GitHub Pages manually:
- npm run build
- npx gh-pages -d dist

Compliance references: see docs/compliance-checklist.md.
