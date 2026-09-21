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
  HeartPulse, 
  Hotel, 
  Coins 
} from 'lucide-react';

const audiences = [
  {
    title: 'Individuals & Entrepreneurs',
    desc: 'Personalized guidance and streamlined setup for sole traders and ambitious founders launching their international journey.',
    icon: User
  },
  {
    title: 'Startups & Founders',
    desc: 'Agile structuring, scalable tech infrastructure, and compliance support designed for high-growth tech startups.',
    icon: Rocket
  },
  {
    title: 'Small & Medium-Sized Businesses',
    desc: 'Scalable operational support, payroll, bookkeeping and digital transformation helping SMEs expand globally.',
    icon: Store
  },
  {
    title: 'Established Companies',
    desc: 'Comprehensive corporate governance, enterprise IT, and subsidiary structuring services for mature businesses.',
    icon: Building2
  },
  {
    title: 'International Companies',
    desc: 'Cross-border compliance, multi-jurisdiction strategy, and localized tech integration for multinational enterprises.',
    icon: Globe2
  },
  {
    title: 'Investors',
    desc: 'Holding structures, due diligence, and residency/visa assistance (such as Golden Visa) for global investors.',
    icon: Landmark
  },
  {
    title: 'IT & SaaS Businesses',
    desc: 'Specialized IP protection, cloud infrastructure setup, and rigorous data compliance (GDPR) for software companies.',
    icon: Cloud
  },
  {
    title: 'Professional Services Firms',
    desc: 'Secure operational frameworks and robust digital management solutions for consulting, legal, and financial firms.',
    icon: Briefcase
  },
  {
    title: 'Manufacturing & Trading Businesses',
    desc: 'Supply chain structuring, import/export compliance (EORI), and robust ERP integration for physical goods traders.',
    icon: Factory
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'Strict regulatory compliance, secure data handling, and operational setup for health and med-tech innovators.',
    icon: HeartPulse
  },
  {
    title: 'Hospitality & Tourism',
    desc: 'Licensing, local entity formation, and digital booking and management infrastructure for travel and tourism ventures.',
    icon: Hotel
  },
  {
    title: 'FinTech & Technology Businesses',
    desc: 'Regulatory licensing coordination, secure financial IT infrastructure, and compliance for modern financial technology ventures.',
    icon: Coins
  }
];

export const WhoWeServeSection: React.FC = () => {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-white border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 block">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight mb-3">
              Built for Businesses at Every Stage
            </h2>
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
              Our services support founders starting their first company, established businesses entering international markets, and cross-border enterprises modernising their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:shadow-md hover:border-[#c91c1c] hover:bg-white transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center mb-4 group-hover:text-[#c91c1c] text-[#0b1b36] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#0b1b36] text-base mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
