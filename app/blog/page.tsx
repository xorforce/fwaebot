import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogIndex() {
  return (
    <section className="space-y-6">
      <h1 className="font-display text-4xl">All posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-base-300/70 bg-base-200/30 p-5">
            <p className="text-xs uppercase tracking-wider text-base-content/60">{post.date}</p>
            <h2 className="mt-1 font-display text-2xl">{post.title}</h2>
            <p className="mt-2 text-base-content/80">{post.excerpt}</p>
            <div className="mt-3 flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="badge badge-outline">#{tag}</span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-primary underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
