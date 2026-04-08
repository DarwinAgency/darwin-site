#!/usr/bin/env node
/**
 * Génère la documentation de reprise du projet darwin-agency au format DOCX.
 * Usage : node scripts/generate-handover.js
 */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, LevelFormat, BorderStyle, WidthType,
  ShadingType, VerticalAlign, ExternalHyperlink, PageBreak, Header, Footer,
  PageNumber,
} = require('docx');
const fs = require('fs');
const path = require('path');

// ─── COULEURS ────────────────────────────────────────────────────────────────
const NAVY   = '1B2E5E';   // Bleu Darwin Agency (titres)
const ACCENT = '2C6FD4';   // Bleu clair (liens, badges)
const BG_H1  = 'EAF0FB';   // Fond titres de section
const BG_TH  = 'D5E4F7';   // Fond en-têtes tableau
const BG_ALT = 'F4F7FD';   // Fond alternance tableau
const BG_CODE= 'F0F0F0';   // Fond blocs code
const BLACK  = '1A1A1A';
const GRAY   = '555555';
const WHITE  = 'FFFFFF';

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: 'C8D8EE' };
const borders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    shading: { fill: BG_H1, type: ShadingType.CLEAR },
    indent: { left: 200 },
    children: [new TextRun({ text, font: 'Arial', size: 32, bold: true, color: NAVY })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 4 } },
    children: [new TextRun({ text, font: 'Arial', size: 26, bold: true, color: NAVY })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 240, after: 80 },
    children: [new TextRun({ text, font: 'Arial', size: 22, bold: true, color: ACCENT })],
  });
}

function para(runs, spacing = { before: 80, after: 80 }) {
  const children = Array.isArray(runs) ? runs : [new TextRun({ text: runs, font: 'Arial', size: 20, color: BLACK })];
  return new Paragraph({ children, spacing });
}

function txt(text, opts = {}) {
  return new TextRun({ text, font: 'Arial', size: 20, color: BLACK, ...opts });
}

function bold(text, color = BLACK) {
  return new TextRun({ text, font: 'Arial', size: 20, bold: true, color });
}

function link(text, url) {
  return new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text, font: 'Arial', size: 20, color: ACCENT, underline: {} })],
  });
}

function code(text) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    indent: { left: 360 },
    shading: { fill: BG_CODE, type: ShadingType.CLEAR },
    children: [new TextRun({ text, font: 'Courier New', size: 18, color: '2D2D2D' })],
  });
}

function bullet(runs, level = 0) {
  const children = typeof runs === 'string'
    ? [new TextRun({ text: runs, font: 'Arial', size: 20, color: BLACK })]
    : runs;
  return new Paragraph({
    numbering: { reference: 'bullets', level },
    spacing: { before: 60, after: 60 },
    children,
  });
}

function numbered(runs, level = 0) {
  const children = typeof runs === 'string'
    ? [new TextRun({ text: runs, font: 'Arial', size: 20, color: BLACK })]
    : runs;
  return new Paragraph({
    numbering: { reference: 'numbers', level },
    spacing: { before: 60, after: 60 },
    children,
  });
}

function spacer(lines = 1) {
  return new Paragraph({ children: [new TextRun('')], spacing: { before: lines * 80, after: 0 } });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function infoBox(text, bgColor = BG_H1) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    borders: { ...noBorders, left: { style: BorderStyle.SINGLE, size: 12, color: ACCENT } },
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: 9360, type: WidthType.DXA },
        borders: noBorders,
        shading: { fill: bgColor, type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 200, right: 200 },
        children: [new Paragraph({
          children: [new TextRun({ text, font: 'Arial', size: 20, color: '2D4A8A', italics: true })],
        })],
      })],
    })],
  });
}

function tableRow(cells, isHeader = false) {
  return new TableRow({
    tableHeader: isHeader,
    children: cells.map((cell, i) => new TableCell({
      width: { size: cell.width || 2340, type: WidthType.DXA },
      borders,
      shading: { fill: isHeader ? BG_TH : (i === 0 ? BG_ALT : WHITE), type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 140, right: 140 },
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({
        children: [new TextRun({
          text: cell.text || cell,
          font: 'Arial',
          size: 19,
          bold: isHeader || (typeof cell === 'object' && cell.bold),
          color: isHeader ? NAVY : BLACK,
        })],
      })],
    })),
  });
}

// ─── DOCUMENT ────────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }, {
          level: 1, format: LevelFormat.BULLET, text: '\u25E6', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } },
        }],
      },
      {
        reference: 'numbers',
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  styles: {
    default: {
      document: { run: { font: 'Arial', size: 20, color: BLACK } },
    },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: 'Arial', size: 32, bold: true, color: NAVY },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 },
      },
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: 'Arial', size: 26, bold: true, color: NAVY },
        paragraph: { spacing: { before: 320, after: 120 }, outlineLevel: 1 },
      },
      {
        id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: 'Arial', size: 22, bold: true, color: ACCENT },
        paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 2 },
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 }, // 2cm
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 4 } },
          children: [
            new TextRun({ text: 'Darwin Agency — Documentation de reprise du projet', font: 'Arial', size: 18, color: GRAY }),
          ],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 4 } },
          children: [
            new TextRun({ text: 'Page ', font: 'Arial', size: 18, color: GRAY }),
            new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 18, color: GRAY }),
            new TextRun({ text: ' / ', font: 'Arial', size: 18, color: GRAY }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: 'Arial', size: 18, color: GRAY }),
          ],
        })],
      }),
    },

    children: [

      // ══════════════════════════════════════════════════════════════
      // PAGE DE GARDE
      // ══════════════════════════════════════════════════════════════
      new Paragraph({
        spacing: { before: 1200, after: 400 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'DARWIN AGENCY', font: 'Arial', size: 52, bold: true, color: NAVY })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 200 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'Documentation de reprise du projet', font: 'Arial', size: 32, color: ACCENT })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 800 },
        alignment: AlignmentType.CENTER,
        border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 8 } },
        children: [new TextRun({ text: 'Site vitrine darwin-agency.fr', font: 'Arial', size: 24, italics: true, color: GRAY })],
      }),
      spacer(2),
      new Paragraph({
        spacing: { before: 0, after: 120 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'Ce document contient toutes les informations pour', font: 'Arial', size: 22, color: BLACK })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 120 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'reprendre, modifier et déployer le site web de l\'agence.', font: 'Arial', size: 22, color: BLACK })],
      }),
      spacer(2),
      new Paragraph({
        spacing: { before: 0, after: 120 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'Rédigé en avril 2026', font: 'Arial', size: 19, color: GRAY, italics: true })],
      }),
      pageBreak(),

      // ══════════════════════════════════════════════════════════════
      // PARTIE 1 — INSTALLATION DE L'ENVIRONNEMENT
      // ══════════════════════════════════════════════════════════════
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: 'PARTIE 1', font: 'Arial', size: 22, bold: true, color: ACCENT })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 400 },
        children: [new TextRun({ text: 'Installation de l\'environnement de travail', font: 'Arial', size: 36, bold: true, color: NAVY })],
      }),
      para([
        txt('Ce chapitre explique comment installer, de A à Z, tout ce dont vous avez besoin pour travailler sur le site. Suivez les étapes dans l\'ordre indiqué.'),
      ]),
      spacer(),

      // Récapitulatif des outils
      h2('Vue d\'ensemble des outils à installer'),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [500, 2500, 3000, 3638],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              { text: '#', width: 500 },
              { text: 'Outil', width: 2500 },
              { text: 'Rôle', width: 3000 },
              { text: 'Site de téléchargement', width: 3638 },
            ].map((c, i) => new TableCell({
              width: { size: c.width, type: WidthType.DXA },
              borders, shading: { fill: BG_TH, type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 140, right: 140 },
              children: [new Paragraph({ children: [bold(c.text, NAVY)] })],
            })),
          }),
          ...[
            ['1', 'Claude Code', 'IA pour écrire et modifier le code', 'claude.ai/download'],
            ['2', 'Node.js v20+', 'Faire tourner le site en local', 'nodejs.org'],
            ['3', 'Git', 'Sauvegarder et envoyer le code', 'git-scm.com'],
            ['4', 'Visual Studio Code', 'Éditeur de code (interface graphique)', 'code.visualstudio.com'],
            ['5', 'Compte GitHub', 'Héberger le code en ligne', 'github.com'],
            ['6', 'Compte Vercel', 'Déployer le site en production', 'vercel.com'],
          ].map(([num, tool, role, site], ri) =>
            new TableRow({
              children: [num, tool, role, site].map((text, ci) => new TableCell({
                width: { size: [500, 2500, 3000, 3638][ci], type: WidthType.DXA },
                borders,
                shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 140, right: 140 },
                children: [new Paragraph({
                  children: [new TextRun({ text, font: 'Arial', size: 19, bold: ci === 1, color: BLACK })],
                })],
              })),
            })
          ),
        ],
      }),
      spacer(2),

      // ─── ÉTAPE 1 : CLAUDE CODE ─────────────────────────────────
      h1('Étape 1 — Installer Claude Code'),
      spacer(),
      infoBox('Claude Code est un assistant IA qui s\'intègre dans votre terminal ou dans VS Code. Il vous aide à écrire du code, corriger des erreurs et modifier le site — sans avoir besoin de tout comprendre techniquement.'),
      spacer(),

      h2('1.1 — Créer un compte Anthropic'),
      numbered('Aller sur ', 0),
      // Can't easily mix link + text in numbered, so use bullet workaround
      bullet([link('https://claude.ai', 'https://claude.ai')]),
      bullet('Cliquer sur "Sign up" (S\'inscrire)'),
      bullet('Créer un compte avec votre adresse e-mail professionnelle'),
      bullet('Valider votre adresse e-mail'),
      spacer(),

      h2('1.2 — Télécharger Claude Code (application desktop)'),
      numbered('Aller sur ', 0),
      bullet([link('https://claude.ai/download', 'https://claude.ai/download')]),
      bullet('Télécharger la version macOS (fichier .dmg)'),
      bullet('Ouvrir le fichier téléchargé'),
      bullet('Faire glisser l\'icône Claude dans le dossier Applications'),
      bullet('Lancer Claude depuis le dossier Applications ou via Spotlight (Cmd + Espace → taper "Claude")'),
      spacer(),

      h2('1.3 — Installer Claude Code dans le Terminal'),
      para([txt('Claude Code peut également s\'utiliser directement dans le terminal. Pour l\'installer :')]),
      spacer(),
      code('npm install -g @anthropic-ai/claude-code'),
      spacer(),
      para([txt('Puis se connecter avec la commande :')]),
      code('claude'),
      spacer(),
      para([txt('Suivre les instructions pour s\'authentifier avec votre compte Anthropic.')]),
      spacer(),

      h2('1.4 — Choisir un abonnement'),
      para([txt('Claude Code nécessite un abonnement payant pour une utilisation professionnelle :')]),
      spacer(),
      bullet([bold('Claude Pro (20$/mois)'), txt(' — pour un usage personnel, suffisant pour maintenir ce site')]),
      bullet([bold('Claude Max (100$/mois)'), txt(' — pour un usage intensif et des projets plus complexes')]),
      spacer(),
      infoBox('Conseil : Commencer par Claude Pro. Vous pouvez passer à Max si vous en avez besoin.'),
      spacer(),
      pageBreak(),

      // ─── ÉTAPE 2 : NODE.JS ────────────────────────────────────
      h1('Étape 2 — Installer Node.js'),
      spacer(),
      infoBox('Node.js est le moteur qui fait tourner le site sur votre ordinateur. Il est indispensable pour développer et tester le site avant de le mettre en ligne.'),
      spacer(),

      h2('2.1 — Télécharger Node.js'),
      numbered('Aller sur ', 0),
      bullet([link('https://nodejs.org', 'https://nodejs.org')]),
      bullet('Cliquer sur le bouton vert "LTS" (version recommandée — Long Term Support)'),
      bullet('Télécharger le fichier .pkg pour macOS'),
      bullet('Ouvrir le fichier et suivre les étapes d\'installation (cliquer "Suivant" jusqu\'à la fin)'),
      spacer(),

      h2('2.2 — Vérifier l\'installation'),
      para([txt('Ouvrir le Terminal (Applications → Utilitaires → Terminal) et taper :')]),
      code('node -v'),
      para([txt('Vous devriez voir un numéro de version, par exemple : '), bold('v20.17.0')]),
      code('npm -v'),
      para([txt('Vous devriez voir un numéro de version npm, par exemple : '), bold('10.8.0')]),
      spacer(),
      infoBox('Si vous voyez un numéro de version, Node.js est correctement installé. Sinon, recommencer l\'installation.'),
      spacer(),
      pageBreak(),

      // ─── ÉTAPE 3 : GIT ─────────────────────────────────────────
      h1('Étape 3 — Installer Git'),
      spacer(),
      infoBox('Git est l\'outil qui permet de sauvegarder les modifications du code et de les envoyer sur GitHub pour déclencher un déploiement automatique.'),
      spacer(),

      h2('3.1 — Installation sur Mac'),
      para([txt('Sur Mac, Git s\'installe avec les outils développeurs Apple. Dans le Terminal :')]),
      code('xcode-select --install'),
      para([txt('Une fenêtre s\'ouvre. Cliquer sur "Installer" et attendre la fin (environ 5 minutes).')]),
      spacer(),

      h2('3.2 — Vérifier l\'installation'),
      code('git --version'),
      para([txt('Vous devriez voir : '), bold('git version 2.x.x')]),
      spacer(),

      h2('3.3 — Configurer votre identité Git'),
      para([txt('Git a besoin de savoir qui vous êtes pour enregistrer vos modifications :')]),
      code('git config --global user.name "Votre Prénom Nom"'),
      code('git config --global user.email "votre.email@darwin-agency.fr"'),
      spacer(),
      infoBox('Remplacer "Votre Prénom Nom" et "votre.email@darwin-agency.fr" par vos vraies informations.'),
      spacer(),
      pageBreak(),

      // ─── ÉTAPE 4 : VS CODE ─────────────────────────────────────
      h1('Étape 4 — Installer Visual Studio Code'),
      spacer(),
      infoBox('VS Code est l\'éditeur de code dans lequel vous allez travailler. C\'est une interface graphique qui vous permet de voir et modifier les fichiers du projet facilement.'),
      spacer(),

      h2('4.1 — Télécharger VS Code'),
      numbered('Aller sur ', 0),
      bullet([link('https://code.visualstudio.com', 'https://code.visualstudio.com')]),
      bullet('Cliquer sur le bouton bleu "Download for Mac"'),
      bullet('Décompresser le fichier téléchargé (double-clic)'),
      bullet('Glisser l\'icône "Visual Studio Code" dans le dossier Applications'),
      bullet('Lancer VS Code depuis Applications'),
      spacer(),

      h2('4.2 — Installer les extensions recommandées'),
      para([txt('Dans VS Code, cliquer sur l\'icône Extensions dans la barre latérale gauche (4 carrés), puis rechercher et installer :')]),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [3500, 6138],
        rows: [
          new TableRow({ tableHeader: true, children: ['Extension', 'Utilité'].map((t, i) => new TableCell({
            width: { size: [3500, 6138][i], type: WidthType.DXA }, borders,
            shading: { fill: BG_TH, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [bold(t, NAVY)] })],
          })) }),
          ...([
            ['Tailwind CSS IntelliSense', 'Autocomplétion pour les classes Tailwind CSS'],
            ['ESLint', 'Signale les erreurs dans le code en temps réel'],
            ['Prettier', 'Formate le code automatiquement'],
            ['GitLens', 'Visualiser l\'historique Git dans VS Code'],
            ['Claude Code (extension)', 'Intégrer Claude directement dans VS Code'],
          ]).map(([ext, util], ri) => new TableRow({ children: [ext, util].map((t, ci) => new TableCell({
            width: { size: [3500, 6138][ci], type: WidthType.DXA }, borders,
            shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [new TextRun({ text: t, font: 'Arial', size: 19, bold: ci === 0, color: BLACK })] })],
          })) })),
        ],
      }),
      spacer(2),

      h2('4.3 — Ouvrir le projet dans VS Code'),
      numbered('Dans VS Code, aller dans : Fichier → Ouvrir un dossier (File → Open Folder)', 0),
      numbered('Naviguer vers : Documents → Site Internet Darwin → darwin-agency', 0),
      numbered('Cliquer sur "Ouvrir"', 0),
      numbered('Tous les fichiers du site apparaissent dans la barre latérale gauche', 0),
      spacer(),
      pageBreak(),

      // ─── ÉTAPE 5 : GITHUB ──────────────────────────────────────
      h1('Étape 5 — Configurer GitHub'),
      spacer(),

      h2('5.1 — Créer ou récupérer un compte GitHub'),
      bullet([txt('Si vous n\'avez pas de compte : aller sur '), link('https://github.com', 'https://github.com'), txt(' et créer un compte')]),
      bullet('Si un compte existe déjà : demander à en être ajouté comme collaborateur'),
      spacer(),

      h2('5.2 — Obtenir l\'accès au dépôt du site'),
      bullet([txt('URL du dépôt : '), link('https://github.com/DarwinAgency/darwin-site', 'https://github.com/DarwinAgency/darwin-site')]),
      bullet('Demander à l\'administrateur du compte GitHub de vous ajouter comme collaborateur avec accès "Write"'),
      bullet('Vous recevrez une invitation par e-mail — l\'accepter'),
      spacer(),

      h2('5.3 — Cloner le projet sur votre ordinateur'),
      para([txt('Dans le Terminal, exécuter ces commandes dans l\'ordre :')]),
      code('cd ~/Documents'),
      code('mkdir "Site Internet Darwin"'),
      code('cd "Site Internet Darwin"'),
      code('git clone https://github.com/DarwinAgency/darwin-site.git darwin-agency'),
      code('cd darwin-agency'),
      code('npm install'),
      spacer(),
      infoBox('npm install peut prendre 2-3 minutes la première fois. C\'est normal, il télécharge toutes les dépendances du projet.'),
      spacer(),
      pageBreak(),

      // ─── ÉTAPE 6 : VERCEL ──────────────────────────────────────
      h1('Étape 6 — Configurer Vercel'),
      spacer(),
      infoBox('Vercel est la plateforme qui héberge le site en ligne. Elle est connectée à GitHub : chaque fois que vous envoyez du code sur GitHub, Vercel met à jour le site automatiquement.'),
      spacer(),

      h2('6.1 — Créer ou récupérer un compte Vercel'),
      numbered([txt('Aller sur '), link('https://vercel.com', 'https://vercel.com')], 0),
      numbered('Cliquer sur "Sign Up" et choisir "Continue with GitHub" (recommandé)', 0),
      numbered('Autoriser Vercel à accéder à votre GitHub', 0),
      spacer(),

      h2('6.2 — Obtenir l\'accès au projet'),
      bullet('Le projet Vercel est lié au compte de l\'agence'),
      bullet('Demander un accès en tant que membre de l\'équipe Vercel'),
      bullet('Une fois connecté, le projet darwin-agency apparaît dans votre tableau de bord'),
      spacer(),

      h2('6.3 — Vérifier que le déploiement automatique fonctionne'),
      numbered('Dans Vercel, ouvrir le projet darwin-agency', 0),
      numbered('Aller dans l\'onglet "Deployments"', 0),
      numbered('Vérifier qu\'il y a des déploiements avec une coche verte', 0),
      numbered('Faire un test : modifier un fichier, le committer et le pusher → un nouveau déploiement doit apparaître', 0),
      spacer(),
      pageBreak(),

      // ══════════════════════════════════════════════════════════════
      // PARTIE 2 — UTILISER CLAUDE CODE
      // ══════════════════════════════════════════════════════════════
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: 'PARTIE 2', font: 'Arial', size: 22, bold: true, color: ACCENT })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 400 },
        children: [new TextRun({ text: 'Comment utiliser Claude Code', font: 'Arial', size: 36, bold: true, color: NAVY })],
      }),
      para([
        txt('Claude Code est votre principal outil de développement. Il comprend vos demandes en langage naturel (en français) et génère ou modifie le code à votre place.'),
      ]),
      spacer(),

      // ─── QU'EST-CE QUE CLAUDE CODE ─────────────────────────────
      h1('Qu\'est-ce que Claude Code ?'),
      spacer(),
      para([txt('Claude Code est un assistant IA développé par Anthropic. Dans le contexte de ce projet, il peut :')]),
      spacer(),
      bullet('Modifier le texte d\'une page existante'),
      bullet('Créer une nouvelle page complète'),
      bullet('Ajouter un nouvel article de blog ou cas client'),
      bullet('Corriger des erreurs d\'affichage ou de code'),
      bullet('Expliquer ce que fait un fichier ou une ligne de code'),
      bullet('Ajouter un nouveau composant visuel (section, formulaire, carousel…)'),
      bullet('Optimiser le SEO d\'une page'),
      spacer(),
      infoBox('Claude Code voit tous les fichiers du projet. Il comprend le contexte du site et peut travailler directement sur les bons fichiers sans que vous ayez à les chercher.'),
      spacer(),

      // ─── COMMENT OUVRIR CLAUDE CODE ────────────────────────────
      h1('Comment ouvrir Claude Code'),
      spacer(),

      h2('Option A — Dans le Terminal (recommandé)'),
      numbered('Ouvrir le Terminal (Cmd + Espace → "Terminal")', 0),
      numbered([txt('Se placer dans le dossier du projet :')], 0),
      code('cd ~/Documents/\\"Site Internet Darwin\\"/darwin-agency'),
      numbered('Lancer Claude Code :', 0),
      code('claude'),
      numbered('Claude s\'ouvre et lit automatiquement votre projet', 0),
      spacer(),

      h2('Option B — Dans VS Code (extension)'),
      numbered('Ouvrir VS Code avec le projet darwin-agency', 0),
      numbered('Appuyer sur Cmd + Shift + P', 0),
      numbered('Taper "Claude" dans la barre de recherche', 0),
      numbered('Sélectionner "Claude: Open Chat"', 0),
      numbered('Un panneau Claude s\'ouvre sur le côté', 0),
      spacer(),
      pageBreak(),

      // ─── COMMENT PROMPTER CLAUDE ────────────────────────────────
      h1('Comment formuler une demande à Claude (prompting)'),
      spacer(),
      infoBox('Un "prompt" est la demande que vous formulez à Claude. Plus votre demande est précise et contextuelle, meilleur sera le résultat.'),
      spacer(),

      h2('Les 4 principes d\'un bon prompt'),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [2000, 7638],
        rows: [
          new TableRow({ tableHeader: true, children: ['Principe', 'Explication'].map((t, i) => new TableCell({
            width: { size: [2000, 7638][i], type: WidthType.DXA }, borders,
            shading: { fill: BG_TH, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [bold(t, NAVY)] })],
          })) }),
          ...([
            ['1. Contexte', 'Expliquez ce que vous voulez faire et pourquoi. Claude comprend mieux avec un contexte.'],
            ['2. Précision', 'Donnez le nom du fichier ou de la section concernée quand vous le connaissez.'],
            ['3. Exemples', 'Si vous avez un exemple visuel ou textuel de ce que vous voulez, partagez-le.'],
            ['4. Validation', 'Demandez à Claude d\'expliquer ce qu\'il va faire avant de le faire, si la demande est complexe.'],
          ]).map(([principe, explication], ri) => new TableRow({ children: [principe, explication].map((t, ci) => new TableCell({
            width: { size: [2000, 7638][ci], type: WidthType.DXA }, borders,
            shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [new TextRun({ text: t, font: 'Arial', size: 19, bold: ci === 0, color: BLACK })] })],
          })) })),
        ],
      }),
      spacer(2),

      h2('Exemples de prompts efficaces'),
      spacer(),

      h3('Modifier du texte'),
      infoBox('Sur la page d\'accueil, dans la section "Nos expertises", remplace le texte du bouton "En savoir plus" par "Découvrir notre approche".', BG_ALT),
      spacer(),

      h3('Ajouter un article de blog'),
      infoBox('Ajoute un nouvel article de blog dans app/data/blog.ts avec les informations suivantes :\n- Titre : "Comment le SEO local booste votre visibilité en 2026"\n- Catégorie : SEO\n- Auteur : Marie Dupont\n- Date : 2026-04-15\n- Résumé : [coller votre résumé]\n- Contenu : [coller votre contenu]', BG_ALT),
      spacer(),

      h3('Créer une nouvelle page'),
      infoBox('Crée une nouvelle page "Nos tarifs" à l\'URL /tarifs. Elle doit avoir le même style que les autres pages du site (header, footer, couleurs). La page doit contenir 3 offres : Starter, Pro et Premium, avec un design en 3 colonnes.', BG_ALT),
      spacer(),

      h3('Corriger une erreur'),
      infoBox('Le menu de navigation n\'affiche pas le lien "Blog" sur mobile. Regarde dans app/components/Header.tsx et corrige le problème.', BG_ALT),
      spacer(),

      h3('Déployer le site'),
      infoBox('Les fichiers que j\'ai modifiés sont prêts. Crée un commit avec un message descriptif et déploie sur GitHub.', BG_ALT),
      spacer(),
      pageBreak(),

      h2('Prompts à éviter — et comment les améliorer'),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [4500, 5138],
        rows: [
          new TableRow({ tableHeader: true, children: ['❌ Prompt vague', '✅ Prompt amélioré'].map((t, i) => new TableCell({
            width: { size: [4500, 5138][i], type: WidthType.DXA }, borders,
            shading: { fill: BG_TH, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [bold(t, NAVY)] })],
          })) }),
          ...([
            ['Modifie le site', 'Sur la page /agence, modifie le titre principal pour mettre "Notre histoire" à la place de "À propos"'],
            ['Ajoute un article', 'Ajoute l\'article suivant dans blog.ts : [titre], [catégorie], [date], [contenu complet]'],
            ['Répare l\'erreur', 'La page /contact affiche une erreur "TypeError: cannot read property..." dans la console. Regarde et corrige.'],
            ['Fais quelque chose de beau', 'Ajoute une section "Témoignages clients" sur la page d\'accueil, avec 3 cartes, dans le style actuel du site.'],
          ]).map(([bad, good], ri) => new TableRow({ children: [bad, good].map((t, ci) => new TableCell({
            width: { size: [4500, 5138][ci], type: WidthType.DXA }, borders,
            shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [new TextRun({ text: t, font: 'Arial', size: 19, italics: ci === 0, color: ci === 0 ? '991111' : '116633' })] })],
          })) })),
        ],
      }),
      spacer(2),

      h2('Ce que Claude peut faire pour vous'),
      bullet('Lire et comprendre tous les fichiers du projet'),
      bullet('Écrire et modifier du code TypeScript, TSX, CSS'),
      bullet('Créer des composants React complets'),
      bullet('Faire des commits Git et déployer'),
      bullet('Expliquer le code existant en français'),
      bullet('Trouver et corriger des bugs'),
      bullet('Optimiser les performances et le SEO'),
      bullet('Créer et mettre en page des articles de blog'),
      spacer(),

      h2('Ce que Claude ne peut pas faire'),
      bullet('Accéder à internet pour chercher des informations en temps réel (sauf si vous lui donnez une URL)'),
      bullet('Modifier directement les fichiers sur Vercel ou GitHub sans passer par Git'),
      bullet('Vous connecter à votre place sur des services tiers'),
      bullet('Gérer les paiements ou les contrats clients'),
      spacer(),
      pageBreak(),

      h2('Workflow quotidien recommandé avec Claude'),
      spacer(),
      infoBox('Voici comment travailler efficacement au quotidien avec Claude sur ce projet.'),
      spacer(),
      numbered('Ouvrir le Terminal dans le dossier darwin-agency', 0),
      numbered('Lancer Claude : claude', 0),
      numbered([bold('Décrire précisément '), txt('ce que vous voulez faire')], 0),
      numbered('Claude propose les modifications → les valider ou demander des ajustements', 0),
      numbered('Vérifier le résultat sur http://localhost:3000 (lancer npm run dev dans un autre Terminal)', 0),
      numbered('Demander à Claude de faire le commit et le push quand vous êtes satisfait', 0),
      numbered('Vérifier le déploiement sur https://vercel.com (1-3 minutes)', 0),
      spacer(2),
      pageBreak(),

      // ══════════════════════════════════════════════════════════════
      // PARTIE 3 — REPRENDRE LE PROJET
      // ══════════════════════════════════════════════════════════════
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: 'PARTIE 3', font: 'Arial', size: 22, bold: true, color: ACCENT })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 400 },
        children: [new TextRun({ text: 'Reprendre et maintenir le projet', font: 'Arial', size: 36, bold: true, color: NAVY })],
      }),

      // ─── PRÉSENTATION ──────────────────────────────────────────
      h1('Présentation du projet'),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [3000, 6638],
        rows: [
          ...[
            ['URL en production', 'https://www.darwin-agency.fr'],
            ['Repository GitHub', 'https://github.com/DarwinAgency/darwin-site'],
            ['Déploiement', 'Vercel — automatique à chaque git push'],
            ['Framework', 'Next.js 16 (App Router)'],
            ['Langage', 'TypeScript + React 19'],
            ['Style', 'Tailwind CSS v4'],
            ['Polices', 'Anton (titres) + Source Sans 3 (texte)'],
          ].map(([key, val], ri) => new TableRow({
            children: [key, val].map((t, ci) => new TableCell({
              width: { size: [3000, 6638][ci], type: WidthType.DXA }, borders,
              shading: { fill: ci === 0 ? BG_ALT : WHITE, type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 140, right: 140 },
              children: [new Paragraph({ children: [new TextRun({ text: t, font: 'Arial', size: 19, bold: ci === 0, color: BLACK })] })],
            })),
          })),
        ],
      }),
      spacer(2),

      para([txt('Le site contient :')]),
      bullet('Une page d\'accueil avec présentation de l\'agence'),
      bullet('Une page Agence (équipe, valeurs)'),
      bullet('Des pages Expertises (SEO, audit SEO…)'),
      bullet('Un Blog avec articles dynamiques'),
      bullet('Des Cas clients (études de cas dynamiques)'),
      bullet('Une page Contact avec formulaire'),
      bullet('Une page À propos'),
      spacer(),
      pageBreak(),

      // ─── ACCÈS ET COMPTES ──────────────────────────────────────
      h1('Accès et comptes à récupérer'),
      spacer(),
      infoBox('Pour reprendre le projet, il faut obtenir l\'accès à ces 3 services. Contacter la personne responsable pour chacun.'),
      spacer(),

      h2('GitHub'),
      bullet([bold('URL du dépôt : '), link('https://github.com/DarwinAgency/darwin-site', 'https://github.com/DarwinAgency/darwin-site')]),
      bullet('Rôle : héberge le code source du site'),
      bullet('Action : demander un accès collaborateur avec droits "Write" (ou se faire transférer le repo)'),
      spacer(),

      h2('Vercel'),
      bullet([bold('URL : '), link('https://vercel.com', 'https://vercel.com')]),
      bullet('Rôle : déploie et héberge le site en production'),
      bullet('Le projet Vercel est connecté au repo GitHub'),
      bullet('Action : demander un accès à l\'organisation ou au projet existant'),
      spacer(),

      h2('Nom de domaine darwin-agency.fr'),
      bullet('Le domaine est configuré dans Vercel'),
      bullet('Vérifier auprès du bureau d\'enregistrement (registrar) qui gère le domaine'),
      bullet('S\'assurer de récupérer les accès DNS si nécessaire'),
      spacer(),
      pageBreak(),

      // ─── STRUCTURE DU PROJET ────────────────────────────────────
      h1('Structure du projet'),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [3500, 6138],
        rows: [
          new TableRow({ tableHeader: true, children: ['Dossier / Fichier', 'Contenu'].map((t, i) => new TableCell({
            width: { size: [3500, 6138][i], type: WidthType.DXA }, borders,
            shading: { fill: BG_TH, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [bold(t, NAVY)] })],
          })) }),
          ...([
            ['app/', 'Tout le code du site est ici'],
            ['app/components/', 'Composants réutilisables (Header, Footer, etc.)'],
            ['app/data/', 'Données du site (articles, cas clients, équipe)'],
            ['app/lib/', 'Fonctions utilitaires (SEO, JSON-LD)'],
            ['app/blog/', 'Page liste blog + pages articles dynamiques'],
            ['app/cas-clients/', 'Page liste cas clients + études de cas'],
            ['app/expertises/', 'Pages expertises (SEO, audit SEO…)'],
            ['app/agence/', 'Page présentation agence'],
            ['app/contact/', 'Page contact avec formulaire'],
            ['app/layout.tsx', 'Layout commun à tout le site (header + footer)'],
            ['app/page.tsx', 'Page d\'accueil'],
            ['app/sitemap.ts', 'Sitemap généré automatiquement pour Google'],
            ['public/images/', 'Toutes les photos du site'],
            ['public/logos/', 'Logos clients, certifications, récompenses'],
            ['public/robots.txt', 'Instructions pour les moteurs de recherche'],
            ['next.config.ts', 'Configuration Next.js (headers sécurité, etc.)'],
            ['package.json', 'Dépendances et scripts npm'],
            ['CHANGELOG.md', 'Historique de toutes les modifications'],
          ]).map(([file, desc], ri) => new TableRow({ children: [file, desc].map((t, ci) => new TableCell({
            width: { size: [3500, 6138][ci], type: WidthType.DXA }, borders,
            shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [new TextRun({ text: t, font: ci === 0 ? 'Courier New' : 'Arial', size: 19, bold: false, color: ci === 0 ? '2D4A8A' : BLACK })] })],
          })) })),
        ],
      }),
      spacer(2),
      pageBreak(),

      // ─── PAGES DU SITE ─────────────────────────────────────────
      h1('Les pages du site'),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [2200, 4000, 3438],
        rows: [
          new TableRow({ tableHeader: true, children: ['URL', 'Fichier source', 'Description'].map((t, i) => new TableCell({
            width: { size: [2200, 4000, 3438][i], type: WidthType.DXA }, borders,
            shading: { fill: BG_TH, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [bold(t, NAVY)] })],
          })) }),
          ...([
            ['/', 'app/page.tsx', 'Page d\'accueil'],
            ['/agence', 'app/agence/page.tsx', 'Présentation agence'],
            ['/expertises/seo', 'app/expertises/seo/page.tsx', 'Expertise SEO'],
            ['/expertises/seo/audit-seo', 'app/expertises/seo/audit-seo/page.tsx', 'Page audit SEO'],
            ['/blog', 'app/blog/page.tsx', 'Liste des articles'],
            ['/blog/[slug]', 'app/blog/[slug]/page.tsx', 'Article individuel'],
            ['/cas-clients', 'app/cas-clients/page.tsx', 'Liste cas clients'],
            ['/cas-clients/[slug]', 'app/cas-clients/[slug]/page.tsx', 'Étude de cas'],
            ['/contact', 'app/contact/page.tsx', 'Formulaire de contact'],
            ['/a-propos-de-darwin', 'app/a-propos-de-darwin/page.tsx', 'Page à propos'],
          ]).map(([url, file, desc], ri) => new TableRow({ children: [url, file, desc].map((t, ci) => new TableCell({
            width: { size: [2200, 4000, 3438][ci], type: WidthType.DXA }, borders,
            shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [new TextRun({ text: t, font: ci === 1 ? 'Courier New' : 'Arial', size: 19, color: ci === 1 ? '2D4A8A' : BLACK })] })],
          })) })),
        ],
      }),
      spacer(2),
      pageBreak(),

      // ─── MODIFIER DU CONTENU ────────────────────────────────────
      h1('Comment modifier du contenu'),
      spacer(),

      h2('Modifier le texte d\'une page'),
      numbered('Trouver le fichier dans le tableau ci-dessus', 0),
      numbered('Ouvrir le fichier dans VS Code', 0),
      numbered('Modifier le texte voulu', 0),
      numbered('Sauvegarder (Cmd + S)', 0),
      numbered('Le navigateur se recharge automatiquement si npm run dev est actif', 0),
      spacer(),

      h2('Modifier les articles de blog'),
      para([txt('Les données des articles sont dans '), bold('app/data/blog.ts'), txt('. Chaque article a cette structure :')]),
      spacer(),
      code('slug: "nom-de-l-article"      // URL : /blog/nom-de-l-article'),
      code('title: "Titre de l\'article"'),
      code('excerpt: "Résumé court"'),
      code('date: "2025-01-15"'),
      code('author: "Prénom Nom"'),
      code('category: "SEO"'),
      code('image: "/images/blog/mon-image.jpg"'),
      code('content: `Contenu HTML de l\'article...`'),
      spacer(),

      h2('Modifier les cas clients'),
      para([txt('Les données sont dans '), bold('app/data/cas-clients.ts'), txt('. Même structure que les articles de blog.')]),
      spacer(),

      h2('Modifier l\'équipe'),
      para([txt('Les données de l\'équipe sont dans '), bold('app/data/team.ts'), txt('.')]),
      spacer(),
      pageBreak(),

      // ─── AJOUTER DU CONTENU ─────────────────────────────────────
      h1('Comment ajouter du contenu'),
      spacer(),

      h2('Ajouter un article de blog'),
      numbered([txt('Ouvrir '), bold('app/data/blog.ts')], 0),
      numbered('Copier un article existant (le bloc complet entre accolades { })', 0),
      numbered('Modifier toutes les valeurs (slug unique, titre, contenu, etc.)', 0),
      numbered([txt('Le '), bold('slug'), txt(' doit être unique et en minuscules avec des tirets : "mon-nouvel-article"')], 0),
      numbered([txt('Ajouter l\'image de couverture dans '), bold('public/images/blog/')], 0),
      numbered('Sauvegarder → l\'article apparaît automatiquement sur /blog', 0),
      spacer(),

      h2('Ajouter un cas client'),
      numbered([txt('Ouvrir '), bold('app/data/cas-clients.ts')], 0),
      numbered('Copier un cas existant et modifier les valeurs', 0),
      numbered('Le slug doit être unique', 0),
      numbered([txt('Ajouter les images dans '), bold('public/images/cas-clients/')], 0),
      numbered('Sauvegarder → le cas apparaît automatiquement sur /cas-clients', 0),
      spacer(),

      h2('Ajouter une nouvelle page'),
      numbered([txt('Créer un dossier dans '), bold('app/'), txt(' avec le nom de la page (ex: app/ma-page/)')], 0),
      numbered([txt('Créer un fichier '), bold('page.tsx'), txt(' dans ce dossier')], 0),
      numbered('Utiliser ce template minimal :', 0),
      spacer(),
      code('import type { Metadata } from "next";'),
      code(''),
      code('export const metadata: Metadata = {'),
      code('  title: "Titre — Darwin Agency",    // max 60 caractères'),
      code('  description: "Description Google.", // max 160 caractères'),
      code('};'),
      code(''),
      code('export default function MaPage() {'),
      code('  return ('),
      code('    <div>'),
      code('      <h1>Titre de la page</h1>'),
      code('      <p>Contenu...</p>'),
      code('    </div>'),
      code('  );'),
      code('}'),
      spacer(),
      numbered('La page est accessible à l\'URL /ma-page', 0),
      spacer(),

      h2('Ajouter une image'),
      numbered([txt('Copier l\'image dans '), bold('public/images/'), txt(' (sous-dossier approprié)')], 0),
      numbered('Format recommandé : .jpg ou .webp (plus léger)', 0),
      numbered('Nommage : minuscules avec tirets, ex : mon-image.jpg', 0),
      numbered('Utiliser dans le code avec le composant Image de Next.js', 0),
      spacer(),
      pageBreak(),

      // ─── COMPOSANTS ────────────────────────────────────────────
      h1('Les composants réutilisables'),
      spacer(),
      para([txt('Tous les composants sont dans '), bold('app/components/'), txt('.')]),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [3000, 6638],
        rows: [
          new TableRow({ tableHeader: true, children: ['Composant', 'Rôle'].map((t, i) => new TableCell({
            width: { size: [3000, 6638][i], type: WidthType.DXA }, borders,
            shading: { fill: BG_TH, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [bold(t, NAVY)] })],
          })) }),
          ...([
            ['Header.tsx', 'Barre de navigation en haut de toutes les pages'],
            ['Footer.tsx', 'Pied de page de toutes les pages'],
            ['HeroSection.tsx', 'Grande section d\'accroche de la page d\'accueil'],
            ['PageHero.tsx', 'En-tête de page pour les autres pages'],
            ['ArticleCard.tsx', 'Carte d\'aperçu d\'un article de blog'],
            ['CasClientsGrid.tsx', 'Grille des études de cas clients'],
            ['BesoinsAccordion.tsx', 'Section accordéon (FAQ / besoins)'],
            ['ContactForm.jsx', 'Formulaire de contact'],
            ['PerformanceSlider.tsx', 'Slider de métriques de performance'],
          ]).map(([comp, role], ri) => new TableRow({ children: [comp, role].map((t, ci) => new TableCell({
            width: { size: [3000, 6638][ci], type: WidthType.DXA }, borders,
            shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({ children: [new TextRun({ text: t, font: ci === 0 ? 'Courier New' : 'Arial', size: 19, color: ci === 0 ? '2D4A8A' : BLACK })] })],
          })) })),
        ],
      }),
      spacer(),
      infoBox('Le Header et le Footer sont déjà inclus dans app/layout.tsx. Ne pas les rajouter dans les pages individuelles.'),
      spacer(),
      pageBreak(),

      // ─── DÉPLOIEMENT ───────────────────────────────────────────
      h1('Déploiement'),
      spacer(),

      h2('Comment ça fonctionne'),
      spacer(),
      new Table({
        width: { size: 9638, type: WidthType.DXA },
        columnWidths: [9638],
        rows: [
          ...[
            '1. Modification du code en local',
            '2. git add + git commit + git push',
            '3. GitHub reçoit le code',
            '4. Vercel détecte le push automatiquement',
            '5. Vercel build et déploie (1-3 minutes)',
            '6. Le site en production est mis à jour ✅',
          ].map((step, ri) => new TableRow({ children: [new TableCell({
            width: { size: 9638, type: WidthType.DXA }, borders,
            shading: { fill: ri % 2 === 0 ? WHITE : BG_ALT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 200, right: 200 },
            children: [new Paragraph({ children: [new TextRun({ text: step, font: 'Arial', size: 20, bold: ri === 5, color: ri === 5 ? '116633' : BLACK })] })],
          })] })),
        ],
      }),
      spacer(2),

      h2('Commandes Git pour déployer'),
      code('git status                              # Voir les fichiers modifiés'),
      code('git add .                               # Ajouter tous les fichiers'),
      code('git commit -m "Description du changement"  # Sauvegarder'),
      code('git push                                # Envoyer → déploiement auto'),
      spacer(),

      h2('Vérifier le déploiement'),
      bullet([txt('Aller sur '), link('https://vercel.com', 'https://vercel.com'), txt(' → se connecter → ouvrir le projet darwin-agency')]),
      bullet('L\'onglet Deployments montre l\'état de chaque déploiement'),
      bullet('Coche verte = déploiement réussi'),
      bullet('Croix rouge = erreur (cliquer pour voir les logs)'),
      spacer(),

      h2('Tester avant de déployer'),
      code('npm run dev       # Lancer le serveur local → http://localhost:3000'),
      code('npm run build     # Vérifier qu\'il n\'y a pas d\'erreurs'),
      spacer(),
      infoBox('Si npm run build échoue, corriger les erreurs avant de pusher. Un push avec une erreur peut casser le site en production.'),
      spacer(),
      pageBreak(),

      // ─── SEO ────────────────────────────────────────────────────
      h1('SEO et bonnes pratiques'),
      spacer(),

      h2('Metadata (titre + description)'),
      para([txt('Chaque page doit avoir ses propres métadonnées. Elles sont définies en haut de chaque page.tsx :')]),
      code('export const metadata: Metadata = {'),
      code('  title: "Titre de la page — Darwin Agency",   // max 60 caractères'),
      code('  description: "Description pour Google.",      // max 160 caractères'),
      code('  alternates: { canonical: "/url-de-la-page" },'),
      code('};'),
      spacer(),

      h2('Images Open Graph'),
      para([txt('Pour le partage sur les réseaux sociaux, chaque page importante devrait avoir une image OG.')]),
      bullet([txt('Image par défaut : '), bold('public/images/og-default.jpg')]),
      bullet('Dimensions recommandées : 1200 x 630 px'),
      spacer(),

      h2('Robots et Sitemap'),
      bullet([txt('Le fichier '), bold('public/robots.txt'), txt(' contrôle l\'indexation par Google')]),
      bullet([txt('Le sitemap est généré automatiquement par '), bold('app/sitemap.ts')]),
      bullet([txt('Les données structurées Schema.org sont dans '), bold('app/lib/jsonld.ts')]),
      spacer(),
      pageBreak(),

      // ─── EN CAS DE PROBLÈME ─────────────────────────────────────
      h1('En cas de problème'),
      spacer(),

      h2('Le site ne s\'affiche pas en local'),
      code('npm install    # Réinstaller les dépendances'),
      code('npm run dev    # Relancer le serveur'),
      spacer(),

      h2('Une page affiche une erreur'),
      numbered('Regarder le message d\'erreur dans le terminal (où tourne npm run dev)', 0),
      numbered('Regarder la console du navigateur (F12 → onglet Console)', 0),
      numbered('L\'erreur indique généralement le fichier et la ligne concernée', 0),
      numbered('Décrire l\'erreur à Claude pour qu\'il la corrige', 0),
      spacer(),

      h2('Le déploiement Vercel échoue'),
      numbered([txt('Aller sur '), link('https://vercel.com', 'https://vercel.com'), txt(' → le projet → onglet Deployments')], 0),
      numbered('Cliquer sur le déploiement en échec', 0),
      numbered('Lire les logs pour trouver l\'erreur', 0),
      numbered('Corriger en local, tester avec npm run build, puis re-pusher', 0),
      spacer(),

      h2('Commandes Git utiles'),
      code('git log --oneline              # Voir l\'historique des commits'),
      code('git diff                       # Voir les modifications en cours'),
      code('git checkout -- app/page.tsx   # Annuler les modifs d\'un fichier'),
      code('git reset --soft HEAD~1        # Annuler le dernier commit'),
      spacer(2),

      // ─── FIN ───────────────────────────────────────────────────
      new Paragraph({
        spacing: { before: 400, after: 200 },
        alignment: AlignmentType.CENTER,
        border: {
          top: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 8 },
        },
        children: [new TextRun({ text: 'Documentation rédigée en avril 2026', font: 'Arial', size: 19, italics: true, color: GRAY })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 0 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'Pour toute question sur le projet, se référer au CHANGELOG.md ou à l\'historique Git.', font: 'Arial', size: 19, italics: true, color: GRAY })],
      }),
    ],
  }],
});

// ─── EXPORT ──────────────────────────────────────────────────────────────────
const outputPath = path.join(__dirname, '../../Documentation_Reprise_Darwin-Agency.docx');

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log('✅ Document généré : ' + outputPath);
}).catch(err => {
  console.error('❌ Erreur :', err);
  process.exit(1);
});
