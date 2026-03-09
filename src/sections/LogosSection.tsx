import React from 'react';

const LogosSection = () => {
  const logos = [
    { name: 'AWS', color: 'text-white/40' },
    { name: 'Stripe', color: 'text-white/40' },
    { name: 'Docker', color: 'text-white/40' },
    { name: 'Kubernetes', color: 'text-white/40' },
    { name: 'Redis', color: 'text-white/40' },
    { name: 'PostgreSQL', color: 'text-white/40' },
  ];

  return (
    <section className="py-12 md:py-20 border-y border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] md:text-sm font-medium text-white/30 uppercase tracking-[0.2em] mb-8 md:mb-12">
          Students hired at & Tech stacks learned
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-white/10" />
              <span className={logo.color + " font-bold text-lg md:text-xl tracking-tight"}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
