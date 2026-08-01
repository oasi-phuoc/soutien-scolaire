import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E7_2_TRAINING, E7_2_EVAL } from "./express-e7-2-listening";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E7_2: CommunicationLesson = {
  id: "E7-2",
  code: "E7.2",
  title: "Pratiquer une activité sportive",
  prerequisiteFrenchSlugs: ["v3-sport", "a1-gr-l14"],
  prerequisiteCommIds: ["E7-1"],
  theory: [
    { type: "heading", text: "Pratiquer une activité sportive", black: true, trans: t("Doing a sports activity") },
    {
      type: "prerequisites",
      items: [
        { code: "E7.1", title: "Hôtel", href: "/communication/E7-1" },
        { code: "V3.1", title: "Sport", href: "/francais/vocabulaire/v3-sport" }
      ],
    },
    {
      type: "plain",
      text: "On dit **faire du / de la / de l'** + sport : **faire du** vélo, **faire de la** voile, **faire de l'**escalade.",
      trans: t("Doing a sports activity"),
    },
    { type: "highlight", title: "Faire + article contracté", trans: t("Faire + article contracté") },
    {
      type: "section",
      items: [
        "**Faire du** VTT",
        "**Faire de la** voile",
        "**Faire de l'**escalade",
        "**Faire du** sport"
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["On joue au tennis ?", "Non, je déteste le tennis."],
        ["Il fait quel temps ?", "Il fait 20 °C."],
        ["Vous savez faire du ski ?", "Oui, mais je veux du surf."],
        ["Cours débutants ?", "Le mardi à 18 h."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(209),
      audioLabel: "Audio 209",
      lines: [
        { role: "A", text: "Vous proposez quelles activités ?" },
        { role: "B", text: "Vous pouvez faire du canoé-kayak ou de l'escalade." },
        { role: "A", text: "Vous savez faire du ski ?" },
        { role: "B", text: "Oui, je sais faire du ski, mais je voudrais prendre des cours de surf." },
        { role: "A", text: "Je ne sais pas nager et je voudrais apprendre." },
        { role: "B", text: "Les cours pour les débutants sont le mardi soir à 18 h." },
        { role: "A", text: "Vous louez des vélos pour la journée ou la demi-journée ?" },
        { role: "B", text: "Je loue des VTT pour la journée seulement." },
        { role: "A", text: "Aujourd'hui il fait trop chaud pour faire de l'escalade." },
        { role: "B", text: "Il fait quel temps demain ?" },
        { role: "A", text: "Demain, il fait mauvais." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "VTT / voile", example: "On fait du VTT." },
        { fr: "météo", example: "Demain il pleut." },
        { fr: "débutant", example: "Un cours pour débutants." },
        { fr: "louer", example: "Louer un canoé-kayak." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E7_2_TRAINING.map((a) =>
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
  evalExercises: E7_2_EVAL.map((a) =>
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
