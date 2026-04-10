import type { Metadata } from 'next'
import { BLOG_ARTICLES } from '../data/blog'
import BlogListing from './BlogListing'

export const metadata: Metadata = {
  title: 'Blog — Insights SEO, SEA, SMA & Performance Digitale | DARWIN',
  description: "Décryptages, études de cas et conseils d'experts en SEO, SEA, Social Ads et Analytics. Le blog de DARWIN.",
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog DARWIN — Insights Performance Digitale',
    description: "Décryptages, études de cas et conseils d'experts en SEO, SEA, Social Ads et Analytics.",
  },
}

export default function BlogPage() {
  const sorted = [...BLOG_ARTICLES].sort((a, b) => b.date.localeCompare(a.date))
  return <BlogListing articles={sorted} />
}
