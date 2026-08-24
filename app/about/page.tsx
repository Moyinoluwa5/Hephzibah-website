import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE.name} — Montessori, Primary and Secondary in Erunwen, Ikorodu, Lagos.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-sky-tint pb-[clamp(28px,3vw,48px)]">
        <p className="eyebrow mb-2.5 text-sky">About us</p>
        <h1 className="h1 mb-4 text-slate">{SITE.name}</h1>
        <p className="m-0 font-display text-[clamp(18px,1.8vw,24px)] font-semibold leading-snug text-orange-deep">
          {SITE.motto}
        </p>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-[clamp(24px,3vw,56px)] section-pad">
        <p className="body-copy m-0 text-[clamp(16px,1.35vw,18.5px)] leading-loose text-ink-soft">
          Hephzibah Kings and Queens Montessori School is located on two acres in Erunwen,
          Ikorodu, Lagos, Nigeria. With our Montessori, Primary and Secondary sections, the school
          caters to children between the ages of 18 months and 18 years. Well qualified and
          experienced staff create a caring, safe and purposeful environment where individual
          talents are identified, encouraged and developed. We work closely with parents to
          foster self-discipline, responsibility, confidence and an enthusiasm for learning. We
          take pride in our diverse community and ensure that our children understand the value
          of growing and learning together. We also take great care to ensure that our curriculum
          and facilities are exciting, challenging and innovative.
        </p>
        <div className="overflow-hidden rounded-panel bg-sky-tint">
          <ImagePlaceholder
            alt="Children at work on the Erunwen campus, photographed on a normal school morning."
            ratio="4 / 3"
          />
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4.5 section-pad bg-ash">
        <div className="rounded-panel border-t-4 border-sky-light bg-paper p-5.5">
          <h2 className="h2 mb-3 !text-[clamp(24px,2.6vw,34px)] text-slate">Our mission</h2>
          <p className="m-0 text-[16.5px] leading-relaxed text-ink-soft">
            To provide each student with a diverse education in a safe, supportive environment
            that promotes self-discipline, motivation and excellence in learning, assisting the
            students in developing skills to become independent adults who will succeed and
            contribute responsibly in the global world.
          </p>
        </div>
        <div className="rounded-panel border-t-4 border-pink bg-paper p-5.5">
          <h2 className="h2 mb-3 !text-[clamp(24px,2.6vw,34px)] text-slate">Our vision</h2>
          <p className="m-0 text-[16.5px] leading-relaxed text-ink-soft">
            To graduate responsible and self-sufficient citizens with strong critical thinking and
            academic skills; to provide a dynamic, comprehensive curriculum delivered in
            partnership with the community, family, and qualified staff, in a safe and caring
            environment.
          </p>
        </div>
      </section>
    </>
  );
}
