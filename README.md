# NexoraSIM IoT Entertainment Server

Premium IoT eSIM Entertainment Server platform with Azure IoT Hub integration, real-time telemetry, and Microsoft-powered architecture.

## Features

- **Azure IoT Hub Integration**: Real-time device management and telemetry
- **Digital Twins**: 3D visualization of IoT device fleet
- **Microsoft Graph Toolkit**: Enterprise authentication and data access
- **Fluent UI Components**: Premium Microsoft design system
- **Three.js WebGPU**: Advanced 3D particle systems and visualizations
- **GSAP Animations**: Smooth 240fps animations with scroll triggers
- **Real-time Telemetry**: Live data streaming from 100,000+ devices
- **Progressive Web App**: Full PWA with offline capabilities

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript ES2020+
- **3D Graphics**: Three.js r205 with WebGPU support
- **Animations**: GSAP 5.1 Ultimate with ScrollTrigger
- **UI Framework**: Microsoft Fluent UI Web Components
- **Authentication**: Microsoft Graph Toolkit 6.2
- **IoT Platform**: Azure IoT Hub + Digital Twins
- **Real-time**: Azure SignalR Service
- **Deployment**: Azure Static Web Apps + GitHub Pages

## Quick Start

### Prerequisites

- Node.js 18+ 
- Modern browser with WebGPU support
- Azure subscription (for IoT features)

### Installation

```bash
# Clone repository
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Pages (Automatic)

Push to main branch triggers automatic deployment to https://nexorasim.github.io

### Azure Static Web Apps

```bash
# Deploy to Azure
az staticwebapp create \
  --name nexorasim-iot \
  --resource-group nexorasim-rg \
  --source https://github.com/nexorasim/nexorasim.github.io \
  --location "East US 2" \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

### Custom Domain

Configure DNS for nexorasim.com:
- CNAME: nexorasim.github.io
- Azure Front Door for CDN and SSL

## Architecture

### IoT Data Flow

```
IoT Devices → Azure IoT Hub → Digital Twins → SignalR → Web App
     ↓              ↓              ↓           ↓         ↓
Device Twins → Stream Analytics → KQL → Real-time UI → 3D Viz
```

### Component Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── styles/             # CSS and themes
├── utils/              # Utility functions
├── assets/             # Static assets
└── services/           # API and IoT services
```

## IoT Features

### Device Management
- eSIM profile provisioning
- Device authentication
- Remote configuration
- Firmware updates

### Telemetry Processing
- Real-time data ingestion
- Stream analytics
- Anomaly detection
- Predictive maintenance

### Digital Twins
- 3D device visualization
- Property synchronization
- Command execution
- Relationship modeling

## Performance

- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 95+

## Security

- Content Security Policy (CSP)
- HTTPS enforcement
- Input sanitization
- Azure AD authentication
- Device certificate validation

## Browser Support

- Chrome 90+ (WebGPU required)
- Firefox 88+ (WebGL fallback)
- Safari 14+ (WebGL fallback)
- Edge 90+ (WebGPU preferred)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

Copyright (c) 2025 NexoraSIM. All rights reserved.

## Support

- Documentation: https://docs.nexorasim.com
- Issues: https://github.com/nexorasim/nexorasim.github.io/issues
- Email: support@nexorasim.com

## Roadmap

### Q1 2025
- [ ] WebXR support for spatial computing
- [ ] AI-powered device insights
- [ ] Multi-tenant architecture

### Q2 2025
- [ ] Edge computing integration
- [ ] 5G network slicing
- [ ] Blockchain device identity

### Q3 2025
- [ ] Quantum-safe encryption
- [ ] Autonomous device orchestration
- [ ] Global edge deployment

---

Built with Microsoft technologies and deployed on Azure. Powered by IoT innovation.