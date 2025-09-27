# NexoraSIM™ Developer Portal

**Complete eSIM Profile Management System with GSMA SAS-SM v3.4.2 Compliance**

## Overview

NexoraSIM™ is a comprehensive SM-DP+ (Subscription Manager Data Preparation) platform designed for eSIM profile management with full GSMA compliance and EAL6+ device certification support.

## Features

- **GSMA SAS-SM v3.4.2 Compliance** - Full compliance with latest GSMA standards
- **EAL6+ Device Support** - Certified for highest security evaluation levels
- **FIPS 140-3 Level 3** - Hardware security module integration
- **Real-time Monitoring** - CloudWatch metrics and compliance alerting
- **Developer Portal** - Vue.js frontend with Flask backend
- **Amazon Q Integration** - AI-powered compliance assistance

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- AWS CLI configured
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io

# Start NexoraSIM Developer Portal
./nexorasim-developer-portal/start_nexorasim.sh
```

### Access Points
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## Architecture

### Infrastructure Components
- **CloudHSM Cluster** - FIPS 140-3 Level 3 encryption
- **DynamoDB** - EAL6+ device compatibility matrix
- **S3 Bucket** - GSMA compliance documentation
- **CloudWatch** - Real-time compliance monitoring
- **API Gateway** - RESTful API endpoints

### Developer Portal
- **Vue.js Frontend** - Modern reactive UI
- **Flask Backend** - Python REST API
- **EID Validation** - GSMA-compliant device validation
- **Compliance Assistant** - Amazon Q integration

## Deployment

### AWS Infrastructure
```bash
# Deploy complete infrastructure
aws cloudformation deploy \
  --template-file nexorasim-complete-infrastructure.yaml \
  --stack-name nexorasim-prod \
  --capabilities CAPABILITY_IAM
```

### GitHub Pages
```bash
# Build and deploy to GitHub Pages
npm run build
git subtree push --prefix dist origin gh-pages
```

### Vercel/Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Auto-deploy on push to main branch

## API Documentation

### EID Validation
```bash
POST /api/compliance/validate-eid
{
  "eid": "ABCD0123456789ABCDEF0123456789AB"
}
```

### Device Compatibility
```bash
GET /api/devices/{device_model}/compatibility
```

### Compliance Metrics
```bash
GET /api/compliance/metrics
```

## Testing

```bash
# Run compliance tests
python3 tests/test_eid_validation.py

# Run error checking
python3 error-check-update.py

# Validate infrastructure
aws cloudformation validate-template \
  --template-body file://nexorasim-complete-infrastructure.yaml
```

## Compliance Standards

- **GSMA SAS-SM v3.4.2** - Subscription Manager Secure Messaging
- **SGP.22 v3.3** - Remote SIM Provisioning Architecture
- **EAL6+** - Common Criteria Evaluation Assurance Level
- **FIPS 140-3 Level 3** - Federal Information Processing Standards

## Security Features

- Hardware Security Module (CloudHSM)
- End-to-end encryption
- Audit logging with OpenTelemetry
- Real-time compliance monitoring
- Automated security scanning

## Support

For technical support and documentation:
- **Developer Portal**: https://developer.nexorasim.com
- **Documentation**: https://docs.nexorasim.com
- **GitHub Issues**: https://github.com/nexorasim/nexorasim.github.io/issues

## License

Copyright © 2024 NexoraSIM™. All rights reserved.

---

**NexoraSIM™** - Powering the future of eSIM technology with uncompromising security and compliance.