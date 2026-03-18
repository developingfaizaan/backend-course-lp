import React, { useState } from 'react';

const SalaryEstimator = () => {
  const [currentStatus, setCurrentStatus] = useState("Student");

  const data = {
    "Student": { path: ["Backend Developer", "Senior Backend Engineer", "Tech Lead"], salary: [70, 140, 220] },
    "Frontend developer": { path: ["Full-stack Engineer", "Senior Backend Engineer", "Architect"], salary: [110, 180, 260] },
    "Junior developer": { path: ["Backend Engineer", "Senior Backend Engineer", "Staff Engineer"], salary: [95, 160, 240] },
    "Career switcher": { path: ["Junior Backend Developer", "Backend Engineer", "Senior Engineer"], salary: [65, 120, 190] },
  };

  const currentData = data[currentStatus as keyof typeof data];

  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Career Projection & <br />
            <span className="italic text-white/50">Salary Estimator</span>
          </h2>
          <p className="text-base md:text-lg text-white/60">
            See how your career trajectory changes after completing the Backend Engineering Masterclass.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {Object.keys(data).map((status) => (
              <button
                key={status}
                onClick={() => setCurrentStatus(status)}
                className={cn(
                  "w-full p-4 md:p-6 text-left rounded-2xl border transition-all duration-300 cursor-pointer",
                  currentStatus === status 
                    ? "bg-backend-green/10 border-backend-green text-backend-green" 
                    : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                )}
              >
                <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest">{status}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 glass-panel p-6 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40 mb-8 md:mb-12">Career Path & Salary (USD)</div>
              
              <div className="space-y-8 md:space-y-12">
                {currentData.path.map((role, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-end mb-4">
                      <div className="text-lg md:text-xl font-bold">{role}</div>
                      <div className="text-xl md:text-2xl font-bold text-backend-green">${currentData.salary[i]}k</div>
                    </div>
                    <div className="h-3 md:h-4 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-backend-green/20 to-backend-green transition-all duration-1000 ease-out"
                        style={{ width: `${(currentData.salary[i] / 300) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { cn } from '../utils/cn';
export default SalaryEstimator;
