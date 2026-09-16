const fs = require('fs');

const techServices = `  {
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
];`;

let content = fs.readFileSync('src/data/companyData.ts', 'utf8');
content = content.replace(/  \}\n\];\n\nexport const PROCESS_STEPS/, "  },\n" + techServices.slice(3, -2) + "\n];\n\nexport const PROCESS_STEPS");
fs.writeFileSync('src/data/companyData.ts', content);
