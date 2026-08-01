import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E2_3_TRAINING, E2_3_EVAL } from "./express-e2-3-listening";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E2_3: CommunicationLesson = {
  id: "E2-3",
  code: "E2.3",
  title: "Respecter le règlement",
  prerequisiteFrenchSlugs: ["v5-structure-ecole", "a2-conj-l05"],
  prerequisiteCommIds: ["E2-2"],
  theory: [
    { type: "heading", text: "Respecter le règlement", black: true, trans: t("Respecting the building rules") },
    {
      type: "prerequisites",
      items: [
        { code: "E2.2", title: "Problème domestique", href: "/communication/E2-2" },
        { code: "V5.3", title: "Structure", href: "/francais/vocabulaire/v5-structure-ecole" },
        { code: "C6.3", title: "L'impératif", href: "/francais/conjugaison/a2-conj-l05" }
      ],
    },
    {
      type: "plain",
      text: "Pour donner des règles, on utilise **l'impératif** : **Tenez** les chiens en laisse. **Ne fumez pas** dans les couloirs.",
      trans: t("Respecting the building rules"),
    },
    { type: "highlight", title: "L'impératif", trans: t("L'impératif") },
    {
      type: "section",
      items: [
        "**Rangez** les vélos dans le local.",
        "**Mettez** votre nom sur la boîte.",
        "**Ne fumez pas** dans les couloirs.",
        "**Ne faites pas** de bruit après 22 h."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Où ranger les vélos ?", "Dans le local à vélos."],
        ["Où est le règlement ?", "Dans le hall d'entrée."],
        ["Les chiens ?", "Tenez-les en laisse."],
        ["Fumer ?", "Il est interdit de fumer."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(65),
      audioLabel: "Audio 065",
      lines: [
        { role: "A", text: "On peut ranger les vélos où, s'il vous plaît ?" },
        { role: "B", text: "Vous devez ranger votre vélo dans le local." },
        { role: "A", text: "Où est le local à vélos ?" },
        { role: "B", text: "À côté du garage." },
        { role: "A", text: "Où je peux jeter les ordures ?" },
        { role: "B", text: "Dans le local à poubelles." },
        { role: "A", text: "Est-ce qu'il y a un règlement ?" },
        { role: "B", text: "Le règlement est dans le hall d'entrée." },
        { role: "A", text: "Il est interdit de fumer !" },
        { role: "B", text: "Tenez votre chien en laisse." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "règlement", example: "Respectez le règlement." },
        { fr: "local à vélos", example: "Rangez le vélo dans le local." },
        { fr: "en laisse", example: "Tenez le chien en laisse." },
        { fr: "ordures", example: "Les ordures sont dans le local." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E2_3_TRAINING.map((a) =>
    listeningPoolExercise({
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }),
  ),
  evalExercises: E2_3_EVAL.map((a) =>
    listeningPoolExercise({
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }),
  ),
};
