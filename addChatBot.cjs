const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Add import
content = content.replace(
  "import { Footer } from './components/Footer';",
  "import { Footer } from './components/Footer';\nimport { ChatBot } from './components/ChatBot';"
);

// Add ChatBot right before the closing </div> of the main return
// The return is:
//       )}
//     </div>
//   );
// }

content = content.replace(
  /      \)\}\n    <\/div>\n  \);\n\}/g,
  "      )}\n      <ChatBot />\n    </div>\n  );\n}"
);

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('Added ChatBot to App.tsx');
