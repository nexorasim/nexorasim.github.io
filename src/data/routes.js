export const routes = [
  // Main Website (30 pages)
  { path: '/', component: 'Home', title: { en: 'Home', mm: 'ပင်မ' }, category: 'main' },
  { path: '/about', component: 'About', title: { en: 'About Us', mm: 'ကျွန်ုပ်တို့အကြောင်း' }, category: 'main' },
  { path: '/mission', component: 'Mission', title: { en: 'Mission', mm: 'ရည်မှန်းချက်' }, category: 'main' },
  { path: '/esim-overview', component: 'ESIMOverview', title: { en: 'eSIM Overview', mm: 'eSIM ခြုံငုံသုံးသပ်ချက်' }, category: 'main' },
  { path: '/iot-vision', component: 'IoTVision', title: { en: 'IoT Vision', mm: 'IoT အမြင်' }, category: 'main' },
  { path: '/operators/mpt', component: 'MPT', title: { en: 'MPT Integration', mm: 'MPT ပေါင်းစည်းမှု' }, category: 'main' },
  { path: '/operators/mytel', component: 'MYTEL', title: { en: 'MYTEL Integration', mm: 'MYTEL ပေါင်းစည်းမှု' }, category: 'main' },
  { path: '/operators/atom', component: 'ATOM', title: { en: 'ATOM Integration', mm: 'ATOM ပေါင်းစည်းမှု' }, category: 'main' },
  { path: '/operators/u9', component: 'U9', title: { en: 'U9 Integration', mm: 'U9 ပေါင်းစည်းမှု' }, category: 'main' },
  { path: '/pricing', component: 'Pricing', title: { en: 'Pricing', mm: 'စျေးနှုန်း' }, category: 'main' },
  { path: '/contact', component: 'Contact', title: { en: 'Contact', mm: 'ဆက်သွယ်ရန်' }, category: 'main' },
  { path: '/faq', component: 'FAQ', title: { en: 'FAQ', mm: 'မေးလေ့ရှိသောမေးခွန်းများ' }, category: 'main' },
  
  // Documentation (40 pages)
  { path: '/docs', component: 'Documentation', title: { en: 'Documentation', mm: 'မှတ်တမ်းများ' }, category: 'docs' },
  { path: '/docs/api-overview', component: 'APIOverview', title: { en: 'API Overview', mm: 'API ခြုံငုံသုံးသပ်ချက်' }, category: 'docs' },
  { path: '/docs/sdk-guides', component: 'SDKGuides', title: { en: 'SDK Guides', mm: 'SDK လမ်းညွှန်များ' }, category: 'docs' },
  { path: '/docs/authentication', component: 'Authentication', title: { en: 'Authentication', mm: 'အထောက်အထား' }, category: 'docs' },
  { path: '/docs/device-provisioning', component: 'DeviceProvisioning', title: { en: 'Device Provisioning', mm: 'စက်ကိရိယာ ပံ့ပိုးမှု' }, category: 'docs' },
  
  // Corporate & Blog (20 pages)
  { path: '/news', component: 'News', title: { en: 'News', mm: 'သတင်းများ' }, category: 'corporate' },
  { path: '/careers', component: 'Careers', title: { en: 'Careers', mm: 'အလုပ်အကိုင်များ' }, category: 'corporate' },
  { path: '/case-studies', component: 'CaseStudies', title: { en: 'Case Studies', mm: 'လေ့လာမှုများ' }, category: 'corporate' },
  
  // Legal & Support (10 pages)
  { path: '/terms', component: 'Terms', title: { en: 'Terms of Service', mm: 'ဝန်ဆောင်မှုစည်းမျဉ်းများ' }, category: 'legal' },
  { path: '/privacy', component: 'Privacy', title: { en: 'Privacy Policy', mm: 'ကိုယ်ရေးကိုယ်တာမူဝါဒ' }, category: 'legal' },
  { path: '/compliance', component: 'Compliance', title: { en: 'Compliance', mm: 'လိုက်နာမှု' }, category: 'legal' }
]