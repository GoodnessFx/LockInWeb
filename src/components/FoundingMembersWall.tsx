import { motion } from 'framer-motion';
import { GOOGLE_FORM_URL } from "@/lib/links";

export function FoundingMembersWall() {
  const members = [
    "Alex Chen",
    "Sarah Kim",
    "Marcus Rodriguez",
    "Emma Thompson",
    "David Park"
  ];

  return (
    <section className="py-24 bg-[#0D1B2A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          The <span className="text-[#D4AF37] italic">Founding Circle</span>
        </h2>
        <p className="text-white/50 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          These are the early believers who helped build Locked In. Fill the form and your name appears here.
        </p>
        <div className="space-y-6 mb-16">
          {members.map((member, index) => (
            <motion.div 
              key={member}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center gap-6 group"
            >
              <span className="text-[#D4AF37] font-bold text-2xl opacity-40 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{(index + 1).toString().padStart(2, '0')}</span>
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight hover:text-[#D4AF37] transition-colors cursor-default" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{member}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <a 
            href={GOOGLE_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#D4AF37] text-xl font-bold border-b-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all pb-1 uppercase tracking-[0.2em] cursor-pointer"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Apply to Join the Circle
          </a>
        </motion.div>
      </div>
    </section>
  );
}