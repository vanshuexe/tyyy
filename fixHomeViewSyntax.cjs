const fs = require('fs');
let content = fs.readFileSync('src/components/HomeView.tsx', 'utf8');

// For the first loop (hubs)
content = content.replace(
  /              <\/div>\n            \);\n            }\)}/g,
  "              </div>\n              </motion.div>\n            );\n            })}"
);

// For the second loop (practices)
content = content.replace(
  /                <\/div>\n              \);\n            }\)}/g,
  "                </div>\n                </motion.div>\n              );\n            })}"
);

fs.writeFileSync('src/components/HomeView.tsx', content, 'utf8');
console.log('Fixed syntax in HomeView');
