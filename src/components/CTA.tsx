import { motion } from 'framer-motion';
import { Download, Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#16213e] to-[#0D1B2A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Background Effects */}
           <br></br>
                <br></br>
          <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-[3rem]"></div>
          
          <div className="relative z-10 p-12 lg:p-20 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-5 py-2 rounded-full text-sm font-bold mb-8 border border-[#D4AF37]/20"
            >
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
              Ready to Lock In?
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-8xl mb-10 font-bold leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="text-white">Lock in your focus</span>
              <br />
              <span className="text-[#D4AF37] italic">
                today.
              </span>
              <br />
              <span className="text-white">Master your niche</span>
              <br />
              <span className="text-[#D4AF37] italic">
                tomorrow.
              </span>
            </motion.h2>
          
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-3xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Join thousands of creators who achieve their growth goals in tech, photography, and beyond. Start building discipline with Locked In today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button asChild className="h-16 px-10 border-2 border-white/20 text-white bg-white/5 hover:bg-white hover:text-[#0D1B2A] font-bold rounded-full transition-all duration-300 backdrop-blur-xl cursor-pointer flex items-center gap-3 group">
                <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.7 17.15 4.34 10.97 7.5 9.4c1.55-.77 2.8-.23 3.65.24 1.14.63 1.83.56 2.94 0 1.05-.53 2.6-.96 3.73.53 2.5 1.17 3.32 5.06 1.73 10.11zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.31 2.53-2.23 4.54-3.74 4.25z"/>
                  </svg>
                  <span className="text-lg">App Store</span>
                </a>
              </Button>
              <Button asChild className="h-16 px-10 border-2 border-white/20 text-white bg-white/5 hover:bg-white hover:text-[#0D1B2A] font-bold rounded-full transition-all duration-300 backdrop-blur-xl cursor-pointer flex items-center gap-3 group">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.1-.12V1.934a1.003 1.003 0 0 1 .1-.12zm11.234 10.186l2.844-2.844-3.414-1.951-4.222 4.795 4.792 0zm3.324-3.324l3.15 1.8c.618.353.618.928 0 1.281l-3.15 1.8-3.324-3.324 3.324-3.557zm-3.324 7.114l3.414-1.951-2.844-2.844-4.792 0 4.222 4.795z"/>
                  </svg>
                  <span className="text-lg">Google Play</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-10 justify-center items-center text-sm text-white/40 tracking-[0.2em] font-bold uppercase"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span>Free to download</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <span>Bank-level security</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}