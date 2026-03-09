import React from 'react';

const TrustedPlatformSection = () => {
  const stats = [
    { label: "Students Enrolled", value: "10,000+" },
    { label: "Hours of Content", value: "200+" },
    { label: "Real-world Projects", value: "50+" },
    { label: "Success Rate", value: "98%" },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Trusted by Developers <br />
              <span className="italic text-white/50">Building Real Systems</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 md:mb-16">
              Join a global community of engineers who are pushing the boundaries of what's possible in backend development.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-5xl font-bold text-backend-green mb-2">{stat.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/30 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow opacity-5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrustedPlatformSection;
