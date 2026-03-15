import { cn } from "@/components/ui/utils";
import { Button } from "@/components/ui/button";
import { Rocket as RocketIcon, ArrowRight as ArrowRightIcon, CheckCircle2, Target, Timer, AlarmClock, CalendarRange, ListTodo } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/links";

export function HeroSection() {
  return (
    <section id="home" className="mx-auto w-full max-w-5xl px-4 pt-16 pb-12 md:px-6 md:pt-20 md:pb-16">
      <div className="relative flex flex-col items-center justify-center gap-5">
        <h1
          className={cn(
            "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl leading-tight tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl",
            "text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
          )}
        >
          Lock In. Build the Discipline That Compounds.
        </h1>
        <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-prose animate-in fill-mode-backwards text-center text-base text-foreground/80 tracking-normal delay-200 duration-500 ease-out sm:text-lg md:text-xl">
          The focus & habit app built by broke founders — for real students, teams, and anyone ready to stop playing small.
        </p>
        <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-col items-center justify-center gap-3 fill-mode-backwards pt-1 delay-300 duration-500 ease-out">
          <Button asChild className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f0c040] text-[#0D1B2A] px-8 py-4 text-lg font-bold shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 transform hover:scale-[1.05] border-none cursor-pointer" size="lg">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply for Beta Access <ArrowRightIcon className="size-4 ms-2" />
            </a>
          </Button>
          <p className="text-sm text-foreground/60 italic text-center">
            100 spots only. No spam. Lifetime discount for early believers.
          </p>
        </div>
      </div>
    </section>
  );
}

export function LogosSection() {
  return (
    <section className="relative space-y-4 border-t pt-8 pb-12">
      <div className="relative z-10 mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-card">
          🍅 Pomodoro Focus
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-card">
          🎯 Goal Tracking
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-card">
          🔥 Habit Streaks
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-card">
          📋 Weekly Reviews
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-card">
          ⏰ Routine Reminders
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-card">
          ✅ Daily Checklists
        </span>
      </div>
    </section>
  );
}
