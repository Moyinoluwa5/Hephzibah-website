"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCta() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <div
        className="sticky bottom-0 z-30 flex items-center gap-3 border-t border-ink/[.18] bg-paper px-4 py-3 md:hidden"
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <span className="flex-1 text-sm leading-tight">
          Admission in progress for 2026/2027
        </span>
        <Link href="/admissions" className="btn btn-primary flex-none !px-5 !py-3 !text-[15px]">
          Register your child now
        </Link>
      </div>
    );
  }

  return (
    <div
      className="sticky bottom-4 z-30 flex h-0 justify-end px-4 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href="https://wa.me/2348130247140"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="grid h-14 w-14 -translate-y-16 place-items-center rounded-full bg-sky text-xs font-extrabold text-white no-underline shadow-[0_6px_18px_rgba(44,74,92,.3)]"
      >
        WA
      </a>
    </div>
  );
}
