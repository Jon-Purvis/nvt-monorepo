import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse our selection of craft beers, cocktails, and bar food at North Valley Tavern in Olyphant, PA.",
  alternates: {
    canonical: 'https://northvalleytavern.com/menu',
  },
};

// Menu will be rebuilt with Convex backend
export default function MenuPage() {
  return (
    <ComingSoon
      title="Menu"
      message="Our menu is being updated. Check back soon!"
      buttonText="Return Home"
      buttonHref="/"
    />
  );
}
