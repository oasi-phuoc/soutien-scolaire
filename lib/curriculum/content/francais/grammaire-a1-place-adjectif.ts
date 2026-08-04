import type { GrammarLesson } from "../../grammar-data";

/** Unité 19 — La place de l'adjectif : cas général (G3.5) */
export const A1_GR_PLACE_ADJECTIF: GrammarLesson = {
  slug: "a1-gr-place-adjectif",
  code: "G3.5",
  level: "A1",
  title: "La place de l'adjectif : cas général",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "En général, l'adjectif qualificatif se place {a}après{/a} le nom. → C'est un canapé confortable.",
        "Certains adjectifs courts se placent en général {a}avant{/a} le nom : beau, joli, petit, grand, gros, bon, mauvais, jeune, vieux, nouveau. → J'ai un nouveau lit et un joli tapis.",
        "Les adjectifs longs, de nationalité, de forme et de couleur se placent toujours {a}après{/a} le nom. → un ami japonais ; un fauteuil confortable ; une table ronde ; des meubles blancs.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Avant un nom qui commence par une voyelle ou un h muet : beau → bel ; vieux → vieil ; nouveau → nouvel. → un bel appartement ; un vieil homme ; un nouvel ordinateur.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "L'accent tonique tombe sur la dernière syllabe du groupe nominal. → C'est un beau vase. ; Tu as une jolie chaise.",
        "Liaison si l'adjectif avant le nom se termine par une consonne et que le nom commence par une voyelle ou un h muet. → Il a un petit appartement.",
        "Devant une voyelle ou un h muet, le {a}d{/a} de {a}grand{/a} se prononce comme un {a}t{/a}. → mon grand ami ; un grand hôpital.",
        "Avec liaison, {a}bon{/a}, {a}premier{/a}, {a}dernier{/a} se prononcent comme au féminin. → un bon acteur ; mon premier ordinateur.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Place de l'adjectif",
      instruction: "Choisissez la formulation correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___", choices: ["une jolie table rouge", "une rouge jolie table", "une table jolie rouge", "une jolie rouge table"], correctIdx: 0 },
        { sentence: "___", choices: ["un petit ordinateur portable", "un portable petit ordinateur", "un ordinateur petit portable", "un petit portable ordinateur"], correctIdx: 0 },
        { sentence: "___", choices: ["une belle lampe ancienne", "une ancienne belle lampe", "une lampe belle ancienne", "une belle ancienne lampe"], correctIdx: 0 },
        { sentence: "C'est ___ .", choices: ["un canapé confortable", "un confortable canapé", "canapé un confortable", "un canapé confortables"], correctIdx: 0 },
        { sentence: "J'ai ___ .", choices: ["un nouveau lit", "un lit nouveau", "nouveau un lit", "un nouveaux lit"], correctIdx: 0 },
        { sentence: "C'est ___ .", choices: ["un ami japonais", "un japonais ami", "ami un japonais", "un amie japonais"], correctIdx: 0 },
        { sentence: "C'est ___ .", choices: ["une table ronde", "une ronde table", "table une ronde", "une tables ronde"], correctIdx: 0 },
        { sentence: "C'est ___ .", choices: ["un bel appartement", "un beau appartement", "un belle appartement", "un beaux appartement"], correctIdx: 0 },
        { sentence: "C'est ___ .", choices: ["un vieil homme", "un vieux homme", "un vieille homme", "un vieuxs homme"], correctIdx: 0 },
        { sentence: "C'est ___ .", choices: ["un nouvel ordinateur", "un nouveau ordinateur", "un nouvelle ordinateur", "un nouveaux ordinateur"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Formes bel / vieil / nouvel",
      instruction: "Écrivez la forme correcte de l'adjectif devant le nom.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "un ___ appartement (beau)", hint: "voyelle", answer: "bel" },
        { sentence: "un ___ homme (vieux)", hint: "h muet", answer: "vieil" },
        { sentence: "un ___ ordinateur (nouveau)", hint: "voyelle", answer: "nouvel" },
        { sentence: "un ___ vase (beau)", hint: "consonne", answer: "beau" },
        { sentence: "un ___ lit (nouveau)", hint: "consonne", answer: "nouveau" },
        { sentence: "un ___ tapis (joli)", hint: "avant le nom", answer: "joli" },
        { sentence: "des meubles ___ (blanc)", hint: "après le nom", answer: "blancs" },
        { sentence: "une table ___ (rouge)", hint: "couleur après", answer: "rouge" },
        { sentence: "un fauteuil ___ (confortable)", hint: "long après", answer: "confortable" },
        { sentence: "un ami ___ (japonais)", hint: "nationalité après", answer: "japonais" },
      ],
    },
  ],
};
