import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { termsAndConditionsDocument } from "@/lib/legal/terms-and-conditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Techifort's Terms & Conditions for use of our website and services, including intellectual property, payments, liability, and governing law.",
  openGraph: {
    title: "Terms & Conditions | Techifort",
    description:
      "Techifort's Terms & Conditions — rules for using our website and engaging our services.",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[rgb(var(--background))]">
        <LegalDocumentLayout doc={termsAndConditionsDocument} />
        <Footer />
      </main>
    </>
  );
}
