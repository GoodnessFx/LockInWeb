import { Button } from "./ui/button";
import { WHATSAPP_GROUP_URL, X_URL, TIKTOK_URL, TALLY_URL } from "@/lib/links";

export function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-[#16213e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Join the <span className="text-[#D4AF37] italic">Community</span>
        </h2>
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          We build in public. Updates, wins, bugs and breakthroughs — all shared with the people locked in with us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button asChild className="h-16 px-10 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold rounded-2xl shadow-xl transition-all duration-300 border-none cursor-pointer transform hover:scale-[1.05]">
            <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
              Join the WhatsApp Community
            </a>
          </Button>
          <Button asChild variant="outline" className="h-16 px-10 border-2 border-white/40 text-white bg-transparent hover:bg-white hover:text-[#0D1B2A] font-bold rounded-2xl transition-all duration-300 backdrop-blur-md cursor-pointer transform hover:scale-[1.05]">
            <a href={X_URL} target="_blank" rel="noopener noreferrer">
              Follow on X
            </a>
          </Button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8">
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors font-bold tracking-widest text-xs uppercase">
            TikTok
          </a>
          <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
          {TALLY_URL ? (
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors font-bold tracking-widest text-xs uppercase">
              View the Tally
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}