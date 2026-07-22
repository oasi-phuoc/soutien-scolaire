# Plan — Section « Impression » (admin)

Centraliser l’impression des documents d’exercice dans une section dédiée, accessible uniquement aux admins, avec une entrée dans la navigation principale. Référence UX/PDF : `oasi-phuoc/ecole-manager` (TCF Plannings, Notes / bulletin).

---

## 1. Constat actuel

### Boutons dispersés (à retirer)

| Fichier | Mécanisme | Déjà admin ? |
|---------|-----------|--------------|
| `A1ModuleContent.tsx` | Bouton flottant → `PrintConfigSheet` | Oui (`isAdmin`) |
| `MathSubmoduleWorkspace.tsx` | Idem | Oui |
| `GenericModuleContent.tsx` | Idem | À vérifier (lié au parent) |
| `VocabRunner.tsx` | Idem | À vérifier |
| `GrammaireRunner.tsx` | Idem | À vérifier |
| `PlacementTestClient.tsx` | Bouton « Imprimer le test » → sheet | Non (visible à tous) |
| `RevisionTestClient.tsx` | `triggerPrint()` direct | Non |
| `LectureEvaluation.tsx` | `triggerPrint()` direct | Non |

### Infra déjà en place (à réutiliser)

- `components/ui/PrintConfigSheet.tsx` — wizard 3 étapes (contenu → en-tête → aperçu A4) + `openPrintPopup`
- `PrintDocumentHeader` / `PrintDocumentFooter` — en-tête institutionnel SCAI / Valais
- `lib/utils/print.ts` — `openPrintPopup`, `triggerPrint`, `capturePageCss`
- Catalogues curriculum : `MATH_MODULES`, `lessons-registry`, `grammar-data`, thèmes vocab, etc.

### Navigation admin actuelle

- Desktop : `DesktopSidebar` — section Admin via `getPedagogicNavVisibilityAction().isAdmin`
- Mobile `MainNav` : **pas** d’entrée Admin (seulement Accueil / Lecture / Français / Maths / Placement / Réglages)
- Middleware : `/admin/*` réservé au rôle `admin`

---

## 2. Objectif produit

1. **Retirer** tous les boutons d’impression des pages de leçon / évaluation / placement / révision.
2. **Créer** une section centrale `/impression` (ou `/admin/impression`) réservée aux admins.
3. **Ajouter** un bouton dédié dans la nav principale (sidebar + menu mobile) avec une **nouvelle icône**, visible **uniquement** si `isAdmin`.
4. Reproduire le pattern ecole-manager : **sélection / filtres + aperçu document WYSIWYG + Imprimer / Tout imprimer** → HTML + dialogue navigateur (pas de lib PDF).

---

## 3. Référence ecole-manager — patterns à calquer

Infra commune : `injectForcedPrintCss` + `openPrintPopup` (équivalent déjà présent dans soutien-scolaire).

| Pattern | Où | Layout | Usage recommandé ici |
|---------|-----|--------|----------------------|
| **A. Full-page WYSIWYG** | TCF Plannings | Header [Tout imprimer] [Imprimer] + pills type + select + carte document | Document unique (une leçon / un test) |
| **B. Split liste + preview** | Notes → Bulletin | Liste sticky gauche + aperçu A4 droite | Parcourir plusieurs leçons / modules |
| **C. Modal preview** | Bulletins.js legacy | Overlay | **À éviter** comme flux principal |

Éléments UI à reprendre :

- Actions **Imprimer** / **Tout imprimer** en haut à droite du header
- Pills de type / matière + `AppSelect` contextuel
- Chrome UI marqué `no-print` / `data-no-print`
- Carte blanche = aperçu fidèle au PDF (même contenu que l’impression)
- En-tête institutionnel + pied déjà fournis par `PrintDocumentHeader` / footer

---

## 4. Proposition d’architecture

### Route & accès

```
/impression                    → hub (admin only)
/impression/[domain]/[id]      → workspace d’impression d’une leçon (optionnel, phase 2)
```

- Préférer `/impression` (entrée nav de premier niveau) plutôt que sous `/admin`, pour coller à la demande « bouton dans la barre de navigation principale ».
- Middleware : traiter `/impression` comme `ADMIN_PREFIX` (redirect si `role !== "admin"`).
- Sans Supabase (dev local) : décider explicitement — soit accessible (comme édition contenu locale), soit masquée. **Recommandation** : visible en local (`CONTENT_EDIT_OPEN` / absence Supabase) pour tester, strictement admin dès qu’un utilisateur est connecté.

### Navigation

**DesktopSidebar** (section pédagogique / admin) :

```
… Suivi pédagogique …
Admin
  Professeurs
  Édition de contenu
Impression          ← nouvelle entrée top-level admin (icône imprimante dédiée)
```

Ou entrée **au même niveau** que « Admin », avec icône distincte — préférable pour la « barre principale ».

**MainNav mobile** : ajouter l’item dans le menu radial / secondaire **uniquement si admin** (même pattern que Placement via `getPedagogicNavVisibilityAction` / nouvel endpoint ou extension de celui-ci).

**Icône** : nouvelle SVG (imprimante stylisée, distincte de `IconPrint` déjà utilisé pour l’action « Valider → Imprimer » dans le mode leçon). Ne pas réutiliser le checkmark/print du mode leçon.

### Écran hub `/impression` — layout (pattern B + A)

```
┌─ Header ──────────────────────────────────────────────┐
│ Impression des exercices     [Imprimer] [Tout impr.]  │
├─ Toolbar (no-print) ──────────────────────────────────┤
│ [Maths|Français|Lecture|Placement]  pills domaine     │
│ Module / Thème  AppSelect   ·  Leçon AppSelect        │
│ Options : ☐ Théorie  ☐ Mode évaluation  …             │
├──────────────┬────────────────────────────────────────┤
│ Liste        │  Aperçu A4 (carte blanche)             │
│ leçons /     │  = PrintDocumentHeader                 │
│ exercices    │  + théorie / exercices sélectionnés    │
│ (sticky)     │  + footer                              │
│              │  (réutilise logique PrintConfigSheet)  │
└──────────────┴────────────────────────────────────────┘
```

Flux admin :

1. Choisir le **domaine** (Maths / Français-Vocab / Grammaire / Lecture / Placement…)
2. Choisir **module / thème** puis **leçon**
3. Cocher théorie + exercices (occurrences, points) — reprendre le step 0–1 de `PrintConfigSheet`
4. Aperçu live à droite (step 2 actuel, mais intégré page pleine, pas en sheet modal)
5. Imprimer → `openPrintPopup` (comportement actuel)

### Refactor technique clé

Extraire de `PrintConfigSheet` :

| Module | Rôle |
|--------|------|
| `PrintDocumentHeader` / footer | déjà exportés — garder |
| `PrintExercisePicker` | sélection exercices / occurrences / points / drag |
| `PrintHeaderForm` | classe, cours, titre, mode éval |
| `PrintA4Preview` | `PaginatedPreview` + pagination |
| `usePrintDocument` | state + `handlePrint` |

- **Phase 1** : la page `/impression` compose ces briques en layout split (ecole-manager).
- `PrintConfigSheet` peut devenir un thin wrapper ou être **supprimé** une fois les boutons retirés.
- Les previews d’exercices (`a1PrintPreview`, etc.) restent dans les runners mais exposés via un **registre de previews** :

```ts
// lib/print/exercise-preview-registry.ts
getPrintableLesson(domain, lessonId) → {
  title, theoryPreview, exercises: PrintExercise[]
}
```

Évite de monter tout le runner de leçon juste pour imprimer.

---

## 5. Périmètre par domaine (phasage)

### Phase 1 — socle + Maths

- Route `/impression` + garde admin + entrée nav (sidebar + MainNav)
- Retrait de **tous** les boutons d’impression des pages
- Hub : domaine Maths → modules A*/G* → sous-modules → picker + aperçu + print
- Registre de previews pour A1 + GenericModule (réutiliser les helpers `*PrintPreview` déjà présents)

### Phase 2 — Français

- Vocabulaire + Grammaire (porter les previews de `VocabRunner` / `GrammaireRunner`)

### Phase 3 — Lecture / Placement / Révisions

- Remplacer `triggerPrint()` brut par le même pipeline (en-tête officiel + sélection)

### Hors scope initial

- Impression communication / production écrite
- Génération PDF serveur (Puppeteer etc.)
- Accès professeurs (strictement admin pour v1)

---

## 6. Fichiers impactés (estimatif)

**Nouveau**

- `app/(main)/impression/page.tsx`
- `components/impression/ImpressionHubClient.tsx`
- `components/impression/ImpressionPreviewPane.tsx`
- `components/impression/ImpressionFilters.tsx`
- `lib/print/exercise-preview-registry.ts` (+ helpers domaine)
- Icône nav (`IconImpression` ou similaire)

**Modifié**

- `middleware.ts` — protéger `/impression`
- `DesktopSidebar.tsx` + `MainNav.tsx` — entrée admin
- `app/actions/admin.ts` — éventuellement étendre la visibilité nav
- Retrait print UI dans :  
  `A1ModuleContent`, `MathSubmoduleWorkspace`, `GenericModuleContent`,  
  `VocabRunner`, `GrammaireRunner`, `PlacementTestClient`,  
  `RevisionTestClient`, `LectureEvaluation`
- Factorisation de `PrintConfigSheet.tsx`

**Inchangé (réutilisé)**

- `lib/utils/print.ts`
- En-tête / pied document, CSS A4

---

## 7. Décisions à figer avant implémentation

1. **URL** : `/impression` (nav principale) vs `/admin/impression` (sous Admin) ?
2. **Dev local sans Supabase** : section visible ou non ?
3. **Professeurs** : exclus en v1 (confirmé) ou lecture seule plus tard ?
4. **Placement / révision / lecture éval** : suppression immédiate des boutons (même sans hub dédié en phase 1) — recommandé oui, pour éviter deux UX.
5. **« Tout imprimer »** : imprimer toutes les leçons du module sélectionné (page-break), calqué sur TCF / bulletin ?

---

## 8. Critères d’acceptation

- [ ] Aucun bouton Imprimer sur les pages élève / leçon
- [ ] Entrée nav « Impression » + icône neuve, **invisible** hors admin
- [ ] Accès direct URL `/impression` refusé aux non-admins (middleware)
- [ ] Admin peut sélectionner une leçon maths, configurer le document, voir un aperçu A4, imprimer / enregistrer PDF
- [ ] Document conserve en-tête SCAI / identité élève / footer version
- [ ] UX alignée ecole-manager (toolbar + aperçu, pas de sheet modal comme flux principal)
