export const portfolioFilters = [
  "All",
  "Development",
  "Consulting",
  "Finance",
  "Branding",
] as const;

export type PortfolioFilter = (typeof portfolioFilters)[number];
export type PortfolioCategory = Exclude<PortfolioFilter, "All">;

export type PortfolioProject = {
  title: string;
  slug: string;
  categories: PortfolioCategory[];
  /** Primary category used on homepage preview cards */
  category: PortfolioCategory;
  thumbnail: string;
  cover: string;
  /** PLACEHOLDER: short summary — replace with real case-study copy */
  summary: string;
  /** PLACEHOLDER overview fields — replace with real client details */
  overview: {
    client: string;
    industry: string;
    services: string;
    timeline: string;
  };
  /** PLACEHOLDER narrative — replace with real challenge/solution/result */
  challenge: string;
  solution: string;
  result: string;
  /** PLACEHOLDER gallery — swap for real project screenshots later */
  gallery: string[];
  techStack: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Tessellation Walls",
    slug: "tessellation-walls",
    categories: ["Consulting", "Finance"],
    category: "Consulting",
    thumbnail:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=80",
    summary:
      "A branded digital experience connecting advisory storytelling with clean, conversion-focused layouts.",
    overview: {
      client: "Tessellation Group (placeholder)",
      industry: "Finance & Branding",
      services: "Strategy, UI/UX, Front-end Development",
      timeline: "12 weeks (placeholder)",
    },
    challenge:
      "PLACEHOLDER: The client needed a sharper digital presence that communicated complex advisory services without overwhelming first-time visitors.",
    solution:
      "PLACEHOLDER: We designed a modular content system, refined the visual language, and built a responsive site focused on clarity and lead capture.",
    result:
      "PLACEHOLDER: Improved engagement on key service pages and a clearer path from discovery to consultation requests.",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Business Matching",
    slug: "business-matching",
    categories: ["Consulting", "Branding"],
    category: "Consulting",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    cover:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80",
    summary:
      "A matching platform that helps businesses discover partners with the right fit, faster.",
    overview: {
      client: "MatchForge Partners (placeholder)",
      industry: "B2B Consulting",
      services: "Product Design, Branding, Full-stack Development",
      timeline: "16 weeks (placeholder)",
    },
    challenge:
      "PLACEHOLDER: Manual partner discovery was slow and inconsistent, making it hard to surface high-quality matches at scale.",
    solution:
      "PLACEHOLDER: We built a profile-driven matching flow with branded UX, smart filters, and a clean admin workflow for curation.",
    result:
      "PLACEHOLDER: Faster introductions between qualified partners and a more professional brand experience across the funnel.",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Assets For Technology",
    slug: "assets-for-technology",
    categories: ["Development", "Consulting"],
    category: "Development",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80",
    summary:
      "A technology asset platform designed for clarity, speed, and scalable product growth.",
    overview: {
      client: "AssetLab Tech (placeholder)",
      industry: "Technology",
      services: "Product Consulting, Web App Development",
      timeline: "14 weeks (placeholder)",
    },
    challenge:
      "PLACEHOLDER: Fragmented tooling made it difficult for teams to organize, share, and act on technical assets.",
    solution:
      "PLACEHOLDER: We delivered a unified web platform with structured asset workflows, role-based access, and a responsive dashboard UI.",
    result:
      "PLACEHOLDER: Reduced operational friction and gave stakeholders a single source of truth for technology assets.",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=80",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Merger & Acquisition",
    slug: "merger-acquisition",
    categories: ["Development", "Consulting"],
    category: "Development",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    cover:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80",
    summary:
      "A deal-room style experience supporting diligence workflows and stakeholder collaboration.",
    overview: {
      client: "Northbridge Advisory (placeholder)",
      industry: "Corporate Finance",
      services: "Consulting, Secure Web Platform Development",
      timeline: "18 weeks (placeholder)",
    },
    challenge:
      "PLACEHOLDER: Sensitive deal documents and stakeholder updates were scattered across email threads and static files.",
    solution:
      "PLACEHOLDER: We created a secure collaboration workspace with structured deal stages, document access controls, and progress visibility.",
    result:
      "PLACEHOLDER: Cleaner diligence coordination and faster alignment between advisors and decision-makers.",
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&q=80",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&q=80",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Accounting Advisory",
    slug: "accounting-advisory",
    categories: ["Finance", "Branding"],
    category: "Finance",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80",
    summary:
      "A polished advisory brand and digital presence for modern accounting services.",
    overview: {
      client: "Ledger & Co. Advisory (placeholder)",
      industry: "Accounting & Finance",
      services: "Branding, Website Design & Development",
      timeline: "10 weeks (placeholder)",
    },
    challenge:
      "PLACEHOLDER: The firm’s previous brand felt dated and didn’t reflect the sophistication of their advisory offering.",
    solution:
      "PLACEHOLDER: We refreshed the visual identity and launched a conversion-oriented site with clear service pathways.",
    result:
      "PLACEHOLDER: Stronger brand perception and improved inquiry quality from target clients.",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80",
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=80",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Startup Funding",
    slug: "startup-funding",
    categories: ["Development", "Finance"],
    category: "Development",
    thumbnail:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    cover:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80",
    summary:
      "A funding-readiness platform helping startups present traction and raise with confidence.",
    overview: {
      client: "RaiseReady Ventures (placeholder)",
      industry: "Startup Finance",
      services: "Product Development, Fintech UX",
      timeline: "15 weeks (placeholder)",
    },
    challenge:
      "PLACEHOLDER: Founders struggled to package metrics, narratives, and investor materials into one coherent experience.",
    solution:
      "PLACEHOLDER: We built a guided funding workspace with dashboards, document structuring, and investor-facing presentation views.",
    result:
      "PLACEHOLDER: Clearer fundraising narratives and a more professional process for founder–investor conversations.",
    gallery: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1000&q=80",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1000&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1000&q=80",
    ],
    techStack: ["Next.js", "Python", "PostgreSQL", "AWS"],
  },
];

export const portfolioStats = [
  { label: "Projects Delivered", value: 1200, suffix: "+" },
  { label: "Industries Served", value: 16, suffix: "+" },
  { label: "Client Retention Rate", value: 94, suffix: "%" },
  { label: "Years of Experience", value: 8, suffix: "+" },
] as const;

/** Homepage-compatible shape */
export const portfolioItems = portfolioProjects.map((p) => ({
  title: p.title,
  category: p.category,
  image: p.thumbnail,
  slug: p.slug,
  categories: p.categories,
}));

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = portfolioProjects.findIndex((p) => p.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: portfolioProjects[(index - 1 + portfolioProjects.length) % portfolioProjects.length],
    next: portfolioProjects[(index + 1) % portfolioProjects.length],
  };
}
