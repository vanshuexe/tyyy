const fs = require('fs');
let content = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');

if (!content.includes('motion/react')) {
  content = content.replace("import React,", "import React, { useState } from 'react';\nimport { motion } from 'motion/react';\n");
}

content = content.replace(
  "return (\n              <div",
  "return (\n              <motion.div\n                initial={{ opacity: 0, y: 20 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}\n                key={service.id}\n              >\n              <div"
);

content = content.replace(
  /                  <\/div>\n                <\/div>\n              <\/div>\n            \);\n          }\)}/g,
  "                  </div>\n                </div>\n              </div>\n              </motion.div>\n            );\n          })}"
);

fs.writeFileSync('src/components/ServicesSection.tsx', content, 'utf8');
console.log('Added stagger animations to Services');
