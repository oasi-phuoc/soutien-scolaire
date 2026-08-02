import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E6_2_TRAINING, E6_2_EVAL } from "./express-e6-2-listening";
import { E6_2_CE, E6_2_PO, E6_2_PE } from "./express-e6-2-cpe";
import { E6_2_CE_EMAIL, E6_2_PE_EMAIL } from "./express-e6-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E6_2: CommunicationLesson = {
  id: "E6-2",
  code: "E6.2",
  title: "Voyager en transport public",
  prerequisiteFrenchSlugs: ["v9-transport", "a1-gr-l10"],
  prerequisiteCommIds: ["E6-1"],
  theory: [
    { type: "heading", text: "Voyager en transport public", black: true, trans: t("Travelling by public transport") },
    {
      type: "prerequisites",
      items: [
        { code: "E6.1", title: "Chemin", href: "/communication/E6-1" },
        { code: "V9.2", title: "Transport", href: "/francais/vocabulaire/v9-transport" }
      ],
    },
    {
      type: "plain",
      text: "Pour choisir un billet, on utilise **quel / quelle / quels / quelles** : **Quel** train ? **Quelle** place ? **Quels** horaires ?",
      trans: t("Travelling by public transport"),
    },
    { type: "highlight", title: "Adjectifs interrogatifs quel(le)(s)", trans: t("Adjectifs interrogatifs quel(le)(s)") },
    {
      type: "section",
      items: [
        "**Quel** train prenez-vous ?",
        "**Quelle** place préférez-vous ?",
        "**Quels** billets ?",
        "**Quelles** places sont libres ?"
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Aller simple ou aller-retour ?", "Un aller simple."],
        ["Côté fenêtre ou couloir ?", "Côté fenêtre."],
        ["Le TGV est complet ?", "Il y a des places dans le TER."],
        ["Combien dure le trajet ?", "1 h 45."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(175),
      audioLabel: "Audio 175",
      lines: [
        { role: "A", text: "Bonjour, nous sommes combien dans la voiture ?" },
        { role: "B", text: "Il y a deux autres passagers." },
        { role: "A", text: "Le trajet dure combien de temps ?" },
        { role: "B", text: "Le trajet dure 6 heures." },
        { role: "A", text: "Je voudrais un billet pour Marseille le 20 juin avec le TGV de 8 h. En 2e classe, s'il vous plaît." },
        { role: "B", text: "Désolé, le TGV est complet, mais il y a des places dans le TER de 8 h 06." },
        { role: "A", text: "Vous préférez une place de quel côté ?" },
        { role: "B", text: "Côté fenêtre, s'il vous plaît." },
        { role: "A", text: "Vous avez quelle place ?" },
        { role: "B", text: "Je suis voiture 4, place 35." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "TGV / TER", example: "Je prends le TGV." },
        { fr: "covoiturage", example: "J'adore le covoiturage." },
        { fr: "retard / grève", example: "Il y a du retard." },
        { fr: "billet", example: "Le billet est à 49 €." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E6_2_TRAINING.map((a) =>
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
  evalExercises: E6_2_EVAL.map((a) =>
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
  ceExercise: E6_2_CE,
  ceEmailExercise: E6_2_CE_EMAIL,
  poDialogues: E6_2_PO,
  pePrompts: E6_2_PE,
  peEmailPrompts: E6_2_PE_EMAIL,
};
