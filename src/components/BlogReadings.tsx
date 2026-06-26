import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedPosts } from '@/lib/posts';

export function BlogReadings() {
  const featured = getFeaturedPosts();

  return (
    <section className="py-20 px-6 bg-white/70 border-t border-zen-beige/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-zen-wine/60 uppercase mb-3">
            Nuestro Blog
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-zen-wine leading-tight mb-3">
            Lecturas de Bienestar
          </h2>
          <p className="font-sans text-sm text-zen-wine/60 max-w-md mx-auto leading-relaxed">
            Artículos científicos pero accesibles sobre tu piel, tus relaciones y tu recuperación física en el norte del Valle del Cauca.
          </p>
        </div>

        {/* 3-column Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((post, idx) => (
            <article
              key={post.slug}
              className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                idx === 0 ? 'md:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/70 via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {post.category}
                </span>

                {/* Read time */}
                <span className="absolute bottom-3 right-3 bg-black/30 backdrop-blur-sm text-white/80 text-[9px] font-medium px-2 py-0.5 rounded-full">
                  {post.readTime} min
                </span>
              </div>

              {/* Content */}
              <div className="p-5 bg-zen-beige/20 border border-zen-beige/60 rounded-b-2xl">
                <h3 className="font-serif text-lg text-zen-wine leading-snug mb-2 group-hover:text-zen-pink transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-xs text-zen-wine/60 leading-relaxed font-sans mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  id={`home-blog-${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zen-wine hover:text-zen-pink transition-colors"
                >
                  Leer artículo
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Link to full blog */}
        <div className="text-center">
          <Link
            href="/blog"
            id="home-blog-ver-todos"
            className="inline-flex items-center gap-2 border border-zen-wine/30 text-zen-wine hover:bg-zen-wine hover:text-white px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
          >
            Ver todos los artículos →
          </Link>
        </div>
      </div>
    </section>
  );
}
