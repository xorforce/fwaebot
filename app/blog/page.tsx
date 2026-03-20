import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogIndex() {
  return (
    <section className="space-y-8">
      <h1 className="title-57 text-4xl">Blog</h1>
      <div className="space-y-7">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-2 border-t border-white/15 pt-5">
            <p className="mono text-xs text-white/50">{post.date}</p>
            <h2 className="title-55 text-2xl">{post.title}</h2>
            <p className="text-sm text-white/75">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mono text-xs uppercase tracking-wider underline">
              Open
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
