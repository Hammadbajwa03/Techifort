export type IndustryRecord = {
  id: string;
  slug: string;
  title: string;
  description: string;
  whatWeBuild: string[];
  icon: string;
};

/** Easy to edit — add/extend industries here */
export const industriesPageData: IndustryRecord[] = [
  {
    id: "01",
    slug: "technology",
    title: "Technology",
    description:
      "Smart digital platforms and AI-powered tools for innovative tech solutions. We help technology companies ship faster with scalable architecture, intelligent automation, and product experiences that stay ahead of the market.",
    whatWeBuild: [
      "SaaS platforms",
      "Internal tools",
      "AI-integrated dashboards",
      "API ecosystems",
    ],
    icon: "Cpu",
  },
  {
    id: "02",
    slug: "e-commerce",
    title: "E-Commerce",
    description:
      "Custom online stores with secure payments, inventory & personalized shopping. From storefronts to multi-vendor ecosystems, we build commerce experiences that convert and scale with demand.",
    whatWeBuild: [
      "Multi-vendor marketplaces",
      "Payment gateway integration",
      "Inventory/CRM systems",
      "Personalized recommendation engines",
    ],
    icon: "ShoppingCart",
  },
  {
    id: "03",
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Property portals, AI-based CRMs, and virtual tour integrations that help agencies and developers attract buyers, nurture leads, and close deals with modern digital experiences.",
    whatWeBuild: [
      "Listing portals",
      "Virtual/3D tour integrations",
      "Lead-management CRMs",
      "Mortgage calculators",
    ],
    icon: "Home",
  },
  {
    id: "04",
    slug: "health-fitness",
    title: "Health & Fitness",
    description:
      "Apps for telemedicine, workout tracking, and fitness engagement — designed to keep users motivated while giving providers clear insights into progress and outcomes.",
    whatWeBuild: [
      "Telemedicine platforms",
      "Workout/nutrition tracking apps",
      "Wearable integrations",
      "Community engagement features",
    ],
    icon: "HeartPulse",
  },
  {
    id: "05",
    slug: "finance",
    title: "Finance",
    description:
      "Secure fintech apps, dashboards, and automated analytics built with compliance and trust in mind — so financial teams can move faster without sacrificing control.",
    whatWeBuild: [
      "Fintech dashboards",
      "Secure payment systems",
      "Automated reporting tools",
      "Fraud-detection integrations",
    ],
    icon: "Landmark",
  },
  {
    id: "06",
    slug: "education",
    title: "Education",
    description:
      "E-learning platforms, virtual classrooms, and adaptive content tools that make learning more engaging for students and more measurable for institutions.",
    whatWeBuild: [
      "LMS platforms",
      "Virtual classroom tools",
      "Adaptive learning engines",
      "Student progress analytics",
    ],
    icon: "GraduationCap",
  },
  {
    id: "07",
    slug: "logistics-transportation",
    title: "Logistics & Transportation",
    description:
      "Route optimization, real-time tracking, and delivery management systems that keep fleets efficient and customers informed from warehouse to doorstep.",
    whatWeBuild: [
      "Fleet tracking dashboards",
      "Route optimization engines",
      "Delivery management apps",
      "Driver mobile apps",
    ],
    icon: "Truck",
  },
  {
    id: "08",
    slug: "food-beverages",
    title: "Food & Beverages",
    description:
      "Ordering systems, delivery apps, and kitchen management solutions that streamline operations for restaurants, cloud kitchens, and food brands.",
    whatWeBuild: [
      "Online ordering platforms",
      "Delivery tracking apps",
      "Kitchen/inventory management systems",
      "Loyalty programs",
    ],
    icon: "UtensilsCrossed",
  },
  {
    id: "09",
    slug: "medical-technology",
    title: "Medical Technology",
    description:
      "HIPAA-compliant platforms, patient portals, and health monitoring tools that improve care coordination while protecting sensitive clinical data.",
    whatWeBuild: [
      "HIPAA-compliant patient portals",
      "Remote monitoring tools",
      "EHR integrations",
      "Appointment scheduling systems",
    ],
    icon: "Stethoscope",
  },
  {
    id: "10",
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    description:
      "Booking engines, itinerary apps, and guest experience platforms that turn trips and stays into seamless, memorable journeys.",
    whatWeBuild: [
      "Booking engines",
      "Itinerary planning apps",
      "Guest experience/loyalty platforms",
      "Review management systems",
    ],
    icon: "Plane",
  },
  {
    id: "11",
    slug: "gaming",
    title: "Gaming",
    description:
      "Cross-platform 2D/3D game development with immersive UI/UX — from prototypes to production builds with polished gameplay and backends that scale.",
    whatWeBuild: [
      "2D/3D game development",
      "Cross-platform engines",
      "Multiplayer backend systems",
      "Immersive UI/UX design",
    ],
    icon: "Gamepad2",
  },
  {
    id: "12",
    slug: "automobile",
    title: "Automobile",
    description:
      "Booking systems, service tracking, and connected vehicle solutions that modernize dealerships, workshops, and mobility experiences.",
    whatWeBuild: [
      "Service booking platforms",
      "Vehicle tracking systems",
      "Connected-car app integrations",
      "Dealership management tools",
    ],
    icon: "Car",
  },
  {
    id: "13",
    slug: "oil-gas-energy",
    title: "Oil, Gas & Energy",
    description:
      "Digital monitoring, asset management, and analytics for energy operations — helping teams reduce downtime and improve operational visibility.",
    whatWeBuild: [
      "Asset monitoring dashboards",
      "Predictive maintenance tools",
      "Compliance reporting systems",
      "IoT sensor integrations",
    ],
    icon: "Fuel",
  },
  {
    id: "14",
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "ERP, inventory systems, and process automation software that connect the plant floor to leadership with clearer data and fewer manual bottlenecks.",
    whatWeBuild: [
      "ERP systems",
      "Inventory/warehouse management",
      "Process automation tools",
      "Production analytics dashboards",
    ],
    icon: "Factory",
  },
  {
    id: "15",
    slug: "architecture",
    title: "Architecture",
    description:
      "Project planning dashboards, 3D visualization, and client portals that keep design teams, stakeholders, and timelines aligned.",
    whatWeBuild: [
      "Project planning dashboards",
      "3D visualization tools",
      "Client collaboration portals",
      "Resource scheduling systems",
    ],
    icon: "Building2",
  },
  {
    id: "16",
    slug: "b2b",
    title: "B2B",
    description:
      "Scalable web platforms for procurement, onboarding, and partner networks — built for complex workflows and multi-party collaboration.",
    whatWeBuild: [
      "Procurement platforms",
      "Partner onboarding portals",
      "B2B marketplaces",
      "Account management dashboards",
    ],
    icon: "Network",
  },
];

export const industryStats = [
  { label: "Industries Served", value: 16, suffix: "+" },
  { label: "Projects Delivered Across Sectors", value: 420, suffix: "+" },
  { label: "Average Client Satisfaction", value: 98, suffix: "%" },
  { label: "Countries Served", value: 12, suffix: "+" },
] as const;

export const industryCaseStudies = [
  {
    title: "Assets For Technology",
    industry: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    href: "/portfolio/assets-for-technology",
  },
  {
    title: "Business Matching",
    industry: "B2B",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    href: "/portfolio/business-matching",
  },
  {
    title: "Startup Funding",
    industry: "Finance",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    href: "/portfolio/startup-funding",
  },
] as const;
