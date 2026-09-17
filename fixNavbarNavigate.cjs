const fs = require('fs');

let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// The type signature for onNavigate might need update
navbar = navbar.replace(
  '  onNavigate: (pageId: string) => void;',
  '  onNavigate: (pageId: string, extraData?: any) => void;'
);

// Desktop dropdown
navbar = navbar.replace(
  'onClick={() => onNavigate(\'jurisdictions\')}',
  'onClick={() => onNavigate(\'jurisdictions\', c.id)}'
);
// It might occur multiple times, let's just do a global replace for all instances in the map
navbar = navbar.replace(
  /onClick=\{\(\) => onNavigate\('jurisdictions'\)\}/g,
  "onClick={() => onNavigate('jurisdictions', typeof c !== 'undefined' ? c.id : undefined)}"
);

// Mobile buttons explicitly named
navbar = navbar.replace(
  "onNavigate('jurisdictions');\n                  }}\n                  className=\"p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer\"\n                >\n                  🇵🇹 Portugal",
  "onNavigate('jurisdictions', 'portugal');\n                  }}\n                  className=\"p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer\"\n                >\n                  🇵🇹 Portugal"
);

navbar = navbar.replace(
  "onNavigate('jurisdictions');\n                  }}\n                  className=\"p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer\"\n                >\n                  🇨🇭 Switzerland",
  "onNavigate('jurisdictions', 'switzerland');\n                  }}\n                  className=\"p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer\"\n                >\n                  🇨🇭 Switzerland"
);

navbar = navbar.replace(
  "onNavigate('jurisdictions');\n                  }}\n                  className=\"p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer\"\n                >\n                  🇮🇪 Ireland",
  "onNavigate('jurisdictions', 'ireland');\n                  }}\n                  className=\"p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#c91c1c] cursor-pointer\"\n                >\n                  🇮🇪 Ireland"
);

fs.writeFileSync('src/components/Navbar.tsx', navbar, 'utf8');
console.log('Fixed Navbar nav links');
