import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-white/10 py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
          <div className="text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Locked In
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="#features" className="text-white/40 hover:text-[#D4AF37] transition-all font-bold tracking-widest text-xs uppercase">Features</a>
            <a href="#about" className="text-white/40 hover:text-[#D4AF37] transition-all font-bold tracking-widest text-xs uppercase">About</a>
            <Link to="/blog" className="text-white/40 hover:text-[#D4AF37] transition-all font-bold tracking-widest text-xs uppercase">Blog</Link>
            <a href="#contact" className="text-white/40 hover:text-[#D4AF37] transition-all font-bold tracking-widest text-xs uppercase">Contact</a>
          </div>
        </div>
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-[0.2em] text-white/30 uppercase">
          <div>© 2026 Locked In. Built for the obsessed.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}