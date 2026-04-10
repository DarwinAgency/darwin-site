// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel/page.tsx
// RÔLE    : Page conseil niveau 3 — différences marketing stratégique / opérationnel
// PARENT  : /agence-media/audit-strategie-digitale
// TEMPLATE: Dupliquer pour toute future page conseil niveau 3 sous agence-media
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import { faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from '../../../lib/jsonld'
import NewsletterCTA from '../../../components/NewsletterCTA'

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Marketing Stratégique vs Opérationnel : quelles différences ? — DARWIN',
  description: 'Marketing stratégique ou opérationnel ? Différences clés, rôles et comment les combiner pour optimiser votre stratégie digitale.',
  alternates: { canonical: '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel' },
  openGraph: {
    title: 'Marketing Stratégique vs Marketing Opérationnel : quelles différences ?',
    description: 'Marketing stratégique ou opérationnel ? Différences clés, rôles et comment les combiner pour optimiser votre stratégie digitale.',
    url: 'https://darwin-agency.fr/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel',
    images: [{ url: 'https://darwin-agency.fr/images/og-default.jpg', width: 1200, height: 630, alt: 'Marketing stratégique vs opérationnel — DARWIN' }],
  },
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const comparisonRows = [
  { label: 'Horizon',       strategic: 'Long terme (1 à 3 ans)',          operational: 'Court terme (semaine, mois, trimestre)' },
  { label: 'Question clé',  strategic: 'Où allons-nous et pourquoi ?',    operational: 'Comment y allons-nous ?' },
  { label: 'Outils',        strategic: 'SWOT, segmentation, positionnement', operational: 'Campagnes, contenus, leviers payants' },
  { label: 'Résultat',      strategic: 'Cap défini, positionnement clair', operational: 'Trafic, leads, conversions, chiffre d\'affaires' },
  { label: 'Profil',        strategic: 'Direction marketing, consultants', operational: 'Chefs de projet, experts levier' },
]

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Quelle est la différence entre marketing stratégique et marketing opérationnel ?',
    a: 'Le marketing stratégique définit le cap à long terme : segmentation, positionnement, choix des marchés prioritaires. Le marketing opérationnel traduit ce cap en actions concrètes : campagnes SEO, SEA, emailing, contenus. L\'un travaille sur 1 à 3 ans, l\'autre sur la semaine ou le mois.',
  },
  {
    q: 'Peut-on faire du marketing opérationnel sans stratégie définie ?',
    a: 'Techniquement oui. Mais les résultats ne s\'accumulent pas : chaque trimestre repart de zéro et les budgets s\'optimisent sur les mauvais segments. Une stratégie mal définie coûte souvent plus cher qu\'une stratégie bien construite.',
  },
  {
    q: 'Comment DARWIN articule-t-il stratégie et opérationnel dans ses missions ?',
    a: 'Chaque mission DARWIN commence par un audit de stratégie digitale : identifier les déséquilibres entre vision et actions, clarifier les objectifs marketing et aligner les indicateurs de performance sur ce qui compte vraiment pour l\'activité.',
  },
]

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Audit Stratégie Digitale', url: '/agence-media/audit-strategie-digitale' },
  { name: 'Marketing Stratégique vs Opérationnel', url: '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel' },
])

const webpage = webPageJsonLd(
  'Marketing Stratégique vs Marketing Opérationnel : quelles différences ?',
  'Différences clés entre marketing stratégique et opérationnel, comment les articuler et les erreurs à éviter.',
  '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel'
)

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MarketingStrategiqueVsOperationnelPage() {
  return (
    <main>

      {/* ── JSON-LD ──────────────────────────────────────────────────────── */}
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      {/* ── RESPONSIVE CSS ───────────────────────────────────────────────── */}
      <style>{`
        .msvmo-hero-grid {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; min-height: 600px;
        }
        .msvmo-hero-text {
          padding: 100px 64px 80px 32px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .msvmo-hero-illus {
          display: flex; align-items: center; justify-content: center; padding: 40px;
        }
        .msvmo-grid-left {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 96px; align-items: start;
        }
        .msvmo-grid-right {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1.4fr 1fr; gap: 96px; align-items: start;
        }
        .msvmo-grid-sidebar {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 320px 1fr; gap: 96px; align-items: start;
        }
        .msvmo-sticky { position: sticky; top: 120px; }
        .msvmo-table-scroll { background: #fff; border: 1px solid #e8e8e8; overflow-x: auto; margin-bottom: 32px; }
        .msvmo-table-inner { min-width: 560px; }
        .msvmo-table-header { display: grid; grid-template-columns: 200px 1fr 1fr; border-bottom: 2px solid #0a0a0a; }
        .msvmo-table-row { display: grid; grid-template-columns: 200px 1fr 1fr; }
        .msvmo-schema {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center; gap: 0;
          background: #fff; border: 1px solid #e8e8e8; overflow: hidden;
        }
        .msvmo-schema-arrow { padding: 0 20px; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .msvmo-pieges-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e0e0e0; }
        .msvmo-links-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .msvmo-section-pad { padding: 80px 32px; }
        .msvmo-section-pad-lg { padding: 96px 32px; }
        .msvmo-section-clip {
          background: linear-gradient(135deg, #27D9E5 0%, #B8E000 100%);
          padding: 160px 32px 80px;
          clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
          margin-top: -80px;
        }
        .msvmo-nl-wrap { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        @media (max-width: 768px) {
          .msvmo-hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .msvmo-hero-text { padding: 72px 20px 48px; }
          .msvmo-hero-illus { display: none; }
          .msvmo-grid-left { grid-template-columns: 1fr; gap: 40px; }
          .msvmo-grid-right { grid-template-columns: 1fr; gap: 40px; }
          .msvmo-grid-sidebar { grid-template-columns: 1fr; gap: 36px; }
          .msvmo-sticky { position: static; }
          .msvmo-schema { grid-template-columns: 1fr; }
          .msvmo-schema-arrow { display: none; }
          .msvmo-pieges-grid { grid-template-columns: 1fr; }
          .msvmo-links-grid { grid-template-columns: 1fr; }
          .msvmo-section-pad { padding: 60px 20px; }
          .msvmo-section-pad-lg { padding: 72px 20px; }
          .msvmo-section-clip { padding: 120px 20px 60px; }
          .msvmo-nl-wrap { padding: 0 20px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — split 50/50
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div className="msvmo-hero-grid">

          {/* Colonne gauche — texte */}
          <div className="msvmo-hero-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <Link href="/agence-media" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Agence Média</Link>
              <span>/</span>
              <Link href="/agence-media/audit-strategie-digitale" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Audit Stratégie Digitale</Link>
              <span>/</span>
              <span style={{ color: 'rgba(0,0,0,0.6)' }}>Marketing Stratégique vs Opérationnel</span>
            </nav>

            <span style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '5px 14px', marginBottom: 28, alignSelf: 'flex-start',
            }}>
              STRATÉGIE MARKETING
            </span>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, margin: '0 0 28px' }}>
              MARKETING<br />
              STRATÉGIQUE<br />
              VS OPÉRATIONNEL
            </h1>

            <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40, maxWidth: 460 }}>
              On lance des campagnes. On publie, on teste, on optimise. Et pourtant, <strong>quelque chose coince</strong>. Les résultats arrivent, mais ils <strong>ne s'accumulent pas</strong>. Chaque trimestre repart de zéro. Ce sentiment, la plupart des responsables marketing le connaissent. Il cache presque toujours le même problème : on a confondu <strong>faire du marketing</strong> et <strong>savoir où on va</strong>.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/agence-media/audit-strategie-digitale" style={{
                display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none', padding: '16px 32px',
              }}>
                AUDITER VOTRE STRATÉGIE →
              </Link>
              <Link href="/agence-media/audit-strategie-digitale" style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.15)', paddingBottom: 2,
              }}>
                ← Audit Stratégie Digitale
              </Link>
            </div>
          </div>

          {/* Colonne droite — illustration géométrique */}
          <div className="msvmo-hero-illus">
            <div style={{
              background: '#f5f5f5',
              borderRadius: 2,
              border: '1px solid #e8e8e8',
              boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
              overflow: 'hidden',
              width: '100%',
              maxWidth: 520,
            }}>
              <svg viewBox="0 0 460 300" width="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block' }}>

                {/* ── COMPASS — stratégie / direction ─────────────── */}
                <g transform="translate(115,145)">
                  {/* Outer decorative ring */}
                  <circle r="58" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
                  {/* Main ring */}
                  <circle r="49" fill="none" stroke="#0a0a0a" strokeWidth="1.5"/>

                  {/* Cardinal ticks */}
                  <line x1="0" y1="-49" x2="0" y2="-62" stroke="#0a0a0a" strokeWidth="2"/>
                  <line x1="49" y1="0" x2="62" y2="0" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5"/>
                  <line x1="0" y1="49" x2="0" y2="62" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5"/>
                  <line x1="-49" y1="0" x2="-62" y2="0" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5"/>

                  {/* Intermediate ticks */}
                  <line x1="34.6" y1="-34.6" x2="41.0" y2="-41.0" stroke="rgba(0,0,0,0.18)" strokeWidth="1"/>
                  <line x1="34.6" y1="34.6" x2="41.0" y2="41.0" stroke="rgba(0,0,0,0.18)" strokeWidth="1"/>
                  <line x1="-34.6" y1="34.6" x2="-41.0" y2="41.0" stroke="rgba(0,0,0,0.18)" strokeWidth="1"/>
                  <line x1="-34.6" y1="-34.6" x2="-41.0" y2="-41.0" stroke="rgba(0,0,0,0.18)" strokeWidth="1"/>

                  {/* Needle — North (electric blue) */}
                  <polygon points="0,-40 6,2 -6,2" fill="#29C5F5"/>
                  {/* Needle — South (dark, dim) */}
                  <polygon points="0,28 5,2 -5,2" fill="rgba(0,0,0,0.2)"/>

                  {/* Center dot */}
                  <circle r="5" fill="#f5f5f5" stroke="#0a0a0a" strokeWidth="1.5"/>

                  {/* N label */}
                  <text x="0" y="-68" textAnchor="middle" fill="#0a0a0a" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.05em">N</text>
                </g>

                {/* ── CONNECTING LINE ──────────────────────────────── */}
                <line x1="180" y1="145" x2="275" y2="145" stroke="#29C5F5" strokeWidth="1" strokeOpacity="0.5"/>
                <circle cx="180" cy="145" r="2.5" fill="#29C5F5" fillOpacity="0.6"/>
                <polygon points="275,141 275,149 282,145" fill="#29C5F5" fillOpacity="0.6"/>

                {/* ── GEAR — opérationnel / exécution ──────────────── */}
                <g transform="translate(345,145)">
                  {/* Gear teeth — 8 dents, r_outer=52, r_inner=40 */}
                  <path
                    d="M 34.48,-20.27
                       A 40,40 0 0 1 38.73,-10.02 L 51.48,-7.24 L 51.48,7.24 L 38.73,10.02
                       A 40,40 0 0 1 34.48,20.27  L 41.52,31.29 L 31.29,41.52 L 20.27,34.48
                       A 40,40 0 0 1 10.02,38.73  L 7.24,51.48  L -7.24,51.48 L -10.02,38.73
                       A 40,40 0 0 1 -20.27,34.48 L -31.29,41.52 L -41.52,31.29 L -34.48,20.27
                       A 40,40 0 0 1 -38.73,10.02 L -51.48,7.24  L -51.48,-7.24 L -38.73,-10.02
                       A 40,40 0 0 1 -34.48,-20.27 L -41.52,-31.29 L -31.29,-41.52 L -20.27,-34.48
                       A 40,40 0 0 1 -10.02,-38.73 L -7.24,-51.48 L 7.24,-51.48  L 10.02,-38.73
                       A 40,40 0 0 1 20.27,-34.48  L 31.29,-41.52 L 41.52,-31.29 L 34.48,-20.27 Z"
                    fill="#0a0a0a"
                  />
                  {/* Center hole */}
                  <circle r="17" fill="#f5f5f5"/>
                  <circle r="17" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5"/>
                  <circle r="4" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
                </g>

                {/* ── LABELS ───────────────────────────────────────── */}
                <text x="115" y="232" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.18em">STRATÉGIE</text>
                <text x="345" y="232" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.18em">EXÉCUTION</text>

              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MARKETING STRATÉGIQUE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad" style={{ background: '#FFF127' }}>
        <div className="msvmo-grid-left">

          <div className="msvmo-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', margin: '0 0 20px' }}>
              DÉFINITION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.1, margin: '0 0 28px' }}>
              LE MARKETING<br />
              STRATÉGIQUE<br />
              : DÉCIDER<br />
              AVANT D&apos;AGIR
            </h2>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 3, background: '#0a0a0a', flexShrink: 0, alignSelf: 'stretch' }} />
              <p style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                Horizon 1 — 3 ans
              </p>
            </div>
          </div>

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le marketing stratégique, c'est la partie que personne ne voit — et qu'on a pourtant tendance à sauter. Il intervient <strong>en amont de toute action marketing et de toute décision structurante</strong> : avant de choisir un canal, avant de rédiger un message, avant de définir un budget. Son rôle est de répondre à des questions que beaucoup d'équipes n'ont jamais vraiment posées à plat. Dans quel marché évoluez-vous réellement ? À qui vous adressez-vous en priorité ? <strong>Pourquoi un client devrait-il vous préférer à votre concurrent direct ?</strong>" }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Concrètement, cela passe par une <strong>analyse approfondie du marché et de votre environnement concurrentiel</strong>, une <strong>segmentation rigoureuse</strong> de vos cibles et la définition d'un <strong>positionnement clair</strong>. C'est un travail de fond, sur le long terme, souvent peu spectaculaire pour l'entreprise. Mais c'est lui qui donne du sens à tout ce qui vient ensuite." }} />
            <div style={{ background: 'rgba(255,255,255,0.6)', borderLeft: '3px solid #0a0a0a', padding: '24px 28px' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Sans cette base, on peut affiner une campagne Google Ads pendant des semaines sur un segment qui ne convertira jamais. Le problème n'est pas l'exécution. C'est qu'on s'adressait aux <strong>mauvaises personnes, avec le mauvais message</strong>." }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MARKETING OPÉRATIONNEL
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad" style={{ background: '#0a0a0a' }}>
        <div className="msvmo-grid-right">

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le marketing opérationnel, c'est ce qu'on voit. Les campagnes, les contenus, les emails, les annonces. C'est l'ensemble des actions déployées pour atteindre les objectifs fixés en amont — <strong>SEO, SEA, social ads, emailing</strong>, événements, promotions. Il est rythmé par un <strong>plan d'actions</strong>, des budgets, des <strong>indicateurs de performance</strong> et des outils de pilotage." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Il répond à des questions très pratiques : quels canaux activer en priorité ? Quel message pour quelle cible, à quelle étape du <strong>parcours d'achat</strong> ? À quelle fréquence communiquer sans saturer ? C'est là que <strong>la créativité doit servir la performance</strong>, pas l'inverse." }} />
            <div style={{ borderLeft: '3px solid #FFF127', padding: '24px 28px', background: 'rgba(255,255,255,0.06)' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Un bon marketing opérationnel ne s'improvise pas. Il <strong>s'appuie sur la donnée issue du terrain</strong>, il ajuste en continu, et il délivre des <strong>résultats mesurables en termes de performance et de vente</strong>. Mais il ne peut bien fonctionner que si <strong>la direction stratégique est posée</strong>." }} />
            </div>
          </div>

          <div className="msvmo-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 20px' }}>
              DÉFINITION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, margin: '0 0 28px' }}>
              LE MARKETING<br />
              OPÉRATIONNEL<br />
              : TRADUIRE<br />
              LA STRATÉGIE
            </h2>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 3, background: 'rgba(255,255,255,0.15)', flexShrink: 0, alignSelf: 'stretch' }} />
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                Semaine, mois, trimestre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEWSLETTER — INSERTION MID-CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="msvmo-nl-wrap">
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          TABLEAU COMPARATIF + SCHÉMA D'ARTICULATION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              COMPARATIF
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              CE QUI LES DISTINGUE —<br />ET CE QUI LES LIE
            </h2>
          </div>

          {/* Table */}
          <div className="msvmo-table-scroll">
            <div className="msvmo-table-inner">

            {/* En-tête */}
            <div className="msvmo-table-header">
              <div style={{ padding: '18px 24px', background: '#f5f5f5', borderRight: '1px solid #e8e8e8' }} />
              <div style={{ padding: '18px 28px', background: '#FFF127', borderRight: '1px solid rgba(0,0,0,0.1)' }}>
                <p className="font-anton" style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, letterSpacing: '0.08em' }}>Marketing Stratégique</p>
              </div>
              <div style={{ padding: '18px 28px', background: '#0a0a0a' }}>
                <p className="font-anton" style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#fff', margin: 0, letterSpacing: '0.08em' }}>Marketing Opérationnel</p>
              </div>
            </div>

            {/* Lignes */}
            {comparisonRows.map((row, i) => (
              <div key={row.label} className="msvmo-table-row" style={{ borderBottom: i < comparisonRows.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ padding: '20px 24px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', display: 'flex', alignItems: 'center' }}>
                  <p className="font-anton" style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#999', margin: 0, letterSpacing: '0.12em' }}>{row.label}</p>
                </div>
                <div style={{ padding: '20px 28px', borderRight: '1px solid #f0f0f0', borderLeft: '3px solid #FFF127', display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontSize: '0.92rem', color: '#0a0a0a', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{row.strategic}</p>
                </div>
                <div style={{ padding: '20px 28px', display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontSize: '0.92rem', color: '#555', margin: 0, lineHeight: 1.5 }}>{row.operational}</p>
                </div>
              </div>
            ))}
            </div>{/* end msvmo-table-inner */}
          </div>

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 72px' }} dangerouslySetInnerHTML={{ __html: "Les deux ne s'opposent pas. Ils se complètent — et ils ont besoin l'un de l'autre. <strong>La stratégie sans exécution reste un document dans un tiroir. L'exécution sans stratégie, c'est de l'agitation bien organisée.</strong>" }} />

          {/* ─── SCHÉMA D'ARTICULATION ───────────────────────────────────────── */}
          <div style={{ marginTop: 0 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 32px' }}>
              SCHÉMA D&apos;ARTICULATION
            </p>

            <div className="msvmo-schema">

              {/* Bloc STRATÉGIE */}
              <div style={{ padding: '40px 32px', borderLeft: '4px solid #FFF127', background: '#0a0a0a' }}>
                <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 8px' }}>01</p>
                <p className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#FFF127', margin: '0 0 12px', lineHeight: 1 }}>STRATÉGIE</p>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>Cap, positionnement,<br />objectifs 1-3 ans</p>
              </div>

              {/* Flèche droite */}
              <div className="msvmo-schema-arrow">
                <p style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', margin: 0, whiteSpace: 'nowrap' }}>objectifs opérationnels</p>
                <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
                  <line x1="0" y1="6" x2="40" y2="6" stroke="#0a0a0a" strokeWidth="1.5"/>
                  <polygon points="40,2 48,6 40,10" fill="#0a0a0a"/>
                </svg>
              </div>

              {/* Bloc OPÉRATIONNEL */}
              <div style={{ padding: '40px 32px', borderLeft: '1px solid #e8e8e8', background: '#fafafa' }}>
                <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', margin: '0 0 8px' }}>02</p>
                <p className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 12px', lineHeight: 1 }}>OPÉRATIONNEL</p>
                <p style={{ fontSize: '0.78rem', color: '#777', margin: 0, lineHeight: 1.6 }}>Campagnes, contenus,<br />mesure des résultats</p>
              </div>

              {/* Flèche droite */}
              <div className="msvmo-schema-arrow">
                <p style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', margin: 0, whiteSpace: 'nowrap' }}>données terrain</p>
                <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
                  <line x1="48" y1="6" x2="8" y2="6" stroke="#555" strokeWidth="1.5"/>
                  <polygon points="8,2 0,6 8,10" fill="#555"/>
                </svg>
              </div>

              {/* Bloc KPIs */}
              <div style={{ padding: '40px 32px', borderLeft: '1px solid #e8e8e8', background: '#fff' }}>
                <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', margin: '0 0 8px' }}>03</p>
                <p className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 12px', lineHeight: 1 }}>RÉSULTATS</p>
                <p style={{ fontSize: '0.78rem', color: '#777', margin: 0, lineHeight: 1.6 }}>Trafic, leads,<br />conversions, CA</p>
              </div>

              {/* Flèche retour */}
              <div className="msvmo-schema-arrow">
                <p style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', margin: 0, whiteSpace: 'nowrap' }}>nourrit la stratégie</p>
                <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
                  <line x1="48" y1="6" x2="8" y2="6" stroke="#FFF127" strokeWidth="2"/>
                  <polygon points="8,2 0,6 8,10" fill="#FFF127"/>
                </svg>
              </div>

              {/* Bloc BOUCLE FERMÉE */}
              <div style={{ padding: '40px 32px', borderLeft: '1px solid #e8e8e8', background: '#FFF127' }}>
                <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', margin: '0 0 8px' }}>BOUCLE</p>
                <p className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 12px', lineHeight: 1 }}>FERMÉE</p>
                <p style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.55)', margin: 0, lineHeight: 1.6 }}>En continu —<br />pas une fois par an</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          POURQUOI L'ARTICULATION ÉCHOUE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad" style={{ background: '#fff' }}>
        <div className="msvmo-grid-sidebar">

          <div className="msvmo-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
              DIAGNOSTIC
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.15, margin: 0 }}>
              POURQUOI<br />L&apos;ARTICULATION<br />ÉCHOUE<br />SI SOUVENT
            </h2>
          </div>

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: '0 0 36px', borderLeft: '3px solid #FFF127', paddingLeft: 24 }} dangerouslySetInnerHTML={{ __html: "C'est là que beaucoup d'organisations perdent du <strong>temps — et de l'argent</strong>." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le premier écueil est classique : la stratégie existe, elle est bien construite sur le papier, mais <strong>elle ne descend pas</strong>. Les équipes opérationnelles et chaque équipe terrain <strong>naviguent à vue</strong> parce que les orientations restent trop abstraites pour guider leurs choix du quotidien. Résultat : chacun fait de son mieux dans son couloir, mais <strong>personne ne tire vraiment dans la même direction</strong>." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le deuxième est tout aussi fréquent, et plus insidieux : des actions bien exécutées, techniquement solides, <strong>complètement déconnectées d'une vision d'ensemble</strong>. On optimise un CPA sans vraiment savoir si on parle aux bonnes personnes. On publie du contenu régulièrement, mais sans objectif de conversion clair. <strong>On est occupé. Pas efficace.</strong>" }} />
            <div style={{ background: '#f5f5f5', padding: '32px 36px', borderLeft: '3px solid #0a0a0a' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Pour que l'articulation fonctionne, les objectifs stratégiques doivent se traduire en <strong>indicateurs opérationnels concrets</strong>. Un objectif de conquête sur un nouveau segment ne se pilote pas avec les mêmes KPIs qu'un objectif de fidélisation — ce qui peut sembler évident, mais que peu d'équipes appliquent vraiment. Et dans l'autre sens, les données produites par les actions terrain doivent remonter et nourrir la réflexion stratégique. <strong>La boucle doit être fermée, en continu.</strong> Pas une fois par an lors du plan marketing." }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LES PIÈGES LES PLUS COURANTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              ERREURS À ÉVITER
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              LES PIÈGES<br />LES PLUS COURANTS
            </h2>
          </div>

          <div className="msvmo-pieges-grid">
            {[
              {
                num: '01',
                text: "La confusion entre les deux niveaux est de loin l'erreur la plus répandue. On croit faire de la stratégie parce qu'on a planifié ses publications LinkedIn pour le trimestre. <strong>Planifier une campagne ou un plan de communication, c'est de l'opérationnel. Décider à qui on s'adresse et pourquoi, c'est stratégique.</strong> Ce n'est pas le même travail, et ce n'est pas la même posture.",
              },
              {
                num: '02',
                text: "Vient ensuite la tentation de brûler l'étape stratégique pour aller plus vite. La pression du court terme est réelle — on comprend. Pourtant, <strong>une semaine d'analyse sérieuse en amont peut éviter des mois de budget investi dans la mauvaise direction</strong>. Ce n'est pas du temps perdu. C'est souvent le <strong>meilleur investissement du trimestre</strong>.",
              },
              {
                num: '03',
                text: "Il y a aussi l'erreur inverse : réviser la stratégie à chaque nouvelle tendance, chaque changement d'algorithme, chaque rapport de benchmarks. <strong>Le marketing stratégique n'est pas une météo.</strong> Il se relit, il s'ajuste, mais il <strong>ne se réécrit pas chaque trimestre</strong>. Si vos fondamentaux bougent aussi souvent, c'est qu'ils n'étaient pas encore vraiment des fondamentaux.",
              },
              {
                num: '04',
                text: "Enfin, négliger le feedback du terrain. Les campagnes, les taux de clics, les objections commerciales — tout cela dit quelque chose sur vos cibles, vos messages, votre positionnement. <strong>Ces signaux doivent remonter et alimenter la réflexion stratégique.</strong> Ce n'est pas automatique. Ça se construit.",
              },
            ].map((piege) => (
              <div key={piege.num} style={{ background: '#fff', padding: '44px 40px' }}>
                <p className="font-anton" style={{ fontSize: '2.4rem', color: '#e0e0e0', margin: '0 0 20px', lineHeight: 1 }}>
                  {piege.num}
                </p>
                {/* eslint-disable-next-line react/no-danger */}
                <p className="body-text" style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: piege.text }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DE LA THÉORIE À L'ACTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad" style={{ background: '#fff' }}>
        <div className="msvmo-grid-sidebar">

          <div className="msvmo-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
              MISE EN PRATIQUE
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.15, margin: 0 }}>
              DE LA<br />THÉORIE<br />À<br />L&apos;ACTION
            </h2>
          </div>

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le marketing stratégique se construit en plusieurs temps. D'abord, une <strong>analyse du marché</strong> sérieuse : <strong>étude de marché</strong>, analyse de la concurrence, identification des <strong>parts de marché</strong> sur votre secteur. Ensuite, l'analyse interne — forces et faiblesses de votre organisation, ressources disponibles, positionnement réel versus perçu. C'est là qu'intervient la <strong>matrice SWOT</strong> : mettre en face-à-face votre réalité interne et les opportunités ou menaces de votre environnement. Sur cette base, vous définissez vos <strong>segments prioritaires</strong>, votre <strong>marché cible</strong>, et la <strong>stratégie commerciale</strong> adaptée — qu'il s'agisse de développer votre notoriété, de prospecter de nouveaux clients en B2B ou en e-commerce, ou de fidéliser votre base existante par une stratégie relationnelle plus structurée." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le marketing opérationnel prend le relais avec un <strong>plan d'action marketing</strong> concret : le <strong>marketing mix</strong> décline les leviers (produit, prix, canaux de distribution, communication), le <strong>plan de communication</strong> fixe les messages et les formats par cible, et le <strong>budget marketing</strong> alloue les ressources levier par levier. Sur le terrain, cela se traduit par des campagnes multicanal, de l'<strong>inbound marketing</strong>, du <strong>marketing automation</strong>, une <strong>stratégie CRM</strong> pour gérer la relation client tout au long du parcours — et des <strong>tableaux de bord</strong> pour piloter la performance commerciale en temps réel." }} />
            <div style={{ background: '#f5f5f5', padding: '32px 36px', borderLeft: '3px solid #0a0a0a' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Ce que les deux ont en commun, c'est la nécessité de fixer des <strong>objectifs précis</strong> dès le départ. Objectifs commerciaux, de notoriété, de développement commercial, de retour sur investissement : chaque action de votre <strong>plan d'actions</strong> doit pouvoir se relier à un <strong>cap stratégique</strong>. Un responsable marketing qui ne peut pas faire ce lien court un risque bien précis — dépenser beaucoup d'énergie pour des résultats qui ne s'accumulent pas. C'est exactement le symptôme décrit en introduction. Et c'est ce qu'un <strong>audit stratégique</strong> permet de corriger avant d'élaborer le prochain plan." }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad" style={{ background: '#f4f4f4' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              FAQ
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
              VOS QUESTIONS<br />SUR LA STRATÉGIE MARKETING
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
                <p className="body-text" style={{ padding: '0 28px 24px', fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — PRENEZ DU RECUL AVANT D'ACCÉLÉRER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="msvmo-section-pad-lg" style={{ background: '#0a0a0a' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
            ACCOMPAGNEMENT DARWIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, margin: '0 0 40px' }}>
            PRENEZ DU RECUL<br />
            AVANT D&apos;ACCÉLÉRER
          </h2>

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "La distinction entre marketing stratégique et marketing opérationnel n'est pas une question de vocabulaire ni une simple approche théorique enseignée en master ou en formation professionnelle. Elle structure la façon dont vous investissez votre <strong>énergie et vos budgets</strong>. Une agence qui se contente d'exécuter sans comprendre le positionnement de votre marque, votre produit et votre vision ne peut pas vous aider à progresser durablement. <strong>Elle peut vous faire avancer. Pas dans la bonne direction.</strong>" }} />

          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, margin: '0 0 48px' }}>
            Chez DARWIN, chaque mission commence par un{' '}
            <Link href="/agence-media/audit-strategie-digitale" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              audit de votre stratégie digitale
            </Link>{' '}
            : identifier les déséquilibres entre votre vision et vos actions, clarifier vos{' '}
            <Link href="/agence-media/audit-strategie-digitale/objectifs-marketing-digital" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              objectifs marketing
            </Link>{' '}
            et aligner vos{' '}
            <Link href="/agence-media/audit-strategie-digitale/indicateurs-de-performance-mix-marketing" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              indicateurs de performance
            </Link>{' '}
            sur ce qui compte vraiment pour votre activité. Parce qu&apos;optimiser chaque action sans avoir défini le bon objectif ni fait les bons choix stratégiques, c&apos;est courir plus vite dans la mauvaise direction.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/agence-media/audit-strategie-digitale" style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
            }}>
              DÉCOUVRIR L&apos;AUDIT STRATÉGIQUE →
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
      <section className="msvmo-section-clip">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', margin: '0 0 12px' }}>
            POUR ALLER PLUS LOIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 48px' }}>
            PAGES LIÉES À VOTRE STRATÉGIE
          </h2>
          <div className="msvmo-links-grid">
            {[
              {
                label: 'Audit Stratégie Digitale',
                desc: 'Identifier les déséquilibres entre votre vision et vos actions marketing.',
                href: '/agence-media/audit-strategie-digitale',
              },
              {
                label: 'Objectifs Marketing Digital',
                desc: 'Définir des objectifs marketing alignés sur votre stratégie business.',
                href: '/agence-media/audit-strategie-digitale/objectifs-marketing-digital',
              },
              {
                label: 'Indicateurs de Performance',
                desc: 'Choisir les KPIs qui mesurent ce qui compte vraiment pour votre activité.',
                href: '/agence-media/audit-strategie-digitale/indicateurs-de-performance-mix-marketing',
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
