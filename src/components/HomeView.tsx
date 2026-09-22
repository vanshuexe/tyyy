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
  selectedHubId?: string;
  onSelectHub?: (hubId: string) => void;
  onNavigate?: (pageId: string, extraData?: any) => void;
  onOpenConsultation: (preselectedService?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  selectedHubId: propSelectedHubId,
  onSelectHub: propOnSelectHub,
  onNavigate,
  onOpenConsultation,
}) => {
  const [internalSelectedHubId, setInternalSelectedHubId] = React.useState<string>('portugal');
  const activeHubId = propSelectedHubId || internalSelectedHubId;

  const handleSelectHub = (countryId: string) => {
    setInternalSelectedHubId(countryId);
    if (propOnSelectHub) {
      propOnSelectHub(countryId);
    }
    // Scroll reliably with sticky navbar offset
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
      } else if (onNavigate) {
        onNavigate('jurisdictions', countryId);
      }
    }, 50);
  };

  return (
    <div className="space-y-0 text-left">
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={() => onOpenConsultation()}
        onExploreEstimator={() => {
          const el = document.getElementById('global-hubs');
          if (el) {
            const navOffset = 90;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }}
        onSelectHub={handleSelectHub}
      />

      {/* 2. Global Hub Selector (Section 03) */}
      <GlobalHubSelector
        selectedHubId={activeHubId}
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
        initialSelectedId={activeHubId}
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
