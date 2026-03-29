// ─────────────────────────────────────────────────────────
// FICHIER : app/components/CasClientsGrid.tsx
// RÔLE    : Grille filtrée des cas clients (client component)
// DÉPEND  : app/data/cas-clients.ts
// ─────────────────────────────────────────────────────────

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CAS_CLIENTS, ALL_LEVIERS, type CasClient } from '../data/cas-clients'

// ─── SOUS-COMPOSANT CARTE ───────────────────────────────

type CardProps = { cas: CasClient }

function CasCard({ cas }: CardProps) {
  return (
    <Link
      href={`/cas-clients/${cas.slug}`}
      style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
    >
      <article style={{
        background: '#fff',
        border: '1px solid #e8e8e8',
        overflow: 'hidden',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
        }}
      >
        {/* ── Image ── */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#0a0a0a', overflow: 'hidden' }}>
          {/* unoptimized : images hébergées sur WP darwin-agency.com, hotlink protection côté serveur */}
          <Image
            src={cas.cardImg}
            alt={`Cas client ${cas.client} — DARWIN`}
            fill
            unoptimized
            style={{ objectFit: 'cover', opacity: 0.85 }}
          />
          <span style={{
            position: 'absolute', top: 16, left: 16,
            background: '#FFF127', color: '#0a0a0a',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '4px 10px',
          }}>
            {cas.leviers.join(' · ')}
          </span>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: '24px 28px 28px' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>
            {cas.client}
          </p>
          <h3 className="font-anton" style={{
            fontSize: '1.15rem', textTransform: 'uppercase', color: '#0a0a0a',
            lineHeight: 1.2, marginBottom: 12,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {cas.title}
          </h3>
          <p style={{
            fontSize: '0.85rem', color: '#555', lineHeight: 1.65, marginBottom: 20,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {cas.excerpt}
          </p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 700, color: '#0a0a0a',
            borderBottom: '2px solid #FFF127', paddingBottom: 2,
          }}>
            VOIR LE CAS →
          </span>
        </div>
      </article>
    </Link>
  )
}

// ─── COMPOSANT PRINCIPAL ────────────────────────────────

export default function CasClientsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('TOUS')
  const [visible, setVisible] = useState(true)
  const [displayed, setDisplayed] = useState<typeof CAS_CLIENTS>(CAS_CLIENTS)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const applyFilter = (levier: string) => {
    if (levier === activeFilter) return
    // Fade out
    setVisible(false)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setActiveFilter(levier)
      setDisplayed(levier === 'TOUS' ? CAS_CLIENTS : CAS_CLIENTS.filter(c => c.leviers.includes(levier)))
      // Fade in
      setVisible(true)
    }, 200)
  }

  // Init displayed on mount
  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  return (
    <>
      {/* ── FILTRES ──────────────────────────────────────── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 56 }}>
        {ALL_LEVIERS.map(levier => (
          <button
            key={levier}
            onClick={() => applyFilter(levier)}
            style={{
              padding: '8px 20px',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              border: '1.5px solid',
              borderColor: activeFilter === levier ? '#0a0a0a' : '#d0d0d0',
              background: activeFilter === levier ? '#FFF127' : '#fff',
              color: '#0a0a0a',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
          >
            {levier}
          </button>
        ))}
      </div>

      {/* ── GRILLE ───────────────────────────────────────── */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}>
        {displayed.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888', padding: '48px 0' }}>
            Aucun cas client pour ce levier pour le moment.
          </p>
        ) : (
          <div className="rsp-cas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {displayed.map(cas => (
              <CasCard key={cas.slug} cas={cas} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
