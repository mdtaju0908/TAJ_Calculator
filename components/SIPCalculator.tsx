 "use client";
 
 import { useMemo, useState } from "react";
 
 function calculateSIP(monthly: number, annualRate: number, years: number) {
   const r = annualRate / 12 / 100;
   const n = years * 12;
   if (!monthly || !r || !n) return 0;
   return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
 }
 
 export default function SIPCalculator() {
   const [monthly, setMonthly] = useState("");
   const [rate, setRate] = useState("");
   const [years, setYears] = useState("");
 
   const maturity = useMemo(
     () =>
       calculateSIP(
         parseFloat(monthly),
         parseFloat(rate),
         parseFloat(years)
       ),
     [monthly, rate, years]
   );
 
   return (
     <div className="w-[450px] bg-card border border-border rounded-2xl shadow-xl p-6 space-y-4">
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">
           Monthly Investment
         </label>
         <input
           type="number"
           value={monthly}
           onChange={(e) => setMonthly(e.target.value)}
           className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
           placeholder="e.g. 1000"
         />
       </div>
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">
           Expected Return (Annual %)
         </label>
         <input
           type="number"
           value={rate}
           onChange={(e) => setRate(e.target.value)}
           className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
           placeholder="e.g. 12"
         />
       </div>
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">
           Years
         </label>
         <input
           type="number"
           value={years}
           onChange={(e) => setYears(e.target.value)}
           className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
           placeholder="e.g. 10"
         />
       </div>
 
       <div className="rounded-lg bg-muted/20 border border-border p-4">
         <div className="text-sm text-muted-foreground">Estimated Maturity</div>
         <div className="mt-1 text-2xl font-semibold text-foreground">
           {isFinite(maturity) ? maturity.toFixed(2) : "-"}
         </div>
       </div>
     </div>
   );
 }
