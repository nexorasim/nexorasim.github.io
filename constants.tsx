import { NavLink, Feature, HowItWorksStep, FAQItem, FooterLinks, PromptTemplate, PromptCategory, ComplianceStandard, QualityMetric, OptimizationTechnique, PromptComponent } from './types';

export const NAV_LINKS: NavLink[] = [
    { name: { en: 'Home', my: 'ပင်မစာမျက်နှာ' }, href: '#home' },
    { name: { en: 'Core Components', my: 'အဓိကအစိတ်အပိုင်းများ' }, href: '#core-components' },
    { name: { en: 'Technical Specs', my: 'နည်းပညာဆိုင်ရာ အသေးစိတ်' }, href: '#technical-specs' },
    { name: { en: 'Compliance', my: 'လိုက်နာမှု' }, href: '#compliance' },
    { name: { en: 'Integration', my: 'ပေါင်းစပ်ခြင်း' }, href: '#integration' },
    { name: { en: 'Quality Assurance', my: 'အရည်အသွေးအာမခံ' }, href: '#quality-assurance' },
    { name: { en: 'Documentation', my: 'စာရွက်စာတမ်း' }, href: '#documentation' },
    { name: { en: 'Optimization', my: 'အကောင်းဆုံးဖြစ်အောင်လုပ်ခြင်း' }, href: '#optimization' },
    { name: { en: 'Assessment', my: 'အကဲဖြတ်ခြင်း' }, href: '#assessment' },
    { name: { en: 'AI Assistant', my: 'AI လက်ထောက်' }, href: '#ai-assistant' },
];

export const PROMPT_CORE_COMPONENTS: PromptComponent[] = [
    {
        name: 'CONTEXT',
        description: {
            en: 'Provides background information and situational awareness for the AI system.',
            my: 'AI စနစ်အတွက် နောက်ခံအချက်အလက်နှင့် အခြေအနေအသိအမြင်ကို ပေးသည်။'
        },
        required: true,
        example: 'CONTEXT: Developing SM-DP+ API endpoints for eSIM profile management',
        tips: [
            'Include relevant technical domain',
            'Specify the business context',
            'Mention compliance requirements',
            'Reference applicable standards'
        ]
    },
    {
        name: 'INSTRUCTION',
        description: {
            en: 'Clear, specific directions for what the AI should accomplish.',
            my: 'AI က ဘာအောင်မြင်သင့်သည်ကို ရှင်းလင်း၊ တိကျသော ညွှန်ကြားချက်များ။'
        },
        required: true,
        example: 'INSTRUCTION: Generate OpenAPI 3.0 specification with SAS-SM compliance',
        tips: [
            'Use action verbs (Generate, Create, Design)',
            'Be specific about deliverables',
            'Include technical requirements',
            'Specify output format preferences'
        ]
    },
    {
        name: 'CONSTRAINTS',
        description: {
            en: 'Limitations, requirements, and boundaries that must be respected.',
            my: 'လိုက်နာရမည့် ကန့်သတ်ချက်များ၊ လိုအပ်ချက်များနှင့် နယ်နိမိတ်များ။'
        },
        required: true,
        example: 'CONSTRAINTS: Must include FIPS 140-3 Level 3 encryption, audit logging, EAL6+ device support',
        tips: [
            'Specify security requirements',
            'Include performance constraints',
            'Mention compliance standards',
            'Define technical limitations'
        ]
    },
    {
        name: 'OUTPUT_FORMAT',
        description: {
            en: 'Exact specification of how the response should be structured and formatted.',
            my: 'တုံ့ပြန်မှုကို ဘယ်လို ဖွဲ့စည်းပြီး ပုံစံပြုသင့်သည်ကို တိကျသော သတ်မှတ်ချက်။'
        },
        required: true,
        example: 'OUTPUT_FORMAT: YAML with complete request/response examples',
        tips: [
            'Specify file format (JSON, YAML, Markdown)',
            'Include structure requirements',
            'Request examples when needed',
            'Define documentation standards'
        ]
    }
];

export const PROMPT_CATEGORIES: PromptCategory[] = [
    {
        id: 'technical-specs',
        name: { en: 'Technical Specifications', my: 'နည်းပညာဆိုင်ရာ အသေးစိတ်များ' },
        description: { en: 'API development, database design, and system architecture prompts', my: 'API ဖွံ့ဖြိုးတိုးတက်မှု၊ ဒေတာဘေ့စ် ဒီဇိုင်းနှင့် စနစ်ဗိသုကာ prompts' },
        icon: 'fas fa-code',
        color: '#8D77CC'
    },
    {
        id: 'compliance',
        name: { en: 'Compliance Verification', my: 'လိုက်နာမှု စစ်ဆေးခြင်း' },
        description: { en: 'GSMA standards, security audits, and regulatory compliance', my: 'GSMA စံချိန်စံညွှန်းများ၊ လုံခြုံရေး စစ်ဆေးမှုများနှင့် စည်းမျဉ်းလိုက်နာမှု' },
        icon: 'fas fa-shield-alt',
        color: '#7BD5FB'
    },
    {
        id: 'integration',
        name: { en: 'Integration Development', my: 'ပေါင်းစပ်မှု ဖွံ့ဖြိုးတိုးတက်မှု' },
        description: { en: 'PMS integration, OpenTelemetry, and system connections', my: 'PMS ပေါင်းစပ်မှု၊ OpenTelemetry နှင့် စနစ်ချိတ်ဆက်မှုများ' },
        icon: 'fas fa-plug',
        color: '#B2F79C'
    },
    {
        id: 'quality-assurance',
        name: { en: 'Quality Assurance', my: 'အရည်အသွေးအာမခံ' },
        description: { en: 'Test generation, performance testing, and validation', my: 'စမ်းသပ်မှု ဖန်တီးခြင်း၊ စွမ်းဆောင်ရည် စမ်းသပ်မှုနှင့် အတည်ပြုခြင်း' },
        icon: 'fas fa-check-circle',
        color: '#FF6B6B'
    },
    {
        id: 'documentation',
        name: { en: 'Documentation', my: 'စာရွက်စာတမ်း' },
        description: { en: 'API documentation, deployment guides, and technical writing', my: 'API စာရွက်စာတမ်း၊ အသုံးချ ညွှန်ကြားစာများနှင့် နည်းပညာဆိုင်ရာ စာရေးခြင်း' },
        icon: 'fas fa-book',
        color: '#FFD93D'
    }
];

export const TECHNICAL_PROMPTS: PromptTemplate[] = [
    {
        id: 'api-development',
        title: { en: 'API Development Prompt', my: 'API ဖွံ့ဖြိုးတိုးတက်မှု Prompt' },
        category: PROMPT_CATEGORIES[0],
        description: { en: 'Generate OpenAPI specifications for eSIM profile management', my: 'eSIM profile စီမံခန့်ခွဲမှုအတွက် OpenAPI အသေးစိတ်များ ထုတ်လုပ်ပါ' },
        template: `CONTEXT: Developing SM-DP+ API endpoints for eSIM profile management
INSTRUCTION: Generate OpenAPI 3.0 specification with SAS-SM compliance
CONSTRAINTS: Must include FIPS 140-3 Level 3 encryption, audit logging, EAL6+ device support
OUTPUT_FORMAT: YAML with complete request/response examples`,
        example: `# Generated OpenAPI 3.0 Specification
openapi: 3.0.3
info:
  title: NexoraSIM SM-DP+ API
  version: 1.0.0
  description: eSIM Profile Management API with SAS-SM compliance
security:
  - ApiKeyAuth: []
  - OAuth2: [read, write]
paths:
  /profiles:
    post:
      summary: Create eSIM Profile
      security:
        - ApiKeyAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ProfileRequest'
      responses:
        '201':
          description: Profile created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ProfileResponse'`,
        tags: ['API', 'OpenAPI', 'SAS-SM', 'Security'],
        complexity: 'Advanced'
    },
    {
        id: 'database-schema',
        title: { en: 'Database Schema Prompt', my: 'ဒေတာဘေ့စ် Schema Prompt' },
        category: PROMPT_CATEGORIES[0],
        description: { en: 'Design normalized database schemas for eSIM compatibility', my: 'eSIM လိုက်ညီမှုအတွက် normalized database schemas များ ဒီဇိုင်းပါ' },
        template: `CONTEXT: Designing PostgreSQL schema for eUICC compatibility matrix
INSTRUCTION: Create normalized tables for device certifications and profile management
CONSTRAINTS: Support real-time updates, audit trails, GSMA compliance tracking
OUTPUT_FORMAT: SQL DDL with indexes, constraints, and migration scripts`,
        example: `-- eUICC Device Compatibility Schema
CREATE TABLE device_manufacturers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    gsma_certified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE device_models (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID REFERENCES device_manufacturers(id),
    model_name VARCHAR(200) NOT NULL,
    eal_level VARCHAR(10),
    fips_certified BOOLEAN DEFAULT false,
    supported_profiles JSONB,
    certification_date DATE,
    INDEX idx_device_models_manufacturer (manufacturer_id),
    INDEX idx_device_models_eal (eal_level)
);`,
        tags: ['Database', 'PostgreSQL', 'Schema', 'GSMA'],
        complexity: 'Intermediate'
    }
];

export const COMPLIANCE_STANDARDS: ComplianceStandard[] = [
    {
        id: 'gsma-sgp22',
        name: 'GSMA SGP.22',
        version: 'v3.3',
        description: {
            en: 'Consumer eSIM Remote Provisioning Architecture for Embedded UICC',
            my: 'Embedded UICC အတွက် Consumer eSIM Remote Provisioning Architecture'
        },
        requirements: [
            'EID validation and management',
            'Profile download and installation',
            'Local Profile Assistant (LPA) integration',
            'Secure profile binding and activation',
            'Profile lifecycle management'
        ],
        icon: 'fas fa-mobile-alt'
    },
    {
        id: 'sas-sm',
        name: 'SAS-SM',
        version: 'v3.4.2',
        description: {
            en: 'Security Accreditation Scheme for Subscription Manager',
            my: 'Subscription Manager အတွက် လုံခြုံရေး အသိအမှတ်ပြု အစီအစဉ်'
        },
        requirements: [
            'End-to-end encryption protocols',
            'Certificate-based authentication',
            'Audit logging and compliance reporting',
            'Key management and rotation',
            'Secure communication channels'
        ],
        icon: 'fas fa-shield-alt'
    },
    {
        id: 'fips-140-3',
        name: 'FIPS 140-3',
        version: 'Level 3',
        description: {
            en: 'Cryptographic Module Validation Program standards',
            my: 'Cryptographic Module Validation Program စံချိန်စံညွှန်းများ'
        },
        requirements: [
            'Hardware-based cryptographic modules',
            'Tamper-evident physical security',
            'Role-based authentication and authorization',
            'Secure key storage and management',
            'Environmental failure protection'
        ],
        icon: 'fas fa-lock'
    }
];

export const QUALITY_METRICS: QualityMetric[] = [
    {
        id: 'technical-accuracy',
        name: { en: 'Technical Accuracy', my: 'နည်းပညာဆိုင်ရာ တိကျမှု' },
        description: { en: 'Correctness of technical implementation and standards compliance', my: 'နည်းပညာဆိုင်ရာ အကောင်အထည်ဖော်မှုနှင့် စံချိန်စံညွှန်း လိုက်နာမှု၏ မှန်ကန်မှု' },
        criteria: [
            'GSMA standards properly referenced',
            'Security protocols correctly implemented',
            'Code examples are functional and secure',
            'Performance benchmarks are achievable'
        ],
        weight: 0.3
    },
    {
        id: 'documentation-quality',
        name: { en: 'Documentation Quality', my: 'စာရွက်စာတမ်း အရည်အသွေး' },
        description: { en: 'Clarity, completeness, and usability of generated documentation', my: 'ထုတ်လုပ်ထားသော စာရွက်စာတမ်း၏ ရှင်းလင်းမှု၊ ပြည့်စုံမှုနှင့် အသုံးပြုနိုင်မှု' },
        criteria: [
            'Instructions are clear and actionable',
            'Examples are relevant and complete',
            'Error handling is comprehensively covered',
            'Maintenance procedures are included'
        ],
        weight: 0.25
    },
    {
        id: 'compliance-verification',
        name: { en: 'Compliance Verification', my: 'လိုက်နာမှု စစ်ဆေးခြင်း' },
        description: { en: 'Adherence to regulatory and industry standards', my: 'စည်းမျဉ်းနှင့် စက်မှုလုပ်ငန်း စံချိန်စံညွှန်းများကို လိုက်နာမှု' },
        criteria: [
            'SAS-SM requirements are met',
            'EAL6+ device support is verified',
            'FIPS 140-3 compliance is demonstrated',
            'Audit logging meets retention requirements'
        ],
        weight: 0.3
    },
    {
        id: 'implementation-feasibility',
        name: { en: 'Implementation Feasibility', my: 'အကောင်အထည်ဖော်နိုင်မှု' },
        description: { en: 'Practicality and achievability of proposed solutions', my: 'အဆိုပြုထားသော ဖြေရှင်းချက်များ၏ လက်တွေ့ကျမှုနှင့် အောင်မြင်နိုင်မှု' },
        criteria: [
            'Resource requirements are realistic',
            'Timeline estimates are achievable',
            'Dependencies are clearly identified',
            'Risk mitigation strategies are provided'
        ],
        weight: 0.15
    }
];

export const OPTIMIZATION_TECHNIQUES: OptimizationTechnique[] = [
    {
        id: 'context-enhancement',
        title: { en: 'Context Enhancement', my: 'အကြောင်းအရာ တိုးတက်စေခြင်း' },
        description: { en: 'Improve prompt context with relevant technical details and standards', my: 'သက်ဆိုင်သော နည်းပညာဆိုင်ရာ အသေးစိတ်များနှင့် စံချိန်စံညွှန်းများဖြင့် prompt အကြောင်းအရာကို တိုးတက်စေပါ' },
        technique: 'Include relevant GSMA standard references, specify compliance requirements, define technical constraints and performance requirements',
        example: 'Enhanced: "CONTEXT: Developing SM-DP+ API endpoints for eSIM profile management according to GSMA SGP.22 v3.3 specifications with SAS-SM v3.4.2 compliance requirements"',
        impact: 'High'
    },
    {
        id: 'constraint-specification',
        title: { en: 'Constraint Specification', my: 'ကန့်သတ်ချက် သတ်မှတ်ခြင်း' },
        description: { en: 'Define clear boundaries and requirements for better output control', my: 'ပိုကောင်းသော output ထိန်းချုပ်မှုအတွက် ရှင်းလင်းသော နယ်နိမိတ်များနှင့် လိုအပ်ချက်များကို သတ်မှတ်ပါ' },
        technique: 'List mandatory security protocols, define performance benchmarks, specify compatibility requirements, outline regulatory compliance needs',
        example: 'Detailed: "CONSTRAINTS: Must support FIPS 140-3 Level 3 HSM integration, achieve <100ms response time for profile queries, maintain 99.99% uptime SLA, include comprehensive audit logging"',
        impact: 'High'
    },
    {
        id: 'output-formatting',
        title: { en: 'Output Formatting', my: 'Output ပုံစံပြုခြင်း' },
        description: { en: 'Specify exact output structure and format requirements', my: 'တိကျသော output ဖွဲ့စည်းပုံနှင့် ပုံစံ လိုအပ်ချက်များကို သတ်မှတ်ပါ' },
        technique: 'Specify file formats (YAML, JSON, Markdown), define code language and style guidelines, request specific documentation structures, require test coverage metrics',
        example: 'Structured: "OUTPUT_FORMAT: OpenAPI 3.0 specification in YAML format with complete schemas, security definitions, example requests/responses, and inline documentation comments"',
        impact: 'Medium'
    }
];

export const FEATURES_DATA: Feature[] = [
    {
        icon: 'fas fa-code',
        title: { en: 'Prompt Templates', my: 'Prompt နမူနာများ' },
        description: { en: 'Pre-built, tested prompt templates for common eSIM development scenarios with GSMA compliance.', my: 'GSMA လိုက်နာမှုနှင့်အတူ သာမန် eSIM ဖွံ့ဖြိုးတိုးတက်မှု ဖြစ်ရပ်များအတွက် ကြိုတင်တည်ဆောက်ထားသော၊ စမ်းသပ်ထားသော prompt နမူနာများ။' },
    },
    {
        icon: 'fas fa-shield-alt',
        title: { en: 'Compliance Verification', my: 'လိုက်နာမှု စစ်ဆေးခြင်း' },
        description: { en: 'Automated compliance checking against GSMA SGP.22, SAS-SM, and FIPS 140-3 standards.', my: 'GSMA SGP.22၊ SAS-SM နှင့် FIPS 140-3 စံချိန်စံညွှန်းများနှင့် လိုက်နာမှု အလိုအလျောက် စစ်ဆေးခြင်း။' },
    },
    {
        icon: 'fas fa-chart-line',
        title: { en: 'Quality Assessment', my: 'အရည်အသွေး အကဲဖြတ်ခြင်း' },
        description: { en: 'Comprehensive quality metrics and scoring system for prompt effectiveness evaluation.', my: 'prompt ထိရောက်မှု အကဲဖြတ်ခြင်းအတွက် ပြည့်စုံသော အရည်အသွေး အတိုင်းအတာများနှင့် အမှတ်ပေးစနစ်။' },
    },
    {
        icon: 'fas fa-robot',
        title: { en: 'AI-Powered Optimization', my: 'AI မောင်းနှင်သော အကောင်းဆုံးဖြစ်အောင်လုပ်ခြင်း' },
        description: { en: 'Intelligent prompt optimization suggestions based on industry best practices and compliance requirements.', my: 'စက်မှုလုပ်ငန်း အကောင်းဆုံး အလေ့အကျင့်များနှင့် လိုက်နာမှု လိုအပ်ချက်များအပေါ် အခြေခံ၍ ဉာဏ်ရည်ထက်မြက်သော prompt အကောင်းဆုံးဖြစ်အောင်လုပ်ခြင်း အကြံပြုချက်များ။' },
    },
    {
        icon: 'fas fa-book',
        title: { en: 'Documentation Generator', my: 'စာရွက်စာတမ်း ထုတ်လုပ်ကိရိယာ' },
        description: { en: 'Automatic generation of comprehensive API documentation, deployment guides, and technical specifications.', my: 'ပြည့်စုံသော API စာရွက်စာတမ်း၊ အသုံးချ ညွှန်ကြားစာများနှင့် နည်းပညာဆိုင်ရာ အသေးစိတ်များ အလိုအလျောက် ထုတ်လုပ်ခြင်း။' },
    },
    {
        icon: 'fas fa-cogs',
        title: { en: 'Integration Tools', my: 'ပေါင်းစပ်မှု ကိရိယာများ' },
        description: { en: 'Ready-to-use integration patterns for PMS, OpenTelemetry, and third-party eSIM management systems.', my: 'PMS၊ OpenTelemetry နှင့် တတိယပါတီ eSIM စီမံခန့်ခွဲမှု စနစ်များအတွက် အသုံးပြုရန်အဆင်သင့် ပေါင်းစပ်မှု ပုံစံများ။' },
    },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        icon: 'fas fa-search',
        title: { en: 'Select Template', my: 'နမူနာ ရွေးချယ်ပါ' },
        description: { en: 'Choose from our library of pre-validated prompt templates designed for specific eSIM development scenarios and compliance requirements.', my: 'သတ်မှတ်ထားသော eSIM ဖွံ့ဖြိုးတိုးတက်မှု ဖြစ်ရပ်များနှင့် လိုက်နာမှု လိုအပ်ချက်များအတွက် ဒီဇိုင်းထုတ်ထားသော ကြိုတင်အတည်ပြုထားသော prompt နမူနာများ စာကြည့်တိုက်မှ ရွေးချယ်ပါ။' },
    },
    {
        icon: 'fas fa-edit',
        title: { en: 'Customize & Optimize', my: 'စိတ်ကြိုက်ပြင်ဆင်ပြီး အကောင်းဆုံးဖြစ်အောင်လုပ်ပါ' },
        description: { en: 'Tailor the prompt to your specific needs using our optimization tools. Add context, refine constraints, and specify output requirements.', my: 'ကျွန်ုပ်တို့၏ အကောင်းဆုံးဖြစ်အောင်လုပ်ခြင်း ကိရိယာများကို အသုံးပြု၍ prompt ကို သင်၏ သတ်မှတ် လိုအပ်ချက်များအတွက် ပြင်ဆင်ပါ။ အကြောင်းအရာ ထည့်သွင်းပါ၊ ကန့်သတ်ချက်များကို ပြန်လည်ပြင်ဆင်ပါ၊ နှင့် output လိုအပ်ချک်များကို သတ်မှတ်ပါ။' },
    },
    {
        icon: 'fas fa-check-circle',
        title: { en: 'Validate & Deploy', my: 'အတည်ပြုပြီး အသုံးချပါ' },
        description: { en: 'Run compliance checks, quality assessments, and validation tests before deploying your prompts in production environments.', my: 'ကုန်ကြမ်းထုတ်လုပ်မှု ပတ်ဝန်းကျင်များတွင် သင်၏ prompts များကို အသုံးမချမီ လိုက်နာမှု စစ်ဆေးမှုများ၊ အရည်အသွေး အကဲဖြတ်မှုများနှင့် အတည်ပြုခြင်း စမ်းသပ်မှုများကို လုပ်ဆောင်ပါ။' },
    },
];

export const FAQ_DATA: FAQItem[] = [
    {
        question: { en: 'What is the NexoraSIM™ AI Development Prompt System?', my: 'NexoraSIM™ AI Development Prompt System ဆိုတာ ဘာလဲ?' },
        answer: { en: 'It is a comprehensive framework for creating, optimizing, and managing AI prompts specifically designed for eSIM development, ensuring compliance with GSMA standards and industry best practices.', my: '၎င်းသည် GSMA စံချိန်စံညွှန်းများနှင့် စက်မှုလုပ်ငန်း အကောင်းဆုံး အလေ့အကျင့်များနှင့် လိုက်နာမှုကို သေချာစေရန် eSIM ဖွံ့ဖြိုးတိုးတက်မှုအတွက် အထူးဒီဇိုင်းထုတ်ထားသော AI prompts များကို ဖန်တီးခြင်း၊ အကောင်းဆုံးဖြစ်အောင်လုပ်ခြင်းနှင့် စီမံခန့်ခွဲခြင်းအတွက် ပြည့်စုံသော မူဘောင်တစ်ခုဖြစ်သည်။' },
    },
    {
        question: { en: 'How does the compliance verification work?', my: 'လိုက်နာမှု စစ်ဆေးခြင်းက ဘယ်လို အလုပ်လုပ်သလဲ?' },
        answer: { en: 'Our system automatically checks prompts against GSMA SGP.22, SAS-SM, and FIPS 140-3 standards, ensuring all generated content meets regulatory requirements and industry compliance standards.', my: 'ကျွန်ုပ်တို့၏ စနစ်သည် GSMA SGP.22၊ SAS-SM နှင့် FIPS 140-3 စံချိန်စံညွှန်းများနှင့် prompts များကို အလိုအလျောက် စစ်ဆေးပြီး၊ ထုတ်လုပ်ထားသော အကြောင်းအရာအားလုံး စည်းမျဉ်း လိုအပ်ချက်များနှင့် စက်မှုလုပ်ငန်း လိုက်နာမှု စံချိန်စံညွှန်းများကို ကျွန်းစောင်းစေသည်။' },
    },
    {
        question: { en: 'Can I customize the prompt templates?', my: 'Prompt နမူနာများကို ကျွန်ုပ် စိတ်ကြိုက်ပြင်ဆင်နိုင်ပါသလား?' },
        answer: { en: 'Yes, all templates are fully customizable. You can modify context, instructions, constraints, and output formats while maintaining compliance with industry standards.', my: 'ဟုတ်ကဲ့၊ နမူနာအားလုံးကို အပြည့်အဝ စိတ်ကြိုက်ပြင်ဆင်နိုင်သည်။ စက်မှုလုပ်ငန်း စံချိန်စံညွှန်းများနှင့် လိုက်နာမှုကို ထိန်းသိမ်းထားစဉ် အကြောင်းအရာ၊ ညွှန်ကြားချက်များ၊ ကန့်သတ်ချက်များနှင့် output ပုံစံများကို သင် ပြင်ဆင်နိုင်သည်။' },
    },
    {
        question: { en: 'What technical standards are supported?', my: 'ဘယ် နည်းပညာဆိုင်ရာ စံချိန်စံညွှန်းများကို အထောက်အပံ့ပေးသလဲ?' },
        answer: { en: 'We support GSMA SGP.22 v3.3, SAS-SM v3.4.2, FIPS 140-3 Level 3, EAL6+ device certifications, and other industry-standard compliance frameworks for eSIM development.', my: 'ကျွန်ုပ်တို့သည် GSMA SGP.22 v3.3၊ SAS-SM v3.4.2၊ FIPS 140-3 Level 3၊ EAL6+ စက်အသိအမှတ်ပြုလက်မှတ်များ နှင့် eSIM ဖွံ့ဖြိုးတိုးတက်မှုအတွက် အခြား စက်မှုလုပ်ငန်း-စံ လိုက်နာမှု မူဘောင်များကို အထောက်အပံ့ပေးသည်။' },
    },
    {
        question: { en: 'How is prompt quality measured?', my: 'Prompt အရည်အသွေးကို ဘယ်လို တိုင်းတာသလဲ?' },
        answer: { en: 'We use a comprehensive scoring system based on technical accuracy, documentation quality, compliance verification, and implementation feasibility, with weighted metrics for objective assessment.', my: 'ကျွန်ုပ်တို့သည် နည်းပညာဆိုင်ရာ တိကျမှု၊ စာရွက်စာတမ်း အရည်အသွေး၊ လိုက်နာမှု စစ်ဆေးခြင်းနှင့် အကောင်အထည်ဖော်နိုင်မှုအပေါ် အခြေခံ၍ ပြည့်စုံသော အမှတ်ပေးစနစ်ကို အသုံးပြုသည်၊ ရည်ရွယ်ချက် အကဲဖြတ်မှုအတွက် အလေးချိန် အတိုင်းအတာများဖြင့်။' },
    },
    {
        question: { en: 'Is there an API for integration?', my: 'ပေါင်းစပ်မှုအတွက် API ရှိပါသလား?' },
        answer: { en: 'Yes, we provide a comprehensive REST API that allows you to integrate the prompt system into your existing development workflows, CI/CD pipelines, and documentation generation tools.', my: 'ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့သည် prompt စနစ်ကို သင်၏ လက်ရှိ ဖွံ့ဖြိုးတိုးတက်မှု လုပ်ငန်းစဉ်များ၊ CI/CD pipelines များနှင့် စာရွက်စာတမ်း ထုတ်လုပ်ခြင်း ကိရိယာများထဲသို့ ပေါင်းစပ်နိုင်စေမည့် ပြည့်စုံသော REST API ကို ပေးပါသည်။' },
    }
];

export const FOOTER_LINKS: FooterLinks = {
    quickLinks: [
        { name: { en: 'Templates', my: 'နမူနာများ' }, href: '#templates' },
        { name: { en: 'Compliance', my: 'လိုက်နာမှု' }, href: '#compliance' },
        { name: { en: 'Quality Tools', my: 'အရည်အသွေး ကိရိယာများ' }, href: '#quality' },
        { name: { en: 'AI Assistant', my: 'AI လက်ထောက်' }, href: '#ai-assistant' },
    ],
    support: [
        { name: { en: 'Documentation', my: 'စာရွက်စာတမ်း' }, href: '#documentation' },
        { name: { en: 'API Reference', my: 'API အကိုးအကား' }, href: '#api' },
        { name: { en: 'Best Practices', my: 'အကောင်းဆုံး အလေ့အကျင့်များ' }, href: '#best-practices' },
    ],
    legal: [
        { name: { en: 'Privacy Policy', my: 'ကိုယ်ရေးကိုယ်တာမူဝါဒ' }, href: '#privacy' },
        { name: { en: 'Terms of Service', my: 'ဝန်ဆောင်မှုစည်းမျဉ်းများ' }, href: '#terms' },
    ],
};