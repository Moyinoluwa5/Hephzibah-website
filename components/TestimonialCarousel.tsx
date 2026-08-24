"use client";

import { useRef } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type Quote = {
  text: string;
  name: string;
  meta: string;
  tint: string;
  rule: string;
};

const QUOTES: Quote[] = [
  {
    text: "“I love the school. I came for the name and stayed for the mornings. Nobody shouts here, and my son now sets the table at home without being asked.”",
    name: "Adamu",
    meta: "Parent, Montessori · 4 years at the school",
    tint: "bg-sky-tint",
    rule: "border-sky-light",
  },
  {
    text: "“Our daughter moved from a traditional school at seven. It took a term for her to stop asking for permission to think.”",
    name: "Mrs James",
    meta: "Parent, Lower Elementary · 3 years at the school",
    tint: "bg-pink-tint",
    rule: "border-pink",
  },
  {
    text: "“The fees are real money. What I can point to for it is a child who reads for pleasure and can hold a conversation with an adult.”",
    name: "Mariam Abdulgafar",
    meta: "Parent, Secondary · 7 years at the school",
    tint: "bg-orange-tint",
    rule: "border-orange",
  },
];

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByOne = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-4.5 flex flex-wrap items-baseline gap-3 sm:mb-6.5">
        <h2 className="h2 text-slate">Parents&rsquo; words</h2>
        <div className="ml-auto flex gap-2 md:hidden">
          <button
            type="button"
            onClick={() => scrollByOne(-1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/25 bg-paper text-base"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByOne(1)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/25 bg-paper text-base"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4.5 overflow-x-auto pb-1 md:grid md:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] md:gap-6.5 md:overflow-visible"
      >
        {QUOTES.map((q) => (
          <figure
            key={q.name}
            className={`flex w-[85%] flex-none snap-start flex-col gap-4 rounded-card border-t-4 p-5.5 md:w-auto ${q.tint} ${q.rule}`}
          >
            <blockquote className="pull-quote m-0 text-slate">
              {q.text}
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <ImagePlaceholder
                alt={`Portrait of ${q.name}`}
                ratio="1 / 1"
                shape="circle"
                className="h-[46px] w-[46px] flex-none"
              />
              <span className="text-sm leading-snug">
                <span className="block font-bold">{q.name}</span>
                <span className="text-ink-muted">{q.meta}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
