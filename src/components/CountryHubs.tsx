import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, CheckCircle2, Globe, Building2, Layers } from 'lucide-react';

interface HubDetail {
  id: string;
  name: string;
  code: string;
  badge: string;
  flag: string;
  summary: string;
  setupFocus: string;
  structures: string[];
  goodFor: string;
  taxRate: string;
  timeline: string;
}

const HUBS_LIST: HubDetail[] = [
  {
    id: 'portugal',
    name: 'Portugal',
    code: 'PT',
    badge: 'EU Business & Company Formation Hub',
    flag: 'https://flagcdn.com/pt.svg',
    summary: 'Strategic Atlantic gateway offering access to the European Single Market, tech incentives, and residence pathways.',
    setupFocus: 'LDA formation, business setup, accounting/tax coordination, banking, immigration and digital transformation.',
    structures: ['LDA (Private Limited)', 'Unipessoal LDA', 'Branch', 'Holding'],
    goodFor: 'Tech startups, digital businesses, European market entry, relocation, entrepreneurs and remote teams',
    taxRate: '17% - 21%',
    timeline: '3 - 7 Business Days',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    badge: 'UK Business & Technology Hub',
    flag: 'https://flagcdn.com/gb.svg',
    summary: 'Premier global financial center offering rapid corporate incorporation, common-law legal certainty, and deep venture capital pools.',
    setupFocus: 'UK company setup, operational support, banking, compliance and technology.',
    structures: ['Private Limited Company (LTD)', 'LLP', 'Branch'],
    goodFor: 'International trade, technology businesses, holding companies, service firms and access to UK capital',
    taxRate: '19% - 25%',
    timeline: '1 - 3 Business Days',
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    badge: 'EU Business & Technology Hub',
    flag: 'https://flagcdn.com/ie.svg',
    summary: 'Europe’s leading tech capital with an English-speaking common law framework, low corporate tax, and direct access to EU markets.',
    setupFocus: 'Irish LTD setup, CRO-related support, EU market access, operations and technology.',
    structures: ['Private Limited Company (LTD)', 'Designated Activity Company (DAC)', 'Branch'],
    goodFor: 'Technology and SaaS businesses, multinational headquarters, EU market access, IP holding and trading companies',
    taxRate: '12.5%',
    timeline: '2 - 5 Business Days',
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    badge: 'Swiss Business Hub',
    flag: 'https://flagcdn.com/ch.svg',
    summary: 'The world standard for institutional stability, asset preservation, cantonal tax efficiency, and premier banking infrastructure.',
    setupFocus: 'GmbH/AG setup, cantonal compliance, banking and business support.',
    structures: ['GmbH (LLC)', 'AG (Corporation)', 'Branch'],
    goodFor: 'High-value businesses, asset protection, FinTech, trading, headquarters and international holding companies',
    taxRate: '11.9% - 21.6%',
    timeline: '2 - 4 Weeks',
  },
  {
    id: 'usa',
    name: 'USA',
    code: 'US',
    badge: 'North American Business Hub',
    flag: 'https://flagcdn.com/us.svg',
    summary: 'The ultimate global commercial market. Establish Delaware or Wyoming entities for Stripe, venture backing, and US clients.',
    setupFocus: 'US company formation support, business operations, banking/payment coordination and technology.',
    structures: ['LLC', 'C-Corp'],
    goodFor: 'North American market access, SaaS, tech startups, payment gateway access, global billing and international founders',
    taxRate: '21% (Federal)',
    timeline: '2 - 5 Business Days',
  },
  {
    id: 'dubai',
    name: 'Dubai / UAE',
    code: 'AE',
    badge: 'Middle East Business Hub',
    flag: 'https://flagcdn.com/ae.svg',
    summary: 'Dynamic crossroads between East and West offering 0% personal tax, 100% foreign ownership, and zero restrictions on capital repatriation.',
    setupFocus: 'business setup, licensing coordination, banking, international operations and technology.',
    structures: ['Free Zone Company', 'Mainland Company'],
    goodFor: 'International trading, regional headquarters, technology ventures, consulting firms, expatriates and tax-efficient structures',
    taxRate: '9% (0% Freezone)',
    timeline: '1 - 3 Weeks',
  },
  {
    id: 'india',
    name: 'India',
    code: 'IN',
    badge: 'Technology & Delivery Hub',
    flag: 'https://flagcdn.com/in.svg',
    summary: 'World’s premier engineering and technology engine powering scalable software delivery, AI pipelines, and operational excellence.',
    setupFocus: 'technology delivery, software development, IT support, AI, cybersecurity and business technology operations.',
    structures: ['Private Limited (Pvt Ltd)', 'Technology Delivery Center', 'Branch Office'],
    goodFor: 'Software development, dedicated engineering teams, IT operations, back-office operations and technology delivery centers',
    taxRate: '15% - 22%',
    timeline: '2 - 4 Weeks',
  },
];

interface CountryHubsProps {
  initialSelectedId?: string | null;
  onSelectCountry?: (countryId: string) => void;
  onOpenConsultation: (countryName: string) => void;
}

export const CountryHubs: React.FC<CountryHubsProps> = ({
  initialSelectedId,
  onOpenConsultation,
}) => {
  const [selectedHub, setSelectedHub] = useState<HubDetail>(
    HUBS_LIST.find((h) => h.id === initialSelectedId) || HUBS_LIST[0]
  );

  useEffect(() => {
    if (initialSelectedId) {
      const found = HUBS_LIST.find((h) => h.id === initialSelectedId);
      if (found) setSelectedHub(found);
    }
  }, [initialSelectedId]);

  return (
    <section id="global-setup" className="py-16 sm:py-24 bg-white border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-14">
            <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 block">
              INTERNATIONAL JURISDICTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight mb-3">
              Global Business Setup
            </h2>
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
              Choose the market that fits your business objectives. Our teams and partners support clients across seven international hubs.
            </p>
          </div>

          {/* Hub Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {HUBS_LIST.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0b1b36] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <img
                    src={hub.flag}
                    alt={hub.name}
                    className="w-4 h-3 object-cover rounded-[2px]"
                  />
                  <span>{hub.name}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Hub Card */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Col 1: Overview */}
              <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={selectedHub.flag}
                    alt={`${selectedHub.name} flag`}
                    className="w-10 h-7 object-cover rounded-md shadow-xs border border-gray-200"
                  />
                  <div>
                    <h3 className="text-2xl font-display font-black text-[#0b1b36]">
                      {selectedHub.name}
                    </h3>
                    <span className="text-xs font-bold text-[#c91c1c] uppercase tracking-wide">
                      {selectedHub.code}
                    </span>
                  </div>
                </div>

                <div className="inline-block bg-white px-3 py-1 rounded-lg border border-gray-200 text-xs font-bold text-[#0b1b36] mb-4 shadow-xs">
                  {selectedHub.badge}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-6">
                  {selectedHub.summary}
                </p>

                <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-200/80 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-medium">Standard Corp Tax:</span>
                    <span className="font-bold text-[#0b1b36]">{selectedHub.taxRate}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-medium">Est. Setup Timeline:</span>
                    <span className="font-bold text-[#0b1b36]">{selectedHub.timeline}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(selectedHub.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                >
                  <span>Inquire for {selectedHub.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Col 2 & 3: Detailed Capabilities, Structures, and Good For */}
              <div className="lg:col-span-2 space-y-6">
                {/* Setup Focus */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b1b36] mb-2">
                    <Building2 className="w-4 h-4 text-[#c91c1c]" />
                    <span>Setup Focus</span>
                  </div>
                  <p className="text-sm text-gray-700 font-normal leading-relaxed">
                    {selectedHub.setupFocus}
                  </p>
                </div>

                {/* Structures */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b1b36] mb-3">
                    <Layers className="w-4 h-4 text-[#0b1b36]" />
                    <span>Typical Corporate Structures</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedHub.structures.map((st, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-gray-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#c91c1c] shrink-0" />
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Good For */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b1b36] mb-2">
                    <Globe className="w-4 h-4 text-[#3273a8]" />
                    <span>Target Businesses & Good For</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {selectedHub.goodFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
