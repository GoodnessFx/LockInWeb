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
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Master your niche through discipline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LockIn helps you build discipline by tracking focused work sessions and blocking distractions, 
            ensuring you consistently grow your skills in tech, photography, or any niche you choose.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span>Join thousands who achieve their growth goals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}