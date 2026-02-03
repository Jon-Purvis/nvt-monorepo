import Image from "next/image";
import { GalleryImage } from "@/types/gallery";

interface GalleryCardProps {
  image: GalleryImage;
}

export default function GalleryCard({ image }: GalleryCardProps) {
  return (
    <div className="break-inside-avoid group relative overflow-hidden rounded-lg bg-card border border-border">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.orientation === "portrait" ? 900 : 1600}
        height={image.orientation === "portrait" ? 1600 : 1200}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Hover overlay with caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-sm">{image.alt}</p>
        </div>
      </div>
    </div>
  );
}
