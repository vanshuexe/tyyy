const fs = require('fs');
let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

nav = nav.replace(
  "{ id: 'estimator', label: 'Scope Planner' },",
  "{ id: 'estimator', label: 'Scope Planner' },\n    { id: 'matrix', label: 'Country Details' },"
);

fs.writeFileSync('src/components/Navbar.tsx', nav, 'utf8');
console.log('Navbar updated with Matrix link');
