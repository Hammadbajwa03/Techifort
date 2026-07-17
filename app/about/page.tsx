import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { CoreValues } from "@/components/about/CoreValues";
import { CTABanner } from "@/components/about/CTABanner";
import { MissionVision } from "@/components/about/MissionVision";
import { OurStory } from "@/components/about/OurStory";
import { TeamSection } from "@/components/about/TeamSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Techifort — a forward-thinking software development company delivering innovative, reliable, and high-quality solutions worldwide.",
  openGraph: {
    title: "About Us | Techifort",
    description:
      "A forward-thinking software development company dedicated to innovative, reliable solutions for businesses worldwide.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <SiteAtmosphere>
          <OurStory />
          <MissionVision />
          <AboutStats />
          <CoreValues />
          <ProcessSection />
          <TeamSection />
          <WhyChooseUs />
          <CTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
