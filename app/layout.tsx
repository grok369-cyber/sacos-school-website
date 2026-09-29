import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://saviosecondaryschool.com";
const siteName = "Savio Secondary School, Kawempe";
const logoUrl = `${siteUrl}/savio-badge.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Savio Secondary School, Kawempe | O-Level & A-Level",
    template: "%s | Savio Secondary School",
  },
  description:
    "Savio Secondary School, Kawempe is a mixed day and boarding secondary school offering O-Level and A-Level education in Kawempe Ttula, Kampala, Uganda.",
  keywords: [
    "Savio Secondary School",
    "Savio Secondary School Kawempe",
    "Savio Secondary School Kampala",
    "Savio Secondary School Uganda",
    "Savio S.S.",
    "SACOS",
    "Savio College Kawempe",
    "schools in Kawempe",
    "secondary schools in Kampala",
    "O-Level schools in Kawempe",
    "A-Level schools in Kawempe",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Savio Secondary School, Kawempe | O-Level & A-Level",
    description:
      "Official website of Savio Secondary School, Kawempe — a mixed day and boarding school offering O-Level and A-Level education in Uganda.",
    locale: "en_UG",
    images: [{ url: logoUrl, width: 512, height: 512, alt: "Savio Secondary School badge" }],
  },
  twitter: {
    card: "summary",
    title: "Savio Secondary School, Kawempe",
    description:
      "Official website of Savio Secondary School, Kawempe — O-Level and A-Level education.",
    images: [logoUrl],
  },
  icons: { icon: "/savio-badge.svg" },
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
  "@id": `${siteUrl}/#school`,
  name: "Savio Secondary School, Kawempe",
  alternateName: ["Savio S.S.", "SACOS", "Savio College"],
  url: siteUrl,
  logo: logoUrl,
  image: logoUrl,
  description:
    "Savio Secondary School, Kawempe is a mixed day and boarding secondary school offering O-Level and A-Level education in Kawempe Ttula, Kampala, Uganda.",
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
  sameAs: [
    "https://www.facebook.com/p/SAVIO-College-School-Kawempe-100063609622634/",
    "https://www.youtube.com/@saviochannel5042",
  ],
  areaServed: "Kawempe, Kampala, Uganda",
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
