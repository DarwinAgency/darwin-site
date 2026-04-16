// ─────────────────────────────────────────────────────────
// FICHIER : app/agence-media/generation-de-leads/page.tsx
// RÔLE    : Sous-page "Génération de Leads" — spoke de la page mère Agence Média
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
  title: 'Génération de leads B2B & B2C — Méthodes qui convertissent | DARWIN',
  description: "La génération de leads ne se résume pas à capter des emails. DARWIN structure votre tunnel d'acquisition : attraction, qualification, conversion — du premier contact à la signature.",
  alternates: { canonical: '/agence-media/generation-de-leads' },
  openGraph: {
    ...ogDefaults,
    title: 'Génération de leads B2B & B2C — Méthodes qui convertissent | DARWIN',
    description: "Dispositif intégré de génération de leads qualifiés : du premier contact publicitaire à la signature. SEO, SEA, emailing, SMS, social ads, programmatique.",
    url: 'https://darwin-agency.fr/agence-media/generation-de-leads',
  },
}

// ─── DATA ────────────────────────────────────────────────

const signals = [
  { label: 'Volume élevé, conversion basse', desc: "Le CRM se remplit, mais le taux de transformation lead-to-client ne décolle pas. Le problème n'est pas la quantité — c'est le ciblage en amont et la qualification en aval." },
  { label: 'Canaux en silo', desc: "Chaque levier tourne indépendamment, sans orchestration ni attribution partagée. Impossible de savoir quels canaux contribuent réellement à la conversion finale." },
  { label: 'Friction marketing / commerce', desc: "Le marketing envoie des volumes, les commerciaux les jugent « froids ». Personne n'a tort — c'est la définition du lead qualifié qui n'a jamais été posée." },
  { label: 'Coût par lead en hausse, ROI flou (retour sur investissement)', desc: "Les budgets augmentent, les CPL aussi. Mais sans modèle d'attribution fiable, vous ne savez pas si le problème vient du canal, du message, ou du parcours de conversion." },
]

const methodologySteps = [
  { num: '01', title: 'Diagnostic du dispositif existant', desc: "On commence par comprendre ce qui est en place. Quels canaux génèrent vos leads aujourd'hui ? Lesquels convertissent ? Où se produisent les ruptures dans le parcours — entre le clic et le formulaire, entre le formulaire et le rappel commercial, entre le rappel et la signature ? Cette lecture de votre pipeline actuel révèle souvent des fuites invisibles." },
  { num: '02', title: 'Définition des objectifs et du scoring', desc: "On pose les critères : qu'est-ce qu'un lead qualifié pour vous ? Quel coût par lead est acceptable par canal ? Quel volume cible par mois ? On aligne marketing et commerce sur ces définitions. On met en place le scoring adapté à votre cycle de vente." },
  { num: '03', title: 'Architecture du tunnel de conversion', desc: "On construit le parcours complet, du premier contact à la conversion. Chaque levier a un rôle défini — notoriété, engagement, activation, conversion. Les canaux ne sont pas juxtaposés : ils sont séquencés, avec des passerelles entre chaque étape et des mécaniques de retargeting pour récupérer les prospects qui décrochent." },
  { num: '04', title: 'Activation et pilotage quotidien', desc: "Paramétrage des campagnes, création des contenus de conversion, mise en place du tracking. Nos consultants seniors pilotent le dispositif au quotidien : tests A/B, réallocation budgétaire, affinage des ciblages, optimisation des séquences de nurturing." },
  { num: '05', title: 'Mesure et attribution', desc: "On ne regarde pas les clics. On regarde les leads qualifiés, le coût par lead qualifié, le taux de conversion lead-to-client, et le ROAS (retour sur dépense publicitaire) par canal. Nos modèles d'attribution multi-touch permettent de comprendre la contribution réelle de chaque levier — pas seulement celle du dernier clic." },
]

const caseStudies = [
  {
    client: 'Verisure',
    slug: 'verisure',
    levier: 'SMS · MÉDIA',
    result: '8K rendez-vous générés / mois',
    subResult: '+23% de taux de transformation',
    desc: "Structuration du levier SMS dans le mix d'acquisition Verisure : segmentation fine, modèle à la performance, pilotage quotidien des bases et des volumes.",
    img: '/images/cas-clients/verisure-cover.jpg',
  },
  {
    client: 'Acadomia',
    slug: 'acadomia',
    levier: 'SMA · MÉDIA · DISPLAY',
    result: '+65% de leads générés / mois',
    subResult: 'x2 taux de conversion landing page',
    desc: "Acquisition multi-leviers : emailing, display, retargeting et Social Ads orchestrés dans un tunnel de conversion cohérent. Refonte des landing pages et du scoring.",
    img: '/images/cas-clients/acadomia-cover.jpg',
  },
  {
    client: 'Préfon',
    slug: 'prefon',
    levier: 'EMAILING · MÉDIA',
    result: '-10% de coût d\'acquisition',
    subResult: '12 ans de collaboration',
    desc: "Optimisation continue du dispositif emailing sur base optin : segmentation affinée, pression marketing maîtrisée, scoring intégré au CRM.",
    img: '/images/cas-clients/prefon-cover.jpg',
  },
]

// ─── JSON-LD ─────────────────────────────────────────────

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Accueil', url: '/' },
  { name: 'Agence Média', url: '/agence-media' },
  { name: 'Génération de Leads', url: '/agence-media/generation-de-leads' },
])

const service = serviceJsonLd({
  name: 'Génération de Leads',
  description: "Dispositif intégré de génération de leads qualifiés : du premier contact publicitaire à la signature. SEO, SEA, emailing, SMS, social ads, programmatique — orchestrés dans un tunnel de conversion unique.",
  url: '/agence-media/generation-de-leads',
  keywords: ['génération de leads', 'lead generation', 'leads qualifiés', 'acquisition de prospects', 'tunnel de conversion', 'scoring leads'],
})

// ─── PAGE ────────────────────────────────────────────────

export default function GenerationDeLeadsPage() {
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
              <span style={{ color: 'rgba(0,0,0,0.6)' }}>Génération de Leads</span>
            </nav>

            <span style={{
              display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '5px 14px', marginBottom: 28, alignSelf: 'flex-start',
            }}>
              EXPERTISE MÉDIA
            </span>
            <h1 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 0.95, margin: '0 0 28px' }}>
              GÉNÉRATION DE LEADS&nbsp;:<br />
              STRATÉGIES ET MÉTHODES
            </h1>
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, marginBottom: 40, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Vous avez du trafic. Vous avez des campagnes. Vous avez même des formulaires qui se remplissent. Mais combien de ces contacts deviennent vraiment des clients ? La <strong>génération de leads</strong> ne se résume pas à capter des emails. C'est un processus qui va de l'attraction du bon prospect jusqu'à sa <strong>conversion en opportunité commerciale</strong>. Et entre les deux, il y a un chemin que beaucoup d'entreprises n'ont jamais cartographié." }} />
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-block', background: '#FFF127', color: '#0a0a0a',
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none', padding: '16px 32px',
              }}>
                PARLONS DE VOS LEADS →
              </Link>
              <Link href="/agence-media" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.15)', paddingBottom: 2,
              }}>
                ← Retour Agence Média
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
              <svg width="320" height="340" viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="funnelGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFF127" />
                    <stop offset="100%" stopColor="#D4E820" />
                  </linearGradient>
                  <linearGradient id="funnelGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4E820" />
                    <stop offset="100%" stopColor="#A0E040" />
                  </linearGradient>
                  <linearGradient id="funnelGrad3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A0E040" />
                    <stop offset="100%" stopColor="#60D880" />
                  </linearGradient>
                  <linearGradient id="funnelGrad4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60D880" />
                    <stop offset="100%" stopColor="#40D0B0" />
                  </linearGradient>
                  <linearGradient id="funnelGrad5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#40D0B0" />
                    <stop offset="100%" stopColor="#29C5F5" />
                  </linearGradient>
                </defs>

                {/* Étape 1 — ATTIRER */}
                <polygon points="30,20 290,20 270,72 50,72" fill="url(#funnelGrad1)" />
                <text x="160" y="52" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.08em" fill="#0a0a0a">ATTIRER</text>

                {/* Étape 2 — ENGAGER */}
                <polygon points="50,76 270,76 245,128 75,128" fill="url(#funnelGrad2)" />
                <text x="160" y="108" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.08em" fill="#0a0a0a">ENGAGER</text>

                {/* Étape 3 — QUALIFIER */}
                <polygon points="75,132 245,132 220,184 100,184" fill="url(#funnelGrad3)" />
                <text x="160" y="164" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.08em" fill="#0a0a0a">QUALIFIER</text>

                {/* Étape 4 — NOURRIR */}
                <polygon points="100,188 220,188 200,240 120,240" fill="url(#funnelGrad4)" />
                <text x="160" y="220" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.08em" fill="#fff">NOURRIR</text>

                {/* Étape 5 — CONVERTIR */}
                <polygon points="120,244 200,244 185,296 135,296" fill="url(#funnelGrad5)" />
                <text x="160" y="276" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.08em" fill="#fff">CONVERTIR</text>

                {/* Flèche de sortie */}
                <line x1="160" y1="296" x2="160" y2="322" stroke="#29C5F5" strokeWidth="2" strokeLinecap="round" />
                <polygon points="152,318 160,330 168,318" fill="#29C5F5" />

                {/* Numéros sur le côté gauche */}
                <text x="18" y="52" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0a0a0a" fontFamily="Anton, sans-serif">01</text>
                <text x="40" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0a0a0a" fontFamily="Anton, sans-serif">02</text>
                <text x="62" y="164" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0a0a0a" fontFamily="Anton, sans-serif">03</text>
                <text x="82" y="220" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0a0a0a" fontFamily="Anton, sans-serif">04</text>
                <text x="102" y="276" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0a0a0a" fontFamily="Anton, sans-serif">05</text>

                {/* Lignes de séparation subtiles */}
                <line x1="50" y1="74" x2="270" y2="74" stroke="#fff" strokeWidth="1" opacity="0.6" />
                <line x1="75" y1="130" x2="245" y2="130" stroke="#fff" strokeWidth="1" opacity="0.6" />
                <line x1="100" y1="186" x2="220" y2="186" stroke="#fff" strokeWidth="1" opacity="0.6" />
                <line x1="120" y1="242" x2="200" y2="242" stroke="#fff" strokeWidth="1" opacity="0.6" />
              </svg>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', marginTop: 20 }}>
                ATTIRER · QUALIFIER · CONVERTIR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE VRAI PROBLÈME ─────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '80px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 16 }}>
              LE VRAI PROBLÈME
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
              CE N&apos;EST PAS UN PROBLÈME<br />DE VOLUME. C&apos;EST UN<br />PROBLÈME DE VALEUR.
            </h2>
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "La plupart des annonceurs que nous rencontrons ne manquent pas de leads. Ils en ont même beaucoup. Le problème, c'est que ces contacts ne se transforment pas. Le CRM déborde, mais <strong>le pipe commercial stagne</strong>. Les commerciaux passent leur temps à trier au lieu de vendre. Et personne ne sait vraiment d'où viennent les leads qui signent — ni pourquoi les autres ne signent pas." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Ce décalage entre <strong>volume et valeur</strong> est souvent le symptôme d'un dispositif de génération construit par couches successives : un canal ajouté ici, une campagne reconduite là, un partenaire testé sans suivi. Au fil du temps, les sources se multiplient, les critères de qualification divergent, et la lecture de la performance devient impossible. On mesure des clics, des CPL, des taux d'ouverture — mais la vraie question reste sans réponse : <strong>combien de ces leads génèrent du chiffre d'affaires ?</strong>" }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {signals.map(s => (
              <div key={s.label} style={{ display: 'flex', gap: 16, background: '#fff', padding: '20px 24px', borderLeft: '4px solid #0a0a0a' }}>
                <div>
                  <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a0a0a', margin: '0 0 6px' }}>{s.label}</p>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DÉFINITION ───────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#0a0a0a', padding: '80px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ position: 'relative' }}>
              <Image
                src="/images/media/generation-leads-equipe.jpg"
                alt="Équipe DARWIN en session de travail sur la génération de leads"
                width={1673}
                height={2377}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
              />
              <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#FFF127' }} />
            </div>
          </div>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              DÉFINITION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, marginBottom: 32 }}>
              QU&apos;EST-CE QUE LA<br />GÉNÉRATION DE LEADS ?
            </h2>
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "La génération de leads désigne l'ensemble des actions marketing destinées à attirer des prospects et à recueillir leurs coordonnées — dans le but de les intégrer à un <strong style='color:#fff'>parcours de conversion</strong>. Formulaire rempli, demande de devis, inscription à un événement, téléchargement d'un contenu : chaque point de contact qui transforme un visiteur anonyme en contact identifié est un acte de génération de leads." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Mais cette définition, aussi juste soit-elle, ne suffit pas à poser le véritable enjeu. Générer un lead, techniquement, c'est simple. Générer un lead qui a un <strong style='color:#fff'>besoin réel, un budget, un pouvoir de décision</strong> et un calendrier compatible avec votre cycle de vente — c'est autre chose. C'est là que la stratégie commence." }} />
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }}>
              Dans chaque secteur d&apos;activité, un dispositif de génération de leads efficace articule trois dimensions pour maximiser le potentiel commercial du service ou du produit proposé. L&apos;<strong style={{ color: '#fff' }}>attraction</strong> : faire venir les bons profils sur vos points de contact via les canaux pertinents — SEO, SEA, social ads, programmatique, emailing, SMS. L&apos;<strong style={{ color: '#fff' }}>engagement</strong> : transformer ce trafic en interaction mesurable grâce à des contenus, des offres ou des mécaniques qui créent de la valeur pour le prospect. Et la <strong style={{ color: '#fff' }}>qualification</strong> : évaluer chaque lead selon des critères formalisés pour <Link href="/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead" style={{ color: '#29C5F5', textDecoration: 'underline', textUnderlineOffset: '3px' }}>ne transmettre aux commerciaux que les contacts à potentiel réel</Link>.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, textAlign: 'justify' }}>
              Chez DARWIN, nous pilotons ces trois dimensions dans un tunnel intégré. Le lead n&apos;est pas un point de donnée isolé — c&apos;est un parcours, de la première impression publicitaire jusqu&apos;à la signature. Et c&apos;est la maîtrise de ce parcours complet qui fait la différence entre un dispositif qui génère des contacts et un <strong style={{ color: '#fff' }}>dispositif qui génère du business</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── LES CANAUX LES PLUS EFFICACES ────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
              CANAUX D&apos;ACQUISITION
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05 }}>
              CHAQUE LEVIER A SON RÔLE —<br />AUCUN NE FONCTIONNE SEUL
            </h2>
          </div>

          {/* Grille 2×2 */}
          <div className="rsp-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>

            {/* 01 — Programmatique & Display */}
            <div style={{ background: '#fafafa', border: '1px solid #ebebeb', padding: '48px 40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                <span className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#0a0a0a' }}>01</span>
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1.1 }}>
                  Programmatique &amp; Display
                </h3>
              </div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
                Créer le premier contact
              </p>
              {/* eslint-disable-next-line react/no-danger */}
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Le programmatique ne génère pas de leads en direct. C'est le levier qui <strong>amorce le tunnel</strong>. Il expose votre marque aux bonnes audiences, sur les bons environnements, au bon moment. Sans cette couche de visibilité, vos campagnes d'activation travaillent sur un bassin froid. Avec, vous <strong>pré-qualifiez l'attention</strong> avant même le premier clic. Le display contextuel et le <strong>retargeting programmatique</strong> permettent ensuite de maintenir la pression sur les visiteurs engagés — ceux qui ont montré un premier signal d'intérêt sans aller jusqu'au formulaire." }} />
            </div>

            {/* 02 — SEO & SEA */}
            <div style={{ background: '#fff', border: '1px solid #ebebeb', padding: '48px 40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                <span className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#0a0a0a' }}>02</span>
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1.1 }}>
                  SEO &amp; SEA
                </h3>
              </div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
                Capter l&apos;intention
              </p>
              {/* eslint-disable-next-line react/no-danger */}
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Le SEO capte les prospects en phase de <strong>recherche active</strong>. Quelqu'un qui tape « comment réduire son coût par lead » est déjà engagé dans une réflexion. Être visible à cet instant, c'est entrer dans la short-list avant même d'avoir pris contact. Le SEA complète cette logique avec une réponse immédiate sur les requêtes commerciales les plus directes. La <strong>combinaison des deux</strong> couvre l'ensemble du spectre d'intention — de la recherche d'information à la demande de devis." }} />
            </div>

            {/* 03 — Emailing & SMS/RCS */}
            <div style={{ background: '#fff', border: '1px solid #ebebeb', padding: '48px 40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                <span className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#0a0a0a' }}>03</span>
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1.1 }}>
                  Emailing &amp; SMS/RCS
                </h3>
              </div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
                Déclencher l&apos;action
              </p>
              {/* eslint-disable-next-line react/no-danger */}
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Ces canaux ne sont pas des outils de prospection à froid. Ce sont des <strong>accélérateurs de conversion</strong>, à condition de les piloter avec rigueur. Sur une base bien ciblée — nos partenaires data nous donnent accès à plus de <strong>35 millions d'adresses optin et 25 millions de numéros</strong> dédupliqués —, une campagne emailing ou SMS correctement séquencée déclenche l'action là où les autres canaux ont préparé le terrain. Le RCS ouvre un nouveau champ de possibilités : messages enrichis, visuels, conversationnels, avec des <strong>taux d'engagement supérieurs</strong> au SMS classique." }} />
            </div>

            {/* 04 — Social Ads */}
            <div style={{ background: '#fafafa', border: '1px solid #ebebeb', padding: '48px 40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                <span className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#0a0a0a' }}>04</span>
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1.1 }}>
                  Social Ads
                </h3>
              </div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
                Cibler des profils, pas des mots-clés
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }}>
                Les social ads — Meta, LinkedIn, TikTok selon votre audience — permettent de toucher des profils précis qui ne vous cherchent pas encore. On ne répond plus à une intention de recherche, on la crée. Les <strong>formulaires natifs</strong> réduisent la friction, et le <strong>ciblage comportemental</strong> permet de concentrer les budgets sur les segments les plus proches de votre client idéal. C&apos;est un levier particulièrement puissant en <Link href="/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b" style={{ color: '#29C5F5', textDecoration: 'underline', textUnderlineOffset: '3px' }}>B2B</Link> où LinkedIn offre une <strong>granularité de ciblage inégalée</strong>.
              </p>
            </div>

          </div>

          {/* 05 — Affiliation & Brand Content (pleine largeur) */}
          <div style={{ background: '#fafafa', border: '1px solid #ebebeb', padding: '48px 40px', marginTop: 2 }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                <span className="font-anton" style={{ fontSize: '2.4rem', lineHeight: 1, color: '#0a0a0a' }}>05</span>
                <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1.1 }}>
                  Affiliation &amp; Brand Content
                </h3>
              </div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 20px' }}>
                Élargir le spectre
              </p>
              {/* eslint-disable-next-line react/no-danger */}
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "L'affiliation développe un réseau de partenaires qui promeuvent vos offres <strong>en ne payant que les résultats</strong>. Le brand content, lui, utilise l'audience d'un site affinitaire pour parler de vous dans un contexte éditorial crédible. Ces deux leviers élargissent votre <strong>surface de génération</strong> au-delà de vos propres canaux — et touchent des prospects que vos campagnes directes ne captent pas." }} />
            </div>
          </div>

          {/* eslint-disable-next-line react/no-danger */}
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, maxWidth: 960, margin: '48px auto 0', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: "L'enjeu n'est pas d'activer tous ces canaux. C'est de <strong>les orchestrer</strong>. Un prospect touché en display, retouché en emailing, qui manifeste son intérêt sur un contenu, puis convertit via un formulaire SEO — voilà un exemple de parcours courant dans la plupart des secteurs B2B. Chaque étape de ce processus doit déclencher une action mesurable : clic, téléchargement, demande de devis, prise de rendez-vous. Encore faut-il le tracer, le mesurer, et l'optimiser. C'est exactement ce que permet un <strong>modèle d'attribution multi-touch</strong> bien configuré." }} />
        </div>
      </section>

      {/* ── INBOUND VS OUTBOUND ──────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-sidebar-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>

            <div className="rsp-sticky" style={{ position: 'sticky', top: 120 }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
                INBOUND VS OUTBOUND
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
                DEUX LOGIQUES,<br />UN MÊME OBJECTIF
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                Opposer les deux est une erreur classique. Les dispositifs les plus performants que nous pilotons combinent les deux approches. L&apos;un finance la croissance immédiate, l&apos;autre construit l&apos;actif à long terme.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* INBOUND */}
              <div style={{ background: '#fafafa', borderLeft: '4px solid #FFF127', padding: '40px 40px 40px 36px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 12px' }}>INBOUND — ATTIRER</p>
                {/* eslint-disable-next-line react/no-danger */}
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "L'inbound attire. Le prospect vient à vous parce qu'il a trouvé un contenu utile, un article qui répond à sa question, un outil qui l'aide. Il vous découvre dans un moment de recherche active — il est déjà dans une démarche. Le <strong>coût par lead tend à baisser avec le temps</strong> parce que les actifs produits (contenus SEO, ressources téléchargeables, séquences de nurturing) continuent de générer des contacts longtemps après leur publication." }} />
              </div>

              {/* OUTBOUND */}
              <div style={{ background: '#fafafa', borderLeft: '4px solid #0a0a0a', padding: '40px 40px 40px 36px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 12px' }}>OUTBOUND — POUSSER</p>
                {/* eslint-disable-next-line react/no-danger */}
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "L'outbound pousse. Vous allez chercher le prospect là où il est — dans sa boîte mail, dans son fil LinkedIn, sur son écran en programmatique, sur son téléphone en SMS. Le résultat est plus rapide, mais le coût est direct et récurrent. Chaque campagne consomme du budget, et <strong>les leads s'arrêtent quand l'investissement s'arrête</strong>." }} />
              </div>

              {/* COMBINER */}
              <div style={{ background: '#fafafa', borderLeft: '4px solid #29C5F5', padding: '40px 40px 40px 36px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#29C5F5', margin: '0 0 12px' }}>LA VRAIE QUESTION</p>
                {/* eslint-disable-next-line react/no-danger */}
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "La vraie question n'est pas « inbound ou outbound ? ». C'est : quelle proportion de chaque, à quel stade de maturité de votre entreprise, pour quel type de cible ? Un e-commerçant qui lance un nouveau produit n'a pas la même réponse qu'un centre de formation qui remplit des sessions trimestrielles. La stratégie de génération de leads doit <strong>s'adapter à votre réalité business</strong> — pas l'inverse." }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUALIFICATION ────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#FFF127', padding: '80px 32px' }}>
        <div className="rsp-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 16 }}>
              COMMENT QUALIFIER SES LEADS
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 32 }}>
              QUALIFIEZ AVANT<br />DE TRANSMETTRE
            </h2>
            <div style={{ position: 'relative' }}>
              <Image
                src="/images/media/generation-leads-qualification.jpg"
                alt="Équipe DARWIN en session de qualification de leads"
                width={2560}
                height={1254}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
              />
              <div style={{ position: 'absolute', bottom: -6, left: 0, width: 48, height: 3, background: '#0a0a0a' }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.5)', marginTop: 16, lineHeight: 1.6, fontWeight: 500 }}>
              Julia Sanchez, Head of Strategy — en workshop
            </p>
          </div>
          <div>
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }}>
              C&apos;est le maillon que beaucoup d&apos;entreprises négligent. Savoir <Link href="/agence-media/generation-de-leads/comment-trouver-des-leads" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>où et comment trouver des leads</Link>, c&apos;est bien. Mais c&apos;est la qualification qui détermine si votre investissement en génération de leads produit du chiffre d&apos;affaires — ou juste des lignes dans un CRM.
            </p>
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "Qualifier un lead, c'est évaluer sa correspondance avec votre client idéal ET sa <strong>maturité dans le cycle d'achat</strong>. Un contact qui coche tous les critères démographiques mais qui n'a aucun projet à court terme ne vaut pas le même effort commercial qu'un prospect actif avec un budget validé. La qualification croise ces deux dimensions pour prioriser l'action." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "En pratique, cela passe par la mise en place d'un <strong>scoring</strong> — un système de points qui pondère les informations récoltées (secteur, poste, taille d'entreprise) et les comportements observés (pages visitées, contenus téléchargés, emails ouverts). Quand le score atteint un seuil défini, le lead bascule du marketing vers le commercial. Quand il stagne, il entre dans une séquence de <strong>nurturing</strong> pour être travaillé dans la durée." }} />
            {/* eslint-disable-next-line react/no-danger */}
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: "L'<strong>alignement entre équipes marketing et commerciales</strong> est la condition de réussite. Sans définition commune de ce qu'est un lead qualifié — avec des critères écrits, partagés, réévalués régulièrement —, le marketing envoie des volumes que le commerce juge inutiles. Et le cycle de frustration recommence." }} />
            <p style={{ fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.85, textAlign: 'justify' }}>
              Pour aller plus loin sur le sujet, nous avons détaillé <Link href="/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead" style={{ color: '#0a0a0a', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>les étapes clés de la qualification d&apos;un lead</Link> et les frameworks les plus opérationnels (BANT, CHAMP, scoring automatisé) dans une page dédiée.
            </p>
          </div>
        </div>
      </section>

      {/* ── MÉTHODOLOGIE ─────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fafafa', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="rsp-sidebar-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
            <div className="rsp-sticky" style={{ position: 'sticky', top: 120 }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
                NOTRE MÉTHODE
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, marginBottom: 28 }}>
                5 ÉTAPES POUR PASSER<br />DU TRAFIC AU BUSINESS
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                Chaque dispositif que nous pilotons suit un cadre rigoureux, adapté à votre réalité business. Il n&apos;existe pas de tunnel standard — parce qu&apos;il n&apos;existe pas deux cycles de vente identiques.
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
                    <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.85, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAS CLIENTS ──────────────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 16 }}>
                RÉSULTATS
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.05, margin: 0 }}>
                ILS ONT STRUCTURÉ LEUR<br />GÉNÉRATION DE LEADS<br />AVEC DARWIN
              </h2>
            </div>
            <Link href="/cas-clients" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #FFF127', paddingBottom: 2 }}>
              VOIR TOUS LES CAS →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="rsp-3col">
            {caseStudies.map(cas => (
              <Link key={cas.slug} href={`/cas-clients/${cas.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ background: '#fafafa', border: '1px solid #e8e8e8', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={cas.img} alt={`Cas client ${cas.client}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <span style={{ position: 'absolute', top: 16, left: 16, background: '#FFF127', color: '#0a0a0a', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>
                      {cas.levier}
                    </span>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>{cas.client}</p>
                    <h3 className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 4px', lineHeight: 1.1 }}>{cas.result}</h3>
                    <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0a0a0a', margin: '0 0 12px' }}>{cas.subResult}</p>
                    <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.7, margin: '0 0 20px' }}>{cas.desc}</p>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0a0a0a', borderBottom: '2px solid #FFF127', paddingBottom: 2 }}>
                      VOIR LE CAS →
                    </span>
                  </div>
                </div>
              </Link>
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
              PAS UN FOURNISSEUR<br />DE LEADS. UN PARTENAIRE<br />D&apos;ACQUISITION.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { title: 'Vision intégrée', desc: "SEO, SEA, SMA, Média, Emailing, SMS, Affiliation : chez DARWIN, ces leviers sont gérés par une même équipe. L'orchestration multi-canal n'est pas un discours — c'est notre fonctionnement quotidien." },
                { title: 'Data au centre', desc: "Chaque décision est fondée sur vos données réelles. Pas sur des benchmarks génériques ou des estimations d'outil tiers. Nous travaillons sur votre Analytics, votre CRM, vos outils publicitaires." },
                { title: 'Consultants seniors en première ligne', desc: "Votre dispositif est piloté par des consultants expérimentés — six ans d'ancienneté moyenne. Pas de sous-traitance, pas de junior en gestion opérationnelle." },
                { title: 'Attribution et transparence', desc: "Nos modèles d'attribution multi-touch vous montrent la contribution réelle de chaque canal. Vous savez exactement ce qui produit du business — et ce qui n'en produit pas. Nos dashboards sont accessibles en temps réel." },
                { title: `${DARWIN_YEARS} ans de terrain`, desc: "Plus de 400 clients accompagnés depuis 2003. 7 ans de durée moyenne de collaboration. Ces chiffres ne sont pas un argument marketing — c'est le résultat d'un engagement sur les résultats, pas sur les promesses." },
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

          {/* RIGHT — photo */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, border: '1px solid #ebebeb', borderRadius: 4, pointerEvents: 'none' }} />
              <Image
                src="/images/media/generation-leads-darwin.jpg"
                alt="L'équipe DARWIN en session de pilotage acquisition"
                width={2560}
                height={1707}
                style={{ width: '100%', maxWidth: 520, height: 'auto', display: 'block', borderRadius: 4, position: 'relative', zIndex: 1 }}
              />
              <div style={{ position: 'absolute', bottom: -12, left: 0, width: 48, height: 3, background: '#FFF127', zIndex: 2 }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: 24, lineHeight: 1.6, fontWeight: 500 }}>
              Pilotage multi-leviers en temps réel — équipe Média DARWIN
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
            STRUCTURONS VOTRE<br />GÉNÉRATION DE LEADS
          </h2>
          {/* eslint-disable-next-line react/no-danger */}
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', maxWidth: 520, margin: '0 auto 12px' }} dangerouslySetInnerHTML={{ __html: "Décrivez-nous votre situation. Nous analysons votre pipeline, vos canaux et vos opportunités — réponse sous 24h ouvrées avec un <strong>diagnostic actionnable</strong>." }} />
          <p style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.45)', marginBottom: 40 }}>
            Réponse sous 24h ouvrées · Sans engagement
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-block', background: '#0a0a0a', color: '#fff',
              fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', padding: '18px 36px',
            }}>
              PARLONS DE VOS LEADS →
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

      {/* ── SOUS-PAGES CLUSTER ───────────────────────────── */}
      <section className="rsp-section" style={{ background: '#fff', padding: '80px 32px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 12 }}>
            ALLER PLUS LOIN
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 48 }}>
            NOS GUIDES GÉNÉRATION DE LEADS
          </h2>
          <div className="rsp-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { label: 'Comment trouver des leads qualifiés ?', desc: 'Sources, canaux et méthodes pour alimenter votre pipeline', href: '/agence-media/generation-de-leads/comment-trouver-des-leads' },
              { label: 'Comment générer des leads en B2B ?', desc: 'LinkedIn, content marketing, SEO : les stratégies B2B', href: '/agence-media/generation-de-leads/comment-generer-des-leads-en-b2b' },
              { label: 'Les étapes de qualification d\'un lead', desc: 'MQL, SQL, scoring et frameworks de qualification', href: '/agence-media/generation-de-leads/etapes-de-qualification-d-un-lead' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ background: '#fafafa', overflow: 'hidden', border: '1px solid #ebebeb', borderTop: '3px solid #FFF127', padding: '28px 24px' }}>
                  <p className="font-anton" style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1.2 }}>{link.label}</p>
                  <p style={{ fontSize: '0.78rem', color: '#555', lineHeight: 1.6, margin: '0 0 16px' }}>{link.desc}</p>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid #0a0a0a', paddingBottom: 2 }}>DÉCOUVRIR →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIENS INTERNES — AUTRES LEVIERS MÉDIA ────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #27D9E5 0%, #B8E000 100%)',
        padding: '160px 32px 80px',
        clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)',
        marginTop: '-80px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 12 }}>
            NOS EXPERTISES
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 48 }}>
            NOS AUTRES LEVIERS MÉDIA
          </h2>
          <div className="rsp-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { label: 'Audit & Stratégie digitale', desc: 'Diagnostic complet et recommandations chiffrées', href: '/agence-media/audit-strategie-digitale' },
              { label: 'Plan média', desc: 'Canaux, formats, calendrier, budgets et KPIs', href: '/agence-media/plan-media' },
              { label: 'Campagnes emailing', desc: '35M+ adresses optin, pression marketing maîtrisée', href: '/agence-media/campagnes-emailing' },
              { label: 'SMS / RCS', desc: 'Messages enrichis, carrousels et conversations interactives', href: '/agence-media/campagnes-rcs-sms' },
              { label: 'Audio digital', desc: 'Podcasts, streaming, radio digitale', href: '/agence-media/audio-digital' },
              { label: 'TV segmentée & CTV', desc: 'Impact TV avec précision du ciblage digital', href: '/agence-media/tv-segmentee-ctv' },
              { label: 'Campagnes DOOH', desc: 'Affichage digital extérieur en temps réel', href: '/agence-media/campagnes-dooh' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ background: '#fff', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.12)', borderTop: '3px solid #FFF127', padding: '28px 24px' }}>
                  <p className="font-anton" style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 8px', lineHeight: 1.2 }}>{link.label}</p>
                  <p style={{ fontSize: '0.78rem', color: '#555', lineHeight: 1.6, margin: '0 0 16px' }}>{link.desc}</p>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid #0a0a0a', paddingBottom: 2 }}>DÉCOUVRIR →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
