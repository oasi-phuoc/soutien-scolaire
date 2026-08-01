import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E4_1_TRAINING, E4_1_EVAL } from "./express-e4-1-listening";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E4_1: CommunicationLesson = {
  id: "E4-1",
  code: "E4.1",
  title: "Acheter des vêtements",
  prerequisiteFrenchSlugs: ["v6-vetements", "v6-accessoires", "v6-couleurs", "v6-matieres", "a2-conj-l04"],
  prerequisiteCommIds: ["E3-3"],
  theory: [
    { type: "heading", text: "Acheter des vêtements", black: true, trans: t("Buying clothes") },
    {
      type: "prerequisites",
      items: [
        { code: "E3.3", title: "Travail", href: "/communication/E3-3" },
        { code: "V6.1", title: "Vêtements", href: "/francais/vocabulaire/v6-vetements" },
        { code: "C6.1", title: "Conditionnel de politesse", href: "/francais/conjugaison/a2-conj-l04" }
      ],
    },
    {
      type: "plain",
      text: "Pour être poli en magasin, on utilise le **conditionnel** : **Je voudrais**, **Je pourrais**, **J'aimerais**.",
      trans: t("Buying clothes"),
    },
    { type: "highlight", title: "Politesse au conditionnel", trans: t("Politesse au conditionnel") },
    {
      type: "section",
      items: [
        "**Je voudrais** une robe.",
        "**Je pourrais** essayer ?",
        "**Vous aimeriez** autre chose ?",
        "**J'aimerais** voir des chaussures."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Je peux vous aider ?", "Je voudrais une robe."],
        ["Vous faites quelle taille ?", "Je fais du 38."],
        ["Ça vous plaît ?", "Oui, ça me plaît."],
        ["Quelle pointure ?", "Je fais du 39."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(109),
      audioLabel: "Audio 109",
      lines: [
        { role: "A", text: "Je peux vous aider ?" },
        { role: "B", text: "Je voudrais acheter une robe." },
        { role: "A", text: "Je pourrais essayer la robe bleue ?" },
        { role: "B", text: "C'est en coton ?" },
        { role: "A", text: "Vous aimeriez essayer autre chose ?" },
        { role: "B", text: "J'aimerais voir des chaussures." },
        { role: "A", text: "Vous faites quelle taille ?" },
        { role: "B", text: "Quelle est votre pointure ?" },
        { role: "A", text: "Je fais du 40." },
        { role: "B", text: "Quelle couleur ?" },
        { role: "A", text: "Bleu." },
        { role: "B", text: "Ça vous plaît ?" },
        { role: "A", text: "Oui, ça me plaît." },
        { role: "B", text: "Ça vous va bien !" }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "taille / pointure", example: "Je fais du 38." },
        { fr: "essayer", example: "Je pourrais essayer ?" },
        { fr: "ça me plaît", example: "Oui, ça me plaît." },
        { fr: "en laine / en coton", example: "C'est en laine." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E4_1_TRAINING.map((a) =>
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
  evalExercises: E4_1_EVAL.map((a) =>
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
