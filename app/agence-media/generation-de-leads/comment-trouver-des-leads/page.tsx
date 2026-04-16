// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/generation-de-leads/comment-trouver-des-leads/page.tsx
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

const jsonLdBreadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Génération de Leads', url: '/agence-media/generation-de-leads' },
  { name: 'Comment Trouver des Leads', url: '/agence-media/generation-de-leads/comment-trouver-des-leads' },
])

const jsonLdWebpage = webPageJsonLd(
  'Comment Trouver des Leads Qualifiés ?',
  'Méthodes, canaux et indicateurs pour trouver des leads qualifiés et mesurer leur qualité.',
  '/agence-media/generation-de-leads/comment-trouver-des-leads'
)

const tocItems = [
  { id: 'definition', label: 'Qu\'est-ce qu\'un lead qualifié' },
  { id: 'sources', label: 'Les meilleures sources' },
  { id: 'canaux', label: 'Quel canal pour quel usage' },
  { id: 'acheter-vs-generer', label: 'Acheter ou générer ses leads' },
  { id: 'mesurer', label: 'Mesurer la qualité' },
  { id: 'accompagnement', label: 'Accompagnement DARWIN' },
]

const relatedPages = [
  { href: '/agence-media/generation-de-leads', label: 'Génération de Leads', desc: 'Stratégies et méthodes pour attirer des prospects qualifiés' },
  { href: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b', label: 'Générer des Leads en B2B', desc: 'Les leviers spécifiques pour capter des décisionnaires en B2B' },
  { href: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead', label: 'Qualification d\'un Lead', desc: 'Du premier contact au lead qualifié' },
]

const essentialPoints = [
  'Un lead qualifié n\'est pas un simple contact — c\'est un prospect dont les critères (besoin, budget, profil) correspondent à votre client idéal.',
  'Le SEO reste le canal le plus rentable sur la durée : le coût par lead qualifié diminue mois après mois, contrairement aux campagnes payantes.',
  'L\'achat de leads peut servir d\'accélérateur ponctuel, mais les leads générés en interne sont plus qualifiés, plus engagés et moins coûteux à long terme.',
  'Le vrai indicateur de performance n\'est pas le coût par lead brut, mais le coût par lead qualifié — intégrer cette dimension change radicalement les arbitrages.',
  'DARWIN construit les conditions pour trouver des leads en continu : audit, activation des bons canaux, reporting en temps réel sur les résultats concrets.',
]

export default function CommentTrouverDesLeadsPage() {
  return (
    <ArticleLayoutV2
      jsonLd={[jsonLdBreadcrumbs, jsonLdWebpage]}
      breadcrumbs={[
        { href: '/', label: 'Accueil' },
        { href: '/agence-media', label: 'Agence Média' },
        { href: '/agence-media/generation-de-leads', label: 'Génération de Leads' },
        { label: 'Comment Trouver des Leads' },
      ]}
      title={<>COMMENT TROUVER<br />DES LEADS&nbsp;QUALIFIÉS&nbsp;?</>}
      intro="Beaucoup d'entreprises ont un problème de volume. Elles veulent trouver des leads, plus de contacts, plus de noms dans le CRM. Pourtant, ce n'est pas ça, la vraie difficulté. La vraie difficulté, c'est de trouver des leads qualifiés — ceux qui correspondent réellement à votre offre, qui ont un besoin identifié et la capacité de passer à l'achat. Un pipeline gonflé de prospects hors cible coûte cher en temps commercial, pénalise la performance de vente et fait chuter le taux de conversion. Autant partir sur de bonnes bases : les bons canaux d'acquisition, les bons outils, les bonnes offres, dès le premier euro investi."
      shareUrl="/agence-media/generation-de-leads/comment-trouver-des-leads"
      shareTitle="Comment Trouver des Leads Qualifiés ? Méthodes et Canaux"
      heroIllustration={
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
          <line x1="80" y1="90" x2="185" y2="220" stroke="#0a0a0a" strokeWidth="1.5"/>
          <line x1="380" y1="90" x2="275" y2="220" stroke="#0a0a0a" strokeWidth="1.5"/>
          <line x1="80" y1="90" x2="380" y2="90" stroke="#0a0a0a" strokeWidth="1.5"/>
          <line x1="185" y1="220" x2="275" y2="220" stroke="#0a0a0a" strokeWidth="1.5"/>

          {/* Grille de filtrage */}
          <line x1="118" y1="140" x2="342" y2="140" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="145" y1="175" x2="315" y2="175" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3,5"/>

          {/* Dots en cours de filtrage */}
          <circle cx="150" cy="108" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="200" cy="112" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="250" cy="105" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="300" cy="115" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="340" cy="108" r="3" fill="rgba(0,0,0,0.15)"/>
          <circle cx="175" cy="118" r="3" fill="rgba(0,0,0,0.12)"/>
          <circle cx="280" cy="120" r="3" fill="rgba(0,0,0,0.12)"/>
          <circle cx="130" cy="112" r="3" fill="rgba(0,0,0,0.12)"/>

          {/* Dots passant le filtre */}
          <circle cx="210" cy="158" r="3" fill="rgba(0,0,0,0.18)"/>
          <circle cx="255" cy="155" r="3" fill="rgba(0,0,0,0.18)"/>
          <circle cx="230" cy="165" r="3" fill="rgba(0,0,0,0.18)"/>
          <circle cx="195" cy="190" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
          <circle cx="245" cy="195" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>
          <circle cx="265" cy="188" r="3.5" fill="#29C5F5" fillOpacity="0.5"/>

          {/* ── LEADS QUALIFIÉS — sortie ──────────────────── */}
          <line x1="230" y1="220" x2="230" y2="248" stroke="#0a0a0a" strokeWidth="1.5"/>
          <polygon points="224,248 230,258 236,248" fill="#0a0a0a"/>

          <circle cx="205" cy="272" r="5" fill="#29C5F5"/>
          <circle cx="230" cy="275" r="5" fill="#29C5F5"/>
          <circle cx="255" cy="272" r="5" fill="#29C5F5"/>

          {/* ── LABEL LEADS QUALIFIÉS ────────────────────── */}
          <text x="230" y="295" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.15em">LEADS QUALIFIÉS</text>

        </svg>
      }
      tocItems={tocItems}
      relatedPages={relatedPages}
      essentialPoints={essentialPoints}
      author={{ name: 'Jérôme Renard', role: 'Directeur Associé', photo: '/images/team/jerome-renard.jpg' }}
      conclusion={
        <p dangerouslySetInnerHTML={{ __html: "On active ensuite ou on optimise les canaux les plus pertinents pour votre entreprise, votre secteur et vos objectifs commerciaux. SEO, SEA, social ads, emailing de prospection, contenu : <strong>pas de dogme</strong>, juste la combinaison qui marche pour votre profil client et votre offre. Le <strong>reporting en temps réel</strong> fait partie intégrante de notre service. Vous suivez vos leads, leur source, leur coût et leur taux de conversion — sans attendre la réunion mensuelle pour savoir si ça avance." }} />
      }
    >
      <>
      {/* ═══════════════════════════════════════════════════════════════════
          QU'EST-CE QU'UN LEAD QUALIFIÉ ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="definition" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">DÉFINITION</span>
          <h2 className="font-anton artv2-h2">Qu&apos;est-ce qu&apos;un lead&nbsp;qualifié&nbsp;?</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Un lead, c'est un contact qui a montré un intérêt pour votre produit ou service. Mais un <strong>lead qualifié</strong>, c'est plus précis que ça. C'est un prospect dont vous avez pu vérifier — via des <strong>données concrètes</strong> et des informations fiables issues de votre base marketing — qu'il remplit les critères de votre <strong>client idéal</strong>." }} />
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Ces critères varient selon votre activité. En <strong>B2B</strong>, on regarde souvent la taille de l'entreprise, le secteur, la fonction du décisionnaire, le budget disponible. En <strong>BtoC</strong>, on s'intéresse plutôt au comportement : pages visitées, durée de session, formulaire rempli, téléchargement d'un contenu gratuit, ajout au panier. Ce qui compte, ce n'est pas le nombre de leads dans votre base. C'est la <strong>proportion de leads qualifiés</strong> parmi eux." }} />

        <blockquote className="artv2-blockquote">
          <p dangerouslySetInnerHTML={{ __html: "Reste que cette notion est souvent floue en interne. Marketing et équipe commerciale n'ont pas toujours la même définition du prospect qualifié. C'est un problème. Et le résoudre commence par <strong>aligner ces deux équipes autour de critères communs, formalisés, partagés</strong> — et appliqués à chaque lead entrant." }} />
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LES MEILLEURES SOURCES POUR TROUVER DES LEADS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="sources" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">SOURCES</span>
          <h2 className="font-anton artv2-h2">Les meilleures sources pour trouver des&nbsp;leads</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Il n'existe pas de canal universel. Chaque source de génération de leads a ses logiques, ses coûts et ses profils de prospects. Ce qui fonctionne pour un éditeur SaaS ne fonctionne pas forcément pour un réseau de franchises." }} />
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Le <strong>SEO</strong> reste l'un des <strong>canaux d'acquisition les plus rentables</strong> sur la durée. Un contenu optimisé et à forte valeur attire des visiteurs à intention d'achat — des gens qui cherchent activement une solution. <strong>Le coût par lead qualifié diminue mois après mois</strong>, contrairement aux campagnes payantes qui s'arrêtent dès qu'on coupe le budget." }} />
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Les campagnes <strong>SEA</strong> — Google Ads en tête — permettent d'aller plus vite. On cible des requêtes commerciales précises, on capte le prospect au bon moment du cycle d'achat. Le coût par clic est plus élevé qu'en organique, mais la conversion peut être immédiate. C'est souvent la <strong>combinaison SEO + SEA</strong> qui donne les meilleurs résultats sur le moyen terme." }} />
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Les <strong>social ads</strong> changent de registre. Sur Meta ou LinkedIn selon votre cible B2B ou grand public, on ne répond plus à une intention de recherche, on crée l'intérêt. Ces plateformes publicitaires sont puissantes pour toucher des profils précis, générer des leads via des <strong>formulaires natifs</strong>, ou relancer des visiteurs déjà passés sur votre site." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p dangerouslySetInnerHTML={{ __html: "L'emailing de prospection, enfin, reste largement sous-estimé. Sur une base bien segmentée, une séquence courte et bien écrite produit un retour de conversion exceptionnel pour un coût faible. <strong>Le ciblage est chirurgical.</strong> Seule condition : une <strong>base de qualité, fraîche, conforme</strong>. Et c'est là que les écarts se creusent entre une opération rentable et un budget parti en fumée." }} />
        </blockquote>

        <div style={{ position: 'relative', marginTop: 32 }}>
          <Image
            src="/images/media/darwin-generation-leads-qualifie.jpeg"
            alt="Jérôme Renard, Directeur associé DARWIN, en présentation Lead Generation"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
          />
          <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
        </div>
        <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
          Jérôme Renard, Directeur associé — en présentation Lead Generation
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUEL CANAL POUR QUEL USAGE ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="canaux" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">COMPARATIF</span>
          <h2 className="font-anton artv2-h2">Quel canal pour quel&nbsp;usage&nbsp;?</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Ces quatre canaux ne s'opposent pas. Ils se complètent. La vraie question, c'est : qu'est-ce que vous cherchez à faire, et dans quel délai ?" }} />

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">SEO</h3>
          <p dangerouslySetInnerHTML={{ __html: "Le SEO construit une <strong>acquisition durable</strong>. C'est un investissement en contenu, en stratégie éditoriale et en données dont les effets se mesurent sur <strong>6 à 18 mois</strong>. Pour une entreprise qui veut réduire sa dépendance au budget publicitaire, c'est incontournable." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">SEA</h3>
          <p dangerouslySetInnerHTML={{ __html: "Le SEA offre une <strong>visibilité immédiate</strong> sur des requêtes à <strong>forte intention commerciale</strong>. C'est le canal privilégié pour tester une offre, lancer un nouveau produit, ou compenser en attendant que le SEO monte en puissance." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">Social Ads</h3>
          <p dangerouslySetInnerHTML={{ __html: "Les social ads excellent dans la <strong>génération de notoriété</strong> et la capture de leads à des stades précoces du cycle d'achat. <strong>LinkedIn est particulièrement performant en B2B</strong> pour cibler des décisionnaires par fonction, secteur ou taille d'entreprise." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">Emailing</h3>
          <p dangerouslySetInnerHTML={{ __html: "L'emailing s'appuie sur une donnée existante — collectée en propre, partenaire ou issue d'une base louée. Il est efficace pour réactiver des contacts dormants, nourrir des prospects en phase de réflexion, ou déclencher une action sur une offre précise. <strong>La personnalisation du message fait toute la différence.</strong>" }} />
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <div style={{ margin: '56px 0' }}>
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          ACHETER DES LEADS OU LES GÉNÉRER SOI-MÊME ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="acheter-vs-generer" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">ARBITRAGE</span>
          <h2 className="font-anton artv2-h2">Acheter des leads ou les générer&nbsp;soi-même&nbsp;?</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "C'est la question qui divise. L'achat de leads est séduisant sur le papier : des contacts immédiatement disponibles, un coût apparent maîtrisé, pas besoin d'attendre. En pratique, c'est souvent décevant." }} />

        <div className="artv2-card-dark">
          <p dangerouslySetInnerHTML={{ __html: "Les leads achetés sont <strong>rarement exclusifs</strong>. Le même prospect reçoit des sollicitations de cinq concurrents en même temps. La qualité est variable, la pertinence contestable. Et surtout, vous ne contrôlez pas les <strong>critères de sélection</strong> ni la fraîcheur des informations." }} />
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Générer ses propres leads demande plus d'investissement initial — en contenu, en personnel, en outils de marketing. Mais les leads produits en interne sont <strong>plus qualifiés, plus engagés, et moins coûteux</strong> sur le long terme. Ils ont volontairement interagi avec votre marque. Ce n'est pas neutre." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p dangerouslySetInnerHTML={{ __html: "L'achat peut rester utile dans certains cas : phase de lancement, besoin de volume rapide, secteur où l'audience organique est trop lente à construire. <strong>C'est un accélérateur ponctuel, pas un moteur.</strong>" }} />
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MESURER LA QUALITÉ DE VOS LEADS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="mesurer" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">INDICATEURS</span>
          <h2 className="font-anton artv2-h2">Mesurer la qualité de vos&nbsp;leads</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Trouver des leads ne suffit pas. Il faut savoir s'ils valent quelque chose. Plusieurs indicateurs permettent de piloter cette qualité et d'ajuster la stratégie d'acquisition dans le temps." }} />

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">01 — Taux de conversion</h3>
          <p dangerouslySetInnerHTML={{ __html: "Le <strong>taux de conversion lead-to-client</strong> est le plus direct. Sur 100 leads entrants, combien deviennent des clients ? Un taux faible peut signaler que vos sources de génération sont mal ciblées — ou que la qualification en aval est insuffisante." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">02 — Coût par lead qualifié</h3>
          <p dangerouslySetInnerHTML={{ __html: "Le <strong>coût par lead qualifié</strong> est plus pertinent que le coût par lead brut. Si vous payez 5 € par lead SEA mais que seuls 10 % sont qualifiés, <strong>votre coût réel est de 50 €</strong>. Intégrer cette dimension change radicalement la lecture des performances, et oriente les arbitrages budgétaires vers les sources vraiment rentables." }} />
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">03 — Délai de conversion</h3>
          <p dangerouslySetInnerHTML={{ __html: "Le <strong>délai de conversion</strong> complète le tableau. Un lead qui met trois mois à se décider n'a pas la même valeur qu'un prospect prêt à signer en deux semaines. La rapidité du cycle d'achat dit beaucoup sur la <strong>température du prospect</strong> au moment de l'entrée en base — et sur la qualité de votre qualification initiale." }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ACCOMPAGNEMENT DARWIN
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="accompagnement" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">ACCOMPAGNEMENT</span>
          <h2 className="font-anton artv2-h2">Comment DARWIN vous aide à trouver des leads qui&nbsp;convertissent</h2>
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Chez DARWIN, on ne vend pas des leads. On construit les conditions pour que vous en trouviez <strong>en continu</strong>, sur les <strong>bons canaux</strong>, avec le <strong>bon message</strong>, pour les <strong>bonnes cibles</strong>." }} />

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Notre approche commence par un audit de votre acquisition actuelle : quelles sources génèrent vos leads aujourd'hui, lesquelles convertissent vraiment, et où se perdent les prospects dans votre tunnel. Cette analyse de données est souvent révélatrice — elle met à plat les biais du reporting classique." }} />
      </section>
      </>
    </ArticleLayoutV2>
  )
}
