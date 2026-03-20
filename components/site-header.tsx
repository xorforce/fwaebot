import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/15">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="title-55 text-lg uppercase">
          fwaebot
        </Link>
        <div className="mono flex gap-6 text-xs uppercase tracking-wide text-white/70">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
