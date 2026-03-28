 "use client";
 
 import { useEffect, useMemo, useState } from "react";
 
 function toDateInputValue(d: Date) {
   const y = d.getFullYear();
   const m = String(d.getMonth() + 1).padStart(2, "0");
   const day = String(d.getDate()).padStart(2, "0");
   return `${y}-${m}-${day}`;
 }
 
 function diffYMD(from: Date, to: Date) {
   let y = to.getFullYear() - from.getFullYear();
   let m = to.getMonth() - from.getMonth();
   let d = to.getDate() - from.getDate();
   if (d < 0) {
     const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
     d += prevMonth;
     m -= 1;
   }
   if (m < 0) {
     m += 12;
     y -= 1;
   }
   return { years: y, months: m, days: d };
 }
 
 export default function AgeCalculator() {
   const [dob, setDob] = useState("");
   const [asOf, setAsOf] = useState(toDateInputValue(new Date()));
   const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);
   const [summary, setSummary] = useState("");
 
   const totalDays = useMemo(() => {
     const from = new Date(dob);
     const to = new Date(asOf);
     const ms = to.getTime() - from.getTime();
     return Math.floor(ms / (1000 * 60 * 60 * 24));
   }, [dob, asOf]);
 
   const nextBirthday = useMemo(() => {
     const birth = new Date(dob);
     const now = new Date(asOf);
     const currentYearBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
     const next = currentYearBirthday >= now ? currentYearBirthday : new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate());
     const days = Math.ceil((next.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
     return { date: toDateInputValue(next), days };
   }, [dob, asOf]);
 
   useEffect(() => {
     const from = new Date(dob);
     const to = new Date(asOf);
     if (isNaN(from.getTime()) || isNaN(to.getTime()) || from > to) {
       setResult(null);
       setSummary("");
       return;
     }
     const d = diffYMD(from, to);
     setResult(d);
     setSummary(`${d.years}y ${d.months}m ${d.days}d`);
   }, [dob, asOf]);
 
   const dobMax = toDateInputValue(new Date());
 
   return (
     <div className="min-h-[70vh] flex flex-col items-center justify-center">
       <h2 className="sr-only">Age Calculator</h2>
       <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 sm:p-8 space-y-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
             <label className="block text-sm text-white/70 mb-2">Date of Birth</label>
             <input
               type="date"
               value={dob}
               onChange={(e) => setDob(e.target.value)}
               max={dobMax}
               className="w-full rounded-xl bg-white/10 text-white border border-white/10 p-3 outline-none focus:ring-2 focus:ring-indigo-500"
             />
           </div>
           <div>
             <label className="block text-sm text-white/70 mb-2">As Of</label>
             <input
               type="date"
               value={asOf}
               onChange={(e) => setAsOf(e.target.value)}
               min={dob}
               className="w-full rounded-xl bg-white/10 text-white border border-white/10 p-3 outline-none focus:ring-2 focus:ring-indigo-500"
             />
           </div>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
           <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
             <div className="text-sm text-white/60 mb-1">Years</div>
             <div className="text-3xl font-semibold text-white">{result?.years ?? "-"}</div>
           </div>
           <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
             <div className="text-sm text-white/60 mb-1">Months</div>
             <div className="text-3xl font-semibold text-white">{result?.months ?? "-"}</div>
           </div>
           <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
             <div className="text-sm text-white/60 mb-1">Days</div>
             <div className="text-3xl font-semibold text-white">{result?.days ?? "-"}</div>
           </div>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
             <div className="text-sm text-white/60">Summary</div>
             <div className="mt-1 text-xl font-mono text-white">{summary || "-"}</div>
           </div>
           <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
             <div className="text-sm text-white/60">Total Days</div>
             <div className="mt-1 text-xl font-mono text-white">{isFinite(totalDays) ? totalDays : "-"}</div>
           </div>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
             <div className="text-sm text-white/60">Next Birthday</div>
             <div className="mt-1 text-xl font-mono text-white">{nextBirthday.date}</div>
           </div>
           <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
             <div className="text-sm text-white/60">Days Until Next Birthday</div>
             <div className="mt-1 text-xl font-mono text-white">{nextBirthday.days}</div>
           </div>
         </div>
       </div>
     </div>
   );
 }
