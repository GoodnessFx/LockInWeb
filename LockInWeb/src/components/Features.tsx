import React from 'react';
import { motion } from 'motion/react';
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
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Powerful features for disciplined growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build consistent focus habits and achieve mastery in your chosen niche.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            And many more features to help you stay on track with your financial goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}