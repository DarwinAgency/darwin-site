/**
 * app/lib/og.ts
 * Défauts Open Graph — fusionnés dans chaque page.
 *
 * Next.js fait un shallow-merge sur `metadata.openGraph` : dès qu'une page
 * redéfinit `openGraph`, les champs du layout (type, siteName, locale) sont
 * écrasés. Spreader `ogDefaults` dans chaque `openGraph` de page garantit
 * que `og:type`, `og:site_name` et `og:locale` restent présents dans le HTML.
 */

export const ogDefaults = {
  siteName: 'Darwin Agency',
  locale: 'fr_FR',
  type: 'website' as const,
  images: [
    {
      url: '/images/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'Darwin Agency',
    },
  ],
}
