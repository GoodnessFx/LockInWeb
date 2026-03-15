import { motion } from 'framer-motion';
import { GOOGLE_FORM_URL } from "@/lib/links";
import { Trophy, Star, Medal } from 'lucide-react';

export function FoundingMembersWall() {
  const members = [
    "Iyamah Goodness",
    "Oluwatobi Onatade",
    "Gold",
    "Joel",
    "Muiz",
    "Pele(Odinaka)"
  ];

  const getRankBadge = (index: number) => {
    switch(index) {
      case 0: return <Trophy className="h-6 w-6 text-yellow-400" />;
      case 1: return <Medal className="h-6 w-6 text-gray-300" />;
      case 2: return <Star className="h-6 w-6 text-amber-600" />;
      default: return null;
    }
  };

  return (
    <section className="py-32 bg-[#0D1B2A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            The <span className="text-[#D4AF37] italic">Founding Circle</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            These are the early believers who helped build Locked In. Fill the form and your name appears here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {members.map((member, index) => (
            <motion.div 
              key={member}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
              className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 group transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 font-bold text-xl text-[#D4AF37] border border-white/5 group-hover:border-[#D4AF37]/30" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {index + 1}
                </div>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {member}
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                {getRankBadge(index)}
              </div>
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