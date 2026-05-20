import type { VocabLesson } from "../../vocabulary-data";

export const A2_VOC_L06: VocabLesson = {
  slug: "a2-voc-l06",
  code: "V.18",
  level: "A2",
  title: "La famille et les relations",
  theory: [
    { type: "heading", text: "La famille" },
    {
      type: "vocab",
      title: "Membres de la famille",
      items: [
        "un père / une mère (father / mother)",
        "un frère / une sœur (brother / sister)",
        "un fils / une fille (son / daughter)",
        "un grand-père / une grand-mère (grandfather / grandmother)",
        "un petit-fils / une petite-fille (grandson / granddaughter)",
        "un oncle / une tante (uncle / aunt)",
        "un cousin / une cousine (cousin)",
        "un neveu / une nièce (nephew / niece)",
        "les parents (parents)",
        "les grands-parents (grandparents)",
        "un enfant / les enfants (child / children)",
      ],
    },
    {
      type: "heading", text: "La description physique",
    },
    {
      type: "rule",
      text: "Décrire les cheveux et les yeux.",
      examples: [
        { correct: "Il est blond / brun / châtain / roux." },
        { correct: "Elle a les cheveux longs / courts / frisés / raides." },
        { correct: "Il a les yeux bleus / verts / marron / noirs." },
        { correct: "Elle est grande / petite / de taille moyenne." },
      ],
    },
    {
      type: "vocab",
      title: "Apparence physique",
      items: [
        "blond(e) / brun(e) / châtain / roux (blonde/dark/chestnut/redhead)",
        "les cheveux longs / courts / mi-longs",
        "les cheveux frisés / raides / ondulés",
        "les yeux bleus / verts / marron / noirs / gris",
        "grand(e) / petit(e) / de taille moyenne",
        "mince / corpulent(e) (slim / heavy)",
        "avoir une barbe / des lunettes / un tatouage",
      ],
    },
    {
      type: "heading", text: "La personnalité",
    },
    {
      type: "vocab",
      title: "Adjectifs de caractère",
      items: [
        "sympa(thique) (nice)",
        "drôle / amusant(e) (funny)",
        "sérieux/sérieuse",
        "gentil/gentille (kind)",
        "timide (shy)",
        "bavard(e) (talkative)",
        "courageux/courageuse (brave)",
        "patient(e) / impatient(e)",
        "généreux/généreuse (generous)",
        "égoïste (selfish)",
      ],
    },
    {
      type: "heading", text: "Les relations",
    },
    {
      type: "vocab",
      title: "Vocabulaire des relations",
      items: [
        "un(e) ami(e) (friend)",
        "un(e) copain/copine (amical(e)) (friend, informal)",
        "mon copain / ma copine (amoureux/amoureuse) (boyfriend/girlfriend)",
        "mon mari / ma femme (husband / wife)",
        "un(e) partenaire (partner)",
        "se marier (to get married)",
        "divorcer (to divorce)",
        "se ressembler (to look alike)",
        "s'entendre bien avec (to get on well with)",
      ],
    },
    {
      type: "note",
      text: "Attention : « copain/copine » peut être amical (friend) ou amoureux (boyfriend/girlfriend) selon le contexte. On dit « mon copain » pour le petit ami.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer les membres de la famille",
      instruction: "Reliez chaque membre de la famille à sa définition.",
      pairs: [
        { left: "un oncle", right: "le frère du père ou de la mère" },
        { left: "une nièce", right: "la fille du frère ou de la sœur" },
        { left: "un cousin", right: "l'enfant de l'oncle ou de la tante" },
        { left: "une grand-mère", right: "la mère du père ou de la mère" },
        { left: "un gendre", right: "le mari de la fille" },
        { left: "une belle-sœur", right: "la femme du frère" },
      ],
    },
    {
      type: "fill",
      title: "Décrire une personne",
      instruction: "Complétez les phrases avec le bon adjectif.",
      items: [
        { sentence: "Il a les cheveux ___ et les yeux verts.", hint: "roux", answer: "roux" },
        { sentence: "Elle est très ___ : elle parle tout le temps !", hint: "bavarde", answer: "bavarde" },
        { sentence: "Mon frère est ___ : il fait tout pour aider les autres.", hint: "généreux", answer: "généreux" },
        { sentence: "Elle est ___ et n'aime pas parler en public.", hint: "timide", answer: "timide" },
        { sentence: "Il est ___ : toujours sérieux, jamais de blague.", hint: "sérieux", answer: "sérieux" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "La sœur de mon père est ma ___.", choices: ["tante", "cousine", "nièce", "belle-sœur"], correctIdx: 0 },
        { sentence: "Il a les cheveux ___ et frisés.", choices: ["châtain", "bleus", "verts", "grands"], correctIdx: 0 },
        { sentence: "Elle est très ___ : elle aide toujours les autres.", choices: ["généreuse", "égoïste", "timide", "impatiente"], correctIdx: 0 },
        { sentence: "Ils ___ beaucoup : même couleur de cheveux, même taille.", choices: ["se ressemblent", "se marient", "s'entendent", "se parlent"], correctIdx: 0 },
      ],
    },
  ],
};
