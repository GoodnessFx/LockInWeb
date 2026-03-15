import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Users, Tag, ShieldCheck, Sparkles, ExternalLink, Rocket } from "lucide-react";
import { submitToAppsScript, collectUtm } from "@/lib/form-submit";
import { toast } from "sonner";

import { WHATSAPP_GROUP_URL, GOOGLE_FORM_URL } from "@/lib/links";

function StatPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
      {label}
    </div>
  );
}

export function WaitlistBeta() {
  const utm = typeof window !== "undefined" ? collectUtm() : {};

  return (
    <section id="waitlist" className="py-32 bg-[#0D1B2A] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Apply for Private Beta — <span className="text-[#D4AF37]">100 Spots Only</span>
          </h3>
          <p className="text-white/50 text-xl md:text-2xl mb-12 font-light leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Click below to fill out the application on Google Forms.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="h-20 px-12 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#f0c040] text-[#0D1B2A] hover:shadow-[#D4AF37]/20 font-bold text-xl shadow-xl transition-all duration-300 border-none cursor-pointer flex items-center gap-3">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Apply Now <ExternalLink className="size-6" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="h-20 px-12 rounded-2xl border-2 border-white/10 bg-white/5 hover:bg-white hover:text-[#0D1B2A] text-white font-bold text-xl transition-all duration-300 backdrop-blur-xl cursor-pointer flex items-center gap-3">
                <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
                  Join Community <Users className="size-6" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
