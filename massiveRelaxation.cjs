const fs = require('fs');
const path = require('path');

const dir = 'src/components/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Universal Section Padding
  // Find any section with py-\d+ and replace with py-20 md:py-28
  const sectionRegex = /<section([^>]*)className="([^"]*)py-\d+(?: sm:py-\d+)?([^"]*)"/g;
  if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, '<section$1className="$2py-20 md:py-28$3"');
    changed = true;
  }
  
  // Also handle Hero separately if needed, but let's see if it caught it.
  // Actually hero has pt-4 pb-4. Let's make it more spacious.
  if (file === 'Hero.tsx') {
    content = content.replace(/pt-4 pb-4 lg:pt-6 lg:pb-4/g, 'pt-20 pb-20 lg:pt-32 lg:pb-32');
    content = content.replace(/gap-6/g, 'gap-10');
    content = content.replace(/gap-4/g, 'gap-8');
    changed = true;
  }

  // 2. Eradicate tiny text globally
  const tinyTextRegex = /text-\[(?:9|10|11)px\]/g;
  if (tinyTextRegex.test(content)) {
    content = content.replace(tinyTextRegex, 'text-sm');
    changed = true;
  }

  // 3. Relax grid gaps
  // Look for `gap-4` or `gap-5` or `gap-6` in grids
  const gridGapRegex = /grid([^"}]*)gap-[456]/g;
  if (gridGapRegex.test(content)) {
    content = content.replace(gridGapRegex, 'grid$1gap-8 md:gap-10');
    changed = true;
  }

  // 4. Relax Card padding
  // Commonly p-4, p-5 or p-6 inside cards. We can look for `rounded-xl` or `rounded-2xl` followed by `p-4` or `p-5`
  const cardPadRegex = /rounded-(?:xl|2xl|lg)([^"}]*)p-[45]/g;
  if (cardPadRegex.test(content)) {
    content = content.replace(cardPadRegex, 'rounded-2xl$1p-8 md:p-10');
    changed = true;
  }
  
  // Specific catch for HomeView Hub cards which might just be `p-6` -> make them `p-10`
  if (file === 'HomeView.tsx' || file === 'CountryHubs.tsx') {
    content = content.replace(/p-6/g, 'p-10');
    content = content.replace(/mb-4/g, 'mb-6');
    content = content.replace(/mb-5/g, 'mb-8');
    content = content.replace(/space-y-3/g, 'space-y-5');
    changed = true;
  }

  // Matrix specific
  if (file === 'CountryMatrix.tsx') {
    content = content.replace(/p-8/g, 'p-10');
    content = content.replace(/gap-6/g, 'gap-8');
    content = content.replace(/mb-2/g, 'mb-4');
    content = content.replace(/mb-6/g, 'mb-8');
    content = content.replace(/space-y-4/g, 'space-y-6');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Relaxed ${file}`);
  }
}
console.log('Massive relaxation complete.');
