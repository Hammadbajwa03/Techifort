import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { privacyPolicyDocument } from "@/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Techifort collects, uses, and protects your personal information when you visit our website or use our services.",
  openGraph: {
    title: "Privacy Policy | Techifort",
    description:
      "Techifort's Privacy Policy — how we collect, use, and safeguard your information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[rgb(var(--background))]">
        <LegalDocumentLayout doc={privacyPolicyDocument} />
        <Footer />
      </main>
    </>
  );
}
