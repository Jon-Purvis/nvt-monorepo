import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://northvalleytavern.com"),
  title: {
    default: "North Valley Tavern | Olyphant, PA",
    template: "%s | North Valley Tavern",
  },
  description:
    "Local bar serving craft beer, cocktails, and food in Olyphant, Pennsylvania.",
  openGraph: {
    title: "North Valley Tavern",
    description: "Your neighborhood spot in Olyphant, PA",
    url: "https://northvalleytavern.com/",
    siteName: "North Valley Tavern",
    locale: "en_US",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Valley Tavern",
    description: "Your neighborhood spot in Olyphant, PA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "North Valley Tavern",
  image: "https://northvalleytavern.com/og-image.jpg",
  url: "https://northvalleytavern.com/",
  telephone: "+1-570-901-0688",
  address: {
    "@type": "PostalAddress",
    streetAddress: "901 N Valley Ave",
    addressLocality: "Olyphant",
    addressRegion: "PA",
    postalCode: "18447",
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
}>): React.JSX.Element {
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
