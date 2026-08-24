import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} in Erunwen, Ikorodu, Lagos.`,
};

export default function ContactPage() {
  return (
    <section className="section-pad bg-slate text-paper">
      <p className="eyebrow mb-2.5 text-sky-light">Contact</p>
      <h1 className="h1 mb-6.5">Visit us or reach out</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6.5">
        <div>
          <p className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[.12em] text-pink">
            Address
          </p>
          <p className="body-copy m-0">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.line3}
          </p>
        </div>
        <div>
          <p className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[.12em] text-pink">
            Phone &amp; email
          </p>
          <p className="body-copy m-0">
            <a href={SITE.phoneTel} className="text-paper">
              {SITE.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="text-paper">
              {SITE.email}
            </a>
          </p>
        </div>
        <div>
          <p className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[.12em] text-pink">
            Hours
          </p>
          <p className="body-copy m-0">
            {SITE.hours}
            <br />
            {SITE.visitHours}
          </p>
        </div>
      </div>

      <div className="mt-6.5 flex flex-wrap gap-3">
        <a
          href="https://wa.me/2347080293675"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-fill-light"
        >
          WhatsApp us
        </a>
        <Link href="/admissions" className="btn btn-outline-light">
          Register your child now
        </Link>
      </div>
    </section>
  );
}
