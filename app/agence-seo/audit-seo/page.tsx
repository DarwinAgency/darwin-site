// ─────────────────────────────────────────────────────────
// FICHIER : app/agence-seo/audit-seo/page.tsx
// RÔLE    : Sous-page "Audit SEO" — modèle spoke de la page mère SEO
// DÉPEND  : app/agence-seo/page.tsx (page mère / hub)
// ─────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import { DARWIN_YEARS } from '../../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../../lib/jsonld'
import { ogDefaults } from '../../lib/og'

// ─── METADATA ───────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Audit SEO — Diagnostic complet de votre site | DARWIN',
  description: "Identifiez ce qui freine votre visibilité sur Google et les IA. DARWIN réalise votre audit SEO complet : technique, sémantique, netlinking et GEO. Livrable actionnable sous 10 jours.",
  alternates: { canonical: '/agence-seo/audit-seo' },
  openGraph: {
    ...ogDefaults,
    title: 'Audit SEO complet — Technique, Contenu, Netlinking & IA | DARWIN',
    description: "Diagnostic SEO complet par DARWIN : crawl technique, analyse sémantique, profil de liens et visibilité dans les moteurs génératifs. Rapport livré en 10 jours.",
    url: 'https://darwin-agency.fr/agence-seo/audit-seo',
  },
}

// ─── DATA ────────────────────────────────────────────────

const auditPillars = [
  {
    id: '01',
    title: 'Audit technique',
    desc: "Le fondement de tout. On analyse l'ensemble des signaux que Google exploite avant même de lire votre contenu : vitesse de chargement, <strong>Core Web Vitals (LCP, INP, CLS)</strong> — avec <strong>INP qui a remplacé FID en mars 2024</strong> —, architecture d'URL, crawlabilité, gestion de l'indexation, fichiers de logs serveur, balises canoniques, redirections en chaîne et <strong>données structurées Schema.org</strong>. Nous analysons aussi les problèmes spécifiques aux <strong>sites JavaScript</strong> (SPA, Next.js, Nuxt) : délai de rendu côté client, pages non indexables, gestion des routes dynamiques. Un site techniquement défaillant restera invisible, quelle que soit la qualité de ses textes.",
    items: ["Crawl complet & analyse des erreurs d'indexation", 'Core Web Vitals & performance (LCP, INP, CLS)', 'Architecture, maillage interne & crawl budget', 'Analyse des fichiers de logs serveur', 'Données structurées, balises et rendu JavaScript'],
  },
  {
    id: '02',
    title: 'Audit sémantique',
    desc: "On cartographie vos mots-clés actuels, ceux sur lesquels vous devriez être positionnés, et ceux que vous laissez à vos concurrents. Avec l'intégration de l'<strong>Helpful Content System</strong> dans l'algorithme core de Google depuis 2024, les signaux de qualité et d'expertise sont devenus déterminants. Nous détectons les phénomènes de <strong>cannibalisation</strong>, les pages sans intention de recherche clairement définie, les taux de correspondance entre le contenu et les requêtes réelles, et les cocons thématiques à construire pour asseoir votre autorité. Chaque recommandation est formulée en tenant compte de l'<strong>intention de recherche</strong> (informationnelle, transactionnelle, navigationnelle) pour maximiser le taux de clics et la conversion.",
    items: ['Analyse de positionnement actuel (Search Console + Semrush)', 'Opportunités de mots-clés à fort potentiel', 'Détection des cannibalisations & pages orphelines', 'Analyse des intentions de recherche par segment', 'Plan de cocons thématiques & maillage éditorial'],
  },
  {
    id: '03',
    title: 'Audit netlinking',
    desc: "L'autorité d'un site se mesure à la qualité de ceux qui en parlent. Nous analysons l'intégralité de votre profil de backlinks : liens entrants par domaine référent, <strong>score d'autorité (DR Ahrefs, DA Moz)</strong>, ancres utilisées, ratio follow/nofollow, <strong>liens toxiques</strong> à désavouer via Google Search Console. Puis nous benchmarquons votre popularité face à vos <strong>5 concurrents SEO directs</strong> pour quantifier précisément l'écart à combler et identifier les domaines référents déjà acquis par vos concurrents qui pourraient également pointer vers vous. Nous fournissons une liste de cibles netlinking priorisées avec les opportunités de rapprochement.",
    items: ['Analyse complète du profil de backlinks', 'Détection des liens toxiques & fichier de désaveu', 'Benchmark concurrentiel en popularité (DR/DA)', 'Ratio follow / nofollow & diversité des ancres', "Opportunités d'acquisition netlinking priorisées"],
  },
  {
    id: '04',
    title: 'Audit GEO & visibilité IA',
    desc: "Depuis 2024-2025, les moteurs génératifs ont profondément modifié la façon dont les utilisateurs accèdent à l'information. <strong>Google AI Overviews</strong> s'affiche désormais sur <strong>plus de 50 % des requêtes informatives</strong>. ChatGPT Search, Perplexity et Gemini répondent directement aux questions de vos prospects — sans qu'ils visitent votre site. Nous analysons votre présence dans ces interfaces : quelles requêtes déclenchent un AI Overview ? Votre marque est-elle citée dans les réponses des LLMs ? Quels ajustements de structure, de balisage et de ton permettent d'améliorer vos chances d'être extrait par les intelligences artificielles ? La <strong>GEO (Generative Engine Optimization)</strong> n'est plus une option : c'est une composante obligatoire de toute stratégie SEO en 2026.",
    items: ["Analyse de présence dans les AI Overviews Google", 'Audit des citations dans ChatGPT, Perplexity & Gemini', 'Optimisation des contenus pour la Search Generative Experience', 'Stratégie GEO : balisage, structure et ton expert', 'Schémas favorisant les extraits en réponses directes'],
  },
]

const methodologySteps = [
  { num: '01', title: 'Cadrage & objectifs', desc: "Avant de crawler quoi que ce soit, on prend le temps de comprendre <strong>votre marché, votre historique SEO, vos objectifs business</strong> et les ressources disponibles pour implémenter les recommandations. L'audit n'existe pas dans le vide : il répond à des objectifs précis. Un site e-commerce avec 50 000 pages n'a pas les mêmes problèmes qu'un site vitrine BtoB de 30 pages. Ce cadrage initial détermine le périmètre d'analyse et les outils mobilisés." },
  { num: '02', title: 'Collecte de données', desc: "Crawl complet du site avec <strong>Screaming Frog</strong>, extraction des données Search Console (positions, clics, impressions, pages indexées), analyse GA4 des comportements utilisateurs, exploration des logs serveur pour analyser les visites du bot Google, analyse des backlinks avec <strong>Ahrefs et Semrush</strong>. On travaille sur la donnée brute de vos propres propriétés — pas sur des estimations tierces qui approximent votre trafic. Cette phase prend <strong>2 à 3 jours</strong> selon la taille du site." },
  { num: '03', title: 'Benchmark concurrentiel', desc: "Identification de vos <strong>5 concurrents SEO réels</strong> — pas forcément vos concurrents business, mais ceux qui captent votre trafic organique aujourd'hui. Nous comparons point par point : positionnement sur vos mots-clés cibles, couverture sémantique de leur site, profil de popularité, structure technique, <strong>présence dans les AI Overviews</strong>. Ce benchmark permet de comprendre non seulement où vous prenez du retard, mais pourquoi — et avec quel investissement vous pouvez inverser la tendance." },
  { num: '04', title: 'Analyse & priorisation', desc: "Les problèmes identifiés sont classés selon trois critères : <strong>impact estimé sur le trafic</strong> (gain potentiel en visites/mois), <strong>effort d'implémentation</strong> (développement, contenu, ou simple paramétrage) et responsable désigné (dev, éditeur, SEO, direction). Vous ne recevez pas une liste de 300 problèmes sans hiérarchie. Vous recevez un <strong>plan d'action séquencé sur 3, 6 et 12 mois</strong>, avec les gains attendus pour chaque action et les dépendances entre chantiers." },
  { num: '05', title: 'Restitution & livrable', desc: "Rapport structuré de <strong>40 à 80 pages</strong> selon la taille du site, comprenant : <strong>synthèse exécutive (1 page)</strong>, tableaux de bord visuels, fiches techniques détaillées par problème, captures d'écran annotées, exemples concrets de corrections. Présentation en visio ou en présentiel avec votre équipe et vos développeurs. Session de questions/réponses incluse. Chaque recommandation est formulée de façon directement implémentable, sans traduction supplémentaire." },
]

const caseStudies = [
  {
    client: 'Logic-Immo',
    slug: 'logic-immo',
    levier: 'SEO',
    result: '+60% de trafic organique',
    desc: "Refonte SEO complète d'un acteur majeur de l'immobilier : audit technique approfondi, création de mini-sites thématiques et stratégie de netlinking appuyée sur les synergies partenaires.",
    img: 'https://www.darwin-agency.com/wp-content/uploads/2025/05/Cas-clients-logic-immo.jpg',
  },
  {
    client: 'Planet-Cards',
    slug: 'planet-cards',
    levier: 'SEO',
    result: 'Visibilité organique transformée en croissance e-commerce',
    desc: "Audit SEO complet d'un e-commerce de carterie personnalisée, suivi d'une stratégie éditoriale et technique qui a transformé le trafic organique en revenus mesurables.",
    img: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-planet-cards.jpg',
  },
]

const signals = [
  { label: 'Chute de trafic inexpliquée', desc: "Votre trafic organique a baissé de <strong>10 à 30 %</strong> sans que vous ayez changé quoi que ce soit. C'est souvent le signe d'une mise à jour algorithmique Google (<strong>Core Update, Helpful Content, Spam Update</strong>) ou d'un problème technique apparu en production." },
  { label: 'Refonte ou migration de site', desc: "Une refonte change les URLs, la structure et le code. Sans audit SEO préalable et suivi post-migration, vous risquez de perdre en quelques semaines <strong>l'autorité construite sur des années</strong>." },
  { label: 'Lancement sur de nouveaux marchés', desc: "Extension géographique, nouveau segment de clientèle, nouvelle gamme de produits : chaque expansion nécessite un <strong>diagnostic du capital SEO existant</strong> avant de construire dessus." },
  { label: "Stagnation malgré l'investissement", desc: "Vous produisez du contenu, vous avez des backlinks, votre site est récent — mais vos positions stagnent. L'audit identifie le blocage exact : souvent un problème de <strong>cannibalisation</strong> ou une <strong>erreur technique invisible</strong>." },
]

const faqs = [
  {
    q: "Combien coûte un audit SEO chez DARWIN ?",
    a: "Le tarif dépend de la taille et de la complexité du site : nombre de pages crawlées, présence d'un e-commerce, marché national ou international, technologie (WordPress, Shopify, Next.js, etc.). Contactez-nous pour un <strong>premier échange</strong> et une estimation personnalisée sous 24h.",
  },
  {
    q: "Combien de temps prend un audit SEO ?",
    a: "De <strong>7 à 15 jours ouvrés</strong> selon la taille du site. Pour un site de moins de 500 pages, nous livrons sous 8 jours. Pour un site de 5 000 à 50 000 pages (e-commerce, média), le délai est de 12 à 15 jours. Nous nous engageons sur une <strong>date de livraison contractuelle</strong> dès le lancement de la mission. Pas de délai flottant.",
  },
  {
    q: "Quelle est la différence entre un audit SEO et une stratégie SEO ?",
    a: "<strong>L'audit est le diagnostic</strong> : il vous dit précisément où vous en êtes, pourquoi vous stagnez et quels problèmes freinent votre visibilité. <strong>La stratégie SEO est le plan de traitement</strong> sur 6 à 18 mois : quels contenus créer, quels liens obtenir, quel calendrier respecter. L'un ne va pas sans l'autre. Vous pouvez commander un audit seul pour décider en connaissance de cause, puis nous confier la stratégie si les conclusions vous convainquent.",
  },
  {
    q: "L'audit inclut-il la visibilité dans les IA comme ChatGPT ?",
    a: "Oui, systématiquement depuis 2024. Notre audit intègre un volet <strong>GEO complet (Generative Engine Optimization)</strong> : nous analysons votre présence dans les <strong>AI Overviews de Google</strong> (actifs sur plus de 50 % des requêtes informatives en France), les réponses ChatGPT Search et Perplexity, et la qualité de vos contenus pour les extraits génératifs. Nous formulons des recommandations spécifiques — balisage, structure, autorité, ton expert — pour que <strong>votre marque soit citée par les moteurs d'IA</strong>, pas seulement positionnée dans les résultats classiques.",
  },
  {
    q: "L'audit SEO est-il différent pour un site e-commerce ?",
    a: "Oui, significativement. Un e-commerce génère des problématiques spécifiques : pages de catégories dupliquées via les filtres de navigation, gestion de l'indexation des milliers de pages produits, pagination, richesse des fiches produits en données structurées, temps de chargement critique pour la conversion, gestion des produits hors-stock. Nous avons une méthodologie dédiée aux sites marchands, avec des outils d'analyse des performances par catégorie et par segment de trafic.",
  },
  {
    q: "Peut-on implémenter les recommandations sans votre équipe ?",
    a: "Absolument. Chaque recommandation est formulée pour être immédiatement compréhensible et actionnable par vos développeurs ou éditeurs, sans passer par nous. Nous précisons la nature de chaque correction (modification de balise, ajout de contenu, correction de code, paramétrage Search Console) et le temps estimé d'implémentation. Nous pouvons aussi prendre en charge l'implémentation technique si vous souhaitez un accompagnement complet sur la durée.",
  },
  {
    q: "Mon site a déjà été audité par une autre agence. Pourquoi refaire un audit ?",
    a: "Deux raisons principales. D'abord, l'algorithme Google évolue en permanence : ce qui était optimisé en 2022 peut être un frein en 2026 (les <strong>Core Updates</strong> changent les signaux de classement, <strong>INP a remplacé FID</strong>, l'<strong>Helpful Content System</strong> a été renforcé). Ensuite, la qualité des audits varie énormément : beaucoup de rapports sont générés automatiquement par des outils sans analyse humaine. Un audit DARWIN est réalisé par <strong>un consultant senior</strong>, pas produit par un logiciel.",
  },
]

// ─── JSON-LD ─────────────────────────────────────────────

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'SEO', url: '/agence-seo' },
  { name: 'Audit SEO', url: '/agence-seo/audit-seo' },
])

const service = serviceJsonLd({
  name: 'Audit SEO complet',
  description: 'Diagnostic complet de votre visibilité : audit technique, sémantique, netlinking et GEO. Rapport livrable en 10 jours.',
  url: '/agence-seo/audit-seo',
  keywords: ['audit SEO', 'audit technique SEO', 'GEO', 'Google AI Overviews', 'netlinking'],
})

// ─── PAGE ────────────────────────────────────────────────

export default function AuditSeoPage() {
  return (
    <main>

      {/* ── JSON-LD ── */}
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div className="rsp-hero-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 600 }}>

          {/* ── Colonne gauche (contenu) ── */}
          <div className="rsp-hero-text" style={{ padding: '100px 64px 80px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <Link href="/agence-seo" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>SEO</Link>
              <span>/</span>
              <span style={{ color: 'rgba(0,0,0,0.6)' }}>Audit SEO</span>
            </nav>

            <span style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '5px 14px', marginBottom: 28, alignSelf: 'flex-start',
            }}>
              EXPERTISES SEO
            </span>
            <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, margin: '0 0 28px' }}>
              AUDIT SEO :<br />
              DIAGNOSTIQUEZ<br />
              VOTRE VISIBILITÉ
            </h1>
            <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40 }}>
              Votre site perd du trafic chaque mois sans que vous le sachiez. Un <strong>audit SEO complet</strong> identifie exactement ce qui freine votre visibilité — et <strong>combien ça vous coûte</strong>.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none', padding: '16px 32px',
              }}>
                DEMANDER UN AUDIT →
              </Link>
              <Link href="/agence-seo" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.15)', paddingBottom: 2,
              }}>
                ← Retour SEO
              </Link>
            </div>
          </div>

          {/* ── Colonne droite (illustration) ── */}
          <div className="rsp-hero-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
            {/* Exception documentée : <img> utilisé car SVG illustratif décoratif */}
            <div style={{
              background: '#f5f5f5',
              borderRadius: 2,
              border: '1px solid #e8e8e8',
              boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
              overflow: 'hidden',
              width: '100%',
              maxWidth: 520,
            }}>
              <img
                src="/images/illustrations/audit-seo.svg"
                alt="Illustration audit SEO — analyse et diagnostic de visibilité"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COÛT DE L'INACTION ───────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '80px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 16 }}>
              POURQUOI UN AUDIT SEO
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
              CE QUE VOUS PERDEZ<br />SANS LE SAVOIR
            </h2>
            <p className="body-text" style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20 }}>
              <strong>91 % des pages web</strong> ne reçoivent aucun trafic organique. Derrière ce chiffre, il y a des sites bien construits, avec du bon contenu, mais invisibles parce qu'un <strong>problème technique ou sémantique non diagnostiqué</strong> bloque toute progression.
            </p>
            <p className="body-text" style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85 }}>
              Un audit SEO n'est pas un rapport de plus à ranger dans un dossier. C'est un <strong>diagnostic chiffré</strong> qui révèle précisément les blocages, les opportunités non exploitées et les actions à mener en priorité pour que votre site devienne <strong>un actif de croissance</strong>.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { stat: '91%', label: 'des pages web ne reçoivent aucun trafic organique Google' },
              { stat: '+40%', label: "d'abandon supplémentaire si le temps de chargement dépasse 2 secondes" },
              { stat: '50%+', label: "de gain de visibilité quand le contenu répond précisément à l'intention de recherche" },
              { stat: '1er', label: "résultat Google capte en moyenne 27% des clics — le 2ème en capte 15%" },
            ].map(item => (
              <div key={item.stat} style={{ display: 'flex', alignItems: 'center', gap: 24, background: '#fff', padding: '20px 24px', borderLeft: '4px solid #0a0a0a' }}>
                <p className="font-anton" style={{ fontSize: '2rem', color: '#0a0a0a', margin: 0, minWidth: 80, lineHeight: 1 }}>{item.stat}</p>
                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUAND FAIRE UN AUDIT SEO ─────────────────────── */}
      <section className="rsp-section" style={{ background: '#0a0a0a', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-sidebar-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
                SIGNAUX D&apos;ALERTE
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05 }}>
                QUAND FAIRE<br />UN AUDIT SEO ?
              </h2>
            </div>
            <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {signals.map((s) => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid #FFF127', padding: '28px 24px' }}>
                  <p className="font-anton" style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.06em', margin: '0 0 12px', lineHeight: 1.3 }}>
                    {s.label}
                  </p>
                  {/* eslint-disable-next-line react/no-danger */}
                  <p className="body-text" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LES 4 DIMENSIONS DE L'AUDIT ─────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              CE QUE COMPREND L'AUDIT
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
              4 DIMENSIONS,<br />UN DIAGNOSTIC COMPLET
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {auditPillars.map((pillar, i) => (
              <div key={pillar.id} style={{
                background: i % 2 === 0 ? '#fafafa' : '#fff',
                border: '1px solid #ebebeb',
                padding: '48px 40px',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20 }}>
                  <span className="font-anton" style={{
                    fontSize: '2.4rem', lineHeight: 1,
                    color: '#0a0a0a',
                  }}>
                    {pillar.id}
                  </span>
                  <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1.1 }}>
                    {pillar.title}
                  </h3>
                </div>
                {/* eslint-disable-next-line react/no-danger */}
                <p className="body-text" style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: pillar.desc }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {pillar.items.map(item => (
                    <li key={item} style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0a0a0a', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 6, height: 6, background: '#FFF127', flexShrink: 0, display: 'inline-block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODOLOGIE ─────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fafafa', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-sidebar-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
            <div className="rsp-sticky" style={{ position: 'sticky', top: 120 }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
                NOTRE MÉTHODOLOGIE
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
                5 ÉTAPES,<br />0 APPROXIMATION
              </h2>
              <p className="body-text" style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8 }}>
                Chaque audit DARWIN suit un <strong>protocole identique dans sa rigueur</strong>, unique dans son application. On ne livre pas un template — on analyse votre site, votre marché, vos concurrents réels.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {methodologySteps.map((step, i) => (
                <div key={step.num} className="rsp-step-grid" style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr', gap: 40, alignItems: 'start',
                  background: '#fff',
                  borderLeft: '4px solid #0a0a0a',
                  padding: '40px 40px 40px 36px',
                  marginBottom: i < methodologySteps.length - 1 ? 12 : 0,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                  <p className="font-anton" style={{
                    fontSize: '3.2rem', lineHeight: 1, margin: 0, paddingTop: 4,
                    color: '#0a0a0a',
                  }}>
                    {step.num}
                  </p>
                  <div>
                    <h3 className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#0a0a0a', letterSpacing: '0.06em', lineHeight: 1.4, margin: '0 0 16px' }}>
                      {step.title}
                    </h3>
                    {/* eslint-disable-next-line react/no-danger */}
                    <p className="body-text" style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LE LIVRABLE ──────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '72px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 16 }}>
              CE QUE VOUS RECEVEZ
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
              UN RAPPORT,<br />PAS UN TABLEAU EXCEL
            </h2>
            <p className="body-text" style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85 }}>
              L'audit DARWIN n'est pas une liste de problèmes triés par importance arbitraire. C'est un <strong>document structuré, visuellement lisible</strong>, avec pour chaque recommandation : l'<strong>impact estimé sur le trafic</strong>, la difficulté d'implémentation et la personne en charge (dev, éditeur, SEO).
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Format', value: 'Rapport PDF illustré — 40 à 80 pages selon la taille du site' },
              { label: 'Délai', value: 'Livraison sous 10 jours ouvrés, engagement contractuel' },
              { label: 'Restitution', value: 'Présentation en visio ou en présentiel avec votre équipe' },
              { label: 'Priorisation', value: 'Chaque recommandation classée : impact / effort / responsable' },
              { label: 'Suivi', value: 'Option accompagnement implémentation avec compte-rendu mensuel' },
            ].map(row => (
              <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>{row.label}</span>
                <span style={{ fontSize: '0.9rem', color: '#0a0a0a', lineHeight: 1.6 }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS CLIENTS ──────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fafafa', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
                RÉSULTATS
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, margin: 0 }}>
                ILS ONT FAIT AUDITER<br />LEUR SITE PAR DARWIN
              </h2>
            </div>
            <Link href="/cas-clients" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #FFF127', paddingBottom: 2 }}>
              VOIR TOUS LES CAS →
            </Link>
          </div>
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {caseStudies.map(cas => (
              <Link key={cas.slug} href={`/cas-clients/${cas.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ background: '#fff', border: '1px solid #e8e8e8', overflow: 'hidden', transition: 'box-shadow 0.2s ease' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={cas.img} alt={`Cas client ${cas.client}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <span style={{ position: 'absolute', top: 16, left: 16, background: '#FFF127', color: '#0a0a0a', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>
                      {cas.levier}
                    </span>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>{cas.client}</p>
                    <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 12px', lineHeight: 1.1 }}>{cas.result}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.7, margin: '0 0 20px' }}>{cas.desc}</p>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0a0a0a', borderBottom: '2px solid #FFF127', paddingBottom: 2 }}>
                      VOIR LE CAS →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI DARWIN ──────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              POURQUOI DARWIN
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
              PAS UNE AGENCE DE PLUS.<br />UNE ÉQUIPE SENIOR.
            </h2>
          </div>
          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { title: 'Experts seniors uniquement', desc: `Votre audit est réalisé par un consultant SEO senior, pas sous-traité à un junior. ${DARWIN_YEARS} ans d'expertise, ça se sent dans la qualité du diagnostic.` },
              { title: 'GEO intégré en standard', desc: "On n'a pas attendu que tout le monde parle de ChatGPT pour s'y intéresser. La visibilité dans les moteurs génératifs est incluse dans chaque audit, pas vendue en option." },
              { title: "Données réelles, pas d'estimations", desc: "On travaille sur vos données Search Console, vos logs serveur, votre GA4. Pas sur des outils tiers qui approximent votre trafic et vous donnent l'illusion d'un diagnostic." },
              { title: 'Rapport livré en 10 jours', desc: "Pas de délai flottant. On s'engage sur une date de rendu dès le début de la mission. Votre planning mérite d'être respecté." },
              { title: 'Recommandations, pas des options', desc: "Chaque recommandation est formulée avec son impact estimé, son niveau d'effort et la personne responsable de l'implémentation. Actionnable dès le lendemain de la restitution." },
              { title: 'Accompagnement post-audit disponible', desc: "L'audit est un point de départ. Si vous souhaitez qu'on vous accompagne dans l'implémentation, nos consultants sont disponibles pour piloter les chantiers SEO dans la durée." },
            ].map((item, i) => (
              <div key={item.title} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff', border: '1px solid #ebebeb', padding: '36px 32px' }}>
                <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 16px', lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p className="body-text" style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.8, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#f4f4f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              FAQ
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
              VOS QUESTIONS<br />SUR L&apos;AUDIT SEO
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ borderBottom: '1px solid #ddd', background: '#fff' }}>
                <summary style={{ padding: '24px 28px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a0a', margin: 0, lineHeight: 1.4, paddingRight: 24 }}>
                    {faq.q}
                  </h3>
                  <span style={{ fontSize: '1.4rem', fontWeight: 300, flexShrink: 0, color: '#0a0a0a' }}>+</span>
                </summary>
                {/* eslint-disable-next-line react/no-danger */}
                <p className="body-text" style={{ padding: '0 28px 24px', fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: faq.a }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '96px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 24 }}>
            PREMIER ÉCHANGE
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1, margin: '0 0 24px' }}>
            VOTRE AUDIT SEO<br />COMMENCE ICI
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', maxWidth: 520, margin: '0 auto 40px' }}>
            Décrivez-nous votre situation. Nous analysons votre site, vos concurrents et vos opportunités — réponse sous 24h ouvrées.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-block', background: '#0a0a0a', color: '#fff',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
            }}>
              DEMANDER MON AUDIT →
            </Link>
            <a href="tel:+33413570900" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1.5px solid rgba(0,0,0,0.25)', color: '#0a0a0a',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
            }}>
              +33 (0)4 13 57 09 00
            </a>
          </div>
        </div>
      </section>

      {/* ── LIENS INTERNES — AUTRES SOUS-PAGES SEO ───────── */}
      {/*
        Diagonale : clip-path coupe le haut en biais (0 80px → 100% 0).
        marginTop négatif fait monter la section sous la précédente.
        paddingTop compensé pour que le contenu reste lisible.
      */}
      <section style={{
        background: 'linear-gradient(135deg, #27D9E5 0%, #B8E000 100%)',
        padding: '160px 32px 80px',
        clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)',
        marginTop: '-80px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 12 }}>
            NOS EXPERTISES
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 48 }}>
            NOS AUTRES EXPERTISES SEO
          </h2>
          <div className="rsp-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { label: 'SEO Technique', desc: 'Crawl, architecture, Core Web Vitals, JavaScript SEO', href: '/agence-seo/seo-technique', img: '/images/illustrations/seo-technique.svg' },
              { label: 'Stratégie de contenu', desc: 'Cocons thématiques, intention de recherche, éditorial', href: '/agence-seo/strategie-contenu', img: '/images/illustrations/strategie-contenu.svg' },
              { label: 'Netlinking', desc: 'Profil de liens, acquisition, popularité concurrentielle', href: '/agence-seo/netlinking', img: '/images/illustrations/netlinking.svg' },
              { label: 'GEO — Visibilité IA', desc: 'AI Overviews, ChatGPT Search, Perplexity, Gemini', href: '/agence-seo/geo-visibilite-ia', img: '/images/illustrations/geo-visibilite-ia.svg' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ background: '#fff', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.12)', borderTop: '3px solid #FFF127' }}>
                  {/* Exception documentée : <img> utilisé pour SVG illustratif décoratif */}
                  <div style={{ background: '#f5f5f5', borderBottom: '1px solid #ebebeb' }}>
                    <img src={link.img} alt={`Illustration ${link.label}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                  <div style={{ padding: '20px 24px 24px' }}>
                    <p className="font-anton" style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1.2 }}>{link.label}</p>
                    <p style={{ fontSize: '0.78rem', color: '#555', lineHeight: 1.6, margin: '0 0 16px' }}>{link.desc}</p>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid #0a0a0a', paddingBottom: 2 }}>DÉCOUVRIR →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
