import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../lib/jsonld'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "Formation Digitale — Montée en compétences SEO, SEA, SMA | DARWIN",
  description: "Lorem ipsum dolor sit amet. Formations digitales certifiées depuis 2003.",
  alternates: { canonical: '/formations' },
  openGraph: {
    ...ogDefaults,
    title: "Formation Digitale — Montée en compétences SEO, SEA, SMA | DARWIN",
    description: "Lorem ipsum dolor sit amet. Formations digitales certifiées depuis 2003.",
    url: 'https://darwin-agency.fr/formations',
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: `${DARWIN_YEARS} ans`, label: "d'expertise formation" },
  { num: '500+', label: 'professionnels formés' },
  { num: '96%', label: 'de satisfaction' },
  { num: '100%', label: 'opérationnel' },
]

const pillars = [
  {
    id: '01',
    title: 'Diagnostic des Compétences',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    items: ['Audit des compétences existantes', 'Cartographie des besoins métiers', 'Analyse des écarts de compétences', 'Plan de développement individualisé'],
  },
  {
    id: '02',
    title: 'Programme Sur-Mesure',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce tincidunt metus sit amet sem bibendum, vitae porttitor arcu cursus. Integer et lacus id lectus fermentum tincidunt vel non augue.",
    items: ['Modules adaptés à votre secteur', 'Parcours progressifs personnalisés', 'Cas pratiques sur vos données réelles', 'Calendrier flexible selon vos contraintes'],
  },
  {
    id: '03',
    title: 'Formation Opérationnelle',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel sapien ut arcu blandit dignissim. Suspendisse potenti. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    items: ['Ateliers pratiques en situation réelle', 'Exercices sur vos outils et plateformes', 'Mises en application immédiates', 'Support post-formation inclus'],
  },
  {
    id: '04',
    title: 'Suivi & Certification',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risque eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ut facilisis in, egestas eget quam.",
    items: ['Évaluation des acquis post-formation', 'Certification de compétences', 'Suivi à 3 et 6 mois', 'Reporting des progrès mesurables'],
  },
]

const services = [
  { href: '/formations', title: 'Formation SEO', accent: '#FFF127', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
  { href: '/formations', title: 'Formation SEA', accent: '#FFF127', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
  { href: '/formations', title: 'Formation SMA', accent: '#FFF127', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel sapien ut arcu blandit dignissim. Suspendisse potenti. Aenean lacinia bibendum nulla sed consectetur." },
  { href: '/formations', title: 'Formation Analytics', accent: '#FFF127', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." },
  { href: '/formations', title: 'Formation IA & Automation', accent: '#29C5F5', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est." },
  { href: '/formations', title: 'Formation Stratégie Digitale', accent: '#29C5F5', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lacus id lectus fermentum tincidunt vel non augue. Nullam quis risque eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ut facilisis in, egestas eget quam." },
]

const faqs = [
  {
    q: "Quelles sont les options de financement pour les formations DARWIN ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    q: "Quelle est la durée moyenne d'une formation digitale ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce tincidunt metus sit amet sem bibendum.",
  },
  {
    q: "Les formations sont-elles disponibles en présentiel ou à distance ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel sapien ut arcu blandit dignissim. Suspendisse potenti. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum.",
  },
  {
    q: "Délivrez-vous une certification à l'issue de la formation ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risque eget urna mollis ornare vel eu leo.",
  },
  {
    q: "Comment adapter le programme de formation aux besoins spécifiques de mon équipe ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lacus id lectus fermentum tincidunt vel non augue. Maecenas faucibus mollis interdum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
  },
  {
    q: "Quel est le nombre maximum de participants par session de formation ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.",
  },
]

const otherExpertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/agence-seo' },
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/agence-sea' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/agence-sma' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/agence-analytics' },
  { title: 'MÉDIA', desc: 'Plan média & acquisition', href: '/agence-media' },
  { title: 'STUDIO CRÉATIF', desc: 'Direction artistique & Contenu', href: '/studio-creatif' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function FormationPage() {
  const jsonLdFaq = faqJsonLd(faqs.map(f => ({ q: f.q, a: f.a })))
  const jsonLdService = serviceJsonLd({
    name: 'Formation Digitale',
    description: "Formation digitale sur-mesure : SEO, SEA, SMA, Analytics, IA & Automation. Montée en compétences certifiée pour vos équipes.",
    url: 'https://darwin-agency.fr/formations',
    keywords: ['formation digitale', 'formation SEO', 'formation SEA', 'formation SMA', 'formation Analytics', 'formation IA', 'montée en compétences'],
  })
  const jsonLdBreadcrumb = breadcrumbJsonLd([
    { name: 'Accueil', url: 'https://darwin-agency.fr/' },
    { name: 'Formation', url: 'https://darwin-agency.fr/formations' },
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
              <span style={{ color: '#0a0a0a' }}>Formation</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Expertise Formation</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', lineHeight: 0.95, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>LA FORMATION</span>
              <span style={{ display: 'block' }}>QUI TRANSFORME</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>VOS ÉQUIPES</span>
              <span style={{ display: 'block' }}>EN EXPERTS</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 16, maxWidth: 460 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parlons de vos besoins en formation →
              </Link>
              <Link href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Notre méthode
              </Link>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="rsp-hero-img" style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/formation/cover-formation.jpeg"
              alt="Formation Digitale DARWIN — Montée en compétences"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
              priority
            />
            {/* Overlay gradient left */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />
            {/* Floating stat */}
            <div style={{ position: 'absolute', top: 40, left: 32, background: '#FFF127', padding: '16px 20px', borderRadius: 4 }}>
              <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#0a0a0a' }}>500+</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>professionnels formés</div>
            </div>
            {/* Floating stat 2 */}
            <div style={{ position: 'absolute', bottom: 32, right: 32, background: '#fff', padding: '16px 20px', borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#0a0a0a' }}>6</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>modules de formation</div>
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
              DES OUTILS QUI ÉVOLUENT,<br />DES ÉQUIPES QUI STAGNENT.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula hendrerit.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 24 }}>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>96%</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>de satisfaction</div>
              </div>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>500+</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>professionnels formés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POURQUOI FORMER VOS ÉQUIPES ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* LEFT — text content */}
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                Définition
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px', color: '#0a0a0a' }}>
                POURQUOI FORMER VOS<br />ÉQUIPES AU DIGITAL ?
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce tincidunt metus sit amet sem bibendum, vitae porttitor arcu cursus.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel sapien ut arcu blandit dignissim. Suspendisse potenti. Aenean lacinia bibendum nulla sed consectetur.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', margin: 0, textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </p>
            </div>

            {/* RIGHT — photo with editorial framing */}
            <div style={{ position: 'sticky', top: 100 }}>
              {/* Offset frame behind the image */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: '1px solid #ebebeb', borderRadius: 4, pointerEvents: 'none' }} />
                <Image
                  src="/images/formation/formation-equipe.jpg"
                  alt="Équipe en formation digitale chez DARWIN"
                  width={640}
                  height={460}
                  style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block', borderRadius: 4, position: 'relative', zIndex: 1 }}
                />
                {/* Yellow accent bar */}
                <div style={{ position: 'absolute', bottom: -12, left: 0, width: 48, height: 3, background: '#FFF127', zIndex: 2 }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 24, lineHeight: 1.6, fontWeight: 500 }}>
                Session de formation DARWIN — Aix-en-Provence
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
              UNE PÉDAGOGIE TERRAIN,<br />PAS DES SLIDES THÉORIQUES
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

      {/* ─── SERVICES FORMATION ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Nos formations en détail
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CHAQUE MODULE RÉPOND<br />À UN BESOIN OPÉRATIONNEL
            </h2>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {services.map((card) => (
              <Link
                key={card.title}
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
              Vos objectifs, notre pédagogie
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 800 }}>
              AUTONOMIE, PERFORMANCE, INNOVATION, ROI : FORMEZ VOS ÉQUIPES SELON VOS PRIORITÉS
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {[
              {
                title: 'Autonomie — Rendre vos équipes autonomes sur le digital',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                title: 'Performance — Améliorer les résultats de vos campagnes',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce tincidunt metus sit amet sem bibendum, vitae porttitor arcu cursus. Integer et lacus id lectus fermentum tincidunt vel non augue.",
              },
              {
                title: 'Innovation — Maîtriser les derniers outils et tendances',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel sapien ut arcu blandit dignissim. Suspendisse potenti. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
              },
              {
                title: 'ROI — Mesurer le retour sur investissement de la formation',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risque eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ut facilisis in, egestas eget quam.",
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
                DES RÉSULTATS FORMATION<br />QUE NOS CLIENTS PEUVENT MESURER
              </h2>
            </div>
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #0a0a0a', paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 32 }}>
              Tous les cas clients →
            </Link>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                client: 'Lorem Corp',
                category: 'Formation SEO · Analytics',
                result: '+85%',
                resultLabel: "d'autonomie sur les outils SEO",
                period: 'En 3 mois de formation',
                img: '/images/cas-clients/verisure-cover.jpg',
                href: '/cas-clients',
              },
              {
                client: 'Ipsum Group',
                category: 'Formation SEA · SMA',
                result: '-40%',
                resultLabel: "de dépendance prestataire",
                period: '12 collaborateurs formés',
                img: '/images/cas-clients/prefon-cover.jpg',
                href: '/cas-clients',
              },
              {
                client: 'Dolor Industries',
                category: 'Formation IA · Stratégie',
                result: 'x3',
                resultLabel: 'de productivité sur les campagnes',
                period: 'Équipe marketing de 8 personnes',
                img: '/images/cas-clients/acadomia-cover.jpg',
                href: '/cas-clients',
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
                5 ÉTAPES POUR<br />UNE FORMATION EFFICACE
              </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF127', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parler à un expert formation →
              </Link>
            </div>
          </div>

          {/* 5 steps — horizontal timeline cards */}
          <div className="rsp-5col" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              {
                num: '01', title: 'Diagnostic', subtitle: 'des compétences',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
              },
              {
                num: '02', title: 'Programme', subtitle: 'personnalisé',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
              },
              {
                num: '03', title: 'Formation', subtitle: 'opérationnelle',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              },
              {
                num: '04', title: 'Mise en', subtitle: 'pratique',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
              },
              {
                num: '05', title: 'Suivi', subtitle: '& certification',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risque eget urna mollis.",
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

      {/* ─── DARWIN DIFFÉRENT ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre différence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.4rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px' }}>
              LA FORMATION QUI TRANSFORME,<br />PAS JUSTE QUI INFORME
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 40 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, at gravida sapien tristique sed. Nulla facilisi. Cras vel ligula ac urna vehicula hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce tincidunt metus sit amet sem bibendum, vitae porttitor arcu cursus. Integer et lacus id lectus fermentum tincidunt vel non augue.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Échangeons sur votre projet de formation →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Image ornement — équipe DARWIN */}
            <div style={{ position: 'relative', width: '100%', height: 220, borderRadius: 6, overflow: 'hidden' }}>
              <Image
                src="/images/formation/formation-ornement.jpg"
                alt="L'équipe DARWIN en session de formation"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '30+', label: 'Formateurs seniors', sub: '6+ ans d\'ancienneté moyenne' },
                { num: '500+', label: 'Professionnels formés', sub: 'Depuis 2003' },
                { num: '96%', label: 'Satisfaction', sub: 'Évaluation post-formation' },
                { num: '100%', label: 'Opérationnel', sub: 'Mise en pratique immédiate' },
              ].map((item) => (
                <div key={item.num} style={{ padding: '28px 24px', background: '#fafafa', border: '1px solid #ebebeb' }}>
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
            ÉCHANGEONS SUR<br />VOS BESOINS EN FORMATION
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Parlons de vos besoins en formation →
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
