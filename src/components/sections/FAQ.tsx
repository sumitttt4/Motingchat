"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export function FAQ() {
  const revealRef = useReveal();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which platforms does MeetSync support?",
      answer: "We natively support Google Meet, Zoom, and Microsoft Teams. You can authenticate with all three in your dashboard, and our bot will automatically join any scheduled calls via calendar sync."
    },
    {
      question: "Is my meeting data secure and private?",
      answer: "Absolutely. We are SOC2 compliant and do not train our foundational models on your meeting transcripts. All recordings and transcripts are encrypted at rest and in transit."
    },
    {
      question: "Do I need to install a browser extension?",
      answer: "No. MeetSync is fully server-side. Once you link your calendar and Slack workspace, the bot operates autonomously in the background without any local installation."
    },
    {
      question: "How long does it take to get a Slack summary?",
      answer: "Typically under 30 seconds after the meeting concludes. Our specialized formatting engine streams the data into Slack almost instantly."
    },
    {
      question: "Can I customize the summary format?",
      answer: "Yes, our Developer plan allows you to input custom prompts to dictate exactly how the Meeting notes are structured, what information is retained, and which channels receive the payload."
    }
  ];

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="py-24 px-6 bg-[#f8f9fc]">
      <div className="max-w-[720px] mx-auto animate-slide-up">
        
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[40px] font-bold text-heading leading-[1.1] tracking-tight mb-4">
            Have questions? We've got answers.
          </h2>
          <p className="text-[16px] text-body-subtle">
            Everything you need to know about setting up and using MeetSync.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white border transition-all duration-300 rounded-xl overflow-hidden cursor-pointer ${
                openIdx === i ? 'border-accent shadow-md shadow-accent/5' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
               <div className="p-6 flex items-center justify-between">
                 <h4 className={`text-[15px] md:text-[16px] font-bold ${openIdx === i ? 'text-accent' : 'text-heading'}`}>
                   {faq.question}
                 </h4>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIdx === i ? 'bg-accent/10' : 'bg-gray-50'}`}>
                   <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-accent' : 'text-body-subtle'}`} />
                 </div>
               </div>
               
               <div 
                 className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                   openIdx === i ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
                 }`}
               >
                 <p className="px-6 text-[14px] md:text-[15px] text-body leading-relaxed max-w-[600px]">
                   {faq.answer}
                 </p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
