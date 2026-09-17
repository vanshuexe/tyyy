const fs = require('fs');
let content = fs.readFileSync('src/components/IndustriesSection.tsx', 'utf8');

if (!content.includes('motion/react')) {
  content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { motion } from 'motion/react';");
}

fs.writeFileSync('src/components/IndustriesSection.tsx', content, 'utf8');
console.log('Fixed imports in IndustriesSection');
