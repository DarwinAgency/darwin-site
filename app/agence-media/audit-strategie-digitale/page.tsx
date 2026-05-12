// ─────────────────────────────────────────────────────────
// FICHIER : app/agence-media/audit-strategie-digitale/page.tsx
// RÔLE    : Sous-page "Audit Stratégie Digitale" — spoke de la page mère Agence Média
// DÉPEND  : app/agence-media/page.tsx (page mère / hub)
// ─────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../../lib/darwin'
import { serviceJsonLd, breadcrumbJsonLd } from '../../lib/jsonld'
import { ogDefaults } from '../../lib/og'

// ─── METADATA ───────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Audit Stratégie Digitale | Optimisez votre Mix Marketing | DARWIN',
  description: "Identifiez ce qui performe, ce qui stagne et ce qui coûte. DARWIN audite votre stratégie digitale, levier par levier, avec un plan d'action priorisé.",
  alternates: { canonical: '/agence-media/audit-strategie-digitale' },
  openGraph: {
    ...ogDefaults,
    title: 'Audit Stratégie Digitale | Optimisez votre Mix Marketing | DARWIN',
    description: "Diagnostic complet de votre présence digitale\u00A0: SEO, SEA, emailing, social, contenu. Recommandations chiffrées et plan d'action priorisé.",
    url: 'https://darwin-agency.fr/agence-media/audit-strategie-digitale',
  },
}

// ─── DATA ────────────────────────────────────────────────

const auditPillars = [
  {
    id: '01',
    title: 'Audit stratégie digitale par levier',
    desc: "On passe au crible chaque canal actif\u00A0: sa contribution réelle au chiffre d'affaires, son coût d'acquisition, sa cohérence avec votre cible. Référencement naturel, LLM, référencement payant, emailing, DOOH, réseaux sociaux. Rien n'est laissé de côté. Nous évaluons votre communication digitale dans sa globalité, pour l'ensemble du parcours, y compris l'expérience vécue par vos visiteurs à chaque point de contact.",
    items: ['Performance par canal et solution (volume, paramètres coût, conversion, messages)', 'Cohérence cibles stratégiques / audiences touchées', 'Alignement avec les objectifs', 'Identification des redondances et trous dans le parcours'],
  },
  {
    id: '02',
    title: 'Benchmark & positionnement',
    desc: "Vos KPIs ne suffisent pas. Nous intégrons des données de marché, des benchmarks sectoriels et des analyses concurrentielles pour situer votre performance dans un contexte réel. L'idée\u00A0: comprendre si votre stagnation est un problème spécifique ou une tendance de marché, et identifier les espaces de croissance que vos concurrents exploitent déjà.",
    items: ['Benchmarks sectoriels & données de marché', 'Analyse concurrentielle multi-leviers', 'Identification des opportunités non exploitées', 'Positionnement digital vs concurrents directs'],
  },
  {
    id: '03',
    title: 'Diagnostic stratégique vs opérationnel',
    desc: "L'audit se situe exactement à la jonction du <a href='/agence-media/audit-strategie-digitale/marketing-strategique-vs-marketing-operationnel' style='color:#29C5F5;text-decoration:underline;text-underline-offset:3px'>marketing stratégique et opérationnel</a>. D'un côté, il interroge la vision\u00A0: vos objectifs sont-ils clairs\u00A0? Votre positionnement est-il traduit dans vos actions digitales\u00A0? Votre segmentation reflète-t-elle la réalité de votre marché\u00A0? De l'autre, il plonge dans l'exécution\u00A0: vos campagnes atteignent-elles les bonnes personnes\u00A0? Vos plateformes sont-elles correctement paramétrées\u00A0? Vos données remontent-elles là où elles doivent remonter\u00A0? Votre présence est-elle sur les bons emplacements\u00A0? La plupart des problèmes de performance naissent dans le décalage entre ces deux niveaux. Pas dans un nouvel outil ou un budget supplémentaire. Dans la remise en cohérence de ce qui existe déjà.",
    items: ['Alignement vision stratégique / actions digitales', 'Évaluation du positionnement et de la segmentation', 'Vérification du paramétrage des outils', 'Détection des décalages stratégie/exécution'],
  },
  {
    id: '04',
    title: 'Opportunités & canaux manquants',
    desc: "On examine aussi ce qui manque\u00A0: les canaux sous-exploités, les données non collectées, les opportunités manquées, les pépites cachées. Des données mal collectées sont mal stockées et exploitées par vos plateformes publicitaires, un réseau social où votre cible est active mais où vous n'avez aucune présence en ligne, un format / emplacement que vous n'avez jamais testé, une place libre sur un sujet que vos concurrents n'adressent pas encore. L'audit révèle les angles morts de votre mix marketing et les transforme en leviers actionnables.",
    items: ['Cartographie des canaux sous-exploités', 'Segments d\'audience mal adressés', 'Formats et leviers non testés', 'Données CRM inexploitées'],
  },
]

const methodologySteps = [
  { num: '01', title: 'Définition du périmètre', desc: "On ne peut pas tout auditer avec la même profondeur en même temps. Il faut prioriser selon vos enjeux\u00A0: est-ce l'acquisition qui pose question\u00A0? La rétention\u00A0? La visibilité organique\u00A0? Le coût par lead\u00A0? Ce cadrage initial conditionne la pertinence de tout le reste." },
  { num: '02', title: 'Immersion & collecte', desc: "On collecte les données existantes\u00A0: analytics, CRM, outils publicitaires, rapports précédents, historique des actions. On échange avec vos équipes pour comprendre les choix passés, les contraintes internes, les objectifs qui ont évolué. L'information brute ne suffit pas, il faut la contextualiser." },
  { num: '03', title: 'Analyse & croisement des données', desc: "Pas uniquement vos KPIs\u00A0: on intègre aussi des données de marché, des benchmarks sectoriels, des analyses concurrentielles. L'idée est de situer votre performance dans un contexte réel, pas dans un vide. Canal par canal, avec une attention particulière aux interactions entre leviers. Un contenu bien référencé qui ne génère aucun lead, ce n'est pas forcément un problème de SEO. C'est peut-être un problème de parcours, de CTA, ou de ciblage en amont. Les silos d'analyse passent à côté de ces connexions. Nous croisons <a href='/agence-media/audit-strategie-digitale/indicateurs-de-performance-mix-marketing' style='color:#29C5F5;text-decoration:underline;text-underline-offset:3px'>les indicateurs de performance</a> pour révéler les vraies causes." },
  { num: '04', title: 'Formalisation des recommandations', desc: "Pas une liste à la Prévert. Un plan structuré, avec des priorités, des estimations de ressources nécessaires, et des indicateurs de suivi pour mesurer l'impact dans le temps. Ce livrable est conçu pour être actionnable immédiatement par votre équipe ou par un partenaire externe." },
]

const signals = [
  { label: 'Empilement sans architecture', desc: "Un canal ajouté ici, un outil adopté là, une campagne reconduite par habitude. Au fil du temps, le plan marketing ressemble davantage à un empilement qu'à une architecture. L'audit remet de l'ordre." },
  { label: 'Budget qui s\'envole, résultats qui stagnent', desc: "Vous continuez à investir dans des leviers dont vous ne mesurez plus vraiment l'impact. Vous hésitez à couper parce que vous ne savez pas ce qui tient et ce qui est du bruit." },
  { label: 'Pilotage à l\'intuition', desc: "Sans vision experte et consolidée de vos performances par canal, vous pilotez à l'intuition. C'est humain. Mais ça coûte cher, surtout quand les budgets se comptent en dizaines de milliers d'euros mensuels." },
  { label: 'Décalage stratégie / exécution', desc: "Une stratégie bien posée mais mal déployée. Ou des actions techniques solides, déconnectées d'un cap. L'audit met ces décalages en lumière. C'est souvent là que se trouvent les gains les plus immédiats." },
]

const caseStudies = [
  {
    client: 'Verisure',
    slug: 'verisure',
    levier: 'MÉDIA',
    result: '8K rendez-vous / mois',
    desc: "Structuration du levier SMS dans le mix média Verisure\u00A0: modèle de rémunération à la performance, segmentation fine, pilotage quotidien.",
    img: '/images/cas-clients/verisure-cover.jpg',
  },
  {
    client: 'Acadomia',
    slug: 'acadomia',
    levier: 'SMA · MÉDIA',
    result: '+65\u00A0% de leads générés / mois',
    desc: "Acquisition digitale multi-leviers\u00A0: emailing, display, retargeting et Social Ads orchestrés dans un tunnel de conversion cohérent.",
    img: '/images/cas-clients/acadomia-cover.jpg',
  },
]

// ─── JSON-LD ─────────────────────────────────────────────

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Audit Stratégie Digitale', url: '/agence-media/audit-strategie-digitale' },
])

const service = serviceJsonLd({
  name: 'Audit Stratégie Digitale',
  description: "Diagnostic complet de votre mix marketing digital\u00A0: chaque levier passé au crible, recommandations chiffrées et plan d'action priorisé.",
  url: '/agence-media/audit-strategie-digitale',
  keywords: ['audit stratégie digitale', 'audit mix marketing', 'diagnostic digital', 'optimisation leviers', 'plan marketing digital'],
})

// ─── PAGE ────────────────────────────────────────────────

export default function AuditStrategieDigitalePage() {
  return (
    <main>

      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div className="rsp-hero-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 600 }}>

          {/* ── Colonne gauche (contenu) ── */}
          <div className="rsp-hero-text" style={{ padding: '100px 64px 80px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <Link href="/agence-media" style={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'none' }}>Agence Média</Link>
              <span>/</span>
              <span style={{ color: 'rgba(0,0,0,0.6)' }}>Audit Stratégie Digitale</span>
            </nav>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, margin: '0 0 28px' }}>
              AUDIT STRATÉGIE<br />
              DIGITALE : OPTIMISEZ<br />
              VOTRE MIX MARKETING
            </h1>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40, textAlign: 'justify' }}>
              Vous investissez en digital depuis des années. Des campagnes tournent, vos annonces sont diffusées quotidiennement, des budgets sont investis. Mais sauriez-vous dire, à l&apos;instant T, ce qui fonctionne vraiment et les réseaux qui coûtent avec peu de résultats et de rentabilité&nbsp;? C&apos;est précisément la question à laquelle un <strong>audit de stratégie digitale</strong> apporte une réponse, en interne ou avec <Link href="/agence-media" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: '3px' }}>une agence média experte de votre mix marketing</Link>. Pas un diagnostic vague. Une lecture lucide et experte, levier par levier, pour reprendre la main.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none', padding: '16px 32px',
              }}>
                DEMANDER UN AUDIT →
              </Link>
            </div>
          </div>

          {/* ── Colonne droite (visuel décoratif) ── */}
          <div className="rsp-hero-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
            <div style={{
              background: '#f5f5f5',
              borderRadius: 2,
              border: '1px solid #e8e8e8',
              boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
              overflow: 'hidden',
              width: '100%',
              maxWidth: 520,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dashboard frame */}
                <rect x="30" y="20" width="260" height="180" rx="6" stroke="#0a0a0a" strokeWidth="2" />
                <line x1="30" y1="52" x2="290" y2="52" stroke="#e8e8e8" strokeWidth="1.5" />
                {/* Title dots */}
                <circle cx="50" cy="36" r="5" fill="#FFF127" /><circle cx="66" cy="36" r="5" fill="#e8e8e8" /><circle cx="82" cy="36" r="5" fill="#e8e8e8" />
                {/* Bar chart */}
                <rect x="55" y="145" width="30" height="40" fill="#e8e8e8" /><rect x="95" y="115" width="30" height="70" fill="#e8e8e8" /><rect x="135" y="85" width="30" height="100" fill="#FFF127" /><rect x="175" y="125" width="30" height="60" fill="#e8e8e8" /><rect x="215" y="95" width="30" height="90" fill="#29C5F5" />
                {/* Magnifying glass */}
                <circle cx="240" cy="235" r="28" stroke="#0a0a0a" strokeWidth="2.5" fill="none" /><line x1="260" y1="255" x2="285" y2="275" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />
                {/* Check mark */}
                <path d="M226 227 L236 237 L254 219" stroke="#FFF127" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Trend line */}
                <path d="M60 160 L100 140 L140 100 L180 115 L220 80" stroke="#0a0a0a" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.3" />
              </svg>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', marginTop: 20 }}>
                DIAGNOSTIC · ANALYSE · PLAN D&apos;ACTION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QU'EST-CE QU'UN AUDIT DE STRATÉGIE DIGITALE ── */}
      <section className="rsp-section" style={{ background: '#0a0a0a', padding: '80px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              DÉFINITION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05 }}>
              QU&apos;EST-CE QU&apos;UN AUDIT<br />DE STRATÉGIE DIGITALE&nbsp;?
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }}>
              L&apos;audit d&apos;une stratégie digitale, c&apos;est <strong style={{ color: '#fff' }}>un état des lieux structuré de votre présence</strong>{' '}sur internet et sur le digital, pour tous les canaux déployés&nbsp;: référencement naturel, LLM, référencement payant, emailing, DOOH, site web, SMS, outils de suivi analytics, collecte et stockage des informations. L&apos;objectif n&apos;est pas de tout remettre en cause. C&apos;est de comprendre où vous en êtes, de mesurer <Link href="/agence-media/audit-strategie-digitale/objectifs-marketing-digital" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>l&apos;écart entre vos objectifs et vos résultats réels</Link>, et d&apos;identifier de possibles points de friction qui potentiellement freinent votre performance.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }}>
              Concrètement, on passe au crible chaque levier actif&nbsp;: sa contribution réelle au chiffre d&apos;affaires, son coût d&apos;acquisition, sa cohérence avec votre cible. On examine aussi ce qui manque&nbsp;: les canaux sous-exploités, les données non collectées, les opportunités invisibles, les pépites cachées. On évalue votre communication digitale dans sa globalité, sur tous vos réseaux, y compris l&apos;expérience vécue par vos visiteurs à chaque point de contact.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, textAlign: 'justify' }}>
              Ce n&apos;est pas un rapport de plus. C&apos;est un outil de décision.
            </p>
          </div>
        </div>
      </section>

      {/* ── POURQUOI AUDITER ─────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '80px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 16 }}>
              POURQUOI UN AUDIT
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
              AUDIT&nbsp;: CE QUE VOUS<br />PERDEZ SANS LE SAVOIR
            </h2>
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }}>
              La plupart des entreprises déploient des campagnes digitales et activent des canaux d&apos;acquisition. Un canal ajouté ici, un outil adopté là, une stratégie reconduite car maîtrisée. Au fil du temps, <strong>le plan marketing ressemble davantage à un empilement</strong>{' '}qu&apos;à une architecture. Et c&apos;est normal, on construit en avançant, rarement en s&apos;arrêtant. Chaque technique adoptée s&apos;ajoute à la précédente, sans que personne ne prenne le temps de vérifier si l&apos;ensemble reste en ligne avec les ambitions de départ.
            </p>
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, textAlign: 'justify' }}>
              Le problème, c&apos;est que cette accumulation a un coût. Pas seulement financier. Elle dilue l&apos;effort, complique le pilotage, rend les arbitrages flous. On continue à investir dans des leviers dont on ne mesure plus vraiment l&apos;impact. On hésite à couper parce qu&apos;on ne sait pas ce qui tient et ce qui est du bruit. Auditer, c&apos;est reprendre de la hauteur. C&apos;est poser sur la table ce qui fonctionne, ce qui stagne et ce qui draine vos ressources pour un retour marginal. Sans cet exercice, vous pilotez à l&apos;intuition. C&apos;est humain. Mais ça coûte cher.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {signals.map(s => (
              <div key={s.label} style={{ display: 'flex', gap: 16, background: '#fff', padding: '20px 24px', borderLeft: '4px solid #0a0a0a' }}>
                <div>
                  <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a0a0a', margin: '0 0 6px' }}>{s.label}</p>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES 4 DIMENSIONS DE L'AUDIT ─────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              CE QUE COMPREND L&apos;AUDIT
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
              AUDIT STRATÉGIE DIGITALE&nbsp;:<br />4 DIMENSIONS, UN DIAGNOSTIC COMPLET
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {auditPillars.map((pillar, i) => (
              <div key={pillar.id} style={{
                background: i % 2 === 0 ? '#fafafa' : '#fff',
                border: '1px solid #ebebeb',
                padding: '48px 40px',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20 }}>
                  <span className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#0a0a0a' }}>
                    {pillar.id}
                  </span>
                  <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1.1 }}>
                    {pillar.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: pillar.desc }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {pillar.items.map(item => (
                    <li key={item} style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0a0a0a', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 6, height: 6, background: '#FFF127', flexShrink: 0, display: 'inline-block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODOLOGIE ─────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fafafa', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-sidebar-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
            <div className="rsp-sticky" style={{ position: 'sticky', top: 120 }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
                NOTRE MÉTHODOLOGIE
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
                AUDIT EN 5 ÉTAPES,<br />0 APPROXIMATION
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                Chaque audit que nous menons suit un cadre rigoureux, mais il s&apos;adapte à la réalité de votre entreprise. Il n&apos;existe pas d&apos;audit standard, parce qu&apos;il n&apos;existe pas deux mix marketing identiques.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {methodologySteps.map((step, i) => (
                <div key={step.num} className="rsp-step-grid" style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr', gap: 40, alignItems: 'start',
                  background: '#fff',
                  borderLeft: '4px solid #0a0a0a',
                  padding: '40px 40px 40px 36px',
                  marginBottom: i < methodologySteps.length - 1 ? 12 : 0,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                  <p className="font-anton" style={{ fontSize: '3.2rem', lineHeight: 1, margin: 0, paddingTop: 4, color: '#0a0a0a' }}>
                    {step.num}
                  </p>
                  <div>
                    <h3 className="font-anton" style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#0a0a0a', letterSpacing: '0.06em', lineHeight: 1.4, margin: '0 0 16px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LE LIVRABLE ──────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '72px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 16 }}>
              CE QUE VOUS RECEVEZ
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
              AUDIT : UN PLAN D&apos;ACTION,<br />PAS UN DOCUMENT DE PLUS
            </h2>
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }}>
              À l&apos;issue de l&apos;audit, vous disposez d&apos;une vision complète et documentée de votre présence digitale. Plus précisément, vous repartez avec un diagnostic complet de chaque levier actif&nbsp;: ce qui performe, ce qui stagne, ce qui mobilise des ressources sans retour tangible. Un regard expert, extérieur, sur un ensemble que vous n&apos;avez plus le recul nécessaire pour évaluer depuis l&apos;intérieur.
            </p>
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, textAlign: 'justify' }}>
              Mais surtout, vous repartez avec un <strong>plan d&apos;action opérationnel</strong>. Des recommandations hiérarchisées, reliées à vos objectifs business, avec des étapes concrètes et un calendrier réaliste. Pas un idéal théorique. Un chemin praticable, <Link href="/agence-media/audit-strategie-digitale/mix-marketing-interne-ou-externe" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: '3px' }}>adapté à vos moyens et à votre organisation</Link>. C&apos;est la différence entre savoir qu&apos;il faut «&nbsp;faire mieux en digital&nbsp;» et savoir exactement par où commencer.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Diagnostic', value: 'Un diagnostic complet de chaque levier actif\u00A0: ce qui performe, ce qui stagne, ce qui mobilise des ressources sans retour tangible' },
              { label: 'Opportunités', value: 'Canaux ou formats non exploités, segments d\'audience mal touchés, données CRM inexploitées, angles que vous n\'aviez pas envisagés' },
              { label: 'Plan d\'action', value: 'Recommandations hiérarchisées, reliées à vos objectifs business, avec des étapes concrètes et un calendrier réaliste' },
              { label: 'Restitution', value: 'Pas un document de 80 pages que personne ne lira. Présentation en visio ou en présentiel avec votre équipe' },
              { label: 'Suivi', value: 'Indicateurs de suivi pour mesurer l\'impact dans le temps, chaque recommandation reliée à un objectif mesurable' },
            ].map(row => (
              <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>{row.label}</span>
                <span style={{ fontSize: '0.9rem', color: '#0a0a0a', lineHeight: 1.6 }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS CLIENTS ──────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fafafa', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
                RÉSULTATS
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, margin: 0 }}>
                ILS ONT FAIT AUDITER<br />LEUR STRATÉGIE PAR DARWIN
              </h2>
            </div>
            <Link href="/cas-clients" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #FFF127', paddingBottom: 2 }}>
              VOIR TOUS LES CAS →
            </Link>
          </div>
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {caseStudies.map(cas => (
              <div key={cas.slug} style={{ background: '#fff', border: '1px solid #e8e8e8', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={cas.img} alt={`Cas client ${cas.client}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <span style={{ position: 'absolute', top: 16, left: 16, background: '#FFF127', color: '#0a0a0a', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>
                    {cas.levier}
                  </span>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>{cas.client}</p>
                  <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 12px', lineHeight: 1.1 }}>{cas.result}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.7, margin: '0 0 20px' }}>{cas.desc}</p>
                  <Link href={`/cas-clients/${cas.slug}`} style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0a0a0a', borderBottom: '2px solid #FFF127', paddingBottom: 2, textDecoration: 'none' }}>
                    Voir le cas {cas.client} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI DARWIN ──────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px', borderTop: '1px solid #eee' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* LEFT — arguments */}
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              POURQUOI DARWIN
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 36 }}>
              AUDIT DARWIN&nbsp;: UNE ÉQUIPE<br />SENIOR, PAS UNE AGENCE DE PLUS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { title: 'Consultants seniors uniquement', desc: `Votre audit est réalisé par un consultant senior, pas sous-traité à un junior. ${DARWIN_YEARS} ans d'expertise dans le pilotage de mix marketing complexes.` },
                { title: 'Vision transversale native', desc: "SEO, SEA, SMA, Média, Analytics\u00A0: chez DARWIN, ces leviers sont gérés en interne. Chaque pôle est sollicité. L'audit bénéficie de cette vision intégrée, pas de silos." },
                { title: "Données réelles, pas d'estimations", desc: "On travaille sur vos données Analytics, CRM, outils publicitaires. Pas sur des outils tiers qui approximent votre performance." },
                { title: 'Plan d\'action opérationnel', desc: "Chaque recommandation est formulée avec son impact estimé, son effort et la personne responsable. Actionnable dès la restitution grâce aux quick wins (ces gains rapides sur les leviers existants)." },
                { title: 'Pas de vente déguisée', desc: "L'audit est un outil de décision, pas un prétexte pour vendre des prestations. Si votre mix est sain, on vous le dit. C'est l'occasion d'aller trouver de nouvelles opportunités et c'est notre spécialité." },
              ].map((item) => (
                <div key={item.title} style={{ padding: '20px 0', borderBottom: '1px solid #ebebeb' }}>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a0a0a', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo with editorial framing */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: '1px solid #ebebeb', borderRadius: 4, pointerEvents: 'none' }} />
              <Image
                src="/images/media/audit-equipe.jpg"
                alt="L'équipe DARWIN en session d'audit stratégie digitale"
                width={2560}
                height={1707}
                style={{ width: '100%', maxWidth: 520, height: 'auto', display: 'block', borderRadius: 4, position: 'relative', zIndex: 1 }}
              />
              <div style={{ position: 'absolute', bottom: -12, left: 0, width: 48, height: 3, background: '#FFF127', zIndex: 2 }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 24, lineHeight: 1.6, fontWeight: 500 }}>
              Carole Kabanda, Directrice du pôle média chez DARWIN
            </p>
          </div>

        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '96px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 24 }}>
            PREMIER ÉCHANGE
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1, margin: '0 0 24px' }}>
            VOTRE AUDIT<br />COMMENCE ICI
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', maxWidth: 520, margin: '0 auto 40px' }}>
            Décrivez-nous votre situation. Nous analysons votre mix marketing, vos leviers et vos opportunités. Réponse sous 24h ouvrées.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-block', background: '#0a0a0a', color: '#fff',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
            }}>
              DEMANDER MON AUDIT →
            </Link>
            <a href="tel:+33413570900" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1.5px solid rgba(0,0,0,0.25)', color: '#0a0a0a',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
            }}>
              +33 (0)4 13 57 09 00
            </a>
          </div>
        </div>
      </section>

      {/* ── LIENS INTERNES — PAGES SOEURS N1 ────────────── */}
      <section style={{ background: '#fafafa', padding: '80px 32px', borderTop: '1px solid #ebebeb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>
            POUR EN SAVOIR PLUS
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 48 }}>
            NOS AUTRES LEVIERS MÉDIA
          </h2>
          <div className="rsp-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { label: 'Plan média', desc: 'Canaux, formats, calendrier, budgets et KPIs de pilotage', href: '/agence-media/plan-media' },
              { label: 'Génération de leads', desc: 'Leads qualifiés au bon coût, de façon reproductible', href: '/agence-media/generation-de-leads' },
              { label: 'Campagnes emailing', desc: '35M+ adresses optin, méthodologie de pression marketing', href: '/agence-media/campagnes-emailing' },
              { label: 'SMS / RCS', desc: 'Messages enrichis, carrousels et conversations interactives', href: '/agence-media/campagnes-rcs-sms' },
              { label: 'Audio digital', desc: 'Podcasts, streaming, radio digitale', href: '/agence-media/audio-digital' },
              { label: 'TV segmentée & CTV', desc: 'Impact TV avec la précision du ciblage digital', href: '/agence-media/tv-segmentee-ctv' },
              { label: 'Campagnes DOOH', desc: 'Affichage digital extérieur en temps réel', href: '/agence-media/campagnes-dooh' },
            ].map(link => (
              <div key={link.href} className="levier-card" style={{ background: '#fff', overflow: 'hidden', border: '1px solid #ebebeb', borderTop: '3px solid #FFF127', padding: '28px 24px' }}>
                <p className="font-anton" style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1.2 }}>{link.label}</p>
                <p style={{ fontSize: '0.78rem', color: '#555', lineHeight: 1.6, margin: '0 0 16px' }}>{link.desc}</p>
                <Link href={link.href} style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Découvrir {link.label} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
