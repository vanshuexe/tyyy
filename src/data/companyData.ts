import { CountryProfile, ServicePillar, IndustryItem, ProcessStep, CoreValue, WhyChooseUsItem } from '../types';

export const COMPANY_INFO = {
  name: 'RKPT TECH LTD',
  tagline: 'OFFICIAL BUSINESS & TECHNOLOGY PARTNER',
  headline: 'Global business hubs',
  profileSummary:
    'RKPT TECH LTD is a global business consulting and technology solutions firm specializing in helping entrepreneurs, startups and established companies establish, expand and operate businesses across international markets. Our integrated approach combines business, financial, administrative, compliance and IT solutions so clients can focus on growth while we help manage complexity, compliance and operational efficiency.',
  valueProposition:
    'Technology should make your business easier to operate, more secure and more scalable. We design practical digital solutions around your business requirements.',
  integratedApproach:
    'RKPT maintains direct business, compliance and technology capabilities across seven strategic international gateways.',
  vision:
    'To become a trusted global partner for businesses entering and expanding into international markets by delivering transparent, compliant and technology-driven solutions that enable sustainable growth.',
  mission: [
    'Simplify cross-border business setup and operations.',
    'Deliver accurate, compliant and customized consulting services.',
    'Empower businesses through innovative IT and digital solutions.',
    'Build long-term partnerships based on trust, performance and results.',
  ],
  commitment:
    'We combine business setup, compliance, financial and immigration support with IT, AI, software and cybersecurity solutions.',
  contact: {
    email: 'info@rkpttech.com',
    secondaryEmail: 'info@rkpttech.com',
    phoneEu: '+44 (0) 20 0000 0000',
    phoneCh: '+44 (0) 20 0000 0000',
    phoneIe: '+44 (0) 20 0000 0000',
    website: 'www.rkpttech.com',
    offices: [
      {
        city: 'Lisbon',
        country: 'Portugal',
        address: 'Lisbon, Portugal',
        focus: 'LDA Formation, NHR & Golden Visa Hub',
      },
      {
        city: 'Zurich',
        country: 'Switzerland',
        address: 'Zurich, Switzerland',
        focus: 'GmbH / AG Structuring & Cantonal Compliance',
      },
      {
        city: 'Dublin',
        country: 'Ireland',
        address: 'Dublin, Ireland',
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
    highlight: 'Seven business hubs',
    description: 'Seven business hubs across Europe, the UK, USA, UAE and India.',
    icon: 'MapPin',
  },
  {
    title: 'Integrated',
    highlight: 'One ecosystem',
    description: 'Business, financial, compliance, immigration and technology support in one ecosystem.',
    icon: 'Layers',
  },
  {
    title: 'End-to-end',
    highlight: 'Start to finish',
    description: 'From initial consultation through setup, implementation and ongoing support.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Technology-driven',
    highlight: 'Digital solutions',
    description: 'Practical IT, AI, software, cloud, automation and cybersecurity solutions.',
    icon: 'Laptop',
  },
  {
    title: 'Multi-disciplinary',
    highlight: 'Working together',
    description: 'Business and technology capabilities designed to work together.',
    icon: 'Network',
  },
  {
    title: 'International',
    highlight: 'Multiple jurisdictions',
    description: 'Support for clients operating across multiple jurisdictions.',
    icon: 'Globe',
  },
  {
    title: 'Compliance-focused',
    highlight: 'Local and EU',
    description: 'Structured around applicable local and EU requirements.',
    icon: 'Scale',
  },
  {
    title: 'Transparent',
    highlight: 'Clear communication',
    description: 'Clear processes, clear communication and transparent service scope.',
    icon: 'Eye',
  }
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
    category: "business",
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
    category: "business",
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
    category: "business",
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
    category: "business",
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
    category: "business",
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
    category: "business",
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
  },
  {
    id: "it-support",
    number: "07",
    title: "IT Support & Managed IT",
    tagline: "Ongoing technical maintenance",
    description: "Business IT support, user and device support, Microsoft/cloud environment support, systems support and ongoing technical maintenance.",
    icon: "Laptop",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Business IT support",
          "User and device support",
          "Microsoft/cloud environment support",
          "Systems support",
          "Ongoing technical maintenance"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "ai-integration",
    number: "08",
    title: "AI Integration",
    tagline: "Productivity solutions and automation",
    description: "AI readiness assessment, workflow integration, productivity solutions, document and knowledge automation, and customer-service AI, monitored and improved on an ongoing basis.",
    icon: "Cpu",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "AI readiness assessment",
          "Workflow integration",
          "Productivity solutions",
          "Document and knowledge automation",
          "Customer-service AI",
          "Ongoing monitoring and improvement"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "software-development",
    number: "09",
    title: "Software Development",
    tagline: "Custom business software and apps",
    description: "Custom business software, web and mobile applications, business platforms, secure authentication, API integrations, and cloud or on-premise deployment.",
    icon: "Code",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Custom business software",
          "Web and mobile applications",
          "Business platforms",
          "Secure authentication",
          "API integrations",
          "Cloud or on-premise deployment"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "website-digital",
    number: "10",
    title: "Website & Digital Solutions",
    tagline: "Corporate websites and SEO",
    description: "Corporate websites, business landing pages, multilingual and GDPR-aware design, SEO-ready architecture, and ongoing maintenance and support.",
    icon: "Globe",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Corporate websites",
          "Business landing pages",
          "Multilingual design",
          "GDPR-aware design",
          "SEO-ready architecture",
          "Ongoing maintenance and support"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "erp-crm",
    number: "11",
    title: "ERP & CRM Solutions",
    tagline: "Business system integration",
    description: "Custom ERP systems, CRM integration, accounting and finance integration, HR and payroll systems, and supply-chain and inventory systems.",
    icon: "Database",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Custom ERP systems",
          "CRM integration",
          "Accounting and finance integration",
          "HR and payroll systems",
          "Supply-chain and inventory systems"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "cloud-solutions",
    number: "12",
    title: "Cloud Solutions",
    tagline: "Cloud setup and infrastructure",
    description: "Cloud setup and migration, business productivity environments, infrastructure support, backup and recovery, and access and identity management.",
    icon: "Cloud",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Cloud setup and migration",
          "Business productivity environments",
          "Infrastructure support",
          "Backup and recovery",
          "Access and identity management"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "business-automation",
    number: "13",
    title: "Business Automation",
    tagline: "Workflow and reporting automation",
    description: "Workflow automation, approval processes, document automation, CRM/ERP workflows, reporting automation and integration between business systems.",
    icon: "Repeat",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Workflow automation",
          "Approval processes",
          "Document automation",
          "CRM/ERP workflows",
          "Reporting automation",
          "Integration between business systems"
        ]
      }
    ],
    keyHighlights: [],
    deliverables: []
  },
  {
    id: "cybersecurity",
    number: "14",
    title: "Cybersecurity",
    tagline: "Security assessment and protection",
    description: "Security assessment, endpoint and network protection, identity and access controls, backup and recovery planning, monitoring and incident-response coordination.",
    icon: "ShieldAlert",
    badge: "Core Service",
    category: "technology",
    subCategories: [
      {
        title: "Services Include:",
        items: [
          "Security assessment",
          "Endpoint and network protection",
          "Identity and access controls",
          "Backup and recovery planning",
          "Monitoring",
          "Incident-response coordination"
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
    id: 'individuals-entrepreneurs',
    name: 'Individuals and entrepreneurs',
    icon: 'User',
    summary: 'Personalized setup, visa assistance, and private wealth alignment.',
    typicalNeeds: ['Business setup', 'Visas', 'Relocation', 'Personal tax planning'],
    solutionApproach: 'Tailored roadmaps for individual founders and solo entrepreneurs.',
  },
  {
    id: 'startups-founders',
    name: 'Startups and founders',
    icon: 'Rocket',
    summary: 'Fast-paced incorporation, startup visas, seed banking, and agile tech presence.',
    typicalNeeds: ['Company registration', 'Founder visas', 'Bank accounts', 'Scalable website'],
    solutionApproach: 'Turnkey startup packages with minimal bureaucratic overhead.',
  },
  {
    id: 'sme',
    name: 'Small and medium-sized businesses',
    icon: 'Building',
    summary: 'Scalable corporate structures and cross-border operational support.',
    typicalNeeds: ['Operational expansion', 'Compliance management', 'IT infrastructure'],
    solutionApproach: 'Streamlined growth solutions for mid-market scaling.',
  },
  {
    id: 'established-companies',
    name: 'Established companies',
    icon: 'Building2',
    summary: 'Robust governance, enterprise IT, and multi-jurisdiction compliance.',
    typicalNeeds: ['Corporate governance', 'Enterprise systems', 'International tax planning'],
    solutionApproach: 'Dedicated account management and integrated enterprise support.',
  },
  {
    id: 'international-companies',
    name: 'International companies',
    icon: 'Globe',
    summary: 'Foreign direct investment structures and regional headquarter setups.',
    typicalNeeds: ['Subsidiary formation', 'Transfer pricing', 'Global mobility'],
    solutionApproach: 'Strategic market entry and cross-border operational coordination.',
  },
  {
    id: 'investors',
    name: 'Investors',
    icon: 'TrendingUp',
    summary: 'Golden Visa programs, fund structuring, and investment vehicle setup.',
    typicalNeeds: ['Golden Visas', 'SPV formation', 'Wealth management alignment'],
    solutionApproach: 'Secure and compliant structures for global capital deployment.',
  },
  {
    id: 'it-saas',
    name: 'IT and SaaS businesses',
    icon: 'Laptop',
    summary: 'Optimized IP holding structures and GDPR software compliance.',
    typicalNeeds: ['IP holding', 'Low corporate tax', 'Tech talent visas'],
    solutionApproach: 'Structures optimized for cross-border software licensing.',
  },
  {
    id: 'professional-services',
    name: 'Professional services firms',
    icon: 'Briefcase',
    summary: 'Consultancies and agency setups with cross-border invoicing.',
    typicalNeeds: ['Virtual offices', 'B2B invoicing', 'Professional indemnity'],
    solutionApproach: 'Prestigious corporate addresses with digital administration.',
  },
  {
    id: 'manufacturing-trading',
    name: 'Manufacturing and trading businesses',
    icon: 'Factory',
    summary: 'Import/export registration and supply chain ERP systems.',
    typicalNeeds: ['EORI registration', 'Supply chain ERP', 'Commercial premises'],
    solutionApproach: 'Strategic trade setups leveraging European transport corridors.',
  },
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare and life sciences',
    icon: 'HeartPulse',
    summary: 'Regulatory compliance for medical devices and clinical data.',
    typicalNeeds: ['Data privacy & GDPR', 'Clinical trial licensing', 'R&D tax credits'],
    solutionApproach: 'Compliant structures for clinical and MedTech ventures.',
  },
  {
    id: 'hospitality-tourism',
    name: 'Hospitality and tourism',
    icon: 'Hotel',
    summary: 'Real estate investment alignment and local licensing.',
    typicalNeeds: ['Tourism licensing', 'Payroll for seasonal workers', 'Booking portals'],
    solutionApproach: 'Entity formation coupled with real estate and tourism permits.',
  },
  {
    id: 'fintech-tech',
    name: 'FinTech and technology businesses',
    icon: 'Coins',
    summary: 'Regulatory preparation, EMI partnerships, and financial platforms.',
    typicalNeeds: ['Compliance advisory', 'Friendly banking', 'Secure portals'],
    solutionApproach: 'Entities with dedicated banking relationships and regulatory pre-audits.',
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    author: 'CLIENT NAME',
    role: 'ROLE',
    company: 'CLIENT COMPANY',
    location: 'LOCATION (TO BE ADDED)',
    quote: "Client testimonials will appear here once available — replace this placeholder with a direct quote and attribution from a consenting client.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'Industry Domain'
  }
];
