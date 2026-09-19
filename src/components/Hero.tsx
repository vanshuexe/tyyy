import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreEstimator }) => {
  const [zoomedCard, setZoomedCard] = useState<string | null>(null);

  // 3D Tilt Logic for Desktop (disabled on touch devices for performance)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable 3D tilt tracking on touch/mobile devices to keep scrolling smooth
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const networkNodes = [
    { id: 'net-us', leftPct: 15.56, topPct: 20.59, code: 'us', name: 'USA', desc: 'LLC & Corp Formation, US Tax & IT Solutions' },
    { id: 'net-gb', leftPct: 15.56, topPct: 79.41, code: 'gb', name: 'UK', desc: 'LTD Incorporation, Banking & Financial Compliance' },
    { id: 'net-ie', leftPct: 50.00, topPct: 14.71, code: 'ie', name: 'Ireland', desc: 'EU Tech Gateway, LTD Setup & CRO Filings' },
    { id: 'net-pt', leftPct: 36.67, topPct: 86.76, code: 'pt', name: 'Portugal', desc: 'LDA Formation, NHR & Golden Visa Residency' },
    { id: 'net-ch', leftPct: 63.33, topPct: 86.76, code: 'ch', name: 'Swiss', desc: 'GmbH / AG Structuring & Cantonal Compliance' },
    { id: 'net-ae', leftPct: 84.44, topPct: 20.59, code: 'ae', name: 'UAE', desc: 'Dubai Freezone & Mainland Company Setup' },
    { id: 'net-in', leftPct: 84.44, topPct: 79.41, code: 'in', name: 'India', desc: 'Pvt Ltd Setup, IT & AI Engineering R&D Hub' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-gray-900 pt-12 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-32 border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className="flex flex-col items-start text-left"
          >
            {/* Subtle Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-gray-200 text-gray-600 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-4">
              <ShieldCheck className="w-4 h-4 text-[#c91c1c] shrink-0" />
              <span>OFFICIAL BUSINESS & TECHNOLOGY PARTNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-[#0b1b36] leading-[1.12] mb-5 sm:mb-6">
              Build Your Business. <br/>
              <span className="font-light">Transform. Protect. Grow.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-xl font-light mb-6">
              RKPT TECH LTD helps individuals, entrepreneurs, startups and established companies establish, operate and expand across international markets. We combine business setup, compliance, financial and immigration support with IT, AI, software and cybersecurity solutions.
            </p>
            
            <div className="flex items-center gap-2 text-[#0b1b36] font-semibold text-xs sm:text-sm mb-6">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
              <span>One Global Partner. Seven Business Hubs.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0b1b36] hover:bg-[#15325b] text-white font-medium text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreEstimator}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-gray-50 text-[#15325b] border border-gray-200 font-medium text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>
          </motion.div>

          {/* Right: High-End Corporate Network Map Banner */}
          <div style={{ perspective: '1200px' }} className="w-full relative z-10 flex items-center justify-center mt-2 lg:mt-0">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTap={() => setZoomedCard(null)}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full aspect-[900/400] sm:aspect-[900/340] min-h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-white border border-gray-200/80 flex items-center justify-center p-2 sm:p-4 touch-none select-none"
            >
              {/* SVG Background Network Lines */}
              <svg 
                viewBox="0 0 900 340" 
                preserveAspectRatio="xMidYMid meet" 
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {/* Network Lines */}
                <g stroke="#8FA0C4" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60">
                  <line x1="450" y1="170" x2="300" y2="170" />
                  <line x1="450" y1="170" x2="600" y2="170" />
                  <line x1="450" y1="170" x2="450" y2="50" />
                  <line x1="450" y1="170" x2="450" y2="250" />

                  <line x1="300" y1="170" x2="140" y2="70" />
                  <line x1="300" y1="170" x2="140" y2="270" />

                  <line x1="600" y1="170" x2="760" y2="70" />
                  <line x1="600" y1="170" x2="760" y2="270" />

                  <line x1="450" y1="250" x2="330" y2="295" />
                  <line x1="450" y1="250" x2="570" y2="295" />
                </g>

                {/* Junction Nodes */}
                <g fill="#8FA0C4">
                  <circle cx="300" cy="170" r="3.5" />
                  <circle cx="600" cy="170" r="3.5" />
                  <circle cx="450" cy="250" r="3.5" />
                </g>

                {/* Central RKPT Node Pulse */}
                <g>
                  <circle cx="450" cy="170" r="16" fill="#c91c1c" opacity="0.15" />
                  <circle cx="450" cy="170" r="10" fill="#c91c1c" opacity="0.25" />
                  <circle cx="450" cy="170" r="5" fill="#c91c1c" />
                </g>
              </svg>

              {/* Central HQ Label */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-20"
              >
                <span className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#c91c1c] bg-white/90 px-2 py-0.5 rounded shadow-xs border border-red-100 whitespace-nowrap mt-7 sm:mt-8">
                  RKPT HQ
                </span>
              </div>

              {/* Interactive Network Country Nodes overlay */}
              <div className="absolute inset-0 w-full h-full z-20">
                {networkNodes.map(node => {
                  const isSelected = zoomedCard === node.id;
                  return (
                    <motion.button
                      key={node.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomedCard(isSelected ? null : node.id);
                      }}
                      style={{
                        left: `${node.leftPct}%`,
                        top: `${node.topPct}%`,
                      }}
                      animate={{
                        scale: isSelected ? 1.6 : (zoomedCard && zoomedCard.startsWith('net-') ? 0.8 : 1),
                        zIndex: isSelected ? 40 : 10,
                        opacity: zoomedCard && zoomedCard.startsWith('net-') && !isSelected ? 0.35 : 1,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center focus:outline-none cursor-pointer group touch-manipulation"
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 0.8, scale: 1.8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#c91c1c] blur-[16px] rounded-full -z-10 pointer-events-none"
                        />
                      )}
                      <div className="relative flex flex-col items-center">
                        <img 
                          src={`https://flagcdn.com/${node.code}.svg`} 
                          alt={node.name} 
                          className={`w-7 h-5 sm:w-10 sm:h-7 object-cover rounded-[3px] sm:rounded-[4px] shadow-md transition-all duration-200 ${
                            isSelected 
                              ? 'border-2 border-[#c91c1c] ring-2 ring-red-500/30' 
                              : 'border border-white ring-1 ring-black/10 group-hover:scale-110'
                          }`} 
                        />
                        <span 
                          className={`text-[9px] sm:text-xs font-bold mt-1 uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm transition-colors whitespace-nowrap ${
                            isSelected 
                              ? 'bg-[#c91c1c] text-white font-extrabold shadow-md' 
                              : 'bg-white/95 text-[#15325b] group-hover:bg-[#0b1b36] group-hover:text-white'
                          }`}
                        >
                          {node.name}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Floating Country Info Popover when node is touched/zoomed */}
              {(() => {
                const activeNode = networkNodes.find(n => n.id === zoomedCard);
                if (!activeNode) return null;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-4 z-30 bg-[#0b1b36] text-white p-2.5 sm:p-3.5 rounded-xl shadow-2xl border border-red-500/40 flex items-center justify-between gap-2.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img src={`https://flagcdn.com/${activeNode.code}.svg`} alt="" className="w-7 h-5 rounded shadow-xs shrink-0 border border-white/20" />
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-white truncate flex items-center gap-1.5">
                          <span>{activeNode.name} Desk</span>
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-300 truncate">{activeNode.desc}</p>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        onOpenConsultation(); 
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#c91c1c] hover:bg-red-700 text-white text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-colors shrink-0 cursor-pointer shadow-sm"
                    >
                      Inquire Now
                    </button>
                  </motion.div>
                );
              })()}

              {/* Bottom Subtle Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50/40 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>

        {/* Clean Hub Cards replacing the flat badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full relative">
          {/* Hub: Portugal */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'pt' ? null : 'pt')}
            animate={{ 
              scale: zoomedCard === 'pt' ? 1.06 : 1, 
              zIndex: zoomedCard === 'pt' ? 30 : 1,
              borderColor: zoomedCard === 'pt' ? '#c91c1c' : '#f3f4f6',
              boxShadow: zoomedCard === 'pt' ? "0 20px 25px -5px rgba(201, 28, 28, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.96 }} 
            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative shadow-xs select-none touch-manipulation"
          >
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'pt' ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                src="https://flagcdn.com/pt.svg" alt="PT" 
                className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded-sm shadow-md border-2 border-white ring-1 ring-black/10" 
              />
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0b1b36]">Portugal</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-[0.18em] uppercase mt-1">LDA • NHR • Golden Visa</p>
            {zoomedCard === 'pt' && (
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => { e.stopPropagation(); onOpenConsultation(); }}
                className="mt-3.5 px-4 py-1.5 rounded-full bg-[#0b1b36] text-white text-xs font-semibold tracking-wide hover:bg-[#c91c1c] transition-colors"
              >
                Inquire Portugal Setup
              </motion.button>
            )}
          </motion.div>

          {/* Hub: Switzerland */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'ch' ? null : 'ch')}
            animate={{ 
              scale: zoomedCard === 'ch' ? 1.06 : 1, 
              zIndex: zoomedCard === 'ch' ? 30 : 1,
              borderColor: zoomedCard === 'ch' ? '#c91c1c' : '#f3f4f6',
              boxShadow: zoomedCard === 'ch' ? "0 20px 25px -5px rgba(201, 28, 28, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.96 }} 
            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative shadow-xs select-none touch-manipulation"
          >
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'ch' ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                src="https://flagcdn.com/ch.svg" alt="CH" 
                className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded-sm shadow-md border-2 border-white ring-1 ring-black/10" 
              />
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0b1b36]">Switzerland</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-[0.18em] uppercase mt-1">GmbH • AG • Cantons</p>
            {zoomedCard === 'ch' && (
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => { e.stopPropagation(); onOpenConsultation(); }}
                className="mt-3.5 px-4 py-1.5 rounded-full bg-[#0b1b36] text-white text-xs font-semibold tracking-wide hover:bg-[#c91c1c] transition-colors"
              >
                Inquire Swiss Setup
              </motion.button>
            )}
          </motion.div>

          {/* Hub: Ireland */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'ie' ? null : 'ie')}
            animate={{ 
              scale: zoomedCard === 'ie' ? 1.06 : 1, 
              zIndex: zoomedCard === 'ie' ? 30 : 1,
              borderColor: zoomedCard === 'ie' ? '#c91c1c' : '#f3f4f6',
              boxShadow: zoomedCard === 'ie' ? "0 20px 25px -5px rgba(201, 28, 28, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.96 }} 
            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative shadow-xs select-none touch-manipulation"
          >
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'ie' ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                src="https://flagcdn.com/ie.svg" alt="IE" 
                className="w-7 h-5 sm:w-8 sm:h-6 object-cover rounded-sm shadow-md border-2 border-white ring-1 ring-black/10" 
              />
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0b1b36]">Ireland</h3>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-[0.18em] uppercase mt-1">LTD • CRO • EU MARKET</p>
            {zoomedCard === 'ie' && (
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => { e.stopPropagation(); onOpenConsultation(); }}
                className="mt-3.5 px-4 py-1.5 rounded-full bg-[#0b1b36] text-white text-xs font-semibold tracking-wide hover:bg-[#c91c1c] transition-colors"
              >
                Inquire Ireland Setup
              </motion.button>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

