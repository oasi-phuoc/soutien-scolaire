import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E4_2_TRAINING, E4_2_EVAL } from "./express-e4-2-listening";
import { E4_2_CE, E4_2_PO, E4_2_PE } from "./express-e4-2-cpe";
import { E4_2_CE_EMAIL, E4_2_PE_EMAIL } from "./express-e4-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E4_2: CommunicationLesson = {
  id: "E4-2",
  code: "E4.2",
  title: "Aller au restaurant",
  prerequisiteFrenchSlugs: ["v7-restaurant", "a1-gr-l14", "a1-gr-l02"],
  prerequisiteCommIds: ["E4-1"],
  theory: [
    { type: "heading", text: "Aller au restaurant", black: true, trans: t("Going to a restaurant") },
    {
      type: "prerequisites",
      items: [
        { code: "E4.1", title: "Vêtements", href: "/communication/E4-1" },
        { code: "V10.1", title: "Restaurant", href: "/francais/vocabulaire/v7-restaurant" },
        { code: "G4.45", title: "Partitifs", href: "/francais/grammaire/a1-gr-l14" }
      ],
    },
    {
      type: "plain",
      text: "Au restaurant, on utilise les **articles partitifs** (**du**, **de la**, **de l'**, **des**) et la négation **pas de**.",
      trans: t("Going to a restaurant"),
    },
    { type: "highlight", title: "Partitifs et négation", trans: t("Partitifs et négation") },
    {
      type: "section",
      items: [
        "Je prends **du** poisson.",
        "Je bois **de l'**eau.",
        "Je ne mange **pas de** viande.",
        "**Pas d'**alcool pour moi."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["C'est pour déjeuner ?", "Oui, une table pour deux."],
        ["Tu prends du poisson ?", "Non, je suis végétarien."],
        ["Qu'est-ce que vous buvez ?", "Une carafe d'eau."],
        ["L'addition s'il vous plaît !", "On laisse un pourboire ?"]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(120),
      audioLabel: "Audio 120",
      lines: [
        { role: "A", text: "C'est pour déjeuner ?" },
        { role: "B", text: "Oui, vous avez une table pour deux ?" },
        { role: "A", text: "Qu'est-ce que vous buvez ?" },
        { role: "B", text: "Une carafe d'eau s'il vous plaît." },
        { role: "A", text: "Tu prends du poisson ou de la viande ?" },
        { role: "B", text: "Je ne mange pas de viande, je suis végétarien." },
        { role: "A", text: "Je peux prendre votre commande ?" },
        { role: "B", text: "Oui, une salade, un steak-frites et une tarte…" },
        { role: "A", text: "Tout va bien ?" },
        { role: "B", text: "C'est excellent !" },
        { role: "A", text: "L'addition s'il vous plaît !" },
        { role: "B", text: "On laisse un pourboire ?" }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "menu / addition", example: "L'addition s'il vous plaît." },
        { fr: "végétarien", example: "Je suis végétarien." },
        { fr: "pourboire", example: "On laisse un pourboire ?" },
        { fr: "carafe d'eau", example: "Une carafe d'eau." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E4_2_TRAINING.map((a) =>
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
  evalExercises: E4_2_EVAL.map((a) =>
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
  ceExercises: E4_2_CE,
  ceEmailExercises: E4_2_CE_EMAIL,
  poDialogues: E4_2_PO,
  pePrompts: E4_2_PE,
  peEmailPrompts: E4_2_PE_EMAIL,
};
