import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { TECHNOLOGY_SERVICES_DATA } from '../data/companyData';
import {
  Monitor,
  Cpu,
  Code,
  Globe,
  Database,
  Cloud,
  Repeat,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface TechnologySectionProps {
  onOpenConsultation: (preselectedService?: string) => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenConsultation }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 stroke-[1.5]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 stroke-[1.5]" />;
      case 'Code':
        return <Code className="w-6 h-6 stroke-[1.5]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 stroke-[1.5]" />;
      case 'Database':
        return <Database className="w-6 h-6 stroke-[1.5]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 stroke-[1.5]" />;
      case 'Repeat':
        return <Repeat className="w-6 h-6 stroke-[1.5]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 stroke-[1.5]" />;
      default:
        return <Monitor className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="technology" className="py-16 sm:py-24 bg-slate-50/60 border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div className="max-w-3xl">
              <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 block">
                ENGINEERING & DIGITAL INFRASTRUCTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight">
                Technology Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Technology should make your business easier to operate, more secure and more scalable. We design practical digital solutions around your business requirements.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('Technology Requirements')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1b36] hover:bg-[#15325b] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>DISCUSS YOUR TECHNOLOGY REQUIREMENTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 8 Technology Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TECHNOLOGY_SERVICES_DATA.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                    isExpanded ? 'border-[#0b1b36] ring-1 ring-[#0b1b36]/20' : 'border-gray-200/90 hover:border-gray-300'
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* Header: Number and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold font-mono text-gray-500 tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                        SERVICE {service.number}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0b1b36]">
                        {getIcon(service.icon)}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#0b1b36] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mb-3">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed font-light mb-4">
                      {service.description}
                    </p>

                    {/* Structured Approach if applicable */}
                    {service.approach && (
                      <div className="mb-4 bg-slate-50 border border-slate-200/60 rounded-xl p-2.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b1b36] block mb-1.5">
                          {service.approachTitle}:
                        </span>
                        <div className="flex flex-wrap items-center gap-1 text-[11px] font-medium text-gray-700">
                          {service.approach.map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <span className="bg-white px-1.5 py-0.5 rounded border border-gray-200 text-[10px]">
                                {step}
                              </span>
                              {sIdx < service.approach!.length - 1 && (
                                <span className="text-gray-400 text-[10px]">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expandable Capabilities */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden border-t border-gray-100 pt-3 mt-2"
                        >
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                            Included Capabilities:
                          </span>
                          <ul className="space-y-1.5">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b1b36] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Bottom Footer */}
                  <div className="px-5 sm:px-6 py-3 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => toggleExpand(service.id)}
                      className="inline-flex items-center gap-1 text-gray-600 hover:text-[#0b1b36] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide' : 'Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(service.title)}
                      className="text-[#c91c1c] hover:text-[#a01616] uppercase tracking-wider transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenConsultation('Technology Infrastructure')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-md cursor-pointer"
            >
              <span>DISCUSS YOUR TECHNOLOGY REQUIREMENTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
