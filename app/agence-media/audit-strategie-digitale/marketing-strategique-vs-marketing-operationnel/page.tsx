// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel/page.tsx
// RÔLE    : Page conseil niveau 3 — différences marketing stratégique / opérationnel
// PARENT  : /agence-media/audit-strategie-digitale
// TEMPLATE: Dupliquer pour toute future page conseil niveau 3 sous agence-media
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbJsonLd, webPageJsonLd } from '../../../lib/jsonld'
import NewsletterCTA from '../../../components/NewsletterCTA'

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Marketing Stratégique vs Marketing Opérationnel : l\'Art d\'Allier Vision et Performance — DARWIN',
  description: 'Marketing stratégique ou opérationnel ? Différences clés, rôles et comment les combiner pour optimiser votre stratégie digitale.',
  alternates: { canonical: '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel' },
  openGraph: {
    title: 'Marketing Stratégique vs Marketing Opérationnel : l\'Art d\'Allier Vision et Performance',
    description: 'Marketing stratégique ou opérationnel ? Différences clés, rôles et comment les combiner pour optimiser votre stratégie digitale.',
    url: 'https://darwin-agency.fr/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel',
    images: [{ url: 'https://darwin-agency.fr/images/og-default.jpg', width: 1200, height: 630, alt: 'Marketing stratégique vs opérationnel — DARWIN' }],
  },
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const comparisonRows = [
  { label: 'Horizon',              strategic: 'Long terme (1 à 3 ans)',              operational: 'Court terme (semaine, mois)' },
  { label: 'Question clé',         strategic: 'Où allons-nous et pourquoi ?',        operational: 'Comment y allons-nous ?' },
  { label: 'Outils',               strategic: 'SWOT, Segmentation, Positionnement',  operational: 'Campagnes, Contenus, Leviers payants' },
  { label: 'Expert de référence',  strategic: 'Philip Kotler (Vision)',              operational: 'Jerome McCarthy (Mix)' },
]

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

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

            <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 16, maxWidth: 460 }}>
              On active des campagnes marketing. On met en ligne, on teste chaque action opérationnelle, on optimise la performance. Et pourtant, malgré l&apos;agitation technique, les résultats déçoivent et ne répondent pas aux attentes. Ce sentiment de &quot;faire du surplace&quot; cache presque toujours le même problème : une confusion entre <strong>marketing opérationnel</strong> et <strong>marketing stratégique</strong>.
            </p>
            <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40, maxWidth: 460 }}>
              Pour réussir, il faut comprendre que l&apos;un définit le &quot;pourquoi&quot; (la vision de <strong>Philip Kotler</strong>), tandis que l&apos;autre gère le &quot;comment&quot; (l&apos;exécution des <strong>4P de McCarthy</strong>).
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
                Horizon 1 à 3 ans
              </p>
            </div>
          </div>

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le marketing stratégique est la partie immergée de l'iceberg dans toute entreprise orientée marché. Il intervient <strong>en amont de toute action</strong>, bien avant de choisir un canal ou de rédiger un message." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Comme le soulignait <strong>Theodore Levitt</strong> avec son concept de \"Myopie du Marketing\", l'entreprise doit d'abord définir son marché par le besoin client plutôt que par son produit. Ce travail de fond repose sur :" }} />
            <ul style={{ margin: '0 0 28px', paddingLeft: 24 }}>
              <li className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, marginBottom: 8 }}>
                <strong>L&apos;analyse approfondie</strong> : Étude du marché et de l&apos;environnement concurrentiel (via les 5 forces de <strong>Michael Porter</strong>).
              </li>
              <li className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, marginBottom: 8 }}>
                <strong>La segmentation et le ciblage</strong> : Identifier à qui s&apos;adresser en priorité.
              </li>
              <li className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9 }}>
                <strong>Le positionnement</strong> : Définir une proposition de valeur unique pour que l&apos;offre soit choisie face aux concurrents.
              </li>
            </ul>
            <div style={{ background: 'rgba(255,255,255,0.6)', borderLeft: '3px solid #0a0a0a', padding: '24px 28px' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "C'est un travail stratégique sur le long terme, structuré autour d'un plan clair. Sans cette base, vous pouvez affiner une campagne Google Ads pendant des semaines sur un segment qui ne convertira jamais : <strong>le problème n'est pas l'exécution, mais le fait de s'adresser aux mauvaises personnes</strong>." }} />
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
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le marketing opérationnel est la partie visible et concrète : campagnes, contenus, emails, annonces et actions de communication. C'est l'ensemble des leviers déployés pour atteindre les objectifs fixés (<strong>SEO, SEA, Social Ads, emailing</strong>)." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Ici, on applique le célèbre <strong>Marketing Mix (les 4P) de McCarthy</strong> pour décliner la stratégie en plan d'action concret et mesurable sur le terrain :" }} />
            <ul style={{ margin: '0 0 28px', paddingLeft: 24 }}>
              <li className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 8 }}>
                <strong>Produit &amp; Prix</strong> : L&apos;offre adaptée au segment choisi.
              </li>
              <li className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 8 }}>
                <strong>Distribution (Place)</strong> : Le choix des canaux, notamment le e-commerce et les marketplaces.
              </li>
              <li className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                <strong>Communication (Promotion)</strong> : Le message et les formats publicitaires.
              </li>
            </ul>
            <div style={{ borderLeft: '3px solid #FFF127', padding: '24px 28px', background: 'rgba(255,255,255,0.06)' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "À l'ère digitale, ce marketing doit être \"remarquable\" pour briser le bruit ambiant, comme le préconise <strong>Seth Godin</strong>. Un bon marketing opérationnel s'appuie sur la donnée et chaque outil d'analyse, s'ajuste en continu et délivre des <strong>résultats mesurables (CA, Leads, Trafic)</strong> au service de la performance." }} />
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
              CE QUI LES DISTINGUE<br />ET CE QUI LES LIE
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
          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 72px' }} dangerouslySetInnerHTML={{ __html: "<strong>La stratégie sans exécution reste une note d'intention dans un tiroir. L'exécution sans stratégie est une \"agitation bien organisée\".</strong>" }} />

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
                <p style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.55)', margin: 0, lineHeight: 1.6 }}>En continu,<br />pas une fois par an</p>
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
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "L'échec survient généralement lorsque la stratégie ne \"descend\" pas vers chaque équipe opérationnelle, laissant les professionnels <strong>sans approche claire ni meilleur choix d'exécution</strong>." }} />
            <div style={{ background: '#f5f5f5', padding: '32px 36px', borderLeft: '3px solid #0a0a0a' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "À l'inverse, on tombe souvent dans le piège de la réactivité pure : optimiser un coût d'acquisition (CPA) sans savoir si l'on parle à la bonne cible, ou publier du contenu sans objectif de conversion clair. Comme le suggère <strong>David Aaker</strong>, si vos actions opérationnelles ne nourrissent pas votre <strong>capital de marque (Brand Equity)</strong>, vous détruisez de la valeur à long terme au profit de gains immédiats." }} />
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
                text: "Vient ensuite la tentation de brûler l'étape stratégique pour aller plus vite. La pression du court terme est réelle, on comprend. Pourtant, <strong>une semaine d'analyse sérieuse en amont peut éviter des mois de budget investi dans la mauvaise direction</strong>. Ce n'est pas du temps perdu. C'est souvent le <strong>meilleur investissement du trimestre</strong>.",
              },
              {
                num: '03',
                text: "Il y a aussi l'erreur inverse : réviser la stratégie à chaque nouvelle tendance, chaque changement d'algorithme, chaque rapport de benchmarks. <strong>Le marketing stratégique n'est pas une météo.</strong> Il se relit, il s'ajuste, mais il <strong>ne se réécrit pas chaque trimestre</strong>. Si vos fondamentaux bougent aussi souvent, c'est qu'ils n'étaient pas encore vraiment des fondamentaux.",
              },
              {
                num: '04',
                text: "Enfin, négliger le feedback du terrain. Les campagnes, les taux de clics, les objections commerciales : tout cela dit quelque chose sur vos cibles, vos messages, votre positionnement. <strong>Ces signaux doivent remonter et alimenter la réflexion stratégique.</strong> Ce n'est pas automatique. Ça se construit.",
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
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Pour que votre e-commerce progresse durablement sur son marché, la mise en œuvre doit suivre une <strong>approche continue</strong> :" }} />
            <ul style={{ margin: '0 0 28px', paddingLeft: 24 }}>
              {/* eslint-disable-next-line react/no-danger */}
              <li className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "<strong>Audit &amp; Analyse</strong> : Utiliser la matrice SWOT pour confronter votre réalité interne aux opportunités du marché." }} />
              {/* eslint-disable-next-line react/no-danger */}
              <li className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "<strong>Définition du Cap</strong> : Fixer des objectifs précis (Notoriété, ROAS, Fidélisation)." }} />
              {/* eslint-disable-next-line react/no-danger */}
              <li className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "<strong>Déploiement Multicanal</strong> : Inbound marketing, automation et stratégie CRM." }} />
              {/* eslint-disable-next-line react/no-danger */}
              <li className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9 }} dangerouslySetInnerHTML={{ __html: "<strong>Remontée de Data</strong> : Les KPIs opérationnels doivent alimenter la réflexion stratégique pour ajuster le tir." }} />
            </ul>
            <div style={{ background: '#FFF127', padding: '32px 36px', borderLeft: '3px solid #0a0a0a', marginBottom: 28 }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "<strong>Le conseil de DARWIN :</strong> Ne confondez pas planification et stratégie. Planifier vos posts LinkedIn est de l'opérationnel ; décider quelle \"tribu\" vous ciblez et quel message unique leur adresser est stratégique." }} />
            </div>
            <div style={{ background: '#f5f5f5', padding: '32px 36px', borderLeft: '3px solid #0a0a0a' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Chaque mission chez DARWIN commence par un <strong>audit stratégique</strong> de votre stratégie digitale, véritable chapitre fondateur avant toute formation, master ou alternance orientée marketing sur le terrain. Optimiser chaque action sans définir le bon objectif, c'est courir très vite... mais dans la mauvaise direction." }} />
            </div>
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
