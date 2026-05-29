import type { VocabTheme } from "../../vocabulary-data";

export const V7_RESTAURANT_THEME: VocabTheme = {
  slug: "v7-restaurant",
  code: "V7.3",
  title: "Le restaurant",
  section: "V7",
  words: [
    { word: "table",      article: "la",  gender: "f", definition: "meuble où l'on mange au restaurant" },
    { word: "assiette",   article: "l'",  gender: "f", definition: "plat creux ou plat pour servir les aliments" },
    { word: "couvert",    article: "le",  gender: "m", definition: "ensemble couteau, fourchette, cuillère" },
    { word: "cuillère",   article: "la",  gender: "f", definition: "ustensile pour les soupes et desserts" },
    { word: "couteau",    article: "le",  gender: "m", definition: "ustensile tranchant pour couper" },
    { word: "fourchette", article: "la",  gender: "f", definition: "ustensile à dents pour piquer les aliments" },
    { word: "verre",      article: "le",  gender: "m", definition: "récipient pour boire les liquides" },
    { word: "serviette",  article: "la",  gender: "f", definition: "tissu pour s'essuyer la bouche" },
    { word: "entrée",     article: "l'",  gender: "f", definition: "premier plat d'un repas au restaurant" },
    { word: "plat",       article: "le",  gender: "m", definition: "plat principal d'un repas" },
    { word: "dessert",    article: "le",  gender: "m", definition: "dernier plat sucré d'un repas" },
    { word: "menu",       article: "le",  gender: "m", definition: "liste des plats proposés" },
    { word: "addition",   article: "l'",  gender: "f", definition: "note à payer à la fin du repas" },
    { word: "serveur",    article: "le",  gender: "m", definition: "personne qui sert les clients" },
    { word: "boisson",    article: "la",  gender: "f", definition: "liquide à boire" },
  ],
  sentences: [
    { sentence: "Je voudrais l'___, s'il vous plaît.",                   answer: "addition" },
    { sentence: "Le ___ apporte les plats aux clients.",                 answer: "serveur" },
    { sentence: "Comme ___, je prends une salade.",                      answer: "entrée" },
    { sentence: "Il regarde le ___ pour choisir son plat.",              answer: "menu" },
    { sentence: "Quelle ___ prenez-vous, de l'eau ou du jus ?",         answer: "boisson" },
  ],
};
