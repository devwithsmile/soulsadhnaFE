"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { ReasonsSection } from "@/components/landing/ReasonsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CTASection } from "@/components/landing/CTASection";
import { TrainersSection } from "@/components/landing/TrainersSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FoundersSection } from "@/components/landing/FoundersSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen md:px-16">
      <HeroSection />
      <StatsSection />
      <ReasonsSection />
      <BenefitsSection />
      <CTASection />
      <TrainersSection />
      <TestimonialsSection />
      <FoundersSection />
      <FAQSection />
    </div>
  );
}
