import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import RegistrationForm from "@/components/RegistrationForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admission in progress for 2026/2027. Register your child, come and see the school, then take an offer.",
};

const STEPS = [
  {
    n: "1",
    title: "Register your child",
    body: "Fill the short form on this page or send a WhatsApp message. We reply the same working day.",
    when: "Same day",
    fg: "text-sky-press",
    bg: "bg-sky-tint",
  },
  {
    n: "2",
    title: "Come and see the school",
    body: "Visit while the morning is running, Monday to Friday between 9:00am and noon. No appointment needed.",
    when: "Within a week",
    fg: "text-sky-press",
    bg: "bg-sky-tint",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <section className="section-pad bg-sky-tint pb-[clamp(28px,3vw,48px)]">
        <p className="eyebrow mb-2.5 text-sky">Admissions 2026/2027</p>
        <h1 className="h1 mb-3.5 text-slate">Admission in progress</h1>
        <p className="max-w-[56ch] text-[clamp(16px,1.35vw,19px)] leading-relaxed text-ink-soft">
          Register your child, come and see the school, then take an offer —
          about two weeks from first message to a place held in your
          child&rsquo;s name.
        </p>
      </section>

      <section className="section-pad">
        <h2 className="h2 mb-5.5 text-slate">How admission works</h2>
        <div className="flex flex-col">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-[52px_1fr] gap-[clamp(14px,2vw,28px)] border-t border-ink/[.16] py-[clamp(15px,1.8vw,22px)]"
            >
              <span
                className={`grid h-10 w-10 place-items-center rounded-full font-display text-xl font-bold ${s.bg} ${s.fg}`}
              >
                {s.n}
              </span>
              <span>
                <span className="mb-1 block font-display text-xl font-semibold text-slate">
                  {s.title}
                </span>
                <span className="block max-w-[62ch] text-base leading-relaxed text-ink-soft">
                  {s.body}
                </span>
                <span className="mt-2 block text-[13px] font-bold uppercase tracking-[.06em] text-sky">
                  {s.when}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-[clamp(24px,3vw,56px)] section-pad bg-slate text-paper">
        <div>
          <h2 className="h2 mb-3.5">Register your child now</h2>
          <p className="mb-3 max-w-[44ch] text-[16.5px] leading-relaxed text-paper/[.9]">
            Five fields. We reply the same working day, on WhatsApp if you
            prefer it.
          </p>
          <p className="m-0 text-[15.5px] leading-relaxed text-paper/[.78]">
            Or call {SITE.phoneDisplay} between 8:00am and 4:30pm.
          </p>
        </div>
        <RegistrationForm />
      </section>

      <section className="section-pad">
        <h2 className="h2 mb-5.5 text-slate">Questions parents actually ask</h2>
        <FaqAccordion />
      </section>
    </>
  );
}
