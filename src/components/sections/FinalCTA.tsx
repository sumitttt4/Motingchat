"use client";

import { useReveal } from "@/hooks/useReveal";

export function FinalCTA() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="bg-dark rounded-3xl p-8 md:p-16 text-center relative overflow-hidden group">
          {/* Animated glow orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

          <div className="relative z-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-6 block animate-badge-bounce">Get started today</span>
            <h2 className="text-[40px] md:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Your team will<br />thank you.
            </h2>
            <p className="text-[17px] text-body-light leading-relaxed max-w-[420px] mx-auto mb-10">
              Join 500+ teams who never miss an action item. Set up in 2 minutes. No credit card required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="bg-accent text-white font-semibold px-8 py-4 rounded-lg text-[16px] shadow-[0_4px_16px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
                Connect Slack — it&apos;s free
              </button>
              <button className="bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-[16px] border border-white/20 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
