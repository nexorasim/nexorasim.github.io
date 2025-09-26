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

// New types for AI Development Prompt System
export interface PromptTemplate {
    id: string;
    title: BilingualString;
    category: PromptCategory;
    description: BilingualString;
    template: string;
    example: string;
    tags: string[];
    complexity: 'Basic' | 'Intermediate' | 'Advanced';
}

export interface PromptCategory {
    id: string;
    name: BilingualString;
    description: BilingualString;
    icon: string;
    color: string;
}

export interface ComplianceStandard {
    id: string;
    name: string;
    version: string;
    description: BilingualString;
    requirements: string[];
    icon: string;
}

export interface QualityMetric {
    id: string;
    name: BilingualString;
    description: BilingualString;
    criteria: string[];
    weight: number;
}

export interface OptimizationTechnique {
    id: string;
    title: BilingualString;
    description: BilingualString;
    technique: string;
    example: string;
    impact: 'Low' | 'Medium' | 'High';
}

export interface PromptComponent {
    name: string;
    description: BilingualString;
    required: boolean;
    example: string;
    tips: string[];
}