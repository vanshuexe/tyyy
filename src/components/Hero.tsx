import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, Landmark, Laptop, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreEstimator }) => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-gray-900 pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20">
          
          {/* Left: Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex flex-col items-start text-left">
            {/* Subtle Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 text-xs font-semibold tracking-widest uppercase mb-8 transition-transform hover:-translate-y-0.5 duration-300">
              <ShieldCheck className="w-4 h-4 text-[#c91c1c]" />
              <span>GLOBAL BUSINESS & TECHNOLOGY SOLUTIONS</span>
            </div>

            {/* Main Headline - Clean & Impactful */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-[#0b1b36] leading-[1.1] mb-6">
              Build Your Business. <br/>
              <span className="text-[#3273a8] font-light">Transform Your Operations.</span> <br/>
              <span className="text-[#c91c1c] font-bold">Protect Your Future.</span>
            </h1>

            {/* Refined Subtext */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl font-light mb-6">
              RKPT TECH LTD helps individuals, entrepreneurs, startups and established companies establish, operate and expand across international markets. We combine business setup, compliance, financial and immigration support with IT, AI, software and cybersecurity solutions.
            </p>

            <div className="flex items-center gap-2 text-[#0b1b36] font-medium text-sm mb-10">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              One Global Partner. Seven Business Hubs.
            </div>

            {/* Clean Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-medium text-sm tracking-wide uppercase"
              >
                <span>Book A Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreEstimator}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-gray-50 text-[#15325b] border border-gray-200 font-medium text-sm tracking-wide uppercase"
              >
                <span>Explore Our Services</span>
              </button>
            </div>
          </motion.div>

          {/* Right: High-End Corporate Asset */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-premium group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern Corporate Office" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* Clean Hub Cards replacing the flat badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Hub: Portugal */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center group cursor-default">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="https://flagcdn.com/pt.svg" alt="PT" className="w-8 h-6 object-cover rounded-sm border border-gray-100 shadow-sm group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-medium text-[#0b1b36]">Portugal</h3>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-[0.2em] uppercase mt-1">LDA • NHR • Golden Visa</p>
          </div>

          {/* Hub: Switzerland */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center group cursor-default">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="https://flagcdn.com/ch.svg" alt="CH" className="w-8 h-6 object-cover rounded-sm border border-gray-100 shadow-sm group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-medium text-[#0b1b36]">Switzerland</h3>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-[0.2em] uppercase mt-1">GmbH • AG • Cantons</p>
          </div>

          {/* Hub: Ireland */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center group cursor-default">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="https://flagcdn.com/ie.svg" alt="IE" className="w-8 h-6 object-cover rounded-sm border border-gray-100 shadow-sm group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-medium text-[#0b1b36]">Ireland</h3>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-[0.2em] uppercase mt-1">LTD • 12.5% CIT • CRO</p>
          </div>
        </div>

      </div>
    </section>
  );
};
