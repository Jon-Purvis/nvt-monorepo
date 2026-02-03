import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Get in touch with ${siteConfig.name}. Find our hours, location, and contact info in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  alternates: {
    canonical: 'https://northvalleytavern.com/contact/',
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-foreground mb-2">Contact Us</h1>
        <p className="text-lg text-muted-foreground italic">
          We&apos;d love to hear from you
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Form */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Send us a Message
          </h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <ContactForm />
          </div>
        </div>

        {/* Right Column - Map & Actions */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Find Us
            </h2>
            <ContactMap />
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={siteConfig.links.directions} className="flex-1">
              Get Directions
            </Button>
            <Button href={siteConfig.phone.href} className="flex-1">
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
