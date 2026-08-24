import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export default function StubPage({ eyebrow, title, body }: Props) {
  return (
    <section className="section-pad bg-sky-tint">
      <p className="eyebrow mb-2.5 text-sky">{eyebrow}</p>
      <h1 className="h1 mb-4 text-slate">{title}</h1>
      <p className="body-copy max-w-[56ch] text-ink-soft">{body}</p>
      <div className="mt-6.5 flex flex-wrap gap-3">
        <Link href="/admissions" className="btn btn-primary">
          Register your child now
        </Link>
        <Link href="/" className="btn btn-outline-dark">
          Back to home
        </Link>
      </div>
    </section>
  );
}
