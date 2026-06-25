import type { MetadataRoute } from "next";
import { config } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.site.url,
      lastModified: new Date("2026-06-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
