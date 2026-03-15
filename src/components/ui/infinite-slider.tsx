'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/components/ui/utils';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number; // seconds for one loop
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 32,
  speed = 30,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max items-center"
        style={{ gap }}
        animate={{ x: [0, reverse ? 0.5 : -0.5].map((v) => `${v * 100}%`) }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

