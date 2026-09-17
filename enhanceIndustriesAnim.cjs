const fs = require('fs');
let content = fs.readFileSync('src/components/IndustriesSection.tsx', 'utf8');

if (!content.includes('motion/react')) {
  content = content.replace("import { CheckCircle2, Factory", "import { motion } from 'motion/react';\nimport { CheckCircle2, Factory");
}

content = content.replace(
  "{INDUSTRIES_SERVED.map((ind) => {",
  "{INDUSTRIES_SERVED.map((ind, idx) => {"
);

content = content.replace(
  "return (\n              <button",
  "return (\n              <motion.div\n                initial={{ opacity: 0, y: 15 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.4, delay: idx * 0.05 }}\n                key={ind.id}\n              >\n              <button"
);

content = content.replace(
  /                  <\/div>\n                <\/div>\n              <\/button>\n            \);\n          }\)}/g,
  "                  </div>\n                </div>\n              </button>\n              </motion.div>\n            );\n          })}"
);

fs.writeFileSync('src/components/IndustriesSection.tsx', content, 'utf8');
console.log('Added stagger animations to Industries');
