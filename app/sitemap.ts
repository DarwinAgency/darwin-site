import type { MetadataRoute } from 'next'
import { BLOG_ARTICLES } from './data/blog'
import { CAS_CLIENTS } from './data/cas-clients'

const BASE = 'https://www.darwin-agency.fr'

// Pages statiques : pas de `lastModified`. Un `lastmod` qui vaudrait
// systématiquement la date du dernier build serait ignoré (voire pénalisé)
// par Google, qui n'exploite cette valeur que si elle est fiable. Seules les
// pages dont on connaît une vraie date de publication la renseignent (blog).

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/agence`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/a-propos-de-darwin`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/cas-clients`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/agence-seo`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/agence-seo/audit-seo`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/agence-sea`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/agence-sma`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/agence-analytics`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/studio-creatif`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/formations`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/agence-media`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/agence-media/audit-strategie-digitale`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/agence-media/audit-strategie-digitale/objectifs-marketing-digital`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/agence-media/audit-strategie-digitale/indicateurs-de-performance-mix-marketing`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/agence-media/generation-de-leads`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/agence-media/generation-de-leads/comment-trouver-des-leads`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/recrutement`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/creative-thinking-community`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mentions-legales`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/rgpd`, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map(article => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const casPages: MetadataRoute.Sitemap = CAS_CLIENTS.map(cas => ({
    url: `${BASE}/cas-clients/${cas.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages, ...casPages]
}
