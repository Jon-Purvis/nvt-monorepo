import type { Metadata } from "next";
import "@/app/globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://northvalleytavern.com"),
  title: {
    default: `${siteConfig.name} | ${siteConfig.address.city}, ${siteConfig.address.state}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Local bar serving craft beer, cocktails, and food in ${siteConfig.address.city}, Pennsylvania.`,
  openGraph: {
    title: siteConfig.name,
    description: `Your neighborhood spot in ${siteConfig.address.city}, ${siteConfig.address.state}`,
    url: "https://northvalleytavern.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: `Your neighborhood spot in ${siteConfig.address.city}, ${siteConfig.address.state}`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: siteConfig.name,
  image: "https://northvalleytavern.com/og-image.jpg",
  url: "https://northvalleytavern.com",
  telephone: siteConfig.phone.href.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "16:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "16:00",
      closes: "00:00",
    },
  ],
  servesCuisine: "American",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
