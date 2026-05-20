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
