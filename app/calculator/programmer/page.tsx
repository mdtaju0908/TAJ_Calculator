import type { Metadata } from "next";
import Link from "next/link";
import ProgrammerCalculator from "@/components/ProgrammerCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Programmer Calculator - Convert Bases Online | TAJ Calculator",
  description:
    "Free online programmer calculator to convert numbers between DEC, HEX, BIN, and OCT.",
  alternates: {
    canonical: "/calculator/programmer",
  },
  openGraph: {
    title: "Programmer Calculator - Convert Bases Online | TAJ Calculator",
    description:
      "Convert decimal to hex, binary, and octal using a free online programmer calculator.",
    url: "https://taj-calculator.mdtaju.tech/calculator/programmer",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmer Calculator - Convert Bases Online | TAJ Calculator",
    description:
      "Base conversion calculator for developers: DEC, HEX, BIN, OCT.",
  },
  keywords: [
    "programmer calculator",
    "base converter",
    "hex to binary",
    "online calculator",
  ],
};

export default function ProgrammerCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Programmer Calculator</h1>
      <ProgrammerCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use programmer calculator</h2>
        <p>
          Enter a decimal number to instantly see its HEX, BIN, and OCT representations. Useful for software development and electronics.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Examples</h3>
        <p>
          255 → HEX FF, BIN 11111111, OCT 377. Try common values to understand base conversions.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/scientific" className="underline">Scientific</Link>{" "}
          | <Link href="/calculator/graphing" className="underline">Graphing</Link>{" "}
          | <Link href="/calculator/cas" className="underline">CAS</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Programmer Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/programmer",
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
                  name: "Is the programmer calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it's free and works on all devices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which bases are supported?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "DEC (10), HEX (16), BIN (2), and OCT (8).",
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
