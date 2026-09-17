import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { COUNTRIES_DATA } from '../data/companyData';

const HUB_COORDINATES = {
  ireland: { top: 25, left: 35 },
  switzerland: { top: 55, left: 65 },
  portugal: { top: 75, left: 25 }
};

export const InteractiveMap: React.FC = () => {
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#0b1b36] relative overflow-hidden border-b border-[#1e4a87]/30">
      {/* Background Stylized Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3273a8 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3273a8]/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <ScrollReveal>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="text-[#66a3d1] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-3 block">
            European Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Strategic Jurisdictional Network
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-[#0f2547]/60 backdrop-blur-md rounded-3xl border border-[#1e4a87]/50 shadow-2xl overflow-hidden p-4 sm:p-8">
          
          {/* Abstract Network Lines */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <path 
              d={`M ${HUB_COORDINATES.ireland.left} ${HUB_COORDINATES.ireland.top} L ${HUB_COORDINATES.switzerland.left} ${HUB_COORDINATES.switzerland.top} L ${HUB_COORDINATES.portugal.left} ${HUB_COORDINATES.portugal.top} Z`} 
              fill="rgba(50, 115, 168, 0.05)" 
              stroke="rgba(50, 115, 168, 0.3)" 
              strokeWidth="0.2" 
              strokeDasharray="1 1"
            />
          </svg>

          {/* Radar Ping Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] pointer-events-none opacity-20">
             <div className="absolute inset-0 border border-[#3273a8] rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
             <div className="absolute inset-8 border border-[#3273a8] rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
             <div className="absolute inset-16 border border-[#3273a8] rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_2s]"></div>
          </div>

          {/* Interactive Hub Nodes */}
          {COUNTRIES_DATA.map((country) => {
            const coords = HUB_COORDINATES[country.id as keyof typeof HUB_COORDINATES];
            const isHovered = hoveredHub === country.id;
            
            return (
              <div 
                key={country.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ top: `${coords.top}%`, left: `${coords.left}%` }}
                onMouseEnter={() => setHoveredHub(country.id)}
                onMouseLeave={() => setHoveredHub(null)}
                onClick={() => setHoveredHub(isHovered ? null : country.id)}
              >
                {/* Node Pin */}
                <div className="relative group cursor-pointer p-6 -m-6">
                  <div className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 mx-auto ${isHovered ? 'bg-[#c91c1c] border-[#c91c1c] scale-125 shadow-[0_0_15px_rgba(201,28,28,0.5)]' : 'bg-[#3273a8] border-white'}`}></div>
                  <div className={`absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping opacity-75 ${isHovered ? 'bg-[#c91c1c]' : 'bg-[#3273a8]'}`}></div>
                  
                  {/* Label */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center pointer-events-none">
                    <span className={`font-medium text-sm transition-colors duration-300 drop-shadow-md ${isHovered ? 'text-white' : 'text-gray-400'}`}>{country.capital}</span>
                  </div>
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 bottom-16 left-1/2 -translate-x-1/2 w-72 shadow-2xl pointer-events-none"
                    >
                      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden relative z-10 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                        <div className="p-4 border-b border-gray-100 bg-[#f8fafd] flex items-center gap-3">
                          <img src={country.flag} alt={country.name} className="w-8 h-6 object-cover rounded-sm shadow-sm border border-gray-200" />
                          <div>
                            <div className="font-bold text-[#0b1b36] text-sm leading-tight">{country.name}</div>
                            <div className="text-sm text-[#3273a8] font-bold uppercase tracking-wider mt-0.5">{country.structures[0]}</div>
                          </div>
                        </div>
                        <div className="p-4 bg-white text-left">
                          <p className="text-xs text-gray-500 line-clamp-3 mb-3 leading-relaxed">{country.summary}</p>
                          <div className="flex items-center gap-1.5 text-[#c91c1c] text-sm font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4" /> RKPT Regional Office
                          </div>
                        </div>
                      </div>
                      {/* Caret pointing down */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-white transform rotate-45 border-b border-r border-gray-100 z-0 shadow-sm"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
    </section>
  );
};
