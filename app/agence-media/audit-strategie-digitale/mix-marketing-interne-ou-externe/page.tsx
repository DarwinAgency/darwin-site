// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe/page.tsx
// RÔLE    : Page conseil niveau 3 — gérer son mix marketing en interne ou l'externaliser
// PARENT  : /agence-media/audit-strategie-digitale
// STATUT  : Page coquille — contenu éditorial en cours de rédaction (maillage interne actif)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbJsonLd, webPageJsonLd } from '../../../lib/jsonld'
import { ogDefaults } from '../../../lib/og'

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Mix marketing : en interne ou externalisé ? | DARWIN',
  description: "Évaluez s'il faut gérer votre mix marketing en interne ou l'externaliser : critères de décision, avantages, limites et arbitrages, avec DARWIN.",
  alternates: { canonical: '/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe' },
  openGraph: {
    ...ogDefaults,
    title: 'Mix marketing : en interne ou externalisé ? | DARWIN',
    description: "Évaluez s'il faut gérer votre mix marketing en interne ou l'externaliser : critères de décision, avantages, limites et arbitrages.",
    url: 'https://darwin-agency.fr/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe',
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLdBreadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Audit Stratégie Digitale', url: '/agence-media/audit-strategie-digitale' },
  { name: 'Mix Marketing : Interne ou Externe', url: '/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe' },
])

const jsonLdWebpage = webPageJsonLd(
  'Mix marketing : gérer en interne ou externaliser',
  "Critères de décision pour gérer votre mix marketing digital en interne ou le confier à une agence externe.",
  '/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe'
)

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MixMarketingInterneOuExternePage() {
  return (
    <main style={{ background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebpage) }} />

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '120px 24px 96px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Accueil</Link>
          <span>/</span>
          <Link href="/agence-media" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Agence Média</Link>
          <span>/</span>
          <Link href="/agence-media/audit-strategie-digitale" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Audit Stratégie Digitale</Link>
          <span>/</span>
          <span style={{ color: 'rgba(0,0,0,0.6)' }}>Mix Marketing : Interne ou Externe</span>
        </nav>

        <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1, margin: '0 0 28px' }}>
          MIX MARKETING&nbsp;:<br />EN INTERNE OU EXTERNALISÉ&nbsp;?
        </h1>

        <div style={{ borderLeft: '4px solid #FFF127', paddingLeft: 24, marginBottom: 40 }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
            Le contenu détaillé de cette page est en cours de rédaction. En attendant, découvrez comment DARWIN diagnostique votre mix marketing, levier par levier.
          </p>
        </div>

        <Link href="/agence-media/audit-strategie-digitale" style={{
          display: 'inline-block', background: '#0a0a0a', color: '#fff',
          fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', textDecoration: 'none', padding: '16px 32px',
        }}>
          ← AUDIT STRATÉGIE DIGITALE
        </Link>
      </section>
    </main>
  )
}
