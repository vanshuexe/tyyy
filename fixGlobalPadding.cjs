const fs = require('fs');
const files = [
  'src/components/ServicesSection.tsx',
  'src/components/IndustriesSection.tsx',
  'src/components/AboutSection.tsx',
  'src/components/ContactSection.tsx',
  'src/components/ExpansionCalculator.tsx',
  'src/components/ProcessSection.tsx',
  'src/components/CountryHubs.tsx',
  'src/components/CountryMatrix.tsx',
];

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace section py-4 or py-8 with py-16 or py-24
    content = content.replace(/<section([^>]*)className="([^"]*)py-4([^"]*)"/g, '<section$1className="$2py-16$3"');
    content = content.replace(/<section([^>]*)className="([^"]*)py-8([^"]*)"/g, '<section$1className="$2py-20$3"');
    
    // Just in case they are standalone strings
    if (file.includes('CountryHubs')) {
       content = content.replace(/className="py-4/g, 'className="py-16');
    }
    
    fs.writeFileSync(file, content, 'utf8');
  } catch (e) {
    console.log('Skipping ' + file);
  }
}

console.log('Fixed global section padding');
