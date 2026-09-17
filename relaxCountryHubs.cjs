const fs = require('fs');
let content = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');

content = content.replace(/text-\[9px\]/g, 'text-[11px]');
content = content.replace(/text-\[11px\]/g, 'text-xs');
content = content.replace(/text-\[10px\]/g, 'text-sm');
content = content.replace(/w-7 h-7/g, 'w-8 h-8'); // adjust flag icon badges

fs.writeFileSync('src/components/CountryHubs.tsx', content, 'utf8');
console.log('Relaxed CountryHubs');
