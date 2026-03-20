import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-base-300/70 bg-base-100/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-wide">
          fwaebot<span className="text-primary">.blog</span>
        </Link>
        <div className="flex gap-3 text-sm">
          <Link href="/" className="btn btn-ghost btn-sm">Home</Link>
          <Link href="/blog" className="btn btn-ghost btn-sm">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
