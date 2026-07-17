import type { LegalDocument } from "@/lib/legal/privacy-policy";

/**
 * Disclaimer content — edit this file to update legal copy.
 * Layout is shared via LegalDocumentLayout (same as Privacy Policy / Terms).
 */
export const disclaimerDocument: LegalDocument = {
  title: "Disclaimer",
  lastUpdated: "July 2026",
  breadcrumbLabel: "Disclaimer",
  sections: [
    {
      id: "general-information",
      number: "1",
      title: "General Information",
      blocks: [
        {
          type: "p",
          text: 'The information provided by Techifort ("we," "our," "us") on techifort.com is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.',
        },
      ],
    },
    {
      id: "not-professional-advice",
      number: "2",
      title: "Not Professional Advice",
      blocks: [
        {
          type: "p",
          text: "Content on this website — including blog articles, service descriptions, and case studies — is provided for informational purposes only and does not constitute professional, technical, legal, or financial advice. You should not rely on any information on this site as a substitute for consultation with qualified professionals regarding your specific business needs before making decisions.",
        },
      ],
    },
    {
      id: "no-guarantee-of-results",
      number: "3",
      title: "No Guarantee of Results",
      blocks: [
        {
          type: "p",
          text: "While Techifort strives to deliver high-quality software, design, marketing, and AI solutions, we make no guarantees regarding specific business outcomes, revenue growth, search engine rankings, conversion rates, or other results that may result from using our services. Actual results vary based on numerous factors outside our control, including market conditions, client implementation, and third-party platform changes.",
        },
      ],
    },
    {
      id: "external-links",
      number: "4",
      title: "External Links Disclaimer",
      blocks: [
        {
          type: "p",
          text: "Our website may contain links to external websites that are not provided or maintained by, or in any way affiliated with, Techifort. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites, and we are not responsible for their content or practices.",
        },
      ],
    },
    {
      id: "portfolio-case-studies",
      number: "5",
      title: "Portfolio & Case Studies Disclaimer",
      blocks: [
        {
          type: "p",
          text: "Project examples, case studies, and testimonials featured on our website represent specific client engagements and outcomes achieved under particular circumstances. Past results do not guarantee similar outcomes for future or other client projects, as each engagement varies based on scope, industry, and business context.",
        },
      ],
    },
    {
      id: "third-party-technologies",
      number: "6",
      title: "Third-Party Technologies Disclaimer",
      blocks: [
        {
          type: "p",
          text: "Where we reference third-party technologies, platforms, or tools (e.g., programming languages, frameworks, cloud providers) on our website, this does not constitute an endorsement, and availability, pricing, or functionality of such third-party technologies may change independently of Techifort.",
        },
      ],
    },
    {
      id: "errors-omissions",
      number: "7",
      title: "Errors & Omissions Disclaimer",
      blocks: [
        {
          type: "p",
          text: "While we make every effort to keep the information on our website accurate and up to date, Techifort will not be held liable for any errors, omissions, or for any losses, injuries, or damages arising from the display or use of this information.",
        },
      ],
    },
    {
      id: "views-expressed",
      number: "8",
      title: "Views Expressed Disclaimer",
      blocks: [
        {
          type: "p",
          text: "The website may contain views and opinions of various authors (including blog contributors), which do not necessarily reflect the official policy or position of Techifort. Comments published by users are their sole responsibility, and Techifort will not be liable for any user-generated content.",
        },
      ],
    },
    {
      id: "fair-use-trademark",
      number: "9",
      title: "Fair Use / Trademark Disclaimer",
      blocks: [
        {
          type: "p",
          text: "Product names, logos, brands, and other trademarks referenced on this website are the property of their respective owners. Use of these names, logos, and brands does not imply endorsement by, or affiliation with, Techifort unless explicitly stated.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      number: "10",
      title: "Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "Under no circumstances shall Techifort be held liable for any direct, indirect, special, incidental, or consequential damages arising out of, or in connection with, your use of this website or reliance on any information provided herein.",
        },
      ],
    },
    {
      id: "changes-to-this-disclaimer",
      number: "11",
      title: "Changes to This Disclaimer",
      blocks: [
        {
          type: "p",
          text: 'We may update this Disclaimer from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Changes will be posted on this page with an updated "Last updated" date.',
        },
      ],
    },
    {
      id: "contact-us",
      number: "12",
      title: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have any questions about this Disclaimer, please contact us:",
        },
        {
          type: "ul",
          items: [
            "Email: info@techifort.com",
            "Phone: +92 300 6047949",
            "Address: 2nd Floor, Office #202A, Siddiq Trade Center, Gulberg 2, Lahore, Pakistan",
          ],
        },
      ],
    },
  ],
};
