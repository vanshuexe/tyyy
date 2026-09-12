import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const audiences = [
  'Individuals and entrepreneurs',
  'Startups and founders',
  'Small and medium-sized businesses',
  'Established companies',
  'International companies',
  'Investors',
  'IT and SaaS businesses',
  'Professional services firms',
  'Manufacturing and trading businesses',
  'Healthcare and life sciences',
  'Hospitality and tourism',
  'FinTech and technology businesses'
];

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#c91c1c] uppercase tracking-[0.15em] text-xs font-bold mb-3 block">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#15325b] tracking-tight">
              Built for businesses at every stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {audiences.map((item, index) => (
              <div 
                key={item} 
                className={`py-6 border-gray-200 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ${index < audiences.length - 2 ? 'border-b' : 'border-b md:border-b-0'}`}
              >
                <span className="font-bold text-[#15325b] text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
