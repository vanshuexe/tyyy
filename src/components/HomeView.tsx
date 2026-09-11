import React from 'react';
import { Hero } from './Hero';
import { InteractiveMap } from './InteractiveMap';
import React from 'react';
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

interface HomeViewProps {
  onNavigate: (pageId: string) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenConsultation }) => {
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

      {/* 2. Focus Jurisdictions Preview (3 Clean Cards) */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
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
              onClick={() => onNavigate('jurisdictions')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c91c1c] hover:text-[#a01616] transition-colors shrink-0 group self-start md:self-auto"
            >
              <span>View Full Hubs Comparison Matrix</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {COUNTRIES_DATA.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <img src={c.flag} alt={`${c.name} flag`} className="w-8 h-6 object-cover rounded-sm border border-gray-200 shadow-sm" />
                      <h3 className="font-display font-medium text-2xl text-[#0b1b36] uppercase tracking-tight">
                        {c.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-medium px-2 py-1 rounded bg-gray-50 border border-gray-200 text-[#3273a8]">
                      CIT: {c.corporateTaxRate}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed font-light line-clamp-3 mb-4">
                    {c.summary}
                  </p>

                    <div className="space-y-3 text-xs text-gray-700 bg-[#fafafa] p-5 rounded-xl border border-gray-100 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Legal Form:</span>
                      <span className="font-medium text-[#0b1b36] uppercase">{c.structures[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Timeline:</span>
                      <span className="font-medium text-[#0b1b36]">{c.formationTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Focus:</span>
                      <span className="font-medium text-[#0b1b36] truncate max-w-[140px]">{c.capital} Gateway</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {c.capital} Desk
                  </span>
                  <button
                    onClick={() => onNavigate('jurisdictions')}
                    className="text-xs font-bold text-[#3273a8] hover:text-[#c91c1c] uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
            </ScrollReveal>
</section>

      {/* 3. Core Practice Areas Preview (6 Concise Cards) */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreasPreview.map((practice) => {
              const IconComp = practice.icon;
              return (
                <div
                  key={practice.id}
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
                    <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">
                      {practice.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#3273a8] group-hover:text-[#c91c1c] transition-colors uppercase tracking-wider">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
            </ScrollReveal>
</section>

      {/* 4. Interactive Scope Planner Feature Callout */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-premium relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#3273a8]">
                  <Compass className="w-4 h-4 text-[#c91c1c]" />
                  Interactive European Planning
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-[#15325b] uppercase tracking-tight">
                  Calculate Your European Setup Blueprint in 60 Seconds
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                  Select your target jurisdiction (Portugal, Switzerland, or Ireland), choose statutory corporate structures, configure European banking and residency add-ons, and generate an instant timeline and deliverables blueprint.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c91c1c] shrink-0" />
                    <span className="font-semibold">Live Timeline Estimates</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c91c1c] shrink-0" />
                    <span className="font-semibold">Statutory Scope Checklist</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c91c1c] shrink-0" />
                    <span className="font-semibold">Direct Director Review</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onNavigate('estimator')}
                  className="btn-premium w-full py-4 px-6 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  <span>Launch Scope Planner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('process')}
                  className="w-full py-3.5 px-6 rounded-md bg-white hover:bg-gray-100 text-[#15325b] border border-gray-300 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>View 5-Stage Roadmap</span>
                </button>
              </div>
            </div>
          </div>
        </div>
            </ScrollReveal>
</section>

      {/* 5. Institutional Trust & Credentials Bar */}
      <section className="py-14 bg-white border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#15325b]">
                3–5 Days
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
                Lisbon • Zurich • Dublin
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

      <TestimonialCarousel />

      {/* 6. Quick Executive Callout */}
      <section className="py-20 relative overflow-hidden bg-[#0b1b36] text-white">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded bg-[#3273a8]/20 border border-[#3273a8]/30 text-xs font-bold uppercase tracking-widest text-[#66a3d1]  mb-2">
              Ready To Expand?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white drop-shadow-md">
              Connect With Our Jurisdiction Directors
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              Direct legal liaison in Lisbon, Zurich, and Dublin for confidential business structuring.
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
