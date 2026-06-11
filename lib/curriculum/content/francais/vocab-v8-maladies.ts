import type { VocabTheme } from "../../vocabulary-data";

export const V8_MALADIES_THEME: VocabTheme = {
  slug: "v8-maladies",
  code: "V8.2",
  title: "Les maladies",
  section: "V8",
  words: [
    { word: "rhume",        image: "rhume.png",    article: "le",  gender: "m", definition: "infection légère du nez et de la gorge" },
    { word: "grippe",       image: "grippe.png",   article: "la",  gender: "f", definition: "maladie virale avec fièvre et courbatures" },
    { word: "fièvre",       image: "fievre.png",   article: "la",  gender: "f", definition: "température corporelle anormalement élevée" },
    { word: "douleur",      image: "douleur.png",  article: "la",  gender: "f", definition: "sensation désagréable dans une partie du corps" },
    { word: "toux",         image: "toux.png",     article: "la",  gender: "f", definition: "expiration forcée et bruyante" },
    { word: "allergie",     image: "allergie.png", article: "l'",  gender: "f", definition: "réaction du corps à une substance étrangère" },
    { word: "coupure",      image: "coupure.png",  article: "la",  gender: "f", definition: "blessure faite par un objet tranchant" },
    { word: "brûlure",      image: "brulure.png",  article: "la",  gender: "f", definition: "lésion causée par la chaleur ou le feu" },
    { word: "blessure",     image: "blessure.png", article: "la",  gender: "f", definition: "lésion corporelle causée par un choc" },
    { word: "fracture",     image: "fracture.png", article: "la",  gender: "f", definition: "cassure d'un os" },
    { word: "mal de tête",                          article: "le",  gender: "m", definition: "douleur dans la tête" },
    { word: "mal de ventre",                        article: "le",  gender: "m", definition: "douleur dans le ventre" },
    { word: "fatigue",                              article: "la",  gender: "f", definition: "état d'épuisement physique ou mental" },
    { word: "infection",                            article: "l'",  gender: "f", definition: "invasion de l'organisme par des microbes" },
    { word: "nausée",       image: "nausee.png",   article: "la",  gender: "f", definition: "sensation d'envie de vomir" },
  ],
  sentences: [
    { sentence: "Il a de la ___, il doit rester au lit.",                answer: "fièvre" },
    { sentence: "J'ai un ___, j'éternue et j'ai le nez qui coule.",      answer: "rhume" },
    { sentence: "La ___ lui fait mal au bras depuis sa chute.",          answer: "fracture" },
    { sentence: "Il a une ___ aux arachides, il ne peut pas en manger.", answer: "allergie" },
    { sentence: "Elle a le ___ de ventre après avoir trop mangé.",       answer: "mal de ventre" },
  ],
};
