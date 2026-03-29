// ─────────────────────────────────────────────────────────
// FICHIER : app/data/cas-clients.ts
// RÔLE    : Source unique de vérité pour tous les cas clients
// DÉPEND  : app/cas-clients/page.tsx, app/cas-clients/[slug]/page.tsx
// ─────────────────────────────────────────────────────────

// ─── TYPES ──────────────────────────────────────────────

export type Stat = {
  num: string
  label: string
}

export type SolutionStep = {
  id: string
  title: string
  text: string
}

export type CasClient = {
  slug: string
  client: string
  leviers: string[]
  tag: string
  title: string
  excerpt: string
  context: string
  stats: Stat[]
  problematique: string
  objectifs: string[]
  solution: SolutionStep[]
  conclusion: {
    title: string
    text: string
    linkLabel?: string
    linkHref?: string
  }
  heroImg: string
  cardImg: string
  problematiqueImg: string
}

// ─── DONNÉES ────────────────────────────────────────────

export const CAS_CLIENTS: CasClient[] = [
  {
    slug: 'verisure',
    client: 'Verisure',
    leviers: ['MÉDIA'],
    tag: 'MÉDIA',
    title: 'LE SMS DEVENU PILIER DU MIX MÉDIA',
    excerpt: 'Comment le SMS est devenu un pilier du mix média Verisure grâce à un modèle de rémunération à la performance.',
    context: "Verisure est le leader français de la télésurveillance, avec plus de 650 000 clients, ciblant principalement les propriétaires de maisons et d'appartements. Dans un contexte de digitalisation croissante et d'optimisation des coûts d'acquisition, Verisure souhaitait explorer de nouveaux leviers d'acquisition tout en maîtrisant sa rentabilité.",
    stats: [
      { num: '+23%', label: 'Taux de transformation RDV/Leads' },
      { num: '8K', label: 'Rendez-vous générés par mois' },
      { num: '250+', label: 'Campagnes suivies chaque mois' },
    ],
    problematique: "Optimiser la rentabilité du SMS, un levier au CPM élevé, pour générer des rendez-vous commerciaux terrain tout en respectant un coût d'acquisition client (CAC) cible.",
    objectifs: [
      "Développer les volumes de rendez-vous et pérenniser le levier SMS.",
      "Réduire le coût d'acquisition tout en maintenant une qualité de leads élevée.",
      "Consolider la place du SMS dans le mix média Verisure en en faisant un levier structurant.",
    ],
    solution: [
      {
        id: '01',
        title: 'UN MODÈLE DE RÉMUNÉRATION ATTRACTIF',
        text: "DARWIN et Verisure ont rompu avec le modèle CPM traditionnel pour adopter un mode de rémunération basé sur la performance, au CPL et au rendez-vous. Le principe est simple : les deux parties partagent les risques. Plus les performances sont bonnes, plus les deux parties sont rentables. Si les résultats baissent, la rémunération de DARWIN s'ajuste en conséquence. Un alignement d'intérêts qui a posé les bases d'une collaboration durable et exigeante.",
      },
      {
        id: '02',
        title: "UN PLAN D'ACTION SUR MESURE",
        text: "Le SMS était jusqu'en 2021 écarté des plans média Verisure en raison de son coût trop élevé. L'expérience accumulée et la relation de confiance entre DARWIN et Verisure ont permis de structurer une approche gagnante articulée autour de quatre axes. La maîtrise de la pression publicitaire a limité le nombre de sollicitations par contact pour éviter la saturation. La segmentation fine des bases a permis de cibler les profils les plus susceptibles de répondre positivement. Des AB tests ont été menés en continu sur les messages, les horaires d'envoi et les segments. Enfin, un pilotage quotidien a permis d'adapter les campagnes en temps réel selon les performances.",
      },
      {
        id: '03',
        title: 'SUIVI & ANALYSE : TRACKING ULTRA PRÉCIS',
        text: "Chaque campagne SMS repose sur un suivi détaillé permettant une optimisation en continu. En moyenne, plus de 250 campagnes sont suivies chaque mois, avec un tracking précis du volume de clics, des leads bruts, valides et joints, du volume de rendez-vous, du coût par rendez-vous et du taux de transformation RDV/leads. Grâce à ces données, DARWIN ajuste continuellement les envois pour maximiser la rentabilité en réallouant les budgets sur les segments et messages les plus performants.",
      },
    ],
    conclusion: {
      title: 'LE SMS',
      text: "Le SMS était considéré comme trop coûteux pour figurer dans le mix média de Verisure. Quelques années plus tard, il en est devenu l'un des piliers. C'est ça, le travail de DARWIN : prendre un levier sous-exploité, le structurer, le piloter avec rigueur et le transformer en générateur de volumes fiables. Un résultat qui ne doit rien au hasard.",
      linkLabel: 'En savoir plus sur le MÉDIA',
      linkHref: '/expertises/media',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-verisure.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-verisure.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/7bfca0565fa6ef5dbca4b55fc0f4b2f6b4b0bab4.jpg',
  },
  {
    slug: 'prefon',
    client: 'Préfon',
    leviers: ['MÉDIA'],
    tag: 'MÉDIA',
    title: 'EMAILING OPTIMISÉ, CAC RÉDUIT DE 10%',
    excerpt: 'Comment Darwin a pérennisé et optimisé les campagnes emailing de PRÉFON pour réduire le coût d\'acquisition affilié tout en maintenant un volume solide d\'adhésions.',
    context: "PRÉFON est une solution de retraite complémentaire destinée aux fonctionnaires, un secteur où la préparation à la retraite soulève de nombreuses questions. Pour acquérir de nouveaux affiliés, PRÉFON s'appuie depuis 2012 sur une stratégie digitale multi-leviers développée avec Darwin, orientée conversion et optimisation continue. En 2024, la priorité est d'assurer la pérennité et la performance des campagnes emailing tout en maximisant la rentabilité des adhésions.",
    stats: [
      { num: '-10%', label: "Diminution du coût d'acquisition" },
      { num: '+14%', label: "Taux d'ouverture supplémentaire" },
      { num: '+26%', label: 'Taux de transformations clients/leads' },
    ],
    problematique: "Dans un contexte où l'emailing est un levier fragile soumis aux règles strictes des FAI, aux exigences RGPD et à la pression marketing ; comment maintenir un volume soutenu d'affiliations tout en réduisant le coût d'acquisition et en préservant la délivrabilité des envois ?",
    objectifs: [
      "Maintenir un volume solide d'affiliations via l'emailing sans compromettre la délivrabilité.",
      "Optimiser le Coût d'Acquisition Affilié en continu (CAC).",
      "Garantir une conformité totale RGPD dans le respect des règles imposées par les fournisseurs d'accès.",
    ],
    solution: [
      {
        id: '01',
        title: 'ASSURER LA PÉRENNITÉ DU LEVIER EMAILING',
        text: "Darwin applique un ensemble de bonnes pratiques rigoureuses pour protéger la délivrabilité des campagnes : exclusion des contacts déjà en relation avec PRÉFON, sollicitation limitée à une fois par mois par adresse, et lissage des envois sur l'ensemble du mois pour éviter les pics de pression marketing. Un cadre strict qui garantit la fiabilité et la longévité du levier.",
      },
      {
        id: '02',
        title: 'DÉVELOPPER LES VOLUMES TOUT EN BAISSANT LE CAC',
        text: "La stratégie repose sur une segmentation fine des audiences et des A/B tests systématiques sur l'ensemble des variables : segments, jour et heure d'envoi, objets, contenu, design, landing pages et expéditeurs. Chaque base de données fait l'objet d'une analyse granulaire des KPIs : taux d'ouverture, clics, transformation, leads signés pour identifier les combinaisons les plus performantes. Le modèle de rémunération à la performance (CPL) est appliqué alors même que les bases sont achetées au CPM, maximisant ainsi la rentabilité pour PRÉFON.",
      },
      {
        id: '03',
        title: 'UN ACCOMPAGNEMENT SUR MESURE ET RÉACTIF',
        text: "Un suivi hebdomadaire adapté aux spécificités de PRÉFON rythme la collaboration. Les kits email et landing pages sont optimisés en continu, le planning d'envoi est construit à partir de l'historique des campagnes, et Darwin recherche en permanence de nouvelles bases qualifiées pour alimenter les volumes sans dégrader la qualité des contacts.",
      },
    ],
    conclusion: {
      title: "L'EMAILING DE PERFORMANCE,\nUN LEVIER QUI DURE",
      text: "12 ans de collaboration, c'est la preuve que certains partenariats se construisent dans la durée. Avec PRÉFON, Darwin a bâti une stratégie emailing qui performe dans le temps, en alliant rigueur technique, pilotage au CPL et optimisation permanente. Parce qu'un bon emailing ne s'improvise pas : il se construit, se teste et s'affine campagne après campagne. C'est cette exigence que Darwin apporte à chacun de ses clients.",
      linkLabel: 'En savoir plus sur le MÉDIA',
      linkHref: '/expertises/media',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/prefon-1.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/prefon-1.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/03/ill-prefon.jpg',
  },
  {
    slug: 'acadomia',
    client: 'Acadomia',
    leviers: ['SMA', 'MÉDIA'],
    tag: 'SMA · MÉDIA',
    title: 'ACQUISITION DIGITALE MAÎTRISÉE ET SCALABLE',
    excerpt: 'Comment acquérir de nouveaux clients et développer la notoriété d\'Acadomia en digital, tout en maîtrisant la pression publicitaire et en générant des leads qualifiés.',
    context: "Fondée en 1989, Acadomia est le leader français de l'accompagnement scolaire. Avec plus de 110 centres répartis sur l'ensemble du territoire, l'entreprise accompagne chaque année plus de 100 000 élèves grâce à 20 000 enseignants et 400 conseillers pédagogiques.",
    stats: [
      { num: 'x2', label: 'Taux de transformation de la landing page' },
      { num: '+65%', label: 'Taux de leads générés / mois' },
      { num: '4', label: 'Leviers déployés' },
    ],
    problematique: "Comment acquérir de nouveaux clients et développer la notoriété d'Acadomia en digital, tout en maîtrisant la pression publicitaire et en générant des leads qualifiés via le site acadomia.fr ?",
    objectifs: [
      "Générer des leads qualifiés via des campagnes d'emailing sur bases partenaires.",
      "Déployer une landing page optimisée pour maximiser le taux de conversion.",
      "Renforcer la notoriété via campagnes display et retargeting.",
    ],
    solution: [
      {
        id: '01',
        title: "L'EMAILING MARKETING",
        text: "Chaque mois, Darwin envoie plusieurs millions d'emails sur des bases partenaires à profil appétent, avec un volume maîtrisé pour éviter une pression publicitaire excessive. Un kit email dédié a été conçu pour maximiser l'engagement.",
      },
      {
        id: '02',
        title: 'LA LANDING PAGE DÉDIÉE',
        text: "Une landing page optimisée a été mise en place pour simplifier le tunnel de conversion et favoriser la génération de leads qualifiés depuis le site acadomia.fr.",
      },
      {
        id: '03',
        title: 'LES CAMPAGNES DISPLAY ET RETARGETING',
        text: "Des campagnes display ont été déployées sur Facebook Ads, sur des sites affinitaires en formats web et mobile, ainsi qu'en retargeting pour ré-adresser les internautes ayant déjà visité le site Acadomia.",
      },
    ],
    conclusion: {
      title: 'LE SMA AU SERVICE DE LA GÉNÉRATION DE LEADS',
      text: "Acadomia en est la preuve : une stratégie digitale bien orchestrée transforme la visibilité en leads qualifiés. Darwin conçoit et pilote vos campagnes display, emailing et Social Ads avec un objectif constant : générer des contacts utiles, au bon moment, auprès des bonnes audiences.",
      linkLabel: 'En savoir plus sur le SMA',
      linkHref: '/expertises/sma',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/02/Cas-client-acadomia.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/02/Cas-client-acadomia.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/cas-acadomia-02.png',
  },
  {
    slug: 'altedia',
    client: 'Altedia',
    leviers: ['SEO', 'SEA'],
    tag: 'SEO · SEA',
    title: 'LEADERSHIP SEM ET GÉNÉRATION DE LEADS',
    excerpt: "Altedia doit défendre sa position de leader sur Internet. Le Search étant le premier pourvoyeur de trafic, comment optimiser le SEM du site pour développer visibilité et génération de leads ?",
    context: "Altedia Consultants est un cabinet de conseil en ressources humaines membre de Lee Hecht Harrison, leader mondial des services en transition professionnelle. Référence incontournable pour les entreprises, Altedia compte plus de 2 000 clients, toutes tailles et secteurs confondus, avec 750 collaborateurs répartis dans plus de 80 bureaux en France.",
    stats: [
      { num: '2 000', label: 'clients' },
      { num: '750', label: 'collaborateurs' },
      { num: '80', label: 'bureaux en France' },
    ],
    problematique: "Dans un secteur très concurrentiel, Altedia doit défendre sa position de leader sur Internet. Le Search étant le premier pourvoyeur de trafic d'altedia.fr, comment optimiser le SEM du site pour développer visibilité, trafic qualifié et génération de leads ?",
    objectifs: [
      "Optimiser le référencement naturel du site en accompagnant la refonte et en travaillant la visibilité géolocalisée des 80 bureaux.",
      "Déployer une stratégie SEA structurée pour générer des leads qualifiés et explorer de nouveaux leviers de visibilité sur Google, Bing et LinkedIn.",
    ],
    solution: [
      {
        id: '01',
        title: 'LES CHANTIERS SEO',
        text: "Les experts Darwin ont accompagné la refonte du site en octobre 2014, le rendant plus orienté cible et plus performant aux critères Google. Une optimisation sémantique complète a été réalisée, ainsi qu'un travail spécifique sur la visibilité géolocalisée de chaque bureau. Des articles ont également été publiés sur des supports tiers pour renforcer la popularité du site. Résultat : des progrès notables à chaque étape : acquisition de trafic, rétention et taux de transformation.",
      },
      {
        id: '02',
        title: 'LES ACTIONS SEA',
        text: "Une stratégie SEA a été mise en place dès 2014, avec un compte structuré autour des différents métiers d'Altedia. En 2015, de nouveaux leviers ont été activés : création d'un compte Bing, campagnes Display sur Gmail Sponsored Promotion, Google et LinkedIn Ads, pour élargir la visibilité de la marque et capter de nouveaux leads qualifiés.",
      },
    ],
    conclusion: {
      title: 'LE SEO & SEA POUR VOTRE VISIBILITÉ',
      text: "Le cas Altedia illustre parfaitement la complémentarité entre SEO et SEA pour s'imposer dans un secteur concurrentiel. Darwin conçoit des stratégies Search sur-mesure : optimisation technique et sémantique, visibilité locale, campagnes Google Ads et LinkedIn Ads structurées autour de vos métiers. Chaque action est pensée pour générer du trafic qualifié et des leads concrets, avec un reporting transparent à chaque étape.",
      linkLabel: 'En savoir plus sur le SEO',
      linkHref: '/expertises/seo',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-altedia.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-altedia.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-altedia.jpg',
  },
  {
    slug: 'ebra',
    client: 'EBRA',
    leviers: ['SMA', 'MÉDIA'],
    tag: 'SMA · MÉDIA',
    title: 'ACQUISITION DIGITALE ET ABONNÉS RECONQUIS',
    excerpt: "Comment EBRA, premier groupe de presse régionale en France, a transformé sa stratégie d'acquisition digitale pour conquérir de nouveaux abonnés et booster son audience sociale.",
    context: "EBRA est le premier groupe de presse quotidienne régionale en France, regroupant 9 titres leaders implantés sur 23 départements. Avec plus de 800 000 exemplaires diffusés chaque jour et une audience digitale de 16,5 millions de visites quotidiennes pour 3,3 millions de lecteurs, EBRA est un acteur majeur de l'information locale.",
    stats: [
      { num: '+46%', label: 'de nouveaux abonnés' },
      { num: '+42%', label: "Taux de téléchargement de l'APP" },
      { num: '+51%', label: 'de followers sur les réseaux sociaux' },
    ],
    problematique: "Dans un contexte où la presse traditionnelle peine à retenir les nouveaux publics, EBRA devait repenser sa stratégie d'acquisition pour accroître ses abonnements en ligne, recréer un lien fort avec son audience locale et rendre son offre plus attractive au quotidien.",
    objectifs: [
      "Susciter l'appétence pour les titres du groupe auprès de nouvelles audiences.",
      "Fidéliser les lecteurs existants.",
      "Conquérir de nouveaux abonnés, en ancrant l'offre éditoriale dans le quotidien des lecteurs grâce à des concepts créatifs adaptés aux spécificités locales.",
    ],
    solution: [
      {
        id: '01',
        title: 'UNE APPROCHE BRAND TO CLOSING',
        text: "Darwin a structuré sa stratégie autour d'un funnel complet, du haut de funnel à la conversion. Des campagnes géolocalisées (DOOH, push notifications, SMA, SMO, SMS, téléchargements d'application) créent visibilité et notoriété. Des campagnes de bas de funnel (SEA, retargeting, SMA) ciblent directement la génération d'abonnés avec des créations graphiques qui instaurent une vraie proximité avec les prospects.",
      },
      {
        id: '02',
        title: 'UN CIBLAGE LOCAL À GRANDE GRANULARITÉ',
        text: "Chaque campagne est pensée à l'échelle locale : audiences segmentées par territoire, assets créatifs adaptés aux spécificités de chaque titre, mots-clés contextualisés. Cette granularité permet de toucher les bons lecteurs au bon endroit avec le bon message.",
      },
      {
        id: '03',
        title: 'UN PILOTAGE QUOTIDIEN ORIENTÉ PERFORMANCE',
        text: "Les campagnes sont optimisées chaque jour en fonction des résultats par levier, pour saisir les opportunités à l'instant T. Darwin travaille en étroite collaboration avec les équipes EBRA pour proposer en continu de nouveaux leviers et concepts, maintenir la performance et chercher l'incrémental.",
      },
    ],
    conclusion: {
      title: 'UNE STRATÉGIE DIGITALE GLOBALE POUR VOTRE SERVICE D\'ABONNEMENT',
      text: "Le cas EBRA illustre ce que Darwin sait faire de mieux : orchestrer une stratégie multi-leviers cohérente, du premier contact à la conversion. Que ce soit pour développer votre notoriété locale, recruter de nouveaux clients ou fidéliser votre audience, Darwin mobilise l'ensemble des leviers digitaux avec un pilotage data-driven rigoureux et une force de proposition constante.",
      linkLabel: 'Contactez un expert',
      linkHref: '/contact',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-Ebra-1.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-Ebra-1.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/03/ebra-ill-cas.jpg',
  },
  {
    slug: 'justfab',
    client: 'JustFab',
    leviers: ['MÉDIA'],
    tag: 'MÉDIA',
    title: 'RECRUTEMENT MASSIF SUR UN PARCOURS MULTI-ÉTAPES',
    excerpt: "Recruter massivement de nouveaux membres qualifiés sur un parcours d'inscription long et multi-étapes, tout en maintenant un taux d'engagement suffisant.",
    context: "JustFab est un vendeur de chaussures et d'accessoires en ligne proposant à ses membres une expérience de shopping entièrement personnalisée. Son concept repose sur un quizz unique de 7 questions sur les styles et préférences de chaque visiteur, avant même d'accéder au site. Une fois le questionnaire complété, l'inscription à un compte personnel est requise pour finaliser l'entrée dans l'univers JustFab. Un parcours engageant, mais exigeant, qui cible principalement les jeunes femmes passionnées de mode et d'accessoires.",
    stats: [
      { num: '50k', label: 'Nouveaux membres en 6 mois' },
      { num: '+16,4%', label: 'Taux de transformation' },
      { num: '+7,5%', label: "Taux d'ouvertures emails" },
    ],
    problematique: "Comment recruter massivement de nouveaux membres qualifiés sur un parcours d'inscription long et multi-étapes, tout en maintenant un taux d'engagement suffisant pour aller jusqu'au bout du quizz et finaliser la création de compte ?",
    objectifs: [
      "Recruter 50 000 nouveaux membres en 6 mois via une opération de collecte dédiée.",
      "Cibler des profils affinitaires mode sur des bases partenaires qualifiées.",
      "Développer la visibilité et la notoriété de JustFab grâce à des créations graphiques attractives et tendances.",
    ],
    solution: [
      {
        id: '01',
        title: 'UNE CAMPAGNE EMAILING CIBLÉE ET ENGAGEANTE',
        text: "Darwin a diffusé le quizz Mode de JustFab par email auprès de bases partenaires soigneusement sélectionnées pour leur affinité avec la cible. Chaque envoi intégrait une offre promotionnelle forte et engageante pour inciter à l'inscription, comme l'offre phare une paire achetée, une paire offerte. Les créations graphiques, conçues pour coller aux tendances mode du moment, ont joué un rôle clé dans la performance de la campagne en renforçant l'attractivité de la marque et le taux de transformation.",
      },
    ],
    conclusion: {
      title: "L'EMAILING AU SERVICE DE LA CROISSANCE",
      text: "JustFab en est la preuve : un emailing bien ciblé, avec la bonne offre et la bonne création, peut générer des volumes massifs de membres qualifiés même sur des parcours d'inscription complexes. Darwin conçoit des campagnes de collecte sur-mesure : sélection des bases partenaires, création graphique tendance, offre promotionnelle engageante pour recruter les bons profils au bon moment et maximiser votre ROI.",
      linkLabel: "En savoir plus sur le MÉDIA",
      linkHref: '/expertises/media',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-Justfab.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-Justfab.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illu-just-fab.jpg',
  },
  {
    slug: 'logic-immo',
    client: 'Logic-Immo',
    leviers: ['SEO'],
    tag: 'SEO',
    title: '+60% DE TRAFIC ORGANIQUE EN SEO',
    excerpt: "Comment Logic-Immo a assis sa position de référence sur les moteurs de recherche et augmenté son trafic organique de 60% grâce à une stratégie SEO technique, éditoriale et de netlinking.",
    context: "Créé en 1995, Logic-Immo fut le premier support gratuit d'annonces immobilières en France, avec un magazine comptant 33 éditions locales diffusées à plus de 1,3 million d'exemplaires. Lancé sur le web en 2002, Logic-Immo déploie aujourd'hui une stratégie digitale complète sur tous les devices. Dans un marché immobilier en ligne très concurrentiel, la visibilité sur les moteurs de recherche est un enjeu central pour la marque, à la fois pour générer du trafic qualifié et pour asseoir sa position de référence.",
    stats: [
      { num: '+60%', label: 'de trafic organique généré' },
      { num: '28%', label: "de parts d'audience" },
      { num: '+70%', label: 'de conversion grâce au SEO' },
    ],
    problematique: "Comment optimiser la stratégie SEO de Logic-Immo.com pour maintenir et développer sa visibilité sur les moteurs de recherche, générer du trafic qualifié et renforcer la popularité du site face à une concurrence digitale de plus en plus dense dans le secteur immobilier ?",
    objectifs: [
      "Auditer et optimiser les performances techniques du site.",
      "Développer un contenu éditorial riche et référençable pour capter de nouveaux visiteurs qualifiés.",
      "Renforcer la popularité de Logic-Immo.com via une stratégie de netlinking ciblée.",
    ],
    solution: [
      {
        id: '01',
        title: 'LES OPTIMISATIONS TECHNIQUES',
        text: "Darwin a conduit des ateliers techniques approfondis avec les équipes Logic-Immo : optimisation du crawl, amélioration du temps de chargement des pages, analyse directe des logs par nos consultants séniors en référencement naturel. En parallèle, des sessions de transfert de compétences en SEO et SMO ont été organisées pour monter en autonomie les équipes internes.",
      },
      {
        id: '02',
        title: 'LES CHANTIERS ÉDITORIAUX',
        text: "Pour enrichir le contenu du site et capter de nouvelles requêtes qualifiées, Darwin a piloté la création de mini-sites thématiques, la rédaction de dossiers de fond ou encore la production d'infographies. Autant de contenus conçus pour répondre aux intentions de recherche des utilisateurs tout en renforçant l'autorité du domaine aux yeux de Google.",
      },
      {
        id: '03',
        title: 'LA POPULARITÉ ET LE NETLINKING',
        text: "Darwin a mis en place une stratégie de netlinking s'appuyant sur les synergies avec les agences immobilières partenaires de Logic-Immo. Ce maillage ciblé a permis d'augmenter significativement la popularité du site et de consolider sa position dans les résultats de recherche.",
      },
    ],
    conclusion: {
      title: "LE SEO, UN INVESTISSEMENT QUI TRAVAILLE DANS LA DURÉE",
      text: "Logic-Immo en est la démonstration : une stratégie SEO complète et bien exécutée allant technique, éditoriale et popularité crée une visibilité durable que les autres leviers seuls ne peuvent pas offrir. Darwin accompagne ses clients à chaque étape de cette démarche, de l'audit initial au transfert de compétences, pour faire du Search un moteur de croissance pérenne.",
      linkLabel: 'En savoir plus sur le SEO',
      linkHref: '/expertises/seo',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/05/Cas-clients-logic-immo.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/05/Cas-clients-logic-immo.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illu-cas-logic-immo.jpg',
  },
  {
    slug: 'planet-cards',
    client: 'Planet Cards',
    leviers: ['SEO'],
    tag: 'SEO',
    title: 'VISIBILITÉ ORGANIQUE EN CROISSANCE E-COMMERCE',
    excerpt: "Planet-cards.com est le spécialiste de la carterie personnalisable en ligne. Darwin l'a aidé à transformer sa visibilité organique en croissance e-commerce mesurable.",
    context: "Planet-cards.com est le spécialiste de la carterie personnalisable en ligne : faire-part de naissance, mariage, baptême et communion, cartes de remerciements, de vœux ou d'anniversaire. Le site permet de choisir, personnaliser et se faire livrer à domicile des modèles thématiques entièrement configurables. Dans un secteur ultra-concurrentiel, la visibilité sur les moteurs de recherche est un enjeu vital pour la marque, directement lié à sa capacité à générer du trafic qualifié et des ventes.",
    stats: [
      { num: '+27%', label: "de chiffre d'affaires" },
      { num: '+56%', label: 'de visites grâce au SEO' },
      { num: '+36%', label: 'de transactions supplémentaires' },
    ],
    problematique: "Comment renforcer durablement le référencement naturel de Planet-cards.com pour gagner en visibilité sur Google, capter un trafic qualifié à fort potentiel de conversion et défendre une position solide face à une concurrence digitale très dense dans le secteur de la carterie en ligne ?",
    objectifs: [
      "Optimisation technique du site.",
      "Enrichissement sémantique du contenu et de l'arborescence.",
      "Développement de la popularité via des actions éditoriales ciblées.",
      "Positionner le site sur 80 mots-clés qualifiés liés à la carterie et aux objets photos.",
    ],
    solution: [
      {
        id: '01',
        title: 'UN ACCOMPAGNEMENT TECHNIQUE ET SÉMANTIQUE',
        text: "Darwin a formulé un cahier de recommandations techniques précises, mises en œuvre par les équipes internes de Planet-cards : optimisation du crawl, amélioration des balises SEO, refonte de l'arborescence et du linking interne. Un travail sémantique approfondi a complété ce socle technique, en optimisant les contenus existants pour coller au plus près des intentions de recherche des utilisateurs.",
      },
      {
        id: '02',
        title: 'DES ACTIONS ÉDITORIALES ET DE POPULARITÉ',
        text: "Pour renforcer l'autorité du site aux yeux de Google, Darwin a piloté la production de contenus affinitaires : articles sur les produits, tests utilisateurs et publications sur des sites partenaires thématiques. Ce maillage éditorial internet et externe a contribué à développer la popularité de Planet-cards.com et à consolider son positionnement sur les 80 mots-clés stratégiques identifiés.",
      },
    ],
    conclusion: {
      title: 'LE SEO, UN LEVIER QUI TRANSFORME LA VISIBILITÉ EN VENTES',
      text: "Gagner des positions sur Google ne s'improvise pas. Cela demande une approche structurée, patiente et cohérente entre technique, contenu et popularité. C'est exactement ce que Darwin construit pour ses clients e-commerce : une présence organique solide sur les requêtes qui comptent vraiment, celles qui amènent des visiteurs prêts à acheter.",
      linkLabel: 'En savoir plus sur le SEO',
      linkHref: '/expertises/seo',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-planet-cards.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-planet-cards.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illu-planet-card.jpg',
  },
  {
    slug: 'kiosquemag',
    client: 'Kiosque Mag',
    leviers: ['MÉDIA', 'SEO', 'DATA & TRACKING'],
    tag: 'MÉDIA · SEO · DATA',
    title: 'DES ABONNEMENTS EN VOLUME, UN CAC MAÎTRISÉ',
    excerpt: "Comment Kiosque Mag a structuré une stratégie d'acquisition multi-leviers performante pour générer des abonnements en volume tout en réduisant son coût d'acquisition.",
    context: "Kiosque Mag est le site officiel des magazines Reworld Media, regroupant l'ensemble des offres d'abonnement papier et numérique du groupe. Darwin accompagne Kiosque Mag dans sa stratégie digitale de génération d'abonnements via un dispositif multi-leviers (hors SEA) piloté par une direction de clientèle dédiée. En 2018, le déploiement de la DMP Mediaritmics a ouvert de nouvelles perspectives de ciblage, que Darwin a immédiatement exploitées avec une stratégie Display RTB s'appuyant sur les segments de données de l'ensemble des sites du groupe.",
    stats: [
      { num: '-5%', label: "Diminution du coût d'acquisition" },
      { num: '+30%', label: 'de trafic supplémentaire' },
      { num: '+18%', label: "d'abonnements" },
    ],
    problematique: "Dans un marché de la presse où les abonnements digitaux et papier sont de plus en plus disputés, comment structurer une stratégie d'acquisition multi-leviers cohérente et performante pour générer des abonnements en volume tout en maîtrisant les coûts ?",
    objectifs: [
      "Construire et piloter un plan média sur-mesure orienté génération d'abonnements.",
      "Tester et sélectionner les leviers les plus performants pour Kiosque Mag.",
      "Exploiter les données first-party de la DMP du groupe pour affiner le ciblage et maximiser le retour sur investissement des campagnes Display.",
    ],
    solution: [
      {
        id: '01',
        title: 'UN PLAN MÉDIA MULTI-LEVIERS SUR-MESURE',
        text: "Darwin a structuré une stratégie d'acquisition complète autour de six leviers complémentaires : affiliation, SEO, display, Facebook Ads, retargeting et emailing. Chaque levier a fait l'objet d'AB tests approfondis pour identifier les partenaires et formats les plus performants. Une direction de clientèle dédiée assure le pilotage quotidien de l'ensemble du dispositif, garantissant réactivité et cohérence entre les canaux.",
      },
      {
        id: '02',
        title: 'UNE STRATÉGIE DISPLAY RTB ALIMENTÉE PAR LA DATA',
        text: "En 2019, Darwin a activé une stratégie de Display programmatique RTB exploitant directement les segments de la DMP Mediaritmics du groupe Reworld Media. En s'appuyant sur les données comportementales de l'ensemble des sites du groupe, les campagnes atteignent une précision de ciblage inédite, touchant des audiences qualifiées à forte appétence pour les contenus presse et les offres d'abonnement.",
      },
    ],
    conclusion: {
      title: 'LE MULTI-LEVIERS, FORCE DE LA STRATÉGIE DIGITALE',
      text: "Kiosque Mag illustre parfaitement la valeur d'une approche globale et coordonnée : quand SEO, display, emailing, affiliation et social ads sont pilotés ensemble avec la bonne data, les performances s'envolent. Darwin orchestre ce type de stratégie intégrée pour ses clients, en apportant à la fois la vision globale et l'expertise opérationnelle sur chaque levier.",
      linkLabel: 'Discuter avec un expert',
      linkHref: '/contact',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-kiosque-mag.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-kiosque-mag.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illust-kiosque.jpg',
  },
  // ─── arthur-bonnet ──────────────────────────────────────
  {
    slug: 'arthur-bonnet',
    client: 'Arthur Bonnet',
    leviers: ['SEO', 'SEA', 'SMA', 'MÉDIA'],
    tag: 'SEO',
    title: 'PERFORMANCE DIGITALE EN PLEINE CRISE SANITAIRE',
    excerpt: "Comment Darwin a mené de front performance digitale et lancement de marque pour Arthur Bonnet en pleine crise sanitaire.",
    context: "Créée en 1927, Arthur Bonnet est une marque emblématique de cuisines équipées et de meubles de salon et de rangement, positionnée sur le milieu et le haut de gamme. Membre du groupe Cuisines Design Industries (CDI) aux côtés de COMERA Cuisines, la marque célébrait ses 90 ans en 2017 avec une forte notoriété nationale. En 2020, dans un contexte de crise sanitaire inédit, Arthur Bonnet a confié à Darwin une double mission : maintenir la performance digitale tout en lançant un nouveau concept de marque autour du sur-mesure.",
    stats: [
      { num: '+82%', label: 'de rendez-vous' },
      { num: '+164%', label: 'de téléchargement de brochures' },
      { num: '+76,5%', label: 'de sessions enregistrées' },
    ],
    problematique: "Comment accélérer la digitalisation d'Arthur Bonnet pour conquérir de nouveaux clients en pleine crise sanitaire, tout en lançant simultanément un nouveau concept de marque ambitieux autour du sur-mesure sans sacrifier la performance au profit du branding, ni l'inverse ?",
    objectifs: [
      "Générer des demandes de catalogues et des prises de rendez-vous via une stratégie d'acquisition full funnel.",
      "Accompagner le lancement du nouveau positionnement sur-mesure d'Arthur Bonnet à travers une campagne branding 360° à forte dimension vidéo, auprès d'une cible CSP+ de 35 à 65 ans sur les grandes zones urbaines françaises.",
    ],
    solution: [
      { id: '01', title: 'UN ACCOMPAGNEMENT SEO MÉTHODIQUE', text: "Darwin a mis en place un SEO structuré en quatre étapes : analyse stratégique des mots-clés et identification des potentiels de progression, optimisations techniques approfondies avec recommandation de fusion des sous-domaines, travail sémantique et éditorial sur les pages à fort potentiel, et production de liens ciblés pour renforcer la popularité du site." },
      { id: '02', title: 'UNE STRATÉGIE SEA RESTRUCTURÉE', text: "Le compte Google et Bing a été entièrement repensé autour de quatre axes : restructuration globale du compte, ouverture nationale avec une stratégie d'exclusion d'audiences, développement d'audiences qualifiées par centres d'intérêt et comportement, et mise en place d'une stratégie dédiée mobile pour capter les intentions d'achat en situation de mobilité." },
      { id: '03', title: 'FACEBOOK ET INSTAGRAM ADS POUR CONVERTIR', text: "Darwin a défini des personas précis (35-64 ans CSP+) et combiné ciblage par centres d'intérêt et retargeting des visiteurs non convertis sur une couverture nationale. Les placements ont été répartis sur Facebook, Instagram, Messenger et l'Audience Network, avec un soin particulier apporté aux combinaisons formats/visuels/messages, facteur déterminant dans la performance des campagnes sociales." },
      { id: '04', title: 'UNE CAMPAGNE BRANDING EN 3 PHASES', text: "Pour lancer le concept « Le sur-mesure. Le vrai. », Darwin a structuré un funnel de mémorisation en trois phases. La phase Immédiate misait sur des formats courts et impactants sur Facebook, Pinterest et Sublime. La phase Interactive enrichissait le message avec carrousels, publications social media et formats inread vidéo avec Le Bon Coin notamment. La phase Immersive plongeait l'audience dans l'univers de la marque via pré-rolls, formats in-stream et stories influenceurs sur Facebook, Pinterest, Teads et Dynadmic." },
    ],
    conclusion: {
      title: 'PERFORMER ET CONSTRUIRE UNE IMAGE, EN MÊME TEMPS',
      text: "Arthur Bonnet illustre parfaitement la capacité de Darwin à mener deux chantiers de front sans les opposer. Pendant que les leviers SEO, SEA et social ads alimentent le pipeline de leads, la campagne branding construit la préférence de marque sur le long terme. C'est cette vision intégrée, qui articule performance et image dans une logique cohérente, que Darwin apporte à ses clients.",
      linkLabel: 'Discuter avec un expert',
      linkHref: 'https://www.darwin-agency.com/contactez-nous/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-Arthur-Bonnet.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-Arthur-Bonnet.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illu-arthur-2.jpg',
  },

  // ─── autogrill ──────────────────────────────────────────
  {
    slug: 'autogrill',
    client: 'Autogrill',
    leviers: ['MÉDIA'],
    tag: 'MÉDIA',
    title: 'DRIVE-TO-STORE DIGITAL EN 8 SEMAINES',
    excerpt: "Comment Darwin a généré du trafic qualifié en point de vente pour Autogrill via un dispositif drive-to-store digital sur 8 semaines.",
    context: "Autogrill est le leader mondial de la restauration et des services pour les voyageurs. Son portefeuille de marques couvre coffee shops, bars-cafés, restaurations rapides et boutiques sur autoroutes, gares et aéroports. En France, Autogrill anime la fidélité de ses clients via le site vyaggio.com, avec des bons plans toute l'année — et particulièrement durant les migrations estivales, période stratégique pour l'enseigne.",
    stats: [
      { num: '28M', label: "Nombre d'impressions publicitaires" },
      { num: '18M', label: "Nombre d'emails envoyés" },
      { num: '+1000', label: 'Des milliers de coupons imprimés' },
    ],
    problematique: "Comment créer du trafic vers les restaurants et boutiques Autogrill durant la période estivale, en s'appuyant sur un dispositif digital orienté drive-to-store ?",
    objectifs: [
      "De promouvoir les offres promotionnelles estivales auprès de profils affinitaires.",
      "De booster l'impression de coupons depuis le site vyaggio.com.",
      "De générer du trafic qualifié en restaurant et en boutique pendant les vacances d'été.",
    ],
    solution: [
      { id: '01', title: 'UN DISPOSITIF DRIVE-TO-STORE SUR 8 SEMAINES', text: "De mi-juin à début août 2015, Darwin a déployé un dispositif media complet autour des offres promotionnelles Autogrill : des bons de réduction à imprimer depuis un mini-site dédié. La campagne ciblait les personnes en phase de préparation de voyage, à la recherche de bons plans pour leurs déplacements estivaux." },
      { id: '02', title: 'DISPLAY ET EMAILING SUR BASES AFFINITAIRES', text: "La campagne a été diffusée via du display sur des sites affinitaires et de l'email marketing sur des bases partenaires qualifiées. Les investissements media ont été pilotés au CPC avec une logique de performance au CPL — l'impression du coupon constituant le KPI central." },
    ],
    conclusion: {
      title: 'Le drive to store',
      text: "Autogrill en est la démonstration : un bon dispositif digital génère du trafic réel en point de vente. Darwin conçoit des campagnes display et emailing orientées performance, pilotées au CPL pour maximiser le retour sur investissement. Ciblage affinitaire, création de landing pages dédiées, suivi en temps réel : chaque levier est activé pour transformer la visibilité digitale en visites concrètes.",
      linkLabel: 'En savoir plus sur le drive to store',
      linkHref: 'https://www.darwin-agency.com/agence-drive-to-store/drive-to-store/drive-to-store-comment-generer-plus-de-trafic-en-magasin/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-autogrill.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-autogrill.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/autogrill-cas-clients.jpg',
  },

  // ─── cap-vacances-display ───────────────────────────────
  {
    slug: 'cap-vacances-display',
    client: "Cap'Vacances",
    leviers: ['MÉDIA'],
    tag: 'MÉDIA',
    title: 'CTR DOUBLÉ ET ROI DE 2,33 EN DISPLAY',
    excerpt: "Comment Darwin a doublé le CTR de Cap'Vacances et atteint un ROI de 2,33 grâce à une campagne display au CPC orientée performance.",
    context: "Fondé en 1968, Cap'Vacances était spécialisé dans les activités sportives. Aujourd'hui, les vacances en famille sont le cœur de métier de Cap'Vacances, qui est devenu l'un des principaux spécialistes français des séjours tout compris en village club. Cap'Vacances propose notamment des séjours tout compris à la montagne : hébergement, location de ski, repas, remontées mécaniques, panier-repas, club enfants… Le panier moyen pour ce genre de séjour oscille entre 1 500 et 2 000 €, et le parcours d'achat est long.",
    stats: [
      { num: '0,23%', label: 'TAUX de CTR VS 0,10% avant' },
      { num: '2,33%', label: 'TAUX de ROI' },
      { num: '+51%', label: 'Taux de Rebond' },
    ],
    problematique: "Dans un contexte concurrentiel fort et un coût d'acquisition en hausse sur les périodes clés, Cap'Vacances cherchait à générer du trafic qualifié vers son site dès septembre, pour capitaliser sur son offre Première Minute et anticiper les ventes hiver avant la flambée des prix media.",
    objectifs: [
      "Générer du trafic qualifié vers le site via un nouveau levier d'acquisition.",
      "Promouvoir l'offre Première Minute auprès de prospects affinitaires.",
      "Produire des ventes directes avec un modèle économique à la performance.",
    ],
    solution: [
      { id: '01', title: 'UNE CAMPAGNE DISPLAY AU CPC', text: "Darwin a misé sur le display comme levier initiateur, particulièrement adapté pour toucher de nouveaux prospects et faire connaître une offre avantageuse. Le modèle économique au CPC a été retenu pour favoriser les actions tout en sécurisant l'investissement à la performance. Le choix du bon partenaire réseau a constitué un facteur clé de succès." },
      { id: '02', title: 'UNE OPTIMISATION ORIENTÉE CONVERSION', text: "Lancée en septembre sur l'offre Première Minute, la campagne a été optimisée en continu vers les sites générant le meilleur taux de conversion. Résultat : un CTR plus que doublé par rapport à la moyenne du marché, un taux de rebond maîtrisé et un ROI global de 2,33." },
      { id: '03', title: "UN DISPOSITIF QUI S'ÉLARGIT", text: "Fort de ces résultats, la collaboration entre Cap'Vacances et Darwin se poursuit avec le déploiement de leviers complémentaires : emailing, mobile, display programmatique et la solution d'analyse de contribution et d'attribution Ysance." },
    ],
    conclusion: {
      title: 'LE display',
      text: "Le cas Cap'Vacances illustre la puissance du display bien ciblé pour générer du trafic qualifié et des ventes, même sur des parcours d'achat longs et concurrentiels. Darwin conçoit des campagnes orientées performance avec un modèle CPC ou CPL, une optimisation continue et le choix des bons réseaux partenaires pour maximiser votre ROI à chaque étape du funnel.",
      linkLabel: 'En savoir plus sur le display',
      linkHref: 'https://www.darwin-agency.com/agence-media/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/cap-vances-porfolio.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/cap-vances-porfolio.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/cas-cap-vacances-display-02.gif',
  },

  // ─── homair ─────────────────────────────────────────────
  {
    slug: 'homair',
    client: 'Homair',
    leviers: ['SMA', 'MÉDIA'],
    tag: 'MÉDIA',
    title: '116 000 LEADS OPT-INS QUALIFIÉS COLLECTÉS',
    excerpt: "Comment Darwin a collecté plus de 116 000 leads opt-ins qualifiés pour Homair via trois dispositifs d'acquisition complémentaires.",
    context: "Homair Vacances est un spécialiste du camping et de la location de mobil-homes présent en France, Italie, Espagne, Portugal et Croatie. Acteur de l'hôtellerie de plein air depuis 25 ans, Homair propose 125 destinations réparties sur 4 gammes de campings du 3 au 5 étoiles : Bon Plan, Life Club, Zen Premium et Club Premium. Dans le cadre de sa stratégie digitale, la marque souhaitait développer ses ventes en ligne en conquérant de nouveaux prospects intentionnistes sur les séjours en mobil-home.",
    stats: [
      { num: '116k', label: 'Nombre de contacts collectés' },
      { num: '+5%', label: 'TAUX de réactivité' },
      { num: '3', label: 'Dispositifs complémentaires' },
    ],
    problematique: "Comment conquérir de nouveaux prospects opt-ins hautement qualifiés tout en garantissant un ROI maîtrisé, sur un marché du camping en ligne où la concurrence pour capter l'intentionniste vacances est forte ?",
    objectifs: [
      "Collecter des contacts opt-ins qualifiés et appétents pour les séjours en mobil-home.",
      "Alimenter la base newsletter Homair avec des profils réellement intentionnistes.",
      "Piloter l'ensemble du dispositif à la performance pour respecter les objectifs de ROI de la marque.",
    ],
    solution: [
      { id: '01', title: "UNE ENQUÊTE SPONSORISÉE SUR LES INTENTIONS DE VACANCES", text: "En partenariat avec l'Institut DWI, Darwin a conçu une enquête sur les intentions de vacances dont Homair était le sponsor principal. Diffusée auprès de 15 millions d'emails ciblés familles, elle intégrait 5 questions qualifiantes (durée de séjour, destination…) et offrait un séjour à gagner par tirage au sort. Les participants acceptaient par ailleurs de recevoir la newsletter Homair, garantissant un opt-in pleinement consenti." },
      { id: '02', title: 'UNE CAMPAGNE DE CLIC-LEAD', text: "Le second dispositif reposait sur le principe du clic-lead : dès qu'un internaute cliquait sur le lien de participation au jeu, il était automatiquement inscrit à la newsletter Homair. La démarche, simple et transparente, était clairement indiquée sous le bouton de participation. La dotation proposée par Homair renforçait la qualification des profils collectés car naturellement segmentante." },
      { id: '03', title: 'UNE COLLECTE DANS UN ENVIRONNEMENT DE JEUX FACEBOOK', text: "Un troisième dispositif complémentaire a été déployé au sein de jeux sur Facebook. Sans dotation à gagner, ce canal a permis de recruter des profils supplémentaires particulièrement engagés et fortement intéressés par la marque. Chaque adresse collectée recevait en temps réel un email de bienvenue Homair, envoyé par Darwin." },
    ],
    conclusion: {
      title: "L'EMAILING ET LE SMA pour LA CONQUÊTE",
      text: "Le cas Homair démontre qu'une stratégie de collecte multi-dispositifs bien orchestrée génère des contacts véritablement qualifiés et engagés. Darwin conçoit des campagnes d'acquisition sur-mesure : emailing sur bases partenaires, clic-lead, Social Ads pilotées à la performance pour respecter vos objectifs de ROI. De la collecte au premier contact, chaque étape est pensée pour maximiser la qualité des prospects livrés.",
      linkLabel: "En savoir plus sur l'emailing",
      linkHref: 'https://www.darwin-agency.com/agence-media/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-homair.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-homair.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/homair-illu.jpg',
  },

  // ─── musee-national-de-la-marine ────────────────────────
  {
    slug: 'musee-national-de-la-marine',
    client: 'Musée National de la Marine',
    leviers: ['SEA', 'SMA', 'MÉDIA'],
    tag: 'SMA',
    title: 'LE RETOUR DES VISITEURS APRÈS LE CONFINEMENT',
    excerpt: "Comment Darwin a reconquis les visiteurs du Musée National de la Marine sur 5 sites après le confinement grâce à un quiz 100% gagnant.",
    context: "Constitué en réseau, le musée National de la Marine est présent au Palais de Chaillot à Paris ainsi que sur le littoral atlantique à Brest, Port-Louis et Rochefort, et sur le littoral méditerranéen à Toulon. Il possède l'une des plus belles et plus anciennes collections au monde, retraçant 300 ans d'aventure maritime française. Suite à la fermeture totale de ses sites lors du confinement de mars 2020, le musée a enregistré une perte importante de fréquentation et de chiffre d'affaires, et cherchait à rattraper ce retard durant la période estivale.",
    stats: [
      { num: '+15K', label: 'formulaires remplis via plusieurs plateformes' },
      { num: '+800K', label: 'impressions display mobile' },
      { num: '+7K', label: 'entrées téléchargées' },
    ],
    problematique: "Comment reconquérir rapidement une audience familiale et culturelle dispersée sur plusieurs zones géographiques, relancer la fréquentation de cinq sites simultanément et développer la base opt-in du musée, dans un contexte post-confinement où chaque visiteur compte ?",
    objectifs: [
      "Booster la fréquentation des musées de Brest, Port-Louis, Rochefort et Toulon.",
      "Contribuer à la reconstitution du chiffre d'affaires impacté par la crise.",
      "Développer la base de données opt-in de 7 500 à 10 000 contacts en touchant deux cibles prioritaires : les familles avec enfants et les Millennials engagés sur les enjeux maritimes.",
    ],
    solution: [
      { id: '01', title: "UN JEU QUIZ 100% GAGNANT COMME FIL ROUGE", text: "Pour engager les audiences de façon originale et inédite pour le musée, Darwin a conçu le dispositif « Quel Marin êtes-vous ? », un quiz 100% gagnant offrant un billet d'entrée à télécharger. Les créations ont été déclinées pour chaque musée et adaptées à chaque support, avec un ciblage géolocalisé dans un rayon de 100 km autour de chaque site et sur Paris. Le dispositif a été déployé du 12 août au 18 septembre sur cinq leviers complémentaires." },
      { id: '02', title: 'FACEBOOK ET INSTAGRAM ADS : LE MOTEUR DE LA CAMPAGNE', text: "Trois campagnes géolocalisées ont été activées en parallèle. La campagne trafic a généré des sessions qualifiées vers le site. La campagne conversion, pilotée par l'algorithme Facebook, a capté les profils les plus susceptibles de participer au quiz et a représenté 85% des formulaires remplis. La campagne retargeting a permis de reconvertir les visiteurs ayant abandonné avant de finaliser leur participation, représentant 6% des entrées téléchargées supplémentaires." },
      { id: '03', title: 'GOOGLE ADS, EMAILING ET DISPLAY : UNE COUVERTURE MAXIMALE', text: "Sur Google, des campagnes Search géolocalisées par musée combinées à des campagnes Gmail Sponsored Promotions ont généré 2 710 formulaires. L'emailing géolocalisé, optimisé en continu sur les partenaires et zones les plus performants, a affiché des taux remarquables : 41% de participation au quiz, 79% de validation et 73% de téléchargement de l'invitation. Le display mobile via Vectaury a généré plus de 800 000 impressions en drive-to-store et drive-to-site." },
    ],
    conclusion: {
      title: "QUAND L'INNOVATION RÉOUVRE LES PORTES D'UN MUSÉE",
      text: "Transformer une contrainte en opportunité, c'est exactement ce que Darwin a réalisé pour le musée National de la Marine. Un concept créatif fort, un dispositif multi-leviers bien coordonné et un ciblage géographique précis ont permis de reconquérir des visiteurs sur cinq sites simultanément. Darwin apporte cette capacité à orchestrer des campagnes complexes, du concept créatif jusqu'au dernier clic.",
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-musee-nationale-de-la-marine-1.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-musee-nationale-de-la-marine-1.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/ulli-muse.jpg',
  },

  // ─── pacific-peche ──────────────────────────────────────
  {
    slug: 'pacific-peche',
    client: 'Pacific Pêche',
    leviers: ['SEA'],
    tag: 'SEA',
    title: '+21% DE CA EN LIGNE VIA GOOGLE ADS',
    excerpt: "Comment Darwin a augmenté de 21% le chiffre d'affaires en ligne de Pacific Pêche en restructurant en profondeur son compte Google Ads.",
    context: "Fondé en 1995, Pacific Pêche est le leader de la pêche sur Internet. Fort de plus de 43 magasins en France et de 5 sites de vente en ligne spécialisés, l'enseigne a structuré son offre autour des 5 grands segments de la pratique de la pêche, chacun avec ses propres codes et ses propres produits. Avec des milliers de références organisées par type de pêche, la stratégie SEA représente un levier majeur de trafic et de ventes en ligne et un chantier complexe à piloter efficacement à cette échelle.",
    stats: [
      { num: '+21%', label: 'de chiffre d\'affaires' },
      { num: '-34%', label: 'Diminution du coût par acquisition' },
      { num: '+32%', label: 'de ROI' },
    ],
    problematique: "Comment optimiser une stratégie SEA sur un catalogue de plusieurs milliers de références, réparties sur 5 segments de pratique distincts, pour attirer un trafic plus qualifié, mieux allouer les budgets en fonction de la rentabilité et améliorer le taux de transformation global ?",
    objectifs: [
      "Restructurer en profondeur le compte Google Ads de Pacific Pêche pour le rendre plus performant.",
      "Requalifier le ciblage pour réduire le coût d'acquisition.",
      "Affiner la segmentation produit pour mieux piloter les budgets en fonction de la marge et de la rentabilité de chaque rayon.",
    ],
    solution: [
      { id: '01', title: 'UNE RESTRUCTURATION COMPLÈTE DU COMPTE GOOGLE ADS', text: "Darwin a pris en main le compte Google Ads de Pacific Pêche avec une approche méthodique. Le type de ciblage a été revu pour attirer un trafic plus qualifié tout en abaissant le coût d'acquisition. La structure du compte a été entièrement repensée autour d'une logique produit, permettant d'allouer les budgets au niveau des campagnes en fonction de la marge et de la rentabilité de chaque rayon. La qualité du flux a été améliorée sur nos recommandations, la segmentation des annonces « produits » affinée pour mieux convertir, notamment grâce à des labels personnalisés comme le panier moyen ou les best-sellers." },
    ],
    conclusion: {
      title: 'LE SEA',
      text: "Un compte Google Ads mal structuré, c'est un budget qui fuit, souvent sans que personne ne s'en rende compte. Darwin intervient là où ça compte vraiment : dans la logique de construction des campagnes, la qualité du flux produit, la finesse du ciblage et la pertinence des enchères par rayon. Sur un catalogue aussi vaste que celui de Pacific Pêche, chaque décision d'allocation budgétaire a un impact direct sur la rentabilité.",
      linkLabel: 'En savoir plus sur le SEA',
      linkHref: 'https://www.darwin-agency.com/agence-sea/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-pacific-peche.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-pacific-peche.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illu-pp.jpg',
  },

  // ─── pandora ────────────────────────────────────────────
  {
    slug: 'pandora',
    client: 'Pandora',
    leviers: ['MÉDIA', 'DATA & TRACKING'],
    tag: 'MÉDIA',
    title: "REPOSITIONNEMENT DE MARQUE ET +95% DE CA À NOËL",
    excerpt: "Comment Darwin a simultanément repositionné Pandora comme marque de bijoux et dépassé l'objectif de +95% de chiffre d'affaires en ligne à Noël.",
    context: "Fondée en 1982 au Danemark, Pandora fabrique des bijoux uniques et modernes à des prix accessibles. Arrivée en France en 2011, la marque était essentiellement associée à ses bracelets et charms. Après quatre ans de travail sur la notoriété, Pandora souhaitait s'imposer dans l'esprit des consommatrices françaises comme une véritable marque de bijoux, notamment sur le segment des bagues — pièces de haute qualité, accessibles et fashion. En parallèle, l'estore devait atteindre un objectif ambitieux de +95% de chiffre d'affaires.",
    stats: [
      { num: '+95%', label: 'de chiffre d\'affaires' },
      { num: '-3%', label: 'de ROI' },
      { num: '+7%', label: 'de points de notoriété' },
    ],
    problematique: "Comment mener simultanément une campagne branding pour repositionner Pandora sur le segment bagues, tout en atteignant un objectif de croissance ROIste de +95% du chiffre d'affaires en ligne, sur une période aussi stratégique que la saison de Noël ?",
    objectifs: [
      "Repositionner Pandora dans l'esprit des consommatrices françaises en faisant passer la marque de spécialiste des bracelets à véritable marque de bijoux.",
      "Générer une croissance du chiffre d'affaires en ligne grâce à un pilotage fin de chaque levier d'acquisition.",
    ],
    solution: [
      { id: '01', title: 'UNE CAMPAGNE EN TROIS TEMPS FORTS', text: "Darwin a structuré la campagne « Bagues » en trois phases distinctes avant Noël. Les deux premiers temps forts ont principalement servi la notoriété qualifiée de Pandora, en activant display, native advertising, display RTB et vidéo pour faire évoluer l'image de marque. Le troisième temps fort a basculé vers la performance pure, pour convertir l'audience construite en chiffre d'affaires." },
      { id: '02', title: 'UN PILOTAGE DATA-DRIVEN AVEC EASYENCE', text: "Pour réconcilier branding et performance, Darwin a déployé l'outil Easyence permettant une analyse Multi-Touch de la contribution et de l'attribution algorithmique. Tout au long de la campagne, cet outil a permis d'analyser la performance réelle de chaque levier, d'identifier le mix le plus rentable via des AB tests partenaires, et d'optimiser les investissements en continu. Résultat : l'objectif de +95% de CA a été dépassé tout en améliorant le ROI digital global de 3 points." },
    ],
    conclusion: {
      title: "BRANDING ET PERFORMANCE, SONT loin d'être INCOMPATIBLES",
      text: "Branding et performance sont souvent présentés comme deux objectifs antagonistes. Pandora prouve le contraire. En orchestrant créativité, data et pilotage multi-touch, Darwin a simultanément fait grandir l'image de la marque et explosé les objectifs de vente en ligne. Une approche que Darwin reproduit pour chaque client qui refuse de choisir entre visibilité et rentabilité.",
      linkLabel: 'discuter de brand performance avec un expert',
      linkHref: 'https://www.darwin-agency.com/contactez-nous/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/02/Cas-client-Pandora.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/02/Cas-client-Pandora.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illu-padnora.jpg',
  },

  // ─── phildar ────────────────────────────────────────────
  {
    slug: 'phildar',
    client: 'Phildar',
    leviers: ['SMA', 'MÉDIA'],
    tag: 'MÉDIA',
    title: "UNE COLLECTION RELANCÉE EN DEUX SEMAINES",
    excerpt: "Comment Darwin a relancé la collection prêt-à-porter Phildar avec une campagne branding digitale sur Pinterest et Dynadmic en deux semaines.",
    context: "Depuis 120 ans, Phildar est l'expert incontesté de la maille. Des premières pelotes de laine au prêt-à-porter, en passant par le DIY et les accessoires, la marque a bâti une légitimité unique dans son domaine. Aujourd'hui, Phildar souhaite se recentrer sur son cœur de métier et relancer une collection prêt-à-porter autour du positionnement « Maille Originelle », en s'affirmant comme une marque responsable et ancrée dans la mouvance slow fashion. Créativité, qualité et matières nobles constituent les trois piliers de cette nouvelle identité.",
    stats: [
      { num: '79%', label: 'de taux de vue à 100%' },
      { num: '+1M', label: "Nombre d'impressions" },
      { num: '+18K', label: 'interactions enregistrées' },
    ],
    problematique: "Comment relancer une collection prêt-à-porter auprès d'une clientèle historiquement attachée à la pelote et au DIY, en construisant une campagne branding digitale alliant puissance de diffusion et ciblage précis, tout en restant cohérent avec le positionnement premium et responsable de la marque ?",
    objectifs: [
      "Développer la notoriété de Phildar autour de sa collection « Maille Originelle » auprès d'une cible féminine de 25 à 60 ans, jeunes mamans, passionnées de DIY et de mode.",
      "Déployer un dispositif branding digital impactant combinant vidéo et formats sociaux sur une fenêtre très courte de deux semaines.",
    ],
    solution: [
      { id: '01', title: 'PINTEREST, LE TERRAIN NATUREL DE PHILDAR', text: "Avec 1,2 million de visiteurs mensuels et une communauté historiquement engagée sur le DIY et la laine, Pinterest s'est imposé comme une évidence. Moins encombré que Facebook ou Instagram, le réseau offrait un environnement idéal pour mettre en valeur la nouvelle collection. Darwin a déployé deux campagnes successives : une campagne notoriété en format vidéo, suivie d'une campagne trafic en formats Pin et Carrousel. Le ciblage par mots-clés pertinents a permis d'atteindre une audience naturellement appétente, générant un taux d'engagement significatif." },
      { id: '02', title: 'DYNADMIC, LA PUISSANCE DU PRÉ-ROLL VIDÉO CONTEXTUEL', text: "Pour amplifier la portée de la campagne, Darwin a activé la solution Dynadmic, spécialisée dans la diffusion de pré-roll vidéo sur YouTube et un réseau de sites éditeurs premium. La particularité du dispositif reposait sur un ciblage contextuel sophistiqué combinant reconnaissance audio des contenus, centres d'intérêt définis par mots-clés et ciblage socio-démographique. Le budget a été réparti à parts égales entre YouTube et le réseau Dynadmic. Résultat : des taux de vues complètes largement au-dessus des benchmarks du marché sur les deux canaux (Youtube : 57% vs 40% benchmark, réseau Dynadmic : 79% vs 70% benchmark)." },
    ],
    conclusion: {
      title: "LE BRANDING DIGITAL, QUAND L'IMAGE DEVIENT UN LEVIER DE CROISSANCE",
      text: "Phildar le démontre : un repositionnement de marque réussi en digital repose sur le choix des bons territoires d'expression et des bons formats. Darwin conçoit des campagnes branding sur-mesure qui allient puissance de diffusion et précision du ciblage, pour construire une image forte tout en touchant les bonnes audiences au bon moment.",
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-Phildar-1.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-Phildar-1.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/ull-phildar.jpg',
  },

  // ─── vinci-autoroutes ───────────────────────────────────
  {
    slug: 'vinci-autoroutes',
    client: 'VINCI Autoroutes',
    leviers: ['SMA', 'FORMATION'],
    tag: 'SMA',
    title: "INFO TRAFIC EN TEMPS RÉEL SUR LES RÉSEAUX SOCIAUX",
    excerpt: "Comment Darwin a formé les équipes VINCI Autoroutes et lancé le compte Twitter @A8_VINCI pour un service d'info trafic en temps réel.",
    context: "VINCI Autoroutes est concessionnaire de 4 398 km d'autoroutes en France, avec plus de 2 millions d'usagers accueillis par jour. Premier opérateur d'autoroutes en concession en Europe et filiale du groupe VINCI, l'entreprise exploite son réseau à travers quatre sociétés : ASF, Escota, Cofiroute et Arcour.",
    stats: [
      { num: '+0,23k', label: 'tweets supp. en 5 mois' },
      { num: '40', label: 'Opérateurs formés' },
      { num: '+51%', label: 'De nouveaux followers' },
    ],
    problematique: "Dans le cadre de sa transformation digitale, Vinci Autoroutes a souhaité lancer un service d'info trafic en temps réel sur X (anciennement Twitter), pour informer ses usagers de l'état du trafic avant leur départ. Le projet pilote devait être déployé sur l'autoroute A8 en moins de 3 mois et les tweets devaient être « humains ». Une stratégie d'acquisition de followers devait ensuite être déployée.",
    objectifs: [
      "Former les équipes du Centre Info Trafic à la rédaction de tweets et à la gestion d'un compte Twitter dédié à l'autoroute A8.",
      "Déployer et structurer le compte @A8_VINCI avec une stratégie éditoriale claire et une nomenclature adaptée aux usagers.",
      "Acquérir une communauté de followers qualifiés via des campagnes digitales ciblées (SMS géo-ciblés, interstitiel mobile et Twitter Ads).",
    ],
    solution: [
      { id: '01', title: 'LA FORMATION DES EQUIPES A8 DE VINCI AUTOROUTES', text: "Le compte Twitter est géré par les opérateurs du Centre Info Trafic (CIT). N'étant pas formés à la rédaction de tweets, Darwin a pris en charge cette formation sous forme de sessions d'une journée, 10 sessions pour 40 personnes dans le cadre de l'A8. Pour que l'information soit claire et adaptée aux usagers, Darwin a mis en place une stratégie éditoriale, comprenant la nomenclature des tweets par typologie, ainsi qu'un calendrier de diffusion." },
      { id: '02', title: 'LE DÉPLOIEMENT DU COMPTE TWITTER @A8_VINCI', text: "Le compte Twitter @A8_VINCI a d'abord été ouvert en accès fermé pour que les opérateurs du CIT puissent commencer à tweeter en live, Darwin a pu suivre les tweets et faire des retours hebdomadaires détaillés aux équipes de Vinci Autoroutes. Au bout de 2 mois, le compte Twitter @A8 a pu être ouvert au public avec des tweets Info Trafic conformes à la nomenclature définie, et un rythme soutenu tout au long de la journée." },
      { id: '03', title: "L'ACQUISITION DE NOUVEAUX FOLLOWERS", text: "Darwin a mis en place une campagne de SMS géo-ciblés et d'interstitiel mobile avec un affichage comportemental ciblant les usagers de l'A8, et une campagne Twitter Ads pour acquérir des followers sur les départements traversés par l'autoroute A8." },
    ],
    conclusion: {
      title: 'LE SMA allié à la formation',
      text: "Darwin pilote vos campagnes publicitaires sur les réseaux sociaux — Facebook, Instagram, LinkedIn, TikTok — avec une approche à la fois stratégique et créative. Certifiée Meta Business Partner, l'agence maîtrise chaque plateforme dans ses moindres détails : ciblage ultra-précis, formats adaptés, optimisation quotidienne et reporting transparent. Nous formons vos équipes aux métiers du digital avec une pédagogie 100% opérationnelle.",
      linkLabel: 'En savoir plus sur le SMA',
      linkHref: 'https://www.darwin-agency.com/agence-sma/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/02/Cas-client-Vinci.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/02/Cas-client-Vinci.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/cas-vinci-autoroutes-03.jpg',
  },

  // ─── catimini ───────────────────────────────────────────
  {
    slug: 'catimini',
    client: 'Catimini',
    leviers: ['SEA', 'SEO', 'SMA', 'MÉDIA', 'DATA & TRACKING'],
    tag: 'SEA',
    title: "OBJECTIFS DOUBLÉS SUR 10 MARCHÉS EUROPÉENS",
    excerpt: "Comment Darwin a doublé les objectifs de chiffre d'affaires et de nouveaux clients Catimini sur 10 marchés européens grâce à un mix acquisition piloté par la data.",
    context: "Fondée en 1972, Catimini est une marque française de prêt-à-porter haut de gamme pour enfants, reconnue pour ses vêtements colorés et pétillants destinés aux bébés, filles et garçons. Face à la montée en puissance du e-commerce dans le secteur de la mode enfantine, Catimini a fait du digital son principal canal de recrutement de nouveaux clients, avec un double impératif : respecter un coût d'acquisition maîtrisé tout en accélérant fortement la croissance de son chiffre d'affaires en ligne, sur une dizaine de marchés européens.",
    stats: [
      { num: '10', label: 'Marchés européens couverts' },
      { num: '8', label: "leviers d'acquisition simultanés" },
      { num: 'X2', label: 'Double Objectifs CA et volume nouveaux clients atteints' },
    ],
    problematique: "Comment recruter massivement de nouveaux clients pour Catimini sur plusieurs marchés européens simultanément, tout en respectant un coût d'acquisition défini et en maximisant la croissance du chiffre d'affaires e-commerce ? Un double objectif souvent difficile à concilier sans une vision claire de la contribution réelle de chaque levier.",
    objectifs: [
      "Déployer un mix d'acquisition complet couvrant l'intégralité du tunnel de conversion.",
      "Piloter les investissements avec précision pour respecter le CAC cible.",
      "Identifier les leviers générant le meilleur taux de nouveaux clients grâce à une analyse fine du parcours d'achat.",
    ],
    solution: [
      { id: '01', title: 'UN MIX ACQUISITION COMPLET SUR TOUT LE FUNNEL', text: "Pour couvrir l'ensemble du parcours d'achat, Darwin a déployé un dispositif multi-leviers particulièrement étoffé : SEA (Google et Bing Ads), SEO, retargeting, affiliation, social ads, native advertising et habillage. Chaque levier joue un rôle précis dans le funnel, de la découverte de la marque jusqu'à la conversion finale, sur une dizaine de marchés européens en simultané." },
      { id: '02', title: 'UN PILOTAGE DATA-DRIVEN AVEC EASYENCE ATTRIBUTION', text: "Pour réconcilier volume de nouveaux clients et rentabilité, Darwin a utilisé la solution Easyence Attribution comme tiers de confiance pour analyser la contribution réelle de chaque levier. Ce modèle d'attribution algorithmique a permis d'AB-tester les partenaires, d'identifier les combinaisons les plus performantes pour recruter des nouveaux clients, et d'avoir une visibilité précise sur le parcours d'achat Catimini. Les investissements ont ainsi été réalloués en continu vers les leviers générant le meilleur ratio nouveaux clients / coût d'acquisition." },
    ],
    conclusion: {
      title: 'MULTI-LEVIERS ET DATA, LE DUO GAGNANT',
      text: "Recruter de nouveaux clients à grande échelle tout en maîtrisant son CAC, c'est le défi que Darwin relève au quotidien pour ses clients mode et e-commerce. La clé ? Une stratégie multi-leviers cohérente, pilotée par la donnée, qui permet d'arbitrer en temps réel entre visibilité, acquisition et rentabilité sans jamais sacrifier l'un pour l'autre.",
      linkLabel: 'échanger à propos de vos leviers digitaux',
      linkHref: 'https://www.darwin-agency.com/contactez-nous/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-catimini.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-catimini.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illu-catinimi.jpg',
  },

  // ─── ponant ─────────────────────────────────────────────
  {
    slug: 'ponant',
    client: 'Ponant',
    leviers: ['SEA', 'SMA', 'MÉDIA'],
    tag: 'SEA',
    title: "+55% SUR LES OBJECTIFS LEADS INTERNATIONAUX",
    excerpt: "Comment Darwin a dépassé de 55% les objectifs de leads Ponant tout en garantissant une Brand Safety irréprochable sur 5 marchés internationaux.",
    context: "Depuis 30 ans, Ponant incarne l'excellence de la croisière de luxe. Ses navires font escale dans des ports mythiques et des mouillages confidentiels, uniquement accessibles aux bateaux de petite capacité. Numéro 1 des croisières polaires haut de gamme, Ponant emmène ses passagers à la découverte du Grand Nord et de l'Arctique, de la Méditerranée, du Mexique, des côtes Celtiques et des îles secrètes du Pacifique. Dans un contexte de forte croissance de sa flotte, la marque a confié à Darwin la conquête de nouveaux prospects sur le digital, avec une exigence absolue : une Brand Safety irréprochable, à la hauteur du positionnement ultra-premium de Ponant.",
    stats: [
      { num: '-39%', label: 'CPL VS Objectifs' },
      { num: '+55%', label: 'de Leads VS Objectifs' },
      { num: '+12%', label: 'de ROI final' },
    ],
    problematique: "Comment conquérir de nouveaux prospects qualifiés pour une marque de croisières de luxe ultra-sélective, sur une cible par définition restreinte, tout en garantissant une Brand Safety irréprochable et en maîtrisant la pression publicitaire sur des marchés internationaux ?",
    objectifs: [
      "Capter de nouveaux prospects qualifiés via le digital et les accompagner dans leur parcours d'achat jusqu'à la conversion finale en call center.",
      "Atteindre les objectifs de conversion ciblés : opt-in newsletter, demande de brochure et demande de devis.",
      "Accompagner le développement de Ponant sur quatre nouveaux marchés en zone EMEA : Belgique, Suisse, Allemagne et Royaume-Uni.",
    ],
    solution: [
      { id: '01', title: 'UNE STRATÉGIE DATA ET AUDIENCES SUR-MESURE', text: "Darwin a structuré l'approche autour d'une gestion fine des audiences : Customer Match, Audiences Pools et segmentation data avancée. Sur une cible aussi restreinte que la clientèle du luxe haut de gamme, la précision du ciblage est un facteur clé de succès. Le mix media a été conçu pour garantir une répétition maîtrisée et un reach optimal, sans jamais surexposer la marque." },
      { id: '02', title: 'UN DISPOSITIF MULTI-LEVIERS AVEC BRAND SAFETY', text: "Cinq leviers ont été activés en complémentarité : Google et Bing Ads, retargeting, display social ads, emailing et branding. Pour protéger l'image de Ponant, chaque support de diffusion a fait l'objet d'une sélection en whitelist stricte, garantissant que les publicités n'apparaissent que dans des environnements éditoriaux cohérents avec le positionnement premium de la marque." },
      { id: '03', title: "UN NURTURING JUSQU'À LA CONVERSION ET UN DÉPLOIEMENT INTERNATIONAL", text: "Le rôle du digital dans le parcours d'achat Ponant est d'attirer, qualifier et nurturer les prospects dans la durée. La conversion finale s'effectuant à 90% via le call center. Darwin a également piloté l'ouverture de quatre nouveaux marchés en zone EMEA, en adaptant les campagnes aux spécificités locales de chaque pays." },
    ],
    conclusion: {
      title: 'LE LUXE A SES PROPRES RÈGLES, LA PERFORMANCE AUSSI',
      text: "Toucher une clientèle premium ne s'improvise pas. Cela exige une maîtrise parfaite des audiences, une sélection rigoureuse des environnements de diffusion et une cohérence totale entre la créativité et le positionnement de la marque. Darwin apporte cette expertise aux marques qui ne peuvent pas se permettre de mal paraître, en alliant performance d'acquisition et excellence de l'image.",
      linkLabel: 'discuter avec un expert de votre marque',
      linkHref: 'https://www.darwin-agency.com/contactez-nous/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-ponant.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2026/02/Cas-client-ponant.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/ill-ponant.jpg',
  },

  // ─── tohapi ─────────────────────────────────────────────
  {
    slug: 'tohapi',
    client: 'Tohapi',
    leviers: ['MÉDIA'],
    tag: 'MÉDIA',
    title: "10 000 LEADS EN 20 JOURS VIA UN JEU CONCOURS",
    excerpt: "Comment Darwin a collecté 10 000 leads opt-ins qualifiés en 20 jours pour Tohapi grâce à un jeu concours dédié.",
    context: "Tohapi est le spécialiste du camping et de la location de mobil-home en France, Espagne et Italie. L'enseigne propose plus de 200 campings de 2 à 5 étoiles, avec parcs aquatiques et animations inclus, répartis en trois gammes : Privilège, Découverte et Malin. Au-delà de l'hébergement, c'est avant tout une ambiance et une expérience vacances que Tohapi met en avant. Pour soutenir sa croissance digitale, l'enseigne cherchait à recruter massivement des leads opt-ins afin d'alimenter sa base CRM et d'activer ces contacts dans le cadre de campagnes marketing ciblées.",
    stats: [
      { num: '10k', label: "Opt'ins en 20 jours" },
      { num: '+42%', label: 'TAUX de transformation' },
      { num: '+7%', label: "de taux d'ouverture des emails" },
    ],
    problematique: "Comment recruter rapidement un volume important de leads opt-ins qualifiés pour alimenter la stratégie CRM de Tohapi, tout en générant du trafic qualifié vers le site tohapi.fr et en maintenant un coût d'acquisition maîtrisé ?",
    objectifs: [
      "Recruter 10 000 leads opt-ins en 20 jours via un dispositif engageant.",
      "Diriger les participants vers le site Tohapi pour générer du trafic qualifié.",
      "Poser les bases d'une base de données emails activable dans le cadre de la politique CRM de l'enseigne.",
    ],
    solution: [
      { id: '01', title: 'UN JEU CONCOURS PENSÉ POUR CONVERTIR', text: "Pour atteindre cet objectif ambitieux en un temps très court, Darwin a conçu et déployé un jeu concours dédié, relayé par email auprès de bases de données partenaires soigneusement sélectionnées. La dotation attractive proposée par Tohapi a joué un rôle clé pour inciter à la participation. Le mécanisme était volontairement simple : renseigner son adresse email et accepter de recevoir les newsletters de Tohapi. Sauf refus explicite, chaque participant devenait automatiquement opt-in. À l'issue du jeu, une redirection directe vers le site tohapi.fr transformait chaque participation en visite qualifiée, créant ainsi un double bénéfice : collecte de leads et génération de trafic." },
    ],
    conclusion: {
      title: 'RECRUTER VITE, RECRUTER BIEN',
      text: "Tohapi le prouve : quand mécanique, ciblage et création sont au diapason, il est possible de recruter des milliers de leads qualifiés en un temps record. Darwin conçoit des dispositifs de collecte sur-mesure adaptés à vos objectifs de volume et de qualité, qu'il s'agisse d'alimenter une base CRM, de préparer une campagne de relance ou de générer du trafic vers votre site.",
      linkLabel: "En savoir plus sur l'emailing",
      linkHref: 'https://www.darwin-agency.com/agence-media/',
    },
    heroImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-tohapi.jpg',
    cardImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/Cas-client-tohapi.jpg',
    problematiqueImg: 'https://www.darwin-agency.com/wp-content/uploads/2025/01/illus-tohapi.jpg',
  },
]

// ─── HELPERS ────────────────────────────────────────────

export const ALL_LEVIERS = ['TOUS', 'MÉDIA', 'SEO', 'SEA', 'SMA', 'DATA & TRACKING', 'FORMATION'] as const

export function getCasBySlug(slug: string): CasClient | undefined {
  return CAS_CLIENTS.find(c => c.slug === slug)
}
