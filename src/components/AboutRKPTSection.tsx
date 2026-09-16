import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, CheckCircle, Target, Globe, ShieldCheck, Cpu } from 'lucide-react';

interface AboutRKPTSectionProps {
  onOpenConsultation: () => void;
}

export const AboutRKPTSection: React.FC<AboutRKPTSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-left">
              <div>
                <span className="text-[#c91c1c] uppercase tracking-[0.15em] text-xs font-bold mb-3 block">
                  ABOUT RKPT TECH LTD
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#15325b] tracking-tight mb-6 leading-tight">
                  One partner for business and technology
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 font-light text-base md:text-lg leading-relaxed">
                <p>
                  RKPT TECH LTD is a global business consulting and technology solutions firm specializing in helping entrepreneurs, startups and established companies establish, expand and operate businesses across international markets.
                </p>
                <p>
                  Our integrated approach combines business, financial, administrative, compliance and IT solutions so clients can focus on growth while we help manage complexity, compliance and operational efficiency.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                  <strong className="font-bold text-[#15325b]">Vision.</strong> To become a trusted global partner for businesses entering and expanding into international markets by delivering transparent, compliant and technology-driven solutions that enable sustainable growth.
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#c91c1c] font-medium text-lg leading-6">—</span>
                  <p className="text-gray-700 font-medium text-base">
                    Simplify cross-border business setup and operations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c91c1c] font-medium text-lg leading-6">—</span>
                  <p className="text-gray-700 font-medium text-base">
                    Deliver accurate, compliant and customized consulting services.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c91c1c] font-medium text-lg leading-6">—</span>
                  <p className="text-gray-700 font-medium text-base">
                    Empower businesses through innovative IT and digital solutions.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenConsultation}
                  className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-sm tracking-wide uppercase transition-colors"
                >
                  <span>Book A Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual / Accent element */}
            <div className="hidden lg:block relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-premium">
              {/* Decorative geometric patterns representing integration of tech & business */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-200" />
              <div className="absolute top-1/4 -right-16 w-64 h-64 bg-[#3273a8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
              <div className="absolute -bottom-8 -left-16 w-64 h-64 bg-[#c91c1c] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
              
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center transform translate-y-8">
                    <Globe className="w-10 h-10 text-[#3273a8] mb-4" />
                    <h4 className="font-bold text-[#15325b] mb-2">Global Markets</h4>
                    <p className="text-xs text-gray-500 font-light">Cross-border setup & compliance</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center transform -translate-y-4">
                    <Target className="w-10 h-10 text-[#c91c1c] mb-4" />
                    <h4 className="font-bold text-[#15325b] mb-2">Strategic Growth</h4>
                    <p className="text-xs text-gray-500 font-light">Consulting & business scaling</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center transform translate-y-4">
                    <Cpu className="w-10 h-10 text-[#15325b] mb-4" />
                    <h4 className="font-bold text-[#15325b] mb-2">IT & Digital</h4>
                    <p className="text-xs text-gray-500 font-light">Custom software & AI integration</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center transform -translate-y-8">
                    <ShieldCheck className="w-10 h-10 text-[#3273a8] mb-4" />
                    <h4 className="font-bold text-[#15325b] mb-2">Operational Trust</h4>
                    <p className="text-xs text-gray-500 font-light">Accurate compliance & licensing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
