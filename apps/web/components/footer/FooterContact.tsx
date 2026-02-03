import { siteConfig } from "@/lib/site-config";

export default function FooterContact() {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-foreground mb-4">Visit Us</h3>
      <address className="not-italic text-muted-foreground space-y-1">
        <p>{siteConfig.address.street}</p>
        <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
        <p>
          <a
            href={siteConfig.phone.href}
            className="underline decoration-border underline-offset-2 hover:decoration-primary hover:text-foreground transition-colors"
          >
            {siteConfig.phone.display}
          </a>
        </p>
        <p className="pt-2">
          <a
            href={siteConfig.links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Get Directions →
          </a>
        </p>
      </address>
    </div>
  );
}
