import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, BookOpen, Rocket, Star, Code2, Terminal, Sparkles } from 'lucide-react';

interface BundleItem {
  title: string;
  icon: any;
  points: string[];
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  bundleItems,
  isPopular = false, 
  buttonText = "Enroll Now",
  icon: Icon
}: { 
  title: string; 
  price: string; 
  description: string; 
  features?: string[]; 
  bundleItems?: BundleItem[];
  isPopular?: boolean;
  buttonText?: string;
  icon: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-3xl border transition-all duration-500 flex flex-col h-full ${
        isPopular 
          ? 'bg-gradient-to-b from-backend-green/15 to-transparent border-backend-green/40 shadow-[0_0_50px_-15px_rgba(0,255,178,0.25)] z-20 scale-105 md:scale-110' 
          : 'bg-white/5 border-white/10 hover:border-white/20 z-10'
      }`}
    >
      {isPopular && (
        <>
          <motion.div 
            animate={{ 
              boxShadow: ["0 0 20px rgba(0,255,178,0.2)", "0 0 40px rgba(0,255,178,0.4)", "0 0 20px rgba(0,255,178,0.2)"] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-backend-green/50 to-transparent -z-10 opacity-50"
          />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-backend-green text-black text-[10px] font-black rounded-full tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(0,255,178,0.4)] flex items-center gap-2">
            <Sparkles size={12} />
            Recommended Choice
          </div>
        </>
      )}

      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-2xl ${isPopular ? 'bg-backend-green/20 text-backend-green' : 'bg-white/10 text-white/60'}`}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-serif">{title}</h3>
          <p className="text-sm text-white/40">{description}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold tracking-tighter">${price}</span>
          <span className="text-white/40 text-sm font-medium">USD</span>
        </div>
      </div>

      <div className="flex-grow space-y-6 mb-10">
        {bundleItems ? (
          <div className="space-y-6">
            {bundleItems.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center gap-2 text-backend-green font-bold text-sm uppercase tracking-wider">
                  <item.icon size={16} />
                  {item.title}
                </div>
                <div className="space-y-2 pl-6">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-white/60">
                      <div className="mt-1 w-1 h-1 rounded-full bg-backend-green/40" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {features?.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`mt-1 p-0.5 rounded-full ${isPopular ? 'bg-backend-green/20 text-backend-green' : 'bg-white/10 text-white/40'}`}>
                  <Check size={14} />
                </div>
                <span className={`text-sm ${feature.includes('**') ? 'text-white font-medium' : 'text-white/60'}`}>
                  {feature.replace(/\*\*/g, '')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <motion.button 
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden ${
          isPopular 
            ? 'bg-backend-green text-black hover:bg-backend-accent' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {buttonText}
          <Zap size={18} className={isPopular ? 'fill-black' : 'fill-white/20'} />
        </span>
        {isPopular && (
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          />
        )}
      </motion.button>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,178,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-backend-green/10 border border-backend-green/20 text-backend-green text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Star size={14} className="fill-backend-green" />
            Investment in your career
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Choose your path to <span className="text-backend-green">Mastery</span></h2>
          <p className="text-white/60 text-lg">
            Whether you want the core foundation or the complete professional toolkit, we have the right option for your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <PricingCard
            title="Backend Course"
            price="149"
            description="Master the core of scalable systems"
            icon={Rocket}
            features={[
              "40+ Hours of High-Quality Video",
              "10+ Real-world Backend Projects",
              "System Design Deep Dives",
              "Lifetime Access & Updates",
              "Private Community Access",
              "Course Certificate"
            ]}
          />

          <PricingCard
            title="The Bundle Deal"
            price="199"
            isPopular={true}
            description="The ultimate career accelerator"
            icon={Zap}
            bundleItems={[
              {
                title: "Backend Mastery Course",
                icon: Terminal,
                points: [
                  "Complete system design curriculum",
                  "Hands-on database optimization",
                  "Microservices architecture patterns"
                ]
              },
              {
                title: "Backend Engineering Ebook",
                icon: BookOpen,
                points: [
                  "300+ pages of deep technical insights",
                  "Production-ready code snippets",
                  "Interview prep & architecture guides"
                ]
              },
              {
                title: "Dev Accelerator Course",
                icon: Code2,
                points: [
                  "Productivity hacks for senior engineers",
                  "Career growth & salary negotiation",
                  "Personal branding for developers"
                ]
              }
            ]}
            buttonText="Get the Full Bundle"
          />
        </div>

        <div className="mt-20 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 text-sm flex items-center justify-center gap-2"
          >
            <BookOpen size={16} />
            All purchases include a 30-day money-back guarantee. No questions asked.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
