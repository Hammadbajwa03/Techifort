import type { Metadata } from "next";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CTABanner } from "@/components/services/CTABanner";
import { ServicesHubGrid } from "@/components/services/ServicesHubGrid";
import { ServicesHubHero } from "@/components/services/ServicesHubHero";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "End-to-end digital solutions — from custom development to growth marketing — built to help your business scale.",
  openGraph: {
    title: "Our Services | Techifort",
    description:
      "Explore Techifort's web, mobile, blockchain, AI, SEO, design, and marketing services.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServicesHubHero />
        <SiteAtmosphere>
          <ServicesHubGrid />
          <CTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
