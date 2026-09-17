const fs = require('fs');

// 1. Update HomeView
let homeView = fs.readFileSync('src/components/HomeView.tsx', 'utf8');
homeView = homeView.replace(
  '<div className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[11px] tracking-wider relative overflow-hidden">\n                    <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.code} flag`} className="absolute inset-0 w-full h-full object-cover opacity-10" />\n                    {country.code}',
  '<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[10px] tracking-wider relative overflow-hidden">\n                    <div className="absolute inset-0 opacity-20">\n                      <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.code} flag`} className="w-full h-full object-cover" />\n                    </div>\n                    <span className="relative z-10">{country.code}</span>'
);
fs.writeFileSync('src/components/HomeView.tsx', homeView, 'utf8');

// 2. Update CountryHubs
let countryHubs = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');
countryHubs = countryHubs.replace(
  '<div className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[11px] tracking-wider relative overflow-hidden">\n                    <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.code} flag`} className="absolute inset-0 w-full h-full object-cover opacity-10" />\n                    {country.code}',
  '<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[10px] tracking-wider relative overflow-hidden">\n                    <div className="absolute inset-0 opacity-20">\n                      <img src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} alt={`${country.code} flag`} className="w-full h-full object-cover" />\n                    </div>\n                    <span className="relative z-10">{country.code}</span>'
);
fs.writeFileSync('src/components/CountryHubs.tsx', countryHubs, 'utf8');

console.log('Fixed flags');
