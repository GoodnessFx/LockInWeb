import { Button } from "./ui/button";
import { WHATSAPP_GROUP_URL, X_URL, TIKTOK_URL, TALLY_URL } from "@/lib/links";
import { motion } from "framer-motion";
import { Send, Twitter, Video } from "lucide-react";

export function CommunitySection() {
  return (
    <section id="community" className="py-32 bg-[#080E15] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/20"
            >
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
              Join the Community
            </motion.div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Join the <span className="text-[#D4AF37] italic">Community</span>
          </h2>
          <p className="text-white/50 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            We build in public. Updates, wins, bugs and breakthroughs — all shared with the people locked in with us.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button asChild className="h-20 px-12 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 border-none cursor-pointer flex items-center gap-4 group">
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                <span className="text-lg">Join the WhatsApp Community</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button asChild variant="outline" className="h-20 px-12 border-2 border-white/10 text-white bg-white/5 hover:bg-white hover:text-[#0D1B2A] font-bold rounded-2xl transition-all duration-300 backdrop-blur-xl cursor-pointer flex items-center gap-4 group">
              <a href={X_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Follow on X</span>
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-all font-bold tracking-[0.2em] text-sm uppercase group">
            <Video className="h-4 w-4 opacity-50 group-hover:opacity-100" />
            TikTok
          </a>
          <div className="hidden md:block w-2 h-2 rounded-full bg-white/10"></div>
          {TALLY_URL ? (
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-all font-bold tracking-[0.2em] text-sm uppercase">
              View the Tally
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}