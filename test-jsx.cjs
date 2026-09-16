const fs = require('fs');
const content = fs.readFileSync('src/components/ExpansionCalculator.tsx', 'utf8');
try {
  require('@babel/core').transformSync(content, {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    filename: 'src/components/ExpansionCalculator.tsx'
  });
  console.log("Syntax is OK");
} catch (e) {
  console.error(e.message);
}
