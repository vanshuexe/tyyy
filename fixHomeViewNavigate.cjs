const fs = require('fs');

let homeView = fs.readFileSync('src/components/HomeView.tsx', 'utf8');

// For the View Full Matrix button
homeView = homeView.replace(
  "onClick={() => onNavigate('jurisdictions')}",
  "onClick={() => onNavigate('jurisdictions')}" // leave alone
);

// For the individual card click
homeView = homeView.replace(
  "onClick={() => onNavigate('jurisdictions')}",
  "onClick={() => onNavigate('jurisdictions', country.id)}"
);

// We need a global replace for all instances in map if there are multiple
// Wait, the first one is outside the map, the second is inside.
// We can just use a regex for the one inside the map (which has country context)
homeView = homeView.replace(
  /onClick=\{\(\) => onNavigate\('jurisdictions'\)\}\s*className="cursor-pointer/g,
  "onClick={() => onNavigate('jurisdictions', country.id)}\n                className=\"cursor-pointer"
);

fs.writeFileSync('src/components/HomeView.tsx', homeView, 'utf8');
console.log('Fixed HomeView nav links');
