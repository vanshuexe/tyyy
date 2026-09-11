import React, { useState } from 'react';
import { INDUSTRIES_SERVED } from '../data/companyData';
import {
  Rocket,
  Laptop,
  ShoppingBag,
  Factory,
  HeartPulse,
  Hotel,
  Briefcase,
  Coins,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenConsultation: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES_SERVED[0]);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-rose-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-amber-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-red-600" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-slate-700" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-teal-600" />;
      default:
        return <Rocket className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
            Domain Versatility
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0b1b36] tracking-tight mb-6">
            Industries We Serve
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            We adapt legal structures, banking relationships, and IT architectures to match the regulatory demands of your sector.
          </p>
        </div>

        {/* 8 Industries Grid in KCID Card Style */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {INDUSTRIES_SERVED.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between bg-white ${
                  isSelected
                    ? 'border-gray-200 shadow-md ring-1 ring-[#0b1b36]'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shadow-xs mb-3">
                  {getIndustryIcon(ind.icon)}
                </div>
                <h4 className="font-medium text-xs sm:text-sm text-[#0b1b36] tracking-wide leading-snug">
                  {ind.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Detail Spotlight on Selected Industry in KCID Style */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-sm">
          <div className="w-full lg:w-1/3 h-48 lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
              alt="Industry Professional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0b1b36]/10 mix-blend-multiply"></div>
          </div>
          
          <div className="flex-1 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shadow-xs">
                  {getIndustryIcon(selectedIndustry.icon)}
                </div>
                <h3 className="text-2xl font-display font-medium text-[#0b1b36] tracking-tight">
                  {selectedIndustry.name}
                </h3>
              </div>

              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {selectedIndustry.summary}
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#3273a8] mb-3">
                  Typical Solutions:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedIndustry.typicalNeeds.map((need, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3273a8] shrink-0" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-500 font-light">
                <span className="font-medium text-[#0b1b36]">RKPT Tailored Approach: </span>
                {selectedIndustry.solutionApproach}
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onOpenConsultation(`${selectedIndustry.name} Industry Solutions`)}
                className="btn-premium w-full lg:w-auto px-6 py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-medium tracking-wide text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore {selectedIndustry.name} Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
