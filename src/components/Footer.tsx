import React from 'react';
import { Logo } from './Logo';
import { ComplianceBadge } from './ComplianceBadge';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Mail, Phone, MapPin, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-700 text-xs border-t-4 border-t-[#c91c1c]">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="focus:outline-none cursor-pointer text-left"
            >
              <Logo variant="light" size="md" />
            </button>
            <div className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              <span className="font-bold">BUSINESS. TECHNOLOGY. COMPLIANCE. GROWTH.</span>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed max-w-sm">
              Information on this website is provided for general information and business-support purposes. Company-formation requirements, tax rules, immigration requirements, licensing conditions, banking requirements and regulatory obligations vary by jurisdiction, business activity and individual circumstances. Government authorities, banks and regulated institutions make their own decisions and may request additional documentation. Processing times are indicative and are not guarantees.
            </p>
            <p className="text-gray-500 text-[11px] leading-relaxed max-w-sm">
              RKPT TECH LTD does not guarantee company registration, bank-account approval, tax registration, visa approval, immigration approval or any other third-party decision. Where regulated legal, tax, accounting, immigration or other professional advice is required, RKPT TECH LTD may coordinate with appropriately qualified professionals.
            </p>
          </div>

          {/* Col 3: Focus Hubs */}
          <div className="space-y-3">
            <h4 className="text-[#15325b] font-bold text-xs uppercase tracking-wider border-b border-gray-200 pb-2">
              Global Hubs
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  Portugal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  UK
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  Ireland
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  Switzerland
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  USA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  Dubai/UAE
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  India
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('estimator')}
                  className="text-[#3273a8] hover:text-[#c91c1c] transition-colors font-bold uppercase tracking-wider text-[11px] block mt-1 text-left cursor-pointer"
                >
                  → Interactive Scope Planner
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-[#15325b] font-bold text-xs uppercase tracking-wider border-b border-gray-200 pb-2">
              Business Services
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Company Formation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Legal &amp; Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Accounting &amp; Tax
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Banking &amp; Payments
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Immigration &amp; Relocation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Business Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Technology */}
          <div className="space-y-3">
            <h4 className="text-[#15325b] font-bold text-xs uppercase tracking-wider border-b border-gray-200 pb-2">
              Technology
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  IT Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  AI Integration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Website &amp; Digital Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  ERP &amp; CRM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Cloud Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Business Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Cybersecurity
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Compliance & Copyright */}
      <div className="border-t border-gray-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} RKPT TECH LTD. All rights reserved. &bull; Your Gateway to Europe.
          </div>
          <div className="flex items-center gap-4">
            <ComplianceBadge />
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-gray-100 hover:bg-[#c91c1c] hover:text-white text-gray-700 transition-colors ml-2"
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
