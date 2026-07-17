import type { LegalDocument } from "@/lib/legal/privacy-policy";

/**
 * Terms & Conditions content — edit this file to update legal copy.
 * Layout is shared via LegalDocumentLayout (same as Privacy Policy).
 */
export const termsAndConditionsDocument: LegalDocument = {
  title: "Terms & Conditions",
  lastUpdated: "July 2026",
  breadcrumbLabel: "Terms & Conditions",
  sections: [
    {
      id: "agreement-to-terms",
      number: "1",
      title: "Agreement to Terms",
      blocks: [
        {
          type: "p",
          text: "By accessing or using the Techifort website (techifort.com) or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use our website or services.",
        },
      ],
    },
    {
      id: "about-techifort",
      number: "2",
      title: "About Techifort",
      blocks: [
        {
          type: "p",
          text: 'Techifort ("we," "our," "us") is a software development and digital services company providing web development, mobile app development, blockchain development, AI development, SEO, digital marketing, graphic design, and related services, with offices in Lahore, Pakistan and Cork, Ireland.',
        },
      ],
    },
    {
      id: "use-of-our-website",
      number: "3",
      title: "Use of Our Website",
      blocks: [
        {
          type: "ul",
          items: [
            "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, or restrict/inhibit the use of, this site by any third party.",
            "You must not use our website to transmit harmful code, attempt unauthorized access to our systems, or engage in any activity that disrupts the website's functionality.",
            "All content on this website (text, graphics, logos, images, code) is the property of Techifort or its licensors and is protected by applicable intellectual property laws, unless otherwise stated.",
          ],
        },
      ],
    },
    {
      id: "services-engagements",
      number: "4",
      title: "Services & Engagements",
      blocks: [
        {
          type: "ul",
          items: [
            "Any services provided by Techifort (software development, design, marketing, etc.) are governed by a separate service agreement, statement of work (SOW), or contract signed between Techifort and the client, which will take precedence over these general website terms for matters specific to that engagement.",
            "Project timelines, deliverables, and costs will be outlined in the applicable proposal or contract and may vary based on project scope.",
            "Techifort reserves the right to decline or discontinue any engagement at its discretion, subject to the terms of the relevant service agreement.",
          ],
        },
      ],
    },
    {
      id: "quotes-pricing",
      number: "5",
      title: "Quotes & Pricing",
      blocks: [
        {
          type: "ul",
          items: [
            "Quotes provided via our website or in initial discussions are estimates based on the information provided and are subject to change once full project requirements are assessed.",
            "Final pricing and payment terms will be confirmed in a formal proposal or contract prior to project commencement.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      number: "6",
      title: "Intellectual Property",
      blocks: [
        {
          type: "ul",
          items: [
            "Upon full payment for a completed project (as defined in the relevant service agreement), ownership of the final deliverables transfers to the client, unless otherwise specified in that agreement.",
            "Techifort retains the right to showcase completed work in its portfolio, marketing materials, and case studies, unless the client has requested confidentiality in writing (e.g. via an NDA).",
            "Any pre-existing tools, frameworks, libraries, or proprietary code used by Techifort in delivering a project remain the property of Techifort or their respective owners.",
          ],
        },
      ],
    },
    {
      id: "confidentiality",
      number: "7",
      title: "Confidentiality",
      blocks: [
        {
          type: "p",
          text: "Techifort respects the confidentiality of client information and project details shared during engagements. We are happy to sign a Non-Disclosure Agreement (NDA) prior to detailed project discussions upon request.",
        },
      ],
    },
    {
      id: "payment-terms",
      number: "8",
      title: "Payment Terms",
      blocks: [
        {
          type: "ul",
          items: [
            "Payment schedules (e.g., milestone-based, upfront deposit, monthly retainer) will be defined in the individual service agreement.",
            "Late payments may result in pausing of project work until outstanding balances are resolved, as further detailed in the relevant contract.",
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      number: "9",
      title: "Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent permitted by law, Techifort shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services, including but not limited to loss of profits, data, or business opportunities.",
        },
      ],
    },
    {
      id: "third-party-links",
      number: "10",
      title: "Third-Party Links & Services",
      blocks: [
        {
          type: "p",
          text: "Our website may link to third-party websites or use third-party tools (e.g., hosting, analytics, payment processors). Techifort is not responsible for the content, policies, or practices of these third parties.",
        },
      ],
    },
    {
      id: "warranties-disclaimers",
      number: "11",
      title: "Warranties & Disclaimers",
      blocks: [
        {
          type: "p",
          text: 'Our website and general content are provided "as is" without warranties of any kind, express or implied. While we strive for accuracy, we do not guarantee that all information on this website is complete, current, or error-free.',
        },
      ],
    },
    {
      id: "termination",
      number: "12",
      title: "Termination",
      blocks: [
        {
          type: "p",
          text: "Techifort reserves the right to suspend or terminate access to our website for any user found to be in violation of these Terms & Conditions. Termination of active service engagements will be handled per the terms of the applicable service agreement.",
        },
      ],
    },
    {
      id: "governing-law",
      number: "13",
      title: "Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms & Conditions shall be governed by and construed in accordance with the laws of Pakistan, without regard to conflict of law principles, unless otherwise specified in a signed service agreement with a client based in a different jurisdiction.",
        },
      ],
    },
    {
      id: "changes-to-these-terms",
      number: "14",
      title: "Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: 'We may update these Terms & Conditions from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our website after changes are posted constitutes acceptance of the revised terms.',
        },
      ],
    },
    {
      id: "contact-us",
      number: "15",
      title: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "For questions about these Terms & Conditions, please contact us:",
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
