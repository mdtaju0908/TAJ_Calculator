import type { Metadata } from "next";
import Link from "next/link";
import SimpleCalculator from "@/components/SimpleCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Simple Calculator Online - Fast & Free | TAJ Calculator",
  description:
    "Free online simple calculator for quick arithmetic operations. Fast, responsive, and easy to use.",
  alternates: {
    canonical: "/calculator/simple",
  },
  openGraph: {
    title: "Simple Calculator Online - Fast & Free | TAJ Calculator",
    description:
      "Use the free online simple calculator for addition, subtraction, multiplication, and division.",
    url: "https://taj-calculator.mdtaju.tech/calculator/simple",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Calculator Online - Fast & Free | TAJ Calculator",
    description:
      "Free online simple calculator with basic arithmetic operations.",
  },
  keywords: [
    "online calculator",
    "simple calculator",
    "basic calculator",
    "free calculator",
  ],
};

export default function SimpleCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Simple Calculator</h1>
      <SimpleCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use the simple calculator</h2>
        <p>
          Enter numbers and choose operations like +, −, ×, ÷ to calculate instantly. This free online calculator is optimized for speed and accuracy and works perfectly on mobile and desktop.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Formulas and examples</h3>
        <p>
          Basic arithmetic follows standard math rules. Example: (12 + 7) × 3 = 57. Use the percent key to compute percentages, e.g. 120 × 10% = 12.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/scientific" className="underline">Scientific</Link>{" "}
          | <Link href="/calculator/graphing" className="underline">Graphing</Link>{" "}
          | <Link href="/calculator/sip" className="underline">SIP</Link>{" "}
          | <Link href="/calculator/financial" className="underline">Financial</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Simple Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/simple",
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
                  name: "Is the simple calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, TAJ Calculator is completely free to use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does it work on mobile?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the calculator is fully responsive and mobile-friendly.",
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
