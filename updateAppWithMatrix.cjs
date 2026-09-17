const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

// Add import
app = app.replace(
  "import { Footer } from './components/Footer';",
  "import { Footer } from './components/Footer';\nimport { CountryMatrix } from './components/CountryMatrix';"
);

// Add hash handler logic
app = app.replace(
  "if (['jurisdictions', 'hubs'].includes(hash)) return 'jurisdictions';",
  "if (['jurisdictions', 'hubs'].includes(hash)) return 'jurisdictions';\n    if (hash === 'matrix') return 'matrix';"
);

// Add routing logic
const matrixRoute = `
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
`;

app = app.replace(
  "        {currentPage === 'jurisdictions' && (",
  matrixRoute + "\n        {currentPage === 'jurisdictions' && ("
);

fs.writeFileSync('src/App.tsx', app, 'utf8');
console.log('App updated with Matrix');
