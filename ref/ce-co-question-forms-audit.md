# Audit des formes de questions CE / CO

_Généré par `scripts/audit-ce-co-question-forms.cjs` — 2026-07-05_

Hypothèse vérifiée : « chaque question CE/CO existe normalement sous 3 formes — **QCM texte**, **QCM image**, **texte à saisir** ».

## Réponse courte

- **CO (compréhension orale)** : **VRAI** pour les questions de compréhension standard. Chaque question est écrite (`RawQ`) avec les 3 formes ; à l'exécution, `buildCoPartQuestions` en tire **une seule** au hasard par question.
  - **Exceptions (mono-forme par nature)** : les tâches `object_pick` (cliquer les objets entendus) et `match_grid` (associer dialogues ⇆ situations).
  - **Nuance** : pour 375/950 questions, la « QCM image » réutilise **les mêmes libellés texte** que la QCM texte (rendus en cadres texte, pas de vraie illustration).
- **CE (compréhension écrite)** : **FAUX**. Chaque question est écrite sous **une seule** forme fixe (QCM texte **ou** QCM image **ou** texte à saisir) — il n'y a pas de structure 3-en-1.

## CO — questions de pool (`buildPool` / `RawQ`)

- Questions analysées : **950**
- Avec QCM texte (`text[3]`) : **950**
- Avec QCM image (`img[3]`) : **950**
- Avec texte à saisir (`fill`) : **950**
- **Les 3 formes présentes pour chaque question : OUI ✅**
- QCM image identique au QCM texte (libellés réutilisés) : **375**
- Formes incomplètes/vides : **0**

## CO — tâches spéciales (mono-forme)

- Groupes `object_pick` : **12** (5 cartes image chacun)
- Groupes `match_grid` (association) : **14**

## CE — questions écrites (mono-forme)

- Questions analysées : **48**
- QCM texte seul : **34**
- QCM image seul : **5**
- Texte à saisir seul : **9**
- Questions offrant les 3 formes : **0**

## Où c'est défini (preuve dans le code)

- **CO — 3 formes garanties par le type** `RawQ` (`text[3]` + `img[3]` + `fill` obligatoires) dans `co-questions-helpers.ts` ; conversion via `multiToTask` et choix aléatoire du format dans `buildCoPartQuestions` (`FORMATS = ["text", "image", "fill"]`).
- **CE — mono-forme garantie par le type** `RawQuestionTask = Omit<ChoiceTask> | Omit<FillTask>` dans `ComprehensionEcritRunner.tsx` : une question est soit un `choice` (texte **ou** image via `image?`), soit un `fill` — jamais les trois.
