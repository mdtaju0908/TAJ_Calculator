import type { MetadataRoute } from "next";

const base = "https://taj-calculator.mdtaju.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/history",
    "/calculator/simple",
    "/calculator/scientific",
    "/calculator/graphing",
    "/calculator/financial",
    "/calculator/sip",
    "/calculator/programmer",
    "/calculator/cas",
    "/calculator/business",
    "/calculator/printing",
    "/calculator/programmable",
    "/calculator/age",
  ];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
