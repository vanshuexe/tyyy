const fs = require('fs');
let content = fs.readFileSync('src/data/companyData.ts', 'utf8');

content = content.replace(/  \},\n\n    id: "/g, '  },\n  {\n    id: "');
content = content.replace(/  \},\n  \{\n    id: "(ai-integration|software-development|web-ecommerce|data-analytics|cloud-solutions|system-integration|cybersecurity)",/g, '  },\n  {\n    id: "$1",');
// Oh wait, my problem was that the objects don't have `{` opening them.
// I will just use regex to match all `    id: "` that are not preceded by `{`
content = content.replace(/([^\s{])\n\s*id: "/g, '$1\n  {\n    id: "');
// And also it seems there is a missing `{` at line 454. 
content = content.replace(/  \},\n\s+id: "it-support",/g, '  },\n  {\n    id: "it-support",');
content = content.replace(/  \},\n\s+id: "ai-integration",/g, '  },\n  {\n    id: "ai-integration",');
content = content.replace(/  \},\n\s+id: "software-development",/g, '  },\n  {\n    id: "software-development",');
content = content.replace(/  \},\n\s+id: "web-ecommerce",/g, '  },\n  {\n    id: "web-ecommerce",');
content = content.replace(/  \},\n\s+id: "data-analytics",/g, '  },\n  {\n    id: "data-analytics",');
content = content.replace(/  \},\n\s+id: "cloud-solutions",/g, '  },\n  {\n    id: "cloud-solutions",');
content = content.replace(/  \},\n\s+id: "system-integration",/g, '  },\n  {\n    id: "system-integration",');
content = content.replace(/  \},\n\s+id: "cybersecurity",/g, '  },\n  {\n    id: "cybersecurity",');
fs.writeFileSync('src/data/companyData.ts', content);
