const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add state for hub selection
app = app.replace(
  "  const [selectedCountryForEstimator, setSelectedCountryForEstimator] = useState<\n    'portugal' | 'switzerland' | 'ireland'\n  >('portugal');",
  "  const [selectedCountryForEstimator, setSelectedCountryForEstimator] = useState<\n    'portugal' | 'switzerland' | 'ireland'\n  >('portugal');\n  const [selectedHubId, setSelectedHubId] = useState<string | null>(null);"
);

// 2. Update handleNavigate signature
app = app.replace(
  '  const handleNavigate = (pageId: string) => {',
  '  const handleNavigate = (pageId: string, extraData?: any) => {\n    if (pageId === "jurisdictions" && typeof extraData === "string") {\n      setSelectedHubId(extraData);\n    }\n'
);

// 3. Pass selectedHubId to CountryHubs
app = app.replace(
  '            <CountryHubs\n              onSelectCountry={handleSelectCountryFromHub}',
  '            <CountryHubs\n              initialSelectedId={selectedHubId}\n              onSelectCountry={handleSelectCountryFromHub}'
);

fs.writeFileSync('src/App.tsx', app, 'utf8');
console.log('Fixed App.tsx state');
