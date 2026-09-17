const fs = require('fs');
let content = fs.readFileSync('src/components/CountryMatrix.tsx', 'utf8');

if (!content.includes('motion/react')) {
  content = content.replace("import React,", "import React, { useState } from 'react';\nimport { motion } from 'motion/react';\n");
}

// Replace the standard `div` map wrapper with a motion.div
content = content.replace(
  "{filteredData.map((country) => (",
  "{filteredData.map((country, idx) => (\n              <motion.div\n                initial={{ opacity: 0, y: 30 }}\n                animate={{ opacity: 1, y: 0 }}\n                transition={{ duration: 0.5, delay: idx * 0.1 }}\n                key={country.id}\n              >"
);

content = content.replace(
  "              <div key={country.id} className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full border-t-4 ${country.color}`}>",
  "              <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full border-t-4 ${country.color}`}>"
);

// Close the motion.div properly
// The card ends with:
//                   </div>
//                 </div>
//               </div>
// We need to add </motion.div> after </div>
// It's safer to use regex.
content = content.replace(
  /                  <\/div>\n                <\/div>\n              <\/div>\n            \)\)/g,
  "                  </div>\n                </div>\n              </div>\n              </motion.div>\n            ))"
);

fs.writeFileSync('src/components/CountryMatrix.tsx', content, 'utf8');
console.log('Added stagger animations to Matrix');
