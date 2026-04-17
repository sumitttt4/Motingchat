"use client";

export function HeroIntegration() {
  return (
    <div className="relative w-full max-w-[460px] flex flex-col items-center justify-center mx-auto mt-4">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full scale-150 animate-pulse-glow" />

      {/* Container holding the UI visualization */}
      <div className="relative w-full">
        
        {/* Top: Calendar/Meeting Block */}
        <div className="w-[85%] sm:w-[320px] bg-white rounded-2xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative z-20 flex flex-col overflow-hidden animate-float">
          {/* Header */}
          <div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Google Meet</span>
          </div>
          {/* Body */}
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-lg">
                14
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-heading">Weekly Product Sync</h3>
                <p className="text-[12px] text-body-subtle mt-0.5">10:00 AM — 11:00 AM</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50/50">
               <div className="flex -space-x-2">
                 <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                 <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300" />
                 <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-400" />
               </div>
               
               {/* MeetSync Bot Indicator */}
               <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                 <div className="relative flex h-1.5 w-1.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                 </div>
                 <span className="text-[10px] font-bold text-accent">Recording</span>
               </div>
            </div>
          </div>
        </div>

        {/* The Connection Spline / Pipeline (Subtle & Elegant) */}
        <div className="absolute right-[20%] top-[90px] h-[180px] w-24 border-r-2 border-b-2 border-dashed border-gray-200/80 rounded-br-[40px] z-10" />
        
        {/* Animated flow particle */}
        <div className="absolute right-[20%] top-[90px] w-24 h-[180px] z-10 pointer-events-none overflow-hidden">
           <div className="w-12 h-12 bg-accent/40 blur-xl rounded-full absolute -right-6 top-0 animate-[flow_3s_ease-in-out_infinite]" />
        </div>

        {/* Bottom: Slack Output Block */}
        <div className="w-[95%] sm:w-[380px] bg-white rounded-2xl border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative z-30 ml-auto mt-12 animate-float-alt">
          {/* Slack Header */}
          <div className="bg-[#4A154B] px-4 py-3 border-b border-[#3E103F] rounded-t-2xl flex items-center gap-3">
             <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center font-bold text-white text-xs">#</div>
             <span className="text-[13px] font-semibold text-white tracking-wide">product-updates</span>
          </div>

          {/* Slack Message Body */}
          <div className="p-5">
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-md bg-accent flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-[14px] font-bold text-heading">MeetSync App</span>
                  <span className="text-[11px] bg-gray-100 text-gray-500 font-bold px-1 rounded uppercase tracking-wider mb-0.5">Bot</span>
                  <span className="text-[11px] text-body-subtle mb-0.5 ml-1">11:02 AM</span>
                </div>
                
                <p className="text-[13px] font-semibold text-heading mb-2">🗓️ Weekly Product Sync Summary</p>
                
                <div className="space-y-2 text-[13px] text-body leading-[1.6]">
                  <p>Here are the key takeaways from the call:</p>
                  
                  <div className="pl-3 border-l-2 border-accent/30 space-y-2 mt-2">
                    <p className="flex items-start gap-1.5"><span className="text-green-500 font-bold">✓</span> Q2 metrics reviewed, everything is on track.</p>
                    <p className="flex items-start gap-1.5"><span className="text-accent font-bold">&rarr;</span> <span className="font-semibold text-heading bg-accent/10 px-1 rounded">@sarah</span> to finalize marketing copy by Friday.</p>
                    <p className="flex items-start gap-1.5"><span className="text-accent font-bold">&rarr;</span> <span className="font-semibold text-heading bg-accent/10 px-1 rounded">@mike</span> to push the staging release.</p>
                  </div>
                </div>

                {/* Tags/Reactions */}
                <div className="flex gap-2 mt-4">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="text-[12px]">🔥</span>
                    <span className="text-[11px] font-semibold text-gray-500">3</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">
                    <span className="text-[12px]">✅</span>
                    <span className="text-[11px] font-semibold text-accent">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
