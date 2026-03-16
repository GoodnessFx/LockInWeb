import { Button } from "./ui/button";
import { WHATSAPP_GROUP_URL, X_URL, TIKTOK_URL, TALLY_URL } from "@/lib/links";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-24 px-6">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full md:w-auto"
          >
            <Button asChild className="h-16 md:h-20 w-full px-8 md:px-12 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 border-none cursor-pointer flex items-center justify-center gap-4 group">
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Send className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                <span className="text-base md:text-lg">Join the WhatsApp Community</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full md:w-auto"
          >
            <Button asChild variant="outline" className="h-16 md:h-20 w-full px-8 md:px-12 border-2 border-white/10 text-white bg-white/5 hover:bg-white hover:text-[#0D1B2A] font-bold rounded-2xl transition-all duration-300 backdrop-blur-xl cursor-pointer flex items-center justify-center gap-4 group">
              <a href={X_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform md:w-6 md:h-6">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-9.684-6.638 9.684H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z"/>
                </svg>
                <span className="text-base md:text-lg">Follow on X</span>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.1-.01-.51.16-3.06 2.35-5.93 5.34-6.5 1.07-.2 2.18-.15 3.25.11v4.06c-.76-.31-1.6-.44-2.42-.38-1.37.07-2.72.93-3.22 2.19-.21.5-.28 1.05-.22 1.6.19 1.23 1.18 2.31 2.39 2.52.75.16 1.58.06 2.25-.33.85-.44 1.42-1.32 1.52-2.23.07-.94.04-1.89.04-2.84V.02z"/>
            </svg>
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