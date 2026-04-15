"use client";

import { useReveal, useStaggerReveal } from "@/hooks/useReveal";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Try it. No credit card.",
    features: ["5 meetings/mo", "Slack summaries", "Basic templates", "1 Slack channel"],
    btnStyle: "bg-card text-heading border border-border-subtle hover:bg-gray-50 hover:shadow-md",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    desc: "For heavy meeting users.",
    features: ["Unlimited meetings", "Action items w/ owners", "Custom prompts", "Priority support", "5 Slack channels"],
    btnStyle: "bg-accent text-white hover:bg-accent/90 shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.5)]",
    highlight: true,
  },
  {
    name: "Team",
    price: "$12",
    period: "/user/mo",
    desc: "For orgs. Billed annually.",
    features: ["Everything in Pro", "Admin dashboard", "SSO & SAML", "Audit logs", "Unlimited channels", "Dedicated CSM"],
    btnStyle: "bg-card text-heading border border-border-subtle hover:bg-gray-50 hover:shadow-md",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Talk to us.",
    features: ["Custom SLA", "On-prem option", "Custom models", "Dedicated infra", "SOC 2 Type II", "BAA available"],
    btnStyle: "bg-dark text-white hover:bg-dark/90 hover:shadow-lg",
    highlight: false,
  },
];

export function Pricing() {
  const revealRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section ref={revealRef as React.RefObject<HTMLElement>} id="pricing" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">Pricing</span>
          </div>
          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">08 / 08</span>
        </div>

        <h2 className="text-[40px] md:text-[48px] font-bold text-heading leading-[1.1] tracking-tight mb-4">
          Simple pricing. No surprises.
        </h2>
        <p className="text-[17px] text-body leading-relaxed max-w-[480px] mb-14">
          Start free. Upgrade when your team grows. Cancel anytime.
        </p>

        {/* Pricing Grid */}
        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 group ${
                tier.highlight
                  ? "bg-card border-2 border-accent shadow-[0_8px_30px_rgba(37,99,235,0.12)] relative hover:shadow-[0_12px_40px_rgba(37,99,235,0.2)]"
                  : "bg-card border border-border-subtle hover:shadow-lg hover:border-accent/20"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider animate-badge-bounce">
                  Popular
                </div>
              )}

              <div className="mb-6 mt-1">
                <h3 className="text-[15px] font-semibold text-heading mb-3 group-hover:text-accent transition-colors">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[40px] font-bold text-heading leading-none">{tier.price}</span>
                  {tier.period && <span className="text-[13px] text-body">{tier.period}</span>}
                </div>
                <p className="text-[13px] text-body mt-2">{tier.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-heading">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-lg font-semibold text-[14px] py-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${tier.btnStyle}`}>
                Get started
              </button>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-body text-center mt-8">
          Overage: $0.50/meeting beyond plan limits. Volume discounts available for 100+ seats.
        </p>
      </div>
    </section>
  );
}
