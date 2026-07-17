export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Solutions", href: "/service/ai-solutions" },
      { label: "Web Development", href: "/service/web-development" },
      { label: "Mobile App Development", href: "/service/mobile-app-development" },
      { label: "Blockchain Development", href: "/service/blockchain-development" },
      { label: "Game Development", href: "/service/game-development" },
      { label: "SEO", href: "/service/seo" },
      { label: "Graphic Designing", href: "/service/graphic-designing" },
      { label: "Digital Marketing", href: "/service/digital-marketing" },
      { label: "Content Writer", href: "/service/content-writing" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Development", href: "/blog?category=Development" },
      { label: "Consulting", href: "/blog?category=Consulting" },
      { label: "Finance", href: "/blog?category=Finance" },
      { label: "Branding", href: "/blog?category=Branding" },
    ],
  },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const heroTaglines = [
  "Multipurpose Business Solution",
  "Include More Sales",
  "More Convenient Than Others",
] as const;

export const stats = [
  { label: "Satisfied Customers", value: 850, suffix: "+" },
  { label: "Professional Agents", value: 45, suffix: "+" },
  { label: "Hours Support", value: 24, suffix: "/7" },
  { label: "Projects Finished", value: 1200, suffix: "+" },
] as const;

// Prefer `@/lib/services` for full service page data.
export { services } from "@/lib/services";

export const portfolioFilters = [
  "All",
  "Development",
  "Consulting",
  "Finance",
  "Branding",
] as const;

// Prefer importing from `@/lib/portfolio` for full project data.
// Kept for backward compatibility with older imports.
export { portfolioItems } from "@/lib/portfolio";

export const processSteps = [
  {
    number: "01",
    title: "Analyze",
    description:
      "We dig into your goals, audience, and tech landscape to uncover opportunities.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Advise",
    description:
      "Clear recommendations and a roadmap tailored to your budget and timeline.",
    icon: "MessageSquare",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "Architecture, design systems, and delivery plans built for measurable impact.",
    icon: "Map",
  },
  {
    number: "04",
    title: "Result",
    description:
      "Ship polished products, iterate with data, and keep your growth compounding.",
    icon: "Trophy",
  },
] as const;

export const techCategories = {
  Backend: [
    "Node.js",
    "Python",
    "Laravel",
    "Django",
    ".NET",
    "Golang",
    "PHP",
    "Rails",
    "Rust",
  ],
  Frontend: [
    "React",
    "Vue",
    "Angular",
    "HTML5",
    "CSS",
    "Bootstrap",
    "jQuery",
  ],
  Mobile: [
    "Android",
    "iOS",
    "Flutter",
    "React Native",
    "Kotlin",
    "Swift",
    "Ionic",
  ],
  Database: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Oracle",
    "MS SQL",
  ],
  CMS: ["WordPress", "Drupal", "Shopify", "Strapi", "Contentful"],
  Cloud: ["AWS", "Azure", "GCP", "DigitalOcean", "Vercel", "Netlify"],
  "Testing Tools": ["Jest", "Cypress", "Selenium", "Playwright", "Mocha"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
  "Full Stack": ["MERN", "MEAN", "Next.js", "Nuxt", "Laravel + Vue"],
  Blockchain: [
    "Solidity",
    "Ethereum",
    "Solana",
    "Hardhat",
    "Truffle",
    "Binance",
    "Matic",
  ],
} as const;

export type TechCategory = keyof typeof techCategories;

export const teamMembers = [
  {
    name: "Waqas",
    role: "CEO",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "M. Awais Khan",
    role: "Backend Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Fayyaz Ali",
    role: "Backend Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Danish Shakeel",
    role: "Web Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Hammad Bajwa",
    role: "Web Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Ali Hassan",
    role: "Web Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Faiqa Ishtiaq",
    role: "App Developer",
    gender: "female",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Khuzaima Shakeel",
    role: "Application Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&q=80",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Techifort delivered a polished product on time. Their communication and technical depth made the whole engagement smooth.",
    name: "Ashfaq Munir",
    country: "UK",
  },
  {
    quote:
      "Outstanding engineering culture. They turned complex requirements into a clean, scalable platform for our users.",
    name: "Xapier",
    country: "USA",
  },
  {
    quote:
      "From discovery to launch, the team was proactive, creative, and relentlessly focused on quality.",
    name: "Rabeeh Ameen",
    country: "UK",
  },
  {
    quote:
      "Reliable partners for digital growth. SEO and development worked hand-in-hand with measurable results.",
    name: "James Brown",
    country: "UK",
  },
  {
    quote:
      "Professional, responsive, and highly skilled. Our mobile app launch exceeded expectations.",
    name: "Vipin Singh",
    country: "Dubai",
  },
  {
    quote:
      "A true digital partner — strategy, design, and engineering in one place. We saw results within the first quarter.",
    name: "Sara Collins",
    country: "USA",
  },
] as const;

// Prefer `@/lib/blog` for full post data.
export { blogPosts } from "@/lib/blog";

export const contactInfo = {
  phones: ["+92 300 6047949"],
  email: "info@techifort.com",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM (PKT)",
  addresses: [
    {
      city: "Lahore, Pakistan",
      label: "Lahore Office",
      detail:
        "2nd floor, office #202A, Siddiq Trade Center, Gulberg 2, Lahore, Pakistan",
      mapQuery: "Siddiq Trade Center Gulberg 2 Lahore Pakistan",
    },
    {
      city: "Cork, Ireland",
      label: "Ireland Office",
      detail:
        "Unit 3D, North Point House, North Point Business Park, New Mallow Road, Cork, T23 AT2P, Ireland",
      mapQuery: "North Point Business Park New Mallow Road Cork Ireland",
    },
  ],
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
} as const;
