# NexoraSIM Entitlement Server

Enterprise-grade eSIM platform for MPT, MYTEL, ATOM, and U9 networks in Myanmar.

## Features

- Multi-operator eSIM provisioning (MPT, MYTEL, ATOM, U9)
- Real-time device management and analytics
- Enterprise-grade security and compliance
- RESTful API with comprehensive documentation
- Bilingual support (English/Myanmar)

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Quick install (Linux/macOS)
curl -sSL https://raw.githubusercontent.com/nexorasim/nexorasim.github.io/main/download.sh | bash

# Manual installation
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io
pwsh install.ps1
```

### System Operations

```bash
npm run install:system          # Install development
npm run install:production      # Install production
npm run run:dev                 # Run development
npm run run:prod                # Run production
npm run error:check             # Error validation
npm run enable:all              # Enable components
npm run deploy:prod             # Deploy production
npm run health:check            # Health monitoring
```

## Project Structure

```
src/
|-- components/     # Reusable UI components
|-- pages/         # Page components
|-- hooks/         # Custom React hooks
|-- data/          # Static data and API documentation
|-- styles/        # Global styles and Tailwind CSS
`-- utils/         # Utility functions
```

## Technology Stack

- Frontend: React 18, Vite, Tailwind CSS
- 3D Graphics: Three.js, React Three Fiber
- Routing: React Router DOM
- Deployment: GitHub Pages

## API Documentation

Comprehensive API documentation is available at `/docs/api-reference`

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## Security

For security concerns, please email security@nexorasim.com

## License

Proprietary - All rights reserved by NexoraSIM

## Live Demo

https://nexorasim.github.io