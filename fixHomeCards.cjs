const fs = require('fs');
let content = fs.readFileSync('src/components/HomeView.tsx', 'utf8');

// For the hub cards
content = content.replace(/p-10/g, 'p-6'); // inner card padding
content = content.replace(/space-y-5/g, 'space-y-4');
content = content.replace(/mb-8/g, 'mb-5');

fs.writeFileSync('src/components/HomeView.tsx', content, 'utf8');
console.log('Fixed HomeView cards');
