import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieAccepted');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[95vw] max-w-5xl bg-white rounded-xl shadow-[0_20px_70px_rgba(0,0,0,0.3)] p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100"
        >
          <p className="text-[#0D1B2A] text-sm md:text-[0.95rem] text-center md:text-left font-medium leading-relaxed px-4">
            We use cookies to improve your experience and understand usage. By using this site, you agree to our cookie policy.
          </p>
          <button
            onClick={handleDismiss}
            className="whitespace-nowrap bg-[#0D1B2A] text-white px-10 py-3 rounded-lg font-bold text-xs hover:bg-[#1B2D3E] transition-all cursor-pointer uppercase tracking-widest shadow-md shrink-0"
          >
            Got it
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
