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
    <section id="features" className="py-24 bg-gradient-to-b from-secondary/10 to-background">
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
            Features
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Powerful features
            </span>
            <br />
            <span className="text-foreground">for disciplined growth</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
              <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <motion.div 
                    className="p-5 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl text-primary group-hover:from-primary group-hover:to-blue-500 group-hover:text-white transition-all duration-500 mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl mb-4 font-semibold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
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
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            
            >
              
              <Target className="h-6 w-6" />
            </motion.div>
            <span className="font-semibold text-lg">And many more features to help you achieve your growth goals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}