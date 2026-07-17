import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { getServiceBySlug, servicePages } from "@/lib/services";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.tagline,
    openGraph: {
      title: `${service.title} | Techifort`,
      description: service.tagline,
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceHero service={service} />
        <SiteAtmosphere>
          <ServicePageTemplate service={service} />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
