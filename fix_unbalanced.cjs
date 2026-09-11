const fs = require('fs');

const files = [
  'src/components/HomeView.tsx',
  'src/components/CountryHubs.tsx',
  'src/components/ServicesSection.tsx',
  'src/components/ProcessSection.tsx',
  'src/components/AboutSection.tsx',
  'src/components/ContactSection.tsx',
  'src/components/TestimonialCarousel.tsx',
  'src/components/ExpansionCalculator.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  const openCount = (content.match(/<ScrollReveal>/g) || []).length;
  const closeCount = (content.match(/<\/ScrollReveal>/g) || []).length;
  
  if (openCount !== closeCount) {
    console.log(`Unbalanced in ${file}: open ${openCount}, close ${closeCount}`);
    
    // Quick fix: remove ALL ScrollReveal wrappers in the file so we can re-apply them correctly
    // or manually fix them.
    content = content.replace(/<ScrollReveal>/g, '');
    content = content.replace(/<\/ScrollReveal>/g, '');
    fs.writeFileSync(file, content);
    console.log(`Removed ScrollReveal from ${file}`);
  }
});
