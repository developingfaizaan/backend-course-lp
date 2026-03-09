import React from 'react';
import { MapPin, ShieldCheck, Zap, Database, FileText, Package, Bell, Layout } from 'lucide-react';

const SpeedScaleSection = () => {
  const features = [
    { icon: <MapPin size={18} />, title: "Geographic Filtering", desc: "Filter complaints by city zones using spatial queries." },
    { icon: <ShieldCheck size={18} />, title: "Multi-role RBAC", desc: "Complex access control for Citizens, Officials, and Admins." },
    { icon: <Zap size={18} />, title: "Real-time Updates", desc: "Live status notifications via WebSockets." },
    { icon: <Database size={18} />, title: "AWS S3 Storage", desc: "Production-grade cloud file storage for attachments." },
    { icon: <Layout size={18} />, title: "Analytics Dashboard", desc: "Generate reports and export data to CSV." },
    { icon: <Package size={18} />, title: "Docker Deployment", desc: "Containerized production-ready deployment." },
    { icon: <Bell size={18} />, title: "Notification System", desc: "Automated Email and SMS alerts for critical events." },
    { icon: <FileText size={18} />, title: "Swagger Docs", desc: "Full API documentation for professional handoff." },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-backend-green/10 border border-backend-green/20 text-backend-green text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
            The Capstone Project
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            One Project. Real Complexity. <br />
            <span className="text-gradient-green italic">Career-Ready Results.</span>
          </h2>
          <p className="text-base md:text-xl text-white/60">
            You won't build a fake app for a fake company. You'll build a <span className="text-white font-bold">Smart City Management Platform</span>: the kind of system that actual governments use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="glass-panel p-6 md:p-10 flex flex-col justify-between bg-black/40 border-white/5">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Smart City Platform</h3>
              <p className="text-sm md:text-base text-white/50 mb-8 leading-relaxed">
                This isn't a demo. It's a full production system with real users, real roles, and real complexity. 
                Build something you can actually show employers: a full-featured government service platform.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="text-backend-green font-mono font-bold">01</div>
                  <div>
                    <div className="font-bold text-white/80">Citizens</div>
                    <div className="text-xs md:text-sm text-white/40">File complaints with location data and attachments.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-backend-cyan font-mono font-bold">02</div>
                  <div>
                    <div className="font-bold text-white/80">City Officials</div>
                    <div className="text-xs md:text-sm text-white/40">Manage zones, track resolution times, and get real-time alerts.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-backend-accent font-mono font-bold">03</div>
                  <div>
                    <div className="font-bold text-white/80">Administrators</div>
                    <div className="text-xs md:text-sm text-white/40">Control the whole system, generate reports, and monitor live.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 group p-4 md:p-6 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-backend-green/10 to-transparent opacity-50" />
              
              {/* API Flow Animation */}
              <div className="relative z-10 flex items-center justify-between px-4 md:px-12">
                {/* Client Node */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                    <Layout size={14} className="md:size-20 text-white/40" />
                  </div>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/20">Client</span>
                </div>

                {/* API Path */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-backend-green/50 to-transparent relative mx-2 md:mx-4">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-backend-green shadow-[0_0_10px_#00ff00] animate-move-x" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-backend-cyan shadow-[0_0_10px_#00ffff] animate-move-x-reverse" />
                </div>

                {/* Server Node */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-backend-green/10 border border-backend-green/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-backend-green/20 blur-xl rounded-full animate-pulse" />
                    <Zap size={18} className="md:size-24 text-backend-green relative z-10" />
                  </div>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-backend-green font-bold">API Gateway</span>
                </div>

                {/* API Path */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-backend-cyan/50 to-transparent relative mx-2 md:mx-4">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-backend-cyan shadow-[0_0_10px_#00ffff] animate-move-x" />
                </div>

                {/* DB Node */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Database size={14} className="md:size-20 text-white/40" />
                  </div>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/20">PostgreSQL</span>
                </div>
              </div>

              <div className="absolute bottom-2 md:bottom-4 left-0 right-0 text-center">
                <div className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-white/20">Production API Infrastructure</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass-panel p-6 hover:border-backend-green/30 transition-all duration-300 group bg-black/20">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-backend-green/10 transition-colors">
                  <div className="text-white/40 group-hover:text-backend-green transition-colors">
                    {f.icon}
                  </div>
                </div>
                <h4 className="font-bold mb-2 text-white/80 group-hover:text-white transition-colors">{f.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedScaleSection;
