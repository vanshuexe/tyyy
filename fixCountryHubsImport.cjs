const fs = require('fs');
let content = fs.readFileSync('src/components/CountryHubs.tsx', 'utf8');

content = content.replace(
  "import React, { useState } from 'react';\nimport { motion } from 'motion/react';\n { useState, useEffect } from 'react';",
  "import React, { useState, useEffect } from 'react';\nimport { motion } from 'motion/react';"
);

fs.writeFileSync('src/components/CountryHubs.tsx', content, 'utf8');
console.log('Fixed imports in CountryHubs');
