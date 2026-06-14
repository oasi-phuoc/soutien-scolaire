import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L01: GrammarLesson = {
  slug: "a1-gr-l01",
  code: "R1.1",
  level: "A1",
  title: "Pronoms sujets et le verbe être",
  theory: [
    { type: "heading", text: "Les pronoms sujets" },
    {
      type: "table",
      tables: [
        {
          verb: "être",
          rows: [
            { pronoun: "je", form: "suis" },
            { pronoun: "tu", form: "es" },
            { pronoun: "il / elle", form: "est" },
            { pronoun: "nous", form: "sommes" },
            { pronoun: "vous", form: "êtes" },
            { pronoun: "ils / elles", form: "sont" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "J'utilise ÊTRE pour la nationalité, la profession ou un adjectif.",
      examples: [
        { correct: "Je suis française." },
        { correct: "Il est professeur." },
        { correct: "Nous sommes étudiants." },
      ],
    },
    {
      type: "rule",
      text: "TU = informel (amis, famille) ; VOUS = formel ou pluriel.",
      examples: [
        { correct: "Salut ! Tu es française ? (informel)" },
        { correct: "Bonjour Madame, vous êtes française ? (formel)" },
      ],
    },
    {
      type: "note",
      text: "s'appeler : je m'appelle, tu t'appelles, il/elle s'appelle, nous nous appelons, vous vous appelez, ils/elles s'appellent",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms et être",
      instruction: "Choisissez la forme correcte de ÊTRE.",
      items: [
        { sentence: "Je ___ étudiant.", choices: ["suis", "est", "es", "sommes"], correctIdx: 0 },
        { sentence: "Elle ___ française.", choices: ["est", "suis", "êtes", "sont"], correctIdx: 0 },
        { sentence: "Nous ___ professeurs.", choices: ["sommes", "êtes", "suis", "est"], correctIdx: 0 },
        { sentence: "Ils ___ japonais.", choices: ["sont", "est", "suis", "sommes"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec être ou s'appeler",
      instruction: "Conjuguez le verbe entre parenthèses.",
      items: [
        { sentence: "Je ___ (s'appeler) Marco.", hint: "s'appeler", answer: "m'appelle" },
        { sentence: "Tu ___ (être) anglais ?", hint: "être", answer: "es" },
        { sentence: "Elle ___ (s'appeler) Aiko.", hint: "s'appeler", answer: "s'appelle" },
        { sentence: "Nous ___ (être) étudiants.", hint: "être", answer: "sommes" },
        { sentence: "Vous ___ (être) professeur ?", hint: "être", answer: "êtes" },
      ],
    },
  ],
};
