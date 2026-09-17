import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { 
  Globe, 
  Layers, 
  Route, 
  Cpu, 
  Briefcase, 
  Compass, 
  ShieldCheck, 
  Eye 
} from 'lucide-react';

const whyChooseUsData = [
  {
    title: 'Global Reach',
    desc: 'Seven business hubs across Europe, the UK, USA, UAE, and India, providing you with on-the-ground local expertise and true international scale.',
    icon: Globe
  },
  {
    title: 'Integrated Ecosystem',
    desc: 'We unify business structuring, financial planning, compliance, immigration, and advanced technology support into one cohesive operating environment.',
    icon: Layers
  },
  {
    title: 'End-to-End Partnership',
    desc: 'From your initial strategic consultation through company setup, digital implementation, and ongoing operational support, we stay by your side at every stage.',
    icon: Route
  },
  {
    title: 'Technology-Driven',
    desc: 'We implement practical IT infrastructure, AI workflows, custom software, secure cloud environments, and robust cybersecurity to future-proof your operations.',
    icon: Cpu
  },
  {
    title: 'Multi-Disciplinary Expertise',
    desc: 'Our teams blend legal, financial, and technical capabilities, ensuring your corporate structure and digital architecture work together seamlessly.',
    icon: Briefcase
  },
  {
    title: 'Cross-Border Operations',
    desc: 'Tailored support for clients navigating multiple jurisdictions, optimising cross-border efficiencies and ensuring smooth, compliant international transactions.',
    icon: Compass
  },
  {
    title: 'Compliance-Focused',
    desc: 'Strict adherence to local regulations, corporate governance, and EU directives, giving you complete peace of mind that your operations are legally sound.',
    icon: ShieldCheck
  },
  {
    title: 'Radical Transparency',
    desc: 'Clear fee structures, straightforward processes, and transparent communication so you always know exactly where your expansion project stands.',
    icon: Eye
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 max-w-3xl">
            <span className="text-[#c91c1c] uppercase tracking-[0.15em] text-xs font-bold mb-3 block">
              WHY CHOOSE RKPT
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#15325b] tracking-tight mb-4">
              A single, accountable operating partner
            </h2>
            <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed">
              Expanding your business shouldn't mean managing dozens of different vendors, lawyers, and IT agencies. We consolidate your entire expansion journey under one roof, providing a seamless, fully integrated service that saves you time, reduces risk, and accelerates your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {whyChooseUsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#3273a8] group-hover:text-[#c91c1c] transition-colors" />
                  </div>
                  <h3 className="font-bold text-[#15325b] text-lg mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
