import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { PROCESS_STEPS } from '../data/companyData';
import { ArrowRight, Compass } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="journey" className="py-16 sm:py-24 bg-white border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div className="max-w-3xl">
              <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 inline-flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                HOW WE HELP — END-TO-END JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight">
                From Setup to Growth
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                We work with clients from initial concept and market selection through company formation, operational establishment, technology deployment and ongoing international growth.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1b36] hover:bg-[#15325b] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 10 Step Cards in 2-column or 5-row structured grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 hover:border-[#c91c1c] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-mono text-[#c91c1c] group-hover:scale-110 transition-transform">
                      {step.step.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded">
                      Phase {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0b1b36] uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
