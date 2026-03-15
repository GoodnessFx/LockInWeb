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
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
            >
              <Button asChild size="lg" className="group flex items-center gap-4 bg-gradient-to-r from-[#D4AF37] to-[#f0c040] text-[#0D1B2A] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-500 transform hover:-translate-y-2 border-none cursor-pointer">
                <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                  <Download size={24} className="group-hover:animate-bounce" />
                  Download for iOS
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group flex items-center gap-4 border-2 border-white/40 text-white bg-transparent hover:bg-white hover:text-[#0D1B2A] px-12 py-8 text-xl font-bold rounded-full transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-md cursor-pointer">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Play size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  Get on Android
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