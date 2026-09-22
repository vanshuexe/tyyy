// AI Assistant Comprehensive Knowledge Base & Response Engine for RKPT TECH LTD

export interface AIResponseAction {
  label: string;
  type: 'consultation' | 'navigate' | 'link';
  payload?: string;
}

export interface AIQueryResponse {
  text: string;
  actions?: AIResponseAction[];
  quickReplies?: string[];
}

export const BOT_SUGGESTIONS = [
  '🌍 7 Global Hubs Overview',
  '🇵🇹 Portugal LDA & Visas',
  '🇦🇪 Dubai 0% Freezone',
  '🇺🇸 US LLC vs C-Corp',
  '🇬🇧 UK LTD Setup',
  '💻 IT & AI Solutions',
  '⏱️ Timelines & Turnaround',
  '📅 Book Consultation',
];

export const getFormattedCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getOperatingHoursStatus = () => {
  const now = new Date();
  const utcHours = now.getUTCHours();
  // Most desks operate roughly between 08:00 and 19:00 local time
  const isOpenSomewhere = utcHours >= 3 && utcHours <= 22;
  return {
    isOpen: isOpenSomewhere,
    sla: 'Within 24 business hours',
    currentDate: getFormattedCurrentDate(),
  };
};

export function processUserQuery(rawInput: string): AIQueryResponse {
  const input = rawInput.toLowerCase().trim();
  const dateStatus = getOperatingHoursStatus();

  // 1. DATE, TIME, BUSINESS HOURS & SLA
  if (
    input.includes('date') ||
    input.includes('time') ||
    input.includes('today') ||
    input.includes('hours') ||
    input.includes('working hours') ||
    input.includes('sla') ||
    input.includes('when are you open')
  ) {
    return {
      text: `📅 **Current Date & Operating Schedule**\n\n• **Today:** ${dateStatus.currentDate}\n• **Advisory Desks Operating Hours:** 09:00 – 18:00 (Local times in Lisbon, London, Zurich, Dubai, New York, and Bangalore).\n• **Inquiry SLA:** All consultation requests receive dedicated review by a senior partner within **24 business hours**.\n• **24/7 Digital Intake:** Our platform and consultation scheduler operate around the clock.\n\nWould you like to schedule an advisory session today?`,
      actions: [
        { label: 'Schedule Consultation', type: 'consultation', payload: 'General Advisory' },
        { label: 'Contact Details', type: 'navigate', payload: 'contact' },
      ],
      quickReplies: ['🇵🇹 Portugal Hub', '🇦🇪 Dubai Hub', '⏱️ Formation Timelines', '💰 Pricing & Fees'],
    };
  }

  // 2. GREETINGS & INTRODUCTIONS
  if (
    input === 'hi' ||
    input === 'hello' ||
    input === 'hey' ||
    input.startsWith('hello') ||
    input.startsWith('hi ') ||
    input.includes('good morning') ||
    input.includes('good afternoon') ||
    input.includes('good evening')
  ) {
    return {
      text: `👋 **Welcome to RKPT TECH LTD.**\n\nI am your corporate intelligence assistant. We help entrepreneurs, startups, and established enterprises establish, operate, and scale across **7 strategic global markets**.\n\nWe integrate:\n1. **Corporate Business Setup & Legal Structuring**\n2. **Tax, Accounting & Double-Taxation Treaty Advisory**\n3. **Corporate Banking & FinTech EMI Integration**\n4. **Immigration, Residency & Golden Visas**\n5. **Enterprise IT, AI & Cybersecurity Solutions**\n\nHow can I guide your global expansion roadmap today?`,
      quickReplies: BOT_SUGGESTIONS.slice(0, 5),
    };
  }

  // 3. WHO IS RKPT / COMPANY OVERVIEW
  if (
    input.includes('who are you') ||
    input.includes('what is rkpt') ||
    input.includes('about rkpt') ||
    input.includes('tell me about rkpt') ||
    input.includes('company profile')
  ) {
    return {
      text: `🏢 **About RKPT TECH LTD**\n\n**RKPT TECH LTD** is an integrated international business consulting and technology solutions firm operating across **seven strategic global hubs** (Portugal, UK, Ireland, Switzerland, USA, Dubai/UAE, and India).\n\n• **Core Proposition:** *"We don't just help you register a company. We help you build the infrastructure required to operate, protect, and grow it."*\n• **Approach:** End-to-end alignment of corporate law, fiscal compliance, banking infrastructure, and modern technology (AI, cloud, custom software).\n• **Global Reach:** Physical advisory desks in Lisbon, London, Dublin, Zurich, New York, Dubai, and Bangalore.\n\nWould you like to explore our practice areas or specific jurisdictions?`,
      actions: [
        { label: 'Explore Practice Areas', type: 'navigate', payload: 'services' },
        { label: 'Compare All 7 Hubs', type: 'navigate', payload: 'matrix' },
      ],
      quickReplies: ['🌍 7 Global Hubs', '💼 Business Setup', '💻 IT & AI Solutions', '📅 Book Consultation'],
    };
  }

  // 4. JURISDICTION: PORTUGAL
  if (input.includes('portugal') || input.includes('lisbon') || input.includes('lda') || input.includes('nhr') || input.includes('d8')) {
    return {
      text: `🇵🇹 **Portugal Hub (EU Business & Formation Gateway)**\n\n• **Primary Entity:** Sociedade por Quotas (LDA) or SA\n• **Corporate Tax Rate:** 17% (on first €50,000) / 21% standard mainland rate\n• **Incorporation Timeline:** 3 to 7 business days\n• **Key Advantages:** Full European Union single market access, attractive R&D tax credits, and vibrant tech ecosystem.\n• **Immigration & Visas:** NHR 2.0 (IFICI Scientific Research/Innovation tax regime), D8 Digital Nomad Visa, D2 Entrepreneur Visa, and CMVM-compliant Fund Golden Visas.\n• **Banking:** Novo Banco, Millennium BCP, Santander Totta, and EU SEPA EMI integrations.\n• **Local Office:** Avenida da Liberdade 245, 1250-143 Lisboa.\n\nWould you like assistance initiating an LDA incorporation in Portugal?`,
      actions: [
        { label: 'Inquire Portugal Setup', type: 'consultation', payload: 'Portugal LDA & Fiscal Advisory' },
        { label: 'View Country Hubs', type: 'navigate', payload: 'jurisdictions' },
      ],
      quickReplies: ['🇦🇪 Dubai Freezone', '🇮🇪 Ireland 12.5%', '🇬🇧 UK LTD', '📅 Book Consultation'],
    };
  }

  // 5. JURISDICTION: DUBAI / UAE
  if (
    input.includes('dubai') ||
    input.includes('uae') ||
    input.includes('emirates') ||
    input.includes('freezone') ||
    input.includes('mainland') ||
    input.includes('difc')
  ) {
    return {
      text: `🇦🇪 **Dubai / UAE Hub (Middle East Business Hub)**\n\n• **Primary Entity:** Freezone Company (IFZA, DMCC, Meydan, DAFZA) or UAE Mainland LLC (100% foreign ownership available)\n• **Corporate Tax Rate:** **0%** on qualifying Freezone income / 9% standard rate on profits exceeding AED 375,000 (~$102,000 USD)\n• **Personal Income Tax:** **0%** (zero personal tax on salaries, dividends, capital gains)\n• **Incorporation Timeline:** 1 to 3 weeks\n• **Visas:** 10-Year UAE Golden Visa, 2-Year Investor/Partner Visas, and family sponsorship\n• **Corporate Banking:** Emirates NBD, Mashreq, Wio Digital Business Bank, First Abu Dhabi Bank\n• **Local Office:** DIFC Gate Precinct, Building 4, Dubai.\n\nWould you like a Freezone vs. Mainland cost and eligibility comparison?`,
      actions: [
        { label: 'Inquire Dubai Setup', type: 'consultation', payload: 'Dubai & UAE Business Setup' },
        { label: 'Explore Hub Details', type: 'navigate', payload: 'jurisdictions' },
      ],
      quickReplies: ['🇺🇸 USA LLC', '🇵🇹 Portugal LDA', '⏱️ Formation Timelines', '💰 Pricing & Scope'],
    };
  }

  // 6. JURISDICTION: USA
  if (
    input.includes('usa') ||
    input.includes('united states') ||
    input.includes('delaware') ||
    input.includes('wyoming') ||
    input.includes('c-corp') ||
    input.includes('llc')
  ) {
    return {
      text: `🇺🇸 **USA Hub (North American Market Access)**\n\n• **Primary Entities:** Delaware LLC, Wyoming LLC, or Delaware C-Corporation\n• **Federal Tax Rate:** 21% flat corporate tax for C-Corps (LLCs are pass-through entities by default; 0% state income tax in Wyoming/Delaware for non-resident operations)\n• **Incorporation Timeline:** 2 to 5 business days\n• **Key Advantages:** Standard requirement for global venture capital funding, US merchant processing (Stripe US, PayPal, Authorize.net), and access to North American customers.\n• **Corporate Banking:** US FinTech accounts (Mercury, Relay, Brex) and major tier-1 banks with EIN processing.\n• **Office:** One World Trade Center, New York, NY 10007.\n\nWhich structure fits your business model: Delaware C-Corp for VC fundraising, or Wyoming LLC for lean operations?`,
      actions: [
        { label: 'Inquire US Formation', type: 'consultation', payload: 'USA LLC / C-Corp Formation' },
      ],
      quickReplies: ['Delaware vs Wyoming', '🇬🇧 UK LTD', '🇦🇪 Dubai Freezone', '📅 Book Consultation'],
    };
  }

  // 7. JURISDICTION: UNITED KINGDOM
  if (
    input.includes('uk') ||
    input.includes('united kingdom') ||
    input.includes('london') ||
    input.includes('companies house') ||
    input.includes('england') ||
    input.includes('british')
  ) {
    return {
      text: `🇬🇧 **United Kingdom Hub (UK Business & FinTech Gateway)**\n\n• **Primary Entity:** Private Company Limited by Shares (UK LTD)\n• **Corporate Tax Rate:** 19% (small profits) to 25% (standard main rate)\n• **Incorporation Timeline:** **1 to 3 business days** (among the fastest globally)\n• **Key Advantages:** High international prestige, transparent English Common Law, double-taxation treaties with 130+ nations, world-leading FinTech hub.\n• **Corporate Banking:** Barclays, HSBC, Tide, Wise Business, Revolut Business.\n• **Statutory Filings:** Annual Confirmation Statement, HMRC Corporation Tax (CT600), and VAT registration.\n• **Office:** 100 Bishopsgate, London EC2N 4AG.\n\nAre you looking to expand existing operations into the UK or register a new holding entity?`,
      actions: [
        { label: 'Inquire UK Setup', type: 'consultation', payload: 'UK LTD Formation & Accounting' },
      ],
      quickReplies: ['🇮🇪 Ireland 12.5%', '🇨🇭 Switzerland GmbH', '⏱️ Formation Timelines'],
    };
  }

  // 8. JURISDICTION: IRELAND
  if (
    input.includes('ireland') ||
    input.includes('irish') ||
    input.includes('dublin') ||
    input.includes('cro') ||
    input.includes('12.5')
  ) {
    return {
      text: `🇮🇪 **Ireland Hub (European Tech & Holding Gateway)**\n\n• **Primary Entity:** Private Company Limited by Shares (Irish LTD)\n• **Corporate Tax Rate:** **12.5%** on active trading profits (one of the lowest and most stable in the EU)\n• **Incorporation Timeline:** 2 to 5 business days with the Companies Registration Office (CRO)\n• **Key Advantages:** English-speaking Eurozone jurisdiction, EU passporting rights, ideal jurisdiction for software/SaaS, IP holding, and international supply chains.\n• **Office:** Grand Canal Dock, Dublin 2, D02 X260.\n\nWould you like to analyze whether your business qualifies for the 12.5% trading rate?`,
      actions: [
        { label: 'Inquire Ireland Setup', type: 'consultation', payload: 'Ireland 12.5% Setup' },
      ],
      quickReplies: ['🇵🇹 Portugal Hub', '🇨🇭 Switzerland Hub', '🌍 Compare All Hubs'],
    };
  }

  // 9. JURISDICTION: SWITZERLAND
  if (
    input.includes('switzerland') ||
    input.includes('swiss') ||
    input.includes('zurich') ||
    input.includes('zug') ||
    input.includes('gmbh') ||
    input.includes('ag') ||
    input.includes('canton')
  ) {
    return {
      text: `🇨🇭 **Switzerland Hub (Swiss Business & Wealth Gateway)**\n\n• **Primary Entities:**\n  - **GmbH:** Minimum capital CHF 20,000 (fully paid)\n  - **AG:** Minimum capital CHF 100,000 (minimum 50% paid up)\n• **Corporate Tax Rate:** 11.9% to 21.6% (combined federal, cantonal, and municipal; Cantons such as Zug and Schwyz offer rates near ~11.9%)\n• **Incorporation Timeline:** 2 to 4 weeks (requires blocked capital account and public notary deed)\n• **Banking:** World-class Swiss private and commercial institutions (UBS, cantonal banks, Swiss digital private banking).\n• **Office:** Bahnhofstrasse 69, 8001 Zürich.\n\nWould you like guidance on cantonal selection (e.g., Zug vs. Zurich)?`,
      actions: [
        { label: 'Inquire Swiss Setup', type: 'consultation', payload: 'Switzerland GmbH / AG Advisory' },
      ],
      quickReplies: ['🇦🇪 Dubai Freezone', '🇮🇪 Ireland 12.5%', '💰 Pricing & Scope'],
    };
  }

  // 10. JURISDICTION: INDIA
  if (
    input.includes('india') ||
    input.includes('bangalore') ||
    input.includes('bengaluru') ||
    input.includes('gcc') ||
    input.includes('delivery hub') ||
    input.includes('pvt ltd')
  ) {
    return {
      text: `🇮🇳 **India Hub (Technology & Global Delivery Center)**\n\n• **Primary Focus:** High-velocity software development, AI engineering, cybersecurity defense, and Global Capability Centers (GCC).\n• **Entity Formations:** Private Limited (Pvt Ltd), Branch Office, or Liaison Office\n• **Corporate Tax Rate:** 15% (new manufacturing/qualifying) to 22% standard corporate rate\n• **Operational Advantage:** World-class software engineering talent pool, round-the-clock technical operations, and cost-effective scaling.\n• **Office:** Outer Ring Road, Bellandur, Bangalore 560103.\n\nAre you looking to set up an offshore engineering team or register a local Indian subsidiary?`,
      actions: [
        { label: 'Inquire India Delivery', type: 'consultation', payload: 'India Delivery & Tech Setup' },
      ],
      quickReplies: ['💻 IT & AI Solutions', '🛡️ Cybersecurity Services', '🌍 All 7 Hubs'],
    };
  }

  // 11. ALL HUBS / COMPARISON
  if (
    input.includes('compare') ||
    input.includes('matrix') ||
    input.includes('all hubs') ||
    input.includes('which country') ||
    input.includes('which jurisdiction') ||
    input.includes('best tax') ||
    input.includes('lowest tax')
  ) {
    return {
      text: `🌍 **Quick Corporate Tax & Timeline Comparison**\n\n1. **Dubai / UAE:** 0% Freezone (9% standard) | 1–3 weeks\n2. **Switzerland (Zug):** ~11.9% – 21.6% | 2–4 weeks\n3. **Ireland:** 12.5% trading profit | 2–5 days\n4. **Portugal:** 17% – 21% (NHR/IFICI available) | 3–7 days\n5. **UK:** 19% – 25% | 1–3 days\n6. **USA (Federal):** 21% (0% State in Wyoming) | 2–5 days\n7. **India:** 15% – 22% (Tech & GCC Hub) | 2–4 weeks\n\nOur full **Global Comparison Matrix** provides granular insights into minimum share capital, audit requirements, and visa compatibility.`,
      actions: [
        { label: 'Open Comparison Matrix', type: 'navigate', payload: 'matrix' },
        { label: 'Book Advisory Session', type: 'consultation', payload: 'Jurisdiction Comparison' },
      ],
      quickReplies: ['🇵🇹 Portugal Details', '🇦🇪 Dubai Details', '🇺🇸 USA Details', '⏱️ Formation Timelines'],
    };
  }

  // 12. SERVICES: FORMATION & BUSINESS SETUP
  if (
    input.includes('service') ||
    input.includes('what do you offer') ||
    input.includes('what do you do') ||
    input.includes('formation') ||
    input.includes('incorporation') ||
    input.includes('setup')
  ) {
    return {
      text: `💼 **Core Corporate Practice Areas**\n\n1. **Company Formation & Structuring:** Legal incorporation, shareholder agreements, registered office, statutory records.\n2. **Legal & Regulatory Compliance:** Secretarial filings, director registers, ongoing compliance monitoring.\n3. **Accounting & Tax Management:** Multi-currency bookkeeping, VAT returns, corporate tax filings, double-taxation treaty analysis.\n4. **Corporate Banking & EMIs:** High-approval bank onboarding, merchant processing, SEPA/SWIFT clearing.\n5. **Global Immigration & Visas:** Golden Visas, Digital Nomad visas, Founder visas, and executive relocation.\n6. **Technology, AI & Cyber:** Custom web/cloud software, intelligent automation, penetration testing, and ISO 27001.\n\nWhich service area would you like more information about?`,
      actions: [
        { label: 'View All Services', type: 'navigate', payload: 'services' },
        { label: 'Request Service Proposal', type: 'consultation', payload: 'Service Proposal' },
      ],
      quickReplies: ['💻 IT & AI Solutions', '🏦 Banking Support', '✈️ Visa & Immigration', '💰 Pricing & Fees'],
    };
  }

  // 13. TECHNOLOGY, AI & CYBERSECURITY
  if (
    input.includes('ai') ||
    input.includes('tech') ||
    input.includes('software') ||
    input.includes('cyber') ||
    input.includes('it') ||
    input.includes('cloud') ||
    input.includes('developer')
  ) {
    return {
      text: `💻 **Technology & AI Engineering Services**\n\nRKPT TECH uniquely bridges corporate establishment with modern digital engineering:\n\n• **AI & Intelligent Automation:** Custom LLM integrations, document processing agents, robotic workflow automation, and predictive data pipelines.\n• **Custom Software Engineering:** Full-stack enterprise web & mobile application development, multi-tenant SaaS platforms, API microservices.\n• **Cybersecurity & InfoSec:** Vulnerability assessments, cloud security posture management, ISO 27001 & SOC 2 readiness, GDPR compliance audits.\n• **Cloud & DevOps:** AWS, Azure, and Google Cloud infrastructure, automated CI/CD pipelines, containerization (Docker/Kubernetes).\n• **24/7 Global Technical Support:** Backed by our dedicated engineering delivery center in Bangalore, India.\n\nWould you like to discuss a custom technical architecture or AI pilot project?`,
      actions: [
        { label: 'Inquire Technology Solution', type: 'consultation', payload: 'Technology & AI Engineering' },
      ],
      quickReplies: ['💼 Business Setup', '🛡️ Cybersecurity Audit', '📅 Book Consultation'],
    };
  }

  // 14. BANKING & EMI ACCOUNTS
  if (
    input.includes('bank') ||
    input.includes('account') ||
    input.includes('emi') ||
    input.includes('payment') ||
    input.includes('stripe') ||
    input.includes('merchant')
  ) {
    return {
      text: `🏦 **Corporate Banking & FinTech Solutions**\n\nOpening an international corporate bank account can be complex for non-resident companies. We streamline this with direct introductions and complete dossier compilation:\n\n• **Tier-1 Commercial Banks:** Novo Banco & Millennium (Portugal), Barclays & HSBC (UK), Bank of Ireland (Ireland), Emirates NBD & Mashreq (UAE), UBS (Switzerland).\n• **Electronic Money Institutions (EMIs):** Fast-track onboarding with Wise Business, Revolut Business, Wio, Airwallex, and Payoneer.\n• **Merchant Gateways:** Setting up Stripe, Adyen, and PayPal merchant processing with cross-border multi-currency settlement (USD, EUR, GBP, AED, CHF).\n• **Compliance Preparation:** Preparing business plans, source of funds declarations, and beneficial ownership (UBO) documentation.\n\nDo you need support with a traditional commercial bank or an agile FinTech EMI account?`,
      actions: [
        { label: 'Inquire Banking Setup', type: 'consultation', payload: 'Corporate Banking Support' },
      ],
      quickReplies: ['🇵🇹 Portugal Banking', '🇦🇪 Dubai Banking', '🇺🇸 US Stripe Account', '💰 Pricing & Fees'],
    };
  }

  // 15. VISAS, IMMIGRATION & RESIDENCY
  if (
    input.includes('visa') ||
    input.includes('immigration') ||
    input.includes('residency') ||
    input.includes('nomad') ||
    input.includes('golden visa') ||
    input.includes('relocate') ||
    input.includes('passport')
  ) {
    return {
      text: `✈️ **Global Immigration & Residency Programs**\n\nWe provide legal coordination for founders, high-net-worth individuals, and tech executives looking to relocate:\n\n• **Portugal:**\n  - **D8 Digital Nomad Visa:** For remote workers earning ≥€3,280/month.\n  - **Golden Visa:** CMVM-regulated investment fund route (€500,000).\n  - **D2 Entrepreneur Visa:** For establishing an active business in Portugal.\n• **Dubai / UAE:**\n  - **10-Year UAE Golden Visa:** For investors, entrepreneurs, and senior executives.\n  - **2-Year Freezone Investor Visa:** Rapid processing with local Emirates ID.\n• **United Kingdom:**\n  - **Innovator Founder Visa:** Endorsed innovative business ideas.\n  - **Global Talent Visa:** For tech, science, and arts leaders.\n• **USA:**\n  - **L-1 Intra-Company Transfer & E-2 Treaty Investor visas** in coordination with immigration legal counsel.\n\nWhich country are you interested in relocating to?`,
      actions: [
        { label: 'Inquire Visa Pathways', type: 'consultation', payload: 'Global Immigration & Visas' },
      ],
      quickReplies: ['🇵🇹 Portugal D8 / Golden Visa', '🇦🇪 Dubai Golden Visa', '📅 Book Consultation'],
    };
  }

  // 16. PRICING, FEES & COSTS
  if (
    input.includes('price') ||
    input.includes('cost') ||
    input.includes('fee') ||
    input.includes('quote') ||
    input.includes('rate') ||
    input.includes('how much')
  ) {
    return {
      text: `💰 **Transparent Engagement & Pricing Structure**\n\nAt RKPT TECH LTD, we offer **transparent, fixed-scope pricing** with zero hidden fees:\n\n• **Company Formation Packages:** Starting from transparent fixed tiers depending on jurisdiction, legal structure, and registered office requirements.\n• **Accounting & Fiscal Retainers:** Monthly or quarterly retainers scaled to your transaction volume, VAT reporting frequency, and payroll headcount.\n• **Technology & Software Sprints:** Milestone-based fixed price or dedicated agile team engagements.\n• **Complimentary Initial Consultation:** We conduct a thorough needs assessment to provide a tailored, transparent fee proposal before any engagement commences.\n\nWould you like to schedule an introductory consultation to receive an exact quotation?`,
      actions: [
        { label: 'Request Exact Quote', type: 'consultation', payload: 'Fee Estimation & Scope' },
      ],
      quickReplies: ['⏱️ Formation Timelines', '🇵🇹 Portugal Setup', '🇦🇪 Dubai Setup', '📅 Book Consultation'],
    };
  }

  // 17. 10-STEP PROCESS / TIMELINES
  if (
    input.includes('process') ||
    input.includes('how do you work') ||
    input.includes('step') ||
    input.includes('timeline') ||
    input.includes('how long') ||
    input.includes('roadmap')
  ) {
    return {
      text: `🗺️ **Our 10-Step Structured Engagement Journey**\n\n1. **Discovery & Assessment:** Needs analysis, target market, fiscal objectives.\n2. **Jurisdiction Blueprint:** Selecting optimal legal and tax entity.\n3. **Entity Structuring:** Shareholder agreements, UBO, governance.\n4. **Statutory Incorporation:** Registry filings, official charter.\n5. **Tax & Fiscal ID Setup:** NIF/EIN/VAT registration.\n6. **Corporate Banking:** Commercial accounts, FinTech EMIs, merchant processing.\n7. **Digital Infrastructure:** Cloud setup, email, ERP, IT security.\n8. **Immigration & Mobility:** Visas, residency permits, relocation.\n9. **Operational Launch:** Go-live compliance & regulatory standing.\n10. **Ongoing Retainers:** Periodic accounting, tax returns, scaling support.\n\n• **Typical Timelines:** UK (1–3 days) | Ireland (2–5 days) | USA (2–5 days) | Portugal (3–7 days) | UAE (1–3 weeks) | Switzerland (2–4 weeks).`,
      actions: [
        { label: 'View 10-Step Roadmap', type: 'navigate', payload: 'process' },
        { label: 'Book Advisory Call', type: 'consultation', payload: 'Process Roadmap Consultation' },
      ],
      quickReplies: ['🇬🇧 UK 1-3 Days', '🇵🇹 Portugal 3-7 Days', '🇦🇪 UAE 1-3 Weeks', '📅 Book Consultation'],
    };
  }

  // 18. CONTACT, OFFICES, PHONE NUMBERS
  if (
    input.includes('contact') ||
    input.includes('phone') ||
    input.includes('email') ||
    input.includes('office') ||
    input.includes('address') ||
    input.includes('call') ||
    input.includes('support') ||
    input.includes('reach')
  ) {
    return {
      text: `📞 **RKPT TECH LTD — Direct Contact & Global Offices**\n\n• **General Inquiries:** contact@rkpttech.com\n• **Advisory Desk:** advisory@rkpttech.com\n\n**Direct Advisory Desks:**\n• 🇵🇹 **Lisbon:** +351 21 000 8920 (Avenida da Liberdade 245)\n• 🇬🇧 **London:** +44 20 7946 0912 (100 Bishopsgate)\n• 🇨🇭 **Zurich:** +41 44 220 5410 (Bahnhofstrasse 69)\n• 🇮🇪 **Dublin:** +353 1 485 3290 (Grand Canal Dock)\n• 🇺🇸 **New York:** +1 212 987 6543 (One World Trade Center)\n• 🇦🇪 **Dubai:** +971 4 312 9000 (DIFC Gate Precinct 4)\n• 🇮🇳 **Bangalore:** Technology Delivery Hub (Outer Ring Road)\n\n• **Response Guarantee:** Inquiries answered within **24 business hours**.`,
      actions: [
        { label: 'Schedule Consultation', type: 'consultation', payload: 'Direct Contact Inquiry' },
        { label: 'Go to Contact Page', type: 'navigate', payload: 'contact' },
      ],
      quickReplies: ['📅 Book Consultation', '🌍 7 Global Hubs', '💼 Core Services'],
    };
  }

  // 19. CONSULTATION BOOKING
  if (
    input.includes('book') ||
    input.includes('schedule') ||
    input.includes('consult') ||
    input.includes('meeting') ||
    input.includes('appointment') ||
    input.includes('call me')
  ) {
    return {
      text: `📅 **Schedule Your Strategic Consultation**\n\nYou can book a consultation directly with a senior RKPT TECH cross-border expansion partner:\n\n• **Confidential Review:** Covered under strict EU GDPR & NDAs.\n• **Custom Assessment:** We review your entity requirements, corporate tax strategy, and banking access.\n• **Turnaround:** You will be connected with our regional lead within 24 business hours.\n\nClick the button below to submit your details directly to our advisory desk:`,
      actions: [
        { label: 'Book Consultation Now', type: 'consultation', payload: 'Direct Chat Consultation Request' },
      ],
      quickReplies: ['🇵🇹 Portugal Setup', '🇦🇪 Dubai Freezone', '🇺🇸 US LLC', '📞 Phone Numbers'],
    };
  }

  // DEFAULT INTELLIGENT FALLBACK
  return {
    text: `Thank you for your question regarding **"${rawInput}"**.\n\nAs the **RKPT TECH Corporate Intelligence Assistant**, I can provide comprehensive guidance on:\n\n• **7 Global Hubs:** Portugal, UK, Ireland, Switzerland, USA, Dubai/UAE, India.\n• **Corporate Setup:** Entity types, corporate tax rates (0% to 25%), capital requirements, and formation timelines.\n• **Banking & Payments:** Corporate bank accounts, EMIs (Wise, Revolut), and Stripe onboarding.\n• **Immigration & Visas:** Golden Visas, Digital Nomad visas, and Founder visas.\n• **Technology & AI:** Custom software, AI automation, cybersecurity, and cloud architecture.\n• **Schedule & Timelines:** Today's date (${dateStatus.currentDate}), operating hours, and 24-hour SLA.\n\nWould you like to speak directly with an advisor or explore one of the areas below?`,
    actions: [
      { label: 'Book Advisory Session', type: 'consultation', payload: `Inquiry: ${rawInput}` },
      { label: 'View Country Hubs', type: 'navigate', payload: 'jurisdictions' },
    ],
    quickReplies: [
      '🌍 7 Global Hubs',
      '🇵🇹 Portugal LDA',
      '🇦🇪 Dubai Freezone',
      '💻 IT & AI Solutions',
      '⏱️ Timelines & Turnaround',
      '📅 Book Consultation',
    ],
  };
}
