const fs = require('fs');
const path = 'src/components/Footer.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace top level classes
content = content.replace(
  '<footer className="bg-gray-50 text-gray-700 text-xs border-t-4 border-t-[#c91c1c]">',
  '<footer className="bg-[#0b1b36] text-gray-400 text-xs border-t-4 border-[#c91c1c]">'
);

// Update Logo
content = content.replace(
  '<Logo size="sm" />',
  '<Logo variant="white" size="sm" />'
);

// Update brand description text
content = content.replace(
  '<p className="text-gray-600 leading-relaxed font-light text-left text-sm max-w-sm">',
  '<p className="text-gray-400 leading-relaxed font-light text-left text-sm max-w-sm">'
);

// Update Badges
content = content.replace(/border-gray-200/g, 'border-white/10');
content = content.replace(/bg-white/g, 'bg-white/5');
content = content.replace(/text-gray-600/g, 'text-gray-400');
content = content.replace(/hover:text-\[#c91c1c\]/g, 'hover:text-white');
content = content.replace(/text-\[#15325b\]/g, 'text-white');
content = content.replace(/text-\[#3273a8\]/g, 'text-[#5897c8]');

// Update Disclaimer and Bottom Sections
content = content.replace(
  '<div className="border-t border-white/10 bg-gray-50 py-8">',
  '<div className="border-t border-white/10 py-8">'
);

content = content.replace(
  '<div className="border-t border-white/10 bg-white/5 py-6">',
  '<div className="border-t border-white/10 py-6">'
);

// Specific Bottom Compliance & Copyright text
content = content.replace(/text-gray-500/g, 'text-gray-500'); // Actually keep it or change to text-gray-400
content = content.replace(
  '<button\n                onClick={scrollToTop}\n                className="p-1.5 rounded bg-gray-100 hover:bg-[#c91c1c] hover:text-white text-gray-700 transition-colors ml-2"\n                title="Back to top"\n              >',
  '<button\n                onClick={scrollToTop}\n                className="p-1.5 rounded bg-white/10 hover:bg-white hover:text-[#0b1b36] text-gray-300 transition-colors ml-2"\n                title="Back to top"\n              >'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Done');
