const fs = require('fs');
let content = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');

content = content.replace(
  /              <\/div>\n            \);\n          }\)}/g,
  "              </div>\n              </motion.div>\n            );\n          })}"
);

fs.writeFileSync('src/components/ServicesSection.tsx', content, 'utf8');
console.log('Fixed syntax in Services');
