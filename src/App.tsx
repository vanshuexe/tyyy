import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { PageHeader } from './components/PageHeader';
import { CountryHubs } from './components/CountryHubs';
import { ServicesSection } from './components/ServicesSection';
import { ExpansionCalculator } from './components/ExpansionCalculator';
import { ProcessSection } from './components/ProcessSection';
import { IndustriesSection } from './components/IndustriesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['jurisdictions', 'hubs'].includes(hash)) return 'jurisdictions';
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
  const [selectedCountryForEstimator, setSelectedCountryForEstimator] = useState<
    'portugal' | 'switzerland' | 'ireland'
  >('portugal');

  // Fast modal form state
  const [modalForm, setModalForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jurisdiction: 'Portugal',
    scopeDetails: '',
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalRefId, setModalRefId] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
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
        scopeDetails: prev.scopeDetails ? `${prev.scopeDetails}\nInterested in: ${serviceTitle}` : `Interested in: ${serviceTitle}`,
      }));
    }
    setModalSubmitted(false);
    setIsConsultationModalOpen(true);
  };

  const handleSelectCountryFromHub = (countryId: 'portugal' | 'switzerland' | 'ireland') => {
    setSelectedCountryForEstimator(countryId);
    handleNavigate('estimator');
  };

  const handleProceedWithCalculatedScope = (scopeSummary: string) => {
    setPrefilledService(scopeSummary);
    setModalForm((prev) => ({
      ...prev,
      scopeDetails: `Scope Blueprint: ${scopeSummary}`,
    }));
    setModalSubmitted(false);
    setIsConsultationModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `RKPT-${Math.floor(100000 + Math.random() * 900000)}`;
    setModalRefId(ref);
    setModalSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#c91c1c] selection:text-white font-sans w-full max-w-full overflow-x-hidden">
      {/* Executive Navbar with Multi-Page navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content: Render dedicated view based on currentPage */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'jurisdictions' && (
          <div>
            <PageHeader
              title="European Focus Hubs: Portugal • Switzerland • Ireland"
              subtitle="Comparative legal, tax, and corporate infrastructure across Europe’s premier business destinations."
              category="Jurisdictions"
              onNavigateHome={() => handleNavigate('home')}
              onOpenConsultation={() => handleOpenConsultation('Jurisdiction Advisory')}
            />
            <CountryHubs
              onSelectCountry={handleSelectCountryFromHub}
              onOpenConsultation={(country) => handleOpenConsultation(`Jurisdiction Advisory: ${country}`)}
            />
          </div>
        )}

        {currentPage === 'services' && (
          <div>
            <PageHeader
              title="Corporate Practice Areas &amp; Deliverables"
              subtitle="Integrated European setup, tax compliance, corporate banking, immigration, and digital infrastructure."
              category="Practice Areas"
              onNavigateHome={() => handleNavigate('home')}
              onOpenConsultation={() => handleOpenConsultation('Practice Areas Advisory')}
            />
            <ServicesSection onOpenConsultation={handleOpenConsultation} />
            <IndustriesSection onOpenConsultation={(ind) => handleOpenConsultation(ind)} />
          </div>
        )}

        {currentPage === 'estimator' && (
          <div>
            <PageHeader
              title="European Setup Scope &amp; Feasibility Estimator"
              subtitle="Interactive corporate configuration: select country, entity type, banking tier, and generate an instant deliverables blueprint."
              category="Scope Planner"
              onNavigateHome={() => handleNavigate('home')}
              onOpenConsultation={() => handleOpenConsultation('Estimator Scope Review')}
            />
            <ExpansionCalculator
              initialCountry={selectedCountryForEstimator}
              onProceedWithScope={handleProceedWithCalculatedScope}
            />
          </div>
        )}

        {currentPage === 'process' && (
          <div>
            <PageHeader
              title="Our 5-Stage European Expansion Framework"
              subtitle="Structured milestone execution: discovery, incorporation, banking, fiscal compliance, and active launch."
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
              title="Institutional Profile &amp; Governance"
              subtitle="RKPT TECH LTD corporate vision, mission, core operational pillars, and GDPR regulatory compliance."
              category="About RKPT"
              onNavigateHome={() => handleNavigate('home')}
              onOpenConsultation={() => handleOpenConsultation('Institutional Inquiry')}
            />
            <AboutSection onOpenConsultation={() => handleOpenConsultation()} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div>
            <PageHeader
              title="European Advisory Desks &amp; Contact Channels"
              subtitle="Direct legal liaison and physical advisory offices in Lisbon, Zurich, Dublin, London, New York, and Dubai."
              category="Advisory Desks"
              onNavigateHome={() => handleNavigate('home')}
            />
            <ContactSection prefilledService={prefilledService} />
          </div>
        )}
      </main>

      {/* Corporate Footer with Multi-Page links */}
      <Footer onNavigate={handleNavigate} />

      {/* Fast Consultation Modal with KCID styling */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#15325b]/20 overflow-hidden text-left border-t-4 border-t-[#c91c1c]">
            {/* Modal Header */}
            <div className="bg-[#0b1b36] text-white p-5 flex items-center justify-between border-b border-[#15325b]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#3273a8]">
                  RKPT TECH LTD Advisory Desk
                </div>
                <h3 className="text-xl font-extrabold font-display uppercase tracking-tight text-white mt-0.5">
                  Schedule European Consultation
                </h3>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(false)}
                className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#15325b] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {modalSubmitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display uppercase tracking-tight text-[#15325b]">
                    Consultation Request Registered
                  </h4>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto">
                    Our European Directorate has received your inquiry. A senior advisor will review your corporate parameters and respond within 24 business hours.
                  </p>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs font-mono font-bold text-[#15325b] inline-block">
                    Reference ID: <span className="text-[#c91c1c]">{modalRefId}</span>
                  </div>
                  <div className="pt-3">
                    <button
                      onClick={() => setIsConsultationModalOpen(false)}
                      className="px-6 py-2.5 rounded bg-[#15325b] hover:bg-[#0b1b36] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={modalForm.name}
                        onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                        placeholder="e.g. Alexander Weber"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#c91c1c] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={modalForm.email}
                        onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                        placeholder="e.g. a.weber@enterprise.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#c91c1c] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Telephone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={modalForm.phone}
                        onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                        placeholder="+351 91 000 0000"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#c91c1c] focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={modalForm.company}
                        onChange={(e) => setModalForm({ ...modalForm, company: e.target.value })}
                        placeholder="e.g. Apex Global Tech Ltd"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#c91c1c] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                      Target Jurisdiction *
                    </label>
                    <select
                      value={modalForm.jurisdiction}
                      onChange={(e) => setModalForm({ ...modalForm, jurisdiction: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#c91c1c] focus:outline-none bg-white"
                    >
                      <option value="Portugal">🇵🇹 Portugal (LDA, NHR, Tech Visa)</option>
                      <option value="Switzerland">🇨🇭 Switzerland (GmbH, AG, Cantonal Holding)</option>
                      <option value="Ireland">🇮🇪 Ireland (LTD, CRO, 12.5% CIT)</option>
                      <option value="Multi-Country">🇪🇺 Multi-Country European Group</option>
                      <option value="Other EU">Other European Union Territory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-[10px] mb-1">
                      Expansion Scope &amp; Practice Details
                    </label>
                    <textarea
                      rows={3}
                      value={modalForm.scopeDetails}
                      onChange={(e) => setModalForm({ ...modalForm, scopeDetails: e.target.value })}
                      placeholder="Specify your business activity, desired incorporation timeline, banking requirements, or relocation goals..."
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#c91c1c] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>EU NDA &amp; GDPR Protected</span>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded bg-[#c91c1c] hover:bg-[#a01616] text-white font-bold uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer transition-colors"
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
    </div>
  );
}
