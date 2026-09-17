const fs = require('fs');
let content = fs.readFileSync('src/components/HomeView.tsx', 'utf8');

const mapData = `
const cardUIData: Record<string, { time: string, legal: string, focus: string, bottom: string, heading: string, sub: string }> = {
  PT: { time: "WET • UTC+0", heading: "Portugal", sub: "EU Business & Company Formation Hub", legal: "LDA", focus: "Setup • Tax • Banking • Immigration", bottom: "LISBON • PORTO" },
  GB: { time: "GMT • UTC+0", heading: "United Kingdom", sub: "UK Business & Technology Hub", legal: "UK LTD", focus: "Setup • Operations • Technology", bottom: "LONDON" },
  IE: { time: "GMT • UTC+0", heading: "Ireland", sub: "EU Business & Technology Hub", legal: "LTD", focus: "CRO Setup • EU Market Access", bottom: "DUBLIN" },
  CH: { time: "CET • UTC+1", heading: "Switzerland", sub: "Swiss Business Hub", legal: "GmbH / AG", focus: "Cantonal Compliance • Banking", bottom: "ZURICH • GENEVA" },
  US: { time: "EST • UTC-5", heading: "USA", sub: "North American Business Hub", legal: "US Entity", focus: "Formation • Banking • Technology", bottom: "REMOTE-FIRST" },
  AE: { time: "GST • UTC+4", heading: "Dubai / UAE", sub: "Middle East Business Hub", legal: "Free Zone / Mainland", focus: "Licensing • Banking • Operations", bottom: "DUBAI" },
  IN: { time: "IST • UTC+5:30", heading: "India", sub: "Technology & Delivery Hub", legal: "PVT LTD", focus: "Development • IT • Outsourcing", bottom: "BANGALORE • DELHI" },
};
`;

const newCardCode = `            {COUNTRIES_DATA.slice(0, 3).map((country) => {
              const ui = cardUIData[country.code] || { time: "UTC", heading: country.name, sub: country.regionalFocus, legal: "Entity", focus: "Business", bottom: country.capital.toUpperCase() };
              return (
              <div
                key={country.id}
                onClick={() => onNavigate('jurisdictions')}
                className="cursor-pointer rounded-2xl p-6 transition-all duration-200 border text-left relative overflow-hidden bg-white border-gray-200 hover:border-gray-300 hover:shadow-md group"
              >
                {/* Header Row: Badge & Timezone */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-[#0b1b36] font-semibold text-[11px] tracking-wider">
                    {country.code}
                  </div>
                  <div className="text-[9px] text-gray-400 font-medium tracking-widest uppercase">
                    {ui.time}
                  </div>
                </div>

                {/* Country Name & Subheading */}
                <div className="mb-6">
                  <h3 className="text-[22px] font-display font-bold text-[#0b1b36] leading-tight mb-1">
                    {ui.heading}
                  </h3>
                  <p className="text-[11px] text-[#c91c1c] font-medium tracking-wide">
                    {ui.sub}
                  </p>
                </div>

                {/* Table-like Data */}
                <div className="space-y-3 mb-5 border-t border-b border-gray-100 py-4 mt-5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-400 font-light">Legal form</span>
                    <span className="text-[#0b1b36] font-bold text-right text-[11px]">{ui.legal}</span>
                  </div>
                  <div className="flex items-start justify-between text-[11px] gap-4 mt-3">
                    <span className="text-gray-400 font-light shrink-0">Focus</span>
                    <span className="text-[#0b1b36] font-bold text-right text-[11px]">{ui.focus}</span>
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
            })}`;

const startIdx = content.indexOf('{COUNTRIES_DATA.map((c) => (');
const endIdx = content.indexOf('))}');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newCardCode + content.substring(endIdx + 3);
}

content = content.replace('export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenConsultation }) => {', 'export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenConsultation }) => {\n' + mapData);

fs.writeFileSync('src/components/HomeView.tsx', content, 'utf8');
console.log('Fixed HomeView');
