import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200 overflow-hidden relative">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-[#3273a8] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-2 block">
              Executive Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0b1b36] tracking-tight">
              Trusted by European Leaders
            </h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0 hidden md:flex">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#0b1b36] hover:border-[#0b1b36] transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#0b1b36] hover:border-[#0b1b36] transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[350px] lg:h-[300px] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 1000 : -1000,
                  opacity: 0,
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1,
                },
                exit: (dir: number) => ({
                  zIndex: 0,
                  x: dir < 0 ? 1000 : -1000,
                  opacity: 0,
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full top-0 left-0"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <Quote className="absolute -top-4 -left-4 w-32 h-32 text-gray-50/80 pointer-events-none transform -scale-x-100" />
                
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#3273a8] text-[#3273a8]" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl sm:text-2xl font-display font-medium text-[#0b1b36] leading-relaxed mb-8">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <img 
                      src={TESTIMONIALS[currentIndex].avatar} 
                      alt={TESTIMONIALS[currentIndex].author} 
                      className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-gray-50"
                    />
                    <div>
                      <div className="font-bold text-[#0b1b36] text-sm sm:text-base">
                        {TESTIMONIALS[currentIndex].author}
                      </div>
                      <div className="text-xs text-[#3273a8] font-semibold uppercase tracking-wider mt-0.5">
                        {TESTIMONIALS[currentIndex].role}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {TESTIMONIALS[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex flex-col items-end justify-center border-l border-gray-100 pl-12 shrink-0">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Industry Domain
                  </div>
                  <div className="text-sm font-medium text-[#15325b] uppercase tracking-wide bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                    {TESTIMONIALS[currentIndex].industry}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Mobile Controls */}
        <div className="flex items-center justify-center gap-3 mt-8 md:hidden">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[#3273a8]' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
          </ScrollReveal>
</section>
  );
};
