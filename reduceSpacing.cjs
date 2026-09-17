const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));
files.push('src/App.tsx');
if (fs.existsSync('src/components/HomeView.tsx')) {
  // Already in the list
}

const replacements = {
  'py-32': 'py-16',
  'py-24': 'py-12',
  'py-20': 'py-10',
  'py-16': 'py-8',
  'py-12': 'py-6',
  'pt-32': 'pt-16',
  'pt-24': 'pt-12',
  'pt-20': 'pt-10',
  'pt-16': 'pt-8',
  'pb-32': 'pb-16',
  'pb-24': 'pb-12',
  'pb-20': 'pb-10',
  'pb-16': 'pb-8',
  'mb-32': 'mb-16',
  'mb-24': 'mb-12',
  'mb-20': 'mb-10',
  'mb-16': 'mb-8',
  'mt-32': 'mt-16',
  'mt-24': 'mt-12',
  'mt-20': 'mt-10',
  'mt-16': 'mt-8',
  'gap-16': 'gap-8',
  'gap-12': 'gap-6',
  'gap-10': 'gap-5',
  
  // lg breakpoints
  'lg:py-32': 'lg:py-16',
  'lg:py-24': 'lg:py-12',
  'lg:py-20': 'lg:py-10',
  'lg:py-16': 'lg:py-8',
  'lg:pt-32': 'lg:pt-16',
  'lg:pt-24': 'lg:pt-12',
  'lg:pt-20': 'lg:pt-10',
  'lg:pt-16': 'lg:pt-8',
  'lg:pb-32': 'lg:pb-16',
  'lg:pb-24': 'lg:pb-12',
  'lg:pb-20': 'lg:pb-10',
  'lg:pb-16': 'lg:pb-8',
  'lg:mb-32': 'lg:mb-16',
  'lg:mb-24': 'lg:mb-12',
  'lg:mb-20': 'lg:mb-10',
  'lg:mb-16': 'lg:mb-8',
  'lg:mt-32': 'lg:mt-16',
  'lg:mt-24': 'lg:mt-12',
  'lg:mt-20': 'lg:mt-10',
  'lg:mt-16': 'lg:mt-8',
  'lg:gap-16': 'lg:gap-8',
  'lg:gap-12': 'lg:gap-6',

  // md breakpoints
  'md:py-32': 'md:py-16',
  'md:py-24': 'md:py-12',
  'md:py-20': 'md:py-10',
  'md:py-16': 'md:py-8',
  'md:pt-32': 'md:pt-16',
  'md:pt-24': 'md:pt-12',
  'md:pt-20': 'md:pt-10',
  'md:pt-16': 'md:pt-8',
  'md:pb-32': 'md:pb-16',
  'md:pb-24': 'md:pb-12',
  'md:pb-20': 'md:pb-10',
  'md:pb-16': 'md:pb-8',
  'md:mb-32': 'md:mb-16',
  'md:mb-24': 'md:mb-12',
  'md:mb-20': 'md:mb-10',
  'md:mb-16': 'md:mb-8',
  'md:mt-32': 'md:mt-16',
  'md:mt-24': 'md:mt-12',
  'md:mt-20': 'md:mt-10',
  'md:mt-16': 'md:mt-8',
  'md:gap-16': 'md:gap-8',
  'md:gap-12': 'md:gap-6',
  
  // sm breakpoints
  'sm:py-32': 'sm:py-16',
  'sm:py-24': 'sm:py-12',
  'sm:py-20': 'sm:py-10',
  'sm:py-16': 'sm:py-8',
  'sm:pt-32': 'sm:pt-16',
  'sm:pt-24': 'sm:pt-12',
  'sm:pt-20': 'sm:pt-10',
  'sm:pt-16': 'sm:pt-8',
  'sm:pb-32': 'sm:pb-16',
  'sm:pb-24': 'sm:pb-12',
  'sm:pb-20': 'sm:pb-10',
  'sm:pb-16': 'sm:pb-8',
  'sm:mb-32': 'sm:mb-16',
  'sm:mb-24': 'sm:mb-12',
  'sm:mb-20': 'sm:mb-10',
  'sm:mb-16': 'sm:mb-8',
  'sm:mt-32': 'sm:mt-16',
  'sm:mt-24': 'sm:mt-12',
  'sm:mt-20': 'sm:mt-10',
  'sm:mt-16': 'sm:mt-8',
  'sm:gap-16': 'sm:gap-8',
  'sm:gap-12': 'sm:gap-6',
};

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We want to replace these strings safely. Using regex with word boundaries around the class names.
  for (const [oldClass, newClass] of Object.entries(replacements)) {
    // Escape the old class in case it has colons
    const escapedOld = oldClass.replace(/:/g, '\\:');
    // Using positive lookahead/lookbehind or word boundaries. 
    // Wait, \b doesn't work well with colons. 
    // We can use a regex that matches quotes or spaces around it.
    const regex = new RegExp(`(?<=[\\s"'\\\`])(${escapedOld})(?=[\\s"'\\\`])`, 'g');
    content = content.replace(regex, newClass);
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
