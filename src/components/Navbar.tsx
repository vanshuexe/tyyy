import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, Menu, X, ArrowRight, Globe, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, COUNTRIES_DATA } from '../data/companyData';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (pageId: string, extraData?: any) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hubDropdownOpen, setHubDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'business-services', label: 'Business Services', href: '#business-services' },
    { id: 'technology', label: 'Technology', href: '#technology' },
    { id: 'global-hubs', label: 'Global Hubs', href: '#global-hubs' },
    { id: 'industries', label: 'Industries', href: '#industries' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate(id);
    }
  };

  const handleSelectHub = (hubId: string) => {
    setHubDropdownOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById('global-setup') || document.getElementById('global-hubs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate('jurisdictions', hubId);
    }
  };

  return (
    <>
      {/* Top Advisory Bar */}
      <div className="bg-[#0b1b36] text-gray-300 text-xs py-2 px-3 sm:px-6 border-b border-white/10 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-3 sm:gap-5 text-xs min-w-0">
            <span className="flex items-center gap-1.5 text-gray-300 font-bold uppercase tracking-wider shrink-0">
              <Globe className="w-3.5 h-3.5 text-[#c91c1c] shrink-0" />
              <span className="hidden xs:inline">Global Hubs:</span>
              <span className="xs:hidden">Hubs:</span>
            </span>

            {/* Hubs Dropdown */}
            <div className="relative cursor-pointer z-50">
              <button
                type="button"
                onClick={() => setHubDropdownOpen(!hubDropdownOpen)}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/10 px-2.5 py-1 rounded text-gray-200 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-xs tracking-wide">Select Hub</span>
                <ChevronDown className="w-3 h-3 text-gray-300" />
              </button>

              {hubDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl z-[100] flex flex-col py-2">
                  {COUNTRIES_DATA.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleSelectHub(c.id)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-left transition-colors w-full cursor-pointer"
                    >
                      <img
                        src={c.flag}
                        alt={c.name}
                        className="w-4 h-3 object-cover rounded-xs border border-gray-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-[#0b1b36] text-xs font-bold leading-tight">{c.name}</div>
                        <div className="text-[10px] text-gray-500 truncate">{c.regionalFocus}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold shrink-0">
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors tracking-wide"
            >
              <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="hidden md:inline">{COMPANY_INFO.contact.email}</span>
              <span className="md:hidden">Email</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneEu}`}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors font-mono whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#c91c1c] shrink-0" />
              <span className="hidden xs:inline">EU: {COMPANY_INFO.contact.phoneEu}</span>
              <span className="xs:hidden">{COMPANY_INFO.contact.phoneEu}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header (Sticky on Desktop and Mobile) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-2.5 sm:py-3'
            : 'bg-white border-b border-gray-200 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 w-full">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('#home', 'home')}
            className="focus:outline-none cursor-pointer text-left shrink-0"
          >
            <Logo size="md" variant="light" />
          </button>

          {/* Desktop Nav: Home | Business Services | Technology | Global Hubs | Industries | About | Contact */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 shrink-0">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.href, link.id)}
                className="whitespace-nowrap text-xs xl:text-[13px] font-bold uppercase tracking-wider text-[#0b1b36] hover:text-[#c91c1c] transition-colors cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action: BOOK A CONSULTATION */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-premium inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white text-xs font-bold uppercase tracking-wider group cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Button + Persistent Book a Consultation */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-premium px-3.5 py-1.5 rounded-lg bg-[#c91c1c] hover:bg-[#a01616] text-white text-xs font-bold uppercase tracking-wider shrink-0 shadow-sm"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#0b1b36] hover:bg-gray-100 focus:outline-none shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-white text-gray-900 rounded-b-3xl max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl border-b-4 border-[#c91c1c]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <Logo size="sm" variant="light" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.href, link.id)}
                  className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0b1b36] hover:bg-gray-50 hover:text-[#c91c1c] transition-colors flex items-center justify-between border-b border-gray-100 text-left cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Our Seven Global Hubs:
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                {COUNTRIES_DATA.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelectHub(c.id)}
                    className="p-2 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer flex items-center gap-2 text-left"
                  >
                    <img src={c.flag} alt={c.name} className="w-4 h-3 object-cover rounded-xs shrink-0" />
                    <span className="truncate">{c.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider text-xs shadow-md"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
