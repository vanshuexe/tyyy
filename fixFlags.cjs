const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

content = content.replace(
  'className="w-10 h-[28px] object-cover rounded-[3px] shadow-sm border border-gray-200 relative z-10"',
  'className="w-10 h-[28px] object-cover rounded-[4px] shadow-md border-2 border-white ring-1 ring-black/10 relative z-10"'
);

content = content.replace(
  /className="w-8 h-6 object-cover rounded-sm border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-110"/g,
  'className="w-8 h-6 object-cover rounded-sm shadow-md border-2 border-white ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-110"'
);

fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');
console.log('Fixed');
