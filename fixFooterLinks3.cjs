const fs = require('fs');
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Fix uae -> dubai
footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'uae')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Dubai Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'dubai')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Dubai Desk\n                  </button>"
);

fs.writeFileSync('src/components/Footer.tsx', footer, 'utf8');
console.log('Fixed UAE to Dubai in footer');
