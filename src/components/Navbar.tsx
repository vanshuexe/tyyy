import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, Menu, X, ArrowRight, Globe, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, COUNTRIES_DATA } from '../data/companyData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'jurisdictions', label: 'Hubs' },
    { id: 'services', label: 'Practice Areas' },
    { id: 'estimator', label: 'Scope Planner' },
    { id: 'process', label: 'Our Process' },
    { id: 'about', label: 'About RKPT' },
    { id: 'contact', label: 'Advisory Desks' },
  ];

  return (
    <>
      {/* Top Advisory Bar */}
      <div className="bg-[#0b1b36] text-gray-300 text-xs py-2.5 px-3 sm:px-6 border-b border-[#1e4a87]/50 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs min-w-0">
            <span className="flex items-center gap-1.5 text-[#3273a8] font-bold uppercase tracking-widest shrink-0">
              <Globe className="w-3.5 h-3.5 text-[#c91c1c] shrink-0" />
              <span className="hidden xs:inline">European Gateway:</span>
              <span className="xs:hidden">Hubs:</span>
            </span>
            <div className="relative group cursor-pointer z-50">
              <div className="flex items-center gap-2 bg-[#0e2347] hover:bg-[#15325b] border border-[#1e4a87] px-2.5 py-1 rounded transition-colors text-gray-300 hover:text-white">
                <span className="flex items-center gap-1.5 font-medium tracking-wide">
                  <span className="hidden sm:inline">Select Hub</span>
                  <span className="sm:hidden">Select</span>
                </span>
                <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] flex flex-col py-1.5">
                {COUNTRIES_DATA.map((c) => (
                  <button 
                    key={c.id} 
                    onClick={() => onNavigate('jurisdictions')}
                    className="flex items-center gap-3 px-3.5 py-2 hover:bg-gray-50 hover:text-[#3273a8] text-left transition-colors w-full"
                  >
                    <img src={c.flag} alt={c.name} className="w-4 h-3 object-cover rounded-[2px] shadow-sm border border-gray-200 shrink-0" />
                    <span className="text-[#15325b] text-xs font-semibold whitespace-nowrap">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold shrink-0">
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors tracking-wide"
            >
              <Mail className="w-3.5 h-3.5 text-[#3273a8] shrink-0" />
              <span className="hidden md:inline">{COMPANY_INFO.contact.email}</span>
              <span className="md:hidden">Email</span>
            </a>
            <span className="text-[#1e4a87] hidden sm:inline">|</span>
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

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5 sm:py-3'
            : 'bg-white border-b border-gray-200 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 w-full">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="focus:outline-none cursor-pointer text-left shrink-0"
          >
            <Logo size="md" variant="light" />
          </button>

          {/* Desktop Nav - Strict single-line items */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 shrink-0">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`whitespace-nowrap text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#c91c1c] border-b-2 border-[#c91c1c]'
                      : 'text-[#15325b] hover:text-[#3273a8]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-premium inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-lg bg-[#c91c1c] hover:bg-[#a01616] text-white text-xs xl:text-sm font-bold uppercase tracking-wider group cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-premium px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#c91c1c] hover:bg-[#a01616] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0 shadow-sm"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#15325b] hover:bg-gray-100 focus:outline-none shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Clean White style with red top border) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex flex-col justify-start">
          <div className="bg-white text-gray-900 rounded-b-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl border-b-4 border-[#c91c1c]">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <Logo size="sm" variant="light" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate(link.id);
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-between border-b border-gray-100 text-left cursor-pointer ${
                      isActive
                        ? 'text-[#c91c1c] bg-gray-50'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#c91c1c]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#c91c1c]' : 'text-[#3273a8]'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="text-xs text-[#3273a8] font-bold uppercase tracking-widest">European Focus Jurisdictions:</div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-gray-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('jurisdictions');
                  }}
                  className="p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer"
                >
                  🇵🇹 Portugal
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('jurisdictions');
                  }}
                  className="p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer"
                >
                  🇨🇭 Switzerland
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('jurisdictions');
                  }}
                  className="p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer"
                >
                  🇮🇪 Ireland
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider shadow-md"
              >
                <span>Schedule Confidential Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
