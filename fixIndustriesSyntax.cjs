const fs = require('fs');
let content = fs.readFileSync('src/components/IndustriesSection.tsx', 'utf8');

content = content.replace(
  /              <\/button>\n            \);\n          }\)}/g,
  "              </button>\n              </motion.div>\n            );\n          })}"
);

fs.writeFileSync('src/components/IndustriesSection.tsx', content, 'utf8');
console.log('Fixed syntax in Industries');
