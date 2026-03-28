"use client";

export default function BackgroundBubbles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bubble w-72 h-72 bg-gradient-to-br from-indigo-600 to-blue-600 top-10 left-10"></div>
      <div className="bubble w-64 h-64 bg-gradient-to-br from-fuchsia-500 to-indigo-600 bottom-20 right-16 animation-delay-3000"></div>
      <div className="bubble w-80 h-80 bg-gradient-to-br from-sky-500 to-indigo-500 top-1/2 left-1/3 animation-delay-6000"></div>
    </div>
  );
}
