import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { PROCESS_STEPS } from '../data/companyData';
import { ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="process" className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-4">
            <span className="text-[#c91c1c] uppercase tracking-[0.15em] text-xs font-bold mb-3 block">
              FROM SETUP TO GROWTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-gray-400 tracking-tight">
              An end-to-end path, start to finish
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col">
                <span className="text-2xl font-bold text-[#c91c1c] mb-3">
                  {step.step.toString().padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};
