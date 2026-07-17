"use client";

import { CTABanner } from "@/components/services/CTABanner";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceRelatedFAQs } from "@/components/services/ServiceRelatedFAQs";
import { ServiceRelatedPortfolio } from "@/components/services/ServiceRelatedPortfolio";
import { ServiceTechStack } from "@/components/services/ServiceTechStack";
import { ServiceWhyUs } from "@/components/services/ServiceWhyUs";
import { type ServiceRecord } from "@/lib/services";

type ServicePageTemplateProps = {
  service: ServiceRecord;
};

/** Body sections for `/service/[slug]` — hero rendered separately above SiteAtmosphere */
export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <ServiceOverview service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <ServiceTechStack service={service} />
      <ServiceWhyUs service={service} />
      <ServiceRelatedPortfolio service={service} />
      <ServiceRelatedFAQs service={service} />
      <CTABanner
        heading={`Ready to get started with ${service.title}?`}
        subtext="Share your goals and timeline — we'll respond with a clear next step and estimate path."
      />
    </>
  );
}
