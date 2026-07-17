import type { Metadata } from "next";
import { FAQContent } from "@/components/faqs/FAQContent";
import { FAQCTABanner } from "@/components/faqs/FAQCTABanner";
import { FAQHero } from "@/components/faqs/FAQHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Techifort services, pricing, technology, and support — find answers or contact our team.",
  openGraph: {
    title: "FAQs | Techifort",
    description:
      "Everything you need to know about working with Techifort — services, technical, pricing, and support.",
  },
};

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <FAQHero />
        <SiteAtmosphere>
          <FAQContent />
          <FAQCTABanner />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
