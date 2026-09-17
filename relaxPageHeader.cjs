const fs = require('fs');
let content = fs.readFileSync('src/components/PageHeader.tsx', 'utf8');

content = content.replace(/py-4 sm:py-4/g, 'py-12 sm:py-16');
content = content.replace(/mb-4/g, 'mb-6');
content = content.replace(/text-2xl sm:text-3xl/g, 'text-3xl sm:text-4xl');

fs.writeFileSync('src/components/PageHeader.tsx', content, 'utf8');
console.log('Relaxed PageHeader');
