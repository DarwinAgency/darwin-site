import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import OffreCard from './OffreCard'

export const metadata: Metadata = {
  title: "Rejoindre DARWIN — Offres d'emploi à Aix-en-Provence",
  description: "DARWIN recrute des experts en marketing digital : SEO, SEA, SMA, Analytics. Découvrez nos offres et rejoignez une équipe de 30+ experts seniors à Aix-en-Provence.",
  alternates: { canonical: '/recrutement' },
  openGraph: {
    title: "Rejoindre DARWIN — Offres d'emploi",
    description: "Rejoignez une équipe de 30+ experts seniors. SEO, SEA, SMA, Analytics à Aix-en-Provence.",
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'DARWIN Recrutement' }],
  },
}

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: '30+', label: 'experts seniors' },
  { num: '22 ans', label: "d'existence" },
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
    desc: "22 ans d'expertise au service des résultats. Chaque décision est orientée impact mesurable — pas de promesses sans données derrière.",
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
    id: '01',
    titre: 'Bureaux & cadre de vie',
    items: ["Open-space lumineux et grande terrasse avec BBQ", "Jardin avec pétanque, ping-pong et transats", "Parking privé + arrêt de bus à proximité"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12L14 3l11 9v13H3V12z" />
        <rect x="10" y="18" width="8" height="8" />
      </svg>
    ),
  },
  {
    id: '02',
    titre: 'Social & bien-être',
    items: ["Mutuelle santé prise en charge à 100% par DARWIN", "Séminaires d'équipe et events réguliers", "Label RSE Ecovadis Silver"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 24S4 17 4 10a6 6 0 0 1 10-4.5A6 6 0 0 1 24 10c0 7-10 14-10 14z" />
      </svg>
    ),
  },
  {
    id: '03',
    titre: 'Carrière & formation',
    items: ["Formations continues sur tous les leviers digitaux", "Accès aux certifications Google, Meta, Microsoft", "Évolution rapide dans une structure à taille humaine"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4,22 10,14 16,18 24,8" />
        <polyline points="19,8 24,8 24,13" />
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

      {/* ─── AVANTAGES ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Pourquoi nous rejoindre
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CE QU&apos;ON VOUS OFFRE
            </h2>
          </div>

          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {avantages.map((a) => (
              <div key={a.id} style={{ padding: '36px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderTop: '4px solid #FFF127' }}>
                <div style={{ marginBottom: 20 }}>{a.icon}</div>
                <h3 className="font-anton" style={{ fontSize: '1.4rem', textTransform: 'uppercase', color: '#fff', marginBottom: 20, lineHeight: 1.1 }}>{a.titre}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {a.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                      <span style={{ width: 6, height: 6, background: '#FFF127', borderRadius: '50%', flexShrink: 0, marginTop: 6 }} />
                      {item}
                    </li>
                  ))}
                </ul>
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
