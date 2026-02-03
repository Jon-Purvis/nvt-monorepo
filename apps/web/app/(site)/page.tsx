import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://northvalleytavern.com/",
  },
};

export default function Home() {
  return (
    <ComingSoon
      title="North Valley Tavern"
      message="Coming Soon!"
      buttonText="View our Menu!"
      buttonHref="/menu"
    />
  );
}
