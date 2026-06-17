import type { VocabTheme } from "../../vocabulary-data";

export const V4_EQUIPEMENTS_THEME: VocabTheme = {
  slug: "v4-equipements",
  code: "V4.3",
  title: "Les meubles",
  section: "V4",
  words: [
    { word: "table",    image: "table.png",    article: "la",  gender: "f", definition: "meuble plat pour poser des objets" },
    { word: "chaise",   image: "chaise.png",   article: "la",  gender: "f", definition: "siège à quatre pieds avec un dossier" },
    { word: "canapé",   image: "canape.png",   article: "le",  gender: "m", definition: "long siège rembourré pour plusieurs personnes" },
    { word: "fauteuil", image: "fauteuil.png", article: "le",  gender: "m", definition: "siège confortable avec accoudoirs et dossier" },
    { word: "bureau",   image: "bureau.png",   article: "le",  gender: "m", definition: "meuble pour travailler ou étudier" },
    { word: "armoire",  image: "armoire.png",  article: "l'",  gender: "f", definition: "grand meuble pour ranger les vêtements" },
    { word: "lit",      image: "lit.png",      article: "le",  gender: "m", definition: "meuble pour dormir" },
    { word: "étagère",  image: "etagere.png",  article: "l'",  gender: "f", definition: "planche fixée au mur pour poser des objets" },
    { word: "miroir",   image: "miroir.png",   article: "le",  gender: "m", definition: "surface réfléchissante pour se voir" },
    { word: "tabouret", image: "tabouret.png", article: "le",  gender: "m", definition: "petit siège sans dossier ni accoudoirs" },
    { word: "lavabo",                           article: "le",  gender: "m", definition: "vasque pour se laver les mains et le visage" },
  ],
  sentences: [
    { sentence: "Elle range ses vêtements dans l'___.",      answer: "armoire" },
    { sentence: "Elle pose son livre sur la ___.",           answer: "table" },
    { sentence: "Je travaille sur le ___.",                  answer: "bureau" },
    { sentence: "Je me détends sur le ___.",                 answer: "canapé" },
    { sentence: "Il dort dans son ___ confortable.",         answer: "lit" },
    { sentence: "Elle s'assoit sur le ___ devant la table.", answer: "fauteuil" },
    { sentence: "Il pose ses livres sur l'___.",             answer: "étagère" },
  ],
};
