import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { 
  Globe, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Eye 
} from 'lucide-react';

const whyChooseUsData = [
  {
    num: '01',
    title: 'GLOBAL',
    desc: 'Seven business hubs across Europe, the UK, USA, UAE and India.',
    icon: MapPin,
  },
  {
    num: '02',
    title: 'INTEGRATED',
    desc: 'Business, financial, compliance, immigration and technology support in one ecosystem.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'END-TO-END',
    desc: 'From initial consultation through setup, implementation and ongoing support.',
    icon: CheckCircle2,
  },
  {
    num: '04',
    title: 'TECHNOLOGY-DRIVEN',
    desc: 'Practical IT, AI, software, cloud, automation and cybersecurity solutions.',
    icon: Cpu,
  },
  {
    num: '05',
    title: 'MULTI-DISCIPLINARY',
    desc: 'Business and technology capabilities designed to work together.',
    icon: Users,
  },
  {
    num: '06',
    title: 'INTERNATIONAL',
    desc: 'Support for clients operating across multiple jurisdictions.',
    icon: Globe,
  },
  {
    num: '07',
    title: 'COMPLIANCE-FOCUSED',
    desc: 'Structured around applicable local and EU requirements.',
    icon: ShieldCheck,
  },
  {
    num: '08',
    title: 'TRANSPARENT',
    desc: 'Clear processes, clear communication and transparent service scope.',
    icon: Eye,
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-rkpt" className="py-16 sm:py-24 bg-slate-50/60 border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 block">
              WHY RKPT TECH LTD
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight mb-3">
              Why Choose RKPT
            </h2>
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
              We combine local execution with global perspective, bringing business, financial, legal coordination and technology capabilities into one seamless client experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyChooseUsData.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.num} 
                  className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-[#c91c1c] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#c91c1c] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0b1b36] group-hover:text-[#c91c1c] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0b1b36] text-base mb-2 tracking-wide uppercase">
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
