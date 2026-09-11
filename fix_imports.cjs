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
  
  if (!content.includes("import { ScrollReveal } from './ScrollReveal';")) {
     // inject it after react import
     content = content.replace(/(import React.*?from 'react';)/, "$1\nimport { ScrollReveal } from './ScrollReveal';");
  }
  
  fs.writeFileSync(file, content);
});
