import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Lock, Bell, TrendingUp, Shield, Calendar, Smartphone, Target } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Coins className="h-8 w-8" />,
      title: "Time Tracking",
      description: "Automatically track your focused work sessions and skill development"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Focus Lock",
      description: "Block distracting apps and websites during your locked focus sessions"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Milestone Notifications",
      description: "Get motivated with progress updates and achievement alerts"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Analytics",
      description: "Visual tracking of your skill development with detailed analytics"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Distraction Shield",
      description: "Your focus is protected with advanced blocking technology"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Session Scheduling",
      description: "Never miss a growth session with smart calendar integration"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Track your growth anywhere with our intuitive mobile app"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Niche Goals",
      description: "Set custom growth targets for tech, photography, or any skill"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#16213e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Features
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl mb-8 font-bold leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <span className="text-white">Powerful features for</span>
            <br />
            <span className="text-[#D4AF37] italic">disciplined growth</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Everything you need to build consistent focus habits and achieve mastery in your chosen niche.
          </p>
           <br></br>
                <br></br>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <motion.div 
                    className="p-5 bg-gradient-to-br from-[#D4AF37]/20 to-[#E5A323]/20 rounded-2xl text-[#D4AF37] group-hover:from-[#D4AF37] group-hover:to-[#E5A323] group-hover:text-white transition-all duration-500 mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#D4AF37]/25"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl mb-4 font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
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
          className="mt-20 text-center"
        >
           <br></br>
                <br></br>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent text-[#D4AF37] px-10 py-5 rounded-full border border-[#D4AF37]/20 shadow-2xl backdrop-blur-sm">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Target className="h-7 w-7" />
            </motion.div>
            <span className="font-bold text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>And many more features to help you achieve your growth goals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}