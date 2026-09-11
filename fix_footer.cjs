const fs = require('fs');

const file = 'src/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<span>Commercial Registry &amp; Anti-Money Laundering Compliant<\/span>\s*<span>•<\/span>\s*<span>GDPR Data Privacy Compliant<\/span>/,
  '<ComplianceBadge />'
);

fs.writeFileSync(file, content);
