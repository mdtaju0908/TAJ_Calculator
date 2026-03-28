import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Graphing Calculator Free - Plot Functions Online | TAJ Calculator",
  description:
    "Free online graphing calculator to plot functions and visualize equations. Fast and responsive.",
  alternates: {
    canonical: "/calculator/graphing",
  },
  openGraph: {
    title: "Graphing Calculator Free - Plot Functions Online | TAJ Calculator",
    description:
      "Plot functions, visualize graphs, and analyze equations with a free online graphing calculator.",
    url: "https://taj-calculator.mdtaju.tech/calculator/graphing",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphing Calculator Free - Plot Functions Online | TAJ Calculator",
    description:
      "Free graphing calculator online for plotting functions and equations.",
  },
  keywords: [
    "graphing calculator free",
    "online calculator",
    "plot graphs",
    "function graph",
  ],
};

export default function GraphingCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Graphing Calculator</h1>
      <div className="w-full max-w-4xl h-[420px] sm:h-[520px] md:h-[600px] bg-white rounded-xl shadow-xl overflow-hidden border border-border">
        <iframe 
          src="https://www.desmos.com/calculator" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          title="Desmos Graphing Calculator"
          loading="lazy"
        />
      </div>
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use graphing calculator</h2>
        <p>
          Enter functions like y = x^2, sin(x), or log(x) to visualize graphs instantly. Zoom and pan to analyze intersections and behavior.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Examples</h3>
        <p>
          Try plotting y = x^3 − 3x and y = sin(x). Compare multiple functions for study and teaching.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/scientific" className="underline">Scientific</Link>{" "}
          | <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/programmer" className="underline">Programmer</Link>{" "}
          | <Link href="/calculator/cas" className="underline">CAS</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Graphing Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/graphing",
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
                  name: "Is the graphing calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can use the graphing calculator for free.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I plot multiple functions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, add multiple functions to compare graphs side by side.",
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
