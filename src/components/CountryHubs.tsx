import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { COUNTRIES_DATA } from '../data/companyData';
import { CountryProfile } from '../types';
import { Check, ArrowRight, Shield, Clock, Percent, Building, Landmark, Award, ChevronRight } from 'lucide-react';

interface CountryHubsProps {
  initialSelectedId?: string | null;
  onSelectCountry: (countryId: string) => void;
  onOpenConsultation: (countryName: string) => void;
}

export const CountryHubs: React.FC<CountryHubsProps> = ({ initialSelectedId, onSelectCountry, onOpenConsultation }) => {

const cardUIData: Record<string, { time: string, legal: string, focus: string, bottom: string, heading: string, sub: string }> = {
  PT: { time: "WET • UTC+0", heading: "Portugal", sub: "EU Business & Company Formation Hub", legal: "LDA", focus: "Setup • Tax • Banking • Immigration", bottom: "LISBON • PORTO" },
  GB: { time: "GMT • UTC+0", heading: "United Kingdom", sub: "UK Business & Technology Hub", legal: "UK LTD", focus: "Setup • Operations • Technology", bottom: "LONDON" },
  IE: { time: "GMT • UTC+0", heading: "Ireland", sub: "EU Business & Technology Hub", legal: "LTD", focus: "CRO Setup • EU Market Access", bottom: "DUBLIN" },
  CH: { time: "CET • UTC+1", heading: "Switzerland", sub: "Swiss Business Hub", legal: "GmbH / AG", focus: "Cantonal Compliance • Banking", bottom: "ZURICH • GENEVA" },
  US: { time: "EST • UTC-5", heading: "USA", sub: "North American Business Hub", legal: "US Entity", focus: "Formation • Banking • Technology", bottom: "REMOTE-FIRST" },
  AE: { time: "GST • UTC+4", heading: "Dubai / UAE", sub: "Middle East Business Hub", legal: "Free Zone / Mainland", focus: "Licensing • Banking • Operations", bottom: "DUBAI" },
  IN: { time: "IST • UTC+5:30", heading: "India", sub: "Technology & Delivery Hub", legal: "PVT LTD", focus: "Development • IT • Outsourcing", bottom: "BANGALORE • DELHI" },
};

  const [selectedCountry, setSelectedCountry] = useState<CountryProfile>(
    initialSelectedId 
      ? COUNTRIES_DATA.find(c => c.id === initialSelectedId) || COUNTRIES_DATA[0]
      : COUNTRIES_DATA[0]
  );

  useEffect(() => {
    if (initialSelectedId) {
      const targetCountry = COUNTRIES_DATA.find(c => c.id === initialSelectedId);
      if (targetCountry) {
        setSelectedCountry(targetCountry);
      }
    }
  }, [initialSelectedId]);

  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="hubs" className="py-20 md:py-28 bg-[#f8fafd] border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#c91c1c] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
            STRATEGIC GEOGRAPHIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0b1b36] tracking-tight mb-6">
            European Expansion Hubs
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            RKPT maintains direct business, compliance and technology capabilities across seven strategic international gateways.
          </p>
        </div>

        {/* Country Selector Cards with KCID Top Border Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {COUNTRIES_DATA.map((country, idx) => {
            const isSelected = selectedCountry.id === country.id;
            // Distinctive top border color matching KCID palette
            const topBorderColor =
              country.id === 'portugal'
                ? 'border-gray-100'
                : country.id === 'switzerland'
                ? 'border-gray-100'
                : 'border-gray-100';

            const ui = cardUIData[country.code] || { time: "UTC", heading: country.name, sub: country.regionalFocus, legal: "Entity", focus: "Business", bottom: country.capital.toUpperCase() };

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={country.id}
              >
              <div
                onClick={() => setSelectedCountry(country)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border text-left relative overflow-hidden bg-white ${
                  isSelected
                    ? 'shadow-md border-gray-300 ring-1 ring-gray-300'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {/* Header Row: Badge & Timezone */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.name} flag`} className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm border border-gray-100" />
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-[#0b1b36] font-bold text-xs tracking-wider">
                      {country.code}
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                    {ui.time}
                  </div>
                </div>

                {/* Country Name & Subheading */}
                <div className="mb-6">
                  <h3 className="text-[22px] font-display font-bold text-[#0b1b36] leading-tight mb-1">
                    {ui.heading}
                  </h3>
                  <p className="text-xs text-[#c91c1c] font-medium tracking-wide">
                    {ui.sub}
                  </p>
                </div>

                {/* Table-like Data */}
                <div className="space-y-4 mb-8 border-t border-b border-gray-100 py-4 mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-light">Legal form</span>
                    <span className="text-[#0b1b36] font-bold text-right text-xs">{ui.legal}</span>
                  </div>
                  <div className="flex items-start justify-between text-xs gap-4 mt-3">
                    <span className="text-gray-400 font-light shrink-0">Focus</span>
                    <span className="text-[#0b1b36] font-bold text-right text-xs">{ui.focus}</span>
                  </div>
                </div>

                {/* Footer Row */}
                <div className="flex items-center justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">
                    {ui.bottom}
                  </span>
                  <span className="text-[#c91c1c] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Country Deep Dossier in KCID Style */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 sm:p-6 transition-all border-t-4 border-[#15325b]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="w-16 h-12 object-cover rounded shadow-md border border-gray-200" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#15325b] uppercase">
                    {selectedCountry.name} Gateway
                  </h3>
                  <span className="hidden sm:inline-block text-xs font-bold px-3 py-1 rounded bg-[#024d87]/10 text-[#024d87] uppercase tracking-wider">
                    Active Registry
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Primary Corporate Focus: <span className="font-bold text-[#15325b]">{selectedCountry.regionalFocus}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectCountry(selectedCountry.id)}
                className="px-5 py-2.5 rounded-md bg-[#15325b] hover:bg-[#1e4a87] text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Calculate Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenConsultation(selectedCountry.name)}
                className="px-5 py-2.5 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs transition-colors shadow-md"
              >
                Inquire for {selectedCountry.name}
              </button>
            </div>
          </div>

          {/* Detailed 4-Column Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
            {/* Legal Entities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#15325b] font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Building className="w-4 h-4 text-[#3273a8]" />
                <span>Entity Structures</span>
              </div>
              <ul className="space-y-2">
                {selectedCountry.structures.map((struct, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                     <Check className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                    <span className="font-bold text-gray-900">{struct}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Advantages */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#15325b] font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#3273a8]" />
                <span>Strategic Advantages</span>
              </div>
              <ul className="space-y-2">
                {selectedCountry.keyAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <Check className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visa & Immigration Alignment */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#15325b] font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Shield className="w-4 h-4 text-[#3273a8]" />
                <span>Visa &amp; Residency Programs</span>
              </div>
              <ul className="space-y-2">
                {selectedCountry.visaAlignment.map((visa, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <Check className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                    <span>{visa}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Banking Support */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#15325b] font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Landmark className="w-4 h-4 text-[#3273a8]" />
                <span>Banking Infrastructure</span>
              </div>
              <ul className="space-y-2">
                {selectedCountry.bankingHighlights.map((bank, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <Check className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                    <span>{bank}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Jurisdiction Summary */}
          <div className="mt-4 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#f8fafd] p-4 rounded-lg text-xs text-gray-600">
            <div>
              <span className="font-bold text-[#15325b] uppercase tracking-wide">RKPT Advisory Note: </span>
              {selectedCountry.summary}
            </div>
          </div>
        </div>

      </div>
      </ScrollReveal>
    </section>
  );
};
