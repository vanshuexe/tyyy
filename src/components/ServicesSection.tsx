import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { SERVICES_DATA } from '../data/companyData';
import { ServicePillar } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import {
  Building2,
  Calculator,
  Landmark,
  Plane,
  Cpu,
  TrendingUp,
  Code,
  Globe,
  Database,
  Cloud,
  Repeat,
  ShieldAlert,
  Scale,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (preselectedService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServicePillar | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'business' | 'technology'>('all');

  // Icon mapping with KCID color accent
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-8 h-8 stroke-[1.5]" />;
      case 'Scale': return <Scale className="w-8 h-8 stroke-[1.5]" />;
      case 'Calculator': return <Calculator className="w-8 h-8 stroke-[1.5]" />;
      case 'Landmark': return <Landmark className="w-8 h-8 stroke-[1.5]" />;
      case 'Plane': return <Plane className="w-8 h-8 stroke-[1.5]" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 stroke-[1.5]" />;
      case 'Laptop': return <Cpu className="w-8 h-8 stroke-[1.5]" />;
      case 'Cpu': return <Cpu className="w-8 h-8 stroke-[1.5]" />;
      case 'Code': return <Code className="w-8 h-8 stroke-[1.5]" />;
      case 'Globe': return <Globe className="w-8 h-8 stroke-[1.5]" />;
      case 'Database': return <Database className="w-8 h-8 stroke-[1.5]" />;
      case 'Cloud': return <Cloud className="w-8 h-8 stroke-[1.5]" />;
      case 'Repeat': return <Repeat className="w-8 h-8 stroke-[1.5]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8 stroke-[1.5]" />;
      default: return <Building2 className="w-8 h-8 stroke-[1.5]" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (filterCategory === 'all') return true;
    return srv.category === filterCategory;
  });

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-200">
      
        <ScrollReveal>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
            INTEGRATED CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0b1b36] tracking-tight mb-6">
            Core business and technology areas
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            From company formation to ongoing compliance and international expansion, we help clients establish and operate businesses with a clear, structured approach, and provide practical digital solutions around your business requirements.
          </p>

          {/* Filter Pills in KCID Style */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'business', label: 'Business Practice Areas' },
              { id: 'technology', label: 'Technology Capabilities' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filterCategory === tab.id
                    ? 'bg-[#024d87] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Services Grid in KCID Card Style with top accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            // Alternating KCID top borders
            const borderTop =
              index % 3 === 0
                ? ''
                : index % 3 === 1
                ? ''
                : '';

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-left relative ${borderTop}`}
              >
                <div>
                  {/* Header with Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="mb-4 text-[#0b1b36] group-hover:text-[#3273a8] transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-gray-400">
                        {service.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-gray-100 text-[#15325b]">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-medium text-[#0b1b36] tracking-tight group-hover:text-[#3273a8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-1 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet Highlights from Subcategories with KCID crimson checkmarks */}
                  <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                    {service.subCategories[0]?.items.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#3273a8] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                    {service.subCategories[0]?.items.length > 4 && (
                      <div className="text-[11px] text-[#3273a8] font-bold uppercase tracking-wider pl-5">
                        + {service.subCategories[0].items.length - 4} more specialized capabilities
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="font-medium uppercase tracking-widest text-[#0b1b36] hover:text-[#c91c1c] flex items-center gap-1 group/link transition-colors"
                  >
                    <span>Full Service Scope</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#3273a8] group-hover/link:text-[#c91c1c] transition-transform group-hover/link:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-5 py-2.5 rounded-lg bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Consult
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Banner below services in KCID Style (#0b1b36 + red border) */}
        <div className="mt-14 rounded-2xl bg-[#0b1b36] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-2xl font-display font-medium tracking-tight text-white">Need a cross-functional turnkey package?</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Combine Company Formation + Corporate Banking + Local Address + Tax Filings into one unified agreement.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#estimator"
              className="px-5 py-3 rounded-md bg-[#15325b] hover:bg-[#1e4a87] border border-[#3273a8] text-white font-bold uppercase tracking-wider text-xs transition-colors"
            >
              Scope Estimator
            </a>
            <button
              onClick={() => onOpenConsultation('Turnkey European Package')}
              className="px-6 py-3 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      </ScrollReveal>
      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(srv) => onOpenConsultation(srv)}
      />
    </section>
  );
};
