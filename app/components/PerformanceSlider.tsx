'use client'

import { useState, useEffect, useCallback } from 'react'

const steps = [
  {
    title: 'AUDIT',
    desc: "Nous analysons votre écosystème digital pour révéler les opportunités cachées dans vos données. Un diagnostic précis qui pose les fondations de votre future stratégie d'acquisition.",
  },
  {
    title: 'STRATÉGIE',
    desc: "Nous créons ensuite votre stratégie sur mesure. Nous fusionnons agilité, créativité, innovation et performance pour imaginer une approche unique qui vous distingue.",
  },
  {
    title: 'QUICK WINS',
    desc: "Dès le lancement, notre communauté d'experts priorise la mise en place de Quick Wins pour optimiser rapidement l'existant et améliorer vos KPIs.",
  },
  {
    title: 'DÉPLOIEMENT',
    desc: "Nous déployons méthodiquement votre stratégie et analysons chaque action pour maximiser l'impact de votre mix marketing, dans une logique d'optimisation continue.",
  },
  {
    title: 'REPORTING',
    desc: "Nous créons pour vous un reporting sur mesure, disponible en temps réel, mettant en évidence les KPIs et les objectifs définis ensemble.",
  },
]

const CARD_WIDTH = 480
const GAP = 16

export default function PerformanceSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    setCurrent(prev => (prev + 1) % steps.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(advance, 3500)
    return () => clearInterval(timer)
  }, [paused, advance])

  const cardOffset = (i: number) => {
    // Center the current card: offset = 50vw - cardWidth/2 - current*(cardWidth+gap)
    return `calc(50vw - ${CARD_WIDTH / 2}px - ${current * (CARD_WIDTH + GAP)}px)`
  }

  // Parallax: background text moves at 25% card speed
  const bgOffset = `calc(10vw - ${current * (CARD_WIDTH + GAP) * 0.28}px)`

  return (
    <section
      style={{
        background: 'linear-gradient(225deg, #FFF127 0%, #27E2FF 100%)',
        padding: '80px 0 60px',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 520,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background PERFORMANCE text (parallax) ── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          whiteSpace: 'nowrap',
          transform: `translateY(-50%) translateX(${bgOffset})`,
          transition: 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          pointerEvents: 'none',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        <span
          className="font-anton"
          style={{
            fontSize: 'clamp(8rem, 20vw, 17rem)',
            color: 'rgba(255,255,255,0.28)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
            display: 'block',
          }}
        >
          PERFORMANCE
        </span>
      </div>

      {/* ── Section title ── */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', margin: 0 }}>
          NOTRE MÉTHODE
        </p>
      </div>

      {/* ── Cards track ── */}
      <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            gap: GAP,
            transform: `translateX(${cardOffset(current)})`,
            transition: 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            willChange: 'transform',
          }}
        >
          {steps.map((step, i) => {
            const isActive = i === current
            return (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  minWidth: CARD_WIDTH,
                  width: CARD_WIDTH,
                  background: '#0a0a0a',
                  color: '#fff',
                  padding: '48px 44px',
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.65,
                  transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(8px)',
                  transition: 'opacity 0.45s ease, transform 0.45s ease',
                  minHeight: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isActive ? '0 24px 60px rgba(0,0,0,0.25)' : 'none',
                }}
              >
                <div>
                  <h3
                    className="font-anton"
                    style={{
                      fontSize: '3rem',
                      textTransform: 'uppercase',
                      marginBottom: 28,
                      letterSpacing: '0.02em',
                      lineHeight: 1,
                      margin: '0 0 28px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#bbb', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: 36,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #222',
                    paddingTop: 16,
                  }}
                >
                  <span style={{ fontSize: '0.7rem', color: '#444', fontWeight: 700, letterSpacing: '0.15em' }}>
                    {String(i + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                  </span>
                  {isActive && (
                    <span style={{ fontSize: '0.7rem', color: '#FFF127', fontWeight: 700, letterSpacing: '0.1em' }}>
                      ●
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Navigation dots ── */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginTop: 40,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Étape ${i + 1}`}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? '#0a0a0a' : 'rgba(0,0,0,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'width 0.35s ease, background 0.35s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          marginTop: 20,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <button
          onClick={() => setCurrent(prev => (prev - 1 + steps.length) % steps.length)}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.15)',
            border: '2px solid rgba(0,0,0,0.2)',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a0a0a',
            transition: 'background 0.2s',
          }}
        >
          ←
        </button>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % steps.length)}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.15)',
            border: '2px solid rgba(0,0,0,0.2)',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a0a0a',
            transition: 'background 0.2s',
          }}
        >
          →
        </button>
      </div>
    </section>
  )
}
