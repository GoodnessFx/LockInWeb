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
      {/* Background Door Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          width="1200"
          height="800"
          viewBox="0 0 1200 800"
          className="opacity-30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        >
          {/* Outer Door Frame */}
          <rect x="100" y="50" width="1000" height="700" fill="none" stroke="currentColor" strokeWidth="8" rx="20" />
          
          {/* Inner Door Frame */}
          <rect x="150" y="100" width="900" height="600" fill="none" stroke="currentColor" strokeWidth="6" rx="15" />
          
          {/* Left Door Panel */}
          <motion.rect
            x="150"
            y="100"
            width="445"
            height="600"
            fill="currentColor"
            opacity="0.2"
            stroke="currentColor"
            strokeWidth="4"
            rx="10"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            style={{ originX: 0 }}
          />
          
          {/* Right Door Panel */}
          <motion.rect
            x="605"
            y="100"
            width="445"
            height="600"
            fill="currentColor"
            opacity="0.2"
            stroke="currentColor"
            strokeWidth="4"
            rx="10"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            style={{ originX: 1 }}
          />
          
          {/* Door Handles */}
          <circle cx="500" cy="400" r="15" fill="currentColor" opacity="0.4" />
          <circle cx="700" cy="400" r="15" fill="currentColor" opacity="0.4" />
          
          {/* Door Lock Details */}
          <rect x="480" y="380" width="40" height="40" fill="currentColor" opacity="0.3" rx="5" />
          <rect x="680" y="380" width="40" height="40" fill="currentColor" opacity="0.3" rx="5" />
          
          {/* Decorative Elements */}
          <rect x="200" y="200" width="300" height="200" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2" rx="10" />
          <rect x="700" y="200" width="300" height="200" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2" rx="10" />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            LockIn
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12">
            Focus on growth. Lock in your discipline.
          </p>
        </motion.div>

        {/* Animated Quotes */}
        <div className="mb-12 h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl text-primary max-w-2xl mx-auto italic"
            >
              "{quotes[currentQuote]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            <Download size={20} />
            Download for iOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
            <Play size={20} />
            Get on Android
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Available on iOS and Android • Free to download
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}