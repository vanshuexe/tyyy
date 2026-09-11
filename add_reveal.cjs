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
  
  if (!content.includes("ScrollReveal")) {
    // Add import
    content = content.replace(
      "import React", 
      "import React from 'react';\nimport { ScrollReveal } from './ScrollReveal';\n//x"
    );
    content = content.replace("import React from 'react';\nimport { ScrollReveal } from './ScrollReveal';\n//x", "import { ScrollReveal } from './ScrollReveal';"); // cleanup if it was already there
    // If we couldn't replace because it was `import React, { ... } from 'react';`
    if (!content.includes("import { ScrollReveal }")) {
       content = content.replace("import ", "import { ScrollReveal } from './ScrollReveal';\nimport ");
    }
  }

  // Find all <section ...> ... </section> and wrap the immediate child in <ScrollReveal>
  // Simple regex might fail on nested sections, but these components usually have <section><div className="max-w...">...</div></section>
  // Let's just wrap the whole section!
  // No, wrapping the section itself works if it doesn't have background colors that span full width.
  // Wait, if we wrap <section>, the background color might not span full width?
  // ScrollReveal renders a motion.div. If it wraps <div className="max-w-..."> inside <section>, the section background stays static, and the content fades up. That's better!
  
  content = content.replace(/(<section[^>]*>)\s*(<div[^>]*max-w-[^>]*>)/g, "$1\n      <ScrollReveal>\n        $2");
  
  // Now we need to close </ScrollReveal> right before </section>
  content = content.replace(/(<\/div>\s*)(<\/section>)/g, "$1      </ScrollReveal>\n$2");
  
  fs.writeFileSync(file, content);
  console.log(`Processed ${file}`);
});
