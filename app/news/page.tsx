import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News and events",
  description: "News and events at Hephzibah Kings and Queens Montessori School.",
};

const NEWS = [
  {
    date: "12 Sep 2026",
    title: "Resumption day",
    tint: "bg-sky-tint",
    fg: "text-sky-press",
  },
  {
    date: "24 Sep 2026",
    title: "Parent evening: reading without worksheets",
    tint: "bg-pink-tint",
    fg: "text-pink-deep",
  },
  {
    date: "08 Oct 2026",
    title: "Upper Elementary going out: Lekki Conservation Centre",
    tint: "bg-orange-tint",
    fg: "text-orange-deep",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="section-pad bg-sky-tint pb-[clamp(28px,3vw,48px)]">
        <p className="eyebrow mb-2.5 text-sky">What&rsquo;s on</p>
        <h1 className="h1 text-slate">News and events</h1>
      </section>

      <section className="section-pad">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(16px,2.2vw,30px)]">
          {NEWS.map((n) => (
            <div key={n.title} className="card-news">
              <span className={`badge ${n.tint} ${n.fg}`}>{n.date}</span>
              <span className="font-display text-[22px] font-semibold leading-snug text-slate">
                {n.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
