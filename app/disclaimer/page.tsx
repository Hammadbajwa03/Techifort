import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { disclaimerDocument } from "@/lib/legal/disclaimer";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read Techifort's Disclaimer regarding website information, results, external links, portfolio examples, and limitation of liability.",
  openGraph: {
    title: "Disclaimer | Techifort",
    description:
      "Techifort's Disclaimer — informational content, no guarantees of results, and limitation of liability.",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[rgb(var(--background))]">
        <LegalDocumentLayout doc={disclaimerDocument} />
        <Footer />
      </main>
    </>
  );
}
