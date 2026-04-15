import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MeetSync — Every meeting, summarized and sent to Slack',
  description: 'MeetSync records, transcribes, and delivers AI summaries directly to your Slack channels. Under 30 seconds. No copy-pasting, no missed action items.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
