import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://savio-secondary-school.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Savio Secondary School | Kawempe, Kampala",
    template: "%s | Savio Secondary School",
  },
  description:
    "Savio Secondary School in Kawempe, Kampala, Uganda — a mixed day and boarding secondary school focused on learning, character, responsibility and purpose.",
  keywords: [
    "Savio Secondary School",
    "Savio Secondary School Kampala",
    "Savio College",
    "secondary schools in Kampala",
    "schools in Kawempe",
    "mixed day and boarding school Uganda",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Savio Secondary School",
    title: "Savio Secondary School | Kawempe, Kampala",
    description:
      "The official website of Savio Secondary School in Kawempe, Kampala, Uganda.",
    locale: "en_UG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savio Secondary School | Kawempe, Kampala",
    description:
      "The official website of Savio Secondary School in Kawempe, Kampala, Uganda.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const schoolStructuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Savio Secondary School",
  url: siteUrl,
  description:
    "Savio Secondary School in Kawempe, Kampala, Uganda, offering mixed day and boarding secondary education.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kawempe Ttula",
    addressLocality: "Kawempe",
    addressRegion: "Kampala",
    addressCountry: "UG",
    postalCode: "1608",
  },
  email: "saviocollege1@gmail.com",
  telephone: "+256 751 981 614",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-UG">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolStructuredData) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
