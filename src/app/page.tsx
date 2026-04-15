import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Features } from "@/components/sections/Features";
import { MatrixDivider } from "@/components/sections/MatrixDivider";
import { Benchmarks } from "@/components/sections/Benchmarks";
import { DeveloperExperience } from "@/components/sections/DeveloperExperience";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <MatrixDivider />
        <Features />
        <Benchmarks />
        <DeveloperExperience />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
