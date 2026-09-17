const fs = require('fs');

const path = 'src/components/CountryHubs.tsx';
let content = fs.readFileSync(path, 'utf8');

const mapData = `
const cardUIData: Record<string, { time: string, legal: string, focus: string, bottom: string, heading: string, sub: string }> = {
  PT: { time: "WET • UTC+0", heading: "Portugal", sub: "EU Business & Company Formation Hub", legal: "LDA", focus: "Setup • Tax • Banking • Immigration", bottom: "LISBON • PORTO" },
  GB: { time: "GMT • UTC+0", heading: "United Kingdom", sub: "UK Business & Technology Hub", legal: "UK LTD", focus: "Setup • Operations • Technology", bottom: "LONDON" },
  IE: { time: "GMT • UTC+0", heading: "Ireland", sub: "EU Business & Technology Hub", legal: "LTD", focus: "CRO Setup • EU Market Access", bottom: "DUBLIN" },
  CH: { time: "CET • UTC+1", heading: "Switzerland", sub: "Swiss Business Hub", legal: "GmbH / AG", focus: "Cantonal Compliance • Banking", bottom: "ZURICH • GENEVA" },
  US: { time: "EST • UTC-5", heading: "USA", sub: "North American Business Hub", legal: "US Entity", focus: "Formation • Banking • Technology", bottom: "REMOTE-FIRST" },
  AE: { time: "GST • UTC+4", heading: "Dubai / UAE", sub: "Middle East Business Hub", legal: "Free Zone / Mainland", focus: "Licensing • Banking • Operations", bottom: "DUBAI" },
  IN: { time: "IST • UTC+5:30", heading: "India", sub: "Technology & Delivery Hub", legal: "Private Limited", focus: "Development • IT • Outsourcing", bottom: "BANGALORE • DELHI" },
};
`;

content = content.replace('export const CountryHubs: React.FC<CountryHubsProps> = ({ onSelectCountry, onOpenConsultation }) => {', 'export const CountryHubs: React.FC<CountryHubsProps> = ({ onSelectCountry, onOpenConsultation }) => {\n' + mapData);

const startIdx = content.indexOf('return (\n              <div\n                key={country.id}');
const endIdx = content.indexOf('</div>\n            );\n          })}\n        </div>');

const newCardCode = `
            const ui = cardUIData[country.code] || { time: "UTC", heading: country.name, sub: country.regionalFocus, legal: "Entity", focus: "Business", bottom: country.capital.toUpperCase() };

            return (
              <div
                key={country.id}
                onClick={() => setSelectedCountry(country)}
                className={\`cursor-pointer rounded-2xl p-6 transition-all duration-200 border text-left relative overflow-hidden bg-white \${
                  isSelected
                    ? 'shadow-md border-gray-300 ring-1 ring-gray-300'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }\`}
              >
                {/* Header Row: Badge & Timezone */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-[#0b1b36] font-bold text-xs tracking-wider">
                    {country.code}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
                    {ui.time}
                  </div>
                </div>

                {/* Country Name & Subheading */}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-[#0b1b36] leading-tight mb-1">
                    {ui.heading}
                  </h3>
                  <p className="text-xs text-[#c91c1c] font-medium tracking-wide">
                    {ui.sub}
                  </p>
                </div>

                {/* Table-like Data */}
                <div className="space-y-2.5 mb-6 border-t border-b border-gray-100 py-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-light">Legal form</span>
                    <span className="text-[#0b1b36] font-bold text-right">{ui.legal}</span>
                  </div>
                  <div className="flex items-start justify-between text-xs gap-4">
                    <span className="text-gray-500 font-light shrink-0">Focus</span>
                    <span className="text-[#0b1b36] font-bold text-right">{ui.focus}</span>
                  </div>
                </div>

                {/* Footer Row */}
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-400">
                    {ui.bottom}
                  </span>
                  <span className="text-[#c91c1c] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
`;

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newCardCode.trim() + '\n          ' + content.substring(endIdx);
}

fs.writeFileSync(path, content, 'utf8');
