const fs = require('fs');

const filesToFix = ['src/components/CountryMatrix.tsx', 'src/components/ServicesSection.tsx', 'src/components/IndustriesSection.tsx'];

for (const file of filesToFix) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    "import React, { useState } from 'react';\nimport { motion } from 'motion/react';\n { useState } from 'react';",
    "import React, { useState } from 'react';\nimport { motion } from 'motion/react';"
  );
  content = content.replace(
    "import React, { useState } from 'react';\nimport { motion } from 'motion/react';\n { useState, useMemo } from 'react';",
    "import React, { useState, useMemo } from 'react';\nimport { motion } from 'motion/react';"
  );
  fs.writeFileSync(file, content, 'utf8');
}
console.log('Fixed imports in multiple files');
