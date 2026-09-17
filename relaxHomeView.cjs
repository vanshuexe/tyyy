const fs = require('fs');
let content = fs.readFileSync('src/components/HomeView.tsx', 'utf8');

// The tiny texts are in the hubs cards
content = content.replace(/text-\[9px\]/g, 'text-[11px]');
content = content.replace(/text-\[11px\]/g, 'text-xs');
content = content.replace(/text-\[10px\]/g, 'text-sm');
content = content.replace(/w-7 h-7/g, 'w-8 h-8'); // adjust flag icon badges

// Let's also adjust the main section padding
content = content.replace(/py-20/g, 'py-24');
content = content.replace(/py-24 bg-white/g, 'py-32 bg-white');

fs.writeFileSync('src/components/HomeView.tsx', content, 'utf8');
console.log('Relaxed HomeView');
