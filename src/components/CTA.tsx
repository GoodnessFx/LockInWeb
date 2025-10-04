import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-purple-500/10 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)] rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] rounded-3xl"></div>
          
          <div className="relative z-10 p-12 lg:p-16 rounded-3xl border border-primary/20 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Ready to Lock In?
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold"
            >
              <span className="text-foreground">Lock in your focus</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                today.
              </span>
              <br />
              <span className="text-foreground">Master your niche</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-primary bg-clip-text text-transparent">
                tomorrow.
              </span>
            </motion.h2>
          
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands of creators who achieve their growth goals in tech, photography, and beyond. Start building discipline with LockIn today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="group flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download size={22} className="group-hover:animate-bounce" />
                Download for iOS
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Play size={22} className="group-hover:scale-110 transition-transform duration-300" />
                Get on Android
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground"
            >
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Free to download</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-medium">No hidden fees</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Bank-level security</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}