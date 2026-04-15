"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 512 512" fill="none">
            <g transform="translate(92.5,45.1) scale(0.8)">
              <path d="M256,192L320,224L320,288L256,320L192,288L192,224Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
              <path d="M352,192L416,224L416,288L352,320L320,288L320,224Z" fill="#2563eb" stroke="none" strokeLinejoin="round" opacity="0.8" />
              <path d="M160,192L192,224L192,288L160,320L96,288L96,224Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
              <path d="M320,288L352,320L352,384L320,416L256,384L256,320Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
              <path d="M192,96L256,128L256,192L192,224L160,192L160,128Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
              <path d="M320,96L352,128L352,192L320,224L256,192L256,128Z" fill="#2563eb" stroke="none" strokeLinejoin="round" opacity="0.9" />
            </g>
          </svg>
          <span className="font-bold text-heading text-lg tracking-tight">meetsync</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-[13px] font-medium text-body hover:text-heading transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-[13px] font-medium text-body hover:text-heading transition-colors">How it Works</Link>
          <Link href="#pricing" className="text-[13px] font-medium text-body hover:text-heading transition-colors">Pricing</Link>
          <Link href="#developers" className="text-[13px] font-medium text-body hover:text-heading transition-colors">Docs</Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-5 text-[12px] text-body">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              2.4k
            </span>
          </div>
          <button className="bg-accent text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
            Connect Slack
          </button>
        </div>
      </div>
    </nav>
  );
}
