import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { COMPANY_INFO, COUNTRIES_DATA } from '../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  Building,
  Globe,
  FileCheck,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    targetCountry: 'Portugal',
    services: [] as string[],
    timeline: 'Immediate (< 1 Month)',
    message: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => {
        if (!prev.services.includes(prefilledService)) {
          return { ...prev, services: [...prev.services, prefilledService] };
        }
        return prev;
      });
    }
  }, [prefilledService]);

  const availableServices = [
    'Company Formation & Setup',
    'Accounting, VAT & Payroll',
    'Corporate Bank Account Opening',
    'Visa, Residency & Relocation',
    'IT, Web & Digital Software',
    'Business Plan & Market Entry',
  ];

  const handleToggleService = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== svc) : [...prev.services, svc],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `RKPT-EU-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refId);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-gray-900 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="text-[#c91c1c] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
            READY TO EXPAND?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0b1b36] tracking-tight mb-6">
            Let's build your business infrastructure
          </h2>
          <p className="text-base text-gray-500 font-light leading-relaxed">
            Whether you are starting a company, expanding into a new market, improving your operations or strengthening your technology and cybersecurity, RKPT TECH LTD can help you plan the next step.
          </p>
        </div>

        {/* 3 Regional European Offices in KCID Card Style with Crimson Accent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-4">
          {COMPANY_INFO.contact.offices.map((office, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gray-50 border border-gray-200 border-t-4 border-t-[#c91c1c] text-left space-y-3 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#c91c1c] shrink-0" />
                  <h4 className="font-bold text-lg font-display uppercase tracking-tight text-[#15325b]">
                    {office.city}, {office.country}
                  </h4>
                </div>
                <span className="text-sm uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#024d87] text-white">
                  HQ Node
                </span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {office.address}
              </p>

              <div className="pt-2 border-t border-gray-200 text-xs text-[#3273a8] font-bold uppercase tracking-wider">
                Focus: {office.focus}
              </div>
            </div>
          ))}
        </div>

        {/* Form and Direct Coordinates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Left Column: Direct Coordinates & Assurance in KCID Style */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-gray-50 border border-gray-200 border-t-4 border-t-[#3273a8] p-6 sm:p-8 space-y-6 shadow-sm">
              <h4 className="font-display font-extrabold uppercase tracking-tight text-xl text-[#15325b]">
                Direct Contact Channels
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#024d87] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">General &amp; Advisory Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-[#15325b] hover:text-[#c91c1c] font-bold"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#c91c1c] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Regional Telephone Lines</div>
                    <div className="text-xs text-gray-700">
                      <span className="text-gray-500">Portugal: </span>
                      <span className="font-mono font-bold text-[#15325b]">{COMPANY_INFO.contact.phoneEu}</span>
                    </div>
                    <div className="text-xs text-gray-700">
                      <span className="text-gray-500">Switzerland: </span>
                      <span className="font-mono font-bold text-[#15325b]">{COMPANY_INFO.contact.phoneCh}</span>
                    </div>
                    <div className="text-xs text-gray-700">
                      <span className="text-gray-500">Ireland: </span>
                      <span className="font-mono font-bold text-[#15325b]">{COMPANY_INFO.contact.phoneIe}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#024d87] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Advisory Response Protocol</div>
                    <div className="text-xs text-gray-600">
                      All formal inquiries receive senior legal assessment within 24 business hours.
                    </div>
                  </div>
                </div>
              </div>

              {/* NDA Guarantee */}
              <div className="p-4 rounded-lg bg-white border border-gray-200 text-xs text-gray-600 space-y-1 border-l-4 border-l-[#c91c1c]">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#15325b]">
                  <ShieldCheck className="w-4 h-4 text-[#c91c1c]" />
                  <span>Confidentiality &amp; GDPR Guarantee</span>
                </div>
                <p className="text-sm text-gray-500 leading-normal">
                  All shared shareholder details, business models, and financial forecasts are protected under strict EU attorney-client confidentiality and GDPR standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Submission Form in KCID Style */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 border-t-4 border-t-[#c91c1c] p-6 sm:p-8 shadow-xl">
            {submittedRef ? (
              <div className="py-4 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#c91c1c] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#15325b]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-[#15325b] uppercase">{formData.fullName}</span>. Your brief has been dispatched directly to the RKPT senior partner desk.
                </p>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 max-w-xs mx-auto text-xs">
                  <div className="text-gray-500 uppercase font-bold tracking-wider">Inquiry Reference Number:</div>
                  <div className="text-base font-mono font-bold text-[#c91c1c] mt-0.5">
                    {submittedRef}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      companyName: '',
                      targetCountry: 'Portugal',
                      services: [],
                      timeline: 'Immediate (< 1 Month)',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-xs font-bold uppercase tracking-wider text-white shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-extrabold font-display uppercase tracking-tight text-lg text-[#15325b]">
                    Tell us about your business
                  </h4>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Marcus Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="m.vance@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                </div>

                {/* Company Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Company / Venture Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+44 20 7946 0912"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                </div>

                {/* Country & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Target Jurisdiction
                    </label>
                    <select
                      value={formData.targetCountry}
                      onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    >
                      <option value="Portugal">🇵🇹 Portugal (LDA, NHR, Startup/Golden Visa)</option>
                      <option value="Switzerland">🇨🇭 Switzerland (GmbH/AG, Cantonal)</option>
                      <option value="Ireland">🇮🇪 Ireland (LTD, CRO)</option>
                      <option value="Multi-Country / Need Guidance">Multi-Country / Need Comparative Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    >
                      <option value="Immediate (< 1 Month)">Immediate (Next 1 - 3 Weeks)</option>
                      <option value="1 - 3 Months">1 – 3 Months</option>
                      <option value="3 - 6 Months">3 – 6 Months</option>
                      <option value="Planning / Exploratory">Preliminary Feasibility Phase</option>
                    </select>
                  </div>
                </div>

                {/* Services Checkbox Tags */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Services of Interest (Select all that apply):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((svc) => {
                      const isSelected = formData.services.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleToggleService(svc)}
                          className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider border transition-all ${
                            isSelected
                              ? 'bg-[#c91c1c] text-white border-[#c91c1c] shadow-xs'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#3273a8]'
                          }`}
                        >
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Project Brief / Operational Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your business model, shareholder nationalities, planned banking volumes, or specific licensing requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#c91c1c]/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Brief...' : 'Request Official Consultation'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
          </ScrollReveal>
</section>
  );
};
