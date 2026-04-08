'use client'

import { useState, useEffect } from 'react'
import { TESTIMONIALS, type Testimonial } from '../data/testimonials'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('left')

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % TESTIMONIALS.length, 'left')
    }, 5000)
    return () => clearInterval(timer)
  }, [current])

  function goTo(index: number, dir: 'left' | 'right') {
    if (index === current) return
    setDirection(dir)
    setPrev(current)
    setCurrent(index)
    setTimeout(() => setPrev(null), 500)
  }

  if (TESTIMONIALS.length === 0) return null

  const t: Testimonial = TESTIMONIALS[current]
  const p: Testimonial | null = prev !== null ? TESTIMONIALS[prev] : null

  const enterFrom = direction === 'left' ? 'translateX(60px)' : 'translateX(-60px)'
  const exitTo   = direction === 'left' ? 'translateX(-60px)' : 'translateX(60px)'

  return (
    <section style={{ background: '#0a0a0a', padding: '96px 24px', color: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 56 }}>
          Ce que disent nos clients
        </p>

        <div style={{ position: 'relative', minHeight: 300, overflow: 'hidden' }}>

          {/* Avis sortant */}
          {p && (
            <div
              key={`prev-${prev}`}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                transform: exitTo,
                opacity: 0,
                transition: 'transform 0.5s ease, opacity 0.5s ease',
              }}
            >
              <TestimonialContent t={p} />
            </div>
          )}

          {/* Avis entrant */}
          <div
            key={`current-${current}`}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              animation: `slide-in-${direction} 0.5s ease forwards`,
            }}
          >
            <TestimonialContent t={t} />
          </div>

        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 40 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'left' : 'right')}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? '#FFF127' : '#2a2a2a',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </section>
  )
}

function TestimonialContent({ t }: { t: Testimonial }) {
  return (
    <>
      <span style={{ fontSize: '3.5rem', color: '#FFF127', lineHeight: 1, display: 'block', marginBottom: 20, fontFamily: 'Georgia, serif' }}>&ldquo;</span>
      <blockquote style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', lineHeight: 1.9, color: '#ccc', margin: '0 0 36px', fontStyle: 'italic', maxWidth: 780 }}>
        {t.quote}
      </blockquote>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <div style={{ width: 46, height: 46, background: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#FFF127', border: '2px solid #333', flexShrink: 0 }}>
          {getInitials(t.name)}
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>{t.name}</div>
          <div style={{ fontSize: '0.72rem', color: '#666', marginTop: 3 }}>
            {t.role} · <span style={{ color: '#FFF127' }}>{t.company}</span>
          </div>
        </div>
      </div>
    </>
  )
}
