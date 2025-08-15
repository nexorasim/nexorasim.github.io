
export type Language = 'en' | 'my';

export interface BilingualString {
    en: string;
    my: string;
}

export interface NavLink {
    name: BilingualString;
    href: string;
}

export interface Feature {
    icon: string;
    title: BilingualString;
    description: BilingualString;
}

export interface HowItWorksStep {
    icon: string;
    title: BilingualString;
    description: BilingualString;
}

export interface Plan {
    region: BilingualString;
    category: 'Global' | 'Regional' | 'Local';
    data: string;
    validity: BilingualString;
    price: string;
    bestValue?: boolean;
}

export interface FAQItem {
    question: BilingualString;
    answer: BilingualString;
}

export interface DeviceModel {
    name: string;
    compatible: boolean;
}

export interface DeviceBrand {
    brand: string;
    models: DeviceModel[];
}

export interface ComparisonPoint {
    feature: BilingualString;
    esim: boolean;
    physical: boolean;
}

export interface RegionCoverage {
    continent: BilingualString;
    countries: string[];
    icon: string;
}

export interface FooterLink {
    name: BilingualString;
    href: string;
}

export interface FooterLinks {
    quickLinks: FooterLink[];
    support: FooterLink[];
    legal: FooterLink[];
}

export interface CorporateFeature {
    icon: string;
    title: BilingualString;
    description: BilingualString;
}

export interface Partner {
    name: string;
    logoUrl: string;
}