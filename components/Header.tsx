"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Ticker from "@/components/Ticker";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-4.5 gap-y-1.5 bg-slate px-4.5 py-2 text-[13px] text-paper sm:px-6">
        <a href={SITE.phoneTel} className="text-paper no-underline">
          {SITE.phoneDisplay}
        </a>
        <a href={`mailto:${SITE.email}`} className="text-paper no-underline">
          {SITE.email}
        </a>
        <div className="ml-auto hidden gap-4.5 sm:flex">
          <Link href="/parent-portal" className="text-paper/85 no-underline hover:text-white">
            Parent Portal
          </Link>
          <Link href="/careers" className="text-paper/85 no-underline hover:text-white">
            Careers
          </Link>
          <a
            href="https://wa.me/2348130247140"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/85 no-underline hover:text-white"
          >
            WhatsApp us
          </a>
        </div>
      </div>

      <Ticker />

      <div className="sticky top-0 z-40 bg-paper/97 backdrop-blur-md">
        <header className="flex items-center gap-4 border-b border-ink/[.14] px-4.5 py-2.5 sm:gap-8 sm:px-6 lg:px-16">
          <Link
            href="/"
            className="mr-auto flex min-w-0 flex-wrap items-baseline gap-x-2 no-underline"
          >
            <span className="font-display text-[22px] font-bold leading-tight text-slate sm:text-[26px]">
              Hephzibah
            </span>
            <span className="hidden w-full font-body text-[11px] font-bold uppercase tracking-[.1em] text-sky md:block">
              Kings and Queens Montessori School
            </span>
          </Link>

          <nav className="hidden items-center gap-[clamp(10px,1.5vw,26px)] md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[15.5px] font-semibold text-ink no-underline hover:text-sky"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/admissions" className="btn btn-primary">
              Register your child now
            </Link>
          </nav>

          <div className="flex flex-none items-center gap-2 md:hidden">
            <Link href="/admissions" className="btn btn-primary !px-4 !text-sm">
              Register your child now
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Menu"
              className="grid h-11 w-11 flex-none place-items-center gap-1 rounded-[10px] border border-ink/[.22]"
            >
              <span className="block h-0.5 w-[18px] rounded bg-slate" />
              <span className="block h-0.5 w-[18px] rounded bg-slate" />
              <span className="block h-0.5 w-[18px] rounded bg-slate" />
            </button>
          </div>
        </header>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="flex flex-col border-b border-ink/[.14] bg-paper px-4.5 pb-4 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="border-b border-ink/10 py-3.5 text-[17px] font-semibold text-ink no-underline last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
