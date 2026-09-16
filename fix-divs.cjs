const fs = require('fs');
let code = fs.readFileSync('src/components/ExpansionCalculator.tsx', 'utf-8');
// remove the last 3 occurrences of </div>
for (let i = 0; i < 3; i++) {
  const lastIndex = code.lastIndexOf('</div>');
  if (lastIndex !== -1) {
    code = code.substring(0, lastIndex) + code.substring(lastIndex + 6);
  }
}
fs.writeFileSync('src/components/ExpansionCalculator.tsx', code);
