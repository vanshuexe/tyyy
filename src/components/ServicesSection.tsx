import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { SERVICES_DATA } from '../data/companyData';
import {
  Building2,
  Scale,
  Calculator,
  Landmark,
  Plane,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (preselectedService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 stroke-[1.5]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 stroke-[1.5]" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 stroke-[1.5]" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 stroke-[1.5]" />;
      case 'Plane':
        return <Plane className="w-6 h-6 stroke-[1.5]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 stroke-[1.5]" />;
      default:
        return <Building2 className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="business-services" className="py-16 sm:py-24 bg-white border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div className="max-w-3xl">
              <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 block">
                PRACTICE AREAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight">
                Business Services
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                From company formation to ongoing compliance and international expansion, we help clients establish and operate businesses with a clear, structured approach.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Business Services Grid with Expandable Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              const bullets = service.subCategories?.[0]?.items || [];

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                    isExpanded ? 'border-[#c91c1c] ring-1 ring-[#c91c1c]/20' : 'border-gray-200/90 hover:border-gray-300'
                  }`}
                >
                  <div className="p-6">
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold font-mono text-[#c91c1c] tracking-widest bg-red-50 border border-red-100 px-2.5 py-1 rounded">
                        SERVICE {service.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0b1b36]">
                        {getIcon(service.icon)}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#0b1b36] mb-1 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-[#c91c1c] mb-3">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4">
                      {service.description}
                    </p>

                    {/* Expandable Service Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden border-t border-gray-100 pt-4 mt-2"
                        >
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                            Scope Deliverables:
                          </h4>
                          <ul className="space-y-2">
                            {bullets.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 py-3.5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => toggleExpand(service.id)}
                      className="inline-flex items-center gap-1.5 text-gray-700 hover:text-[#0b1b36] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Deliverables'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#c91c1c]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenConsultation(service.title)}
                      className="inline-flex items-center gap-1 text-[#c91c1c] hover:text-[#a01616] uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Consult</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner After Services */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0b1b36] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold">
                Need a customized corporate & compliance package?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl font-light">
                Our jurisdictional directors structure entity formation, statutory compliance, tax registration and corporate banking into one unified workflow.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              Tell Us What You Need
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
