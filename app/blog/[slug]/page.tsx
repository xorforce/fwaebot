import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-sm text-base-content/60">{post.date}</p>
      <h1 className="font-display text-4xl">{post.title}</h1>
      <p>{post.content}</p>
      <div className="mt-6 flex gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="badge badge-outline not-prose">#{tag}</span>
        ))}
      </div>
    </article>
  );
}
