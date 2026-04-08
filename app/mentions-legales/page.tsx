import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Mentions légales — DARWIN Agency',
  description: "Mentions légales du site darwin-agency.com — éditeur, hébergeur, propriété intellectuelle et données personnelles.",
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      <PageHero
        title="Mentions légales"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]}
      />

      {/* ─── CONTENU ─── */}
      <section style={{ padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          <Block title="Éditeur du site">
            <p>Le présent site, accessible à l&apos;adresse <strong>https://www.darwin-agency.com</strong>, est édité par :</p>
            <Table rows={[
              ['Raison sociale', 'DI Darwin Interactive'],
              ['Nom commercial', 'Darwin Agency'],
              ['Forme juridique', 'SASU — Société par Actions Simplifiée Unipersonnelle'],
              ['Capital social', '7 500 €'],
              ['Siège social', '805 Avenue Jean René Guillibert Gauthier de la Lauzière, 13080 Aix-en-Provence'],
              ['SIREN', '448 238 857'],
              ['SIRET (siège)', '448 238 857 00073'],
              ['RCS', 'Aix-en-Provence : 448 238 857'],
              ['N° TVA intracommunautaire', 'FR54 448 238 857'],
              ['Code NAF/APE', '73.11Z — Activités des agences de publicité'],
              ['Téléphone', '+33 (0)4 13 57 09 00'],
              ['Email', 'contact@darwin-agency.com'],
            ]} />
          </Block>

          <Block title="Directeur de la publication">
            <p>Le directeur de la publication est le représentant légal de la société DI Darwin Interactive.</p>
          </Block>

          <Block title="Hébergement">
            <p>Le site est hébergé par :</p>
            <Table rows={[
              ['Société', 'OVH SAS'],
              ['Adresse', '2 rue Kellermann — 59100 Roubaix — France'],
              ['RCS', 'Lille Métropole : 424 761 419 00045'],
              ['N° TVA', 'FR22 424 761 419'],
              ['Téléphone', '1007'],
              ['Site web', 'https://www.ovhcloud.com'],
            ]} />
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo, vidéos, éléments visuels, structure et code) est protégé par le droit de la propriété intellectuelle et est la propriété exclusive de DI Darwin Interactive, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite.
            </p>
          </Block>

          <Block title="Responsabilité">
            <p>
              DI Darwin Interactive s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site, sans pouvoir en garantir l&apos;exhaustivité ni l&apos;absence d&apos;erreur. L&apos;éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;accès au site ou de son utilisation.
            </p>
          </Block>

          <Block title="Données personnelles">
            <p>
              Les informations relatives au traitement de vos données personnelles sont disponibles sur notre page dédiée :{' '}
              <Link href="/rgpd" style={{ color: '#0a0a0a', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                RGPD &amp; Confidentialité
              </Link>.
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Les informations relatives au dépôt et à l&apos;utilisation des cookies sont disponibles sur notre page dédiée :{' '}
              <Link href="/rgpd" style={{ color: '#0a0a0a', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                RGPD &amp; Confidentialité
              </Link>.
            </p>
          </Block>

          <Block title="Droit applicable et juridiction compétente" last>
            <p>
              Le présent site est soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du ressort d&apos;Aix-en-Provence seront seuls compétents.
            </p>
          </Block>

        </div>
      </section>
    </div>
  )
}

/* ─── Composants locaux ─── */

function Block({ title, children, last = false }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ paddingBottom: last ? 0 : 48, marginBottom: last ? 0 : 48, borderBottom: last ? 'none' : '1px solid #eee' }}>
      <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
        {title}
      </h2>
      <div style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#444', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {children}
      </div>
    </div>
  )
}

function Table({ rows }: { rows: [string, string][] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} style={{ borderBottom: '1px solid #f0f0f0' }}>
            <td style={{ padding: '10px 0', fontSize: '0.82rem', fontWeight: 700, color: '#999', letterSpacing: '0.04em', width: '36%', verticalAlign: 'top' }}>
              {label}
            </td>
            <td style={{ padding: '10px 0 10px 16px', fontSize: '0.9rem', color: '#333', verticalAlign: 'top' }}>
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
