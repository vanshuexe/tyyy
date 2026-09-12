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
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              {COMPANY_INFO.profileSummary}
            </p>
            <div className="flex items-center gap-3 pt-2 text-gray-600">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c91c1c]">
                <ShieldCheck className="w-4 h-4 text-[#c91c1c]" />
                100% EU Regulatory Compliant
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3273a8]">
                GDPR &amp; AML Aligned
              </span>
            </div>
          </div>

          {/* Col 3: Focus Hubs */}
          <div className="space-y-3">
            <h4 className="text-[#15325b] font-bold text-xs uppercase tracking-wider border-b border-gray-200 pb-2">
              Jurisdictions
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  🇵🇹 Portugal (LDA, NHR, Startup/Golden Visa)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  🇨🇭 Switzerland (GmbH, AG, Cantonal)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  🇮🇪 Ireland (LTD, CRO, 12.5% CIT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  🇬🇧 United Kingdom (LTD, LLP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  🇺🇸 United States (LLC, C-Corp)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jurisdictions')}
                  className="hover:text-[#c91c1c] text-gray-600 transition-colors text-left cursor-pointer"
                >
                  🇦🇪 Dubai (Free Zone, Mainland)
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
              Core Verticals
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Company Setup &amp; Formation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Accounting, Tax &amp; Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  European Banking &amp; Merchant EMIs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Visa, Immigration &amp; Relocation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  IT &amp; Digital Solutions (GDPR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#c91c1c] transition-colors text-left cursor-pointer"
                >
                  Business Support &amp; Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Head Offices */}
          <div className="space-y-3">
            <h4 className="text-[#15325b] font-bold text-xs uppercase tracking-wider border-b border-gray-200 pb-2">
              Advisory Desks
            </h4>
            <div className="space-y-2 text-gray-600">
              <button
                onClick={() => handleNav('contact')}
                className="flex items-start gap-2 hover:text-[#c91c1c] text-left cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                <span>Lisbon, Portugal</span>
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="flex items-start gap-2 hover:text-[#c91c1c] text-left cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                <span>Zurich, Switzerland</span>
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="flex items-start gap-2 hover:text-[#c91c1c] text-left cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                <span>Dublin, Ireland</span>
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="flex items-start gap-2 hover:text-[#c91c1c] text-left cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                <span>London, UK</span>
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="flex items-start gap-2 hover:text-[#c91c1c] text-left cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                <span>New York, USA</span>
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="flex items-start gap-2 hover:text-[#c91c1c] text-left cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c91c1c] shrink-0 mt-0.5" />
                <span>Dubai, UAE</span>
              </button>
              <div className="pt-2">
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-[#3273a8] hover:text-[#c91c1c] font-mono text-[11px] font-bold"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
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
