import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about North Valley Tavern, your neighborhood bar in Olyphant, Pennsylvania.",
  alternates: {
    canonical: 'https://northvalleytavern.com/about',
  },
};

export default function AboutPage() {
  return (
    <ComingSoon
      title="About Us"
      message="We're crafting this page to share our story."
      buttonText="Return Home"
      buttonHref="/"
    />
  );
}
