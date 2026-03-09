import React, { useState } from 'react';

const TimelineEstimator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  const getTimeline = (hours: number) => {
    if (hours <= 5) return { months: 12, label: "Steady Pace" };
    if (hours <= 10) return { months: 7, label: "Recommended" };
    if (hours <= 20) return { months: 4, label: "Fast Track" };
    return { months: 3, label: "Intensive" };
  };

  const timeline = getTimeline(hoursPerWeek);

  return (
    <section className="pt-10 md:pt-16 pb-20 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-8 sm:p-12 md:p-20 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Backend Career <br />
                <span className="italic text-white/50">Timeline Estimator</span>
              </h2>
              <p className="text-lg text-white/60 mb-12">
                How much time can you commit to learning each week? 
                We'll help you estimate your journey to becoming a professional backend engineer.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-white/40">Hours per week</span>
                    <span className="text-2xl font-bold text-backend-green">{hoursPerWeek} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="40"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-backend-green"
                  />
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="glass-panel p-8 sm:p-12 bg-backend-green/5 border-backend-green/20 relative group">
                <div className="text-xs uppercase tracking-widest text-backend-green font-bold mb-4">{timeline.label}</div>
                <div className="text-7xl md:text-8xl font-bold mb-4">{timeline.months}</div>
                <div className="text-xl font-bold text-white/60">Months to Graduation</div>
                
                {/* Animated Progress Bar */}
                <div className="mt-12 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-backend-green transition-all duration-1000 ease-out"
                    style={{ width: `${(hoursPerWeek / 40) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow opacity-5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TimelineEstimator;
