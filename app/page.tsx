"use client";

import { AboutSection } from "@/components/AboutSection";
import { AISolutionsSection } from "@/components/AISolutionsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqsSection } from "@/components/FaqsSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PageIntro } from "@/components/PageIntro";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { TechMarquee } from "@/components/TechMarquee";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustedBy } from "@/components/TrustedBy";
import { WeServeSection } from "@/components/WeServeSection";

export default function HomePage() {
  return (
    <PageIntro>
      {(ready) => (
        <>
          <Navbar />
          <main className="flex-1">
            <Hero contentReady={ready} />
            <SiteAtmosphere>
              <TrustedBy />
              <AboutSection />
              <ServicesSection />
              <WeServeSection />
              <PortfolioSection />
              <ProcessSection />
              <TechMarquee />
              <AISolutionsSection />
              <TestimonialsSection />
              <BlogSection />
              <FaqsSection />
              <NewsletterSection />
              <ContactSection />
              <Footer />
            </SiteAtmosphere>
          </main>
          <FloatingCTA />
        </>
      )}
    </PageIntro>
  );
}
