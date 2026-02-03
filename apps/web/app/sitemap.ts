import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://northvalleytavern.com", lastModified: new Date() },
    { url: "https://northvalleytavern.com/menu", lastModified: new Date() },
    { url: "https://northvalleytavern.com/about", lastModified: new Date() },
    { url: "https://northvalleytavern.com/contact", lastModified: new Date() },
    { url: "https://northvalleytavern.com/gallery", lastModified: new Date() },
  ];
}
