import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { GlobalNetworkBanner } from './GlobalNetworkBanner';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreEstimator: () => void;
  onSelectHub?: (hubId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreEstimator, onSelectHub }) => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-gray-900 pt-12 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-32 border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
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
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl font-light mb-6">
              RKPT TECH helps individuals, entrepreneurs, startups and established businesses enter, establish and scale in global markets with greater speed, confidence and control. We integrate business formation, regulatory compliance, financial and immigration support with IT, AI, software and cybersecurity solutions, providing an end-to-end platform for international expansion. From entering a new market to building and scaling cross-border operations, RKPT TECH provides the expertise, infrastructure and technology needed to turn international opportunities into sustainable global businesses.
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
            <GlobalNetworkBanner onOpenConsultation={onOpenConsultation} onSelectHub={onSelectHub} />
          </div>
        </div>

      </div>
    </section>
  );
};

