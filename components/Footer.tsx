import Link from "next/link";
import {
  FOOTER_ADMISSIONS_LINKS,
  FOOTER_PROGRAMME_LINKS,
  FOOTER_SCHOOL_LINKS,
  SITE,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-4.5 pb-5.5 pt-6.5 text-paper/[.88] sm:px-6 lg:px-16">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-6 gap-y-6.5 border-b border-paper/20 pb-6.5">
        <div>
          <p className="mb-1.5 font-display text-[23px] font-bold leading-tight text-paper">
            {SITE.name}
          </p>
          <p className="mb-3 text-[13.5px] leading-snug text-sky-pale">
            {SITE.motto}
          </p>
          <p className="text-sm leading-relaxed">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.line3.split(",")[0]}
            <br />
            {SITE.phoneDisplay}
          </p>
        </div>

        <div>
          <p className="mb-3 text-[11.5px] font-bold uppercase tracking-[.12em] text-pink">
            School
          </p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {FOOTER_SCHOOL_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-inherit no-underline hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-[11.5px] font-bold uppercase tracking-[.12em] text-pink">
            Programmes
          </p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {FOOTER_PROGRAMME_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-inherit no-underline hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-[11.5px] font-bold uppercase tracking-[.12em] text-pink">
            Admissions
          </p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {FOOTER_ADMISSIONS_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-inherit no-underline hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-5 text-[13px]">
        <span>© 2026 {SITE.name}</span>
        <span className="ml-auto flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://vm.tiktok.com/ZS9BR5CpoKsAf-VZZi1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline"
          >
            TikTok
          </a>
        </span>
      </div>
    </footer>
  );
}
