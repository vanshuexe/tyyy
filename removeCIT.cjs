const fs = require('fs');

// 1. HomeView.tsx
let homeView = fs.readFileSync('src/components/HomeView.tsx', 'utf8');
homeView = homeView.replace(
  /<span className="text-xs font-mono font-medium px-2 py-1 rounded bg-gray-50 border border-gray-200 text-\[#3273a8\]">\s*CIT: \{c\.corporateTaxRate\}\s*<\/span>/g,
  ''
);
fs.writeFileSync('src/components/HomeView.tsx', homeView, 'utf8');

// 2. Hero.tsx
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace('LTD • 12.5% CIT • CRO', 'LTD • CRO • EU MARKET');
fs.writeFileSync('src/components/Hero.tsx', hero, 'utf8');

// 3. ContactSection.tsx
let contact = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');
contact = contact.replace('🇮🇪 Ireland (LTD, CRO, 12.5% CIT)', '🇮🇪 Ireland (LTD, CRO)');
fs.writeFileSync('src/components/ContactSection.tsx', contact, 'utf8');

// 4. App.tsx (in case ContactSection is duplicated or rendered there)
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace('🇮🇪 Ireland (LTD, CRO, 12.5% CIT)', '🇮🇪 Ireland (LTD, CRO)');
fs.writeFileSync('src/App.tsx', app, 'utf8');

console.log('CIT removed everywhere');
