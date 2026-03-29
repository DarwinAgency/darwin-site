// ─────────────────────────────────────────────────────────
// FICHIER : app/cas-clients/page.tsx
// RÔLE    : Page listing des cas clients avec filtres par levier
// DÉPEND  : CasClientsGrid.tsx, cas-clients.ts
// ─────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import CasClientsGrid from '../components/CasClientsGrid'

// ─── METADATA ───────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Cas Clients — Résultats concrets | DARWIN',
  description: "Découvrez les résultats obtenus par DARWIN pour ses clients : SEO, SEA, SMA, Média, Data & Tracking, Formation. Des chiffres réels, des stratégies éprouvées.",
  alternates: { canonical: '/cas-clients' },
  openGraph: {
    title: 'Cas Clients — Résultats concrets | DARWIN',
    description: "400+ clients accompagnés. Découvrez nos études de cas en SEO, SEA, SMA, Média et Data.",
    url: 'https://darwin-agency.fr/cas-clients',
    images: [{ url: 'https://darwin-agency.fr/images/og-default.jpg', width: 1200, height: 630, alt: 'DARWIN — Cas Clients' }],
  },
}

// ─── PAGE ───────────────────────────────────────────────

export default function CasClientsPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', padding: '100px 32px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 24 }}>
            NOS RÉSULTATS
          </p>
          <h1 className="font-anton" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 0.95, margin: 0 }}>
            UNE ÉQUIPE DÉDIÉE<br />
            <span style={{ color: '#FFF127' }}>POUR VOTRE RÉUSSITE</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', maxWidth: 560, marginTop: 28, lineHeight: 1.75 }}>
            Des stratégies construites sur la data, des résultats mesurés sur le terrain. Chaque cas parle pour lui-même.
          </p>
        </div>
      </section>

      {/* ── STATS RAPIDES ────────────────────────────────── */}
      <section style={{ background: '#FFF127', padding: '28px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
          {[
            { num: '400+', label: 'clients accompagnés' },
            { num: '23 ans', label: "d'expertise digitale" },
            { num: '7 ans', label: 'de fidélité moyenne' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p className="font-anton" style={{ fontSize: '2rem', color: '#0a0a0a', margin: 0, lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', opacity: 0.65, marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GRILLE + FILTRES ─────────────────────────────── */}
      <section style={{ background: '#fafafa', padding: '80px 32px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <CasClientsGrid />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', padding: '72px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1, marginBottom: 20 }}>
            ET SI NOTRE PROCHAIN<br />CAS CLIENT ÉTAIT LE VÔTRE ?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 36 }}>
            Vous avez un projet ? On a déjà probablement résolu un défi similaire. Parlons-en.
          </p>
          <Link href="/contact" className="btn-yellow" style={{
            display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
            fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            padding: '16px 40px',
          }}>
            DISCUTONS DE VOTRE PROJET →
          </Link>
        </div>
      </section>

    </main>
  )
}
