import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const matrixData = [
  {
    id: 'pt',
    name: 'Portugal',
    code: 'PT',
    sub: 'EU Business & Company Formation Hub',
    legal: 'Unipessoal Lda / Lda',
    capital: 'From €1',
    time: 'Same day-10 days',
    visa: 'D2 Visa / Golden Visa',
    pr: '5 years',
    banking: '1-4+ weeks',
    note: 'RCBE beneficial ownership within 30 days. Certified accountant required for organised accounting.',
    color: 'border-t-[#3b82f6]'
  },
  {
    id: 'gb',
    name: 'United Kingdom',
    code: 'GB',
    sub: 'UK Business & Technology Hub',
    legal: 'Private Company Limited by Shares (Ltd)',
    capital: 'No general minimum',
    time: '~24 hours',
    visa: 'Innovator Founder Visa',
    pr: '3 years',
    banking: '1-4+ weeks',
    note: 'All directors and PSCs must verify identity. Confirmation statement required yearly.',
    color: 'border-t-[#3b82f6]'
  },
  {
    id: 'ie',
    name: 'Ireland',
    code: 'IE',
    sub: 'EU Business & Technology Hub',
    legal: 'Private Company Limited by Shares (LTD)',
    capital: 'No general minimum',
    time: '5-10 working days',
    visa: 'STEP',
    pr: '5 years',
    banking: '1-4+ weeks',
    note: 'Section 137 bond required if no EEA-resident director.',
    color: 'border-t-[#14b8a6]'
  },
  {
    id: 'ch',
    name: 'Switzerland',
    code: 'CH',
    sub: 'Swiss Business Hub',
    legal: 'GmbH / Sàrl / Sagl',
    capital: 'CHF 20,000 (fully paid)',
    time: '5-60 days',
    visa: 'Quota-based',
    pr: '10 years',
    banking: '1-4+ weeks',
    note: 'Employer must prove no Swiss/EU candidate for work permits.',
    color: 'border-t-[#ef4444]'
  },
  {
    id: 'us',
    name: 'United States',
    code: 'US',
    sub: 'North American Business Hub',
    legal: 'LLC / Corporation (state-level)',
    capital: 'No general minimum',
    time: '1-6+ weeks',
    visa: 'E-2 Treaty Investor',
    pr: '5 years (Green Card)',
    banking: '1-6+ weeks',
    note: 'BOI reporting required. Form 5472 for foreign-owned entities.',
    color: 'border-t-[#3b82f6]'
  },
  {
    id: 'ae',
    name: 'UAE / Dubai',
    code: 'AE',
    sub: 'Middle East Business Hub',
    legal: 'Mainland LLC / Free Zone Entity',
    capital: 'Activity-dependent',
    time: '3-15+ working days',
    visa: 'Investor/Partner Visa',
    pr: '10 years (Golden Visa)',
    banking: '1-6+ weeks',
    note: 'Mainland vs Free Zone decision critical. Sole owners no minimum property value for visa.',
    color: 'border-t-[#14b8a6]'
  },
  {
    id: 'in',
    name: 'India',
    code: 'IN',
    sub: 'Technology & Delivery Hub',
    legal: 'Private Limited Company',
    capital: 'No universal minimum',
    time: '1-3 weeks',
    visa: 'Startup India Recognition',
    pr: '5 years',
    banking: '1-2 weeks',
    note: 'FC-GPR filing with RBI within 30 days of share allotment. FEMA/FDI compliance required.',
    color: 'border-t-[#22c55e]'
  }
];

export const CountryMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = matrixData.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.sub.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 md:py-28 bg-[#f8fafd] min-h-screen">
      <ScrollReveal>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Control Bar */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Search:</span>
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Type to filter..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3273a8]/20 focus:border-[#3273a8] transition-all"
                />
              </div>
            </div>
            
            {/* Nav Pills Simulator */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              <button className="px-4 py-2 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">
                Comparison
              </button>
              <button className="px-4 py-2 rounded-lg text-xs font-bold text-[#3273a8] bg-[#3273a8]/10 transition-colors whitespace-nowrap border border-[#3273a8]/20">
                Country Details
              </button>
              <button className="px-4 py-2 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">
                Timelines
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6">
            {filteredData.map((country, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={country.id}
              >
              <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full border-t-4 ${country.color}`}>
                <div className="p-6 flex-1">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={country.name} className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm border border-gray-100" />
                    <h3 className="font-display font-bold text-lg text-[#0b1b36]">{country.name}</h3>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-8">
                    {country.sub}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Legal Form</span>
                      <span className="text-xs text-[#0b1b36] font-bold text-right">{country.legal}</span>
                    </div>
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Capital</span>
                      <span className="text-xs text-[#0b1b36] font-bold text-right">{country.capital}</span>
                    </div>
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Formation Time</span>
                      <span className="text-xs text-[#0b1b36] font-bold text-right">{country.time}</span>
                    </div>
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Visa Route</span>
                      <span className="text-xs text-[#0b1b36] font-bold text-right">{country.visa}</span>
                    </div>
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Path to PR</span>
                      <span className="text-xs text-[#0b1b36] font-bold text-right">{country.pr}</span>
                    </div>
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Banking</span>
                      <span className="text-xs text-[#0b1b36] font-bold text-right">{country.banking}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="bg-gray-50 p-4 border-t border-gray-100 mt-auto">
                  <p className="text-xs leading-relaxed text-gray-500 font-medium">
                    {country.note}
                  </p>
                </div>
              </div>
              </motion.div>
            ))}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};
