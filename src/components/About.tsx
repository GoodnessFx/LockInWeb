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
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/10">
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            About LockIn
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Master your niche
            </span>
            <br />
            <span className="text-foreground">through discipline</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            LockIn helps you build discipline by tracking focused work sessions and blocking distractions, 
            ensuring you consistently grow your skills in tech, photography, or any niche you choose.
          </p>
            <br></br>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2 h-full">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl text-primary group-hover:from-primary group-hover:to-blue-500 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl mb-4 font-semibold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-8 py-4 rounded-full border border-primary/20 shadow-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            
            >

              
              <CheckCircle className="h-6 w-6" />
            </motion.div>
              <br></br>
                <br></br>
            <span className="font-semibold text-lg">Join thousands who achieve their growth goals</span>
          </div>
          
          {/* Stats */}
           <br></br>
                <br></br>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Focus Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
             <br></br>
                <br></br>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}