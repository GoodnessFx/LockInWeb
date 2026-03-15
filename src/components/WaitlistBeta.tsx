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

  const emailForm = useForm<{ email: string }>({
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const onEmailSubmit = async (data: { email: string }) => {
    const payload = {
      form: "waitlist",
      to: "goodnessiyamah1@gmail.com",
      email: data.email,
      ...utm,
    };
    await submitToAppsScript(payload);
    toast.success("You're in. We'll reach out personally when your spot opens.");
    emailForm.reset();
  };

  const betaFormUrl = (import.meta as any).env?.VITE_GOOGLE_BETA_FORM_URL as string | undefined;

  const newsletterForm = useForm<{ email: string; updates: boolean }>({
    defaultValues: { email: "", updates: true },
    mode: "onChange",
  });

  const onNewsletterSubmit = async (data: { email: string; updates: boolean }) => {
    const payload = {
      form: "newsletter",
      to: "goodnessiyamah1@gmail.com",
      email: data.email,
      updates: data.updates ? "yes" : "no",
      ...utm,
    };
    await submitToAppsScript(payload);
    toast.success("You're subscribed. First letter drops soon.");
    newsletterForm.reset({ email: "", updates: true });
  };

  return (
    <section id="waitlist" className="py-24 bg-[#0D1B2A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] -ml-32 -mb-32"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-8">
                <span className="size-2 rounded-full bg-[#D4AF37] animate-pulse" />
                Focus on growth. Lock in your discipline
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Locked In: The focus & habit app built for <span className="text-[#D4AF37] italic">the obsessed</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Streaks that actually stick + shared accountability (coming soon). No fluff. Just results.
              </p>
              
              <form
                onSubmit={emailForm.handleSubmit(onEmailSubmit)}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 bg-white/5 border-white/10 text-white rounded-xl focus:border-[#D4AF37]/50 focus:ring-[#D4AF37]/20"
                  required
                  {...emailForm.register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
                />
                <Button type="submit" className="h-14 px-8 bg-gradient-to-r from-[#D4AF37] to-[#f0c040] text-[#0D1B2A] font-bold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-none cursor-pointer">
                  Get Early Access
                </Button>
              </form>
              <p className="text-xs text-white/40 mb-10">
                You're in. We'll reach out personally when your spot opens. Lifetime discount + beta invite waiting for you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Tag className="size-5" />, title: "01 — Lifetime Discount", desc: "Lock in a rate that never changes." },
                  { icon: <Rocket className="size-5" />, title: "02 — Beta Invite", desc: "Private build. Test before anyone else." },
                  { icon: <Sparkles className="size-5" />, title: "03 — Shoutout", desc: "Your name in the app. You helped build this." },
                  { icon: <ShieldCheck className="size-5" />, title: "04 — Shape the Product", desc: "Your feedback decides what ships next." }
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 p-5 bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 font-bold text-[#D4AF37] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {item.icon} {item.title}
                    </div>
                    <p className="text-sm text-white/50 font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-inner">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Apply for Private Beta — <span className="text-[#D4AF37]">100 Spots Only</span>
                </h3>
                <p className="text-white/60 text-lg mb-10 font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Click below to fill out the application on Google Forms.
                </p>
                <div className="flex flex-col gap-5">
                  <Button asChild size="lg" className="h-16 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#f0c040] text-[#0D1B2A] hover:shadow-[#D4AF37]/20 font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-none cursor-pointer">
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Apply Now <ExternalLink className="size-5 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-16 rounded-2xl border-2 border-white/40 bg-transparent hover:bg-white hover:text-[#0D1B2A] text-white font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                    <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
                      Join Community <Users className="size-5 ml-2" />
                    </a>
                  </Button>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                  <h4 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>The Locked In Letter</h4>
                  <form
                    onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)}
                    className="flex flex-col gap-4"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-[#D4AF37]/50"
                      required
                      {...newsletterForm.register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                    />
                    <Button type="submit" className="h-12 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all">Subscribe</Button>
                  </form>
                  <label className="mt-4 flex items-center gap-3 text-sm text-white/40 cursor-pointer hover:text-white/60 transition-colors">
                    <Checkbox
                      className="border-white/20 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:border-[#D4AF37]"
                      defaultChecked
                      checked={newsletterForm.watch("updates")}
                      onCheckedChange={(v: boolean) =>
                        newsletterForm.setValue("updates", !!v, { shouldValidate: true })
                      }
                    />
                    I want early product updates too
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { val: "247+", label: "people on the waitlist" },
              { val: "50", label: "beta spots available" },
              { val: "Strict", label: "Beta closes when spots fill" }
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-white/5 p-6 bg-white/5">
                <div className="text-3xl font-bold text-[#D4AF37] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{stat.val}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
