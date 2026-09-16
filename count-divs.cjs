const fs = require('fs');
const code = fs.readFileSync('src/components/ExpansionCalculator.tsx', 'utf-8');
const lines = code.split('\n');

let openDivs = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const opens = (line.match(/<div/g) || []).length;
  const closes = (line.match(/<\/div>/g) || []).length;
  openDivs += opens - closes;
  // if (opens !== closes) console.log(`Line ${i+1}: open ${opens} close ${closes} total ${openDivs}`);
}
console.log(`Total open divs: ${openDivs}`);
