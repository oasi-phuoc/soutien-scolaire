# CLAUDE.md — Référence du projet soutien-scolaire

## Blocs de contenu math (`MathRichBlock`)

Utilisés dans `theory.blocks[]` des fichiers `lib/curriculum/content/math/`.
Rendus par `RichBlock` dans `A1ModuleContent.tsx` (A1.1, A1.2) et `BlockView` dans `GenericModuleContent.tsx` (A1.3+) et `MathSubmoduleWorkspace.tsx` (autres modules).

---

### `heading` — Titre de section

```ts
{ type: "heading", fr: "Titre ici", black?: true }
```

- **`black: true`** → titre noir gras (titre principal de section)
- **sans `black`** → texte coloré accent (sous-titre)

Rendu : `<h3>` ou `<p>` gras

---

### `highlight` — Titre coloré style ON/VOUS/ILS

```ts
{ type: "highlight", fr: "Repérer sa position" }
```

Rendu : texte bold en couleur accent, sans cadre ni fond.

**Pattern ON/VOUS/ILS** — titre coloré suivi d'un bloc `section` avec bordure gauche :
```ts
{ type: "highlight", fr: "Repérer sa position" },
{ type: "section", labelFr: "", itemsFr: [
  "Première ligne de contenu.",
  "Deuxième ligne.",
] },
```

---

### `section` — Liste avec bordure gauche (sans puces)

```ts
{ type: "section", labelFr: "Label optionnel", itemsFr: [
  "Item 1",
  "Item 2 avec **mot en gras coloré**",
] }
```

- `labelFr` → label bold coloré au-dessus (peut être `""` pour aucun label)
- `itemsFr` → lignes sans puces, avec bordure gauche colorée
- Supporte `**texte**` pour gras coloré dans les items

---

### `bullets` — Liste avec puces de couleur accent

```ts
{ type: "bullets", labelFr: "Label optionnel", itemsFr: [
  "Item 1",
  "Item 2 avec **mot en gras coloré**",
] }
```

- `labelFr` → label bold coloré au-dessus (optionnel, peut être omis)
- `itemsFr` → lignes avec puce ronde colorée (accent) à gauche
- Supporte `**texte**` et `[[frac:N/D]]` dans les items

---

### `plain` — Paragraphe simple

```ts
{ type: "plain", fr: "Texte normal ici." }
{ type: "plain", fr: "" }  // spacer vertical
```

Rendu : paragraphe texte normal. Chaîne vide = espace vertical.

---

### `rule` — Bloc encadré avec liste

```ts
{ type: "rule", titleFr: "Titre du bloc", itemsFr: [
  "1 Millier\n= 1 000",
  "1 Centaine\n= 100",
] }
```

- Cadre avec fond coloré accent léger
- `titleFr` → label gras coloré en haut (peut être `""`)
- `\n` dans un item → retour à la ligne (affichage multi-ligne)
- Items sans puces

---

### `table` — Tableau style G1

```ts
{ type: "table",
  headersFr: ["Colonne 1", "Colonne 2", "Colonne 3"],
  accentHeader: true,
  rows: [
    ["ligne 1 col 1", "ligne 1 col 2", "ligne 1 col 3"],
    ["ligne 2 col 1", "ligne 2 col 2", "ligne 2 col 3"],
  ],
  captionFr: "Note optionnelle sous le tableau",
}
```

- **`accentHeader: true`** → en-têtes colorées accent, uppercase, fond coloré léger (style G1 math)
- **sans `accentHeader`** → en-têtes fond gris neutre
- Lignes alternées (blanc / gris léger)
- Coins arrondis, pas de bordures internes visibles

---

### `note` — Note d'information (fond ambre)

```ts
{ type: "note", fr: "Information importante à retenir." }
```

Rendu : cadre fond jaune/ambre, texte ambre foncé.

---

### `example` — Exemple de code/formule (fond gris)

```ts
{ type: "example", fr: "3 864 = 3 000 + 800 + 60 + 4" }
```

Rendu : fond gris, police monospace, label "Exemple" en petit.

---

### `svg` — Image SVG inline

```ts
{ type: "svg", markup: "<svg>...</svg>", captionFr: "Légende", noFrame?: true }
```

- Sans `noFrame` → cadre blanc avec bordure
- `noFrame: true` → sans cadre

---

### `svg_row` — Rangée de SVG côte à côte

```ts
{ type: "svg_row", items: [
  { markup: "<svg>...</svg>", captionFr: "Fig. 1" },
  { markup: "<svg>...</svg>", captionFr: "Fig. 2" },
] }
```

---

## Gras coloré dans le texte

Dans n'importe quel champ `fr` qui passe par `renderBold()` (items de `section`, cellules de `table`, `plain`, `rule`) :

```
**mot** → <strong> en couleur accent
```

---

## Étapes spéciales dans GenericModuleContent (A1.3+)

| `kind`           | Description                                               |
|------------------|-----------------------------------------------------------|
| `theory`         | Affiche la théorie (`theory.blocks`)                     |
| `exercise`       | Exercice texte/nombre standard                            |
| `number_line`    | Droite numérique aléatoire avec flèche (A1.3 seulement)  |
| `comparison_ex`  | Exercice de comparaison toggle `< = >` (A1.4 seulement)  |
| `eval_start`     | Écran "Prêt pour l'évaluation ?"                         |
| `pass_toggle`    | Bouton Oui/Non de fin de module                          |

---

## Conventions de génération d'exercices

### Constantes de style

Déclarées en haut de chaque fichier composant qui en a besoin :

```ts
const MATH_TEXT_INPUT_BASE =
  "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 " +
  "bg-[var(--color-accent-alg)]/5 text-center font-mono outline-none " +
  "transition-colors focus:border-[var(--color-accent-alg)] " +
  "focus:bg-[var(--color-accent-alg)]/10 disabled:opacity-70";

// Identique à MATH_TEXT_INPUT_BASE + cache les spinners webkit (legacy — préférer type="text")
const MATH_NUMBER_INPUT_BASE = `${MATH_TEXT_INPUT_BASE} appearance-none
  [&::-webkit-inner-spin-button]:appearance-none
  [&::-webkit-outer-spin-button]:appearance-none`;

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

const CELL_W = 32; // largeur cellule dans les tableaux en colonne
```

---

### Cases de saisie numérique (règles absolues)

**TOUJOURS `type="text"` — JAMAIS `type="number"`** (évite les flèches ↑↓ dans tous les navigateurs).

```tsx
<input
  type="text"
  inputMode="numeric"          // ou "decimal" selon le type de valeur
  value={val}
  disabled={validated}
  onChange={e => onChange(e.target.value.replace(/[^0-9]/g, ""))}
  className={`h-8 w-8 px-0 text-base ${MATH_TEXT_INPUT_BASE}`}
/>
```

**Choix du filtre `onChange` :**

| Filtre | Cas d'usage |
|--------|-------------|
| `/[^0-9]/g` | Entiers positifs (chiffres seuls, fractions, PGCD/PPCM, tables) |
| `/[^0-9,.]/g` | Décimaux positifs (résultats décimaux, pourcentages) |
| `/[^0-9,.\-]/g` | Décimaux signés (droite numérique, suites, comparaisons) |
| `/[^0-9,.\-+]/g` | Règle de suite avec signe (ex. « +5 », « −3 ») |
| `/[^0-9,.\-%+]/g` | Variation en % avec signe (ex. « +25% », « −10% ») |
| `/[^0-9, ]/g` | Liste de diviseurs séparés par virgules (ex. « 1, 2, 3, 6 ») |

**Choix de `inputMode` :**
- `"numeric"` → entiers (pas de virgule sur mobile)
- `"decimal"` → décimaux/signés (affiche virgule/point sur mobile)
- `"text"` → réponses libres (texte, formules) — pas de filtre numérique

**Taille des cases selon le contexte :**

| Contexte | Classes de taille |
|----------|-------------------|
| Cellule de chiffre (tableau colonne) | `h-8 w-8 px-0 text-base` |
| Cellule de retenue | `h-5 w-8 px-0 text-[10px]` |
| Input de réponse libre (étroit) | `w-14 px-1 py-1.5 text-sm` |
| Input de réponse libre (large) | `w-24 px-3 py-2 text-sm` |
| Input pleine largeur | `w-full px-4 py-3 text-sm` |

---

### Tableaux en colonne — opérations arithmétiques

**Référence : `DivColumnCard` / `ColumnGridCard` / `Mul2DigitCard` dans `GenericModuleContent.tsx`.**

Structure obligatoire :

```tsx
const CELL_W = 32;

<table className="mx-auto border-collapse table-fixed">
  <thead>
    <tr>
      {/* Colonne label opération (gauche) — largeur fixe, sans padding */}
      <td style={{ width: 24, padding: 0 }} />
      {/* En-têtes de colonnes — M C D U etc. */}
      {COL_LABELS.map(h => (
        <th key={h} style={{ width: CELL_W, padding: 0 }}
          className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {/* Ligne de retenues */}
    <tr>
      <td style={{ width: 24, padding: 0 }}
        className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R</td>
      {cols.map(col => (
        <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
          {carryCell(col)}   {/* h-5 w-8 — voir ci-dessous */}
        </td>
      ))}
    </tr>
    {/* Lignes d'opérandes et de résultat */}
    <tr>
      <td style={{ width: 24, padding: 0 }}
        className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">+</td>
      {cols.map(col => (
        <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
          {cellInput(col)}   {/* h-8 w-8 — voir ci-dessous */}
        </td>
      ))}
    </tr>
    {/* Séparateur horizontal */}
    <tr>
      <td colSpan={totalCols}>
        <div className="my-1 h-px bg-[var(--color-text-primary)]" />
      </td>
    </tr>
  </tbody>
</table>
```

**`cellInput` — chiffre normal (h-8) :**

```tsx
const cellInput = (col: number) => {
  const val = answers[col] ?? "";
  const ok = validated ? val.trim() === String(expected[col]) : null;
  if (ok === false) return (
    <div className="h-8 w-8 flex flex-col items-center justify-center border-amber-400">
      <span className="text-[9px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
      <span className="text-[9px] font-bold leading-none text-amber-600">{expected[col]}</span>
    </div>
  );
  return (
    <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
      onChange={e => setAnswers(prev => { /* ... */ })}
      onKeyDown={tabNav}
      onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
      className={`h-8 w-8 px-0 text-base ${MATH_TEXT_INPUT_BASE}`}
    />
  );
};
```

**`carryCell` — retenue (h-5, texte orange) :**

```tsx
const carryCell = (col: number) => {
  const val = carryInputs[col] ?? "";
  const expected = q.carries[col];
  if (validated && expected !== null && val.trim() !== String(expected)) return (
    <div className="h-5 w-8 flex flex-col items-center justify-center border-amber-400">
      <span className="text-[8px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
      <span className="text-[8px] font-bold leading-none text-amber-600">{expected}</span>
    </div>
  );
  return (
    <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
      onChange={e => { const v = e.target.value.replace(/[^0-9]/g, "").slice(-1); onCarryChange(col, v); }}
      onKeyDown={tabNav}
      onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
      className={`h-5 w-8 px-0 text-[10px] text-orange-500 ${MATH_TEXT_INPUT_BASE}`}
    />
  );
};
```

**`tabNav` — navigation Tab entre cellules d'une même carte :**

```tsx
function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key !== "Tab") return;
  e.preventDefault();
  const card = e.currentTarget.closest("[data-grid-card]"); // attribut data sur la div de carte
  if (!card) return;
  const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
  const idx = inputs.indexOf(e.currentTarget);
  const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
  if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
}
```

Ajouter `data-grid-card` (ou `data-divcol-card`) sur la `<div>` englobante de chaque carte.

---

### Processus de correction — pattern uniforme

#### Input de réponse libre (case unique)

```tsx
// État: wrongField = validated && résultat faux
if (wrongField) return (
  <div className={`${inputCls} border-amber-400 flex flex-col items-center justify-center`}>
    <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
    <span className="text-xs font-bold text-amber-600 leading-none">{correctAnswer}</span>
  </div>
);
return (
  <input type="text" inputMode="decimal" value={v} disabled={validated}
    onChange={e => setAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(filter, "") : a))}
    className={inputCls} />
);
```

#### Correction de fraction (numérateur / dénominateur)

```tsx
{isWrong ? (
  <div className="flex flex-col items-center rounded-xl border border-amber-400 px-2 py-1">
    <span className="text-xs text-[var(--color-text-primary)] leading-none">{userAns || "—"}</span>
    <span className="text-xs font-bold text-amber-600 leading-none">{correct}</span>
  </div>
) : (
  <input type="text" inputMode="numeric" value={userAns} disabled={validated}
    onChange={e => onChange(e.target.value.replace(/[^0-9]/g, ""))}
    className="w-14 px-1 py-1.5 text-sm text-center font-mono ..." />
)}
```

#### Règle de couleur correction

| État | Border | Background | Texte |
|------|--------|------------|-------|
| Idle | `border-[var(--color-border-default)]` | `bg-blue-50` | normal |
| Correct | `border-[var(--color-border-default)]` | `bg-blue-50 opacity-70` | normal |
| Faux | `border-amber-400` | transparent | — |
| Réponse attendue | — | — | `text-amber-600 font-bold` |
| Réponse utilisateur | — | — | `text-[var(--color-text-primary)] text-xs` |

---

### Pattern général d'un exercice complet

```tsx
export function MonExercice({
  exNum, validateCommand, onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number) => void;
}) {
  // 1. Génération des questions (stable via useState initializer)
  const [questions] = useState(() => genQuestions());

  // 2. État des réponses et validation
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  // 3. Logique de validation
  const doValidate = useCallback(() => {
    if (validated) return;
    const res = questions.map((q, i) => checkAnswer(answers[i], q));
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length / res.length);
  }, [validated, questions, answers, onValidated]);

  // 4. Déclenchement externe (bouton Valider du parent)
  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Consigne…</p>
      <div className="space-y-3">
        {questions.map((q, i) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] : null;
          const wrongField = ok === false;
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              {/* Rendu de la question ici */}
              {wrongField ? (
                <div className={`${inputCls} border-amber-400 flex flex-col items-center justify-center`}>
                  <span className="text-xs leading-none text-[var(--color-text-primary)]">{v || "—"}</span>
                  <span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span>
                </div>
              ) : (
                <input type="text" inputMode="numeric" value={v} disabled={validated}
                  onChange={e => setAnswers(prev => prev.map((a, j) => j === i ? e.target.value.replace(/[^0-9]/g, "") : a))}
                  className={inputCls} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

**Pour un exercice en colonne (plusieurs cartes), les états sont des tableaux 2D :**

```tsx
// answers[cardIdx][cellIdx]
const [answers, setAnswers] = useState<string[][]>(() =>
  config.questions.map(q => Array(q.totalCells).fill(""))
);
// carries[cardIdx][colIdx]
const [carryInputs, setCarryInputs] = useState<string[][]>(() =>
  config.questions.map(q => Array(q.totalCarryCols).fill(""))
);

const onChange = (cardIdx: number, cellIdx: number, val: string) =>
  setAnswers(prev => prev.map((row, i) => i === cardIdx ? row.map((c, j) => j === cellIdx ? val : c) : row));

const onCarryChange = (cardIdx: number, col: number, val: string) =>
  setCarryInputs(prev => prev.map((row, i) => i === cardIdx ? row.map((c, j) => j === col ? val : c) : row));
```

---

### Affichage auto-ajusté au texte (colonnes alignées verticalement)

Pour les colonnes d'opérandes dans un tableau en colonne, le texte s'aligne naturellement grâce à `table-fixed` + `width: CELL_W` uniforme. Chaque chiffre occupe exactement `CELL_W = 32px` avec `padding: 2` de chaque côté → espacement de 2px entre les cases (elles ne se touchent pas).

Les zéros de tête ne sont pas obligatoires : un chiffre `0` avant le premier chiffre significatif est accepté vide ou « 0 ». Implémenté via :

```tsx
const isLeading = expected === 0 && col < firstSignificantCol;
const ok = isLeading
  ? (val.trim() === "" || val.trim() === "0")  // vide ou 0 accepté
  : val.trim() === String(expected);
```

---

## Processus de progression et évaluations

### Barème et seuils (lib/scoring.ts)

```ts
PASSING_GRADE = 4.0          // note minimale pour valider un sous-module / module
MAX_EVAL_ATTEMPTS = 3        // après 3 tentatives, le module est débloqué de force
```

**Barème suisse `percentToSwissGrade(percent)`** (percent = 0–100) :

| % correct | Note /6 |
|-----------|---------|
| < 40 % | 2.0 |
| 40–49 % | 3.0 |
| 50–59 % | 3.5 |
| 60–69 % | 4.0 ✓ |
| 70–79 % | 4.5 |
| 80–89 % | 5.0 |
| 90–95 % | 5.5 |
| ≥ 96 % | 6.0 |

**Barème linéaire `linearSwissGrade(correct, total)`** : `(correct/total × 5 + 1)` arrondi à 0.1.
→ Utilisé pour les sous-modules (exercices comptabilisés).

**Médailles `medalFromPercent(percent)`** :

| % | Médaille |
|---|---------|
| ≥ 95 % | 🥇 gold |
| ≥ 80 % | 🥈 silver |
| ≥ 60 % | 🥉 bronze |

**Niveaux de validation (`level` dans le profil) :**

| Niveau | Note minimale |
|--------|--------------|
| `"base"` | ≥ 4.0 |
| `"moyen"` | ≥ 5.0 |
| `"avance"` | ≥ 5.5 |

---

### États d'un module (`ModuleProgressState`)

```
locked → available → in_progress → completed
```

- **locked** : prérequis non remplis
- **available** : prérequis OK, pas encore commencé
- **in_progress** : au moins un sous-module complété
- **completed** : tous les sous-modules passés (note ≥ 4.0) **OU** 3 tentatives d'évaluation atteintes

Transition automatique via `recomputeLocks(p)` après chaque sauvegarde.

---

### Flux d'un sous-module (entraînement + évaluation)

```
Théorie → Exercices entraînement → eval_start → Exercices évaluation → results → pass_toggle
```

| Étape | Description |
|-------|-------------|
| `theory` | Affichage de la théorie (pas de score) |
| Exercices entraînement | Score non sauvegardé, l'élève peut recommencer |
| `eval_start` | Écran de départ évaluation ("Prêt ?") |
| Exercices évaluation | Scores accumulés dans `evalScores` |
| `results` | Affichage note + médaille, déclenchement `finishEval()` |
| `pass_toggle` | Bouton Oui/Non pour modules sans exercices mesurables |

---

### Comment un exercice remonte son score

Chaque composant exercice reçoit `validateCommand: number` et `onValidated: (score: number) => void` (score = ratio 0–1) :

```tsx
// Dans le composant exercice
const doValidate = useCallback(() => {
  if (validated) return;
  const res = questions.map((q, i) => checkAnswer(answers[i], q));
  setResults(res);
  setValidated(true);
  const score = res.filter(Boolean).length / res.length; // 0.0 à 1.0
  onValidated(score);
}, [validated, questions, answers, onValidated]);

useEffect(() => {
  if (validateCommand > 0) doValidate();
}, [validateCommand, doValidate]);
```

Le parent accumule les scores dans `evalScores[stepIndex] = { c: correct, t: total }`.

---

### Sauvegarde de la progression

**Compléter un sous-module** (entraînement sans score, ou après évaluation) :

```ts
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { linearSwissGrade } from "@/lib/scoring";

// Sans score (entraînement libre)
const p = loadProgress();
saveProgress(completeSubmodule(p, "A3", "A3-1"));

// Avec score (évaluation mesurée)
const correct = 8;   // réponses correctes
const total = 10;    // total questions
const grade = linearSwissGrade(correct, total); // → note /6
const p = loadProgress();
saveProgress(completeSubmodule(p, "A3", "A3-1", correct, total, grade));
```

**`completeSubmodule` est idempotent** : si le sous-module est déjà `completed` avec une note ≥ 4.0, une note inférieure ne dégradera pas le score.

**Auto-complétion du module parent** : quand tous les sous-modules ont `grade ≥ PASSING_GRADE`, le module parent passe automatiquement à `completed` et la note du module = moyenne des notes sous-modules.

---

### Déverrouillage forcé après 3 tentatives

```ts
// Après MAX_EVAL_ATTEMPTS = 3 échecs :
// - Le module passe à state: "completed"
// - reviewFlag: true  → signale une révision recommandée
// - medal: "bronze"   → médaille bronze forcée
// - Les modules suivants se déverrouilleront
```

L'élève peut continuer même sans avoir réussi, pour ne pas bloquer la progression.

---

### Snooze d'évaluation

```ts
import { snoozeEvaluation } from "@/lib/progress/math-progress";

// Reporter l'évaluation de 7 jours
const p = loadProgress();
saveProgress(snoozeEvaluation(p, "A3", 7));
```

`moduleNeedsEvaluation(moduleId, p)` retourne `false` tant que le snooze est actif.

---

### Résumé du cycle de vie complet

```
1. Élève ouvre un module disponible → state: "available" → "in_progress"
2. Complète chaque sous-module (entraînement)
   → completeSubmodule() à la fin de chaque leçon
   → subProgress s'incrémente
3. Quand tous les sous-modules sont faits, l'évaluation est proposée
4. Évaluation → score calculé → linearSwissGrade() → note /6
5. Si grade ≥ 4.0 → sous-module + module parent → "completed"
   Si grade < 4.0 → evaluationAttempts++
   Si evaluationAttempts ≥ 3 → forced unlock → "completed" (reviewFlag: true)
6. recomputeLocks() déverrouille les modules suivants dont les prérequis sont satisfaits
```
