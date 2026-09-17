const fs = require('fs');

// 1. Update HomeView
let homeView = fs.readFileSync('src/components/HomeView.tsx', 'utf8');
homeView = homeView.replace(
  '<span className="relative z-10">{country.code}</span>\n                  </div>',
  '<span className="relative z-10 font-bold">{country.code}</span>\n                  </div>'
);
fs.writeFileSync('src/components/HomeView.tsx', homeView, 'utf8');

// 2. Update CountryHubs
let countryHubs = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');
countryHubs = countryHubs.replace(
  '<span className="relative z-10">{country.code}</span>\n                  </div>',
  '<span className="relative z-10 font-bold">{country.code}</span>\n                  </div>'
);
fs.writeFileSync('src/components/CountryHubs.tsx', countryHubs, 'utf8');

console.log('Fixed flags');
