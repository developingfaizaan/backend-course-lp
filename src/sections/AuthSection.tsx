import React, { useState, useEffect } from 'react';
import { Lock, Fingerprint, Key, Shield, UserCheck, Scan, ArrowRight, User, Globe, Database, Cpu } from 'lucide-react';
import { cn } from '../utils/cn';

const AuthSection = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanStatus, setScanStatus] = useState('Idle');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScanning(true);
      setIsVerified(false);
      setScanStatus('Scanning Identity...');
      
      setTimeout(() => {
        setIsScanning(false);
        setIsVerified(true);
        setScanStatus('Verified: System Architect');
      }, 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square radial-glow opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative flex justify-center">
          <div className="glass-panel aspect-square w-full max-w-[450px] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-black/60">
            {/* Scanning Animation */}
            <div className="relative w-full max-w-[280px] aspect-square border-2 border-white/5 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-backend-cyan/5 to-transparent opacity-20" />
              
              {/* Scan Line */}
              <div 
                className={cn(
                  "absolute left-0 right-0 h-1 bg-backend-cyan shadow-[0_0_20px_#00ffff] z-20 transition-all duration-1000 ease-in-out",
                  isScanning ? "top-full" : "top-0"
                )}
              />

              {/* User Identity Visual */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={cn(
                  "w-32 h-32 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center mb-6 transition-all duration-500",
                  isScanning ? "scale-110 border-backend-cyan/40" : "scale-100",
                  isVerified ? "border-backend-green/40 bg-backend-green/5" : ""
                )}>
                  {isVerified ? (
                    <User size={64} className="text-backend-green animate-in zoom-in duration-500" />
                  ) : (
                    <Fingerprint size={64} className={cn(
                      "transition-colors duration-500",
                      isScanning ? "text-backend-cyan" : "text-white/20"
                    )} />
                  )}
                </div>
                <div className="text-center">
                  <div className={cn(
                    "text-xs font-mono uppercase tracking-[0.3em] mb-2 transition-colors duration-500",
                    isScanning ? "text-backend-cyan" : isVerified ? "text-backend-green" : "text-white/40"
                  )}>
                    {scanStatus}
                  </div>
                  <div className="flex gap-2 justify-center">
                    {[0, 1, 2].map(i => (
                      <div key={i} className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all duration-300",
                        isScanning ? "bg-backend-cyan animate-pulse" : isVerified ? "bg-backend-green" : "bg-white/10"
                      )} style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff20 1px, transparent 1px), linear-gradient(90deg, #ffffff20 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>

            {/* Floating Security Badges */}
            <div className="absolute top-8 left-8 glass-panel p-2.5 border-backend-green/20 animate-bounce-slow">
              <Shield size={18} className="text-backend-green" />
            </div>
            <div className="absolute bottom-8 right-8 glass-panel p-2.5 border-backend-accent/20 animate-bounce-slow delay-1000">
              <Lock size={18} className="text-backend-accent" />
            </div>
            <div className="absolute top-8 right-8 glass-panel p-2.5 border-backend-cyan/20 animate-bounce-slow delay-500">
              <Key size={18} className="text-backend-cyan" />
            </div>
            <div className="absolute bottom-8 left-8 glass-panel p-2.5 border-white/10 animate-bounce-slow delay-700">
              <Globe size={18} className="text-white/40" />
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 glass-panel p-2 border-white/5 animate-pulse">
              <Database size={16} className="text-white/20" />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 glass-panel p-2 border-white/5 animate-pulse delay-300">
              <Cpu size={16} className="text-white/20" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-backend-cyan/10 border border-backend-cyan/20 text-backend-cyan text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
            Module 05: Identity & Security
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Authentication, Security, <br />
            <span className="italic text-white/50">and Identity</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Security is not an afterthought. Master the implementation of robust identity systems, 
            from JWT and OAuth to security best practices for distributed systems.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 text-left">
            <div className="space-y-2">
              <div className="text-backend-cyan font-bold text-sm">OAuth</div>
              <p className="text-xs text-white/40">Third-party identity integration at scale.</p>
            </div>
            <div className="space-y-2">
              <div className="text-backend-green font-bold text-sm">JWT & Sessions</div>
              <p className="text-xs text-white/40">Secure stateless and stateful authentication.</p>
            </div>
          </div>
          <button 
            onClick={onOpenWaitlist}
            className="hidden lg:flex text-backend-green font-bold items-center gap-2 hover:gap-4 transition-all duration-300 cursor-pointer"
          >
            Join the waitlist <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
