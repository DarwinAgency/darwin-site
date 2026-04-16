// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/generation-de-leads/comment-trouver-des-leads/page.tsx
// RÔLE    : Page conseil niveau 3 — comment trouver des leads qualifiés
// PARENT  : /agence-media/generation-de-leads
// TEMPLATE: Basé sur marketing-strategique-vs-marketing-operationnel
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { breadcrumbJsonLd, webPageJsonLd } from '../../../lib/jsonld'
import NewsletterCTA from '../../../components/NewsletterCTA'
import { ogDefaults } from '../../../lib/og'

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Comment Trouver des Leads Qualifiés ? Méthodes et Canaux — DARWIN',
  description: 'Comment trouver des leads qualifiés ? SEO, SEA, social ads, emailing : les meilleures sources, les pièges de l\'achat de leads et comment mesurer leur qualité.',
  alternates: { canonical: '/agence-media/generation-de-leads/comment-trouver-des-leads' },
  openGraph: {
    ...ogDefaults,
    title: 'Comment Trouver des Leads Qualifiés ? Méthodes et Canaux',
    description: 'Comment trouver des leads qualifiés ? SEO, SEA, social ads, emailing : les meilleures sources, les pièges de l\'achat de leads et comment mesurer leur qualité.',
    url: 'https://darwin-agency.fr/agence-media/generation-de-leads/comment-trouver-des-leads',
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Génération de Leads', url: '/agence-media/generation-de-leads' },
  { name: 'Comment Trouver des Leads', url: '/agence-media/generation-de-leads/comment-trouver-des-leads' },
])

const webpage = webPageJsonLd(
  'Comment Trouver des Leads Qualifiés ?',
  'Méthodes, canaux et indicateurs pour trouver des leads qualifiés et mesurer leur qualité.',
  '/agence-media/generation-de-leads/comment-trouver-des-leads'
)

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CommentTrouverDesLeadsPage() {
  return (
    <main>

      {/* ── JSON-LD ──────────────────────────────────────────────────────── */}
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />

      {/* ── RESPONSIVE CSS ───────────────────────────────────────────────── */}
      <style>{`
        .ctdl-hero-grid {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; min-height: 600px;
        }
        .ctdl-hero-text {
          padding: 100px 64px 80px 32px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .ctdl-hero-illus {
          display: flex; align-items: center; justify-content: center; padding: 40px;
        }
        .ctdl-grid-left {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 96px; align-items: start;
        }
        .ctdl-grid-right {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1.4fr 1fr; gap: 96px; align-items: start;
        }
        .ctdl-grid-sidebar {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 320px 1fr; gap: 96px; align-items: start;
        }
        .ctdl-sticky { position: sticky; top: 120px; }
        .ctdl-canaux-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e0e0e0; }
        .ctdl-metrics-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: #e0e0e0; }
        .ctdl-links-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ctdl-section-pad { padding: 80px 32px; }
        .ctdl-section-pad-lg { padding: 96px 32px; }
        .ctdl-section-clip {
          background: linear-gradient(135deg, #27D9E5 0%, #B8E000 100%);
          padding: 160px 32px 80px;
          clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
          margin-top: -80px;
        }
        .ctdl-nl-wrap { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        @media (max-width: 768px) {
          .ctdl-hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .ctdl-hero-text { padding: 72px 20px 48px; }
          .ctdl-hero-illus { display: none; }
          .ctdl-grid-left { grid-template-columns: 1fr; gap: 40px; }
          .ctdl-grid-right { grid-template-columns: 1fr; gap: 40px; }
          .ctdl-grid-sidebar { grid-template-columns: 1fr; gap: 36px; }
          .ctdl-sticky { position: static; }
          .ctdl-canaux-grid { grid-template-columns: 1fr; }
          .ctdl-metrics-grid { grid-template-columns: 1fr; }
          .ctdl-links-grid { grid-template-columns: 1fr; }
          .ctdl-section-pad { padding: 60px 20px; }
          .ctdl-section-pad-lg { padding: 72px 20px; }
          .ctdl-section-clip { padding: 120px 20px 60px; }
          .ctdl-nl-wrap { padding: 0 20px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — split 50/50
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div className="ctdl-hero-grid">

          {/* Colonne gauche — texte */}
          <div className="ctdl-hero-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <Link href="/agence-media" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Agence Média</Link>
              <span>/</span>
              <Link href="/agence-media/generation-de-leads" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Génération de Leads</Link>
              <span>/</span>
              <span style={{ color: 'rgba(0,0,0,0.6)' }}>Comment Trouver des Leads</span>
            </nav>

            <span style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '5px 14px', marginBottom: 28, alignSelf: 'flex-start',
            }}>
              ACQUISITION DE LEADS
            </span>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, margin: '0 0 28px' }}>
              COMMENT<br />
              TROUVER DES<br />
              LEADS QUALIFIÉS ?
            </h1>

            <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40, maxWidth: 460 }}>
              Beaucoup d&apos;entreprises ont un problème de volume. Elles veulent trouver des leads, plus de contacts, plus de noms dans le CRM. Pourtant, ce n&apos;est pas ça, la vraie difficulté. La vraie difficulté, c&apos;est de trouver des leads qualifiés — ceux qui correspondent réellement à votre offre, qui ont un besoin identifié et la capacité de passer à l&apos;achat. Un pipeline gonflé de prospects hors cible coûte cher en temps commercial, pénalise la performance de vente et fait chuter le taux de conversion. Autant partir sur de bonnes bases : les bons canaux d&apos;acquisition, les bons outils, les bonnes offres, dès le premier euro investi.
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

          {/* Colonne droite — illustration géométrique : entonnoir de qualification */}
          <div className="ctdl-hero-illus">
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

                {/* ── CONTACTS DISPERSÉS — haut ─────────────────── */}
                <circle cx="68"  cy="32" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="120" cy="18" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="175" cy="38" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="215" cy="15" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="260" cy="35" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="310" cy="20" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="355" cy="40" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="395" cy="22" r="3.5" fill="rgba(0,0,0,0.12)"/>
                <circle cx="95"  cy="52" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="145" cy="55" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="240" cy="50" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="290" cy="48" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="340" cy="58" r="3.5" fill="rgba(0,0,0,0.10)"/>
                <circle cx="380" cy="52" r="3.5" fill="rgba(0,0,0,0.10)"/>

                {/* ── LABEL CONTACTS ───────────────────────────── */}
                <text x="230" y="78" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.2em">CONTACTS</text>

                {/* ── ENTONNOIR — structure ─────────────────────── */}
                {/* Bord gauche */}
                <line x1="80" y1="90" x2="185" y2="220" stroke="#0a0a0a" strokeWidth="1.5"/>
                {/* Bord droit */}
                <line x1="380" y1="90" x2="275" y2="220" stroke="#0a0a0a" strokeWidth="1.5"/>
                {/* Ouverture haute */}
                <line x1="80" y1="90" x2="380" y2="90" stroke="#0a0a0a" strokeWidth="1.5"/>
                {/* Sortie basse */}
                <line x1="185" y1="220" x2="275" y2="220" stroke="#0a0a0a" strokeWidth="1.5"/>

                {/* Grille de filtrage — au milieu de l'entonnoir */}
                <line x1="118" y1="140" x2="342" y2="140" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="4,4"/>
                <line x1="145" y1="175" x2="315" y2="175" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3,5"/>

                {/* Dots en cours de filtrage — dans l'entonnoir */}
                <circle cx="150" cy="108" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="200" cy="112" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="250" cy="105" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="300" cy="115" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="340" cy="108" r="3" fill="rgba(0,0,0,0.15)"/>
                <circle cx="175" cy="118" r="3" fill="rgba(0,0,0,0.12)"/>
                <circle cx="280" cy="120" r="3" fill="rgba(0,0,0,0.12)"/>
                <circle cx="130" cy="112" r="3" fill="rgba(0,0,0,0.12)"/>

                {/* Dots passant le filtre — plus rares */}
                <circle cx="210" cy="158" r="3" fill="rgba(0,0,0,0.18)"/>
                <circle cx="255" cy="155" r="3" fill="rgba(0,0,0,0.18)"/>
                <circle cx="230" cy="165" r="3" fill="rgba(0,0,0,0.18)"/>
                <circle cx="195" cy="190" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
                <circle cx="245" cy="195" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
                <circle cx="265" cy="188" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>

                {/* ── LEADS QUALIFIÉS — sortie ──────────────────── */}
                {/* Flèche de sortie */}
                <line x1="230" y1="220" x2="230" y2="248" stroke="#0a0a0a" strokeWidth="1.5"/>
                <polygon points="224,248 230,258 236,248" fill="#0a0a0a"/>

                {/* Leads qualifiés */}
                <circle cx="205" cy="272" r="5" fill="#29C5F5"/>
                <circle cx="230" cy="275" r="5" fill="#29C5F5"/>
                <circle cx="255" cy="272" r="5" fill="#29C5F5"/>

                {/* ── LABEL LEADS QUALIFIÉS ────────────────────── */}
                <text x="230" y="295" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.15em">LEADS QUALIFIÉS</text>

              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QU'EST-CE QU'UN LEAD QUALIFIÉ ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="ctdl-section-pad" style={{ background: '#FFF127' }}>
        <div className="ctdl-grid-left">

          <div className="ctdl-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', margin: '0 0 20px' }}>
              DÉFINITION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.1, margin: '0 0 28px' }}>
              QU&apos;EST-CE<br />
              QU&apos;UN LEAD<br />
              QUALIFIÉ ?
            </h2>
          </div>

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Un lead, c'est un contact qui a montré un intérêt pour votre produit ou service. Mais un <strong>lead qualifié</strong>, c'est plus précis que ça. C'est un prospect dont vous avez pu vérifier — via des <strong>données concrètes</strong> et des informations fiables issues de votre base marketing — qu'il remplit les critères de votre <strong>client idéal</strong>." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#0a0a0a', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Ces critères varient selon votre activité. En <strong>B2B</strong>, on regarde souvent la taille de l'entreprise, le secteur, la fonction du décisionnaire, le budget disponible. En <strong>BtoC</strong>, on s'intéresse plutôt au comportement : pages visitées, durée de session, formulaire rempli, téléchargement d'un contenu gratuit, ajout au panier. Ce qui compte, ce n'est pas le nombre de leads dans votre base. C'est la <strong>proportion de leads qualifiés</strong> parmi eux." }} />
            <div style={{ background: 'rgba(255,255,255,0.6)', borderLeft: '3px solid #0a0a0a', padding: '24px 28px' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Reste que cette notion est souvent floue en interne. Marketing et équipe commerciale n'ont pas toujours la même définition du prospect qualifié. C'est un problème. Et le résoudre commence par <strong>aligner ces deux équipes autour de critères communs, formalisés, partagés</strong> — et appliqués à chaque lead entrant." }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LES MEILLEURES SOURCES POUR TROUVER DES LEADS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="ctdl-section-pad" style={{ background: '#0a0a0a' }}>
        <div className="ctdl-grid-right">

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Il n'existe pas de canal universel. Chaque source de génération de leads a ses logiques, ses coûts et ses profils de prospects. Ce qui fonctionne pour un éditeur SaaS ne fonctionne pas forcément pour un réseau de franchises." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Le <strong>SEO</strong> reste l'un des <strong>canaux d'acquisition les plus rentables</strong> sur la durée. Un contenu optimisé et à forte valeur attire des visiteurs à intention d'achat — des gens qui cherchent activement une solution. <strong>Le coût par lead qualifié diminue mois après mois</strong>, contrairement aux campagnes payantes qui s'arrêtent dès qu'on coupe le budget." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Les campagnes <strong>SEA</strong> — Google Ads en tête — permettent d'aller plus vite. On cible des requêtes commerciales précises, on capte le prospect au bon moment du cycle d'achat. Le coût par clic est plus élevé qu'en organique, mais la conversion peut être immédiate. C'est souvent la <strong>combinaison SEO + SEA</strong> qui donne les meilleurs résultats sur le moyen terme." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Les <strong>social ads</strong> changent de registre. Sur Meta ou LinkedIn selon votre cible B2B ou grand public, on ne répond plus à une intention de recherche, on crée l'intérêt. Ces plateformes publicitaires sont puissantes pour toucher des profils précis, générer des leads via des <strong>formulaires natifs</strong>, ou relancer des visiteurs déjà passés sur votre site." }} />
            <div style={{ borderLeft: '3px solid #FFF127', padding: '24px 28px', background: 'rgba(255,255,255,0.06)' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "L'emailing de prospection, enfin, reste largement sous-estimé. Sur une base bien segmentée, une séquence courte et bien écrite produit un retour de conversion exceptionnel pour un coût faible. <strong>Le ciblage est chirurgical.</strong> Seule condition : une <strong>base de qualité, fraîche, conforme</strong>. Et c'est là que les écarts se creusent entre une opération rentable et un budget parti en fumée." }} />
            </div>
          </div>

          <div className="ctdl-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 20px' }}>
              SOURCES
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, margin: '0 0 28px' }}>
              LES MEILLEURES<br />
              SOURCES POUR<br />
              TROUVER<br />
              DES LEADS
            </h2>
            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 3, background: 'rgba(255,255,255,0.15)', flexShrink: 0, alignSelf: 'stretch' }} />
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                SEO, SEA, Social Ads, Emailing
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <Image
                src="/images/media/darwin-generation-leads-qualifie.jpeg"
                alt="Jérôme Renard, Directeur associé DARWIN, en présentation Lead Generation"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
              />
              <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
              Jérôme Renard, Directeur associé — en présentation Lead Generation
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEWSLETTER — INSERTION MID-CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="ctdl-nl-wrap">
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SEO, SEA, SOCIAL ADS, EMAILING : QUEL CANAL POUR QUEL USAGE ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="ctdl-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              COMPARATIF
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              QUEL CANAL<br />POUR QUEL USAGE ?
            </h2>
          </div>

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 40px' }} dangerouslySetInnerHTML={{ __html: "Ces quatre canaux ne s'opposent pas. Ils se complètent. La vraie question, c'est : qu'est-ce que vous cherchez à faire, et dans quel délai ?" }} />

          <div className="ctdl-canaux-grid">
            {[
              {
                label: 'SEO',
                text: "Le SEO construit une <strong>acquisition durable</strong>. C'est un investissement en contenu, en stratégie éditoriale et en données dont les effets se mesurent sur <strong>6 à 18 mois</strong>. Pour une entreprise qui veut réduire sa dépendance au budget publicitaire, c'est incontournable.",
              },
              {
                label: 'SEA',
                text: "Le SEA offre une <strong>visibilité immédiate</strong> sur des requêtes à <strong>forte intention commerciale</strong>. C'est le canal privilégié pour tester une offre, lancer un nouveau produit, ou compenser en attendant que le SEO monte en puissance.",
              },
              {
                label: 'SOCIAL ADS',
                text: "Les social ads excellent dans la <strong>génération de notoriété</strong> et la capture de leads à des stades précoces du cycle d'achat. <strong>LinkedIn est particulièrement performant en B2B</strong> pour cibler des décisionnaires par fonction, secteur ou taille d'entreprise.",
              },
              {
                label: 'EMAILING',
                text: "L'emailing s'appuie sur une donnée existante — collectée en propre, partenaire ou issue d'une base louée. Il est efficace pour réactiver des contacts dormants, nourrir des prospects en phase de réflexion, ou déclencher une action sur une offre précise. <strong>La personnalisation du message fait toute la différence.</strong>",
              },
            ].map((canal) => (
              <div key={canal.label} style={{ background: '#fff', padding: '44px 40px' }}>
                <p className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 16px', letterSpacing: '0.06em' }}>
                  {canal.label}
                </p>
                {/* eslint-disable-next-line react/no-danger */}
                <p className="body-text" style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: canal.text }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ACHETER DES LEADS OU LES GÉNÉRER SOI-MÊME ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="ctdl-section-pad" style={{ background: '#fff' }}>
        <div className="ctdl-grid-sidebar">

          <div className="ctdl-sticky">
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
              ARBITRAGE
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.15, margin: 0 }}>
              ACHETER<br />DES LEADS<br />OU LES<br />GÉNÉRER<br />SOI-MÊME ?
            </h2>
          </div>

          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "C'est la question qui divise. L'achat de leads est séduisant sur le papier : des contacts immédiatement disponibles, un coût apparent maîtrisé, pas besoin d'attendre. En pratique, c'est souvent décevant." }} />

            <div style={{ background: '#f5f5f5', padding: '32px 36px', borderLeft: '3px solid #0a0a0a', marginBottom: 28 }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Les leads achetés sont <strong>rarement exclusifs</strong>. Le même prospect reçoit des sollicitations de cinq concurrents en même temps. La qualité est variable, la pertinence contestable. Et surtout, vous ne contrôlez pas les <strong>critères de sélection</strong> ni la fraîcheur des informations." }} />
            </div>

            {/* eslint-disable-next-line react/no-danger */}
            <p className="body-text" style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Générer ses propres leads demande plus d'investissement initial — en contenu, en personnel, en outils de marketing. Mais les leads produits en interne sont <strong>plus qualifiés, plus engagés, et moins coûteux</strong> sur le long terme. Ils ont volontairement interagi avec votre marque. Ce n'est pas neutre." }} />

            <div style={{ background: '#FFF127', padding: '32px 36px', borderLeft: '3px solid #0a0a0a' }}>
              {/* eslint-disable-next-line react/no-danger */}
              <p className="body-text" style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: "L'achat peut rester utile dans certains cas : phase de lancement, besoin de volume rapide, secteur où l'audience organique est trop lente à construire. <strong>C'est un accélérateur ponctuel, pas un moteur.</strong>" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MESURER LA QUALITÉ DE VOS LEADS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="ctdl-section-pad" style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 16px' }}>
              INDICATEURS
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.2, margin: 0 }}>
              MESURER LA QUALITÉ<br />DE VOS LEADS
            </h2>
          </div>

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, maxWidth: 720, margin: '0 0 40px' }} dangerouslySetInnerHTML={{ __html: "Trouver des leads ne suffit pas. Il faut savoir s'ils valent quelque chose. Plusieurs indicateurs permettent de piloter cette qualité et d'ajuster la stratégie d'acquisition dans le temps." }} />

          <div className="ctdl-metrics-grid">
            {[
              {
                num: '01',
                text: "Le <strong>taux de conversion lead-to-client</strong> est le plus direct. Sur 100 leads entrants, combien deviennent des clients ? Un taux faible peut signaler que vos sources de génération sont mal ciblées — ou que la qualification en aval est insuffisante.",
              },
              {
                num: '02',
                text: "Le <strong>coût par lead qualifié</strong> est plus pertinent que le coût par lead brut. Si vous payez 5 € par lead SEA mais que seuls 10 % sont qualifiés, <strong>votre coût réel est de 50 €</strong>. Intégrer cette dimension change radicalement la lecture des performances, et oriente les arbitrages budgétaires vers les sources vraiment rentables.",
              },
              {
                num: '03',
                text: "Le <strong>délai de conversion</strong> complète le tableau. Un lead qui met trois mois à se décider n'a pas la même valeur qu'un prospect prêt à signer en deux semaines. La rapidité du cycle d'achat dit beaucoup sur la <strong>température du prospect</strong> au moment de l'entrée en base — et sur la qualité de votre qualification initiale.",
              },
            ].map((metric) => (
              <div key={metric.num} style={{ background: '#fff', padding: '44px 40px' }}>
                <p className="font-anton" style={{ fontSize: '2.4rem', color: '#e0e0e0', margin: '0 0 20px', lineHeight: 1 }}>
                  {metric.num}
                </p>
                {/* eslint-disable-next-line react/no-danger */}
                <p className="body-text" style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: metric.text }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — COMMENT DARWIN VOUS AIDE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="ctdl-section-pad-lg" style={{ background: '#0a0a0a' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
            ACCOMPAGNEMENT DARWIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, margin: '0 0 40px' }}>
            COMMENT DARWIN VOUS AIDE<br />
            À TROUVER DES LEADS QUI CONVERTISSENT
          </h2>

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Chez DARWIN, on ne vend pas des leads. On construit les conditions pour que vous en trouviez <strong>en continu</strong>, sur les <strong>bons canaux</strong>, avec le <strong>bon message</strong>, pour les <strong>bonnes cibles</strong>." }} />

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "Notre approche commence par un audit de votre acquisition actuelle : quelles sources génèrent vos leads aujourd'hui, lesquelles convertissent vraiment, et où se perdent les prospects dans votre tunnel. Cette analyse de données est souvent révélatrice — elle met à plat les biais du reporting classique." }} />

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, margin: '0 0 28px' }} dangerouslySetInnerHTML={{ __html: "On active ensuite ou on optimise les canaux les plus pertinents pour votre entreprise, votre secteur et vos objectifs commerciaux. SEO, SEA, social ads, emailing de prospection, contenu : <strong>pas de dogme</strong>, juste la combinaison qui marche pour votre profil client et votre offre." }} />

          {/* eslint-disable-next-line react/no-danger */}
          <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, margin: '0 0 48px' }} dangerouslySetInnerHTML={{ __html: "Le <strong>reporting en temps réel</strong> fait partie intégrante de notre service. Vous suivez vos leads, leur source, leur coût et leur taux de conversion — sans attendre la réunion mensuelle pour savoir si ça avance." }} />

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
      <section className="ctdl-section-clip">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', margin: '0 0 12px' }}>
            POUR ALLER PLUS LOIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 48px' }}>
            PAGES LIÉES À LA GÉNÉRATION DE LEADS
          </h2>
          <div className="ctdl-links-grid">
            {[
              {
                label: 'Génération de Leads',
                desc: 'Stratégies et méthodes pour attirer des prospects qualifiés en continu.',
                href: '/agence-media/generation-de-leads',
              },
              {
                label: 'Générer des Leads en B2B',
                desc: 'Les leviers spécifiques pour capter des décisionnaires en B2B.',
                href: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b',
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
