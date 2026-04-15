"use client";

import { useReveal } from "@/hooks/useReveal";

export function Hero() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="pt-20 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-content mx-auto">
        {/* Micro label */}
        <div className="flex items-center gap-2 mb-6 animate-slide-up">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
            For teams &amp; startups
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <h1 className="text-[52px] md:text-[64px] font-bold text-heading leading-[1.08] tracking-tight animate-slide-up">
              Every meeting,<br />
              summarized.<br />
              <span className="text-accent animate-text-reveal inline-block">In Slack.</span>
            </h1>
            <p className="mt-6 text-[17px] text-body leading-[1.7] max-w-[440px] animate-slide-up-d2">
              MeetSync joins your calls, transcribes in real-time, and delivers structured summaries to Slack. Under 30 seconds. Zero effort.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 animate-slide-up-d3">
              <button className="bg-accent text-white font-semibold px-6 py-3 rounded-lg text-[15px] shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
                Connect Slack — Free
              </button>
              <button className="bg-white text-heading font-semibold px-6 py-3 rounded-lg text-[15px] border border-border-subtle hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Watch demo
              </button>
            </div>

            {/* CLI Snippet */}
            <div className="mt-8 bg-dark rounded-lg px-4 py-3 max-w-[380px] flex items-center justify-between group animate-slide-up-d4 hover:shadow-lg transition-shadow">
              <code className="text-[13px] text-gray-300 font-mono">
                <span className="text-gray-500">$</span> npx meetsync init --slack
              </code>
              <button className="text-gray-500 hover:text-white transition-colors text-[11px] font-mono uppercase tracking-wider">
                Copy
              </button>
            </div>
          </div>

          {/* Right — Floating card stack */}
          <div className="relative flex items-center justify-center animate-slide-up-d3">
            <div className="w-full aspect-square max-w-[420px] relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-accent/8 blur-[60px] rounded-full animate-pulse-glow" />
              
              {/* Isometric card stack */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Back card — floating */}
                <div className="absolute w-[260px] h-[180px] bg-white rounded-xl border border-border-subtle shadow-lg animate-float-alt">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-[11px] font-semibold text-heading uppercase tracking-wider">Meeting Recorded</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-100 rounded-full w-full animate-shimmer" style={{ background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)', backgroundSize: '200% 100%' }} />
                      <div className="h-2 bg-gray-100 rounded-full w-4/5" />
                      <div className="h-2 bg-gray-100 rounded-full w-3/5" />
                    </div>
                  </div>
                </div>

                {/* Front card — Slack message — floating offset */}
                <div className="absolute w-[280px] bg-white rounded-xl border border-border-subtle shadow-2xl animate-float translate-y-6 -translate-x-2">
                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-heading">MeetSync</p>
                        <p className="text-[10px] text-body">Posted to #standup</p>
                      </div>
                      <span className="ml-auto text-[10px] bg-accent/10 text-accent font-bold px-1.5 py-0.5 rounded uppercase animate-badge-bounce">Bot</span>
                    </div>
                    <p className="text-[12px] font-semibold text-heading mb-2">Weekly Standup — Summary</p>
                    <div className="space-y-1.5 text-[11px] text-body leading-relaxed">
                      <p>&#x2022; Q2 metrics reviewed, on track</p>
                      <p>&#x2022; Mobile launch delayed 1 week for QA</p>
                      <p className="text-accent font-medium">&#x2022; @sarah — finalize copy by Friday</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">&#128077; 3</span>
                      <span className="text-[11px] bg-accent/10 text-accent px-2 py-0.5 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">&#9989; 2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
