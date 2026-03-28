import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const host = "https://taj-calculator.mdtaju.tech";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
