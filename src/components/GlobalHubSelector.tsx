import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { COUNTRIES_DATA } from '../data/companyData';
import { ScrollReveal } from './ScrollReveal';

interface GlobalHubSelectorProps {
  selectedHubId?: string;
  onSelectHub: (hubId: string) => void;
  onOpenConsultation: (hubName?: string) => void;
}

export const GlobalHubSelector: React.FC<GlobalHubSelectorProps> = ({
  selectedHubId,
  onSelectHub,
  onOpenConsultation,
}) => {
  return (
    <section id="global-hubs" className="py-14 sm:py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#c91c1c] mb-2">
                <Globe className="w-4 h-4" />
                Global Hub Selector
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight">
                One Global Platform. Multiple Markets.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Our global hubs connect clients with local business support, compliance guidance and technology capabilities across key international markets.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c91c1c] hover:text-[#a01616] transition-colors shrink-0 group self-start md:self-auto cursor-pointer"
            >
              <span>Explore Hub Consultations</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 7 Hub Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {COUNTRIES_DATA.map((hub, idx) => {
              const isSelected = selectedHubId?.toLowerCase() === hub.id.toLowerCase();
              return (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex"
                >
                  <div
                    onClick={() => onSelectHub(hub.id)}
                    className={`w-full bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left ${
                      isSelected
                        ? 'border-[#c91c1c] ring-2 ring-[#c91c1c]/25 shadow-lg shadow-red-50'
                        : 'border-gray-200/90 hover:border-[#c91c1c] hover:shadow-lg hover:shadow-slate-200/60'
                    }`}
                  >
                    <div>
                      {/* Flag & Code Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={hub.flag}
                            alt={`${hub.name} flag`}
                            className="w-7 h-5 object-cover rounded-sm shadow-xs border border-gray-200"
                          />
                          <span className={`text-xs font-bold tracking-wider px-2 py-0.5 rounded ${
                            isSelected ? 'bg-[#0b1b36] text-white' : 'text-[#0b1b36] bg-gray-100'
                          }`}>
                            {hub.code}
                          </span>
                        </div>
                        {isSelected ? (
                          <span className="text-[10px] font-bold text-[#c91c1c] uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                            Selected
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                            {hub.capital}
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <h3 className={`text-xl font-display font-bold transition-colors mb-1 ${
                        isSelected ? 'text-[#c91c1c]' : 'text-[#0b1b36] group-hover:text-[#c91c1c]'
                      }`}>
                        {hub.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#c91c1c] tracking-wide mb-3">
                        {hub.regionalFocus}
                      </p>

                      {/* Summary / Focus */}
                      <p className="text-xs text-gray-600 leading-relaxed font-light mb-4">
                        {hub.summary}
                      </p>
                    </div>

                    {/* Card Footer Button */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0b1b36] group-hover:text-[#c91c1c] transition-colors">
                      <span className="uppercase tracking-wider">
                        {isSelected ? 'View Detailed Setup' : 'Select Hub'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
