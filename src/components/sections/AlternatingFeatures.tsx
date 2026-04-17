"use client";

import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export function AlternatingFeatures() {
  const revealRef = useReveal();

  const features = [
    {
      title: "AI-powered meeting notes",
      description: "MeetSync automatically joins your scheduled calls and instantly generates high-fidelity transcriptions and summaries using the latest large language models.",
      bullets: [
        "Captures context, not just words",
        "Identifies speakers automatically",
        "Extracts numerical data and metrics accurately"
      ],
      imageContent: (
        <div className="absolute inset-4 sm:inset-8 bg-white rounded-2xl shadow-lg border border-border-subtle overflow-hidden flex flex-col">
          <div className="bg-gray-50 border-b border-border-subtle px-4 py-3 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">SM</div>
             <div>
               <p className="text-[12px] font-semibold text-heading leading-tight">Sales Sync Sync</p>
               <p className="text-[10px] text-body-subtle">Processing complete</p>
             </div>
          </div>
          <div className="p-5 flex-1 relative">
            <div className="space-y-3">
               <div className="h-2.5 w-3/4 bg-gray-200 rounded-full animate-pulse" />
               <div className="h-2.5 w-full bg-gray-100 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
               <div className="h-2.5 w-5/6 bg-gray-100 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
               <div className="h-2.5 w-1/2 bg-gray-100 rounded-full mt-6 animate-pulse" style={{ animationDelay: '0.3s' }} />
               <div className="h-2.5 w-full bg-gray-100 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
               <div className="h-2.5 w-4/5 bg-gray-100 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-[11px] font-bold border border-green-100 shadow-sm animate-float">
               + AI Analysis
            </div>
          </div>
        </div>
      ),
      reversed: false,
    },
    {
      title: "Crystal clear action items",
      description: "Stop scrolling through endless transcripts. MeetSync's AI engine directly extracts key deliverables and assigns them to the correct team members instantly.",
      bullets: [
        "Automatic task delegation via @mentions",
        "Syncs directly to Linear and Jira",
        "Action item tracking across weeks"
      ],
      imageContent: (
        <div className="absolute inset-4 sm:inset-8 bg-white rounded-2xl shadow-lg border border-border-subtle overflow-hidden flex flex-col items-center justify-center p-6">
           <div className="w-full bg-[#f8fafc] border border-blue-100 rounded-xl p-4 shadow-sm mb-3 group hover:border-blue-300 transition-colors animate-float">
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-blue-500" /></div>
                <div>
                   <p className="text-[13px] font-semibold text-heading leading-snug">Ship API v2.0</p>
                   <p className="text-[11px] text-body-subtle mt-1">Assigned to <span className="text-accent font-medium bg-accent/5 px-1 rounded">@alex</span></p>
                </div>
              </div>
           </div>
           
           <div className="w-full bg-[#f8fafc] border border-orange-100 rounded-xl p-4 shadow-sm group hover:border-orange-300 transition-colors animate-float-alt">
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-orange-400" /></div>
                <div>
                   <p className="text-[13px] font-semibold text-heading leading-snug">Draft Q3 Marketing copy</p>
                   <p className="text-[11px] text-body-subtle mt-1">Assigned to <span className="text-accent font-medium bg-accent/5 px-1 rounded">@sarah</span></p>
                </div>
              </div>
           </div>
        </div>
      ),
      reversed: true,
    },
    {
      title: "Push directly to Slack",
      description: "Your team lives in Slack. So should your meeting notes. MeetSync pipes structured, beautifully formatted summaries right into the relevant channels.",
      bullets: [
        "Native Slack UI blocks",
        "Custom routing per calendar event",
        "Interactive upvotes and acknowledgements"
      ],
      imageContent: (
         <div className="absolute inset-4 sm:inset-8 bg-[#4A154B] rounded-2xl shadow-xl overflow-hidden flex flex-col p-4 animate-float-alt">
            {/* Slack Chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            
            {/* Message block */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm mt-auto mb-4 border border-white/5">
               <div className="flex gap-2">
                 <div className="w-8 h-8 rounded bg-white text-[#4A154B] flex items-center justify-center font-bold text-xs">M</div>
                 <div>
                   <p className="text-white text-[12px] font-bold">MeetSync <span className="text-white/50 text-[10px] font-normal font-mono">APP</span></p>
                   <div className="w-32 h-2 bg-white/20 rounded-full mt-1.5 animate-pulse" />
                   <div className="w-48 h-2 bg-white/10 rounded-full mt-1.5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                   <div className="w-24 h-2 bg-white/10 rounded-full mt-1.5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                 </div>
               </div>
            </div>
         </div>
      ),
      reversed: false,
    }
  ];

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="py-24 px-6 bg-white">
      <div className="max-w-content mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-[36px] md:text-[44px] font-bold text-heading leading-[1.1] tracking-tight mb-4 max-w-2xl mx-auto">
            Make your workflows seamless with AI integration.
          </h2>
          <p className="text-[17px] text-body-subtle max-w-xl mx-auto leading-relaxed">
            Everything you need to turn wasted meeting hours into actionable engineering deliverables.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="grid gap-20 md:gap-32">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${feature.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 animate-slide-up`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              
              {/* Text Side */}
              <div className="flex-1 w-full space-y-6">
                <h3 className="text-[28px] md:text-[32px] font-bold text-heading leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-body leading-[1.7]">
                  {feature.description}
                </p>
                <div className="space-y-3 pt-2">
                  {feature.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-accent" />
                      </div>
                      <p className="text-[14px] font-medium text-heading">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full relative">
                <div className="w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-blue-50 to-[#F2F4F8] rounded-[32px] relative overflow-hidden">
                   {/* Abstract soft shapes */}
                   <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/40 blur-3xl rounded-full" />
                   <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-3xl rounded-full" />
                   
                   {/* Injected Custom Component Content */}
                   {feature.imageContent}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
