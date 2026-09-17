const fs = require('fs');
let content = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');

// For the selector grid
content = content.replace(/gap-8 md:gap-10/g, 'gap-4 sm:gap-6');
content = content.replace(/p-10/g, 'p-6'); // inner card padding

// For the details section grid
content = content.replace(/grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10/g, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6');

// Adjust spacing
content = content.replace(/space-y-5/g, 'space-y-4');

fs.writeFileSync('src/components/CountryHubs.tsx', content, 'utf8');
console.log('Fixed CountryHubs cards');
