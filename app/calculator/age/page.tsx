import type { Metadata } from "next";
import Link from "next/link";
import AgeCalculator from "@/components/AgeCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Age by Date of Birth | TAJ Calculator",
  description:
    "Free online age calculator to compute age in years, months, and days from your date of birth.",
  alternates: {
    canonical: "/calculator/age",
  },
  openGraph: {
    title: "Age Calculator - Calculate Age by Date of Birth | TAJ Calculator",
    description:
      "Calculate your age exactly in years, months, and days using a free age calculator.",
    url: "https://taj-calculator.mdtaju.tech/calculator/age",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator - Calculate Age by Date of Birth | TAJ Calculator",
    description:
      "Online age calculator with next birthday and total days calculation.",
  },
  keywords: [
    "age calculator",
    "calculate age",
    "date of birth calculator",
    "online calculator",
  ],
};

export default function AgeCalculatorPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white/90">Age Calculator</h1>
      <AgeCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use age calculator</h2>
        <p>
          Select your date of birth and an optional “as of” date. The calculator shows your exact age and days until the next birthday.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Examples</h3>
        <p>
          Compute age differences for documents, applications, or planning events. Accurate down to days.
        </p>
        <div className="pt-4 border-t border-white/10">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/scientific" className="underline">Scientific</Link>{" "}
          | <Link href="/calculator/graphing" className="underline">Graphing</Link>{" "}
          | <Link href="/calculator/sip" className="underline">SIP</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Age Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/age",
              applicationCategory: "Calculator",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the age calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it's free and mobile-friendly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I set a custom reference date?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, use the As Of date to compute age at a specific date.",
                  },
                },
              ],
            }),
          }}
        />
      </section>
    </div>
  );
}
