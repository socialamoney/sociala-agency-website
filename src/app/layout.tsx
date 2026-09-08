import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOCIALA AGENCY — Agence de Marketing Digital à Douala",
  description:
    "SOCIALA AGENCY, agence digitale à Douala : stratégie, publicité Meta et Google, community management, création graphique et vidéo, sites web et e-commerce.",
  metadataBase: new URL("https://socialaagency.com"),
  openGraph: {
    title: "SOCIALA AGENCY — Agence de Marketing Digital",
    description:
      "SOCIALA AGENCY, agence digitale à Douala : stratégie, publicité Meta et Google, community management, création graphique et vidéo, sites web et e-commerce.",
    url: "https://socialaagency.com",
    siteName: "SOCIALA AGENCY",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://socialaagency.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SOCIALA AGENCY",
              legalName: "SOCIAL GROUP SARL",
              slogan: "Communiquer • Innover • Impacter",
              url: "https://socialaagency.com",
              logo: "https://socialaagency.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Douala",
                addressCountry: "CM",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+237687582392",
                email: "contact@socialaagency.com",
                contactType: "sales",
                availableLanguage: ["fr", "en"],
              },
              areaServed: ["CM", "GA", "CF", "TD", "FR", "CA", "US"],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
