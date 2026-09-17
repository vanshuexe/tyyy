import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  category: string;
  onNavigateHome: () => void;
  onOpenConsultation?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  category,
  onNavigateHome,
  onOpenConsultation,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-12 sm:py-16 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#c91c1c] text-gray-500 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="text-[#3273a8]">{category}</span>
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-[#15325b] text-sm font-extrabold uppercase tracking-widest mb-3 border border-gray-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c91c1c]" />
              Official Advisory Practice
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-[#15325b] uppercase tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#c91c1c] hover:bg-[#a01616] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#c91c1c]/15 transition-all shrink-0 self-start md:self-auto"
            >
              <span>Speak to Director</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
