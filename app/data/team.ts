// ─────────────────────────────────────────────────────────
// FICHIER : app/data/team.ts
// RÔLE    : Référentiel des auteurs Darwin pour les articles
// USAGE   : Importer { getAuthorById } dans blog.ts
// ─────────────────────────────────────────────────────────

export type TeamMember = {
  id: string
  firstName: string
  lastName: string
  role: string
  specialties: string[]
  photo: string
}

// ── À COMPLÉTER avec vos collaborateurs ─────────────────
// Fournissez : prénom, nom, fonction, spécialités (mots-clés)
// La photo doit être dans /public/images/team/<id>.jpg

export const TEAM: TeamMember[] = [
  // ── Direction ────────────────────────────────────────
  {
    id: 'olivier-trubert',
    firstName: 'Olivier',
    lastName: 'Trubert',
    role: 'CEO',
    specialties: ['Stratégie', 'Vision', 'Management', 'Croissance'],
    photo: '/images/team/olivier-trubert.jpg',
  },
  {
    id: 'jerome-renard',
    firstName: 'Jérôme',
    lastName: 'Renard',
    role: 'Directeur Associé',
    specialties: ['Stratégie', 'Management', 'Business Development'],
    photo: '/images/team/jerome-renard.jpg',
  },
  // ── Stratégie & Innovation ───────────────────────────
  {
    id: 'amaury-micha',
    firstName: 'Amaury',
    lastName: 'Micha de Faletans',
    role: 'Directeur Stratégie & Innovation',
    specialties: ['Innovation', 'IA', 'Tendances', 'Data', 'R&D'],
    photo: '/images/team/amaury-micha.jpg',
  },
  {
    id: 'miriame-yvard',
    firstName: 'Miriame',
    lastName: 'Yvard',
    role: 'Directrice Stratégie',
    specialties: ['Stratégie digitale', 'Acquisition', 'Brand'],
    photo: '/images/team/miriame-yvard.jpg',
  },
  // ── SEO ─────────────────────────────────────────────
  {
    id: 'thomas-courjeault',
    firstName: 'Thomas',
    lastName: 'Courjeault',
    role: 'Directeur SEA / SEO / Tech',
    specialties: ['SEO', 'SEA', 'Google Ads', 'Analytics', 'Tech', 'Performance', 'IA'],
    photo: '/images/team/thomas-courjeault.jpg',
  },
  {
    id: 'benjamin-gninge',
    firstName: 'Benjamin',
    lastName: 'Gninge',
    role: 'Consultant SEO',
    specialties: ['SEO', 'Référencement naturel', 'SEO technique', 'Contenu'],
    photo: '/images/team/benjamin-gninge.jpg',
  },
  // ── SEA ─────────────────────────────────────────────
  {
    id: 'eva-zdimalova',
    firstName: 'Eva',
    lastName: 'Zdimalova',
    role: 'Consultante SEA',
    specialties: ['SEA', 'Google Ads', 'Paid Search', 'Performance'],
    photo: '/images/team/eva-zdimalova.jpg',
  },
  {
    id: 'mariella-lares',
    firstName: 'Mariella',
    lastName: 'Lares',
    role: 'Consultante SEA',
    specialties: ['SEA', 'Google Ads', 'Paid Search', 'Performance'],
    photo: '/images/team/mariella-lares.jpg',
  },
  {
    id: 'sylvain-rosset',
    firstName: 'Sylvain',
    lastName: 'Rosset',
    role: 'Consultant SEA',
    specialties: ['SEA', 'Google Ads', 'Campagnes', 'Performance'],
    photo: '/images/team/sylvain-rosset.jpg',
  },
  // ── Media ────────────────────────────────────────────
  {
    id: 'carole-kabanda',
    firstName: 'Carole',
    lastName: 'Kabanda',
    role: 'Directrice Media',
    specialties: ['Media', 'Display', 'Programmatique', 'Vidéo'],
    photo: '/images/team/carole-kabanda.jpg',
  },
  {
    id: 'aurore-bourrely',
    firstName: 'Aurore',
    lastName: 'Bourrely',
    role: 'Consultante Media',
    specialties: ['Media', 'Display', 'Programmatique', 'Planning'],
    photo: '/images/team/aurore-bourrely.jpg',
  },
  {
    id: 'mathilde-colonna',
    firstName: 'Mathilde',
    lastName: "Colonna d'Istria",
    role: 'Consultante Media',
    specialties: ['Media', 'Display', 'Planning', 'Programmatique'],
    photo: '/images/team/mathilde-colonna.jpg',
  },
  {
    id: 'monica-noto',
    firstName: 'Monica',
    lastName: 'Noto',
    role: 'Media Manager',
    specialties: ['Media', 'Planning', 'Stratégie media', 'Achat media'],
    photo: '/images/team/monica-noto.jpg',
  },
  // ── Créa ─────────────────────────────────────────────
  {
    id: 'julia-sanchez',
    firstName: 'Julia',
    lastName: 'Sanchez',
    role: 'Directrice hey!charly',
    specialties: ['Créativité', 'Studio', 'Brand', 'Contenu visuel', 'Design'],
    photo: '/images/team/julia-sanchez.jpg',
  },
  {
    id: 'kamila-zao-hamada',
    firstName: 'Kamila',
    lastName: 'Zao Hamada',
    role: 'Créatrice',
    specialties: ['Créativité', 'Design', 'Contenu visuel', 'Brand'],
    photo: '/images/team/kamila-zao-hamada.jpg',
  },
  // ── Commercial ──────────────────────────────────────
  {
    id: 'tanguy-van-campenhoudt',
    firstName: 'Tanguy',
    lastName: 'Van Campenhoudt',
    role: 'Directeur Commercial',
    specialties: ['Commercial', 'Business Development', 'Ventes'],
    photo: '/images/team/tanguy-van-campenhoudt.jpg',
  },
  // ── Admin / RH / Compta ──────────────────────────────
  {
    id: 'gaelle-aubert',
    firstName: 'Gaëlle',
    lastName: 'Aubert',
    role: 'Responsable Administrative & Financière',
    specialties: ['Administration', 'RH', 'Finance'],
    photo: '/images/team/gaelle-aubert.jpg',
  },
  {
    id: 'laurie-daret',
    firstName: 'Laurie',
    lastName: 'Daret',
    role: 'Assistante Comptable',
    specialties: ['Comptabilité', 'Administration'],
    photo: '/images/team/laurie-daret.jpg',
  },
]

// ── Helpers ──────────────────────────────────────────────

export function getAuthorById(id: string): TeamMember | undefined {
  return TEAM.find(m => m.id === id)
}

/** Trouve l'auteur le plus pertinent selon les tags d'un article */
export function matchAuthorToTags(tags: string[]): TeamMember {
  const scores = TEAM.map(member => {
    const score = tags.filter(tag =>
      member.specialties.some(s => s.toLowerCase().includes(tag.toLowerCase()) || tag.toLowerCase().includes(s.toLowerCase()))
    ).length
    return { member, score }
  })
  scores.sort((a, b) => b.score - a.score)
  return scores[0]?.member ?? TEAM[0]
}
