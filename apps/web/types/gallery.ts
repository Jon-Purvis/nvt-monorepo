export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** "portrait" | "landscape" - helps with layout hints */
  orientation: "portrait" | "landscape";
}
