import React from 'react';
import { Hero } from './Hero';
import { GlobalHubSelector } from './GlobalHubSelector';
import { ServicesSection } from './ServicesSection';
import { TechnologySection } from './TechnologySection';
import { ProcessSection } from './ProcessSection';
import { WhyChooseUsSection } from './WhyChooseUsSection';
import { WhoWeServeSection } from './WhoWeServeSection';
import { CountryHubs } from './CountryHubs';
import { AboutRKPTSection } from './AboutRKPTSection';
import { ContactSection } from './ContactSection';

interface HomeViewProps {
  onNavigate?: (pageId: string, extraData?: any) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenConsultation }) => {
  const handleSelectHub = (countryId: string) => {
    const el = document.getElementById('global-setup');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('jurisdictions', countryId);
    }
  };

  return (
    <div className="space-y-0 text-left">
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={() => onOpenConsultation()}
        onExploreEstimator={() => {
          const el = document.getElementById('global-hubs');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Global Hub Selector (Section 03) */}
      <GlobalHubSelector
        onSelectHub={handleSelectHub}
        onOpenConsultation={(hub) => onOpenConsultation(`Jurisdiction Advisory: ${hub}`)}
      />

      {/* 3. Services Section (Business Services - Section 04) */}
      <ServicesSection onOpenConsultation={(svc) => onOpenConsultation(svc)} />

      {/* 4. Technology Section (Section 05) */}
      <TechnologySection onOpenConsultation={(tech) => onOpenConsultation(tech)} />

      {/* 5. Process Section (How We Work - Section 06) */}
      <ProcessSection onOpenConsultation={() => onOpenConsultation('Process Roadmap')} />

      {/* 6. Why Choose Us Section (Section 07) */}
      <WhyChooseUsSection />

      {/* 7. Who We Serve Section (Section 09 - Industries) */}
      <WhoWeServeSection />

      {/* 8. Global Business Setup (Country Hubs - Section 10) */}
      <CountryHubs
        onSelectCountry={handleSelectHub}
        onOpenConsultation={(country) => onOpenConsultation(`Global Business Setup: ${country}`)}
      />

      {/* 9. About RKPT TECH LTD (Section 11) */}
      <AboutRKPTSection onOpenConsultation={() => onOpenConsultation('Institutional Inquiry')} />

      {/* 10. Call to Action & Contact / Enquiry Form (Sections 12 & 13) */}
      <ContactSection />
    </div>
  );
};
