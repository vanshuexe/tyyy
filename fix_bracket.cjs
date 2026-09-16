const fs = require('fs');
let content = fs.readFileSync('src/data/companyData.ts', 'utf8');

content = content.replace(/  \},\n    id: "/g, '  },\n  {\n    id: "');

fs.writeFileSync('src/data/companyData.ts', content);
