import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

const modules = [
  {
    title: "Backend Fundamentals",
    lessons: ["Node.js Runtime & Event Loop", "Asynchronous Programming Patterns", "Memory Management & Performance"],
    tech: ["Node.js", "V8", "Libuv"]
  },
  {
    title: "API Design & Architecture",
    lessons: ["RESTful Best Practices", "GraphQL Schema Design", "gRPC & Protocol Buffers", "API Versioning & Documentation"],
    tech: ["GraphQL", "gRPC", "Swagger"]
  },
  {
    title: "Database Engineering",
    lessons: ["SQL Optimization & Indexing", "NoSQL Data Modeling", "Transaction Isolation Levels", "Database Sharding & Replication"],
    tech: ["PostgreSQL", "Redis", "MongoDB"]
  },
  {
    title: "Distributed Systems",
    lessons: ["CAP Theorem & Consistency Models", "Message Queues & Event-Driven Design", "Distributed Locking & Consensus", "Service Discovery"],
    tech: ["RabbitMQ", "Kafka", "Consul"]
  },
  {
    title: "Cloud Infrastructure",
    lessons: ["Docker Containerization", "Kubernetes Orchestration", "Infrastructure as Code (Terraform)", "Serverless Architectures"],
    tech: ["Docker", "K8s", "Terraform"]
  },
  {
    title: "Observability & Scaling",
    lessons: ["Distributed Tracing", "Structured Logging", "Horizontal Auto-scaling", "Load Balancing Strategies"],
    tech: ["Prometheus", "Grafana", "Jaeger"]
  }
];

const RoadmapVisual = ({ activeIndex }: { activeIndex: number | null }) => {
  return (
    <div className="hidden lg:flex flex-col items-center h-full py-10">
      <div className="relative h-full w-px bg-white/10">
        {modules.map((module, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 flex items-center group"
            style={{ top: `${(i / (modules.length - 1)) * 100}%` }}
          >
            {/* Label */}
            <div className={cn(
              "absolute right-8 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest transition-all duration-500",
              activeIndex === i ? "text-backend-green opacity-100 translate-x-0" : "text-white/20 opacity-0 translate-x-4 group-hover:opacity-40"
            )}>
              Module {i + 1}
            </div>

            {/* Dot */}
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 transition-all duration-500 relative z-10",
                activeIndex === i 
                  ? "bg-backend-green border-backend-green scale-125 shadow-[0_0_15px_rgba(0,255,178,0.5)]" 
                  : "bg-[#050505] border-white/20"
              )}
            >
              {activeIndex === i && (
                <div className="absolute inset-0 rounded-full bg-backend-green animate-ping opacity-40" />
              )}
            </div>
          </div>
        ))}
        {/* Animated flow line */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-backend-green to-backend-cyan transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(0,255,178,0.3)]"
          style={{ height: activeIndex !== null ? `${(activeIndex / (modules.length - 1)) * 100}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const TechStackVisual = ({ activeIndex }: { activeIndex: number | null }) => {
  const currentTech = activeIndex !== null ? modules[activeIndex].tech : [];

  return (
    <div className="hidden lg:flex flex-col items-center justify-center sticky top-32 py-10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-white/5 animate-spin-slow" />
        <div className="absolute w-48 h-48 rounded-full border border-white/10 animate-reverse-spin-slow" />
        <div className="absolute w-32 h-32 rounded-full border border-white/20 opacity-20" />
      </div>
      
      <div className="relative z-10 flex flex-col gap-6 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            className="flex flex-col gap-4 items-center"
          >
            {currentTech.map((tech, i) => (
              <div
                key={tech}
                className={cn(
                  "px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-mono text-backend-green animate-float shadow-xl",
                  "hover:border-backend-green/50 hover:bg-backend-green/5 transition-all duration-300 cursor-default"
                )}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        {currentTech.length === 0 && (
          <div className="text-white/20 font-mono text-xs uppercase tracking-widest animate-pulse">
            Select Module
          </div>
        )}
      </div>

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-backend-green rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const CurriculumSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-20 md:pt-32 pb-10 md:pb-16 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-backend-green/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Curriculum</h2>
          <p className="text-base md:text-lg text-white/60">A comprehensive journey from fundamentals to advanced system architecture.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Visual */}
          <div className="lg:col-span-2 relative">
            <RoadmapVisual activeIndex={openIndex} />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-7 space-y-4">
            {modules.map((module, i) => (
              <div key={i} className={cn(
                "glass-panel overflow-hidden transition-all duration-300",
                openIndex === i ? "ring-1 ring-backend-green/30 bg-white/5" : "hover:bg-white/5"
              )}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                      openIndex === i ? "bg-backend-green/20" : "bg-white/5"
                    )}>
                      <BookOpen size={20} className={cn(
                        "transition-colors",
                        openIndex === i ? "text-backend-green" : "text-white/40"
                      )} />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Module {i + 1}</span>
                      <span className="text-xl font-bold text-left">{module.title}</span>
                    </div>
                  </div>
                  {openIndex === i ? <ChevronUp className="text-white/40" /> : <ChevronDown className="text-white/40" />}
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-white/5">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          {module.lessons.map((lesson, j) => (
                            <li key={j} className="flex items-start gap-3 text-white/60 text-sm group">
                              <div className="w-1.5 h-1.5 rounded-full bg-backend-green mt-1.5 group-hover:scale-150 transition-transform" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-3 h-full min-h-[400px]">
            <TechStackVisual activeIndex={openIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
