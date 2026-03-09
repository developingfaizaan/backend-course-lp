import React from 'react';
import { ArrowRight } from 'lucide-react';

const TransformationSection = () => {
  const before = [
    "Copy-paste tutorials without understanding",
    "Confused about system architecture",
    "Fear of scaling systems to production",
    "Struggling with database performance",
    "Manual, error-prone deployments"
  ];

  const after = [
    "Design scalable APIs from first principles",
    "Architect distributed systems with confidence",
    "Deploy production-grade infrastructure",
    "Optimize databases for millions of records",
    "Automate everything with CI/CD & IaC"
  ];

  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Before vs After Transformation</h2>
          <p className="text-base md:text-lg text-white/60">The journey from a developer to an engineer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
          <div className="p-8 md:p-12 bg-black/40">
            <h3 className="text-lg md:text-xl font-bold mb-8 text-white/40 uppercase tracking-widest">Before</h3>
            <ul className="space-y-4 md:space-y-6">
              {before.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/40 text-sm md:text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 bg-backend-green/5">
            <h3 className="text-lg md:text-xl font-bold mb-8 text-backend-green uppercase tracking-widest">After</h3>
            <ul className="space-y-4 md:space-y-6">
              {after.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white text-sm md:text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-backend-green shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
