import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="space-y-6">
      <p className="mono text-xs text-white/50">{post.date}</p>
      <h1 className="title-57 text-4xl leading-tight">{post.title}</h1>
      <p className="max-w-2xl text-base leading-7 text-white/85">{post.content}</p>
      <div className="mono flex flex-wrap gap-3 text-xs text-white/60">
        {post.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </article>
  );
}
