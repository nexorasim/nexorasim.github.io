# NexoraSIM WSL Development Environment

## WSL Setup and Deployment Guide

### Prerequisites
- Windows 10/11 with WSL2 enabled
- Ubuntu 22.04 LTS (recommended)
- Git configured with GitHub access

### Quick Setup

#### 1. Enable WSL (if not already enabled)
```powershell
# Run in PowerShell as Administrator
wsl --install -d Ubuntu-22.04
```

#### 2. Setup Development Environment
```bash
# In WSL terminal
cd /mnt/c/Users/KAUNGHTETPAING/Documents/GitHub/nexorasim.github.io/wsl-dev
chmod +x setup-wsl-dev.sh
./setup-wsl-dev.sh
```

#### 3. Navigate to Project
```bash
cd nexorasim-entertainment-server
```

#### 4. Install Dependencies
```bash
npm install
```

#### 5. Start Development Server
```bash
npm run dev
```

#### 6. Deploy to GitHub Pages
```bash
chmod +x scripts/deploy-wsl.sh
./scripts/deploy-wsl.sh
```

### Development Workflow

#### Local Development
```bash
# Start development server
npm run dev

# Open browser to http://localhost:5173
# Hot reload enabled for real-time development
```

#### Build and Test
```bash
# Build production bundle
npm run build

# Preview production build
npm run preview

# Validate Microsoft stack
npm run validate
```

#### Deployment
```bash
# Deploy to GitHub Pages
npm run deploy

# Or use WSL deployment script
./scripts/deploy-wsl.sh
```

### Project Structure
```
nexorasim-entertainment-server/
 src/
    components/          # React components
       Header.jsx       # Dynamic Island header
       Footer.jsx       # Premium footer
       CopilotOrb.jsx   # AI Copilot integration
    pages/               # Page components
       HomePage.jsx     # 3D hero homepage
       EntitlementServer.jsx
       Features.jsx
       API.jsx
       ...              # All 300 pages
    styles/
       globals.css      # iOS 26 design system
    main.jsx             # React entry point
 public/                  # Static assets
 scripts/                 # Deployment scripts
 package.json             # Dependencies
 vite.config.js           # Build configuration
 index.html               # HTML template
```

### Microsoft-Only Stack Components

#### Frontend Framework
- **React 18** with Vite build system
- **Microsoft Graph Toolkit 6.2** integration
- **Fluent UI React 10** components
- **Three.js + GSAP** (Microsoft-approved)

#### Design System
- **iOS 26 Design Language** implementation
- **Dynamic Island Header** with glassmorphism
- **Full-Viewport 3D Hero** with WebGL
- **Parallax Scroll Sections** with animations
- **Glassmorphic Cards** with backdrop-filter
- **Floating Copilot Orb** integration

#### Color Palette
```css
--pearl: #F5F5F5          /* Main background */
--black: #000000          /* Primary text */
--accent: #00D1FF         /* Buttons, highlights */
--graphite: #333333       /* Secondary elements */
--glass: rgba(245,245,245,0.7)  /* Glassmorphism */
```

### 300 Pages Architecture

#### Core Platform (25 pages)
- Home, Entitlement Server, Features, Architecture
- Technology, Devices, Transfer, Migration
- Roaming, 5G, VoLTE, Security, Compliance
- Partners, Enterprise, API, Contact, Support
- FAQ, About, Team, Careers, News, Blog, Press

#### Network Operators (20 pages)
- MPT Myanmar (5 pages)
- MYTEL (5 pages)
- ATOM (5 pages)
- U9 Network (5 pages)

#### Regional Languages (175 pages)
- English (25 pages)
- Chinese (25 pages)
- Thai (25 pages)
- Vietnamese (25 pages)
- Indonesian (25 pages)
- Malay (25 pages)
- Myanmar (25 pages)

#### Technical Deep-Dive (30 pages)
- eSIM Architecture, GSMA Standards
- SM-DP+, SM-SR, LPA, eUICC
- 5G Integration, VoLTE, Streaming
- Security, Compliance, Analytics

#### Industries & Use Cases (50 pages)
- Telecommunications, Entertainment
- IoT, Automotive, Healthcare
- Travel, Business, Emergency Services
- And more specialized use cases

### Deployment Targets

#### GitHub Pages
- **Primary**: https://nexorasim.github.io
- **Custom Domain**: nexorasim.com
- **Repository**: github.com/nexorasim/nexorasim.github.io

#### Azure Static Web Apps
```bash
# Deploy to Azure
npm run azure:deploy
```

#### Performance Targets
- **Page Load**: <2s (95th percentile)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Core Web Vitals**: All green
- **Concurrent Users**: 50 million capacity

### Security Configuration

#### Zero Trust Architecture
- IP allow lists for Myanmar, Singapore, Japan, USA, UK, EU
- Cloudflare Zero Trust integration
- Azure Front Door with WAF
- Microsoft Defender protection

#### Authentication
- Microsoft Entra ID for admin access only
- Public site: Anonymous access
- OAuth 2.0 + Conditional Access
- Multi-factor authentication required

### AI Integration

#### Microsoft Copilot Studio
- Custom GPT trained on 3000+ eSIM FAQs
- Real-time translation (7 languages)
- Glassmorphic floating orb UI
- 540+ conversation topics

### Contact Information
- **Domain**: nexorasim.com
- **Email**: info@nexorasim.com
- **GitHub**: github.com/nexorasim
- **Repository**: nexorasim.github.io

### Troubleshooting

#### Common Issues
1. **WSL not found**: Enable WSL2 in Windows features
2. **Node.js missing**: Run setup-wsl-dev.sh script
3. **Build fails**: Check Microsoft dependencies
4. **Deploy fails**: Verify GitHub authentication

#### Support
- Check WSL documentation: https://docs.microsoft.com/en-us/windows/wsl/
- Vite documentation: https://vitejs.dev/
- React documentation: https://react.dev/
- Microsoft Graph Toolkit: https://docs.microsoft.com/en-us/graph/toolkit/

---

**NexoraSIM Entertainment Server - WSL Development Environment**
**Microsoft-Only Stack | iOS 26 Design | 300 Pages Ready**
**Ready for 50 Million Users Globally**