import { CountryProfile, ServicePillar, IndustryItem, ProcessStep, CoreValue, WhyChooseUsItem, TechnologyServiceItem } from '../types';

export const COMPANY_INFO = {
  name: 'RKPT TECH LTD',
  primaryMessage: 'BUSINESS. TECHNOLOGY. COMPLIANCE. GROWTH.',
  tagline: 'BUSINESS. TECHNOLOGY. COMPLIANCE. GROWTH.',
  secondaryMessage: 'Build. Operate. Transform. Protect. Grow.',
  headline: 'Build Your Business. Transform Your Operations. Protect Your Future.',
  eyebrow: 'GLOBAL BUSINESS & TECHNOLOGY SOLUTIONS',
  coreProposition:
    "We don't just help you register a company. We help you build the infrastructure required to operate, protect and grow it.",
  supportingText:
    'RKPT TECH LTD helps individuals, entrepreneurs, startups and established companies establish, operate and expand across international markets. We combine business setup, compliance, financial and immigration support with IT, AI, software and cybersecurity solutions.',
  trustLine: 'One Global Partner. Seven Business Hubs.',
  profileSummary:
    'RKPT TECH LTD is a global business consulting and technology solutions firm specializing in helping entrepreneurs, startups and established companies establish, expand and operate businesses across international markets. Our integrated approach combines business, financial, administrative, compliance and IT solutions so clients can focus on growth while we help manage complexity, compliance and operational efficiency.',
  vision:
    'To become a trusted global partner for businesses entering and expanding into international markets by delivering transparent, compliant and technology-driven solutions that enable sustainable growth.',
  mission: [
    'Simplify cross-border business setup and operations.',
    'Deliver accurate, compliant and customized consulting services.',
    'Empower businesses through innovative IT and digital solutions.',
    'Build long-term partnerships based on trust, performance and results.'
  ],
  coreValues: [
    'Integrity & Compliance',
    'Client-Centric Approach',
    'Expertise & Precision',
    'Innovation',
    'Transparency'
  ],
  contact: {
    email: 'contact@rkpttech.com',
    secondaryEmail: 'advisory@rkpttech.com',
    phoneEu: '+351 21 000 8920',
    phoneCh: '+41 44 220 5410',
    phoneIe: '+353 1 485 3290',
    phoneUk: '+44 20 7946 0912',
    phoneUs: '+1 212 987 6543',
    phoneAe: '+971 4 312 9000',
    website: 'www.rkpttech.com',
    offices: [
      {
        city: 'Lisbon',
        country: 'Portugal',
        address: 'Avenida da Liberdade 245, 1250-143 Lisboa',
        focus: 'EU Business & Company Formation Hub',
      },
      {
        city: 'London',
        country: 'United Kingdom',
        address: '100 Bishopsgate, London EC2N 4AG',
        focus: 'UK Business & Technology Hub',
      },
      {
        city: 'Dublin',
        country: 'Ireland',
        address: 'Grand Canal Dock, Dublin 2, D02 X260',
        focus: 'EU Business & Technology Hub',
      },
      {
        city: 'Zurich',
        country: 'Switzerland',
        address: 'Bahnhofstrasse 69, 8001 Zürich',
        focus: 'Swiss Business Hub',
      },
      {
        city: 'New York',
        country: 'USA',
        address: 'One World Trade Center, New York, NY 10007',
        focus: 'North American Business Hub',
      },
      {
        city: 'Dubai',
        country: 'UAE',
        address: 'DIFC Gate Precinct, Building 4, Dubai',
        focus: 'Middle East Business Hub',
      },
      {
        city: 'Bangalore',
        country: 'India',
        address: 'Outer Ring Road, Bellandur, Bangalore 560103',
        focus: 'Technology & Delivery Hub',
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
    structures: [
      "LDA formation",
      "business setup",
      "accounting/tax coordination",
      "banking",
      "immigration",
      "digital transformation"
    ],
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
    code: "GB",
    flag: "https://flagcdn.com/gb.svg",
    capital: "London",
    currency: "GBP (£)",
    corporateTaxRate: "19% - 25%",
    formationTime: "1 - 3 Business Days",
    structures: [
      "UK company setup",
      "operational support",
      "banking",
      "compliance",
      "technology"
    ],
    keyAdvantages: [
      "UK Business & Technology Hub"
    ],
    visaAlignment: [
      "UK LTD", "Banking", "Tech"
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
    structures: [
      "Irish LTD setup",
      "CRO-related support",
      "EU market access",
      "operations",
      "technology"
    ],
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
    capital: "Zurich / Zug",
    currency: "CHF",
    corporateTaxRate: "11.9% - 21.6%",
    formationTime: "2 - 4 Weeks",
    structures: [
      "GmbH/AG setup",
      "cantonal compliance",
      "banking",
      "business support"
    ],
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
    capital: "Delaware / Wyoming",
    currency: "USD ($)",
    corporateTaxRate: "21%",
    formationTime: "2 - 5 Business Days",
    structures: [
      "US company formation support",
      "business operations",
      "banking/payment coordination",
      "technology"
    ],
    keyAdvantages: [
      "North American Business Hub"
    ],
    visaAlignment: [
      "Delaware LLC", "Wyoming LLC", "C-Corp"
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
    corporateTaxRate: "9% (0% Freezone)",
    formationTime: "1 - 3 Weeks",
    structures: [
      "business setup",
      "licensing coordination",
      "banking",
      "international operations",
      "technology"
    ],
    keyAdvantages: [
      "Middle East Business Hub"
    ],
    visaAlignment: [
      "Freezone", "Mainland", "Golden Visa"
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
    capital: "Bangalore",
    currency: "INR (₹)",
    corporateTaxRate: "15% - 22%",
    formationTime: "2 - 4 Weeks",
    structures: [
      "technology delivery",
      "software development",
      "IT support",
      "AI",
      "cybersecurity",
      "business technology operations"
    ],
    keyAdvantages: [
      "Technology & Delivery Hub"
    ],
    visaAlignment: [
      "Pvt Ltd", "GCC", "IT Delivery"
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
    description: "Solutions are tailored to each client's specific business and operational needs.",
    icon: 'Users',
  },
  {
    title: 'Expertise & Precision',
    tag: 'Senior Specialists',
    description: 'Work is structured around experienced professional capabilities and legal rigor.',
    icon: 'Award',
  },
  {
    title: 'Innovation',
    tag: 'Technology-Driven',
    description: 'We use practical technology and AI to streamline and improve business operations.',
    icon: 'Zap',
  },
  {
    title: 'Transparency',
    tag: 'Clear Scope',
    description: 'Clear processes, transparent communication and well-defined service scopes.',
    icon: 'Eye',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'GLOBAL',
    highlight: '7 Business Hubs',
    description: 'Seven business hubs across Europe, the UK, USA, UAE and India.',
    icon: 'MapPin',
  },
  {
    title: 'INTEGRATED',
    highlight: 'One Ecosystem',
    description: 'Business, financial, compliance, immigration and technology support in one ecosystem.',
    icon: 'Layers',
  },
  {
    title: 'END-TO-END',
    highlight: 'Full Lifecycle',
    description: 'From initial consultation through setup, implementation and ongoing support.',
    icon: 'CheckCircle2',
  },
  {
    title: 'TECHNOLOGY-DRIVEN',
    highlight: 'Digital Solutions',
    description: 'Practical IT, AI, software, cloud, automation and cybersecurity solutions.',
    icon: 'Cpu',
  },
  {
    title: 'MULTI-DISCIPLINARY',
    highlight: 'Unified Teams',
    description: 'Business and technology capabilities designed to work together seamlessly.',
    icon: 'Users',
  },
  {
    title: 'INTERNATIONAL',
    highlight: 'Multi-jurisdiction',
    description: 'Support for clients operating across multiple jurisdictions and regulatory zones.',
    icon: 'Globe',
  },
  {
    title: 'COMPLIANCE-FOCUSED',
    highlight: 'Regulatory Standards',
    description: 'Structured around applicable local and EU requirements.',
    icon: 'ShieldCheck',
  },
  {
    title: 'TRANSPARENT',
    highlight: 'Clear Scope',
    description: 'Clear processes, clear communication and transparent service scope.',
    icon: 'Eye',
  },
];

// SECTION 05: BUSINESS SERVICES — MAIN SERVICE SECTION
export const SERVICES_DATA: ServicePillar[] = [
  {
    id: "company-formation",
    number: "01",
    title: "Company Formation & Business Setup",
    tagline: "Entity Registration & Statutory Foundation",
    description: "From company formation to ongoing compliance and international expansion, we help clients establish and operate businesses with a clear, structured approach.",
    icon: "Building2",
    badge: "Core Service",
    subCategories: [
      {
        title: "Included Capabilities:",
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
        title: "Jurisdiction Focus:",
        items: [
          "Portugal — LDA formation & business setup",
          "UK — UK LTD incorporation & Companies House",
          "Ireland — Irish LTD setup & CRO compliance",
          "Switzerland — GmbH / AG cantonal setup",
          "USA — Delaware & Wyoming LLC / C-Corp",
          "Dubai / UAE — Freezone & Mainland licensing"
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
    tagline: "Corporate Governance & Secretarial Oversight",
    description: "Comprehensive regulatory compliance coordination, secretarial maintenance, and continuous oversight to protect your corporate standing.",
    icon: "Scale",
    badge: "Core Service",
    subCategories: [
      {
        title: "Included Capabilities:",
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
    tagline: "Ledger Management, Filings & Fiscal Strategy",
    description: "Multi-currency bookkeeping, periodic financial reporting, payroll management, corporate tax filings, and international double-taxation treaty guidance.",
    icon: "Calculator",
    badge: "Core Service",
    subCategories: [
      {
        title: "Included Capabilities:",
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
    tagline: "Corporate Accounts, EMIs & Gateway Onboarding",
    description: "Direct assistance with corporate bank account opening, FinTech EMI clearing accounts, payment gateways, and ongoing banking compliance.",
    icon: "Landmark",
    badge: "Core Service",
    subCategories: [
      {
        title: "Included Capabilities:",
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
    tagline: "Visas, Residency Permits & Family Support",
    description: "End-to-end guidance for entrepreneurs, investors, founders, and key personnel securing residence permits, visas, and settling in new jurisdictions.",
    icon: "Plane",
    badge: "Core Service",
    subCategories: [
      {
        title: "Included Capabilities:",
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
    tagline: "Market Entry, Financial Modelling & Expansion",
    description: "Strategic planning, commercial feasibility studies, pitch deck creation, virtual office solutions, and international market entry advisory.",
    icon: "TrendingUp",
    badge: "Core Service",
    subCategories: [
      {
        title: "Included Capabilities:",
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

// SECTION 06: TECHNOLOGY SERVICES — SECOND
export const TECHNOLOGY_SERVICES_DATA: TechnologyServiceItem[] = [
  {
    id: "it-support",
    number: "01",
    title: "IT Support & Managed IT",
    tagline: "User, Device & Cloud Environment Management",
    description: "Continuous enterprise technical support, device fleet provisioning, cloud operations, and proactive infrastructure maintenance.",
    icon: "Monitor",
    items: [
      "Business IT support",
      "User and device support",
      "Microsoft/cloud environment support",
      "Business systems support",
      "IT troubleshooting and maintenance",
      "Ongoing technical support"
    ]
  },
  {
    id: "ai-integration",
    number: "02",
    title: "AI Integration",
    tagline: "Workflows, Document Intelligence & Productivity",
    description: "Practical artificial intelligence embedded into core business processes for high-impact automation and knowledge management.",
    icon: "Cpu",
    approachTitle: "Our AI Approach",
    approach: ["Assess", "Design", "Integrate", "Automate", "Monitor"],
    items: [
      "AI readiness assessment",
      "AI integration into business workflows",
      "AI-powered productivity solutions",
      "Document and knowledge automation",
      "Customer-service and internal AI solutions",
      "AI workflow monitoring and improvement"
    ]
  },
  {
    id: "software-development",
    number: "03",
    title: "Software Development",
    tagline: "Custom Business Platforms & Mobile Apps",
    description: "Bespoke web applications, client portals, APIs, and scalable digital platforms engineered with rigorous security standards.",
    icon: "Code",
    approachTitle: "Development Approach",
    approach: ["Discover", "Design", "Develop", "Test", "Deploy", "Support"],
    items: [
      "Custom business software",
      "Web applications",
      "Mobile applications",
      "Business platforms",
      "Secure authentication",
      "API and system integrations",
      "Cloud and on-premise solutions"
    ]
  },
  {
    id: "website-digital",
    number: "04",
    title: "Website & Digital Solutions",
    tagline: "Corporate Portals & Multilingual Architecture",
    description: "High-performance corporate websites and landing pages built for international conversions, GDPR compliance, and search visibility.",
    icon: "Globe",
    items: [
      "Corporate websites",
      "Business landing pages",
      "Multilingual websites",
      "GDPR-aware design",
      "SEO-ready architecture",
      "Website maintenance and support"
    ]
  },
  {
    id: "erp-crm",
    number: "05",
    title: "ERP & CRM Solutions",
    tagline: "Unified Operations, HR, Invoicing & Pipeline",
    description: "End-to-end enterprise resource planning and CRM implementations bridging operations, accounting, and client management.",
    icon: "Database",
    items: [
      "Custom ERP systems",
      "CRM integration",
      "Accounting and finance integration",
      "HR and payroll systems",
      "Business process systems",
      "Supply-chain and inventory systems",
      "Cloud-based and on-premise solutions"
    ]
  },
  {
    id: "cloud-solutions",
    number: "06",
    title: "Cloud Solutions",
    tagline: "Modern Infrastructure, Backup & Security",
    description: "Seamless cloud migrations, identity management, resilient backup architecture, and secure scalable hosting.",
    icon: "Cloud",
    items: [
      "Cloud setup and migration",
      "Business productivity environments",
      "Cloud infrastructure support",
      "Backup and recovery",
      "Access and identity management"
    ]
  },
  {
    id: "business-automation",
    number: "07",
    title: "Business Automation",
    tagline: "Workflow Optimization & Process Acceleration",
    description: "Automate repetitive approvals, document flows, reporting pipelines, and cross-platform integrations.",
    icon: "Repeat",
    items: [
      "Workflow automation",
      "Approval processes",
      "Document automation",
      "CRM and ERP workflows",
      "Reporting automation",
      "Integration between business systems"
    ]
  },
  {
    id: "cybersecurity",
    number: "08",
    title: "Cybersecurity",
    tagline: "Protection, Threat Monitoring & Resilience",
    description: "Institutional-grade cybersecurity safeguarding corporate data, endpoints, identity, and regulatory compliance.",
    icon: "ShieldCheck",
    approachTitle: "Our Security Approach",
    approach: ["Assess", "Protect", "Monitor", "Respond", "Improve"],
    items: [
      "Security assessment",
      "Endpoint and network protection",
      "Identity and access controls",
      "Backup and recovery planning",
      "Security monitoring",
      "Security awareness support",
      "Incident-response coordination"
    ]
  }
];

// SECTION 07: HOW WE HELP — END-TO-END JOURNEY (10 Steps)
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'DISCOVER',
    description: 'Understand your goals, business model and target market.',
  },
  {
    step: 2,
    title: 'ASSESS',
    description: 'Review country, structure, operational, compliance and technology requirements.',
  },
  {
    step: 3,
    title: 'PLAN',
    description: 'Create a practical business and implementation roadmap.',
  },
  {
    step: 4,
    title: 'ESTABLISH',
    description: 'Support company setup, registration, banking, immigration and related requirements.',
  },
  {
    step: 5,
    title: 'CONNECT',
    description: 'Coordinate accounting, tax, compliance and operational services.',
  },
  {
    step: 6,
    title: 'DIGITISE',
    description: 'Build websites, software, cloud systems and business technology.',
  },
  {
    step: 7,
    title: 'INTEGRATE AI',
    description: 'Identify and implement practical AI and automation opportunities.',
  },
  {
    step: 8,
    title: 'PROTECT',
    description: 'Strengthen cybersecurity, access, backup and operational resilience.',
  },
  {
    step: 9,
    title: 'SUPPORT',
    description: 'Provide ongoing technology, compliance and business support.',
  },
  {
    step: 10,
    title: 'EXPAND',
    description: 'Support international growth and entry into additional markets.',
  }
];

// SECTION 09: WHO WE SERVE (11 Sectors, E-Commerce explicitly removed)
export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'individuals-entrepreneurs',
    name: 'Individuals & Entrepreneurs',
    icon: 'User',
    summary: 'Tailored guidance for solo founders and business professionals establishing international operations.',
    typicalNeeds: ['Sole trader or corporate setup', 'Tax residency advisory', 'Business bank account', 'Digital presence'],
    solutionApproach: 'Turnkey company formation and compliance setup across European and global hubs.'
  },
  {
    id: 'startups-founders',
    name: 'Startups & Founders',
    icon: 'Rocket',
    image: 'https://ik.imagekit.io/fdhgiehjz/68768.png',
    summary: 'Fast-paced incorporation, founder visa alignments, operational banking, and technical infrastructure.',
    typicalNeeds: ['Fast company registration', 'Founder visa permits', 'Seed-stage banking', 'Scalable software stack'],
    solutionApproach: 'Turnkey startup packages in Lisbon, Dublin, and London with minimal bureaucratic overhead.'
  },
  {
    id: 'smes',
    name: 'Small & Medium-Sized Businesses',
    icon: 'Building',
    summary: 'End-to-end corporate administration, accounting, payroll, and business automation for expanding SMEs.',
    typicalNeeds: ['Cross-border tax compliance', 'Multi-currency payroll', 'IT systems support', 'Regulatory filings'],
    solutionApproach: 'Consolidated corporate secretarial, tax, and managed IT services under one partner.'
  },
  {
    id: 'established-companies',
    name: 'Established Companies',
    icon: 'Building2',
    summary: 'Subsidiary incorporation, European branches, transfer pricing compliance, and enterprise software.',
    typicalNeeds: ['Holding structures', 'Cantonal tax optimization', 'ERP & CRM systems', 'Cybersecurity audits'],
    solutionApproach: 'Dedicated jurisdictional directors and enterprise IT engineering teams.'
  },
  {
    id: 'international-companies',
    name: 'International Companies',
    icon: 'Globe',
    summary: 'Multi-jurisdiction corporate architectures connecting the US, Europe, UAE, and Asian delivery centers.',
    typicalNeeds: ['Global nexus management', 'Bilateral tax treaties', 'Cross-border banking', 'Unified cloud infrastructure'],
    solutionApproach: 'Comprehensive multi-hub coordination through our European central desk.'
  },
  {
    id: 'investors',
    name: 'Investors',
    icon: 'TrendingUp',
    summary: 'SPV formation, Golden Visa funds, holding entities, and fiscal compliance for private and institutional capital.',
    typicalNeeds: ['Holding company formation', 'Residency by investment', 'Private banking liaison', 'Statutory audit support'],
    solutionApproach: 'Swiss AG, Portuguese LDA, and Irish holding vehicles engineered for asset preservation.'
  },
  {
    id: 'it-saas',
    name: 'IT & SaaS Businesses',
    icon: 'Laptop',
    summary: 'Optimized IP holding structures, Knowledge Box tax rates, GDPR compliance, and developer hiring.',
    typicalNeeds: ['Intellectual property holding', 'Low corporate tax', 'Software developer work visas', 'EU server GDPR'],
    solutionApproach: 'Irish LTD & Swiss AG structures optimized for cross-border software licensing and tech teams.'
  },
  {
    id: 'professional-services',
    name: 'Professional Services Firms',
    icon: 'Briefcase',
    image: 'https://ik.imagekit.io/fdhgiehjz/3838383.png',
    summary: 'Consultancies, advisory firms, and agencies requiring cross-border billing and virtual corporate offices.',
    typicalNeeds: ['Prestigious registered address', 'Cross-border B2B billing', 'Multi-currency accounts', 'Workflow automation'],
    solutionApproach: 'Prestigious corporate offices in London, Zurich, and Dublin with automated digital operations.'
  },
  {
    id: 'manufacturing-trading',
    name: 'Manufacturing & Trading Businesses',
    icon: 'Factory',
    image: 'https://ik.imagekit.io/fdhgiehjz/67u676.png',
    summary: 'Import/export EORI registration, customs compliance, supply chain ERP systems, and commercial licensing.',
    typicalNeeds: ['EORI number registration', 'Double taxation treaties', 'Supply chain ERP', 'Commercial banking'],
    solutionApproach: 'Strategic trade setups leveraging European transport corridors and bilateral trade agreements.'
  },
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    icon: 'HeartPulse',
    image: 'https://ik.imagekit.io/fdhgiehjz/566656.png',
    summary: 'Regulatory compliance for healthtech, GDPR-compliant medical data systems, and Swiss holding stability.',
    typicalNeeds: ['Strict data privacy & GDPR', 'Clinical trial licensing', 'Swiss holding stability', 'R&D tax credits'],
    solutionApproach: 'Swiss cantonal structures and Irish life-science hubs for clinical and MedTech ventures.'
  },
  {
    id: 'hospitality-tourism',
    name: 'Hospitality & Tourism',
    icon: 'Hotel',
    image: 'https://ik.imagekit.io/fdhgiehjz/733878.png',
    summary: 'Golden Visa real estate alignment, municipal hospitality permits, and seasonal workforce payroll.',
    typicalNeeds: ['Municipal tourism licensing', 'Portuguese Golden Visa', 'Payroll for seasonal workers', 'Digital management systems'],
    solutionApproach: 'Portuguese LDA formation coupled with real estate and tourism operational support.'
  },
  {
    id: 'fintech-technology',
    name: 'FinTech & Technology Businesses',
    icon: 'Coins',
    image: 'https://ik.imagekit.io/fdhgiehjz/8898989.png',
    summary: 'FinTech licensing preparation, EMI account onboarding, AI automation, and secure transaction infrastructure.',
    typicalNeeds: ['Swiss Crypto Valley setup', 'Regulatory compliance pre-audits', 'Crypto-friendly banking', 'Secure transaction portals'],
    solutionApproach: 'Zug GmbH/AG entities with dedicated Swiss banking relationships and regulatory pre-audits.'
  }
];

export const CONSULTATION_CATEGORIES = [
  'Company Formation',
  'Accounting & Tax',
  'Banking & Payments',
  'Legal & Compliance',
  'Immigration',
  'IT Support',
  'AI Integration',
  'Software Development',
  'Cybersecurity',
  'International Expansion'
];

export const LEGAL_DISCLAIMER = `Information on this website is provided for general information and business-support purposes. Company-formation requirements, tax rules, immigration requirements, licensing conditions, banking requirements and regulatory obligations vary by jurisdiction, business activity and individual circumstances. Government authorities, banks and regulated institutions make their own decisions and may request additional documentation. Processing times are indicative and are not guarantees. RKPT TECH LTD does not guarantee company registration, bank-account approval, tax registration, visa approval, immigration approval or any other third-party decision. Where regulated legal, tax, accounting, immigration or other professional advice is required, RKPT TECH LTD may coordinate with appropriately qualified professionals.`;

export const TESTIMONIALS = [
  {
    id: 't1',
    author: 'Sarah Jenkins',
    role: 'CEO & Founder',
    company: 'TechFlow Solutions',
    location: 'Expanded UK to Portugal',
    quote: "RKPT completely streamlined our European expansion. They handled the corporate structuring and compliance seamlessly, allowing us to focus entirely on scaling our product.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'SaaS & Technology'
  },
  {
    id: 't2',
    author: 'Marcus Bergman',
    role: 'Managing Director',
    company: 'Altis Capital',
    location: 'Switzerland',
    quote: "A truly end-to-end partner. Setting up our holding company and integrating our global IT infrastructure was complex, but their multi-disciplinary team made it completely transparent and efficient.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'Financial Services'
  },
  {
    id: 't3',
    author: 'Amina Al-Farsi',
    role: 'Operations Lead',
    company: 'Nexus Innovations',
    location: 'Expanded to UAE',
    quote: "Their technology-driven approach sets them apart. Not only did they establish our operational entity in Dubai, but they also secured our cloud environment and implemented custom AI workflows.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'FinTech & Web3'
  },
  {
    id: 't4',
    author: 'David Chen',
    role: 'Chief Operating Officer',
    company: 'Zenith Global',
    location: 'Expanded USA to Ireland',
    quote: "We needed a reliable partner to handle cross-border compliance between the US and Ireland. RKPT delivered exactly what they promised—accountability, speed, and deep technical expertise.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    industry: 'Manufacturing'
  }
];
