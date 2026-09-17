const fs = require('fs');
let content = fs.readFileSync('src/components/CountryMatrix.tsx', 'utf8');

content = content.replace(
  /              <\/div>\n            \)\)}/g,
  "              </div>\n              </motion.div>\n            ))}"
);

fs.writeFileSync('src/components/CountryMatrix.tsx', content, 'utf8');
console.log('Fixed syntax in Matrix');
