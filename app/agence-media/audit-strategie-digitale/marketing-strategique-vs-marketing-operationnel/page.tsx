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
  title: 'Marketing stratégique vs opérationnel | Vision & performance',
  description: 'Découvrez la différence entre marketing stratégique et marketing opérationnel\u00A0: définitions, comparatif et méthode pour les articuler.',
  alternates: { canonical: '/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel' },
  openGraph: {
    ...ogDefaults,
    title: 'Marketing stratégique vs opérationnel | Vision & performance',
    description: 'Découvrez la différence entre marketing stratégique et marketing opérationnel\u00A0: définitions, comparatif et méthode pour les articuler.',
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
  'Marketing Stratégique vs Marketing Opérationnel\u00A0: quelles différences\u00A0?',
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
]

const relatedPages = [
  { href: '/agence-media/audit-strategie-digitale/objectifs-marketing-digital', label: 'Objectifs Marketing Digital', desc: 'Définir des objectifs marketing alignés sur votre stratégie business' },
  { href: '/agence-media/audit-strategie-digitale/indicateurs-de-performance-mix-marketing', label: 'Indicateurs de Performance', desc: 'Choisir les KPIs qui mesurent ce qui compte vraiment pour votre activité' },
  { href: '/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe', label: 'Mix marketing\u00A0: interne ou externe', desc: 'Gérer votre mix marketing en interne ou le confier à une agence externe' },
]

const essentialPoints = [
  'Le marketing stratégique définit le cap\u00A0: à qui vous parlez, pourquoi, avec quelle promesse. Le marketing opérationnel exécute\u00A0: sur quels canaux, avec quels formats, à quel rythme.',
  'Confondre les deux niveaux revient à courir vite dans la mauvaise direction\u00A0: un pilotage fin sur une mauvaise cible reste un pilotage sur une mauvaise cible.',
  'La boucle stratégie-exécution-résultats-ajustement doit fonctionner en continu, pas une fois par an lors d\'un séminaire.',
  'Les quatre pièges récurrents\u00A0: confondre planification et stratégie, brûler l\'étape stratégique, réviser le cap à chaque tendance, négliger le feedback terrain.',
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
      title={<>MARKETING<br />STRATÉGIQUE<br />VS&nbsp;OPÉRATIONNEL</>}
      intro={<>On lance des campagnes, on teste, on analyse, on optimise. Et les résultats déçoivent. Ce sentiment de «&nbsp;faire du surplace&nbsp;» cache presque toujours le même angle mort&nbsp;: une confusion entre marketing stratégique et opérationnel. L&apos;un définit le cap&nbsp;: à qui vous parlez, pourquoi, avec quelle promesse. L&apos;autre exécute&nbsp;: sur quels canaux, avec quels messages, quels formats, à quel rythme. Confondre les deux, c&apos;est souvent engager des actions dans la mauvaise direction, avec peu d&apos;impact sur les ventes. Il est important de distinguer les deux registres et de montrer comment ils s&apos;articulent dans une stratégie digitale rentable, au service des campagnes et des performances des entreprises et annonceurs accompagnés par <Link href="/agence-media" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: '3px' }}>notre agence média à Aix-en-Provence</Link>. La méthode commence toujours par un <Link href="/agence-media/audit-strategie-digitale" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: '3px' }}>audit de votre stratégie digitale</Link>.</>}
      shareUrl="/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel"
      shareTitle="Marketing stratégique vs opérationnel | Vision & performance"
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
        <p dangerouslySetInnerHTML={{ __html: "La frontière entre marketing stratégique et marketing opérationnel n'est pas un débat de vocabulaire enseigné en master. Elle structure la façon dont vous investissez votre énergie et vos budgets. Une agence qui se contente d'exécuter sans comprendre votre positionnement, votre offre et votre vision peut vous faire avancer. Pas forcément dans la bonne direction. Chez DARWIN, chaque mission commence par un audit de votre stratégie digitale\u00A0: on identifie les déséquilibres entre votre vision et vos actions, on clarifie vos objectifs marketing et on aligne vos indicateurs de performance sur ce qui compte vraiment pour votre activité." }} />
      }
    >
      <>
      {/* ═══════════════════════════════════════════════════════════════════
          MARKETING STRATÉGIQUE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="marketing-strategique" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">DÉFINITION</span>
          <h2 className="font-anton artv2-h2">Le marketing stratégique&nbsp;: décider avant&nbsp;d&apos;agir</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "<strong>Le marketing stratégique intervient en amont de toute action</strong>. Avant le choix d'un canal, avant la rédaction d'un message, avant la première enchère Google Ads. C'est le travail qui répond à trois questions\u00A0: qui sont mes clients prioritaires, quelle valeur unique je leur propose, et pourquoi choisiraient-ils mon offre, mon produit, plutôt que celui d'un concurrent." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Ce travail s'appuie sur des référentiels éprouvés\u00A0: les cinq forces de Michael Porter pour cartographier la concurrence, une matrice SWOT pour croiser forces internes et opportunités de marché, une segmentation qui hiérarchise les cibles par potentiel et accessibilité. Le livrable, ce n'est pas un slide deck de 80 pages. C'est une feuille de route tenable\u00A0: trois à cinq priorités claires, un positionnement défendable, des objectifs chiffrés." }} />

        <blockquote className="artv2-blockquote">
          <p dangerouslySetInnerHTML={{ __html: "En pratique, le marketing stratégique s'analyse tous les douze à dix-huit mois. Il s'ajuste, il ne se réécrit pas chaque trimestre au gré des tendances. Sans ce socle, pendant des semaines vous pouvez affiner vos campagnes avec peu de résultat ou d'impact sur vos conversions, malgré des actions pour développer les performances des produits de votre marque. Le problème n'est pas l'exécution, mais la cible." }} />
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MARKETING OPÉRATIONNEL
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="marketing-operationnel" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">DÉFINITION</span>
          <h2 className="font-anton artv2-h2">Le marketing opérationnel&nbsp;: traduire la&nbsp;stratégie</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "<strong>Le marketing opérationnel est la partie visible</strong>. Les campagnes, les contenus, les performances obtenues, les annonces, les plans média. C'est ce qu'on voit tourner au quotidien." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Il s'appuie historiquement sur le Marketing Mix\u00A0: les 4P de Jérôme McCarthy (Produit, Prix, Place, Promotion). Ces quatre leviers se déclinent aujourd'hui dans un environnement digital dense, où la formation aux nouvelles technologies est quasi perpétuelle\u00A0: SEO, GEO, IA, LLM, SEA pour la visibilité pendant tout le tunnel jusqu'à la vente finale, de l'initiation jusqu'à la conversion, Social Ads pour la notoriété et le retargeting, emailing et SMS/RCS pour la conversion, programmatique pour le reach qualifié." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p dangerouslySetInnerHTML={{ __html: "Le marketing opérationnel a des exigences de mesure, de performance et d'analyse. Chaque euro engagé doit pouvoir se relier à un résultat\u00A0: leads qualifiés, leads transformés en clients, chiffre d'affaires, ventes, panier moyen, coût par acquisition. C'est aussi ce qui le rend attirant, et trompeur. Le risque, c'est de prendre le tableau de bord pour la stratégie. Un pilotage fin sur une mauvaise cible reste un pilotage sur une mauvaise cible." }} />
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
          <h2 className="font-anton artv2-h2">Marketing stratégique vs opérationnel&nbsp;: ce qui les&nbsp;distingue</h2>
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
                <td style={{ padding: '16px 20px', borderRight: '1px solid #f0f0f0', borderLeft: '3px solid #FFF127', fontWeight: 500, color: '#0a0a0a' }}>Où allons-nous et pourquoi&nbsp;?</td>
                <td style={{ padding: '16px 20px', color: '#555' }}>Comment y allons-nous avec le budget disponible&nbsp;?</td>
              </tr>
              <tr>
                <td style={{ padding: '16px 20px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999' }}>Outils</td>
                <td style={{ padding: '16px 20px', borderRight: '1px solid #f0f0f0', borderLeft: '3px solid #FFF127', fontWeight: 500, color: '#0a0a0a' }}>SWOT, segmentation, positionnement et mix marketing</td>
                <td style={{ padding: '16px 20px', color: '#555' }}>Campagnes, analyses, performances, objectifs, contenus et leviers payants avec leurs indicateurs de performance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Ce qui lie les deux, c'est la boucle. La stratégie descend vers l'exécution sous forme de priorités claires. L'exécution remonte vers la stratégie sous forme de signaux\u00A0: taux de clic, objections commerciales, audiences qui convertissent mieux que prévu, messages qui tombent à plat." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "La stratégie sans exécution reste une note d'intention dans un tiroir. <strong>L'exécution sans stratégie est une agitation bien organisée</strong>." }} />

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
          <h2 className="font-anton artv2-h2">Marketing stratégique vs opérationnel&nbsp;: pourquoi l&apos;articulation&nbsp;échoue</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "L'échec survient le plus souvent quand la stratégie ne «\u00A0descend\u00A0» pas vers les équipes opérationnelles. Le CODIR a validé un positionnement en janvier. En juin, l'équipe performance en ignore l'essentiel et continue de pousser les audiences qui «\u00A0tournent bien\u00A0». Résultat\u00A0: un pilotage opérationnel efficace sur un terrain mal choisi." }} />

        <blockquote className="artv2-blockquote">
          <p dangerouslySetInnerHTML={{ __html: "L'autre dérive est symétrique. La réactivité pure\u00A0: optimiser un coût d'acquisition sans savoir si l'on parle à la bonne cible, ou publier du contenu sans objectif de conversion clair. Quand vos actions opérationnelles ne nourrissent pas votre capital de marque, vous détruisez de la valeur à long terme au profit de gains immédiats." }} />
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LES PIÈGES LES PLUS COURANTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="pieges" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">ERREURS À ÉVITER</span>
          <h2 className="font-anton artv2-h2">Marketing stratégique vs opérationnel&nbsp;: les pièges&nbsp;courants</h2>
        </div>

        <div className="artv2-card-accent">
          <span className="font-anton artv2-h3" style={{ display: 'block', marginBottom: 6 }}>01</span>
          <h3 className="font-anton" style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 14px', lineHeight: 1.2 }}>Confondre planification et marketing stratégique</h3>
          <p dangerouslySetInnerHTML={{ __html: "La confusion entre les deux niveaux reste l'erreur la plus répandue. On croit faire de la stratégie parce qu'on a planifié ses campagnes pour le trimestre. Planifier une campagne ou un plan de communication, c'est de l'opérationnel. Décider à qui on s'adresse et pourquoi, c'est stratégique. Ce n'est pas le même travail, et ce n'est pas la même posture." }} />
        </div>

        <div className="artv2-card-accent">
          <span className="font-anton artv2-h3" style={{ display: 'block', marginBottom: 6 }}>02</span>
          <h3 className="font-anton" style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 14px', lineHeight: 1.2 }}>Brûler l&apos;étape stratégique pour aller vite</h3>
          <p dangerouslySetInnerHTML={{ __html: "Vient ensuite la tentation de brûler l'étape stratégique pour aller plus vite. La pression du court terme est réelle. Pourtant, une semaine d'analyse sérieuse en amont évite des mois de budget investi dans la mauvaise direction. C'est souvent le meilleur investissement du trimestre." }} />
        </div>

        <div className="artv2-card-accent">
          <span className="font-anton artv2-h3" style={{ display: 'block', marginBottom: 6 }}>03</span>
          <h3 className="font-anton" style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 14px', lineHeight: 1.2 }}>Réviser le marketing stratégique trop souvent</h3>
          <p dangerouslySetInnerHTML={{ __html: "Il y a aussi l'erreur inverse\u00A0: réviser la stratégie à chaque nouvelle tendance, chaque changement d'algorithme, chaque rapport de benchmarks. Le marketing stratégique n'est pas une météo. Il se relit, il s'ajuste, mais il ne se réécrit pas chaque trimestre. Si vos fondamentaux bougent aussi souvent, c'est qu'ils n'étaient pas encore vraiment des fondamentaux." }} />
        </div>

        <div className="artv2-card-accent">
          <span className="font-anton artv2-h3" style={{ display: 'block', marginBottom: 6 }}>04</span>
          <h3 className="font-anton" style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 14px', lineHeight: 1.2 }}>Négliger le feedback du terrain opérationnel</h3>
          <p dangerouslySetInnerHTML={{ __html: "Dernier piège, plus silencieux\u00A0: négliger le feedback du terrain. Les campagnes, les taux de clics, les taux de conversions ou de complétions disent quelque chose sur vos cibles, vos messages, votre positionnement. Les données s'étudient, elles aident à prendre les bonnes décisions, à avoir les bonnes approches. Ces signaux concrets doivent remonter et alimenter la réflexion stratégique. Ce n'est pas automatique. Ça se construit sur la base d'études régulières." }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DE LA THÉORIE À L'ACTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="theorie-action" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">MISE EN PRATIQUE</span>
          <h2 className="font-anton artv2-h2">Marketing stratégique&nbsp;: de la théorie à&nbsp;l&apos;action</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Pour qu'une entreprise progresse durablement sur son marché, la mise en œuvre suit quatre temps." }} />

        <ul style={{ margin: '0 0 28px', paddingLeft: 24 }}>
          <li className="artv2-body" style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "Audit &amp; analyse\u00A0: matrice SWOT, analyse concurrentielle, lecture des performances passées. On pose à plat ce qui marche, ce qui consomme le budget sans résultat, et ce qu'on a oublié de tester." }} />
          <li className="artv2-body" style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "Définition du cap\u00A0: objectifs business chiffrés (part de marché, ROAS pour retour sur dépense publicitaire, taux de rétention), priorités éditoriales, choix de segments cibles." }} />
          <li className="artv2-body" style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "Déploiement multicanal\u00A0: inbound marketing, automation, stratégie CRM, avec un arbitrage clair entre acquisition, fidélisation et branding." }} />
          <li className="artv2-body" dangerouslySetInnerHTML={{ __html: "Remontée de data\u00A0: les KPIs opérationnels alimentent la réflexion stratégique des professionnels du marketing digital, pour ajuster le tir au trimestre suivant." }} />
        </ul>

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p dangerouslySetInnerHTML={{ __html: "Le conseil de DARWIN. Planifier vos posts LinkedIn pour le trimestre n'est pas de la stratégie. C'est de l'opérationnel. Décider quelle cible vous servez, avec quelle promesse, et pourquoi elle devrait vous choisir\u00A0: c'est stratégique. Les deux travaux sont utiles. Ce ne sont pas les mêmes. Ils doivent se travailler en alternance et se nourrir, l'un de l'autre, pour ouvrir de nouveaux chapitres et de nouvelles voies porteuses de croissance." }} />
        </blockquote>
      </section>

      </>
    </ArticleLayoutV2>
  )
}
