import React from 'react';
import { motion } from 'motion/react';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Preview() {
  const progressValue = 73;
  const focusHours = 142;
  const targetHours = 200;
  const daysLeft = 8;

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Progress Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Track your growth in real-time
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See exactly how many focused hours you've put in and how close you are to your skill mastery goals.
            </p>

            {/* Progress Circle Mockup */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">This Month's Growth</h3>
                <p className="text-muted-foreground">Photography Mastery • December 2024</p>
              </div>

              {/* Circular Progress */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-muted/20"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    className="text-primary"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 45}`,
                    }}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    whileInView={{
                      strokeDashoffset: 2 * Math.PI * 45 * (1 - progressValue / 100)
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-3xl text-primary"
                    >
                      {progressValue}%
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl text-primary">{focusHours}h</div>
                  <div className="text-sm text-muted-foreground">Focused</div>
                </div>
                <div>
                  <div className="text-2xl">{targetHours}h</div>
                  <div className="text-sm text-muted-foreground">Goal</div>
                </div>
                <div>
                  <div className="text-2xl text-orange-500">{daysLeft}</div>
                  <div className="text-sm text-muted-foreground">Days Left</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Monthly Progress</span>
                  <span>{progressValue}%</span>
                </div>
                <Progress value={progressValue} className="h-2" />
              </div>
            </div>
          </motion.div>

          {/* Right side - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-80"
              >
                {/* Mini Progress Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted/20" />
                    <motion.circle
                      cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"
                      className="text-primary"
                      style={{ strokeDasharray: `${2 * Math.PI * 40}` }}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - 0.73) }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl text-primary">73%</div>
                      <div className="text-sm text-muted-foreground">Complete</div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-xl text-primary">142h</div>
                    <div className="text-xs text-muted-foreground">Focused</div>
                  </div>
                  <div>
                    <div className="text-xl">200h</div>
                    <div className="text-xs text-muted-foreground">Goal</div>
                  </div>
                  <div>
                    <div className="text-xl text-green-500">8</div>
                    <div className="text-xs text-muted-foreground">Days Left</div>
                  </div>
                </div>

                {/* Mini Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Photography Mastery</span>
                      <span>73%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <motion.div 
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "73%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tech Skills</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <motion.div 
                        className="bg-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "45%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm shadow-lg"
              >
                +3h focused today
              </motion.div>
              

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}