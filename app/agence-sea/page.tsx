import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../lib/jsonld'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "Agence SEA — Google Ads & référencement payant | DARWIN",
  description: "Agence SEA Google Partner depuis 2003. Gestion de campagnes Google Ads, Shopping, Performance Max, YouTube Ads, Bing Ads. +400 clients, 7 ans de fidélité moyenne.",
  alternates: { canonical: '/agence-sea' },
  openGraph: {
    ...ogDefaults,
    title: "Agence SEA — Google Ads & référencement payant | DARWIN",
    description: "Agence SEA certifiée Google Partner. Stratégie d'enchères, Google Shopping, Performance Max, YouTube Ads. 23 ans d'expertise, 400+ comptes gérés.",
    url: 'https://darwin-agency.fr/agence-sea',
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: `${DARWIN_YEARS} ans`, label: "d'expertise SEA" },
  { num: '400+', label: 'clients accompagnés' },
  { num: '7 ans', label: 'de fidélité moyenne' },
  { num: 'Google', label: 'Partner certifié' },
]

const pillars = [
  {
    id: '01',
    title: 'La synergie collective',
    desc: "Nous avons bâti notre succès sur une conviction : la synergie collective surpasse toujours l'expertise individuelle. Dans notre équipe, chaque expert enrichit les autres de son savoir-faire afin de les faire monter en compétences. Cette dynamique collective nous permet d'aborder chaque projet sous des angles multiples, générant des solutions innovantes que seule cette diversité peut faire émerger.",
    items: ['Audit complet du compte Google Ads', 'Analyse de la structure de campagnes', 'Diagnostic des scores de qualité', 'Recommandations budgétaires chiffrées'],
  },
  {
    id: '02',
    title: "L'agilité comme second souffle",
    desc: "Le marché digital se transforme rapidement. Être agile est indispensable pour rester performant. Notre organisation nous permet de :",
    items: ['Pivoter rapidement face aux évolutions du marché', 'Adapter nos stratégies en temps réel selon les performances', 'Intégrer les nouvelles technologies dès leur émergence (et après les avoir testées)', 'Personnaliser nos approches selon vos besoins spécifiques'],
  },
  {
    id: '03',
    title: "La créativité comme moteur d'innovation",
    desc: "Le SEA exige analyses techniques, tests, optimisations et créativité. Cette expertise globale sur ce levier nous permet de :",
    items: ['Concevoir des stratégies publicitaires basées sur de réelles analyses de votre marché', 'Développer des messages adaptés à votre audience', 'Imaginer des solutions sur-mesure pour vos défis spécifiques', 'Créer des campagnes qui se démarquent dans des marchés saturés'],
  },
  {
    id: '04',
    title: 'Un engagement durable pour des résultats pérennes',
    desc: "Le SEA apporte des résultats immédiats, mais notre vision est long terme. Nous nous engageons dans la durée pour faire croître constamment vos performances. Notre vision est claire et elle s'articule autour de 4 axes :",
    items: ['Construire des stratégies évolutives qui grandissent avec votre entreprise', 'Maintenir une veille constante sur votre marché et vos concurrents', 'Anticiper les tendances pour rester compétitif', 'Établir un véritable partenariat basé sur la transparence et la confiance'],
  },
]

const services = [
  { href: '/agence-sea/google-search-ads', title: 'Google Search Ads', accent: '#FFF127', desc: "Le Search reste le levier SEA le plus puissant pour capturer l'intention d'achat. Quand un internaute tape une requête sur Google, il exprime un besoin précis — et votre annonce doit apparaître au bon moment, avec le bon message. Nous structurons vos campagnes Search autour de groupes d'annonces thématiques, avec des mots-clés qualifiés et des enchères pilotées par la donnée. Pas de requête large non maîtrisée, pas de budget gaspillé sur des clics qui ne convertissent jamais." },
  { href: '/agence-sea/google-shopping', title: 'Google Shopping', accent: '#FFF127', desc: "Pour les e-commerçants, Google Shopping est devenu incontournable. Vos produits apparaissent directement dans les résultats de recherche avec photo, prix et disponibilité — avant même les annonces textuelles. Nous optimisons votre flux Merchant Center, structurons vos campagnes par catégorie et marge, et pilotons les enchères produit par produit. Le résultat : un ROAS maîtrisé et une visibilité produit maximale sur les requêtes à forte intention d'achat." },
  { href: '/agence-sea/performance-max', title: 'Performance Max', accent: '#FFF127', desc: "Performance Max combine Search, Shopping, Display, YouTube, Gmail et Discover dans une seule campagne pilotée par l'intelligence artificielle de Google. C'est un levier puissant — à condition de le maîtriser. Nous paramétrons vos campagnes PMax avec des groupes d'assets ciblés, des signaux d'audience précis et un tracking irréprochable. Sans cette rigueur, l'algorithme optimise dans le vide. Avec elle, PMax devient un accélérateur de croissance multi-canal." },
  { href: '/agence-sea/youtube-ads', title: 'YouTube Ads', accent: '#FFF127', desc: "YouTube est le deuxième moteur de recherche au monde. Les campagnes vidéo permettent de toucher vos audiences dans un contexte d'attention élevée — bien au-delà du simple pré-roll. Nous déployons des formats In-Stream, Bumper, Discovery et Shorts Ads en fonction de vos objectifs : notoriété de marque, considération ou conversion directe. Le ciblage par intention, par audience et par contenu garantit que chaque vue compte." },
  { href: '/agence-sea/bing-ads', title: 'Bing / Microsoft Ads', accent: '#29C5F5', desc: "Bing représente 10 à 15% des recherches en France — et touche une audience souvent plus mature, avec un pouvoir d'achat supérieur. Les CPCs y sont généralement 20 à 30% moins chers que sur Google. Nous déployons vos campagnes Microsoft Ads en miroir de votre stratégie Google, tout en adaptant les enchères et les messages à cette audience complémentaire. C'est du volume incrémental à moindre coût, et trop d'annonceurs passent à côté." },
  { href: '/agence-sea/remarketing', title: 'Remarketing', accent: '#29C5F5', desc: "97% des visiteurs quittent un site sans convertir au premier passage. Le remarketing les retrouve — sur le réseau Display, sur YouTube, dans Gmail — avec un message adapté à leur niveau d'engagement. Nous segmentons vos audiences en fonction de leur comportement : visiteurs de page produit, abandonnistes panier, lecteurs de contenu. Chaque segment reçoit une annonce pertinente, avec une pression publicitaire maîtrisée pour convertir sans saturer." },
  { href: '/agence-sea/display-discovery', title: 'Display & Discovery', accent: '#29C5F5', desc: "Les campagnes Display et Discovery élargissent votre couverture au-delà de la recherche active. Elles interviennent en haut de tunnel pour installer votre marque dans l'esprit de vos audiences, sur des millions de sites partenaires Google et dans les flux Discover. Nous ciblons par intention, par centre d'intérêt et par audience similaire pour toucher des prospects qualifiés avant même qu'ils ne vous cherchent." },
  { href: '/agence-sea/app-campaigns', title: 'App Campaigns', accent: '#29C5F5', desc: "Les campagnes d'application Google diffusent automatiquement sur Search, Play Store, YouTube et Display pour maximiser les installations ou les actions in-app. Nous paramétrons vos objectifs de coût par installation (CPI) ou de coût par action (CPA in-app), et fournissons les assets créatifs qui performent sur chaque emplacement. Un levier indispensable pour les annonceurs qui misent sur le mobile." },
]

const faqs = [
  {
    q: "Quelle est la différence entre SEO et SEA ?",
    a: "Le SEO (référencement naturel) vise à positionner votre site dans les résultats organiques de Google, sans payer au clic. Le SEA (Search Engine Advertising) consiste à acheter de la visibilité via des annonces payantes, facturées au clic. Le SEO construit une visibilité durable mais demande du temps ; le SEA produit des résultats immédiats mais s'arrête quand le budget s'arrête. Chez DARWIN, nous recommandons systématiquement de combiner les deux : le SEA capte la demande immédiate pendant que le SEO consolide votre positionnement sur le long terme.",
  },
  {
    q: "Quel budget minimum pour le SEA ?",
    a: "Le budget SEA se compose de deux éléments principaux : l'investissement publicitaire sur les plateformes (Google Ads, Microsoft Advertising) et les honoraires de l'agence. Ces derniers varient selon la complexité de vos campagnes et le niveau d'accompagnement souhaité. Faire appel à une agence SEA spécialisée vous permet d'optimiser le budget investi dans Google Ads, grâce à une expertise et des outils qui font toute la différence.",
  },
  {
    q: "Combien de temps pour voir des résultats en SEA ?",
    a: "Les premières données arrivent dès les premiers jours de diffusion — c'est l'avantage du SEA sur le SEO. Mais les vrais résultats, ceux sur lesquels vous pouvez baser des décisions business, nécessitent en général quatre à six semaines d'optimisation. Ce délai permet à l'algorithme de collecter suffisamment de données de conversion, à nos consultants d'affiner les enchères, les audiences et les annonces, et au tracking de produire des insights fiables. Les campagnes Shopping et Performance Max demandent parfois un peu plus de temps pour atteindre leur plein potentiel.",
  },
  {
    q: "Qu'est-ce que le Quality Score et pourquoi est-il important ?",
    a: "Le Quality Score est une note de 1 à 10 attribuée par Google à chaque mot-clé, basée sur trois critères : la pertinence de l'annonce, l'expérience sur la page de destination et le taux de clic attendu. Un Quality Score élevé vous permet de payer moins cher par clic tout en obtenant de meilleures positions. Concrètement, un annonceur avec un score de 8 peut apparaître au-dessus d'un concurrent qui enchérit plus cher mais dont le score est à 4. Chez DARWIN, l'optimisation du Quality Score fait partie de notre travail quotidien — c'est un levier de rentabilité souvent sous-estimé.",
  },
  {
    q: "Performance Max : est-ce adapté à mon activité ?",
    a: "Performance Max convient particulièrement aux e-commerçants (en remplacement du Shopping classique) et aux annonceurs qui disposent d'un volume de conversions suffisant pour alimenter l'algorithme. En revanche, PMax n'est pas une solution miracle : sans un tracking solide, des assets créatifs de qualité et des signaux d'audience bien paramétrés, les résultats seront décevants. Nous auditons votre situation avant de recommander PMax — parfois, des campagnes Search et Shopping bien structurées restent plus performantes.",
  },
  {
    q: "Comment mesurer le ROI de ses campagnes SEA ?",
    a: "Tout commence par un tracking fiable : conversions paramétrées dans Google Ads, Google Analytics 4 et, idéalement, un outil de suivi CRM pour relier les clics aux ventes réelles. Nous mettons en place des modèles d'attribution multi-touch qui dépassent le simple « dernier clic » pour comprendre la contribution de chaque point de contact. Le ROI se mesure en rapportant le chiffre d'affaires généré (ou la valeur des leads) au coût total des campagnes, frais de gestion inclus. Chez DARWIN, chaque client dispose d'un dashboard en temps réel avec ses indicateurs clés : ROAS, CPA, coût par lead, taux de conversion.",
  },
  {
    q: "Agence SEA ou gestion en interne : que choisir ?",
    a: "Gérer Google Ads en interne est possible, mais demande une expertise pointue et une veille constante sur les évolutions de la plateforme. L'avantage d'une agence comme DARWIN, c'est la profondeur d'expérience : nous gérons des centaines de comptes depuis plus de vingt ans, ce qui nous donne une vision des benchmarks par secteur, des bonnes pratiques et des erreurs à éviter que personne ne peut acquérir sur un seul compte. Nous fonctionnons en extension de votre équipe marketing, avec une transparence totale sur les actions menées et les résultats obtenus.",
  },
]

const otherExpertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/agence-seo' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/agence-sma' },
  { title: 'MÉDIA', desc: 'Plan média & acquisition', href: '/agence-media' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/agence-analytics' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/formations' },
  { title: 'STUDIO CRÉATIF', desc: 'Direction artistique & Contenu', href: '/studio-creatif' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function AgenceSEAPage() {
  const jsonLdFaq = faqJsonLd(faqs.map(f => ({ q: f.q, a: f.a })))
  const jsonLdService = serviceJsonLd({
    name: 'Agence SEA',
    description: "Agence SEA certifiée Google Partner. Gestion et optimisation de campagnes Google Ads, Shopping, Performance Max, YouTube Ads, Bing Ads et Remarketing.",
    url: 'https://darwin-agency.fr/agence-sea',
    keywords: ['agence SEA', 'Google Ads', 'Bing Ads', 'Google Shopping', 'Performance Max', 'YouTube Ads', 'remarketing', 'référencement payant'],
  })
  const jsonLdBreadcrumb = breadcrumbJsonLd([
    { name: 'Accueil', url: 'https://darwin-agency.fr/' },
    { name: 'Agence SEA', url: 'https://darwin-agency.fr/agence-sea' },
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
              <span style={{ color: '#0a0a0a' }}>Agence SEA</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Expertise SEA</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', lineHeight: 0.95, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>MARQUER DES POINTS</span>
              <span style={{ display: 'block' }}>ET FAIRE LA DIFFÉRENCE,</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>AVEC LE SEA</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 16, maxWidth: 460 }} dangerouslySetInnerHTML={{ __html: "Vous cherchez à vous démarquer parmi les <strong>4 milliards d'internautes</strong> qui animent le web ? Face à une concurrence digitale toujours plus intense, attirer les bons clients au bon moment est devenu un véritable défi. Notre équipe <strong>SEA</strong> relève ce défi avec vous. Nous optimisons chaque euro investi pour maximiser votre <strong>visibilité</strong> et votre <strong>ROI</strong>." }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }} dangerouslySetInnerHTML={{ __html: "Commerçants, e-commerçants, entreprises de services : nous développons des <strong>stratégies SEA</strong> pointues qui vous permettent d'atteindre rapidement vos objectifs commerciaux. Notre maîtrise des <strong>plateformes publicitaires</strong>, couplée à des outils exclusifs, vous assure une croissance constante de vos performances." }} />

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parlons de vos campagnes SEA →
              </Link>
              <Link href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Notre méthode
              </Link>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="rsp-hero-img" style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/sea/cover-agence-sea.jpeg"
              alt="Agence SEA DARWIN — Google Ads & référencement payant"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
              priority
            />
            {/* Overlay gradient left */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />
            {/* Google Partner badge — bottom right */}
            <div style={{ position: 'absolute', bottom: 28, right: 28, background: '#fff', padding: '24px 32px', borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <Image src="/logos/certifications/google-partner.jpg" alt="Google Partner" width={300} height={100} style={{ height: 90, width: 'auto', display: 'block' }} />
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
              UNE EXPERTISE QUI<br />S&apos;ADAPTE ET ÉVOLUE
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 20px' }} dangerouslySetInnerHTML={{ __html: "L'univers digital évolue rapidement, exigeant une <strong>agilité constante</strong>. Notre expertise, validée par nos certifications <strong>Google Partner Premier</strong> et <strong>Microsoft Advertising</strong>, nous permet de nous adapter à ces changements. Réactifs, nous intégrons ces évolutions à vos campagnes pour améliorer leurs performances en utilisant les dernières fonctionnalités." }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }} dangerouslySetInnerHTML={{ __html: "Choisir <strong>DARWIN</strong>, c'est miser sur une expertise SEA complète pour atteindre vos objectifs, mais c'est aussi s'associer à un collectif d'experts qui :" }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Challenge les conventions pour créer des stratégies distinctives',
                'Anticipe les évolutions du marché pour garder une longueur d\'avance',
                'S\'engage dans la durée pour construire votre succès digital',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem', color: '#333', lineHeight: 1.6 }}>
                  <span style={{ width: 6, height: 6, background: '#0a0a0a', borderRadius: '50%', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }} dangerouslySetInnerHTML={{ __html: "Le SEA, c'est la gestion technique des clics et des enchères mais c'est surtout le fait de <strong>comprendre vos clients</strong> pour les atteindre au bon moment, de susciter leur intérêt et de les transformer en acheteurs." }} />
          </div>
        </div>
      </section>

      {/* ─── QU'EST-CE QU'UNE AGENCE SEA ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* LEFT — text content + table */}
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                Définition
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px', color: '#0a0a0a' }}>
                QU&apos;EST-CE QU&apos;UNE<br />AGENCE SEA ?
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 24, textAlign: 'justify' }}>
                Une agence SEA gère vos campagnes publicitaires sur les moteurs de recherche — Google Ads et Microsoft Ads en tête. Elle conçoit la stratégie d&apos;acquisition payante, structure vos comptes, rédige les annonces, pilote les enchères et optimise les performances au quotidien. Son objectif : transformer chaque euro investi en résultat mesurable.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 32, textAlign: 'justify' }}>
                Chez DARWIN, le SEA ne vit pas en silo. Vos campagnes Google Ads s&apos;intègrent dans un dispositif d&apos;acquisition global — SEO, SMA, Analytics — où les données de chaque levier enrichissent les autres. C&apos;est cette approche intégrée, portée par {DARWIN_YEARS} ans d&apos;expérience, qui fait la différence.
              </p>

              {/* Certifications logos */}
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 24 }}>
                Nos certifications
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
                <Image src="/logos/certifications/google-partner.jpg" alt="Google Partner" width={240} height={90} style={{ height: 80, width: 'auto', display: 'block' }} />
                <Image src="/logos/certifications/bing-ads.jpg" alt="Microsoft Advertising" width={200} height={80} style={{ height: 70, width: 'auto', display: 'block' }} />
                <Image src="/logos/certifications/apple-search-ads.png" alt="Apple Search Ads" width={200} height={80} style={{ height: 70, width: 'auto', display: 'block' }} />
                <Image src="/logos/certifications/google-analytics.png" alt="Google Analytics" width={200} height={80} style={{ height: 70, width: 'auto', display: 'block' }} />
              </div>
            </div>

            {/* RIGHT — photo with editorial framing */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: '1px solid #ebebeb', borderRadius: 4, pointerEvents: 'none' }} />
                <Image
                  src="/images/sea/agence-sea-expert-sea.jpg"
                  alt="Consultants DARWIN en pilotage de campagnes Google Ads"
                  width={640}
                  height={460}
                  style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block', borderRadius: 4, position: 'relative', zIndex: 1 }}
                />
                <div style={{ position: 'absolute', bottom: -12, left: 0, width: 48, height: 3, background: '#FFF127', zIndex: 2 }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 24, lineHeight: 1.6, fontWeight: 500 }}>
                L&apos;équipe DARWIN en pilotage SEA — Aix-en-Provence
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
              UNE STRATÉGIE SEA<br />COMPLÈTE, PAS DES CLICS DISPERSÉS
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

      {/* ─── SERVICES SEA ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Nos services SEA en détail
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CHAQUE LEVIER SEA<br />A SON RÔLE DANS VOTRE TUNNEL
            </h2>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {services.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: 'block',
                  padding: '36px 32px',
                  background: '#fff',
                  borderTop: `4px solid ${card.accent}`,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                className="levier-card"
              >
                <h3 className="font-anton" style={{ fontSize: '1.5rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 14, lineHeight: 1.1 }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#666', margin: '0 0 24px' }}>{card.desc}</p>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: card.accent === '#FFF127' ? '#0a0a0a' : card.accent }}>Découvrir →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VOS OBJECTIFS, NOTRE STRATÉGIE ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Vos objectifs, notre stratégie
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 800 }}>
              ACQUISITION, ROI, VISIBILITÉ OU SCALE : ADAPTEZ VOTRE SEA À VOS PRIORITÉS
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {[
              {
                title: 'Vous voulez acquérir de nouveaux clients ?',
                text: "Le Search reste le levier le plus direct pour capter une demande existante. Quand un prospect tape « assurance auto devis » ou « plombier Aix-en-Provence », il est prêt à agir. Nous structurons vos campagnes autour des requêtes à forte intention commerciale, avec des landing pages optimisées pour la conversion. L'objectif : générer un flux régulier de leads qualifiés ou de ventes, à un coût d'acquisition maîtrisé et prévisible. C'est la base — et c'est souvent là que se trouvent les gains les plus rapides.",
              },
              {
                title: 'Vous cherchez à maximiser votre ROI publicitaire ?',
                text: "Maximiser le ROI, ce n'est pas dépenser moins — c'est dépenser mieux. Nous analysons la rentabilité par mot-clé, par audience, par appareil et par zone géographique pour concentrer le budget là où il produit le meilleur retour. Les enchères automatiques de type ROAS cible sont calibrées en fonction de vos marges réelles, pas de moyennes théoriques. Nous éliminons les postes de dépense non rentables — mots-clés non pertinents, heures creuses, emplacements Display sous-performants — et réinjectons ces économies dans ce qui convertit.",
              },
              {
                title: 'Vous avez besoin de visibilité immédiate ?',
                text: "Le SEA est le seul levier digital qui peut vous placer en première position de Google dès le premier jour. Pour un lancement de produit, une ouverture de magasin ou une opération commerciale, nous déployons des campagnes rapides sur Search, YouTube et Display pour saturer votre cible en quelques jours. Les campagnes vidéo YouTube, en particulier, offrent un reach massif à des CPV très compétitifs — idéal pour installer une marque ou accompagner un temps fort commercial.",
              },
              {
                title: 'Vous souhaitez scaler vos campagnes rentables ?',
                text: "Vous avez un compte Google Ads qui fonctionne, mais vous plafonnez. Augmenter le budget ne suffit plus — les CPCs montent, le ROAS se dégrade. Pour scaler sans sacrifier la rentabilité, il faut diversifier les leviers : ouvrir Performance Max, activer Bing Ads pour capter du volume incrémental, élargir les audiences tout en maintenant la qualification. Nous pilotons cette montée en puissance par paliers, en mesurant l'impact de chaque expansion sur vos métriques business avant de passer au niveau suivant.",
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

      {/* ─── MÉTHODE ─── */}
      <section id="methode" style={{ background: '#0a0a0a', padding: '80px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Header row */}
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
                Notre méthode
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, color: '#fff' }}>
                4 ÉTAPES POUR<br />UN SEA RENTABLE
              </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF127', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parler à un expert SEA →
              </Link>
            </div>
          </div>

          {/* 4 steps — horizontal timeline cards */}
          <div className="rsp-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              {
                num: '01', title: 'Comprendre', subtitle: 'vos besoins',
                desc: "Votre entreprise est unique. Avant de démarrer, nous prenons le temps de comprendre vos besoins spécifiques. Nous analysons votre marché, identifions vos concurrents et étudions vos clients potentiels.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
              },
              {
                num: '02', title: 'Stratégie', subtitle: 'sur-mesure',
                desc: "Nous construisons une stratégie SEA sur-mesure, parfaitement adaptée à vos objectifs, avec un plan d'action concret. Nous avons développé des outils propriétaires qui redéfinissent les standards de l'optimisation SEA. Nos scripts d'automatisation analysent en permanence les performances de vos campagnes. Ils nous permettent ensuite d'ajuster les paramètres rapidement pour un meilleur ROI.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
              },
              {
                num: '03', title: 'Optimisation', subtitle: 'IA + humain',
                desc: "L'expertise humaine mélangée à l'intelligence artificielle permet une optimisation plus poussée de vos performances, en alliant stratégie, créativité et data.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              },
              {
                num: '04', title: 'Reporting', subtitle: '& transparence',
                desc: "Nos dashboards personnalisés, créés sur-mesure selon vos indicateurs clés, vous donnent une vision claire et actionnable de vos campagnes. Cette transparence nourrit une collaboration constructive et vous permet de mesurer concrètement l'impact de nos actions.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
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

      {/* ─── CAMPAGNES ADAPTÉES ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Nos formats publicitaires
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 32px', maxWidth: 800 }}>
              DES CAMPAGNES ADAPTÉES<br />À CHAQUE OBJECTIF
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', marginBottom: 40, maxWidth: 720 }} dangerouslySetInnerHTML={{ __html: "Notre expertise couvre l'ensemble des <strong>formats publicitaires</strong> disponibles, chacun répondant à des objectifs spécifiques :" }} />
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {[
              {
                title: 'Campagnes Search classiques',
                text: "Les campagnes Search classiques ciblent les utilisateurs en recherche active de vos produits ou services.",
              },
              {
                title: 'Campagnes Performance Max',
                text: "Les campagnes Performance Max, combinant l'intelligence artificielle et le machine learning, optimisent automatiquement vos annonces sur l'ensemble du réseau Google pour maximiser vos conversions.",
              },
              {
                title: 'Génération de leads B2B',
                text: "Pour la génération de leads B2B, nous déployons des stratégies de demand generation ciblées, associant Search, Display et LinkedIn Ads.",
              },
              {
                title: 'Shopping & Smart Shopping',
                text: "Enfin, les campagnes Shopping et Smart Shopping sont spécifiquement conçues pour les e-commerçants souhaitant promouvoir leurs produits de manière visuelle et convertir efficacement.",
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

      {/* ─── RÉSULTATS CLIENTS ─── */}
      <section style={{ background: '#f4f4f4', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 24 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                La preuve avant tout
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
                DES RÉSULTATS SEA<br />QUE NOS CLIENTS PEUVENT NOMMER
              </h2>
            </div>
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #0a0a0a', paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 32 }}>
              Tous les cas clients →
            </Link>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                client: 'Pacific Pêche',
                category: 'SEA',
                result: '+21%',
                resultLabel: 'de CA en ligne',
                period: 'Campagnes Shopping & Search optimisées',
                img: '/images/cas-clients/pacific-peche-cover.jpg',
                href: '/cas-clients/pacific-peche',
              },
              {
                client: 'Catimini',
                category: 'SEA · SMA',
                result: 'x2',
                resultLabel: 'objectifs doublés sur 10 marchés',
                period: 'Déploiement multi-pays coordonné',
                img: '/images/cas-clients/catimini-cover.jpg',
                href: '/cas-clients/catimini',
              },
              {
                client: 'Ponant',
                category: 'SEA · SMA',
                result: '+55%',
                resultLabel: 'sur les objectifs leads',
                period: 'Stratégie Search & remarketing premium',
                img: '/images/cas-clients/ponant-cover.jpg',
                href: '/cas-clients/ponant',
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
              POURQUOI CHOISIR DARWIN<br />COMME AGENCE SEA ?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', maxWidth: 720, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Quelle que soit votre activité ou vos objectifs, nous adaptons nos <strong>campagnes SEA</strong> à vos besoins : <strong>Search</strong>, <strong>Shopping</strong>, <strong>Display</strong> ou <strong>YouTube Ads</strong>." }} />
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              {
                title: 'Une expertise adaptée à chaque problématique',
                text: "Du petit commerce local aux grands comptes internationaux, nous ajustons nos stratégies à votre échelle. Chaque client bénéficie d'un accompagnement personnalisé : optimisation des coûts d'acquisition, développement des ventes en ligne, génération de leads qualifiés ou augmentation de la visibilité locale.",
              },
              {
                title: 'Des experts spécialisés à votre service',
                text: "Nos équipes sont certifiées. Chaque membre du collectif apporte ses compétences pour votre projet : experts en e-commerce, spécialistes des marketplaces, consultants en lead generation… Cette diversité de compétences vous permet de profiter d'une stratégie modulable et optimisée pour vos objectifs.",
              },
              {
                title: 'Un partenaire présent à chaque étape',
                text: "De l'audit initial au déploiement des campagnes, en passant par l'analyse des performances, nous vous accompagnons à chaque étape. Vous disposez d'un interlocuteur dédié qui coordonne les différentes expertises pour assurer la réussite de vos projets.",
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
            ÉCHANGEONS SUR<br />VOTRE STRATÉGIE SEA
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 700, margin: '0 auto 40px' }}>
            Pour performer en SEA, il faut des connaissances, de l&apos;analyse, des ajustements, de la patience, des remises en question, une veille régulière et une capacité d&apos;adaptation permanente. Une collaboration que nous souhaitons entreprendre à vos côtés, en apportant notre expertise collective, notre créativité et notre engagement. Votre ambition mérite une approche différente, une vision plus audacieuse, un partenaire qui comprend véritablement les enjeux de votre business.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Parlons de vos enjeux SEA →
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
