const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Ensure motion is imported
if (!content.includes('motion/react')) {
  content = content.replace(
    "import React, { useState, useEffect } from 'react';",
    "import React, { useState, useEffect } from 'react';\nimport { motion, AnimatePresence } from 'motion/react';"
  );
} else {
  if (!content.includes('AnimatePresence')) {
    content = content.replace("import { motion } from 'motion/react';", "import { motion, AnimatePresence } from 'motion/react';");
  }
}

// Wrap the main content
const mainOpenTagRegex = /<main className="flex-1">/g;

// Create a render function for page content or replace the blocks.
// Actually, it's easier to just wrap everything inside <main> with AnimatePresence.
// We'll replace <main className="flex-1"> with:
const newMainContent = `<main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >`;

// We need to find the end of the <main> block, but wait, it's easier to regex exactly.
content = content.replace('<main className="flex-1">', newMainContent);
content = content.replace('      </main>', '          </motion.div>\n        </AnimatePresence>\n      </main>');

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('Added Page Transitions to App.tsx');
