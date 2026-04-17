"use client";

import { useState } from "react";
import { useReveal, useStaggerReveal } from "@/hooks/useReveal";

const tabs = [
  {
    lang: "TypeScript",
    code: `import { MeetSync } from "@meetsync/sdk";

const client = new MeetSync({
  apiKey: process.env.MEETSYNC_API_KEY,
  slackChannel: "#standup",
});

// Auto-join and summarize
await client.meetings.autoSync({
  calendar: "google",
  template: "standup",
});`
  },
  {
    lang: "Python",
    code: `from meetsync import MeetSync

client = MeetSync(
    api_key=os.environ["MEETSYNC_API_KEY"],
    slack_channel="#standup",
)

# Auto-join and summarize
client.meetings.auto_sync(
    calendar="google",
    template="standup",
)`
  },
  {
    lang: "REST",
    code: `curl -X POST https://api.meetsync.dev/v1/sync \\
  -H "Authorization: Bearer $MEETSYNC_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "calendar": "google",
    "slack_channel": "#standup",
    "template": "standup"
  }'`
  },
];

export function DeveloperExperience() {
  const revealRef = useReveal();
  const gridRef = useStaggerReveal();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} id="developers" className="py-24 px-6 bg-dark relative overflow-hidden">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")` }} />

      <div className="max-w-content mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">Developer experience</span>
          </div>
        </div>

        <h2 className="text-[40px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-4">
          Build on MeetSync.
        </h2>
        <p className="text-[17px] text-body-light leading-relaxed max-w-[520px] mb-14">
          Three lines of code. That&apos;s all it takes to pipe every meeting summary into your product.
        </p>

        <div className="grid md:grid-cols-[1fr,1fr] gap-8">
          {/* Code Snippet */}
          <div className="bg-[#111122] rounded-2xl border border-gray-800 overflow-hidden hover:border-accent/30 transition-colors">
            {/* Tabs */}
            <div className="flex border-b border-gray-800">
              {tabs.map((tab, i) => (
                <button
                  key={tab.lang}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-3 text-[13px] font-medium transition-all duration-200 relative ${
                    activeTab === i
                      ? "text-accent bg-accent/5"
                      : "text-body-subtle hover:text-white"
                  }`}
                >
                  {tab.lang}
                  {activeTab === i && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
                  )}
                </button>
              ))}
            </div>
            {/* Code with transition */}
            <div className="relative">
              <pre key={activeTab} className="p-6 text-[13px] text-body-light leading-relaxed font-mono overflow-x-auto animate-fade-in">
                <code>{tabs[activeTab].code}</code>
              </pre>
            </div>
          </div>

          {/* Integration logos */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-body-subtle mb-6">Integrates with</p>
              <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-3 gap-4 stagger-children">
                {["Slack", "Linear", "Notion", "Google Cal", "Outlook", "Jira"].map((name) => (
                  <div key={name} className="bg-[#111122] border border-gray-800 rounded-xl p-4 flex items-center justify-center hover:border-accent/40 hover:bg-accent/5 hover:scale-105 transition-all duration-200 cursor-default">
                    <span className="text-[13px] font-semibold text-body-light">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111122] border border-gray-800 rounded-xl p-5 hover:border-accent/30 transition-colors group">
              <p className="text-[13px] text-body-light mb-3">Install via npm</p>
              <code className="text-[14px] text-accent font-mono group-hover:text-white transition-colors">npm install @meetsync/sdk</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
