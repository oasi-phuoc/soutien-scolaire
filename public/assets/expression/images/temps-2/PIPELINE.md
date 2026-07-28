# Pipeline temps-2 — régénération scènes

## Style (obligatoire — référence `scene/102 (2).webp`)

Toujours passer `reference_image_paths: ["/workspace/public/assets/expression/images/scene/102 (2).webp"]` et `aspect_ratio: "4:3"`.

Préfixe de prompt (anglais, pour le modèle image) :

```
Soft painterly anime illustration matching the style reference exactly: delicate colored (not black) linework, warm earthy muted palette (olive, wood browns, cream, soft lavender accents), soft diffused golden-hour lighting, subtle watercolor/gouache paper-grain texture, cozy slice-of-life mood. Landscape 4:3.
```

Suffixe :

```
No text, no logos, no watermarks, no readable UI text.
```

## Règles de contenu

1. **Contexte/thème** = `key` + `tags` du manifeste (garder le même thème lexical).
2. **Personnages** = nouveaux (âge, ethnie, coiffure, vêtements différents de la source).
3. **Action** = nouveau moment dans le même thème (pas une copie de la pose source).
4. Lire brièvement l’image source `public/assets/expression/images/scene/<src>` pour comprendre le décor, puis inventer une autre action.
5. Ne pas régénérer `102 (2).webp` (déjà copié).

## Finalisation

Après chaque `GenerateImage` (fichier dans `/opt/cursor/artifacts/assets/<filename>.png`) :

```bash
cd /workspace && node scripts/finalize-temps2-image.cjs "/opt/cursor/artifacts/assets/<filename>.png" "<outName.webp>"
```

Le `.webp` doit arriver dans `public/assets/expression/images/temps-2/`.

## Lots

Fichiers JSON dans `public/assets/expression/images/temps-2/batches/batch-NNN.json`.
Chaque entrée : `{ src, stem, out, key, tags }`.

## Diversité personnages (selon index `i`)

Alterner : enfants / ados / adultes / seniors ; genres variés ; apparences diverses (cheveux, teint, lunettes, barbe, hijab, fauteuil, etc.) ; vêtements contemporains réalistes.
