'use client'

import { useState, useMemo } from 'react'
import { BlogArticle } from '../data/blog'
import ArticleCard from '../components/ArticleCard'
import PageHero from '../components/PageHero'

const PER_PAGE = 12

// ── Catégories éditoriales ───────────────────────────────

const EDITORIAL_CATEGORIES = [
  {
    name: 'La preuve avant tout',
    desc: 'Chiffres, benchmarks et résultats mesurés.',
    accent: '#FFF127',
  },
  {
    name: 'Le praticien qui parle',
    desc: 'Méthodes, process et conseils terrain.',
    accent: '#29C5F5',
  },
  {
    name: "L'horizon qui avance",
    desc: "Tendances, IA et mutations du digital.",
    accent: '#0a0a0a',
  },
  {
    name: 'La complexité rendue simple',
    desc: 'Concepts complexes expliqués clairement.',
    accent: '#FFF127',
  },
  {
    name: 'Le partenaire de la durée',
    desc: 'Relation client, fidélité et croissance long terme.',
    accent: '#29C5F5',
  },
  {
    name: "L'avis qui dérange",
    desc: 'Prises de position tranchées et sujets sensibles.',
    accent: '#0a0a0a',
  },
]

type Props = { articles: BlogArticle[] }

export default function BlogListing({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('Tous')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (activeCategory === 'Tous') return articles
    return articles.filter(a => a.categories.includes(activeCategory))
  }, [articles, activeCategory])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleCategory = (cat: string) => {
    setActiveCategory(cat)
    setPage(1)
  }

  return (
    <main style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Insights & Expertises"
        title={`Le Blog\nDarwin`}
        description="Décryptages, études de cas et conseils d'experts en SEO, SEA, Social Ads et Analytics."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Blog' }]}
      />

      {/* ── VITRINE DES CATÉGORIES ÉDITORIALES ── */}
      <section style={{ background: '#fafafa', borderBottom: '1px solid #ebebeb', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
            Nos angles éditoriaux
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
            {EDITORIAL_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.name
              const isDark = cat.accent === '#0a0a0a'
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategory(isActive ? 'Tous' : cat.name)}
                  style={{
                    border: isActive ? `2px solid ${cat.accent}` : '1.5px solid #ebebeb',
                    background: isActive ? cat.accent : '#fff',
                    padding: '16px 14px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s, background 0.15s',
                  }}
                >
                  <p style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: isActive ? (isDark ? '#FFF127' : '#0a0a0a') : '#0a0a0a',
                    margin: '0 0 6px',
                    letterSpacing: '-0.01em',
                  }}>
                    {cat.name}
                  </p>
                  <p style={{
                    fontSize: '0.65rem',
                    lineHeight: 1.5,
                    color: isActive ? (isDark ? 'rgba(255,255,255,0.6)' : '#555') : '#aaa',
                    margin: 0,
                  }}>
                    {cat.desc}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LIEN RESET ── */}
      {activeCategory !== 'Tous' && (
        <div style={{ background: '#fff', borderBottom: '1px solid #ebebeb', padding: '0 24px' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', height: 44, display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => handleCategory('Tous')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.72rem', fontWeight: 700, color: '#0a0a0a', display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}
            >
              ← Tous les articles
            </button>
          </div>
        </div>
      )}

      {/* ── GRILLE ── */}
      <section style={{ padding: '56px 24px 96px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>

          {paginated.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Aucun article dans cette catégorie.</p>
              <button
                onClick={() => handleCategory('Tous')}
                style={{ marginTop: 16, background: 'none', border: 'none', color: '#0a0a0a', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', borderBottom: '2px solid #FFF127', paddingBottom: 2 }}
              >
                Voir tous les articles →
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {paginated.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 64 }}>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{ padding: '10px 18px', border: '1.5px solid #ebebeb', background: 'transparent', color: page === 1 ? '#ccc' : '#0a0a0a', fontSize: '0.78rem', fontWeight: 700, cursor: page === 1 ? 'default' : 'pointer', letterSpacing: '0.06em' }}
              >
                ← Précédent
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  style={{ width: 40, height: 40, border: '1.5px solid', borderColor: n === page ? '#0a0a0a' : '#ebebeb', background: n === page ? '#0a0a0a' : 'transparent', color: n === page ? '#FFF127' : '#0a0a0a', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{ padding: '10px 18px', border: '1.5px solid #ebebeb', background: 'transparent', color: page === totalPages ? '#ccc' : '#0a0a0a', fontSize: '0.78rem', fontWeight: 700, cursor: page === totalPages ? 'default' : 'pointer', letterSpacing: '0.06em' }}
              >
                Suivant →
              </button>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
