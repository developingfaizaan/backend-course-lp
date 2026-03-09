import React, { useState, useEffect } from 'react';
import { Search, BarChart3, Terminal, Activity, Bug, Eye } from 'lucide-react';
import { cn } from '../utils/cn';

const ObservabilitySection = () => {
  const [logs, setLogs] = useState<string[]>([]);
  
  const logTemplates = [
    "🚀 Server is up and running on port 3000",
    "✅ Database connection established",
    "👤 New user 'Sarah' just signed up!",
    "📦 Order #4421 was successfully placed",
    "💳 Payment of $49.00 received from 'Mark'",
    "🔍 Search query: 'best backend courses'",
    "🏠 Homepage loaded in 12ms",
    "📧 Welcome email sent to 'Sarah'",
    "⚠️ Warning: Database query took longer than 100ms",
    "❌ Error: User tried to access private route without login",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const nextLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const fullLog = `${timestamp} - ${nextLog}`;
        const newLogs = [...prev, fullLog];
        return newLogs.slice(-12);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-backend-accent/10 border border-backend-accent/20 text-backend-accent text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
            Module 08: Real-World Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
            See Your Code <br />
            <span className="italic text-white/50">Come to Life</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Building is only half the battle. We'll teach you how to watch your application in real-time, 
            understand what your users are doing, and fix problems before they even know they exist.
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-backend-green/30 transition-all group flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-backend-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Eye size={18} className="text-backend-green" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base">Live Activity</h4>
            </div>
            <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-backend-cyan/30 transition-all group flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-backend-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 size={18} className="text-backend-cyan" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base">Health Dashboards</h4>
            </div>
            <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-backend-accent/30 transition-all group flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-backend-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bug size={18} className="text-backend-accent" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base">Easy Debugging</h4>
            </div>
            <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity size={18} className="text-white" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base">Performance Tracking</h4>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-square">
          <div className="glass-panel h-full w-full font-mono text-[10px] sm:text-xs md:text-sm bg-black/90 border-white/10 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="ml-2 text-white/40 text-[8px] md:text-[10px] uppercase tracking-widest truncate">Live Activity Feed | My-First-Backend</span>
              </div>
              <Terminal size={12} className="text-white/20" />
            </div>
            <div className="flex-1 p-4 md:p-6 space-y-2 overflow-hidden">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-2 md:gap-4 animate-in fade-in slide-in-from-left-2 duration-500">
                  <span className="text-white/20 shrink-0">{i + 1}</span>
                  <span className={cn(
                    "break-all",
                    log.includes('❌') ? "text-red-400" : 
                    log.includes('⚠️') ? "text-yellow-400" : 
                    log.includes('✅') || log.includes('🚀') ? "text-backend-green" : "text-white/60"
                  )}>
                    {log}
                  </span>
                </div>
              ))}
              <div className="text-white/20 animate-pulse">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObservabilitySection;
