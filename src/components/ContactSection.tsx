import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { COMPANY_INFO, CONSULTATION_CATEGORIES } from '../data/companyData';
import {
  Phone,
  Mail,
  CheckCircle2,
  Send,
  Calendar,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    currentCountry: '',
    targetHub: 'Portugal',
    entityType: 'Business',
    serviceRequired: 'Company Formation',
    industry: '',
    description: '',
    contactMethod: 'Email',
    preferredDateTime: '',
    consent: false,
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: prefilledService,
      }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please accept the privacy policy to submit your enquiry.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      const refId = `RKPT-REF-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refId);
      setIsSubmitting(false);
    }, 600);
  };

  const scrollToForm = () => {
    const el = document.getElementById('consultation-form-card');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50/70 text-gray-900 border-b border-gray-200 scroll-mt-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION 12: CALL TO ACTION */}
          <div className="bg-[#0b1b36] rounded-3xl p-8 sm:p-12 lg:p-16 text-white mb-14 sm:mb-20 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-3 block">
                GLOBAL INFRASTRUCTURE PARTNER
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight mb-4 leading-tight">
                Let's Build Your Business Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8">
                Whether you are starting a company, expanding into a new market, improving your operations or strengthening your technology and cybersecurity, RKPT TECH LTD can help you plan the next step.
              </p>

              {/* Consultation Categories */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                  Consultation Categories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {CONSULTATION_CATEGORIES.map((cat) => (
                    <span
                      key={cat}
                      className="bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-200 transition-colors"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, description: 'Requesting an indicative quote...' }));
                    scrollToForm();
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>REQUEST A QUOTE</span>
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 13: CONTACT / ENQUIRY FORM */}
          <div id="consultation-form-card" className="scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#c91c1c] uppercase tracking-widest text-xs font-bold mb-2 block">
                START CONVERSATION
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-[#0b1b36] tracking-tight">
                Start Your Consultation
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-light">
                Provide your requirements below and our cross-border advisory desk will respond with a tailored roadmap.
              </p>
            </div>

            {/* Direct Contact Buttons (Email | Phone | WhatsApp | Book Online) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-[#0b1b36] hover:border-[#c91c1c] hover:text-[#c91c1c] shadow-xs transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c91c1c]" />
                <span>Email</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.contact.phoneEu}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-[#0b1b36] hover:border-[#c91c1c] hover:text-[#c91c1c] shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0b1b36]" />
                <span>Phone</span>
              </a>
              <a
                href="https://wa.me/351210008920"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-[#0b1b36] hover:border-emerald-600 hover:text-emerald-600 shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-[#0b1b36] hover:border-[#c91c1c] hover:text-[#c91c1c] shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#3273a8]" />
                <span>Book Online</span>
              </button>
            </div>

            {/* Form Card */}
            <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200/90 shadow-md p-6 sm:p-10">
              {submittedRef ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-[#0b1b36]">
                    Enquiry Successfully Received
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#0b1b36]">{formData.fullName}</span>. Your consultation enquiry has been dispatched directly to our advisory desk.
                  </p>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 max-w-xs mx-auto text-xs">
                    <div className="text-gray-500 uppercase font-bold tracking-wider">Reference Code:</div>
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
                        companyName: '',
                        email: '',
                        phone: '',
                        currentCountry: '',
                        targetHub: 'Portugal',
                        entityType: 'Business',
                        serviceRequired: 'Company Formation',
                        industry: '',
                        description: '',
                        contactMethod: 'Email',
                        preferredDateTime: '',
                        consent: false,
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-[#0b1b36] hover:bg-[#15325b] text-xs font-bold uppercase tracking-wider text-white shadow-sm cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Marcus Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Apex Global Ventures"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="marcus@apex.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+44 20 7946 0912"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Current Country & Target Hub */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Current Country *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. United Kingdom"
                        value={formData.currentCountry}
                        onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Target Country / Hub *
                      </label>
                      <select
                        value={formData.targetHub}
                        onChange={(e) => setFormData({ ...formData, targetHub: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      >
                        <option value="Portugal">Portugal (EU Business & Formation Hub)</option>
                        <option value="UK">UK (Business & Technology Hub)</option>
                        <option value="Ireland">Ireland (EU Business & Tech Hub)</option>
                        <option value="Switzerland">Switzerland (Swiss Business Hub)</option>
                        <option value="USA">USA (North American Hub)</option>
                        <option value="Dubai / UAE">Dubai / UAE (Middle East Hub)</option>
                        <option value="India">India (Technology & Delivery Hub)</option>
                        <option value="Multi-Hub">Multi-Hub / Need Comparative Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Individual or Business & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Individual or Business
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Individual', 'Business'].map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, entityType: type })}
                            className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                              formData.entityType === type
                                ? 'bg-[#0b1b36] text-white border-[#0b1b36]'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      >
                        <option value="Company Formation & Setup">Company Formation & Business Setup</option>
                        <option value="Legal, Regulatory & Compliance">Legal, Regulatory & Compliance Support</option>
                        <option value="Accounting & Tax">Accounting & Tax</option>
                        <option value="Business Banking & Payments">Business Banking & Payments</option>
                        <option value="Immigration & Relocation">Immigration & Relocation</option>
                        <option value="Business Consulting & Advisory">Business Consulting & Advisory</option>
                        <option value="IT Support & Managed IT">IT Support & Managed IT</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Website & Digital Solutions">Website & Digital Solutions</option>
                        <option value="ERP & CRM Solutions">ERP & CRM Solutions</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Business Type / Industry & Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Business Type / Industry
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. FinTech, SaaS, Professional Services"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Email', 'Phone', 'WhatsApp'].map((method) => (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setFormData({ ...formData, contactMethod: method })}
                            className={`py-2.5 px-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                              formData.contactMethod === method
                                ? 'bg-[#c91c1c] text-white border-[#c91c1c]'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date/Time */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Preferred Consultation Date / Time Window
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next Tuesday morning (CET) or Immediate"
                      value={formData.preferredDateTime}
                      onChange={(e) => setFormData({ ...formData, preferredDateTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>

                  {/* Brief Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Brief Description of Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your objectives, planned timelines, or technical specifications..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      id="privacy-consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#c91c1c] focus:ring-[#c91c1c]"
                    />
                    <label htmlFor="privacy-consent" className="text-xs text-gray-600 leading-relaxed">
                      I consent to RKPT TECH LTD collecting and processing my data in accordance with its Privacy Policy to review my business requirements and arrange my consultation.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Enquiry...' : 'SUBMIT ENQUIRY'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
                    <span>Confidential inquiry • Response within 24 business hours • Non-disclosure assurance</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
