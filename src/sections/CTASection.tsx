import React from 'react';
import { ArrowRight } from 'lucide-react';

const SmartCitySVG = () => {
  return (
    <svg viewBox="0 0 1200 600" className="w-full h-full opacity-20 lg:opacity-40" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Background Buildings - Adjusted heights for better visibility of moving parts */}
      <g className="text-white/10">
        {/* Building 1 */}
        <rect x="50" y="420" width="60" height="180" fill="url(#buildingGrad)" />
        <rect x="65" y="400" width="30" height="20" fill="url(#buildingGrad)" />
        <line x1="80" y1="400" x2="80" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        
        {/* Building 2 */}
        <rect x="150" y="300" width="80" height="300" fill="url(#buildingGrad)" />
        <rect x="160" y="280" width="60" height="20" fill="url(#buildingGrad)" />
        <rect x="185" y="250" width="10" height="30" fill="url(#buildingGrad)" />
        
        {/* Building 3 */}
        <rect x="280" y="380" width="70" height="220" fill="url(#buildingGrad)" />
        <rect x="280" y="380" width="70" height="10" fill="currentColor" opacity="0.2" />
        
        {/* Building 4 - Tall Tower */}
        <rect x="400" y="180" width="60" height="420" fill="url(#buildingGrad)" />
        <rect x="410" y="150" width="40" height="30" fill="url(#buildingGrad)" />
        <circle cx="430" cy="140" r="4" fill="#00ffb2" className="animate-pulse" />
        
        {/* Building 5 */}
        <rect x="520" y="330" width="90" height="270" fill="url(#buildingGrad)" />
        <rect x="530" y="310" width="70" height="20" fill="url(#buildingGrad)" />
        
        {/* Building 6 */}
        <rect x="680" y="250" width="70" height="350" fill="url(#buildingGrad)" />
        <line x1="715" y1="250" x2="715" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        
        {/* Building 7 */}
        <rect x="800" y="400" width="100" height="200" fill="url(#buildingGrad)" />
        <rect x="820" y="380" width="60" height="20" fill="url(#buildingGrad)" />
        
        {/* Building 8 */}
        <rect x="950" y="320" width="80" height="280" fill="url(#buildingGrad)" />
        <rect x="960" y="300" width="60" height="20" fill="url(#buildingGrad)" />
        
        {/* Building 9 */}
        <rect x="1080" y="450" width="60" height="150" fill="url(#buildingGrad)" />
      </g>

      {/* Windows */}
      {[...Array(100)].map((_, i) => {
        const xBase = 50 + (Math.floor(i / 10) * 110);
        const xOff = 10 + (Math.random() * 40);
        const yOff = 200 + (Math.random() * 350);
        return (
          <rect
            key={`w-${i}`}
            x={xBase + xOff}
            y={yOff}
            width="2"
            height="2"
            fill={i % 5 === 0 ? "#00ffb2" : i % 5 === 1 ? "#0ff" : "#2cf2c0"}
            className="animate-pulse"
            style={{ animationDelay: `${Math.random() * 3}s`, opacity: Math.random() * 0.6 + 0.2 }}
          />
        );
      })}

      {/* Data Roads - Moved up slightly for better visibility */}
      <path d="M0 520 L1200 520" stroke="currentColor" strokeWidth="1" className="text-white/5" />
      <path d="M0 540 L1200 540" stroke="currentColor" strokeWidth="2" className="text-white/5" />

      {/* Moving Data Packets */}
      {[...Array(10)].map((_, i) => (
        <circle key={`p1-${i}`} r="1.5" fill="#00ffb2" className="animate-move-x">
          <animateMotion
            path="M0 540 L1200 540"
            dur={`${4 + i}s`}
            repeatCount="indefinite"
            begin={`${i * 1.5}s`}
          />
        </circle>
      ))}
      {[...Array(10)].map((_, i) => (
        <circle key={`p2-${i}`} r="1" fill="#0ff" className="animate-move-x-reverse">
          <animateMotion
            path="M1200 520 L0 520"
            dur={`${5 + i}s`}
            repeatCount="indefinite"
            begin={`${i * 2}s`}
          />
        </circle>
      ))}
      
      {/* Communication Signals */}
      <circle cx="430" cy="140" r="15" fill="#00ffb2" className="animate-ping opacity-20" />
      <circle cx="715" cy="180" r="10" fill="#0ff" className="animate-ping opacity-20" style={{ animationDelay: '1s' }} />
    </svg>
  );
};

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-black">
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <SmartCitySVG />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Ready to Build the <br />
            <span className="text-gradient-green italic">Future of the Web?</span>
          </h2>
          <p className="text-base md:text-xl text-white/60 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            Join 5,000+ engineers who have transformed their careers. Master the skills needed to build 
            scalable, production-ready systems from scratch.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-backend-green text-black font-bold rounded-full text-base md:text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enroll Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full text-base md:text-lg hover:bg-white/10 transition-all duration-300">
              View Curriculum
            </button>
          </div>

          <p className="mt-8 text-sm text-white/40">
            30-day money-back guarantee • Lifetime access • Certificate included
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default CTASection;
