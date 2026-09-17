const fs = require('fs');
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

footer = footer.replace(
  '  const handleNav = (pageId: string) => {',
  '  const handleNav = (pageId: string, extraData?: any) => {\n    onNavigate(pageId, extraData);'
);

// We need to clean up the existing onNavigate call
footer = footer.replace(
  '  const handleNav = (pageId: string, extraData?: any) => {\n    onNavigate(pageId, extraData);\n    onNavigate(pageId);\n',
  '  const handleNav = (pageId: string, extraData?: any) => {\n    onNavigate(pageId, extraData);\n'
);

fs.writeFileSync('src/components/Footer.tsx', footer, 'utf8');
console.log('Fixed Footer signature');
