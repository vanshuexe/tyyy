import React, { useState, useMemo } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { COUNTRIES_DATA } from '../data/companyData';
import { EstimatorState } from '../types';
import {
  Check,
  Building2,
  Landmark,
  FileSpreadsheet,
  Globe2,
  Users,
  Compass,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface ExpansionCalculatorProps {
  initialCountry?: 'portugal' | 'switzerland' | 'ireland';
  onProceedWithScope: (summary: string) => void;
}

export const ExpansionCalculator: React.FC<ExpansionCalculatorProps> = ({
  initialCountry = 'portugal',
  onProceedWithScope,
}) => {
  const [state, setState] = useState<EstimatorState>({
    country: initialCountry,
    structure: 'LDA (Limitada)',
    bankingSupport: true,
    registeredOffice: true,
    accountingTax: true,
    visaRelocation: false,
    itDigital: false,
    advisoryPlan: false,
    businessSize: 'startup',
  });

  // Keep structure synced when country changes
  const handleCountryChange = (c: 'portugal' | 'switzerland' | 'ireland') => {
    const countryData = COUNTRIES_DATA.find((x) => x.id === c);
    setState((prev) => ({
      ...prev,
      country: c,
      structure: countryData?.structures[0] || 'Standard Limited',
    }));
  };

  const currentCountry = COUNTRIES_DATA.find((c) => c.id === state.country) || COUNTRIES_DATA[0];

  // Dynamic calculations based on selections
  const calculation = useMemo(() => {
    let baseDaysMin = 3;
    let baseDaysMax = 7;
    let baseFeeMin = 1800;
    let baseFeeMax = 2800;

    if (state.country === 'switzerland') {
      baseDaysMin = 7;
      baseDaysMax = 14;
      baseFeeMin = 3400;
      baseFeeMax = 5200;
    } else if (state.country === 'ireland') {
      baseDaysMin = 3;
      baseDaysMax = 5;
      baseFeeMin = 1900;
      baseFeeMax = 2900;
    }

    // Addons
    if (state.bankingSupport) {
      baseFeeMin += 600;
      baseFeeMax += 1100;
    }
    if (state.registeredOffice) {
      baseFeeMin += 450;
      baseFeeMax += 850;
    }
    if (state.accountingTax) {
      baseFeeMin += 900;
      baseFeeMax += 1600;
    }
    if (state.visaRelocation) {
      baseFeeMin += 1200;
      baseFeeMax += 2200;
      baseDaysMax += 7;
    }
    if (state.itDigital) {
      baseFeeMin += 1500;
      baseFeeMax += 3200;
    }
    if (state.advisoryPlan) {
      baseFeeMin += 800;
      baseFeeMax += 1600;
    }

    // Multiplier for size
    let multiplier = 1.0;
    if (state.businessSize === 'sme') multiplier = 1.25;
    if (state.businessSize === 'enterprise') multiplier = 1.6;

    const deliverablesList = [
      `Complete ${state.structure} registration with official registrar`,
      `Tax Identification (NIF / TIN / UID) and fiscal representative setup`,
      'Articles of Association drafted in dual language',
    ];

    if (state.bankingSupport) {
      deliverablesList.push('Dedicated European Corporate IBAN & multi-currency account setup');
    }
    if (state.registeredOffice) {
      deliverablesList.push(`Prestigious registered address & mail scanning in ${currentCountry.capital}`);
    }
    if (state.accountingTax) {
      deliverablesList.push('Initial VAT registration & quarterly bookkeeping setup');
    }
    if (state.visaRelocation) {
      deliverablesList.push('Immigration petition & residency permit filing dossiers');
    }
    if (state.itDigital) {
      deliverablesList.push('GDPR-compliant corporate website or digital portal');
    }
    if (state.advisoryPlan) {
      deliverablesList.push('Comprehensive European Market Entry & 5-year financial plan');
    }

    const currencySymbol = state.country === 'switzerland' ? 'CHF' : '€';

    return {
      timeline: `${baseDaysMin} - ${baseDaysMax} Business Days`,
      feeRange: `${currencySymbol}${Math.round(baseFeeMin * multiplier).toLocaleString()} – ${currencySymbol}${Math.round(
        baseFeeMax * multiplier
      ).toLocaleString()}`,
      deliverables: deliverablesList,
    };
  }, [state, currentCountry]);

  const handleApplyScope = () => {
    const summary = `${currentCountry.name} (${state.structure}) | Add-ons: ${[
      state.bankingSupport && 'Banking',
      state.registeredOffice && 'Registered Office',
      state.accountingTax && 'Accounting & VAT',
      state.visaRelocation && 'Visa/Immigration',
      state.itDigital && 'IT/Digital',
      state.advisoryPlan && 'Market Entry Advisory',
    ]
      .filter(Boolean)
      .join(', ')} | Scale: ${state.businessSize.toUpperCase()}`;

    onProceedWithScope(summary);
  };

  return (
    <section id="estimator" className="py-20 bg-white text-gray-900 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
            Interactive Planning Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#15325b] uppercase tracking-tight">
            EU Expansion Scope &amp; Setup Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Configure your European expansion parameters across Portugal, Switzerland, and Ireland to generate an instant scope blueprint.
          </p>
        </div>

        {/* Planner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Panel in KCID Light Style */}
          <div className="lg:col-span-7 bg-gray-50 rounded-xl border border-gray-200 p-6 sm:p-8 space-y-6 border-t-4 border-t-[#3273a8] shadow-sm">
            {/* Step 1: Destination Country */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                1. Select Destination Jurisdiction:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {COUNTRIES_DATA.map((c) => {
                  const isSelected = state.country === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleCountryChange(c.id as any)}
                      className={`p-3.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white border-2 border-[#3273a8] text-[#15325b] shadow-md ring-2 ring-[#3273a8]/20'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-[#3273a8]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <img src={c.flag} alt={`${c.name} flag`} className="w-8 h-6 object-cover rounded-sm shadow-sm border border-gray-200" />
                        {isSelected && <Check className="w-4 h-4 text-[#3273a8]" />}
                      </div>
                      <div className="mt-2">
                        <div className="font-bold text-sm uppercase text-[#15325b]">{c.name}</div>
                        <div className="text-[11px] text-gray-500 font-semibold">CIT: {c.corporateTaxRate}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Corporate Structure */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                2. Corporate Structure ({currentCountry.name}):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentCountry.structures.map((struct) => {
                  const isSelected = state.structure === struct;
                  return (
                    <button
                      key={struct}
                      type="button"
                      onClick={() => setState((prev) => ({ ...prev, structure: struct }))}
                      className={`p-3 rounded-md border text-left text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#c91c1c] text-white border-[#c91c1c] shadow-sm'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-[#3273a8]'
                      }`}
                    >
                      <span>{struct}</span>
                      {isSelected && <Check className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Integrated Service Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                3. Select Integrated Support Services:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Banking Support */}
                <div
                  onClick={() => setState((p) => ({ ...p, bankingSupport: !p.bankingSupport }))}
                  className={`cursor-pointer p-3.5 rounded-lg border text-xs flex items-start gap-3 transition-all ${
                    state.bankingSupport
                      ? 'bg-white border-2 border-[#3273a8] text-[#15325b] shadow-xs'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                      state.bankingSupport ? 'bg-[#c91c1c] border-[#c91c1c] text-white' : 'border-gray-300'
                    }`}
                  >
                    {state.bankingSupport && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-[#15325b]">Corporate Banking Setup</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Tier-1 European IBAN &amp; digital EMI accounts</div>
                  </div>
                </div>

                {/* Registered Office */}
                <div
                  onClick={() => setState((p) => ({ ...p, registeredOffice: !p.registeredOffice }))}
                  className={`cursor-pointer p-3.5 rounded-lg border text-xs flex items-start gap-3 transition-all ${
                    state.registeredOffice
                      ? 'bg-white border-2 border-[#3273a8] text-[#15325b] shadow-xs'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                      state.registeredOffice ? 'bg-[#c91c1c] border-[#c91c1c] text-white' : 'border-gray-300'
                    }`}
                  >
                    {state.registeredOffice && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-[#15325b]">Registered Office Address</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Prestigious {currentCountry.capital} business domicile</div>
                  </div>
                </div>

                {/* Accounting & Tax */}
                <div
                  onClick={() => setState((p) => ({ ...p, accountingTax: !p.accountingTax }))}
                  className={`cursor-pointer p-3.5 rounded-lg border text-xs flex items-start gap-3 transition-all ${
                    state.accountingTax
                      ? 'bg-white border-2 border-[#3273a8] text-[#15325b] shadow-xs'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                      state.accountingTax ? 'bg-[#c91c1c] border-[#c91c1c] text-white' : 'border-gray-300'
                    }`}
                  >
                    {state.accountingTax && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-[#15325b]">Accounting, VAT &amp; Payroll</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Full-cycle statutory bookkeeping &amp; tax returns</div>
                  </div>
                </div>

                {/* Visa & Relocation */}
                <div
                  onClick={() => setState((p) => ({ ...p, visaRelocation: !p.visaRelocation }))}
                  className={`cursor-pointer p-3.5 rounded-lg border text-xs flex items-start gap-3 transition-all ${
                    state.visaRelocation
                      ? 'bg-white border-2 border-[#3273a8] text-[#15325b] shadow-xs'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                      state.visaRelocation ? 'bg-[#c91c1c] border-[#c91c1c] text-white' : 'border-gray-300'
                    }`}
                  >
                    {state.visaRelocation && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-[#15325b]">Visa &amp; Residency Support</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Director permits, Golden Visa, D8 or CSEP</div>
                  </div>
                </div>

                {/* IT & Digital Solutions */}
                <div
                  onClick={() => setState((p) => ({ ...p, itDigital: !p.itDigital }))}
                  className={`cursor-pointer p-3.5 rounded-lg border text-xs flex items-start gap-3 transition-all ${
                    state.itDigital
                      ? 'bg-white border-2 border-[#3273a8] text-[#15325b] shadow-xs'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                      state.itDigital ? 'bg-[#c91c1c] border-[#c91c1c] text-white' : 'border-gray-300'
                    }`}
                  >
                    {state.itDigital && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-[#15325b]">IT &amp; Digital Solutions</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">GDPR corporate website, mobile app or ERP</div>
                  </div>
                </div>

                {/* Advisory Plan */}
                <div
                  onClick={() => setState((p) => ({ ...p, advisoryPlan: !p.advisoryPlan }))}
                  className={`cursor-pointer p-3.5 rounded-lg border text-xs flex items-start gap-3 transition-all ${
                    state.advisoryPlan
                      ? 'bg-white border-2 border-[#3273a8] text-[#15325b] shadow-xs'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                      state.advisoryPlan ? 'bg-[#c91c1c] border-[#c91c1c] text-white' : 'border-gray-300'
                    }`}
                  >
                    {state.advisoryPlan && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <div className="font-bold text-[#15325b]">Business Plan &amp; Market Entry</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">EU market feasibility &amp; financial modeling</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Company Scale */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                4. Operational Scale:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'solo', label: 'Solo Founder' },
                  { id: 'startup', label: 'Startup (< 10)' },
                  { id: 'sme', label: 'SME (10-50)' },
                  { id: 'enterprise', label: 'Enterprise (50+)' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setState((p) => ({ ...p, businessSize: s.id as any }))}
                    className={`py-2 px-2 rounded-md text-xs font-bold uppercase tracking-wider border text-center transition-all ${
                      state.businessSize === s.id
                        ? 'bg-[#15325b] text-white border-[#15325b] shadow-xs'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-[#3273a8]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Summary Blueprint in Clean White KCID Style with Crimson Top Accent */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="rounded-xl bg-white border border-gray-200 border-t-4 border-t-[#c91c1c] p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <div className="text-[11px] uppercase font-bold text-[#3273a8] tracking-widest">
                    Calculated Expansion Blueprint
                  </div>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#15325b] mt-0.5">
                    {currentCountry.name} Setup Package
                  </h3>
                </div>
                <img src={currentCountry.flag} alt={`${currentCountry.name} flag`} className="w-10 h-7 object-cover rounded shadow-sm border border-gray-200" />
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Estimated Timeline:</span>
                  <div className="text-lg font-bold text-[#15325b] mt-0.5">{calculation.timeline}</div>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Estimated Scope:</span>
                  <div className="text-lg font-bold text-[#c91c1c] mt-0.5">{calculation.feeRange}</div>
                </div>
              </div>

              {/* Selected Entity */}
              <div className="text-xs text-gray-700">
                <span className="text-gray-500">Legal Entity: </span>
                <span className="font-bold text-[#15325b] uppercase">{state.structure}</span>
                <span className="text-gray-500"> in </span>
                <span className="font-bold text-[#15325b] uppercase">{currentCountry.capital}, {currentCountry.name}</span>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                  Scope Deliverables Included ({calculation.deliverables.length}):
                </h4>
                <ul className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {calculation.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <div className="w-4 h-4 rounded bg-[#c91c1c] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApplyScope}
                className="w-full py-3.5 px-6 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#c91c1c]/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>Submit Blueprint for Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                <span>Official registry fees &amp; notarization separate</span>
                <button
                  onClick={() =>
                    setState({
                      country: 'portugal',
                      structure: 'LDA (Limitada)',
                      bankingSupport: true,
                      registeredOffice: true,
                      accountingTax: true,
                      visaRelocation: false,
                      itDigital: false,
                      advisoryPlan: false,
                      businessSize: 'startup',
                    })
                  }
                  className="hover:text-[#15325b] flex items-center gap-1 uppercase tracking-wider text-xs font-bold text-[#3273a8]"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
          </ScrollReveal>
</section>
  );
};
