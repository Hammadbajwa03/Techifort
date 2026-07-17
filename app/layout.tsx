import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Techifort — Software Development & Digital Agency",
    template: "%s | Techifort",
  },
  description:
    "Techifort is a forward-thinking software development company delivering cutting-edge web, mobile, blockchain, SEO, and custom digital solutions.",
  keywords: [
    "software development",
    "web development",
    "digital agency",
    "SEO",
    "blockchain",
    "mobile apps",
    "Techifort",
  ],
  authors: [{ name: "Techifort" }],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/techifort-mark-512.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Techifort — Software Development & Digital Agency",
    description:
      "Cutting-edge software development, SEO, web development, and custom digital solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Techifort",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
