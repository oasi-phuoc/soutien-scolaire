# Plan — Section centralisée « Impression » (admin)

## Objectif

Centraliser l’impression / export PDF des feuilles d’exercice dans **une section dédiée**, accessible uniquement aux **admins**, via un **nouveau bouton + icône** dans la navigation principale. Retirer les boutons d’impression dispersés dans chaque page de leçon.

Références UI/PDF : `ecole-manager` (TCF plannings, Notes, Bulletins, Professeurs).

---

## État actuel (soutien-scolaire)

### Flux existant

| Élément | Rôle |
|---------|------|
| `components/ui/PrintConfigSheet.tsx` | Wizard 3 étapes : Contenu → En-tête → Aperçu A4 paginé + impression popup |
| `lib/utils/print.ts` | `capturePageCss`, `openPrintPopup`, `triggerPrint` |
| `PrintDocumentHeader` / `PrintDocumentFooter` | En-tête SCAI / Valais + pied de page LearnUP |

### Boutons à retirer (dispersés, souvent `isAdmin` + étape théorie)

| Fichier | Déclencheur |
|---------|-------------|
| `MathSubmoduleWorkspace.tsx` | Bouton flottant théorie |
| `GenericModuleContent.tsx` | Idem |
| `A1ModuleContent.tsx` | Idem |
| `VocabRunner.tsx` | Idem |
| `GrammaireRunner.tsx` | Idem |
| `PlacementTestClient.tsx` | Bouton « Imprimer le test » |
| `RevisionTestClient.tsx` / `LectureEvaluation.tsx` | Variantes `window.print` / PDF |

Chaque runner monte localement `PrintConfigSheet` avec `theoryPreview` + `exercises[].preview` (ReactNode issus des composants d’exercice).

### Accès admin déjà en place

- Middleware : `/admin/*` → `role === "admin"` (`middleware.ts`)
- Nav pédagogie : `getPedagogicNavVisibilityAction()` → `isAdmin` (`DesktopSidebar`)
- Pattern local sans Supabase : bypass auth (OK pour tests ; la section devra rester cohérente)

---

## Référence ecole-manager — patterns à reprendre

| Pattern | Où | Application ici |
|---------|-----|-----------------|
| **Liste → filtres pills → détail → aperçu** | Notes, Bulletins, TCF plannings | Hub Impression : domaine → sous-menu → leçon → wizard |
| **Split liste / document** | Notes bulletin (sidebar 210px + aperçu) | Optionnel en étape « Aperçu » si multi-leçons plus tard |
| **Preview WYSIWYG + print popup HTML** | TCF / Bulletins (`injectForcedPrintCss` + `openPrintPopup`) | Déjà le modèle de `PrintConfigSheet` (clone DOM aperçu) |
| **En-tête officiel SCAI / Valais** | TCF, Notes, Bulletins | Déjà dans `PrintDocumentHeader` |
| **Sous-nav URL `?tab=` + adminOnly** | `Layout.js` TCF/Notes | Onglets domaine via searchParams |
| **Bandeau sticky actions** | `stickyPageChrome` (TCF) | Header section + CTA Imprimer |
| **Icône dédiée sidebar** | `DashboardIcons.js` | Nouvelle icône imprimante dans MainNav + DesktopSidebar |

Ne pas copier la palette indigo `#6366f1` d’ecole-manager : rester sur le design system soutien (`--color-theme`, accents par matière).

---

## Proposition produit

### Emplacement & accès

- **Route** : `/admin/impression` (protégée middleware admin)
- **Navigation** :
  - `DesktopSidebar` : entrée « Impression » sous le bloc Admin (ou au même niveau Suivi / Admin), visible si `pedagogicNav.isAdmin`
  - `MainNav` (mobile / menu secondaire) : même entrée + **nouvelle icône** (imprimante), visible admin uniquement
  - Option : lien rapide depuis `/compte` (carte Gestion) et `/admin`
- **Rôles** : **admin uniquement** (pas les profs) — aligné avec la demande. Les boutons actuels utilisent parfois `isAdmin \|\| prof` via props pages ; à clarifier au moment de l’implémentation si les profs doivent garder un accès lecture seule (recommandation : non, sauf demande contraire).

### UX de la section (inspirée Notes / TCF)

```
┌─────────────────────────────────────────────────────────┐
│  Impression                          [icône imprimante] │
│  Feuilles d’exercice & évaluations                      │
├─────────────────────────────────────────────────────────┤
│  [Math] [Français] [Lecture] [Placement]   ← pills     │
│     └ Algèbre | Géométrie | …              ← sous-tabs │
├──────────────┬──────────────────────────────────────────┤
│ Liste leçons │  Sélection → ouvre le wizard             │
│ (code+titre) │  PrintConfigSheet (réutilisé)            │
│ recherche    │  Contenu → En-tête → Aperçu A4 → PDF     │
└──────────────┴──────────────────────────────────────────┘
```

Flux utilisateur :

1. Choisir **domaine** (Math / Français / Lecture / Placement…)
2. Choisir **sous-domaine** (ex. Algèbre, Vocabulaire)
3. Choisir une **leçon / sous-module** dans la liste (réutiliser le catalogue de `lib/content-editor/hub-pages.ts` : `HUB_DOMAINS`, `HubPage`)
4. Lancer le **wizard d’impression** existant (`PrintConfigSheet`) avec théorie + exercices de cette leçon
5. Configurer mode Exercice / Évaluation, sélection, points, en-tête classe, aperçu paginé, imprimer

### Icône

Nouvelle icône SVG « imprimante » (déjà ébauchée comme `IconPrint` dans `MainNav.tsx`) — à exposer aussi en sidebar / entrée de section, style cohérent avec Home / Lecture / Placement.

---

## Architecture technique

### Décision clé : comment obtenir les aperçus hors des runners ?

Aujourd’hui les `preview` sont des ReactNode montés **dans** le runner de leçon. Le hub ne doit pas dépendre de l’ouverture d’une page élève.

**Approche recommandée (phase 1)** — *Print adapters par domaine* :

```
lib/print/
  catalog.ts          # réexporte / adapte HUB_DOMAINS + pages imprimables
  adapters/
    math.ts           # id leçon → { title, theoryPreview, exercises[] }
    francais.ts       # vocab + grammaire
    lecture.ts        # si applicable
    placement.ts
components/impression/
  ImpressionHubClient.tsx   # UI liste + filtres
  ImpressionLessonMount.tsx # charge l’adapter et ouvre PrintConfigSheet
```

Chaque adapter :

- charge les données curriculum (registry / themes / lessons)
- rend les **mêmes** composants preview que les runners (`TheoryView`, `ExerciseView`, `renderEvalStep`, etc.) en mode lecture seule (`validateCommand={0}`, no-op callbacks)
- retourne `PrintExercise[]` + `theoryPreview` + `lessonTitle` + `accentColor`

**Approche rejetée pour la V1** : deep-link vers la leçon + auto-open du sheet — garde le bouton dans le parcours élève et complexifie le routing.

### Fichiers à créer

| Chemin | Rôle |
|--------|------|
| `app/(main)/admin/impression/page.tsx` | Server page : gate admin + render hub |
| `components/impression/ImpressionHubClient.tsx` | UI catalogue + sélection |
| `components/impression/ImpressionPrintSession.tsx` | Monte adapter + `PrintConfigSheet` |
| `lib/print/catalog.ts` | Catalogue des leçons imprimables |
| `lib/print/adapters/*.ts` | Factories preview par domaine |

### Fichiers à modifier

| Chemin | Changement |
|--------|------------|
| `components/layout/DesktopSidebar.tsx` | Lien « Impression » admin + sous-nav |
| `components/MainNav.tsx` | Entrée menu admin + icône (visibilité via action admin) |
| `app/actions/admin.ts` | Étendre `getPedagogicNavVisibilityAction` ou ajouter `getImpressionNavVisibilityAction` |
| `components/CompteDashboard.tsx` | Lien Gestion → Impression (optionnel) |
| Runners listés plus haut | **Supprimer** bouton + état `showPrintConfig` + import sheet |
| `lib/hooks/useLessonActions.ts` | Retirer « imprimer » du mapping next/validate legacy si plus pertinent |

### Sécurité

- Page sous `/admin/impression` → middleware existant
- Double check `get_my_role === "admin"` dans la page serveur (comme `/admin/page.tsx`)
- Mode local sans Supabase : décider explicitement — soit section visible (comme édition contenu `openLocally`), soit masquée. **Recommandation** : visible en local pour tests (même règle que content-editor).

---

## Périmètre V1 vs suites

### V1 (MVP)

1. Nav admin (sidebar + menu mobile) + route `/admin/impression`
2. Catalogue Math (algèbre + géométrie) + Français (vocabulaire + grammaire) via adapters
3. Réutilisation intégrale de `PrintConfigSheet` (pas de refactor PDF)
4. Suppression des boutons d’impression dans les runners couverts
5. Placement math : entrée catalogue si adapter simple

### V2 (ensuite)

- Lecture (évaluations / révisions) et Communication si besoin pédagogique
- Impression multi-leçons / lot (comme « Tout imprimer » TCF)
- Banque de contrôles (`/admin/banque-controle`) branchée sur le même hub
- Prefs d’en-tête mémorisées (classe / cours) en `localStorage`

### Hors scope

- Génération PDF serveur (Puppeteer, etc.) — rester sur popup navigateur
- Accès profs
- Changement du design des en-têtes SCAI / Valais

---

## Plan d’implémentation (ordre)

1. **Scaffold** route + hub UI (pills domaines, liste vide) + nav admin + icône
2. **Adapter Math** (A1 + Generic + submodule) — cas le plus critique
3. Brancher `PrintConfigSheet` depuis le hub ; valider aperçu + PDF
4. **Adapters Français** (vocab + grammaire)
5. **Retirer** boutons / états print des runners couverts
6. Adapter Placement si trivial ; sinon V2
7. Lint (`npm run lint` sur `app/` / `components/` / `lib/`) + smoke manuel PDF

---

## Risques & mitigations

| Risque | Mitigation |
|--------|------------|
| Aperçus math dépendent de logique lourde dans `GenericModuleContent` | Extraire `buildMathPrintPayload(submoduleId)` progressivement ; commencer par leçons A1 / grammaire (plus simples) |
| Bundle client trop gros si tous les adapters importent tout | Dynamic `import()` de l’adapter au clic leçon |
| Divergence preview hub vs page leçon | Partager les mêmes composants de rendu ; pas de HTML string parallèle en V1 |
| Boutons oubliés dans une page | Grep final `Imprimer en PDF` / `PrintConfigSheet` / `setShowPrintConfig` |

---

## Critères d’acceptation

- [ ] Aucun bouton d’impression visible dans le parcours élève / leçon
- [ ] Entrée « Impression » visible **uniquement** pour admin (sidebar + menu principal)
- [ ] Depuis `/admin/impression`, un admin peut sélectionner une leçon Math ou Français, configurer le document, voir l’aperçu A4, et exporter PDF
- [ ] En-tête / pied de page identiques à l’existant (`PrintDocumentHeader` / Footer)
- [ ] Non-admin : redirect hors de `/admin/impression`
- [ ] Pas de régression visuelle sur les runners (suppression propre du float print)

---

## Décisions à confirmer avant code

1. **Professeurs** : aucun accès (défaut plan) ou accès lecture/impression ?
2. **Domaines V1** : Math + Français suffisent-ils, ou Placement / Lecture dès le MVP ?
3. **Emplacement nav** : sous-bloc Admin sidebar uniquement, ou aussi pastille dans le menu circulaire MainNav (comme Placement) ?
4. **Mode local sans Supabase** : section visible pour tests ?

Une fois ces 4 points validés, l’implémentation peut démarrer dans l’ordre ci-dessus.
