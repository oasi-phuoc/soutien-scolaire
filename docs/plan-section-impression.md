# Plan — Section centralisée « Documents d’exercice »

## Objectif

Retirer les boutons d’impression dispersés dans les leçons, et centraliser l’impression des documents d’exercice dans une **nouvelle section admin**, accessible depuis la **barre de navigation principale** (icône dédiée), avec un flux UI/PDF calqué sur **ecole-manager** (Plannings TCF, Emploi du temps / professeurs, Bulletin de notes).

---

## Constat actuel (soutien-scolaire)

### Impression aujourd’hui

- Pas de bibliothèque PDF (`@react-pdf`, `jspdf`, etc.) : l’impression passe par le navigateur (`openPrintPopup` → dialogue Imprimer / Enregistrer en PDF).
- Cœur UI : `components/ui/PrintConfigSheet.tsx` (assistant Contenu → En-tête → Aperçu A4) + `lib/utils/print.ts`.
- En-tête/pied SCAI déjà partagés (`PrintDocumentHeader`, `PrintDocumentFooter`, logos Valais).

### Boutons à retirer (entrée par leçon)

| Fichier | Garde actuelle |
|---------|----------------|
| `A1ModuleContent.tsx` | `admin \|\| prof` + étape théorie |
| `MathSubmoduleWorkspace.tsx` | `admin \|\| prof` + théorie |
| `GenericModuleContent.tsx` | **aucune** |
| `VocabRunner.tsx` / `GrammaireRunner.tsx` | **aucune** |
| `PlacementTestClient.tsx` | intro, pas de rôle |
| `RevisionTestClient.tsx` | `triggerPrint()` direct |
| `LectureEvaluation.tsx` | `triggerPrint()` direct |

→ Gating incohérent ; les élèves voient encore l’impression sur une partie des modules.

### Navigation

- Mobile : `MainNav.tsx` (barre du bas, `print:hidden`).
- Desktop : `DesktopSidebar.tsx` (liens Admin si `role === "admin"`).
- Middleware : `/admin/*` déjà réservé au rôle `admin` strict.

### Référence ecole-manager

Pattern commun des sections Plannings / Notes :

```
Filtres (pills) → sélection (liste / CustomSelect)
  → aperçu document live (carte blanche A4)
  → Imprimer / Tout imprimer
  → build HTML (données ou clone DOM) → openPrintPopup
```

Bulletin de notes : **split pane** liste sticky à gauche + aperçu à droite — modèle le plus adapté à un catalogue d’exercices.

---

## Décisions proposées

| Sujet | Décision | Motif |
|-------|----------|--------|
| Route | `/admin/impression` | Middleware admin déjà en place ; pas de nouvelle règle |
| Visibilité nav | Icône dans `MainNav` **et** entrée dans `DesktopSidebar`, **uniquement si `role === "admin"`** | Demande explicite « admins only » (pas `prof`) |
| Accès sans Supabase | Visible en local (comme édition de contenu) **ou** masqué ? | **Proposé : visible en local** (`!supabase`) pour tester sans `.env`, cohérent avec `canEditContent` |
| Rôle `prof` | **Pas d’accès** à la section | Strict admin ; à confirmer si les profs doivent imprimer plus tard |
| Techno PDF | Conserver popup navigateur | Aligné ecole-manager + code existant ; pas de nouvelle dépendance |
| `PrintConfigSheet` | Extraire le moteur (sélection, en-tête, aperçu, print) en composants réutilisables ; **ne plus l’ouvrir depuis les leçons** | Évite de dupliquer 900 lignes |
| Mode leçon MainNav | Plus de label « Imprimer » via `data-nav-action-priority="print"` | Les actions leçon reviennent à Valider / Suivant |

---

## UX cible (inspirée bulletin / plannings)

### 1. Entrée navigation

- **Nouvelle icône** « Documents » / imprimante (SVG dédié, style des icônes existantes `MainNav`).
- Label court : **Docs** ou **Impression**.
- Visible seulement si admin (fetch via `getPedagogicNavVisibilityAction` ou action dédiée).
- Emplacement proposé :
  - Mobile hub : item dans le menu radial / liste `menuItems` (pas forcément une des 4 pastilles primaires pour ne pas surcharger).
  - Desktop sidebar : sous **Admin** → « Documents d’exercice », **et** raccourci icône dans la barre principale si on ajoute un 6ᵉ item conditionnel.

> Point ouvert : pastille primaire vs entrée menu Admin seulement. Recommandation : **entrée Admin sidebar + pastille conditionnelle dans MainNav** (comme Placement) pour un accès rapide.

### 2. Page `/admin/impression`

Layout type ecole-manager Notes/bulletin :

```
┌─────────────────────────────────────────────────────────────┐
│ Sticky header : titre + [Imprimer] [Tout imprimer]          │
├──────────────┬──────────────────────────────────────────────┤
│ Filtres      │                                              │
│ Domaine pills│         Aperçu A4 (live)                     │
│ Maths|FR|…   │         (même chrome PrintDocument*)         │
│              │                                              │
│ Module       │                                              │
│ Sous-module  │                                              │
│              │                                              │
│ Liste exos   │                                              │
│ ☑ Théorie    │                                              │
│ ☑ Exo 1 ×2   │                                              │
│ □ Exo 2      │                                              │
│              │                                              │
│ En-tête      │                                              │
│ CSC 01 / …   │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

**Étapes de sélection (gauche) :**

1. **Domaine** : Mathématiques | Français | Lecture | Placement (et plus tard Communication si besoin).
2. **Module / leçon** : `AppSelect` ou liste (données `MATH_MODULES`, runners FR, `LECTURE_MODULES`, placement).
3. **Contenu** : cases théorie + exercices (occurrences, points) — reprise de la logique `PrintConfigSheet` étape Contenu.
4. **En-tête document** : niveau classe, n°, cours, mode évaluation — reprise étape En-tête.
5. **Aperçu** à droite (toujours visible une fois une leçon choisie), pagination A4 existante.

**Actions :**

- **Imprimer** : document de la sélection courante.
- **Tout imprimer** (optionnel v1 ou v1.1) : tous les sous-modules du module filtré, `page-break-after` entre documents (comme TCF / EDT).

### 3. États vides

- Aucune leçon sélectionnée → message « Choisissez un module pour prévisualiser ».
- Sélection sans contenu imprimable → message déjà présent dans `PrintConfigSheet`.

---

## Architecture technique

### Nouveaux fichiers (proposition)

```
app/(main)/admin/impression/page.tsx          # garde serveur admin + shell
components/admin/impression/
  ImpressionWorkspace.tsx                     # layout split + état filtres
  ImpressionCatalog.tsx                       # pills + selects + liste exos
  ImpressionPreviewPane.tsx                   # aperçu A4 réutilisant PrintPreview*
  impression-catalog.ts                       # index des leçons imprimables
components/ui/print/                          # extraction depuis PrintConfigSheet
  PrintDocumentHeader.tsx
  PrintDocumentFooter.tsx
  PrintPreviewPager.tsx
  print-types.ts
  usePrintDocument.ts                         # handlePrint → capturePageCss + openPrintPopup
```

### Catalogue imprimable

Registre côté client dérivé du curriculum existant, ex. :

```ts
type PrintableLesson = {
  id: string;           // "math:A1-1" | "fr:vocab-a1-…" | "lecture:…" | "placement"
  domain: "math" | "francais" | "lecture" | "placement";
  moduleId: string;
  title: string;
  /** Factory d’aperçu : théorie + exercices (ReactNode), comme aujourd’hui dans chaque runner */
  buildPreview: (config: PrintConfig) => { theory?: ReactNode; exercises: PrintExercise[] };
};
```

**Défi principal :** aujourd’hui l’aperçu est généré *dans* chaque runner (`a1PrintPreview`, handlers dans `GenericModuleContent`, etc.). Il faut **extraire** ces builders dans des modules purs (ou un registre) pour les appeler hors contexte de leçon.

Approche progressive :

1. **v1** — Maths (A1 + Generic + workspace custom) + Français (Vocab/Grammaire) en migrant les `*PrintPreview` / listes d’exercices vers `lib/print/catalog/`.
2. **v1.1** — Placement + Lecture évaluation + tests de révision.
3. **v2** — « Tout imprimer » par module / classe.

### Sécurité

- Page serveur : `get_my_role() === "admin"` sinon redirect (comme `admin/page.tsx`).
- Middleware : déjà couvert par `/admin`.
- Nav : masquer l’icône si non-admin (pas seulement cacher la route).
- Aucune API serveur critique (contenu curriculum déjà public côté client).

### Nettoyage leçons

Pour chaque point d’entrée listé plus haut :

1. Supprimer le bouton imprimante UI.
2. Supprimer le montage de `PrintConfigSheet` et les bridges `data-nav-action-priority="print"`.
3. Conserver / déplacer uniquement la logique de **génération d’aperçu** vers le catalogue.
4. Simplifier `useLessonActions` : retirer le mapping spécial « imprimer » si plus utilisé.

---

## Navigation — détail d’implémentation

### `MainNav.tsx`

- Ajouter `docsItem: { href: "/admin/impression", label: "Docs", icon: DocsIcon }`.
- Charger `isAdmin` (réutiliser `getPedagogicNavVisibilityAction`).
- Inclure l’item dans `menuItems` (et éventuellement pastille) seulement si admin / mode local.

### `DesktopSidebar.tsx`

- Sous Admin, ajouter `{ href: "/admin/impression", label: "Documents d’exercice" }`.

### Icône

- Nouvelle icône outline cohérente avec `IconPrint` / autres (feuille + coin plié, ou imprimante simple) — pas d’emoji.

---

## Alignement CSS / print

- Réutiliser `globals.css` (`@media print`, `.print-document-header`, etc.).
- Conserver `openPrintPopup` + injection CSS page (comme `PrintConfigSheet.handlePrint`).
- Optionnel : porter `injectForcedPrintCss` d’ecole-manager dans `lib/utils/print.ts` pour forcer `@page A4` de façon uniforme.

---

## Plan d’implémentation (phases)

### Phase 0 — Préparation

- Extraire types + header/footer/preview hors de `PrintConfigSheet`.
- Documenter le contrat `PrintableLesson`.

### Phase 1 — Section + nav (sans tout le catalogue)

- Route `/admin/impression` + garde admin.
- Icône nav + entrée sidebar.
- Shell UI split pane (filtres stub + aperçu vide).

### Phase 2 — Catalogue Maths + wiring print

- Migrer previews A1 / Generic / Workspace.
- Brancher Imprimer sur le même pipeline que `PrintConfigSheet`.
- Retirer boutons print des composants math.

### Phase 3 — Français (+ Placement / Lecture)

- Migrer Vocab/Grammaire, puis placement/révision/lecture.
- Retirer les derniers `triggerPrint` / sheets.

### Phase 4 — Polish

- Tout imprimer (module entier).
- Deep-link `?domain=&module=&lesson=`.
- Tests manuels : admin voit l’entrée ; élève/prof non ; aperçu = PDF.

---

## Critères d’acceptation

1. Aucun bouton d’impression visible dans une leçon (élève, prof, admin).
2. Admin voit l’icône Docs / Impression dans la nav et peut ouvrir `/admin/impression`.
3. Élève et prof : pas d’entrée nav, accès direct URL → redirect.
4. Sélection domaine → module → exercices → aperçu A4 SCAI → dialogue d’impression.
5. Qualité visuelle du PDF équivalente (ou supérieure) à l’ancien `PrintConfigSheet`.
6. Pas de nouvelle dépendance PDF sauf décision contraire explicite.

---

## Points à trancher avant le code

1. **Profs** : accès lecture seule / impression, ou strict admin ?
2. **Pastille MainNav** vs entrée menu Admin uniquement ?
3. **Communication** dans le catalogue v1 ou plus tard ?
4. **Tout imprimer** dès la v1 ou v1.1 ?
5. Mode local sans Supabase : section visible ?

---

## Références code

| Projet | Fichier | Rôle |
|--------|---------|------|
| soutien-scolaire | `components/ui/PrintConfigSheet.tsx` | Wizard actuel à centraliser |
| soutien-scolaire | `lib/utils/print.ts` | `openPrintPopup` / `capturePageCss` |
| soutien-scolaire | `components/MainNav.tsx` | Nav + IconPrint leçon |
| ecole-manager | `frontend/src/utils/print.js` | Helper print forcé `@page` |
| ecole-manager | `frontend/src/pages/Notes.js` | Split liste + aperçu + Imprimer |
| ecole-manager | `frontend/src/pages/TCF.js` | Pills site/type + aperçu plannings |
| ecole-manager | `frontend/src/pages/EmploiDuTemps.js` | Plannings prof + Tout imprimer |
