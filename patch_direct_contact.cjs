const fs = require('fs');
let content = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

const regex = /\{\/\* Left Column:[\s\S]*?\{\/\* Right Column:/;
const replacement = `{/* Left Column: Direct Contact */}
          <div className="lg:col-span-5 space-y-6 mt-12 lg:mt-0 lg:pl-10 lg:border-l border-gray-100">
            <div className="space-y-6">
              <h4 className="font-display font-extrabold tracking-tight text-xl text-[#0b1b36]">
                Direct contact
              </h4>
              
              <div className="divide-y divide-gray-200 border-b border-gray-200">
                <a href={\`mailto:\${COMPANY_INFO.contact.email}\`} className="flex items-center justify-between py-4 group hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-[#0b1b36] text-sm">Email</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0b1b36] transition-colors" />
                </a>
                <a href={\`tel:\${COMPANY_INFO.contact.phoneEu}\`} className="flex items-center justify-between py-4 group hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-[#0b1b36] text-sm">Phone</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0b1b36] transition-colors" />
                </a>
                <a href="#" className="flex items-center justify-between py-4 group hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-[#0b1b36] text-sm">WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0b1b36] transition-colors" />
                </a>
                <a href="#" className="flex items-center justify-between py-4 group hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-[#0b1b36] text-sm">Book Online</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0b1b36] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column:`;

content = content.replace(regex, replacement);

fs.writeFileSync('src/components/ContactSection.tsx', content);
