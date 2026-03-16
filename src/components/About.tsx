import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, PiggyBank, BarChart3 } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Auto-track focus sessions",
      description: "Automatically monitor your deep work and skill development time"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Locked focus mode with strict rules",
      description: "Your concentration stays protected from distractions"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Visual dashboard that keeps you accountable",
      description: "Track progress and stay motivated with clear insights on your growth!!!"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-[#0D1B2A] to-[#16213e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#D4AF37]/20"
          >
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
            About Locked In
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl mb-8 font-bold leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <span className="text-[#D4AF37] italic">
              Master your niche
            </span>
            <br />
            <span className="text-white">through discipline</span>
          </h2>
          
          <p className="text-lg lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light px-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Locked In helps you build discipline by tracking focused work sessions and blocking distractions, 
            ensuring you consistently grow your skills in tech, photography, or any niche you choose.
          </p>
            <br></br>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div className="bg-white/5 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 group-hover:shadow-3xl group-hover:shadow-[#D4AF37]/10 group-hover:-translate-y-3 flex flex-col h-full min-h-[340px] md:min-h-[380px]">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-10">
                    <motion.div 
                      className="p-6 bg-gradient-to-br from-[#D4AF37]/20 to-[#E5A323]/20 rounded-2xl text-[#D4AF37] group-hover:from-[#D4AF37] group-hover:to-[#E5A323] group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#D4AF37]/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {React.cloneElement(feature.icon as React.ReactElement, { className: "h-8 w-8" })}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-3xl mb-6 font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-lg font-light flex-grow" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
           <br></br>
                <br></br>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent text-[#D4AF37] px-6 sm:px-10 py-4 sm:py-5 rounded-3xl sm:rounded-full border border-[#D4AF37]/20 shadow-2xl backdrop-blur-sm mx-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.div>
            <span className="font-bold text-lg sm:text-xl text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Join thousands who achieve their growth goals</span>
          </div>
          
          {/* Stats */}
           <br></br>
                <br></br>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-3xl mx-auto px-6"
          >
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2 sm:mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>10K+</div>
              <div className="text-white/50 text-xs sm:text-sm tracking-widest uppercase font-bold">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2 sm:mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>50K+</div>
              <div className="text-white/50 text-xs sm:text-sm tracking-widest uppercase font-bold">Focus Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2 sm:mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>95%</div>
              <div className="text-white/50 text-xs sm:text-sm tracking-widest uppercase font-bold">Success Rate</div>
            </div>
             <br></br>
                <br></br>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}