import Image from 'next/image'
import PerformanceSlider from './components/PerformanceSlider'

const caseStudies = [
  { name: 'Verisure', category: 'SEA & Analytics', img: '/images/cas-verisure.jpg' },
  { name: 'Préfon', category: 'SEO & SEA', img: '/images/cas-prefon.jpg' },
  { name: 'EBRA Médias', category: 'SEA & Media', img: '/images/cas-ebra.jpg' },
  { name: 'JustFab', category: 'SMA & SEA', img: '/images/cas-justfab.jpg' },
  { name: 'Acadomia', category: 'SEO & SEA', img: '/images/cas-acadomia.jpg' },
  { name: 'Ponant', category: 'Media & Analytics', img: '/images/cas-ponant.jpg' },
]

export default function Home() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* ─── HEADER ─── */}
      <header style={{ background: '#0a0a0a', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/logo-darwin.png"
              alt="Darwin Agency"
              width={120}
              height={32}
              style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
              priority
            />
          </a>

          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {["L'AGENCE", 'SERVICES', 'PROJETS', "L'IA", 'BLOG'].map((item) => (
              <a key={item} href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.9 }}>
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-yellow" style={{ padding: '10px 22px', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none' }}>
            CONTACT
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section style={{ background: '#FFF127', padding: '80px 24px 60px', minHeight: '88vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background image (subtle) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.06 }}>
          <Image src="/images/hero-bg.png" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <h1 className="font-anton" style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', lineHeight: 0.88, textTransform: 'uppercase', color: '#0a0a0a', margin: 0 }}>
            <span style={{ display: 'block' }}>CREATIVE</span>
            <span style={{ display: 'block', fontStyle: 'italic' }}>THINKING</span>
            <span style={{ display: 'block' }}>AU SERVICE</span>
            <span style={{ display: 'block' }}>DES MARQUES</span>
          </h1>
        </div>
      </section>

      {/* ─── TAGLINE ─── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', marginBottom: 24 }}>
            CONNECTER LES ESPRITS CRÉATIFS :
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.6rem)', lineHeight: 1.1, textTransform: 'uppercase', maxWidth: 900, color: '#0a0a0a', margin: 0 }}>
            POUR ENGAGER LES MARQUES DANS UNE DYNAMIQUE À LONG TERME.
          </h2>
        </div>
      </section>

      {/* ─── NOUS SOMMES DARWIN ─── */}
      <section style={{ background: '#fff', padding: '60px 24px 80px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', textTransform: 'uppercase', marginBottom: 24, lineHeight: 1.1 }}>
              NOUS SOMMES DARWIN
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
              Agence digitale indépendante fondée en 2003, Darwin réunit des experts en acquisition,
              performance et création de contenu. Notre conviction : le digital doit être au service
              de la stratégie de marque, pas l&apos;inverse.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
              Nous accompagnons des marques ambitieuses dans leur transformation digitale avec une
              approche hybride alliant stratégie, créativité et data.
            </p>
            <a href="#" className="arrow-link btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              DÉCOUVRIR DARWIN <span className="arrow">→</span>
            </a>
          </div>

          <div>
            {[
              { title: 'DÉVELOPPER VOTRE BRANDING', desc: "Déployer des campagnes de visibilité pour ancrer votre marque dans l'esprit de votre audience cible." },
              { title: 'CONSTRUIRE UNE STRATÉGIE DE QUALITÉ', desc: "Définir les leviers d'acquisition les plus pertinents pour maximiser votre ROI à chaque étape du funnel." },
              { title: 'DÉFINIR VOS OBJECTIFS LEAN', desc: "Travailler avec agilité et itérations courtes pour tester, apprendre et optimiser en continu." },
              { title: 'ACTIVER LE DIGITAL DANS VOTRE STRATÉGIE', desc: "Placer le digital au cœur de votre stratégie globale pour des résultats mesurables et durables." },
            ].map((item, i) => (
              <details key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', cursor: 'pointer' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: '0 0 18px', fontSize: '0.9rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {item.desc}
                </p>
              </details>
            ))}

            <div style={{ marginTop: 32 }}>
              <a href="#contact" className="btn-yellow arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                EN PARLER AVEC NOUS <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PERFORMANCE SLIDER ─── */}
      <PerformanceSlider />

      {/* ─── STATS ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)', textTransform: 'uppercase', color: '#fff', marginBottom: 64, maxWidth: 600, lineHeight: 1.2 }}>
            NOTRE AGENCE DÉDIÉE À LA PERFORMANCE DEPUIS 23 ANS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
            {[
              { num: '2003', label: 'Année de création' },
              { num: '+48', label: 'Experts digitaux' },
              { num: '~36', label: 'Clients accompagnés' },
              { num: '~6 ANS', label: 'Durée moyenne collaboration' },
            ].map((stat) => (
              <div key={stat.num} style={{ borderTop: '2px solid #FFF127', paddingTop: 20 }}>
                <div className="font-anton stat-num" style={{ color: '#FFF127', marginBottom: 8 }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#888', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RÉCOMPENSÉ PAR ─── */}
      <section style={{ background: '#fff', padding: '60px 24px', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40, textAlign: 'center' }}>
            RÉCOMPENSÉ PAR
          </p>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['FIF', 'Numericka', 'Taktik', 'e-Marketing', 'EBG'].map((name) => (
              <div key={name} style={{ padding: '10px 22px', border: '1px solid #ddd', borderRadius: 4, fontSize: '0.85rem', fontWeight: 700, color: '#555', letterSpacing: '0.05em' }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOS MÉTIERS ─── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', textTransform: 'uppercase', marginBottom: 60, lineHeight: 1 }}>
            NOS MÉTIERS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { title: 'SEO', desc: 'Optimisation organique pour gagner en visibilité et attirer un trafic qualifié sur le long terme.', items: ['Audit technique', 'Stratégie de contenu', 'Netlinking', 'SEO local'] },
              { title: 'SEA', desc: "Campagnes payantes Google & Bing pour capter l'intention d'achat au bon moment.", items: ['Google Ads', 'Bing Ads', 'Shopping', 'Performance Max'] },
              { title: 'SMA', desc: 'Social Media Advertising pour engager vos audiences sur les réseaux sociaux.', items: ['Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Pinterest Ads'] },
              { title: 'MEDIA', desc: 'Stratégie media digitale complète : display, vidéo, programmatique et native.', items: ['Programmatique', 'Display', 'Vidéo', 'Native'] },
              { title: 'ANALYTICS', desc: 'Data, tracking et analytics pour piloter la performance avec précision.', items: ['GA4', 'Data Studio', 'Tag Manager', 'Attribution'] },
            ].map((service, i) => (
              <div
                key={service.title}
                className="service-col"
                style={{
                  borderLeft: i === 0 ? '1px solid #ddd' : 'none',
                  borderRight: '1px solid #ddd',
                  borderTop: '1px solid #ddd',
                  borderBottom: '1px solid #ddd',
                  padding: '28px 20px',
                }}
              >
                <h3 className="font-anton" style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: 14, letterSpacing: '0.03em' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#555', marginBottom: 20 }}>
                  {service.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0a0a0a', padding: '7px 0', borderTop: '1px solid #eee', letterSpacing: '0.04em' }}>
                      {item} →
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Client logos strip */}
          <div style={{ marginTop: 56 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#bbb', marginBottom: 24 }}>
              ILS NOUS FONT CONFIANCE
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              {['Nordnet', 'Happe', 'CHL', 'Hermès', 'Sèvres', 'BSM', 'Canem', 'Acadomia', 'Ponant', 'Préfon', 'Wifirst', 'Verisure', 'JustFab', 'Pandora', 'Phildar'].map((name) => (
                <div key={name} style={{ padding: '7px 16px', border: '1px solid #e5e5e5', borderRadius: 4, fontSize: '0.78rem', fontWeight: 600, color: '#666' }}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <a href="#" className="btn-yellow arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              DÉCOUVRIR NOS MÉTIERS <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── NOS CAS CLIENTS ─── */}
      <section style={{ background: '#f4f4f4', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', textTransform: 'uppercase', marginBottom: 48, lineHeight: 1 }}>
            NOS CAS CLIENTS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {caseStudies.map((project) => (
              <a key={project.name} href="#" className="case-card" style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', borderRadius: 6, position: 'relative' }}>
                <div style={{ overflow: 'hidden', position: 'relative', height: 240 }}>
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="img-placeholder"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFF127', marginBottom: 4 }}>
                      {project.category}
                    </div>
                    <div className="font-anton" style={{ fontSize: '1.4rem', textTransform: 'uppercase', color: '#fff' }}>
                      {project.name}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <a href="#" className="btn-outline arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              VOIR TOUS NOS CAS <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '4rem', color: '#FFF127', lineHeight: 1, display: 'block', marginBottom: 24, fontFamily: 'Georgia, serif' }}>&ldquo;</span>
          <blockquote style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', lineHeight: 1.85, color: '#ddd', margin: '0 0 40px', fontStyle: 'italic' }}>
            Darwin Agency nous accompagne depuis plusieurs années avec une approche véritablement
            stratégique. Leur équipe comprend nos enjeux business et traduit cela en actions
            digitales concrètes qui génèrent de vrais résultats. Un partenaire de confiance
            dans la durée.
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, background: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#FFF127', border: '2px solid #333' }}>
              PB
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                PASCAL BOUET
              </div>
              <div style={{ fontSize: '0.75rem', color: '#777', marginTop: 2 }}>Directeur Marketing</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOS CERTIFICATIONS ─── */}
      <section style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 48, textAlign: 'center' }}>
            NOS CERTIFICATIONS
          </p>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Google\nPartner Premier', bg: '#4285F4' },
              { label: 'Meta\nBusiness Partner', bg: '#0668E1' },
              { label: 'Microsoft\nAdvertising', bg: '#00A4EF' },
              { label: 'LinkedIn\nMarketing', bg: '#0A66C2' },
              { label: 'Hubspot\nPartner', bg: '#FF7A59' },
              { label: 'Salesforce\nPartner', bg: '#00A1E0' },
            ].map((cert) => (
              <div key={cert.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 60, height: 60, background: cert.bg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#888', textAlign: 'center', maxWidth: 80, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTRE BLOG ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
              NOTRE BLOG
            </h2>
            <a href="#" className="arrow-link" style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 4 }}>
              VOIR TOUS LES ARTICLES <span className="arrow">→</span>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { title: 'Comment optimiser votre stratégie SEO en 2025', category: 'SEO', bg: '#E8F4FD', date: '15 Mars 2025' },
              { title: "L'IA au service de la performance marketing", category: 'IA & DATA', bg: '#FFF8E7', date: '8 Mars 2025' },
              { title: 'SMA : les meilleures pratiques Meta Ads', category: 'SMA', bg: '#F0FFF4', date: '1 Mars 2025' },
            ].map((article) => (
              <a key={article.title} href="#" className="blog-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <div style={{ overflow: 'hidden', borderRadius: 6, marginBottom: 16 }}>
                  <div
                    className="img-placeholder"
                    style={{ height: 190, background: article.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999' }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>
                  {article.category} — {article.date}
                </p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, margin: 0, color: '#0a0a0a' }}>
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE CTA ─── */}
      <section style={{ background: '#0a0a0a', padding: '36px 0', overflow: 'hidden' }}>
        <div className="marquee-track" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-anton" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', textTransform: 'uppercase', paddingRight: 56, whiteSpace: 'nowrap' }}>
              <span style={{ color: '#FFF127' }}>LET&apos;S START!</span>
              <span style={{ color: '#fff' }}> CONTACTEZ-NOUS </span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── FINAL TAGLINE ─── */}
      <section id="contact" style={{ background: '#fff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.2, margin: '0 0 40px' }}>
            ENSEMBLE, DONNONS VIE À VOS AMBITIONS DIGITALES
          </h2>
          <a href="#" className="btn-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em' }}>
            DÉMARRER UN PROJET →
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: '#0a0a0a', color: '#fff', padding: '64px 24px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 60, marginBottom: 64 }}>
            <div>
              <Image
                src="/images/logo-darwin.png"
                alt="Darwin Agency"
                width={130}
                height={36}
                style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain', marginBottom: 16 }}
              />
              <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.7, maxWidth: 200 }}>
                Agence digitale indépendante dédiée à la performance depuis 2003.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {[
                { title: "L'AGENCE", links: ['Qui sommes-nous ?', 'Nos engagements RSE', 'Nous rejoindre'] },
                { title: 'SERVICES', links: ['SEO', 'SEA', 'SMA', 'Media', 'Analytics', 'Formations'] },
                { title: 'ENTREPRISE', links: ['Projets', 'Blog', "L'IA", 'Contact'] },
              ].map((col) => (
                <div key={col.title}>
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFF127', marginBottom: 16 }}>
                    {col.title}
                  </p>
                  {col.links.map((link) => (
                    <a key={link} href="#" style={{ display: 'block', fontSize: '0.82rem', color: '#777', textDecoration: 'none', marginBottom: 8 }}>
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFF127', marginBottom: 16 }}>
                SUIVEZ-NOUS
              </p>
              {['LinkedIn', 'Instagram', 'Twitter / X', 'YouTube'].map((soc) => (
                <a key={soc} href="#" style={{ display: 'block', fontSize: '0.82rem', color: '#777', textDecoration: 'none', marginBottom: 8 }}>
                  {soc}
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 40 }}>
            <span className="font-anton" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', color: '#161616', lineHeight: 0.9, display: 'block', marginBottom: 32, userSelect: 'none' }}>
              DARWIN
            </span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontSize: '0.72rem', color: '#444', margin: 0 }}>
                © 2024 Darwin Agency. Tous droits réservés.
              </p>
              <div style={{ display: 'flex', gap: 24 }}>
                {['Mentions légales', 'Politique de confidentialité', 'CGU'].map((link) => (
                  <a key={link} href="#" style={{ fontSize: '0.72rem', color: '#444', textDecoration: 'none' }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
