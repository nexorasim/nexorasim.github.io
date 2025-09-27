# NexoraSIM™ Build System Documentation

## Complete Setup and Configuration Guide

### Prerequisites Installation

#### System Requirements
- **Node.js**: 18.0.0 or higher
- **Python**: 3.9.0 or higher
- **Git**: Latest version
- **AWS CLI**: Configured with appropriate credentials

#### Installation Commands
```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Python 3.9+
sudo apt-get install python3.9 python3-pip

# Install global packages
npm install -g @vue/cli vite typescript
pip3 install flask opentelemetry-sdk cryptography boto3
```

### Project Structure Setup

#### Repository Initialization
```bash
# Clone the repository
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io

# Initialize project structure
mkdir -p nexorasim-developer-portal/{src/{components,services,utils,assets},backend/{app,models,utils,scripts},tests,docs,configurations}
```

#### Core Configuration Files

**package.json** (Root level)
```json
{
  "name": "nexorasim-platform",
  "version": "1.0.0",
  "description": "NexoraSIM™ eSIM Profile Management Platform",
  "scripts": {
    "dev": "cd nexorasim-developer-portal && npm run dev",
    "build": "cd nexorasim-developer-portal && npm run build",
    "deploy": "./deploy-github-pages.sh",
    "test": "python3 tests/test_eid_validation.py"
  }
}
```

**vite.config.js** (Frontend)
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

### Backend Configuration

#### Flask Application Setup
```python
# backend/app/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3
from datetime import datetime

app = Flask(__name__)
CORS(app)

# AWS clients
dynamodb = boto3.resource('dynamodb')
cloudwatch = boto3.client('cloudwatch')

@app.route('/api/compliance/validate-eid', methods=['POST'])
def validate_eid():
    data = request.get_json()
    eid = data.get('eid', '')
    
    # EID validation logic
    is_valid = len(eid) == 32 and eid.isdigit()
    
    return jsonify({
        'valid': is_valid,
        'message': 'Valid EID' if is_valid else 'Invalid EID format'
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
```

#### Requirements File
```text
# backend/requirements.txt
Flask==2.3.3
Flask-CORS==4.0.0
boto3==1.28.57
opentelemetry-api==1.20.0
opentelemetry-sdk==1.20.0
pytest==7.4.2
requests==2.31.0
```

### Frontend Configuration

#### Vue.js Main Application
```javascript
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

#### Compliance Assistant Component
```vue
<!-- src/components/ComplianceAssistant.vue -->
<template>
  <div class="compliance-assistant">
    <div class="chat-container" v-if="showChat">
      <div class="chat-header">
        <h3>GSMA Compliance Assistant</h3>
        <button @click="toggleChat">×</button>
      </div>
      <div class="chat-messages">
        <div v-for="message in messages" :key="message.id" :class="message.type">
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Ask about GSMA compliance...">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
    <button v-else @click="toggleChat" class="chat-toggle">
      GSMA Assistant
    </button>
  </div>
</template>
```

### Database Configuration

#### SQLAlchemy Models
```python
# backend/models/device.py
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Device:
    device_model: str
    eUICC_version: str
    manufacturer: str
    certification_status: str
    eal_level: str
    gsma_compliance: bool
    created_at: datetime
    updated_at: datetime
```

### Validation Engine

#### EID Validator
```python
# backend/utils/eid_validator.py
import re

class EIDValidator:
    def __init__(self):
        self.valid_manufacturers = ['ABCD', 'EF01', '98C2']

    def validate_hex_format(self, eid):
        if not re.match(r'^[0-9A-Fa-f]{32}$', eid):
            return False, "Invalid EID format"
        return True, "Valid format"

    def validate_manufacturer_code(self, eid):
        manufacturer_code = eid[:4].upper()
        if manufacturer_code not in self.valid_manufacturers:
            return False, f"Invalid manufacturer code: {manufacturer_code}"
        return True, "Valid manufacturer"
```

### Build and Deployment

#### Startup Script
```bash
#!/bin/bash
# start_nexorasim.sh
echo "Starting NexoraSIM Developer Portal..."

# Check prerequisites
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Please install Node.js 18+"
    exit 1
fi

# Install dependencies
npm install
cd backend && pip3 install -r requirements.txt && cd ..

# Start services
cd backend && python3 app/app.py &
npm run dev &

echo "Frontend: http://localhost:8080"
echo "Backend API: http://localhost:5000"
```

#### GitHub Pages Deployment
```bash
#!/bin/bash
# deploy-github-pages.sh
set -e

echo "Deploying NexoraSIM to GitHub Pages..."

# Build application
cd nexorasim-developer-portal
npm install
npm run build
cd ..

# Deploy to GitHub Pages
cp -r nexorasim-developer-portal/dist/* .
git add .
git commit -m "Deploy NexoraSIM to GitHub Pages"
git push origin main

echo "Deployed to: https://nexorasim.github.io"
```

### Testing Configuration

#### Unit Tests
```python
# tests/test_eid_validation.py
import unittest
from backend.utils.eid_validator import EIDValidator

class TestEIDValidation(unittest.TestCase):
    def setUp(self):
        self.validator = EIDValidator()

    def test_valid_eid_format(self):
        valid_eid = "ABCD0123456789ABCDEF0123456789AB"
        is_valid, message = self.validator.validate_hex_format(valid_eid)
        self.assertTrue(is_valid)

    def test_invalid_eid_format(self):
        invalid_eid = "INVALID123"
        is_valid, message = self.validator.validate_hex_format(invalid_eid)
        self.assertFalse(is_valid)
```

### CI/CD Configuration

#### GitHub Actions Workflow
```yaml
# .github/workflows/deploy-nexorasim.yml
name: NexoraSIM Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
          
      - name: Install dependencies
        run: |
          npm install
          pip install -r backend/requirements.txt
          
      - name: Run tests
        run: |
          python -m pytest tests/
          
      - name: Build application
        run: |
          npm run build
          
      - name: Deploy to GitHub Pages
        run: |
          ./deploy-github-pages.sh
```

### Environment Configuration

#### Development Environment
```bash
# .env
DATABASE_URL=postgresql://user:password@localhost/nexorasim
SMDP_BASE_URL=https://smdp.nexorasim.com
COMPLIANCE_LEVEL=SAS-SM_v3.4.2
SUPPORTED_EAL_LEVEL=6
VUE_APP_API_BASE_URL=http://localhost:5000
```

### AWS Infrastructure

#### CloudFormation Template
```yaml
# nexorasim-complete-infrastructure.yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'NexoraSIM Complete Infrastructure'

Resources:
  # EAL6+ Device Compatibility Table
  CompatibilityTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: nexorasim-eal6-compatibility
      AttributeDefinitions:
        - AttributeName: device_model
          AttributeType: S
      KeySchema:
        - AttributeName: device_model
          KeyType: HASH
      BillingMode: PAY_PER_REQUEST

  # CloudWatch Alarms
  EIDValidationAlarm:
    Type: AWS::CloudWatch::Alarm
    Properties:
      AlarmName: HighEIDValidationFailureRate
      MetricName: ValidationFailureRate
      Namespace: NexoraSIM/Compliance
      Threshold: 5.0
```

### Quick Start Commands

```bash
# 1. Clone and setup
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io

# 2. Start development
./nexorasim-developer-portal/start_nexorasim.sh

# 3. Run tests
python3 tests/test_eid_validation.py

# 4. Deploy
./deploy-github-pages.sh
```

### Troubleshooting

#### Common Issues
1. **Port conflicts**: Change ports in vite.config.js
2. **Python dependencies**: Use virtual environment
3. **AWS credentials**: Configure AWS CLI properly
4. **Build failures**: Check Node.js version compatibility

#### Debug Commands
```bash
# Check system requirements
node --version
python3 --version
aws --version

# Validate configuration
python3 error-check-update.py

# Test API endpoints
curl http://localhost:5000/health
```

---

**NexoraSIM™** - Complete eSIM Profile Management Platform with GSMA SAS-SM v3.4.2 Compliance