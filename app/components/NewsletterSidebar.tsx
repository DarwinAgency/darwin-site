'use client'

// ─────────────────────────────────────────────────────────────────────────────
// COMPOSANT : NewsletterSidebar
// RÔLE      : Formulaire newsletter compact — sidebar articles de blog
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'

export default function NewsletterSidebar() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'newsletter_signup', { event_category: 'engagement', event_label: 'blog_sidebar' })
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background: '#0a0a0a', padding: '32px 28px' }}>
        <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127', marginBottom: 20 }} />
        <p className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#FFF127', margin: '0 0 8px', letterSpacing: '0.04em' }}>
          Vous êtes inscrit·e.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>
          Nos prochaines analyses arrivent dans votre boîte.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0a', padding: '32px 28px' }}>
      <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127', marginBottom: 20 }} />
      <h3 className="font-anton" style={{ fontSize: '1.4rem', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>
        LA NEWSLETTER PERFORMANCE
      </h3>
      <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>
        Chaque mois, les insights SEA, SEO et IA qui font la différence — directement dans votre boîte.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="votre@email.com"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '12px 16px',
            fontSize: '0.85rem',
            color: '#fff',
            outline: 'none',
            width: '100%',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            transition: 'border-color 0.15s',
          }}
          onFocus={e => { e.target.style.borderColor = '#FFF127' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)' }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: status === 'loading' ? '#555' : '#FFF127',
            border: 'none',
            padding: '13px 20px',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0a0a0a',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            width: '100%',
            fontFamily: 'inherit',
          }}
        >
          {status === 'loading' ? '…' : 'Je m\'abonne →'}
        </button>
        {status === 'error' && (
          <p style={{ fontSize: '0.72rem', color: '#fc8181', margin: 0 }}>
            Une erreur est survenue. Réessayez.
          </p>
        )}
      </form>
      <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', marginTop: 12, textAlign: 'center' }}>
        Sans spam. Désinscription en 1 clic.
      </p>
    </div>
  )
}
