import type { Metadata } from "next";
import { galleryImages } from "@/lib/gallery-data";
import GalleryCard from "@/components/gallery/GalleryCard";
import GalleryPageHeader from "@/components/gallery/GalleryPageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from North Valley Tavern in Olyphant, PA. See our atmosphere, drinks, and more.",
  alternates: {
    canonical: 'https://northvalleytavern.com/gallery/',
  },
};

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <GalleryPageHeader />

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((image) => (
          <GalleryCard key={image.id} image={image} />
        ))}
      </div>

      {/* Empty state hint */}
      {galleryImages.length < 6 && (
        <p className="text-center text-muted-foreground mt-12 text-sm">
          More photos coming soon...
        </p>
      )}
    </main>
  );
}
