import type { Metadata } from "next";
import { CTABanner } from "@/components/portfolio/CTABanner";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioShowcase } from "@/components/portfolio/PortfolioShowcase";
import { PortfolioStats } from "@/components/portfolio/PortfolioStats";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Techifort's portfolio of platforms, products, and digital solutions across development, consulting, finance, and branding.",
  openGraph: {
    title: "Portfolio | Techifort",
    description:
      "A showcase of platforms and digital solutions built by Techifort.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PortfolioHero />
        <SiteAtmosphere>
          <PortfolioStats />
          <PortfolioShowcase />
          <CTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
