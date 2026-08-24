import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad bg-sky-tint">
      <p className="eyebrow mb-2.5 text-sky">404</p>
      <h1 className="h1 mb-4 text-slate">Page not found</h1>
      <p className="body-copy mb-6.5 max-w-[56ch] text-ink-soft">
        That page doesn&rsquo;t exist. Try the homepage, or register your child directly.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/admissions" className="btn btn-outline-dark">
          Register your child now
        </Link>
      </div>
    </section>
  );
}
