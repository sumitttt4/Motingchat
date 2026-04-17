"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { FeatureIllustration } from "./FeatureIllustration";
import { ChevronDown, Mic, FileText, Send, LayoutTemplate, Globe, ListChecks } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-5 h-5" />,
    title: "Real-time transcription",
    desc: "MeetSync joins your Google Meet, Zoom, or Teams call as a silent participant. Every word is captured with speaker attribution in real-time. No recording uploads, no waiting.",
    stage: 0,
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Structured AI summaries",
    desc: "Our model doesn't just summarize — it structures. TL;DR, key decisions, discussion points, and follow-ups. Each summary follows a consistent format your team can rely on.",
    stage: 1,
  },
  {
    icon: <ListChecks className="w-5 h-5" />,
    title: "Action items with owners",
    desc: "\"@sarah — finalize copy by Friday\" is extracted automatically. Tasks tagged with owners and deadlines, ready to pipe into Linear, Notion, or your Slack thread.",
    stage: 2,
  },
  {
    icon: <Send className="w-5 h-5" />,
    title: "Posted to Slack in < 30 seconds",
    desc: "As soon as the meeting ends, the summary appears in the right Slack channel as a threaded message. No manual trigger, no dashboard to check.",
    stage: 3,
  },
  {
    icon: <LayoutTemplate className="w-5 h-5" />,
    title: "Custom templates per meeting type",
    desc: "Standup summaries look different from client calls. Define templates for each type of meeting — same AI, different output structure.",
    stage: 2,
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "20+ languages supported",
    desc: "Your team speaks different languages? MeetSync transcribes and summarizes in the original language, or translates to your channel's default.",
    stage: 1,
  },
];

// Map feature stage to pipeline index (0-3)
const featureToStage = [0, 1, 2, 3, 2, 1];

export function Features() {
  const revealRef = useReveal();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} id="features" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">Feature breakdown</span>
          </div>
        </div>

        <h2 className="text-[36px] md:text-[48px] font-bold text-heading leading-[1.1] tracking-tight mb-16">
          Not just transcription.<br />
          <span className="text-body font-normal text-[24px] md:text-[32px]">Complete meeting intelligence.</span>
        </h2>

        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 items-start">
          {/* Left — Feature illustration area */}
          <div className="bg-card rounded-2xl border border-border-subtle p-6 min-h-[400px] flex flex-col items-center justify-center sticky top-20 overflow-hidden">
            <div key={openIdx} className="animate-scale-in w-full">
              <FeatureIllustration activeIndex={featureToStage[openIdx]} />
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="space-y-0">
            {features.map((feat, i) => (
              <button
                key={i}
                onClick={() => setOpenIdx(i)}
                className={`w-full text-left py-5 border-b border-border-subtle transition-all group ${i === 0 ? 'border-t' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIdx === i ? 'bg-accent text-white scale-110 shadow-[0_2px_8px_rgba(37,99,235,0.3)]' : 'bg-gray-100 text-body group-hover:bg-gray-200'}`}>
                      {feat.icon}
                    </div>
                    <span className={`text-[16px] font-semibold transition-colors ${openIdx === i ? 'text-heading' : 'text-body group-hover:text-heading'}`}>
                      {feat.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-body-subtle transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-accent' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIdx === i ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[14px] text-body leading-relaxed pl-11">{feat.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
