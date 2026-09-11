import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/companyData';
import { Check, Clock, Calendar, ArrowRight, Quote } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="py-20 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
            5-Stage Proven Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#15325b] uppercase tracking-tight">
            Our Structured Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            A disciplined, transparent delivery framework engineered to guide you seamlessly from initial feasibility to active European operations.
          </p>
        </div>

        {/* Visual Timeline Component */}
        <div className="relative max-w-5xl mx-auto mb-20 px-4 sm:px-0">
          {/* Desktop Connecting Line Background */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0" />
          
          {/* Desktop Connecting Line Progress */}
          <div 
            className="hidden md:block absolute top-[28px] left-[10%] h-[2px] bg-[#0b1b36] z-0 transition-all duration-500 ease-in-out" 
            style={{ width: `${((activeStep - 1) / (PROCESS_STEPS.length - 1)) * 80}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {PROCESS_STEPS.map((step) => {
              const isCurrent = activeStep === step.step;
              const isPast = step.step < activeStep;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(step.step)}
                  className="flex flex-row md:flex-col items-center md:text-center group text-left w-full gap-4 md:gap-0"
                >
                  <div className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold font-display transition-all duration-300 md:mb-4 border-[3px] bg-white relative
                    ${isCurrent ? 'border-[#0b1b36] text-[#0b1b36] scale-110 shadow-md' : 
                      isPast ? 'border-[#0b1b36] text-white bg-[#0b1b36]' : 'border-gray-200 text-gray-400 hover:border-gray-300'}`}
                  >
                    {isPast ? <Check className="w-5 h-5" /> : `0${step.step}`}
                  </div>
                  
                  <div className="flex-1 md:w-full">
                    <h4 className={`font-medium text-sm sm:text-base tracking-wide transition-colors ${isCurrent ? 'text-[#0b1b36]' : 'text-gray-500 group-hover:text-[#3273a8]'}`}>
                      {step.title}
                    </h4>
                    <p className={`text-xs mt-1 transition-colors ${isCurrent ? 'text-[#3273a8] font-medium' : 'text-gray-400'}`}>
                      {step.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Spotlight Box in KCID Style */}
        {(() => {
          const current = PROCESS_STEPS.find((s) => s.step === activeStep) || PROCESS_STEPS[0];
          return (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 mb-14 overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-3 text-xs font-semibold text-[#3273a8] uppercase tracking-widest">
                    <span>Phase 0{current.step}</span>
                    <span className="w-8 h-px bg-gray-200"></span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {current.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-medium font-display text-[#0b1b36] tracking-tight">
                    {current.title}
                  </h3>
                  
                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    {current.description}
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={onOpenConsultation}
                      className="px-6 py-3 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white text-xs font-medium tracking-wide inline-flex items-center gap-2 shadow-sm transition-colors"
                    >
                      <span>Initiate Phase 0{current.step}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Deliverables Panel */}
                <div className="lg:col-span-6 bg-gray-50 border border-gray-100 rounded-xl p-8 h-full">
                  <h5 className="text-xs font-semibold uppercase tracking-widest text-[#0b1b36] mb-6 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3273a8]" />
                    <span>Sub-tasks & Compliance Milestones:</span>
                  </h5>
                  <ul className="space-y-4">
                    {current.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                        <Check className="w-4 h-4 text-[#3273a8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Our Commitment Quote Card in Crisp Light KCID Style + Crimson Accent */}
        <div className="rounded-xl bg-white border border-gray-100 text-gray-900 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <Quote className="absolute -right-6 -bottom-6 w-36 h-36 text-gray-100 pointer-events-none" />
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#3273a8]">
              Our Commitment
            </div>
            <blockquote className="text-xl sm:text-2xl font-display font-medium text-[#15325b] leading-relaxed">
              &ldquo;{COMPANY_INFO.commitment}&rdquo;
            </blockquote>
            <div className="pt-2 flex items-center gap-3 text-xs text-gray-600 font-bold uppercase tracking-wider">
              <span>— RKPT TECH LTD Executive Directorate</span>
              <span>•</span>
              <span className="text-[#c91c1c]">Portugal • Switzerland • Ireland</span>
            </div>
          </div>
        </div>
      </div>
          </ScrollReveal>
</section>
  );
};
