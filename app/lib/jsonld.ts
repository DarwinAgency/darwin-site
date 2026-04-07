/**
 * app/lib/jsonld.ts
 * Helpers JSON-LD réutilisables — GEO & AEO
 *
 * Usage dans une page :
 *   import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
 *
 *   Dans le JSX (Server Component) :
 *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
 */

const BASE_URL = 'https://www.darwin-agency.fr'
const DARWIN_PROVIDER = {
  '@type': 'Organization',
  name: 'DARWIN',
  url: BASE_URL,
}

// ─── TYPES ───────────────────────────────────────────────

export type FaqItem = { q: string; a: string }

export type BreadcrumbItem = { name: string; url: string }

export type ServiceItem = {
  name: string
  description: string
  url: string
  /** Optionnel — termes clés associés au service */
  keywords?: string[]
}

export type ArticleData = {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  authorName: string
  imageUrl?: string
  keywords?: string[]
}

export type CaseStudyData = {
  name: string
  description: string
  url: string
  client: string
  result: string
}

// ─── FAQPage ─────────────────────────────────────────────
/**
 * À utiliser sur toutes les pages qui contiennent une section FAQ.
 * Priorité LLM maximale : ChatGPT, Perplexity, AI Overviews extraient les Q&A directement.
 *
 * Règles AEO :
 * - Réponse directe dès la 1ère phrase (pas de "Pour répondre à cette question...")
 * - Réponse entre 40 et 300 mots
 * - Mentionner DARWIN + contexte dans au moins 1 réponse sur 3
 */
export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }
}

// ─── Service ─────────────────────────────────────────────
/**
 * À utiliser sur chaque page expertise (/expertises/seo, /expertises/sea, etc.)
 * Permet aux LLMs d'associer DARWIN à un service précis avec une URL.
 */
export function serviceJsonLd({ name, description, url, keywords }: ServiceItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: DARWIN_PROVIDER,
    areaServed: { '@type': 'Country', name: 'France' },
    ...(keywords ? { keywords: keywords.join(', ') } : {}),
  }
}

// ─── BreadcrumbList ───────────────────────────────────────
/**
 * À utiliser sur toutes les sous-pages (/expertises/*, /expertises/seo/*, etc.)
 * Indispensable pour l'architecture sémantique et les AI Overviews.
 *
 * Exemple :
 *   breadcrumbJsonLd([
 *     { name: 'Accueil', url: '/' },
 *     { name: 'Expertises', url: '/expertises' },
 *     { name: 'SEO', url: '/expertises/seo' },
 *   ])
 */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `${BASE_URL}${url}`,
    })),
  }
}

// ─── Article ─────────────────────────────────────────────
/**
 * À utiliser sur /blog/[slug].
 * Permet à Google News, Bing News, Perplexity d'associer l'article à DARWIN.
 */
export function articleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  imageUrl,
  keywords,
}: ArticleData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${BASE_URL}${url}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      worksFor: DARWIN_PROVIDER,
    },
    publisher: {
      ...DARWIN_PROVIDER,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo-darwin.png`,
      },
    },
    ...(imageUrl ? { image: { '@type': 'ImageObject', url: `${BASE_URL}${imageUrl}` } } : {}),
    ...(keywords ? { keywords: keywords.join(', ') } : {}),
  }
}

// ─── LocalBusiness ────────────────────────────────────────
/**
 * À utiliser sur /contact.
 * Signal fort pour Google Maps, AI Overviews locaux, et les LLMs sur les requêtes
 * "agence SEO Aix-en-Provence", "agence marketing digital Provence", etc.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DARWIN',
    description: 'Agence marketing digital indépendante. SEO, SEA, SMA, Media, Analytics et GEO depuis 2003.',
    url: BASE_URL,
    telephone: '+33413570900',
    email: 'contact@darwin-agency.fr',
    foundingDate: '2003',
    logo: `${BASE_URL}/images/logo-darwin.png`,
    image: `${BASE_URL}/images/og-default.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '195 Avenue du Club Hippique',
      addressLocality: 'Aix-en-Provence',
      postalCode: '13090',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.5297,
      longitude: 5.4474,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:30',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/darwin-interactive',
    ],
    areaServed: [
      { '@type': 'City', name: 'Aix-en-Provence' },
      { '@type': 'City', name: 'Marseille' },
      { '@type': 'Country', name: 'France' },
    ],
  }
}

// ─── WebPage ──────────────────────────────────────────────
/**
 * Schema générique à utiliser sur les pages sans schema plus spécifique.
 * Minimal mais utile pour renforcer l'entité de la page.
 */
export function webPageJsonLd(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${BASE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'DARWIN',
      url: BASE_URL,
    },
    publisher: DARWIN_PROVIDER,
  }
}

// ─── CaseStudy ────────────────────────────────────────────
/**
 * À utiliser sur /cas-clients/[slug].
 * Permet aux LLMs d'associer DARWIN à des résultats clients mesurables.
 */
export function caseStudyJsonLd({ name, description, url, client, result }: CaseStudyData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    articleSection: 'Cas client',
    headline: name,
    description,
    url: `${BASE_URL}${url}`,
    about: { '@type': 'Organization', name: client },
    publisher: DARWIN_PROVIDER,
    keywords: `cas client, ${result}, agence SEO, DARWIN`,
  }
}
