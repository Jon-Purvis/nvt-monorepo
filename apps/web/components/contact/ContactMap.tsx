"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function ContactMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden border border-border relative">
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Loading map...</span>
        </div>
      )}
      <iframe
        src={siteConfig.mapsEmbed}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${siteConfig.name} Location`}
        className="w-full"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
