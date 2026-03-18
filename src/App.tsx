import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections
import HeroSection from './sections/HeroSection';
import LogosSection from './sections/LogosSection';
import ScalabilitySection from './sections/ScalabilitySection';
import SystemDesignSection from './sections/SystemDesignSection';
import AuthSection from './sections/AuthSection';
import FeaturesGrid from './sections/FeaturesGrid';
import SpeedScaleSection from './sections/SpeedScaleSection';
import ObservabilitySection from './sections/ObservabilitySection';
import CareerEvolutionSection from './sections/CareerEvolutionSection';
import TrustedPlatformSection from './sections/TrustedPlatformSection';
import ComparisonSection from './sections/ComparisonSection';
import TimelineEstimator from './sections/TimelineEstimator';
import SalaryEstimator from './sections/SalaryEstimator';
import ValueComparison from './sections/ValueComparison';
import TransformationSection from './sections/TransformationSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';
import WaitlistModal from './components/WaitlistModal';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-backend-green" />
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">Backend Masterclass</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-sm font-medium text-white/60">
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenWaitlist}
            className="hidden sm:block px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-backend-green transition-all duration-300 cursor-pointer"
          >
            Join the waitlist
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-lg font-medium text-white/60">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-4 bg-white text-black font-bold rounded-xl text-center cursor-pointer"
              >
                Join the waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);

  useEffect(() => {
    // Global reveal animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const onOpenWaitlist = () => setIsWaitlistOpen(true);
  const onCloseWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar onOpenWaitlist={onOpenWaitlist} />
      
      <main>
        <HeroSection onOpenWaitlist={onOpenWaitlist} />
        <LogosSection />
        <ScalabilitySection />
        <SystemDesignSection />
        <AuthSection onOpenWaitlist={onOpenWaitlist} />
        <FeaturesGrid />
        <SpeedScaleSection />
        <ObservabilitySection />
        <CareerEvolutionSection />
        <TrustedPlatformSection />
        <ComparisonSection />
        <TimelineEstimator />
        <SalaryEstimator />
        <ValueComparison />
        <TransformationSection />
        <CTASection onOpenWaitlist={onOpenWaitlist} />
      </main>

      <FooterSection onOpenWaitlist={onOpenWaitlist} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={onCloseWaitlist} />
    </div>
  );
}
