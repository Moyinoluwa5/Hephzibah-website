"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Will my child be ready for common entrance?",
    a: "Yes. Children sit Cambridge Checkpoint here and write common entrance in Primary 5 or 6, and our own secondary wing holds places for children continuing with us.",
  },
  {
    q: "Do you teach in English?",
    a: "Yes, all instruction is in English. Yoruba is taught three times a week, and French from Lower Elementary.",
  },
  {
    q: "Is there homework?",
    a: "Not in the Montessori section. From Lower Elementary there is reading every night and one piece of research work a week.",
  },
  {
    q: "Do you run a school bus?",
    a: "No. Drop-off and pick-up are at the gate, with a staff member on the crescent until 8:00am and again from 2:45pm.",
  },
  {
    q: "Can we pay per term?",
    a: "Yes, fees are billed per term, and the admission fee is one-off. Ask us for the current schedule when you register.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <div className="flex flex-col">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={f.q} className="border-t border-ink/[.16]">
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex min-h-[44px] w-full items-baseline gap-4 py-4.5 text-left font-display text-xl font-semibold text-slate"
            >
              <span className="flex-1">{f.q}</span>
              <span className="text-2xl leading-none text-sky">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="body-copy m-0 max-w-[64ch] pb-5 text-ink-soft"
              >
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
