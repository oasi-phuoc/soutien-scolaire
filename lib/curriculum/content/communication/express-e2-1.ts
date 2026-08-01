import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E2_1_TRAINING, E2_1_EVAL } from "./express-e2-1-listening";
import { E2_1_CE, E2_1_PO, E2_1_PE } from "./express-e2-1-cpe";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E2_1: CommunicationLesson = {
  id: "E2-1",
  code: "E2.1",
  title: "Décrire son logement",
  prerequisiteFrenchSlugs: ["v4-type-logement", "v4-pieces-maison", "v4-equipements", "a1-gr-l04"],
  prerequisiteCommIds: ["E1-3"],
  theory: [
    { type: "heading", text: "Décrire son logement", black: true, trans: t("Describing your home") },
    {
      type: "prerequisites",
      items: [
        { code: "E1.3", title: "Inviter à une fête", href: "/communication/E1-3" },
        { code: "V4.1", title: "Types de logement", href: "/francais/vocabulaire/v4-type-logement" },
        { code: "V4.2", title: "Pièces", href: "/francais/vocabulaire/v4-pieces-maison" },
        { code: "G1.3", title: "Articles", href: "/francais/grammaire/a1-gr-l04" }
      ],
    },
    {
      type: "plain",
      text: "Pour décrire un logement, on utilise les **articles** définis et indéfinis : **un** studio, **une** chambre, **le** salon, **des** pièces lumineuses.",
      trans: t("Describing your home"),
    },
    { type: "highlight", title: "Articles définis et indéfinis", trans: t("Articles définis et indéfinis") },
    {
      type: "section",
      items: [
        "**Un** appartement / **une** maison",
        "**Le** salon, **la** cuisine, **les** toilettes",
        "**Des** pièces lumineuses",
        "Il y a **un** balcon."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Tu habites dans un studio ?", "Non, dans un appartement."],
        ["C'est lumineux ?", "Oui, c'est très lumineux."],
        ["C'est à quel étage ?", "Au 3e."],
        ["Tu as un balcon ?", "Oui, un petit balcon."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(42),
      audioLabel: "Audio 042",
      lines: [
        { role: "A", text: "Tu habites dans un studio ?" },
        { role: "B", text: "Non, dans un appartement." },
        { role: "A", text: "C'est grand ?" },
        { role: "B", text: "Oui, il y a un salon, une chambre et une cuisine équipée." },
        { role: "A", text: "C'est lumineux ?" },
        { role: "B", text: "Non, c'est sombre." },
        { role: "A", text: "C'est calme ?" },
        { role: "B", text: "Non, c'est bruyant." },
        { role: "A", text: "Et la salle de bains, elle est grande ?" },
        { role: "B", text: "Oui, elle est grande." },
        { role: "A", text: "Tu as un balcon ?" },
        { role: "B", text: "Oui, j'ai un petit balcon." },
        { role: "A", text: "C'est à quel étage ?" },
        { role: "B", text: "C'est au 3e." },
        { role: "A", text: "C'est où ?" },
        { role: "B", text: "C'est au centre-ville." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "studio / appartement", example: "J'habite dans un appartement." },
        { fr: "lumineux / sombre", example: "C'est lumineux." },
        { fr: "étage", example: "Au 3e étage." },
        { fr: "cuisine équipée", example: "Il y a une cuisine équipée." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E2_1_TRAINING.map((a) =>
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
  evalExercises: E2_1_EVAL.map((a) =>
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
  ceExercise: E2_1_CE,
  poDialogues: E2_1_PO,
  pePrompts: E2_1_PE,
};
