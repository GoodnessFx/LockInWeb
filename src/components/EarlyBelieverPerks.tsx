import { motion } from 'framer-motion';

export function EarlyBelieverPerks() {
  return (
    <section className="py-32 bg-[#16213e] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Why Join the <span className="text-[#D4AF37] italic">Beta?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className="rounded-3xl border border-white/10 p-10 bg-white/5 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="flex items-center gap-6 mb-4">
                <span className="text-4xl font-bold text-[#D4AF37] opacity-40 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{perk.id}</span>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{perk.title}</h3>
              </div>
              <p className="text-white/50 text-lg font-light leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}