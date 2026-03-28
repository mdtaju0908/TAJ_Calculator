"use client";

import { useState } from "react";

export default function FinancialCalculatorPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(years) * 12;

    if (p && r && n) {
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setResult(emi);
    }
  };

  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Financial Calculator (EMI)</h1>
      
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Principal Amount ($)</label>
          <input 
            type="number" 
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 10000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Annual Interest Rate (%)</label>
          <input 
            type="number" 
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Loan Tenure (Years)</label>
          <input 
            type="number" 
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 10"
          />
        </div>

        <button 
          onClick={calculateEMI}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Calculate EMI
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border text-center">
            <div className="text-sm text-muted-foreground mb-1">Monthly EMI</div>
            <div className="text-3xl font-bold text-foreground">${result.toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
