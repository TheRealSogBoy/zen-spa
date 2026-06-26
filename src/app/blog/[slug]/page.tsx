import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllSlugs, getPostBySlug, getAllPosts, BlogSection } from '@/lib/posts';
import { BlogWhatsAppCTA } from '@/components/BlogWhatsAppCTA';
import type { Metadata } from 'next';

// KaTeX-like inline rendering via text substitution (no external dep)
// We render LaTeX-marked text as styled spans via a simple parse function.
function renderInlineMath(text: string): string {
  // Replace $...$ with styled span (will be rendered via dangerouslySetInnerHTML safely in the component)
  return text
    .replace(/\$([^$]+)\$/g, '<span class="font-mono text-zen-wine/80 bg-zen-wine/8 px-1 rounded text-sm">$1</span>');
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className="font-sans text-base leading-relaxed text-zen-wine/80 mb-5"
          dangerouslySetInnerHTML={{ __html: renderInlineMath(section.content ?? '') }}
        />
      );

    case 'heading':
      return (
        <h2
          key={index}
          className="font-serif text-2xl md:text-3xl text-zen-wine mt-10 mb-4 leading-snug"
        >
          {section.content}
        </h2>
      );

    case 'subheading':
      return (
        <h3
          key={index}
          className="font-serif text-xl text-zen-wine mt-7 mb-3"
        >
          {section.content}
        </h3>
      );

    case 'list':
      return (
        <ul key={index} className="space-y-3 mb-6 pl-0">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zen-wine/50" />
              <span
                className="font-sans text-base text-zen-wine/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderInlineMath(item) }}
              />
            </li>
          ))}
        </ul>
      );

    case 'highlight':
      return (
        <blockquote
          key={index}
          className="my-8 border-l-4 border-zen-wine pl-6 pr-4 py-4 bg-zen-wine/5 rounded-r-xl italic font-serif text-zen-wine text-lg leading-relaxed"
        >
          {section.content}
        </blockquote>
      );

    case 'cta-inline':
      return (
        <div key={index} className="my-6 flex items-center gap-3 p-4 bg-zen-wine/5 rounded-xl border border-zen-wine/15">
          <span className="text-zen-wine/50 text-xl flex-shrink-0">→</span>
          <p className="text-sm text-zen-wine/70 flex-1">{section.content}</p>
          {section.linkHref && (
            <Link
              href={section.linkHref}
              id={`inline-cta-${index}`}
              className="flex-shrink-0 text-xs font-semibold text-zen-wine bg-zen-wine/10 hover:bg-zen-wine hover:text-white px-4 py-2 rounded-full transition-all duration-200"
            >
              {section.linkText}
            </Link>
          )}
        </div>
      );

    case 'spa-image':
      return (
        <div key={index} className="my-8 rounded-2xl overflow-hidden">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={section.imageUrl ?? ''}
              alt={section.imageAlt ?? ''}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              loading="lazy"
            />
          </div>
          {section.imageAlt && (
            <p className="text-center text-xs text-zen-wine/50 mt-2 font-sans italic">
              {section.imageAlt}
            </p>
          )}
        </div>
      );

    case 'comparison-table':
      return (
        <div key={index} className="my-8 overflow-x-auto rounded-xl border border-zen-wine/15">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zen-wine text-zen-beige">
                <th className="text-left px-5 py-3 font-semibold font-sans">Factor</th>
                <th className="text-center px-5 py-3 font-semibold font-sans">Viaje a Cali / Pereira</th>
                <th className="text-center px-5 py-3 font-semibold font-sans">Zen Spa Bienestar</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tiempo de tránsito', '4 a 5 horas en carretera', '15 a 30 minutos local'],
                ['Gasto logístico', 'Gasolina, peajes y parqueadero', '$0 COP en costos de viaje'],
                ['Fatiga posterior', 'Alta — tensión muscular residual', 'Nula — retorno al hogar inmediato'],
                ['Privacidad', 'Salas de espera compartidas', 'Santuario cerrado exclusivo'],
              ].map(([factor, capital, local], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zen-beige/30'}>
                  <td className="px-5 py-3 font-medium text-zen-wine font-sans">{factor}</td>
                  <td className="px-5 py-3 text-center text-zen-wine/70 font-sans">{capital}</td>
                  <td className="px-5 py-3 text-center text-zen-wine font-semibold font-sans">✓ {local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  const serviceLabel = {
    '/faciales': 'Ver tratamientos faciales →',
    '/experiencias': 'Ver experiencias de pareja →',
    '/masajes': 'Ver catálogo de masajes →',
    '/bronceado': 'Ver planes de bronceo →',
    '/minidivas': 'Ver planes Mini Divas →',
  }[post.serviceUrl] ?? 'Ver el servicio →';

  return (
    <main className="relative bg-zen-beige min-h-screen selection:bg-zen-pink selection:text-white">
      {/* Hero Cover */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/80 via-zen-wine/30 to-transparent" />

        {/* Back link */}
        <div className="absolute top-6 left-6">
          <Link
            href="/blog"
            id="back-to-blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors backdrop-blur-sm bg-black/10 px-3 py-1.5 rounded-full"
          >
            ← Blog
          </Link>
        </div>

        {/* Category + read time */}
        <div className="absolute bottom-8 left-6 right-6 max-w-3xl mx-auto">
          <span className="inline-block bg-zen-wine/80 text-zen-beige text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-2 drop-shadow-md">
            {post.title}
          </h1>
          <p className="text-white/70 text-sm font-sans">{post.readTime} minutos de lectura</p>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Excerpt lead */}
        <p className="font-serif text-lg md:text-xl text-zen-wine/70 italic leading-relaxed mb-8 pb-8 border-b border-zen-wine/15">
          {post.excerpt}
        </p>

        {/* Sections */}
        {post.content.map((section, i) => renderSection(section, i))}

        {/* WhatsApp CTA */}
        <BlogWhatsAppCTA
          whatsappMsg={post.whatsappMsg}
          serviceUrl={post.serviceUrl}
          serviceLabel={serviceLabel}
        />

        {/* Closing location info */}
        <div className="mt-8 p-5 bg-zen-wine/5 rounded-xl border border-zen-wine/10 flex flex-col sm:flex-row gap-4 items-start">
          <span className="text-2xl flex-shrink-0">📍</span>
          <div>
            <p className="font-semibold text-zen-wine text-sm mb-0.5">Encuéntranos en Roldanillo</p>
            <p className="text-zen-wine/65 text-sm font-sans">
              Calle 8 #8-31, Peatonal Museo Rayo (Calle de los Poetas) · WhatsApp:{' '}
              <a href="https://wa.me/573156881765" className="underline hover:text-zen-wine">+57 315 688 1765</a>
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {allPosts.length > 0 && (
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl text-zen-wine mb-8 text-center">También puede interesarte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  id={`related-${related.slug}`}
                  className="group block rounded-xl overflow-hidden border border-zen-beige/60 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={related.coverImage}
                      alt={related.coverAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-400"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-zen-wine/20" />
                  </div>
                  <div className="p-5 bg-zen-beige/30">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zen-wine/50 mb-1">{related.category}</p>
                    <h3 className="font-serif text-base text-zen-wine leading-snug group-hover:text-zen-pink transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
