const fs = require('fs');
let content = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');

// Header row badge
content = content.replace(
  'w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-[#0b1b36] font-bold text-xs tracking-wider',
  'w-9 h-9 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[11px] tracking-wider'
);

// Time text
content = content.replace(
  'text-[10px] text-gray-500 font-medium tracking-widest uppercase',
  'text-[9px] text-gray-400 font-medium tracking-widest uppercase'
);

// Heading
content = content.replace(
  'text-xl font-display font-bold text-[#0b1b36] leading-tight mb-1',
  'text-[22px] font-display font-bold text-[#0b1b36] leading-tight mb-1'
);

// Subheading
content = content.replace(
  'text-xs text-[#c91c1c] font-medium tracking-wide',
  'text-[11px] text-[#c91c1c] font-medium tracking-wide'
);

// Table rows spacing
content = content.replace(
  'space-y-2.5 mb-6 border-t border-b border-gray-100 py-4',
  'space-y-3 mb-5 border-t border-b border-gray-100 py-4 mt-5'
);

// Focus gap
content = content.replace(
  'flex items-start justify-between text-xs gap-4',
  'flex items-start justify-between text-[11px] gap-4 mt-3'
);
content = content.replace(
  'flex items-center justify-between text-xs',
  'flex items-center justify-between text-[11px]'
);

// Legal label
content = content.replace(
  '<span className="text-gray-500 font-light">Legal form</span>',
  '<span className="text-gray-400 font-light">Legal form</span>'
);
content = content.replace(
  '<span className="text-[#0b1b36] font-bold text-right">{ui.legal}</span>',
  '<span className="text-[#0b1b36] font-bold text-right text-[11px]">{ui.legal}</span>'
);

// Focus label
content = content.replace(
  '<span className="text-gray-500 font-light shrink-0">Focus</span>',
  '<span className="text-gray-400 font-light shrink-0">Focus</span>'
);
content = content.replace(
  '<span className="text-[#0b1b36] font-bold text-right">{ui.focus}</span>',
  '<span className="text-[#0b1b36] font-bold text-right text-[11px]">{ui.focus}</span>'
);

fs.writeFileSync('src/components/CountryHubs.tsx', content, 'utf8');
