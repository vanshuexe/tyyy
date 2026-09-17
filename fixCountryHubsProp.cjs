const fs = require('fs');

let hubs = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');

// Update imports for useEffect
if (!hubs.includes('useEffect')) {
  hubs = hubs.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';");
}

// Add prop
hubs = hubs.replace(
  'interface CountryHubsProps {\n  onSelectCountry: (countryId: string) => void;\n  onOpenConsultation: (countryName: string) => void;\n}',
  'interface CountryHubsProps {\n  initialSelectedId?: string | null;\n  onSelectCountry: (countryId: string) => void;\n  onOpenConsultation: (countryName: string) => void;\n}'
);

hubs = hubs.replace(
  'export const CountryHubs: React.FC<CountryHubsProps> = ({ onSelectCountry, onOpenConsultation }) => {',
  'export const CountryHubs: React.FC<CountryHubsProps> = ({ initialSelectedId, onSelectCountry, onOpenConsultation }) => {'
);

const useEffectCode = `
  useEffect(() => {
    if (initialSelectedId) {
      const targetCountry = COUNTRIES_DATA.find(c => c.id === initialSelectedId);
      if (targetCountry) {
        setSelectedCountry(targetCountry);
      }
    }
  }, [initialSelectedId]);
`;

hubs = hubs.replace(
  '  const [selectedCountry, setSelectedCountry] = useState<CountryProfile>(COUNTRIES_DATA[0]);',
  '  const [selectedCountry, setSelectedCountry] = useState<CountryProfile>(\n    initialSelectedId \n      ? COUNTRIES_DATA.find(c => c.id === initialSelectedId) || COUNTRIES_DATA[0]\n      : COUNTRIES_DATA[0]\n  );\n' + useEffectCode
);

fs.writeFileSync('src/components/CountryHubs.tsx', hubs, 'utf8');
console.log('Fixed CountryHubs props');
