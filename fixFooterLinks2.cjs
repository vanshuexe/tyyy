const fs = require('fs');
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Portugal Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'portugal')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Portugal Desk\n                  </button>"
);

footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Switzerland Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'switzerland')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Switzerland Desk\n                  </button>"
);

footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Ireland Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'ireland')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Ireland Desk\n                  </button>"
);

footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    UK Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'uk')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    UK Desk\n                  </button>"
);

footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    USA Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'usa')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    USA Desk\n                  </button>"
);

footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Dubai Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'uae')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    Dubai Desk\n                  </button>"
);

footer = footer.replace(
  "                  <button\n                    onClick={() => handleNav('jurisdictions')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    India Desk\n                  </button>",
  "                  <button\n                    onClick={() => handleNav('jurisdictions', 'india')}\n                    className=\"hover:text-white transition-colors flex items-center gap-1.5\"\n                  >\n                    India Desk\n                  </button>"
);

fs.writeFileSync('src/components/Footer.tsx', footer, 'utf8');
console.log('Fixed Footer links properly');
