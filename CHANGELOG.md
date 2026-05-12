# CHANGELOG — Site DARWIN
> Historique des grandes mises à jour du projet Next.js darwin-agency

---

## Conventions à respecter impérativement

| Règle | Valeur |
|---|---|
| Nom de la marque | **DARWIN** (toujours en majuscules, jamais "Darwin Agency") |
| LinkedIn | `https://www.linkedin.com/company/darwin-interactive` |
| Déploiement | Ne **jamais** pousser sur `main` sans demande explicite |
| Domaine (à confirmer) | `darwin-agency.fr` — à mettre à jour partout au lancement |

---

## [Session 1] — Fondation du projet

### Homepage (`app/page.tsx`)
- Reproduction de la homepage darwin-agency.com avec animations et assets réels
- **Hero parallax** : `HeroSection.tsx` (client component) avec scroll-driven `translateY`
  - Fond à `y * 0.9`, texte à `y * 0.55` via `requestAnimationFrame`
  - "THINKING" en outline : `color: transparent`, `WebkitTextStroke: '1.5px #0a0a0a'`, italic
  - `lineHeight: 0.95` sur le `<h1>`
- **Section Notre Agence** : 2 colonnes — gauche stats 2×2 (2003, +400, +30, +6 ANS) sur fond blanc, droite photo gymnaste full-height via `background-image`
- **Section Récompenses** : 5 logos réels entre Notre Agence et NOS MÉTIERS (`space-between`)
  - Les Cas d'Or, Deloitte, Selligent, lesBigBoss, Nuit des Rois
- **Accordéon "Nous sommes DARWIN"** : premier item ouvert par défaut (`open={true}`)
  - Texte branding/display avec `whiteSpace: 'pre-line'`
- **Certifications** : logo DoubleClick réduit à `h: 36` (autres à `h: 70`)
- Suppression des doublons de la section récompenses

---

## [Session 2] — Header & Footer

### Header (`app/components/Header.tsx`)
- Sous-menus Expertises (SEO, SEA, SMA, MEDIA, Analytics, Formation, Studio Créatif) et Vos Besoins
- **GEO** remplace "SEO Local" dans le sous-menu SEO (`label: 'GEO'`, `desc: 'Generative Engine Optimization'`)
- Bouton CONTACT pointe vers `/contact` (pas `#contact`)
- Type `Tab` avec `cta?` optionnel pour éviter l'erreur TypeScript au build
- Effet hover sur les items du menu principal

### Footer (`app/components/Footer.tsx`)
- Redesign complet orienté SEO
- Bande CTA cyan `#29C5F5` en haut
- Corps noir `#0a0a0a` avec grille 5 colonnes
- Colonnes : Logo+Infos+Adresse+Tel+LinkedIn | L'Agence | Expertises | Ressources | Newsletter
- Newsletter avec état `sent` (confirmation ✓ en jaune)
- Barre légale en bas : copyright + Mentions légales + RGPD (CGU retirée)

---

## [Session 3] — Layout global & Responsive

### Layout (`app/layout.tsx`)
- Header et Footer déplacés dans `layout.tsx` (partagés sur toutes les pages)
- Police Anton (titres) + Source Sans 3 (corps)
- `paddingTop: 68` sur `<main>` pour compenser le header fixe

### Responsive (`app/globals.css`)
- Classes utilitaires `rsp-*` pour adapter les grilles en mobile
- Hamburger menu sur mobile dans le Header
- Sous-menus adaptatifs en version mobile

---

## [Session 4] — Pages créées

### Page L'Agence (`app/agence/page.tsx`)
- Contenu aspiré depuis `darwin-agency.com/a-propos/`
- Sections : Hero, Objectifs (4 accordéons), 5 Raisons (icônes SVG), Équipe, Certifications, Expertises
- **Icônes SVG** minimalistes pour les 5 raisons (pas d'emojis) : personnes, barres, éclair, œil, médaille
- **Photos équipe** téléchargées et stockées localement dans `public/images/team/` :
  - Olivier Trubert, Gaëlle Aubert, Miriame Yvard, Jérome Renard, Carole Kabanda, Thomas Courjeault, Amaury Micha de Faletans, Julia Sanchez

### Page Agence SEO (`app/expertises/seo/page.tsx`)
- Template de base pour toutes les pages expertises
- Sections : Hero, Stats, Leviers (cartes blanches sur fond noir), Audit, Cas clients, GEO, CTA
- **Section GEO** : importance d'être cité dans les LLMs + CTA vers future page GEO
- Leviers SEO en cartes avec bordure accent jaune + hover

### Page Contact (`app/contact/page.tsx`)
- **Hero split 50/50** : gauche texte + CTA recrutement, droite image plan (`public/images/contact/plan.jpg`)
- Image plan aspirée depuis `darwin-agency.com` (SHOWREEL-1.jpg)
- Formulaire : `<ContactForm />` (notre composant, pas celui du site actuel)
- Sidebar droite : photo équipe, adresse, téléphone cliquable, LinkedIn, horaires 9h–18h30, newsletter
- CTA band jaune en bas

### Formulaire de contact (`app/components/ContactForm.jsx`)
- Champs : Prénom, Nom, **Entreprise**, Email pro, Téléphone
- Sélecteur besoins multi-choix (8 options)
- Budget en pills
- Validation + envoi via `/api/contact`
- État success avec message personnalisé

---

## [Session 5] — SEO Technique

> ⚠️ Le site est en production — indexation bloquée jusqu'au lancement

### Indexation bloquée
- `app/robots.ts` : `Disallow: /` pour tous les bots
- `layout.tsx` : `robots: { index: false, follow: false }`
- **À faire au lancement** : retirer ces deux protections + soumettre sitemap dans Google Search Console

### Sitemap (`app/sitemap.ts`)
- Généré automatiquement par Next.js → `/sitemap.xml`
- Pages indexées : `/`, `/agence`, `/contact`, `/expertises/seo`
- Pages commentées à activer au fur et à mesure : `/expertises/sea`, `/expertises/sma`, `/expertises/media`, `/expertises/analytics`, `/expertises/formation`, `/expertises/studio-creatif`, `/expertises/geo`, `/recrutement`
- **À faire au lancement** : remplacer `darwin-agency.fr` par le vrai domaine

### JSON-LD Organisation (`layout.tsx`)
- Schéma `Organization` global : nom, URL, logo, adresse, téléphone, LinkedIn, date de création
- Génère les rich snippets dans Google

### Open Graph
- Défauts globaux dans `layout.tsx` : `og:title`, `og:description`, `og:image`, `og:type`, Twitter card
- Overrides par page sur `/agence`, `/expertises/seo`, `/contact`
- Image OG : `public/images/og-default.jpg` (1200×630px) — **placée par le client**
- **À faire au lancement** : mettre à jour les URLs avec le vrai domaine

### Canonical tags
- `metadataBase: new URL(BASE_URL)` dans `layout.tsx` — Next.js gère les canonicals automatiquement
- `alternates: { canonical: '/ma-page' }` ajouté sur chaque page existante
- **Convention** : ajouter `alternates: { canonical: '/chemin' }` à chaque nouvelle page créée

---

## [Session 7] — Page Audit SEO, illustrations SVG, 404 & corrections éditoriales

### Nouvelle page : Audit SEO (`app/expertises/seo/audit-seo/page.tsx`)
- Page spoke complète (~3 100 mots) : hero split blanc, 4 piliers d'audit, méthodologie 5 étapes, livrable, cas clients, pourquoi DARWIN, FAQ (7 Q&A), maillage vers autres sous-pages
- Hero : colonne gauche texte/CTA, colonne droite illustration SVG avec ombre et fond `#f5f5f5`
- Section méthodologie : fond `#fafafa`, cartes blanches avec `border-left: 4px solid #0a0a0a` (style "L'approche DARWIN")
- Section maillage : dégradé diagonal `#27D9E5 → #B8E000` avec `clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%)`
- Contenu expert 2026 : INP remplace FID, AI Overviews >50%, Helpful Content System, GEO, JavaScript SEO
- Textes justifiés (`body-text`) + `<strong>` sur les termes clés via `dangerouslySetInnerHTML`
- Métadonnées SEO complètes : title, description, canonical, OpenGraph

### Illustrations SVG (`public/images/illustrations/`)
- 5 fichiers SVG sur fond transparent, conçus pour fond clair (pas de `<rect fill="#0a0a0a">`)
- Palette DARWIN : `#FFF127` jaune plein, `#29C5F5` cyan, `#0a0a0a` near-black, `#f8f8f8` fonds intérieurs
- `audit-seo.svg` : loupe + graphique en barres + navigateur
- `seo-technique.svg` : éditeur de code + arborescence de site avec nœuds erreur (rouge) et opportunité (jaune)
- `strategie-contenu.svg` : article/document + cluster de mots-clés (jaune primaire, cyan secondaire, gris longue traîne)
- `netlinking.svg` : graphe réseau — nœud central jaune, anneau 1 cyan, anneau 2 gris, nœud toxique rouge
- `geo-visibilite-ia.svg` : interface chat IA + globe avec signaux ondes jaunes et nœuds de présence

### Page 404 (`app/not-found.tsx`)
- Design immersif fond jaune `#FFF127`
- "404" en Anton géant sur toute la hauteur + effet miroir outline avec masque dégradé
- Bandes verticales cyan décoratives
- Contenu bas gauche : badge "ERREUR 404", titre "CETTE PAGE A DISPARU.", 2 CTAs (accueil + expertises)
- Barre noire `4px` en pied de page

### Header (`app/components/Header.tsx`)
- Type `items` enrichi : `href?: string` sur chaque item de sous-menu
- Sous-menu SEO : hrefs branchés sur les sous-pages existantes (Audit SEO, Stratégie de contenu, GEO, Netlinking, SEO Technique)
- Rendu desktop et mobile utilisent `item.href ?? '#'`

### Corrections éditoriales globales
- **Suppression de "gratuit" et "offert"** sur tout le site (7 occurrences dans 4 fichiers) — remplacés par "premier échange", "Demander un audit", "diagnostic SEO", etc.
- **Suppression des tarifs** de DARWIN dans le contenu public (FAQ audit-seo : fourchettes €€€ supprimées)
- **2025 → 2026** partout dans le contenu
- Footer : "Audit gratuit" → "Demander un audit"
- Page SEO : titre CTA "GRATUIT COMMENCE ICI" → "COMMENCE ICI"
- Étiquette "MAILLAGE SEO" → "NOS EXPERTISES" dans la section maillage
- Titres des signaux d'alerte (fond noir) : couleur jaune → blanc

### Règles éditoriales ajoutées (à respecter à vie)
- Ne jamais écrire "gratuit", "offert" ou équivalents — dévalorise le positionnement premium DARWIN
- Ne jamais afficher de tarifs ou fourchettes de prix DARWIN dans le contenu public
- Année de référence : **2026** (pas 2025)

---

## [Session 6] — SEO Technique avancé & Sécurité

### Audit H1/H2/H3 (toutes les pages)
- **Footer** : `<h2>` "BOOSTONS VOTRE PERFORMANCE DIGITALE" → remplacé par `<p>` (ce `<h2>` apparaissait sur TOUTES les pages, polluant la hiérarchie de titres de chaque URL)
- **Page Contact** : H1 "LET'S TALK!" → "CONTACTEZ DARWIN" (H1 sans keywords SEO → H1 avec intention de recherche claire)
- **Toutes les pages** : Remplacement systématique de "Darwin" par **DARWIN** dans tout le contenu texte (règle de marque : toujours majuscules, sans exception)
- Hiérarchie H1 → H2 → H3 validée sur les 4 pages : `/`, `/agence`, `/expertises/seo`, `/contact`
- H1 unique par page ✅ | Pas de saut de niveau ✅

### Rapport de sécurité

> ⚠️ Le site n'est pas encore en ligne — risques limités à ce stade. Les corrections ci-dessous sont à effectuer avant ouverture au public.

**Ce qui est déjà en place :**
- Indexation Google bloquée (robots.ts + noindex dans layout.tsx) — aucun crawler ne peut trouver le site
- Formulaire contact avec validation côté serveur (`/api/contact/route.js`)
- Variables d'environnement via `.env.local` (clé Resend, emails)
- Dépendances auditées via `npm audit` — aucune vulnérabilité critique

**Ce qui reste à sécuriser (avant lancement) :**

| Priorité | Action | Fichier |
|---|---|---|
| 🔴 Urgent | Ajouter les security headers HTTP (CSP, X-Frame-Options, HSTS, Referrer-Policy) | `next.config.ts` |
| 🔴 Urgent | Sanitiser le HTML du message dans l'email (risque XSS si Resend activé) | `app/api/contact/route.js` |
| 🟡 Important | Ajouter rate limiting sur `/api/contact` (protection spam/DDoS) | `app/api/contact/route.js` |
| 🟡 Important | Supprimer les `console.log` qui exposent les données personnelles | `app/api/contact/route.js` |
| 🟢 Lancement | Vérifier que le repo GitHub est bien en **privé** | GitHub |
| 🟢 Lancement | Configurer SPF / DKIM / DMARC sur `darwin-agency.fr` | DNS |

**Convention de confidentialité :**
- Le site n'est pas référencé, pas partagé, pas accessible publiquement
- Aucun lien externe ne pointe vers lui
- Le risque de sécurité actuel est minimal — priorité : sécuriser avant le lancement

---

## Tâches SEO restantes

| # | Tâche | Statut |
|---|---|---|
| 6 | Audit H1/H2/H3 sur toutes les pages | ✅ Fait |
| 7 | Audit attributs `alt` sur toutes les images | ⏳ À faire |
| 8 | Remplacer les `<img>` restants par `<Image>` Next.js | ⏳ À faire |
| 9 | JSON-LD LocalBusiness sur `/contact` | ⏳ À faire |
| 10 | Breadcrumbs sur les pages `/expertises/*` | ⏳ À faire |
| 11 | **Activer l'indexation Google** (lancement) | 🔒 Bloqué jusqu'au lancement |

## Tâches Sécurité restantes

| # | Tâche | Priorité | Statut |
|---|---|---|---|
| S1 | Security headers dans `next.config.ts` | 🔴 Urgent | ⏳ À faire |
| S2 | Sanitisation HTML dans `/api/contact/route.js` | 🔴 Urgent | ⏳ À faire |
| S3 | Rate limiting sur `/api/contact` | 🟡 Important | ⏳ À faire |
| S4 | Supprimer `console.log` avec données personnelles | 🟡 Important | ⏳ À faire |
| S5 | Vérifier visibilité repo GitHub (doit être privé) | 🟢 Lancement | ⏳ À faire |
| S6 | SPF / DKIM / DMARC sur le domaine | 🟢 Lancement | ⏳ À faire |

---

## Pages à créer (futures sessions)

| Page | URL | Statut |
|---|---|---|
| SEA | `/expertises/sea` | À créer |
| SMA | `/expertises/sma` | À créer |
| MEDIA | `/expertises/media` | À créer |
| Analytics | `/expertises/analytics` | À créer |
| Formation | `/expertises/formation` | À créer |
| Studio Créatif | `/expertises/studio-creatif` | À créer |
| GEO | `/expertises/geo` | À créer |
| Recrutement | `/recrutement` | À créer |
| Audit SEO | `/expertises/seo/audit-seo` | ✅ Fait |
| Sous-pages SEO | `/seo/seo-technique`, `/seo/strategie-contenu`, `/seo/netlinking`, `/seo/geo-visibilite-ia` | À créer |
| Agence Média (hub) | `/agence-media` | ✅ Fait |
| Audit Stratégie Digitale | `/agence-media/audit-strategie-digitale` | ✅ Fait |
| Marketing Strat vs Ops | `.../marketing-strategique-vs-marketing-operationnel` | ✅ Fait (ArticleLayoutV2) |
| Génération de Leads | `/agence-media/generation-de-leads` | ✅ Fait |
| Comment Trouver des Leads | `.../comment-trouver-des-leads` | ✅ Fait (ArticleLayoutV2) |
| Leads B2B | `.../comment-generer-des-leads-en-b2b` | ✅ Fait (ArticleLayoutV2) |
| Qualification d'un Lead | `.../etapes-de-qualification-d-un-lead` | ✅ Fait (ArticleLayoutV2) |

---

## Tâches Blog

> Page `/blog` — contenu statique, pas de CMS.

| # | Étape | Détail | Statut |
|---|---|---|---|
| B1 | Fichier de données `app/data/blog.ts` | Structure : slug, titre, date, catégorie, extrait, image, contenu, sections | ✅ Fait |
| B2 | Composant `ArticleCard.tsx` | Image 16/9, badge catégorie, titre, excerpt, auteur, date | ✅ Fait |
| B3 | Page `/blog` | Listing client avec filtres catégories + pagination 12 articles/page | ✅ Fait |
| B4 | Page `/blog/[slug]` | Template 2 colonnes : article + sidebar (newsletter / auteur / contact) | ✅ Fait |
| B5 | Header + Footer | Lien `/blog` dans la navigation | ✅ Fait |
| B6 | Sitemap | `/blog` et `/blog/[slug]` dans `sitemap.ts` | ✅ Fait |
| B7 | SEO dynamique | `generateMetadata()` par article : title, description, OG, canonical | ✅ Fait |

---

## Tâches Cas Clients à venir

> Page `/cas-clients` — contenu aspiré depuis l'ancien site, filtre par levier, chiffres clés réutilisables dans les pages internes. Estimation : 2 sessions (scraping + développement).

**Les 7 leviers de filtre :** SEO · SEA · SMA · Média · Analytics · Formation · Branding

| # | Étape | Détail | Statut |
|---|---|---|---|
| C1 | Scraping ancien site | Aspirer depuis `darwin-agency.com` : titres, descriptions, chiffres clés, images, levier(s) associé(s) | ⏳ À faire |
| C2 | Fichier `app/data/cas-clients.ts` | Structure : slug, client, levier(s), résumé, chiffres clés, images, contenu (contexte / défi / solution / résultats) | ✅ Fait |
| C3 | Fichier `app/data/stats.ts` | Centraliser les chiffres clés par levier — réutilisables dans les pages `/expertises/*` | ⏳ À faire |
| C4 | Composant `CasClientsGrid.tsx` | Logo client, levier badge, titre, chiffre clé mis en avant, extrait, lien | ✅ Fait |
| C5 | Page `/cas-clients` | Grille de cas + filtre par levier (7 filtres) + état "aucun résultat" | ✅ Fait |
| C6 | Page `/cas-clients/[slug]` | Cas complet : contexte, défi, solution DARWIN, résultats chiffrés | ✅ Fait |
| C7 | Injection dans les pages expertises | Chiffres clés issus de `stats.ts` → section résultats dans `/expertises/seo`, `/sea`, etc. | ⏳ À faire |
| C8 | Header + Footer | Ajouter `/cas-clients` dans la navigation | ✅ Fait |
| C9 | Sitemap | Ajouter `/cas-clients` et `/cas-clients/[slug]` dans `sitemap.ts` | ✅ Fait |
| C10 | SEO dynamique | `metadata` par cas : title, description, OG, canonical + JSON-LD schema `CaseStudy` | ⏳ À faire |

---

## [Session 13] — ArticleLayoutV2 : nouveau design pages profondes & contenus mis à jour

> Design validé en réunion le 16/04/2026. Devient la convention pour toutes les pages profondes (niveau 3+).

### Contenus textes mis à jour (5 pages)

Intégration mot pour mot des contenus markdown validés depuis les fichiers de production :

| Page | Modifications principales |
|------|--------------------------|
| `agence-media/page.tsx` | Hero (DARWIN, parcours d'achat), définition (outils multimédia, métier technique), pilotage (brand safety), FAQ (ROI, secteurs), méthode, différence (collectif) |
| `agence-media/audit-strategie-digitale/page.tsx` | Définition élargie (présence en ligne, outils de suivi), 4e dimension enrichie (présence en ligne, concurrents), livrable (ensemble), quick wins |
| `.../marketing-strategique-vs-marketing-operationnel/page.tsx` | Réécriture sections stratégique/opérationnel, table comparative refondue (3 lignes), pièges, théorie→action, CTA final |
| `agence-media/generation-de-leads/page.tsx` | ROI/ROAS explicités, définition secteurs, parcours B2B détaillé |
| `.../comment-trouver-des-leads/page.tsx` | ~20 passages réalignés (hero, sources, canaux, indicateurs, CTA DARWIN) |

### Nouvelles pages créées (2 pages)

| Page | URL | Contenu |
|------|-----|---------|
| Génération de Leads B2B | `/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b` | LinkedIn Ads, social selling, content marketing, thought leadership, SEO B2B |
| Qualification d'un Lead | `/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead` | MQL/SQL, lead scoring, BANT/CHAMP, automatisation CRM |

### Nouveau composant : `ArticleLayoutV2` (`app/components/ArticleLayoutV2.tsx`)

Composant client réutilisable pour toutes les pages profondes. Remplace l'ancien template à sections alternées colorées (jaune/noir/blanc) par un layout article/blog.

**Structure :**
1. **Hero split 50/50** — breadcrumb, titre Anton, intro, illustration SVG (optionnelle), meta (temps de lecture, type), boutons de partage social
2. **Encart "L'essentiel"** — synthèse GEO/AEO en 4-5 points, bordure jaune gauche, pensé pour extraction par IA génératives (ChatGPT, Perplexity, AI Overviews)
3. **Layout 2 colonnes** — `grid: 300px 1fr` :
   - **Sidebar gauche (sticky)** : fond `#fafafa`, bordure + barre jaune top, sommaire avec ancres actives (IntersectionObserver), auteur (photo ronde + nom + rôle), widget "Sur le même sujet"
   - **Contenu principal** : sections avec eyebrow cyan, H2 Anton, paragraphes justifiés, blockquotes, cartes accent/dark
4. **Conclusion** — encart fond noir `#0a0a0a` avec label jaune "En résumé"
5. **Boutons de partage** — LinkedIn, X (Twitter), Email — en haut (hero meta) et en bas (après conclusion)
6. **Mobile (≤960px)** — sidebar masquée, remplacée par toggle "Sommaire" sticky, hero passe en 1 colonne, illustration masquée

**Props :**
```tsx
interface ArticleLayoutV2Props {
  jsonLd: object[]
  breadcrumbs: BreadcrumbItem[]
  badge?: string                    // Badge jaune (généralement omis)
  title: ReactNode                  // H1 Anton avec <br />
  intro: string                     // Paragraphe d'intro
  heroIllustration?: ReactNode      // SVG illustration
  shareUrl: string                  // URL pour partage social
  shareTitle: string                // Titre pour partage social
  tocItems: TocItem[]               // Sommaire { id, label }
  relatedPages: RelatedPage[]       // Pages liées { href, label, desc }
  essentialPoints: string[]         // Points de synthèse GEO
  author?: Author                   // { name, role, photo }
  conclusion?: ReactNode            // Encart "En résumé"
  children: ReactNode               // Sections article
}
```

**Classes CSS du contenu :**
- `artv2-section` — wrapper de section avec `id` pour ancres
- `artv2-section-header` — contient `artv2-eyebrow` (cyan) + `artv2-h2`
- `artv2-body` — paragraphe corps (justify, 1rem)
- `artv2-blockquote` / `artv2-blockquote--highlight` — citations (bordure noire / jaune)
- `artv2-card-accent` — carte fond gris avec bordure jaune gauche
- `artv2-card-dark` — carte fond noir

**Conventions titres :** toujours `&nbsp;` entre les 2 derniers mots des H2 (anti-orphelin typographique).

### Pages migrées vers ArticleLayoutV2 (4 pages)

| Page | Auteur sidebar |
|------|----------------|
| `comment-generer-des-leads-en-b2b` | Carole Kabanda |
| `comment-trouver-des-leads` | Jérôme Renard |
| `etapes-de-qualification-d-un-lead` | Carole Kabanda |
| `marketing-strategique-vs-marketing-operationnel` | Mathilde Colonna D'Istria |

### Corrigé

- **`NewsletterCTA.tsx`** — responsive mobile : grid passe de `1fr 1fr` à `1fr` sous 768px, padding réduit, bordure adaptée
- **Hydration mismatch** corrigé : `readingTime` calculé dans `useEffect` (pas au render initial)
- **React key warning** corrigé : children wrappés dans `<div>` dédié dans le composant layout

### Architecture mise à jour

```
app/
├── agence-media/
│   ├── page.tsx                                          ← Hub Agence Média
│   ├── audit-strategie-digitale/
│   │   ├── page.tsx                                      ← Audit Stratégie Digitale
│   │   └── marketing-strategique-vs-marketing-operationnel/
│   │       └── page.tsx                                  ← ArticleLayoutV2
│   └── generation-de-leads/
│       ├── page.tsx                                      ← Génération de Leads
│       ├── comment-trouver-des-leads/page.tsx             ← ArticleLayoutV2
│       ├── comment-generer-des-leads-en-b2b/page.tsx      ← ArticleLayoutV2
│       └── etapes-de-qualification-d-un-lead/page.tsx     ← ArticleLayoutV2
├── components/
│   ├── ArticleLayoutV2.tsx                               ← NOUVEAU — layout article pages profondes
│   ├── NewsletterCTA.tsx                                 ← Responsive fix
│   └── ...
```

---

## [Session 12] — Section Agence Média : 8 pages + sous-pages

> Session précédente (non documentée) : création de la section `/agence-media/` complète avec page hub et 7 sous-pages (plan-media, campagnes-emailing, campagnes-rcs-sms, audio-digital, tv-segmentee-ctv, campagnes-dooh, audit-strategie-digitale) + photos équipe.

---

## [Session 11] — Audit SEOQuake : OG type site-wide & titres raccourcis

> Retours SEOQuake post-scan : 3 corrections structurelles appliquées.

### Ajouté
- `app/lib/og.ts` — exporte `ogDefaults` (`siteName`, `locale`, `type: 'website'`, `images`). À spreader dans **chaque** `openGraph` de page pour contourner le shallow-merge Next.js qui écrase les champs du `layout.tsx` dès qu'une page redéfinit `openGraph`.

### Corrigé
- **OG type manquant** sur 15 pages : SEOQuake signalait "Open Graph type indéterminé". Cause : `metadata.openGraph` est shallowly-merged par Next.js (doc `node_modules/next/dist/docs/.../generate-metadata.md` L1328) — chaque page écrasait `type`, `siteName`, `locale` du layout. Fix : `...ogDefaults` injecté dans `openGraph` de toutes les pages statiques + `blog/[slug]` + `cas-clients/[slug]`. `blog/[slug]` conserve `type: 'article'` positionné après le spread.
- **Titres trop longs (>70 car.)** raccourcis sur 3 pages :
  - `agence-media` : 85 → 60 car. — "Agence Média — Plan média & performance publicitaire | DARWIN"
  - `agence-media/generation-de-leads` : 82 → 67 car. — "Génération de leads B2B & B2C — Méthodes qui convertissent | DARWIN"
  - `.../marketing-strategique-vs-marketing-operationnel` : 95 → 69 car. — "Marketing stratégique vs opérationnel — Vision & performance | DARWIN"

### À noter
- Warning SEOQuake "microformats" = **faux positif** : JSON-LD déjà présent sur toutes les pages (FAQPage, Service, Breadcrumb, Article, CaseStudy). Google privilégie JSON-LD depuis ~2015.
- Warning SEOQuake "canonical inaccessible" sera résolu au basculement DNS.

---

## [Session 10] — Section agence-media, newsletter Brevo & template niveau 3

### Brevo — ✅ connecté (aucune variable d'environnement requise)
- La route `app/api/newsletter/route.js` poste directement vers l'endpoint Brevo fourni (`sibforms.com/serve/...`), côté serveur pour éviter les CORS. Champs : `EMAIL`, `PRENOM`, `locale=fr`, honeypot `email_address_check`.
- Tous les formulaires newsletter du site sont désormais fonctionnels et reliés à Brevo.

### Ajouté
- `app/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel/page.tsx` — **template page conseil niveau 3** pour la section agence-media : hero split 50/50, tableau comparatif, schéma d'articulation, sections prose éditoriales, CTA, liens internes. À dupliquer pour les futures pages de cette section.
- `app/components/NewsletterCTA.tsx` — composant newsletter réutilisable (fond jaune/noir, formulaire prénom + email, spinner loading, états loading/success/error, event GA4 label `darwin_newsletter`)
- `app/components/NewsletterSidebar.tsx` — composant newsletter compact pour la sidebar blog (fond noir, event GA4 label `blog_sidebar`)
- `app/api/newsletter/route.js` — route API Brevo : POST vers `sibforms.com/serve/...`, URLSearchParams, vérifie `res.ok` (Brevo retourne du HTML, pas du JSON)
- Route `agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel` ajoutée dans `app/sitemap.ts`

### Corrigé / mis à jour
- `app/components/Footer.tsx` — formulaire newsletter était non-fonctionnel (setSent direct). Remplacé par fetch `/api/newsletter` avec état loading/sending, event GA4 label `footer`.
- `app/blog/[slug]/page.tsx` — formulaire newsletter statique (sans onSubmit) remplacé par `<NewsletterSidebar />` (client component connecté à Brevo).

---

## [Session 9] — GEO site-wide : helpers JSON-LD, llms.txt & conventions AEO

> GEO (Generative Engine Optimization) intégré comme standard sur **toutes les pages**, pas uniquement les pages expertise.
> Objectif : que DARWIN soit cité dans ChatGPT, Perplexity, Google AI Overviews, Gemini sur l'ensemble de ses expertises.

### `app/lib/jsonld.ts` — helpers JSON-LD centralisés

Fichier utilitaire avec 7 fonctions réutilisables :

| Fonction | Schema | Utilisée sur |
|---|---|---|
| `faqJsonLd(items)` | FAQPage | Toutes les pages (min. 3 Q&A) |
| `serviceJsonLd({name, description, url})` | Service | Chaque page expertise |
| `breadcrumbJsonLd(items)` | BreadcrumbList | Sous-pages /expertises/* |
| `articleJsonLd({...})` | Article | /blog/[slug] |
| `localBusinessJsonLd()` | LocalBusiness | /contact |
| `webPageJsonLd(name, desc, url)` | WebPage | Pages simples |
| `caseStudyJsonLd({...})` | Article (CaseStudy) | /cas-clients/[slug] |

**Usage :**
```tsx
import { faqJsonLd, serviceJsonLd } from '@/lib/jsonld'
// Dans le JSX (Server Component) :
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
```

### `public/llms.txt`

Fichier standard émergent (équivalent `robots.txt` pour les LLMs).
Contenu : présentation DARWIN, expertises, pages clés, certifications, distinctions.
**À mettre à jour** à chaque nouvelle page ou expertise ajoutée.

### Conventions AEO — règles rédactionnelles obligatoires

Appliquées à **chaque page et chaque article** :
- Réponse directe dès la 1ère phrase (pas d'intro générique)
- FAQ minimum : 3 Q&A/page, 5+ sur expertises, 10+ sur pages GEO
- Réponses FAQ : 40–300 mots, chiffres datés
- Mention DARWIN + Aix-en-Provence dans au moins 1 réponse sur 3
- Définitions en début de section pour les termes techniques

### Checklist création de page (7 points)

Avant d'écrire le JSX :
1. `metadata` : title, description, canonical, openGraph
2. JSON-LD adapté au type de page (via `app/lib/jsonld.ts`)
3. `faqJsonLd` : min. 3 Q&A
4. Premier paragraphe : réponse directe à l'intention
5. Chiffres datés dans le contenu
6. Route dans `app/sitemap.ts`
7. `public/llms.txt` mis à jour si page importante

### Statut JSON-LD sur les pages existantes

Pages à mettre à jour (prochaines sessions) :

| Route | À ajouter |
|---|---|
| `/contact` | `localBusinessJsonLd` + `faqJsonLd` |
| `/a-propos-de-darwin` | `faqJsonLd` + `webPageJsonLd` |
| `/expertises/seo` | `serviceJsonLd` + `faqJsonLd` + `breadcrumbJsonLd` |
| `/expertises/seo/audit-seo` | `serviceJsonLd` + `breadcrumbJsonLd` (FAQ ✅ déjà 7 Q&A) |
| `/blog/[slug]` | `articleJsonLd` |
| `/cas-clients/[slug]` | `caseStudyJsonLd` |

---

## [Session 8] — Blog, Cas Clients, Page À Propos & nouveaux composants

### Page À Propos (`app/a-propos-de-darwin/page.tsx`)
- Nouvelle URL SEO-friendly pour "L'Agence" — remplace `/agence` dans la navigation Header
- Canonical `/a-propos-de-darwin`, metadata complètes, OG par défaut
- Même contenu que `/agence` : stats, équipe, certifications, expertises

### Blog (`app/blog/`)
- **`app/data/blog.ts`** — type `BlogArticle` avec sections/blocks (paragraph | list | callout | subtitle)
- **`app/data/team.ts`** — données auteurs réutilisées dans les cards et sidebar
- **`app/components/ArticleCard.tsx`** — image 16/9, badge catégorie éditoriale, auteur, date
- **`app/blog/BlogListing.tsx`** — listing client : filtres 6 catégories + pagination 12 articles/page
- **`app/blog/page.tsx`** — page serveur avec metadata statiques
- **`app/blog/[slug]/page.tsx`** — template article 2 colonnes : article + sidebar (newsletter / auteur / CTA contact)
- **6 catégories éditoriales** : La preuve avant tout · Le praticien qui parle · L'horizon qui avance · La complexité rendue simple · Le partenaire de la durée · L'avis qui dérange
- **Script d'import** `scripts/import-article.mjs` — Puppeteer, sélecteur `.swm-post-single-content`, génère `scripts/_last-import.ts`
- Header + Sitemap branchés (B5, B6 ✅)

### Cas Clients — finalisation navigation
- Header : lien `CAS CLIENTS → /cas-clients` ajouté dans la nav principale (C8 ✅)
- Sitemap : routes `/cas-clients` + `/cas-clients/[slug]` dynamiques (C9 ✅)

### Nouveaux composants
- **`PageHero.tsx`** — hero sobre réutilisable (eyebrow, title, description, breadcrumbs)
- **`BesoinsAccordion.tsx`** — accordéon animé "Nous répondons à vos besoins" (homepage)
- **`PerformanceSlider.tsx`** — slider méthodologie AUDIT → STRATÉGIE → ACTION → REPORTING (homepage)

---

## [Session 14] — Interview Carole, cocon audit-strategie-digitale, référentiel SEO consolidé

### Page Agence Média (`app/agence-media/page.tsx`)
- Section « Vos objectifs, notre stratégie » redesignée en format éditorial : portrait de **Carole Kabanda** (directrice média) en colonne droite avec guillemets jaunes décoratifs, intro + citation encadrée (filet jaune), grille 2×2 des 4 objectifs (Notoriété / Brandformance / Performance / Drive-to-store). **Textes originaux des 4 cartes conservés mot pour mot** — seule la mise en forme change.
- H1 : « RÔLE PRÉCIS » (encart jaune) remis sur la même ligne que « UN »
- Lien « Découvrir → » réaffiché sur toutes les cartes de la section services
- Retrait des `<strong>` ajoutés sans validation (« stratégies digitales », « audit et la stratégie digitale », « génération de lead qualifié », « Creative Thinking Community… », « comme un système… »)
- Paragraphe redondant retiré dans la section « Le média qui convertit »
- `sizes` ajouté sur les 3 images `fill` (hero, cartes cas clients, ornement) → warning Next.js résolu ; tiret cadratin retiré de l'`alt` du hero
- Passe espaces insécables (avant `:` `;` `!` `?`, autour de `« »`)

### Footer (`app/components/Footer.tsx`)
- Le CTA cyan « Prêt à passer à l'action ? » est désormais **masqué sur les 7 pages piliers** (agence-media, agence-seo, agence-sma, agence-sea, agence-analytics, formations, studio-creatif) via `usePathname()`

### Page Audit Stratégie Digitale (`app/agence-media/audit-strategie-digitale/page.tsx`)
- Section « Définition » remontée d'un cran (juste après le hero, avant « Pourquoi un audit »)
- `<strong>` rééquilibrés (6 → 4, tous avec mot-clé, hors callouts) : retrait de la phrase entière « Auditer, c'est reprendre de la hauteur. », `<strong>` sur « audit de stratégie digitale » (hero), « le plan marketing ressemble davantage à un empilement », définition raccourcie à « un état des lieux structuré de votre présence »
- **Maillage interne cocon N1** : un lien contextuel par bloc H2 vers les 4 pages enfants — `marketing-strategique-vs-marketing-operationnel` (card 03), `indicateurs-de-performance-mix-marketing` (méthodo étape 03), `mix-marketing-interne-ou-externe` (« Le livrable »), `objectifs-marketing-digital` (section Définition)
- Bouton « ← Retour Agence Média » du hero supprimé (doublon avec le breadcrumb + le lien contextuel du chapô vers `/agence-media`)
- Ancres « DÉCOUVRIR → » → « Découvrir [nom du levier] → » dans « Nos autres leviers média »
- Section « Cas clients » : le `<Link>` n'enveloppe plus la carte entière → ancre texte « Voir le cas [client] → » à l'intérieur
- Passe espaces insécables + fix `+65 %` (cas client Acadomia)

### Sous-pages Audit — 3 pages coquilles créées (`app/agence-media/audit-strategie-digitale/`)
- `indicateurs-de-performance-mix-marketing/page.tsx`, `mix-marketing-interne-ou-externe/page.tsx`, `objectifs-marketing-digital/page.tsx` — chacune avec metadata complète, breadcrumb + WebPage JSON-LD, H1, note « contenu en cours de rédaction », lien retour. Contenu éditorial à intégrer ultérieurement (sur `ArticleLayoutV2`).
- 3 routes ajoutées dans `app/sitemap.ts`

### Page Marketing Stratégique vs Opérationnel (`.../marketing-strategique-vs-marketing-operationnel/page.tsx`)
- Chapô remis aux normes cocon N2 : **2 liens up** (page cible `/agence-media` + parent N1 `/agence-media/audit-strategie-digitale`)
- `relatedPages` sidebar : lien mort `objectifs-marketing-digital` réparé (coquille créée) + 3ᵉ entrée `mix-marketing-interne-ou-externe`
- `<strong>` rééquilibrés (5 → 3, tous avec mot-clé / co-occurrences, hors callouts/cards)
- H2 « Pourquoi l'articulation… échoue » → « Marketing stratégique vs opérationnel : pourquoi l'articulation échoue » (MCP en début de balise)
- Title raccourci : « Marketing stratégique vs opérationnel | Vision & performance » (60 c, dans la fourchette 55-65)
- Passe espaces insécables

### Process — référentiel SEO consolidé (mémoires agent, hors repo)
- Création d'un référentiel SEO unique et prioritaire consolidant les 3 fichiers `SEO maillage/` (27/04/2026) + `Production Contenus/.../2026-05-06_guide-seo-production-pages_v1.md` : format H1 `[MCP] : [complément]`, 1er H2 avec MCP, maillage cocon « poupées russes » et règles par typologie (cible/N1/N2/finale), `<strong>` anti-footprint, title 55-65 / meta 140-160, points de convergence, dofollow obligatoire, préprod par login. Les règles SEO ont été retirées du mémo conventions (qui renvoie désormais au référentiel).

---

## [Session 15] — Deux nouveaux cas clients + animation des liens du template

### Cas clients (`app/data/cas-clients.ts`)
- Ajout de **Les Restos du Cœur** (`/cas-clients/restos-du-coeur`, levier MÉDIA — audio digital + retargeting display, taux de complétion 90 %) et **Maty** (`/cas-clients/maty`, levier MÉDIA — drive-to-store mobile géolocalisé RCS/SMS, +2 % de visites / 41 % de nouveaux clients), repris de l'ancien site `darwin-agency.com`. Textes (contexte, problématique, objectifs, étapes de solution, conclusion) intégrés mot pour mot ; `title` et `excerpt` rédigés à partir du contenu des pages.
- Placés en tête du tableau `CAS_CLIENTS` → affichés en premier sur la grille ; routes et sitemap générés automatiquement
- 4 images téléchargées dans `public/images/cas-clients/` : `restos-du-coeur-cover.jpg`, `restos-du-coeur-ill.jpg`, `maty-cover.jpg`, `maty-ill.jpg`
- Liens de conclusion → `/agence-media` (« En savoir plus sur le MÉDIA », cohérent avec les autres cas MÉDIA)

### Template cas client (`app/cas-clients/[slug]/page.tsx` + `app/globals.css`)
- Animation au survol sur les liens structurels : CTA de conclusion (soulignement « balayé » droite→gauche via deux dégradés superposés + flèche `→` qui glisse) et flèche `VOIR LE CAS →` des cartes « Découvrez nos autres cas » (glisse au survol de la carte)
- Classes `.cas-cta-link` / `.cas-cta-arrow`, easing `cubic-bezier(0.65, 0, 0.35, 1)` ~0.34 s, fallback `prefers-reduced-motion: reduce`
- Breadcrumb du hero volontairement non animé (convention `globals.css` : pas d'animation sur les liens de nav/breadcrumb)

---

## Architecture des fichiers clés

```
app/
├── layout.tsx                      ← Header, Footer, JSON-LD, OG globaux, canonical base
├── page.tsx                        ← Homepage
├── robots.ts                       ← Bloque l'indexation en production
├── sitemap.ts                      ← Génère /sitemap.xml (statique + blog + cas-clients)
├── not-found.tsx                   ← 404 fond jaune
├── a-propos-de-darwin/page.tsx     ← Page L'Agence (URL dans la nav)
├── agence/page.tsx                 ← Ancienne URL (peut rediriger)
├── contact/page.tsx                ← Page Contact
├── blog/
│   ├── page.tsx                    ← Listing blog
│   ├── BlogListing.tsx             ← Listing client (filtres + pagination)
│   └── [slug]/page.tsx             ← Article complet
├── cas-clients/
│   ├── page.tsx                    ← Grille + filtres leviers
│   └── [slug]/page.tsx             ← Cas complet
├── expertises/
│   └── seo/
│       ├── page.tsx                ← Page Agence SEO
│       └── audit-seo/page.tsx      ← Page Audit SEO spoke
├── components/
│   ├── Header.tsx                  ← Navigation avec sous-menus
│   ├── Footer.tsx                  ← Footer SEO
│   ├── HeroSection.tsx             ← Hero parallax homepage
│   ├── ContactForm.jsx             ← Formulaire de contact
│   ├── PageHero.tsx                ← Hero sobre réutilisable
│   ├── ArticleLayoutV2.tsx         ← Layout article pages profondes (sidebar sticky, TOC, GEO)
│   ├── ArticleCard.tsx             ← Carte article blog
│   ├── CasClientsGrid.tsx          ← Grille cas clients
│   ├── NewsletterCTA.tsx           ← Bloc newsletter Brevo mid-content (responsive)
│   ├── NewsletterSidebar.tsx       ← Newsletter compact sidebar blog
│   ├── BesoinsAccordion.tsx        ← Accordéon besoins homepage
│   └── PerformanceSlider.tsx       ← Slider méthodologie homepage
└── data/
    ├── blog.ts                     ← Articles (BlogArticle, BlogSection, BlogBlock)
    ├── cas-clients.ts              ← Cas clients
    └── team.ts                     ← Données auteurs/équipe

public/
├── images/
│   ├── gymnaste.jpg                ← Photo hero section Notre Agence
│   ├── og-default.jpg              ← Image Open Graph 1200×630px
│   ├── team/                       ← Photos équipe dirigeante
│   ├── contact/                    ← Photos page contact
│   ├── blog/                       ← Images hero articles
│   ├── illustrations/              ← 5 SVG DARWIN (audit-seo, seo-technique, etc.)
│   └── seo/                        ← Visuels page Agence SEO
├── logos/
│   ├── certifications/             ← Google Partner, Meta, Microsoft, etc.
│   ├── clients/                    ← Logos clients
│   └── recompenses/                ← Logos prix & récompenses
```
