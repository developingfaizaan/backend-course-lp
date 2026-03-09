import React from 'react';
import { Shield, GitBranch, Zap } from 'lucide-react';

const SystemDesignSection = () => {
  const features = [
    {
      icon: <GitBranch className="text-backend-green" />,
      title: "Staging & Branching",
      desc: "Learn to deploy isolated environments for every feature branch without affecting production."
    },
    {
      icon: <Shield className="text-backend-green" />,
      title: "Zero-Downtime Deploys",
      desc: "Master blue-green and canary deployment strategies to ensure 100% availability."
    },
    {
      icon: <Zap className="text-backend-green" />,
      title: "CI/CD Pipelines",
      desc: "Build automated testing and deployment workflows that catch bugs before they reach users."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Design Systems Without <br />
            <span className="italic text-white/50">Breaking Production</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto md:mx-0">
            The difference between a coder and an engineer is the ability to build resilient systems. 
            We teach you the industry-standard practices for safe, reliable development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass-panel p-6 md:p-8 hover:border-backend-green/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-backend-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesignSection;
