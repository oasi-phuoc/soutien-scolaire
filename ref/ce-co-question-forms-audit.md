# Audit des formes de questions CE / CO

_Généré par `scripts/audit-ce-co-question-forms.cjs` — 2026-07-05_

## Règles appliquées (juillet 2026)

1. **Questions nom/prénom/ville/commerce supprimées** — ex. « Qui laisse ce message ? », « Comment s'appelle le bar ? », « Quelle ville… »
2. **Texte à saisir** — la consigne affichée est la **question complète** (`textQ`), pas une phrase à trous (`fillQ`). L'élève répond sur un trait pleine largeur.
3. **Correction** — le mot attendu doit être **contenu** dans la réponse (`includes` après normalisation).

## CO — questions de pool

- Questions écrites : **950**
- Questions actives (après exclusion noms) : **899**
- Questions exclues (noms) : **51**
- Format saisie : prompt = `textQ` (question complète)
- QCM image identique au QCM texte : **375**

Exemples exclus :
- co-questions-base-messages.ts · m1-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m1-q3 — Comment s'appelle le bar ?
- co-questions-base-messages.ts · m2-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m3-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m3-q2 — D'où revient Florian ?
- co-questions-base-messages.ts · m4-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m5-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m6-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m6-q2 — Quelle ville vont-ils visiter ?
- co-questions-base-messages.ts · m7-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m8-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m9-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m10-q1 — Qui laisse ce message ?
- co-questions-base-messages.ts · m11-q1 — Qui appelle ?
- co-questions-base-messages.ts · m12-q1 — Qui appelle ?
- co-questions-base-messages.ts · m13-q1 — Qui appelle ?
- co-questions-base-messages.ts · m14-q1 — Qui appelle ?
- co-questions-base-messages.ts · m15-q1 — Qui appelle ?
- co-questions-base-messages.ts · m16-q1 — Qui appelle ?
- co-questions-moyen.ts · m26-q1 — Qui laisse ce message ?

## CO — tâches spéciales (mono-forme)

- Groupes `object_pick` : **12**
- Groupes `match_grid` : **14**

## CE — questions écrites

- Questions analysées : **228**
- QCM texte : **162**
- QCM image : **5**
- Texte à saisir : **61**
- Questions nom encore présentes (devrait être 0) : **0**

## Architecture

- Filtre noms : `isExcludedNameQuestion()` dans `co-questions-helpers.ts`, appliqué dans `buildPool`.
- Prompt saisie CO : `multiToTask(..., "fill")` utilise `textQ`.
- CE : questions mono-forme dans `ComprehensionEcritRunner.tsx` ; saisie = question + trait `w-full`.
