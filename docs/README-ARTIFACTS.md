# NexoraSIM ePM Portal Deliverables

Artifacts included:
- docs/architecture.md
- docs/deployment-blueprint.md
- docs/api/openapi.yaml
- docs/adapters/operator-adapter-contracts.md
- docs/flows/provisioning-flows.md
- docs/compliance-checklist.md
- scripts/ci-validate.sh
- src/core/adapters/*

How to validate locally:
- bash scripts/ci-validate.sh

How to build and deploy to GitHub Pages:
- npm ci && npm run build
- Configure Pages to serve from gh-pages using the provided workflow in deployment blueprint.
