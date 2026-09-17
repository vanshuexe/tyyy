import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { CORE_VALUES, WHY_CHOOSE_US, COMPANY_INFO } from '../data/companyData';
import {
  ShieldCheck,
  Users,
  Award,
  Zap,
  Eye,
  CheckCircle,
  MapPin,
  Layers,
  Network,
  Globe,
  CheckCircle2,
  Scale,
  Cpu,
  ArrowRight,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const getValueIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-rose-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-purple-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#c91c1c]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#3273a8]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#15325b]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#c91c1c]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#3273a8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#15325b]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#c91c1c]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#3273a8]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#3273a8]" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Company Profile Header & Vision / Mission */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center mb-4">
            <div className="text-left">
              <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-3 block">
                Institutional Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0b1b36] tracking-tight mb-6">
                About RKPT TECH LTD
              </h2>
              <p className="text-base text-gray-500 leading-relaxed font-light">
                {COMPANY_INFO.integratedApproach}
              </p>
            </div>
            
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1200" 
                alt="RKPT Tech Boardroom" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Vision Card in Crisp Light Style with Crimson Top Accent */}
            <div className="p-8 rounded-xl bg-white border border-gray-200 border-t border-gray-100 shadow-sm text-gray-900 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3273a8]">
                  Our Vision
                </span>
                <h3 className="text-2xl font-medium font-display uppercase tracking-tight mt-2 mb-4 text-[#15325b]">
                  Trusted Global Partner for European Expansion
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 text-xs text-[#c91c1c] font-bold uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#c91c1c] shrink-0" />
                <span>Transparent, compliant, and technology-driven operations.</span>
              </div>
            </div>

            {/* Mission Card in Clean White with Deep Navy Top Accent */}
            <div className="p-8 rounded-xl bg-white border border-gray-200 border-t border-gray-100 shadow-sm shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3273a8]">
                  Our Mission
                </span>
                <h3 className="text-2xl font-medium font-display uppercase tracking-tight mt-2 mb-4 text-[#15325b]">
                  Disciplined Execution Across 4 Pillars
                </h3>
                <ul className="space-y-3">
                  {COMPANY_INFO.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                      <div className="w-5 h-5 rounded bg-[#024d87] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 font-bold uppercase tracking-wider">
                Direct local presence in Portugal, Switzerland, and Ireland.
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us 6 Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs font-bold mb-1 block">
              Core Strengths
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium font-display uppercase tracking-tight text-[#15325b]">
              Why Choose RKPT TECH LTD
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Uniting cross-border legal precision, tier-1 banking access, and modern software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-gray-200 border-t border-gray-100 shadow-sm hover:border-t-[#c91c1c] shadow-xs hover:shadow-lg transition-all space-y-3 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                  {getWhyIcon(item.icon)}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#c91c1c]">{item.highlight}</div>
                <h4 className="font-bold text-base text-[#15325b] uppercase leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values 5 Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs font-bold mb-1 block">
              Ethical Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium font-display uppercase tracking-tight text-[#15325b]">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              The ethical and operational foundation of every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-gray-200 border-t border-gray-100 text-left flex flex-col justify-between space-y-3 hover:border-t-[#c91c1c] hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center mb-3">
                    {getValueIcon(val.icon)}
                  </div>
                  <span className="text-sm uppercase font-bold text-[#3273a8] tracking-wider">
                    {val.tag}
                  </span>
                  <h4 className="font-bold text-sm uppercase text-[#15325b] mt-0.5">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout in KCID Light Card */}
        <div className="p-8 rounded-xl bg-white border border-gray-200 border-t border-gray-100 shadow-sm text-gray-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-lg uppercase tracking-tight text-[#15325b]">
              Ready to start your European expansion?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Speak with our senior jurisdiction directors in Lisbon, Zurich, Dublin, London, New York, or Dubai today.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs transition-colors shadow-md shadow-[#c91c1c]/20 flex items-center gap-2 shrink-0"
          >
            <span>Request Executive Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
          </ScrollReveal>
</section>
  );
};
