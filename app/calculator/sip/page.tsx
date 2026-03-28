"use client";

import { useMemo, useState } from "react";

function calculateSIP(monthly: number, annualRate: number, years: number) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (!monthly || !r || !n) return 0;
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

export default function SIPCalculatorPage() {
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const maturity = useMemo(() => calculateSIP(parseFloat(monthly), parseFloat(rate), parseFloat(years)), [monthly, rate, years]);

  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">SIP Calculator</h1>
      <div className="w-[450px] bg-card border border-border rounded-2xl shadow-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Monthly Investment</label>
          <input 
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 1000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Expected Return (Annual %)</label>
          <input 
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 12"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Time Period (Years)</label>
          <input 
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 10"
          />
        </div>
        <div className="mt-2 p-4 bg-muted/30 rounded-lg border border-border text-center">
          <div className="text-sm text-muted-foreground mb-1">Maturity Amount</div>
          <div className="text-3xl font-bold text-foreground">₹{isFinite(maturity) ? maturity.toFixed(2) : "0.00"}</div>
        </div>
      </div>
    </div>
  );
}
