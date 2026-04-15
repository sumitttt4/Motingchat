import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-card py-16 px-6">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512" fill="none">
                <g transform="translate(92.5,45.1) scale(0.8)">
                  <path d="M256,192L320,224L320,288L256,320L192,288L192,224Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
                  <path d="M352,192L416,224L416,288L352,320L320,288L320,224Z" fill="#2563eb" stroke="none" strokeLinejoin="round" opacity="0.8" />
                  <path d="M160,192L192,224L192,288L160,320L96,288L96,224Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
                  <path d="M320,288L352,320L352,384L320,416L256,384L256,320Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
                  <path d="M192,96L256,128L256,192L192,224L160,192L160,128Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
                  <path d="M320,96L352,128L352,192L320,224L256,192L256,128Z" fill="#2563eb" stroke="none" strokeLinejoin="round" opacity="0.9" />
                </g>
              </svg>
              <span className="font-bold text-heading text-[15px]">meetsync</span>
            </div>
            <p className="text-[13px] text-body leading-relaxed max-w-[200px]">
              Every meeting, summarized and sent to Slack. Automatically.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-heading mb-4">Product</h4>
            <ul className="space-y-2.5">
              {["Features", "Pricing", "Changelog", "Security"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[13px] text-body hover:text-heading transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-heading mb-4">Developers</h4>
            <ul className="space-y-2.5">
              {["Documentation", "API Reference", "SDK", "Status"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[13px] text-body hover:text-heading transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-heading mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About", "Blog", "Careers", "Privacy", "Terms"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[13px] text-body hover:text-heading transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-body">&copy; {new Date().getFullYear()} MeetSync, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-body hover:text-heading transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" className="text-body hover:text-heading transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
