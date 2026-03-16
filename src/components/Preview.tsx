import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Preview() {
  const progressValue = 73;
  const focusHours = 142;
  const targetHours = 200;
  const daysLeft = 8;

  return (
    <section id="preview" className="py-32 bg-[#0D1B2A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left side - Progress Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/20"
              >
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                Dashboard Preview
              </motion.div>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Track your <span className="text-[#D4AF37] italic">growth</span> in real-time
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              See exactly how many focused hours you've put in and how close you are to your skill mastery goals.
            </p>

            {/* Progress Circle Mockup */}
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>This Month's Growth</h3>
                  <p className="text-white/40 tracking-widest text-[10px] sm:text-xs uppercase font-bold">Photography Mastery • March 2026</p>
                </div>

                {/* Circular Progress */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-10">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      className="text-white/5"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#D4AF37"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: `${2 * Math.PI * 45}`,
                        filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))'
                      }}
                      initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                      whileInView={{
                        strokeDashoffset: 2 * Math.PI * 45 * (1 - progressValue / 100)
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-5xl font-bold text-[#D4AF37]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {progressValue}%
                      </motion.div>
                      <div className="text-xs text-white/30 tracking-widest uppercase font-bold">Complete</div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 text-center border-t border-white/5 pt-10">
                  <div>
                    <div className="text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{focusHours}h</div>
                    <div className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Focused</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{targetHours}h</div>
                    <div className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Goal</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{daysLeft}</div>
                    <div className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Days Left</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-[320px] bg-black rounded-[3rem] border-[8px] border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-10">
                    <div className="w-10 h-1 bg-white/10 rounded-full mx-auto"></div>
                  </div>

                  <div className="relative w-40 h-40 mx-auto mb-10">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" className="text-white/5" />
                      <motion.circle
                        cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="4" fill="none" strokeLinecap="round"
                        style={{ strokeDasharray: `${2 * Math.PI * 40}`, filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))' }}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - 0.73) }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>73%</div>
                        <div className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Complete</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center mb-10">
                    <div>
                      <div className="text-lg font-bold text-[#D4AF37]">{focusHours}h</div>
                      <div className="text-[8px] text-white/30 uppercase font-bold">Focused</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{targetHours}h</div>
                      <div className="text-[8px] text-white/30 uppercase font-bold">Goal</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-500">{daysLeft}</div>
                      <div className="text-[8px] text-white/30 uppercase font-bold">Days</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-widest text-white/60">
                        <span>Photography</span>
                        <span className="text-[#D4AF37]">73%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <motion.div 
                          className="bg-[#D4AF37] h-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "73%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-widest text-white/60">
                        <span>Tech Skills</span>
                        <span className="text-blue-500">45%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <motion.div 
                          className="bg-blue-500 h-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "45%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1, type: "spring" }}
                className="absolute -top-6 -right-10 bg-[#D4AF37] text-white px-6 py-3 rounded-full text-xs font-bold shadow-2xl z-20"
              >
                +3h focused today 🔥
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}