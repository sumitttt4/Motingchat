import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { AlternatingFeatures } from "@/components/sections/AlternatingFeatures";
import { Features } from "@/components/sections/Features";
import { MatrixDivider } from "@/components/sections/MatrixDivider";
import { Benchmarks } from "@/components/sections/Benchmarks";
import { DeveloperExperience } from "@/components/sections/DeveloperExperience";
import { FAQ } from "@/components/sections/FAQ";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { SectionDivider } from "@/components/sections/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <AlternatingFeatures />
        <SectionDivider />
        <MatrixDivider />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Benchmarks />
        <DeveloperExperience />
        <SectionDivider />
        <SocialProof />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
