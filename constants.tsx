
import { NavLink, Feature, HowItWorksStep, FAQItem, DeviceBrand, Plan, ComparisonPoint, RegionCoverage, FooterLinks, CorporateFeature, Partner } from './types';

export const NAV_LINKS: NavLink[] = [
    { name: { en: 'Home', my: 'ပင်မစာမျက်နှာ' }, href: '#home' },
    { name: { en: 'Features', my: 'အင်္ဂါရပ်များ' }, href: '#features' },
    { name: { en: 'How It Works', my: 'အသုံးပြုပုံ' }, href: '#how-it-works' },
    { name: { en: 'Comparison', my: 'နှိုင်းယှဉ်ချက်' }, href: '#comparison' },
    { name: { en: 'Plans', my: 'Package များ' }, href: '#plans' },
    { name: { en: 'Coverage', my: 'လွှမ်းခြုံမှု' }, href: '#coverage' },
    { name: { en: 'Compatibility', my: 'ကိုက်ညီမှု' }, href: '#compatibility' },
    { name: { en: 'Corporate', my: 'ကော်ပိုရိတ်' }, href: '#corporate' },
    { name: { en: 'Partners', my: 'မိတ်ဖက်များ' }, href: '#partners' },
    { name: { en: 'FAQ', my: 'အမေးများသော' }, href: '#faq' },
    { name: { en: 'Ask AI', my: 'AI ကိုမေးပါ' }, href: '#ask-ai' },
    { name: { en: 'Contact', my: 'ဆက်သွယ်ရန်' }, href: '#contact' },
];

export const COMPARISON_DATA: ComparisonPoint[] = [
    { feature: { en: 'Instant Digital Delivery', my: 'ချက်ချင်း ဒစ်ဂျစ်တယ် ပေးပို့ခြင်း' }, esim: true, physical: false },
    { feature: { en: 'Remote Activation', my: 'အဝေးမှ Activate လုပ်နိုင်ခြင်း' }, esim: true, physical: false },
    { feature: { en: 'No Physical Swapping', my: 'ရုပ်ပိုင်းဆိုင်ရာ လဲလှယ်ရန်မလို' }, esim: true, physical: false },
    { feature: { en: 'Cannot Be Lost or Stolen', my: 'ပျောက်ဆုံးခြင်း၊ ခိုးယူခြင်းမရှိနိုင်' }, esim: true, physical: false },
    { feature: { en: 'Store Multiple Plans', my: 'Plan များစွာ သိမ်းဆည်းနိုင်ခြင်း' }, esim: true, physical: false },
    { feature: { en: 'Keep Your Home Number', my: 'သင်၏ မူလဖုန်းနံပါတ်ကို ဆက်သုံးနိုင်ခြင်း' }, esim: true, physical: true },
    { feature: { en: 'Environmentally Friendly', my: 'သဘာဝပတ်ဝန်းကျင်နှင့် သဟဇာတဖြစ်ခြင်း' }, esim: true, physical: false },
    { feature: { en: 'Works on Most Modern Phones', my: 'ခေတ်မီဖုန်းအများစုတွင် အလုပ်လုပ်သည်' }, esim: true, physical: true },
    { feature: { en: 'Requires Shipping/Store Visit', my: 'ပို့ဆောင်ရန်/ဆိုင်သွားရန် လိုအပ်သည်' }, esim: false, physical: true },
];

export const COVERAGE_DATA: RegionCoverage[] = [
    {
        continent: { en: 'Europe', my: 'ဥရောပ' },
        countries: ['United Kingdom', 'Germany', 'France', 'Italy', 'Spain', '35+ More'],
        icon: 'fas fa-globe-europe',
    },
    {
        continent: { en: 'Asia', my: 'အာရှ' },
        countries: ['Japan', 'South Korea', 'Thailand', 'Singapore', 'Malaysia', '20+ More'],
        icon: 'fas fa-globe-asia',
    },
    {
        continent: { en: 'Americas', my: 'အမေရိကတိုက်' },
        countries: ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', '15+ More'],
        icon: 'fas fa-globe-americas',
    },
    {
        continent: { en: 'Global', my: 'ကမ္ဘာလုံးဆိုင်ရာ' },
        countries: ['Access data in over 190 countries worldwide with a single plan.'],
        icon: 'fas fa-globe',
    },
];

export const PLANS_DATA: Plan[] = [
    // Global
    { region: { en: 'Global (130+ Countries)', my: 'ကမ္ဘာလုံးဆိုင်ရာ (နိုင်ငံပေါင်း ၁၃၀+)' }, category: 'Global', data: '1 GB', validity: { en: '7 Days', my: '၇ ရက်' }, price: '9.90' },
    { region: { en: 'Global (130+ Countries)', my: 'ကမ္ဘာလုံးဆိုင်ရာ (နိုင်ငံပေါင်း ၁၃၀+)' }, category: 'Global', data: '5 GB', validity: { en: '30 Days', my: 'ရက် ၃၀' }, price: '34.90', bestValue: true },
    { region: { en: 'Global (130+ Countries)', my: 'ကမ္ဘာလုံးဆိုင်ရာ (နိုင်ငံပေါင်း ၁၃၀+)' }, category: 'Global', data: '10 GB', validity: { en: '60 Days', my: 'ရက် ၆၀' }, price: '59.90' },
    // Regional
    { region: { en: 'Europe (39 Countries)', my: 'ဥရောပ (၃၉ နိုင်ငံ)' }, category: 'Regional', data: '3 GB', validity: { en: '15 Days', my: '၁၅ ရက်' }, price: '12.90' },
    { region: { en: 'Europe (39 Countries)', my: 'ဥရောပ (၃၉ နိုင်ငံ)' }, category: 'Regional', data: '10 GB', validity: { en: '30 Days', my: 'ရက် ၃၀' }, price: '29.90', bestValue: true },
    { region: { en: 'Asia (15 Countries)', my: 'အာရှ (၁၅ နိုင်ငံ)' }, category: 'Regional', data: '5 GB', validity: { en: '30 Days', my: 'ရက် ၃၀' }, price: '19.90' },
    // Local
    { region: { en: 'USA', my: 'အမေရိကန်' }, category: 'Local', data: '2 GB', validity: { en: '7 Days', my: '၇ ရက်' }, price: '7.90' },
    { region: { en: 'Japan', my: 'ဂျပန်' }, category: 'Local', data: '10 GB', validity: { en: '15 Days', my: '၁၅ ရက်' }, price: '18.90' },
    { region: { en: 'Thailand', my: 'ထိုင်း' }, category: 'Local', data: 'Unlimited', validity: { en: '8 Days', my: '၈ ရက်' }, price: '9.90', bestValue: true },
];

export const FEATURES_DATA: Feature[] = [
    {
        icon: 'fas fa-bolt',
        title: { en: 'Instant Activation', my: 'ချက်ချင်း Activate လုပ်နိုင်ခြင်း' },
        description: { en: 'Get connected immediately after purchase with our QR code activation system.', my: 'ကျွန်ုပ်တို့၏ QR code activation စနစ်ဖြင့် ဝယ်ယူပြီးပြီးချင်း ချက်ချင်းချိတ်ဆက်လိုက်ပါ။' },
    },
    {
        icon: 'fas fa-globe-asia',
        title: { en: 'Global Coverage', my: 'ကမ္ဘာလုံးဆိုင်ရာလွှမ်းခြုံမှု' },
        description: { en: 'Access high-speed data in over 190 countries with our extensive network.', my: 'ကျွန်ုပ်တို့၏ ကျယ်ပြန့်သောကွန်ရက်ဖြင့် နိုင်ငံပေါင်း ၁၉၀ ကျော်တွင် မြန်နှုန်းမြင့်ဒေတာကို ရယူသုံးစွဲပါ။' },
    },
    {
        icon: 'fas fa-money-bill-wave',
        title: { en: 'Cost Effective', my: 'ကုန်ကျစရိတ်သက်သာခြင်း' },
        description: { en: 'Save up to 90% compared to traditional roaming charges from your carrier.', my: 'သင်၏ မူလဖုန်းလိုင်းမှ သမားရိုးကျ roaming အခကြေးငွေများနှင့် နှိုင်းယှဉ်ပါက ၉၀% အထိ သက်သာစေသည်။' },
    },
    {
        icon: 'fas fa-mobile-alt',
        title: { en: 'Multi-Device Support', my: 'စက်ပစ္စည်းမျိုးစုံအတွက် အထောက်အပံ့' },
        description: { en: 'Use a single eSIM across multiple devices with our flexible management system.', my: 'ကျွန်ုပ်တို့၏ ပြောင်းလွယ်ပြင်လွယ်ရှိသော စီမံခန့်ခွဲမှုစနစ်ဖြင့် eSIM တစ်ခုတည်းကို စက်ပစ္စည်းများစွာတွင် အသုံးပြုပါ။' },
    },
    {
        icon: 'fas fa-shield-alt',
        title: { en: 'Secure Connection', my: 'လုံခြုံသောချိတ်ဆက်မှု' },
        description: { en: 'Your connection is encrypted and private, so you can browse with peace of mind.', my: 'သင်၏ချိတ်ဆက်မှုသည် လုံခြုံစွာ mã hóa လုပ်ထားသောကြောင့် စိတ်ချစွာ browsing လုပ်နိုင်ပါသည်။' },
    },
    {
        icon: 'fas fa-headset',
        title: { en: '24/7 Support', my: '၂၄/၇ အကူအညီ' },
        description: { en: 'Our dedicated support team is available 24/7 to assist with any issues.', my: 'ကျွန်ုပ်တို့၏ အကူအညီပေးရေးအဖွဲ့သည် မည်သည့်ပြဿနာမဆို ကူညီဖြေရှင်းပေးရန် ၂၄/၇ အသင့်ရှိနေပါသည်။' },
    },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        icon: 'fas fa-map-marked-alt',
        title: { en: 'Choose Your Destination', my: 'သင်သွားမည့်နေရာကို ရွေးပါ' },
        description: { en: 'Select from 190+ countries and pick a data plan that fits your travel needs, from a few days to a full month.', my: 'နိုင်ငံပေါင်း ၁၉၀ ကျော်မှ ရွေးချယ်ပြီး သင့်ခရီးစဉ်လိုအပ်ချက်နှင့်ကိုက်ညီသော ဒေတာ package ကို ရွေးချယ်ပါ။' },
    },
    {
        icon: 'fas fa-qrcode',
        title: { en: 'Install Your eSIM', my: 'သင်၏ eSIM ကို Install လုပ်ပါ' },
        description: { en: 'After purchase, you’ll get a QR code. Simply scan it with your compatible device to install your eSIM profile in seconds.', my: 'ဝယ်ယူပြီးနောက် QR code တစ်ခု ရရှိပါမည်။ ၎င်းကို သင်၏ကိုက်ညီသောစက်ဖြင့် scan ဖတ်ပြီး eSIM profile ကို စက္ကန့်ပိုင်းအတွင်း install လုပ်ပါ။' },
    },
    {
        icon: 'fas fa-wifi',
        title: { en: 'Activate & Connect', my: 'Activate လုပ်ပြီး ချိတ်ဆက်ပါ' },
        description: { en: 'Once you arrive, activate your eSIM plan and instantly connect to the local network. Enjoy high-speed internet wherever you go.', my: 'သင်ရောက်ရှိသည့်အခါ သင်၏ eSIM plan ကို activate လုပ်ပြီး ဒေသခံကွန်ရက်သို့ ချက်ချင်းချိတ်ဆက်ပါ။ မြန်နှုန်းမြင့်အင်တာနက်ကို ခံစားလိုက်ပါ။' },
    },
];

export const COMPATIBILITY_DATA: DeviceBrand[] = [
    {
        brand: 'Apple',
        models: [
            { name: 'iPhone 15 Pro Max', compatible: true },
            { name: 'iPhone 15 Pro', compatible: true },
            { name: 'iPhone 15 Plus', compatible: true },
            { name: 'iPhone 15', compatible: true },
            { name: 'iPhone 14 Pro Max', compatible: true },
            { name: 'iPhone 14 Pro', compatible: true },
            { name: 'iPhone 14 Plus', compatible: true },
            { name: 'iPhone 14', compatible: true },
            { name: 'iPhone 13 Pro Max', compatible: true },
            { name: 'iPhone 13 Pro', compatible: true },
            { name: 'iPhone 13', compatible: true },
            { name: 'iPhone 13 mini', compatible: true },
            { name: 'iPhone SE (2022)', compatible: true },
            { name: 'iPhone SE (2020)', compatible: true },
            { name: 'iPhone 12 Pro Max', compatible: true },
            { name: 'iPhone 12 Pro', compatible: true },
            { name: 'iPhone 12', compatible: true },
            { name: 'iPhone 12 mini', compatible: true },
            { name: 'iPhone 11 Pro Max', compatible: true },
            { name: 'iPhone 11 Pro', compatible: true },
            { name: 'iPhone 11', compatible: true },
            { name: 'iPhone XS Max', compatible: true },
            { name: 'iPhone XS', compatible: true },
            { name: 'iPhone XR', compatible: true },
            { name: 'iPhone X', compatible: false },
            { name: 'iPhone 8', compatible: false },
        ],
    },
    {
        brand: 'Samsung',
        models: [
            { name: 'Galaxy S24 Ultra', compatible: true },
            { name: 'Galaxy S24+', compatible: true },
            { name: 'Galaxy S24', compatible: true },
            { name: 'Galaxy S23 Ultra', compatible: true },
            { name: 'Galaxy S23+', compatible: true },
            { name: 'Galaxy S23', compatible: true },
            { name: 'Galaxy Z Fold5', compatible: true },
            { name: 'Galaxy Z Flip5', compatible: true },
            { name: 'Galaxy Z Fold4', compatible: true },
            { name: 'Galaxy Z Flip4', compatible: true },
            { name: 'Galaxy S22 Ultra', compatible: true },
            { name: 'Galaxy S22+', compatible: true },
            { name: 'Galaxy S22', compatible: true },
            { name: 'Galaxy S21 Ultra', compatible: true },
            { name: 'Galaxy S21+', compatible: true },
            { name: 'Galaxy S21', compatible: true },
            { name: 'Galaxy S20', compatible: false },
            { name: 'Galaxy Note 20', compatible: true },
        ],
    },
    {
        brand: 'Google',
        models: [
            { name: 'Pixel 8 Pro', compatible: true },
            { name: 'Pixel 8', compatible: true },
            { name: 'Pixel Fold', compatible: true },
            { name: 'Pixel 7a', compatible: true },
            { name: 'Pixel 7 Pro', compatible: true },
            { name: 'Pixel 7', compatible: true },
            { name: 'Pixel 6a', compatible: true },
            { name: 'Pixel 6 Pro', compatible: true },
            { name: 'Pixel 6', compatible: true },
            { name: 'Pixel 5a', compatible: true },
            { name: 'Pixel 5', compatible: true },
            { name: 'Pixel 4a', compatible: true },
            { name: 'Pixel 4', compatible: true },
            { name: 'Pixel 3', compatible: true },
            { name: 'Pixel 2', compatible: false },
        ],
    },
];

export const FAQ_DATA: FAQItem[] = [
    {
        question: { en: 'What is an eSIM?', my: 'eSIM ဆိုတာဘာလဲ။' },
        answer: { en: 'An eSIM is a digital SIM card embedded directly into your device. It works just like a physical SIM but without the need to swap cards. You can activate a cellular plan from a carrier that supports eSIM digitally.', my: 'eSIM ဆိုတာ သင့်စက်ထဲမှာ ထည့်သွင်းပြီးသား ဒစ်ဂျစ်တယ် SIM ကတ်ဖြစ်ပြီး၊ ရုပ်ပိုင်းဆိုင်ရာ SIM ကတ်မလိုဘဲ မိုဘိုင်းဝန်ဆောင်မှုကို အသက်သွင်းနိုင်စေပါတယ်။' },
    },
    {
        question: { en: 'How do I know if my device is eSIM compatible?', my: 'ကျွန်ုပ်၏ဖုန်းသည် eSIM သုံးနိုင်မလား ဘယ်လိုသိနိုင်မလဲ။' },
        answer: { en: 'Most smartphones manufactured since 2018 support eSIM technology, including iPhones (XR and newer), Google Pixels (2 and newer), and Samsung Galaxy S series (S20 and newer). You can use our compatibility checker above or view our full list for confirmation.', my: '၂၀၁၈ ခုနှစ်နောက်ပိုင်းထုတ်လုပ်တဲ့ ဖုန်းအများစု (iPhone XR နှင့်အထက်၊ Google Pixel 2 နှင့်အထက်၊ Samsung Galaxy S20 နှင့်အထက်) ဟာ eSIM သုံးနိုင်ပါတယ်။ တိကျသောအဖြေအတွက် ကျွန်ုပ်တို့ရဲ့ compatibility checker ကို အသုံးပြုပါ။' },
    },
    {
        question: { en: 'How quickly will my eSIM be activated?', my: 'ကျွန်ုပ်၏ eSIM ကို ဘယ်လောက်မြန်မြန် activate လုပ်နိုင်မလဲ။' },
        answer: { en: 'Activation is instant. After completing your purchase, you will receive a QR code via email. Scan the code with your phone’s camera, follow the on-screen instructions, and your eSIM will be installed and ready for activation upon arrival at your destination.', my: 'ချက်ချင်း activate လုပ်နိုင်ပါတယ်။ ဝယ်ယူပြီးပြီးချင်း သင့်အီးမေးလ်ထဲကို QR code တစ်ခု ရောက်လာပါလိမ့်မယ်။ အဲဒါကို scan ဖတ်ပြီး activate လုပ်လိုက်ရုံပါပဲ။' },
    },
    {
        question: { en: 'Can I keep my original phone number?', my: 'ကျွန်ုပ်၏မူလဖုန်းနံပါတ်ကို ဆက်သုံးလို့ရပါသလား။' },
        answer: { en: 'Yes, absolutely. One of the biggest advantages of an eSIM is that it works alongside your primary physical SIM. This allows you to use the NexoraSIM for data while still being able to make and receive calls and texts on your original number.', my: 'ရပါတယ်။ သင့် eSIM က သင်၏ပင်မ SIM ကတ်နဲ့အတူ အလုပ်လုပ်ပါတယ်။ NexoraSIM ကို ဒေတာအတွက်သုံးပြီး သင့်မူလဖုန်းနံပါတ်မှာ ဖုန်းခေါ်ဆိုမှုတွေနဲ့ စာတိုတွေကို လက်ခံနိုင်ပါတယ်။' },
    },
    {
        question: { en: 'Can I use my eSIM for hotspot/tethering?', my: 'ကျွန်ုပ်၏ eSIM ကို hotspot/tethering အတွက် သုံးနိုင်ပါသလား။' },
        answer: { en: 'Yes, in most cases. The ability to use your eSIM for hotspot or tethering depends on the specific plan you purchase. Most of our plans support tethering, but please check the plan details before buying to be sure.', my: 'ဟုတ်ကဲ့၊ အများအားဖြင့် ရပါတယ်။ သင်၏ eSIM ကို hotspot သို့မဟုတ် tethering အတွက် အသုံးပြုနိုင်ခြင်းသည် သင်ဝယ်ယူသည့် συγκεκρι plan ပေါ်တွင် မူတည်ပါသည်။ ကျွန်ုပ်တို့၏ plan အများစုသည် tethering ကို အထောက်အပံ့ပေးသော်လည်း မဝယ်မီ plan အသေးစိတ်ကို စစ်ဆေးပါ။' }
    },
    {
        question: { en: 'What happens if I use all my data?', my: 'ကျွန်ုပ်၏ဒေတာအားလုံး ကုန်သွားလျှင် ဘာဖြစ်မလဲ။' },
        answer: { en: 'If you exhaust your data allowance, you can easily top up your plan through our website or app. We offer various data top-up packages to ensure you stay connected without interruption.', my: 'သင်၏ဒေတာကုန်သွားပါက ကျွန်ုပ်တို့၏ဝဘ်ဆိုဒ် သို့မဟုတ် အက်ပ်မှတစ်ဆင့် အလွယ်တကူ top-up လုပ်နိုင်ပါသည်။ အဆက်မပြတ်ချိတ်ဆက်နေစေရန် ဒေတာ top-up package မျိုးစုံကို ကျွန်ုပ်တို့ကမ်းလှမ်းထားပါသည်။' },
    },
    {
        question: { en: 'Can I have multiple eSIM plans on one device?', my: 'စက်တစ်ခုတည်းတွင် eSIM plan များစွာ ထားရှိနိုင်ပါသလား။' },
        answer: { en: 'Yes, most eSIM-compatible devices allow you to store multiple eSIM profiles. You can switch between them in your phone’s settings, which is perfect for frequent travelers visiting different regions.', my: 'ဟုတ်ကဲ့၊ eSIM သုံးနိုင်သောစက်အများစုသည် eSIM profile များစွာကို သိမ်းဆည်းထားနိုင်သည်။ သင်၏ဖုန်းဆက်တင်များတွင် ၎င်းတို့ကို အလွယ်တကူပြောင်းသုံးနိုင်ပြီး၊ မတူညီသောဒေသများသို့ မကြာခဏခရီးသွားသူများအတွက် အထူးသင့်တော်ပါသည်။' },
    },
    {
        question: { en: 'Is an eSIM better for the environment?', my: 'eSIM သည် ပတ်ဝန်းကျင်အတွက် ပိုကောင်းပါသလား။' },
        answer: { en: 'Yes. Since eSIMs are digital, they eliminate the need for plastic SIM cards and the associated packaging and shipping. This significantly reduces plastic waste and the carbon footprint related to logistics.', my: 'ဟုတ်ပါတယ်။ eSIM များသည် ဒစ်ဂျစ်တယ်ဖြစ်သောကြောင့် ပလတ်စတစ် SIM ကတ်များ၊ ထုပ်ပိုးမှုများနှင့် ပို့ဆောင်ရေးလိုအပ်ချက်များကို ဖယ်ရှားပေးပါသည်။ ၎င်းသည် ပလတ်စတစ်စွန့်ပစ်ပစ္စည်းနှင့် သယ်ယူပို့ဆောင်ရေးဆိုင်ရာ ကာဗွန်ခြေရာကို သိသိသာသာလျှော့ချပေးပါသည်။' },
    },
    {
        question: { en: 'Do I need an internet connection to install the eSIM?', my: 'eSIM ကို install လုပ်ရန် အင်တာနက်ချိတ်ဆက်မှု လိုအပ်ပါသလား။' },
        answer: { en: 'Yes, you need a stable Wi-Fi or cellular connection to download and install the eSIM profile by scanning the QR code. We recommend installing your eSIM just before you travel to ensure a smooth setup process.', my: 'ဟုတ်ကဲ့၊ QR ကုဒ်ကို scan ဖတ်၍ eSIM profile ကို ဒေါင်းလုဒ်လုပ်ပြီး install လုပ်ရန် တည်ငြိမ်သော Wi-Fi သို့မဟုတ် မိုဘိုင်းဒေတာချိတ်ဆက်မှု လိုအပ်ပါသည်။ ချောမွေ့သောတပ်ဆင်မှုဖြစ်စဉ်အတွက် သင်ခရီးမထွက်မီ သင်၏ eSIM ကို install လုပ်ရန် ကျွန်ုပ်တို့အကြံပြုပါသည်။' },
    },
    {
        question: { en: 'What if my QR code is not working?', my: 'ကျွန်ုပ်၏ QR ကုဒ် အလုပ်မလုပ်ပါက ဘာလုပ်ရမလဲ။' },
        answer: { en: "If you're having trouble with the QR code, please ensure your device's camera is clean and you have a stable internet connection. Most plans also support manual installation with details provided in your confirmation email. If problems persist, our 24/7 support team is ready to help.", my: 'QR ကုဒ်နှင့်ပတ်သက်၍ အခက်အခဲရှိပါက၊ သင်၏စက်ကင်မရာ သန့်ရှင်းပြီး တည်ငြိမ်သောအင်တာနက်ချိတ်ဆက်မှုရှိမရှိ စစ်ဆေးပါ။ plan အများစုသည် သင်၏အတည်ပြုအီးမေးလ်တွင် ပေးထားသောအသေးစိတ်အချက်အလက်များဖြင့် manual installation ကိုလည်း အထောက်အပံ့ပေးပါသည်။ ပြဿနာဆက်ရှိနေပါက ကျွန်ုပ်တို့၏ ၂၄/၇ အကူအညီအဖွဲ့မှ ကူညီရန်အသင့်ရှိပါသည်။' },
    },
    {
        question: { en: 'Can I use an eSIM on a locked phone?', my: 'လော့ခ်ချထားသောဖုန်းတွင် eSIM ကို သုံးနိုင်ပါသလား။' },
        answer: { en: 'No, your device must be unlocked by the carrier to use an eSIM from another provider. If you bought your phone directly from the manufacturer (like Apple or Samsung), it is likely unlocked. Please contact your home carrier to confirm your device’s lock status.', my: 'မရပါ၊ အခြားဝန်ဆောင်မှုပေးသူထံမှ eSIM ကိုအသုံးပြုရန် သင်၏စက်ပစ္စည်းကို carrier မှ unlock လုပ်ထားရပါမည်။ သင်၏ဖုန်းကို ထုတ်လုပ်သူ (Apple သို့မဟုတ် Samsung ကဲ့သို့) ထံမှ တိုက်ရိုက်ဝယ်ယူပါက၊ ၎င်းသည် unlock ဖြစ်နိုင်ဖွယ်ရှိသည်။ သင်၏စက်ပစ္စည်း၏ lock အခြေအနေကို အတည်ပြုရန် သင်၏မူလ carrier ကို ဆက်သွယ်ပါ။' },
    },
    {
        question: { en: 'Does the eSIM plan expire?', my: 'eSIM plan သက်တမ်းကုန်ဆုံးပါသလား။' },
        answer: { en: 'Yes, each plan has a specific validity period (e.g., 7 days, 30 days) that begins upon activation. The plan will deactivate once the data is consumed or the validity period ends, whichever comes first. You can check the validity in your plan details.', my: 'ဟုတ်ကဲ့၊ plan တစ်ခုစီတွင် သတ်မှတ်ထားသော သက်တမ်း (ဥပမာ ၇ ရက်၊ ရက် ၃၀) ရှိပြီး activate လုပ်သည့်အချိန်မှ စတင်ပါသည်။ ဒေတာကုန်သွားလျှင် သို့မဟုတ် သက်တမ်းကုန်ဆုံးသွားလျှင် (မည်သည်က အရင်ဖြစ်သည်ဖြစ်စေ) plan သည် deactivate ဖြစ်သွားပါမည်။ သင်၏ plan အသေးစိတ်တွင် သက်တမ်းကို စစ်ဆေးနိုင်ပါသည်။' },
    },
    {
        question: { en: 'Can I make phone calls with NexoraSIM?', my: 'NexoraSIM ဖြင့် ဖုန်းခေါ်ဆိုနိုင်ပါသလား။' },
        answer: { en: 'Our eSIM plans are primarily data-only. They do not come with a phone number for traditional calls or SMS. However, you can use data for VoIP services like WhatsApp, FaceTime, Skype, or Telegram to make calls and send messages.', my: 'ကျွန်ုပ်တို့၏ eSIM plan များသည် အဓိကအားဖြင့် ဒေတာအတွက်သာ ဖြစ်ပါသည်။ ၎င်းတို့တွင် သမားရိုးကျခေါ်ဆိုမှုများ သို့မဟုတ် SMS အတွက် ဖုန်းနံပါတ်မပါဝင်ပါ။ သို့သော်၊ သင်သည် WhatsApp, FaceTime, Skype, သို့မဟုတ် Telegram ကဲ့သို့သော VoIP ဝန်ဆောင်မှုများအတွက် ဒေတာကို အသုံးပြု၍ ဖုန်းခေါ်ဆိုမှုများနှင့် စာတိုပေးပို့မှုများ ပြုလုပ်နိုင်ပါသည်။' },
    },
    {
        question: { en: 'What is the difference between a regional and a global plan?', my: 'ဒေသဆိုင်ရာ plan နှင့် ကမ္ဘာလုံးဆိုင်ရာ plan အကြား ဘာကွာခြားပါသလဲ။' },
        answer: { en: 'A regional plan provides coverage across a specific group of countries (e.g., Europe, Asia). A global plan offers connectivity in a much larger list of countries worldwide (130+). Choose a regional plan if your travel is confined to one area, or a global plan for multi-continent trips.', my: 'ဒေသဆိုင်ရာ plan သည် သတ်မှတ်ထားသောနိုင်ငံအုပ်စုတစ်ခု (ဥပမာ ဥရောပ၊ အာရှ) တွင် ကွန်ရက်လွှမ်းခြုံမှုကို ပေးပါသည်။ ကမ္ဘာလုံးဆိုင်ရာ plan သည် ကမ္ဘာတစ်ဝှမ်းရှိ နိုင်ငံအများအပြား (၁၃၀+) တွင် ချိတ်ဆက်မှုကို ပေးပါသည်။ သင်၏ခရီးစဉ်သည် ဒေသတစ်ခုတည်းတွင် ကန့်သတ်ထားပါက ဒေသဆိုင်ရာ plan ကို ရွေးချယ်ပါ၊ သို့မဟုတ် တိုက်ကြီးပေါင်းစုံခရီးစဉ်များအတွက် ကမ္ဘာလုံးဆိုင်ရာ plan ကို ရွေးချယ်ပါ။' },
    },
    {
        question: { en: 'What payment methods do you accept?', my: 'ဘယ်လိုငွေပေးချေမှုနည်းလမ်းတွေကို လက်ခံပါသလဲ။' },
        answer: { en: 'We accept all major credit and debit cards, including Visa, MasterCard, and American Express. We also support payments through secure platforms like PayPal for your convenience.', my: 'Visa, MasterCard, နှင့် American Express အပါအဝင် အဓိက credit နှင့် debit ကတ်အားလုံးကို ကျွန်ုပ်တို့လက်ခံပါသည်။ သင့်အဆင်ပြေစေရန်အတွက် PayPal ကဲ့သို့သော လုံခြုံသောပလက်ဖောင်းများမှတစ်ဆင့် ငွေပေးချေမှုများကိုလည်း အထောက်အပံ့ပေးပါသည်။' },
    },
];

export const CORPORATE_FEATURES_DATA: CorporateFeature[] = [
    {
        icon: 'fas fa-users',
        title: { en: 'Centralized Management', my: 'ဗဟိုချုပ်ကိုင်စီမံခန့်ခွဲမှု' },
        description: { en: 'Manage all your corporate eSIMs from a single, intuitive dashboard. Assign, track, and top up plans for your entire team effortlessly.', my: 'သင်၏ကော်ပိုရိတ် eSIM အားလုံးကို တစ်ခုတည်းသော dashboard မှ စီမံခန့်ခွဲပါ။ သင်၏အဖွဲ့တစ်ခုလုံးအတွက် plan များကို လွယ်ကူစွာ သတ်မှတ်၊ ခြေရာခံ၊ နှင့် top up လုပ်ပါ။' },
    },
    {
        icon: 'fas fa-chart-line',
        title: { en: 'Usage Analytics', my: 'အသုံးပြုမှုဆိုင်ရာ ခွဲခြမ်းစိတ်ဖြာချက်' },
        description: { en: 'Gain valuable insights into your team’s data consumption with detailed reports and analytics. Optimize costs and forecast future needs.', my: 'အသေးစိတ်အစီရင်ခံစာများနှင့် ခွဲခြမ်းစိတ်ဖြာချက်များဖြင့် သင်၏အဖွဲ့၏ဒေတာသုံးစွဲမှုကို ထိုးထွင်းသိမြင်ပါ။ ကုန်ကျစရိတ်များကို အကောင်းဆုံးဖြစ်အောင်လုပ်ပြီး အနာဂတ်လိုအပ်ချက်များကို ကြိုတင်ခန့်မှန်းပါ။' },
    },
    {
        icon: 'fas fa-file-invoice-dollar',
        title: { en: 'Simplified Billing', my: 'ရိုးရှင်းသော ဘီလ်စနစ်' },
        description: { en: 'Receive a single, consolidated invoice for all your lines. Streamline your accounting process and reduce administrative overhead.', my: 'သင်၏လိုင်းအားလုံးအတွက် တစ်ခုတည်းသော၊ စုစည်းထားသော ဘီလ်ကို လက်ခံရယူပါ။ သင်၏စာရင်းကိုင်လုပ်ငန်းစဉ်ကို ချောမွေ့စေပြီး အုပ်ချုပ်ရေးဆိုင်ရာဝန်ထုပ်ဝန်ပိုးကို လျှော့ချပါ။' },
    },
    {
        icon: 'fas fa-code',
        title: { en: 'API Integration', my: 'API ပေါင်းစပ်ချိတ်ဆက်မှု' },
        description: { en: 'Integrate our eSIM services directly into your existing corporate systems or applications with our powerful and well-documented API.', my: 'ကျွန်ုပ်တို့၏ eSIM ဝန်ဆောင်မှုများကို သင်၏လက်ရှိကော်ပိုရိတ်စနစ်များ သို့မဟုတ် အက်ပ်များထဲသို့ ကျွန်ုပ်တို့၏ အစွမ်းထက်ပြီး ကောင်းမွန်စွာမှတ်တမ်းတင်ထားသော API ဖြင့် တိုက်ရိုက်ပေါင်းစပ်ပါ။' },
    },
];

export const PARTNERS_LOGOS: Partner[] = [
   { name: 'TechCrunch', logoUrl: 'https://s3-us-west-2.amazonaws.com/webflow-prod-assets/5a729e8436a28900019e4860/5a729e8436a28900019e48b3_techcrunch-logo.svg' },
   { name: 'Forbes', logoUrl: 'https://s3-us-west-2.amazonaws.com/webflow-prod-assets/5a729e8436a28900019e4860/5a729e8436a28900019e48b1_forbes-logo.svg' },
   { name: 'The New York Times', logoUrl: 'https://s3-us-west-2.amazonaws.com/webflow-prod-assets/5a729e8436a28900019e4860/5a729e8436a28900019e48b2_nyt-logo.svg' },
   { name: 'CNN', logoUrl: 'https://s3-us-west-2.amazonaws.com/webflow-prod-assets/5a729e8436a28900019e4860/5a729e8436a28900019e48af_cnn-logo.svg' },
   { name: 'Mashable', logoUrl: 'https://s3-us-west-2.amazonaws.com/webflow-prod-assets/5a729e8436a28900019e4860/5a729e8436a28900019e48b0_mashable-logo.svg' },
   { name: 'Google', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' }
];

export const FOOTER_LINKS: FooterLinks = {
    quickLinks: [
        { name: { en: 'Features', my: 'အင်္ဂါရပ်များ' }, href: '#features' },
        { name: { en: 'Plans', my: 'Package များ' }, href: '#plans' },
        { name: { en: 'Compatibility', my: 'ကိုက်ညီမှု' }, href: '#compatibility' },
        { name: { en: 'Ask AI', my: 'AI ကိုမေးပါ' }, href: '#ask-ai' },
    ],
    support: [
        { name: { en: 'Contact Us', my: 'ဆက်သွယ်ရန်' }, href: '#contact' },
        { name: { en: 'FAQ', my: 'အမေးများသော' }, href: '#faq' },
        { name: { en: 'Help Center', my: 'အကူအညီစင်တာ' }, href: '#' },
    ],
    legal: [
        { name: { en: 'Privacy Policy', my: 'ကိုယ်ရေးကိုယ်တာမူဝါဒ' }, href: '#' },
        { name: { en: 'Terms of Service', my: 'ဝန်ဆောင်မှုစည်းမျဉ်းများ' }, href: '#' },
    ],
};
