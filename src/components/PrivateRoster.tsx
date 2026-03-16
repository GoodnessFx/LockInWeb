import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchRosterEntries, RosterEntry } from "@/lib/googleSheets";

export function PrivateRoster() {
  const [roster, setRoster] = useState<RosterEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    setError(null);

    fetchRosterEntries(20)
      .then((entries) => {
        if (canceled) return;
        setRoster(entries);
      })
      .catch((err) => {
        if (canceled) return;
        setError(`Could not load the private roster: ${err.message}`);
      })
      .finally(() => {
        if (canceled) return;
        setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, []);

  // if (!GOOGLE_SHEETS_API_KEY) return null;

  return (
    <section className="py-24 sm:py-32 bg-[#16213e] overflow-hidden">
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
            Private Roster
          </motion.div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white text-center leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Private <span className="text-[#D4AF37] italic">Roster</span>
        </h2>
        <p className="text-white/50 text-base sm:text-lg md:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto text-center font-light px-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          View the list of everyone who has filled the beta application. Real people, real growth.
        </p>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
            <div className="text-[#D4AF37] font-bold tracking-widest text-[10px] sm:text-xs uppercase">Loading Roster...</div>
          </div>
        ) : error ? (
          <div className="text-destructive bg-destructive/10 border border-destructive/20 p-6 rounded-2xl text-center text-sm sm:text-base">{error}</div>
        ) : roster.length === 0 ? (
          <div className="text-white/30 text-center py-16 sm:py-20 border-2 border-dashed border-white/10 rounded-[2rem] sm:rounded-[3rem] px-6">No entries found yet. Be the first to apply!</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {roster.map((entry, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 p-5 sm:p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="font-bold text-white text-lg sm:text-xl mb-1 group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{entry.name}</div>
                {entry.email ? <div className="text-xs sm:text-sm text-white/40 font-light mb-3 truncate">{entry.email}</div> : null}
                {entry.joinedAt ? (
                  <div className="text-[9px] sm:text-[10px] text-[#D4AF37]/60 font-bold uppercase tracking-widest bg-[#D4AF37]/10 inline-block px-3 py-1 rounded-full border border-[#D4AF37]/20">
                    Joined {entry.joinedAt}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
