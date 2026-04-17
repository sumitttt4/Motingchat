"use client";

import { useReveal } from "@/hooks/useReveal";

export function Recognition() {
  const revealRef = useReveal();

  const awards = [
    { name: "High Performer", season: "Winter", year: "2024", icon: "⭐" },
    { name: "Easiest to Use", season: "Winter", year: "2024", icon: "🚀" },
    { name: "Best Meets", season: "Fall", year: "2023", icon: "🏆" },
    { name: "Momentum Leader", season: "Spring", year: "2024", icon: "📈" }
  ];

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-[24px] md:text-[28px] font-bold text-heading tracking-tight mb-2">
            World-class recognition and awards
          </h2>
          <p className="text-[15px] text-body-subtle">
            Rated by thousands of engineering teams worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up-d2">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 sm:p-8 bg-card-warm border border-gray-200/60 rounded-2xl hover:shadow-sm hover:scale-[1.02] transition-all cursor-default">
              <span className="text-3xl mb-3">{award.icon}</span>
              <p className="text-[13px] font-bold text-heading text-center leading-tight mb-1">{award.name}</p>
              <div className="bg-gray-100 text-gray-500 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full mt-2">
                {award.season} {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
