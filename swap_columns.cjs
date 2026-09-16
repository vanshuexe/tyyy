const fs = require('fs');
let content = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

const leftColMatch = content.match(/\{\/\* Left Column: Direct Contact \*\/\}[\s\S]*?\{\/\* Right Column:/);
const rightColMatch = content.match(/\{\/\* Right Column:[\s\S]*?<\/form>\s*<\/div>/);

if (leftColMatch && rightColMatch) {
  let newContent = content.replace(leftColMatch[0], rightColMatch[0] + "\n\n" + leftColMatch[0].replace("{/* Right Column:", ""));
  newContent = newContent.replace(rightColMatch[0], "");
  // fix the leftover Right Column comment in the second replace
  fs.writeFileSync('src/components/ContactSection.tsx', newContent);
}
