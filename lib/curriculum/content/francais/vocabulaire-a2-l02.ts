import type { VocabLesson } from "../../vocabulary-data";

export const A2_VOC_L02: VocabLesson = {
  slug: "a2-voc-l02",
  code: "V.14",
  level: "A2",
  title: "La santé et le médecin",
  theory: [
    { type: "heading", text: "Chez le médecin" },
    {
      type: "vocab",
      title: "Personnes et lieux",
      items: [
        "un médecin / un docteur",
        "un(e) infirmier/infirmière (nurse)",
        "un(e) pharmacien/pharmacienne",
        "un hôpital",
        "une clinique",
        "une pharmacie",
        "un cabinet médical (doctor's office)",
        "une salle d'attente",
      ],
    },
    {
      type: "vocab",
      title: "Documents médicaux",
      items: [
        "prendre un rendez-vous (to make an appointment)",
        "une ordonnance (prescription)",
        "un médicament (medicine)",
        "un comprimé (tablet)",
        "une gélule (capsule)",
        "un sirop (syrup)",
        "une prise de sang (blood test)",
      ],
    },
    {
      type: "heading", text: "Les symptômes" },
    {
      type: "vocab",
      title: "Expressions pour décrire la santé",
      items: [
        "avoir de la fièvre (to have a fever)",
        "tousser (to cough)",
        "éternuer (to sneeze)",
        "avoir mal à... (to have a pain in...)",
        "être fatigué(e) (to be tired)",
        "être enrhumé(e) (to have a cold)",
        "avoir des nausées (to feel nauseous)",
        "vomir (to vomit)",
        "être blessé(e) (to be injured)",
        "saigner (to bleed)",
      ],
    },
    {
      type: "heading", text: "Donner des conseils médicaux",
    },
    {
      type: "rule",
      text: "Il faut + infinitif ou Vous devez + infinitif pour donner des conseils ou instructions.",
      examples: [
        { correct: "Il faut se reposer et boire beaucoup d'eau." },
        { correct: "Vous devez prendre un comprimé trois fois par jour." },
        { correct: "Il ne faut pas sortir avec de la fièvre." },
        { correct: "Vous devez éviter le sport pendant une semaine." },
      ],
    },
    {
      type: "note",
      text: "En France, pour un remboursement des frais médicaux, il faut être inscrit à la Sécurité sociale.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le symptôme et sa description",
      instruction: "Reliez chaque expression à sa signification en français.",
      pairs: [
        { left: "avoir de la fièvre", right: "température élevée" },
        { left: "tousser", right: "faire le son « touh touh »" },
        { left: "une ordonnance", right: "document du médecin pour les médicaments" },
        { left: "être enrhumé(e)", right: "avoir un rhume" },
        { left: "un comprimé", right: "médicament solide à avaler" },
        { left: "une prise de sang", right: "analyse du sang" },
      ],
    },
    {
      type: "fill",
      title: "Chez le médecin",
      instruction: "Complétez les phrases avec le bon mot.",
      items: [
        { sentence: "Je dois ___ un rendez-vous chez le médecin.", hint: "prendre", answer: "prendre" },
        { sentence: "Le médecin me donne une ___ pour acheter les médicaments.", hint: "ordonnance", answer: "ordonnance" },
        { sentence: "J'ai de la fièvre, je dois ___ au lit.", hint: "rester", answer: "rester" },
        { sentence: "Prenez ce ___ deux fois par jour après les repas.", hint: "comprimé", answer: "comprimé" },
        { sentence: "Il ___ beaucoup depuis ce matin, il est peut-être malade.", hint: "tousse", answer: "tousse" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon conseil médical",
      instruction: "Choisissez la bonne expression pour compléter la phrase.",
      items: [
        { sentence: "Tu as 39° de fièvre. Il faut ___ et boire beaucoup d'eau.", choices: ["te reposer", "faire du sport", "travailler", "sortir"], correctIdx: 0 },
        { sentence: "Le médecin me dit : « Vous ___ prendre ce médicament trois fois par jour. »", choices: ["devez", "pouvez", "voulez", "aimez"], correctIdx: 0 },
        { sentence: "Pour acheter les médicaments, j'ai besoin d'une ___.", choices: ["ordonnance", "prise de sang", "fièvre", "gélule"], correctIdx: 0 },
        { sentence: "J'ai mal à la gorge et je ___.", choices: ["tousse", "saigne", "éternue", "vomis"], correctIdx: 0 },
      ],
    },
  ],
};
