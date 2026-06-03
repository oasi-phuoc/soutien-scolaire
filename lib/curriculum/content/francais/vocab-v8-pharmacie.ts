import type { VocabTheme } from "../../vocabulary-data";

export const V8_PHARMACIE_THEME: VocabTheme = {
  slug: "v8-pharmacie",
  code: "V8.4",
  title: "La pharmacie",
  section: "V8",
  words: [
    { word: "médicament", image: "médicament.jpg",  article: "le",  gender: "m", definition: "substance pour traiter une maladie" },
    { word: "ordonnance", image: "ordonnance.jpg",  article: "l'",  gender: "f", definition: "document du médecin pour les médicaments" },
    { word: "sirop", image: "sirop.jpg",       article: "le",  gender: "m", definition: "médicament liquide sucré" },
    { word: "comprimé", image: "comprimé.jpg",    article: "le",  gender: "m", definition: "médicament solide en forme de pastille" },
    { word: "gélule", image: "gélule.jpg",      article: "la",  gender: "f", definition: "capsule contenant un médicament en poudre" },
    { word: "pommade", image: "pommade.jpg",     article: "la",  gender: "f", definition: "médicament gras à appliquer sur la peau" },
    { word: "crème", image: "crème.jpg",       article: "la",  gender: "f", definition: "préparation épaisse pour la peau" },
    { word: "pansement", image: "pansement.jpg",   article: "le",  gender: "m", definition: "protection adhésive pour une blessure" },
    { word: "thermomètre", image: "thermomètre.jpg", article: "le",  gender: "m", definition: "instrument pour mesurer la température" },
    { word: "spray", image: "spray.jpg",       article: "le",  gender: "m", definition: "médicament en vaporisateur" },
    { word: "goutte", image: "goutte.jpg",      article: "la",  gender: "f", definition: "médicament liquide dosé à la goutte" },
    { word: "pharmacie", image: "pharmacie.jpg",   article: "la",  gender: "f", definition: "magasin où l'on achète les médicaments" },
    { word: "dosette", image: "dosette.jpg",     article: "la",  gender: "f", definition: "petite dose unitaire de médicament" },
    { word: "vitamine", image: "vitamine.jpg",    article: "la",  gender: "f", definition: "substance nutritive essentielle pour l'organisme" },
    { word: "boîte", image: "boîte.jpg",       article: "la",  gender: "f", definition: "emballage d'un médicament" },
  ],
  sentences: [
    { sentence: "Le médecin prescrit un ___ pour la toux.",              answer: "sirop" },
    { sentence: "Il faut mettre un ___ sur la coupure.",                 answer: "pansement" },
    { sentence: "Elle prend sa ___ à la pharmacie avec l'ordonnance.",  answer: "boîte" },
    { sentence: "Le ___ indique que tu as 38°C de fièvre.",              answer: "thermomètre" },
    { sentence: "Elle va à la ___ pour acheter ses médicaments.",         answer: "pharmacie" },
  ],
};
