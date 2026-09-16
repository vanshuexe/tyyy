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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 text-[#c91c1c] text-xs font-bold tracking-widest uppercase mb-8 transition-transform hover:-translate-y-0.5 duration-300">
              <span>OFFICIAL BUSINESS & TECHNOLOGY PARTNER</span>
            </div>

            {/* Main Headline - Clean & Impactful */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight text-[#0b1b36] leading-[1.1] mb-6">
              Build Your Business. <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #0b1b36' }}>Transform. Protect. Grow.</span>
            </h1>

            {/* Refined Subtext */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl font-medium mb-6">
              RKPT TECH LTD helps individuals, entrepreneurs, startups and established companies establish, operate and expand across international markets. We combine business setup, compliance, financial and immigration support with IT, AI, software and cybersecurity solutions.
            </p>

            {/* Clean Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-sm tracking-widest uppercase"
              >
                <span>Book A Consultation</span>
              </button>
              <button
                onClick={onExploreEstimator}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-gray-50 text-[#15325b] border-2 border-[#15325b] font-bold text-sm tracking-widest uppercase"
              >
                <span>Explore Our Services</span>
              </button>
            </div>
          </motion.div>

          {/* Right: High-End Corporate Asset */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-premium group">
            <img 
              src="https://ik.imagekit.io/fdhgiehjz/WhatsApp%20Image%202026-09-12%20at%209.25.22%20PM.jpeg" 
              alt="Modern Corporate Office" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* Global Hubs Strip from PDF */}
        <div className="w-full border-t border-gray-200 mt-16 pt-10 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">One Global Partner. Seven Business Hubs.</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold tracking-widest text-[#0b1b36] uppercase">
            <span>Portugal</span>
            <span className="text-gray-300">•</span>
            <span>UK</span>
            <span className="text-gray-300">•</span>
            <span>Ireland</span>
            <span className="text-gray-300">•</span>
            <span>Switzerland</span>
            <span className="text-gray-300">•</span>
            <span>USA</span>
            <span className="text-gray-300">•</span>
            <span>UAE</span>
            <span className="text-gray-300">•</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
