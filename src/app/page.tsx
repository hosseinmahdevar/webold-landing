import * as React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SocialProof } from "@/components/sections/social-proof";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { ServicesBento } from "@/components/sections/services-bento";
import { FlagshipStory } from "@/components/sections/flagship-story";
import { Testimonials } from "@/components/sections/testimonials";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { IntakeForm } from "@/components/sections/intake-form";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Social Proof Bar */}
      <SocialProof />

      {/* 3. Curated Portfolio Grid */}
      <PortfolioGrid />

      {/* 4. Capabilities / Services Bento Grid */}
      <ServicesBento />

      {/* 5. Flagship Case Study Narrative */}
      <FlagshipStory />

      {/* 6. Testimonials & Client Validation */}
      <Testimonials />

      {/* 7. Transparent Sprint Process & Guarantees */}
      <ProcessTimeline />

      {/* 8. Conversion Lead Intake Hub */}
      <IntakeForm />
    </div>
  );
}
