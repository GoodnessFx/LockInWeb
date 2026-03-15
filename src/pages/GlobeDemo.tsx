import { InteractiveGlobe } from "@/components/ui/interactive-globe";

export default function GlobeDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-5xl rounded-2xl border border-border bg-card overflow-hidden relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div className="flex-1 flex items-center justify-center p-4 md:p-0 min-h-[400px]">
            <InteractiveGlobe size={460} />
          </div>
        </div>
      </div>
    </div>
  );
}
