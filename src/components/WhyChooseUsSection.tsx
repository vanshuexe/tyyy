import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const whyChooseUsData = [
  {
    title: 'Global',
    desc: 'Seven business hubs across Europe, the UK, USA, UAE and India.'
  },
  {
    title: 'Integrated',
    desc: 'Business, financial, compliance, immigration and technology support in one ecosystem.'
  },
  {
    title: 'End-to-end',
    desc: 'From initial consultation through setup, implementation and ongoing support.'
  },
  {
    title: 'Technology-driven',
    desc: 'Practical IT, AI, software, cloud, automation and cybersecurity solutions.'
  },
  {
    title: 'Multi-disciplinary',
    desc: 'Business and technology capabilities designed to work together.'
  },
  {
    title: 'International',
    desc: 'Support for clients operating across multiple jurisdictions.'
  },
  {
    title: 'Compliance-focused',
    desc: 'Structured around applicable local and EU requirements.'
  },
  {
    title: 'Transparent',
    desc: 'Clear processes, clear communication and transparent service scope.'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#c91c1c] uppercase tracking-[0.15em] text-xs font-bold mb-3 block">
              WHY CHOOSE RKPT
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#15325b] tracking-tight">
              A single, accountable operating partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {whyChooseUsData.map((item, index) => (
              <div 
                key={item.title} 
                className={`p-8 border-gray-100 ${index % 2 === 0 ? 'md:border-r' : ''} ${index < whyChooseUsData.length - 2 ? 'border-b' : 'border-b md:border-b-0'}`}
              >
                <h3 className="font-bold text-[#15325b] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
