const fs = require('fs');
let content = fs.readFileSync('src/components/Logo.tsx', 'utf8');

content = content.replace(
  /className=\{\`\$\{sizeClasses\} w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 \$\{variant === \\'white\\' \? \\'invert mix-blend-screen brightness-200 contrast-125\\' : \\'mix-blend-multiply\\'\}\`\}/g,
  "className={`${sizeClasses} w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 ${variant === 'white' ? 'invert mix-blend-screen brightness-200 contrast-125' : 'mix-blend-multiply'}`}"
);

fs.writeFileSync('src/components/Logo.tsx', content, 'utf8');
console.log('Fixed');
