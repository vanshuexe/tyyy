const fs = require('fs');
let content = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');

if (!content.includes('motion/react')) {
  content = content.replace("import React,", "import React, { useState } from 'react';\nimport { motion } from 'motion/react';\n");
}

content = content.replace(
  "{COUNTRIES_DATA.map((country) => {",
  "{COUNTRIES_DATA.map((country, idx) => {"
);

content = content.replace(
  "return (\n              <div\n                key={country.id}",
  "return (\n              <motion.div\n                initial={{ opacity: 0, y: 20 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.5, delay: idx * 0.1 }}\n                key={country.id}\n              >\n              <div"
);

content = content.replace(
  /                <\/div>\n              <\/div>\n            \);\n          }\)}\n        <\/div>/g,
  "                </div>\n              </div>\n              </motion.div>\n            );\n          })}\n        </div>"
);

fs.writeFileSync('src/components/CountryHubs.tsx', content, 'utf8');
console.log('Added stagger animations to Hubs');
