import type { Metadata } from "next";
import Link from "next/link";
import CASCalculator from "@/components/CASCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "CAS Calculator - Algebra, Derivative, Integrate | TAJ Calculator",
  description:
    "Free online CAS (Computer Algebra System) calculator to evaluate, simplify, differentiate, and integrate expressions.",
  alternates: {
    canonical: "/calculator/cas",
  },
  openGraph: {
    title: "CAS Calculator - Algebra, Derivative, Integrate | TAJ Calculator",
    description:
      "Evaluate, simplify, differentiate, and integrate math expressions using a free CAS calculator.",
    url: "https://taj-calculator.mdtaju.tech/calculator/cas",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAS Calculator - Algebra, Derivative, Integrate | TAJ Calculator",
    description:
      "Online CAS calculator for algebraic manipulation and calculus operations.",
  },
  keywords: [
    "CAS calculator",
    "computer algebra system",
    "derivative calculator",
    "integral calculator",
    "online calculator",
  ],
};

export default function CASCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Computer Algebra System (CAS)</h1>
      <CASCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use CAS calculator</h2>
        <p>
          Enter expressions in terms of x and choose an operation: Evaluate, Simplify, Derivative, or Integrate. Results show instantly.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Examples</h3>
        <p>
          Evaluate x^2 + 2x + 1, compute d/dx of sin(x), or integrate x^2. Supports algebra and calculus workflows.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/scientific" className="underline">Scientific</Link>{" "}
          | <Link href="/calculator/graphing" className="underline">Graphing</Link>{" "}
          | <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/programmer" className="underline">Programmer</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CAS Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/cas",
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
                  name: "Is the CAS calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it's free and supports algebra and calculus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which operations are supported?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Evaluate, Simplify, Derivative (d/dx), and Integrate (∫dx).",
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
