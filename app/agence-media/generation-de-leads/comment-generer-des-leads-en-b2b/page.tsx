// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b/page.tsx
// RÔLE    : Page conseil niveau 3 — comment générer des leads en B2B
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
  title: 'Comment Générer des Leads en B2B ? Stratégies efficaces — DARWIN',
  description: 'Comment générer des leads qualifiés en B2B ? LinkedIn, content marketing, SEO, webinaires : les stratégies les plus efficaces pour alimenter votre pipeline.',
  alternates: { canonical: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b' },
  openGraph: {
    ...ogDefaults,
    title: 'Comment Générer des Leads en B2B ? Stratégies efficaces',
    description: 'Comment générer des leads qualifiés en B2B ? LinkedIn, content marketing, SEO, webinaires : les stratégies les plus efficaces pour alimenter votre pipeline.',
    url: 'https://darwin-agency.fr/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b',
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Génération de Leads', url: '/agence-media/generation-de-leads' },
  { name: 'Leads B2B', url: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b' },
])

const webpage = webPageJsonLd(
  'Comment Générer des Leads en B2B ?',
  'LinkedIn, content marketing, SEO, webinaires : les stratégies les plus efficaces pour alimenter votre pipeline B2B.',
  '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b'
)

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CommentGenererDesLeadsEnB2BPage() {
  return (
    <main>

      {/* ── JSON-LD ──────────────────────────────────────────────────────── */}
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />

      {/* ── RESPONSIVE CSS ───────────────────────────────────────────────── */}
      <style>{`
        .glb2b-hero-grid {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; min-height: 600px;
        }
        .glb2b-hero-text {
          padding: 100px 64px 80px 32px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .glb2b-hero-illus {
          display: flex; align-items: center; justify-content: center; padding: 40px;
        }
        .glb2b-grid-left {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 96px; align-items: start;
        }
        .glb2b-grid-right {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1.4fr 1fr; gap: 96px; align-items: start;
        }
        .glb2b-grid-sidebar {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 320px 1fr; gap: 96px; align-items: start;
        }
        .glb2b-sticky { position: sticky; top: 120px; }
        .glb2b-canaux-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: #e0e0e0; }
        .glb2b-metrics-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: #e0e0e0; }
        .glb2b-links-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .glb2b-section-pad { padding: 80px 32px; }
        .glb2b-section-pad-lg { padding: 96px 32px; }
        .glb2b-section-clip {
          background: linear-gradient(135deg, #27D9E5 0%, #B8E000 100%);
          padding: 160px 32px 80px;
          clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
          margin-top: -80px;
        }
        .glb2b-nl-wrap { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        @media (max-width: 768px) {
          .glb2b-hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .glb2b-hero-text { padding: 72px 20px 48px; }
          .glb2b-hero-illus { display: none; }
          .glb2b-grid-left { grid-template-columns: 1fr; gap: 40px; }
          .glb2b-grid-right { grid-template-columns: 1fr; gap: 40px; }
          .glb2b-grid-sidebar { grid-template-columns: 1fr; gap: 36px; }
          .glb2b-sticky { position: static; }
          .glb2b-canaux-grid { grid-template-columns: 1fr; }
          .glb2b-metrics-grid { grid-template-columns: 1fr; }
          .glb2b-links-grid { grid-template-columns: 1fr; }
          .glb2b-section-pad { padding: 60px 20px; }
          .glb2b-section-pad-lg { padding: 72px 20px; }
          .glb2b-section-clip { padding: 120px 20px 60px; }
          .glb2b-nl-wrap { padding: 0 20px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — split 50/50
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div className="glb2b-hero-grid">

          {/* Colonne gauche — texte */}
          <div className="glb2b-hero-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <Link href="/agence-media" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Agence Média</Link>
              <span>/</span>
              <Link href="/agence-media/generation-de-leads" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Génération de Leads</Link>
              <span>/</span>
              <span style={{ color: 'rgba(0,0,0,0.6)' }}>Leads B2B</span>
            </nav>

            <span style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '5px 14px', marginBottom: 28, alignSelf: 'flex-start',
            }}>
              STRATÉGIE B2B
            </span>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, margin: '0 0 28px' }}>
              COMMENT GÉNÉRER<br />
              DES LEADS<br />
              EN B2B ?
            </h1>

            <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40, maxWidth: 460 }}>
              En B2B, la génération de leads ne ressemble à rien de ce qu&apos;on fait en BtoC. Les cycles d&apos;achat sont longs. Les décisions sont collectives. Un projet peut mettre six mois à se concrétiser — et encore, si vous avez parlé au bon interlocuteur dès le départ. Attirer un prospect ne suffit pas. Il faut l&apos;atteindre au bon moment, avec le bon message, et rester présent tout au long de sa réflexion. C&apos;est ça, la génération de leads B2B. Et c&apos;est loin d&apos;être simple.
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

          {/* Colonne droite — illustration géométrique : pipeline B2B */}
          <div className="glb2b-hero-illus">
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

                {/* ── ENTREPRISES — haut (buildings) ─────────────── */}
                {/* Building 1 */}
                <rect x="45" y="20" width="18" height="28" fill="rgba(0,0,0,0.12)" rx="1"/>
                <rect x="48" y="24" width="4" height="4" fill="#f5f5f5"/>
                <rect x="56" y="24" width="4" height="4" fill="#f5f5f5"/>
                <rect x="48" y="32" width="4" height="4" fill="#f5f5f5"/>
                <rect x="56" y="32" width="4" height="4" fill="#f5f5f5"/>

                {/* Building 2 */}
                <rect x="105" y="15" width="22" height="33" fill="rgba(0,0,0,0.12)" rx="1"/>
                <rect x="109" y="19" width="4" height="4" fill="#f5f5f5"/>
                <rect x="119" y="19" width="4" height="4" fill="#f5f5f5"/>
                <rect x="109" y="27" width="4" height="4" fill="#f5f5f5"/>
                <rect x="119" y="27" width="4" height="4" fill="#f5f5f5"/>
                <rect x="109" y="35" width="4" height="4" fill="#f5f5f5"/>

                {/* Building 3 */}
                <rect x="175" y="22" width="16" height="26" fill="rgba(0,0,0,0.12)" rx="1"/>
                <rect x="178" y="26" width="4" height="4" fill="#f5f5f5"/>
                <rect x="184" y="26" width="4" height="4" fill="#f5f5f5"/>
                <rect x="178" y="34" width="4" height="4" fill="#f5f5f5"/>

                {/* Building 4 */}
                <rect x="240" y="18" width="20" height="30" fill="rgba(0,0,0,0.12)" rx="1"/>
                <rect x="244" y="22" width="4" height="4" fill="#f5f5f5"/>
                <rect x="252" y="22" width="4" height="4" fill="#f5f5f5"/>
                <rect x="244" y="30" width="4" height="4" fill="#f5f5f5"/>
                <rect x="252" y="30" width="4" height="4" fill="#f5f5f5"/>

                {/* Building 5 */}
                <rect x="310" y="20" width="18" height="28" fill="rgba(0,0,0,0.12)" rx="1"/>
                <rect x="313" y="24" width="4" height="4" fill="#f5f5f5"/>
                <rect x="321" y="24" width="4" height="4" fill="#f5f5f5"/>
                <rect x="313" y="32" width="4" height="4" fill="#f5f5f5"/>

                {/* Building 6 */}
                <rect x="375" y="16" width="22" height="32" fill="rgba(0,0,0,0.12)" rx="1"/>
                <rect x="379" y="20" width="4" height="4" fill="#f5f5f5"/>
                <rect x="389" y="20" width="4" height="4" fill="#f5f5f5"/>
                <rect x="379" y="28" width="4" height="4" fill="#f5f5f5"/>
                <rect x="389" y="28" width="4" height="4" fill="#f5f5f5"/>

                {/* ── CONTACTS (dots sous les buildings) ──────────── */}
                <circle cx="54" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
                <circle cx="116" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
                <circle cx="183" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
                <circle cx="250" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
                <circle cx="319" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
                <circle cx="386" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>

                {/* ── FLÈCHES VERS L'ENTONNOIR ───────────────────── */}
                <line x1="54" y1="62" x2="180" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
                <line x1="116" y1="62" x2="200" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
                <line x1="183" y1="62" x2="220" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
                <line x1="250" y1="62" x2="240" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
                <line x1="319" y1="62" x2="260" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
                <line x1="386" y1="62" x2="280" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>

                {/* ── ENTONNOIR — structure ─────────────────────── */}
                <line x1="120" y1="95" x2="195" y2="200" stroke="#0a0a0a" strokeWidth="1.5"/>
                <line x1="340" y1="95" x2="265" y2="200" stroke="#0a0a0a" strokeWidth="1.5"/>
                <line x1="120" y1="95" x2="340" y2="95" stroke="#0a0a0a" strokeWidth="1.5"/>
                <line x1="195" y1="200" x2="265" y2="200" stroke="#0a0a0a" strokeWidth="1.5"/>

                {/* Grille de filtrage */}
                <line x1="150" y1="130" x2="310" y2="130" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="4,4"/>
                <line x1="168" y1="160" x2="292" y2="160" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3,5"/>

                {/* Dots en cours de filtrage */}
                <circle cx="170" cy="110" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="210" cy="108" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="250" cy="112" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="290" cy="106" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="310" cy="110" r="3" fill="rgba(0,0,0,0.12)"/>
                <circle cx="190" cy="115" r="3" fill="rgba(0,0,0,0.12)"/>
                <circle cx="270" cy="118" r="3" fill="rgba(0,0,0,0.12)"/>

                {/* Dots passant le filtre */}
                <circle cx="215" cy="145" r="3" fill="rgba(0,0,0,0.18)"/>
                <circle cx="250" cy="142" r="3" fill="rgba(0,0,0,0.18)"/>
                <circle cx="235" cy="150" r="3" fill="rgba(0,0,0,0.18)"/>

                {/* Leads qualifiés dans l'entonnoir bas */}
                <circle cx="215" cy="175" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
                <circle cx="245" cy="180" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
                <circle cx="260" cy="172" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>

                {/* ── SORTIE — flèche ──────────────────────────── */}
                <line x1="230" y1="200" x2="230" y2="230" stroke="#0a0a0a" strokeWidth="1.5"/>
                <polygon points="224,230 230,240 236,230" fill="#0a0a0a"/>

                {/* Leads qualifiés sortis */}
                <circle cx="210" cy="255" r="5" fill="#29C5F5"/>
                <circle cx="230" cy="258" r="5" fill="#FFF127"/>
                <circle cx="250" cy="255" r="5" fill="#29C5F5"/>

                {/* ── LABEL ────────────────────────────────────── */}
                <text x="230" y="285" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.15em">CIBLER · ENGAGER · CONVERTIR</text>

              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CE QUI DIFFÉRENCIE VRAIMENT LA GÉNÉRATION DE LEADS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="glb2b-section-pad" style={{ background: '#FFF127' }}>
        <div className="glb2b-grid-left">

          <div className="glb2b-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', margin: '0 0 20px' }}>
              SPÉCIFICITÉS
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.1, margin: '0 0 28px' }}>
              CE QUI<br />
              DIFFÉRENCIE<br />
              VRAIMENT<br />
              LA GÉNÉRATION<br />
              DE LEADS
            </h2>
          </div>

          <div>
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }}>
              Le B2C parle à un individu. Le B2B parle à une organisation. Cette distinction change tout.
            </p>
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }}>
              En B2B, la décision d&apos;achat implique rarement une seule personne. Il y a le décisionnaire, le prescripteur, parfois le DAF qui valide le budget, parfois une direction technique qui émet un avis. Chacun de ces profils a des attentes différentes, des objections spécifiques et une manière propre de s&apos;informer. La campagne qui convertit un directeur marketing ne convertit pas forcément son DAF.
            </p>
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }}>
              La durée du cycle d&apos;achat est sans commune mesure avec le grand public. Un prospect peut télécharger un contenu en janvier et signer un contrat en septembre. Entre les deux, il lit vos articles, regarde vos concurrents, assiste à un webinaire, échange avec un commercial. Ce parcours non linéaire exige une stratégie de contenu et de nurturing pensée sur la durée — pas une simple séquence d&apos;emails déclenchée par un téléchargement.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.6)', borderLeft: '3px solid #0a0a0a', padding: '24px 28px' }}>
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }}>
                Enfin, les besoins B2B sont souvent complexes à formuler. L&apos;entreprise cliente ne cherche pas toujours un produit — elle cherche une solution à un problème qu&apos;elle a parfois du mal à nommer. Votre capacité à poser ce problème mieux qu&apos;elle-même devient un avantage compétitif direct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LES CANAUX LES PLUS PERFORMANTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="glb2b-section-pad" style={{ background: '#0a0a0a' }}>
        <div className="glb2b-grid-right">

          <div>
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }}>
              Tous les canaux de génération de leads ne se valent pas en B2B. Certains excellent dans la capture de prospects chauds. D&apos;autres construisent la notoriété sur le long terme. L&apos;enjeu, c&apos;est de choisir la bonne combinaison selon votre audience, votre offre et votre stade de développement.
            </p>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le <strong>SEO</strong> est fondamental pour capter des prospects en phase de recherche active. Une équipe marketing qui tape « agence génération leads B2B » est déjà engagée dans un processus de sélection. Être visible à ce moment-là, c'est être dans la short-list dès le départ. Construire un contenu SEO solide prend du temps, mais l'acquisition devient progressivement autonome, indépendante des budgets publicitaires mensuels." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le <strong>SEA</strong> complète le SEO sur les requêtes à forte intention commerciale. C'est particulièrement utile pour tester un nouveau marché, une offre ciblée ou un segment de niche avec un coût par lead mesuré dès la première semaine." }} />
            <div style={{ borderLeft: '3px solid #FFF127', padding: '24px 28px', background: 'rgba(255,255,255,0.06)' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Les campagnes de contenu — articles, études de cas, rapports sectoriels — renforcent la crédibilité, améliorent la conversion et positionnent votre entreprise comme référence sur son domaine. C'est une stratégie d'acquisition indirecte, mais souvent très efficace pour des cycles d'achat longs où la décision se prépare sur plusieurs mois." }} />
            </div>
          </div>

          <div className="glb2b-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 20px' }}>
              CANAUX
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, margin: '0 0 28px' }}>
              LES CANAUX<br />
              LES PLUS<br />
              PERFORMANTS
            </h2>
            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 3, background: 'rgba(255,255,255,0.15)', flexShrink: 0, alignSelf: 'stretch' }} />
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                SEO, SEA, Content Marketing
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <Image
                src="/images/media/darwin-generation-leads-qualifie.jpeg"
                alt="Stratégie de génération de leads B2B chez DARWIN"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
              />
              <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
              Stratégie d&apos;acquisition B2B — équipe Média DARWIN
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEWSLETTER — INSERTION MID-CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="glb2b-nl-wrap">
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTENT MARKETING ET THOUGHT LEADERSHIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="glb2b-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              STRATÉGIE DE CONTENU
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              CONTENT MARKETING<br />ET THOUGHT LEADERSHIP
            </h2>
          </div>

          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 40px' }}>
            En B2B, la confiance précède la conversion. Un prospect qui signe un contrat à 50 000 € avec une agence qu&apos;il ne connaissait pas la semaine précédente, ça n&apos;existe pas. La relation se construit avant même le premier contact commercial.
          </p>

          <div className="glb2b-canaux-grid">
            {[
              {
                label: 'CONTENT MARKETING',
                text: "Publier des articles sur les enjeux de votre secteur, produire des études, partager des retours d'expérience concrets — tout cela installe votre expertise dans l'esprit du prospect bien avant qu'il soit en situation d'achat.",
              },
              {
                label: 'THOUGHT LEADERSHIP',
                text: "Le thought leadership — littéralement le leadership d'opinion — va un cran plus loin. Il ne s'agit plus seulement de produire du contenu utile, mais de prendre position. D'avoir un point de vue défendable, parfois à contre-courant, toujours ancré dans une réalité opérationnelle. Les décideurs B2B font confiance aux gens qui osent avoir une opinion, pas à ceux qui répètent les généralités du marché.",
              },
              {
                label: 'WEBINAIRES & LIVE',
                text: "Les webinaires et les formats live s'ajoutent au dispositif avec un effet mesurable sur le pipeline. L'inscription crée un acte d'engagement. La présence confirme l'intérêt. Les échanges en direct sont souvent le déclencheur d'une conversation commerciale qualifiée.",
              },
            ].map((canal) => (
              <div key={canal.label} style={{ background: '#fff', padding: '44px 40px' }}>
                <p className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 16px', letterSpacing: '0.06em' }}>
                  {canal.label}
                </p>
                <p className="body-text" style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.9, margin: 0 }}>
                  {canal.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LINKEDIN ADS ET SOCIAL SELLING
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="glb2b-section-pad" style={{ background: '#fff' }}>
        <div className="glb2b-grid-sidebar">

          <div className="glb2b-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
              LINKEDIN
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.15, margin: 0 }}>
              LINKEDIN ADS<br />ET SOCIAL<br />SELLING :<br />LE DUO<br />GAGNANT
            </h2>
          </div>

          <div>
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }}>
              LinkedIn est un réseau social incontournable en B2B. C&apos;est la seule plateforme où vous pouvez cibler par intitulé de poste, taille d&apos;entreprise, secteur d&apos;activité et niveau hiérarchique en même temps. Cette granularité de ciblage n&apos;existe nulle part ailleurs.
            </p>

            <div style={{ background: '#f5f5f5', padding: '32px 36px', borderLeft: '3px solid #0a0a0a', marginBottom: 28 }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Les LinkedIn Ads permettent de toucher des décisionnaires que vous n'auriez jamais pu atteindre en organique. Les formats Lead Gen Form — formulaires pré-remplis intégrés à la plateforme — réduisent la friction et améliorent significativement les taux de conversion. Le coût par lead est souvent plus élevé qu'en Google Ads, mais la qualité des prospects justifie généralement cet écart, surtout sur les ventes B2B à forte valeur." }} />
            </div>

            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le social selling s'appuie sur des actions organiques : publier du contenu à forte valeur ajoutée, commenter de manière pertinente, entrer en contact avec des prospects ciblés via des messages personnalisés. C'est chronophage si mal structuré. Mais quand une équipe commerciale adopte une discipline de publication régulière — éventuellement après une formation courte aux codes LinkedIn — les résultats en inbound sont réels et mesurables sur trois à six mois." }} />

            <div style={{ background: '#FFF127', padding: '32px 36px', borderLeft: '3px solid #0a0a0a' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "La combinaison Ads + social selling crée un effet de présence puissant. Le prospect vous voit dans son fil d'actualité, puis voit votre publicité, puis reçoit un message. La répétition du signal accélère la conversion — à condition de rester utile, pas intrusif." }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CAPTER LES PROSPECTS AVANT VOS CONCURRENTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="glb2b-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              SEO B2B
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              CAPTER LES PROSPECTS<br />AVANT VOS CONCURRENTS
            </h2>
          </div>

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 40px' }} dangerouslySetInnerHTML={{ __html: "Le SEO en B2B répond à une logique d'intention. Quand un directeur marketing tape « comment réduire mon coût par lead en B2B », il est en phase de recherche d'information. Quand il tape « agence génération de leads B2B Paris », il est en phase de sélection. Ces deux requêtes méritent des contenus différents — mais les deux méritent d'être adressées par votre stratégie éditoriale." }} />

          <div className="glb2b-metrics-grid">
            {[
              {
                num: '01',
                text: "La construction d'un cocon sémantique autour des enjeux, besoins et objections de votre audience est la base. Chaque page traite un aspect précis du sujet, répond à une question spécifique, et renvoie vers les pages connexes. Google perçoit cette profondeur de traitement comme un signal d'expertise.",
              },
              {
                num: '02',
                text: "Les prospects y trouvent les réponses qu'ils cherchent — et associent progressivement votre marque à leur problématique.",
              },
              {
                num: '03',
                text: "Un contenu SEO bien construit sur une thématique B2B ciblée peut remonter en première page en trois à six mois. Et contrairement à la publicité payante, il continue de générer des leads sans budget mensuel supplémentaire.",
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
          CTA — ACCOMPAGNEMENT DARWIN
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="glb2b-section-pad-lg" style={{ background: '#0a0a0a' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
            ACCOMPAGNEMENT DARWIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, margin: '0 0 40px' }}>
            NOTRE ACCOMPAGNEMENT<br />
            EN GÉNÉRATION DE LEADS B2B
          </h2>

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "DARWIN accompagne des entreprises B2B à différents stades : celles qui partent de zéro et cherchent à structurer leur premier canal d'acquisition, et celles qui ont déjà un dispositif en place mais veulent l'optimiser." }} />

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Notre approche commence toujours par l'analyse de votre pipeline actuel et de votre base de leads, avec les meilleurs outils de prospection B2B du marché. Quels canaux génèrent du volume ? Lesquels convertissent ? Où se produisent les ruptures dans le parcours prospect ? Cette lecture de vos données permet de qualifier chaque lead, de vérifier la qualité réelle des prospects entrants et d'adapter la stratégie aux résultats observés — pas aux résultats espérés." }} />

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, margin: '0 0 48px' }} dangerouslySetInnerHTML={{ __html: "On construit ensuite un plan d'action priorisé, centré sur les canaux les plus pertinents pour votre audience B2B, vos ressources et vos objectifs commerciaux. SEO, SEA, LinkedIn Ads, contenu, nurturing : chaque levier est activé avec un objectif précis, un budget cadré et des KPIs définis dès le départ. Vous avez chez DARWIN un interlocuteur qui connaît votre secteur, qui reste dans la durée, et qui vous rend des comptes sur ce qui fonctionne vraiment. Pas sur des impressions ou des clics. Sur des prospects qualifiés, des conversations commerciales ouvertes et des contrats signés." }} />

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
      <section className="glb2b-section-clip">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', margin: '0 0 12px' }}>
            POUR ALLER PLUS LOIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 48px' }}>
            PAGES LIÉES À LA GÉNÉRATION DE LEADS
          </h2>
          <div className="glb2b-links-grid">
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
                label: 'Étapes de Qualification d\'un Lead',
                desc: 'Du premier contact au lead qualifié : les étapes pour filtrer et prioriser.',
                href: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead',
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
