"use client";

import { useReveal } from "@/hooks/useReveal";

const tweets = [
  {
    name: "Sarah Chen",
    handle: "@sarahchen_pm",
    role: "Head of Product, Loom",
    date: "Mar 28, 2026",
    text: "MeetSync saved our team 3 hours a week. Every standup, every client call — summarized and in Slack before we even leave the room. This is how async should work.",
  },
  {
    name: "Alex Rivera",
    handle: "@arivera_dev",
    role: "CTO, Buildspace",
    date: "Apr 2, 2026",
    text: "We replaced Otter and Fireflies with MeetSync. The Slack threading alone was worth it — summaries show up *in the channel*, not in some dashboard nobody checks.",
  },
  {
    name: "Priya Patel",
    handle: "@priya_builds",
    role: "Founder, Relay",
    date: "Apr 10, 2026",
    text: "I run 12 meetings a week. MeetSync means I actually remember what happened in all of them. The action item extraction is scary accurate.",
  },
  {
    name: "Marcus Thompson",
    handle: "@marcust",
    role: "Eng Manager, Linear",
    date: "Mar 15, 2026",
    text: "The API is clean. We built a custom integration that pipes meeting summaries into our sprint planning tool in about 20 lines of TypeScript.",
  },
  {
    name: "Yuki Tanaka",
    handle: "@yuki_t",
    role: "VP Engineering, Retool",
    date: "Apr 8, 2026",
    text: "Multi-language support sealed it for us. Our teams in Tokyo and Berlin get summaries in their language, posted to their local channels. Magic.",
  },
  {
    name: "Jordan Lee",
    handle: "@jordanlee",
    role: "Head of Ops, Cal.com",
    date: "Apr 12, 2026",
    text: "< 30 seconds from meeting end to Slack summary. I've timed it. Nothing else comes close to this speed with this quality.",
  },
];

function TweetCard({ tweet }: { tweet: typeof tweets[0] }) {
  return (
    <div className="w-[340px] flex-shrink-0 bg-card rounded-xl border border-border-subtle p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-[13px] font-bold text-accent">
            {tweet.name.charAt(0)}
          </div>
          <div>
            <p className="text-[14px] font-semibold text-heading leading-none">{tweet.name}</p>
            <p className="text-[12px] text-body mt-0.5">{tweet.handle}</p>
          </div>
        </div>
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </div>
      <p className="text-[14px] text-heading leading-relaxed mb-3">{tweet.text}</p>
      <div className="flex items-center gap-2">
        <p className="text-[11px] text-body">{tweet.role}</p>
        <span className="text-gray-300">&middot;</span>
        <p className="text-[11px] text-body">{tweet.date}</p>
      </div>
    </div>
  );
}

export function SocialProof() {
  const revealRef = useReveal();

  const row1 = tweets.slice(0, 3);
  const row2 = tweets.slice(3, 6);

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="py-24 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">Social proof</span>
          </div>
          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">07 / 08</span>
        </div>

        <h2 className="text-[40px] md:text-[48px] font-bold text-heading leading-[1.1] tracking-tight mb-16">
          Teams ship faster<br />with MeetSync.
        </h2>
      </div>

      {/* Marquee Row 1 — scrolls left */}
      <div className="marquee-track mb-5">
        <div className="flex gap-5 animate-marquee-left" style={{ width: 'max-content' }}>
          {[...row1, ...row1, ...row1, ...row1].map((tweet, i) => (
            <TweetCard key={`r1-${i}`} tweet={tweet} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div className="marquee-track">
        <div className="flex gap-5 animate-marquee-right" style={{ width: 'max-content' }}>
          {[...row2, ...row2, ...row2, ...row2].map((tweet, i) => (
            <TweetCard key={`r2-${i}`} tweet={tweet} />
          ))}
        </div>
      </div>
    </section>
  );
}
