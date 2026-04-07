import Link from 'next/link'
import Image from 'next/image'
import { BlogArticle, formatDate } from '../data/blog'

type Props = { article: BlogArticle }

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
      <article style={{ border: '1px solid #ebebeb', background: '#fff', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#0a0a0a' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ebebeb' }}
      >

        {/* Image */}
        <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', position: 'relative', background: '#f0f0f0', flexShrink: 0 }}>
          <Image
            src={article.heroImg}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
          />
        </div>

        {/* Body */}
        <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>

          {/* Badges + temps de lecture */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
            {article.categories.map(cat => (
              <span key={cat} style={{
                display: 'inline-block',
                background: '#FFF127',
                color: '#0a0a0a',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '4px 10px',
              }}>
                {cat}
              </span>
            ))}
            <span style={{ fontSize: '0.7rem', color: '#aaa', fontWeight: 500, marginLeft: 'auto' }}>
              {article.readTime} min
            </span>
          </div>

          {/* Titre */}
          <h2 style={{
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.4,
            color: '#0a0a0a',
            margin: '0 0 12px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {article.title}
          </h2>

          {/* Excerpt */}
          <p style={{
            fontSize: '0.85rem',
            lineHeight: 1.65,
            color: '#666',
            margin: '0 0 20px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1,
          }}>
            {article.excerpt}
          </p>

          {/* Footer : auteur + date */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f0f0f0', paddingTop: 16 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0a0a0a' }}>
              {article.author.name}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#aaa' }}>
              {formatDate(article.date)}
            </span>
          </div>
        </div>

      </article>
    </Link>
  )
}
