// ─────────────────────────────────────────────────────────────────────────────
// FICHIER : app/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead/page.tsx
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
  title: 'Qualification d\'un Lead : les Étapes Clés pour Convertir | DARWIN',
  description: 'Qualifiez vos leads avant de les transmettre aux commerciaux : MQL, SQL, scoring, BANT, CHAMP. Le processus, les outils et l\'accompagnement DARWIN.',
  alternates: { canonical: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead' },
  openGraph: {
    ...ogDefaults,
    title: 'Qualification d\'un Lead : les Étapes Clés pour Convertir',
    description: 'Qualifiez vos leads avant de les transmettre aux commerciaux : MQL, SQL, scoring, BANT, CHAMP. Le processus, les outils et l\'accompagnement DARWIN.',
    url: 'https://darwin-agency.fr/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead',
  },
}

const jsonLdBreadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Génération de Leads', url: '/agence-media/generation-de-leads' },
  { name: 'Qualification d\'un Lead', url: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead' },
])

const jsonLdWebpage = webPageJsonLd(
  'Qualification d\'un Lead : les Étapes Clés pour Mieux Convertir',
  'MQL, SQL, scoring, BANT, CHAMP : les étapes clés de la qualification d\'un lead pour convertir plus et mieux.',
  '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead'
)

const tocItems = [
  { id: 'definition', label: 'Qu\'est-ce que la qualification d\'un lead ?' },
  { id: 'mql-sql', label: 'MQL et SQL : la distinction fondamentale' },
  { id: 'scoring', label: 'Le lead scoring' },
  { id: 'frameworks', label: 'BANT et CHAMP' },
  { id: 'automatisation', label: 'Automatisation et CRM' },
  { id: 'accompagnement', label: 'Accompagnement DARWIN' },
]

const relatedPages = [
  { href: '/agence-media/generation-de-leads/comment-trouver-des-leads', label: 'Comment Trouver des Leads', desc: 'Sources, canaux et méthodes pour votre pipeline' },
  { href: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b', label: 'Générer des Leads en B2B', desc: 'Les leviers spécifiques pour capter des décisionnaires en B2B' },
]

const essentialPoints = [
  'Qualifier un lead, c\'est vérifier qu\'il correspond à votre cible ET qu\'il démontre un intérêt actif — l\'un sans l\'autre est insuffisant.',
  'La distinction MQL/SQL est le socle du processus : elle doit être définie conjointement par le marketing et le commercial, avec des critères écrits et partagés.',
  'Le lead scoring attribue des points à chaque action et critère démographique — il fait remonter les leads chauds au bon moment, ni trop tôt ni trop tard.',
  'BANT et CHAMP sont des frameworks de qualification complémentaires : BANT pour les cycles courts, CHAMP pour les ventes consultatives.',
  'L\'automatisation via CRM et marketing automation libère du temps commercial pour se concentrer sur les prospects à fort potentiel de conversion.',
]

export default function QualificationLeadPage() {
  return (
    <ArticleLayoutV2
      jsonLd={[jsonLdBreadcrumbs, jsonLdWebpage]}
      breadcrumbs={[
        { href: '/', label: 'Accueil' },
        { href: '/agence-media', label: 'Agence Média' },
        { href: '/agence-media/generation-de-leads', label: 'Génération de Leads' },
        { label: 'Qualification d\'un Lead' },
      ]}
      title={<>QUALIFICATION<br />D&apos;UN LEAD : LES<br />ÉTAPES&nbsp;CLÉS</>}
      intro={<>Le débat est vieux comme le marketing digital. Les commerciaux se plaignent : « On nous envoie des leads trop froids. » Le marketing répond : « On vous envoie du volume, c&apos;est à vous de vendre. » Les deux équipes ont souvent raison — et tort à la fois. Le vrai problème, c&apos;est la qualification et l&apos;analyse d&apos;un lead qui s&apos;avère insuffisante et pas assez structurée. Sans processus clair pour évaluer un prospect dans le processus de vente, tout le monde perd de l&apos;énergie. Et le temps commercial, c&apos;est une ressource coûteuse pour une société ou une marque. Chez DARWIN, notre <Link href="/agence-media" className="dw-link">agence média</Link> intègre cette étape dans chaque dispositif de <Link href="/agence-media/generation-de-leads" className="dw-link">génération de leads</Link>.</>}
      shareUrl="/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead"
      shareTitle="Qualification d'un Lead : les Étapes Clés pour Mieux Convertir"
      heroIllustration={
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
      }
      tocItems={tocItems}
      relatedPages={relatedPages}
      essentialPoints={essentialPoints}
      author={{ name: 'Carole Kabanda', role: 'Directrice Media', photo: '/images/team/carole-kabanda.jpg' }}
      conclusion={
        <p dangerouslySetInnerHTML={{ __html: "On configure les automatisations nécessaires pour identifier les leads chauds et les faire remonter directement dans le pipeline commercial, au bon moment, sans traitement manuel ni délai qui refroidit l'intérêt. Nos équipes sont alimentées par vos équipes commerciales qui exploitent les leads : joignabilité, maturité, objections. Et on suit les taux de conversion à chaque étape pour ajuster le processus dans le temps. Résultat : une équipe de vendeurs qui passe moins de temps à prospecter à froid et plus de temps à convertir les meilleurs prospects — ceux qui ont déjà levé la main. Les gains sur le taux de conversion sont souvent visibles à court&nbsp;terme." }} />
      }
    >
      <>
      {/* ═══════════════════════════════════════════════════════════════════
          QU'EST-CE QUE LA QUALIFICATION D'UN LEAD ?
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="definition" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">DÉFINITION</span>
          <h2 className="font-anton artv2-h2">Qu&apos;est-ce que la qualification d&apos;un&nbsp;lead&nbsp;?</h2>
        </div>

        <p className="artv2-body">
          <strong>Qualifier un lead</strong>, c&apos;est évaluer dans quelle mesure un prospect correspond à votre client idéal et se trouve dans les bonnes conditions pour acheter votre produit ou votre service. C&apos;est la brique la plus importante d&apos;une stratégie commerciale rentable, et souvent la moins bien travaillée. Ce n&apos;est pas simplement vérifier qu&apos;il a laissé un email valide. C&apos;est comprendre qui il est, ce qu&apos;il cherche, s&apos;il en a les moyens — et si le moment est le bon.
        </p>
        <p className="artv2-body">
          La qualification repose sur deux dimensions complémentaires. La première repose sur des critères sociodémographiques : profession, zone géographique, âges, statuts, civilité… Ces données permettent de vérifier que le prospect est dans votre cible et qu&apos;il correspond au profil idéal que vous souhaitez atteindre.
        </p>

        <blockquote className="artv2-blockquote">
          <p>
            La seconde dimension est comportementale : pages visitées sur votre site, contenus téléchargés, emails ouverts, formulaires remplis, webinaires suivis. Ces signaux d&apos;intérêt indiquent un niveau de maturité du prospect, dans son cycle d&apos;achat. Un lead vraiment qualifié coche les deux cases : il correspond à votre cible ET il démontre un intérêt actif par des signaux collectés. L&apos;un sans l&apos;autre, c&apos;est insuffisant.
          </p>
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MQL ET SQL : LA DISTINCTION FONDAMENTALE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="mql-sql" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">FRAMEWORKS</span>
          <h2 className="font-anton artv2-h2">MQL et SQL : la distinction&nbsp;fondamentale</h2>
        </div>

        <p className="artv2-body">
          Ces deux acronymes <strong>structurent le processus de qualification dans la plupart des organisations</strong>. Les confondre est l&apos;une des sources principales de friction entre marketing et commercial.
        </p>
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Un MQL — marketing qualified lead — est un prospect que l'équipe marketing juge, selon des critères précis, suffisamment engagé pour mériter une attention. Il a interagi avec plusieurs contenus, rempli un formulaire, assisté à un webinaire. Il est dans votre base, il vous connaît. Mais il n'est pas encore prêt à recevoir une offre commerciale ou il a besoin d'en savoir encore un petit peu plus avant de convertir." }} />
        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "Un SQL — sales qualified lead — est un MQL que l'équipe commerciale a validé après un premier contact. Il a confirmé son besoin, son budget, son appétence pour le produit ou le service, son délai de décision et son rôle dans le processus d'achat. C'est lui qu'on travaille en priorité, avec un effort commercial pour le transformer en client, proportionnel à son potentiel et sa capacité à convertir." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p>
            La frontière entre MQL et SQL doit être définie ensemble, par les équipes marketing et commerciale, avec des critères écrits, partagés et alignés sur les objectifs de vente de l&apos;entreprise. Sans ça, chaque camp applique sa propre définition.
          </p>
        </blockquote>

        <div style={{ position: 'relative', marginTop: 32 }}>
          <Image
            src="/images/media/generation-leads-qualification.jpg"
            alt="Processus de qualification des leads chez DARWIN"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
          />
          <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
        </div>
        <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
          Session de qualification — équipe Média DARWIN
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LE LEAD SCORING : NOTER POUR MIEUX PRIORISER
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="scoring" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">SCORING</span>
          <h2 className="font-anton artv2-h2">Le lead scoring : noter pour mieux&nbsp;prioriser</h2>
        </div>

        <p className="artv2-body">
          <strong>Le lead scoring est l&apos;outil le plus opérationnel</strong>{' '}pour gérer la qualification à grande échelle et améliorer le taux de conversion. Le principe est simple : on attribue des points à chaque action ou information relative à un prospect. Plus le score est élevé, plus le lead est prioritaire en raison de ses chances de se convertir en client.
        </p>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">EXEMPLES DE SCORING</h3>
          <p>
            Un téléchargement de livre blanc ou de catalogue vaut 10 points. Une visite de la page tarifs vaut 20. Un email ouvert trois fois vaut 5. Un statut de propriétaire vaut 15 points de plus qu&apos;un statut de locataire. Chaque entreprise, marque, société, définit sa propre grille de scoring en fonction de ses données historiques de conversion et des informations réellement collectées et disponibles dans son CRM.
          </p>
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">TIMING</h3>
          <p>
            L&apos;objectif est de faire remonter et exploiter les leads les plus chauds vers l&apos;équipe commerciale au bon moment — ni trop tôt (avant qu&apos;ils soient prêts), ni trop tard (après qu&apos;ils aient signé avec un concurrent). C&apos;est un équilibre délicat. Il se calibre dans la durée, en comparant les scores attribués aux taux de conversion réels.
          </p>
        </div>

        <div className="artv2-card-accent">
          <h3 className="font-anton artv2-h3">ENTRETIEN</h3>
          <p>
            Pourtant, beaucoup de marques mettent en place un scoring et ne l&apos;ajustent jamais. Un outil figé devient rapidement inexact. La valeur du scoring vient de son entretien régulier, pas de sa mise en place initiale.
          </p>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <div style={{ margin: '56px 0' }}>
        <NewsletterCTA />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          BANT ET CHAMP : STRUCTURER VOTRE QUALIFICATION
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="frameworks" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">FRAMEWORKS</span>
          <h2 className="font-anton artv2-h2">BANT et CHAMP : structurer votre&nbsp;qualification</h2>
        </div>

        <p className="artv2-body">
          Deux méthodologies sont couramment utilisées pour qualifier les prospects lors des premiers échanges commerciaux.
        </p>

        <div className="artv2-card-dark">
          <p dangerouslySetInnerHTML={{ __html: "BANT est la plus ancienne : <em>Budget, Authority, Need, Timeline</em>. Le prospect a-t-il le budget ? Est-il décisionnaire ? A-t-il un besoin réel ? Quel est son délai ? C'est une grille efficace pour les cycles d'achat courts et les offres bien définies. Elle est parfois critiquée pour sa rigidité — en B2B complexe, le budget n'est pas toujours identifié au premier contact." }} />
        </div>

        <p className="artv2-body" dangerouslySetInnerHTML={{ __html: "CHAMP est une version plus contemporaine : <em>Challenges, Authority, Money, Prioritization</em>. L'ordre change : on commence par le problème du prospect, pas par son portefeuille. Cette approche est mieux adaptée aux ventes consultatives où l'enjeu est d'abord de comprendre la situation avant de proposer une solution." }} />

        <blockquote className="artv2-blockquote artv2-blockquote--highlight">
          <p>
            Ces méthodologies ne sont pas des scripts à dérouler mot pour mot. Ce sont des repères stratégiques utilisés à chaque étape clé du processus de qualification — pour s&apos;assurer qu&apos;à la fin de chaque échange vous avez les informations essentielles pour évaluer la probabilité de conversion. Un vendeur qui fait des propositions sans avoir vérifié ces critères perd son temps — et renvoie une mauvaise image de l&apos;entreprise.
          </p>
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AUTOMATISATION ET CRM : QUALIFIER À GRANDE ÉCHELLE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="automatisation" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">OUTILS</span>
          <h2 className="font-anton artv2-h2">Automatisation et CRM : qualifier à grande&nbsp;échelle</h2>
        </div>

        <p className="artv2-body">
          Quand les volumes de leads augmentent, la qualification manuelle devient impossible. C&apos;est là que les équipements et outils deviennent stratégiques.
        </p>

        <div className="artv2-card-accent">
          <p>
            Un CRM bien configuré centralise toutes les données prospects — historique des interactions, score, statut, prochaine action — afin de qualifier chaque lead avec la même méthode et de faire circuler l&apos;information entre équipes en temps réel. Il supprime le silo entre marketing et commercial : tout le monde travaille sur la même base. La donnée ne se perd plus entre un email et un tableur partagé.
          </p>
        </div>

        <div className="artv2-card-accent">
          <p>
            Les outils de marketing automation permettent de qualifier automatiquement en fonction du comportement. Un prospect qui visite votre page de prix trois fois en une semaine reçoit un email personnalisé — ou son score augmente jusqu&apos;à déclencher une notification commerciale. Ces scénarios prennent du temps à paramétrer, mais ils tournent ensuite sans intervention humaine.
          </p>
        </div>

        <blockquote className="artv2-blockquote">
          <p>
            L&apos;automatisation ne remplace pas le jugement humain. Elle libère du temps commercial pour se concentrer sur les leads qui en valent la peine — ceux dont le potentiel est confirmé, pas ceux qui ont juste ouvert un email.
          </p>
        </blockquote>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ACCOMPAGNEMENT DARWIN
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="accompagnement" className="artv2-section">
        <div className="artv2-section-header">
          <span className="artv2-eyebrow">ACCOMPAGNEMENT</span>
          <h2 className="font-anton artv2-h2">Comment DARWIN gère la qualification de vos&nbsp;leads</h2>
        </div>

        <p className="artv2-body">
          Chez DARWIN, la qualification n&apos;est pas une case à cocher. C&apos;est un processus opérationnel que nous construisons avec vous — et qui évolue en fonction de vos résultats réels.
        </p>

        <p className="artv2-body">
          On commence par aligner vos équipes marketing et commerciales sur <strong>une définition commune du lead qualifié</strong>. C&apos;est souvent la première étape la plus productive — et celle qu&apos;on saute le plus souvent. Ensuite, on met en place ou on optimise votre scoring en s&apos;appuyant sur vos données historiques de conversion, pour calibrer les critères qui comptent vraiment pour votre activité.
        </p>
      </section>
      </>
    </ArticleLayoutV2>
  )
}
