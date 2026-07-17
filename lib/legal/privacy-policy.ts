export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  /** Display string — update when legal team revises the policy */
  lastUpdated: string;
  breadcrumbLabel: string;
  sections: LegalSection[];
};

/**
 * Privacy Policy content — edit this file to update legal copy.
 * Items marked [CONFIRM] should be verified with Techifort before publish.
 */
export const privacyPolicyDocument: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "July 2026", // [CONFIRM] set accurate revision date
  breadcrumbLabel: "Privacy Policy",
  sections: [
    {
      id: "introduction",
      number: "1",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: 'Techifort ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website techifort.com, use our services, or otherwise interact with us.',
        },
      ],
    },
    {
      id: "information-we-collect",
      number: "2",
      title: "Information We Collect",
      blocks: [
        {
          type: "ul",
          items: [
            "Personal information you provide directly (e.g., name, email address, phone number, company name) when you fill out a contact form, request a quote, or subscribe to our newsletter.",
            "Usage data collected automatically (e.g., IP address, browser type, pages visited, time spent on pages, referring website) via cookies and similar tracking technologies.",
            "Information provided during project engagements (e.g., business requirements, project files) shared under separate service agreements or NDAs.",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      number: "3",
      title: "How We Use Your Information",
      blocks: [
        {
          type: "p",
          text: "We use the information we collect to:",
        },
        {
          type: "ul",
          items: [
            "Respond to inquiries and provide requested services or quotes",
            "Deliver, maintain, and improve our website and services",
            "Send updates, newsletters, or marketing communications (only with consent, where required)",
            "Analyze website usage to improve user experience",
            "Comply with legal obligations",
          ],
        },
      ],
    },
    {
      id: "cookies",
      number: "4",
      title: "Cookies & Tracking Technologies",
      blocks: [
        {
          type: "p",
          text: "We use cookies and similar technologies to improve site functionality, analyze traffic, and personalize content. You can control or disable cookies through your browser settings; note that some site features may not function properly without them.",
        },
      ],
    },
    {
      id: "how-we-share",
      number: "5",
      title: "How We Share Your Information",
      blocks: [
        {
          type: "p",
          text: "We do not sell your personal information. We may share information with:",
        },
        {
          type: "ul",
          items: [
            "Trusted third-party service providers who help us operate our website or deliver services (e.g., hosting providers, analytics tools, email platforms), bound by confidentiality obligations",
            "Legal authorities, if required by law or to protect our rights, property, or safety",
            "A successor entity in the event of a merger, acquisition, or sale of assets",
          ],
        },
      ],
    },
    {
      id: "data-security",
      number: "6",
      title: "Data Security",
      blocks: [
        {
          type: "p",
          text: "We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      id: "data-retention",
      number: "7",
      title: "Data Retention",
      blocks: [
        {
          type: "p",
          text: "We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
        },
      ],
    },
    {
      id: "your-rights",
      number: "8",
      title: "Your Rights",
      blocks: [
        {
          type: "p",
          text: "Depending on your location, you may have rights to:",
        },
        {
          type: "ul",
          items: [
            "Access, correct, or delete your personal information",
            "Object to or restrict certain processing of your data",
            "Withdraw consent for marketing communications at any time",
            "Request a copy of the data we hold about you",
          ],
        },
        {
          type: "p",
          text: "To exercise these rights, contact us at info@techifort.com.",
        },
      ],
    },
    {
      id: "international-transfers",
      number: "9",
      title: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "As Techifort operates offices in Pakistan and Ireland and serves clients globally, your information may be transferred to and processed in countries other than your own. We take steps to ensure appropriate safeguards are in place for such transfers.",
        },
      ],
    },
    {
      id: "third-party-links",
      number: "10",
      title: "Third-Party Links",
      blocks: [
        {
          type: "p",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites and encourage you to review their privacy policies.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      number: "11",
      title: "Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "Our services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children.",
        },
      ],
    },
    {
      id: "changes",
      number: "12",
      title: "Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.',
        },
      ],
    },
    {
      id: "contact-us",
      number: "13",
      title: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have questions or concerns about this Privacy Policy or how your information is handled, please contact us:",
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
