import React from 'react';
import { motion } from 'motion/react';

import { Hero } from './Hero';
import { AboutRKPTSection } from './AboutRKPTSection';
import { InteractiveMap } from './InteractiveMap';
import { ScrollReveal } from './ScrollReveal';
import { TestimonialCarousel } from './TestimonialCarousel';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Landmark, 
  FileText, 
  ShieldCheck, 
  Scale, 
  Users, 
  Laptop, 
  Briefcase,
  Compass,
  Clock,
  Globe
} from 'lucide-react';
import { COMPANY_INFO, COUNTRIES_DATA } from '../data/companyData';
import { TechnologySection } from './TechnologySection';
import { WhyChooseUsSection } from './WhyChooseUsSection';
import { WhoWeServeSection } from './WhoWeServeSection';

interface HomeViewProps {
  onNavigate: (pageId: string) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenConsultation }) => {

const cardUIData: Record<string, { time: string, legal: string, focus: string, bottom: string, heading: string, sub: string }> = {
  PT: { time: "WET • UTC+0", heading: "Portugal", sub: "EU Business & Company Formation Hub", legal: "LDA", focus: "Setup • Tax • Banking • Immigration", bottom: "LISBON • PORTO" },
  GB: { time: "GMT • UTC+0", heading: "United Kingdom", sub: "UK Business & Technology Hub", legal: "UK LTD", focus: "Setup • Operations • Technology", bottom: "LONDON" },
  IE: { time: "GMT • UTC+0", heading: "Ireland", sub: "EU Business & Technology Hub", legal: "LTD", focus: "CRO Setup • EU Market Access", bottom: "DUBLIN" },
  CH: { time: "CET • UTC+1", heading: "Switzerland", sub: "Swiss Business Hub", legal: "GmbH / AG", focus: "Cantonal Compliance • Banking", bottom: "ZURICH • GENEVA" },
  US: { time: "EST • UTC-5", heading: "USA", sub: "North American Business Hub", legal: "US Entity", focus: "Formation • Banking • Technology", bottom: "REMOTE-FIRST" },
  AE: { time: "GST • UTC+4", heading: "Dubai / UAE", sub: "Middle East Business Hub", legal: "Free Zone / Mainland", focus: "Licensing • Banking • Operations", bottom: "DUBAI" },
  IN: { time: "IST • UTC+5:30", heading: "India", sub: "Technology & Delivery Hub", legal: "PVT LTD", focus: "Development • IT • Outsourcing", bottom: "BANGALORE • DELHI" },
};

  const practiceAreasPreview = [
    {
      id: 'corporate-structuring',
      title: 'Company Setup & Formation',
      desc: 'Fast-track entity incorporation, registered office address, and statutory governance across PT, CH, and IE.',
      icon: Building2,
      accent: 'border-t-[#c91c1c]',
    },
    {
      id: 'accounting-tax',
      title: 'Accounting, Tax & Audit',
      desc: 'Corporate tax compliance (CIT), VAT registrations, payroll management, and international treaty optimization.',
      icon: FileText,
      accent: 'border-t-[#15325b]',
    },
    {
      id: 'banking-support',
      title: 'European Banking & EMIs',
      desc: 'Dedicated corporate IBANs, cross-border multi-currency clearing, merchant accounts, and AML onboarding.',
      icon: Landmark,
      accent: 'border-t-[#3273a8]',
    },
    {
      id: 'visa-residency',
      title: 'Visa, Immigration & Relocation',
      desc: 'Residency by investment, Golden Visa, D8 Digital Nomad, CSEP, work permits, and executive family relocation.',
      icon: Users,
      accent: 'border-t-[#c91c1c]',
    },
    {
      id: 'it-digital',
      title: 'IT & Digital Platforms',
      desc: 'GDPR-compliant enterprise portals, secure corporate cloud hosting, custom CRM/ERP, and digital presence.',
      icon: Laptop,
      accent: 'border-t-[#15325b]',
    },
    {
      id: 'business-support',
      title: 'Strategic Market Entry',
      desc: 'Bespoke European feasibility studies, local regulatory advisory, partner matchmaking, and physical offices.',
      icon: Briefcase,
      accent: 'border-t-[#3273a8]',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={() => onOpenConsultation()}
        onExploreEstimator={() => onNavigate('estimator')}
      />

      <AboutRKPTSection onOpenConsultation={() => onOpenConsultation()} />

      {/* 2. Focus Jurisdictions Preview (3 Clean Cards) */}
      <section className="py-4 sm:py-20 md:py-28 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#3273a8] mb-2">
                <Globe className="w-4 h-4" />
                Strategic Geographies
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#15325b] uppercase tracking-tight">
                European Expansion Hubs
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl">
                RKPT maintains direct legal, fiscal, and corporate infrastructure across Europe’s three most strategic business gateways.
              </p>
            </div>
            <button
              onClick={() => onNavigate('jurisdictions', country.id)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c91c1c] hover:text-[#a01616] transition-colors shrink-0 group self-start md:self-auto"
            >
              <span>View Full Hubs Comparison Matrix</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6">
                        {COUNTRIES_DATA.slice(0, 3).map((country, idx) => {
              const ui = cardUIData[country.code] || { time: "UTC", heading: country.name, sub: country.regionalFocus, legal: "Entity", focus: "Business", bottom: country.capital.toUpperCase() };
              return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                key={country.id}
              >
              <div
                onClick={() => onNavigate('jurisdictions', country.id)}
                className="cursor-pointer rounded-2xl p-6 transition-all duration-200 border text-left relative overflow-hidden bg-white border-gray-200 hover:border-gray-300 hover:shadow-md group"
              >
                {/* Header Row: Badge & Timezone */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.name} flag`} className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm border border-gray-100" />
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-[#0b1b36] font-bold text-xs tracking-wider">
                      {country.code}
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                    {ui.time}
                  </div>
                </div>

                {/* Country Name & Subheading */}
                <div className="mb-6">
                  <h3 className="text-[22px] font-display font-bold text-[#0b1b36] leading-tight mb-1">
                    {ui.heading}
                  </h3>
                  <p className="text-xs text-[#c91c1c] font-medium tracking-wide">
                    {ui.sub}
                  </p>
                </div>

                {/* Table-like Data */}
                <div className="space-y-4 mb-5 border-t border-b border-gray-100 py-4 mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-light">Legal form</span>
                    <span className="text-[#0b1b36] font-bold text-right text-xs">{ui.legal}</span>
                  </div>
                  <div className="flex items-start justify-between text-xs gap-4 mt-3">
                    <span className="text-gray-400 font-light shrink-0">Focus</span>
                    <span className="text-[#0b1b36] font-bold text-right text-xs">{ui.focus}</span>
                  </div>
                </div>

                {/* Footer Row */}
                <div className="flex items-center justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">
                    {ui.bottom}
                  </span>
                  <span className="text-[#c91c1c] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              </motion.div>
            );
            })}
          </div>
        </div>
            </ScrollReveal>
</section>

      {/* 3. Core Practice Areas Preview (6 Concise Cards) */}
      <section className="py-4 sm:py-20 md:py-28 bg-white border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3273a8] block mb-1">
                Integrated Capabilities
              </span>
              <h2 className="text-3xl font-display font-black text-[#15325b] uppercase tracking-tight">
                Core Corporate Practice Areas
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                A single point of institutional responsibility across legal incorporation, banking, tax compliance, and technical execution.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c91c1c] hover:text-[#a01616] transition-colors shrink-0 group self-start md:self-auto"
            >
              <span>Explore All 6 Practice Areas &amp; Deliverables</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {practiceAreasPreview.map((practice, idx) => {
              const IconComp = practice.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={practice.id}
                >
                <div
                  onClick={() => onNavigate('services')}
                  className={`cursor-pointer bg-white rounded-2xl border border-gray-100 p-6 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="mb-6 text-[#0b1b36] group-hover:text-[#3273a8] transition-colors">
                      <IconComp className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#15325b] uppercase tracking-tight mb-2 group-hover:text-[#c91c1c] transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                      {practice.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#3273a8] group-hover:text-[#c91c1c] transition-colors uppercase tracking-wider">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
            </ScrollReveal>
</section>

      {/* Technology Capabilities Section */}
      <TechnologySection onOpenConsultation={() => onNavigate('contact')} />

      {/* 4. Interactive Scope Planner Feature Callout */}
      <section className="py-4 sm:py-20 md:py-28 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-[#c91c1c] uppercase tracking-[0.15em] text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c91c1c]"></span>
              INTERACTIVE PLANNING
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#15325b] tracking-tight">
              Outline your expansion blueprint
            </h2>
            
            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
              Select your target hub, your business type and your primary focus area. We'll put together a starting checklist of the services relevant to your plan — a real consultation confirms scope, timeline and cost.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <svg className="w-[22px] h-[22px] text-[#da291c] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l5.303-5.303-1.414-1.414-3.889 3.889-1.768-1.768-1.414 1.414 3.182 3.182z"/>
                </svg>
                <span className="text-gray-600 font-medium">Draws only on our published service list</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-[22px] h-[22px] text-[#da291c] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l5.303-5.303-1.414-1.414-3.889 3.889-1.768-1.768-1.414 1.414 3.182 3.182z"/>
                </svg>
                <span className="text-gray-600 font-medium">No fees or timelines generated automatically</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-[22px] h-[22px] text-[#da291c] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l5.303-5.303-1.414-1.414-3.889 3.889-1.768-1.768-1.414 1.414 3.182 3.182z"/>
                </svg>
                <span className="text-gray-600 font-medium">Reviewed and confirmed by our team directly</span>
              </div>
            </div>
            
            <div className="pt-6">
              <button
                onClick={() => onOpenConsultation()}
                className="bg-[#da291c] hover:bg-[#a01616] text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors shadow-sm"
              >
                BOOK A CONSULTATION
              </button>
            </div>
          </div>
        </div>
            </ScrollReveal>
</section>

      {/* 5. Institutional Trust & Credentials Bar */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#15325b]">
                1 Week
              </div>
              <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">
                Portugal LDA Setup
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#15325b]">
                12.5%
              </div>
              <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">
                Ireland Corporate Tax
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#15325b]">
                3 Desks
              </div>
              <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">
                Lisbon • Zurich • Dublin • London • New York • Dubai
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#c91c1c]">
                100%
              </div>
              <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">
                EU AML &amp; GDPR Compliant
              </div>
            </div>
          </div>
        </div>
            </ScrollReveal>
</section>

      {/* Why Choose RKPT */}
      <WhyChooseUsSection />

      {/* Who We Serve */}
      <WhoWeServeSection />

      <TestimonialCarousel />

      {/* 6. Quick Executive Callout */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#0b1b36] text-white">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded bg-[#3273a8]/20 border border-[#3273a8]/30 text-xs font-bold uppercase tracking-widest text-[#66a3d1]  mb-2">
              Ready To Expand?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white drop-shadow-md">
              Connect With Our Jurisdiction Directors
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              Direct legal liaison in Lisbon, Zurich, Dublin, London, New York, and Dubai for confidential business structuring.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-premium px-8 py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-premium px-8 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center"
            >
              <span>View Locations</span>
            </button>
          </div>
        </div>
            </ScrollReveal>
</section>
    </div>
  );
};
