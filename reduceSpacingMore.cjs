const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));
files.push('src/App.tsx');

const replacements = {
  // Global reductions
  'py-16': 'py-6',
  'py-12': 'py-4',
  'py-10': 'py-4',
  'py-8': 'py-4',
  'py-6': 'py-2',
  'pt-16': 'pt-6',
  'pt-12': 'pt-4',
  'pt-10': 'pt-4',
  'pt-8': 'pt-4',
  'pb-16': 'pb-6',
  'pb-12': 'pb-4',
  'pb-10': 'pb-4',
  'pb-8': 'pb-4',
  
  'mb-16': 'mb-6',
  'mb-12': 'mb-4',
  'mb-10': 'mb-4',
  'mb-8': 'mb-4',
  'mt-16': 'mt-6',
  'mt-12': 'mt-4',
  'mt-10': 'mt-4',
  'mt-8': 'mt-4',

  'gap-16': 'gap-6',
  'gap-12': 'gap-4',
  'gap-10': 'gap-4',
  'gap-8': 'gap-4',

  // lg breakpoints
  'lg:py-16': 'lg:py-6',
  'lg:py-12': 'lg:py-6',
  'lg:py-10': 'lg:py-4',
  'lg:py-8': 'lg:py-4',
  'lg:pt-16': 'lg:pt-6',
  'lg:pt-12': 'lg:pt-6',
  'lg:pt-10': 'lg:pt-4',
  'lg:pt-8': 'lg:pt-4',
  'lg:pb-16': 'lg:pb-6',
  'lg:pb-12': 'lg:pb-6',
  'lg:pb-10': 'lg:pb-4',
  'lg:pb-8': 'lg:pb-4',

  'lg:mb-16': 'lg:mb-6',
  'lg:mb-12': 'lg:mb-6',
  'lg:mb-10': 'lg:mb-4',
  'lg:mb-8': 'lg:mb-4',
  'lg:mt-16': 'lg:mt-6',
  'lg:mt-12': 'lg:mt-6',
  'lg:mt-10': 'lg:mt-4',
  'lg:mt-8': 'lg:mt-4',

  'lg:gap-16': 'lg:gap-6',
  'lg:gap-12': 'lg:gap-6',
  'lg:gap-10': 'lg:gap-4',
  'lg:gap-8': 'lg:gap-4',

  // md breakpoints
  'md:py-16': 'md:py-4',
  'md:py-12': 'md:py-4',
  'md:py-10': 'md:py-4',
  'md:py-8': 'md:py-4',
  'md:pt-16': 'md:pt-4',
  'md:pt-12': 'md:pt-4',
  'md:pt-10': 'md:pt-4',
  'md:pt-8': 'md:pt-4',
  'md:pb-16': 'md:pb-4',
  'md:pb-12': 'md:pb-4',
  'md:pb-10': 'md:pb-4',
  'md:pb-8': 'md:pb-4',

  'md:mb-16': 'md:mb-4',
  'md:mb-12': 'md:mb-4',
  'md:mb-10': 'md:mb-4',
  'md:mb-8': 'md:mb-4',
  'md:mt-16': 'md:mt-4',
  'md:mt-12': 'md:mt-4',
  'md:mt-10': 'md:mt-4',
  'md:mt-8': 'md:mt-4',

  'md:gap-16': 'md:gap-4',
  'md:gap-12': 'md:gap-4',
  'md:gap-10': 'md:gap-4',
  'md:gap-8': 'md:gap-4',

  // sm breakpoints
  'sm:py-16': 'sm:py-4',
  'sm:py-12': 'sm:py-4',
  'sm:py-10': 'sm:py-4',
  'sm:py-8': 'sm:py-4',
  'sm:pt-16': 'sm:pt-4',
  'sm:pt-12': 'sm:pt-4',
  'sm:pt-10': 'sm:pt-4',
  'sm:pt-8': 'sm:pt-4',
  'sm:pb-16': 'sm:pb-4',
  'sm:pb-12': 'sm:pb-4',
  'sm:pb-10': 'sm:pb-4',
  'sm:pb-8': 'sm:pb-4',

  'sm:mb-16': 'sm:mb-4',
  'sm:mb-12': 'sm:mb-4',
  'sm:mb-10': 'sm:mb-4',
  'sm:mb-8': 'sm:mb-4',
  'sm:mt-16': 'sm:mt-4',
  'sm:mt-12': 'sm:mt-4',
  'sm:mt-10': 'sm:mt-4',
  'sm:mt-8': 'sm:mt-4',

  'sm:gap-16': 'sm:gap-4',
  'sm:gap-12': 'sm:gap-4',
  'sm:gap-10': 'sm:gap-4',
  'sm:gap-8': 'sm:gap-4',
};

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  for (const [oldClass, newClass] of Object.entries(replacements)) {
    const escapedOld = oldClass.replace(/:/g, '\\:');
    const regex = new RegExp(`(?<=[\\s"'\\\`])(${escapedOld})(?=[\\s"'\\\`])`, 'g');
    content = content.replace(regex, newClass);
  }

  // A few extra regex passes to replace very large h-[400px] to h-[300px] or h-[200px] if necessary, but that might break layout. 
  // Wait, user said "Remove maximum empty space from the whole websites or pages".
  // Reducing the large paddings should be enough.

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
