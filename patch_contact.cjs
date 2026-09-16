const fs = require('fs');
let content = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

content = content.replace(/const \[formData, setFormData\] = useState\(\{[\s\S]*?\}\);/, `const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    currentCountry: '',
    targetCountry: 'Portugal',
    individualOrBusiness: 'Individual',
    serviceRequired: 'Company Formation',
    businessType: '',
    message: '',
    contactMethod: 'Email',
    consultationDate: '',
    agreed: false
  });`);

content = content.replace(/<form onSubmit={handleSubmit} className="space-y-5 text-left">[\s\S]*?<\/form>/, `<form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-extrabold font-display uppercase tracking-tight text-lg text-[#15325b]">
                    Tell us about your business
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      FULL NAME
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      EMAIL
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      PHONE / WHATSAPP
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      CURRENT COUNTRY
                    </label>
                    <input
                      type="text"
                      value={formData.currentCountry}
                      onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      TARGET COUNTRY / HUB
                    </label>
                    <select
                      value={formData.targetCountry}
                      onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    >
                      {COUNTRIES_DATA.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      INDIVIDUAL OR BUSINESS
                    </label>
                    <select
                      value={formData.individualOrBusiness}
                      onChange={(e) => setFormData({ ...formData, individualOrBusiness: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    >
                      <option value="Individual">Individual</option>
                      <option value="Business">Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      SERVICE REQUIRED
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    >
                      <option value="Company Formation">Company Formation</option>
                      <option value="Legal & Compliance">Legal & Compliance</option>
                      <option value="Accounting & Tax">Accounting & Tax</option>
                      <option value="Banking & Payments">Banking & Payments</option>
                      <option value="Immigration">Immigration</option>
                      <option value="IT & Technology">IT & Technology</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                    BUSINESS TYPE / INDUSTRY
                  </label>
                  <input
                    type="text"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                    BRIEF DESCRIPTION OF REQUIREMENT
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      PREFERRED CONTACT METHOD
                    </label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    >
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1">
                      PREFERRED CONSULTATION DATE/TIME
                    </label>
                    <input
                      type="text"
                      value={formData.consultationDate}
                      onChange={(e) => setFormData({ ...formData, consultationDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-[#c91c1c]"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="agreed"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-0.5 w-4 h-4 text-[#c91c1c] border-gray-300 rounded focus:ring-[#c91c1c]"
                  />
                  <label htmlFor="agreed" className="text-xs text-gray-600 leading-relaxed">
                    I agree to the Privacy Policy and consent to RKPT TECH LTD processing my information to respond to this enquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreed}
                  className="mt-6 py-3 px-8 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-700 font-bold uppercase tracking-widest text-[10px] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                </button>
              </form>`);

fs.writeFileSync('src/components/ContactSection.tsx', content);
