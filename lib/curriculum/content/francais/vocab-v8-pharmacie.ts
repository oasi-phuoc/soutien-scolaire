import type { VocabTheme } from "../../vocabulary-data";

export const V8_PHARMACIE_THEME: VocabTheme = {
  slug: "v8-pharmacie",
  code: "V8.4",
  title: "La pharmacie",
  section: "V8",
  words: [
    { word: "médicament",  article: "le",  gender: "m", definition: "substance pour traiter une maladie" },
    { word: "ordonnance",  article: "l'",  gender: "f", definition: "document du médecin pour les médicaments" },
    { word: "sirop",       article: "le",  gender: "m", definition: "médicament liquide sucré" },
    { word: "comprimé",    article: "le",  gender: "m", definition: "médicament solide en forme de pastille" },
    { word: "gélule",      article: "la",  gender: "f", definition: "capsule contenant un médicament en poudre" },
    { word: "pommade",     article: "la",  gender: "f", definition: "médicament gras à appliquer sur la peau" },
    { word: "crème",       article: "la",  gender: "f", definition: "préparation épaisse pour la peau" },
    { word: "pansement",   article: "le",  gender: "m", definition: "protection adhésive pour une blessure" },
    { word: "thermomètre", article: "le",  gender: "m", definition: "instrument pour mesurer la température" },
    { word: "spray",       article: "le",  gender: "m", definition: "médicament en vaporisateur" },
    { word: "goutte",      article: "la",  gender: "f", definition: "médicament liquide dosé à la goutte" },
    { word: "pharmacie",   article: "la",  gender: "f", definition: "magasin où l'on achète les médicaments" },
    { word: "dosette",     article: "la",  gender: "f", definition: "petite dose unitaire de médicament" },
    { word: "vitamine",    article: "la",  gender: "f", definition: "substance nutritive essentielle pour l'organisme" },
    { word: "boîte",       article: "la",  gender: "f", definition: "emballage d'un médicament" },
  ],
  sentences: [
    { sentence: "Le médecin prescrit un ___ pour la toux.",              answer: "sirop" },
    { sentence: "Il faut mettre un ___ sur la coupure.",                 answer: "pansement" },
    { sentence: "Elle prend sa ___ à la pharmacie avec l'ordonnance.",  answer: "boîte" },
    { sentence: "Le ___ indique que tu as 38°C de fièvre.",              answer: "thermomètre" },
    { sentence: "Elle va à la ___ pour acheter ses médicaments.",         answer: "pharmacie" },
  ],
};
