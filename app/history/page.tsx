"use client";

import { useEffect, useState } from "react";
import { getHistory } from "@/lib/api";

type Item = {
  id: number;
  type: string;
  expression: string;
  result: string;
  created_at: string;
};

export default function HistoryPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onExportCSV = () => {
    const rows = [["type","expression","result","created_at"], ...items.map(i => [i.type, i.expression, i.result, i.created_at])];
    const csv = rows.map(r => r.map(f => `"${(f || "").toString().replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "history.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await getHistory();
        setItems(res.history || []);
      } catch {
        setError("Failed to load history. Login required.");
      }
    })();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-foreground">Calculation History</h1>
        <button onClick={onExportCSV} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">Export CSV</button>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-left">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Expression</th>
              <th className="px-4 py-2">Result</th>
              <th className="px-4 py-2">When</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id} className="border-t border-border">
                <td className="px-4 py-2">{i.type}</td>
                <td className="px-4 py-2 font-mono">{i.expression}</td>
                <td className="px-4 py-2 font-mono">{i.result}</td>
                <td className="px-4 py-2 text-muted-foreground">{new Date(i.created_at).toLocaleString()}</td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td className="px-4 py-4 text-muted-foreground" colSpan={4}>No items</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
