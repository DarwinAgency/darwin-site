// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel/page.tsx
// RÔLE    : Page conseil niveau 3 — différences marketing stratégique / opérationnel
// PARENT  : /agence-media/audit-strategie-digitale
// LAYOUT  : ArticleLayoutV2
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { breadcrumbJsonLd, webPageJsonLd } from '../../../lib/jsonld'
import NewsletterCTA from '../../../components/NewsletterCTA'
import { ogDefaults } from '../../../lib/og'
import ArticleLayoutV2 from '../../../components/ArticleLayoutV2'

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Marketing stratégique vs opérationnel — Vision & performance | DARWIN',
  description: 'Marketing stratégique ou opérationnel ? Différences clés, rôles et comment les combiner pour optimiser votre stratégie digitale.',
  alternates: { canonical: '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel' },
  openGraph: {
    ...ogDefaults,
    title: 'Marketing stratégique vs opérationnel — Vision & performance',
    description: 'Marketing stratégique ou opérationnel ? Différences clés, rôles et comment les combiner pour optimiser votre stratégie digitale.',
    url: 'https://darwin-agency.fr/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel',
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLdBreadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Audit Stratégie Digitale', url: '/agence-media/audit-strategie-digitale' },
  { name: 'Marketing Stratégique vs Opérationnel', url: '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel' },
])

const jsonLdWebpage = webPageJsonLd(
  'Marketing Stratégique vs Marketing Opérationnel : quelles différences ?',
  'Différences clés entre marketing stratégique et opérationnel, comment les articuler et les erreurs à éviter.',
  '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel'
)

// ─── ARTICLE DATA ────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'marketing-strategique', label: 'Le marketing stratégique' },
  { id: 'marketing-operationnel', label: 'Le marketing opérationnel' },
  { id: 'comparatif', label: 'Comparatif et articulation' },
  { id: 'echec', label: 'Pourquoi l\'articulation échoue' },
  { id: 'pieges', label: 'Les pièges les plus courants' },
  { id: 'theorie-action', label: 'De la théorie à l\'action' },
  { id: 'conclusion', label: 'Prenez du recul' },
]

const relatedPages = [
  { href: '/agence-media/audit-strategie-digitale', label: 'Audit Stratégie Digitale', desc: 'Identifier les déséquilibres entre votre vision et vos actions marketing' },
  { href: '/agence-media/audit-strategie-digitale/objectifs-marketing-digital', label: 'Objectifs Marketing Digital', desc: 'Définir des objectifs marketing alignés sur votre stratégie business' },
  { href: '/agence-media/audit-strategie-digitale/indicateurs-de-performance-mix-marketing', label: 'Indicateurs de Performance', desc: 'Choisir les KPIs qui mesurent ce qui compte vraiment pour votre activité' },
]

const essentialPoints = [
  'Le marketing stratégique définit le cap — à qui vous parlez, pourquoi, avec quelle promesse. Le marketing opérationnel exécute — sur quels canaux, avec quels formats, à quel rythme.',
  'Confondre les deux niveaux revient à courir vite dans la mauvaise direction : un pilotage fin sur une mauvaise cible reste un pilotage sur une mauvaise cible.',
  'La boucle stratégie-exécution-résultats-ajustement doit fonctionner en continu, pas une fois par an lors d\'un séminaire.',
  'Les quatre pièges récurrents : confondre planification et stratégie, brûler l\'étape stratégique, réviser le cap à chaque tendance, négliger le feedback terrain.',
  'Chez DARWIN, chaque mission commence par un audit qui identifie les déséquilibres entre vision et actions, avant d\'accélérer l\'exécution.',
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MarketingStrategiqueVsOperationnelPage() {
  return (
    <ArticleLayoutV2
      jsonLd={[jsonLdBreadcrumbs, jsonLdWebpage]}
      breadcrumbs={[
        { href: '/', label: 'Accueil' },
        { href: '/agence-media', label: 'Agence Média' },
        { href: '/agence-media/audit-strategie-digitale', label: 'Audit Stratégie Digitale' },
        { label: 'Marketing Stratégique vs Opérationnel' },
      ]}
      badge="STRATÉGIE MARKETING"
      title={<>MARKETING<br />STRATÉGIQUE<br />VS&nbsp;OPÉRATIONNEL</>}
      intro="On lance des campagnes, on teste, on optimise. Et les résultats déçoivent. Ce sentiment de « faire du surplace » cache presque toujours le même angle mort : une confusion entre marketing stratégique et opérationnel. L'un définit le cap — à qui vous parlez, pourquoi, avec quelle promesse. L'autre exécute — sur quels canaux, avec quels formats, à quel rythme. Confondre les deux, c'est courir vite dans la mauvaise direction."
      shareUrl="/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel"
      shareTitle="Marketing stratégique vs opérationnel — Vision & performance"
      heroIllustration={
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
      }
      tocItems={tocItems}
      relatedPages={relatedPages}
      essentialPoints={essentialPoints}
      author={{ name: 'Mathilde Colonna D\'Istria', role: 'Consultante Senior Media', photo: '/images/media/media-strategie-vs-operationnel.jpg' }}
      conclusion={
        <p dangerouslySetInnerHTML={{ __html: "La frontière entre marketing stratégique et marketing opérationnel n'est pas un débat de vocabulaire enseigné en master. Elle structure la façon dont vous investissez votre énergie et vos budgets. Une agence qui se contente d'exécuter sans comprendre votre positionnement, votre offre et votre vision peut vous faire avancer. <strong>Pas forcément dans la bonne direction.</strong> Chez DARWIN, chaque mission commence par un audit de votre stratégie digitale : on identifie les déséquilibres entre votre vision et vos actions, on clarifie vos objectifs marketing et on aligne vos indicateurs de performance sur ce qui compte vraiment pour votre activité." }} />
      }
    >
      <>
      {/* ═══════════════════════════════════════════════════════════════════
          MARKETING STRATÉGIQUE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="marketing-strategique" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">DÉFINITION</span>
          <h2 className="font-anton artv2-h2">Le marketing stratégique : décider avant&nbsp;d&apos;agir</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Le marketing stratégique intervient <strong>en amont de toute action</strong>. Avant le choix d'un canal, avant la rédaction d'un message, avant la première enchère Google Ads. C'est le travail qui répond à trois questions : qui sont mes clients prioritaires, quelle valeur unique je leur propose, et pourquoi choisiraient-ils mon offre plutôt que celle d'un concurrent." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Ce travail s'appuie sur des référentiels éprouvés : les cinq forces de <strong>Michael Porter</strong> pour cartographier la concurrence, une matrice SWOT pour croiser forces internes et opportunités de marché, une segmentation qui hiérarchise les cibles par potentiel et accessibilité. Le livrable, ce n'est pas un slide deck de 80 pages. C'est une feuille de route tenable : trois à cinq priorités claires, un positionnement défendable, des objectifs chiffrés." }} />

        <blockquote className="artv2-blockquote">
          <p dangerouslySetInnerHTML={{ __html: "En pratique, le marketing stratégique se relit tous les douze à dix-huit mois. Il s'ajuste, il ne se réécrit pas chaque trimestre au gré des tendances. Sans ce socle, vous pouvez affiner une campagne SEA pendant six semaines sur un segment qui ne convertira jamais — <strong>le problème n'est pas l'exécution, mais la cible</strong>." }} />
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MARKETING OPÉRATIONNEL
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="marketing-operationnel" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">DÉFINITION</span>
          <h2 className="font-anton artv2-h2">Le marketing opérationnel : traduire la&nbsp;stratégie</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Le marketing opérationnel est la partie visible. Les campagnes, les contenus, les emails, les annonces, les plans média. C'est ce qu'on voit tourner au quotidien." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Il s'appuie historiquement sur le <strong>Marketing Mix — les 4P de Jérôme McCarthy</strong> : Produit, Prix, Place (distribution), Promotion (communication). Ces quatre leviers se déclinent aujourd'hui dans un environnement digital dense : SEO et SEA pour la visibilité en intention, Social Ads pour la notoriété et le retargeting, emailing et SMS/RCS pour la conversion, programmatique pour le reach qualifié, contenu pour la considération." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p dangerouslySetInnerHTML={{ __html: "Le marketing opérationnel a une exigence de mesure. Chaque euro engagé doit pouvoir se relier à un résultat : leads qualifiés, chiffre d'affaires, panier moyen, coût par acquisition. C'est aussi ce qui le rend attirant — et trompeur. Le risque, c'est de prendre le tableau de bord pour la stratégie. <strong>Un pilotage fin sur une mauvaise cible reste un pilotage sur une mauvaise cible.</strong>" }} />
        </blockquote>

        <div style={{ position: 'relative', marginTop: 32 }}>
          <Image
            src="/images/media/media-strategie-vs-operationnel.jpg"
            alt="Mathilde Colonna D'Istria, consultante Senior Media DARWIN"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
          />
          <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
        </div>
        <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
          Mathilde Colonna D&apos;Istria, consultante Senior Media
        </p>
      </section>

      {/* ── NEWSLETTER ── */}
      <div style={{ margin: '56px 0' }}>
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          TABLEAU COMPARATIF + SCHÉMA D'ARTICULATION
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="comparatif" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">COMPARATIF</span>
          <h2 className="font-anton artv2-h2">Ce qui les distingue et ce qui les&nbsp;lie</h2>
        </div>

        {/* ── Tableau comparatif ── */}
        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e8e8e8', minWidth: 500, fontSize: '0.92rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '16px 20px', background: '#f5f5f5', borderRight: '1px solid #e8e8e8', borderBottom: '2px solid #0a0a0a', textAlign: 'left', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999' }}>&nbsp;</th>
                <th style={{ padding: '16px 20px', background: '#FFF127', borderRight: '1px solid rgba(0,0,0,0.1)', borderBottom: '2px solid #0a0a0a', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a' }}>Marketing Stratégique</th>
                <th style={{ padding: '16px 20px', background: '#0a0a0a', borderBottom: '2px solid #0a0a0a', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>Marketing Opérationnel</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '16px 20px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999' }}>Horizon</td>
                <td style={{ padding: '16px 20px', borderRight: '1px solid #f0f0f0', borderLeft: '3px solid #FFF127', fontWeight: 500, color: '#0a0a0a' }}>1 à 3 ans</td>
                <td style={{ padding: '16px 20px', color: '#555' }}>Semaine ou mois</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '16px 20px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999' }}>Question clé</td>
                <td style={{ padding: '16px 20px', borderRight: '1px solid #f0f0f0', borderLeft: '3px solid #FFF127', fontWeight: 500, color: '#0a0a0a' }}>Où allons-nous et pourquoi ?</td>
                <td style={{ padding: '16px 20px', color: '#555' }}>Comment y allons-nous avec le budget disponible ?</td>
              </tr>
              <tr>
                <td style={{ padding: '16px 20px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999' }}>Outils</td>
                <td style={{ padding: '16px 20px', borderRight: '1px solid #f0f0f0', borderLeft: '3px solid #FFF127', fontWeight: 500, color: '#0a0a0a' }}>SWOT, segmentation, positionnement, mix marketing</td>
                <td style={{ padding: '16px 20px', color: '#555' }}>Campagnes, contenus, leviers payants et leurs KPIs propres</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Ce qui lie les deux, c'est la boucle. La stratégie descend vers l'exécution sous forme de priorités claires. L'exécution remonte vers la stratégie sous forme de signaux : taux de clic, objections commerciales, audiences qui convertissent mieux que prévu, messages qui tombent à plat." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "<strong>La stratégie sans exécution reste une note d'intention dans un tiroir. L'exécution sans stratégie est une agitation bien organisée.</strong>" }} />

        {/* ── Schéma d'articulation ── */}
        <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#29C5F5', margin: '40px 0 24px' }}>
          SCHÉMA D&apos;ARTICULATION
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid #e8e8e8', overflow: 'hidden' }}>
          {/* Bloc STRATÉGIE */}
          <div style={{ padding: '28px 20px', borderLeft: '4px solid #FFF127', background: '#0a0a0a' }}>
            <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 8px' }}>01</p>
            <p className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#FFF127', margin: '0 0 8px', lineHeight: 1 }}>STRATÉGIE</p>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>Cap, positionnement, objectifs 1-3 ans</p>
          </div>

          {/* Bloc OPÉRATIONNEL */}
          <div style={{ padding: '28px 20px', borderLeft: '1px solid #e8e8e8', background: '#fafafa' }}>
            <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', margin: '0 0 8px' }}>02</p>
            <p className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1 }}>OPÉRATIONNEL</p>
            <p style={{ fontSize: '0.72rem', color: '#777', margin: 0, lineHeight: 1.5 }}>Campagnes, contenus, mesure des résultats</p>
          </div>

          {/* Bloc RÉSULTATS */}
          <div style={{ padding: '28px 20px', borderLeft: '1px solid #e8e8e8', background: '#fff' }}>
            <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', margin: '0 0 8px' }}>03</p>
            <p className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1 }}>RÉSULTATS</p>
            <p style={{ fontSize: '0.72rem', color: '#777', margin: 0, lineHeight: 1.5 }}>Trafic, leads, conversions, CA</p>
          </div>

          {/* Bloc BOUCLE FERMÉE */}
          <div style={{ padding: '28px 20px', borderLeft: '1px solid #e8e8e8', background: '#FFF127' }}>
            <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', margin: '0 0 8px' }}>BOUCLE</p>
            <p className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1 }}>FERMÉE</p>
            <p style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.55)', margin: 0, lineHeight: 1.5 }}>En continu, pas une fois par an</p>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .artv2-section [style*="grid-template-columns: repeat(4"] {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          POURQUOI L'ARTICULATION ÉCHOUE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="echec" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">DIAGNOSTIC</span>
          <h2 className="font-anton artv2-h2">Pourquoi l&apos;articulation échoue si&nbsp;souvent</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "L'échec survient le plus souvent quand la stratégie ne « descend » pas vers les équipes opérationnelles. Le CODIR a validé un positionnement en janvier. En juin, l'équipe performance en ignore l'essentiel et continue de pousser les audiences qui « tournent bien ». Résultat : un pilotage opérationnel efficace sur un terrain mal choisi." }} />

        <blockquote className="artv2-blockquote">
          <p dangerouslySetInnerHTML={{ __html: "L'autre dérive est symétrique. La réactivité pure : optimiser un coût d'acquisition sans savoir si l'on parle à la bonne cible, ou publier du contenu sans objectif de conversion clair. Quand vos actions opérationnelles ne nourrissent pas votre capital de marque, vous détruisez de la valeur à long terme au profit de gains immédiats." }} />
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LES PIÈGES LES PLUS COURANTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="pieges" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">ERREURS À ÉVITER</span>
          <h2 className="font-anton artv2-h2">Les pièges les plus&nbsp;courants</h2>
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">01</h3>
          <p dangerouslySetInnerHTML={{ __html: "<strong>La confusion entre les deux niveaux</strong> reste l'erreur la plus répandue. On croit faire de la stratégie parce qu'on a planifié ses publications LinkedIn pour le trimestre. Planifier une campagne ou un plan de communication, c'est de l'opérationnel. Décider à qui on s'adresse et pourquoi, c'est stratégique. Ce n'est pas le même travail, et ce n'est pas la même posture." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">02</h3>
          <p dangerouslySetInnerHTML={{ __html: "Vient ensuite <strong>la tentation de brûler l'étape stratégique pour aller plus vite</strong>. La pression du court terme est réelle. Pourtant, une semaine d'analyse sérieuse en amont évite des mois de budget investi dans la mauvaise direction. C'est souvent le meilleur investissement du trimestre." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">03</h3>
          <p dangerouslySetInnerHTML={{ __html: "Il y a aussi <strong>l'erreur inverse : réviser la stratégie à chaque nouvelle tendance</strong>, chaque changement d'algorithme, chaque rapport de benchmarks. Le marketing stratégique n'est pas une météo. Il se relit, il s'ajuste, mais il ne se réécrit pas chaque trimestre. Si vos fondamentaux bougent aussi souvent, c'est qu'ils n'étaient pas encore vraiment des fondamentaux." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">04</h3>
          <p dangerouslySetInnerHTML={{ __html: "Dernier piège, plus silencieux : <strong>négliger le feedback du terrain</strong>. Les campagnes, les taux de clics, les objections commerciales disent quelque chose sur vos cibles, vos messages, votre positionnement. Ces signaux doivent remonter et alimenter la réflexion stratégique. Ce n'est pas automatique. Ça se construit." }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DE LA THÉORIE À L'ACTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="theorie-action" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">MISE EN PRATIQUE</span>
          <h2 className="font-anton artv2-h2">De la théorie à&nbsp;l&apos;action</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Pour qu'une entreprise progresse durablement sur son marché, la mise en œuvre suit quatre temps." }} />

        <ul style={{ margin: '0 0 28px', paddingLeft: 24 }}>
          <li className="artv2-body" style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "<strong>Audit &amp; analyse</strong> : matrice SWOT, analyse concurrentielle, lecture des performances passées. On pose à plat ce qui marche, ce qui tire le budget sans résultat, et ce qu'on a oublié de tester." }} />
          <li className="artv2-body" style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "<strong>Définition du cap</strong> : objectifs business chiffrés (part de marché, ROAS — retour sur dépense publicitaire, taux de rétention), priorités éditoriales, choix de segments cibles." }} />
          <li className="artv2-body" style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "<strong>Déploiement multicanal</strong> : inbound marketing, automation, stratégie CRM, avec un arbitrage clair entre acquisition, fidélisation et branding." }} />
          <li className="artv2-body" dangerouslySetInnerHTML={{ __html: "<strong>Remontée de data</strong> : les KPIs opérationnels alimentent la réflexion stratégique pour ajuster le tir au trimestre suivant." }} />
        </ul>

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p dangerouslySetInnerHTML={{ __html: "<strong>Le conseil de DARWIN.</strong> Planifier vos posts LinkedIn pour le trimestre n'est pas de la stratégie. C'est de l'opérationnel. Décider quelle cible vous servez, avec quelle promesse, et pourquoi elle devrait vous choisir — c'est stratégique. Les deux travaux sont utiles. Ce ne sont pas les mêmes." }} />
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — PRENEZ DU RECUL AVANT D'ACCÉLÉRER
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="conclusion" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">ACCOMPAGNEMENT DARWIN</span>
          <h2 className="font-anton artv2-h2">Prenez du recul avant&nbsp;d&apos;accélérer</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "La frontière entre marketing stratégique et marketing opérationnel n'est pas un débat de vocabulaire enseigné en master. Elle structure la façon dont vous investissez votre énergie et vos budgets. Une agence qui se contente d'exécuter sans comprendre votre positionnement, votre offre et votre vision peut vous faire avancer. <strong>Pas forcément dans la bonne direction.</strong>" }} />

        <p className="artv2-body">
          Chez DARWIN, chaque mission commence par un{' '}
          <Link href="/agence-media/audit-strategie-digitale" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            audit de votre stratégie digitale
          </Link>{' '}
          : on identifie les déséquilibres entre votre vision et vos actions, on clarifie vos{' '}
          <Link href="/agence-media/audit-strategie-digitale/objectifs-marketing-digital" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            objectifs marketing
          </Link>{' '}
          et on aligne vos{' '}
          <Link href="/agence-media/audit-strategie-digitale/indicateurs-de-performance-mix-marketing" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            indicateurs de performance
          </Link>{' '}
          sur ce qui compte vraiment pour votre activité.
        </p>
      </section>
      </>
    </ArticleLayoutV2>
  )
}
