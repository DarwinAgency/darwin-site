import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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

const offres = [
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
      "Anglais apprécié",
    ],
  },
]

const valeurs = [
  { icon: '⚡', titre: 'Performance', desc: "22 ans d'expertise au service des résultats. Chaque décision est orientée impact mesurable." },
  { icon: '🧠', titre: 'Intelligence collective', desc: "Ensemble, on va plus loin. Chaque projet mobilise toutes les expertises de l'agence." },
  { icon: '🤝', titre: 'Entraide', desc: "Tout le monde compte, tout le monde progresse. La montée en compétences est une priorité partagée." },
  { icon: '🎯', titre: 'Rigueur', desc: "Les détails font la différence. On ne livre pas du bon — on livre du très bon." },
]

const avantages = [
  { titre: 'Bureaux & cadre', items: ["Open-space lumineux et grande terrasse avec BBQ", "Jardin avec pétanque, ping-pong et transats", "Parking privé + arrêt de bus à proximité"] },
  { titre: 'Social & bien-être', items: ["Mutuelle santé prise en charge à 100% par DARWIN", "Séminaires d'équipe et events réguliers", "Label RSE Ecovadis Silver"] },
  { titre: 'Carrière', items: ["Formations continues sur les leviers digitaux", "Accès aux certifications Google, Meta, Microsoft", "Évolution rapide dans une structure à taille humaine"] },
]

/* ─── COMPOSANT OFFRE ───────────────────────────────── */

function OffreCard({ offre }: { offre: typeof offres[0] }) {
  return (
    <div style={{ border: '1px solid #ebebeb', background: '#fff', transition: 'border-color 0.2s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#0a0a0a' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ebebeb' }}
    >
      {/* Header offre */}
      <div style={{ padding: '28px 32px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: '#FFF127', color: '#0a0a0a', padding: '4px 10px' }}>
            {offre.domaine}
          </span>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid #e0e0e0', color: '#555', padding: '3px 10px' }}>
            {offre.type}
          </span>
          <span style={{ fontSize: '0.7rem', color: '#aaa', marginLeft: 'auto' }}>
            📍 {offre.lieu}
          </span>
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 12px', color: '#0a0a0a', lineHeight: 1.3 }}>
          {offre.titre}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
          {offre.description}
        </p>
      </div>

      {/* Body offre */}
      <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 14 }}>Vos missions</p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {offre.missions.map(m => (
              <li key={m} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: '#444', lineHeight: 1.55 }}>
                <span style={{ color: '#29C5F5', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 14 }}>Votre profil</p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {offre.profil.map(p => (
              <li key={p} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: '#444', lineHeight: 1.55 }}>
                <span style={{ color: '#FFF127', background: '#0a0a0a', fontWeight: 700, flexShrink: 0, marginTop: 1, width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem' }}>✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA postuler */}
      <div style={{ padding: '0 32px 28px' }}>
        <a
          href={`#postuler`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#0a0a0a', color: '#FFF127',
            padding: '12px 24px', fontWeight: 700,
            fontSize: '0.75rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a1a1a' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a' }}
          onClick={e => {
            e.preventDefault()
            const form = document.getElementById('postuler')
            if (form) {
              form.scrollIntoView({ behavior: 'smooth' })
              const select = form.querySelector('select') as HTMLSelectElement | null
              if (select) select.value = offre.titre
            }
          }}
        >
          Postuler à cette offre →
        </a>
      </div>
    </div>
  )
}

/* ─── PAGE ──────────────────────────────────────────── */

export default function RecrutementPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ background: '#0a0a0a', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#29C5F5', marginBottom: 24,
          }}>
            Carrières chez DARWIN
          </p>
          <h1 className="font-anton" style={{
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            color: '#fff',
            margin: '0 0 32px',
            maxWidth: 900,
          }}>
            REJOINDRE UNE ÉQUIPE AUX MULTIPLES TALENTS
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 580, margin: '0 0 40px' }}>
            On ne cherche pas des CV bien remplis. On cherche des personnalités audacieuses, curieuses, prêtes à relever des défis.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#offres" style={{
              background: '#FFF127', color: '#0a0a0a',
              padding: '14px 28px', fontWeight: 700,
              fontSize: '0.78rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Voir nos offres →
            </a>
            <a href="#postuler" style={{
              border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
              padding: '14px 28px', fontWeight: 700,
              fontSize: '0.78rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Candidature spontanée
            </a>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: '#FFF127', padding: '0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { num: '30+', label: 'experts seniors' },
              { num: '22 ans', label: "d'existence" },
              { num: '7 ans', label: 'de fidélité client' },
              { num: '400+', label: 'clients accompagnés' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                borderRight: i < 3 ? '1px solid rgba(0,0,0,0.1)' : 'none',
              }}>
                <div className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1, color: '#0a0a0a', marginBottom: 6 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(0,0,0,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALEURS ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
            Ce qui nous anime
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 56px', color: '#0a0a0a' }}>
            NOS VALEURS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {valeurs.map((v) => (
              <div key={v.titre} style={{ padding: '32px 28px', border: '1px solid #ebebeb' }}>
                <div style={{ fontSize: '2rem', marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 12px', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {v.titre}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.7, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AVANTAGES ─── */}
      <section style={{ background: '#fafafa', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
            Pourquoi nous rejoindre
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 56px', color: '#0a0a0a' }}>
            CE QU&apos;ON VOUS OFFRE
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {avantages.map((a, i) => (
              <div key={i} style={{ background: '#fff', padding: '40px 36px', border: '1px solid #ebebeb' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 24px' }}>
                  {a.titre}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {a.items.map(item => (
                    <li key={item} style={{ display: 'flex', gap: 12, fontSize: '0.88rem', color: '#444', lineHeight: 1.6 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFF127', flexShrink: 0, marginTop: 8, border: '1px solid #0a0a0a' }} />
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
      <section id="offres" style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
            {offres.length} poste{offres.length > 1 ? 's' : ''} à pourvoir
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 48px', color: '#0a0a0a' }}>
            NOS OFFRES D&apos;EMPLOI
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {offres.map(offre => (
              <OffreCard key={offre.id} offre={offre} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMULAIRE ─── */}
      <section id="postuler" style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>

          {/* Gauche */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              Postuler
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 24px', color: '#fff' }}>
              VOTRE PROCHAIN DÉFI COMMENCE ICI
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: '0 0 40px' }}>
              Une offre vous correspond ? Envoyez-nous votre candidature. Nous répondons à toutes les candidatures sous 5 jours ouvrés.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Réponse sous 5 jours ouvrés', icon: '⏱' },
                { label: 'Entretien avec votre futur manager', icon: '👤' },
                { label: 'Candidature traitée avec soin', icon: '✉' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <form action="/api/recrutement" method="POST" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                  Prénom *
                </label>
                <input name="prenom" required style={inputStyle} placeholder="Votre prénom" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                  Nom *
                </label>
                <input name="nom" required style={inputStyle} placeholder="Votre nom" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                  Email *
                </label>
                <input name="email" type="email" required style={inputStyle} placeholder="votre@email.com" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                  Téléphone
                </label>
                <input name="telephone" type="tel" style={inputStyle} placeholder="06 00 00 00 00" />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                Poste souhaité *
              </label>
              <select name="poste" required style={{ ...inputStyle, appearance: 'none' as const }}>
                <option value="">Sélectionnez un poste</option>
                {offres.map(o => <option key={o.id} value={o.titre}>{o.titre}</option>)}
                <option value="Candidature spontanée">Candidature spontanée</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                CV * <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(PDF, DOC, DOCX — max 2 Mo)</span>
              </label>
              <input name="cv" type="file" accept=".pdf,.doc,.docx" required style={{ ...inputStyle, padding: '10px 16px', cursor: 'pointer' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                Lettre de motivation <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optionnel)</span>
              </label>
              <textarea name="motivation" rows={4} style={{ ...inputStyle, resize: 'vertical' as const }} placeholder="Dites-nous ce qui vous attire chez DARWIN..." />
            </div>
            <button type="submit" style={{
              background: '#FFF127', color: '#0a0a0a',
              border: 'none', padding: '16px 32px',
              fontWeight: 700, fontSize: '0.82rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              cursor: 'pointer', alignSelf: 'flex-start',
              transition: 'background 0.2s',
            }}>
              Envoyer ma candidature →
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

/* ─── STYLES ─────────────────────────────────────────── */

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
