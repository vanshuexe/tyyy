import React, { useState } from 'react';
import { ComplianceBadge } from './ComplianceBadge';
import { COMPANY_INFO, LEGAL_DISCLAIMER } from '../data/companyData';
import { ArrowUp, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAnchor = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate(anchorId);
    }
  };

  return (
    <footer className="bg-[#0b1b36] text-gray-400 text-xs border-t-4 border-[#c91c1c]">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="focus:outline-none text-left">
              <span className="text-xl sm:text-2xl font-bold font-display text-white tracking-wider block">
                RKPT TECH LTD
              </span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm font-bold tracking-wider">
              BUSINESS. TECHNOLOGY. COMPLIANCE. GROWTH.
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Global business consulting and technology solutions firm helping entrepreneurs, startups and established companies establish, expand and operate businesses across international markets.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <div>Email: <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-white hover:text-[#c91c1c]">{COMPANY_INFO.contact.email}</a></div>
              <div>Phone: <span className="text-white">{COMPANY_INFO.contact.phoneEu}</span></div>
            </div>
          </div>

          {/* Col 3: Global Hubs */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-white/10 pb-2">
              Global Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              {['Portugal', 'UK', 'Ireland', 'Switzerland', 'USA', 'Dubai / UAE', 'India'].map((hub) => (
                <li key={hub}>
                  <button
                    onClick={() => scrollToAnchor('global-hubs')}
                    className="hover:text-white text-gray-400 transition-colors text-left cursor-pointer"
                  >
                    {hub}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Business Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-white/10 pb-2">
              Business Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {[
                'Company Formation',
                'Legal & Compliance',
                'Accounting & Tax',
                'Business Banking & Payments',
                'Immigration & Relocation',
                'Business Advisory',
              ].map((srv) => (
                <li key={srv}>
                  <button
                    onClick={() => scrollToAnchor('business-services')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Technology */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-white/10 pb-2">
              Technology
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {[
                'IT Support',
                'AI Integration',
                'Software Development',
                'Website & Digital Solutions',
                'ERP & CRM Solutions',
                'Cloud Solutions',
                'Business Automation',
                'Cybersecurity',
              ].map((tech) => (
                <li key={tech}>
                  <button
                    onClick={() => scrollToAnchor('technology')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {tech}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Toggle Section */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <button
            onClick={() => setShowDisclaimer(!showDisclaimer)}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-white font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#c91c1c]" />
            <span>Legal / Service Disclaimer</span>
            {showDisclaimer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showDisclaimer && (
            <div className="mt-4 p-5 rounded-xl bg-black/20 border border-white/10 text-gray-400 text-xs leading-relaxed space-y-3">
              <p>{LEGAL_DISCLAIMER}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Links & Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 font-medium">
            <button onClick={() => scrollToAnchor('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToAnchor('business-services')} className="hover:text-white transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToAnchor('global-hubs')} className="hover:text-white transition-colors cursor-pointer">Global Hubs</button>
            <button onClick={() => setShowDisclaimer(true)} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => setShowDisclaimer(true)} className="hover:text-white transition-colors cursor-pointer">Cookie Policy</button>
            <button onClick={() => setShowDisclaimer(true)} className="hover:text-white transition-colors cursor-pointer">Terms</button>
            <button onClick={() => setShowDisclaimer(!showDisclaimer)} className="hover:text-white transition-colors cursor-pointer">Legal Disclaimer</button>
            <button onClick={() => scrollToAnchor('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button>
          </div>

          <div className="flex items-center gap-4">
            <span>© RKPT TECH LTD. All rights reserved.</span>
            <ComplianceBadge />
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white/10 hover:bg-white hover:text-[#0b1b36] text-gray-300 transition-colors ml-2 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
