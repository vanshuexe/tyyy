import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { 
  User, 
  Rocket, 
  Store, 
  Building2, 
  Globe2, 
  Landmark, 
  Cloud, 
  Briefcase, 
  Factory, 
  Stethoscope, 
  Plane, 
  Cpu 
} from 'lucide-react';

const audiences = [
  {
    title: 'Individuals & Entrepreneurs',
    desc: 'Personalized guidance and streamlined setup for sole traders and ambitious individuals launching their international journey.',
    icon: User
  },
  {
    title: 'Startups & Founders',
    desc: 'Agile structuring, scalable tech infrastructure, and compliance support designed for high-growth tech startups.',
    icon: Rocket
  },
  {
    title: 'SMEs',
    desc: 'Scalable operational support and digital transformation helping small and medium enterprises expand globally.',
    icon: Store
  },
  {
    title: 'Established Companies',
    desc: 'Comprehensive corporate governance, enterprise IT, and restructuring services for mature businesses.',
    icon: Building2
  },
  {
    title: 'International Companies',
    desc: 'Cross-border compliance, multi-jurisdiction strategy, and localized tech integration for multinational enterprises.',
    icon: Globe2
  },
  {
    title: 'Investors',
    desc: 'Fund structuring, due diligence, and residency/visa assistance (such as the Golden Visa) for global investors.',
    icon: Landmark
  },
  {
    title: 'IT & SaaS Businesses',
    desc: 'Specialized IP protection, cloud infrastructure setup, and rigorous data compliance (GDPR) for software companies.',
    icon: Cloud
  },
  {
    title: 'Professional Services',
    desc: 'Secure operational frameworks and robust digital management solutions for consulting, legal, and financial firms.',
    icon: Briefcase
  },
  {
    title: 'Manufacturing & Trading',
    desc: 'Supply chain structuring, import/export compliance, and robust digital integration for physical goods traders.',
    icon: Factory
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'Strict regulatory compliance, secure data handling, and operational setup for health and med-tech innovators.',
    icon: Stethoscope
  },
  {
    title: 'Hospitality & Tourism',
    desc: 'Licensing, local entity formation, and scalable digital booking infrastructure for the travel sector.',
    icon: Plane
  },
  {
    title: 'FinTech & Web3',
    desc: 'Regulatory licensing, secure financial IT infrastructure, and rigorous compliance for financial technology disruptors.',
    icon: Cpu
  }
];

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 max-w-3xl">
            <span className="text-[#c91c1c] uppercase tracking-[0.15em] text-xs font-bold mb-3 block">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#15325b] tracking-tight mb-4">
              Built for businesses at every stage
            </h2>
            <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed">
              Whether you are an ambitious solo entrepreneur taking your first steps abroad, or an established multinational enterprise optimizing cross-border operations, our integrated solutions are tailored to your specific industry and growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#3273a8]/30 transition-all duration-300 flex flex-col group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#15325b] group-hover:border-[#15325b] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#3273a8] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-[#15325b] text-base mb-2 tracking-tight group-hover:text-[#c91c1c] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
