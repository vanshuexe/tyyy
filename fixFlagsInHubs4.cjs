const fs = require('fs');

// 1. Update HomeView
let homeView = fs.readFileSync('src/components/HomeView.tsx', 'utf8');
homeView = homeView.replace(
  '<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[10px] tracking-wider relative overflow-hidden">',
  '<div className="flex items-center gap-2">\n                    <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.name} flag`} className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm border border-gray-100" />\n                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-50 border border-gray-200 text-[#0b1b36] font-bold text-[9px] tracking-wider">\n                      {country.code}\n                    </div>\n                  </div>\n                  {/* Remove this old div if it somehow overlaps */}'
);

// We need to clean up the remainder of the old tag
homeView = homeView.replace(
  '                  {/* Remove this old div if it somehow overlaps */}\n                    <div className="absolute inset-0 opacity-20">\n                      <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.code} flag`} className="w-full h-full object-cover" />\n                    </div>\n                    <span className="relative z-10 font-bold">{country.code}</span>\n                  </div>',
  ''
);
fs.writeFileSync('src/components/HomeView.tsx', homeView, 'utf8');

// 2. Update CountryHubs
let countryHubs = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');
countryHubs = countryHubs.replace(
  '<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[10px] tracking-wider relative overflow-hidden">',
  '<div className="flex items-center gap-2">\n                    <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.name} flag`} className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm border border-gray-100" />\n                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-50 border border-gray-200 text-[#0b1b36] font-bold text-[9px] tracking-wider">\n                      {country.code}\n                    </div>\n                  </div>\n                  {/* Remove this old div if it somehow overlaps */}'
);

countryHubs = countryHubs.replace(
  '                  {/* Remove this old div if it somehow overlaps */}\n                    <div className="absolute inset-0 opacity-20">\n                      <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.code} flag`} className="w-full h-full object-cover" />\n                    </div>\n                    <span className="relative z-10 font-bold">{country.code}</span>\n                  </div>',
  ''
);

fs.writeFileSync('src/components/CountryHubs.tsx', countryHubs, 'utf8');

console.log('Fixed flags');
