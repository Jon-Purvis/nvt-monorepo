import type { Metadata } from "next";
import type { JSX } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://northvalleytavern.com/",
  },
};

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-5xl font-bold text-primary">North Valley Tavern</h1>
      <p className="text-xl text-muted-foreground">
        Phase 1 Migration Complete - Tailwind v4 Theme Active
      </p>
      <div className="flex gap-4 mt-4">
        <div className="w-16 h-16 rounded-lg bg-primary" title="Primary" />
        <div className="w-16 h-16 rounded-lg bg-secondary" title="Secondary" />
        <div className="w-16 h-16 rounded-lg bg-accent" title="Accent" />
        <div className="w-16 h-16 rounded-lg bg-card border border-border" title="Card" />
      </div>
    </main>
  );
}
