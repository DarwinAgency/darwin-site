import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { faqJsonLd, webPageJsonLd, breadcrumbJsonLd } from '@/app/lib/jsonld'

export const metadata: Metadata = {
  title: "Creative Thinking Community — Collectif d'agences expertes | DARWIN",
  description: "La Creative Thinking Community réunit 4 agences complémentaires — hey!Charly, DARWIN, TBD Group et l'Atelier Imagescence — pour connecter marque, digital et création.",
  alternates: { canonical: '/creative-thinking-community' },
  openGraph: {
    title: "Creative Thinking Community — Collectif d'agences expertes | DARWIN",
    description: "4 agences expertes unies pour révéler le potentiel de chaque projet : stratégie de marque, performance digitale, création web et UX/UI.",
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Creative Thinking Community — DARWIN' }],
  },
}

/* ─── DATA ──────────────────────────────────────────── */

const agencies = [
  {
    id: 'heyCharly',
    eyebrow: 'Stratégie & Identité',
    name: 'hey!Charly',
    tagline: 'Affirmez votre singularité',
    desc: "hey!Charly connecte la stratégie au design pour engager les marques dans un élan durable. De la plateforme de marque à l'identité visuelle, chaque décision est ancrée dans ce qui vous rend unique — et dans ce que vos audiences cherchent vraiment.",
    services: ['Stratégie de marque', 'Plateforme de marque', 'Tone of voice', 'Identité visuelle'],
    cta: { label: 'Découvrir hey!Charly', href: 'https://www.heycharly.fr', external: true },
    img: '/images/ctc/heycharly.webp',
    imgAlt: 'hey!Charly — Stratégie & Identité de marque',
    dark: false,
  },
  {
    id: 'darwin',
    eyebrow: 'Performance & Croissance',
    name: 'DARWIN',
    tagline: 'Générez du CA',
    desc: "DARWIN orchestre les leviers digitaux pour transformer la data en performance et accélérer la croissance des marques. SEO, SEA, SMA, Media programmatique et Analytics — une expertise de 23 ans au service de votre acquisition.",
    services: ['SEO & GEO', 'SEA (Google & Bing)', 'Social Media Ads', 'RTB & Display', 'Email & SMS', 'Data & Analytics'],
    cta: { label: 'Contacter un expert', href: '/contact', external: false },
    img: null,
    imgAlt: null,
    dark: true,
  },
  {
    id: 'tbd',
    eyebrow: 'Création & Développement web',
    name: 'TBD Group',
    tagline: 'Des sites qui performent',
    desc: "TBD Group conçoit et développe des sites internet sur-mesure, pensés pour convertir. Du site vitrine au e-commerce, chaque projet est construit avec une exigence technique et une vision UX centrée sur l'expérience utilisateur et la performance.",
    services: ['Création de site internet', 'E-commerce', 'Sites sur-mesure', 'Maintenance & évolution'],
    cta: { label: 'Découvrir TBD Group', href: '#', external: true },
    img: null,
    imgAlt: null,
    dark: false,
  },
  {
    id: 'imagescence',
    eyebrow: 'UX/UI & Direction artistique',
    name: 'Atelier Imagescence',
    tagline: 'De la méthode, du sens, de la durabilité',
    desc: "L'Atelier Imagescence conçoit des expériences digitales exigeantes : stratégie, UX-UI, identité visuelle. Leur promesse : rendre simple une complexité potentielle, en questionnant les briefs pour proposer des solutions pertinentes — pas seulement attendues.",
    services: ['Conception UX-UI', 'Direction artistique', 'Identité visuelle', 'Photographie corporate'],
    cta: { label: 'Découvrir Imagescence', href: 'https://jean-philippe-heurtier.webflow.io/home-2', external: true },
    img: '/images/ctc/imagescence-hero.jpg',
    imgAlt: 'Atelier Imagescence — UX/UI & Direction artistique',
    dark: true,
  },
]

const faqs = [
  {
    num: '01',
    q: "Qu'est-ce que la Creative Thinking Community ?",
    a: "La Creative Thinking Community est un groupement de 4 agences aux expertises complémentaires — stratégie de marque, performance digitale, création web et UX/UI — unies pour connecter les enjeux marque, digital et marketing de leurs clients. Elle réunit hey!Charly, DARWIN, TBD Group et l'Atelier Imagescence, toutes basées dans la région Sud.",
  },
  {
    num: '02',
    q: "Pourquoi un collectif plutôt qu'une agence full-service ?",
    a: "Un collectif d'experts spécialisés surpasse une agence généraliste sur chaque discipline. Chaque membre de la CTC a bâti sa réputation sur un périmètre précis et collabore avec une vision commune. Vous bénéficiez de la profondeur d'un expert sur chaque sujet, coordonné par une approche stratégique unifiée.",
  },
  {
    num: '03',
    q: "Quels types de projets la CTC accompagne-t-elle ?",
    a: "La CTC accompagne des marques en phase de lancement, de repositionnement ou de scale-up digital. Elle est particulièrement adaptée aux entreprises qui ont besoin simultanément d'affirmer leur singularité et d'accélérer leur croissance. DARWIN a accompagné 400+ clients depuis 2003 — retail, e-commerce, tourisme, services BtoB et BtoC.",
  },
  {
    num: '04',
    q: "Comment les agences de la CTC travaillent-elles ensemble ?",
    a: "La collaboration commence par un diagnostic partagé des enjeux. hey!Charly pose le socle de marque, l'Atelier Imagescence structure l'expérience digitale, TBD Group réalise le site, et DARWIN orchestre les leviers d'acquisition. Les agences se coordonnent sur les KPIs pour assurer une vision complète et cohérente.",
  },
  {
    num: '05',
    q: "Où sont situées les agences de la Creative Thinking Community ?",
    a: "Toutes les agences opèrent depuis la région Sud — Aix-en-Provence et ses environs. DARWIN est basée au 805 Rue Jean René Guillibert Gauthier de la Lauzière, 13290 Aix-en-Provence. Le collectif travaille en présentiel et à distance selon les besoins des projets.",
  },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function CreativeThinkingCommunityPage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* ─── JSON-LD ─── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd('Creative Thinking Community', "Collectif de 4 agences expertes — stratégie de marque, performance digitale, création web et UX/UI — pour révéler le potentiel de chaque projet.", '/creative-thinking-community')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Accueil', url: '/' }, { name: 'Creative Thinking Community', url: '/creative-thinking-community' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      {/* ─── HERO ─── */}
      <section style={{ background: '#fff', position: 'relative', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
        <div className="rsp-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: '88vh' }}>

          {/* LEFT — texte */}
          <div className="rsp-hero-text" style={{ padding: '72px 56px 72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>
              <Link href="/" style={{ color: '#bbb', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <span style={{ color: '#0a0a0a' }}>Creative Thinking Community</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Creative Thinking Community</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.8rem, 5.2vw, 5.2rem)', lineHeight: 0.92, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>UNIR NOS EXPERTISES</span>
              <span style={{ display: 'block' }}>POUR <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px' }}>RÉVÉLER</span></span>
              <span style={{ display: 'block', marginTop: 4 }}>LE POTENTIEL DE</span>
              <span style={{ display: 'block' }}>CHAQUE PROJET.</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              4 agences aux expertises complémentaires, unies pour connecter les enjeux marque, digital et marketing — et créer des synergies stratégiques au service de votre croissance.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                JE VEUX EN SAVOIR PLUS →
              </Link>
            </div>

            {/* 4 membres pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', borderTop: '1px solid #eee', paddingTop: 28 }}>
              {['hey!Charly', 'DARWIN', 'TBD Group', 'Atelier Imagescence'].map(name => (
                <span key={name} style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: '#f5f5f5', color: '#555', padding: '6px 14px', borderRadius: 2 }}>
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — image hero CTC */}
          <div className="rsp-hero-img" style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/ctc/ctc-hero.jpg"
              alt="Creative Thinking Community — 4 agences expertes"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.9 }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 40%)' }} />
            <div style={{ position: 'absolute', bottom: 32, right: 32, background: '#FFF127', padding: '16px 20px', borderRadius: 4 }}>
              <div className="font-anton" style={{ fontSize: '1.4rem', lineHeight: 1, color: '#0a0a0a' }}>4 agences</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>expertises unies</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE — bande jaune ─── */}
      <section style={{ background: '#FFF127', padding: '64px 24px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Notre philosophie
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#0a0a0a' }}>
              L&apos;ESPRIT CRÉATIF<br />À CHAQUE ÉTAPE.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              Les marques qui réussissent engagent leurs audiences durablement et évoluent avec agilité tout en maintenant leurs convictions fondamentales. La Creative Thinking Community intègre l&apos;esprit créatif à chaque stade — dans les idées, les échanges et les méthodes — pour que chaque projet soit porté par une vision cohérente entre marque et performance.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 24 }}>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>23 ans</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>d&apos;expertise digitale</div>
              </div>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>4 agences</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>expertises complémentaires</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LES 4 MEMBRES ─── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Les membres
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 700 }}>
              QUATRE AGENCES,<br />UNE VISION COMMUNE
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {agencies.map((agency) => (
              <div
                key={agency.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  background: agency.dark ? '#0a0a0a' : '#fafafa',
                  border: '1px solid #ebebeb',
                  overflow: 'hidden',
                }}
              >
                {/* Infos */}
                <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                    <span style={{ display: 'inline-block', width: 24, height: 3, background: '#FFF127' }} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: agency.dark ? '#888' : '#aaa' }}>{agency.eyebrow}</span>
                  </div>
                  <h3 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', textTransform: 'uppercase', lineHeight: 0.9, margin: '0 0 16px', color: agency.dark ? '#fff' : '#0a0a0a' }}>
                    {agency.name}
                  </h3>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: agency.dark ? '#FFF127' : '#0a0a0a', marginBottom: 20, letterSpacing: '0.02em' }}>
                    {agency.tagline}
                  </p>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: agency.dark ? '#aaa' : '#555', marginBottom: 32, maxWidth: 420 }}>
                    {agency.desc}
                  </p>
                </div>

                {/* Droite : image + services */}
                <div style={{ borderLeft: `1px solid ${agency.dark ? '#1a1a1a' : '#e8e8e8'}`, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden', flexShrink: 0, background: agency.dark ? '#161616' : '#efefef' }}>
                    {agency.img ? (
                      <Image
                        src={agency.img}
                        alt={agency.imgAlt ?? ''}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: agency.dark ? '#333' : '#ccc' }}>Image à venir</span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '36px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                    <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: agency.dark ? '#555' : '#aaa', marginBottom: 20 }}>
                      Expertises
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {agency.services.map((service) => (
                        <li key={service} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#FFF127', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: agency.dark ? '#ddd' : '#333', letterSpacing: '0.02em' }}>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — grille éditoriale ─── */}
      <section style={{ background: '#f7f7f5', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Header FAQ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'end', marginBottom: 64 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                Questions fréquentes
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, color: '#0a0a0a' }}>
                ON RÉPOND<br />À VOS<br />QUESTIONS
              </h2>
            </div>
            <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 32 }}>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Vous avez un projet qui nécessite plusieurs expertises ? La Creative Thinking Community est faite pour ça — 4 agences spécialisées qui travaillent ensemble avec une vision commune.
              </p>
            </div>
          </div>

          {/* Grille 2 colonnes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {faqs.map((faq) => (
              <div
                key={faq.num}
                style={{
                  background: '#fff',
                  padding: '40px 40px',
                  borderTop: '3px solid #FFF127',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <span className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#ececec', letterSpacing: '-0.02em' }}>
                  {faq.num}
                </span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a0a', margin: 0, lineHeight: 1.4 }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: '#777', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
