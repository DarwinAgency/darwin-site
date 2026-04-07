import type { Metadata } from "next";
import { Anton, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Darwin Agency — Creative Thinking au service des marques",
  description: "Agence digitale dédiée à la performance depuis 23 ans. SEO, SEA, SMA, MEDIA, Analytics.",
  metadataBase: new URL('https://www.darwin-agency.fr'),
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'Darwin Agency',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Darwin Agency' }],
    locale: 'fr_FR',
    type: 'website',
  },
  robots: { index: false, follow: false },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Darwin Agency',
  url: 'https://www.darwin-agency.fr',
  logo: 'https://www.darwin-agency.fr/images/logo-darwin.png',
  description: 'Agence digitale dédiée à la performance depuis 23 ans. SEO, SEA, SMA, MEDIA, Analytics.',
  foundingDate: '2003',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aix-en-Provence',
    addressCountry: 'FR',
  },
  telephone: '+33413570900',
  sameAs: [
    'https://www.linkedin.com/company/darwin-agency',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-source-sans), sans-serif", margin: 0, padding: 0 }}>
        <Header />
        <main style={{ paddingTop: 68 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
