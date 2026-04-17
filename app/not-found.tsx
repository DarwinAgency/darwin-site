// ─────────────────────────────────────────────────────────
// FICHIER : app/not-found.tsx
// RÔLE    : Page d'erreur 404 — design immersif aux couleurs DARWIN
// ─────────────────────────────────────────────────────────

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page introuvable | DARWIN',
  description: "Cette page n'existe pas ou a été déplacée.",
}

// ─── PAGE ────────────────────────────────────────────────

export default function NotFound() {
  return (
    <main style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      background: '#FFF127',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
    }}>

      {/* ── Typographie géante 404 ── */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0.82,
        userSelect: 'none',
        gap: 0,
      }}>
        {/* Ligne 1 : 404 normal */}
        <span
          className="font-anton"
          style={{
            fontSize: 'clamp(180px, 28vw, 420px)',
            color: '#0a0a0a',
            display: 'block',
            letterSpacing: '-0.02em',
          }}
        >
          404
        </span>

        {/* Ligne 2 : 404 outline (effet miroir décalé) */}
        <span
          className="font-anton"
          style={{
            fontSize: 'clamp(180px, 28vw, 420px)',
            color: 'transparent',
            WebkitTextStroke: '3px rgba(10,10,10,0.18)',
            display: 'block',
            letterSpacing: '-0.02em',
            marginTop: '-0.05em',
            transform: 'scaleY(-1)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
          }}
        >
          404
        </span>
      </div>

      {/* ── Bande cyan verticale décorative ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '18%',
        width: 6,
        height: '100%',
        background: '#29C5F5',
        opacity: 0.5,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 'calc(18% + 14px)',
        width: 2,
        height: '100%',
        background: '#29C5F5',
        opacity: 0.2,
      }} />

      {/* ── Carré décoratif haut gauche ── */}
      <div style={{
        position: 'absolute',
        top: 32,
        left: 32,
        width: 20,
        height: 20,
        background: '#0a0a0a',
      }} />
      <div style={{
        position: 'absolute',
        top: 32,
        left: 60,
        width: 8,
        height: 8,
        background: '#0a0a0a',
        opacity: 0.3,
      }} />

      {/* ── Contenu bas gauche ── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 48px 52px',
        maxWidth: 560,
      }}>

        {/* Badge */}
        <span style={{
          display: 'inline-block',
          background: '#0a0a0a',
          color: '#FFF127',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '5px 14px',
          marginBottom: 20,
        }}>
          ERREUR 404
        </span>

        <h1
          className="font-anton"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            textTransform: 'uppercase',
            color: '#0a0a0a',
            lineHeight: 1.0,
            margin: '0 0 20px',
          }}
        >
          CETTE PAGE<br />A DISPARU.
        </h1>

        <p style={{
          fontSize: '1rem',
          color: 'rgba(10,10,10,0.6)',
          lineHeight: 1.75,
          marginBottom: 36,
          maxWidth: 380,
        }}>
          Elle a peut-être été déplacée, supprimée, ou n'a jamais existé. Retournez là où vous étiez, ou explorez nos expertises.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              background: '#0a0a0a',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 28px',
            }}
          >
            RETOUR À L'ACCUEIL →
          </Link>
          <Link
            href="/agence-seo"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#0a0a0a',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 28px',
              border: '2px solid rgba(10,10,10,0.25)',
            }}
          >
            NOS EXPERTISES
          </Link>
        </div>
      </div>

      {/* ── Accent bas ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        background: '#0a0a0a',
      }} />

    </main>
  )
}
