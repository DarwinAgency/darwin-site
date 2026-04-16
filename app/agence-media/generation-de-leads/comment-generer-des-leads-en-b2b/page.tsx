// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b/page.tsx
// RÔLE    : Page conseil niveau 3 — V2 article layout avec sidebar sticky
// PARENT  : /agence-media/generation-de-leads
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { breadcrumbJsonLd, webPageJsonLd } from '../../../lib/jsonld'
import NewsletterCTA from '../../../components/NewsletterCTA'
import { ogDefaults } from '../../../lib/og'
import ArticleLayoutV2 from '../../../components/ArticleLayoutV2'

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

const jsonLdBreadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Génération de Leads', url: '/agence-media/generation-de-leads' },
  { name: 'Leads B2B', url: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b' },
])

const jsonLdWebpage = webPageJsonLd(
  'Comment Générer des Leads en B2B ?',
  'LinkedIn, content marketing, SEO, webinaires : les stratégies les plus efficaces pour alimenter votre pipeline B2B.',
  '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b'
)

const tocItems = [
  { id: 'specificites', label: 'Ce qui différencie le B2B' },
  { id: 'canaux', label: 'Canaux les plus performants' },
  { id: 'content-marketing', label: 'Content marketing & thought leadership' },
  { id: 'linkedin', label: 'LinkedIn Ads & social selling' },
  { id: 'seo-b2b', label: 'SEO en B2B' },
  { id: 'accompagnement', label: 'Accompagnement DARWIN' },
]

const relatedPages = [
  { href: '/agence-media/generation-de-leads', label: 'Génération de Leads', desc: 'Stratégies et méthodes pour attirer des prospects qualifiés' },
  { href: '/agence-media/generation-de-leads/comment-trouver-des-leads', label: 'Comment Trouver des Leads', desc: 'Sources, canaux et méthodes pour votre pipeline' },
  { href: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead', label: 'Qualification d\'un Lead', desc: 'Du premier contact au lead qualifié' },
]

const essentialPoints = [
  'En B2B, les cycles d\'achat sont longs et les décisions collectives — la génération de leads exige une stratégie multi-touch pensée sur la durée.',
  'Le SEO capte les prospects en recherche active, le SEA teste rapidement, le content marketing construit la crédibilité sur le long terme.',
  'LinkedIn est la seule plateforme permettant de cibler par poste, secteur et niveau hiérarchique — la combinaison Ads + social selling accélère la conversion.',
  'Le thought leadership positionne votre entreprise comme référence : les décideurs B2B font confiance à ceux qui osent prendre position.',
  'DARWIN structure votre acquisition B2B de bout en bout : audit du pipeline, activation des canaux pertinents, pilotage sur les résultats réels.',
]

export default function CommentGenererDesLeadsEnB2BPage() {
  return (
    <ArticleLayoutV2
      jsonLd={[jsonLdBreadcrumbs, jsonLdWebpage]}
      breadcrumbs={[
        { href: '/', label: 'Accueil' },
        { href: '/agence-media', label: 'Agence Média' },
        { href: '/agence-media/generation-de-leads', label: 'Génération de Leads' },
        { label: 'Leads B2B' },
      ]}
      title={<>COMMENT GÉNÉRER<br />DES LEADS EN B2B&nbsp;?</>}
      intro="En B2B, la génération de leads ne ressemble à rien de ce qu'on fait en BtoC. Les cycles d'achat sont longs. Les décisions sont collectives. Un projet peut mettre six mois à se concrétiser — et encore, si vous avez parlé au bon interlocuteur dès le départ. Attirer un prospect ne suffit pas. Il faut l'atteindre au bon moment, avec le bon message, et rester présent tout au long de sa réflexion. C'est ça, la génération de leads B2B. Et c'est loin d'être simple."
      shareUrl="/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b"
      shareTitle="Comment Générer des Leads en B2B ? Stratégies efficaces"
      heroIllustration={
        <svg viewBox="0 0 460 300" width="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block' }}>
          {/* Buildings */}
          <rect x="45" y="20" width="18" height="28" fill="rgba(0,0,0,0.12)" rx="1"/>
          <rect x="48" y="24" width="4" height="4" fill="#f5f5f5"/><rect x="56" y="24" width="4" height="4" fill="#f5f5f5"/>
          <rect x="48" y="32" width="4" height="4" fill="#f5f5f5"/><rect x="56" y="32" width="4" height="4" fill="#f5f5f5"/>
          <rect x="105" y="15" width="22" height="33" fill="rgba(0,0,0,0.12)" rx="1"/>
          <rect x="109" y="19" width="4" height="4" fill="#f5f5f5"/><rect x="119" y="19" width="4" height="4" fill="#f5f5f5"/>
          <rect x="109" y="27" width="4" height="4" fill="#f5f5f5"/><rect x="119" y="27" width="4" height="4" fill="#f5f5f5"/>
          <rect x="175" y="22" width="16" height="26" fill="rgba(0,0,0,0.12)" rx="1"/>
          <rect x="178" y="26" width="4" height="4" fill="#f5f5f5"/><rect x="184" y="26" width="4" height="4" fill="#f5f5f5"/>
          <rect x="240" y="18" width="20" height="30" fill="rgba(0,0,0,0.12)" rx="1"/>
          <rect x="244" y="22" width="4" height="4" fill="#f5f5f5"/><rect x="252" y="22" width="4" height="4" fill="#f5f5f5"/>
          <rect x="310" y="20" width="18" height="28" fill="rgba(0,0,0,0.12)" rx="1"/>
          <rect x="313" y="24" width="4" height="4" fill="#f5f5f5"/><rect x="321" y="24" width="4" height="4" fill="#f5f5f5"/>
          <rect x="375" y="16" width="22" height="32" fill="rgba(0,0,0,0.12)" rx="1"/>
          <rect x="379" y="20" width="4" height="4" fill="#f5f5f5"/><rect x="389" y="20" width="4" height="4" fill="#f5f5f5"/>
          {/* Contact dots */}
          <circle cx="54" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
          <circle cx="116" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
          <circle cx="183" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
          <circle cx="250" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
          <circle cx="319" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
          <circle cx="386" cy="56" r="3" fill="rgba(0,0,0,0.10)"/>
          {/* Arrows to funnel */}
          <line x1="54" y1="62" x2="180" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
          <line x1="116" y1="62" x2="200" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
          <line x1="183" y1="62" x2="220" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
          <line x1="250" y1="62" x2="240" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
          <line x1="319" y1="62" x2="260" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
          <line x1="386" y1="62" x2="280" y2="90" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
          {/* Funnel */}
          <line x1="120" y1="95" x2="195" y2="200" stroke="#0a0a0a" strokeWidth="1.5"/>
          <line x1="340" y1="95" x2="265" y2="200" stroke="#0a0a0a" strokeWidth="1.5"/>
          <line x1="120" y1="95" x2="340" y2="95" stroke="#0a0a0a" strokeWidth="1.5"/>
          <line x1="195" y1="200" x2="265" y2="200" stroke="#0a0a0a" strokeWidth="1.5"/>
          {/* Filter lines */}
          <line x1="150" y1="130" x2="310" y2="130" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="168" y1="160" x2="292" y2="160" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3,5"/>
          {/* Filtering dots */}
          <circle cx="170" cy="110" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="210" cy="108" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="250" cy="112" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="290" cy="106" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="215" cy="145" r="3" fill="rgba(0,0,0,0.18)"/>
          <circle cx="250" cy="142" r="3" fill="rgba(0,0,0,0.18)"/>
          {/* Qualified leads */}
          <circle cx="215" cy="175" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
          <circle cx="245" cy="180" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
          <circle cx="260" cy="172" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
          {/* Exit arrow */}
          <line x1="230" y1="200" x2="230" y2="230" stroke="#0a0a0a" strokeWidth="1.5"/>
          <polygon points="224,230 230,240 236,230" fill="#0a0a0a"/>
          {/* Output leads */}
          <circle cx="210" cy="255" r="5" fill="#29C5F5"/>
          <circle cx="230" cy="258" r="5" fill="#FFF127"/>
          <circle cx="250" cy="255" r="5" fill="#29C5F5"/>
          {/* Label */}
          <text x="230" y="285" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.15em">CIBLER · ENGAGER · CONVERTIR</text>
        </svg>
      }
      tocItems={tocItems}
      relatedPages={relatedPages}
      essentialPoints={essentialPoints}
      author={{ name: 'Carole Kabanda', role: 'Directrice Media', photo: '/images/team/carole-kabanda.jpg' }}
      conclusion={
        <p dangerouslySetInnerHTML={{ __html: "On construit ensuite un <strong>plan d'action priorisé</strong>, centré sur les canaux les plus pertinents pour votre audience B2B, vos ressources et vos objectifs commerciaux. SEO, SEA, LinkedIn Ads, contenu, nurturing : chaque levier est activé avec un objectif précis, un budget cadré et des KPIs définis dès le départ. Vous avez chez DARWIN un interlocuteur qui connaît votre secteur, qui reste dans la durée, et qui vous rend des comptes sur ce qui fonctionne vraiment. Pas sur des impressions ou des clics. Sur des <strong>prospects qualifiés, des conversations commerciales ouvertes et des contrats signés</strong>." }} />
      }
    >
      <>
      {/* ═══════════════════════════════════════════════════════════════════
          CE QUI DIFFÉRENCIE VRAIMENT LA GÉNÉRATION DE LEADS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="specificites" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">SPÉCIFICITÉS</span>
          <h2 className="font-anton artv2-h2">Ce qui différencie vraiment la génération de&nbsp;leads</h2>
        </div>

        <p className="artv2-body">
          Le B2C parle à un individu. Le B2B parle à une organisation. Cette distinction change tout.
        </p>
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "En B2B, la décision d'achat implique rarement une seule personne. Il y a le décisionnaire, le prescripteur, parfois le DAF qui valide le budget, parfois une direction technique qui émet un avis. Chacun de ces profils a des <strong>attentes différentes</strong>, des objections spécifiques et une manière propre de s'informer. La campagne qui convertit un directeur marketing ne convertit pas forcément son DAF." }} />
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "La durée du <strong>cycle d'achat</strong> est sans commune mesure avec le grand public. Un prospect peut télécharger un contenu en janvier et signer un contrat en septembre. Entre les deux, il lit vos articles, regarde vos concurrents, assiste à un webinaire, échange avec un commercial. Ce parcours non linéaire exige une <strong>stratégie de contenu et de nurturing</strong> pensée sur la durée — pas une simple séquence d'emails déclenchée par un téléchargement." }} />

        <blockquote className="artv2-blockquote">
          <p>Enfin, les besoins B2B sont souvent complexes à formuler. L&apos;entreprise cliente ne cherche pas toujours un produit — elle cherche une solution à un problème qu&apos;elle a parfois du mal à nommer. Votre capacité à poser ce problème mieux qu&apos;elle-même devient un avantage compétitif direct.</p>
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LES CANAUX LES PLUS PERFORMANTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="canaux" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">CANAUX D&apos;ACQUISITION</span>
          <h2 className="font-anton artv2-h2">Les canaux les plus&nbsp;performants</h2>
        </div>

        <p className="artv2-body">
          Tous les canaux de génération de leads ne se valent pas en B2B. Certains excellent dans la capture de prospects chauds. D&apos;autres construisent la notoriété sur le long terme. L&apos;enjeu, c&apos;est de choisir la bonne combinaison selon votre audience, votre offre et votre stade de développement.
        </p>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">SEO</h3>
          <p dangerouslySetInnerHTML={{ __html: "Le <strong>SEO</strong> est fondamental pour capter des prospects en phase de recherche active. Une équipe marketing qui tape « agence génération leads B2B » est déjà engagée dans un processus de sélection. Être visible à ce moment-là, c'est être dans la short-list dès le départ. Construire un contenu SEO solide prend du temps, mais l'acquisition devient progressivement <strong>autonome</strong>, indépendante des budgets publicitaires mensuels." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">SEA</h3>
          <p dangerouslySetInnerHTML={{ __html: "Le <strong>SEA</strong> complète le SEO sur les requêtes à forte intention commerciale. C'est particulièrement utile pour tester un nouveau marché, une offre ciblée ou un segment de niche avec un <strong>coût par lead mesuré</strong> dès la première semaine." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">Content Marketing</h3>
          <p dangerouslySetInnerHTML={{ __html: "Les campagnes de contenu — articles, études de cas, rapports sectoriels — renforcent la crédibilité, améliorent la conversion et positionnent votre entreprise comme <strong>référence sur son domaine</strong>. C'est une stratégie d'acquisition indirecte, mais souvent très efficace pour des cycles d'achat longs où la décision se prépare sur plusieurs mois." }} />
        </div>

        <div style={{ position: 'relative', marginTop: 32 }}>
          <Image
            src="/images/media/darwin-generation-leads-qualifie.jpeg"
            alt="Stratégie de génération de leads B2B chez DARWIN"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
          />
          <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
        </div>
        <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
          Stratégie d&apos;acquisition B2B — équipe Média DARWIN
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTENT MARKETING ET THOUGHT LEADERSHIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="content-marketing" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">STRATÉGIE DE CONTENU</span>
          <h2 className="font-anton artv2-h2">Content marketing et thought leadership : investir dans la&nbsp;durée</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "En B2B, la <strong>confiance précède la conversion</strong>. Un prospect qui signe un contrat à 50 000 € avec une agence qu'il ne connaissait pas la semaine précédente, ça n'existe pas. La relation se construit avant même le premier contact commercial." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "C'est là que le <strong>content marketing</strong> joue un rôle stratégique. Publier des articles sur les enjeux de votre secteur, produire des études, partager des retours d'expérience concrets — tout cela installe votre expertise dans l'esprit du prospect bien avant qu'il soit en situation d'achat." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Le <strong>thought leadership</strong> — littéralement le leadership d'opinion — va un cran plus loin. Il ne s'agit plus seulement de produire du contenu utile, mais de prendre position. D'avoir un point de vue défendable, parfois à contre-courant, toujours ancré dans une réalité opérationnelle. Les décideurs B2B font confiance aux gens qui osent avoir une opinion, pas à ceux qui répètent les généralités du marché." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p>Les webinaires et les formats live s&apos;ajoutent au dispositif avec un effet mesurable sur le pipeline. L&apos;inscription crée un acte d&apos;engagement. La présence confirme l&apos;intérêt. Les échanges en direct sont souvent le déclencheur d&apos;une conversation commerciale qualifiée.</p>
        </blockquote>
      </section>

      {/* ── NEWSLETTER ── */}
      <div style={{ margin: '56px 0' }}>
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          LINKEDIN ADS ET SOCIAL SELLING
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="linkedin" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">LINKEDIN</span>
          <h2 className="font-anton artv2-h2">LinkedIn Ads et social selling : le duo&nbsp;gagnant</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "LinkedIn est un réseau social incontournable en B2B. C'est la seule plateforme où vous pouvez cibler par <strong>intitulé de poste, taille d'entreprise, secteur d'activité et niveau hiérarchique</strong> en même temps. Cette granularité de ciblage n'existe nulle part ailleurs." }} />

        <div className="artv2-card-dark">
          <p dangerouslySetInnerHTML={{ __html: "Les <strong>LinkedIn Ads</strong> permettent de toucher des décisionnaires que vous n'auriez jamais pu atteindre en organique. Les formats <strong>Lead Gen Form</strong> — formulaires pré-remplis intégrés à la plateforme — réduisent la friction et améliorent significativement les taux de conversion. Le coût par lead est souvent plus élevé qu'en Google Ads, mais la qualité des prospects justifie généralement cet écart, surtout sur les ventes B2B à forte valeur." }} />
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Le <strong>social selling</strong> s'appuie sur des actions organiques : publier du contenu à forte valeur ajoutée, commenter de manière pertinente, entrer en contact avec des prospects ciblés via des messages personnalisés. C'est chronophage si mal structuré. Mais quand une équipe commerciale adopte une discipline de publication régulière — éventuellement après une formation courte aux codes LinkedIn — les résultats en inbound sont réels et mesurables sur trois à six mois." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p>La combinaison Ads + social selling crée un effet de présence puissant. Le prospect vous voit dans son fil d&apos;actualité, puis voit votre publicité, puis reçoit un message. La répétition du signal accélère la conversion — à condition de rester utile, pas intrusif.</p>
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SEO EN B2B
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="seo-b2b" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">SEO B2B</span>
          <h2 className="font-anton artv2-h2">SEO en B2B : capter les prospects avant qu&apos;ils arrivent chez un&nbsp;concurrent</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Le SEO en B2B répond à une <strong>logique d'intention</strong>. Quand un directeur marketing tape « comment réduire mon coût par lead en B2B », il est en phase de recherche d'information. Quand il tape « agence génération de leads B2B Paris », il est en phase de sélection. Ces deux requêtes méritent des contenus différents — mais les deux méritent d'être adressées par votre stratégie éditoriale." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "La construction d'un <strong>cocon sémantique</strong> autour des enjeux, besoins et objections de votre audience est la base. Chaque page traite un aspect précis du sujet, répond à une question spécifique, et renvoie vers les pages connexes. Google perçoit cette profondeur de traitement comme un signal d'expertise. Les prospects, eux, y trouvent les réponses qu'ils cherchent — et associent progressivement votre marque à leur problématique." }} />

        <blockquote className="artv2-blockquote">
          <p>La durée d&apos;indexation est un frein classique pour les équipes qui veulent des résultats immédiats. En pratique, un contenu SEO bien construit sur une thématique B2B ciblée peut remonter en première page en trois à six mois. Et contrairement à la publicité payante, il continue de générer des leads sans budget mensuel supplémentaire.</p>
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ACCOMPAGNEMENT DARWIN
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="accompagnement" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">ACCOMPAGNEMENT</span>
          <h2 className="font-anton artv2-h2">Notre accompagnement en génération de leads&nbsp;B2B</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "DARWIN accompagne des entreprises B2B à différents stades : celles qui partent de zéro et cherchent à structurer leur premier canal d'acquisition, et celles qui ont déjà un dispositif en place mais veulent l'optimiser." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Notre approche commence toujours par <strong>l'analyse de votre pipeline actuel</strong> et de votre base de leads, avec les meilleurs outils de prospection B2B du marché. Quels canaux génèrent du volume ? Lesquels convertissent ? Où se produisent les ruptures dans le parcours prospect ? Cette lecture de vos données permet de qualifier chaque lead, de vérifier la qualité réelle des prospects entrants et d'adapter la stratégie aux résultats observés — pas aux résultats espérés." }} />
      </section>
      </>
    </ArticleLayoutV2>
  )
}
