import { CountryProfile, ServicePillar, IndustryItem, ProcessStep, CoreValue, WhyChooseUsItem } from '../types';

export const COMPANY_INFO = {
  name: 'RKPT TECH LTD',
  tagline: 'BUSINESS. TECHNOLOGY. COMPLIANCE. GROWTH.',
  headline: 'Global Business Consulting & Technology Solutions',
  profileSummary:
    'RKPT TECH LTD helps businesses build, operate, protect and grow across international markets. From company formation, accounting, tax, banking, compliance, immigration and relocation support to IT, AI, software, cloud, automation and cybersecurity, RKPT brings complementary business and technology capabilities together under one operating partner.',
  valueProposition:
    'Our objective is simple: reduce complexity, create a structured path from setup to operation, and provide the business infrastructure required for sustainable international growth.',
  integratedApproach:
    'RKPT TECH LTD is a global business consulting and technology solutions firm specializing in helping individuals, entrepreneurs, startups, established companies and international businesses establish, operate and expand across international markets.',
  vision:
    'To become a trusted global partner for businesses entering and expanding into international markets by delivering transparent, compliant and technology-driven solutions that enable sustainable growth.',
  mission: [
    'Simplify cross-border business setup and operations.',
    'Deliver accurate, compliant and customized consulting services.',
    'Empower businesses through practical IT and digital solutions.',
    'Build long-term partnerships based on trust, performance and results.',
  ],
  commitment:
    'We do not simply help clients register a company. We help build the business infrastructure required to operate, protect and grow it.',
  contact: {
    email: 'contact@rkpttech.com',
    secondaryEmail: 'advisory@rkpttech.com',
    phoneEu: '+351 21 000 8920',
    phoneCh: '+41 44 220 5410',
    phoneIe: '+353 1 485 3290',
    website: 'www.rkpttech.com',
    offices: [
      {
        city: 'Lisbon',
        country: 'Portugal',
        address: 'Avenida da Liberdade 245, 1250-143 Lisboa',
        focus: 'LDA Formation, NHR & Golden Visa Hub',
      },
      {
        city: 'Zurich',
        country: 'Switzerland',
        address: 'Bahnhofstrasse 69, 8001 Zürich',
        focus: 'GmbH / AG Structuring & Cantonal Compliance',
      },
      {
        city: 'Dublin',
        country: 'Ireland',
        address: 'Grand Canal Dock, Dublin 2, D02 X260',
        focus: 'LTD Incorporation, CRO Filings & Tech Gateway',
      },
    ],
  },
};

export const COUNTRIES_DATA: CountryProfile[] = [
  {
    id: "portugal",
    name: "Portugal",
    code: "PT",
    flag: "https://flagcdn.com/pt.svg",
    capital: "Lisbon",
    currency: "EUR (€)",
    corporateTaxRate: "17% - 21%",
    formationTime: "3 - 7 Business Days",
    structures: ["LDA formation", "business setup", "accounting/tax coordination", "banking", "immigration", "digital transformation"],
    keyAdvantages: [
      "EU Business & Company Formation Hub"
    ],
    visaAlignment: [
      "LDA", "NHR", "Golden Visa"
    ],
    bankingHighlights: [],
    summary: "Focus: LDA formation, business setup, accounting/tax coordination, banking, immigration and digital transformation.",
    regionalFocus: "EU Business & Company Formation Hub"
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "UK",
    flag: "https://flagcdn.com/gb.svg",
    capital: "London",
    currency: "GBP (£)",
    corporateTaxRate: "19% - 25%",
    formationTime: "1 - 3 Business Days",
    structures: ["UK company setup", "operational support", "banking", "compliance", "technology"],
    keyAdvantages: [
      "UK Business & Technology Hub"
    ],
    visaAlignment: [
      "UK LTD", "Operations", "Tech"
    ],
    bankingHighlights: [],
    summary: "Focus: UK company setup, operational support, banking, compliance and technology.",
    regionalFocus: "UK Business & Technology Hub"
  },
  {
    id: "ireland",
    name: "Ireland",
    code: "IE",
    flag: "https://flagcdn.com/ie.svg",
    capital: "Dublin",
    currency: "EUR (€)",
    corporateTaxRate: "12.5%",
    formationTime: "2 - 5 Business Days",
    structures: ["Irish LTD setup", "CRO-related support", "EU market access", "operations", "technology"],
    keyAdvantages: [
      "EU Business & Technology Hub"
    ],
    visaAlignment: [
      "LTD", "CRO", "EU Market Access"
    ],
    bankingHighlights: [],
    summary: "Focus: Irish LTD setup, CRO-related support, EU market access, operations and technology.",
    regionalFocus: "EU Business & Technology Hub"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    code: "CH",
    flag: "https://flagcdn.com/ch.svg",
    capital: "Zurich / Geneva",
    currency: "CHF",
    corporateTaxRate: "11.9% - 21.6%",
    formationTime: "2 - 4 Weeks",
    structures: ["GmbH/AG setup", "cantonal compliance", "banking", "business support"],
    keyAdvantages: [
      "Swiss Business Hub"
    ],
    visaAlignment: [
      "GmbH", "AG", "Cantons"
    ],
    bankingHighlights: [],
    summary: "Focus: GmbH/AG setup, cantonal compliance, banking and business support.",
    regionalFocus: "Swiss Business Hub"
  },
  {
    id: "usa",
    name: "USA",
    code: "US",
    flag: "https://flagcdn.com/us.svg",
    capital: "Remote-First",
    currency: "USD ($)",
    corporateTaxRate: "21%",
    formationTime: "2 - 5 Business Days",
    structures: ["US company formation support", "business operations", "banking/payment coordination", "technology"],
    keyAdvantages: [
      "North American Business Hub"
    ],
    visaAlignment: [
      "Formation", "Banking", "Tech"
    ],
    bankingHighlights: [],
    summary: "Focus: US company formation support, business operations, banking/payment coordination and technology.",
    regionalFocus: "North American Business Hub"
  },
  {
    id: "dubai",
    name: "Dubai / UAE",
    code: "AE",
    flag: "https://flagcdn.com/ae.svg",
    capital: "Dubai",
    currency: "AED",
    corporateTaxRate: "9%",
    formationTime: "1 - 3 Weeks",
    structures: ["business setup", "licensing coordination", "banking", "international operations", "technology"],
    keyAdvantages: [
      "Middle East Business Hub"
    ],
    visaAlignment: [
      "Licensing", "Banking", "Ops"
    ],
    bankingHighlights: [],
    summary: "Focus: business setup, licensing coordination, banking, international operations and technology.",
    regionalFocus: "Middle East Business Hub"
  },
  {
    id: "india",
    name: "India",
    code: "IN",
    flag: "https://flagcdn.com/in.svg",
    capital: "Delivery Hub",
    currency: "INR",
    corporateTaxRate: "15% - 25%",
    formationTime: "2 - 4 Weeks",
    structures: ["technology delivery", "software development", "IT support", "AI", "cybersecurity", "business technology operations"],
    keyAdvantages: [
      "Technology & Delivery Hub"
    ],
    visaAlignment: [
      "Technology & Delivery Hub"
    ],
    bankingHighlights: [],
    summary: "Focus: technology delivery, software development, IT support, AI, cybersecurity and business technology operations.",
    regionalFocus: "Technology & Delivery Hub"
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Integrity & Compliance',
    tag: 'Strict Adherence',
    description: 'We operate within applicable local and EU requirements.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Client-Centric Approach',
    tag: 'Tailored Solutions',
    description: 'Solutions are tailored to the client\'s business needs.',
    icon: 'Users',
  },
  {
    title: 'Expertise & Precision',
    tag: 'Senior Specialists',
    description: 'Work is structured around experienced professional capabilities.',
    icon: 'Award',
  },
  {
    title: 'Innovation',
    tag: 'Technology-Driven',
    description: 'We use technology to improve business operations.',
    icon: 'Zap',
  },
  {
    title: 'Transparency',
    tag: 'Zero Surprises',
    description: 'Clear processes, communication and service scope.',
    icon: 'Eye',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'Global',
    highlight: '7 Business Hubs',
    description: 'Seven business hubs across Europe, the UK, USA, UAE and India.',
    icon: 'MapPin',
  },
  {
    title: 'Integrated',
    highlight: 'One Ecosystem',
    description: 'Business, financial, compliance, immigration and technology support in one ecosystem.',
    icon: 'Layers',
  },
  {
    title: 'End-to-end',
    highlight: 'Full Lifecycle',
    description: 'From initial consultation through setup, implementation and ongoing support.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Technology-driven',
    highlight: 'Digital Solutions',
    description: 'Practical IT, AI, software, cloud, automation and cybersecurity solutions.',
    icon: 'Cpu',
  },
  {
    title: 'Multi-disciplinary',
    highlight: 'Unified Teams',
    description: 'Business and technology capabilities designed to work together.',
    icon: 'Users',
  },
  {
    title: 'International',
    highlight: 'Multi-jurisdiction',
    description: 'Support for clients operating across multiple jurisdictions.',
    icon: 'Globe',
  },
  {
    title: 'Compliance-focused',
    highlight: 'Regulatory Standards',
    description: 'Structured around applicable local and EU requirements.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Transparent',
    highlight: 'Clear Scope',
    description: 'Clear processes, clear communication and transparent service scope.',
    icon: 'Eye',
  },
];

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: "company-formation",
    number: "01",
    title: "Company Formation & Business Setup",
    tagline: "Business structure consultation and setup",
    description: "Business structure consultation, registration and incorporation, registered office support, licences and permits, VAT and tax identification, statutory filings and local representation where required.",
    icon: "Building2",
    badge: "Core Service",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Business structure consultation",
          "Company registration and incorporation",
          "Shareholder and director documentation",
          "Registered office support",
          "Business licences and permits",
          "VAT registration and tax identification",
          "Articles of association and statutory filings",
          "Local representation where required"
        ]
      },
      {
        title: "Jurisdiction examples:",
        items: [
          "Portugal — LDA formation and business setup",
          "Switzerland — GmbH/AG setup and cantonal compliance",
          "Ireland — LTD formation and CRO-related support",
          "UK — UK company setup and operational support",
          "USA — US company formation support",
          "Dubai/UAE — Business setup and licensing coordination"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "legal-compliance",
    number: "02",
    title: "Legal, Regulatory & Compliance Support",
    tagline: "Regulatory coordination and statutory filings",
    description: "Regulatory coordination, statutory filings, company secretarial support, regulatory monitoring and risk advisory, with coordination to qualified professionals where regulated legal advice is required.",
    icon: "Scale",
    badge: "Core Service",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Regulatory requirements and compliance coordination",
          "Statutory filings and company secretarial support",
          "Regulatory monitoring",
          "Risk and compliance advisory",
          "Coordination with appropriately qualified professionals where regulated legal advice is required"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "accounting-tax",
    number: "03",
    title: "Accounting & Tax",
    tagline: "Bookkeeping, reporting and tax compliance",
    description: "Bookkeeping, financial reporting, payroll, corporate tax compliance, VAT returns, tax planning, double-taxation treaty guidance and tax authority representation where applicable.",
    icon: "Calculator",
    badge: "Core Service",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Bookkeeping and ledger management",
          "Monthly, quarterly and annual financial reporting",
          "Payroll management",
          "Expense and invoice processing",
          "Audit preparation support",
          "Corporate tax compliance",
          "VAT returns and reporting",
          "Tax planning and efficiency support",
          "Double-taxation treaty guidance",
          "Tax authority representation/coordination where applicable"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "banking-payments",
    number: "04",
    title: "Business Banking & Payments",
    tagline: "Corporate accounts and payment gateways",
    description: "Bank selection, documentation preparation, liaison with traditional and digital banks, FinTech/EMI setup, payment gateway and merchant account support, and ongoing compliance support.",
    icon: "Landmark",
    badge: "Core Service",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Bank selection based on business profile",
          "Corporate and personal account application support",
          "Documentation preparation",
          "Liaison with traditional and digital banks",
          "FinTech and EMI account setup support",
          "Payment gateway and merchant account support",
          "Ongoing banking compliance support"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "immigration-relocation",
    number: "05",
    title: "Immigration & Relocation",
    tagline: "Visas, residence permits and relocation",
    description: "Business, entrepreneur and investor visa support, work and residence permits, family reunification, renewals, and relocation support including registration, social security and healthcare enrolment.",
    icon: "Plane",
    badge: "Core Service",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Business and entrepreneur visa support",
          "Investor and startup programme support",
          "Work and residence permit support",
          "Family reunification support",
          "Renewals and permanent residence support",
          "Citizenship advisory where applicable",
          "Address registration",
          "Social security registration",
          "Healthcare enrolment",
          "Local compliance orientation"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "business-advisory",
    number: "06",
    title: "Business Consulting & Advisory",
    tagline: "Strategy, modelling and expansion",
    description: "Business plan development, market-entry strategy, feasibility studies, financial modelling, investor pitch decks, virtual office services, and EU market compliance consulting.",
    icon: "TrendingUp",
    badge: "Core Service",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Business plan development",
          "Market-entry strategy",
          "Feasibility studies",
          "Financial modelling",
          "Investor pitch decks",
          "Virtual office services",
          "Business expansion advisory",
          "EU market compliance consulting"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    description: 'Understand your goals, business model and target market.',
  },
  {
    step: 2,
    title: 'Assess',
    description: 'Review country, structure, operational, compliance and technology requirements.',
  },
  {
    step: 3,
    title: 'Plan',
    description: 'Create a practical business and implementation roadmap.',
  },
  {
    step: 4,
    title: 'Establish',
    description: 'Support company setup, registration, banking, immigration and related requirements.',
  },
  {
    step: 5,
    title: 'Build',
    description: 'Implement IT systems, websites, software and security to launch your operations.',
  },
  {
    step: 6,
    title: 'Support',
    description: 'Provide ongoing tax, accounting, compliance and technology support.',
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'startups',
    name: 'Startups & Entrepreneurs',
    icon: 'Rocket',
    summary: 'Fast-paced incorporation, Startup Visa alignments, seed banking, and agile tech presence.',
    typicalNeeds: ['Fast company registration', 'Founder visa permits', 'Seed stage bank accounts', 'Scalable website'],
    solutionApproach: 'Turnkey startup packages in Lisbon and Dublin with minimal bureaucratic overhead.',
  },
  {
    id: 'it-saas',
    name: 'IT & SaaS Companies',
    icon: 'Laptop',
    summary: 'Optimized IP holding structures, Knowledge Box tax rates (6.25% in IE), and GDPR software compliance.',
    typicalNeeds: ['Intellectual property holding', 'Low corporate tax', 'Software developer work visas', 'EU server GDPR'],
    solutionApproach: 'Irish LTD & Swiss AG structures optimized for cross-border software licensing.',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    icon: 'ShoppingBag',
    summary: 'EU VAT One-Stop-Shop (OSS) registration, European logistics hubs, multi-currency payment gateways.',
    typicalNeeds: ['Cross-border VAT compliance', 'Stripe / Adyen merchant accounts', 'Custom checkout portal', 'Customs clearance'],
    solutionApproach: 'Portuguese or Irish entities with direct EU customs union and payment gateway integration.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Trading',
    icon: 'Factory',
    summary: 'Import/export EORI registration, supply chain ERP systems, commercial warehouse licensing.',
    typicalNeeds: ['EORI number registration', 'Double taxation treaties', 'Supply chain tracking ERP', 'Commercial premises'],
    solutionApproach: 'Strategic trade setups taking advantage of European transport corridors and trade treaties.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: 'HeartPulse',
    summary: 'Regulatory compliance for medical devices, clinical data protection under GDPR, Swiss holding advantages.',
    typicalNeeds: ['Strict data privacy & GDPR', 'Clinical trial licensing', 'Swiss holding stability', 'R&D tax credits'],
    solutionApproach: 'Swiss cantonal structures and Irish life-science hubs for clinical and MedTech ventures.',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    icon: 'Hotel',
    summary: 'Golden Visa real estate investment alignment, local licensing, seasonal staff payroll management.',
    typicalNeeds: ['Municipal tourism licensing', 'Portuguese Golden Visa', 'Payroll for seasonal workers', 'Booking portal'],
    solutionApproach: 'Portuguese LDA formation coupled with real estate investment fund and tourism permits.',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: 'Briefcase',
    summary: 'Consultancies, legal practices, and agency setups with cross-border invoicing and professional indemnity.',
    typicalNeeds: ['Virtual office address', 'Cross-border B2B invoicing', 'Dual-currency banking', 'Company secretarial'],
    solutionApproach: 'Dublin or Zurich prestigious corporate addresses with remote digital administration.',
  },
  {
    id: 'fintech-blockchain',
    name: 'FinTech & Blockchain',
    icon: 'Coins',
    summary: 'Crypto Valley Zug licensing, VASP / MiCA regulatory preparation, EMI partnerships, and smart contracts.',
    typicalNeeds: ['Swiss Crypto Valley setup', 'MiCA compliance advisory', 'Crypto-friendly banking', 'Secure token portals'],
    solutionApproach: 'Zug GmbH/AG entities with dedicated Swiss banking relationships and regulatory pre-audits.',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    author: 'CLIENT NAME',
    role: 'ROLE',
    company: 'COMPANY',
    location: 'LOCATION (TO BE ADDED)',
    quote: "Client testimonials will appear here once available — replace this placeholder with a direct quote and attribution from a consenting client.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'Business'
  }
];
