import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Play } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const quotes = [
    "If you don't lock in, you'll spend the rest of your life clocking in.",
    "Rent is due everyday.",
    "There is no tomorrow, Lock tf In",
    "Your rent won't wait, so why should you?",
    "Stop scrolling, start building.",
    "Your niche won't grow itself.",
    "Focus mode: activated.",
    "Lock in joh",
    "Dreams don't work unless you do.",
    "Consistency beats perfection.",
    "Lock in now, thank yourself later.",
    "Your future self is watching."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Solid black background or drop-in high-res image */}
      <div
        className="absolute inset-0 bg-black"
        aria-hidden
      ></div>

      {/* Enhanced Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl mb-8 font-bold"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              LockIn
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Focus on growth. Lock in your discipline.
          </motion.p>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
<></>
<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Available on iOS & Android
          </motion.div>
        </motion.div>

        {/* Enhanced Animated Quotes */}
        <motion.div 
          className="mb-16 h-24 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-primary max-w-3xl mx-auto font-medium leading-relaxed">
                  "{quotes[currentQuote]}"
                </p>
                <div className="flex justify-center mt-4">
                  <div className="flex gap-1">
                    {quotes.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentQuote ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button asChild size="lg"
            className="group flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
              <Download size={22} className="group-hover:animate-bounce" />
              Download for iOS
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Get on Google Play">
              <Play size={22} className="group-hover:scale-110 transition-transform duration-300" />
              Get on Android
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-sm text-muted-foreground/80"
        >
          <br></br>
          Available on iOS and Android • Free to download
        </motion.p>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/60 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-primary to-blue-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}