const fs = require('fs');
let content = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');

content = content.replace(
  '</div>\n            );\n          </div>\n            );\n          })}\n        </div>',
  '</div>\n            );\n          })}\n        </div>'
);

fs.writeFileSync('src/components/CountryHubs.tsx', content, 'utf8');
console.log('Fixed');
