import type { Metadata } from "next";
import { CaseStudyTeaser } from "@/components/industries/CaseStudyTeaser";
import { CTABanner } from "@/components/industries/CTABanner";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryDetailBlock } from "@/components/industries/IndustryDetailBlock";
import { IndustryQuickJump } from "@/components/industries/IndustryQuickJump";
import { IndustryStats } from "@/components/industries/IndustryStats";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { industriesPageData } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Techifort builds tailored software, AI, and digital solutions across 16+ industries — from technology and e-commerce to healthcare, finance, and manufacturing.",
  openGraph: {
    title: "Industries We Serve | Techifort",
    description:
      "Explore how Techifort empowers 16+ industries with custom software, AI, and digital platforms.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <IndustriesHero />
        <IndustryQuickJump />
        <SiteAtmosphere>
          <div className="container-padded relative z-10 pt-6 sm:pt-8">
            {industriesPageData.map((industry, index) => (
              <IndustryDetailBlock
                key={industry.slug}
                industry={industry}
                index={index}
              />
            ))}
          </div>
          <IndustryStats />
          <CaseStudyTeaser />
          <CTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
