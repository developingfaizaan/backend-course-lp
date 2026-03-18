import React from 'react';

const TrustedPlatformSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Trusted by Developers <br />
              <span className="italic text-white/50">Building Real Systems</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
              Join a global community of engineers who are pushing the boundaries of what's possible in backend development.
            </p>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow opacity-5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrustedPlatformSection;
