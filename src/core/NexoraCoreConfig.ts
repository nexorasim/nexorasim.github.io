/**
 * NexoraCore AI Configuration
 * 2026 Microsoft Global Black Belt Architecture Standard
 */

export interface NexoraCoreConfig {
  platform: {
    domain: string;
    repository: string;
    architecture: string;
    deployment: string;
  };
  microsoft: {
    graphApi: string;
    fluentUi: string;
    graphToolkit: string;
    azureStaticApps: string;
    entraId: string;
    fabric: string;
    copilotStudio: string;
  };
  design: {
    colors: {
      pearl: string;
      black: string;
      accent: string;
      graphite: string;
      glass: string;
    };
    typography: string[];
    layout: {
      hero: string;
      header: string;
      scrolling: string;
      cards: string;
      navigation: string;
      copilot: string;
    };
  };
  languages: {
    supported: string[];
    primary: string;
    translator: string;
  };
  security: {
    zeroTrust: boolean;
    ipAllowList: string[];
    cloudflare: boolean;
    azureFrontDoor: boolean;
    waf: boolean;
  };
  capabilities: {
    esim: string[];
    enterprise: string[];
    realtime: string[];
  };
}

export const nexoraCoreConfig: NexoraCoreConfig = {
  platform: {
    domain: 'nexorasim.com',
    repository: 'github.com/nexorasim/nexorasim.github.io',
    architecture: '2026 Microsoft Global Black Belt Standard',
    deployment: 'Azure Static Web Apps Premium'
  },
  microsoft: {
    graphApi: 'v6.2 + Beta',
    fluentUi: 'React 10 (November 2025)',
    graphToolkit: '6.2',
    azureStaticApps: 'Premium',
    entraId: 'Conditional Access + PIM',
    fabric: 'Real-Time Intelligence + KQL',
    copilotStudio: 'Embedded Agent'
  },
  design: {
    colors: {
      pearl: '#F5F5F5',
      black: '#000000',
      accent: '#00D1FF',
      graphite: '#333333',
      glass: 'rgba(245,245,245,0.7)'
    },
    typography: [
      'Segoe UI Variable',
      'Leelawadee UI',
      'Noto Sans',
      'system-ui'
    ],
    layout: {
      hero: 'Full-viewport 3D with GSAP + Three.js',
      header: 'Dynamic island (iOS 26 style)',
      scrolling: 'Parallax sections',
      cards: 'Glass with blur(24px)',
      navigation: 'Fixed mobile navigation',
      copilot: 'Floating glassmorphic orb'
    }
  },
  languages: {
    supported: ['en', 'my', 'zh', 'th', 'vi', 'id', 'ms'],
    primary: 'en',
    translator: 'Microsoft AI Translator'
  },
  security: {
    zeroTrust: true,
    ipAllowList: ['Myanmar', 'Singapore', 'Japan', 'USA', 'GB', 'EU'],
    cloudflare: true,
    azureFrontDoor: true,
    waf: true
  },
  capabilities: {
    esim: [
      'eSIM Transfer Android → Apple',
      'Phone Number Registration',
      '5G Network Integration',
      'SIM → eSIM Migration',
      'VoLTE HD Voice',
      'Advanced Global Roaming',
      'iPad eSIM Support',
      'Quick Transfer iOS',
      'Apple Watch Integration',
      'Android Device Transfer',
      'Wearables Support'
    ],
    enterprise: [
      'Cloud-native Microservices',
      'Network Authentication',
      'Real-time Reporting & Analytics',
      'Device Upgrade/Swap',
      'Primary & Secondary Device Positioning',
      'OpenID & Device Authentication',
      'Push Notifications',
      'Carrier Bundle Integration',
      'SM-DP+ Integration',
      'Multi-channel Service Orchestrator'
    ],
    realtime: [
      'Microsoft Graph change notifications',
      'SignalR streaming',
      'Fabric Real-Time dashboards',
      'Live network coverage maps',
      'Speed test results',
      'Server health monitoring',
      'Roaming status updates',
      'Device connectivity status'
    ]
  }
};

export default nexoraCoreConfig;