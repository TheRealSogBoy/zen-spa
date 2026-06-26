import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog de Bienestar | Guías y Lecturas',
  description: 'Artículos sobre cuidado de la piel, rituales de pareja, spa para niñas y recuperación deportiva en Roldanillo y el norte del Valle del Cauca.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <main className="relative min-h-screen bg-zen-beige selection:bg-zen-pink selection:text-white">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zen-wine/8 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest text-zen-wine uppercase mb-4 opacity-70">
            Lecturas de Bienestar
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-zen-wine leading-tight mb-4">
            El Blog de Zen Spa Bienestar
          </h1>
          <p className="font-sans text-base md:text-lg text-zen-wine/70 leading-relaxed max-w-xl mx-auto">
            Ciencia, autocuidado y bienestar para el norte del Valle del Cauca. Artículos escritos por especialistas para ayudarte a tomar mejores decisiones sobre tu piel, tu cuerpo y tu relación.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full bg-zen-wine/10 text-zen-wine text-xs font-medium tracking-wide border border-zen-wine/15"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zen-beige/60 flex flex-col"
            >
              {/* Cover Image */}
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative h-48">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-zen-wine/90 text-zen-beige text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-serif text-xl text-zen-wine leading-snug mb-3 group-hover:text-zen-pink transition-colors duration-200">
                    {post.title}
                  </h2>
                </Link>
                <p className="font-sans text-sm text-zen-wine/65 leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zen-beige/60">
                  <span className="text-xs text-zen-wine/50 font-medium">
                    {post.readTime} min de lectura
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-zen-wine underline-offset-2 hover:underline hover:text-zen-pink transition-colors"
                  >
                    Leer artículo →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
