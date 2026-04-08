import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'RGPD & Confidentialité — DARWIN Agency',
  description: "Politique de confidentialité et politique de cookies de DARWIN Agency — traitement des données personnelles, droits des utilisateurs et gestion des cookies.",
  alternates: { canonical: '/rgpd' },
  robots: { index: false, follow: false },
}

export default function RgpdPage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      <PageHero
        title="RGPD & Confidentialité"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'RGPD & Confidentialité' }]}
      />

      {/* ─── ANCRES ─── */}
      <div style={{ background: '#fafafa', borderBottom: '1px solid #ebebeb', padding: '20px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', gap: 8 }}>
          <a href="#confidentialite" style={{ display: 'inline-block', padding: '6px 14px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555', textDecoration: 'none', border: '1px solid #ddd', borderRadius: 2, background: '#fff' }}>
            Politique de confidentialité
          </a>
          <a href="#cookies" style={{ display: 'inline-block', padding: '6px 14px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555', textDecoration: 'none', border: '1px solid #ddd', borderRadius: 2, background: '#fff' }}>
            Politique de cookies
          </a>
        </div>
      </div>

      {/* ─── CONTENU ─── */}
      <section style={{ padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          {/* ══ POLITIQUE DE CONFIDENTIALITÉ ══ */}
          <div id="confidentialite" style={{ scrollMarginTop: 80, marginBottom: 96 }}>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', marginBottom: 48, paddingBottom: 20, borderBottom: '1px solid #ebebeb' }}>
              Politique de confidentialité
            </h2>

            <div style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#555', marginBottom: 48 }}>
              La présente politique de confidentialité a pour objet d&apos;informer les utilisateurs du site{' '}
              <a href="https://www.darwin-agency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0a0a0a', fontWeight: 600 }}>www.darwin-agency.com</a>{' '}
              sur la manière dont leurs données personnelles peuvent être collectées et traitées par Darwin Interactive.
            </div>

            <Block num="1" title="Responsable du traitement">
              <p>Le responsable du traitement des données personnelles collectées sur le site est :</p>
              <div style={{ background: '#fafafa', border: '1px solid #ebebeb', borderRadius: 4, padding: '20px 24px', marginTop: 8 }}>
                <p style={{ margin: 0, lineHeight: 2 }}>
                  <strong>Darwin Interactive</strong><br />
                  SASU au capital de 7 500 €<br />
                  805 Rue Jean René Guillibert Gauthier de la Lauzière, 13290 Aix-en-Provence<br />
                  RCS Aix-en-Provence : 448 238 857<br />
                  E-mail : <a href="mailto:contact@darwin-agency.com" style={{ color: '#0a0a0a', fontWeight: 600 }}>contact@darwin-agency.com</a><br />
                  Téléphone : +33 (0)4 13 57 09 00
                </p>
              </div>
            </Block>

            <Block num="2" title="Données collectées">
              <p>Nous pouvons être amenés à collecter les données personnelles suivantes :</p>
              <List items={[
                "données d'identification et de contact transmises via le formulaire de contact (nom, prénom, société, adresse e-mail, téléphone, contenu du message) ;",
                "données transmises dans le cadre d'une inscription à notre newsletter ou à nos communications marketing ;",
                "données de navigation et d'audience, sous réserve de votre consentement lorsque celui-ci est requis, via des outils tels que Google Analytics ;",
                "données relatives à l'interaction avec nos campagnes publicitaires et de remarketing, notamment via Google Ads et Meta Ads, sous réserve de votre consentement lorsque celui-ci est requis.",
              ]} />
            </Block>

            <Block num="3" title="Finalités du traitement">
              <p>Les données collectées sont utilisées pour les finalités suivantes :</p>
              <List items={[
                "répondre aux demandes envoyées via le formulaire de contact ;",
                "échanger avec les prospects et clients dans le cadre de la relation commerciale ;",
                "adresser des informations, actualités, contenus ou communications marketing, lorsque cela est autorisé ;",
                "mesurer l'audience et améliorer les performances du site ;",
                "mesurer l'efficacité de nos campagnes publicitaires et, le cas échéant, proposer des publicités personnalisées.",
              ]} />
            </Block>

            <Block num="4" title="Bases légales">
              <p>Les traitements mis en œuvre reposent, selon les cas, sur :</p>
              <List items={[
                "votre consentement, notamment pour le dépôt de certains cookies, la mesure d'audience non exemptée et les actions de prospection lorsque le consentement est requis ;",
                "l'exécution de mesures précontractuelles ou contractuelles, lorsque vous nous contactez dans le cadre d'un projet ou d'une demande commerciale ;",
                "notre intérêt légitime, notamment pour assurer la sécurité du site, traiter les demandes entrantes, gérer la relation avec les professionnels et améliorer nos services ;",
                "nos obligations légales, lorsque la conservation de certaines données est imposée par la réglementation applicable.",
              ]} />
            </Block>

            <Block num="5" title="Destinataires des données">
              <p>Les données collectées sont destinées aux équipes internes habilitées de Darwin Interactive.</p>
              <p>Elles peuvent également être transmises, dans la limite de leurs attributions respectives, à nos sous-traitants et prestataires techniques, notamment :</p>
              <List items={[
                "Brevo, pour la gestion de communications e-mailing, formulaires ou campagnes marketing ;",
                "Google Analytics, pour la mesure d'audience ;",
                "Google Ads, pour le suivi des conversions et les campagnes publicitaires ;",
                "Meta Ads, pour le suivi publicitaire, l'analyse des conversions et le remarketing éventuel ;",
                "OVH, en tant qu'hébergeur du site.",
              ]} />
            </Block>

            <Block num="6" title="Durées de conservation">
              <p>Les données personnelles sont conservées pendant une durée n&apos;excédant pas celle nécessaire aux finalités pour lesquelles elles sont traitées.</p>
              <List items={[
                "Données issues du formulaire de contact : pendant le temps nécessaire au traitement de la demande, puis archivées si nécessaire à des fins de suivi commercial ou probatoire ;",
                "Données utilisées à des fins de prospection commerciale : jusqu'au retrait du consentement, à l'opposition de la personne concernée ou à l'expiration de la durée de conservation applicable ;",
                "Données de mesure d'audience et cookies : selon les durées prévues par les outils utilisés et votre paramétrage de consentement ;",
                "Données conservées pour répondre à une obligation légale : pendant la durée imposée par les textes applicables.",
              ]} />
            </Block>

            <Block num="7" title="Vos droits">
              <p>Conformément à la réglementation applicable en matière de protection des données personnelles, vous disposez des droits suivants :</p>
              <List items={[
                "droit d'accès ;",
                "droit de rectification ;",
                "droit à l'effacement ;",
                "droit à la limitation du traitement ;",
                "droit d'opposition ;",
                "droit à la portabilité, lorsque celui-ci est applicable ;",
                "droit de retirer votre consentement à tout moment, pour les traitements fondés sur celui-ci.",
              ]} />
              <p>
                Vous pouvez exercer ces droits en nous écrivant à :{' '}
                <a href="mailto:contact@darwin-agency.com" style={{ color: '#0a0a0a', fontWeight: 600 }}>contact@darwin-agency.com</a>.
                En cas de doute raisonnable sur votre identité, un justificatif pourra vous être demandé.
              </p>
              <p>
                Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL :{' '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#0a0a0a', fontWeight: 600 }}>www.cnil.fr</a>.
              </p>
            </Block>

            <Block num="8" title="Transferts hors Union européenne">
              <p>
                Certains de nos prestataires, notamment Google et Meta, sont susceptibles d&apos;entraîner des transferts de données hors de l&apos;Union européenne, notamment vers les États-Unis, selon les services et paramétrages utilisés. Dans ce cas, ces traitements sont encadrés conformément à la réglementation applicable.
              </p>
            </Block>

            <Block num="9" title="Sécurité">
              <p>
                Darwin Interactive met en œuvre les mesures techniques et organisationnelles appropriées afin de protéger les données personnelles contre la destruction, la perte, l&apos;altération, la divulgation non autorisée ou l&apos;accès non autorisé.
              </p>
            </Block>

            <Block num="10" title="Mise à jour" last>
              <p>
                La présente politique de confidentialité peut être modifiée à tout moment afin de tenir compte des évolutions légales, réglementaires, techniques ou fonctionnelles du site. La version en vigueur est celle publiée sur cette page à la date de sa consultation.
              </p>
            </Block>
          </div>

          {/* ══ POLITIQUE DE COOKIES ══ */}
          <div id="cookies" style={{ scrollMarginTop: 80 }}>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', marginBottom: 48, paddingBottom: 20, borderBottom: '1px solid #ebebeb' }}>
              Politique de cookies
            </h2>

            <div style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#555', marginBottom: 48 }}>
              Lors de votre navigation sur le site{' '}
              <a href="https://www.darwin-agency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0a0a0a', fontWeight: 600 }}>www.darwin-agency.com</a>,
              des cookies et autres traceurs peuvent être déposés sur votre terminal, sous réserve de vos choix et, lorsque cela est requis, de votre consentement préalable.
            </div>

            <Block num="1" title="Qu'est-ce qu'un cookie ?">
              <p>
                Un cookie est un petit fichier déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la consultation d&apos;un site internet. Il permet notamment de reconnaître un terminal, de mémoriser des préférences ou de collecter des informations relatives à la navigation.
              </p>
            </Block>

            <Block num="2" title="Quels cookies utilisons-nous ?">
              <p>Nous utilisons ou sommes susceptibles d&apos;utiliser les catégories de cookies suivantes :</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
                <CookieCategory label="Cookies strictement nécessaires">
                  Ces cookies sont indispensables au fonctionnement du site et ne nécessitent pas votre consentement lorsqu&apos;ils ont pour seule finalité de permettre ou faciliter la communication par voie électronique ou sont strictement nécessaires à la fourniture du service demandé.
                </CookieCategory>
                <CookieCategory label="Cookies de mesure d'audience">
                  Ces cookies nous permettent de mesurer la fréquentation du site, d&apos;analyser l&apos;utilisation des pages et d&apos;améliorer les performances du site, notamment via Google Analytics. Selon leur configuration, ces cookies peuvent nécessiter votre consentement préalable.
                </CookieCategory>
                <CookieCategory label="Cookies marketing et publicitaires">
                  Ces cookies peuvent être utilisés pour mesurer l&apos;efficacité de nos campagnes, suivre les conversions, affiner nos audiences et, le cas échéant, vous proposer des contenus ou publicités personnalisés via Google Ads, Meta Ads et certains services de Brevo. Ils sont déposés uniquement avec votre consentement préalable.
                </CookieCategory>
              </div>
            </Block>

            <Block num="3" title="Outils susceptibles d'être utilisés">
              <List items={['Google Analytics ;', 'Brevo ;', 'Google Ads ;', 'Meta Ads.']} />
            </Block>

            <Block num="4" title="Consentement">
              <p>
                Lors de votre première visite sur le site, un bandeau ou une plateforme de gestion du consentement vous permet d&apos;accepter, de refuser ou de personnaliser l&apos;utilisation des cookies non nécessaires.
              </p>
              <p>
                Conformément aux recommandations de la CNIL, le refus des cookies doit être aussi simple que leur acceptation, et vous devez pouvoir retirer votre consentement à tout moment.
              </p>
            </Block>

            <Block num="5" title="Durée de conservation du choix">
              <p>
                Vos choix en matière de cookies sont conservés pendant une durée limitée, conformément à la réglementation applicable et aux paramètres de votre outil de gestion du consentement.
              </p>
            </Block>

            <Block num="6" title="Gestion des cookies">
              <p>
                Vous pouvez à tout moment modifier vos préférences via les paramètres de gestion des cookies disponibles sur le site. Vous pouvez également configurer votre navigateur pour bloquer tout ou partie des cookies, étant précisé que certains cookies strictement nécessaires au fonctionnement du site ne peuvent pas être désactivés via notre bandeau.
              </p>
            </Block>

            <Block num="7" title="En savoir plus" last>
              <p>
                Pour en savoir plus sur la manière dont nous traitons vos données personnelles, consultez notre{' '}
                <a href="#confidentialite" style={{ color: '#0a0a0a', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Politique de confidentialité
                </a>{' '}ci-dessus.
              </p>
            </Block>
          </div>

        </div>
      </section>
    </div>
  )
}

/* ─── Composants locaux ─── */

function Block({ num, title, children, last = false }: { num: string; title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ paddingBottom: last ? 0 : 40, marginBottom: last ? 0 : 40, borderBottom: last ? 'none' : '1px solid #f0f0f0' }}>
      <h3 style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, color: '#aaa', minWidth: 24 }}>{num}.</span>
        {title}
      </h3>
      <div style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#555', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {children}
      </div>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span style={{ width: 5, height: 5, background: '#FFF127', borderRadius: '50%', flexShrink: 0, marginTop: 9 }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CookieCategory({ label, children }: { label: string; color?: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid #ddd', paddingLeft: 16 }}>
      <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0a0a0a', marginBottom: 6 }}>{label}</p>
      <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#666', margin: 0 }}>{children}</p>
    </div>
  )
}
