import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import { siteConfig } from "@/lib/site-config";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      <a
        href={siteConfig.links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Facebook"
      >
        <FacebookIcon className="w-6 h-6" />
      </a>
      <a
        href={siteConfig.links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Instagram"
      >
        <InstagramIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
