"use client";

import { useMemo, useState } from "react";
import * as math from "mathjs";

export default function ProgrammableCalculatorPage() {
  const [formula, setFormula] = useState("a*b + c");
  const [vars, setVars] = useState<{[k: string]: string}>({ a: "2", b: "3", c: "4" });
  const [lastResult, setLastResult] = useState<string>("");

  const varKeys = useMemo(() => Object.keys(vars), [vars]);

  const evaluate = () => {
    try {
      const scope: Record<string, number> = {};
      for (const [k, v] of Object.entries(vars)) scope[k] = parseFloat(v);
      const res = math.evaluate(formula, scope);
      setLastResult(res.toString());
    } catch {
      setLastResult("Error");
    }
  };

  const addVar = () => {
    const name = prompt("Variable name (e.g. x):");
    if (!name) return;
    setVars((p) => ({ ...p, [name]: "0" }));
  };

  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Programmable Calculator</h1>
      <div className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Formula</label>
          <input 
            className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            placeholder="e.g. a*b + c"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Variables</div>
            <button onClick={addVar} className="bg-accent text-accent-foreground px-3 py-1 rounded-md hover:bg-accent/80">Add</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {varKeys.map((k) => (
              <div key={k} className="flex items-center gap-2">
                <span className="w-10 text-right">{k} =</span>
                <input 
                  className="flex-1 bg-muted/50 border border-border rounded-lg p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  value={vars[k]}
                  onChange={(e) => setVars((p) => ({ ...p, [k]: e.target.value }))}
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={evaluate} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90">Evaluate</button>
        {!!lastResult && (
          <div className="p-4 bg-muted/30 rounded-lg border border-border text-center">
            <div className="text-sm text-muted-foreground mb-1">Result</div>
            <div className="text-3xl font-bold text-foreground">{lastResult}</div>
          </div>
        )}
      </div>
    </div>
  );
}
