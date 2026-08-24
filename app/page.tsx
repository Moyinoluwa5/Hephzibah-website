import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { SITE } from "@/lib/site";

const NEWS = [
  {
    date: "14 Sep 2026",
    title: "Resumption day",
    tint: "bg-sky-tint",
    fg: "text-sky-press",
  },
];

const DAY_RAIL = [
  {
    time: "7:30",
    title: "Arrival, at the child’s pace",
    body: "Children hang their own bags, change into indoor shoes and greet the guide by name.",
  },
  {
    time: "8:00",
    title: "The three-hour work cycle",
    body: "Children choose their work and stay with it. No bell, no rotation, no interruption for the whole morning.",
  },
  {
    time: "11:15",
    title: "Outdoor work",
    body: "Garden beds, sweeping the veranda, water play. Elementary children take measurements outside.",
  },
  {
    time: "12:15",
    title: "Lunch, served by the children",
    body: "Cooked on site. Older children set tables, serve, and wash up afterwards.",
  },
  {
    time: "1:30",
    title: "Practical life and afternoon work",
    body: "Polishing, sewing, food preparation, music. Toddlers rest.",
  },
  {
    time: "3:00",
    title: "Dismissal",
    body: "Handover at the gate, one class at a time, with a word about the day.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[clamp(470px,44vw,660px)] items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder
            alt="Hero: one four-year-old at eye level, absorbed in work on a floor mat. Warm daylight, no adult in frame."
            className="h-full w-full"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(30,44,54,.9) 0%, rgba(30,44,54,.72) 40%, rgba(30,44,54,.2) 80%, rgba(30,44,54,.06) 100%)",
          }}
        />
        <div className="relative max-w-[min(100%,780px)] animate-set-in px-[clamp(20px,4vw,64px)] py-[clamp(34px,5vw,88px)] text-paper">
          <p className="eyebrow mb-[clamp(12px,1.4vw,20px)] text-pink">
            Montessori, primary and secondary · Ikorodu, Lagos
          </p>
          <h1 className="h-display mb-[clamp(12px,1.4vw,20px)]">
            Every child here is already a{" "}
            <span className="text-sky-pale">sovereign</span>.
          </h1>
          <p className="mb-[clamp(20px,2.4vw,32px)] max-w-[48ch] text-[clamp(16px,1.35vw,20px)] leading-relaxed text-paper/[.94]">
            We don&rsquo;t make children sit still. We prepare a room so good
            they choose to concentrate — and then we get out of the way.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="btn btn-primary-hero bg-sky text-white"
            >
              Register your child now →
            </Link>
            <Link href="/about" className="btn btn-outline-light">
              See our programmes
            </Link>
          </div>
        </div>
      </section>

      {/* Motto band */}
      <section className="flex flex-wrap items-baseline gap-x-4.5 gap-y-1.5 bg-orange-band px-[clamp(20px,4vw,64px)] py-[clamp(18px,2vw,26px)]">
        <p className="m-0 font-serif text-[clamp(20px,2vw,27px)] italic leading-snug text-orange-deep">
          MOTTO: THE CHOSEN GENERATION
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;WHERE LEADERS ARE MADE
        </p>
        <p className="eyebrow m-0 ml-auto text-orange-deep">Our motto</p>
      </section>

      {/* Trust strip */}
      <section className="border-b border-ink/[.14] px-[clamp(20px,4vw,64px)] py-[clamp(20px,2.4vw,30px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[clamp(12px,1.8vw,26px)]">
          <p className="m-0 text-[15.5px] leading-snug">{SITE.ratio}</p>
          <p className="m-0 border-l border-ink/[.18] pl-[clamp(12px,1.8vw,26px)] text-[15.5px] leading-snug">
            {SITE.staffing}
          </p>
        </div>
      </section>

      {/* Head of School */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-[clamp(24px,3.4vw,60px)] section-pad">
        <div className="overflow-hidden rounded-panel bg-sky-tint">
          <ImagePlaceholder
            alt="Miss Olatunji Oluwatoyin Elizabeth on campus, warm daylight, not a studio backdrop."
            ratio="4 / 5"
          />
        </div>
        <div>
          <p className="eyebrow mb-2.5 text-sky">Head of School</p>
          <p className="pull-quote mb-4 text-slate">
            Parents usually ask me the same question on a tour: &ldquo;But will
            she be able to sit for common entrance?&rdquo; The answer is yes,
            and here is why that is the least interesting thing about her.
          </p>
          <p className="body-copy mb-3.5 max-w-[60ch] text-ink-soft">
            A child who has chosen her own work every morning for three years
            knows how to sit with a hard thing until it opens. Examinations are
            the easy part of that. What takes longer to build is the appetite.
          </p>
          <p className="body-copy mb-5.5 max-w-[60ch] text-ink-soft">
            Come on any school morning. Stand at the back of a classroom for
            twenty minutes and watch who is doing the work. It will not be the
            adults.
          </p>
          <p className="m-0 text-[15px] leading-snug">
            <span className="block font-display text-[23px] font-semibold text-slate">
              Miss Olatunji Oluwatoyin Elizabeth
            </span>
            Head of School
          </p>
        </div>
      </section>

      {/* Parents' words */}
      <section className="section-pad bg-ash">
        <TestimonialCarousel />
      </section>

      {/* Admissions band */}
      <section className="section-pad bg-sky-tint">
        <div className="max-w-[52ch]">
          <p className="eyebrow mb-2.5 text-sky">Admissions 2026/2027</p>
          <h2 className="h2 mb-3.5 text-slate">Admission in progress</h2>
          <p className="body-copy mb-5.5 text-ink-soft">
            Register your child with one short form, then come and see the
            school on any school morning. About two weeks from first message to
            a place held in your child&rsquo;s name.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/admissions" className="btn btn-primary">
              Register your child now
            </Link>
            <Link href="/prospectus" className="btn btn-outline-dark">
              Download the prospectus
            </Link>
          </div>
        </div>
      </section>

      {/* News and events */}
      <section className="section-pad">
        <h2 className="h2 mb-5.5 text-slate">News and events</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(16px,2.2vw,30px)]">
          {NEWS.map((n) => (
            <Link key={n.title} href="/news" className="card-news">
              <span className={`badge ${n.tint} ${n.fg}`}>{n.date}</span>
              <span className="font-display text-[22px] font-semibold leading-snug text-slate">
                {n.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Visit us */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-[clamp(24px,3vw,56px)] section-pad bg-slate text-paper">
        <div>
          <h2 className="h2 mb-4.5">Visit us</h2>
          <p className="body-copy mb-4.5">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.line3}
          </p>
          <p className="mb-4.5 text-base leading-relaxed text-paper/[.86]">
            {SITE.hours}
            <br />
            {SITE.visitHours}
          </p>
          <p className="mb-5.5 max-w-[46ch] text-[15.5px] leading-relaxed text-paper/[.8]">
            We do not run school buses. Drop-off is at the gate from 7:00am, and
            a staff member on the crescent until 8:00am.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/2348130247140"
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
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="overflow-hidden rounded-panel bg-paper/10">
            <ImagePlaceholder
              alt="The actual gate and building on Memunat Omotayo Oluwa Crescent, so a parent recognises it on arrival."
              ratio="3 / 2"
              className="bg-transparent text-paper/60"
            />
          </div>
          <div className="flex aspect-video items-end rounded-panel border border-paper/[.28] bg-paper/[.08] p-4">
            <p className="m-0 text-[13.5px] text-paper/[.85]">
              Map — Erunwen, Ikorodu, pinned at the gate. Static tiles, loaded
              on tap.
            </p>
          </div>
        </div>
      </section>

      {/* A day at Hephzibah
      <section className="section-pad bg-ash">
        <h2 className="h2 mb-6.5 text-slate">
          A day at Hephzibah Kings and Queens Montessori School
        </h2>
        <ol className="m-0 flex list-none flex-col p-0">
          {DAY_RAIL.map((d) => (
            <li
              key={d.time}
              className="grid grid-cols-[56px_1fr] gap-[clamp(14px,2vw,32px)] border-t border-ink/[.16] py-[clamp(14px,1.6vw,22px)] sm:grid-cols-[76px_1fr]"
            >
              <span className="tnum font-display text-xl font-semibold text-sky">
                {d.time}
              </span>
              <span>
                <span className="mb-1 block font-display text-xl font-semibold text-slate">
                  {d.title}
                </span>
                <span className="block max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
                  {d.body}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </section> */}
    </>
  );
}
