'use client'

import { ReactNode, useEffect, useState, useRef } from 'react'
import Link from 'next/link'

interface TocItem {
  id: string
  label: string
}

interface RelatedPage {
  href: string
  label: string
  desc: string
}

interface BreadcrumbItem {
  href?: string
  label: string
}

interface Author {
  name: string
  role: string
  photo: string
}

interface ArticleLayoutV2Props {
  jsonLd: object[]
  breadcrumbs: BreadcrumbItem[]
  badge?: string
  title: ReactNode
  intro: ReactNode
  heroIllustration?: ReactNode
  shareUrl: string
  shareTitle: string
  tocItems: TocItem[]
  relatedPages: RelatedPage[]
  essentialPoints: string[]
  author?: Author
  conclusion?: ReactNode
  children: ReactNode
}

export default function ArticleLayoutV2({
  jsonLd,
  breadcrumbs,
  badge,
  title,
  intro,
  heroIllustration,
  shareUrl,
  shareTitle,
  tocItems,
  relatedPages,
  essentialPoints,
  author,
  conclusion,
  children,
}: ArticleLayoutV2Props) {
  const [activeId, setActiveId] = useState<string>('')
  const [tocOpen, setTocOpen] = useState(false)
  const [readingTime, setReadingTime] = useState(6)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const mainEl = document.querySelector('.artv2-main')
    if (mainEl) {
      const words = mainEl.textContent?.split(/\s+/).length || 0
      setReadingTime(Math.max(1, Math.ceil(words / 220)))
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean)
    sections.forEach(el => observerRef.current?.observe(el!))

    return () => observerRef.current?.disconnect()
  }, [tocItems])

  return (
    <main className="artv2-root">

      {/* ── JSON-LD ── */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ── STYLES ── */}
      <style>{`
        /* ─── VARIABLES ────────────────────────────────────── */
        .artv2-root {
          --art-max: 1280px;
          --art-sidebar: 300px;
          --art-gap: 64px;
          --art-content-max: 720px;
          --art-yellow: #FFF127;
          --art-cyan: #29C5F5;
          --art-dark: #0a0a0a;
          --art-body: #444;
          --art-muted: #888;
          background: #fff;
          color: var(--art-dark);
        }

        /* ─── HERO ──────────────────────────────────────────── */
        .artv2-hero {
          background: #fff;
          border-bottom: 1px solid #ebebeb;
        }
        .artv2-hero-inner {
          max-width: var(--art-max);
          margin: 0 auto;
          padding: 100px 32px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .artv2-hero-content {
          display: flex;
          flex-direction: column;
        }
        .artv2-hero-illus {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .artv2-hero-illus-box {
          background: #f5f5f5;
          border-radius: 2px;
          border: 1px solid #e8e8e8;
          box-shadow: 0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
          overflow: hidden;
          width: 100%;
          max-width: 520px;
        }
        .artv2-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
          font-size: 0.75rem;
          color: rgba(0,0,0,0.3);
          flex-wrap: wrap;
        }
        .artv2-breadcrumb a {
          color: rgba(0,0,0,0.3);
          text-decoration: none;
        }
        .artv2-breadcrumb a:hover { color: rgba(0,0,0,0.5); }
        .artv2-breadcrumb-current { color: rgba(0,0,0,0.6); }
        .artv2-badge {
          display: inline-block;
          background: var(--art-yellow);
          color: var(--art-dark);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 5px 14px;
          margin-bottom: 28px;
        }
        .artv2-hero h1 {
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          text-transform: uppercase;
          color: var(--art-dark);
          line-height: 0.95;
          margin: 0 0 32px;
        }
        .artv2-hero-intro {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.85;
          max-width: 640px;
          margin-bottom: 40px;
        }
        /* ─── SHARE BUTTONS ─────────────────────────────────── */
        .artv2-share {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .artv2-share-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--art-muted);
          margin-right: 8px;
        }
        .artv2-share-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1.5px solid #ebebeb;
          color: var(--art-dark);
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s;
        }
        .artv2-share-btn:hover {
          background: #f5f5f5;
          border-color: #ccc;
        }

        /* ─── CONCLUSION ───────────────────────────────────── */
        .artv2-conclusion {
          background: var(--art-dark);
          padding: 44px 40px;
          margin-top: 48px;
        }
        .artv2-conclusion-label {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--art-yellow);
          margin-bottom: 16px;
        }
        .artv2-conclusion p {
          font-size: 1.05rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.85);
          margin: 0;
        }
        .artv2-conclusion p strong { color: #fff; }

        /* ─── SHARE BOTTOM ─────────────────────────────────── */
        .artv2-share-bottom {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid #ebebeb;
        }

        .artv2-hero-meta {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #ebebeb;
        }
        .artv2-hero-meta span {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--art-muted);
        }

        /* ─── L'ESSENTIEL ──────────────────────────────────── */
        .artv2-essential {
          max-width: var(--art-max);
          margin: 0 auto;
          padding: 0 32px;
        }
        .artv2-essential-box {
          background: #fafafa;
          border: 1px solid #ebebeb;
          border-left: 4px solid var(--art-yellow);
          padding: 40px 44px;
          margin: -36px 0 0;
          position: relative;
          z-index: 2;
        }
        .artv2-essential-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .artv2-essential-label span {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--art-dark);
        }
        .artv2-essential-label svg {
          flex-shrink: 0;
        }
        .artv2-essential-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .artv2-essential-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1rem;
          line-height: 1.75;
          color: #333;
        }
        .artv2-essential-list li::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          background: var(--art-yellow);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 8px;
        }

        /* ─── ARTICLE LAYOUT ───────────────────────────────── */
        .artv2-layout {
          max-width: var(--art-max);
          margin: 0 auto;
          padding: 64px 32px 96px;
          display: grid;
          grid-template-columns: var(--art-sidebar) 1fr;
          gap: var(--art-gap);
          align-items: start;
        }

        /* ─── SIDEBAR ──────────────────────────────────────── */
        .artv2-sidebar {
          position: sticky;
          top: 100px;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          scrollbar-width: none;
          background: #fafafa;
          border: 1px solid #ebebeb;
          border-top: 3px solid var(--art-yellow);
          padding: 32px 24px;
        }
        .artv2-sidebar::-webkit-scrollbar { display: none; }

        .artv2-toc-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--art-dark);
          margin-bottom: 20px;
        }
        .artv2-toc {
          list-style: none;
          padding: 0;
          margin: 0 0 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 2px solid #e0e0e0;
        }
        .artv2-toc li {
          padding: 0;
        }
        .artv2-toc a {
          display: block;
          padding: 10px 0 10px 18px;
          font-size: 0.84rem;
          font-weight: 500;
          color: #666;
          text-decoration: none;
          border-left: 3px solid transparent;
          margin-left: -2px;
          transition: color 0.2s, border-color 0.2s, background 0.15s;
          line-height: 1.4;
        }
        .artv2-toc a:hover {
          color: var(--art-dark);
          background: rgba(0,0,0,0.02);
        }
        .artv2-toc a.artv2-toc-active {
          color: var(--art-dark);
          font-weight: 700;
          border-left-color: var(--art-yellow);
          background: rgba(255,241,39,0.08);
        }

        .artv2-sidebar-divider {
          height: 1px;
          background: #e0e0e0;
          margin: 0 0 28px;
          border: none;
        }

        /* Sidebar — author */
        .artv2-author {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 0 28px;
        }
        .artv2-author-photo {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          background: #e8e8e8;
        }
        .artv2-author-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .artv2-author-name {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--art-dark);
          margin-bottom: 2px;
        }
        .artv2-author-role {
          font-size: 0.72rem;
          color: #777;
          line-height: 1.4;
        }

        /* Sidebar — related pages */
        .artv2-related-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--art-dark);
          margin-bottom: 16px;
        }
        .artv2-related {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .artv2-related a {
          display: block;
          padding: 14px 16px;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-left: 3px solid var(--art-yellow);
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .artv2-related a:hover {
          border-color: var(--art-yellow);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .artv2-related-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--art-dark);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .artv2-related-desc {
          font-size: 0.74rem;
          color: #777;
          line-height: 1.5;
        }

        /* ─── MAIN CONTENT ─────────────────────────────────── */
        .artv2-main {
          max-width: var(--art-content-max);
          min-width: 0;
        }

        .artv2-section {
          margin-bottom: 64px;
          padding-bottom: 64px;
          border-bottom: 1px solid #f0f0f0;
        }
        .artv2-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .artv2-section-header {
          margin-bottom: 32px;
        }
        .artv2-eyebrow {
          display: block;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--art-cyan);
          margin-bottom: 12px;
        }
        .artv2-h2 {
          font-size: clamp(1.6rem, 2.8vw, 2.4rem);
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--art-dark);
          margin: 0;
        }
        .artv2-h3 {
          font-size: 1.1rem;
          text-transform: uppercase;
          color: var(--art-dark);
          margin: 0 0 12px;
          letter-spacing: 0.04em;
        }

        .artv2-body {
          font-size: 1rem;
          line-height: 1.9;
          color: var(--art-body);
          margin: 0 0 24px;
          text-align: justify;
        }
        .artv2-body strong { color: var(--art-dark); }

        .artv2-blockquote {
          border-left: 3px solid var(--art-dark);
          background: #fafafa;
          padding: 28px 32px;
          margin: 32px 0;
        }
        .artv2-blockquote p {
          font-size: 0.98rem;
          line-height: 1.85;
          color: #333;
          margin: 0;
        }
        .artv2-blockquote--highlight {
          border-left-color: var(--art-yellow);
          background: #fffde6;
        }

        .artv2-card-accent {
          background: #fafafa;
          border: 1px solid #ebebeb;
          border-left: 4px solid var(--art-yellow);
          padding: 28px 32px;
          margin: 0 0 16px;
        }
        .artv2-card-accent p {
          font-size: 0.95rem;
          line-height: 1.85;
          color: var(--art-body);
          margin: 0;
        }
        .artv2-card-accent p strong { color: var(--art-dark); }

        .artv2-card-dark {
          background: var(--art-dark);
          padding: 32px 36px;
          margin: 0 0 24px;
        }
        .artv2-card-dark p {
          font-size: 0.95rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.85);
          margin: 0;
        }
        .artv2-card-dark p strong { color: #fff; }

        /* ─── MOBILE TOC TOGGLE ────────────────────────────── */
        .artv2-toc-mobile-toggle {
          display: none;
          position: sticky;
          top: 0;
          z-index: 50;
          background: #fff;
          border-bottom: 1px solid #ebebeb;
          padding: 14px 20px;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--art-dark);
          align-items: center;
          justify-content: space-between;
        }
        .artv2-toc-mobile-toggle svg {
          transition: transform 0.2s;
        }
        .artv2-toc-mobile-toggle[data-open="true"] svg {
          transform: rotate(180deg);
        }

        .artv2-toc-mobile-panel {
          display: none;
          background: #fff;
          border-bottom: 1px solid #ebebeb;
          padding: 0 20px 20px;
          position: sticky;
          top: 47px;
          z-index: 49;
        }
        .artv2-toc-mobile-panel[data-open="true"] {
          display: block;
        }
        .artv2-toc-mobile-panel .artv2-toc {
          margin-bottom: 0;
        }

        /* ─── RESPONSIVE ───────────────────────────────────── */
        @media (max-width: 960px) {
          .artv2-layout {
            grid-template-columns: 1fr;
            padding: 32px 20px 64px;
          }
          .artv2-sidebar { display: none; }
          .artv2-toc-mobile-toggle { display: flex; }
          .artv2-hero-inner { padding: 80px 20px 56px; grid-template-columns: 1fr; }
          .artv2-hero-illus { display: none; }
          .artv2-essential { padding: 0 20px; }
          .artv2-essential-box { margin: -20px 0 0; padding: 28px 24px; }
          .artv2-hero h1 { font-size: clamp(2.2rem, 8vw, 3.4rem); }
          .artv2-hero-intro { font-size: 1rem; }
          .artv2-hero-meta { flex-wrap: wrap; gap: 12px; }
          .artv2-hero-meta > div { margin-left: 0; width: 100%; margin-top: 8px; }
          .artv2-blockquote { padding: 20px 20px; margin: 24px 0; }
          .artv2-card-accent { padding: 20px 20px; }
          .artv2-card-dark { padding: 24px 20px; }
          .artv2-conclusion { padding: 32px 24px; }
          .artv2-body { text-align: left; }
          .artv2-share-bottom { flex-wrap: wrap; }
        }

        /* smooth scroll */
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="artv2-hero">
        <div className="artv2-hero-inner">

          {/* ── Colonne gauche — contenu ── */}
          <div className="artv2-hero-content">
            <nav className="artv2-breadcrumb">
              {breadcrumbs.flatMap((crumb, i) => {
                const items = []
                if (i > 0) items.push(<span key={`sep-${i}`}>/</span>)
                items.push(
                  crumb.href
                    ? <Link key={`crumb-${i}`} href={crumb.href}>{crumb.label}</Link>
                    : <span key={`crumb-${i}`} className="artv2-breadcrumb-current">{crumb.label}</span>
                )
                return items
              })}
            </nav>

            {badge && <span className="artv2-badge">{badge}</span>}
            <h1 className="font-anton">{title}</h1>
            <p className="artv2-hero-intro">{intro}</p>

            <div className="artv2-hero-meta">
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-2px', marginRight: 6 }}>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                {readingTime} min de lecture
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-2px', marginRight: 6 }}>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Guide expert
              </span>
              <div style={{ marginLeft: 'auto' }}>
                <ShareButtons url={shareUrl} title={shareTitle} />
              </div>
            </div>
          </div>

          {/* ── Colonne droite — illustration ── */}
          {heroIllustration && (
            <div className="artv2-hero-illus">
              <div className="artv2-hero-illus-box">
                {heroIllustration}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          L'ESSENTIEL — GEO/AEO
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="artv2-essential">
        <div className="artv2-essential-box">
          <div className="artv2-essential-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>L&apos;essentiel</span>
          </div>
          <ul className="artv2-essential-list">
            {essentialPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE TOC TOGGLE
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="artv2-toc-mobile-toggle"
        data-open={tocOpen ? 'true' : 'false'}
        onClick={() => setTocOpen(!tocOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setTocOpen(!tocOpen)}
      >
        <span>Sommaire</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div className="artv2-toc-mobile-panel" data-open={tocOpen ? 'true' : 'false'}>
        <ul className="artv2-toc">
          {tocItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? 'artv2-toc-active' : ''}
                onClick={() => setTocOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          ARTICLE LAYOUT — SIDEBAR + CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="artv2-layout">

        {/* ── SIDEBAR ── */}
        <aside className="artv2-sidebar">
          <p className="artv2-toc-label">Sommaire</p>
          <ul className="artv2-toc">
            {tocItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'artv2-toc-active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {author && (
            <>
              <hr className="artv2-sidebar-divider" />
              <div className="artv2-author">
                <div className="artv2-author-photo">
                  <img src={author.photo} alt={author.name} />
                </div>
                <div>
                  <p className="artv2-author-name">{author.name}</p>
                  <p className="artv2-author-role">{author.role}</p>
                </div>
              </div>
            </>
          )}

          <hr className="artv2-sidebar-divider" />
          <p className="artv2-related-label">Sur le même sujet</p>
          <div className="artv2-related">
            {relatedPages.map(page => (
              <Link key={page.href} href={page.href}>
                <p className="artv2-related-title">{page.label}</p>
                <p className="artv2-related-desc">{page.desc}</p>
              </Link>
            ))}
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div className="artv2-main">
          <div>
            {children}
          </div>

          {/* ── CONCLUSION ── */}
          {conclusion && (
            <div className="artv2-conclusion">
              <p className="artv2-conclusion-label">En résumé</p>
              {conclusion}
            </div>
          )}

          {/* ── SHARE BOTTOM ── */}
          <div className="artv2-share-bottom">
            <ShareButtons url={shareUrl} title={shareTitle} />
          </div>
        </div>

      </div>
    </main>
  )
}

function ShareButtons({ url, title }: { url: string; title: string }) {
  const fullUrl = `https://www.darwin-agency.fr${url}`
  return (
    <div className="artv2-share">
      <span className="artv2-share-label">Partager</span>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="artv2-share-btn"
        aria-label="Partager sur LinkedIn"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="artv2-share-btn"
        aria-label="Partager sur X"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.213 5.573L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(fullUrl)}`}
        className="artv2-share-btn"
        aria-label="Partager par email"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </a>
    </div>
  )
}
