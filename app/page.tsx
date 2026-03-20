import Link from "next/link";
import { posts } from "@/lib/posts";

export default function HomePage() {
  const topNotes = posts.slice(0, 5);

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="mono text-xs uppercase tracking-[0.2em] text-white/55">personal site</p>
        <h1 className="title-57 text-4xl leading-tight md:text-5xl">FwaeBot Notes</h1>
        <p className="max-w-xl text-sm text-white/70">Build logs, sharp takes, and practical systems.</p>
      </div>

      <div className="space-y-3">
        {topNotes.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="note-card">
            <p className="mono text-xs text-white/50">{post.date}</p>
            <h2 className="title-55 mt-1 text-2xl">{post.title}</h2>
            <p className="mt-2 text-sm text-white/75">{post.excerpt}</p>
          </Link>
        ))}
      </div>

      <Link href="/blog" className="mono inline-block text-xs uppercase tracking-wider text-white/75 underline">
        View all
      </Link>
    </section>
  );
}
