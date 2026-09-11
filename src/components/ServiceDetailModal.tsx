import React from 'react';
import { ServicePillar } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, FileCheck, Layers } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServicePillar | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-200">
        {/* Modal Header with KCID Crimson Border Accent */}
        <div className="sticky top-0 z-10 bg-[#0b1b36] text-white p-6 rounded-t-xl flex items-start justify-between border-b-4 border-[#c91c1c]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#15325b] text-blue-200 border border-[#3273a8]/40">
                Service Pillar {service.number}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400">{service.badge}</span>
            </div>
            <h3 className="text-2xl font-extrabold font-display uppercase tracking-tight text-white">{service.title}</h3>
            <p className="text-xs text-[#3273a8] font-bold uppercase tracking-wider">{service.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#15325b] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 text-gray-700">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#3273a8] tracking-widest mb-2">
              Scope of Service
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              {service.description}
            </p>
          </div>

          {/* Sub Categories with direct PDF bullets */}
          <div className="space-y-6">
            {service.subCategories.map((sub, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-5 border-l-4 border-l-[#15325b]">
                <h5 className="font-bold text-sm text-[#15325b] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#3273a8]" />
                  <span>{sub.title}</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sub.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#c91c1c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Deliverables & Assurances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#15325b] flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#c91c1c]" />
                <span>Deliverables You Receive:</span>
              </h5>
              <ul className="space-y-2">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c91c1c]" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#15325b] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3273a8]" />
                <span>RKPT Quality Standard:</span>
              </h5>
              <ul className="space-y-2">
                {service.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3273a8]" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 sm:p-6 rounded-b-xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-600 text-center sm:text-left">
            Need customized advisory for this service across Portugal, Switzerland, or Ireland?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-md border border-gray-300 text-[#15325b] text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>Consult on Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
