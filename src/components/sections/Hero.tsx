"use client";

import { useReveal } from "@/hooks/useReveal";
import { HeroIntegration } from "./HeroIntegration";

export function Hero() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="pt-20 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col items-start gap-6 lg:gap-8">
            {/* Micro label */}
            <div className="flex items-center gap-2 animate-slide-up">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                For teams &amp; startups
              </span>
            </div>

            <div>
              <h1 className="text-[42px] sm:text-[52px] md:text-[64px] font-bold text-heading leading-[1.08] tracking-tight animate-slide-up">
                Every meeting,<br />
                summarized.<br />
                <span className="text-accent animate-text-reveal inline-block">In Slack.</span>
              </h1>
              <p className="mt-6 text-[17px] text-body leading-[1.7] max-w-[440px] animate-slide-up-d2">
                MeetSync joins your calls, transcribes in real-time, and delivers structured summaries to Slack. Under 30 seconds. Zero effort.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-slide-up-d3 mt-2">
              <button className="bg-accent text-white font-semibold px-6 py-3 rounded-lg text-[15px] shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
                Connect Slack — Free
              </button>
              <button className="bg-white text-heading font-semibold px-6 py-3 rounded-lg text-[15px] border border-border-subtle hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Watch demo
              </button>
            </div>
          </div>

          {/* Right — Visual Integration Pipeline */}
          <div className="relative flex items-center justify-center animate-slide-up-d3 w-full pb-8 md:pb-0">
            <HeroIntegration />
          </div>
        </div>
      </div>
    </section>
  );
}
