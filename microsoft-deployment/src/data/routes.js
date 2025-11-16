// NexoraSIM 300 Page Routes Configuration
export const pageRoutes = {
  // Core Platform Pages (25 pages)
  core: [
    { path: '/', title: 'Home', description: 'NexoraSIM Entertainment Server Homepage' },
    { path: '/entitlement-server', title: 'Entitlement Server', description: 'Premium eSIM Profile Management Platform' },
    { path: '/features', title: 'Features', description: 'Interactive 3D Feature Grid' },
    { path: '/architecture', title: 'Architecture', description: 'Live Animated System Architecture' },
    { path: '/technology', title: 'Technology', description: 'eSIM & Entertainment Server Technology' },
    { path: '/devices', title: 'Devices', description: 'Premium Device Showcase with 3D Models' },
    { path: '/transfer', title: 'eSIM Transfer', description: 'Cross-Platform eSIM Transfer Flow' },
    { path: '/migration', title: 'SIM Migration', description: 'SIM to eSIM Migration Journey' },
    { path: '/roaming', title: 'Global Roaming', description: 'Global Roaming Map with Live Data' },
    { path: '/5g', title: '5G Streaming', description: '5G Streaming Performance Dashboard' },
    { path: '/volte', title: 'VoLTE HD', description: 'VoLTE HD Voice Clarity Demo' },
    { path: '/security', title: 'Security', description: 'Zero-Trust Security Layers' },
    { path: '/compliance', title: 'Compliance', description: 'Global Compliance Standards' },
    { path: '/partners', title: 'Partners', description: 'Telecom Operators & SM-DP+ Integration' },
    { path: '/enterprise', title: 'Enterprise', description: 'Enterprise Management GUI Preview' },
    { path: '/api', title: 'API Documentation', description: 'Interactive API Playground' },
    { path: '/contact', title: 'Contact', description: 'Contact Information' },
    { path: '/support', title: 'Support', description: 'Technical Support' },
    { path: '/faq', title: 'FAQ', description: 'Frequently Asked Questions' },
    { path: '/about', title: 'About', description: 'About NexoraSIM' },
    { path: '/team', title: 'Team', description: 'Our Team' },
    { path: '/careers', title: 'Careers', description: 'Career Opportunities' },
    { path: '/news', title: 'News', description: 'Latest News' },
    { path: '/blog', title: 'Blog', description: 'Technical Blog' },
    { path: '/press', title: 'Press', description: 'Press Kit & Media Resources' }
  ],

  // Resource Pages (10 pages)
  resources: [
    { path: '/whitepaper', title: 'Whitepaper', description: 'Technical Whitepaper' },
    { path: '/brochure', title: 'Brochure', description: 'Product Brochure' },
    { path: '/flyer', title: 'Flyer', description: 'Marketing Flyer' },
    { path: '/datasheet', title: 'Datasheet', description: 'Technical Datasheet' },
    { path: '/case-studies', title: 'Case Studies', description: 'Customer Case Studies' },
    { path: '/testimonials', title: 'Testimonials', description: 'Customer Testimonials' },
    { path: '/awards', title: 'Awards', description: 'Industry Awards & Recognition' },
    { path: '/certifications', title: 'Certifications', description: 'Industry Certifications' },
    { path: '/partnerships', title: 'Partnerships', description: 'Strategic Partnerships' },
    { path: '/roadmap', title: 'Roadmap', description: 'Product Roadmap' }
  ],

  // Network Operator Pages (20 pages)
  operators: [
    { path: '/operators/mpt', title: 'MPT Myanmar', description: 'Myanmar Posts and Telecommunications' },
    { path: '/operators/mpt/coverage', title: 'MPT Coverage', description: 'MPT Network Coverage Map' },
    { path: '/operators/mpt/plans', title: 'MPT Plans', description: 'MPT eSIM Plans' },
    { path: '/operators/mpt/5g', title: 'MPT 5G', description: 'MPT 5G Network' },
    { path: '/operators/mpt/enterprise', title: 'MPT Enterprise', description: 'MPT Enterprise Solutions' },
    { path: '/operators/mytel', title: 'MYTEL', description: 'MYTEL Network' },
    { path: '/operators/mytel/coverage', title: 'MYTEL Coverage', description: 'MYTEL Network Coverage' },
    { path: '/operators/mytel/plans', title: 'MYTEL Plans', description: 'MYTEL eSIM Plans' },
    { path: '/operators/mytel/5g', title: 'MYTEL 5G', description: 'MYTEL 5G Services' },
    { path: '/operators/mytel/enterprise', title: 'MYTEL Enterprise', description: 'MYTEL Enterprise' },
    { path: '/operators/atom', title: 'ATOM', description: 'ATOM Network' },
    { path: '/operators/atom/coverage', title: 'ATOM Coverage', description: 'ATOM Network Coverage' },
    { path: '/operators/atom/iot', title: 'ATOM IoT', description: 'ATOM IoT Solutions' },
    { path: '/operators/atom/nb-iot', title: 'ATOM NB-IoT', description: 'ATOM NB-IoT Network' },
    { path: '/operators/atom/enterprise', title: 'ATOM Enterprise', description: 'ATOM Enterprise Solutions' },
    { path: '/operators/u9', title: 'U9 Network', description: 'U9 Telecommunications' },
    { path: '/operators/u9/coverage', title: 'U9 Coverage', description: 'U9 Network Coverage' },
    { path: '/operators/u9/lte-m', title: 'U9 LTE-M', description: 'U9 LTE-M Network' },
    { path: '/operators/u9/plans', title: 'U9 Plans', description: 'U9 eSIM Plans' },
    { path: '/operators/u9/enterprise', title: 'U9 Enterprise', description: 'U9 Enterprise Solutions' }
  ],

  // Regional Language Pages (175 pages - 25 pages  7 languages)
  languages: {
    'en': { name: 'English', pages: 25 },
    'zh': { name: '', pages: 25 },
    'th': { name: '', pages: 25 },
    'vi': { name: 'Ting Vit', pages: 25 },
    'id': { name: 'Bahasa Indonesia', pages: 25 },
    'ms': { name: 'Bahasa Malaysia', pages: 25 },
    'mm': { name: '', pages: 25 }
  },

  // Technical Deep-Dive Pages (30 pages)
  technical: [
    { path: '/tech/esim-architecture', title: 'eSIM Architecture', description: 'eSIM Technical Architecture' },
    { path: '/tech/gsma-standards', title: 'GSMA Standards', description: 'GSMA RSP Standards' },
    { path: '/tech/sm-dp-plus', title: 'SM-DP+', description: 'Subscription Manager Data Preparation' },
    { path: '/tech/sm-sr', title: 'SM-SR', description: 'Subscription Manager Secure Routing' },
    { path: '/tech/lpa', title: 'LPA', description: 'Local Profile Assistant' },
    { path: '/tech/euicc', title: 'eUICC', description: 'Embedded Universal Integrated Circuit Card' },
    { path: '/tech/profile-lifecycle', title: 'Profile Lifecycle', description: 'eSIM Profile Management' },
    { path: '/tech/provisioning', title: 'Provisioning', description: 'eSIM Provisioning Process' },
    { path: '/tech/authentication', title: 'Authentication', description: 'eSIM Authentication' },
    { path: '/tech/encryption', title: 'Encryption', description: 'eSIM Security & Encryption' },
    { path: '/tech/5g-integration', title: '5G Integration', description: '5G Network Integration' },
    { path: '/tech/volte-implementation', title: 'VoLTE Implementation', description: 'VoLTE Technical Implementation' },
    { path: '/tech/streaming-optimization', title: 'Streaming Optimization', description: 'Entertainment Streaming Optimization' },
    { path: '/tech/network-slicing', title: 'Network Slicing', description: '5G Network Slicing' },
    { path: '/tech/edge-computing', title: 'Edge Computing', description: 'Mobile Edge Computing' },
    { path: '/tech/cdn-integration', title: 'CDN Integration', description: 'Content Delivery Network' },
    { path: '/tech/load-balancing', title: 'Load Balancing', description: 'Network Load Balancing' },
    { path: '/tech/monitoring', title: 'Monitoring', description: 'Real-time Network Monitoring' },
    { path: '/tech/analytics', title: 'Analytics', description: 'Network Analytics & Intelligence' },
    { path: '/tech/ai-optimization', title: 'AI Optimization', description: 'AI-Powered Network Optimization' },
    { path: '/tech/blockchain', title: 'Blockchain', description: 'Blockchain for eSIM Security' },
    { path: '/tech/quantum-security', title: 'Quantum Security', description: 'Quantum-Safe Cryptography' },
    { path: '/tech/zero-trust', title: 'Zero Trust', description: 'Zero Trust Network Architecture' },
    { path: '/tech/cloudflare-integration', title: 'Cloudflare Integration', description: 'Cloudflare Zero Trust' },
    { path: '/tech/azure-integration', title: 'Azure Integration', description: 'Microsoft Azure Integration' },
    { path: '/tech/api-gateway', title: 'API Gateway', description: 'Enterprise API Gateway' },
    { path: '/tech/microservices', title: 'Microservices', title: 'Microservices Architecture' },
    { path: '/tech/containerization', title: 'Containerization', description: 'Docker & Kubernetes' },
    { path: '/tech/devops', title: 'DevOps', description: 'DevOps & CI/CD Pipeline' },
    { path: '/tech/disaster-recovery', title: 'Disaster Recovery', description: 'Business Continuity & DR' }
  ],

  // Industry & Use Cases Pages (40 pages)
  industries: [
    { path: '/industries/telecommunications', title: 'Telecommunications', description: 'Telecom Industry Solutions' },
    { path: '/industries/entertainment', title: 'Entertainment', description: 'Entertainment Industry' },
    { path: '/industries/streaming', title: 'Streaming', description: 'Video Streaming Services' },
    { path: '/industries/gaming', title: 'Gaming', description: 'Mobile Gaming' },
    { path: '/industries/iot', title: 'IoT', description: 'Internet of Things' },
    { path: '/industries/automotive', title: 'Automotive', description: 'Connected Vehicles' },
    { path: '/industries/healthcare', title: 'Healthcare', description: 'Healthcare IoT' },
    { path: '/industries/manufacturing', title: 'Manufacturing', description: 'Industrial IoT' },
    { path: '/industries/logistics', title: 'Logistics', description: 'Supply Chain & Logistics' },
    { path: '/industries/retail', title: 'Retail', description: 'Retail & E-commerce' },
    { path: '/industries/finance', title: 'Finance', description: 'Financial Services' },
    { path: '/industries/education', title: 'Education', description: 'Educational Technology' },
    { path: '/industries/government', title: 'Government', description: 'Government & Public Sector' },
    { path: '/industries/smart-cities', title: 'Smart Cities', description: 'Smart City Solutions' },
    { path: '/industries/agriculture', title: 'Agriculture', description: 'Smart Agriculture' },
    { path: '/industries/energy', title: 'Energy', description: 'Energy & Utilities' },
    { path: '/use-cases/international-roaming', title: 'International Roaming', description: 'Global Roaming Solutions' },
    { path: '/use-cases/travel', title: 'Travel', description: 'Travel & Tourism' },
    { path: '/use-cases/business-travel', title: 'Business Travel', description: 'Corporate Travel Solutions' },
    { path: '/use-cases/remote-work', title: 'Remote Work', description: 'Remote Work Connectivity' },
    { path: '/use-cases/digital-nomads', title: 'Digital Nomads', description: 'Digital Nomad Solutions' },
    { path: '/use-cases/emergency-services', title: 'Emergency Services', description: 'Emergency Communications' },
    { path: '/use-cases/disaster-response', title: 'Disaster Response', description: 'Disaster Response Communications' },
    { path: '/use-cases/military', title: 'Military', description: 'Military Communications' },
    { path: '/use-cases/maritime', title: 'Maritime', description: 'Maritime Communications' },
    { path: '/use-cases/aviation', title: 'Aviation', description: 'Aviation Communications' },
    { path: '/use-cases/mining', title: 'Mining', description: 'Mining Industry Solutions' },
    { path: '/use-cases/oil-gas', title: 'Oil & Gas', description: 'Oil & Gas Industry' },
    { path: '/use-cases/construction', title: 'Construction', description: 'Construction Industry' },
    { path: '/use-cases/events', title: 'Events', description: 'Event Management' },
    { path: '/use-cases/conferences', title: 'Conferences', description: 'Conference Connectivity' },
    { path: '/use-cases/exhibitions', title: 'Exhibitions', description: 'Exhibition Solutions' },
    { path: '/use-cases/sports', title: 'Sports', description: 'Sports & Entertainment' },
    { path: '/use-cases/media', title: 'Media', description: 'Media & Broadcasting' },
    { path: '/use-cases/journalism', title: 'Journalism', description: 'Mobile Journalism' },
    { path: '/use-cases/content-creation', title: 'Content Creation', description: 'Content Creator Solutions' },
    { path: '/use-cases/live-streaming', title: 'Live Streaming', description: 'Live Streaming Solutions' },
    { path: '/use-cases/social-media', title: 'Social Media', description: 'Social Media Connectivity' },
    { path: '/use-cases/influencers', title: 'Influencers', description: 'Influencer Solutions' },
    { path: '/use-cases/startups', title: 'Startups', description: 'Startup Solutions' }
  ]
}

// Generate all 300 page routes
export const generateAllRoutes = () => {
  const allRoutes = []
  
  // Add core pages
  allRoutes.push(...pageRoutes.core)
  allRoutes.push(...pageRoutes.resources)
  allRoutes.push(...pageRoutes.operators)
  allRoutes.push(...pageRoutes.technical)
  allRoutes.push(...pageRoutes.industries)
  
  // Add language-specific pages
  Object.keys(pageRoutes.languages).forEach(langCode => {
    pageRoutes.core.forEach(page => {
      allRoutes.push({
        path: `/${langCode}${page.path === '/' ? '' : page.path}`,
        title: `${page.title} - ${pageRoutes.languages[langCode].name}`,
        description: page.description,
        language: langCode
      })
    })
  })
  
  return allRoutes
}

// SEO metadata for all pages
export const seoMetadata = {
  defaultTitle: 'NexoraSIM Entertainment Server - Premium eSIM Platform',
  defaultDescription: 'Enterprise eSIM platform for MPT, MYTEL, ATOM, U9 networks in Myanmar. Premium streaming, 5G, VoLTE support.',
  defaultKeywords: 'eSIM, entertainment server, Myanmar telecom, MPT, MYTEL, ATOM, U9, 5G streaming, VoLTE',
  siteUrl: 'https://nexorasim.github.io',
  ogImage: '/images/nexorasim-og.jpg',
  twitterCard: 'summary_large_image'
}

export default pageRoutes