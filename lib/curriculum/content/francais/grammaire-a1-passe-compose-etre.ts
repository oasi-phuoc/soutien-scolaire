import type { GrammarLesson } from "../../grammar-data";

/** Unité 38 — Le passé composé avec être (G4.8) */
export const A1_GR_PASSE_COMPOSE_ETRE: GrammarLesson = {
  slug: "a1-gr-passe-compose-etre",
  code: "G4.8",
  level: "A1",
  title: "Le passé composé avec être",
  theory: [
    {
      type: "heading",
      text: "Conjugaison — verbes de déplacement / état",
    },
    {
      type: "plain_list",
      items: [
        "14 verbes indiquant un changement de lieu ou d'état se conjuguent avec {a}être{/a} : aller / venir, entrer / sortir, monter / descendre, arriver / partir, passer / rester, naître / mourir, tomber, retourner.",
        "Les verbes dérivés aussi : revenir, devenir, rentrer, repartir…",
        "Exemple : Vous êtes revenu quand ? — Hier soir. Je suis rentré en train. Ma voiture est tombée en panne.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "être", "participe"],
      boldFirstCol: true,
      rows: [
        ["je", "suis", "parti(e)"],
        ["tu", "es", "arrivé(e)"],
        ["il / elle / on", "est", "allé / allée / allé(e)s"],
        ["nous", "sommes", "venu(e)s"],
        ["vous", "êtes", "monté(e)s"],
        ["ils / elles", "sont", "sortis / sorties"],
      ],
    },
    {
      type: "note",
      text: "Négation : {a}ne{/a} et {a}pas{/a} encadrent l'auxiliaire. → Je ne suis pas parti. ; Elle n'est pas sortie.",
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "plain_list",
      items: [
        "Six verbes ({a}monter, descendre, entrer, sortir, passer, retourner{/a}) prennent {a}avoir{/a} s'ils ont un COD. → J'ai monté les valises. ≠ Je suis monté(e) en ascenseur.",
        "Avec {a}être{/a}, le participe s'accorde en genre et en nombre avec le sujet. → Paul est arrivé. ; Marie est arrivée.",
        "Avec {a}on{/a} (= nous), le participe est généralement au pluriel. → Anne et moi, on est venues ensemble.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison des verbes pronominaux",
    },
    {
      type: "plain_list",
      items: [
        "Les verbes pronominaux se conjuguent avec {a}être{/a} : pronom réfléchi + être + participe passé.",
        "Exemple : Je me suis réveillé à 6 heures. ; Il s'est promené. ; Ils se sont amusés.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "pronom", "être", "participe", "suite"],
      boldFirstCol: true,
      rows: [
        ["je", "me", "suis", "perdu(e)", "dans le métro."],
        ["tu", "t'", "es", "réveillé(e)", "à 6 heures."],
        ["il", "s'", "est", "promené", ""],
        ["elle", "s'", "est", "promenée", "dans la ville."],
        ["on", "s'", "est", "promené(e)s", ""],
        ["nous", "nous", "sommes", "amusé(e)s", ""],
        ["vous", "vous", "êtes", "endormi(e)(s)", "rapidement."],
        ["ils", "se", "sont", "levés", "tard."],
        ["elles", "se", "sont", "levées", "tard."],
      ],
    },
    {
      type: "note",
      text: "Négation : Je ne me suis pas endormi(e) tôt. ; Nous ne nous sommes pas couché(e)s.",
    },
    {
      type: "plain_list",
      items: [
        "En général, le participe s'accorde avec le sujet. → Marie s'est amusée. ; Léo et Izia se sont ennuyés.",
        "Avec {a}on{/a} (= nous), le participe est généralement au pluriel. → Anne et moi, on s'est perdues.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Passé composé avec être",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ rentré en train.", choices: ["suis", "ai", "est", "avons"], correctIdx: 0 },
        { sentence: "Elle ___ sortie hier.", choices: ["est", "a", "sont", "suis"], correctIdx: 0 },
        { sentence: "Nous ___ arrivés à l'heure.", choices: ["sommes", "avons", "êtes", "sont"], correctIdx: 0 },
        { sentence: "Ils ___ partis tôt.", choices: ["sont", "ont", "sommes", "êtes"], correctIdx: 0 },
        { sentence: "Marie est ___ .", choices: ["arrivée", "arrivé", "arrivés", "arrivées"], correctIdx: 0 },
        { sentence: "J'___ monté les valises. (COD)", choices: ["ai", "suis", "est", "avons"], correctIdx: 0 },
        { sentence: "Je ___ monté en ascenseur.", choices: ["suis", "ai", "est", "ont"], correctIdx: 0 },
        { sentence: "Je ___ réveillé à 6 heures.", choices: ["me suis", "m'ai", "suis me", "ai me"], correctIdx: 0 },
        { sentence: "Ils se ___ amusés.", choices: ["sont", "ont", "sommes", "êtes"], correctIdx: 0 },
        { sentence: "Je ne ___ pas parti.", choices: ["suis", "ai", "me suis", "suis me"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'auxiliaire, le pronom ou le participe.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ rentré hier soir.", hint: "être", answer: "suis" },
        { sentence: "Elle n'___ pas sortie.", hint: "être", answer: "est" },
        { sentence: "Paul est ___ . (arriver)", hint: "ms", answer: "arrivé" },
        { sentence: "Marie est ___ . (arriver)", hint: "fs", answer: "arrivée" },
        { sentence: "J'ai ___ les valises. (monter)", hint: "+ COD → avoir", answer: "monté" },
        { sentence: "Je me ___ réveillé tôt.", hint: "être", answer: "suis" },
        { sentence: "Elle s'est ___ dans la ville. (promener)", hint: "fs", answer: "promenée" },
        { sentence: "Ils se sont ___ tard. (lever)", hint: "mp", answer: "levés" },
        { sentence: "Nous ne nous ___ pas couchés.", hint: "être", answer: "sommes" },
        { sentence: "Anne et moi, on s'est ___ . (perdre, f)", hint: "fp", answer: "perdues" },
      ],
    },
  ],
};
