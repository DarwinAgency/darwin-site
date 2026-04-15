// ─────────────────────────────────────────────────────────
// FICHIER : app/blog/[slug]/page.tsx
// RÔLE    : Template article de blog
// DÉPEND  : app/data/blog.ts
// ─────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ZoomImage from '../../components/ZoomImage'
import { BLOG_ARTICLES, getArticleBySlug, formatDate } from '../../data/blog'
import NewsletterSidebar from '../../components/NewsletterSidebar'
import { articleJsonLd } from '../../lib/jsonld'
import { ogDefaults } from '../../lib/og'

type Props = { params: Promise<{ slug: string }> }

// ─── STATIC PARAMS ──────────────────────────────────────

export function generateStaticParams() {
  return BLOG_ARTICLES.map(a => ({ slug: a.slug }))
}

// ─── METADATA ───────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} | DARWIN`,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      ...ogDefaults,
      title: article.title,
      description: article.excerpt,
      url: `https://darwin-agency.fr/blog/${article.slug}`,
      images: [{ url: article.heroImg, width: 1200, height: 630, alt: article.title }],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
  }
}

// ─── PAGE ───────────────────────────────────────────────

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const relatedArticles = BLOG_ARTICLES.filter(
    a => a.slug !== article.slug && (
      article.relatedSlugs?.includes(a.slug) ||
      a.categories.some(c => article.categories.includes(c))
    )
  ).slice(0, 2)

  const jsonLd = articleJsonLd({
    headline: article.title,
    description: article.excerpt,
    url: `/blog/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    authorName: article.author.name,
    imageUrl: article.heroImg,
  })

  return (
    <main style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '48px 24px 0', borderBottom: '1px solid #ebebeb' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>

          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', color: '#aaa' }}>
            <Link href="/" style={{ color: '#aaa', textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: '#aaa', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            {article.categories.map((cat, i) => (
              <span key={cat}>
                <Link href={`/blog?cat=${cat.toLowerCase()}`} style={{ color: '#aaa', textDecoration: 'none' }}>{cat}</Link>
                {i < article.categories.length - 1 && <span style={{ marginLeft: 8 }}>·</span>}
              </span>
            ))}
          </nav>

          {/* Badges catégories */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            {article.categories.map(cat => (
              <span key={cat} style={{
                display: 'inline-block',
                background: '#FFF127',
                color: '#0a0a0a',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '5px 14px',
              }}>
                {cat}
              </span>
            ))}
          </div>

          {/* Titre */}
          <h1 className="font-anton" style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            textTransform: 'uppercase',
            lineHeight: 1.0,
            color: '#0a0a0a',
            maxWidth: 860,
            margin: '0 0 24px',
          }}>
            {article.title}
          </h1>

          {/* Excerpt */}
          <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.75, maxWidth: 720, marginBottom: 32 }}>
            {article.excerpt}
          </p>

          {/* Meta : auteur + date + temps de lecture + partage */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, paddingBottom: 32 }}>

            {/* Auteur + date + lecture */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                overflow: 'hidden', background: '#f0f0f0', flexShrink: 0,
              }}>
                <img
                  src={article.author.photo}
                  alt={article.author.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0a0a0a', margin: 0, lineHeight: 1.3 }}>
                  {article.author.name}
                </p>
                <p style={{ fontSize: '0.72rem', color: '#aaa', margin: '2px 0 0', fontWeight: 500 }}>
                  {article.author.role}
                </p>
              </div>
              <span style={{ width: 1, height: 32, background: '#eee', margin: '0 8px' }} />
              <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 500 }}>
                {formatDate(article.date)}
              </span>
              <span style={{ width: 1, height: 32, background: '#eee', margin: '0 8px' }} />
              <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 500 }}>
                {article.readTime} min de lecture
              </span>
            </div>

            {/* Partage social */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginRight: 8 }}>
                Partager
              </span>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.darwin-agency.fr/blog/${article.slug}`)}&title=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={socialBtnStyle}
                aria-label="Partager sur LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://www.darwin-agency.fr/blog/${article.slug}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={socialBtnStyle}
                aria-label="Partager sur X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.213 5.573L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                </svg>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`https://www.darwin-agency.fr/blog/${article.slug}`)}`}
                style={socialBtnStyle}
                aria-label="Partager par email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE HERO — absente sur la single page, utilisée pour OG/listing ── */}

      {/* ── CORPS — 2 colonnes ────────────────────────────── */}
      <div className="rsp-article-body" style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px 96px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 64, alignItems: 'start' }}>

        {/* ── COLONNE PRINCIPALE ── */}
        <article>

          {/* Table des matières */}
          <nav style={{
            border: '1px solid #ebebeb',
            borderLeft: '4px solid #FFF127',
            padding: '28px 32px',
            marginBottom: 56,
            background: '#fafafa',
          }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
              Sommaire
            </p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {article.sections.map((section) => (
                <li key={section.number} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span className="font-anton" style={{ fontSize: '1rem', color: '#0a0a0a', flexShrink: 0 }}>
                    {section.number}.
                  </span>
                  <a
                    href={`#section-${section.number}`}
                    style={{ fontSize: '0.9rem', color: '#0a0a0a', textDecoration: 'none', fontWeight: 600, lineHeight: 1.4 }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          {article.sections.map((section) => (
            <section key={section.number} id={`section-${section.number}`} style={{ marginBottom: 56 }}>

              {/* Numéro + titre */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28, borderBottom: '2px solid #ebebeb', paddingBottom: 20 }}>
                <span className="font-anton" style={{
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: 'transparent',
                  WebkitTextStroke: '2px #0a0a0a',
                  flexShrink: 0,
                }}>
                  {section.number}
                </span>
                <h2 className="font-anton" style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  textTransform: 'uppercase',
                  color: '#0a0a0a',
                  lineHeight: 1.05,
                  margin: 0,
                }}>
                  {section.title}
                </h2>
              </div>

              {/* Blocs de contenu */}
              {section.blocks.map((block, i) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, color: '#333', marginBottom: 20 }}>
                      {block.text}
                    </p>
                  )
                }
                if (block.type === 'subtitle') {
                  return (
                    <h3 key={i} className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '28px 0 16px' }}>
                      {block.text}
                    </h3>
                  )
                }
                if (block.type === 'list') {
                  return (
                    <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {block.items.map((item, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.95rem', lineHeight: 1.65, color: '#333' }}>
                          <span style={{ width: 6, height: 6, background: '#FFF127', border: '1.5px solid #0a0a0a', borderRadius: '50%', flexShrink: 0, marginTop: 8 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (block.type === 'callout') {
                  return (
                    <div key={i} style={{
                      background: '#FFF127',
                      borderLeft: '4px solid #0a0a0a',
                      padding: '24px 28px',
                      margin: '32px 0',
                    }}>
                      {block.title && (
                        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 10 }}>
                          {block.title}
                        </p>
                      )}
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: '#0a0a0a', margin: 0, fontWeight: 600 }}>
                        {block.text}
                      </p>
                    </div>
                  )
                }
                if (block.type === 'image') {
                  return <ZoomImage key={i} src={block.src} alt={block.alt || ''} />
                }
                return null
              })}
            </section>
          ))}

          {/* Tags */}
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid #ebebeb' }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Tags
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {article.tags.map(tag => (
                <span key={tag} style={{
                  display: 'inline-block',
                  border: '1.5px solid #ebebeb',
                  padding: '6px 14px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#555',
                  letterSpacing: '0.06em',
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation précédent / suivant */}
          {relatedArticles.length > 0 && (
            <div className="rsp-2col" style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid #ebebeb', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {relatedArticles.map((related, i) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    border: '1px solid #ebebeb',
                    padding: '20px 24px',
                    transition: 'border-color 0.2s',
                  }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', margin: '0 0 8px' }}>
                      {i === 0 ? '← Article précédent' : 'Article suivant →'}
                    </p>
                    <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a0a0a', margin: 0, lineHeight: 1.4 }}>
                      {related.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </article>

        {/* ── SIDEBAR ──────────────────────────────────────── */}
        <aside className="rsp-article-sidebar" style={{ position: 'sticky', top: 88, display: 'flex', flexDirection: 'column', gap: 32 }}>

          {/* CTA Newsletter */}
          <NewsletterSidebar />

          {/* À propos de l'auteur */}
          <div style={{ border: '1px solid #ebebeb', padding: '24px 28px' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              L&apos;auteur
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', background: '#f0f0f0', flexShrink: 0 }}>
                <img
                  src={article.author.photo}
                  alt={article.author.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a0a0a', margin: 0 }}>{article.author.name}</p>
                <p style={{ fontSize: '0.72rem', color: '#aaa', margin: '3px 0 0', fontWeight: 500 }}>{article.author.role}</p>
              </div>
            </div>
            <Link href="/agence" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              textDecoration: 'none',
              borderBottom: '2px solid #FFF127',
              paddingBottom: 2,
            }}>
              Rencontrer l&apos;équipe →
            </Link>
          </div>

          {/* CTA Contact */}
          <div style={{ background: '#fafafa', border: '1px solid #ebebeb', padding: '24px 28px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0a0a0a', marginBottom: 8, lineHeight: 1.4 }}>
              Un projet ? Parlons performance.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.65, marginBottom: 20 }}>
              Nos experts analysent gratuitement vos campagnes actuelles.
            </p>
            <Link href="/contact" style={{
              display: 'block',
              textAlign: 'center',
              background: '#0a0a0a',
              color: '#fff',
              padding: '13px 20px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              Prendre contact →
            </Link>
          </div>

        </aside>
      </div>

    </main>
  )
}

// ─── STYLES INLINE PARTAGÉS ─────────────────────────────

const socialBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  border: '1.5px solid #ebebeb',
  color: '#0a0a0a',
  textDecoration: 'none',
  transition: 'background 0.15s',
}
