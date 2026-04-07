// ─────────────────────────────────────────────────────────
// FICHIER : app/data/blog.ts
// RÔLE    : Source unique de vérité pour les articles de blog
// DÉPEND  : app/blog/[slug]/page.tsx
// ─────────────────────────────────────────────────────────

// ─── TYPES ──────────────────────────────────────────────

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'subtitle'; text: string }
  | { type: 'image'; src: string; alt?: string }

export type BlogSection = {
  number: string
  title: string
  blocks: BlogBlock[]
}

export type BlogArticle = {
  slug: string
  title: string
  excerpt: string
  categories: string[]
  tags: string[]
  author: {
    name: string
    role: string
    photo: string
  }
  date: string
  readTime: number  // calculé automatiquement — ne pas modifier manuellement
  heroImg: string
  sections: BlogSection[]
  relatedSlugs?: string[]
}

type RawArticle = Omit<BlogArticle, 'readTime'>

function computeReadTime(article: RawArticle): number {
  const texts: string[] = [article.title, article.excerpt]
  for (const section of article.sections) {
    texts.push(section.title)
    for (const block of section.blocks) {
      if (block.type === 'paragraph' || block.type === 'subtitle') {
        texts.push(block.text)
      } else if (block.type === 'list') {
        texts.push(...block.items)
      } else if (block.type === 'callout') {
        if (block.title) texts.push(block.title)
        texts.push(block.text)
      }
    }
  }
  const words = texts.join(' ').trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

// ─── DONNÉES ────────────────────────────────────────────

const RAW_ARTICLES: RawArticle[] = [

  // ── ARTICLE 1 ─────────────────────────────────────────
  {
    slug: '5-leviers-ia-campagnes-google-ads-partner-summit',
    title: `5 leviers pour passer du \u00ab\u00a0test\u00a0\u00bb \u00e0 la performance\u00a0: comment l'IA transforme vos campagnes Google Ads`,
    excerpt: `Retour du Google Partner Summit 2025 \u00e0 Dublin\u00a0: 74\u00a0% des entreprises ne d\u00e9passent pas la phase pilote de l'IA. Voici les 5 leviers concrets pour industrialiser l'IA dans vos campagnes Google Ads.`,
    categories: ['Le praticien qui parle'],
    tags: ['Google Ads', 'IA', 'Performance Max', 'Smart Bidding', 'Data'],
    author: {
      name: 'Thomas Courjeault',
      role: 'Directeur SEO / SEA / SMA',
      photo: '/images/team/thomas-courjeault.jpg',
    },
    date: '2025-11-27',
    heroImg: '/images/blog/partner-summit-google-ads.png',
    sections: [
      {
        number: '01',
        title: `Construire sa \u00ab\u00a0Data Strength\u00a0\u00bb\u00a0: le carburant indispensable`,
        blocks: [
          {
            type: 'paragraph',
            text: `Les annonceurs qui priorisent les donn\u00e9es first-party observent une augmentation de 30\u00a0% de leurs performances. Google appelle cela la \u00ab\u00a0Data Strength\u00a0\u00bb\u00a0: la qualit\u00e9 des r\u00e9sultats (Business Output) d\u00e9pend directement de la qualit\u00e9 des donn\u00e9es entrantes (Data Input).`,
          },
          {
            type: 'image',
            src: '/images/blog/partner-summit_day-1_plenary_session-3-1024x683.jpg',
            alt: 'Google Partner Summit 2025 \u2014 Plenary Session Day 1',
          },
          {
            type: 'list',
            items: [
              `Google Data Manager\u00a0: connecte les sources disparates avec une approche \u00ab\u00a0Privacy by default\u00a0\u00bb`,
              `Enhanced Conversions\u00a0: +8\u00a0% de ROAS en Search en moyenne`,
              `Google Tag Gateway\u00a0: +14\u00a0% de conversions mesur\u00e9es (cas Incubeta\u00a0: +5,6\u00a0% de revenus)`,
            ],
          },
          {
            type: 'callout',
            title: `\u00c0 retenir`,
            text: `Auditez votre Data Strength avant de lancer des campagnes IA complexes. Activez les Conversions Avanc\u00e9es en priorit\u00e9\u00a0: c'est le levier le plus rapide \u00e0 activer.`,
          },
        ],
      },
      {
        number: '02',
        title: `S'adapter \u00e0 la \u00ab\u00a0Nouvelle Recherche\u00a0\u00bb\u00a0: multimodale et conversationnelle`,
        blocks: [
          {
            type: 'paragraph',
            text: `La recherche n'est plus textuelle. Google Lens enregistre d\u00e9sormais 25 milliards de recherches visuelles par mois (+70\u00a0% en un an), et 1 recherche sur 5 poss\u00e8de une intention commerciale. Les AI Overviews touchent 2 milliards d'utilisateurs dans plus de 200 pays.`,
          },
          {
            type: 'paragraph',
            text: `L'AI Mode, disponible dans 180+ pays, transforme la recherche conversationnelle en parcours d'achat \u00e0 part enti\u00e8re. Comme le r\u00e9sume Google\u00a0: \u00ab\u00a0quand il est plus facile d'obtenir des r\u00e9ponses, les gens posent plus de questions\u00a0\u00bb.`,
          },
          {
            type: 'callout',
            title: `\u00c0 retenir`,
            text: `Pensez \u00ab\u00a0r\u00e9ponse multimodale\u00a0\u00bb plut\u00f4t que \u00ab\u00a0mots-cl\u00e9s\u00a0\u00bb. Auditez votre pr\u00e9sence visuelle pour Google Lens.`,
          },
        ],
      },
      {
        number: '03',
        title: `Activer \u00ab\u00a0AI Max\u00a0\u00bb`,
        blocks: [
          {
            type: 'paragraph',
            text: `AI Max for Search combine expansion des mots-cl\u00e9s via Broad Match, Smart Bidding en temps r\u00e9el et cr\u00e9ativit\u00e9 personnalis\u00e9e \u00e0 l'\u00e9chelle. Le cas Volvo est embl\u00e9matique\u00a0: +27\u00a0% de conversions avec une approche AI Max compar\u00e9 aux campagnes sur mots-cl\u00e9s exacts.`,
          },
          {
            type: 'image',
            src: '/images/blog/partner-summit_day-2_plenary-1024x683.jpg',
            alt: 'Google Partner Summit 2025 \u2014 Plenary Session Day 2',
          },
          {
            type: 'callout',
            title: `\u00c0 retenir`,
            text: `Cessez le micro-management des mots-cl\u00e9s. Concentrez-vous sur la qualit\u00e9 des assets (images, titres, vid\u00e9os) fournis \u00e0 l'IA\u00a0: c'est l\u00e0 que se joue la diff\u00e9renciation.`,
          },
        ],
      },
      {
        number: '04',
        title: `La cr\u00e9ativit\u00e9 augment\u00e9e\u00a0: produire plus vite, mieux, en masse`,
        blocks: [
          {
            type: 'paragraph',
            text: `Imagen pour les images, Veo pour la vid\u00e9o\u00a0: l'IA g\u00e9n\u00e9rative arrive dans la production cr\u00e9ative. L'enjeu est d'utiliser l'IA pour la production \u00e0 grande \u00e9chelle (Scale) tout en pr\u00e9servant l'identit\u00e9 de marque (Soul).`,
          },
          {
            type: 'paragraph',
            text: `L'utilisation conjointe de Google Search et YouTube g\u00e9n\u00e8re un ROAS sup\u00e9rieur de 21\u00a0% \u00e0 tous les autres m\u00e9dias combin\u00e9s. La cr\u00e9ativit\u00e9 n'est plus un centre de co\u00fbts\u00a0\u2014 c'est un levier de performance direct.`,
          },
          {
            type: 'callout',
            title: `\u00c0 retenir`,
            text: `Ne silotez pas cr\u00e9ativit\u00e9 et m\u00e9dias. Utilisez les outils g\u00e9n\u00e9ratifs pour d\u00e9cliner vos concepts forts en multiples assets pour Search et YouTube simultan\u00e9ment.`,
          },
        ],
      },
      {
        number: '05',
        title: `Prouver la valeur\u00a0: adopter un Modern Measurement Toolkit`,
        blocks: [
          {
            type: 'paragraph',
            text: `Trois piliers compl\u00e9mentaires\u00a0: l'Attribution Bas\u00e9e sur les Donn\u00e9es (DDA) pour les signaux temps r\u00e9el, le Marketing Mix Modeling avec Meridian (mod\u00e8le open-source Google), et les tests d'incr\u00e9mentalit\u00e9 pour valider la causalit\u00e9.`,
          },
          {
            type: 'image',
            src: '/images/blog/partner-summit_day-2_breakouts_auditorium_-1024x683.jpg',
            alt: 'Google Partner Summit 2025 \u2014 Breakouts Auditorium Day 2',
          },
          {
            type: 'list',
            items: [
              `80\u00a0% des marketeurs confient la gestion MTA \u00e0 leurs agences`,
              `72\u00a0% en font de m\u00eame pour le MMM`,
              `+30\u00a0% de performances en priorisant les donn\u00e9es first-party`,
            ],
          },
          {
            type: 'callout',
            title: `\u00c0 retenir`,
            text: `Voyez la mesure comme moteur de croissance, pas comme simple reporting mensuel. Mesurez l'incr\u00e9mentalit\u00e9\u00a0\u2014 pas la corr\u00e9lation.`,
          },
        ],
      },
    ],
    relatedSlugs: ['comparatif-2026-solution-projet-digital', '7-signaux-faibles-agence-pas-a-la-hauteur'],
  },

  // ── ARTICLE 2 ─────────────────────────────────────────
  {
    slug: 'comparatif-2026-solution-projet-digital',
    title: `Comparatif 2026\u00a0: quelle solution pour r\u00e9ussir votre projet digital\u00a0?`,
    excerpt: `Agence marketing digitale, freelance ou studio de cr\u00e9ation\u00a0? Comparatif 2026 des forces, limites et conseils pour faire le bon choix. D\u00e9couvrez la m\u00e9thode Darwin ROI+ pour allier performance et cr\u00e9ativit\u00e9.`,
    categories: ['La complexit\u00e9 rendue simple'],
    tags: ['Agence digitale', 'Freelance', 'Studio design', 'ROI', 'Strat\u00e9gie digitale'],
    author: {
      name: 'J\u00e9r\u00f4me Renard',
      role: 'Directeur Associ\u00e9',
      photo: '/images/team/jerome-renard.jpg',
    },
    date: '2026-01-15',
    heroImg: '/images/blog/reussir-votre-projet-digital.png',
    sections: [
      {
        number: '01',
        title: `2026\u00a0: un march\u00e9 qui explose et se sp\u00e9cialise`,
        blocks: [
          {
            type: 'paragraph',
            text: `La France compte d\u00e9sormais 1,3 million de freelances \u2014 une croissance de 110\u00a0% depuis 2010. Le march\u00e9 se fragmente en niches ultra-sp\u00e9cialis\u00e9es\u00a0: les g\u00e9n\u00e9ralistes disparaissent au profit d'experts pointus sur un levier pr\u00e9cis.`,
          },
          {
            type: 'paragraph',
            text: `Le client 2026 est plus exigeant et mieux inform\u00e9\u00a0: orient\u00e9 ROI, sensible aux budgets, il exige r\u00e9activit\u00e9, mesurabilit\u00e9, transparence et agilit\u00e9.`,
          },
        ],
      },
      {
        number: '02',
        title: `Les agences de marketing digital orient\u00e9es performance`,
        blocks: [
          {
            type: 'paragraph',
            text: `Une agence performance pilote des campagnes multi-canal avec une logique d'attribution et d'optimisation data-driven. Elle g\u00e8re des KPIs en temps r\u00e9el et peut scaler rapidement les budgets.`,
          },
          {
            type: 'subtitle',
            text: `Forces`,
          },
          {
            type: 'list',
            items: [
              `R\u00e9sultats mesurables rapidement`,
              `Ma\u00eetrise des outils complexes (Google Ads, Meta, analytics)`,
              `D\u00e9cisions bas\u00e9es sur la data`,
              `Capacit\u00e9 de scalabilit\u00e9`,
            ],
          },
          {
            type: 'subtitle',
            text: `Limites`,
          },
          {
            type: 'list',
            items: [
              `La cr\u00e9ativit\u00e9 parfois secondaire`,
              `Focus court terme`,
              `Co\u00fbts \u00e9lev\u00e9s`,
            ],
          },
          {
            type: 'callout',
            title: `Pour qui\u00a0?`,
            text: `E-commerce avec budgets >100\u00a0k\u20ac/mois, entreprises orient\u00e9es performance, projets avec KPIs clairs et mesurables.`,
          },
        ],
      },
      {
        number: '03',
        title: `Les agences de communication visuelle\u00a0: quand l'\u00e9motion prime`,
        blocks: [
          {
            type: 'paragraph',
            text: `Univers visuels forts, conception cr\u00e9ative, vid\u00e9os engageantes, optimisation des formats natifs\u00a0: les agences de communication visuelle excellent l\u00e0 o\u00f9 l'\u00e9motion et l'identit\u00e9 de marque priment sur la conversion imm\u00e9diate.`,
          },
          {
            type: 'list',
            items: [
              `Cr\u00e9ativit\u00e9 illimit\u00e9e`,
              `Expertise technique (motion, 3D, animation)`,
              `Connexion \u00e9motionnelle avec l'audience`,
              `Innovation formelle constante`,
            ],
          },
          {
            type: 'callout',
            title: `Pour qui\u00a0?`,
            text: `Marques lifestyle/premium, lancements produit, communication institutionnelle, rebranding complet.`,
          },
        ],
      },
      {
        number: '04',
        title: `Les freelances\u00a0: l'agilit\u00e9 incarn\u00e9e`,
        blocks: [
          {
            type: 'paragraph',
            text: `TJM moyen\u00a0: 540\u00a0\u20ac (webmarketing) \u00e0 620\u00a0\u20ac (marketing g\u00e9n\u00e9ral). 87\u00a0% des freelances ont d\u00e9j\u00e0 travaill\u00e9 en \u00e9quipe. Les collectifs comme La Collab (3\u00a0200 experts, 1,8\u00a0M\u20ac de CA en 2025) redessinent les fronti\u00e8res entre agence et freelancing.`,
          },
          {
            type: 'list',
            items: [
              `Flexibilit\u00e9 maximale`,
              `Rapport qualit\u00e9-prix sup\u00e9rieur`,
              `Expertise hyper-sp\u00e9cialis\u00e9e`,
              `Relation directe, z\u00e9ro interm\u00e9diaire`,
            ],
          },
          {
            type: 'callout',
            title: `Pour qui\u00a0?`,
            text: `PME/startups, projets ponctuels sp\u00e9cifiques, budgets contraints, besoins d'expertise tr\u00e8s cibl\u00e9e.`,
          },
        ],
      },
      {
        number: '05',
        title: `6 questions pour ne plus se tromper dans son choix`,
        blocks: [
          {
            type: 'list',
            items: [
              `Quel est mon objectif principal\u00a0? (performance, notori\u00e9t\u00e9, cr\u00e9ativit\u00e9)`,
              `Quel budget suis-je pr\u00eat \u00e0 investir\u00a0?`,
              `Quel niveau d'accompagnement j'attends\u00a0?`,
              `Quels d\u00e9lais\u00a0?`,
              `Quelle expertise interne ai-je en face\u00a0?`,
              `Quel est mon niveau de tol\u00e9rance au risque\u00a0?`,
            ],
          },
        ],
      },
      {
        number: '06',
        title: `Les erreurs qui co\u00fbtent cher`,
        blocks: [
          {
            type: 'list',
            items: [
              `Choisir uniquement sur le prix\u00a0: \u00ab\u00a0le moins cher devient le plus cher\u00a0\u00bb`,
              `N\u00e9gliger la phase de brief\u00a0: 90\u00a0% des projets qui d\u00e9raillent viennent d'un brief insuffisant`,
              `Oublier de mesurer la performance\u00a0: risque de continuer une strat\u00e9gie inefficace`,
              `Sous-estimer le temps de collaboration\u00a0: pr\u00e9voyez 20\u00a0% du temps projet pour le pilotage`,
            ],
          },
          {
            type: 'callout',
            title: `L'humain avant tout`,
            text: `Au-del\u00e0 des comp\u00e9tences techniques, posez-vous la question\u00a0: est-ce que je fais confiance \u00e0 cette \u00e9quipe\u00a0? Le feeling et la vision partag\u00e9e sont aussi d\u00e9terminants que le portefeuille clients.`,
          },
        ],
      },
    ],
    relatedSlugs: ['5-leviers-ia-campagnes-google-ads-partner-summit', '7-signaux-faibles-agence-pas-a-la-hauteur'],
  },

  // ── ARTICLE 3 ─────────────────────────────────────────
  {
    slug: '7-signaux-faibles-agence-pas-a-la-hauteur',
    title: `Les 7 signaux faibles qui montrent que votre agence actuelle n'est plus \u00e0 la hauteur`,
    excerpt: `Vos r\u00e9sultats stagnent, vos briefs sont ignor\u00e9s, vos rapports s'allongent\u00a0? D\u00e9couvrez 7 signaux faibles qui montrent que votre agence n'est plus efficace \u2014 et le plan d'action pour r\u00e9agir.`,
    categories: ["L'avis qui d\u00e9range"],
    tags: ['Agence digitale', 'Performance', 'ROI', 'Changement d\u2019agence'],
    author: {
      name: 'Olivier Trubert',
      role: 'CEO',
      photo: '/images/team/olivier-trubert.jpg',
    },
    date: '2026-02-10',
    heroImg: '/images/blog/navigation-a-facettes-5.png',
    sections: [
      {
        number: '01',
        title: `Vos rapports deviennent des romans sans fin`,
        blocks: [
          {
            type: 'paragraph',
            text: `Pr\u00e9sentations de plus de 45 minutes, plus de 15 m\u00e9triques diff\u00e9rentes, des \u00ab\u00a0insights\u00a0\u00bb qui ne font que d\u00e9crire les donn\u00e9es\u2026 L'inflation des rapports masque l'absence de r\u00e9sultats concrets. Quand une agence ne peut pas justifier ses d\u00e9penses, elle compense en vous noyant sous les donn\u00e9es.`,
          },
          {
            type: 'callout',
            title: `Test pratique`,
            text: `Votre agence peut-elle encore expliquer sa valeur ajout\u00e9e en 2 minutes\u00a0? Si non, c'est un signal.`,
          },
        ],
      },
      {
        number: '02',
        title: `Ils parlent de \u00ab\u00a0brand awareness\u00a0\u00bb quand vous demandez du ROI`,
        blocks: [
          {
            type: 'paragraph',
            text: `\u00ab\u00a0L'objectif \u00e9tait brand-oriented\u00a0\u00bb, \u00ab\u00a0il faut du temps pour mesurer l'impact\u00a0\u00bb, \u00ab\u00a0on a cr\u00e9\u00e9 beaucoup d'engagement\u00a0\u00bb\u2026 Ces r\u00e9ponses \u00e9vasives r\u00e9v\u00e8lent une incapacit\u00e9 \u00e0 mesurer l'impact r\u00e9el et un manque de compr\u00e9hension de votre business.`,
          },
          {
            type: 'callout',
            title: `Test pratique`,
            text: `Posez la question\u00a0: \u00ab\u00a0Combien de CA nos investissements marketing ont g\u00e9n\u00e9r\u00e9 ces 3 derniers mois\u00a0?\u00a0\u00bb Attendez une r\u00e9ponse pr\u00e9cise en 30 secondes.`,
          },
        ],
      },
      {
        number: '03',
        title: `Votre contact principal devient insaisissable`,
        blocks: [
          {
            type: 'list',
            items: [
              `Temps de r\u00e9ponse sup\u00e9rieur \u00e0 48h`,
              `R\u00e9unions report\u00e9es 2+ fois par mois`,
              `R\u00e9ponses \u00e9vasives du type \u00ab\u00a0on regarde \u00e7a\u00a0\u00bb`,
              `Plus d'initiative dans les propositions`,
            ],
          },
          {
            type: 'callout',
            title: `Action`,
            text: `Mesurez objectivement pendant 2 semaines, puis \u00e9tablissez un SLA de r\u00e9ponse (24h max) par \u00e9crit.`,
          },
        ],
      },
      {
        number: '04',
        title: `Leurs recommandations ressemblent \u00e0 du copier-coller`,
        blocks: [
          {
            type: 'list',
            items: [
              `Strat\u00e9gies identiques mois apr\u00e8s mois`,
              `Aucune r\u00e9f\u00e9rence \u00e0 votre secteur sp\u00e9cifique`,
              `Recommandations d\u00e9connect\u00e9es de votre saisonnalit\u00e9`,
              `Propositions qui ignorent votre historique`,
            ],
          },
          {
            type: 'callout',
            title: `Test`,
            text: `Demandez comment la derni\u00e8re recommandation est sp\u00e9cifique \u00e0 votre secteur. L'h\u00e9sitation est une r\u00e9ponse.`,
          },
        ],
      },
      {
        number: '05',
        title: `Vous ne comprenez plus ce qu'ils font de vos budgets`,
        blocks: [
          {
            type: 'list',
            items: [
              `R\u00e9partition en grandes masses sans d\u00e9tail`,
              `Justifications techniques incompr\u00e9hensibles`,
              `Refus d'acc\u00e8s aux comptes publicitaires`,
              `\u00c9cart inexpliqué entre budget allou\u00e9 et d\u00e9pens\u00e9`,
            ],
          },
          {
            type: 'callout',
            title: `Action`,
            text: `Demandez l'acc\u00e8s administrateur \u00e0 tous les comptes publicitaires et une r\u00e9partition d\u00e9taill\u00e9e avec justification ROI. Un refus est r\u00e9dhibitoire.`,
          },
        ],
      },
      {
        number: '06',
        title: `Ils ne vous challengent plus`,
        blocks: [
          {
            type: 'paragraph',
            text: `\u00ab\u00a0Oui\u00a0\u00bb automatique \u00e0 toutes vos demandes, absence de contre-propositions, plus de d\u00e9bats strat\u00e9giques, ex\u00e9cution pure sans remise en question\u2026 Une agence qui ne vous challenge plus vous fait perdre votre avantage concurrentiel.`,
          },
          {
            type: 'callout',
            title: `Test`,
            text: `Proposez volontairement une strat\u00e9gie discutable et observez la r\u00e9action. Si elle est valid\u00e9e sans discussion, partez.`,
          },
        ],
      },
      {
        number: '07',
        title: `Vous commencez \u00e0 googler \u00ab\u00a0changer d'agence\u00a0\u00bb`,
        blocks: [
          {
            type: 'paragraph',
            text: `C'est le signal ultime. Recherche discr\u00e8te d'alternatives, consultation de profils LinkedIn concurrents, questions en off dans votre r\u00e9seau\u2026 La confiance ne se r\u00e9pare pas. Cette recherche d'alternatives r\u00e9v\u00e8le un d\u00e9calage irr\u00e9conciliable entre vos attentes et leur service.`,
          },
          {
            type: 'callout',
            title: `Plan d'action`,
            text: `Semaine 1\u00a0: audit honnête sur les 7 signaux. Semaine 2\u00a0: confrontation constructive avec l'agence. Semaine 4\u00a0: si moins de 3 probl\u00e8mes r\u00e9solus, le changement s'impose. Changer d'agence n'est pas un \u00e9chec\u00a0\u2014 c'est une \u00e9volution naturelle.`,
          },
        ],
      },
    ],
    relatedSlugs: ['comparatif-2026-solution-projet-digital', '5-leviers-ia-campagnes-google-ads-partner-summit'],
  },

]

// ─── EXPORT AVEC READTIME CALCULÉ ───────────────────────

export const BLOG_ARTICLES: BlogArticle[] = RAW_ARTICLES.map(a => ({
  ...a,
  readTime: computeReadTime(a),
}))

// ─── HELPERS ────────────────────────────────────────────

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find(a => a.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
