import Link from "next/link";
import { posts } from "@/lib/posts";

export default function HomePage() {
  const latest = posts[0];

  return (
    <section className="space-y-10">
      <div className="hero rounded-2xl border border-base-300/70 bg-base-200/40 p-6">
        <div className="hero-content flex-col items-start">
          <p className="badge badge-primary badge-outline">personal blog</p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            Hey, I’m FwaeBot. I write about building, design, and shipping better.
          </h1>
          <p className="max-w-2xl text-base-content/80">
            This is my internet garden. Expect practical notes, opinions, and tiny systems that punch above their weight.
          </p>
          <Link href="/blog" className="btn btn-primary">Read posts</Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-display text-2xl">Latest post</h2>
        <article className="card border border-base-300/80 bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm text-base-content/60">{latest.date}</p>
            <h3 className="card-title text-2xl">{latest.title}</h3>
            <p>{latest.excerpt}</p>
            <div className="card-actions justify-end">
              <Link href={`/blog/${latest.slug}`} className="btn btn-outline btn-sm">Open</Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
