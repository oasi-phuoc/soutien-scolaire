# Plan — Section admin « Impression » (documents d’exercice)

## Objectif

Centraliser la génération / impression PDF des feuilles d’exercice dans **une section dédiée**, accessible **uniquement aux admins**, avec une entrée dans la navigation principale (icône dédiée). Retirer les boutons d’impression dispersés dans les pages de leçon.

Références UX/technique : `ecole-manager` — onglets **TCF → Plannings**, **Notes → Bulletin de notes**, duo Imprimer / aperçu A4.

---

## État actuel (soutien-scolaire)

### Infrastructure déjà solide

| Élément | Chemin | Rôle |
|---------|--------|------|
| Wizard + aperçu A4 | `components/ui/PrintConfigSheet.tsx` | Contenu → En-tête → Aperçu paginé → popup print |
| Utils print | `lib/utils/print.ts` | `openPrintPopup`, `capturePageCss`, `triggerPrint` |
| CSS print | `app/globals.css` | `@media print`, `[data-no-print]` |
| En-tête / pied SCAI | exports `PrintDocumentHeader` / `PrintDocumentFooter` | Identité institutionnelle (alignée ecole-manager) |

### Boutons à retirer (dispersés)

| Surface | Fichier | Gate actuelle |
|---------|---------|---------------|
| Math A1.1–A1.2 | `A1ModuleContent.tsx` | admin \| prof |
| Math générique | `GenericModuleContent.tsx` | **aucun** |
| Math workspace (fractions…) | `MathSubmoduleWorkspace.tsx` | admin \| prof |
| Grammaire / conjugaison | `GrammaireRunner.tsx` | **aucun** |
| Vocabulaire | `VocabRunner.tsx` | **aucun** |
| Placement math | `PlacementTestClient.tsx` | **aucun** |
| Révision math | `RevisionTestClient.tsx` | `window.print()` brut |
| Éval lecture | `LectureEvaluation.tsx` | `window.print()` brut |

Incohérence actuelle : certains boutons sont visibles aux élèves. La nouvelle section corrige cela (**admin strict uniquement**).

### Banque-contrôle (orpheline)

- Route `/admin/banque-controle` → redirect vers `/admin`
- `ControlBankPanel` + `app/actions/control-bank.ts` existent mais ne sont pas montés
- **Hors scope v1** de l’impression centralisée (peut être branchée plus tard comme source d’exercices)

---

## Référence ecole-manager (patterns à réutiliser)

### Pattern commun

```
Chrome sticky (titre + Imprimer / Tout imprimer)
  → Filtres en pills (catégorie → sous-type → select)
  → Aperçu feuille A4 in-page
  → HTML dédié → injectForcedPrintCss → openPrintPopup → dialogue OS « Enregistrer en PDF »
```

Pas de lib PDF serveur : même approche que `PrintConfigSheet` aujourd’hui.

### Bulletin de notes (`Notes.js`)

- Split view : **liste à gauche** (sticky) + **feuille A4 à droite** (bordure / ombre)
- Actions : **Imprimer** (sélection) / **Tout imprimer** (batch + page-breaks)
- Validation : alert si rien de sélectionné

### TCF Plannings (`TCF.js`)

- Pills site / type (Professeurs · Classes · Rôles) + select ciblé
- Carte aperçu « papier » in-page avant impression
- Build HTML string séparé du React preview

### Nav

- Section dans la sidebar + sous-onglets `?tab=` (comme TCF / Notes)

---

## Proposition produit

### Nom & route

- Label nav : **Impression**
- Route : `/admin/impression`
- Accès : `role === "admin"` uniquement (redirect sinon, comme `/admin`)
- Icône : imprimante (réutiliser / adapter `IconPrint` de `MainNav.tsx`)

### Placement navigation

1. **DesktopSidebar** — dans le bloc Admin (sous « Admin », au même niveau que Professeurs / Édition) :
   - Entrée « Impression » → `/admin/impression`
2. **MainNav (mobile)** — entrée secondaire (menu déployé) **uniquement si admin**, avec icône imprimante (comme Placement / Réglages)
3. **CompteDashboard** — bouton « Impression » dans la carte Gestion (admins)

> Les élèves et professeurs ne voient **aucune** entrée ni aucun bouton d’impression dans les leçons.

### UX de la page (inspirée bulletin + TCF)

```
┌─────────────────────────────────────────────────────────────┐
│ Impression                    [Imprimer]  [Tout imprimer?]  │  ← chrome sticky
├─────────────────────────────────────────────────────────────┤
│ [Maths] [Français] [Lecture] [Placement]   ← pills matière  │
│ [Algèbre ▾] [A3 ▾] [A3-1 ▾]               ← cascade select  │
├──────────────┬──────────────────────────────────────────────┤
│ Liste        │  Feuille A4 (aperçu)                         │
│ ○ Théorie    │  ┌─────────────────────────────────────┐     │
│ ☑ Ex 1       │  │ En-tête SCAI / classe / cours       │     │
│ ☑ Ex 2       │  │ Contenu exercices sélectionnés      │     │
│ …            │  │ …                                   │     │
│              │  └─────────────────────────────────────┘     │
│              │  (ou ouverture du wizard PrintConfigSheet)    │
└──────────────┴──────────────────────────────────────────────┘
```

**Flux recommandé (v1)** :

1. Admin choisit **matière → module → sous-module / leçon**
2. La liste affiche théorie + exercices disponibles (adapters de preview)
3. Clic **Configurer / Imprimer** ouvre le wizard existant `PrintConfigSheet` (Contenu → En-tête → Aperçu → PDF)
4. Optionnel v1.1 : aperçu A4 live dans le panneau droit (style bulletin) sans ouvrir le sheet en overlay

On **réutilise** `PrintConfigSheet` plutôt que de le réécrire : c’est déjà le moteur PDF WYSIWYG.

---

## Architecture technique

### Nouveaux fichiers

| Fichier | Rôle |
|---------|------|
| `app/(main)/admin/impression/page.tsx` | Server page : auth admin + mount client |
| `components/admin/ImpressionHub.tsx` | Hub filtres + liste + déclenchement print |
| `lib/print/catalog.ts` | Catalogue des leçons imprimables (ids, labels, matière) |
| `lib/print/adapters/*.ts(x)` | Adapters de preview par domaine (extraits du code actuel) |

### Adapters à extraire (aujourd’hui inline)

| Domaine | Source actuelle | Adapter cible |
|---------|-----------------|---------------|
| Math A1 | `a1PrintPreview` dans `A1ModuleContent` | `lib/print/adapters/math-a1.tsx` |
| Math générique | `trainingExercisePrompts` / `exercisePool` | `lib/print/adapters/math-generic.tsx` |
| Math workspace | `renderEvalStep` (mode print) | `lib/print/adapters/math-workspace.tsx` |
| Grammaire | `ExerciseView` sur `lesson.exercises` | `lib/print/adapters/grammaire.tsx` |
| Vocab | `exPreview(stepKey)` | `lib/print/adapters/vocab.tsx` |
| Placement | composants du test | `lib/print/adapters/placement.tsx` |
| Révision / Lecture | `triggerPrint` brut | **v2** — intégrer au même catalogue ou laisser hors scope v1 |

### Contrat adapter

```ts
type PrintableLesson = {
  id: string;           // ex. "math:A3-1"
  subject: "math" | "francais" | "lecture" | "placement";
  moduleId: string;
  label: string;
  courseDefault: string; // pour PrintHeaderConfig.course
  getTheoryPreview: () => ReactNode | null;
  getExercises: () => PrintExercise[]; // { id, label, preview }
};
```

Le hub résout un `PrintableLesson` → passe `exercises` + `theoryPreview` + `lessonTitle` à `PrintConfigSheet`.

### Auth / gate

- Page serveur : `get_my_role === "admin"` sinon `redirect`
- Nav : `pedagogicNav.isAdmin` (déjà admin strict dans `getPedagogicNavVisibilityAction`)
- Retirer **tous** les `showPrint` / boutons / `PrintConfigSheet` des composants leçon
- Nettoyer le pont MainNav « Imprimer » dans `useLessonActions` si plus de sheet en page leçon

---

## Découpage d’implémentation

### Phase 1 — Hub + nav + retrait boutons (MVP)

1. Route `/admin/impression` + gate admin
2. Entrées nav (DesktopSidebar, MainNav mobile, Compte)
3. Hub minimal : sélection matière / module / leçon (cascade)
4. Ouvrir `PrintConfigSheet` avec adapters Math (A1 + générique + workspace) en premier
5. Retirer tous les boutons d’impression des pages leçon
6. Harmoniser : plus aucun print élève / prof hors hub

### Phase 2 — Couverture complète

1. Adapters Français (grammaire, vocab)
2. Adapter Placement
3. Aperçu A4 inline (split view style bulletin) en plus du sheet
4. « Tout imprimer » multi-leçons (batch page-breaks) — optionnel

### Phase 3 — Extensions

1. Révision math + éval lecture dans le catalogue
2. Lien éventuel avec `banque-controle` (sélection Q → feuille)
3. Prefill en-tête depuis classes SCAI (API classes) si disponible

---

## Décisions à valider

| # | Question | Proposition |
|---|----------|-------------|
| D1 | Admin strict ou admin+prof ? | **Admin strict** (demande explicite) |
| D2 | Réutiliser `PrintConfigSheet` overlay ou page plein écran ? | **Réutiliser le sheet** en v1 ; split view inline en v2 |
| D3 | Où placer dans la nav ? | Sous-bloc Admin sidebar + icône menu mobile |
| D4 | Scope v1 matières ? | Maths d’abord, puis FR / Placement |
| D5 | Que faire de `banque-controle` ? | Laisser séparée ; pas fusionnée en v1 |
| D6 | Label | « Impression » (court) ; titre page « Impression des exercices » |

---

## Risques & points d’attention

- **Previews interactifs** : certains adapters rendent des composants lourds ; forcer mode non-interactif (`pointer-events-none`, masquer boutons) comme aujourd’hui dans le sheet
- **Génération aléatoire** : les exercices math random doivent être stabilisés au moment de l’ouverture du sheet (déjà le cas via `useState` initializer dans les runners — les adapters devront générer une version « papier » stable)
- **GenericModuleContent** : preview parfois texte-only (prompts) — qualité PDF inférieure à A1 ; à documenter / améliorer progressivement
- **Capacitor** : `print.ts` a déjà un fallback WebView — conserver
- **Pas de tests auto** dans le repo : validation manuelle admin (avec / sans Supabase) + parcours élève (plus de bouton)

---

## Critères d’acceptation (MVP)

- [ ] Entrée « Impression » visible **uniquement** pour `role === "admin"`
- [ ] Route `/admin/impression` redirige élèves/profs
- [ ] Aucun bouton Imprimer restant dans les pages leçon / placement / révision / lecture
- [ ] Depuis le hub, un admin peut générer un PDF A4 (en-tête SCAI) pour au moins une leçon maths
- [ ] Icône imprimante dans la nav (mobile et/ou sidebar admin)
- [ ] Comportement PDF inchangé côté qualité pour les leçons déjà supportées par `PrintConfigSheet`
