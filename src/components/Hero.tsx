import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { GlobalNetworkBanner } from './GlobalNetworkBanner';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreEstimator }) => {
  const [zoomedCard, setZoomedCard] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-gray-900 pt-12 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-32 border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className="flex flex-col items-start text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-gray-200 text-[#0b1b36] text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4">
              <ShieldCheck className="w-4 h-4 text-[#c91c1c] shrink-0" />
              <span>GLOBAL BUSINESS & TECHNOLOGY SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-[#0b1b36] leading-[1.12] mb-5 sm:mb-6">
              Build Your Business. <br/>
              <span className="font-light">Transform Your Operations.</span> <br/>
              <span className="text-[#c91c1c] font-semibold">Protect Your Future.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl font-light mb-6">
              RKPT TECH LTD helps individuals, entrepreneurs, startups and established companies establish, operate and expand across international markets. We combine business setup, compliance, financial and immigration support with IT, AI, software and cybersecurity solutions.
            </p>
            
            <div className="flex items-center gap-2 text-[#0b1b36] font-semibold text-xs sm:text-sm mb-6">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
              <span>One Global Partner. Seven Business Hubs.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreEstimator}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-gray-50 text-[#0b1b36] border border-gray-200 font-bold text-xs sm:text-sm tracking-wider uppercase cursor-pointer shadow-xs"
              >
                <span>EXPLORE OUR SERVICES</span>
              </button>
            </div>
          </motion.div>

          {/* Right: High-Tech Global Network Map Banner matching user's requested specification */}
          <div className="w-full relative z-10 flex items-center justify-center mt-2 lg:mt-0">
            <GlobalNetworkBanner onOpenConsultation={onOpenConsultation} />
          </div>
        </div>

        {/* Clean Hub Cards replacing the flat badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full relative">
          {/* Hub: Portugal */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'pt' ? null : 'pt')}
            animate={{ 
              scale: zoomedCard === 'pt' ? 1.06 : 1, 
              zIndex: zoomedCard === 'pt' ? 30 : 1,
              borderColor: zoomedCard === 'pt' ? '#c91c1c' : '#f3f4f6',
              boxShadow: zoomedCard === 'pt' ? "0 20px 25px -5px rgba(201, 28, 28, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.96 }} 
            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative shadow-xs select-none touch-manipulation"
          >
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'pt' ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                src="https://flagcdn.com/pt.svg" alt="PT" 
                className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded-sm shadow-md border-2 border-white ring-1 ring-black/10" 
              />
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0b1b36]">Portugal</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-[0.18em] uppercase mt-1">LDA • NHR • Golden Visa</p>
            {zoomedCard === 'pt' && (
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => { e.stopPropagation(); onOpenConsultation(); }}
                className="mt-3.5 px-4 py-1.5 rounded-full bg-[#0b1b36] text-white text-xs font-semibold tracking-wide hover:bg-[#c91c1c] transition-colors"
              >
                Inquire Portugal Setup
              </motion.button>
            )}
          </motion.div>

          {/* Hub: Switzerland */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'ch' ? null : 'ch')}
            animate={{ 
              scale: zoomedCard === 'ch' ? 1.06 : 1, 
              zIndex: zoomedCard === 'ch' ? 30 : 1,
              borderColor: zoomedCard === 'ch' ? '#c91c1c' : '#f3f4f6',
              boxShadow: zoomedCard === 'ch' ? "0 20px 25px -5px rgba(201, 28, 28, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.96 }} 
            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative shadow-xs select-none touch-manipulation"
          >
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'ch' ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                src="https://flagcdn.com/ch.svg" alt="CH" 
                className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded-sm shadow-md border-2 border-white ring-1 ring-black/10" 
              />
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0b1b36]">Switzerland</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-[0.18em] uppercase mt-1">GmbH • AG • Cantons</p>
            {zoomedCard === 'ch' && (
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => { e.stopPropagation(); onOpenConsultation(); }}
                className="mt-3.5 px-4 py-1.5 rounded-full bg-[#0b1b36] text-white text-xs font-semibold tracking-wide hover:bg-[#c91c1c] transition-colors"
              >
                Inquire Swiss Setup
              </motion.button>
            )}
          </motion.div>

          {/* Hub: Ireland */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'ie' ? null : 'ie')}
            animate={{ 
              scale: zoomedCard === 'ie' ? 1.06 : 1, 
              zIndex: zoomedCard === 'ie' ? 30 : 1,
              borderColor: zoomedCard === 'ie' ? '#c91c1c' : '#f3f4f6',
              boxShadow: zoomedCard === 'ie' ? "0 20px 25px -5px rgba(201, 28, 28, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.96 }} 
            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative shadow-xs select-none touch-manipulation"
          >
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'ie' ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                src="https://flagcdn.com/ie.svg" alt="IE" 
                className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded-sm shadow-md border-2 border-white ring-1 ring-black/10" 
              />
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0b1b36]">Ireland</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-[0.18em] uppercase mt-1">LTD • CRO • EU MARKET</p>
            {zoomedCard === 'ie' && (
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => { e.stopPropagation(); onOpenConsultation(); }}
                className="mt-3.5 px-4 py-1.5 rounded-full bg-[#0b1b36] text-white text-xs font-semibold tracking-wide hover:bg-[#c91c1c] transition-colors"
              >
                Inquire Ireland Setup
              </motion.button>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

