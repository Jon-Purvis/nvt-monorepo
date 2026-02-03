import { siteConfig } from "@/lib/site-config";
import FooterContact from "./FooterContact";
import FooterHours from "./FooterHours";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 mb-10">
          <FooterContact />
          <FooterHours />
        </div>

        <div className="border-t border-border pt-8">
          <div className="mb-6">
            <SocialLinks />
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">Please drink responsibly • 21+ only</p>
            <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
