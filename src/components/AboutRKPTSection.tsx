import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Award, Zap, Eye } from 'lucide-react';

interface AboutRKPTSectionProps {
  onOpenConsultation: () => void;
}

export const AboutRKPTSection: React.FC<AboutRKPTSectionProps> = ({ onOpenConsultation }) => {
  const missionPoints = [
    'Simplify cross-border business setup and operations.',
    'Deliver accurate, compliant and customized consulting services.',
    'Empower businesses through innovative IT and digital solutions.',
    'Build long-term partnerships based on trust, performance and results.',
  ];

  const coreValues = [
    {
      title: 'Integrity & Compliance',
      desc: 'Structured around applicable local and EU requirements.',
      icon: ShieldCheck,
    },
    {
      title: 'Client-Centric Approach',
      desc: 'Solutions tailored to individual and corporate goals.',
      icon: HeartHandshake,
    },
    {
      title: 'Expertise & Precision',
      desc: 'Rigorous legal, tax, and technological execution.',
      icon: Award,
    },
    {
      title: 'Innovation',
      desc: 'Practical IT, AI, and workflow automation solutions.',
      icon: Zap,
    },
    {
      title: 'Transparency',
      desc: 'Clear processes, clear communication, and transparent service scope.',
      icon: Eye,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: About, Vision, Mission */}
            <div className="space-y-6">
              <div>
                <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 block">
                  ABOUT RKPT
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight mb-4">
                  About RKPT TECH LTD
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  RKPT TECH LTD is a global business consulting and technology solutions firm specializing in helping entrepreneurs, startups and established companies establish, expand and operate businesses across international markets. Our integrated approach combines business, financial, administrative, compliance and IT solutions so clients can focus on growth while we help manage complexity, compliance and operational efficiency.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-slate-50 border-l-4 border-[#0b1b36] p-5 rounded-r-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0b1b36] block mb-1">
                  Our Vision
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  To become a trusted global partner for businesses entering and expanding into international markets by delivering transparent, compliant and technology-driven solutions that enable sustainable growth.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c91c1c] block">
                  Our Mission
                </span>
                <div className="space-y-2">
                  {missionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c91c1c] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-gray-700 font-normal">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Core Values */}
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/90">
              <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-1 block">
                FOUNDATIONAL STANDARDS
              </span>
              <h3 className="text-2xl font-display font-black text-[#0b1b36] tracking-tight mb-6">
                Core Values
              </h3>

              <div className="space-y-4">
                {coreValues.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 hover:border-[#c91c1c] transition-colors shadow-xs"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#c91c1c]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-[#0b1b36] text-sm sm:text-base">
                          {val.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-light leading-relaxed pl-11">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
