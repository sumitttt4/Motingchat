"use client";

import { useReveal, useCountUp } from "@/hooks/useReveal";

export function Benchmarks() {
  const revealRef = useReveal();
  const stat1 = useCountUp(30);
  const stat2 = useCountUp(500);
  const stat3 = useCountUp(99);

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="py-24 px-6">
      <div className="max-w-content mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">Benchmarks</span>
          </div>
          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">03 / 08</span>
        </div>

        <h2 className="text-[40px] md:text-[48px] font-bold text-heading leading-[1.1] tracking-tight mb-16">
          Numbers don&apos;t lie.
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div ref={stat1.ref as React.RefObject<HTMLDivElement>}>
            <p className="text-[56px] md:text-[72px] font-bold text-heading leading-none tracking-tight animate-counter-glow">&lt;{stat1.count}s</p>
            <p className="text-[14px] text-body mt-2">Summary delivery to Slack</p>
          </div>
          <div ref={stat2.ref as React.RefObject<HTMLDivElement>}>
            <p className="text-[56px] md:text-[72px] font-bold text-heading leading-none tracking-tight animate-counter-glow" style={{ animationDelay: '1s' }}>{stat2.count}+</p>
            <p className="text-[14px] text-body mt-2">Teams using MeetSync daily</p>
          </div>
          <div ref={stat3.ref as React.RefObject<HTMLDivElement>}>
            <p className="text-[56px] md:text-[72px] font-bold text-heading leading-none tracking-tight animate-counter-glow" style={{ animationDelay: '2s' }}>{stat3.count}%</p>
            <p className="text-[14px] text-body mt-2">Transcription accuracy</p>
          </div>
        </div>

        {/* Competitor Table */}
        <div className="bg-card rounded-2xl border border-border-subtle overflow-hidden hover:shadow-lg transition-shadow">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-border-subtle bg-gray-50/50">
                <th className="text-left py-4 px-6 font-semibold text-heading">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-accent">MeetSync</th>
                <th className="text-center py-4 px-4 font-medium text-body">Otter.ai</th>
                <th className="text-center py-4 px-4 font-medium text-body">Fireflies</th>
                <th className="text-center py-4 px-4 font-medium text-body">tl;dv</th>
              </tr>
            </thead>
            <tbody className="text-body">
              {[
                ["Slack-native threading", true, false, false, false],
                ["< 30s delivery", true, false, false, false],
                ["Action items w/ owners", true, true, true, false],
                ["Custom summary templates", true, false, false, true],
                ["20+ languages", true, true, false, false],
                ["Calendar auto-join", true, true, true, true],
                ["Free tier", true, true, true, true],
              ].map(([label, ...checks], i) => (
                <tr key={i} className="border-b border-border-subtle last:border-0 hover:bg-accent/[0.02] transition-colors">
                  <td className="py-3.5 px-6 text-heading font-medium">{label as string}</td>
                  {(checks as boolean[]).map((check, j) => (
                    <td key={j} className="text-center py-3.5 px-4">
                      {check ? (
                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full transition-transform hover:scale-125 ${j === 0 ? 'bg-accent text-white' : 'bg-green-100 text-green-600'}`}>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      ) : (
                        <span className="inline-block w-4 h-0.5 bg-gray-300 rounded" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
