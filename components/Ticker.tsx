"use client";

import { useEffect, useState } from "react";

export default function Ticker() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(mq.matches);
  }, []);

  const message = "Admissions open for 2026/2027";

  return (
    <div className="flex items-center gap-3 overflow-hidden bg-sky-pale py-0 pr-3 text-ink">
      <div className="flex-1 overflow-hidden py-2.5 [mask-image:linear-gradient(90deg,transparent,black_24px,black_calc(100%-24px),transparent)]">
        <div
          className="ticker-track flex w-max animate-ticker"
          data-paused={paused}
        >
          <div className="flex flex-none items-center">
            <span className="px-6 text-[13.5px] sm:px-12">{message}</span>
          </div>
          <div className="flex flex-none items-center" aria-hidden="true">
            <span className="px-6 text-[13.5px] sm:px-12">{message}</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play announcement ticker" : "Pause announcement ticker"}
        className="flex min-h-[28px] flex-none items-center rounded-full border border-ink/25 bg-paper px-2.5 py-1 text-[11px] font-body font-bold uppercase tracking-[.08em] text-ink hover:bg-white"
      >
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
