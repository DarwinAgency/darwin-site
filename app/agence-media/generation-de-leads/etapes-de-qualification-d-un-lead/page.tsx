// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead/page.tsx
// RÔLE    : Page conseil niveau 3 — étapes de qualification d'un lead
// PARENT  : /agence-media/generation-de-leads
// TEMPLATE: Basé sur comment-trouver-des-leads
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { breadcrumbJsonLd, webPageJsonLd } from '../../../lib/jsonld'
import NewsletterCTA from '../../../components/NewsletterCTA'
import { ogDefaults } from '../../../lib/og'

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Qualification d\'un Lead : les Étapes Clés pour Mieux Convertir — DARWIN',
  description: 'MQL, SQL, scoring, BANT, CHAMP : les étapes clés de la qualification d\'un lead pour convertir plus et mieux. Processus, outils et accompagnement DARWIN.',
  alternates: { canonical: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead' },
  openGraph: {
    ...ogDefaults,
    title: 'Qualification d\'un Lead : les Étapes Clés pour Mieux Convertir',
    description: 'MQL, SQL, scoring, BANT, CHAMP : les étapes clés de la qualification d\'un lead pour convertir plus et mieux. Processus, outils et accompagnement DARWIN.',
    url: 'https://darwin-agency.fr/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead',
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Génération de Leads', url: '/agence-media/generation-de-leads' },
  { name: 'Qualification d\'un Lead', url: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead' },
])

const webpage = webPageJsonLd(
  'Qualification d\'un Lead : les Étapes Clés pour Mieux Convertir',
  'MQL, SQL, scoring, BANT, CHAMP : les étapes clés de la qualification d\'un lead pour convertir plus et mieux.',
  '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead'
)

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function QualificationLeadPage() {
  return (
    <main>

      {/* ── JSON-LD ──────────────────────────────────────────────────────── */}
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />

      {/* ── RESPONSIVE CSS ───────────────────────────────────────────────── */}
      <style>{`
        .qlead-hero-grid {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; min-height: 600px;
        }
        .qlead-hero-text {
          padding: 100px 64px 80px 32px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .qlead-hero-illus {
          display: flex; align-items: center; justify-content: center; padding: 40px;
        }
        .qlead-grid-left {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 96px; align-items: start;
        }
        .qlead-grid-right {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1.4fr 1fr; gap: 96px; align-items: start;
        }
        .qlead-grid-sidebar {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 320px 1fr; gap: 96px; align-items: start;
        }
        .qlead-sticky { position: sticky; top: 120px; }
        .qlead-cards-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: #e0e0e0; }
        .qlead-metrics-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: #e0e0e0; }
        .qlead-links-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .qlead-section-pad { padding: 80px 32px; }
        .qlead-section-pad-lg { padding: 96px 32px; }
        .qlead-section-clip {
          background: linear-gradient(135deg, #27D9E5 0%, #B8E000 100%);
          padding: 160px 32px 80px;
          clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
          margin-top: -80px;
        }
        .qlead-nl-wrap { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        @media (max-width: 768px) {
          .qlead-hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .qlead-hero-text { padding: 72px 20px 48px; }
          .qlead-hero-illus { display: none; }
          .qlead-grid-left { grid-template-columns: 1fr; gap: 40px; }
          .qlead-grid-right { grid-template-columns: 1fr; gap: 40px; }
          .qlead-grid-sidebar { grid-template-columns: 1fr; gap: 36px; }
          .qlead-sticky { position: static; }
          .qlead-cards-grid { grid-template-columns: 1fr; }
          .qlead-metrics-grid { grid-template-columns: 1fr; }
          .qlead-links-grid { grid-template-columns: 1fr; }
          .qlead-section-pad { padding: 60px 20px; }
          .qlead-section-pad-lg { padding: 72px 20px; }
          .qlead-section-clip { padding: 120px 20px 60px; }
          .qlead-nl-wrap { padding: 0 20px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — split 50/50
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div className="qlead-hero-grid">

          {/* Colonne gauche — texte */}
          <div className="qlead-hero-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <Link href="/agence-media" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Agence Média</Link>
              <span>/</span>
              <Link href="/agence-media/generation-de-leads" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Génération de Leads</Link>
              <span>/</span>
              <span style={{ color: 'rgba(0,0,0,0.6)' }}>Qualification d&apos;un Lead</span>
            </nav>

            <span style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '5px 14px', marginBottom: 28, alignSelf: 'flex-start',
            }}>
              QUALIFICATION DE LEADS
            </span>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, margin: '0 0 28px' }}>
              QUALIFICATION<br />
              D&apos;UN LEAD :<br />
              LES ÉTAPES CLÉS
            </h1>

            <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40, maxWidth: 460 }}>
              Le débat est vieux comme le marketing digital. Les commerciaux se plaignent : « On nous envoie des leads pourris. » Le marketing répond : « On vous envoie du volume, c&apos;est à vous de vendre. » Les deux équipes ont souvent raison — et tort à la fois. Le vrai problème, c&apos;est l&apos;absence de qualification lead structurée. Sans processus clair pour évaluer un prospect avant de le transmettre à la vente, tout le monde perd de l&apos;énergie. Et le temps commercial, c&apos;est la ressource la plus chère de l&apos;entreprise.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/agence-media/generation-de-leads" style={{
                display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none', padding: '16px 32px',
              }}>
                GÉNÉRATION DE LEADS →
              </Link>
              <Link href="/agence-media/generation-de-leads" style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.15)', paddingBottom: 2,
              }}>
                ← Génération de Leads
              </Link>
            </div>
          </div>

          {/* Colonne droite — illustration géométrique : filtre de qualification */}
          <div className="qlead-hero-illus">
            <div style={{
              background: '#f5f5f5',
              borderRadius: 2,
              border: '1px solid #e8e8e8',
              boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
              overflow: 'hidden',
              width: '100%',
              maxWidth: 520,
            }}>
              <svg viewBox="0 0 460 340" width="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block' }}>

                {/* ── DOTS ENTRANTS — haut ─────────────────────── */}
                <circle cx="100" cy="22" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="145" cy="16" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="190" cy="28" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="230" cy="12" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="270" cy="26" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="315" cy="18" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="360" cy="30" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="130" cy="38" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="210" cy="40" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="290" cy="36" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="340" cy="42" r="3.5" fill="rgba(0,0,0,0.10)"/>

                {/* ── FILTRE VERTICAL — structure ──────────────── */}
                <rect x="160" y="60" width="140" height="160" rx="2" fill="none" stroke="#0a0a0a" strokeWidth="1.5"/>

                {/* Lignes de filtrage horizontales */}
                <line x1="160" y1="100" x2="300" y2="100" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="4,4"/>
                <line x1="160" y1="140" x2="300" y2="140" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="3,5"/>
                <line x1="160" y1="180" x2="300" y2="180" stroke="rgba(0,0,0,0.10)" strokeWidth="1" strokeDasharray="3,5"/>

                {/* Dots dans le filtre — en cours de tri */}
                <circle cx="190" cy="80" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="230" cy="85" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="270" cy="78" r="3" fill="rgba(0,0,0,0.15)"/>

                {/* Dots qualifiés avec checkmarks */}
                <circle cx="195" cy="120" r="4" fill="#29C5F5" fillOpacity="0.5"/>
                <path d="M192 120 L194.5 122.5 L199 118" stroke="#fff" strokeWidth="1.2" fill="none"/>
                <circle cx="250" cy="115" r="4" fill="#29C5F5" fillOpacity="0.5"/>
                <path d="M247 115 L249.5 117.5 L254 113" stroke="#fff" strokeWidth="1.2" fill="none"/>

                {/* Dots rejetés avec X */}
                <circle cx="220" cy="155" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <line x1="217" y1="152" x2="223" y2="158" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2"/>
                <line x1="223" y1="152" x2="217" y2="158" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2"/>
                <circle cx="270" cy="160" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <line x1="267" y1="157" x2="273" y2="163" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2"/>
                <line x1="273" y1="157" x2="267" y2="163" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2"/>

                {/* Dots qualifiés sortants */}
                <circle cx="210" cy="195" r="4" fill="#29C5F5" fillOpacity="0.6"/>
                <path d="M207 195 L209.5 197.5 L214 193" stroke="#fff" strokeWidth="1.2" fill="none"/>
                <circle cx="255" cy="200" r="4" fill="#29C5F5" fillOpacity="0.6"/>
                <path d="M252 200 L254.5 202.5 L259 198" stroke="#fff" strokeWidth="1.2" fill="none"/>

                {/* Rejetés éjectés sur les côtés */}
                <circle cx="120" cy="130" r="3" fill="rgba(0,0,0,0.08)"/>
                <circle cx="340" cy="145" r="3" fill="rgba(0,0,0,0.08)"/>
                <circle cx="115" cy="165" r="3" fill="rgba(0,0,0,0.06)"/>
                <circle cx="345" cy="170" r="3" fill="rgba(0,0,0,0.06)"/>

                {/* ── SCORING BAR — thermomètre ───────────────── */}
                {/* Fond gris */}
                <rect x="130" y="250" width="200" height="12" rx="6" fill="rgba(0,0,0,0.08)"/>
                {/* Dégradé cold→hot */}
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.15)"/>
                    <stop offset="40%" stopColor="#FFF127"/>
                    <stop offset="100%" stopColor="#29C5F5"/>
                  </linearGradient>
                </defs>
                <rect x="130" y="250" width="200" height="12" rx="6" fill="url(#scoreGrad)"/>
                {/* Indicateur position */}
                <circle cx="280" cy="256" r="5" fill="#29C5F5" stroke="#fff" strokeWidth="1.5"/>

                {/* Labels cold / hot */}
                <text x="130" y="278" fill="rgba(0,0,0,0.25)" fontSize="6.5" fontWeight="600" fontFamily="system-ui,sans-serif" letterSpacing="0.1em">FROID</text>
                <text x="310" y="278" fill="rgba(0,0,0,0.25)" fontSize="6.5" fontWeight="600" fontFamily="system-ui,sans-serif" letterSpacing="0.1em">CHAUD</text>

                {/* ── LABEL BOTTOM ────────────────────────────── */}
                <text x="230" y="310" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.18em">ÉVALUER · SCORER · QUALIFIER</text>

              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QU'EST-CE QUE LA QUALIFICATION D'UN LEAD ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="qlead-section-pad" style={{ background: '#FFF127' }}>
        <div className="qlead-grid-left">

          <div className="qlead-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', margin: '0 0 20px' }}>
              DÉFINITION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.1, margin: '0 0 28px' }}>
              QU&apos;EST-CE<br />
              QUE LA<br />
              QUALIFICATION<br />
              D&apos;UN LEAD ?
            </h2>
          </div>

          <div>
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }}>
              Qualifier un lead, c&apos;est évaluer dans quelle mesure un prospect correspond à votre client idéal et se trouve dans les bonnes conditions pour acheter votre produit ou votre service. C&apos;est la brique la plus importante d&apos;une stratégie commerciale rentable, et souvent la moins bien travaillée. Ce n&apos;est pas simplement vérifier qu&apos;il a laissé un email valide. C&apos;est comprendre qui il est, ce qu&apos;il cherche, s&apos;il en a les moyens — et si le moment est le bon.
            </p>
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }}>
              La qualification repose sur deux dimensions complémentaires. La première est démographique et firmographique : secteur d&apos;activité, taille de l&apos;entreprise, poste du contact, zone géographique. Ces données permettent de vérifier que le prospect entre dans votre cible théorique et qu&apos;il correspond au profil de client idéal que votre entreprise souhaite atteindre.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.6)', borderLeft: '3px solid #0a0a0a', padding: '24px 28px' }}>
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }}>
                La seconde dimension est comportementale : pages visitées sur votre site, contenus téléchargés, emails ouverts, formulaires remplis, webinaires suivis. Ces signaux d&apos;intérêt indiquent le niveau de maturité du prospect dans son cycle d&apos;achat. Un lead vraiment qualifié coche les deux cases : il correspond à votre cible ET il démontre un intérêt actif. L&apos;un sans l&apos;autre, c&apos;est insuffisant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MQL ET SQL : LA DISTINCTION FONDAMENTALE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="qlead-section-pad" style={{ background: '#0a0a0a' }}>
        <div className="qlead-grid-right">

          <div>
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }}>
              Ces deux acronymes structurent le processus de qualification dans la plupart des organisations. Les confondre est l&apos;une des sources principales de friction entre marketing et commercial.
            </p>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Un <strong>MQL</strong> — <strong>marketing qualified lead</strong> — est un prospect que l'équipe marketing juge, selon des critères précis, suffisamment engagé pour mériter une attention. Il a interagi avec plusieurs contenus, rempli un formulaire, assisté à un webinaire. Il est dans votre base, il vous connaît. Mais il n'est pas encore prêt à recevoir une offre commerciale." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Un <strong>SQL</strong> — <strong>sales qualified lead</strong> — est un MQL que l'équipe commerciale a validé après un premier contact. Il a confirmé son besoin, son budget, son délai de décision et son rôle dans le processus d'achat. C'est lui qu'on travaille en priorité, avec un effort commercial proportionnel à son potentiel." }} />
            <div style={{ borderLeft: '3px solid #FFF127', padding: '24px 28px', background: 'rgba(255,255,255,0.06)' }}>
              <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: 0 }}>
                La frontière entre MQL et SQL doit être définie ensemble, par les équipes marketing et commerciale, avec des critères écrits, partagés et alignés sur les objectifs de vente de l&apos;entreprise. Sans ça, chaque camp applique sa propre définition — et les reproches mutuels reprennent de plus belle.
              </p>
            </div>
          </div>

          <div className="qlead-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 20px' }}>
              FRAMEWORKS
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, margin: '0 0 28px' }}>
              MQL ET SQL :<br />
              LA DISTINCTION<br />
              FONDAMENTALE
            </h2>
            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 3, background: 'rgba(255,255,255,0.15)', flexShrink: 0, alignSelf: 'stretch' }} />
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                Marketing Qualified Lead vs Sales Qualified Lead
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <Image
                src="/images/media/generation-leads-qualification.jpg"
                alt="Processus de qualification des leads chez DARWIN"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
              />
              <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
              Session de qualification — équipe Média DARWIN
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEWSLETTER — INSERTION MID-CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="qlead-nl-wrap">
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          LE LEAD SCORING : NOTER POUR MIEUX PRIORISER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="qlead-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              SCORING
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              LE LEAD SCORING :<br />NOTER POUR MIEUX PRIORISER
            </h2>
          </div>

          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 40px' }}>
            Le lead scoring est l&apos;outil le plus opérationnel pour gérer la qualification à grande échelle et améliorer le taux de conversion. Le principe est simple : on attribue des points à chaque action ou information relative à un prospect. Plus le score est élevé, plus le lead est prioritaire.
          </p>

          <div className="qlead-cards-grid">
            {[
              {
                label: 'EXEMPLES DE SCORING',
                text: "Un téléchargement de livre blanc vaut 10 points. Une visite de la page tarifs vaut 20. Un email ouvert trois fois vaut 5. Un poste de directeur marketing vaut 15 points de plus qu'un stagiaire. Chaque entreprise définit sa propre grille de scoring en fonction de ses données historiques de conversion et des informations réellement disponibles dans son CRM.",
              },
              {
                label: 'TIMING',
                text: "L'objectif est de faire remonter les leads les plus chauds vers l'équipe commerciale au bon moment — ni trop tôt (avant qu'ils soient prêts), ni trop tard (après qu'ils aient signé avec un concurrent). C'est un équilibre délicat. Il se calibre dans la durée, en comparant les scores attribués aux taux de conversion réels.",
              },
              {
                label: 'ENTRETIEN',
                text: "Pourtant, beaucoup d'entreprises mettent en place un scoring et ne l'ajustent jamais. Un outil figé devient rapidement inexact. La valeur du scoring vient de son entretien régulier, pas de sa mise en place initiale.",
              },
            ].map((card) => (
              <div key={card.label} style={{ background: '#fff', padding: '44px 40px' }}>
                <p className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 16px', letterSpacing: '0.06em' }}>
                  {card.label}
                </p>
                <p className="body-text" style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.9, margin: 0 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BANT ET CHAMP : STRUCTURER VOTRE QUALIFICATION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="qlead-section-pad" style={{ background: '#fff' }}>
        <div className="qlead-grid-sidebar">

          <div className="qlead-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
              FRAMEWORKS
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.15, margin: 0 }}>
              BANT ET<br />CHAMP :<br />STRUCTURER<br />VOTRE<br />QUALIFICATION
            </h2>
          </div>

          <div>
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }}>
              Deux frameworks sont couramment utilisés pour qualifier les prospects lors des premiers échanges commerciaux.
            </p>

            <div style={{ background: '#f5f5f5', padding: '32px 36px', borderLeft: '3px solid #0a0a0a', marginBottom: 28 }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "<strong>BANT</strong> est le plus ancien : <em>Budget, Authority, Need, Timeline</em>. Le prospect a-t-il le budget ? Est-il décisionnaire ? A-t-il un besoin réel ? Quel est son délai ? C'est une grille efficace pour les cycles d'achat courts et les offres bien définies. Elle est parfois critiquée pour sa rigidité — en B2B complexe, le budget n'est pas toujours identifié au premier contact." }} />
            </div>

            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "<strong>CHAMP</strong> est une version plus contemporaine : <em>Challenges, Authority, Money, Prioritization</em>. L'ordre change : on commence par le problème du prospect, pas par son portefeuille. Cette approche est mieux adaptée aux ventes consultatives où l'enjeu est d'abord de comprendre la situation avant de proposer une solution." }} />

            <div style={{ background: '#FFF127', padding: '32px 36px', borderLeft: '3px solid #0a0a0a' }}>
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }}>
                Ces frameworks ne sont pas des scripts à dérouler mot pour mot. Ce sont des repères stratégiques utilisés à chaque étape clé du processus de qualification — pour s&apos;assurer que, à la fin de chaque échange, vous avez les informations essentielles pour évaluer la probabilité de conversion. Un vendeur qui fait des propositions sans avoir vérifié ces critères perd son temps — et renvoie une mauvaise image de l&apos;entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AUTOMATISATION ET CRM : QUALIFIER À GRANDE ÉCHELLE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="qlead-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              OUTILS
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              AUTOMATISATION ET CRM :<br />QUALIFIER À GRANDE ÉCHELLE
            </h2>
          </div>

          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 40px' }}>
            Quand les volumes de leads augmentent, la qualification manuelle devient impossible. C&apos;est là que l&apos;outillage devient stratégique.
          </p>

          <div className="qlead-metrics-grid">
            {[
              {
                num: '01',
                text: "Un CRM bien configuré centralise toutes les données prospects — historique des interactions, score, statut, prochaine action — afin de qualifier chaque lead avec la même méthode et de faire circuler l'information entre équipes en temps réel. Il supprime le silo entre marketing et commercial : tout le monde travaille sur la même base. La donnée ne se perd plus entre un email et un tableur partagé.",
              },
              {
                num: '02',
                text: "Les outils de marketing automation permettent de qualifier automatiquement en fonction du comportement. Un prospect qui visite votre page de prix trois fois en une semaine reçoit un email personnalisé — ou son score augmente jusqu'à déclencher une notification commerciale. Ces scénarios prennent du temps à paramétrer, mais ils tournent ensuite sans intervention humaine.",
              },
              {
                num: '03',
                text: "L'automatisation ne remplace pas le jugement humain. Elle libère du temps commercial pour se concentrer sur les leads qui en valent la peine — ceux dont le potentiel est confirmé, pas ceux qui ont juste ouvert un email.",
              },
            ].map((metric) => (
              <div key={metric.num} style={{ background: '#fff', padding: '44px 40px' }}>
                <p className="font-anton" style={{ fontSize: '2.4rem', color: '#e0e0e0', margin: '0 0 20px', lineHeight: 1 }}>
                  {metric.num}
                </p>
                <p className="body-text" style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.9, margin: 0 }}>
                  {metric.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — COMMENT DARWIN GÈRE LA QUALIFICATION DE VOS LEADS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="qlead-section-pad-lg" style={{ background: '#0a0a0a' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
            ACCOMPAGNEMENT DARWIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, margin: '0 0 40px' }}>
            COMMENT DARWIN GÈRE<br />
            LA QUALIFICATION DE VOS LEADS
          </h2>

          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }}>
            Chez DARWIN, la qualification n&apos;est pas une case à cocher. C&apos;est un processus opérationnel que nous construisons avec vous — et qui évolue en fonction de vos résultats réels.
          </p>

          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }}>
            On commence par aligner vos équipes marketing et commerciales sur une définition commune du lead qualifié. C&apos;est souvent la première étape la plus productive — et celle qu&apos;on saute le plus souvent. Ensuite, on met en place ou on optimise votre scoring en s&apos;appuyant sur vos données historiques de conversion, pour calibrer les critères qui comptent vraiment pour votre activité.
          </p>

          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, margin: '0 0 48px' }}>
            On configure les automatisations nécessaires pour identifier les leads chauds et les faire remonter directement dans le pipeline commercial, au bon moment, sans traitement manuel ni délai qui refroidit l&apos;intérêt. Et on suit les taux de conversion à chaque étape pour ajuster le processus dans le temps. Résultat : une équipe de vendeurs qui passe moins de temps à prospecter à froid et plus de temps à convertir les meilleurs prospects — ceux qui ont déjà levé la main. Les gains sur le taux de conversion sont souvent visibles dès les premiers mois.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/agence-media/generation-de-leads" style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
            }}>
              DÉCOUVRIR LA GÉNÉRATION DE LEADS →
            </Link>
            <Link href="/contact" style={{
              display: 'inline-block', background: 'transparent', color: '#fff',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
              border: '1.5px solid rgba(255,255,255,0.25)',
            }}>
              NOUS CONTACTER
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LIENS INTERNES — PAGES LIÉES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="qlead-section-clip">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', margin: '0 0 12px' }}>
            POUR ALLER PLUS LOIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 48px' }}>
            PAGES LIÉES À LA GÉNÉRATION DE LEADS
          </h2>
          <div className="qlead-links-grid">
            {[
              {
                label: 'Génération de Leads',
                desc: 'Stratégies et méthodes pour attirer des prospects qualifiés en continu.',
                href: '/agence-media/generation-de-leads',
              },
              {
                label: 'Comment Trouver des Leads',
                desc: 'Sources, canaux et méthodes pour alimenter votre pipeline.',
                href: '/agence-media/generation-de-leads/comment-trouver-des-leads',
              },
              {
                label: 'Générer des Leads en B2B',
                desc: 'Les leviers spécifiques pour capter des décisionnaires en B2B.',
                href: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b',
              },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderTop: '3px solid #FFF127', padding: '28px 28px 32px' }}>
                  <p className="font-anton" style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', lineHeight: 1.2 }}>{link.label}</p>
                  <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.6, margin: '0 0 20px' }}>{link.desc}</p>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid #0a0a0a', paddingBottom: 2 }}>LIRE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
