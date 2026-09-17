const fs = require('fs');

const path = 'src/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

const returnIndex = content.indexOf('return (');

const newReturn = `return (
    <section className="relative overflow-hidden bg-[#fafafa] text-gray-900 pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20">
          
          {/* Left: Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex flex-col items-start text-left">
            {/* Subtle Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 text-xs font-semibold tracking-widest uppercase mb-8 transition-transform hover:-translate-y-0.5 duration-300">
              <ShieldCheck className="w-4 h-4 text-[#c91c1c]" />
              <span>OFFICIAL BUSINESS & TECHNOLOGY PARTNER</span>
            </div>

            {/* Main Headline - Clean & Impactful */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-[#0b1b36] leading-[1.1] mb-6">
              Build Your Business. <br/>
              <span className="font-light">Transform. Protect. Grow.</span>
            </h1>

            {/* Refined Subtext */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl font-light mb-6">
              RKPT TECH LTD helps individuals, entrepreneurs, startups and established companies establish, operate and expand across international markets. We combine business setup, compliance, financial and immigration support with IT, AI, software and cybersecurity solutions.
            </p>
            
            <div className="flex items-center gap-2 text-[#0b1b36] font-medium text-sm mb-10">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              One Global Partner. Seven Business Hubs.
            </div>

            {/* Clean Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0b1b36] hover:bg-[#15325b] text-white font-medium text-sm tracking-wide uppercase transition-all duration-300 shadow-sm"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreEstimator}
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-gray-50 text-[#15325b] border border-gray-200 font-medium text-sm tracking-wide uppercase"
              >
                <span>Explore Our Services</span>
              </button>
            </div>
          </motion.div>

          {/* Right: High-End Corporate Asset (Hero Banner Graphic) with 3D Tilt */}
          <div style={{ perspective: '1500px' }} className="w-full relative z-10 flex items-center justify-center">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTap={() => setZoomedCard(null)}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.08 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group bg-white border border-gray-100 cursor-pointer flex items-center justify-center"
            >
              <svg viewBox="0 0 900 340" fill="none" className="w-full h-auto max-h-full transition-transform duration-700 group-hover:scale-105 px-2 sm:px-8">
                {/* Network Lines */}
                <g stroke="#8FA0C4" strokeWidth="1.5" strokeDasharray="3 3" style={{ opacity: zoomedCard && zoomedCard.startsWith('net-') ? 0.15 : 0.6, transition: 'opacity 0.4s' }}>
                  <line x1="450" y1="170" x2="300" y2="170" />
                  <line x1="450" y1="170" x2="600" y2="170" />
                  <line x1="450" y1="170" x2="450" y2="50" />
                  <line x1="450" y1="170" x2="450" y2="250" />

                  <line x1="300" y1="170" x2="140" y2="70" />
                  <line x1="300" y1="170" x2="140" y2="270" />

                  <line x1="600" y1="170" x2="760" y2="70" />
                  <line x1="600" y1="170" x2="760" y2="270" />

                  <line x1="450" y1="250" x2="330" y2="300" />
                  <line x1="450" y1="250" x2="570" y2="300" />
                </g>

                {/* Junction Nodes */}
                <g fill="#8FA0C4" style={{ opacity: zoomedCard && zoomedCard.startsWith('net-') ? 0.15 : 1, transition: 'opacity 0.4s' }}>
                  <circle cx="300" cy="170" r="3" />
                  <circle cx="600" cy="170" r="3" />
                  <circle cx="450" cy="250" r="3" />
                </g>

                {/* Central RKPT Node */}
                <g style={{ opacity: zoomedCard && zoomedCard.startsWith('net-') ? 0.15 : 1, transition: 'opacity 0.4s' }}>
                  <circle cx="450" cy="170" r="14" fill="#c91c1c" opacity="0.1" />
                  <circle cx="450" cy="170" r="8" fill="#c91c1c" opacity="0.2" />
                  <circle cx="450" cy="170" r="4" fill="#c91c1c" />
                </g>

                {networkNodes.map(node => (
                  <foreignObject key={node.id} x={node.x} y={node.y} width="140" height="140" className="overflow-visible">
                    <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer group" style={{ perspective: '1200px' }} onClick={(e) => { e.stopPropagation(); setZoomedCard(zoomedCard === node.id ? null : node.id); }}>
                      <motion.div
                        animate={{
                          scale: zoomedCard === node.id ? 2.5 : (zoomedCard && zoomedCard.startsWith('net-') ? 0.8 : 1),
                          opacity: zoomedCard && zoomedCard.startsWith('net-') && zoomedCard !== node.id ? 0.2 : 1,
                          rotateY: zoomedCard === node.id ? 360 : 0,
                          rotateX: zoomedCard === node.id ? 10 : 0,
                          z: zoomedCard === node.id ? 80 : 0,
                          y: zoomedCard === node.id ? -10 : 0
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        className="relative flex flex-col items-center"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {zoomedCard === node.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.8, scale: 1.8 }}
                            transition={{ duration: 0.4 }}
                            className="absolute top-3 w-16 h-16 bg-[#c91c1c] blur-[20px] rounded-full -z-10"
                          />
                        )}
                        <img src={\`https://flagcdn.com/\${node.code}.svg\`} alt={node.name} className="w-10 h-[28px] object-cover rounded-[3px] shadow-sm border border-gray-200 relative z-10" />
                        <span className={\`text-[10px] font-bold mt-2 uppercase tracking-wider px-2 py-0.5 rounded shadow-md transition-colors relative z-10 \${zoomedCard === node.id ? 'bg-[#c91c1c] text-white' : 'bg-white/90 text-[#15325b]'}\`}>
                          {node.name}
                        </span>
                      </motion.div>
                    </div>
                  </foreignObject>
                ))}
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>

        {/* Clean Hub Cards replacing the flat badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">
          {/* Hub: Portugal */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'pt' ? null : 'pt')}
            animate={{ 
              scale: zoomedCard === 'pt' ? 1.15 : 1, 
              zIndex: zoomedCard === 'pt' ? 50 : 1,
              boxShadow: zoomedCard === 'pt' ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileHover={zoomedCard === 'pt' ? {} : { scale: 1.03 }} 
            whileTap={zoomedCard === 'pt' ? {} : { scale: 1.05 }} 
            className="bg-white rounded-2xl p-8 border border-gray-100 transition-colors duration-300 flex flex-col items-center text-center group cursor-pointer relative"
          >
            <div className="flex items-center justify-center gap-3 mb-3" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'pt' ? 2 : 1,
                  rotateY: zoomedCard === 'pt' ? 360 : 0,
                  rotateX: zoomedCard === 'pt' ? 15 : 0,
                  z: zoomedCard === 'pt' ? 100 : 0
                }}
                transition={{ duration: 0.6 }}
                src="https://flagcdn.com/pt.svg" alt="PT" 
                className="w-8 h-6 object-cover rounded-sm border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-110" 
              />
              <h3 className="text-2xl font-display font-medium text-[#0b1b36]">Portugal</h3>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-[0.2em] uppercase mt-1">LDA • NHR • Golden Visa</p>
          </motion.div>

          {/* Hub: Switzerland */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'ch' ? null : 'ch')}
            animate={{ 
              scale: zoomedCard === 'ch' ? 1.15 : 1, 
              zIndex: zoomedCard === 'ch' ? 50 : 1,
              boxShadow: zoomedCard === 'ch' ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileHover={zoomedCard === 'ch' ? {} : { scale: 1.03 }} 
            whileTap={zoomedCard === 'ch' ? {} : { scale: 1.05 }} 
            className="bg-white rounded-2xl p-8 border border-gray-100 transition-colors duration-300 flex flex-col items-center text-center group cursor-pointer relative"
          >
            <div className="flex items-center justify-center gap-3 mb-3" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'ch' ? 2 : 1,
                  rotateY: zoomedCard === 'ch' ? 360 : 0,
                  rotateX: zoomedCard === 'ch' ? 15 : 0,
                  z: zoomedCard === 'ch' ? 100 : 0
                }}
                transition={{ duration: 0.6 }}
                src="https://flagcdn.com/ch.svg" alt="CH" 
                className="w-8 h-6 object-cover rounded-sm border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-110" 
              />
              <h3 className="text-2xl font-display font-medium text-[#0b1b36]">Switzerland</h3>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-[0.2em] uppercase mt-1">GmbH • AG • Cantons</p>
          </motion.div>

          {/* Hub: Ireland */}
          <motion.div 
            onClick={() => setZoomedCard(zoomedCard === 'ie' ? null : 'ie')}
            animate={{ 
              scale: zoomedCard === 'ie' ? 1.15 : 1, 
              zIndex: zoomedCard === 'ie' ? 50 : 1,
              boxShadow: zoomedCard === 'ie' ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
            whileHover={zoomedCard === 'ie' ? {} : { scale: 1.03 }} 
            whileTap={zoomedCard === 'ie' ? {} : { scale: 1.05 }} 
            className="bg-white rounded-2xl p-8 border border-gray-100 transition-colors duration-300 flex flex-col items-center text-center group cursor-pointer relative"
          >
            <div className="flex items-center justify-center gap-3 mb-3" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
              <motion.img 
                animate={{ 
                  scale: zoomedCard === 'ie' ? 2 : 1,
                  rotateY: zoomedCard === 'ie' ? 360 : 0,
                  rotateX: zoomedCard === 'ie' ? 15 : 0,
                  z: zoomedCard === 'ie' ? 100 : 0
                }}
                transition={{ duration: 0.6 }}
                src="https://flagcdn.com/ie.svg" alt="IE" 
                className="w-8 h-6 object-cover rounded-sm border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-110" 
              />
              <h3 className="text-2xl font-display font-medium text-[#0b1b36]">Ireland</h3>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-[0.2em] uppercase mt-1">LTD • 12.5% CIT • CRO</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
`
content = content.substring(0, returnIndex) + newReturn;
fs.writeFileSync(path, content, 'utf8');
