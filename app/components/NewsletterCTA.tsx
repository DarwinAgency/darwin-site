'use client'

// ─────────────────────────────────────────────────────────────────────────────
// COMPOSANT : NewsletterCTA
// RÔLE      : Bloc d'inscription newsletter (Brevo) — insertion mid-content
// USAGE     : <NewsletterCTA /> sur n'importe quelle page/article
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [prenom, setPrenom] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), prenom: prenom.trim() }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'newsletter_signup', { event_category: 'engagement', event_label: 'darwin_newsletter' })
        }
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Une erreur est survenue.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Impossible de contacter le serveur. Réessayez.')
    }
  }

  if (status === 'success') {
    return (
      <div className="nl-cta-root" style={{ background: '#FFF127', padding: '48px 24px', margin: '64px 0', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ width: 56, height: 56, background: '#0a0a0a', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11l5 5L18 7" stroke="#FFF127" strokeWidth="2.5" strokeLinecap="square"/>
          </svg>
        </div>
        <div>
          <p className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 6px', letterSpacing: '0.04em', lineHeight: 1.1 }}>
            Vous êtes inscrit{prenom ? `, ${prenom}` : ''}.
          </p>
          <p style={{ fontSize: '0.88rem', color: 'rgba(0,0,0,0.55)', margin: 0, lineHeight: 1.6 }}>
            Nos prochaines analyses arrivent directement dans votre boîte.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="nl-cta-root" style={{ background: '#FFF127', margin: '64px 0', overflow: 'hidden' }}>
      <div className="nl-cta-grid">

        {/* Colonne gauche — accroche */}
        <div className="nl-cta-left">
          <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', margin: '0 0 16px' }}>
            NEWSLETTER DARWIN
          </p>
          <p className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 20px', lineHeight: 1.1 }}>
            LES ANALYSES<br />QUI FONT LA<br />DIFFÉRENCE
          </p>
          <p style={{ fontSize: '0.92rem', color: 'rgba(0,0,0,0.6)', margin: '0 0 28px', lineHeight: 1.7 }}>
            Stratégie digitale, performance media, SEO, IA générative — ce qui compte vraiment, sans remplissage.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Analyses terrain par nos consultants seniors',
              'Tendances filtrées, pas recopiées',
              'Fréquence maîtrisée — pas de bruit',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 5, height: 5, background: '#0a0a0a', flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.65)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite — formulaire */}
        <div className="nl-cta-right">
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 28px' }}>
            REJOINDRE LA LISTE
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              <input
                type="text"
                value={prenom}
                onChange={e => setPrenom(e.target.value)}
                placeholder="Prénom (optionnel)"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '13px 18px',
                  fontSize: '0.9rem',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: 'inherit',
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => { e.target.style.borderColor = '#FFF127' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)' }}
              />

              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="votre@email.fr"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '13px 18px',
                  fontSize: '0.9rem',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: 'inherit',
                  width: '100%',
                  boxSizing: 'border-box',
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
                  color: '#0a0a0a',
                  border: 'none',
                  padding: '15px 24px',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  width: '100%',
                  transition: 'background 0.15s, color 0.15s',
                  fontFamily: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}
                onMouseEnter={e => { if (status !== 'loading') { (e.currentTarget as HTMLButtonElement).style.background = '#fff'; (e.currentTarget as HTMLButtonElement).style.color = '#0a0a0a' } }}
                onMouseLeave={e => { if (status !== 'loading') { (e.currentTarget as HTMLButtonElement).style.background = '#FFF127'; (e.currentTarget as HTMLButtonElement).style.color = '#0a0a0a' } }}
              >
                {status === 'loading' ? (
                  <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#0a0a0a', borderRadius: '50%', animation: 'nl-spin 0.7s linear infinite' }} />
                ) : (
                  <>
                    S&apos;INSCRIRE À LA NEWSLETTER
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M0 5h12M8 1l4 4-4 4" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                  </>
                )}
              </button>

              {status === 'error' && (
                <p style={{ fontSize: '0.75rem', color: '#fc8181', margin: 0, lineHeight: 1.5 }}>
                  {errorMsg}
                </p>
              )}

              <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', margin: 0, lineHeight: 1.6 }}>
                Pas de spam. Désinscription en un clic. RGPD.
              </p>
            </div>
          </form>
        </div>

      </div>

      <style>{`
        @keyframes nl-spin { to { transform: rotate(360deg); } }
        .nl-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .nl-cta-left {
          padding: 52px 56px;
          border-right: 1px solid rgba(0,0,0,0.1);
        }
        .nl-cta-right {
          padding: 52px 56px;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .nl-cta-grid {
            grid-template-columns: 1fr;
          }
          .nl-cta-left {
            padding: 36px 24px;
            border-right: none;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          .nl-cta-right {
            padding: 36px 24px;
          }
        }
      `}</style>
    </div>
  )
}
