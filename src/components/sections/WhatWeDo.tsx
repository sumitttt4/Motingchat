"use client";

import { useReveal, useStaggerReveal } from "@/hooks/useReveal";
import { Calendar, Hash, Bot, Users, Zap, Shield } from "lucide-react";

export function WhatWeDo() {
  const revealRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="py-24 px-6">
      <div className="max-w-content mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">What we do</span>
          </div>
          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">01 / 08</span>
        </div>

        <h2 className="text-[40px] md:text-[48px] font-bold text-heading leading-[1.1] tracking-tight mb-4">
          Two products. One mission.
        </h2>
        <p className="text-[17px] text-body leading-relaxed max-w-[520px] mb-14">
          Whether you&apos;re a fast-moving startup or a 500-person org, MeetSync fits into how your team already works.
        </p>

        {/* Two-column card split */}
        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-6 stagger-children">
          {/* API / Teams card */}
          <div className="bg-card rounded-2xl border border-border-subtle p-8 hover:shadow-xl hover:-translate-y-1 hover:border-accent/20 transition-all duration-300 group">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4 block">For teams</span>
            <h3 className="text-[26px] font-bold text-heading leading-tight mb-3 group-hover:text-accent transition-colors">Slack-first<br />meeting notes</h3>
            <p className="text-[15px] text-body leading-relaxed mb-8">
              Summaries, action items, and decisions — threaded inside your Slack channels, automatically.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Calendar className="w-4 h-4" />, label: "Calendar sync" },
                { icon: <Hash className="w-4 h-4" />, label: "Slack threading" },
                { icon: <Bot className="w-4 h-4" />, label: "AI transcription" },
                { icon: <Users className="w-4 h-4" />, label: "Team dashboard" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 text-[13px] text-heading font-medium group/item hover:text-accent transition-colors">
                  <div className="w-7 h-7 rounded-md bg-accent/8 text-accent flex items-center justify-center group-hover/item:bg-accent group-hover/item:text-white transition-all duration-200">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Consumer / Personal card */}
          <div className="bg-card-warm rounded-2xl border border-border-subtle p-8 hover:shadow-xl hover:-translate-y-1 hover:border-amber-300/30 transition-all duration-300 group">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-600 mb-4 block">For founders</span>
            <h3 className="text-[26px] font-bold text-heading leading-tight mb-3 group-hover:text-amber-600 transition-colors">Your personal<br />meeting memory</h3>
            <p className="text-[15px] text-body leading-relaxed mb-8">
              Full searchable archive of every conversation. Ask questions about past meetings with natural language.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Zap className="w-4 h-4" />, label: "Instant search" },
                { icon: <Shield className="w-4 h-4" />, label: "Private by default" },
                { icon: <Bot className="w-4 h-4" />, label: "Ask anything" },
                { icon: <Calendar className="w-4 h-4" />, label: "Full history" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 text-[13px] text-heading font-medium group/item hover:text-amber-600 transition-colors">
                  <div className="w-7 h-7 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-200">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
