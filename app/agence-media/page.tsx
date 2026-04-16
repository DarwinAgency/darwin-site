import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../lib/jsonld'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "Agence Média — Plan média & performance publicitaire | DARWIN",
  description: "Notre agence média vous accompagne dans la définition de votre stratégie médias, la planification et l'achat d'espaces. Audit, plan média, leads : nos expertises.",
  alternates: { canonical: '/agence-media' },
  openGraph: {
    ...ogDefaults,
    title: "Agence Média — Plan média & performance publicitaire | DARWIN",
    description: "Agence média experte depuis 2003. Programmatique, display, TV segmentée, DOOH, emailing, SMS/RCS. Structurez vos investissements publicitaires.",
    url: 'https://darwin-agency.fr/agence-media',
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: `${DARWIN_YEARS} ans`, label: "d'expertise média" },
  { num: '400+', label: 'clients accompagnés' },
  { num: '7 ans', label: 'de fidélité moyenne' },
  { num: '35M+', label: 'adresses optin' },
]

const pillars = [
  {
    id: '01',
    title: 'Stratégie & Audit',
    desc: "Avant d'activer quoi que ce soit, nous auditons. C'est une étape que beaucoup d'agences survolent — parce qu'elle prend du temps et ne se facture pas toujours facilement. Nous, on la considère comme le socle de tout le reste. L'audit couvre vos campagnes en cours, vos performances historiques, votre positionnement concurrentiel et la cohérence de votre mix marketing. Il révèle souvent des angles morts coûteux pour votre entreprise : des canaux sous-exploités, des budgets mal répartis, des créas fatiguées qui tournent depuis trop longtemps.",
    items: ['Audit des campagnes existantes', 'Analyse concurrentielle', 'Diagnostic du mix marketing', 'Recommandations chiffrées et argumentées'],
  },
  {
    id: '02',
    title: 'Plan média & Activation',
    desc: "Le plan média traduit votre stratégie en actions concrètes : canaux activés, formats retenus, calendrier de diffusion, budgets par levier et KPIs de pilotage. Mais un plan média n'est pas un document figé qu'on exécute pendant six mois sans y toucher. En réalité, les meilleurs plans sont ceux qu'on ajuste le plus. Pilotage quotidien, tests A/B sur les créas, réallocation budgétaire vers les sources qui performent, ajustement des enchères, affinage des ciblages. C'est ce travail pour optimiser en continu chaque levier qui fait basculer un plan média « correct » vers un dispositif réellement performant.",
    items: ['Planification multi-leviers', 'Paramétrage & lancement', 'Tests A/B sur les créas', 'Optimisation continue des enchères'],
  },
  {
    id: '03',
    title: 'Génération de leads',
    desc: "Générer des leads, tout le monde le promet. En générer de qualifiés, au bon coût, de façon reproductible — c'est une autre affaire. Notre approche repose sur l'activation coordonnée de plusieurs leviers : programmatique pour le reach et la notoriété, emailing et SMS pour la conversion directe, retargeting display pour récupérer les visiteurs engagés, affiliation pour ne payer que les résultats. Chaque levier a sa place dans le tunnel, et c'est leur orchestration qui crée la performance — pas la somme des budgets.",
    items: ['Activation multi-leviers coordonnée', 'Qualification et scoring des leads', 'Attribution multi-touch', 'Reporting orienté business'],
  },
  {
    id: '04',
    title: 'Pilotage & Optimisation',
    desc: "Nos consultants analysent vos performances chaque jour, pas chaque mois. Quand quelque chose ne fonctionne pas, on le coupe. Quand un signal de performance apparaît, on l'exploite. C'est un travail d'artisan, pas d'usine. La protection de votre marque n'est pas une option dans nos dispositifs. Visibilité réelle, élimination du trafic frauduleux, brand safety stricte — la sécurité de marque sur chaque emplacement publicitaire : votre image mérite cette exigence. Nous ne transigerons jamais là-dessus, même si ça implique de refuser certains inventaires qui « performent » sur le papier.",
    items: ['Dashboard KPI temps réel', 'Brand safety & anti-fraude', 'Réallocation budgétaire pilotée par la donnée', 'Reporting mensuel actionnable'],
  },
]

const services = [
  { href: '/agence-media/audit-strategie-digitale', title: 'Audit & Stratégie digitale', accent: '#FFF127', desc: "Analyse complète de votre dispositif digital : campagnes en cours, performances historiques, positionnement concurrentiel et cohérence de votre mix marketing. Nous identifions les quick wins — ces gains rapides sur les leviers existants qui produisent des résultats immédiats — et posons les bases d'une organisation média efficace sur la durée. Chaque recommandation est argumentée avec des projections réalistes, pas des promesses en l'air." },
  { href: '/agence-media/plan-media', title: 'Plan média', accent: '#FFF127', desc: "Traduction opérationnelle de votre stratégie en actions concrètes : canaux activés, formats retenus, calendrier de diffusion, budgets par levier et KPIs de pilotage. Un plan vivant, piloté au quotidien. Tests A/B, réallocation budgétaire vers les sources qui performent, ajustement des enchères — nous faisons vivre vos dispositifs pour améliorer les résultats semaine après semaine." },
  { href: '/agence-media/generation-de-leads', title: 'Génération de leads', accent: '#FFF127', desc: "Leads qualifiés au bon coût : programmatique, emailing, SMS, retargeting et affiliation orchestrés dans un tunnel de conversion cohérent. Nous ne livrons pas des volumes — nous qualifions, nous analysons le parcours de chaque lead du premier point de contact jusqu'à la conversion, pour comprendre quels canaux contribuent réellement à votre business et concentrer les budgets sur ce qui transforme." },
  { href: '/agence-media/campagnes-emailing', title: 'Campagnes emailing', accent: '#FFF127', desc: "Plus de 35 millions d'adresses optin grâce à nos partenaires data fidèles, une méthodologie millimétrée en planification et en suivi quotidien. L'email reste un levier redoutablement efficace pour déclencher l'action — à condition de maîtriser la pression marketing et de préserver l'image de marque des annonceurs. Notre différence : la capacité à activer de la donnée fraîche et performante en fonction de l'audience que vous souhaitez toucher. Trop de messages tue le message. Nous dosons." },
  { href: '/agence-media/campagnes-rcs-sms', title: 'SMS / RCS', accent: '#FFF127', desc: "25M+ de numéros dédupliqués grâce à nos partenaires data historiques. L'arrivée du RCS change la donne : images, vidéos, carrousels, RCS conversationnel. Ce qui était un texto devient une expérience de marque à part entière. Le RCS répond désormais à tous les objectifs — visibilité, trafic, conversion — avec des taux d'ouverture que l'email ne peut plus atteindre." },
  { href: '/agence-media/audio-digital', title: 'Audio digital', accent: '#FFF127', desc: "Podcasts, streaming musical, radio digitale : l'audio s'est imposé dans les habitudes d'écoute quotidiennes. Spotify, Deezer, webradios, plateformes de podcasts — nous paramétrons un cadre de diffusion pour toucher vos audiences dans des moments privilégiés où l'attention est captive. Quand un auditeur écoute, il n'est pas en train de scroller. L'audio fonctionne particulièrement bien pour la mémorisation, la connexion émotionnelle avec la marque et les stratégies de communication locales." },
  { href: '/agence-media/tv-segmentee-ctv', title: 'TV segmentée & CTV', accent: '#29C5F5', desc: "La TV segmentée s'appuie sur les données des box internet pour adresser des messages différents à chaque foyer, même sur le même programme. La CTV — Smart TV, box Android, Apple TV, consoles — capte le regard dans un moment de détente, sur grand écran, souvent partagé à plusieurs. Vous gardez la force d'impact du média TV tout en gagnant la précision du ciblage digital. Vos investissements TV deviennent mesurables, optimisables, et chaque diffusion touche vraiment les bonnes personnes." },
  { href: '/agence-media/campagnes-dooh', title: 'Campagnes DOOH', accent: '#29C5F5', desc: "L'affichage digital extérieur prolonge votre présence au-delà des écrans personnels. Panneaux en gare, centres commerciaux, façades d'immeubles, arrêts de bus. La flexibilité totale du DOOH programmatique : vous adaptez vos créations en fonction de l'heure, de la météo, des événements locaux. Et vous mesurez l'impact sur le trafic en magasin — au kilomètre près." },
]


const faqs = [
  {
    q: "Quelle est la différence entre une agence média et une régie publicitaire ?",
    a: "Une régie vend de l'espace publicitaire — elle représente les éditeurs (sites, chaînes, plateformes). Une agence média, c'est l'inverse : elle représente l'annonceur. Elle négocie, planifie et achète ces espaces pour votre compte, en veillant à ce que chaque euro investi serve vos objectifs. Chez DARWIN, nous intégrons le média dans une stratégie d'acquisition globale — SEO, SEA, Social Ads compris.",
  },
  {
    q: "Quel budget minimum faut-il pour travailler avec une agence média ?",
    a: "Pas de réponse universelle. Ce qui compte, c'est l'adéquation entre votre budget, vos objectifs et les leviers activés. Certains dispositifs sont rentables dès quelques milliers d'euros mensuels. D'autres nécessitent plus d'enveloppe pour atteindre un seuil de diffusion significatif. Nous commençons toujours par un audit pour dimensionner le bon dispositif — pas pour vendre le plus gros.",
  },
  {
    q: "Comment mesurer le ROI de ses campagnes média ?",
    a: "Ça commence par des indicateurs clairs posés en amont : coût par acquisition, coût par lead, taux de conversion, ROAS. Mais le vrai enjeu, c'est l'attribution. Quel canal a initié le parcours ? Lequel a converti ? Nous mettons en place des modèles d'attribution multi-touch pour que vous compreniez la contribution réelle de chaque levier — pas seulement le dernier clic.",
  },
  {
    q: "Combien de temps faut-il pour voir les premiers résultats ?",
    a: "Ça dépend du levier. Le programmatique et l'emailing peuvent produire des résultats dès les premières semaines. La TV segmentée ou le DOOH demandent un à deux mois pour mesurer l'impact réel sur le trafic ou la notoriété. Ce qu'on ne vous promettra jamais : des résultats miracles en 48 heures.",
  },
  {
    q: "Comment booster le trafic dans les points de vente ?",
    a: "Nous couplons des dispositifs en ultra-local pour obtenir une couverture sur cible optimale et maximiser votre visibilité. Nous analysons en temps réel les retombées en magasin afin de piloter les différents leviers et atteindre le coût par visite le plus intéressant.",
  },
  {
    q: "Est-ce qu'une agence média comme DARWIN peut intervenir dans mon secteur d'activité ?",
    a: "Oui. Nous accompagnons des annonceurs dans des secteurs très différents — retail, e-commerce, tourisme, services, formation, santé, immobilier, entre autres. Chaque secteur a ses propres contraintes : saisonnalité, cycles de décision, budgets, réglementation, développement territorial, support privilégié par la cible. Ce qui compte, ce n'est pas d'avoir déjà travaillé exactement dans votre niche — c'est de savoir adapter la méthode à vos enjeux spécifiques, par catégorie d'offre et par profil de décideur responsable. Et ça, c'est ce que vingt-trois ans de terrain nous ont appris à faire.",
  },
  {
    q: "Agence média intégrée ou agence média indépendante : qu'est-ce qui change ?",
    a: "Une agence média intégrée dans un grand groupe publicitaire fonctionne avec des accords-cadres et des inventaires pré-négociés. Ça peut être un avantage sur le volume, mais ça crée aussi des biais : on vous oriente parfois vers les emplacements que l'agence a intérêt à remplir, pas forcément ceux qui performent le mieux pour vous. DARWIN est indépendant. Nous n'avons aucun accord exclusif avec aucune régie. Nos recommandations sont dictées par vos données et vos objectifs — pas par un accord commercial avec un partenaire média.",
  },
]

const otherExpertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/expertises/seo' },
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/expertises/sea' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/expertises/sma' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/expertises/analytics' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/expertises/formation' },
  { title: 'STUDIO CRÉATIF', desc: 'Direction artistique & Contenu', href: '/expertises/studio' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function AgenceMediaPage() {
  const jsonLdFaq = faqJsonLd(faqs.map(f => ({ q: f.q, a: f.a })))
  const jsonLdService = serviceJsonLd({
    name: 'Agence Média',
    description: "Agence média spécialisée en stratégie, planification et achat d'espaces publicitaires. Programmatique, TV segmentée, DOOH, emailing, SMS/RCS.",
    url: 'https://darwin-agency.fr/agence-media',
    keywords: ['agence média', 'plan média', 'achat espace publicitaire', 'programmatique', 'TV segmentée', 'DOOH', 'emailing', 'génération de leads'],
  })
  const jsonLdBreadcrumb = breadcrumbJsonLd([
    { name: 'Accueil', url: 'https://darwin-agency.fr/' },
    { name: 'Agence Média', url: 'https://darwin-agency.fr/agence-media' },
  ])

  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* ─── HERO ─── */}
      <section style={{ background: '#fff', position: 'relative', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
        <div className="rsp-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: '88vh' }}>

          {/* LEFT — texte */}
          <div className="rsp-hero-text" style={{ padding: '72px 56px 72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>
              <Link href="/" style={{ color: '#bbb', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <span style={{ color: '#0a0a0a' }}>Agence Média</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Expertise Média</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', lineHeight: 0.95, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>CHAQUE LEVIER</span>
              <span style={{ display: 'block' }}>MÉDIA JOUE UN</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>RÔLE PRÉCIS</span>
              <span style={{ display: 'block' }}>DANS LA PERFORMANCE</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 16, maxWidth: 460 }}>
              <strong>Display</strong> pour marquer les esprits. <strong>Vidéo</strong> pour raconter votre histoire. <strong>Audio</strong> pour créer de la proximité. <strong>Programmatique</strong> pour cibler avec précision. <strong>Email</strong> et <strong>SMS</strong> pour déclencher l&apos;action. Le{' '}<Link href="/agence-media/plan-media" style={{ color: '#555', textDecoration: 'underline', textUnderlineOffset: '3px' }}>media digital</Link> n&apos;est pas une addition de canaux. C&apos;est un <strong>système d&apos;activation</strong> où chaque levier intervient à un moment clé du parcours d&apos;achat.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              Chez DARWIN, notre agence média construit des stratégies digitales sur-mesure qui exploitent ces opportunités de conversion pour transformer votre visibilité en{' '}<Link href="/agence-media/generation-de-leads" style={{ color: '#555', textDecoration: 'underline', textUnderlineOffset: '3px' }}>croissance business</Link>.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parlons de vos enjeux média →
              </Link>
              <Link href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Notre méthode
              </Link>
            </div>

            {/* Stats supprimées */}
          </div>

          {/* RIGHT — image */}
          <div className="rsp-hero-img" style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/media/media-hero-bg.jpg"
              alt="Agence Média DARWIN — Stratégie et achat d'espaces"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
              priority
            />
            {/* Overlay gradient left */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />
            {/* Floating stat */}
            <div style={{ position: 'absolute', top: 40, left: 32, background: '#FFF127', padding: '16px 20px', borderRadius: 4 }}>
              <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#0a0a0a' }}>35M+</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>adresses optin</div>
            </div>
            {/* Floating stat 2 */}
            <div style={{ position: 'absolute', bottom: 32, right: 32, background: '#fff', padding: '16px 20px', borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#0a0a0a' }}>8+</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>leviers média intégrés</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── L'ENJEU ─── */}
      <section style={{ background: '#FFF127', padding: '64px 24px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              L&apos;enjeu
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#0a0a0a' }}>
              DES CAMPAGNES LANCÉES,<br />MAIS AUCUNE VISION D&apos;ENSEMBLE.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 20px' }}>
              Display d&apos;un côté, emailing de l&apos;autre, un prestataire pour la vidéo, un autre pour le programmatique. Les formats publicitaires se multiplient, les plateformes changent, les comportements évoluent — et personne ne voit le tableau complet. Vous avez des reportings, mais pas de lecture unifiée de la performance. Chaque levier vit sa vie. Le budget file, les résultats restent flous.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              C&apos;est le symptôme d&apos;un pilotage média fragmenté. Et c&apos;est exactement le problème qu&apos;un{' '}<Link href="/agence-media/audit-strategie-digitale" style={{ color: '#333', textDecoration: 'underline', textUnderlineOffset: '3px' }}>audit de votre stratégie digitale</Link> permet de poser à plat — avant de reconstruire un dispositif qui tient la route.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 24 }}>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>35M+</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>adresses optin</div>
              </div>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>25M+</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>numéros dédupliqués</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QU'EST-CE QU'UNE AGENCE MÉDIA ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* LEFT — text content */}
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                Définition
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px', color: '#0a0a0a' }}>
                QU&apos;EST-CE QU&apos;UNE<br />AGENCE MÉDIA ?
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Une agence média est un partenaire spécialisé dans la planification, la négociation et l&apos;achat d&apos;espaces publicitaires pour le compte d&apos;annonceurs. Elle ne « place pas des pubs ». Elle décide où, quand et comment vos messages atteignent vos audiences — en s&apos;appuyant sur la data, l&apos;intelligence artificielle, les comportements sur internet, les outils multimédia à disposition et vos objectifs marketing. C&apos;est un métier technique, qui combine expertise média, concept créatif et pilotage de la performance.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Concrètement, une agence média intervient à trois niveaux. D&apos;abord, la <Link href="/agence-media/audit-strategie-digitale" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}><strong>stratégie</strong></Link> : identifier les leviers pertinents en fonction de vos cibles, de votre budget et de votre maturité digitale. Ensuite, l&apos;<Link href="/agence-media/plan-media" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}><strong>activation</strong></Link> : paramétrer, lancer et piloter les campagnes sur les plateformes retenues. Enfin, l&apos;<strong>optimisation</strong> : analyser les performances en continu pour réallouer les budgets vers ce qui fonctionne — et couper ce qui ne délivre pas.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Chez DARWIN, nous ajoutons une dimension que peu d&apos;agences média proposent : l&apos;intégration native avec le SEO, le SEA et le Social Ads. Vos campagnes média — qu&apos;elles visent la <Link href="/agence-media/generation-de-leads" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>génération de leads</Link>, la notoriété ou le trafic en magasin — s&apos;inscrivent dans un dispositif d&apos;acquisition digital cohérent, piloté par une même équipe marketing.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', margin: 0, textAlign: 'justify' }}>
                Un utilisateur touché par votre campagne display ne convertit presque jamais au premier contact. Il revient via le SEO sur Google, il vous retrouve sur les réseaux sociaux, il consulte votre contenu marketing. Si chaque levier est géré séparément, <strong>personne ne voit le parcours complet</strong>. Notre cellule R&amp;D source en permanence les nouveaux partenaires et solutions qui émergent. On teste, on évalue, on valide. Pas d&apos;effet de mode — des décisions fondées sur des données.
              </p>
            </div>

            {/* RIGHT — photo with editorial framing */}
            <div style={{ position: 'sticky', top: 100 }}>
              {/* Offset frame behind the image */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: '1px solid #ebebeb', borderRadius: 4, pointerEvents: 'none' }} />
                <Image
                  src="/images/media/agence-media-equipe.jpg"
                  alt="Consultants DARWIN en réunion stratégie média"
                  width={640}
                  height={460}
                  style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block', borderRadius: 4, position: 'relative', zIndex: 1 }}
                />
                {/* Yellow accent bar */}
                <div style={{ position: 'absolute', bottom: -12, left: 0, width: 48, height: 3, background: '#FFF127', zIndex: 2 }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 24, lineHeight: 1.6, fontWeight: 500 }}>
                L&apos;équipe DARWIN en session de pilotage — Aix-en-Provence
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4 PILIERS ─── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre approche
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 700 }}>
              UNE STRATÉGIE MÉDIA<br />COMPLÈTE, PAS DES PUBS DISPERSÉES
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {pillars.map((p, i) => (
              <div
                key={p.id}
                style={{
                  padding: '48px 40px',
                  background: (i === 0 || i === 3) ? '#fafafa' : '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                }}
              >
                <div className="font-anton" style={{ fontSize: '4rem', color: '#f0f0f0', position: 'absolute', top: 16, right: 24, lineHeight: 1, userSelect: 'none' }}>{p.id}</div>
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.05 }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.8rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.04em' }}>
                      <span style={{ width: 6, height: 6, background: '#FFF127', borderRadius: '50%', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES MÉDIA ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Nos services média en détail
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CHAQUE LEVIER MÉDIA<br />A SON RÔLE DANS VOTRE TUNNEL
            </h2>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {services.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: 'block',
                  padding: '36px 32px',
                  background: '#fff',
                  borderTop: `4px solid ${card.accent}`,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                className="levier-card"
              >
                <h3 className="font-anton" style={{ fontSize: '1.5rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 14, lineHeight: 1.1 }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#666', margin: '0 0 24px' }}>{card.desc}</p>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: card.accent === '#FFF127' ? '#0a0a0a' : card.accent }}>Découvrir →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VOS OBJECTIFS, NOTRE STRATÉGIE ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Vos objectifs, notre stratégie
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 800 }}>
              BRANDING, BRANDFORMANCE OU PERFORMANCE : ADAPTEZ VOTRE MÉDIA À VOS PRIORITÉS
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {[
              {
                title: 'Vous voulez développer votre notoriété ?',
                text: "Nous activons les leviers qui marquent les esprits. Display à grande échelle, vidéo immersive, DOOH dans les lieux de passage, audio digital dans les moments d'écoute. L'objectif : maximiser votre reach, installer la répétition sur vos cibles et construire une image de marque forte dans la durée. La notoriété ne se mesure pas en clics — elle se mesure en parts de voix, en mémorisation publicitaire, en trafic direct sur votre site. Nous pilotons ces indicateurs avec la même rigueur que la performance pure.",
              },
              {
                title: "Vous cherchez l'équilibre entre image et résultats ?",
                text: "C'est ce qu'on appelle le brandformance. Construire votre marque tout en générant des résultats mesurables, dans le même dispositif. Cette approche hybride fonctionne particulièrement bien pour les annonceurs qui veulent renforcer leur visibilité sans sacrifier le volume de conversions. Concrètement, ça signifie coupler des formats de notoriété (vidéo, CTV, audio) avec des leviers d'activation directe (emailing, retargeting, SMS). Le branding nourrit la performance, la performance finance le branding. Quand les deux se parlent, le coût d'acquisition baisse — on l'a mesuré chez nos clients retail et e-commerce.",
              },
              {
                title: 'Vous avez besoin de générer du business maintenant ?',
                text: "Retargeting display pour récupérer vos visiteurs, campagnes emailing d'acquisition pour recruter à grande échelle, affiliation pour ne payer que les résultats. Nous déployons les leviers les plus directs pour transformer vos audiences en clients. Chaque action est tracée, chaque euro est optimisé. Pas de budget « image » caché dans un plan qui promet de la performance.",
              },
              {
                title: 'Vous souhaitez booster le trafic dans vos points de vente ?',
                text: "Nous couplons des dispositifs en ultra-local — DOOH programmatique géociblé au kilomètre, campagnes SMS géolocalisées, display contextuel — pour maximiser votre couverture sur cible et votre visibilité locale. Nous analysons en temps réel les retombées en magasin pour piloter les leviers et atteindre le coût par visite le plus bas possible. C'est mesurable. C'est pilotable. Et pour les réseaux de franchise, c'est ce qui fait la différence entre une campagne nationale qui s'évapore et un dispositif local qui remplit les points de vente.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '48px 40px',
                  background: '#fafafa',
                  border: '1px solid #ebebeb',
                }}
              >
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.15, color: '#0a0a0a' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RÉSULTATS CLIENTS ─── */}
      <section style={{ background: '#f4f4f4', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 24 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                La preuve avant tout
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
                DES RÉSULTATS MÉDIA<br />QUE NOS CLIENTS PEUVENT NOMMER
              </h2>
            </div>
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #0a0a0a', paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 32 }}>
              Tous les cas clients →
            </Link>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                client: 'Verisure',
                category: 'SMS · Média',
                result: '8K',
                resultLabel: 'rendez-vous générés / mois',
                period: '+23% de taux de transformation',
                img: '/images/cas-clients/verisure-cover.jpg',
                href: '/cas-clients/verisure',
              },
              {
                client: 'Préfon',
                category: 'Emailing · Média',
                result: '-10%',
                resultLabel: "de coût d'acquisition",
                period: '12 ans de collaboration',
                img: '/images/cas-clients/prefon-cover.jpg',
                href: '/cas-clients/prefon',
              },
              {
                client: 'Acadomia',
                category: 'SMA · Média · Display',
                result: '+65%',
                resultLabel: 'de leads générés / mois',
                period: 'x2 taux de conversion landing page',
                img: '/images/cas-clients/acadomia-cover.jpg',
                href: '/cas-clients/acadomia',
              },
            ].map((c) => (
              <Link key={c.client} href={c.href} style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, height: 420, display: 'block', textDecoration: 'none' }}>
                {/* Photo plein cadre */}
                <Image
                  src={c.img}
                  alt={c.client}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(1.2)' }}
                />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.05) 100%)' }} />
                {/* Bande jaune top */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />
                {/* Contenu superposé */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 32px' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 8 }}>
                    {c.category}
                  </div>
                  <div className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
                    {c.client}
                  </div>
                  <div className="font-anton" style={{ fontSize: '3rem', lineHeight: 1, color: '#FFF127', marginBottom: 6 }}>
                    {c.result}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ddd', marginBottom: 4 }}>{c.resultLabel}</div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{c.period}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MÉTHODE ─── */}
      <section id="methode" style={{ background: '#0a0a0a', padding: '80px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Header row */}
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
                Notre méthode
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, color: '#fff' }}>
                5 ÉTAPES POUR<br />UN MÉDIA RENTABLE
              </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF127', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parler à un expert média →
              </Link>
            </div>
          </div>

          {/* 5 steps — horizontal timeline cards */}
          <div className="rsp-5col" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              {
                num: '01', title: 'Audit', subtitle: 'média complet',
                desc: <span>Nous commençons par analyser votre dispositif digital : campagnes en cours, performances historiques, positionnement concurrentiel, <Link href="/agence-media/audit-strategie-digitale" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>mix marketing</Link>. Cet audit identifie les quick wins et pose les bases d&apos;une stratégie efficace.</span>,
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
              },
              {
                num: '02', title: 'Stratégie', subtitle: 'personnalisée',
                desc: <span>À partir de vos objectifs business, de votre budget et de vos cibles, nous construisons un plan média sur-mesure. Chaque recommandation est argumentée avec des <Link href="/agence-media/nos-engagements" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>projections réalistes</Link>.</span>,
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
              },
              {
                num: '03', title: 'Activation', subtitle: '& lancement',
                desc: <span>Paramétrage des campagnes, mise en place du tracking, création ou adaptation des visuels. Nos consultants seniors prennent en charge l&apos;intégralité du lancement. Canaux, formats, budgets, <Link href="/agence-media/plan-media" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>KPIs</Link>. On lance.</span>,
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              },
              {
                num: '04', title: 'Optimisation', subtitle: 'continue',
                desc: "Nous ne lançons pas vos campagnes pour les laisser tourner seules. A/B tests, réallocation budgétaire, enchères. Chaque jour, nous faisons vivre vos dispositifs pour améliorer les résultats.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
              },
              {
                num: '05', title: 'Reporting', subtitle: '& itération',
                desc: <span>Dashboards personnalisés en temps réel, reportings périodiques avec analyse et recommandations. Vous savez toujours où vous en êtes — et où nous allons. <Link href="/agence-media/faq" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Attribution multi-touch</Link> pour comprendre la contribution réelle de chaque levier.</span>,
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
              },
            ].map((step, i) => (
              <div key={step.num} style={{ position: 'relative', padding: '32px 24px', borderLeft: i > 0 ? '1px solid #1a1a1a' : 'none' }}>
                {/* Yellow top bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />

                {/* Connector dot */}
                <div style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: '50%', background: '#FFF127', border: '2px solid #0a0a0a' }} />

                {/* Icon */}
                <div style={{ marginBottom: 20 }}>
                  {step.icon}
                </div>

                {/* Number */}
                <div className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#fff', marginBottom: 12 }}>{step.num}</div>

                {/* Title */}
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, marginBottom: 4 }}>{step.title}</h3>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{step.subtitle}</div>

                {/* Desc */}
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARWIN DIFFÉRENT ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre différence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.4rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px' }}>
              LE MÉDIA QUI CONVERTIT,<br />PAS JUSTE QUI DIFFUSE
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>
              DARWIN fait partie de la <strong>Creative Thinking Community</strong> — un groupement de talents qui réunit performance digitale, branding, création de sites et UX/UI design. Cette organisation est ce qui nous distingue des agences média classiques et des régies publicitaires : quand vous activez vos <Link href="/agence-media/campagnes-emailing" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>campagnes emailing</Link>, vos <Link href="/agence-media/campagnes-rcs-sms" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>SMS/RCS</Link> ou vos dispositifs en <Link href="/agence-media/tv-segmentee-ctv" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>TV segmentée</Link>, vous bénéficiez d&apos;un collectif de spécialistes complémentaires — mobilisables dès le cadrage du projet.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 40 }}>
              Un visiteur qui découvre votre marque via une campagne <Link href="/agence-media/campagnes-dooh" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>display ou DOOH</Link> sera retouché en SEA, touché en <Link href="/agence-media/audio-digital" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>audio digital</Link>, nourri en contenu. Nous pensons votre stratégie comme un <strong>système</strong>, pas comme une juxtaposition de leviers. La data, la créativité et la performance ne sont pas trois forces à assembler. Ce sont trois langues que DARWIN parle couramment, parce que son équipe les pratique ensemble chaque jour. C&apos;est pour ça que nos clients restent en moyenne 7 ans. Pas parce qu&apos;on les fidélise — parce qu&apos;on leur prouve, mois après mois, que ça marche.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Échangeons sur votre stratégie →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Image ornement — équipe DARWIN */}
            <div style={{ position: 'relative', width: '100%', height: 220, borderRadius: 6, overflow: 'hidden' }}>
              <Image
                src="/images/media/media-ornement.jpg"
                alt="L'équipe DARWIN au travail"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '30+', label: 'Experts seniors', sub: '6+ ans d\'ancienneté moyenne' },
                { num: '35M+', label: 'Adresses optin', sub: 'Bases de données qualifiées' },
                { num: '4', label: 'Entités créatives', sub: 'Creative Thinking Community' },
                { num: '7 ans', label: 'Fidélité client', sub: 'Durée moyenne de collaboration' },
              ].map((item) => (
                <div key={item.num} style={{ padding: '28px 24px', background: '#fafafa', border: '1px solid #ebebeb' }}>
                  <div className="font-anton" style={{ fontSize: '2.2rem', lineHeight: 1, marginBottom: 6, color: '#0a0a0a' }}>{item.num}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 500 }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: '#fafafa', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
            Questions fréquentes
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 56px' }}>
            CE QUE NOS CLIENTS<br />DEMANDENT EN PREMIER
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ borderTop: i === 0 ? '1px solid #e0e0e0' : 'none', borderBottom: '1px solid #e0e0e0' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', cursor: 'pointer', gap: 16, listStyle: 'none' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, color: '#999' }}>+</span>
                </summary>
                <p style={{ padding: '0 0 24px', fontSize: '0.9rem', lineHeight: 1.8, color: '#555', margin: 0, paddingRight: 40 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUTRES EXPERTISES ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40 }}>
            Nos autres expertises
          </p>
          <div className="rsp-6col" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
            {otherExpertises.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                style={{ display: 'block', padding: '24px 20px', background: '#fafafa', border: '1px solid #ebebeb', textDecoration: 'none', transition: 'background 0.15s' }}
              >
                <div className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 6 }}>{e.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 500 }}>{e.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section id="contact" style={{ background: '#FFF127', padding: '96px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 24 }}>
            Premier échange
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 24px', color: '#0a0a0a' }}>
            ÉCHANGEONS SUR<br />VOTRE STRATÉGIE MÉDIA
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Décrivez-nous votre projet et vos enjeux marketing. Nous analysons vos campagnes publicitaires, votre mix média et vos opportunités de visibilité pour développer un dispositif plus performant — et nous revenons vers vous sous 24h ouvrées avec un diagnostic actionnable.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Parlons de vos enjeux média →
            </Link>
            <a href="tel:+33413570900" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #0a0a0a', color: '#0a0a0a', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              +33 (0)4 13 57 09 00
            </a>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#888', marginTop: 24, fontWeight: 500 }}>
            Réponse sous 24h ouvrées · Sans engagement
          </p>
        </div>
      </section>

    </div>
  )
}
