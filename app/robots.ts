import type { MetadataRoute } from 'next'

const BASE = 'https://www.darwin-agency.fr'

export default function robots(): MetadataRoute.Robots {
  // En préproduction (proxy Basic Auth activé via PREVIEW_AUTH_ENABLED),
  // on interdit toute indexation. En production, on l'autorise.
  if (process.env.PREVIEW_AUTH_ENABLED === 'true') {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
  }
}
