 "use client";
 
 import { useState } from "react";
 import clsx from "clsx";
 
 export default function ProgrammerCalculator() {
   const [dec, setDec] = useState("");
 
   const handleDecChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setDec(e.target.value);
   };
 
   const num = parseInt(dec, 10);
   const hex = isNaN(num) ? "" : num.toString(16).toUpperCase();
   const bin = isNaN(num) ? "" : num.toString(2);
   const oct = isNaN(num) ? "" : num.toString(8);
 
   return (
     <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col p-6 space-y-4">
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">DEC (Base 10)</label>
         <input
           type="number"
           value={dec}
           onChange={handleDecChange}
           className={clsx("w-full bg-muted/50 border border-border rounded-lg p-3 text-lg font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary")}
           placeholder="0"
         />
       </div>
 
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">HEX (Base 16)</label>
         <div className="w-full bg-muted/20 border border-border rounded-lg p-3 text-lg font-mono text-foreground">
           {hex || "0"}
         </div>
       </div>
 
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">BIN (Base 2)</label>
         <div className="w-full bg-muted/20 border border-border rounded-lg p-3 text-lg font-mono text-foreground break-all">
           {bin || "0"}
         </div>
       </div>
 
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">OCT (Base 8)</label>
         <div className="w-full bg-muted/20 border border-border rounded-lg p-3 text-lg font-mono text-foreground">
           {oct || "0"}
         </div>
       </div>
     </div>
   );
 }
