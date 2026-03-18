import React from 'react';

const FooterSection = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
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
          
          <div className="flex justify-end sm:col-span-2 lg:col-span-2">
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] md:text-xs text-white/20">Connect</h4>
              <ul className="space-y-4 text-xs md:text-sm text-white/60">
                <li><a href="https://twitter.com/jsmasterypro" target="_blank" rel="noopener noreferrer" className="hover:text-backend-green transition-colors cursor-pointer">Twitter</a></li>
                <li><a href="https://discord.com/invite/n6EdbFJ" target="_blank" rel="noopener noreferrer" className="hover:text-backend-green transition-colors cursor-pointer">Discord</a></li>
                <li><a href="https://youtube.com/@javascriptmastery" target="_blank" rel="noopener noreferrer" className="hover:text-backend-green transition-colors cursor-pointer">YouTube</a></li>
                <li><a href="https://www.linkedin.com/company/javascriptmastery/" target="_blank" rel="noopener noreferrer" className="hover:text-backend-green transition-colors cursor-pointer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-10 border-t border-white/5 gap-6">
          <div className="text-[10px] md:text-xs text-white/20 text-center md:text-left">
            © 2026 Backend Engineering Masterclass. All rights reserved.
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
