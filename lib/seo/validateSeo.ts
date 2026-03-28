import type { Metadata } from "next";

function isDev() {
  return process.env.NODE_ENV !== "production";
}

function lenOk(s: string | undefined, min: number, max: number) {
  if (!s) return false;
  const l = s.trim().length;
  return l >= min && l <= max;
}

export function validateMetadata(meta: Metadata) {
  if (!isDev()) return;
  const titleOk = !!meta.title;
  const desc =
    typeof meta.description === "string" ? meta.description : undefined;
  const descOk = lenOk(desc, 50, 160);
  const hasCanonical =
    !!(meta.alternates as any)?.canonical || !!(meta as any).metadataBase;
  const og = meta.openGraph as any;
  const ogHasUrl = !!og?.url;
  const tw = meta.twitter as any;
  const twHasCard = !!tw?.card;
  const kw = (meta.keywords as string[] | undefined) ?? [];
  const kwOk = kw.length > 0;
  const problems: string[] = [];
  if (!titleOk) problems.push("missing title");
  if (!descOk) problems.push("description should be 50-160 chars");
  if (!hasCanonical) problems.push("missing canonical or metadataBase");
  if (!ogHasUrl) problems.push("openGraph.url missing");
  if (!twHasCard) problems.push("twitter.card missing");
  if (!kwOk) problems.push("keywords missing");
  if (problems.length) {
    console.warn("SEO validation issues:", problems.join(", "));
  }
}
