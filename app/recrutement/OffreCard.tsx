'use client'

export type Offre = {
  id: string
  titre: string
  type: string
  lieu: string
  domaine: string
  description: string
  missions: string[]
  profil: string[]
}

export default function OffreCard({ offre }: { offre: Offre }) {
  return (
    <div
      style={{ border: '1px solid #ebebeb', background: '#fff', transition: 'border-color 0.2s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#0a0a0a' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ebebeb' }}
    >
      {/* Header offre */}
      <div style={{ padding: '28px 32px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: '#FFF127', color: '#0a0a0a', padding: '4px 10px' }}>
            {offre.domaine}
          </span>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid #e0e0e0', color: '#555', padding: '3px 10px' }}>
            {offre.type}
          </span>
          <span style={{ fontSize: '0.7rem', color: '#aaa', marginLeft: 'auto' }}>
            {offre.lieu}
          </span>
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 12px', color: '#0a0a0a', lineHeight: 1.3 }}>
          {offre.titre}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
          {offre.description}
        </p>
      </div>

      {/* Body offre */}
      <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 14 }}>Vos missions</p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {offre.missions.map(m => (
              <li key={m} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: '#444', lineHeight: 1.55 }}>
                <span style={{ color: '#aaa', flexShrink: 0 }}>—</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 14 }}>Votre profil</p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {offre.profil.map(p => (
              <li key={p} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: '#444', lineHeight: 1.55 }}>
                <span style={{ width: 6, height: 6, background: '#FFF127', borderRadius: '50%', flexShrink: 0, marginTop: 6 }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA postuler */}
      <div style={{ padding: '0 32px 28px' }}>
        <a
          href="#postuler"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#0a0a0a', color: '#fff',
            padding: '12px 24px', fontWeight: 700,
            fontSize: '0.75rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a1a1a' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a' }}
          onClick={e => {
            e.preventDefault()
            const form = document.getElementById('postuler')
            if (form) {
              form.scrollIntoView({ behavior: 'smooth' })
              const select = form.querySelector('select') as HTMLSelectElement | null
              if (select) select.value = offre.titre
            }
          }}
        >
          Postuler à cette offre →
        </a>
      </div>
    </div>
  )
}
