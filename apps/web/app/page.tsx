import type { Metadata } from "next";
import type { JSX } from "react";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://northvalleytavern.com/",
  },
};

export default function Home(): JSX.Element {
  return (
    <ComingSoon
      title="North Valley Tavern"
      message="Coming Soon!"
      buttonText="View our Menu!"
      buttonHref="/menu/"
    />
  );
}
