import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "https://storage.efferd.com/logo/claude-wordmark.svg", alt: "Claude" },
  { src: "https://storage.efferd.com/logo/clerk-wordmark.svg", alt: "Clerk" },
  { src: "https://storage.efferd.com/logo/nvidia-wordmark.svg", alt: "NVIDIA" },
  { src: "https://storage.efferd.com/logo/supabase-wordmark.svg", alt: "Supabase" },
  { src: "https://storage.efferd.com/logo/openai-wordmark.svg", alt: "OpenAI" },
  { src: "https://storage.efferd.com/logo/turso-wordmark.svg", alt: "Turso" },
  { src: "https://storage.efferd.com/logo/vercel-wordmark.svg", alt: "Vercel" },
];

export function LogoStrip() {
  return (
    <section className="bg-[#0D1B2A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative z-10">
        <h2 className="text-center font-bold text-xs md:text-sm text-white/30 tracking-[0.4em] uppercase mb-10">
          Trusted by <span className="text-[#D4AF37]">Experts</span> Globally
        </h2>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex items-center gap-16 md:gap-24 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={logo.alt + i}
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 select-none opacity-20 grayscale brightness-200 hover:opacity-50 transition-opacity duration-300"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

