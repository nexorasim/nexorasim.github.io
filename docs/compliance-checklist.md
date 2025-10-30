# Compliance Checklist

Areas: Regulatory, Operational, Security, Privacy, Observability.

## Regulatory & Operational
- [ ] Maintain audit logs for all admin/API actions with tenant, subject, action, resource, policyVersion, result
- [ ] Policy versioning with signed revisions and immutable history
- [ ] Data retention policy for audit/inventory/events (configurable by tenant)
- [ ] Incident response runbooks and contacts
- [ ] Change management: PR reviews, change logs, approvals

## Security & Zero Trust
- [ ] Cloudflare Access protecting console/admin routes
- [ ] Device posture checks (WARP) required for admin users
- [ ] Gateway egress restrictions for SM-DP+ endpoints per operator
- [ ] mTLS or client certs where required (e.g., MPT)
- [ ] JWTs are tenant-scoped with RBAC claims; short-lived tokens
- [ ] Secrets managed via vault; no secrets in repo

## Privacy
- [ ] Pseudonymization of PII in logs
- [ ] Data minimization in telemetry
- [ ] Right-to-erasure workflows

## Observability & Reliability
- [ ] Structured JSON logs with correlation IDs
- [ ] Health endpoints and synthetic probes
- [ ] Retry with exponential backoff and DLQ
- [ ] Alerting on adapter degradation or repeated retries

## Testing & Validation
- [ ] Unit tests for adapters and orchestration
- [ ] Integration tests with mocked SM-DP+ servers
- [ ] Load tests for rate limits per operator
- [ ] Security scans and dependency checks
