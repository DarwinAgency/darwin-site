# 📘 Documentation de reprise — darwin-agency

> Ce document est destiné à toute personne qui reprendrait le projet du site darwin-agency.
> Il explique tout ce qu'il faut savoir pour installer, modifier et déployer le site.

---

## Table des matières

1. [Présentation du projet](#1-présentation-du-projet)
2. [Accès et comptes à récupérer](#2-accès-et-comptes-à-récupérer)
3. [Prérequis techniques](#3-prérequis-techniques)
4. [Installation en local](#4-installation-en-local)
5. [Structure du projet](#5-structure-du-projet)
6. [Les pages du site](#6-les-pages-du-site)
7. [Comment modifier du contenu](#7-comment-modifier-du-contenu)
8. [Comment ajouter du contenu](#8-comment-ajouter-du-contenu)
9. [Les composants réutilisables](#9-les-composants-réutilisables)
10. [Déploiement](#10-déploiement)
11. [SEO et bonnes pratiques](#11-seo-et-bonnes-pratiques)
12. [En cas de problème](#12-en-cas-de-problème)

---

## 1. Présentation du projet

**darwin-agency** est le site vitrine de Darwin Agency, agence digitale basée à Aix-en-Provence.

| Infos | Détails |
|---|---|
| URL du site en production | https://www.darwin-agency.fr |
| Repository GitHub | https://github.com/DarwinAgency/darwin-site |
| Déploiement | Vercel (automatique à chaque push GitHub) |
| Framework | Next.js 16 (App Router) |
| Langage | TypeScript + React 19 |
| Style | Tailwind CSS v4 |

Le site contient :
- Une **page d'accueil** avec présentation de l'agence
- Une **page Agence** (équipe, valeurs)
- Des **pages Expertises** (SEO, audit SEO…)
- Un **Blog** avec articles dynamiques
- Des **Cas clients** (études de cas dynamiques)
- Une **page Contact** avec formulaire
- Une **page À propos**

---

## 2. Accès et comptes à récupérer

Pour reprendre le projet, il faut obtenir l'accès à ces comptes :

### GitHub
- **URL** : https://github.com/DarwinAgency/darwin-site
- **Rôle** : héberge le code source
- Demander un accès en tant que **collaborateur** (ou se faire transférer le repo)

### Vercel
- **URL** : https://vercel.com
- **Rôle** : déploie et héberge le site en production
- Le projet Vercel est connecté au repo GitHub ci-dessus
- Demander un accès à l'organisation ou au projet Vercel existant

### Domaine darwin-agency.fr
- Le nom de domaine est configuré dans Vercel
- Vérifier auprès du bureau d'enregistrement (registrar) qui gère le domaine

---

## 3. Prérequis techniques

Avant de pouvoir travailler sur le projet, installer :

### Node.js (version 20 ou plus)
```bash
# Vérifier si Node.js est installé
node -v

# Si non installé → télécharger sur https://nodejs.org
# Choisir la version LTS (Long Term Support)
```

### Git
```bash
# Vérifier si Git est installé
git --version

# Sur Mac, si non installé :
xcode-select --install
```

### Un éditeur de code
- Recommandé : **Visual Studio Code** → https://code.visualstudio.com
- Extensions utiles : Tailwind CSS IntelliSense, ESLint, TypeScript

---

## 4. Installation en local

### Étape 1 — Cloner le projet depuis GitHub

```bash
git clone https://github.com/DarwinAgency/darwin-site.git darwin-agency
cd darwin-agency
```

### Étape 2 — Installer les dépendances

```bash
npm install
```

> ⚠️ Cette commande peut prendre quelques minutes la première fois. C'est normal.

### Étape 3 — Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir ensuite http://localhost:3000 dans le navigateur.
Le site se recharge automatiquement à chaque modification de fichier.

### Étape 4 — Arrêter le serveur

Appuyer sur `Ctrl + C` dans le terminal.

---

## 5. Structure du projet

```
darwin-agency/
├── app/                        ← Tout le code du site est ici
│   ├── components/             ← Composants réutilisables (header, footer, etc.)
│   ├── data/                   ← Données du site (articles blog, cas clients, équipe)
│   ├── lib/                    ← Fonctions utilitaires (JSON-LD pour le SEO)
│   ├── api/contact/            ← API du formulaire de contact
│   ├── blog/                   ← Page blog + pages d'articles dynamiques
│   ├── cas-clients/            ← Page cas clients + pages d'études de cas
│   ├── expertises/seo/         ← Pages expertises SEO
│   ├── agence/                 ← Page agence / équipe
│   ├── contact/                ← Page contact
│   ├── a-propos-de-darwin/     ← Page à propos
│   ├── globals.css             ← Styles globaux + configuration Tailwind
│   ├── layout.tsx              ← Layout commun (header + footer + SEO global)
│   ├── page.tsx                ← Page d'accueil
│   ├── not-found.tsx           ← Page 404
│   └── sitemap.ts              ← Sitemap généré automatiquement
├── public/                     ← Images et fichiers statiques
│   ├── images/                 ← Photos du site
│   │   ├── blog/               ← Images des articles de blog
│   │   ├── cas-clients/        ← Images des études de cas
│   │   ├── team/               ← Photos de l'équipe
│   │   └── ...
│   ├── logos/                  ← Logos clients, certifications, récompenses
│   ├── robots.txt              ← Instructions pour les moteurs de recherche
│   └── llms.txt                ← Instructions pour les IA (ChatGPT, etc.)
├── scripts/                    ← Scripts utilitaires
├── next.config.ts              ← Configuration Next.js
├── package.json                ← Dépendances et scripts npm
├── tsconfig.json               ← Configuration TypeScript
├── HANDOVER.md                 ← Ce fichier
├── CHANGELOG.md                ← Historique des modifications
└── .gitignore                  ← Fichiers ignorés par Git
```

---

## 6. Les pages du site

| URL | Fichier source | Description |
|---|---|---|
| `/` | `app/page.tsx` | Page d'accueil |
| `/agence` | `app/agence/page.tsx` | Présentation de l'agence |
| `/expertises/seo` | `app/expertises/seo/page.tsx` | Page expertise SEO |
| `/expertises/seo/audit-seo` | `app/expertises/seo/audit-seo/page.tsx` | Page audit SEO |
| `/blog` | `app/blog/page.tsx` | Liste des articles |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Article individuel |
| `/cas-clients` | `app/cas-clients/page.tsx` | Liste des cas clients |
| `/cas-clients/[slug]` | `app/cas-clients/[slug]/page.tsx` | Étude de cas individuelle |
| `/contact` | `app/contact/page.tsx` | Formulaire de contact |
| `/a-propos-de-darwin` | `app/a-propos-de-darwin/page.tsx` | Page à propos |

---

## 7. Comment modifier du contenu

### Modifier le texte d'une page

1. Trouver le fichier correspondant dans le tableau ci-dessus
2. Ouvrir le fichier dans VS Code
3. Modifier le texte voulu
4. Sauvegarder (`Cmd + S`)
5. Le navigateur se recharge automatiquement

### Modifier les articles de blog

Les données des articles sont dans **`app/data/blog.ts`**.
Chaque article est un objet avec ces champs :

```typescript
{
  slug: "nom-de-l-article",          // URL : /blog/nom-de-l-article
  title: "Titre de l'article",
  excerpt: "Résumé court",
  date: "2025-01-15",
  author: "Prénom Nom",
  category: "SEO",
  image: "/images/blog/mon-image.jpg",
  content: `
    Contenu de l'article en HTML ou texte...
  `
}
```

### Modifier les cas clients

Les données sont dans **`app/data/cas-clients.ts`**.
Même structure que les articles de blog, adaptée aux études de cas.

### Modifier l'équipe

Les données de l'équipe sont dans **`app/data/team.ts`**.

---

## 8. Comment ajouter du contenu

### Ajouter un article de blog

1. Ouvrir `app/data/blog.ts`
2. Copier un article existant
3. Modifier toutes les valeurs (slug, titre, contenu, etc.)
4. Le `slug` doit être unique et en minuscules avec des tirets : `"mon-nouvel-article"`
5. Ajouter l'image de couverture dans `public/images/blog/`
6. Sauvegarder → l'article apparaît automatiquement sur `/blog`

### Ajouter un cas client

1. Ouvrir `app/data/cas-clients.ts`
2. Copier un cas existant et modifier les valeurs
3. Le `slug` doit être unique
4. Ajouter les images dans `public/images/cas-clients/`
5. Sauvegarder → le cas apparaît automatiquement sur `/cas-clients`

### Ajouter une nouvelle page

1. Créer un dossier dans `app/` avec le nom de la page (ex: `app/ma-nouvelle-page/`)
2. Créer un fichier `page.tsx` dans ce dossier
3. Voici un template minimal à copier-coller :

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Titre de la page — Darwin Agency",
  description: "Description de la page pour Google (max 160 caractères)",
};

export default function MaNouvellePage() {
  return (
    <div>
      <h1>Titre de la page</h1>
      <p>Contenu...</p>
    </div>
  );
}
```

4. La page est accessible à l'URL `/ma-nouvelle-page`

### Ajouter une image

1. Copier l'image dans le dossier `public/images/` approprié
2. Format recommandé : `.jpg` ou `.webp` (plus léger)
3. Nommage : minuscules avec tirets, ex : `mon-image.jpg`
4. Utiliser l'image dans le code :

```tsx
import Image from "next/image";

<Image
  src="/images/mon-image.jpg"
  alt="Description de l'image"
  width={800}
  height={600}
/>
```

---

## 9. Les composants réutilisables

Tous les composants sont dans `app/components/`. Ils s'utilisent en les important :

```tsx
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
```

| Composant | Fichier | Rôle |
|---|---|---|
| `Header` | `Header.tsx` | Barre de navigation en haut |
| `Footer` | `Footer.tsx` | Pied de page |
| `HeroSection` | `HeroSection.tsx` | Grande section d'accroche (page d'accueil) |
| `PageHero` | `PageHero.tsx` | En-tête de page (autres pages) |
| `ArticleCard` | `ArticleCard.tsx` | Carte d'aperçu d'un article de blog |
| `CasClientsGrid` | `CasClientsGrid.tsx` | Grille des études de cas |
| `BesoinsAccordion` | `BesoinsAccordion.tsx` | Section accordéon (FAQ / besoins) |
| `ContactForm` | `ContactForm.jsx` | Formulaire de contact |
| `PerformanceSlider` | `PerformanceSlider.tsx` | Slider de métriques |

> **Règle importante :** Le `Header` et le `Footer` sont déjà inclus dans `app/layout.tsx`.
> Ne pas les rajouter dans les pages individuelles.

---

## 10. Déploiement

### Comment ça fonctionne

```
Modification du code
        ↓
git add + git commit + git push
        ↓
GitHub reçoit le code
        ↓
Vercel détecte le push automatiquement
        ↓
Vercel build et déploie (1-3 minutes)
        ↓
Le site en production est mis à jour ✅
```

### Commandes pour déployer

```bash
# 1. Voir les fichiers modifiés
git status

# 2. Ajouter tous les fichiers modifiés
git add .

# 3. Enregistrer les modifications avec un message descriptif
git commit -m "Description claire de ce qui a été modifié"

# 4. Envoyer vers GitHub → Vercel déploie automatiquement
git push
```

### Vérifier le déploiement

- Aller sur https://vercel.com → se connecter → ouvrir le projet darwin-agency
- L'onglet **Deployments** montre l'état de chaque déploiement
- Une coche verte ✅ = déploiement réussi
- Une croix rouge ❌ = erreur (cliquer pour voir les logs)

### Tester avant de déployer

Avant chaque push, vérifier que le site tourne correctement en local :

```bash
# Lancer le serveur local
npm run dev

# Optionnel : vérifier qu'il n'y a pas d'erreurs TypeScript
npm run build
```

> ⚠️ Si `npm run build` échoue, corriger les erreurs avant de pusher.
> Un push avec une erreur peut casser le site en production.

---

## 11. SEO et bonnes pratiques

### Metadata (titre + description)

Chaque page doit avoir ses propres métadonnées pour Google.
Elles sont définies en haut de chaque `page.tsx` :

```tsx
export const metadata: Metadata = {
  title: "Titre de la page — Darwin Agency",          // max 60 caractères
  description: "Description pour Google.",             // max 160 caractères
  alternates: { canonical: "/url-de-la-page" },       // URL canonique
};
```

### Images Open Graph

Pour les réseaux sociaux (partage LinkedIn, Twitter…), chaque page importante devrait avoir une image OG. L'image par défaut est `public/images/og-default.jpg`.

### Robots

Le fichier `public/robots.txt` contrôle l'indexation par Google.
Le sitemap est généré automatiquement par `app/sitemap.ts`.

### JSON-LD (données structurées)

Les données structurées Schema.org sont gérées dans `app/lib/jsonld.ts`.
Elles permettent à Google de mieux comprendre le contenu du site.

---

## 12. En cas de problème

### Le site ne s'affiche pas en local

```bash
# Vérifier que les dépendances sont installées
npm install

# Relancer le serveur
npm run dev
```

### Une page affiche une erreur

1. Regarder le message d'erreur dans le terminal (où tourne `npm run dev`)
2. Regarder la console du navigateur (`F12` → onglet Console)
3. L'erreur indique généralement le fichier et la ligne concernée

### Le déploiement Vercel échoue

1. Aller sur https://vercel.com → le projet → onglet Deployments
2. Cliquer sur le déploiement en échec
3. Lire les logs pour trouver l'erreur
4. Corriger le problème en local, tester avec `npm run build`, puis re-pusher

### Tester le build en local comme Vercel le ferait

```bash
npm run build
npm run start
# Ouvrir http://localhost:3000
```

### Commandes Git utiles

```bash
# Voir l'historique des commits
git log --oneline

# Revenir à la version précédente d'un fichier (sans committer)
git checkout -- app/page.tsx

# Voir les différences avant de committer
git diff

# Annuler le dernier commit (garde les modifications)
git reset --soft HEAD~1
```

---

## Informations supplémentaires

- **CHANGELOG.md** → historique détaillé de toutes les modifications apportées au site
- **AGENTS.md** → instructions pour l'outil Claude AI (si utilisé pour développer)
- **Polices utilisées** : Anton (titres) + Source Sans 3 (texte) — chargées depuis Google Fonts via Next.js
- **Couleurs principales** : définies dans `app/globals.css`
- **Sécurité** : headers HTTP configurés dans `next.config.ts` (X-Frame-Options, etc.)

---

*Documentation rédigée en avril 2026.*
*Pour toute question sur le projet, se référer à l'historique Git ou au CHANGELOG.*
