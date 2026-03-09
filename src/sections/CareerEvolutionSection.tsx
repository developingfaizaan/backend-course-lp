import React from 'react';

const CareerEvolutionSection = () => {
  const steps = [
    {
      role: "Beginner",
      desc: "Mastering CRUD, basic SQL, and simple API design.",
      salary: "$60k - $80k"
    },
    {
      role: "Backend Engineer",
      desc: "Building microservices, implementing Auth, and optimizing queries.",
      salary: "$100k - $140k"
    },
    {
      role: "Senior Engineer",
      desc: "Architecting distributed systems, leading teams, and managing infrastructure.",
      salary: "$160k - $220k"
    },
    {
      role: "System Architect",
      desc: "Designing global-scale platforms and defining technical strategy.",
      salary: "$250k+"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Your Evolution as a <br />
            <span className="italic text-white/50">Backend Professional</span>
          </h2>
          <p className="text-base md:text-lg text-white/60">
            We don't just teach you to code; we prepare you for the highest levels of technical leadership.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="glass-panel p-6 md:p-8 relative group hover:border-backend-green/30 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-backend-green transition-colors duration-500">
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4">{step.role}</h3>
                <p className="text-xs md:text-sm text-white/40 mb-6 leading-relaxed">{step.desc}</p>
                <div className="text-backend-green font-mono text-sm font-bold">{step.salary}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEvolutionSection;
