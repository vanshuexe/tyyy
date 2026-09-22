import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { PageHeader } from './components/PageHeader';
import { CountryHubs } from './components/CountryHubs';
import { ServicesSection } from './components/ServicesSection';
import { ExpansionCalculator } from './components/ExpansionCalculator';
import { ProcessSection } from './components/ProcessSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { AboutRKPTSection } from './components/AboutRKPTSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { CountryMatrix } from './components/CountryMatrix';
import { X, CheckCircle2, Send, ShieldCheck, Calendar, Phone } from 'lucide-react';
import { COMPANY_INFO, COUNTRIES_DATA } from './data/companyData';

export default function App() {
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['jurisdictions', 'hubs'].includes(hash)) return 'jurisdictions';
    if (hash === 'matrix') return 'matrix';
    if (['services'].includes(hash)) return 'services';
    if (['estimator', 'calculator'].includes(hash)) return 'estimator';
    if (['process', 'roadmap'].includes(hash)) return 'process';
    if (['about', 'why-rkpt'].includes(hash)) return 'about';
    if (['contact', 'offices'].includes(hash)) return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash());
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [selectedHubId, setSelectedHubId] = useState<string>('portugal');

  // Dummy details for the consultation modal
  const DUMMY_MODAL_FORM = {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 019-2834',
    company: 'Nexus Global Ltd',
    jurisdiction: 'Portugal',
    scopeDetails: 'Inquiry regarding cross-border corporate formation and international banking setup.',
  };

  // Fast modal form state initialized with clean dummy details
  const [modalForm, setModalForm] = useState(DUMMY_MODAL_FORM);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalRefId, setModalRefId] = useState('');

  // Lock body scroll whenever consultation modal is open
  useEffect(() => {
    if (isConsultationModalOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const preventBackgroundTouch = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.modal-scrollable-container')) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchmove', preventBackgroundTouch, { passive: false });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        document.removeEventListener('touchmove', preventBackgroundTouch);
      };
    }
  }, [isConsultationModalOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectHubGlobally = (hubId: string) => {
    setSelectedHubId(hubId);
    if (currentPage !== 'home' && currentPage !== 'jurisdictions') {
      setCurrentPage('home');
      window.history.pushState(null, '', window.location.pathname);
    }
    setTimeout(() => {
      const el = document.getElementById('country-hub-detail') || document.getElementById('global-setup');
      if (el) {
        const navOffset = 90;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 60);
  };

  const handleNavigate = (pageId: string, extraData?: any) => {
    if (pageId === 'jurisdictions' && typeof extraData === 'string') {
      setSelectedHubId(extraData);
    }

    setCurrentPage(pageId);
    if (pageId === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = pageId;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPrefilledService(serviceTitle);
      setModalForm((prev) => ({
        ...prev,
        scopeDetails: prev.scopeDetails
          ? `${prev.scopeDetails}\nInterested in: ${serviceTitle}`
          : `Interested in: ${serviceTitle}`,
      }));
    }
    setModalSubmitted(false);
    setIsConsultationModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `RKPT-REF-${Math.floor(100000 + Math.random() * 900000)}`;
    setModalRefId(ref);
    setModalSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#c91c1c] selection:text-white font-sans w-full max-w-full overflow-x-hidden">
      {/* Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        selectedHubId={selectedHubId}
        onSelectHub={handleSelectHubGlobally}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && (
              <HomeView
                selectedHubId={selectedHubId}
                onSelectHub={handleSelectHubGlobally}
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'matrix' && (
              <div>
                <PageHeader
                  title="Global Comparison Matrix"
                  subtitle="Detailed operational insights across our primary jurisdictions."
                  category="Country Details"
                  onNavigateHome={() => handleNavigate('home')}
                />
                <CountryMatrix />
              </div>
            )}

            {currentPage === 'jurisdictions' && (
              <div>
                <PageHeader
                  title="Seven Strategic Global Hubs"
                  subtitle="Comparative legal, fiscal, and corporate infrastructure across Portugal, UK, Ireland, Switzerland, USA, Dubai/UAE, and India."
                  category="Jurisdictions"
                  onNavigateHome={() => handleNavigate('home')}
                  onOpenConsultation={() => handleOpenConsultation('Jurisdiction Advisory')}
                />
                <CountryHubs
                  initialSelectedId={selectedHubId}
                  onSelectCountry={(countryId) => handleSelectHubGlobally(countryId)}
                  onOpenConsultation={(country) =>
                    handleOpenConsultation(`Jurisdiction Advisory: ${country}`)
                  }
                />
              </div>
            )}

            {currentPage === 'services' && (
              <div>
                <PageHeader
                  title="Corporate Practice Areas & Deliverables"
                  subtitle="Integrated global setup, tax compliance, corporate banking, immigration, and digital infrastructure."
                  category="Practice Areas"
                  onNavigateHome={() => handleNavigate('home')}
                  onOpenConsultation={() => handleOpenConsultation('Practice Areas Advisory')}
                />
                <ServicesSection onOpenConsultation={handleOpenConsultation} />
                <WhoWeServeSection />
              </div>
            )}

            {currentPage === 'process' && (
              <div>
                <PageHeader
                  title="Our 10-Step Engagement Journey"
                  subtitle="Structured milestone execution: discovery, incorporation, banking, fiscal compliance, technology setup, and ongoing operations."
                  category="Our Process"
                  onNavigateHome={() => handleNavigate('home')}
                  onOpenConsultation={() => handleOpenConsultation('Roadmap Consultation')}
                />
                <ProcessSection onOpenConsultation={() => handleOpenConsultation('Strategic Planning Phase')} />
              </div>
            )}

            {currentPage === 'about' && (
              <div>
                <PageHeader
                  title="About RKPT TECH LTD"
                  subtitle="Global business consulting and technology solutions firm helping entrepreneurs, startups and established companies grow internationally."
                  category="About RKPT"
                  onNavigateHome={() => handleNavigate('home')}
                  onOpenConsultation={() => handleOpenConsultation('Institutional Inquiry')}
                />
                <AboutRKPTSection onOpenConsultation={() => handleOpenConsultation()} />
              </div>
            )}

            {currentPage === 'contact' && (
              <div>
                <PageHeader
                  title="Start Your Consultation"
                  subtitle="Direct advisory desks and contact channels across our global hubs."
                  category="Contact & Consultation"
                  onNavigateHome={() => handleNavigate('home')}
                />
                <ContactSection prefilledService={prefilledService} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating Consultation CTA on Mobile */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <button
          onClick={() => handleOpenConsultation()}
          className="flex items-center gap-2 bg-[#c91c1c] text-white px-4 py-3 rounded-full shadow-2xl font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Consultation</span>
        </button>
      </div>

      {/* Fast Consultation Modal */}
      {isConsultationModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-fadeIn overscroll-contain overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsConsultationModalOpen(false);
          }}
          onWheel={(e) => e.stopPropagation()}
        >
          <div 
            className="modal-scrollable-container relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden text-left border-t-4 border-t-[#c91c1c] max-h-[92vh] flex flex-col overscroll-contain"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#0b1b36] text-white p-5 flex items-center justify-between border-b border-[#15325b] shrink-0">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#3273a8]">
                  RKPT TECH LTD Advisory Desk
                </div>
                <h3 className="text-xl font-extrabold font-display uppercase tracking-tight text-white mt-0.5">
                  Schedule Consultation
                </h3>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#15325b] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 overflow-y-auto max-h-[calc(92vh-80px)] overscroll-contain">
              {modalSubmitted ? (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-[#0b1b36]">
                    Consultation Request Registered
                  </h4>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                    Our advisory desk has received your inquiry. A senior partner will review your requirements and respond within 24 business hours.
                  </p>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-mono font-bold text-[#0b1b36] inline-block">
                    Reference ID: <span className="text-[#c91c1c]">{modalRefId}</span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsConsultationModalOpen(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#0b1b36] hover:bg-[#15325b] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4 text-xs">
                  {/* Dummy Details Notice Banner */}
                  <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl px-3 py-2 flex items-center justify-between text-xs text-amber-900 shadow-xs">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span>Pre-filled with dummy details for preview</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setModalForm(DUMMY_MODAL_FORM)}
                      className="text-[10px] font-bold text-[#c91c1c] uppercase tracking-wider hover:underline cursor-pointer"
                    >
                      Reset Dummy
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="off"
                        data-lpignore="true"
                        value={modalForm.name}
                        onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                        placeholder="Alex Morgan (Dummy Name)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#c91c1c] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        autoComplete="off"
                        data-lpignore="true"
                        value={modalForm.email}
                        onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                        placeholder="alex.morgan@example.com (Dummy Email)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#c91c1c] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        autoComplete="off"
                        data-lpignore="true"
                        value={modalForm.phone}
                        onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834 (Dummy Phone)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#c91c1c] focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        data-lpignore="true"
                        value={modalForm.company}
                        onChange={(e) => setModalForm({ ...modalForm, company: e.target.value })}
                        placeholder="Nexus Global Ltd (Dummy Company)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#c91c1c] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                      Target Jurisdiction / Hub *
                    </label>
                    <select
                      value={modalForm.jurisdiction}
                      onChange={(e) => setModalForm({ ...modalForm, jurisdiction: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#c91c1c] focus:outline-none bg-white"
                    >
                      <option value="Portugal">Portugal (EU Business & Formation Hub)</option>
                      <option value="UK">United Kingdom (UK Business & Tech Hub)</option>
                      <option value="Ireland">Ireland (EU Business & Technology Hub)</option>
                      <option value="Switzerland">Switzerland (Swiss Business Hub)</option>
                      <option value="USA">USA (North American Business Hub)</option>
                      <option value="Dubai / UAE">Dubai / UAE (Middle East Business Hub)</option>
                      <option value="India">India (Technology & Delivery Hub)</option>
                      <option value="Multi-Hub">Multi-Country / Cross-Border Group</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                      Expansion Scope & Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={modalForm.scopeDetails}
                      onChange={(e) => setModalForm({ ...modalForm, scopeDetails: e.target.value })}
                      placeholder="Specify your business activity, desired incorporation timeline, banking requirements, or relocation goals..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#c91c1c] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>EU NDA & GDPR Protected</span>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <ChatBot onOpenConsultation={handleOpenConsultation} onNavigate={handleNavigate} />
    </div>
  );
}
