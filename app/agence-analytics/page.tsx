import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../lib/jsonld'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "Agence Analytics — Data, Tracking & Attribution | DARWIN",
  description: "Agence data certifiée Google Analytics. Tracking, GA4, attribution multi-touch, dashboards, server-side, consentement RGPD. Pilotez vos investissements par la donnée.",
  alternates: { canonical: '/agence-analytics' },
  openGraph: {
    ...ogDefaults,
    images: [{ url: '/images/analytics/cover-agence-data-tracking.jpeg', width: 1200, height: 630, alt: 'Agence Analytics & Data DARWIN' }],
    title: "Agence Analytics — Data, Tracking & Attribution | DARWIN",
    description: "Agence data certifiée Google Analytics. Tracking, GA4, attribution multi-touch, dashboards, server-side, consentement RGPD. Pilotez vos investissements par la donnée.",
    url: 'https://darwin-agency.fr/agence-analytics',
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: `${DARWIN_YEARS} ans`, label: "d'expertise data" },
  { num: '400+', label: 'clients accompagnés' },
  { num: '7 ans', label: 'de fidélité moyenne' },
  { num: '15+', label: 'outils maîtrisés' },
]

const pillars = [
  {
    id: '01',
    title: 'Data Tracking & Plan de Taggage',
    desc: "Un plan de taggage rigoureux est le fondement de toute stratégie data fiable. Sans lui, les données collectées sont incomplètes, incohérentes, et les décisions qui en découlent le sont tout autant. DARWIN structure votre collecte autour d'un plan de marquage avancé, intégrant la génération d'UTM, la pose de Google Tag Manager et la configuration précise des événements GA4 — notamment pour le e-commerce. Nous déployons également vos dashboards sur Google Data Studio (Looker Studio) pour rendre la donnée immédiatement lisible et actionnable. Le server-side tagging représente aujourd'hui l'évolution naturelle du tracking client-side : en envoyant les données depuis votre serveur plutôt que depuis le navigateur, vous gagnez en fiabilité, en résilience face aux bloqueurs publicitaires et en conformité RGPD.",
    items: ['Plan de marquage avancé', 'GA4 & e-commerce', 'Google Tag Manager', 'Dashboards Data Studio'],
  },
  {
    id: '02',
    title: "Attribution & Contribution",
    desc: "Nous vous accompagnons dans la mise en place d'une analyse multi-touch Data-Driven de vos parcours de conversion, grâce à la mise en place d'une étude de la contribution et de l'attribution algorithmique des leviers, afin d'optimiser votre mix Marketing et vos investissements. Cette approche vous permet de prendre des décisions éclairées, basées sur des données fiables, pour maximiser le retour sur investissement de chaque action menée. En identifiant précisément le rôle de chaque point de contact dans le parcours d'achat, nous vous aidons à mieux comprendre le comportement de vos clients et à ajuster vos budgets en conséquence. Fini les décisions prises à l'aveugle : chaque euro investi est piloté avec méthode, pour une performance durable et mesurable.",
    items: ['Attribution algorithmique', 'Parcours multi-touch', 'Optimisation du mix marketing', 'Pilotage budgétaire data-driven'],
  },
  {
    id: '03',
    title: "Server-Side Tracking",
    desc: "L'ère du cookie tiers touche à sa fin, et avec elle, le tracking client-side traditionnel perd en fiabilité chaque mois. Le server-side tracking est la réponse structurelle à cette mutation : au lieu de s'appuyer sur le navigateur de l'utilisateur pour envoyer les données aux plateformes (Google, Meta, TikTok), c'est votre serveur qui prend le relais. Le résultat est immédiat : meilleure qualité de données, moins de pertes liées aux bloqueurs de publicités ou aux refus de consentement, et une attribution nettement plus fiable. Chez DARWIN, nous déployons le server-side pour GA4 via GTM Server-Side, pour Meta via la Conversions API (CAPI), et pour TikTok via l'Events API. Cette approche vous rend moins dépendant des évolutions des navigateurs et vous positionne durablement dans un écosystème data first-party, plus résilient et plus conforme.",
    items: ['Server-Side GTM', 'Meta Conversions API', 'TikTok Events API', 'Data quality & résilience'],
  },
  {
    id: '04',
    title: 'Consentement & RGPD',
    desc: "La mise en application de la RGPD sur le recueil du consentements des cookies sur les sites implique désormais un recueil du consentement éclairé et en adéquation avec la réglementation mais cela peut avoir des impacts négatifs sur vos données remontées dans Analytics et les différentes plateformes si le taux de refus est important. DARWIN vous accompagne sur différents volets afin d'optimiser votre recueil : choix de la CMP (Consent Management Platform) et mise en place technique via Google Tag Management. Nous vous conseillons d'aller plus loin en configurant par la même occasion GA4 qui vous permettra de mutualiser un certain nombre de tâches afin de mettre en place cette nouvelle version de Google Analytics basée sur les évènements, mieux adaptée au crossdevice.",
    items: ['CMP & recueil du consentement', 'Conformité RGPD', 'Optimisation du taux d\'acceptation', 'GA4 cross-device'],
  },
]

const services = [
  { href: '/agence-analytics', title: 'Google Analytics 4', accent: '#FFF127', desc: "GA4 est devenu la norme de la mesure digitale. Nous assurons son déploiement complet, de la configuration initiale à la mise en place des événements avancés, en passant par le e-commerce enhanced. Chaque interaction utilisateur est captée avec précision pour alimenter vos analyses et vos audiences publicitaires." },
  { href: '/agence-analytics', title: 'Google Tag Manager', accent: '#FFF127', desc: "GTM est le chef d'orchestre de votre collecte de données. Nous concevons des plans de marquage structurés, configurons les déclencheurs et variables personnalisées, et documentons l'ensemble pour que votre tracking reste maintenable et évolutif dans le temps." },
  { href: '/agence-analytics', title: 'Attribution Multi-Touch', accent: '#FFF127', desc: "Le dernier clic ne raconte qu'une fraction de l'histoire. Nos modèles d'attribution data-driven analysent l'ensemble du parcours de conversion pour identifier la contribution réelle de chaque levier. L'attribution algorithmique vous permet de réallouer vos budgets là où ils produisent le plus de valeur." },
  { href: '/agence-analytics', title: 'Dashboards Sur-Mesure', accent: '#FFF127', desc: "Looker Studio (ex Google Data Studio) est notre outil de prédilection pour créer des dashboards qui parlent à vos équipes. KPIs métier, reporting en temps réel, segmentations avancées : chaque tableau de bord est conçu pour accélérer la prise de décision, pas pour produire des slides." },
  { href: '/agence-analytics', title: 'Server-Side Tracking', accent: '#29C5F5', desc: "Le tracking server-side via GTM Server, Meta CAPI et TikTok Events API garantit une collecte de données first-party résiliente. Moins de pertes liées aux ad blockers, meilleure attribution, conformité renforcée : c'est l'infrastructure data de demain, déployable aujourd'hui." },
  { href: '/agence-analytics', title: 'IA & Data Intelligence', accent: '#29C5F5', desc: "L'intelligence artificielle transforme la manière dont nous exploitons la donnée. Audiences prédictives dans GA4, détection automatique d'anomalies, insights générés par le machine learning, signaux de smart bidding nourris par un tracking de qualité : l'IA ne remplace pas l'analyste, elle lui donne une longueur d'avance." },
]

const faqs = [
  {
    q: "Pourquoi migrer vers Google Analytics 4 en 2026 ?",
    a: "Universal Analytics a définitivement cessé de collecter des données en juillet 2023. GA4 est désormais la seule version active de Google Analytics, et son modèle basé sur les événements offre une vision bien plus fine des parcours utilisateurs que l'ancien modèle basé sur les sessions. En 2026, l'enjeu n'est plus la migration elle-même — c'est l'exploitation avancée de GA4 : audiences prédictives, intégration avec Google Ads, mesure cross-device, modélisation des conversions. Chez DARWIN à Aix-en-Provence, nous accompagnons nos clients sur la configuration avancée de GA4, la mise en place d'événements personnalisés et l'activation des données dans les campagnes publicitaires.",
  },
  {
    q: "Quelle est la différence entre le tracking server-side et client-side ?",
    a: "Le tracking client-side envoie les données directement depuis le navigateur de l'utilisateur vers les plateformes (Google Analytics, Meta, TikTok). Le problème : les bloqueurs de publicités, les restrictions navigateur (ITP Safari, ETP Firefox) et les refus de consentement empêchent une part croissante de ces données d'arriver à destination. Le tracking server-side, lui, passe par un serveur intermédiaire que vous contrôlez. Les données transitent par votre infrastructure avant d'être transmises aux plateformes. Résultat : moins de pertes, des données first-party plus fiables, une meilleure attribution et une conformité RGPD renforcée. DARWIN déploie le server-side via GTM Server-Side, Meta CAPI et TikTok Events API.",
  },
  {
    q: "Quel modèle d'attribution choisir pour mes campagnes digitales ?",
    a: "Le modèle last-click, encore utilisé par défaut dans de nombreux comptes, attribue 100% de la conversion au dernier point de contact. C'est simple mais trompeur : il ignore tout le parcours amont qui a construit l'intention d'achat. Les modèles d'attribution data-driven, disponibles dans GA4 et Google Ads, analysent l'ensemble des points de contact et distribuent le crédit de conversion de manière algorithmique. Chez DARWIN, nous mettons en place des études de contribution et d'attribution multi-touch qui vous permettent de comprendre le rôle réel de chaque levier — SEA, SMA, SEO, Display, Email — et d'optimiser votre mix marketing en conséquence.",
  },
  {
    q: "Quel est l'impact du RGPD sur mes données analytics ?",
    a: "L'impact est direct et mesurable. Depuis l'application stricte des directives de la CNIL, un site qui implémente correctement le recueil du consentement perd en moyenne 30 à 40% de ses données analytics — parfois davantage selon le secteur et le taux de refus. Cela signifie que vos rapports GA4 sous-estiment votre trafic réel et que vos plateformes publicitaires reçoivent moins de signaux de conversion. DARWIN vous accompagne pour optimiser votre taux d'acceptation via le choix et la configuration de votre CMP, et pour compenser les pertes grâce au consent mode v2, à la modélisation des conversions GA4 et au tracking server-side.",
  },
  {
    q: "Quels outils utilisez-vous pour les dashboards et le reporting ?",
    a: "Notre outil principal est Looker Studio (ex Google Data Studio) pour sa flexibilité, sa gratuité et son intégration native avec l'écosystème Google. Pour des besoins plus avancés — connexion à des sources de données multiples, rafraîchissement en temps réel, partage sécurisé — nous travaillons également avec Power BI et des solutions sur-mesure. Chaque dashboard est conçu autour de vos KPIs métier, pas de métriques vanity. L'objectif est de produire un outil de pilotage que vos équipes utilisent réellement au quotidien, pas un reporting mensuel que personne ne lit.",
  },
  {
    q: "Quel est le ROI d'un investissement en analytics et tracking ?",
    a: "Un tracking fiable ne génère pas de revenus directement — mais il conditionne la rentabilité de tous vos autres investissements digitaux. Sans données fiables, vous optimisez à l'aveugle : budgets SEA mal répartis, audiences SMA mal ciblées, décisions basées sur des métriques incomplètes. Nos clients constatent en moyenne une amélioration de 15 à 25% du ROAS global après la mise en place d'un tracking rigoureux et d'une attribution multi-touch. Le coût d'un bon setup analytics est amorti en quelques semaines de campagnes mieux pilotées. C'est l'investissement le plus rentable du digital — parce qu'il rend tous les autres plus performants.",
  },
]

const otherExpertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/agence-seo' },
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/agence-sea' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/agence-sma' },
  { title: 'MÉDIA', desc: 'Plan média & activation', href: '/agence-media' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/formations' },
  { title: 'STUDIO CRÉATIF', desc: 'Direction artistique & Contenu', href: '/studio-creatif' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function AgenceDataPage() {
  const jsonLdFaq = faqJsonLd(faqs.map(f => ({ q: f.q, a: f.a })))
  const jsonLdService = serviceJsonLd({
    name: 'Agence Analytics',
    description: "Agence data certifiée Google Analytics. Tracking GA4, attribution multi-touch, dashboards Looker Studio, server-side tracking, consentement RGPD.",
    url: 'https://darwin-agency.fr/agence-analytics',
    keywords: ['agence analytics', 'tracking', 'GA4', 'Google Analytics', 'attribution', 'dashboard', 'server-side tracking', 'RGPD', 'data'],
  })
  const jsonLdBreadcrumb = breadcrumbJsonLd([
    { name: 'Accueil', url: 'https://darwin-agency.fr/' },
    { name: 'Agence Analytics', url: 'https://darwin-agency.fr/agence-analytics' },
  ])

  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* ─── HERO ─── */}
      <section style={{ background: '#fff', position: 'relative', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
        <div className="rsp-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: '88vh' }}>

          {/* LEFT — texte */}
          <div className="rsp-hero-text" style={{ padding: '72px 56px 72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>
              <Link href="/" style={{ color: '#bbb', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <span style={{ color: '#0a0a0a' }}>Agence Analytics</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Expertise Analytics</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', lineHeight: 0.95, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>BIEN MESURER ET</span>
              <span style={{ display: 'block' }}>ANALYSER VOS DONNÉES</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>POUR OPTIMISER VOS</span>
              <span style={{ display: 'block' }}>PERFORMANCES</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }} dangerouslySetInnerHTML={{ __html: "L'approche <strong>Data-driven</strong> qui caractérise DARWIN est basée sur une bonne collecte des données via votre <strong>Analytics</strong> et sur un traitement intelligent de ces données mixant <strong>datavisualisation</strong> et analyse des parcours dans une logique <strong>Attribution / Contribution</strong> pour avoir la meilleure compréhension possible des parcours existants et pouvoir ainsi optimiser vos <strong>investissements digitaux</strong> afin de maximiser votre rentabilité." }} />

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parlons de vos enjeux data →
              </Link>
              <Link href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Notre méthode
              </Link>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="rsp-hero-img" style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/analytics/cover-agence-data-tracking.jpeg"
              alt="Agence Analytics DARWIN — Data, Tracking & Attribution"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
              priority
            />
            {/* Overlay gradient left */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />
            {/* Floating stat — GA4 Certifié */}
            <div style={{ position: 'absolute', top: 40, left: 32, background: '#FFF127', padding: '16px 20px', borderRadius: 4 }}>
              <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#0a0a0a' }}>GA4</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>Certifié</div>
            </div>
            {/* Floating stat 2 — 15+ outils */}
            <div style={{ position: 'absolute', bottom: 32, right: 32, background: '#fff', padding: '16px 20px', borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#0a0a0a' }}>15+</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>outils maîtrisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── L'ENJEU ─── */}
      <section style={{ background: '#FFF127', padding: '64px 24px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              L&apos;enjeu
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#0a0a0a' }}>
              LA QUALITÉ DE LA DONNÉE<br />EST LE SOCLE DE TOUTE DÉCISION
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 20px' }} dangerouslySetInnerHTML={{ __html: "La plupart des entreprises souffrent du même problème sans le savoir : un <strong>tracking incomplet</strong>, des données faussées par les refus de consentement, des outils qui ne communiquent pas entre eux. Le CRM ne parle pas à l'analytics, le SEA ne voit pas les mêmes conversions que le SMA, et les décisions stratégiques finissent par se prendre au doigt mouillé plutôt que sur la base de faits mesurés. En 2026, avec la fin des cookies tiers et des taux de consentement qui plafonnent à 60-70%, la perte de données n'a jamais été aussi massive." }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }} dangerouslySetInnerHTML={{ __html: "Sans <strong>mesure fiable</strong>, chaque décision d'optimisation est prise à l'aveugle. Vous investissez en publicité sans savoir quel levier convertit réellement. Vous construisez des audiences sur des données partielles. Vous pilotez votre croissance avec un tableau de bord qui ne reflète que la moitié de la réalité. La qualité de la donnée n'est pas un sujet technique secondaire — c'est le <strong>socle de toute performance digitale</strong>." }} />
            <div style={{ marginTop: 24, display: 'flex', gap: 24 }}>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>30-40%</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>de données perdues post-RGPD</div>
              </div>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>100%</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>server-side compatible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DATA TRACKING & ANALYTICS ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* LEFT — text content */}
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                Définition
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px', color: '#0a0a0a' }}>
                DATA TRACKING<br />&amp; ANALYTICS
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "DARWIN adopte une <strong>approche data-driven</strong>, plaçant au coeur de sa méthodologie la collecte, l'optimisation et le traitement de la donnée." }} />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "La <strong>qualité de la mesure</strong> et des données collectées est donc essentielle pour prendre les bonnes décisions." }} />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Nos experts certifiés <strong>Google Analytics</strong> vous accompagnent donc dans cette démarche :" }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Mise en place du tracking (Générateur d\'UTM, pose GTM, plan de marquage avancé GTM…)',
                  'Déploiement GA4 et configuration avancée des évènements nécessaires, notamment au e-commerce',
                  'Configuration de dashboard digital (Google Data Studio)',
                  'Formation Google Analytics',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: '#444', lineHeight: 1.6 }}>
                    <span style={{ width: 6, height: 6, background: '#FFF127', borderRadius: '50%', flexShrink: 0, marginTop: 8 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 32, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Nous disposons de compétences Analytics sur <strong>Google Analytics</strong> mais aussi sur d'autres outils tels que <strong>Matomo</strong>, <strong>Piwik Pro</strong>, <strong>Piano</strong>, <strong>AT Internet</strong>…" }} />

              {/* Certification */}
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 24 }}>
                Nos certifications
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
                <Image src="/logos/certifications/google-analytics.png" alt="Google Analytics Certifié" width={200} height={90} style={{ height: 90, width: 'auto', display: 'block' }} />
              </div>
            </div>

            {/* RIGHT — photo with editorial framing */}
            <div style={{ position: 'sticky', top: 100 }}>
              {/* Offset frame behind the image */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: '1px solid #ebebeb', borderRadius: 4, pointerEvents: 'none' }} />
                <Image
                  src="/images/analytics/cover-agence-data-tracking.jpeg"
                  alt="Équipe DARWIN — Data Tracking & Analytics"
                  width={640}
                  height={460}
                  style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block', borderRadius: 4, position: 'relative', zIndex: 1 }}
                />
                {/* Yellow accent bar */}
                <div style={{ position: 'absolute', bottom: -12, left: 0, width: 48, height: 3, background: '#FFF127', zIndex: 2 }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 24, lineHeight: 1.6, fontWeight: 500 }}>
                L&apos;équipe Data DARWIN en session de pilotage — Aix-en-Provence
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4 PILIERS ─── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre approche
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 700 }}>
              UNE STRATÉGIE DATA<br />COMPLÈTE, PAS DES TAGS DISPERSÉS
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {pillars.map((p, i) => (
              <div
                key={p.id}
                style={{
                  padding: '48px 40px',
                  background: (i === 0 || i === 3) ? '#fafafa' : '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                }}
              >
                <div className="font-anton" style={{ fontSize: '4rem', color: '#f0f0f0', position: 'absolute', top: 16, right: 24, lineHeight: 1, userSelect: 'none' }}>{p.id}</div>
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.05 }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.8rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.04em' }}>
                      <span style={{ width: 6, height: 6, background: '#FFF127', borderRadius: '50%', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES DATA ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Nos services data en détail
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CHAQUE BRIQUE DATA<br />A SON RÔLE DANS VOTRE PILOTAGE
            </h2>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {services.map((card) => (
              <div
                key={card.title}
                style={{
                  display: 'block',
                  padding: '36px 32px',
                  background: '#fff',
                  borderTop: `4px solid ${card.accent}`,
                }}
              >
                <h3 className="font-anton" style={{ fontSize: '1.5rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 14, lineHeight: 1.1 }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#666', margin: '0 0 24px' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MÉTHODE ─── */}
      <section id="methode" style={{ background: '#0a0a0a', padding: '80px 24px', color: '#fff', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Header row */}
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
                Notre méthode
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, color: '#fff' }}>
                5 ÉTAPES POUR<br />UNE DATA ACTIONNABLE
              </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF127', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parler à un expert data →
              </Link>
            </div>
          </div>

          {/* 5 steps — horizontal timeline cards */}
          <div className="rsp-5col" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              {
                num: '01', title: 'Audit data', subtitle: 'état des lieux',
                desc: "État du tracking existant, qualité des données collectées, outils en place. Nous identifions les fuites de données, les incohérences entre plateformes et les opportunités manquées.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
              },
              {
                num: '02', title: 'Plan de marquage', subtitle: 'architecture',
                desc: "Architecture GTM structurée, événements GA4 définis selon vos objectifs métier, conventions de nommage documentées. Le plan de marquage est la colonne vertébrale de votre collecte.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
              },
              {
                num: '03', title: 'Implémentation', subtitle: 'pose & tests',
                desc: "Pose des tags via GTM, configuration server-side, déploiement de la CMP, tests de bout en bout. Chaque événement est validé avant mise en production.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              },
              {
                num: '04', title: 'Dashboards', subtitle: 'KPIs & reporting',
                desc: "Création de dashboards Looker Studio connectés à vos KPIs métier. Reporting automatisé, segmentations avancées, partage sécurisé avec vos équipes.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
              },
              {
                num: '05', title: 'Pilotage', subtitle: 'optimisation continue',
                desc: "Attribution multi-touch, insights IA, optimisation continue des investissements. La donnée ne dort jamais — votre pilotage non plus.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
              },
            ].map((step, i) => (
              <div key={step.num} style={{ position: 'relative', padding: '32px 24px', borderLeft: i > 0 ? '1px solid #1a1a1a' : 'none' }}>
                {/* Yellow top bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />

                {/* Connector dot */}
                <div style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: '50%', background: '#FFF127', border: '2px solid #0a0a0a' }} />

                {/* Icon */}
                <div style={{ marginBottom: 20 }}>
                  {step.icon}
                </div>

                {/* Number */}
                <div className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#fff', marginBottom: 12 }}>{step.num}</div>

                {/* Title */}
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, marginBottom: 4 }}>{step.title}</h3>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{step.subtitle}</div>

                {/* Desc */}
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IA & DATA INTELLIGENCE ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              IA & Data Intelligence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 32px', maxWidth: 800 }}>
              L&apos;INTELLIGENCE ARTIFICIELLE<br />AU SERVICE DE VOS DONNÉES
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "En 2026, l'<strong>intelligence artificielle</strong> n'est plus une promesse pour l'analytics — c'est une réalité opérationnelle. GA4 intègre nativement des <strong>métriques prédictives</strong> (probabilité d'achat, probabilité de churn) qui permettent de créer des audiences avant même que le comportement ne se produise. La détection automatique d'anomalies alerte vos équipes quand un KPI dévie de sa trajectoire habituelle, sans attendre le reporting mensuel. Les <strong>modèles d'attribution pilotés par l'IA</strong> dépassent les règles statiques pour analyser des millions de parcours et attribuer la valeur de chaque conversion avec une précision que l'humain seul ne peut atteindre." }} />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Mais l'IA ne fonctionne qu'avec de la <strong>donnée de qualité</strong>. Un tracking approximatif nourrit des modèles approximatifs — et des décisions approximatives. C'est pourquoi chez DARWIN, nous considérons l'infrastructure data (tracking, server-side, CMP) comme le prérequis indispensable avant d'activer les capacités IA. Les <strong>audiences intelligentes</strong>, les insights automatisés, les signaux de smart bidding — tout repose sur la fiabilité de ce qui est mesuré en amont." }} />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "DARWIN exploite ces capacités pour ses clients au quotidien : <strong>audiences prédictives</strong> activées dans Google Ads et Meta, détection d'anomalies configurée sur les KPIs métier critiques, attribution algorithmique intégrée au pilotage budgétaire. L'IA ne remplace pas l'expertise humaine — elle la démultiplie. Et les entreprises qui l'adoptent aujourd'hui prennent une avance structurelle sur celles qui attendent encore." }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { num: 'Prédictif', label: 'Audiences GA4', sub: 'Probabilité d\'achat et de churn' },
                { num: 'Anomalies', label: 'Détection automatique', sub: 'Alertes en temps réel sur vos KPIs' },
                { num: 'Attribution', label: 'Modèles IA', sub: 'Data-driven, multi-touch, algorithmique' },
                { num: 'Smart Bidding', label: 'Signaux enrichis', sub: 'Meilleure donnée = meilleur algorithme' },
              ].map((item) => (
                <div key={item.label} style={{ padding: '28px 24px', background: '#fafafa', border: '1px solid #ebebeb' }}>
                  <div className="font-anton" style={{ fontSize: '1.4rem', lineHeight: 1, marginBottom: 6, color: '#0a0a0a', textTransform: 'uppercase' }}>{item.num}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 500 }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RÉSULTATS CLIENTS ─── */}
      <section style={{ background: '#f4f4f4', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 24 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                La preuve avant tout
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
                DES RÉSULTATS DATA<br />QUE NOS CLIENTS PEUVENT NOMMER
              </h2>
            </div>
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #0a0a0a', paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 32 }}>
              Tous les cas clients →
            </Link>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                client: 'Catimini',
                category: 'SEA · DATA',
                result: 'x2',
                resultLabel: 'objectifs doublés sur 10 marchés',
                period: 'Déploiement multi-pays coordonné',
                img: '/images/cas-clients/catimini-cover.jpg',
                href: '/cas-clients/catimini',
              },
              {
                client: 'Pandora',
                category: 'MÉDIA · DATA',
                result: '+95%',
                resultLabel: 'CA Noël',
                period: 'Stratégie data & attribution avancée',
                img: '/images/cas-clients/pandora-cover.jpg',
                href: '/cas-clients/pandora',
              },
              {
                client: 'Kiosque Mag',
                category: 'MÉDIA · DATA',
                result: 'CAC',
                resultLabel: 'maîtrisé',
                period: 'Pilotage data-driven des acquisitions',
                img: '/images/cas-clients/kiosque-mag-cover.jpg',
                href: '/cas-clients/kiosquemag',
              },
            ].map((c) => (
              <Link key={c.client} href={c.href} style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, height: 420, display: 'block', textDecoration: 'none' }}>
                {/* Photo plein cadre */}
                <Image
                  src={c.img}
                  alt={c.client}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(1.2)' }}
                />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.05) 100%)' }} />
                {/* Bande jaune top */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />
                {/* Contenu superposé */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 32px' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 8 }}>
                    {c.category}
                  </div>
                  <div className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
                    {c.client}
                  </div>
                  <div className="font-anton" style={{ fontSize: '3rem', lineHeight: 1, color: '#FFF127', marginBottom: 6 }}>
                    {c.result}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ddd', marginBottom: 4 }}>{c.resultLabel}</div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{c.period}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POURQUOI DARWIN ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre différence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.4rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 24px' }}>
              POURQUOI CHOISIR DARWIN<br />POUR VOTRE DATA ?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', maxWidth: 720, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Quelle que soit la taille de votre entreprise ou la maturité de votre stack data, nous adaptons notre accompagnement à vos enjeux : <strong>tracking</strong>, <strong>attribution</strong>, <strong>dashboards</strong> ou <strong>server-side</strong>." }} />
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              {
                title: 'Une expertise certifiée et multi-outils',
                text: "Nos consultants sont certifiés Google Analytics et maîtrisent un écosystème large : GA4, GTM, Matomo, Piwik Pro, Piano, AT Internet. Cette polyvalence nous permet de nous adapter à votre stack existant plutôt que de vous imposer un outil. Nous parlons la langue de vos données, quel que soit l'outil qui les collecte.",
              },
              {
                title: 'Une approche intégrée : la data nourrit tout',
                text: "Chez DARWIN, la data n'est pas une expertise isolée. Elle irrigue chaque levier : les insights analytics orientent vos campagnes SEA, vos audiences SMA, votre stratégie SEO et vos plans média. Cette approche intégrée signifie que chaque donnée collectée est activée — pas simplement stockée dans un rapport que personne ne consulte.",
              },
              {
                title: 'Transparence totale : pas de boîte noire',
                text: "Chaque client dispose de dashboards en temps réel accessibles à tout moment. Nous documentons nos plans de marquage, partageons nos méthodologies d'attribution et expliquons chaque recommandation par la donnée qui la soutient. Vous savez exactement ce qui est mesuré, comment c'est mesuré, et pourquoi nous préconisons telle action plutôt qu'une autre.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '48px 40px',
                  background: '#fafafa',
                  border: '1px solid #ebebeb',
                }}
              >
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.15, color: '#0a0a0a' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: '#fafafa', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
            Questions fréquentes
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 56px' }}>
            CE QUE NOS CLIENTS<br />DEMANDENT EN PREMIER
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ borderTop: i === 0 ? '1px solid #e0e0e0' : 'none', borderBottom: '1px solid #e0e0e0' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', cursor: 'pointer', gap: 16, listStyle: 'none' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, color: '#999' }}>+</span>
                </summary>
                <p style={{ padding: '0 0 24px', fontSize: '0.9rem', lineHeight: 1.8, color: '#555', margin: 0, paddingRight: 40 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUTRES EXPERTISES ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40 }}>
            Nos autres expertises
          </p>
          <div className="rsp-6col" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
            {otherExpertises.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                style={{ display: 'block', padding: '24px 20px', background: '#fafafa', border: '1px solid #ebebeb', textDecoration: 'none', transition: 'background 0.15s' }}
              >
                <div className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 6 }}>{e.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 500 }}>{e.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section id="contact" style={{ background: '#FFF127', padding: '96px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 24 }}>
            Premier échange
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 24px', color: '#0a0a0a' }}>
            ÉCHANGEONS SUR<br />VOTRE STRATÉGIE DATA
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }} dangerouslySetInnerHTML={{ __html: "La donnée est le fondement de toute <strong>performance digitale</strong>. Sans mesure fiable, chaque optimisation est un pari. Avec un tracking rigoureux, une attribution claire et des dashboards qui parlent à vos équipes, chaque euro investi est piloté par la donnée — pas par l'intuition. Parlons de vos enjeux : nous vous dirons exactement ce que votre stack data peut gagner." }} />
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Parlons de vos enjeux data →
            </Link>
            <a href="tel:+33413570900" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #0a0a0a', color: '#0a0a0a', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              +33 (0)4 13 57 09 00
            </a>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#888', marginTop: 24, fontWeight: 500 }}>
            Réponse sous 24h ouvrées · Sans engagement
          </p>
        </div>
      </section>

    </div>
  )
}
