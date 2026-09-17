import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, CheckCircle, X } from 'lucide-react';

export const ComplianceBadge: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 transition-colors group cursor-pointer"
        title="View Compliance Details"
      >
        <ShieldCheck className="w-4 h-4 text-green-700 group-hover:scale-110 transition-transform" />
        <span className="text-sm sm:text-xs font-bold text-green-800 tracking-wide uppercase">Verified Compliant</span>
      </button>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-10"
            >
              <div className="bg-[#0b1b36] p-6 text-white flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg">Trust & Compliance</h3>
                    <p className="text-gray-400 text-xs mt-1 font-mono">ID: RKPT-COMP-{new Date().getFullYear()}-EU</p>
                  </div>
                </div>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-4 h-4 text-[#3273a8]" />
                      <span className="font-bold text-sm text-gray-900">GDPR Compliant</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Strict adherence to the General Data Protection Regulation (EU) 2016/679. Your data is encrypted and securely processed.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-[#c91c1c]" />
                      <span className="font-bold text-sm text-gray-900">AML/KYC Regulated</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Fully compliant with Anti-Money Laundering directives across PT, CH, and IE jurisdictions.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Regulatory Adherence</h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      Data localized within EU/Swiss secure servers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      Annual 3rd-party security audits
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      Registered Corporate Service Provider
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-400 font-mono uppercase">Verified: {new Date().toLocaleDateString()}</span>
                <button onClick={() => setShowModal(false)} className="text-sm font-semibold text-[#1e4a87] hover:text-[#0b1b36] transition-colors cursor-pointer">
                  Close Verification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
