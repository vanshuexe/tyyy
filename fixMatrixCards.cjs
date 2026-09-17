const fs = require('fs');
let content = fs.readFileSync('src/components/CountryMatrix.tsx', 'utf8');

// Revert padding for the card content
content = content.replace(/p-10/g, 'p-6');

// Revert gaps in the key-value flex rows
content = content.replace(/gap-8/g, 'gap-3');

// Revert space-y for the rows
content = content.replace(/space-y-6/g, 'space-y-3.5');

// Adjust font size for keys and values
content = content.replace(/text-sm text-gray-400/g, 'text-xs text-gray-500');
content = content.replace(/text-sm text-\[#0b1b36\]/g, 'text-xs text-[#0b1b36]');

// Ensure footer also looks balanced
content = content.replace(/<div className="bg-gray-50 p-10/g, '<div className="bg-gray-50 p-5'); // it might be p-4 originally

// Let's also adjust the grid gap to slightly smaller if it's gap-10 md:gap-10
content = content.replace(/gap-10 md:gap-10/g, 'gap-6');

fs.writeFileSync('src/components/CountryMatrix.tsx', content, 'utf8');
console.log('Fixed CountryMatrix cards');
