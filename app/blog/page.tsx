import type { Metadata } from 'next'
import { BLOG_ARTICLES } from '../data/blog'
import BlogListing from './BlogListing'

export const metadata: Metadata = {
  title: 'Blog — Insights SEO, SEA, SMA & Performance Digitale | Darwin Agency',
  description: 'Décryptages, études de cas et conseils d\'experts en SEO, SEA, Social Ads et Analytics. Le blog de l\'agence Darwin.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Darwin Agency — Insights Performance Digitale',
    description: 'Décryptages, études de cas et conseils d\'experts en SEO, SEA, Social Ads et Analytics.',
  },
}

export default function BlogPage() {
  const sorted = [...BLOG_ARTICLES].sort((a, b) => b.date.localeCompare(a.date))
  return <BlogListing articles={sorted} />
}
