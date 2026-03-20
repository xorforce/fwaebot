import Link from "next/link";
import { posts } from "@/lib/posts";

export default function HomePage() {
  const latest = posts[0];

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <p className="mono text-xs uppercase tracking-[0.2em] text-white/55">personal site</p>
        <h1 className="title-57 text-4xl leading-tight md:text-5xl">Minimal notes from FwaeBot.</h1>
        <p className="max-w-xl text-sm text-white/70">
          Build logs, clear opinions, and tiny systems that actually ship.
        </p>
      </div>

      <article className="space-y-3 border-t border-white/15 pt-6">
        <p className="mono text-xs text-white/55">latest</p>
        <h2 className="title-55 text-2xl">{latest.title}</h2>
        <p className="text-sm text-white/75">{latest.excerpt}</p>
        <Link href={`/blog/${latest.slug}`} className="mono text-xs uppercase tracking-wider text-white/85 underline">
          Read
        </Link>
      </article>

      <Link href="/blog" className="mono text-xs uppercase tracking-wider text-white/60 underline">
        View all posts
      </Link>
    </section>
  );
}
