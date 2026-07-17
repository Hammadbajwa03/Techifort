import {
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/lib/portfolio";
import { faqs, type FAQItem } from "@/lib/faqs";

export type ServiceCategory =
  | "Development"
  | "Marketing"
  | "Design"
  | "AI"
  | "Content";

export type ServiceFeature = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export type ServiceWhyUs = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceRecord = {
  slug: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  /** Hub card blurb */
  shortDescription: string;
  /** Hero intro paragraph */
  intro: string;
  overview: [string, string] | [string, string, string];
  icon: string;
  features: ServiceFeature[];
  /** default = Analyze→Advise→Strategy→Result; development = Discovery→Design→Development→Deployment */
  processVariant: "default" | "development";
  /** Tools/tech badges — omit or empty to skip section */
  techStack?: string[];
  techHeading?: string;
  whyUs: ServiceWhyUs[];
  /** PLACEHOLDER mapping — review against real case studies */
  relatedPortfolioCategory: PortfolioCategory;
  /** PLACEHOLDER FAQ id picks — review for accuracy */
  relatedFaqIds: string[];
  /** Visual accent in overview — orbit rings for AI/blockchain */
  accentVisual?: "orbit" | "neural" | "default";
};

export const defaultProcessSteps: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Analyze",
    description:
      "We dig into your goals, audience, and constraints to uncover the highest-impact opportunities.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Advise",
    description:
      "You get a clear recommendation — scope, stack, timeline, and trade-offs — before we build.",
    icon: "MessageSquare",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We turn insight into a phased plan with milestones, owners, and measurable outcomes.",
    icon: "Map",
  },
  {
    number: "04",
    title: "Result",
    description:
      "We ship, measure, and iterate — so the work keeps compounding after launch.",
    icon: "Trophy",
  },
];

export const developmentProcessSteps: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Workshops and research to lock requirements, success metrics, and technical constraints.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, UX flows, and prototypes that validate the product before heavy engineering.",
    icon: "PenTool",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile sprints with transparent demos, quality gates, and continuous integration.",
    icon: "Code2",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Launch, monitoring, and handover — plus a clear plan for support and iteration.",
    icon: "Rocket",
  },
];

export const servicePages: ServiceRecord[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    category: "AI",
    tagline: "Intelligent systems that automate, assist, and scale with your business.",
    shortDescription:
      "Intelligent automation, generative AI, custom ML models, and chatbots that streamline workflows and unlock smarter decisions.",
    intro:
      "From custom AI models and chatbots to process automation and computer vision — we design and ship AI that fits real workflows.",
    overview: [
      "AI only creates value when it is tied to a real workflow. Techifort builds AI solutions that help you identify high-ROI use cases, prototype quickly, and productionize models with monitoring and guardrails.",
      "Our work covers custom model development, LLM applications with LangChain and OpenAI APIs, computer vision, NLP, and ML integration into existing products — with an emphasis on data quality, evaluation, and maintainable architecture.",
      "Whether you need a focused AI module, end-to-end automation, or advisory support to choose the right approach, we deliver intelligent systems your teams can actually use and trust.",
    ],
    icon: "Bot",
    features: [
      {
        title: "Custom AI Model Development",
        description:
          "Models trained and tuned for your data, domain, and success metrics.",
        icon: "Brain",
      },
      {
        title: "AI Chatbots & Assistants",
        description:
          "Support and internal assistants grounded in your knowledge base.",
        icon: "MessageCircle",
      },
      {
        title: "Machine Learning Integration",
        description:
          "Wire predictions into products, ops tools, and decision workflows.",
        icon: "Workflow",
      },
      {
        title: "Computer Vision Solutions",
        description:
          "Image and video pipelines for detection, classification, and QC.",
        icon: "ScanEye",
      },
      {
        title: "NLP & Text Analysis",
        description:
          "Classification, summarization, and insight extraction from text.",
        icon: "TextSearch",
      },
      {
        title: "AI Consulting & Strategy",
        description:
          "Use-case prioritization, stack choices, and responsible AI guidance.",
        icon: "Compass",
      },
    ],
    processVariant: "default",
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain"],
    techHeading: "Tech Stack",
    whyUs: [
      {
        title: "Business-first AI",
        description:
          "We start from outcomes and constraints — not model novelty for its own sake.",
        icon: "Goal",
      },
      {
        title: "Production habits",
        description:
          "Evaluation, logging, and iteration loops so models stay useful over time.",
        icon: "Activity",
      },
      {
        title: "End-to-end delivery",
        description:
          "Strategy, models, UI, and infra — one partner from idea to production.",
        icon: "Boxes",
      },
      {
        title: "Full-stack around the model",
        description:
          "APIs, interfaces, and monitoring so users can actually use what we ship.",
        icon: "Workflow",
      },
    ],
    relatedPortfolioCategory: "Development",
    relatedFaqIds: ["tech-stack", "general-customize", "pricing-contracts"],
    accentVisual: "neural",
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Development",
    tagline: "Custom websites and web apps built to perform.",
    shortDescription:
      "Custom, scalable websites and web apps built with modern frameworks for performance and growth.",
    intro:
      "From marketing sites to complex web applications, we engineer experiences that load fast, convert visitors, and scale with your business.",
    overview: [
      "Techifort builds custom websites and web applications that balance brand, performance, and maintainability. Whether you need a conversion-focused marketing site, a customer portal, or a full product web app, we start from your goals — not a one-size-fits-all template.",
      "Our teams work across modern front-end frameworks and robust backends, with careful attention to accessibility, SEO foundations, security, and CMS workflows your team can actually own after launch.",
      "Engagements typically include discovery, UX/UI, engineering, integrations, QA, and ongoing support — so what we ship keeps performing as your traffic and product roadmap grow.",
    ],
    icon: "Code2",
    features: [
      {
        title: "Custom Website Design",
        description:
          "Responsive, on-brand sites engineered for speed, clarity, and conversion.",
        icon: "Layout",
      },
      {
        title: "Web Application Development",
        description:
          "Dashboards, portals, and SaaS products with solid architecture and clean UX.",
        icon: "AppWindow",
      },
      {
        title: "E-commerce Development",
        description:
          "Storefronts and checkout flows built for trust, inventory, and growth.",
        icon: "ShoppingCart",
      },
      {
        title: "CMS Development",
        description:
          "Editable content systems — WordPress or headless — tailored to your editors.",
        icon: "FilePen",
      },
      {
        title: "API Integration",
        description:
          "Reliable connections to CRMs, payments, ERPs, and third-party platforms.",
        icon: "Plug",
      },
      {
        title: "Website Maintenance & Support",
        description:
          "Updates, monitoring, security patches, and iterative improvements after go-live.",
        icon: "Wrench",
      },
    ],
    processVariant: "development",
    techStack: ["React", "Next.js", "Node.js", "PHP", "Laravel", "WordPress"],
    techHeading: "Tech Stack",
    whyUs: [
      {
        title: "Performance-first builds",
        description:
          "Core Web Vitals, caching, and lean front-ends — not just pretty mockups.",
        icon: "Zap",
      },
      {
        title: "Product-minded engineering",
        description:
          "We design for real users and measurable outcomes, not feature checklists alone.",
        icon: "Target",
      },
      {
        title: "Maintainable codebases",
        description:
          "Clear structure, docs, and handoff so your team can extend what we ship.",
        icon: "Folders",
      },
      {
        title: "End-to-end ownership",
        description:
          "Design, build, integrate, and support — one accountable partner.",
        icon: "Handshake",
      },
    ],
    relatedPortfolioCategory: "Development",
    relatedFaqIds: ["general-customize", "tech-stack", "tech-support"],
    accentVisual: "default",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Development",
    tagline: "Native and cross-platform apps that users love.",
    shortDescription:
      "Native and cross-platform mobile apps with seamless UX and robust backends.",
    intro:
      "We design and ship iOS and Android apps — native or cross-platform — with polished UX, solid backends, and a clear path to the stores.",
    overview: [
      "Mobile products succeed when they feel effortless. Techifort builds apps that combine intuitive interfaces with reliable performance, offline-aware flows where needed, and backends that keep data secure and in sync.",
      "Whether you need a consumer MVP, an internal operations app, or a full product launch, we help you choose the right stack — Flutter, React Native, or native Swift/Kotlin — based on timeline, budget, and long-term roadmap.",
      "Beyond launch, we support App Store Optimization, analytics instrumentation, and iterative releases so your app keeps improving with real user feedback.",
    ],
    icon: "Smartphone",
    features: [
      {
        title: "iOS App Development",
        description:
          "Swift-based apps tuned for Apple guidelines, performance, and polish.",
        icon: "Apple",
      },
      {
        title: "Android App Development",
        description:
          "Kotlin apps built for the Android ecosystem and device diversity.",
        icon: "Smartphone",
      },
      {
        title: "Cross-Platform (Flutter / React Native)",
        description:
          "One codebase for iOS and Android when speed-to-market matters most.",
        icon: "Layers",
      },
      {
        title: "UI/UX for Mobile",
        description:
          "Thumb-friendly flows, motion, and accessibility that feel native.",
        icon: "Palette",
      },
      {
        title: "App Store Optimization",
        description:
          "Listing strategy, creatives, and metadata that improve discoverability.",
        icon: "Store",
      },
      {
        title: "Post-Launch Support",
        description:
          "Crash monitoring, updates, feature iterations, and release management.",
        icon: "LifeBuoy",
      },
    ],
    processVariant: "development",
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    techHeading: "Tech Stack",
    whyUs: [
      {
        title: "Platform-aware craft",
        description:
          "We respect iOS and Android conventions so apps feel at home on each device.",
        icon: "Sparkles",
      },
      {
        title: "Backend included",
        description:
          "Auth, APIs, push, and analytics wired correctly from day one.",
        icon: "Server",
      },
      {
        title: "Store-ready delivery",
        description:
          "We plan for review guidelines, builds, and release cadence — not just demos.",
        icon: "BadgeCheck",
      },
      {
        title: "Scalable architecture",
        description:
          "Clean modules and APIs that grow with new features and markets.",
        icon: "Expand",
      },
    ],
    relatedPortfolioCategory: "Development",
    relatedFaqIds: ["general-customize", "tech-stack", "support-start"],
    accentVisual: "default",
  },
  {
    slug: "blockchain-development",
    title: "Blockchain Development",
    category: "Development",
    tagline:
      "Secure, scalable blockchain solutions for the next generation of digital assets.",
    shortDescription:
      "Smart contracts, dApps, and blockchain integrations built for security and scale.",
    intro:
      "From smart contracts to full dApps and exchanges, we help you ship blockchain products with security, clarity, and production-grade engineering.",
    overview: [
      "Blockchain projects fail when hype outruns rigor. Techifort focuses on secure smart contracts, clear product UX, and infrastructure that can survive real users — not just testnets.",
      "We work across Ethereum, Polygon, Solana, and BNB Chain ecosystems, covering wallets, NFT marketplaces, DeFi modules, and consulting to choose the right chain and architecture for your use case.",
      "Security reviews, testing with Hardhat/Truffle-style workflows, and careful key/wallet integration are part of how we ship — because trust is the product.",
    ],
    icon: "Link2",
    features: [
      {
        title: "Smart Contract Development",
        description:
          "Auditable Solidity (and related) contracts with thorough test coverage.",
        icon: "FileCode",
      },
      {
        title: "Crypto Exchange Platforms",
        description:
          "Trading interfaces and flows built around security and usability.",
        icon: "CandlestickChart",
      },
      {
        title: "NFT Marketplace Development",
        description:
          "Minting, listing, royalties, and marketplace experiences end to end.",
        icon: "Image",
      },
      {
        title: "DeFi Applications",
        description:
          "Staking, lending, and protocol UIs wired to on-chain logic carefully.",
        icon: "Coins",
      },
      {
        title: "Blockchain Consulting",
        description:
          "Chain selection, tokenomics review, and architecture advisory.",
        icon: "Lightbulb",
      },
      {
        title: "Wallet Integration",
        description:
          "MetaMask, WalletConnect, and mobile wallet flows that just work.",
        icon: "Wallet",
      },
    ],
    processVariant: "development",
    techStack: [
      "Solidity",
      "Ethereum",
      "Solana",
      "Binance Smart Chain",
      "Polygon",
      "Hardhat",
      "Truffle",
    ],
    techHeading: "Tech Stack",
    whyUs: [
      {
        title: "Security mindset",
        description:
          "Threat modeling and testing habits baked into delivery — not bolted on late.",
        icon: "ShieldCheck",
      },
      {
        title: "Product + protocol",
        description:
          "We bridge on-chain logic with UX that non-crypto users can understand.",
        icon: "Blocks",
      },
      {
        title: "Multi-chain fluency",
        description:
          "Practical experience across major EVM chains and Solana where it fits.",
        icon: "Network",
      },
      {
        title: "Clear communication",
        description:
          "Plain-language updates on risks, fees, and trade-offs for stakeholders.",
        icon: "MessagesSquare",
      },
    ],
    relatedPortfolioCategory: "Development",
    relatedFaqIds: ["tech-stack", "pricing-cost", "support-nda"],
    accentVisual: "orbit",
  },
  {
    slug: "game-development",
    title: "Game Development",
    category: "Development",
    tagline: "Immersive 2D/3D games across every platform.",
    shortDescription:
      "Engaging 2D/3D game experiences across platforms with polished gameplay and graphics.",
    intro:
      "We craft playable experiences — from polished 2D titles to immersive 3D and multiplayer systems — with the engineering depth games demand.",
    overview: [
      "Great games need more than visuals: tight controls, stable networking, and a pipeline that can iterate on feel. Techifort partners with studios and brands to design, build, and ship games across desktop, mobile, and emerging platforms.",
      "Our process covers game design collaboration, Unity/Unreal engineering, UI/UX for players, multiplayer backends, and QA that catches edge cases before players do.",
      "Whether you are prototyping a concept or shipping a commercial title, we help you scope wisely and deliver a build you can market with confidence.",
    ],
    icon: "Gamepad2",
    features: [
      {
        title: "2D / 3D Game Design",
        description:
          "Mechanics, levels, and art direction that support fun and retention.",
        icon: "Joystick",
      },
      {
        title: "Cross-Platform Game Development",
        description:
          "Unity and Unreal builds targeting the platforms your audience uses.",
        icon: "MonitorSmartphone",
      },
      {
        title: "Multiplayer Backend Systems",
        description:
          "Matchmaking, sessions, and sync designed for stability under load.",
        icon: "Users",
      },
      {
        title: "Game UI/UX",
        description:
          "Menus, HUDs, and onboarding that keep players in the flow.",
        icon: "PanelTop",
      },
      {
        title: "AR / VR Game Experiences",
        description:
          "Immersive prototypes and experiences for spatial platforms.",
        icon: "Glasses",
      },
      {
        title: "Game Testing & QA",
        description:
          "Playtesting, regression suites, and performance profiling before launch.",
        icon: "Bug",
      },
    ],
    processVariant: "development",
    techStack: ["Unity", "Unreal Engine", "C#", "C++"],
    techHeading: "Tech Stack",
    whyUs: [
      {
        title: "Feel-first iteration",
        description:
          "We prioritize playable builds early so gameplay decisions stay grounded.",
        icon: "MousePointerClick",
      },
      {
        title: "Engine expertise",
        description:
          "Unity and Unreal workflows matched to your team’s skills and goals.",
        icon: "Cpu",
      },
      {
        title: "Backend for live ops",
        description:
          "Services designed for sessions, progression, and future live content.",
        icon: "Cloud",
      },
      {
        title: "QA discipline",
        description:
          "Structured testing so launch builds are stable, not just demos.",
        icon: "ClipboardCheck",
      },
    ],
    relatedPortfolioCategory: "Development",
    relatedFaqIds: ["general-services", "pricing-cost", "support-start"],
    accentVisual: "default",
  },
  {
    slug: "seo",
    title: "SEO",
    category: "Marketing",
    tagline: "Rank higher, get found, grow organically.",
    shortDescription:
      "Data-driven SEO strategies that improve rankings, traffic, and conversions for your brand.",
    intro:
      "Technical foundations, content strategy, and authoritative growth — SEO built to drive qualified organic demand.",
    overview: [
      "SEO is a compounding channel when technical health, content relevance, and authority work together. Techifort audits your site, prioritizes high-impact fixes, and builds a keyword and content plan aligned to revenue — not vanity rankings.",
      "We cover technical SEO, on-page optimization, local SEO where relevant, and reporting that connects search visibility to leads and conversions.",
      "Expect clear roadmaps, measurable milestones, and collaboration with your content and development teams so recommendations actually ship.",
    ],
    icon: "Search",
    features: [
      {
        title: "Technical SEO Audits",
        description:
          "Crawl health, indexation, Core Web Vitals, and structural fixes.",
        icon: "Radar",
      },
      {
        title: "On-Page & Off-Page SEO",
        description:
          "Content structure, internal links, and authority-building outreach.",
        icon: "Link",
      },
      {
        title: "Keyword Research & Strategy",
        description:
          "Intent-mapped keywords prioritized by opportunity and business value.",
        icon: "KeyRound",
      },
      {
        title: "Local SEO",
        description:
          "Maps, citations, and local landing pages that win nearby demand.",
        icon: "MapPin",
      },
      {
        title: "Content Optimization",
        description:
          "Briefs and rewrites that improve relevance without sacrificing brand voice.",
        icon: "FileText",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Dashboards tying rankings and traffic to pipeline outcomes.",
        icon: "LineChart",
      },
    ],
    processVariant: "default",
    techStack: [
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Google Analytics",
    ],
    techHeading: "Tools & Platforms",
    whyUs: [
      {
        title: "Technical + content",
        description:
          "We fix what crawlers need and what humans want to read — together.",
        icon: "Layers2",
      },
      {
        title: "Revenue-aligned KPIs",
        description:
          "Reporting focuses on qualified traffic and conversions, not only positions.",
        icon: "TrendingUp",
      },
      {
        title: "Dev-friendly recommendations",
        description:
          "Prioritized tickets your engineering team can implement cleanly.",
        icon: "ListChecks",
      },
      {
        title: "Transparent cadence",
        description:
          "Regular updates on progress, risks, and next experiments.",
        icon: "CalendarCheck",
      },
    ],
    relatedPortfolioCategory: "Consulting",
    relatedFaqIds: ["general-services", "pricing-cost", "support-timezone"],
    accentVisual: "default",
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    category: "Design",
    tagline: "Visual identity that makes your brand unforgettable.",
    shortDescription:
      "Brand identities, UI kits, and marketing creatives that look sharp and convert.",
    intro:
      "Logo systems, marketing creatives, and UI/UX design that make your brand look intentional — and convert with confidence.",
    overview: [
      "Strong design is a growth asset. Techifort creates visual systems — from logos and brand kits to campaign creatives and product UI — that stay consistent across every touchpoint.",
      "We collaborate closely with stakeholders to understand positioning, audience, and usage contexts, then deliver files and guidelines your team can use day to day.",
      "Whether you need a full rebrand or ongoing creative production, we keep aesthetics aligned with clarity and conversion.",
    ],
    icon: "Palette",
    features: [
      {
        title: "Logo & Brand Identity Design",
        description:
          "Marks, palettes, type, and guidelines that scale with your brand.",
        icon: "Stamp",
      },
      {
        title: "Marketing Collateral Design",
        description:
          "Decks, one-pagers, ads, and campaign assets that stay on-brand.",
        icon: "Presentation",
      },
      {
        title: "UI/UX Design",
        description:
          "Product interfaces and flows that feel clear, modern, and usable.",
        icon: "PanelLeft",
      },
      {
        title: "Social Media Graphics",
        description:
          "Templates and posts sized for the platforms you actually publish on.",
        icon: "Share2",
      },
      {
        title: "Packaging Design",
        description:
          "Shelf-ready packaging concepts that communicate quality instantly.",
        icon: "Package",
      },
      {
        title: "Print Design",
        description:
          "Print-ready layouts for events, collateral, and offline campaigns.",
        icon: "Printer",
      },
    ],
    processVariant: "default",
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    techHeading: "Tools & Platforms",
    whyUs: [
      {
        title: "Systems, not one-offs",
        description:
          "We design reusable kits so your brand stays consistent at scale.",
        icon: "Grid3x3",
      },
      {
        title: "Conversion awareness",
        description:
          "Pretty is table stakes — we design for hierarchy and action.",
        icon: "MousePointer2",
      },
      {
        title: "Collaborative process",
        description:
          "Structured feedback loops that keep projects moving without chaos.",
        icon: "MessagesSquare",
      },
      {
        title: "Handoff-ready files",
        description:
          "Organized exports and specs your marketers and developers can use.",
        icon: "FolderDown",
      },
    ],
    relatedPortfolioCategory: "Branding",
    relatedFaqIds: ["general-services", "pricing-minimum", "support-start"],
    accentVisual: "default",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    tagline: "Data-driven campaigns that convert.",
    shortDescription:
      "Full-funnel campaigns across social, content, and paid channels to grow your reach.",
    intro:
      "Paid, social, email, and CRO — campaigns managed with clear metrics and continuous optimization.",
    overview: [
      "Digital marketing works when creative, targeting, and measurement stay aligned. Techifort plans and runs full-funnel campaigns across paid ads, social, email, and content — with reporting that shows what is actually driving pipeline.",
      "We start with audience and offer clarity, then test creatives and channels systematically. Conversion Rate Optimization closes the loop so traffic turns into customers.",
      "Whether you need always-on paid management or a launch campaign, you’ll get a transparent plan, weekly insights, and recommendations tied to ROI.",
    ],
    icon: "Megaphone",
    features: [
      {
        title: "Social Media Marketing",
        description:
          "Content calendars, community, and paid social that build demand.",
        icon: "HeartHandshake",
      },
      {
        title: "PPC & Paid Ads Management",
        description:
          "Google and Meta campaigns structured for learning and efficient spend.",
        icon: "BadgeDollarSign",
      },
      {
        title: "Email Marketing",
        description:
          "Lifecycle flows and campaigns that nurture leads into customers.",
        icon: "Mail",
      },
      {
        title: "Content Marketing Strategy",
        description:
          "Topic maps and distribution plans that support SEO and sales.",
        icon: "Newspaper",
      },
      {
        title: "Marketing Analytics & Reporting",
        description:
          "Attribution-aware dashboards stakeholders can trust.",
        icon: "BarChart3",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Landing page tests and funnel fixes that improve conversion rate.",
        icon: "FlaskConical",
      },
    ],
    processVariant: "default",
    techStack: ["Google Ads", "Meta Ads Manager", "Mailchimp", "HubSpot"],
    techHeading: "Tools & Platforms",
    whyUs: [
      {
        title: "Full-funnel thinking",
        description:
          "Awareness to conversion — we optimize the path, not isolated ads.",
        icon: "GitBranch",
      },
      {
        title: "Test-and-learn culture",
        description:
          "Structured experiments beat gut feel when budgets are on the line.",
        icon: "Beaker",
      },
      {
        title: "Creative + data",
        description:
          "Messaging that resonates, measured against outcomes that matter.",
        icon: "Sparkle",
      },
      {
        title: "Clear reporting",
        description:
          "No vanity charts — spend, CPL/CAC signals, and next actions.",
        icon: "PieChart",
      },
    ],
    relatedPortfolioCategory: "Consulting",
    relatedFaqIds: ["general-services", "pricing-contracts", "support-timezone"],
    accentVisual: "default",
  },
  {
    slug: "content-writing",
    title: "Content Writer",
    category: "Content",
    tagline: "Words that inform, engage, and convert.",
    shortDescription:
      "Website copy, blogs, SEO content, and documentation that sound like your brand — and drive action.",
    intro:
      "From website copy to SEO articles and technical docs — clear writing that supports discovery, trust, and conversion.",
    overview: [
      "Content is how customers understand you before they ever talk to sales. Techifort writers craft website copy, blog posts, SEO content, and documentation that stay on-brand while serving search intent and business goals.",
      "We work from briefs, interviews, and your existing materials to produce drafts that are accurate, scannable, and ready for design or CMS publishing.",
      "Need ongoing content ops? We can plug into your calendar with SEO-aware topics, editorial QA, and formats for social and email.",
    ],
    icon: "PenLine",
    features: [
      {
        title: "Website Copywriting",
        description:
          "Homepage, service, and landing page copy built for clarity and CTA.",
        icon: "Type",
      },
      {
        title: "Blog & Article Writing",
        description:
          "Thought leadership and educational posts that build authority.",
        icon: "BookOpen",
      },
      {
        title: "SEO Content Writing",
        description:
          "Keyword-informed drafts that read naturally and rank intentionally.",
        icon: "SearchCheck",
      },
      {
        title: "Technical Documentation",
        description:
          "Guides and docs that help users and developers succeed faster.",
        icon: "BookMarked",
      },
      {
        title: "Social Media Copy",
        description:
          "Captions and hooks sized for engagement without sounding spammy.",
        icon: "MessageSquareMore",
      },
      {
        title: "Email & Newsletter Copy",
        description:
          "Sequences and newsletters that nurture relationships over time.",
        icon: "Mails",
      },
    ],
    processVariant: "default",
    techStack: ["Grammarly", "SurferSEO", "Notion"],
    techHeading: "Tools & Platforms",
    whyUs: [
      {
        title: "Brand voice match",
        description:
          "We learn how you speak — then write like an extension of your team.",
        icon: "AudioLines",
      },
      {
        title: "SEO without fluff",
        description:
          "Search intent respected without stuffing or hollow filler.",
        icon: "CheckCheck",
      },
      {
        title: "Subject-matter rigor",
        description:
          "Research and review loops for technical and industry topics.",
        icon: "GraduationCap",
      },
      {
        title: "Publish-ready delivery",
        description:
          "Formatted for CMS, with meta suggestions when you need them.",
        icon: "Upload",
      },
    ],
    relatedPortfolioCategory: "Branding",
    relatedFaqIds: ["general-services", "support-start", "pricing-minimum"],
    accentVisual: "default",
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

export function getServiceProcessSteps(service: ServiceRecord): ServiceProcessStep[] {
  return service.processVariant === "development"
    ? developmentProcessSteps
    : defaultProcessSteps;
}

export function getRelatedPortfolio(
  service: ServiceRecord,
  limit = 3
): PortfolioProject[] {
  const matched = portfolioProjects.filter((p) =>
    p.categories.includes(service.relatedPortfolioCategory)
  );
  if (matched.length >= limit) return matched.slice(0, limit);
  // Fallback fill — PLACEHOLDER until more tagged case studies exist
  const extras = portfolioProjects.filter(
    (p) => !matched.some((m) => m.slug === p.slug)
  );
  return [...matched, ...extras].slice(0, limit);
}

export function getRelatedFaqs(service: ServiceRecord): FAQItem[] {
  return service.relatedFaqIds
    .map((id) => faqs.find((f) => f.id === id))
    .filter((f): f is FAQItem => Boolean(f));
}

/** Slim list for homepage / footer cards */
export const services = servicePages.map((s) => ({
  title: s.title,
  description: s.shortDescription,
  icon: s.icon,
  slug: s.slug,
}));
