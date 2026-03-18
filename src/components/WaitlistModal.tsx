import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, User, Sparkles, CheckCircle2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
      setFirstName('');
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-backend-green/10 text-backend-green">
                    <Sparkles size={24} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-white">Join the Waitlist</h2>
                  <p className="mt-2 text-sm text-white/60">
                    Be the first to know when we launch and get exclusive early-bird access.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs font-medium uppercase tracking-widest text-white/40">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        className="w-full rounded-xl border border-white/5 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:border-backend-green/50 focus:outline-none focus:ring-1 focus:ring-backend-green/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-white/40">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-white/5 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:border-backend-green/50 focus:outline-none focus:ring-1 focus:ring-backend-green/50 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-backend-green py-4 font-bold text-black transition-all hover:bg-backend-accent hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Join Now
                  </button>
                </form>

                <p className="text-center text-[10px] text-white/20">
                  By joining, you agree to receive updates about Backend Masterclass.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-backend-green/20 text-backend-green">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white">You're on the list!</h2>
                <p className="mt-4 text-white/60">
                  Thanks for joining, {firstName}. We'll be in touch soon with exciting updates.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
