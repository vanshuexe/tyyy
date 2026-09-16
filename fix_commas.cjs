const fs = require('fs');
let content = fs.readFileSync('src/data/companyData.ts', 'utf8');

// Replace the buggy new items without commas. I'll just use a regex to add commas at the end of these lines
content = content.replace(/    (id|category|number|badge|title|icon|tagline|description): ('.*?'|".*?")\n/g, '    $1: $2,\n');
// Also fix any missed ones
fs.writeFileSync('src/data/companyData.ts', content);
