const fs = require('fs');
let content = fs.readFileSync('src/components/HomeView.tsx', 'utf8');

if (!content.includes('motion/react')) {
  // Try to find an import to append to
  content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'motion/react';\n");
  // If it's something else
  if (!content.includes('import { motion }')) {
    content = "import { motion } from 'motion/react';\n" + content;
  }
}

// Enhance Hubs
content = content.replace(
  "{COUNTRIES_DATA.slice(0, 3).map((country) => {",
  "{COUNTRIES_DATA.slice(0, 3).map((country, idx) => {"
);

content = content.replace(
  "              return (\n              <div\n                key={country.id}",
  "              return (\n              <motion.div\n                initial={{ opacity: 0, y: 20 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.5, delay: idx * 0.15 }}\n                key={country.id}\n              >\n              <div"
);

content = content.replace(
  /                  <\/div>\n                <\/div>\n              <\/div>\n            \);\n            }\)}/g,
  "                  </div>\n                </div>\n              </div>\n              </motion.div>\n            );\n            })}"
);

// Enhance Practice Areas
content = content.replace(
  "{practiceAreasPreview.map((practice) => {",
  "{practiceAreasPreview.map((practice, idx) => {"
);

content = content.replace(
  "              return (\n                <div\n                  key={practice.id}",
  "              return (\n                <motion.div\n                  initial={{ opacity: 0, y: 20 }}\n                  whileInView={{ opacity: 1, y: 0 }}\n                  viewport={{ once: true }}\n                  transition={{ duration: 0.5, delay: idx * 0.1 }}\n                  key={practice.id}\n                >\n                <div"
);

content = content.replace(
  /                    <\/div>\n                  <\/div>\n                <\/div>\n              \);\n            }\)}/g,
  "                    </div>\n                  </div>\n                </div>\n                </motion.div>\n              );\n            })}"
);


fs.writeFileSync('src/components/HomeView.tsx', content, 'utf8');
console.log('Added stagger animations to HomeView');
