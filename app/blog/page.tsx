import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogShowcase } from "@/components/blog/BlogShowcase";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights & ideas from Techifort on software development, AI, consulting, finance, and digital branding.",
  openGraph: {
    title: "Blog | Techifort",
    description:
      "Thoughts on software, AI, and digital strategy from the Techifort team.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BlogHero />
        <SiteAtmosphere>
          <Suspense
            fallback={
              <div className="section-padding container-padded text-center text-slate-500">
                Loading articles…
              </div>
            }
          >
            <BlogShowcase />
          </Suspense>
          <NewsletterSection />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
