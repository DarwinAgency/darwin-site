// ─────────────────────────────────────────────────────────
// FICHIER : app/cas-clients/[slug]/page.tsx
// RÔLE    : Template individuel d'un cas client
// DÉPEND  : app/data/cas-clients.ts
// ─────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CAS_CLIENTS, getCasBySlug } from '../../data/cas-clients'
import { caseStudyJsonLd, breadcrumbJsonLd } from '../../lib/jsonld'

// ─── TYPES ──────────────────────────────────────────────

type Props = { params: Promise<{ slug: string }> }

// ─── STATIC PARAMS ──────────────────────────────────────

export function generateStaticParams() {
  return CAS_CLIENTS.map(c => ({ slug: c.slug }))
}

// ─── METADATA DYNAMIQUE ─────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cas = getCasBySlug(slug)
  if (!cas) return {}
  return {
    title: `Cas ${cas.client} — ${cas.leviers.join(', ')} | DARWIN`,
    description: cas.excerpt,
    alternates: { canonical: `/cas-clients/${cas.slug}` },
    openGraph: {
      title: `Cas ${cas.client} | DARWIN`,
      description: cas.excerpt,
      url: `https://darwin-agency.fr/cas-clients/${cas.slug}`,
      images: [{ url: `https://darwin-agency.fr${cas.heroImg}`, width: 1200, height: 630, alt: `Cas client ${cas.client} — DARWIN` }],
    },
  }
}

// ─── PAGE ───────────────────────────────────────────────

export default async function CasClientPage({ params }: Props) {
  const { slug } = await params
  const cas = getCasBySlug(slug)
  if (!cas) notFound()

  const otherCas = CAS_CLIENTS.filter(c => c.slug !== cas.slug).slice(0, 3)

  const jsonLdCase = caseStudyJsonLd({
    name: cas.title,
    description: cas.excerpt,
    url: `/cas-clients/${cas.slug}`,
    client: cas.client,
    result: cas.stats[0]?.num ?? '',
  })
  const jsonLdBreadcrumb = breadcrumbJsonLd([
    { name: 'Accueil', url: '/' },
    { name: 'Cas clients', url: '/cas-clients' },
    { name: cas.client, url: `/cas-clients/${cas.slug}` },
  ])

  return (
    <main>

      {/* ── JSON-LD ── */}
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCase) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      {/*
        Exception documentée : background-image CSS utilisé ici
        car <Image fill> entre en conflit avec le layout full-bleed + overlay gradient.
      */}
      <section style={{
        background: '#0a0a0a',
        backgroundImage: `url(${cas.heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 32px 80px',
        position: 'relative',
      }}>
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.65) 100%)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href="/cas-clients" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Cas clients</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{cas.client}</span>
          </nav>

          {/* Tag levier */}
          <span style={{
            display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', padding: '5px 14px', marginBottom: 24,
          }}>
            {cas.tag}
          </span>

          <h1 className="font-anton" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 0.95, margin: '0 0 24px', maxWidth: 800 }}>
            LE CONTEXTE<br />{cas.client.toUpperCase()}
          </h1>
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: 600, lineHeight: 1.8 }}>
            {cas.excerpt}
          </p>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="rsp-section-sm" style={{
        background: 'linear-gradient(to right, #27D9E5 0%, #B8E000 100%)',
        padding: '52px 48px 60px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Expertises label */}
        <p style={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
          color: 'rgba(0,0,0,0.45)', marginBottom: 36,
          textTransform: 'uppercase',
        }}>
          Expertises&nbsp;&nbsp;<span style={{ color: '#0a0a0a' }}>{cas.leviers.join(' · ')}</span>
        </p>

        {/* Cards */}
        <div className="rsp-stats-cards" style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
          {cas.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                transform: 'skewX(-7deg)',
                background: '#0a0a0a',
                padding: '48px 44px',
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Counter-skew inner content */}
              <div style={{ transform: 'skewX(7deg)' }}>
                <p className="font-anton" style={{
                  fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)',
                  color: '#fff',
                  margin: '0 0 16px',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                }}>
                  {stat.num}
                </p>
                <p style={{
                  fontSize: '0.78rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5,
                }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTEXTE + DÉFI ──────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>

          {/* Bloc gauche — qui est le client + défi */}
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              CONTEXTE
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
              QUI EST<br />{cas.client.toUpperCase()} ?
            </h2>
            <p className="body-text" style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: 48 }}>
              {cas.context}
            </p>

            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>
              PROBLÉMATIQUE
            </p>
            <h3 className="font-anton" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 20 }}>
              LE DÉFI À RÉSOUDRE
            </h3>
            <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.85, fontStyle: 'italic', borderLeft: '3px solid #e0e0e0', paddingLeft: 20, margin: 0 }}>
              &ldquo;{cas.problematique}&rdquo;
            </p>
          </div>

          {/* Bloc droit — image à proportions naturelles */}
          <div className="rsp-sticky" style={{ position: 'sticky', top: 120 }}>
            <img
              src={cas.problematiqueImg}
              alt={`Illustration ${cas.client}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

        </div>
      </section>

      {/* ── OBJECTIFS ────────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div className="rsp-sidebar-layout" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              OBJECTIFS
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
              CE QU&apos;ON<br />DEVAIT ATTEINDRE
            </h2>
          </div>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {cas.objectifs.map((obj, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 24,
                padding: '28px 0',
                borderBottom: i < cas.objectifs.length - 1 ? '1px solid #eee' : 'none',
              }}>
                <span className="font-anton" style={{ fontSize: '2rem', color: '#FFF127', lineHeight: 1, flexShrink: 0, minWidth: 48 }}>
                  0{i + 1}
                </span>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.75, margin: 0 }}>
                  {obj}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fafafa', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* ── En-tête ── */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 12 }}>
              LA SOLUTION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, margin: 0 }}>
              L&apos;APPROCHE<br />DARWIN
            </h2>
          </div>

          {/* ── Steps ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {cas.solution.map((step, i) => (
              <div key={step.id} className="rsp-step-grid" style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 40,
                alignItems: 'start',
                background: '#fff',
                borderLeft: '4px solid #0a0a0a',
                padding: '40px 40px 40px 36px',
                marginBottom: i < cas.solution.length - 1 ? 12 : 0,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                {/* Numéro — alterné plein / outline */}
                <p className="font-anton" style={{
                  fontSize: '3.2rem', lineHeight: 1, margin: 0, paddingTop: 4,
                  ...(i % 2 === 0
                    ? { color: '#0a0a0a' }
                    : { color: 'transparent', WebkitTextStroke: '2px #0a0a0a' }
                  ),
                }}>
                  {step.id}
                </p>
                {/* Titre puis texte */}
                <div>
                  <h3 className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#0a0a0a', letterSpacing: '0.06em', lineHeight: 1.4, margin: '0 0 16px' }}>
                    {step.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0 }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CONCLUSION ───────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, marginBottom: 32 }}>
            {cas.conclusion.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: cas.conclusion.linkHref ? 36 : 0 }}>
            {cas.conclusion.text}
          </p>
          {cas.conclusion.linkHref && cas.conclusion.linkLabel && (
            <Link href={cas.conclusion.linkHref} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none',
              borderBottom: '2px solid #0a0a0a', paddingBottom: 2,
            }}>
              {cas.conclusion.linkLabel} →
            </Link>
          )}
        </div>
      </section>

      {/* ── AUTRES CAS ───────────────────────────────────── */}
      {otherCas.length > 0 && (
        <section className="rsp-section" style={{ background: '#fafafa', padding: '80px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 48 }}>
              DÉCOUVREZ NOS<br />AUTRES CAS
            </h2>
            <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {otherCas.map(other => (
                <Link key={other.slug} href={`/cas-clients/${other.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="cas-card-hover" style={{
                    background: '#fff', border: '1px solid #e8e8e8', padding: '28px',
                    transition: 'border-color 0.2s',
                  }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa' }}>
                      {other.leviers.join(' · ')}
                    </span>
                    <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '10px 0 12px', lineHeight: 1.2 }}>
                      {other.client}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
                      {other.excerpt}
                    </p>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0a0a0a', borderBottom: '2px solid #FFF127', paddingBottom: 2 }}>
                      VOIR LE CAS →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}


    </main>
  )
}
