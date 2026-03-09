import React from 'react';

const FooterSection = () => {
  return (
    <footer className="py-12 md:py-20 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-20">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-backend-green" />
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">Backend Masterclass</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm md:text-base">
              The ultimate engineering program for the modern backend developer. 
              Master the art of distributed systems and cloud-native infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2">
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] md:text-xs text-white/20">Program</h4>
              <ul className="space-y-4 text-xs md:text-sm text-white/60">
                <li><a href="#" className="hover:text-backend-green transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-backend-green transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-backend-green transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-backend-green transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] md:text-xs text-white/20">Connect</h4>
              <ul className="space-y-4 text-xs md:text-sm text-white/60">
                <li><a href="#" className="hover:text-backend-green transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-backend-green transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-backend-green transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-backend-green transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-10 border-t border-white/5 gap-6">
          <div className="text-[10px] md:text-xs text-white/20 text-center md:text-left">
            © 2024 Backend Engineering Masterclass. All rights reserved.
          </div>
          <div className="flex gap-6 md:gap-8 text-[10px] md:text-xs text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
