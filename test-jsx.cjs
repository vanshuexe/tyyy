const fs = require('fs');
const content = fs.readFileSync('src/components/ExpansionCalculator.tsx', 'utf8');

let openTags = (content.match(/<div(\s|>)/g) || []).length;
let closeTags = (content.match(/<\/div>/g) || []).length;

console.log('Open divs:', openTags, 'Close divs:', closeTags);
