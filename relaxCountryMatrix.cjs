const fs = require('fs');
let content = fs.readFileSync('src/components/CountryMatrix.tsx', 'utf8');

// Relax padding and text sizes
content = content.replace(/text-\[11px\]/g, 'text-sm');
content = content.replace(/text-\[10px\]/g, 'text-xs');
content = content.replace(/p-5/g, 'p-8');
content = content.replace(/gap-4/g, 'gap-6');
// Fix gap-6 where it was gap-4 (like between items)
content = content.replace(/gap-6 mb-10/g, 'gap-8 mb-12'); 

// Maybe increase the max-width or let it be. max-w-[1400px] is fine.
fs.writeFileSync('src/components/CountryMatrix.tsx', content, 'utf8');
console.log('Relaxed CountryMatrix');
