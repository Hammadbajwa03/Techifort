export const faqCategories = [
  "All",
  "General",
  "Technical",
  "Pricing",
  "Support",
] as const;

export type FAQCategory = (typeof faqCategories)[number];

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "All">;
};

/** Easy to edit — add/remove questions here */
export const faqs: FAQItem[] = [
  {
    id: "general-services",
    category: "General",
    question: "What services does Techifort provide?",
    answer:
      "Techifort offers a wide range of IT services, including software development, ERP implementation, web and mobile app development, cloud and DevOps, SEO, graphic design, and game development. We focus on delivering customized solutions tailored to specific business needs.",
  },
  {
    id: "general-industries",
    category: "General",
    question: "What industries does Techifort work with?",
    answer:
      "Techifort works with clients across multiple industries, including e-commerce, retail, healthcare, manufacturing, telecommunications, and more — providing tailored IT solutions to meet industry-specific needs.",
  },
  {
    id: "general-customize",
    category: "General",
    question: "Can Techifort customize software to meet my business requirements?",
    answer:
      "Yes, Techifort specializes in custom software development, creating solutions specifically designed to address the unique needs of your business.",
  },
  {
    id: "tech-erp",
    category: "Technical",
    question: "What is ERP and how can it help my business?",
    answer:
      "ERP (Enterprise Resource Planning) is a software solution that integrates various business processes — such as finance, HR, manufacturing, and supply chain management — into one system. Techifort's ERP services help automate and optimize these processes, enhancing efficiency and improving decision-making through real-time data access.",
  },
  {
    id: "tech-support",
    category: "Technical",
    question:
      "Do you offer ongoing technical support after the software is developed?",
    answer:
      "Yes, Techifort provides ongoing technical support after the software is developed, helping with updates, bug fixes, and new feature integration.",
  },
  {
    id: "tech-stack",
    category: "Technical",
    question: "What technologies and tech stacks do you work with?",
    answer:
      "Our team works across a wide range of modern technologies — including React, Next.js, Node.js, Python, Flutter, blockchain (Solidity, Ethereum), and cloud platforms like AWS — see our full tech stack section on the homepage for more.",
  },
  {
    id: "pricing-cost",
    category: "Pricing",
    question: "How much does it cost to develop software with Techifort?",
    answer:
      "The cost of software development varies depending on the project's complexity, the systems involved, and the support required. We advise providing a detailed scope of work to get an accurate estimate.",
  },
  {
    id: "pricing-contracts",
    category: "Pricing",
    question: "Do you offer fixed-price or hourly contracts?",
    answer:
      "We offer both — depending on your project's scope and how well-defined the requirements are, we'll recommend the model that gives you the best balance of flexibility and predictability.",
  },
  {
    id: "pricing-minimum",
    category: "Pricing",
    question: "Is there a minimum project size you work with?",
    answer:
      "We work with businesses of all sizes, from early-stage startups to large enterprises, and tailor our engagement model accordingly.",
  },
  {
    id: "support-start",
    category: "Support",
    question: "How soon can we start my project?",
    answer:
      "Once we understand your requirements, we can typically kick off within a few days to a week, depending on team availability and project scope.",
  },
  {
    id: "support-timezone",
    category: "Support",
    question: "Can you work with clients in different time zones?",
    answer:
      "Yes, we regularly work with international clients across different time zones and structure communication to ensure smooth collaboration.",
  },
  {
    id: "support-nda",
    category: "Support",
    question: "Do you sign NDAs before project discussions?",
    answer:
      "Yes, we're happy to sign an NDA before any detailed project discussion to protect your business ideas and data.",
  },
];
