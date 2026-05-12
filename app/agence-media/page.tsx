import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../lib/jsonld'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "Agence Média | Plan média & performance publicitaire | DARWIN",
  description: "Structurez vos investissements média avec DARWIN\u00A0: audit, plan média, génération de leads, achat d'espaces. 23 ans d'expertise digitale.",
  alternates: { canonical: '/agence-media' },
  openGraph: {
    ...ogDefaults,
    title: "Agence Média | Plan média & performance publicitaire | DARWIN",
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
    title: 'Audit de stratégie digitale et de mix marketing',
    desc: "Avant d'activer quoi que ce soit, nous auditons. C'est une étape que beaucoup d'agences survolent, parce qu'elle prend du temps et ne se facture pas toujours facilement. Nous, on la considère comme le socle de tout le reste. L'audit couvre vos campagnes en cours, votre collecte de données, vos performances historiques, votre positionnement concurrentiel et la cohérence de votre mix marketing. Il révèle souvent des angles morts coûteux pour votre entreprise\u00A0: des canaux sous-exploités, des budgets mal répartis, des créas fatiguées, qui tournent depuis trop longtemps.",
    items: ['Audit des campagnes existantes', 'Analyse concurrentielle', 'Diagnostic du mix marketing', 'Recommandations chiffrées et argumentées'],
  },
  {
    id: '02',
    title: 'Plan média & Activation',
    desc: <span><strong>Le plan média traduit votre stratégie en actions concrètes</strong>&nbsp;: canaux activés, messages, formats retenus, emplacements, calendrier de diffusion, budgets par levier et KPIs de pilotage. Un <Link href="/agence-media/plan-media" className="dw-link">plan média</Link> n&apos;est pas figé, il ne s&apos;exécute pas pendant six mois sans y toucher. En réalité, les meilleurs plans sont ceux qui évoluent et qu&apos;on ajuste en quasi temps réel. Pilotage quotidien, tests A/B sur les créas, réallocation budgétaire vers les sources qui performent, ajustement des enchères, affinage des ciblages. C&apos;est ce travail pour optimiser en continu chaque levier qui fait basculer un plan média «&nbsp;correct&nbsp;» vers un dispositif réellement performant, qui atteint les objectifs clients.</span>,
    items: ['Planification multi-leviers', 'Paramétrage & lancement', 'Tests A/B sur les créas', 'Optimisation continue des enchères'],
  },
  {
    id: '03',
    title: 'Génération de leads',
    desc: <span>La <Link href="/agence-media/generation-de-leads" className="dw-link">génération de lead qualifié</Link>, qui convertit en clients finaux, au bon coût d&apos;acquisition et en fil rouge toute l&apos;année, est un challenge que nous relevons depuis 23 ans. Notre approche repose sur des tests et sur l&apos;activation de plusieurs leviers, selon plusieurs modèles économiques d&apos;achat&nbsp;: emailing, SMS, display, affiliation pour ne payer que les résultats, SEO, SEA, SMA. Chaque levier a sa place dans le tunnel de conversion, et c&apos;est leur orchestration qui crée la performance, pas la somme des budgets.</span>,
    items: ['Activation multi-leviers coordonnée', 'Qualification et scoring des leads', 'Attribution multi-touch', 'Reporting orienté business'],
  },
  {
    id: '04',
    title: 'Pilotage & Optimisation',
    desc: "Nos consultants analysent vos performances chaque jour, pas chaque mois. Quand quelque chose ne fonctionne pas, on le vérifie, on itère et si nécessaire on le met en pause. Quand un signal de performance apparaît, on l'exploite. C'est un travail d'artisan, pas d'usine. La protection de votre marque n'est pas une option dans nos dispositifs. Visibilité réelle, élimination du trafic frauduleux, brand safety stricte\u00A0: votre image mérite cette exigence. Nous ne transigerons jamais là-dessus, même si cela implique le refus de certains inventaires publicitaires qui performent.",
    items: ['Dashboard KPI temps réel', 'Brand safety & anti-fraude', 'Réallocation budgétaire pilotée par la donnée', 'Reporting mensuel actionnable'],
  },
]

const services = [
  { href: '/agence-media/audit-strategie-digitale', title: 'Audit & Stratégie digitale', accent: '#FFF127', anchor: "Découvrir notre audit & stratégie digitale", desc: "Analyse complète de votre dispositif digital\u00A0: campagnes en cours, historiques des performances, positionnement concurrentiel et cohérence de votre mix marketing. Nous identifions les quick wins (ces gains rapides sur les leviers existants qui produisent des résultats immédiats) et posons les bases d'une organisation média efficace sur la durée. Chaque recommandation est argumentée avec des projections réalistes, pas des promesses en l'air." },
  { href: '/agence-media/plan-media', title: 'Plan média', accent: '#FFF127', anchor: "Construire votre plan média sur-mesure", desc: "Traduction opérationnelle de votre stratégie en actions concrètes\u00A0: canaux activés, formats retenus, calendrier de diffusion, budgets par levier et KPIs de pilotage. Un plan vivant, piloté au quotidien. Tests A/B, réallocation budgétaire vers les sources qui performent, ajustement des enchères. Nous faisons vivre vos dispositifs pour améliorer les résultats semaine après semaine." },
  { href: '/agence-media/generation-de-leads', title: 'Génération de leads', accent: '#FFF127', anchor: "Activer la génération de leads qualifiés", desc: "Leads qualifiés au bon coût\u00A0: emailing, SMS, display retargeting et affiliation orchestrés dans un tunnel de conversion cohérent. Nous ne livrons pas des volumes. Nous qualifions, nous analysons le parcours de chaque lead du premier point de contact jusqu'à la conversion, pour comprendre quels canaux contribuent réellement à votre business pour concentrer les budgets sur ce qui transforme." },
  { href: '/agence-media/campagnes-emailing', title: 'Campagnes emailing', accent: '#FFF127', anchor: "Déployer vos campagnes emailing à grande échelle", inlineLink: true, desc: <span>Plus de 35 millions d&apos;adresses optin grâce à nos partenaires data, fruit de 23 ans d&apos;expertises en <Link href="/agence-media/campagnes-emailing" className="dw-link">campagnes emailing</Link>, une méthodologie millimétrée en planification et en suivi quotidien. L&apos;email reste un levier redoutablement efficace pour déclencher l&apos;action, à condition de maîtriser la pression marketing pour préserver l&apos;image de marque des marques et des annonceurs. Notre différence&nbsp;: la capacité à activer de la donnée fraîche et performante en fonction de l&apos;audience que vous souhaitez toucher. Trop de messages tue le message. Nous ajustons et contrôlons les campagnes d&apos;acquisition de ce canal.</span> },
  { href: '/agence-media/campagnes-rcs-sms', title: 'SMS / RCS', accent: '#FFF127', anchor: "Lancer vos campagnes SMS et RCS", inlineLink: true, desc: <span>25M+ de numéros dédupliqués grâce à nos partenaires data historiques. L&apos;arrivée du RCS change la donne&nbsp;: images, vidéos, carrousels, <Link href="/agence-media/campagnes-rcs-sms" className="dw-link">RCS conversationnel</Link>. Ce qui était un texto devient une expérience de marque à part entière. Le RCS répond désormais à tous les objectifs (visibilité, trafic, conversion) avec des taux d&apos;ouverture que l&apos;email ne peut pas atteindre.</span> },
  { href: '/agence-media/audio-digital', title: 'Audio digital', accent: '#FFF127', anchor: "Toucher vos audiences en audio digital", inlineLink: true, desc: <span>Podcasts, streaming musical, <Link href="/agence-media/audio-digital" className="dw-link">radio digitale</Link>&nbsp;: l&apos;audio s&apos;est imposé dans les habitudes d&apos;écoute quotidiennes. Spotify, Deezer, webradios, plateformes de podcasts. Nous paramétrons un cadre de diffusion pour toucher vos audiences dans des moments privilégiés où l&apos;attention est captive. Quand un auditeur écoute, il n&apos;est pas en train de scroller. L&apos;audio fonctionne particulièrement bien pour la mémorisation, la connexion émotionnelle avec la marque et les stratégies de communication locales.</span> },
  { href: '/agence-media/tv-segmentee-ctv', title: 'TV segmentée & CTV', accent: '#29C5F5', anchor: "Cibler en TV segmentée et CTV", inlineLink: true, desc: <span>La <Link href="/agence-media/tv-segmentee-ctv" className="dw-link">TV segmentée</Link> s&apos;appuie sur les données des box internet pour adresser des messages différents à chaque foyer, y compris pour un même programme. La CTV (Smart TV, box Android, Apple TV, consoles) capte le regard dans un moment de détente, sur grand écran, souvent partagé à plusieurs. Vous gardez la force d&apos;impact du média TV tout en gagnant la précision du ciblage digital. Vos investissements en achats d&apos;espaces TV deviennent mesurables, optimisés, et chaque diffusion touche vraiment les bonnes personnes et soutiennent votre visibilité.</span> },
  { href: '/agence-media/campagnes-dooh', title: 'Campagnes DOOH', accent: '#29C5F5', anchor: "Géocibler avec nos campagnes DOOH", inlineLink: true, desc: <span>L&apos;affichage digital extérieur prolonge votre présence au-delà des écrans personnels. Panneaux en gare, centres commerciaux, façades d&apos;immeubles, arrêts de bus. La flexibilité totale du <Link href="/agence-media/campagnes-dooh" className="dw-link">DOOH programmatique</Link>&nbsp;: vous adaptez vos créations en fonction de l&apos;heure, de la météo, des événements locaux. Et vous mesurez l&apos;impact sur le trafic en magasin, au kilomètre près.</span> },
]


const faqs = [
  {
    q: "Quelle est la différence entre une agence média et une régie publicitaire\u00A0?",
    a: "Une régie vend de l'espace publicitaire\u00A0: elle représente les éditeurs (sites, chaînes, plateformes). Une agence média, c'est l'inverse\u00A0: elle représente l'annonceur. Elle négocie, planifie et achète ces espaces pour votre compte, en veillant à ce que chaque euro investi serve vos objectifs. Chez DARWIN, nous intégrons le média dans une stratégie d'acquisition globale (SEO, SEA, Social Ads compris).",
  },
  {
    q: "Quel budget minimum faut-il pour travailler avec une agence média\u00A0?",
    a: "Pas de réponse universelle. Ce qui compte, c'est l'adéquation entre votre budget, vos objectifs et les leviers activés. Certains dispositifs sont rentables dès quelques milliers d'euros mensuels. D'autres nécessitent plus d'enveloppe pour atteindre un seuil de diffusion significatif. Nous commençons toujours par un audit pour dimensionner le bon dispositif, pas pour vendre le plus gros.",
  },
  {
    q: "Comment mesurer le ROI de ses campagnes média\u00A0?",
    a: "Ça commence par des indicateurs clairs posés en amont\u00A0: coût par acquisition, coût par lead, taux de conversion, ROAS. Mais le vrai enjeu, c'est l'attribution. Quel canal a initié le parcours\u00A0? Lequel a converti\u00A0? Nous mettons en place des modèles d'attribution multi-touch pour que vous compreniez la contribution réelle de chaque levier, pas seulement le dernier clic.",
  },
  {
    q: "Combien de temps faut-il pour voir les premiers résultats\u00A0?",
    a: "Ça dépend du levier. Le SMS, la programmatique et l'emailing peuvent produire des résultats dès les premières heures. La TV segmentée ou le DOOH demandent un peu plus de temps pour mesurer l'impact réel sur le trafic ou la notoriété. Ce qu'on ne vous promettra jamais\u00A0: des résultats miracles en 48 heures.",
  },
  {
    q: "Comment booster le trafic dans les points de vente\u00A0?",
    a: "Nous couplons des dispositifs en ultra-local pour obtenir une couverture sur cible optimale et maximiser votre visibilité. Nous analysons en temps réel les retombées en magasin afin de piloter les différents leviers et atteindre le coût par visite le plus intéressant.",
  },
  {
    q: "Est-ce qu'une agence média comme DARWIN peut intervenir dans mon secteur d'activité\u00A0?",
    a: "Oui. Nous accompagnons des annonceurs dans des secteurs très différents\u00A0: retail, e-commerce, tourisme, services, formation, santé, immobilier, loisirs, cosmétiques, équipement de la maison, btoc, btob, entre autres. Chaque secteur a ses propres contraintes\u00A0: saisonnalité, cycles de décision, budgets, réglementation, développement territorial, support privilégié par la cible. Ce qui compte, ce n'est pas d'avoir déjà travaillé exactement dans votre niche. C'est de savoir adapter la méthode à vos enjeux spécifiques, selon vos catégories de produits et vos audiences. Et ça, c'est ce que vingt-trois ans de campagnes digitales d'acquisition nous ont appris à faire.",
  },
  {
    q: "Agence média intégrée ou agence média indépendante\u00A0: qu'est-ce qui change\u00A0?",
    a: "Une agence média intégrée dans un grand groupe publicitaire fonctionne avec des accords-cadres et des inventaires pré-négociés. Ça peut être un avantage sur le volume, mais ça crée aussi des biais\u00A0: on vous oriente parfois vers les emplacements que l'agence a intérêt à remplir, pas forcément ceux qui performent le mieux pour vous. DARWIN est indépendant et responsable. Nous n'avons aucun accord exclusif avec aucune régie. Nos recommandations sont dictées par vos données et vos objectifs, pas par un accord commercial avec un partenaire média.",
  },
]

const otherExpertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/agence-seo' },
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/agence-sea' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/agence-sma' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/agence-analytics' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/formations' },
  { title: 'STUDIO CRÉATIF', desc: 'Direction artistique & Contenu', href: '/studio-creatif' },
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

            <h1 className="font-anton" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', lineHeight: 0.95, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>AGENCE MÉDIA,</span>
              <span style={{ display: 'block' }}>CHAQUE LEVIER JOUE UN <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>RÔLE PRÉCIS</span></span>
              <span style={{ display: 'block' }}>DANS LA PERFORMANCE</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 16, maxWidth: 460 }}>
              Une <strong>agence média</strong>, ça ne se limite pas à acheter de la publicité. Display pour marquer les esprits. Vidéo pour raconter votre histoire. Audio pour créer de la proximité. Programmatique pour cibler avec précision. Email et SMS pour déclencher l&apos;action. Le media digital n&apos;est pas une addition de canaux. C&apos;est un système d&apos;activation où chaque levier intervient à un moment clé du parcours d&apos;achat ou de conversion.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              Chez DARWIN, notre <Link href="/" className="dw-link">agence de stratégie marketing digitale</Link> construit des stratégies digitales sur-mesure qui exploitent ces opportunités de conversion pour transformer votre visibilité en croissance business.
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
              alt="Agence Média DARWIN, stratégie et achat d'espaces"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: '65% center', opacity: 0.85 }}
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
                QU&apos;EST-CE QU&apos;UNE<br />AGENCE MÉDIA&nbsp;?
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Une agence média est un <strong>partenaire spécialisé dans la planification, la négociation et l&apos;achat d&apos;espaces publicitaires</strong>&nbsp;pour le compte d&apos;annonceurs. Elle ne «&nbsp;place pas des pubs&nbsp;». Elle décide où, quand et comment vos messages doivent atteindre vos audiences, en s&apos;appuyant sur la data collectée, l&apos;intelligence artificielle, les algorithmes, les comportements digitaux, cet ensemble étant à disposition de vos campagnes digitales et de vos objectifs marketing. Ce sont plusieurs compétences, qui combinent des expertises média et pluridisciplinaires, des concepts créatifs et un pilotage de la performance.
              </p>
              <h3 className="font-anton" style={{ fontSize: '1.35rem', textTransform: 'uppercase', lineHeight: 1.15, margin: '12px 0 16px', color: '#0a0a0a' }}>
                Les missions d&apos;une agence média
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Concrètement, une agence média intervient à trois niveaux. D&apos;abord, l&apos;audit et la stratégie digitale&nbsp;: identifier les leviers pertinents en fonction de vos cibles, de votre budget et de vos objectifs sur le digital. Ensuite, l&apos;activation et le plan média&nbsp;: créer le concept créatif et les messages, paramétrer, lancer, itérer et piloter les campagnes sur les plateformes retenues. Enfin, l&apos;optimisation&nbsp;: analyser les performances en continu pour réallouer les budgets vers ce qui fonctionne, et mettre en pause ce qui ne délivre pas.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', margin: 0, textAlign: 'justify' }}>
                Chez DARWIN, nous ajoutons une dimension que peu d&apos;agences média proposent&nbsp;: nous couvrons et déployons toutes les solutions d&apos;acquisition du digital, avec le SEO, le SEA et le Social Ads. Vos campagnes média (qu&apos;elles visent la génération de leads qualifiés, la croissance du CA, la notoriété ou le trafic en magasin) s&apos;inscrivent dans <strong>un dispositif d&apos;acquisition digital cohérent</strong>, piloté par une même équipe marketing.
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
                L&apos;équipe DARWIN en session de pilotage, Aix-en-Provence
              </p>
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
              Display d&apos;un côté, emailing de l&apos;autre, un prestataire pour la vidéo, un autre pour le programmatique. Les formats publicitaires se multiplient, les plateformes changent, les comportements évoluent. Personne ne voit le tableau complet. Vous avez des reportings, mais pas de lecture unifiée de la performance. Chaque levier vit sa vie. Le budget file, les résultats restent flous.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              C&apos;est le symptôme d&apos;un pilotage média fragmenté. Et c&apos;est exactement <strong>le problème qu&apos;un{' '}<Link href="/agence-media/audit-strategie-digitale" className="dw-link dw-link--on-accent">audit de stratégie digitale</Link> permet de poser à plat</strong>, avant de reconstruire un dispositif qui tient la route.
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
              <div
                key={card.href}
                style={{
                  display: 'block',
                  padding: '36px 32px',
                  background: '#fff',
                  borderTop: `4px solid ${card.accent}`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                className="levier-card"
              >
                <h3 className="font-anton" style={{ fontSize: '1.5rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 14, lineHeight: 1.1 }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#666', margin: '0 0 24px' }}>{card.desc}</p>
                <Link href={card.href} style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: card.accent === '#FFF127' ? '#0a0a0a' : card.accent }}>Découvrir →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VOS OBJECTIFS, NOTRE STRATÉGIE ─── */}
      <section style={{ background: '#fff', padding: '88px 0 96px', borderTop: '1px solid #eee', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

          {/* Header + portrait — layout 2 colonnes asymétriques */}
          <div className="rsp-interview-hero" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center', marginBottom: 64 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                Vos objectifs, notre stratégie
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.4rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 24px', color: '#0a0a0a' }}>
                BRANDING, BRANDFORMANCE OU PERFORMANCE&nbsp;: ADAPTEZ VOTRE MÉDIA À VOS OBJECTIFS
              </h2>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#333', margin: '0 0 32px', maxWidth: 560 }}>
                Directrice média chez DARWIN, Carole Kabanda pilote les dispositifs d&apos;acquisition de marques nationales comme de PME en croissance.
              </p>
              <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 20, maxWidth: 560 }}>
                <p className="font-anton" style={{ fontSize: 'clamp(1.1rem, 1.7vw, 1.5rem)', textTransform: 'uppercase', lineHeight: 1.2, color: '#0a0a0a', margin: 0 }}>
                  «&nbsp;Mon métier, c&apos;est de trouver des solutions clé en main mais de les adapter à chaque stratégie pour en faire des dispositifs uniques et performants.&nbsp;»
                </p>
              </div>
            </div>

            {/* Portrait éditorial */}
            <div style={{ position: 'relative', maxWidth: 360, marginLeft: 'auto' }}>
              <span aria-hidden="true" className="font-anton" style={{ position: 'absolute', left: -32, top: -36, fontSize: 'clamp(5rem, 10vw, 9rem)', lineHeight: 0.7, color: '#FFF127', userSelect: 'none', zIndex: 0, pointerEvents: 'none' }}>«</span>
              <span aria-hidden="true" className="font-anton" style={{ position: 'absolute', right: -20, bottom: -50, fontSize: 'clamp(5rem, 10vw, 9rem)', lineHeight: 0.7, color: '#FFF127', userSelect: 'none', zIndex: 0, pointerEvents: 'none' }}>»</span>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div aria-hidden="true" style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, background: '#0a0a0a', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                  <Image
                    src="/images/team/carole-kabanda.jpg"
                    alt="Carole Kabanda, Directrice Média DARWIN"
                    width={520}
                    height={620}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', filter: 'grayscale(0.1)' }}
                  />
                  <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Q&A — 2x2 grid compact, textes originaux conservés */}
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 56px', borderTop: '1px solid #0a0a0a', paddingTop: 48, marginBottom: 64 }}>
            {[
              {
                num: '01',
                q: 'Vous voulez développer votre notoriété\u00A0?',
                a: <>Nous activons les leviers qui marquent les esprits. Display à grande échelle, vidéo immersive, DOOH dans les lieux de passage, audio digital dans les moments d&apos;écoute. L&apos;objectif&nbsp;: maximiser votre reach, installer la répétition sur vos cibles et construire une image de marque forte dans la durée. La notoriété ne se mesure pas en clics, elle se mesure en parts de voix, en mémorisation publicitaire, en trafic direct sur votre site. Nous pilotons ces indicateurs avec la même rigueur que la performance pure.</>,
              },
              {
                num: '02',
                q: 'Vous cherchez l\u2019équilibre entre image et résultats\u00A0?',
                a: <>C&apos;est ce qu&apos;on appelle le brandformance. Construire votre marque tout en générant des résultats mesurables, dans le même dispositif. Cette approche hybride fonctionne particulièrement bien pour les annonceurs qui veulent renforcer leur visibilité sans sacrifier le volume de conversions. Concrètement, ça signifie coupler des formats de notoriété (vidéo, CTV, audio) qui vont venir nourrir des leviers d&apos;activation directe (emailing, SMS). Le branding nourrit la performance, la performance finance le branding. Quand les deux se parlent, le coût d&apos;acquisition baisse. On l&apos;a mesuré chez nos clients retail et e-commerce.</>,
              },
              {
                num: '03',
                q: 'Vous avez besoin de générer du business maintenant\u00A0?',
                a: <>Retargeting display pour récupérer vos visiteurs, campagnes emailing d&apos;acquisition pour recruter à grande échelle, affiliation pour ne payer que les résultats. Nous déployons les leviers les plus directs pour transformer vos audiences en clients. Chaque action est tracée, chaque euro est optimisé. Pas de budget «&nbsp;image&nbsp;» caché dans un plan qui promet de la performance.</>,
              },
              {
                num: '04',
                q: 'Vous souhaitez booster le trafic dans vos points de vente\u00A0?',
                a: <>Nous couplons des dispositifs en ultra-local (DOOH programmatique géociblé au kilomètre, campagnes SMS géolocalisées, display contextuel) pour maximiser votre couverture sur cible et votre visibilité locale. Nous analysons en temps réel les retombées en magasin pour piloter les leviers et atteindre le coût par visite le plus bas possible. C&apos;est mesurable et piloté. Et pour les réseaux de franchise, c&apos;est ce qui fait la différence entre une campagne nationale qui s&apos;évapore et un dispositif local qui remplit les points de vente.</>,
              },
            ].map((item) => (
              <article key={item.num} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, alignItems: 'start' }}>
                <div className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', lineHeight: 0.85, color: '#0a0a0a', letterSpacing: '-0.03em' }}>{item.num}</div>
                <div>
                  <h3 className="font-anton" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', lineHeight: 1.25, fontWeight: 400, color: '#0a0a0a', margin: '0 0 14px', textTransform: 'none' }}>
                    {item.q}
                  </h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#444', margin: 0 }}>
                    {item.a}
                  </p>
                </div>
              </article>
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
                period: '+23\u00A0% de taux de transformation',
                img: '/images/cas-clients/verisure-cover.jpg',
                href: '/cas-clients/verisure',
              },
              {
                client: 'Préfon',
                category: 'Emailing · Média',
                result: '-10\u00A0%',
                resultLabel: "de coût d'acquisition",
                period: '12 ans de collaboration',
                img: '/images/cas-clients/prefon-cover.jpg',
                href: '/cas-clients/prefon',
              },
              {
                client: 'Acadomia',
                category: 'SMA · Média · Display',
                result: '+65\u00A0%',
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                desc: "Nous commençons par analyser votre dispositif digital\u00A0: campagnes en cours, historiques des performances, positionnement concurrentiel, mix marketing. Cet audit identifie les quick wins et pose les bases d'une stratégie efficace.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
              },
              {
                num: '02', title: 'Stratégie', subtitle: 'personnalisée',
                desc: "À partir de vos objectifs business, de votre budget et de vos cibles, nous construisons un plan média sur-mesure. Chaque recommandation est justifiée et proposée avec des projections réalistes.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
              },
              {
                num: '03', title: 'Activation', subtitle: '& lancement',
                desc: "Paramétrage des campagnes, mise en place du tracking, création ou adaptation des visuels. Nos consultants seniors prennent en charge l'intégralité du lancement selon votre plan média et ses KPIs. On lance.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              },
              {
                num: '04', title: 'Optimisation', subtitle: 'continue',
                desc: "Nous ne lançons pas vos campagnes pour les laisser tourner seules. A/B tests, réallocation budgétaire, enchères. Chaque jour, nous faisons vivre vos dispositifs pour améliorer les résultats.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
              },
              {
                num: '05', title: 'Reporting', subtitle: '& itération',
                desc: "Dashboards personnalisés en temps réel, reportings périodiques avec analyse et recommandations. Vous savez toujours où vous en êtes, et où nous allons. Attribution multi-touch pour comprendre la contribution réelle de chaque levier.",
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
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 40 }}>
              DARWIN fait partie de la Creative Thinking Community, un groupement de talents qui réunit performance digitale, branding, création de sites et UX/UI design. Cette organisation est ce qui nous distingue des agences média classiques et des régies publicitaires&nbsp;: quand vous activez vos campagnes emailing, vos SMS/RCS ou vos dispositifs en TV segmentée, vous bénéficiez d&apos;un collectif de spécialistes complémentaires, mobilisables dès le cadrage du projet.
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
                sizes="(max-width: 768px) 100vw, 50vw"
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
            Décrivez-nous votre projet et vos enjeux marketing. Nous analysons vos campagnes publicitaires, votre mix média et vos opportunités de visibilité pour développer un dispositif plus performant. Nous revenons vers vous sous 24h ouvrées avec un diagnostic actionnable.
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
