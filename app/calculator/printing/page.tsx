import type { Metadata } from "next";
import Link from "next/link";
import PrintingCalculator from "@/components/PrintingCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Printing Calculator - Tape Style Online | TAJ Calculator",
  description:
    "Free online printing calculator with tape-style entries. Add lines and print your calculations.",
  alternates: {
    canonical: "/calculator/printing",
  },
  openGraph: {
    title: "Printing Calculator - Tape Style Online | TAJ Calculator",
    description:
      "Use a tape-style printing calculator online to log steps and print results.",
    url: "https://taj-calculator.mdtaju.tech/calculator/printing",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Calculator - Tape Style Online | TAJ Calculator",
    description:
      "Tape-style calculator to add, review, and print calculation lines.",
  },
  keywords: [
    "printing calculator",
    "tape calculator",
    "online calculator",
    "print calculations",
  ],
};

export default function PrintingCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Printing Calculator</h1>
      <PrintingCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use printing calculator</h2>
        <p>
          Type each calculation line and press Enter to add it to the tape. Use the Print button to open a printable view.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Examples</h3>
        <p>
          Enter lines like 120 + 35 = 155 or 200 × 1.18 = 236 to keep a record of calculations.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/business" className="underline">Business</Link>{" "}
          | <Link href="/calculator/financial" className="underline">Financial</Link>{" "}
          | <Link href="/calculator/sip" className="underline">SIP</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Printing Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/printing",
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
                  name: "Is the printing calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is free and supports printing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I save the tape?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can print the tape or copy its contents for record-keeping.",
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
