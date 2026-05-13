import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../lib/jsonld'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "Agence SMA — Social Media Ads & réseaux sociaux | DARWIN",
  description: "Vous cherchez à développer votre marque sur les réseaux sociaux? Face à la multiplicité des plateformes et des formats publicitaires, piloter efficacement vos campagnes Social Ads nécessite l'accompagnement d'un professionnel.",
  alternates: { canonical: '/agence-sma' },
  openGraph: {
    ...ogDefaults,
    images: [{ url: '/images/sma/cover-agence-sma.jpeg', width: 1200, height: 630, alt: 'Agence Social Media Ads DARWIN' }],
    title: "Agence SMA — Social Media Ads & réseaux sociaux | DARWIN",
    description: "Vous cherchez à développer votre marque sur les réseaux sociaux? Face à la multiplicité des plateformes et des formats publicitaires, piloter efficacement vos campagnes Social Ads nécessite l'accompagnement d'un professionnel.",
    url: 'https://darwin-agency.fr/agence-sma',
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: `${DARWIN_YEARS} ans`, label: "d'expertise" },
  { num: '400+', label: 'clients accompagnés' },
  { num: '7 ans', label: 'de fidélité moyenne' },
  { num: 'Meta', label: 'Partner certifié' },
]

const pillars = [
  {
    id: '01',
    title: 'Facebook et Instagram, les incontournables',
    desc: "Notre certification Meta Business Partner vous donne accès au meilleur de Facebook et Instagram. Reels, Stories, Shops… nous utilisons chaque format publicitaire de manière stratégique pour capter l'attention de votre cible. Grâce au Pixel avancé, à l'A/B testing automatique et à l'option Shopping Advantage+, nous optimisons vos campagnes en permanence. Les outils de Conversions API nous permettent d'affiner votre ciblage et d'optimiser vos campagnes Facebook et Instagram. Enfin, les outils d'IA permettent désormais de générer automatiquement des variantes publicitaires et d'optimiser les visuels en temps réel.",
    items: ['Meta Business Partner', 'Pixel & Conversions API', 'Shopping Advantage+', 'A/B testing & IA'],
  },
  {
    id: '02',
    title: 'LinkedIn pour une stratégie business',
    desc: "LinkedIn est le réseau professionnel par excellence pour toucher les décideurs et développer votre activité B2B. Nous utilisons toute la gamme d'outils publicitaires LinkedIn pour atteindre vos objectifs.",
    items: ['Publications sponsorisées', 'Messages privés sponsorisés', 'Publicités dynamiques', 'Formulaires pré-remplis'],
  },
  {
    id: '03',
    title: "TikTok pour capter l'attention d'une nouvelle génération",
    desc: "TikTok transforme les règles de la publicité sur les réseaux sociaux avec son format vidéo court et dynamique. Notre collectif maîtrise les codes créatifs de TikTok : musiques virales, effets visuels et montages dynamiques. Nous transformons votre message publicitaire en contenu impactant qui touche aussi bien les jeunes générations que les audiences plus larges, désormais très présentes sur la plateforme.",
    items: ['Contenus organiques amplifiés', 'Formats immersifs', 'Trends & créatif natif', 'Audiences jeunes & larges'],
  },
  {
    id: '04',
    title: "D'autres réseaux à explorer",
    desc: "De nouveaux réseaux sociaux voient le jour, offrant de nouvelles opportunités pour votre marque. Au-delà des plateformes majeures, d'autres canaux méritent de l'attention.",
    items: ['X (actualité en temps réel)', 'Threads (conversations authentiques)', 'Pinterest (inspiration & conversion)', 'WhatsApp (messaging Snapchat (jeunes audiences) commerce)'],
  },
]

const services = [
  { href: '/agence-sma/facebook-ads', title: 'Facebook Ads', accent: '#FFF127', objective: 'Notoriété, trafic, engagement', desc: 'Vidéos, carrousels, publicités dynamiques' },
  { href: '/agence-sma/instagram-ads', title: 'Instagram Ads', accent: '#FFF127', objective: 'Visibilité, conversion, notoriété', desc: 'Stories, photos, vidéos courtes' },
  { href: '/agence-sma/linkedin-ads', title: 'LinkedIn Ads', accent: '#FFF127', objective: 'Lead generation, B2B, recrutement', desc: 'Annonces textuelles, sponsored InMail' },
  { href: '/agence-sma/tiktok-ads', title: 'TikTok Ads', accent: '#FFF127', objective: 'Engagement, notoriété, viralité', desc: 'Formats vidéo courts et dynamiques' },
  { href: '/agence-sma/pinterest-ads', title: 'Pinterest Ads', accent: '#29C5F5', objective: 'E-commerce, inspiration', desc: 'Visuels inspirants, guides d\'achat' },
  { href: '/agence-sma/whatsapp-business', title: 'WhatsApp Business', accent: '#29C5F5', objective: 'Messaging, commerce, relation client', desc: 'Catalogues, messagerie automatisée, click-to-WhatsApp' },
]

const faqs = [
  {
    q: "Quelle est la différence entre le SMA et le community management ?",
    a: "Le community management consiste à animer vos réseaux sociaux de manière organique : publications, interactions avec votre communauté, modération. Le SMA (Social Media Advertising) désigne la gestion de campagnes publicitaires payantes sur les réseaux sociaux. Chez DARWIN, nous recommandons de combiner les deux approches : le community management construit votre image de marque sur le long terme, tandis que le SMA amplifie votre visibilité et génère des résultats mesurables rapidement grâce à un ciblage précis.",
  },
  {
    q: "Quel budget minimum pour lancer des campagnes Social Ads ?",
    a: "Le budget dépend de vos objectifs, de votre secteur et des plateformes ciblées. Il se compose de l'investissement publicitaire (dépensé directement sur les plateformes comme Meta, LinkedIn ou TikTok) et des honoraires de l'agence. Faire appel à une agence SMA spécialisée comme DARWIN vous permet d'optimiser chaque euro investi grâce à une expertise de ciblage, de créatifs et de pilotage qui fait toute la différence sur le retour sur investissement.",
  },
  {
    q: "Comment choisir entre Facebook, Instagram, LinkedIn et TikTok ?",
    a: "Chaque plateforme a ses forces et touche des audiences différentes. Facebook et Instagram (Meta) offrent le ciblage le plus complet et conviennent à la plupart des secteurs. LinkedIn est incontournable pour le B2B et le recrutement. TikTok excelle pour toucher les jeunes audiences et créer de la viralité. Chez DARWIN, nous analysons votre cible, vos objectifs et votre marché pour recommander le mix de plateformes le plus pertinent — souvent une combinaison de plusieurs réseaux pour maximiser l'impact.",
  },
  {
    q: "Combien de temps pour voir les premiers résultats en Social Ads ?",
    a: "Les premières données (impressions, clics, engagement) arrivent dès les premiers jours de diffusion. Cependant, les résultats business significatifs — leads qualifiés, ventes, coût d'acquisition stabilisé — nécessitent généralement 4 à 6 semaines d'optimisation. Ce délai permet aux algorithmes des plateformes de collecter suffisamment de données, et à nos consultants d'affiner les audiences, les créatifs et les enchères pour atteindre vos objectifs de performance.",
  },
  {
    q: "DARWIN gère-t-il aussi la création des visuels publicitaires ?",
    a: "Oui, notre studio créatif intégré conçoit l'ensemble des visuels et vidéos nécessaires à vos campagnes Social Ads. Stories, Reels, carrousels, vidéos courtes TikTok : nous maîtrisons les codes créatifs de chaque plateforme pour produire des contenus qui captent l'attention et génèrent de l'engagement. Cette intégration créa + média garantit une cohérence parfaite entre le message et la stratégie de diffusion.",
  },
  {
    q: "Comment mesurer le ROI de ses campagnes Social Ads ?",
    a: "La mesure du ROI commence par un tracking fiable : Pixel Meta, Conversions API, intégration CRM. Au-delà des indicateurs classiques (impressions, clics, CPM), nous nous concentrons sur les KPIs directement liés à vos objectifs business : coût par lead, coût par acquisition, ROAS, taux de conversion. Chaque client DARWIN dispose d'un reporting personnalisé avec des dashboards en temps réel qui permettent de suivre précisément la rentabilité de chaque euro investi.",
  },
]

const otherExpertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/agence-seo' },
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/agence-sea' },
  { title: 'MÉDIA', desc: 'Plan média & acquisition', href: '/agence-media' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/agence-analytics' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/formations' },
  { title: 'STUDIO CRÉATIF', desc: 'Direction artistique & Contenu', href: '/studio-creatif' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function AgenceSmaPage() {
  const jsonLdFaq = faqJsonLd(faqs.map(f => ({ q: f.q, a: f.a })))
  const jsonLdService = serviceJsonLd({
    name: 'Agence SMA',
    description: "Agence SMA certifiée Meta Partner. Gestion de campagnes Social Ads sur Facebook, Instagram, LinkedIn, TikTok, Pinterest et WhatsApp.",
    url: 'https://darwin-agency.fr/agence-sma',
    keywords: ['agence SMA', 'Social Media Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads', 'Pinterest Ads', 'publicité réseaux sociaux'],
  })
  const jsonLdBreadcrumb = breadcrumbJsonLd([
    { name: 'Accueil', url: 'https://darwin-agency.fr/' },
    { name: 'Agence SMA', url: 'https://darwin-agency.fr/agence-sma' },
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
              <span style={{ color: '#0a0a0a' }}>Agence SMA</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Expertise SMA</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', lineHeight: 0.95, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>S&apos;ADAPTER AUX TENDANCES,</span>
              <span style={{ display: 'block' }}>AFFIRMER SA PRÉSENCE</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>SUR LES RÉSEAUX SOCIAUX</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 16, maxWidth: 460 }}>
              Vous cherchez à développer votre marque sur les réseaux sociaux? Face à la multiplicité des plateformes et des formats publicitaires, piloter efficacement vos campagnes Social Ads nécessite l&apos;accompagnement d&apos;un professionnel.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }} dangerouslySetInnerHTML={{ __html: "Les réseaux sont un levier marketing puissant lorsqu'ils sont bien utilisés. <strong>Facebook</strong>, <strong>TikTok</strong>, <strong>Instagram</strong> ou encore <strong>LinkedIn</strong>, chaque réseau social a ses codes et ses spécificités. Nous exploitons les forces de chaque plateforme pour créer des publicités qui captent l'attention et génèrent de l'engagement. Stories, Reels, carrousels ou posts sponsorisés: nous choisissons les bons leviers à activer en fonction de vos objectifs." }} />

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parlons de vos enjeux Social Ads →
              </Link>
              <Link href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Notre méthode
              </Link>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="rsp-hero-img" style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/sma/cover-agence-sma.jpeg"
              alt="Agence SMA DARWIN — Social Media Ads & réseaux sociaux"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
              priority
            />
            {/* Overlay gradient left */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />
            {/* Meta Partner badge — bottom right */}
            <div style={{ position: 'absolute', bottom: 28, right: 28, background: '#fff', padding: '24px 32px', borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <Image src="/logos/certifications/meta-partner.jpg" alt="Meta Partner" width={300} height={100} style={{ height: 90, width: 'auto', display: 'block' }} />
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
              LE SMA, UN INDISPENSABLE<br />POUR VOTRE STRATÉGIE ?
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 20px' }} dangerouslySetInnerHTML={{ __html: "Plus les années passent, plus les réseaux sociaux deviennent nécessaires dans la création d'une stratégie digitale efficace. Contrairement aux autres leviers du marketing en ligne, le SMA vous permet d'atteindre précisément votre cible, là où elle passe du temps au quotidien : sur les réseaux sociaux comme <strong>Facebook</strong>, <strong>Instagram</strong>, <strong>LinkedIn</strong> et <strong>TikTok</strong>." }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 20px' }}>
              À la différence des publications organiques (des publications non boostées), dont la portée est limitée, les ads multiplient votre visibilité. Ils vous offrent un ciblage d&apos;une précision remarquable : les centres d&apos;intérêt, la localisation, les comportements en ligne, les habitudes d&apos;achat ou encore les interactions avec votre marque.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 16px' }}>
              Les chiffres parlent d&apos;eux-mêmes. Plus de 5 milliards de personnes sont actives sur les réseaux. Cela représente plus de 60% de la population mondiale. Cette présence massive ne cesse de croître, avec 266 millions de nouveaux utilisateurs rien qu&apos;en 2023 par rapport à l&apos;année précédente.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 24 }}>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>5Mds+</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>utilisateurs actifs</div>
              </div>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>2h23</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>temps moyen/jour</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QU'EST-CE QU'UNE AGENCE SMA ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* LEFT — text content */}
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                Définition
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px', color: '#0a0a0a' }}>
                QU&apos;EST-CE QU&apos;UNE<br />AGENCE SMA ?
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Une agence SMA (Social Media Advertising) est un partenaire spécialisé dans la conception, le pilotage et l&apos;optimisation de campagnes publicitaires sur les réseaux sociaux. Son rôle va bien au-delà de la simple création de posts sponsorisés. Elle définit la stratégie d&apos;acquisition sociale, sélectionne les plateformes pertinentes, construit les audiences, conçoit les créatifs et pilote les budgets au quotidien pour maximiser le retour sur investissement.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Concrètement, une agence SMA intervient sur l&apos;ensemble du tunnel de conversion. En haut de tunnel : campagnes de notoriété et de reach sur Meta, TikTok ou YouTube pour installer votre marque. Au milieu : formats d&apos;engagement (carrousels, vidéos, stories) pour nourrir la considération. En bas : retargeting, formulaires natifs et campagnes de conversion pour transformer l&apos;audience en clients. Chaque plateforme a ses codes, ses formats et ses algorithmes — et c&apos;est la maîtrise de ces spécificités qui fait la différence entre un budget dépensé et un budget investi.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Chez DARWIN, le SMA ne fonctionne pas en silo. Nos campagnes Social Ads s&apos;intègrent dans un dispositif d&apos;acquisition global — SEO, SEA, Média, Analytics — où les données de chaque levier enrichissent les autres. Les audiences issues de vos campagnes Meta alimentent vos listes de remarketing Google. Les insights Analytics orientent vos ciblages sociaux. Cette approche intégrée, portée par notre certification Meta Business Partner et {DARWIN_YEARS} ans d&apos;expérience, est ce qui fidélise nos clients en moyenne sept ans.
              </p>

              {/* Certifications logos */}
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 24 }}>
                Nos certifications
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
                <Image src="/logos/certifications/meta-partner.jpg" alt="Meta Partner" width={300} height={100} style={{ height: 90, width: 'auto', display: 'block' }} />
                <Image src="/logos/certifications/google-analytics.png" alt="Google Analytics" width={260} height={90} style={{ height: 80, width: 'auto', display: 'block' }} />
              </div>
            </div>

            {/* RIGHT — photo with editorial framing */}
            <div style={{ position: 'sticky', top: 100 }}>
              {/* Offset frame behind the image */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: '1px solid #ebebeb', borderRadius: 4, pointerEvents: 'none' }} />
                <Image
                  src="/images/sma/definition-agence-sma.jpg"
                  alt="Consultants DARWIN en stratégie Social Media Ads"
                  width={640}
                  height={460}
                  style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block', borderRadius: 4, position: 'relative', zIndex: 1 }}
                />
                {/* Yellow accent bar */}
                <div style={{ position: 'absolute', bottom: -12, left: 0, width: 48, height: 3, background: '#FFF127', zIndex: 2 }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 24, lineHeight: 1.6, fontWeight: 500 }}>
                L&apos;équipe DARWIN en session de pilotage Social Ads — Aix-en-Provence
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
              UNE STRATÉGIE SOCIAL ADS<br />STRUCTURÉE, PAS DES BOOSTS ISOLÉS
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

      {/* ─── SERVICES SMA ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Nos services Social Ads en détail
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CHAQUE PLATEFORME SOCIALE<br />A SON RÔLE DANS VOTRE STRATÉGIE
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
                <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', color: '#0a0a0a', marginBottom: 8 }}>{card.objective}</p>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#666', margin: '0 0 24px' }}>{card.desc}</p>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: card.accent === '#FFF127' ? '#0a0a0a' : card.accent }}>Découvrir →</span>
              </Link>
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
                DES RÉSULTATS SOCIAL ADS<br />QUE NOS CLIENTS PEUVENT NOMMER
              </h2>
            </div>
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #0a0a0a', paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 32 }}>
              Tous les cas clients →
            </Link>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                client: 'Acadomia',
                category: 'SMA · Média',
                result: '+65%',
                resultLabel: 'leads/mois',
                period: 'Stratégie Social Ads multi-plateforme',
                img: '/images/cas-clients/acadomia-cover.jpg',
                href: '/cas-clients/acadomia',
              },
              {
                client: 'EBRA',
                category: 'SMA · Média',
                result: '+46%',
                resultLabel: 'nouveaux abonnés',
                period: 'Campagnes Social Ads ciblées',
                img: '/images/cas-clients/ebra-cover.jpg',
                href: '/cas-clients/ebra',
              },
              {
                client: 'Ponant',
                category: 'SEA · SMA',
                result: '+55%',
                resultLabel: 'objectifs leads',
                period: 'Stratégie Search & Social Ads premium',
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
                NOUS VOUS ACCOMPAGNONS<br />DE A À Z
              </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF127', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parler à un expert Social Ads →
              </Link>
            </div>
          </div>

          {/* Intro text */}
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: 48, maxWidth: 800 }}>
            Pour réussir vos campagnes publicitaires, il faut une bonne méthodologie et beaucoup d&apos;imagination. Nous unissons ces deux forces en étant à la fois stratèges dans notre approche et créatifs dans nos solutions. Avant de lancer votre campagne, nous prenons le temps de vous connaître. Votre histoire, vos valeurs, vos ambitions nous inspirent. C&apos;est en comprenant parfaitement votre univers - votre marché, vos concurrents, vos clients - que nous mettons en place des campagnes qui vous ressemblent.
          </p>

          {/* 4 steps — horizontal timeline cards */}
          <div className="rsp-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              {
                num: '01', title: 'Veille', subtitle: 'des tendances',
                desc: "Une veille constante des tendances",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
              },
              {
                num: '02', title: 'Tests', subtitle: '& messages',
                desc: "Des tests réguliers pour identifier les messages qui font réagir votre audience",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
              },
              {
                num: '03', title: 'Optimisation', subtitle: 'quotidienne',
                desc: "Une optimisation quotidienne de vos campagnes",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              },
              {
                num: '04', title: 'Suivi', subtitle: 'transparent',
                desc: "Un suivi transparent des performances",
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

          {/* Reporting section */}
          <div style={{ marginTop: 64, padding: '48px 40px', background: '#1a1a1a', borderLeft: '4px solid #FFF127' }}>
            <h3 className="font-anton" style={{ fontSize: '1.6rem', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>ANALYSE ET REPORTING</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: 800 }}>
              L&apos;analyse des performances est au coeur de toute stratégie réussie. En plus des principaux indicateurs de performances comme le nombre d&apos;impressions ou le nombre de clics, nous nous concentrons sur des KPIs directement liés à vos objectifs business.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DARWIN DIFFÉRENT ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre différence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.4rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px' }}>
              DONNEZ UNE NOUVELLE DIMENSION<br />À VOTRE PRÉSENCE SOCIALE
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>
              Les réseaux sociaux offrent une opportunité unique de connecter votre marque avec votre audience. Notre équipe mobilise son expertise et sa créativité pour transformer cette opportunité en conversion.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 40 }}>
              Chez DARWIN, nous restons à vos côtés pour faire grandir votre présence sociale et développer votre activité.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Échangeons sur votre stratégie →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Image ornement */}
            <div style={{ position: 'relative', width: '100%', height: 220, borderRadius: 6, overflow: 'hidden' }}>
              <Image
                src="/images/sma/agence-sma-dimension.jpg"
                alt="L'équipe DARWIN au travail sur les Social Ads"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: `${DARWIN_YEARS} ans`, label: "D'expertise", sub: "Depuis 2003" },
                { num: '400+', label: 'Clients', sub: 'Accompagnés en Social Ads' },
                { num: 'Meta', label: 'Partner', sub: 'Certification officielle' },
                { num: '7 ans', label: 'Fidélité client', sub: 'Durée moyenne de collaboration' },
              ].map((item) => (
                <div key={item.num + item.label} style={{ padding: '28px 24px', background: '#fafafa', border: '1px solid #ebebeb' }}>
                  <div className="font-anton" style={{ fontSize: '2.2rem', lineHeight: 1, marginBottom: 6, color: '#0a0a0a' }}>{item.num}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 500 }}>{item.sub}</div>
                </div>
              ))}
            </div>
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
            DONNEZ UNE NOUVELLE DIMENSION<br />À VOTRE PRÉSENCE SOCIALE
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 12, maxWidth: 700, margin: '0 auto 12px' }}>
            Les réseaux sociaux offrent une opportunité unique de connecter votre marque avec votre audience. Notre équipe mobilise son expertise et sa créativité pour transformer cette opportunité en conversion.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 700, margin: '0 auto 40px' }}>
            Chez DARWIN, nous restons à vos côtés pour faire grandir votre présence sociale et développer votre activité.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Parlons de vos enjeux Social Ads →
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
