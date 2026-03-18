import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play, User, Zap, Shield, Award, Briefcase, Database, Server, Cpu, Globe, Code, Lock } from 'lucide-react';
import { cn } from '../utils/cn';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Docker', 'Redis', 'PostgreSQL']);

  const skills = [
    { label: 'Docker', icon: <Package size={16} />, value: 20000, color: 'text-blue-400' },
    { label: 'WebSocket', icon: <Zap size={16} />, value: 30000, color: 'text-indigo-400' },
    { label: 'Redis', icon: <Cpu size={16} />, value: 15000, color: 'text-red-400' },
    { label: 'PostgreSQL', icon: <Database size={16} />, value: 18000, color: 'text-cyan-400' },
    { label: 'AWS', icon: <Server size={16} />, value: 28000, color: 'text-orange-400' },
    { label: 'Nodejs', icon: <Code size={16} />, value: 22000, color: 'text-purple-400' },
  ];

  const baseSalary = 40000;
  const currentSalary = baseSalary + selectedSkills.reduce((acc, skill) => {
    const s = skills.find(sk => sk.label === skill);
    return acc + (s?.value || 0);
  }, 0);

  const getJobTitle = (salary: number) => {
    if (salary < 60000) return "Junior Backend Engineer";
    if (salary < 100000) return "Backend Engineer";
    if (salary < 150000) return "Senior Backend Engineer";
    if (salary < 200000) return "Lead Engineer";
    return "System Architect";
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(headlineRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, delay: 0.2 })
        .fromTo(subtextRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo(visualRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1 }, '-=0.5');

      gsap.to('.hero-grid', {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 sm:pt-40 lg:pt-20 overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 radial-glow opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 radial-glow opacity-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 ref={headlineRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-gradient">
            Build Scalable <br />
            <span className="text-gradient-green italic">Backend Systems</span> <br />
            Not Just CRUD APIs
          </h1>
          <p ref={subtextRef} className="text-base sm:text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Master the art of distributed systems, high-performance API design, and cloud-native infrastructure. 
            The ultimate engineering program for the modern backend developer.
          </p>
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto px-8 py-4 bg-backend-green text-black font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-backend-accent transition-all duration-300 shadow-[0_0_20px_rgba(0,255,178,0.3)] cursor-pointer"
            >
              Join the waitlist <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div ref={visualRef} className="relative w-full max-w-lg mx-auto lg:max-w-none mt-12 lg:mt-0">
          <div className="glass-panel p-6 sm:p-8 glow-green min-h-[500px] sm:aspect-square flex flex-col overflow-hidden bg-black/40 relative">
            <div className="flex-1 flex flex-col justify-between relative z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="hidden sm:block text-[10px] font-mono text-white/40 uppercase tracking-widest">Skill Mastery (Select to Unlock)</div>
                  <div className="px-2 py-0.5 rounded bg-backend-green/10 border border-backend-green/20 text-[8px] font-bold text-backend-green uppercase">
                    Level: {getJobTitle(currentSalary)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {skills.map((skill, i) => (
                    <button 
                      key={i} 
                      onClick={() => toggleSkill(skill.label)}
                      className={cn(
                        "p-3 rounded-xl border text-xs font-mono flex items-center gap-3 transition-all duration-300 cursor-pointer",
                        selectedSkills.includes(skill.label) 
                          ? "bg-white/10 border-white/40 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-105" 
                          : "bg-black/40 border-white/5 text-white/30 hover:border-white/20"
                      )}
                    >
                      <span className={cn(selectedSkills.includes(skill.label) ? skill.color : "text-white/20")}>
                        {skill.icon}
                      </span>
                      {skill.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative h-32 sm:h-48 flex items-center justify-center my-8 sm:my-0">
                <div className="absolute left-0 w-1/4 flex flex-col items-center opacity-40 grayscale transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                    <User size={24} className="text-white/60" />
                  </div>
                  <div className="text-[10px] font-mono text-white/40">Junior Dev</div>
                </div>

                <div className="w-1/2 h-1 bg-white/5 relative overflow-hidden rounded-full">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-backend-green via-backend-cyan to-backend-green bg-[length:200%_100%] animate-dash" 
                    style={{ width: `${Math.min(100, ((currentSalary - baseSalary) / 160000) * 100)}%` }}
                  />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-backend-green blur-md animate-pulse" 
                       style={{ left: `${Math.min(100, ((currentSalary - baseSalary) / 160000) * 100)}%` }} />
                </div>

                <div className="absolute right-0 w-1/4 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-backend-green/10 border border-backend-green/40 flex items-center justify-center mb-2 shadow-[0_0_40px_rgba(0,255,178,0.3)] relative">
                    <div className="absolute inset-0 rounded-full border border-backend-green/20 animate-ping" />
                    <Award size={40} className="text-backend-green" />
                  </div>
                  <div className="text-[10px] font-mono text-backend-green font-bold text-center leading-tight">{getJobTitle(currentSalary)}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Salary Projection</div>
                  <div className="text-2xl font-bold text-backend-green font-mono">
                    ${currentSalary.toLocaleString()}<span className="text-xs font-normal text-white/40">/yr</span>
                  </div>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-backend-green/20 to-backend-green transition-all duration-1000 ease-out" 
                    style={{ width: `${Math.min(100, (currentSalary / 200000) * 100)}%` }}
                  />
                  <div className="absolute left-1/4 top-0 w-px h-full bg-white/10" />
                  <div className="absolute left-2/4 top-0 w-px h-full bg-white/10" />
                  <div className="absolute left-3/4 top-0 w-px h-full bg-white/10" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-white/20">
                  <span>$40k</span>
                  <span>$80k</span>
                  <span>$140k</span>
                  <span>$200k+</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00ffb2 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Package } from 'lucide-react';
export default HeroSection;
