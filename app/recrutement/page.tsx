import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import OffreCard from './OffreCard'
import { DARWIN_YEARS } from '../lib/darwin'
import { ogDefaults } from '../lib/og'

export const metadata: Metadata = {
  title: "Rejoindre DARWIN — Offres d'emploi à Aix-en-Provence",
  description: "DARWIN recrute des experts en marketing digital : SEO, SEA, SMA, Analytics. Découvrez nos offres et rejoignez une équipe de 30+ experts seniors à Aix-en-Provence.",
  alternates: { canonical: '/recrutement' },
  openGraph: {
    ...ogDefaults,
    images: [{ url: '/images/team/recrutement-hero.jpg', width: 1200, height: 630, alt: "Rejoindre l'équipe DARWIN" }],
    title: "Rejoindre DARWIN — Offres d'emploi",
    description: "Rejoignez une équipe de 30+ experts seniors. SEO, SEA, SMA, Analytics à Aix-en-Provence.",
    url: 'https://darwin-agency.fr/recrutement',
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: '30+', label: 'experts seniors' },
  { num: `${DARWIN_YEARS} ans`, label: "d'existence" },
  { num: '7 ans', label: 'de fidélité client' },
]

export const offres = [
  {
    id: 'business-developer-senior',
    titre: 'Digital Business Developer Senior',
    type: 'CDI',
    lieu: 'Aix-en-Provence',
    domaine: 'Business',
    description: "Vous développez le portefeuille clients de DARWIN en identifiant de nouvelles opportunités, en pilotant le cycle de vente complet et en co-construisant des propositions stratégiques avec les équipes expertes.",
    missions: [
      "Prospection et qualification des leads entrants et sortants",
      "Pilotage du cycle de vente de A à Z (pitch, soutenance, closing)",
      "Construction des propositions commerciales avec les consultants",
      "Suivi et fidélisation du portefeuille clients existant",
      "Participation aux événements sectoriels et salons",
    ],
    profil: [
      "5 ans d'expérience minimum en développement commercial digital",
      "Connaissance solide des leviers SEO, SEA, SMA et Analytics",
      "Excellentes capacités de présentation et de négociation",
      "Autonome, ambitieux(se), orienté(e) résultats",
    ],
  },
  {
    id: 'consultant-sea',
    titre: 'Consultant SEA',
    type: 'CDI',
    lieu: 'Aix-en-Provence',
    domaine: 'SEA',
    description: "Vous gérez et optimisez les campagnes Google Ads et Bing Ads de nos clients (e-commerce, BtoB, collectivités). Vous êtes force de proposition sur les stratégies d'acquisition payante.",
    missions: [
      "Création, gestion et optimisation de campagnes Search, Shopping, Display, Performance Max",
      "Analyse des performances et production de reportings mensuels commentés",
      "Recommandations stratégiques et budgétaires",
      "Veille sur les évolutions des plateformes Google Ads et Bing Ads",
      "Participation aux restitutions clients",
    ],
    profil: [
      "2 ans d'expérience minimum en gestion de campagnes Google Ads",
      "Certification Google Ads appréciée",
      "Maîtrise de Google Analytics 4 et Google Tag Manager",
      "Rigueur analytique et sens du détail",
    ],
  },
  {
    id: 'stage-marketing-digital',
    titre: 'Stage en Marketing Digital',
    type: 'Stage 6 mois',
    lieu: 'Aix-en-Provence',
    domaine: 'Marketing',
    description: "Vous participez opérationnellement aux campagnes de nos clients : media planning, emailing, programmatique, DOOH, vidéo, content. Un stage formateur au cœur d'une agence full-service.",
    missions: [
      "Participation à la mise en place des campagnes publicitaires (emailing, programmatique, vidéo…)",
      "Négociation et achat d'espaces publicitaires avec les régies partenaires",
      "Suivi et optimisation des campagnes avec la chef de projet",
      "Création de reportings clients",
      "Benchmark concurrentiel et veille sectorielle",
    ],
    profil: [
      "Formation Bac+4/5 en marketing digital ou communication",
      "Sens commercial et aisance téléphonique",
      "Esprit analytique et curiosité",
      "Maîtrise du Pack Office",
    ],
  },
]

const valeurs = [
  {
    id: '01',
    titre: 'Performance',
    desc: `${DARWIN_YEARS} ans d'expertise au service des résultats. Chaque décision est orientée impact mesurable — pas de promesses sans données derrière.`,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4,28 12,18 18,22 28,8" />
        <polyline points="22,8 28,8 28,14" />
      </svg>
    ),
  },
  {
    id: '02',
    titre: 'Intelligence collective',
    desc: "Ensemble, on va plus loin. Chaque projet mobilise toutes les expertises de l'agence. Ici, le cloisonnement n'a pas sa place.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="4" />
        <circle cx="22" cy="10" r="4" />
        <circle cx="16" cy="22" r="4" />
        <line x1="13.5" y1="13" x2="14.5" y2="18.5" />
        <line x1="18.5" y1="13" x2="17.5" y2="18.5" />
        <line x1="13" y1="10" x2="18" y2="10" />
      </svg>
    ),
  },
  {
    id: '03',
    titre: 'Entraide',
    desc: "Tout le monde compte, tout le monde progresse. La montée en compétences est une priorité partagée — pas réservée à quelques-uns.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 26c0-4 3.6-7 8-7h8c4.4 0 8 3 8 7" />
        <circle cx="16" cy="11" r="5" />
        <path d="M22 6c2 1 3 3 3 5" />
        <path d="M10 6C8 7 7 9 7 11" />
      </svg>
    ),
  },
  {
    id: '04',
    titre: 'Rigueur',
    desc: "Les détails font la différence. On ne livre pas du bon — on livre du très bon. Chaque recommandation est étayée, chaque chiffre est vérifiable.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="12" r="8" />
        <polyline points="12,12 15,15 21,9" />
        <polyline points="10,20 8,28 16,24 24,28 22,20" />
      </svg>
    ),
  },
]

const avantages = [
  {
    label: 'Mutuelle santé',
    value: 'Prise en charge à 100% par DARWIN',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21S3 14.5 3 8.5a5.5 5.5 0 0 1 9-4.2A5.5 5.5 0 0 1 21 8.5C21 14.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    label: 'Formations continues',
    value: 'Sur tous les leviers digitaux',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M7 9v5c0 1.5 2.5 3 5 3s5-1.5 5-3V9" />
      </svg>
    ),
  },
  {
    label: 'Certifications',
    value: 'Google, Meta, Microsoft',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="6" />
        <polyline points="9,9 11,11 15,7" />
        <path d="M8 15l-2 6 6-3 6 3-2-6" />
      </svg>
    ),
  },
  {
    label: 'Évolution rapide',
    value: 'Structure à taille humaine',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3,17 9,11 13,15 21,7" />
        <polyline points="16,7 21,7 21,12" />
      </svg>
    ),
  },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function RecrutementPage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
        <div className="rsp-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: '88vh' }}>

          {/* LEFT — texte */}
          <div className="rsp-hero-text" style={{ padding: '72px 56px 72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>
              <Link href="/" style={{ color: '#bbb', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <span style={{ color: '#0a0a0a' }}>Nous rejoindre</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Carrières chez DARWIN</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: 0.92, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>REJOINDRE</span>
              <span style={{ display: 'block' }}>UNE ÉQUIPE</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>AUX MULTIPLES</span>
              <span style={{ display: 'block' }}>TALENTS.</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              On ne cherche pas des CV bien remplis. On cherche des personnalités audacieuses, curieuses, prêtes à relever des défis dans une agence indépendante de 30+ experts.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="#offres" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Voir nos offres →
              </Link>
              <Link href="#postuler" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #0a0a0a', color: '#0a0a0a', padding: '14px 28px', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Candidature spontanée
              </Link>
            </div>

            {/* Stats */}
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
              src="/images/team/recrutement-hero.jpg"
              alt="Rejoindre l'équipe DARWIN"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.75 }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 40%)' }} />
          </div>
        </div>
      </section>

      {/* ─── PHRASE CLÉ ─── */}
      <section style={{ background: '#FFF127', padding: '64px 24px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Notre philosophie RH
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#0a0a0a' }}>
              DES EXPERTS QUI RESTENT.<br />EN MOYENNE 7 ANS.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 24px' }}>
              Chez DARWIN, la fidélité ne vaut pas que côté clients. Nos collaborateurs restent parce qu&apos;ils progressent, sont écoutés et travaillent sur des projets qui ont du sens. On ne recrute pas pour combler un poste — on recrute pour construire quelque chose ensemble.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>400+</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>clients accompagnés</div>
              </div>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>2003</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>année de création</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALEURS ─── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Ce qui nous anime
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 700, color: '#0a0a0a' }}>
              DES VALEURS QUI<br />NE SONT PAS UN SLOGAN
            </h2>
          </div>

          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {valeurs.map((v, i) => (
              <div
                key={v.id}
                style={{
                  padding: '48px 40px',
                  background: (i === 0 || i === 3) ? '#fafafa' : '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                }}
              >
                <div className="font-anton" style={{ fontSize: '4rem', color: '#f0f0f0', position: 'absolute', top: 16, right: 24, lineHeight: 1, userSelect: 'none' }}>{v.id}</div>
                <div style={{ marginBottom: 20 }}>{v.icon}</div>
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.05, color: '#0a0a0a' }}>{v.titre}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HAPPY AT WORK ─── */}
      <section style={{ background: '#fafafa', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 72, alignItems: 'center' }}>

            {/* Image */}
            <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', background: '#0a0a0a' }}>
              <Image
                src="/images/team/happy-at-work.jpg"
                alt="Happy At Work chez DARWIN — épanouissement et cohésion d'équipe"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div style={{ position: 'absolute', left: 24, bottom: 24, background: '#FFF127', padding: '10px 16px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0a0a0a' }}>
                Happy At Work
              </div>
            </div>

            {/* Texte */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Notre approche RH</span>
              </div>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 28px', color: '#0a0a0a' }}>
                CULTIVER L&apos;ÉPANOUISSEMENT<br />ET LA COHÉSION
              </h2>
              <p
                style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', margin: '0 0 40px', maxWidth: 620 }}
                dangerouslySetInnerHTML={{ __html: "Nous proposons un <strong>environnement professionnel stimulant</strong>. Le <strong>bien-être et la sécurité</strong> de chacun sont prioritaires. Notre approche &lsquo;<strong>Happy At Work</strong>&rsquo; combine <strong>confort, flexibilité et développement professionnel</strong>." }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Cadre de travail</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Espaces collaboratifs</strong> conçus pour favoriser le partage d&rsquo;idées, <strong>terrasse aménagée</strong> (barbecue, jardin paysagé, transats), zones de détente avec <strong>cuisine équipée</strong>, <strong>salle de repos</strong> avec console de jeux et télé, et <strong>parking privatif sécurisé</strong> pour un quotidien serein." }}
                  />
                </div>

                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Équilibre et cohésion</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Horaires flexibles</strong>, <strong>télétravail une journée par semaine</strong> avec mise à disposition de matériel, <strong>activités sportives régulières</strong> (pétanque, badminton, ping-pong), <strong>séminaires annuels</strong> d&rsquo;une journée suivis d&rsquo;une soirée et <strong>séminaire biennal de 3-4 jours à l&rsquo;étranger</strong> pour renforcer l&rsquo;esprit et la cohésion d&rsquo;équipe." }}
                  />
                </div>

                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Culture inclusive</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Politique d&rsquo;inclusion et d&rsquo;égalité des chances</strong> (handicap, diversité, formations adaptées), <strong>parité homme/femme</strong>, <strong>lutte active contre les discriminations et le harcèlement</strong>, et <strong>respect absolu de la vie privée</strong>." }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGIR POUR LA PLANÈTE ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 72, alignItems: 'center' }}>

            {/* Texte */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Engagement environnemental</span>
              </div>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 28px', color: '#0a0a0a' }}>
                AGIR POUR<br />LA PLANÈTE
              </h2>
              <p
                style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', margin: '0 0 40px', maxWidth: 620 }}
                dangerouslySetInnerHTML={{ __html: "Notre <strong>engagement environnemental</strong> se traduit par des <strong>actions réalisées au quotidien</strong>. Il implique l&rsquo;ensemble de nos collaborateurs dans une <strong>démarche éco-responsable globale</strong>." }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Sensibilisation active</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Formations régulières</strong> et affichages dans les locaux, <strong>communication dédiée</strong> via newsletters et supports internes pour tenir informés nos équipes de nos <strong>initiatives RSE</strong>." }}
                  />
                </div>

                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Impact maîtrisé</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Politique de réduction des déchets</strong> avec tri sélectif et suppression des plastiques à usage unique, <strong>dématérialisation complète</strong> des documents et processus internes, utilisation de <strong>matériaux éco-responsables et recyclés</strong> pour l&rsquo;aménagement des locaux, et <strong>optimisation énergétique</strong> (éclairage LED, capteurs de présence, équipements basse consommation)." }}
                  />
                </div>

                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Mobilité durable</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Déplacements éco-responsables</strong> encouragés avec <strong>indemnités</strong> pour les salariés utilisant le vélo ou les transports en commun, installation de <strong>bornes de recharge</strong> pour véhicules électriques sur le parking de l&rsquo;entreprise." }}
                  />
                </div>

                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Initiatives vertes</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Partenariat avec des associations</strong> pour la compensation carbone, organisation de <strong>journées de bénévolat</strong> pour des actions locales comme le nettoyage d&rsquo;espaces verts et <strong>actions de sensibilisation en écoles</strong>." }}
                  />
                </div>
              </div>
            </div>

            {/* Badge Ecovadis */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, position: 'sticky', top: 24 }}>
              <div style={{ aspectRatio: '1 / 1', width: '100%', maxWidth: 420, background: '#fafafa', border: '1px solid #ebebeb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
                <Image
                  src="/images/team/ecovadis-argent-2024.jpg"
                  alt="DARWIN — Médaille Argent Ecovadis 2024"
                  width={420}
                  height={420}
                  style={{ width: '100%', height: 'auto', maxWidth: 320 }}
                />
              </div>
              <div style={{ textAlign: 'center', maxWidth: 360 }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 6px' }}>Médaille Argent 2024</p>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#888', margin: 0 }}>Évaluation Ecovadis — démarche RSE auditée et reconnue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÉTHIQUE & RESPONSABILITÉ ─── */}
      <section style={{ background: '#fafafa', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 72, alignItems: 'center' }}>

            {/* Image GAELLE */}
            <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', background: '#0a0a0a' }}>
              <Image
                src="/images/team/gaelle-ethique.jpg"
                alt="Gaëlle — DARWIN, éthique et responsabilité"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div style={{ position: 'absolute', left: 24, bottom: 24, background: '#FFF127', padding: '10px 16px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0a0a0a' }}>
                Éthique
              </div>
            </div>

            {/* Texte */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Gouvernance &amp; partenariats</span>
              </div>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 28px', color: '#0a0a0a' }}>
                S&apos;ENGAGER AVEC ÉTHIQUE<br />ET RESPONSABILITÉ
              </h2>
              <p
                style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', margin: '0 0 40px', maxWidth: 620 }}
                dangerouslySetInnerHTML={{ __html: "Nous créons des <strong>relations durables</strong> basées sur la <strong>confiance, la transparence et le respect mutuel</strong> avec l&rsquo;ensemble de nos partenaires." }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Cadre éthique solide</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Conformité légale stricte</strong>, <strong>protection des données personnelles</strong>, <strong>sécurité au travail renforcée</strong>." }}
                  />
                </div>

                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Relations équitables</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Concurrence loyale</strong>, gestion transparente des <strong>conflits d&rsquo;intérêts</strong>, <strong>lutte contre la corruption</strong>." }}
                  />
                </div>

                <div style={{ borderLeft: '3px solid #FFF127', paddingLeft: 22 }}>
                  <h3 className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '0.02em' }}>Achats responsables</h3>
                  <p
                    style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#555', margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "<strong>Sélection méticuleuse</strong> des fournisseurs éthiques, priorité aux <strong>circuits courts France/Europe</strong>, <strong>partenariats durables</strong>." }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE BAR — SANTÉ & CARRIÈRE ─── */}
      <section style={{ background: '#0a0a0a', padding: '56px 24px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 2.2fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ display: 'inline-block', width: 24, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFF127' }}>En plus</span>
            </div>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CE QU&apos;ON VOUS OFFRE<br />AUSSI
            </h2>
          </div>

          <div className="rsp-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {avantages.map((a, i) => (
              <div
                key={a.label}
                style={{
                  padding: '4px 24px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <div>{a.icon}</div>
                <div className="font-anton" style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: '#fff', lineHeight: 1.15, letterSpacing: '0.02em' }}>{a.label}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{a.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFRES ─── */}
      <section id="offres" style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              {offres.length} poste{offres.length > 1 ? 's' : ''} à pourvoir
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, color: '#0a0a0a' }}>
              NOS OFFRES<br />D&apos;EMPLOI
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {offres.map(offre => (
              <OffreCard key={offre.id} offre={offre} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMULAIRE ─── */}
      <section id="postuler" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="rsp-2col">

          {/* Gauche */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff' }}>Postuler</span>
            </div>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 24px', color: '#fff' }}>
              VOTRE PROCHAIN<br />DÉFI COMMENCE ICI
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: '0 0 40px' }}>
              Une offre vous correspond ? Envoyez-nous votre candidature. Nous répondons à toutes les candidatures sous 5 jours ouvrés.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: 'Réponse sous 5 jours ouvrés', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"><circle cx="10" cy="10" r="8"/><polyline points="10,6 10,10 13,12"/></svg> },
                { label: 'Entretien avec votre futur manager', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"><circle cx="10" cy="7" r="3"/><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg> },
                { label: 'Candidature traitée avec soin', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="4" width="16" height="13" rx="1"/><polyline points="2,7 10,12 18,7"/></svg> },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14, borderLeft: '2px solid rgba(255,255,255,0.12)', paddingLeft: 16 }}>
                  {item.icon}
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <form action="/api/recrutement" method="POST" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Prénom *</label>
                <input name="prenom" required style={inputStyle} placeholder="Votre prénom" />
              </div>
              <div>
                <label style={labelStyle}>Nom *</label>
                <input name="nom" required style={inputStyle} placeholder="Votre nom" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Email *</label>
                <input name="email" type="email" required style={inputStyle} placeholder="votre@email.com" />
              </div>
              <div>
                <label style={labelStyle}>Téléphone</label>
                <input name="telephone" type="tel" style={inputStyle} placeholder="06 00 00 00 00" />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Poste souhaité *</label>
              <select name="poste" required style={{ ...inputStyle, appearance: 'none' as const }}>
                <option value="">Sélectionnez un poste</option>
                {offres.map(o => <option key={o.id} value={o.titre}>{o.titre}</option>)}
                <option value="Candidature spontanée">Candidature spontanée</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>
                CV * <span style={{ fontWeight: 400, textTransform: 'none' as const, letterSpacing: 0 }}>(PDF, DOC, DOCX — max 2 Mo)</span>
              </label>
              <input name="cv" type="file" accept=".pdf,.doc,.docx" required style={{ ...inputStyle, padding: '10px 16px', cursor: 'pointer' }} />
            </div>
            <div>
              <label style={labelStyle}>
                Lettre de motivation <span style={{ fontWeight: 400, textTransform: 'none' as const, letterSpacing: 0 }}>(optionnel)</span>
              </label>
              <textarea name="motivation" rows={4} style={{ ...inputStyle, resize: 'vertical' as const }} placeholder="Dites-nous ce qui vous attire chez DARWIN..." />
            </div>
            <button type="submit" style={{
              background: '#FFF127', color: '#0a0a0a',
              border: 'none', padding: '16px 32px',
              fontWeight: 700, fontSize: '0.82rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              cursor: 'pointer', alignSelf: 'flex-start',
            }}>
              Envoyer ma candidature →
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}

/* ─── STYLES ─────────────────────────────────────────── */

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.5)',
  marginBottom: 8,
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.15)',
  color: '#fff',
  padding: '12px 16px',
  fontSize: '0.88rem',
  outline: 'none',
  boxSizing: 'border-box',
}
