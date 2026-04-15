import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "DARWIN — L'agence marketing digital depuis 2003",
  description: `Découvrez DARWIN : 30+ experts seniors, 400+ clients accompagnés, ${DARWIN_YEARS} ans de performance digitale à Aix-en-Provence.`,
  alternates: { canonical: '/a-propos-de-darwin' },
  openGraph: {
    ...ogDefaults,
    title: "DARWIN — L'agence marketing digital depuis 2003",
    description: `30+ experts seniors, 400+ clients accompagnés, ${DARWIN_YEARS} ans de performance digitale.`,
    url: 'https://darwin-agency.fr/a-propos-de-darwin',
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: '2003', label: "Année de création" },
  { num: '400+', label: 'Clients accompagnés' },
  { num: '30+', label: 'Experts seniors' },
  { num: '7 ans', label: 'Fidélité client moyenne' },
]

const objectives = [
  {
    id: '01',
    title: 'Gagner en visibilité',
    desc: "Capter l'attention et installer votre marque dans l'esprit de vos audiences cibles. Nous construisons la présence organique et payante qui vous rend incontournable dans votre secteur.",
    items: ['Branding & notoriété', 'SEO & référencement', 'Display & vidéo', 'Médias sociaux'],
  },
  {
    id: '02',
    title: 'Augmenter le trafic',
    desc: "Générer du flux là où vous en avez besoin — en ligne comme en point de vente physique. Chaque levier est activé de façon cohérente pour maximiser les volumes qualifiés.",
    items: ['SEA & Google Ads', 'Social Media Ads', 'Programmatique', 'SEO local & e-commerce'],
  },
  {
    id: '03',
    title: 'Convertir en leads',
    desc: "Attirer les bonnes audiences et les transformer en opportunités concrètes. Nous optimisons chaque point de contact pour réduire le coût d'acquisition et augmenter le taux de conversion.",
    items: ['Landing pages optimisées', 'Retargeting', 'Emails & SMS', 'A/B testing'],
  },
  {
    id: '04',
    title: 'Stimuler les ventes',
    desc: "Maximiser les résultats grâce à des stratégies digitales efficaces et adaptées à vos objectifs business. ROI mesurable, reportings actionnables, pilotage en temps réel.",
    items: ['Performance tracking', 'Analytics & data', 'Attribution multi-touch', 'Optimisation continue'],
  },
]

const reasonIcons = [
  /* Union des talents — personnes connectées */
  <svg key="talents" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="4"/><circle cx="24" cy="10" r="4"/>
    <path d="M4 28c0-4.4 3.6-8 8-8h4"/><path d="M20 20h4c4.4 0 8 3.6 8 8"/>
    <line x1="18" y1="14" x2="18" y2="20"/>
  </svg>,
  /* Data — graphique barres */
  <svg key="data" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="20" width="6" height="12"/><rect x="15" y="12" width="6" height="20"/><rect x="26" y="6" width="6" height="26"/>
    <line x1="2" y1="32" x2="34" y2="32"/>
  </svg>,
  /* Innovation — éclair / foudre */
  <svg key="innovation" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="21,4 12,20 18,20 15,32 24,16 18,16 21,4"/>
  </svg>,
  /* Vision 360 — œil */
  <svg key="vision" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18s6-10 16-10 16 10 16 10-6 10-16 10S2 18 2 18z"/>
    <circle cx="18" cy="18" r="4"/>
  </svg>,
  /* Certifié — médaille */
  <svg key="certif" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="14" r="10"/>
    <polyline points="12,24 10,34 18,30 26,34 24,24"/>
    <polyline points="14,14 17,17 23,11"/>
  </svg>,
]

const reasons = [
  {
    title: 'Union des talents',
    desc: "Notre agence réunit les meilleurs experts en acquisition digitale. Chaque profil senior, certifié dans son domaine, apporte sa vision pour enrichir votre stratégie. Cette diversité d'expertises crée une synergie créative qui fait notre force.",
  },
  {
    title: 'La puissance des données',
    desc: "À chaque prise de décision, notre approche data-driven éclaire votre stratégie. Notre équipe Analytics & Tracking transforme la complexité des données en opportunités à saisir, pour une performance optimisée et mesurable dans le temps.",
  },
  {
    title: "L'innovation continue",
    desc: "Notre pôle s'appuie sur l'IA pour explorer les nouvelles frontières du digital. Cette veille active nous permet d'anticiper les évolutions de votre marché et d'adapter vos stratégies aux comportements émergents.",
  },
  {
    title: 'La vision transverse',
    desc: "De l'acquisition à la conversion, notre expertise couvre l'ensemble des leviers digitaux. Cette vision à 360° nous permet de déployer des stratégies cohérentes qui créent de la valeur sur le long terme.",
  },
  {
    title: "L'expérience certifiée",
    desc: "Nos partenariats privilégiés avec les leaders du digital (Google, Meta...) témoignent de notre expertise. Nous sommes certifiés Google Partner, Facebook Marketing Partner, et Microsoft Partner.",
  },
]

const team = [
  { name: 'Olivier Trubert', role: 'Président', photo: '/images/team/olivier-trubert.jpg' },
  { name: 'Gaëlle Aubert', role: 'Directrice Administrative & Financière', photo: '/images/team/gaelle-aubert.jpg' },
  { name: 'Miriame Yvard', role: 'Directrice Stratégie', photo: '/images/team/miriame-yvard.jpg' },
  { name: 'Jérome Renard', role: 'Directeur Associé', photo: '/images/team/jerome-renard.jpg' },
  { name: 'Carole Kabanda', role: 'Directrice Media', photo: '/images/team/carole-kabanda.jpg' },
  { name: 'Thomas Courjeault', role: 'Directeur SEO / SEA / SMA', photo: '/images/team/thomas-courjeault.jpg' },
  { name: 'Amaury Micha de Faletans', role: 'Directeur Stratégie & Innovation', photo: '/images/team/amaury-micha.jpg' },
  { name: 'Julia Sanchez', role: 'Directrice de Hey Charly', photo: '/images/team/julia-sanchez.jpg' },
]

const certifications = [
  { src: '/logos/certifications/google-partner.jpg', alt: 'Google Partner Premier', w: 130, h: 52 },
  { src: '/logos/certifications/meta-partner.jpg', alt: 'Meta Business Partner', w: 130, h: 52 },
  { src: '/logos/certifications/bing-ads.jpg', alt: 'Microsoft Advertising', w: 130, h: 52 },
  { src: '/logos/certifications/google-analytics.png', alt: 'Google Analytics', w: 130, h: 52 },
]

const expertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/expertises/seo' },
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/expertises/sea' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/expertises/sma' },
  { title: 'MEDIA', desc: 'Display & Programmatique', href: '/expertises/media' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/expertises/analytics' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/expertises/formation' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function AgencePage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* ─── HERO ─── */}
      <section style={{ background: '#fff', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
        <div className="rsp-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: '88vh' }}>

          {/* LEFT — texte */}
          <div className="rsp-hero-text" style={{ padding: '72px 56px 72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>
              <Link href="/" style={{ color: '#bbb', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <span style={{ color: '#0a0a0a' }}>L&apos;Agence</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Depuis 2003</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>NOTRE AGENCE</span>
              <span style={{ display: 'block' }}>DÉDIÉE À LA</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>PERFORMANCE</span>
              <span style={{ display: 'block' }}>DEPUIS {DARWIN_YEARS} ANS.</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              DARWIN accompagne les marques pour qu&apos;elles s&apos;épanouissent durablement et s&apos;adaptent aux attentes de leurs audiences. Experts en stratégie d&apos;acquisition digitale, nous développons des solutions sur-mesure qui répondent à tous vos défis.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Nous contacter →
              </Link>
              <Link href="#equipe" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Rencontrer l&apos;équipe
              </Link>
            </div>

            {/* Stats row */}
            <div className="rsp-stats-row" style={{ display: 'flex', gap: 0, borderTop: '1px solid #eee', paddingTop: 32 }}>
              {stats.map((s, i) => (
                <div key={s.num} style={{ flex: 1, paddingRight: 24, borderRight: i < stats.length - 1 ? '1px solid #eee' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                  <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, marginBottom: 4, color: '#0a0a0a' }}>{s.num}</div>
                  <div style={{ fontSize: '0.65rem', color: '#aaa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image agence (caché mobile via rsp-hero-img) */}
          <div className="rsp-hero-img" style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/agence-hero.jpg"
              alt="DARWIN — L'équipe de l'agence marketing digital"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.95 }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 40%)' }} />
            {/* Floating badge */}
            <div style={{ position: 'absolute', top: 40, left: 32, background: '#FFF127', padding: '16px 20px', borderRadius: 4 }}>
              <div className="font-anton" style={{ fontSize: '1.6rem', lineHeight: 1, color: '#0a0a0a' }}>+400</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>clients accompagnés</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION JAUNE ─── */}
      <section style={{ background: '#FFF127', padding: '64px 24px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Notre mission
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#0a0a0a' }}>
              CONNECTER LES ESPRITS CRÉATIFS<br />POUR ENGAGER LES MARQUES SUR LE LONG TERME.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 24px' }}>
              Chez DARWIN, nous croyons en l&apos;agilité et l&apos;adaptabilité. Notre mission : créer des stratégies solides et innovantes pour que votre marque résiste au temps et évolue avec son époque.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              En tant qu&apos;experts en stratégie d&apos;acquisition digitale, nous développons des solutions sur-mesure qui répondent à l&apos;ensemble de vos défis — de la visibilité à la conversion, de la data à la créativité.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4 OBJECTIFS ─── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Ce que nous faisons
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 700 }}>
              4 OBJECTIFS, UNE SEULE<br />AMBITION : VOTRE PERFORMANCE
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {objectives.map((obj, i) => (
              <div
                key={obj.id}
                style={{
                  padding: '48px 40px',
                  background: (i === 0 || i === 3) ? '#fafafa' : '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                }}
              >
                <div className="font-anton" style={{ fontSize: '4rem', color: '#f0f0f0', position: 'absolute', top: 16, right: 24, lineHeight: 1, userSelect: 'none' }}>{obj.id}</div>
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.05 }}>{obj.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>{obj.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {obj.items.map((item) => (
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

      {/* ─── POURQUOI DARWIN ─── */}
      <section style={{ background: 'linear-gradient(135deg, #FFF127 0%, #29C5F5 100%)', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 16 }}>
              Notre différence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, color: '#0a0a0a', maxWidth: 700 }}>
              5 RAISONS<br />DE CHOISIR DARWIN
            </h2>
          </div>

          <div className="rsp-5col" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }}>
            {reasons.map((r, i) => (
              <div
                key={r.title}
                style={{
                  padding: '36px 28px',
                  background: '#fff',
                  color: '#0a0a0a',
                }}
              >
                <div style={{ marginBottom: 20, lineHeight: 0 }}>{reasonIcons[i]}</div>
                <h3 className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: 14, lineHeight: 1.1 }}>{r.title}</h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.75, color: '#555', margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÉQUIPE ─── */}
      <section id="equipe" style={{ background: '#f4f4f4', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 24 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                L&apos;équipe dirigeante
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
                DES EXPERTS QUI S&apos;ENGAGENT
              </h2>
            </div>
            <p style={{ maxWidth: 420, fontSize: '0.9rem', lineHeight: 1.75, color: '#555', margin: 0 }}>
              Une équipe de plus de 30 experts seniors avec une ancienneté moyenne de 6 ans — preuve que DARWIN est un endroit où les talents s&apos;épanouissent sur le long terme.
            </p>
          </div>

          <div className="rsp-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  padding: '36px 28px',
                  background: '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '3/4', marginBottom: 20, overflow: 'hidden', background: '#f0f0f0', position: 'relative' }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0a0a0a', marginBottom: 6, lineHeight: 1.3 }}>{member.name}</h3>
                <p style={{ fontSize: '0.75rem', color: '#aaa', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>{member.role}</p>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTC & RECRUTEMENT ─── */}
      <section style={{ background: '#0a0a0a', padding: '0 0', overflow: 'hidden' }}>
        <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

          {/* CTC */}
          <Link
            href="/creative-thinking-community"
            style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', minHeight: 420, background: '#FFF127' }}
          >
            {/* Motif grille en arrière-plan */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
            {/* Numéro décoratif */}
            <div className="font-anton" style={{ position: 'absolute', bottom: -20, right: -10, fontSize: '14rem', lineHeight: 1, color: 'rgba(0,0,0,0.07)', userSelect: 'none', pointerEvents: 'none' }}>01</div>

            <div style={{ position: 'relative', padding: '64px 56px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', background: 'rgba(0,0,0,0.1)', padding: '5px 12px', borderRadius: 2, marginBottom: 40 }}>
                  Communauté
                </span>
                <h3 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 0.95, color: '#0a0a0a', margin: '0 0 20px' }}>
                  Creative<br />Thinking<br />Community
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#333', maxWidth: 360, margin: 0 }}>
                  Le collectif qui réunit marques, agences et créatifs autour d&apos;une conviction : la performance naît de la pensée créative.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.15)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0a0a0a' }}>
                  Découvrir la CTC
                </span>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#FFF127', fontSize: '1.1rem', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* RECRUTEMENT */}
          <Link
            href="/recrutement"
            style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', minHeight: 420, background: '#29C5F5' }}
          >
            {/* Motif grille */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
            {/* Numéro décoratif */}
            <div className="font-anton" style={{ position: 'absolute', bottom: -20, right: -10, fontSize: '14rem', lineHeight: 1, color: 'rgba(0,0,0,0.07)', userSelect: 'none', pointerEvents: 'none' }}>02</div>

            <div style={{ position: 'relative', padding: '64px 56px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', background: 'rgba(0,0,0,0.1)', padding: '5px 12px', borderRadius: 2, marginBottom: 40 }}>
                  Carrières
                </span>
                <h3 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 0.95, color: '#0a0a0a', margin: '0 0 20px' }}>
                  On recrute<br />des talents<br />ambitieux
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#0a0a0a99', maxWidth: 360, margin: 0 }}>
                  Experts seniors, profils curieux, esprits analytiques. Si vous voulez évoluer dans une agence qui fait la différence depuis {DARWIN_YEARS} ans — c&apos;est ici.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.15)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0a0a0a' }}>
                  Voir les offres
                </span>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#29C5F5', fontSize: '1.1rem', lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section style={{ background: '#fff', padding: '64px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40, textAlign: 'center' }}>
            Certifications & Partenariats officiels
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 64, flexWrap: 'wrap' }}>
            {certifications.map((cert) => (
              <Image key={cert.alt} src={cert.src} alt={cert.alt} width={cert.w} height={cert.h} style={{ objectFit: 'contain', opacity: 0.75, filter: 'grayscale(20%)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOS EXPERTISES ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40 }}>
            Nos expertises
          </p>
          <div className="rsp-6col" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
            {expertises.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                style={{ display: 'block', padding: '24px 20px', background: '#fafafa', border: '1px solid #ebebeb', textDecoration: 'none' }}
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
            Travaillons ensemble
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 24px', color: '#0a0a0a' }}>
            PRÊT À BOOSTER<br />VOTRE PERFORMANCE DIGITALE&nbsp;?
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Parlons de votre projet. En 30 minutes, nous identifions les leviers prioritaires pour accélérer votre croissance digitale.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Prendre contact →
            </Link>
            <a href="tel:+33413570900" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #0a0a0a', color: '#0a0a0a', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              +33 (0)4 13 57 09 00
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#888', marginTop: 24, fontWeight: 500 }}>
            Réponse sous 24h ouvrées · Sans engagement ·
          </p>
        </div>
      </section>

    </div>
  )
}
