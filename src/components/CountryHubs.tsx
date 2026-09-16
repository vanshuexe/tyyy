import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { COUNTRIES_DATA } from '../data/companyData';
import { CountryProfile } from '../types';
import { Check, ArrowRight, Shield, Clock, Percent, Building, Landmark, Award, ChevronRight } from 'lucide-react';

interface CountryHubsProps {
  onSelectCountry: (countryId: string) => void;
  onOpenConsultation: (countryName: string) => void;
}

export const CountryHubs: React.FC<CountryHubsProps> = ({ onSelectCountry, onOpenConsultation }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryProfile>(COUNTRIES_DATA[0]);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="hubs" className="py-20 bg-[#f8fafd] border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#c91c1c] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
            STRATEGIC GEOGRAPHIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0b1b36] tracking-tight mb-6">
            Global business hubs
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            RKPT maintains direct business, compliance and technology capabilities across seven strategic international gateways.
          </p>
        </div>

        {/* Country Selector Cards with KCID Top Border Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {COUNTRIES_DATA.map((country) => {
            const isSelected = selectedCountry.id === country.id;
            // Distinctive top border color matching KCID palette
            const topBorderColor =
              country.id === 'portugal'
                ? 'border-gray-100'
                : country.id === 'switzerland'
                ? 'border-gray-100'
                : 'border-gray-100';

            return (
              <div
                key={country.id}
                onClick={() => setSelectedCountry(country)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-200 border text-left relative overflow-hidden bg-white ${topBorderColor} ${
                  isSelected
                    ? 'shadow-md ring-1 ring-[#0b1b36] border-gray-100'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={country.flag} alt={`${country.name} flag`} className="w-8 h-6 object-cover rounded-sm border border-gray-200 shadow-sm" />
                    <div>
                      <h3 className="text-2xl font-display font-medium text-[#0b1b36] leading-none">
                        {country.name}
                      </h3>
                      <span className="text-xs text-[#3273a8] font-bold tracking-wider uppercase mt-1 block">
                        {country.capital} Hub
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#15325b]/10 text-[#15325b]">
                    {country.code}
                  </span>
                </div>

                <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                  {country.regionalFocus}
                </p>

                {/* Key Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 text-xs">
                  <div className="flex items-center gap-1.5 text-gray-700">
                    <Clock className="w-3.5 h-3.5 text-[#3273a8] shrink-0" />
                    <span className="font-medium">{country.formationTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700 font-bold">
                    <Percent className="w-3.5 h-3.5 text-[#c91c1c] shrink-0" />
                    <span>CIT: {country.corporateTaxRate}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#15325b] group-hover:text-[#c91c1c]">
                  <span>View jurisdiction profile</span>
                  <ChevronRight className={`w-4 h-4 text-[#3273a8] transition-transform ${isSelected ? 'translate-x-1 text-[#c91c1c]' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Country Deep Dossier in KCID Style */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 sm:p-10 transition-all border-t-4 border-[#15325b]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-100">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {/* Legal Entities */}
            <div className="space-y-3">
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
            <div className="space-y-3">
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
            <div className="space-y-3">
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
            <div className="space-y-3">
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
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#f8fafd] p-4 rounded-lg text-xs text-gray-600">
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
