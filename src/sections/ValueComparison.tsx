import React from 'react';
import { Check, X } from 'lucide-react';

const ValueComparison = () => {
  const rows = [
    { label: "CRUD Tutorials", cheap: true, masterclass: true },
    { label: "System Architecture", cheap: false, masterclass: true },
    { label: "Local Databases", cheap: true, masterclass: true },
    { label: "Distributed Databases", cheap: false, masterclass: true },
    { label: "Basic Hosting", cheap: true, masterclass: true },
    { label: "Cloud Infrastructure", cheap: false, masterclass: true },
    { label: "Performance Tuning", cheap: false, masterclass: true },
    { label: "Security & Identity", cheap: false, masterclass: true },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Course Value Comparison</h2>
          <p className="text-base md:text-lg text-white/60">Why this program is the ultimate investment for your engineering career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-panel p-6 md:p-12 bg-white/5 border-white/10 opacity-90 hover:opacity-100 transition-all duration-500">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-white/80">Cheap Coding Courses</h3>
            <ul className="space-y-4 md:space-y-6">
              {rows.map((row, i) => (
                <li key={i} className="flex items-center justify-between text-white/60">
                  <span className="text-sm md:text-base font-medium">{row.label}</span>
                  {row.cheap ? <Check size={18} className="text-white/40" /> : <X size={18} className="text-red-500/60" />}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-6 md:p-12 bg-backend-green/5 border-backend-green/40 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(0,255,178,0.2)]">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-backend-green flex items-center gap-3">
                Backend Engineering
                <span className="text-[8px] md:text-[10px] bg-backend-green text-black px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Premium</span>
              </h3>
              <ul className="space-y-4 md:space-y-6">
                {rows.map((row, i) => (
                  <li key={i} className="flex items-center justify-between group">
                    <span className="text-sm md:text-base font-bold text-white/90 group-hover:text-white transition-colors">{row.label}</span>
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-backend-green/20 flex items-center justify-center">
                      <Check size={12} className="text-backend-green" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow opacity-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;
