import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScalabilitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%', // Trigger earlier
            end: 'bottom 80%',
            scrub: 1,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-backend-green/10 border border-backend-green/20 text-backend-green text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
            The AI Era
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
            AI Can Write Code. <br />
            <span className="italic text-white/50">It Can't Architect Systems.</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            The rise of AI hasn't replaced backend engineers; it has made them more critical. 
            While AI churns out snippets, the world needs architects who can build the high-performance, 
            distributed infrastructure that runs these models at scale.
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="glass-panel p-4 md:p-6 bg-white/5 border-white/5">
              <div className="text-xl md:text-2xl font-bold text-backend-green mb-1">92%</div>
              <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">Infrastructure Complexity</div>
            </div>
            <div className="glass-panel p-4 md:p-6 bg-white/5 border-white/5">
              <div className="text-xl md:text-2xl font-bold text-backend-cyan mb-1">10x</div>
              <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">Data Volume Growth</div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
          <div className="glass-panel p-6 md:p-10 aspect-square flex flex-col justify-between relative overflow-hidden bg-black/40">
            <div className="z-10">
              <div className="text-[10px] font-mono text-white/40 mb-2 uppercase tracking-widest">Market Reality: 2024-2030</div>
              <div className="text-2xl md:text-4xl font-bold text-white leading-tight">The Backend <br/><span className="text-backend-green">Value Gap</span></div>
            </div>
            
            <div className="relative h-48 md:h-64 w-full mt-8">
              {/* Chart Labels */}
              <div className="absolute -top-6 right-0 text-[8px] md:text-[10px] font-mono text-backend-green uppercase tracking-widest font-bold bg-black/40 px-2 py-1 rounded">
                System Architecture Value
              </div>
              <div className="absolute bottom-14 right-0 text-[8px] md:text-[10px] font-mono text-white/60 uppercase tracking-widest font-bold bg-black/40 px-2 py-1 rounded">
                Basic Coding Value
              </div>

              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                {/* AI Code Value (Declining/Flat) */}
                <path
                  d="M 0 150 Q 100 155 200 160 T 400 165"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                />

                {/* Architecture Value (Exploding) */}
                <path
                  ref={lineRef}
                  d="M 0 180 Q 50 175 100 140 T 200 100 T 300 40 T 400 10"
                  fill="none"
                  stroke="url(#gradient-ai-era)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                
                <defs>
                  <linearGradient id="gradient-ai-era" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00ffb2" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00ffb2" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="flex justify-between mt-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
              <span>Pre-AI</span>
              <span>AI Integration</span>
              <span>Autonomous Systems</span>
            </div>
          </div>
          
          {/* Floating Insight */}
          <div className="absolute -bottom-6 -right-6 glass-panel p-4 bg-backend-green/10 border-backend-green/20 max-w-[180px]">
            <p className="text-[10px] leading-relaxed text-white/80 italic">
              "The more code AI writes, the more important the system architecture becomes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalabilitySection;
