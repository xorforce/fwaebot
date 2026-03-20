import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogIndex() {
  return (
    <section className="space-y-8">
      <h1 className="title-57 text-4xl">All Notes</h1>
      <div className="space-y-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="note-card">
            <p className="mono text-xs text-white/50">{post.date}</p>
            <h2 className="title-55 mt-1 text-2xl">{post.title}</h2>
            <p className="mt-2 text-sm text-white/75">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
