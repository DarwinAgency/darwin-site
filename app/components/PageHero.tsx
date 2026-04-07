import Link from 'next/link'

type Breadcrumb = { label: string; href?: string }

type Props = {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageHero({ eyebrow, title, description, breadcrumbs }: Props) {
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #ebebeb', padding: '48px 24px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', color: '#aaa' }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} style={{ color: '#aaa', textDecoration: 'none' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: '#0a0a0a' }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 14 }}>
            {eyebrow}
          </p>
        )}

        {/* Titre */}
        <h1 className="font-anton" style={{
          fontSize: 'clamp(2rem, 4vw, 3.6rem)',
          textTransform: 'uppercase',
          color: '#0a0a0a',
          lineHeight: 1.0,
          margin: description ? '0 0 16px' : '0',
          maxWidth: 800,
        }}>
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.75, maxWidth: 600, margin: 0 }}>
            {description}
          </p>
        )}

      </div>
    </section>
  )
}
