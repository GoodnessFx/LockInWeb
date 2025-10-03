import React from 'react';
import { motion } from 'motion/react';
import { Download, Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/20 p-12 rounded-3xl border border-primary/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            Lock in your focus today.
            <br />
            <span className="text-primary">Master your niche tomorrow.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join thousands of creators who achieve their growth goals in tech, photography, and beyond. Start building discipline with LockIn today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <Button
              size="lg"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
            >
              <Download size={20} />
              Download for iOS
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg group"
            >
              <Play size={20} />
              Get on Android
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Bank-level security</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}