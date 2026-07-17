export const blogFilters = [
  "All",
  "Development",
  "Consulting",
  "Finance",
  "Branding",
] as const;

export type BlogFilter = (typeof blogFilters)[number];
export type BlogCategory = Exclude<BlogFilter, "All">;

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export type BlogBodyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  /** ISO-ish for sorting */
  dateSort: string;
  readTime: string;
  image: string;
  featured?: boolean;
  author: BlogAuthor;
  /** PLACEHOLDER body — replace with real article copy later */
  body: BlogBodyBlock[];
};

const authorTeam: BlogAuthor = {
  name: "Techifort Team",
  role: "Engineering & Strategy",
  bio: "Writers and builders from Techifort sharing practical insights on software, AI, and digital growth.",
  avatar:
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&q=80",
};

const authorWaqas: BlogAuthor = {
  name: "Waqas",
  role: "CEO",
  bio: "Leading Techifort's vision for reliable, forward-thinking software that helps businesses scale with confidence.",
  avatar:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
};

function placeholderBody(topic: string): BlogBodyBlock[] {
  return [
    {
      type: "p",
      text: `PLACEHOLDER: This article explores ${topic}. In the sections below we outline practical considerations, common pitfalls, and how Techifort approaches delivery for clients who need clarity and measurable outcomes.`,
    },
    {
      type: "h2",
      id: "why-it-matters",
      text: "Why it matters",
    },
    {
      type: "p",
      text: "PLACEHOLDER: Teams often underestimate how tightly product decisions, architecture, and go-to-market timing are connected. Getting the fundamentals right early reduces rework, protects budgets, and keeps stakeholders aligned as scope evolves.",
    },
    {
      type: "quote",
      text: "PLACEHOLDER: Clarity beats complexity — ship the smallest thing that proves value, then iterate with confidence.",
    },
    {
      type: "h2",
      id: "how-we-approach-it",
      text: "How we approach it",
    },
    {
      type: "p",
      text: "PLACEHOLDER: At Techifort we start with discovery, map constraints, and recommend a stack and delivery model that fits the problem — not the other way around. Whether you need an MVP, a platform rebuild, or an AI-assisted workflow, the goal is the same: dependable software that compounds over time.",
    },
    {
      type: "h2",
      id: "next-steps",
      text: "Next steps",
    },
    {
      type: "p",
      text: "PLACEHOLDER: If this topic is relevant to a project you're planning, reach out through our contact page. We are happy to review your goals, share a realistic timeline, and outline what a strong first phase should include.",
    },
  ];
}

/** Easy to edit — add/update posts here */
export const blogPostsData: BlogPost[] = [
  {
    title: "Techifort's Role in Bringing AI & Automation to Web Development",
    slug: "ai-automation-web-development",
    excerpt:
      "How we weave AI tooling and automation into modern web stacks to ship faster without sacrificing quality.",
    category: "Development",
    date: "Mar 12, 2026",
    dateSort: "2026-03-12",
    readTime: "6 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    author: authorWaqas,
    body: placeholderBody("AI and automation in modern web development"),
  },
  {
    title: "How Techifort's Web Development Services Boost Startups",
    slug: "web-development-services-boost-startups",
    excerpt:
      "A practical look at MVP builds, iteration loops, and growth-ready architecture for early-stage teams.",
    category: "Development",
    date: "Feb 28, 2026",
    dateSort: "2026-02-28",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
    author: authorTeam,
    body: placeholderBody("startup-focused web development services"),
  },
  {
    title: "What Are the Quickest Backend Frameworks to Learn?",
    slug: "quickest-backend-frameworks-to-learn",
    excerpt:
      "Comparing popular backend frameworks by learning curve, ecosystem, and production readiness.",
    category: "Development",
    date: "Jan 18, 2026",
    dateSort: "2026-01-18",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=80",
    author: authorTeam,
    body: placeholderBody("choosing beginner-friendly backend frameworks"),
  },
  {
    title: "Next.js vs Traditional React: Which Should You Choose in 2026?",
    slug: "nextjs-vs-traditional-react-2026",
    excerpt:
      "A clear comparison of routing, rendering, DX, and when a full framework is worth the trade-offs.",
    category: "Development",
    date: "Apr 2, 2026",
    dateSort: "2026-04-02",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1000&q=80",
    author: authorTeam,
    body: placeholderBody("Next.js versus traditional React in 2026"),
  },
  {
    title: "How to Choose the Right Tech Partner for Your Next Project",
    slug: "choose-right-tech-partner",
    excerpt:
      "What to evaluate beyond price — communication, delivery process, stack fit, and long-term ownership.",
    category: "Consulting",
    date: "Mar 4, 2026",
    dateSort: "2026-03-04",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80",
    author: authorWaqas,
    body: placeholderBody("selecting a technology partner"),
  },
  {
    title: "ERP Implementation: A Practical Guide for Growing Businesses",
    slug: "erp-implementation-practical-guide",
    excerpt:
      "A realistic roadmap for ERP adoption — from process mapping to training and post-go-live support.",
    category: "Consulting",
    date: "Feb 10, 2026",
    dateSort: "2026-02-10",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80",
    author: authorTeam,
    body: placeholderBody("practical ERP implementation for growing businesses"),
  },
  {
    title: "Building Secure Fintech Apps: What Businesses Need to Know",
    slug: "building-secure-fintech-apps",
    excerpt:
      "Security, compliance, and architecture essentials for teams building trustworthy financial products.",
    category: "Finance",
    date: "Mar 22, 2026",
    dateSort: "2026-03-22",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=80",
    author: authorTeam,
    body: placeholderBody("building secure fintech applications"),
  },
  {
    title: "How Automated Analytics Are Changing Financial Decision-Making",
    slug: "automated-analytics-financial-decision-making",
    excerpt:
      "From dashboards to predictive insights — how automation helps finance teams move faster with better data.",
    category: "Finance",
    date: "Jan 30, 2026",
    dateSort: "2026-01-30",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    author: authorTeam,
    body: placeholderBody("automated analytics in financial decision-making"),
  },
  {
    title: "Why Custom UI/UX Design Is a Growth Investment, Not a Cost",
    slug: "custom-uiux-growth-investment",
    excerpt:
      "How thoughtful product design improves conversion, retention, and brand trust across digital channels.",
    category: "Branding",
    date: "Feb 20, 2026",
    dateSort: "2026-02-20",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&q=80",
    author: authorTeam,
    body: placeholderBody("custom UI/UX as a growth investment"),
  },
  {
    title: "Building a Digital Brand That Scales With Your Business",
    slug: "digital-brand-that-scales",
    excerpt:
      "Systems, visuals, and messaging foundations that stay coherent as you expand products and markets.",
    category: "Branding",
    date: "Jan 8, 2026",
    dateSort: "2026-01-08",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&q=80",
    author: authorWaqas,
    body: placeholderBody("building a scalable digital brand"),
  },
];

export const blogCategoryStyles: Record<
  BlogCategory,
  { badge: string; soft: string }
> = {
  Development: {
    badge: "bg-brand-600 text-white",
    soft: "bg-brand-600/10 text-brand-700 dark:text-brand-300",
  },
  Consulting: {
    badge: "bg-brand-800 text-white",
    soft: "bg-brand-800/10 text-brand-800 dark:text-brand-200",
  },
  Finance: {
    badge: "bg-sky-600 text-white",
    soft: "bg-sky-600/10 text-sky-800 dark:text-sky-300",
  },
  Branding: {
    badge: "bg-indigo-600 text-white",
    soft: "bg-indigo-600/10 text-indigo-800 dark:text-indigo-300",
  },
};

export function getPostBySlug(slug: string) {
  return blogPostsData.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return blogPostsData
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, limit);
}

export function getFeaturedPost() {
  return (
    blogPostsData.find((p) => p.featured) ??
    [...blogPostsData].sort((a, b) => b.dateSort.localeCompare(a.dateSort))[0]
  );
}

/** Homepage preview — first 3 posts */
export const blogPosts = blogPostsData.slice(0, 3).map((p) => ({
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  date: p.date,
  image: p.image,
  slug: p.slug,
}));
