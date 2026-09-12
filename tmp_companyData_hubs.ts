import { CountryProfile, ServicePillar, IndustryItem, ProcessStep, CoreValue, WhyChooseUsItem } from '../types';

export const COMPANY_INFO = {
  name: 'RKPT TECH LTD',
  tagline: 'Your Gateway to Europe',
  headline: 'Global Business Consulting & Technology Solutions Firm',
  profileSummary:
    'RKPT TECH LTD is a global business consulting and technology solutions firm specializing in helping entrepreneurs, startups, and established companies successfully establish, expand, and operate businesses across the European Union.',
  valueProposition:
    'With deep expertise in Portugal, Switzerland, and Ireland, we provide end-to-end business support services—from company incorporation and regulatory compliance to banking, taxation, immigration, and digital transformation.',
  integratedApproach:
    'Our integrated approach combines legal, financial, administrative, and IT solutions, ensuring that our clients can focus on growth while we manage complexity, compliance, and operational efficiency.',
  vision:
    'To become a trusted global partner for businesses entering and expanding in Europe by delivering transparent, compliant, and technology-driven solutions that enable sustainable growth.',
  mission: [
    'To simplify cross-border business setup and operations within the EU',
    'To deliver accurate, compliant, and customized consulting services',
    'To empower businesses through innovative IT and digital solutions',
    'To build long-term partnerships based on trust, performance, and results',
  ],
  commitment:
    'At RKPT TECH LTD, we don’t just set up companies—we build foundations for long-term success in Europe. Our clients benefit from clarity, confidence, and complete operational support.',
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
    id: 'portugal',
    name: 'Portugal',
    code: 'PT',
    flag: 'https://flagcdn.com/pt.svg',
    capital: 'Lisbon',
    currency: 'EUR (€)',
    corporateTaxRate: '17% - 21%',
    formationTime: '3 - 7 Business Days',
    structures: ['LDA (Limitada)', 'SA (Sociedade Anónima)', 'Branch / Sucursal', 'Unipessoal LDA'],
    keyAdvantages: [
      'Empresa na Hora express incorporation regime',
      'Strategic Atlantic bridge between EU, Americas, and Africa',
      'Booming technology and startup ecosystem (Lisbon & Porto)',
      'Highly competitive operational and skilled engineering costs',
      'Attractive tax regimens & non-habitual resident / IFICI schemes',
    ],
    visaAlignment: [
      'Startup Visa program for tech entrepreneurs',
      'Golden Visa (Fund investment & research routes)',
      'D8 Digital Nomad Visa & D2 Entrepreneur Visa',
      'D7 Passive Income / Residency alignment',
    ],
    bankingHighlights: [
      'Fast-track accounts with Millennium bcp, Novo Banco, and Santander',
      'Integrated IBAN setup with European EMI partners',
      'Multicurrency merchant accounts for cross-border commerce',
    ],
    summary:
      'Portugal represents Europe’s most dynamic startup ecosystem and premier lifestyle-friendly corporate gateway, combining rapid setup with attractive tax incentives.',
    regionalFocus: 'LDA formation, NHR guidance, Startup & Golden Visa alignment',
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    flag: 'https://flagcdn.com/ch.svg',
    capital: 'Bern / Zurich / Geneva',
    currency: 'CHF',
    corporateTaxRate: '11.9% - 21.6% (Cantonal)',
    formationTime: '7 - 14 Business Days',
    structures: ['GmbH (LLC / SARL)', 'AG (Corporation / SA)', 'Branch Office', 'Holding Company'],
    keyAdvantages: [
      'World’s premier jurisdiction for financial stability & asset security',
      'Crypto Valley Zug: world leader in Web3, FinTech & blockchain regulation',
      'Double taxation treaties with over 100 sovereign jurisdictions',
      'Cantonal tax competitiveness (e.g. Zug, Schwyz, Nidwalden)',
      'Unsurpassed sovereign credit rating, privacy, and institutional trust',
    ],
    visaAlignment: [
      'Swiss B / C Work and Residence Permits for directors',
      'Key personnel transfers for multinational corporations',
      'Cantonal economic interest residency applications',
    ],
    bankingHighlights: [
      'Tier-1 Swiss private and commercial banking relationships (UBS, Julius Baer, cantonal banks)',
      'FinTech friendly accounts for blockchain and high-volume trading',
      'Multi-fiat Swiss Franc (CHF) capital deposit management',
    ],
    summary:
      'Switzerland provides peerless corporate prestige, rock-solid legal certainty, and strategic cantonal tax efficiencies for high-value enterprises and international holdings.',
    regionalFocus: 'GmbH/AG setup, cantonal compliance, Swiss private banking',
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: 'https://flagcdn.com/ie.svg',
    capital: 'Dublin',
    currency: 'EUR (€)',
    corporateTaxRate: '12.5% (Trading Income)',
    formationTime: '3 - 5 Business Days',
    structures: ['Private Company Limited by Shares (LTD)', 'Designated Activity Company (DAC)', 'Branch of Foreign Entity'],
    keyAdvantages: [
      'Standard 12.5% corporate tax rate on active trading income',
      'Only English-speaking common law jurisdiction inside the EU Eurozone',
      'European headquarters choice of Google, Apple, Meta, Stripe, Pfizer',
      'Knowledge Development Box (KDB) 6.25% effective rate for qualified IP',
      'Unrestricted barrier-free access to 450+ million European consumers',
    ],
    visaAlignment: [
      'Critical Skills Employment Permit (CSEP) for key technical staff',
      'Start-up Entrepreneur Programme (STEP)',
      'General Employment Permit & Intra-Company Transfer',
    ],
    bankingHighlights: [
      'Direct clearing with Bank of Ireland, AIB, and leading European digital EMIs',
      'Instant SEPA Instant & BACS cross-border transaction capabilities',
      'Stripe & PayPal frictionless merchant acquirer onboarding',
    ],
    summary:
      'Ireland remains the definitive European corporate hub for tech firms, SaaS exporters, and international trading businesses seeking low corporate tax and seamless EU single market access.',
    regionalFocus: 'LTD formation, CRO filings, EU market access, 12.5% corporate tax',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Integrity & Compliance',
    tag: 'Strict Adherence',
    description: 'We operate strictly within local and EU regulations, safeguarding your company with bulletproof legal governance.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Client-Centric Approach',
    tag: 'Tailored Solutions',
    description: 'Every business is unique. We configure custom corporate architectures mapped precisely to your commercial goals.',
    icon: 'Users',
  },
  {
    title: 'Expertise & Precision',
    tag: 'Senior Specialists',
    description: 'Delivered by experienced corporate lawyers, chartered tax accountants, and senior enterprise software engineers.',
    icon: 'Award',
  },
  {
    title: 'Innovation',
    tag: 'Technology-Driven',
    description: 'We replace outdated bureaucracy with automated document workflows, modern banking EMIs, and custom ERP digital solutions.',
    icon: 'Zap',
  },
  {
    title: 'Transparency',
    tag: 'Zero Surprises',
    description: 'Clear milestone schedules, transparent pricing structures, and proactive compliance tracking from day one.',
    icon: 'Eye',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'Specialized Jurisdictional Expertise',
    highlight: 'Portugal • Switzerland • Ireland',
    description: 'Deep localized mastery of commercial codes, cantonal tax laws, and corporate registry mechanisms in Europe’s premier hubs.',
    icon: 'MapPin',
  },
  {
    title: 'Complete One-Stop Architecture',
    highlight: 'Legal • Finance • Immigration • IT',
    description: 'You never need to juggle 5 disparate agencies. We synchronize company registration, banking, tax filings, and custom IT infrastructure under one roof.',
    icon: 'Layers',
  },
  {
    title: 'Strong Local European Partner Network',
    highlight: 'Vetted Notaries & Tax Authorities',
    description: 'Established working relationships with commercial courts, tax administrations, registered notaries, and tier-1 European banks.',
    icon: 'Network',
  },
  {
    title: 'Multilingual & Multicultural Team',
    highlight: 'English • Portuguese • German • French',
    description: 'Fluent in international cross-border business culture, removing friction between your home team and local European authorities.',
    icon: 'Globe',
  },
  {
    title: 'End-to-End Project Ownership',
    highlight: 'White-Glove Turnkey Delivery',
    description: 'From preliminary structure feasibility through incorporation, apostilled documentation, bank opening, and first VAT filings.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Rigorous EU Regulatory Standards',
    highlight: '100% GDPR & AML / KYC Compliant',
    description: 'Full compliance with EU anti-money laundering mandates, economic substance regulations, and data privacy legislation.',
    icon: 'Scale',
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
    title: 'Connect',
    description: 'Coordinate accounting, tax, compliance and operational services.',
  },
  {
    step: 6,
    title: 'Digitise',
    description: 'Build websites, software, cloud systems and business technology.',
  },
  {
    step: 7,
    title: 'Integrate AI',
    description: 'Identify and implement practical AI and automation opportunities.',
  },
  {
    step: 8,
    title: 'Protect',
    description: 'Strengthen cybersecurity, access, backup and operational resilience.',
  },
  {
    step: 9,
    title: 'Support',
    description: 'Provide ongoing technology, compliance and business support.',
  },
  {
    step: 10,
    title: 'Expand',
    description: 'Support international growth and entry into additional markets.',
  },
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
    author: 'Elena Rostova',
    role: 'CEO & Founder, FinTech Solutions',
    company: 'Finova Group',
    location: 'Zurich, Switzerland',
    quote: "RKPT TECH LTD architected our entire European expansion. From the Swiss AG formation in Crypto Valley to securing our EMI partnerships, their strategic guidance was flawless.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'FinTech & Blockchain'
  },
  {
    id: 't2',
    author: 'Marcus Jenson',
    role: 'Director of Operations',
    company: 'Global Retail Labs',
    location: 'Dublin, Ireland',
    quote: "The dual-market setup in Ireland and Portugal gave us the exact tax efficiencies we needed. Their team managed everything—from VAT registrations to corporate bank accounts—in record time.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'E-Commerce & Retail'
  },
  {
    id: 't3',
    author: 'Sophie Dubois',
    role: 'VP of Engineering',
    company: 'CloudMatrix SaaS',
    location: 'Lisbon, Portugal',
    quote: "Relocating our core development team to Lisbon seemed daunting, but RKPT handled all NHR tax setups, tech visas, and the corporate LDA formation without a single delay.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'IT & SaaS'
  },
  {
    id: 't4',
    author: 'Lars Oestergaard',
    role: 'Managing Partner',
    company: 'Oestergaard Health',
    location: 'Geneva, Switzerland',
    quote: "Their precision in navigating strict Swiss cantonal regulations and aligning them with GDPR standards for our MedTech data platform was exceptional. A truly premium consultancy.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'Healthcare & Life Sciences'
  }
];
