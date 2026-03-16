import { motion } from 'framer-motion';

export function EarlyBelieverPerks() {
  return (
    <section className="py-32 bg-[#16213e] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/20"
          >
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
            Beta Perks
          </motion.div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-10 sm:mb-16 text-white leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Why Join the <span className="text-[#D4AF37] italic">Beta?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { id: "01", title: "Lifetime Discount", desc: "Lock in a rate that never changes. Build your legacy without the tax." },
            { id: "02", title: "Beta Access", desc: "Test the private build before anyone else. Direct line to the founders." },
            { id: "03", title: "Founding Member Shoutout", desc: "Your name lives in the app forever. You're part of the origin story." },
            { id: "04", title: "Shape the Product", desc: "Your feedback decides what ships next. Build the tool you've always wanted." }
          ].map((perk, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 p-8 sm:p-10 bg-white/5 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 sm:gap-6 mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#D4AF37] opacity-40 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{perk.id}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{perk.title}</h3>
              </div>
              <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}