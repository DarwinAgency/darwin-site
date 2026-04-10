import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DARWIN_YEARS } from '../lib/darwin'
import { faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from '../lib/jsonld'

export const metadata: Metadata = {
  title: "Agence Média — Stratégie, Planification & Achat d'Espaces | DARWIN",
  description: "Notre agence média vous accompagne dans la définition de votre stratégie médias, la planification et l'achat d'espaces. Audit, plan média, leads : nos expertises.",
  alternates: { canonical: '/agence-media' },
  openGraph: {
    title: "Agence Média — Stratégie, Planification & Achat d'Espaces | DARWIN",
    description: "Agence média experte depuis 2003. Programmatique, display, TV segmentée, DOOH, emailing, SMS/RCS. Structurez vos investissements publicitaires.",
    url: 'https://darwin-agency.fr/agence-media',
    images: [{ url: 'https://darwin-agency.fr/images/og-default.jpg', width: 1200, height: 630, alt: "DARWIN Agence Média" }],
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: `${DARWIN_YEARS} ans`, label: "d'expertise média" },
  { num: '400+', label: 'clients accompagnés' },
  { num: '7 ans', label: 'de fidélité moyenne' },
]

const pillars = [
  {
    id: '01',
    title: 'Stratégie & Audit',
    desc: "Avant d'activer quoi que ce soit, nous auditons. Vos campagnes en cours, vos performances historiques, votre positionnement concurrentiel et la cohérence de votre mix marketing. L'audit révèle les angles morts coûteux : canaux sous-exploités, budgets mal répartis, ciblages trop larges.",
    items: ['Audit des campagnes existantes', 'Analyse concurrentielle', 'Diagnostic du mix marketing', 'Recommandations chiffrées et argumentées'],
  },
  {
    id: '02',
    title: 'Plan média & Activation',
    desc: "Le plan média traduit votre stratégie en actions concrètes : canaux activés, formats retenus, calendrier de diffusion, budgets par levier et KPIs de pilotage. Nous pilotons vos dispositifs au quotidien : tests A/B, réallocation budgétaire, ajustement des enchères.",
    items: ['Planification multi-leviers', 'Paramétrage & lancement', 'Tests A/B sur les créas', 'Optimisation continue des enchères'],
  },
  {
    id: '03',
    title: 'Génération de leads',
    desc: "Générer des leads qualifiés, au bon coût, de façon reproductible. Notre approche repose sur l'activation coordonnée de plusieurs leviers : programmatique pour le reach, emailing et SMS pour la conversion directe, retargeting pour récupérer les visiteurs engagés.",
    items: ['Activation multi-leviers coordonnée', 'Qualification et scoring des leads', 'Attribution multi-touch', 'Reporting orienté business'],
  },
  {
    id: '04',
    title: 'Pilotage & Optimisation',
    desc: "Nos consultants analysent vos performances chaque jour, pas chaque mois. Brand safety, visibilité réelle, élimination du trafic frauduleux. Dashboards accessibles en temps réel. La transparence chez DARWIN, ce n'est pas un argument commercial — c'est un fonctionnement.",
    items: ['Dashboard KPI temps réel', 'Brand safety & anti-fraude', 'Réallocation budgétaire data-driven', 'Reporting mensuel actionnable'],
  },
]

const services = [
  { href: '/agence-media/audit-strategie-digitale', title: 'Audit & Stratégie digitale', accent: '#FFF127', desc: "Analyse complète de vos campagnes, performances et positionnement concurrentiel. Recommandations chiffrées et plan d'action priorisé selon vos objectifs business." },
  { href: '/agence-media/plan-media', title: 'Plan média', accent: '#FFF127', desc: "Traduction opérationnelle de votre stratégie : canaux, formats, calendrier, budgets et KPIs. Un plan vivant, ajusté au quotidien pour maximiser la rentabilité." },
  { href: '/agence-media/generation-de-leads', title: 'Génération de leads', accent: '#FFF127', desc: "Leads qualifiés au bon coût : programmatique, emailing, SMS, retargeting et affiliation orchestrés dans un tunnel de conversion cohérent." },
  { href: '/agence-media/campagnes-emailing', title: 'Campagnes emailing', accent: '#FFF127', desc: "Accès à 35M+ d'adresses optin, méthodologie stricte de pression marketing. Taux de conversion parmi les meilleurs du marché." },
  { href: '/agence-media/campagnes-rcs-sms', title: 'SMS / RCS', accent: '#FFF127', desc: "25M+ de numéros dédupliqués. Le RCS transforme un simple texto en expérience de marque : images, vidéos, carrousels, conversations interactives." },
  { href: '/agence-media/audio-digital', title: 'Audio digital', accent: '#FFF127', desc: "Podcasts, streaming, radio digitale : un terrain d'attention rare. Quand un auditeur écoute votre message, il n'est pas en train de scroller." },
  { href: '/agence-media/tv-segmentee-ctv', title: 'TV segmentée & CTV', accent: '#29C5F5', desc: "L'impact du média TV avec la précision du ciblage digital. Messages différenciés par foyer, mesure des retombées et optimisation en continu." },
  { href: '/agence-media/campagnes-dooh', title: 'Campagnes DOOH', accent: '#29C5F5', desc: "Panneaux digitaux en gare, centre commercial, façade — avec la capacité d'adapter les créas en temps réel selon l'heure, la météo ou les événements." },
]


const faqs = [
  {
    q: "Quelle est la différence entre une agence média et une régie publicitaire ?",
    a: "Une régie vend de l'espace publicitaire — elle représente les éditeurs (sites, chaînes, plateformes). Une agence média, c'est l'inverse : elle représente l'annonceur. Elle négocie, planifie et achète ces espaces pour votre compte, en veillant à ce que chaque euro investi serve vos objectifs. Chez DARWIN, nous allons plus loin en intégrant le média dans une stratégie d'acquisition globale qui inclut le SEO, le SEA et le Social Ads.",
  },
  {
    q: "Quel budget minimum faut-il pour travailler avec une agence média ?",
    a: "Il n'y a pas de réponse universelle. Ce qui compte, c'est l'adéquation entre votre budget, vos objectifs et les leviers activés. Certains dispositifs sont rentables dès quelques milliers d'euros mensuels, d'autres nécessitent une enveloppe plus conséquente pour atteindre un seuil de diffusion significatif. Nous commençons toujours par un audit pour dimensionner le bon dispositif — pas pour vendre le plus gros.",
  },
  {
    q: "Comment mesurer le ROI de ses campagnes média ?",
    a: "La mesure du ROI commence par la définition d'indicateurs clairs en amont : coût par acquisition, coût par lead, taux de conversion, ROAS. Mais le vrai enjeu, c'est l'attribution. Quel canal a initié le parcours ? Lequel a converti ? Nous mettons en place des modèles d'attribution multi-touch pour que vous compreniez la contribution réelle de chaque levier — pas seulement celle du dernier clic.",
  },
  {
    q: "Combien de temps faut-il pour voir les premiers résultats ?",
    a: "Ça dépend du levier. Le programmatique et l'emailing peuvent produire des résultats dès les premières semaines. La TV segmentée ou le DOOH demandent souvent un à deux mois pour mesurer l'impact réel sur le trafic en point de vente ou la notoriété. Ce qu'on ne vous promettra jamais : des résultats miracles en 48 heures.",
  },
  {
    q: "Pourquoi choisir DARWIN plutôt qu'une agence média traditionnelle ?",
    a: "Chez DARWIN, l'équipe qui gère votre programmatique parle à celle qui gère votre SEA. Chaque jour. Vos campagnes média ne vivent pas en silo : elles s'inscrivent dans un écosystème d'acquisition cohérent. Nos consultants seniors — six ans d'ancienneté moyenne — gèrent directement vos campagnes. Pas de junior en première ligne. C'est pour ça que nos clients restent en moyenne sept ans.",
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

            <h1 className="font-anton" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>STRUCTURER.</span>
              <span style={{ display: 'block' }}>ACTIVER.</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>PERFORMER.</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              Une agence média qui structure vos investissements publicitaires, pilote l&apos;<Link href="/agence-media/plan-media" style={{ color: '#555', textDecoration: 'underline', textUnderlineOffset: '3px' }}>achat d&apos;espaces</Link> et transforme votre budget en <Link href="/agence-media/generation-de-leads" style={{ color: '#555', textDecoration: 'underline', textUnderlineOffset: '3px' }}>résultats mesurables</Link>. Depuis {DARWIN_YEARS} ans.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parlons de vos enjeux média →
              </Link>
              <Link href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Notre méthode
              </Link>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 0, borderTop: '1px solid #eee', paddingTop: 32 }}>
              {stats.map((s, i) => (
                <div key={s.num} style={{ flex: 1, paddingRight: 24, borderRight: i < stats.length - 1 ? '1px solid #eee' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                  <div className="font-anton" style={{ fontSize: '2rem', lineHeight: 1, marginBottom: 4, color: '#0a0a0a' }}>{s.num}</div>
                  <div style={{ fontSize: '0.68rem', color: '#aaa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
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
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              Vous investissez en média digital, mais vous ne savez pas vraiment ce qui performe — ni pourquoi. Des reportings fragmentés, des canaux gérés par des prestataires différents, et cette impression tenace que chaque euro pourrait travailler mieux. C&apos;est précisément là qu&apos;un <Link href="/agence-media/audit-strategie-digitale" style={{ color: '#333', textDecoration: 'underline', textUnderlineOffset: '3px' }}>audit de votre stratégie digitale</Link> change la donne.
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
                Une agence média est un partenaire spécialisé dans la planification, la négociation et l&apos;achat d&apos;espaces publicitaires pour le compte d&apos;annonceurs. Son rôle ne se limite pas à « placer des pubs » : elle définit où, quand et comment vos messages atteignent vos audiences.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Concrètement, une agence média intervient à trois niveaux. D&apos;abord, la <Link href="/agence-media/audit-strategie-digitale" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}><strong>stratégie</strong></Link> : identifier les leviers pertinents. Ensuite, l&apos;<Link href="/agence-media/plan-media" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}><strong>activation</strong></Link> : paramétrer, lancer et piloter les campagnes. Enfin, l&apos;<strong>optimisation</strong> : analyser et réallouer les budgets vers ce qui fonctionne.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 20, textAlign: 'justify' }}>
                Chez DARWIN, nous ajoutons une dimension que peu d&apos;agences média proposent : l&apos;intégration native avec les métiers du SEO, du SEA et du Social Ads. Vos campagnes média — qu&apos;il s&apos;agisse de <Link href="/agence-media/generation-de-leads" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>génération de leads</Link> ou de notoriété — ne vivent pas en silo.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', margin: 0, textAlign: 'justify' }}>
                Un utilisateur touché par votre campagne display ne convertit presque jamais au premier contact. Il revient par une recherche Google, il vous retrouve sur les réseaux, il lit un article. Si chaque levier est géré par un prestataire différent, <strong>personne ne voit le parcours complet</strong>. Chez nous, l&apos;équipe qui gère votre programmatique parle à celle qui gère votre SEA. Chaque jour.
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
                desc: <span>Campagnes, performances, concurrence, <Link href="/agence-media/audit-strategie-digitale" style={{ color: '#888', textDecoration: 'underline', textUnderlineOffset: '3px' }}>mix marketing</Link>.</span>,
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
              },
              {
                num: '02', title: 'Stratégie', subtitle: 'personnalisée',
                desc: <span>Recommandations chiffrées, <Link href="/agence-media/nos-engagements" style={{ color: '#888', textDecoration: 'underline', textUnderlineOffset: '3px' }}>projections réalistes</Link>.</span>,
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
              },
              {
                num: '03', title: 'Activation', subtitle: '& lancement',
                desc: <span>Canaux, formats, budgets, <Link href="/agence-media/plan-media" style={{ color: '#888', textDecoration: 'underline', textUnderlineOffset: '3px' }}>KPIs</Link>. On lance.</span>,
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              },
              {
                num: '04', title: 'Optimisation', subtitle: 'continue',
                desc: "A/B tests, réallocation, enchères. Chaque jour.",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
              },
              {
                num: '05', title: 'Reporting', subtitle: '& itération',
                desc: <span>Dashboards temps réel, <Link href="/agence-media/faq" style={{ color: '#888', textDecoration: 'underline', textUnderlineOffset: '3px' }}>attribution multi-touch</Link>.</span>,
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
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>{step.subtitle}</div>

                {/* Desc */}
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#666', margin: 0 }}>{step.desc}</p>
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
              DARWIN fait partie de la <strong>Creative Thinking Community</strong> — un groupement de talents qui réunit performance digitale, branding, création de sites et UX/UI design. Quand vous travaillez avec nous sur vos <Link href="/agence-media/campagnes-emailing" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>campagnes emailing</Link>, vos <Link href="/agence-media/campagnes-rcs-sms" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>SMS/RCS</Link> ou vos dispositifs <Link href="/agence-media/tv-segmentee-ctv" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>TV segmentée</Link>, vous bénéficiez de cet écosystème complet sans avoir à coordonner plusieurs prestataires.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 40 }}>
              Un visiteur qui découvre votre marque via une campagne <Link href="/agence-media/campagnes-dooh" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>display ou DOOH</Link> sera retouché en SEA, touché en <Link href="/agence-media/audio-digital" style={{ color: '#444', textDecoration: 'underline', textUnderlineOffset: '3px' }}>audio digital</Link>, nourri en contenu. Nous pensons votre stratégie comme un <strong>système</strong>, pas comme une juxtaposition de leviers.
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
            Décrivez-nous votre situation. Nous analysons vos campagnes, votre mix média et vos opportunités — et nous revenons vers vous sous 24h ouvrées avec un diagnostic actionnable.
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
