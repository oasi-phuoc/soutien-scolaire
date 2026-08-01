import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E7_1_TRAINING, E7_1_EVAL } from "./express-e7-1-listening";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E7_1: CommunicationLesson = {
  id: "E7-1",
  code: "E7.1",
  title: "Aller à l'hôtel",
  prerequisiteFrenchSlugs: ["v9-hotel", "v9-paysage", "a1-gr-l11"],
  prerequisiteCommIds: ["E6-3"],
  theory: [
    { type: "heading", text: "Aller à l'hôtel", black: true, trans: t("Going to a hotel") },
    {
      type: "prerequisites",
      items: [
        { code: "E6.3", title: "Aéroport", href: "/communication/E6-3" },
        { code: "V10.5", title: "Hôtel", href: "/francais/vocabulaire/v9-hotel" },
        { code: "V9.5", title: "Paysage", href: "/francais/vocabulaire/v9-paysage" }
      ],
    },
    {
      type: "plain",
      text: "Pour situer, on utilise les **prépositions de lieu** : **devant**, **derrière**, **à côté de**, **entre**, **à gauche de**, **à droite de**.",
      trans: t("Going to a hotel"),
    },
    { type: "highlight", title: "Prépositions de lieu", trans: t("Prépositions de lieu") },
    {
      type: "section",
      items: [
        "**Devant** la rivière",
        "**À côté de** la plage",
        "**Entre** la piscine et le parc",
        "**À droite de** la forêt"
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Vous avez des chambres ?", "Oui, pour combien de personnes ?"],
        ["C'est combien ?", "76 € la chambre."],
        ["Pension complète ?", "Non, demi-pension."],
        ["Où est l'hôtel ?", "À côté de la plage."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(197),
      audioLabel: "Audio 197",
      lines: [
        { role: "A", text: "Vous avez des chambres disponibles ?" },
        { role: "B", text: "Oui, pour combien de personnes ?" },
        { role: "A", text: "Je suis désolé, mais l'hôtel est complet." },
        { role: "B", text: "Je voudrais réserver une chambre pour deux personnes, du 11 au 12 mai, s'il vous plaît." },
        { role: "A", text: "J'ai une chambre avec deux petits lits ou un grand lit." },
        { role: "B", text: "Je prends la chambre avec un grand lit." },
        { role: "A", text: "Très bien, c'est à quel nom ?" },
        { role: "B", text: "Quel est le prix de la chambre ?" },
        { role: "A", text: "La chambre est à 76 €, le petit déjeuner est à 8 €, la demi-pension à 90 €." },
        { role: "B", text: "Où est situé l'hôtel ?" },
        { role: "A", text: "Le camping est à côté de la plage." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "réserver", example: "Je voudrais réserver." },
        { fr: "demi-pension", example: "La demi-pension à 90 €." },
        { fr: "bungalow", example: "Un bungalow pour 4." },
        { fr: "disponible", example: "Une chambre disponible ?" }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E7_1_TRAINING.map((a) =>
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
  evalExercises: E7_1_EVAL.map((a) =>
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
