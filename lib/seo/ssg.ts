import type { Metadata } from "next";

const siteUrl = "https://taj-calculator.mdtaju.tech";

export const dynamicSSG = "force-static";
export const defaultRevalidate = 86400;

type MetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata(input: MetaInput): Metadata {
  const { title, description, path, keywords } = input;
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "TAJ Calculator",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    keywords,
  };
}
