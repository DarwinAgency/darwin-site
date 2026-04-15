import type { Metadata } from 'next'
import { BLOG_ARTICLES } from '../data/blog'
import BlogListing from './BlogListing'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: 'Blog — Insights SEO, SEA, SMA & Performance Digitale | DARWIN',
  description: "Décryptages, études de cas et conseils d'experts en SEO, SEA, Social Ads et Analytics. Le blog de DARWIN.",
  alternates: { canonical: '/blog' },
  openGraph: {
    ...ogDefaults,
    title: 'Blog DARWIN — Insights Performance Digitale',
    description: "Décryptages, études de cas et conseils d'experts en SEO, SEA, Social Ads et Analytics.",
    url: 'https://darwin-agency.fr/blog',
  },
}

export default function BlogPage() {
  const sorted = [...BLOG_ARTICLES].sort((a, b) => b.date.localeCompare(a.date))
  return <BlogListing articles={sorted} />
}
