import type { GrammarLesson } from "../../grammar-data";

/** Unité 20 — La place de l'adjectif : cas particuliers (G2.10) */
export const A1_GR_PLACE_ADJECTIF_PART: GrammarLesson = {
  slug: "a1-gr-place-adjectif-particuliers",
  code: "G2.10",
  level: "A1",
  title: "La place de l'adjectif : cas particuliers",
  theory: [
    {
      type: "heading",
      text: "Place et sens des adjectifs",
    },
    {
      type: "plain_list",
      items: [
        "Certains adjectifs changent de sens selon qu'ils sont placés avant ou après le nom.",
        "Exemple : une personne {a}seule{/a} (= sans amis) ≠ une {a}seule{/a} personne (= une seule).",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "grid",
      headers: ["Adjectif", "Après le nom", "Avant le nom"],
      boldFirstCol: true,
      rows: [
        ["ancien / ancienne", "voitures anciennes (= antiques)", "mon ancienne voiture (= d'avant)"],
        ["cher / chère", "une maison très chère (= coûteuse)", "Chère amie… (= chère / aimée)"],
        ["curieux / curieuse", "gens trop curieux (= indiscrets)", "une curieuse personne (= étrange)"],
        ["dernier / dernière", "le mois dernier (= qui précède)", "la dernière ville (= la plus récente)"],
        ["différent / différente", "endroits différents (= variés)", "différents pays (= plusieurs)"],
        ["grand / grande", "femmes trop grandes (= de taille)", "une grande sportive (= remarquable)"],
        ["pauvre / pauvre", "personnes pauvres (= sans argent)", "cette pauvre femme (= malheureuse)"],
        ["prochain / prochaine", "la semaine prochaine", "le prochain train (= le suivant)"],
        ["petit / petite", "hommes petits (= de taille)", "un petit voyageur (= qui voyage peu)"],
        ["propre / propre", "rues propres (= nettes)", "mon propre ascenseur (= à moi)"],
        ["seul / seule", "une personne seule (= isolée)", "une seule personne (= une seule)"],
      ],
    },
    {
      type: "heading",
      text: "Ordre des adjectifs",
    },
    {
      type: "plain_list",
      items: [
        "Quand plusieurs adjectifs accompagnent un nom, celui qui est le plus près du nom en définit le sens principal. → Une élection présidentielle espagnole.",
        "Les adjectifs numéraux se placent toujours avant les autres adjectifs. → Les quatre premiers étages ; les deux dernières places ; les trois prochains trains.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Sens selon la place",
      instruction: "Choisissez la formulation qui correspond au sens indiqué.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "(= antique) Je collectionne ___ .", choices: ["les voitures anciennes", "les anciennes voitures", "les voiture anciennes", "les anciennes voiture"], correctIdx: 0 },
        { sentence: "(= d'avant) ___ était verte.", choices: ["Mon ancienne voiture", "Ma voiture ancienne", "Mon voiture ancienne", "Ma ancienne voiture"], correctIdx: 0 },
        { sentence: "(= coûteuse) C'est ___ .", choices: ["une maison très chère", "une très chère maison", "une chère très maison", "une maison chère très"], correctIdx: 0 },
        { sentence: "(= malheureuse) Je plains ___ .", choices: ["cette pauvre femme", "cette femme pauvre", "cette pauvres femme", "cette pauvre femmes"], correctIdx: 0 },
        { sentence: "(= sans argent) Ce sont ___ .", choices: ["des personnes pauvres", "des pauvres personnes", "des personne pauvres", "des pauvres personne"], correctIdx: 0 },
        { sentence: "(= une seule) Il n'y a qu'___ dans la salle.", choices: ["une seule personne", "une personne seule", "une seules personne", "une seule personnes"], correctIdx: 0 },
        { sentence: "(= isolée) C'est ___ .", choices: ["une personne seule", "une seule personne", "une personnes seule", "une seule personnes"], correctIdx: 0 },
        { sentence: "(= à moi) J'ai ___ .", choices: ["mon propre ascenseur", "mon ascenseur propre", "ma propre ascenseur", "mon propres ascenseur"], correctIdx: 0 },
        { sentence: "(= nettes) Il y a beaucoup de ___ .", choices: ["rues propres", "propres rues", "rue propres", "propres rue"], correctIdx: 0 },
        { sentence: "___ étages.", choices: ["Les quatre premiers", "Les premiers quatre", "Les quatre premier", "Les premier quatre"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Placez l'adjectif",
      instruction: "Complétez avec l'adjectif à la bonne place (avant ou après).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je plains cette ___ femme. (pauvre = malheureuse)", hint: "avant", answer: "pauvre" },
        { sentence: "Ce sont des personnes ___ . (pauvre = sans argent)", hint: "après", answer: "pauvres" },
        { sentence: "Il n'y a qu'une ___ personne. (seul = une seule)", hint: "avant", answer: "seule" },
        { sentence: "C'est une personne ___ . (seul = isolée)", hint: "après", answer: "seule" },
        { sentence: "J'ai mon ___ ascenseur. (propre = à moi)", hint: "avant", answer: "propre" },
        { sentence: "des rues ___ (propre = nettes)", hint: "après", answer: "propres" },
        { sentence: "Mon ___ voiture était verte. (ancien = d'avant)", hint: "avant", answer: "ancienne" },
        { sentence: "des voitures ___ (ancien = antiques)", hint: "après", answer: "anciennes" },
        { sentence: "Les ___ derniers trains.", hint: "numéral avant", answer: "trois" },
        { sentence: "Les deux ___ places.", hint: "dernier", answer: "dernières" },
      ],
    },
  ],
};
