import type { VocabTheme } from "../../vocabulary-data";

export const V6_ACCESSOIRES_THEME: VocabTheme = {
  slug: "v6-accessoires",
  code: "V6.2",
  title: "Les accessoires",
  section: "V6",
  words: [
    { word: "sac",          article: "le",  gender: "m", definition: "poche ou sacoche pour transporter des objets" },
    { word: "chapeau",      article: "le",  gender: "m", definition: "coiffure rigide qui protège la tête" },
    { word: "casquette",    article: "la",  gender: "f", definition: "coiffure souple avec visière" },
    { word: "écharpe",      article: "l'",  gender: "f", definition: "longue pièce de tissu pour le cou" },
    { word: "ceinture",     article: "la",  gender: "f", definition: "bande pour tenir le pantalon" },
    { word: "gants",        article: "les", gender: "m", definition: "vêtements pour couvrir les mains" },
    { word: "lunettes",     article: "les", gender: "f", definition: "verres correcteurs portés sur le nez" },
    { word: "montre",       article: "la",  gender: "f", definition: "bijou au poignet indiquant l'heure" },
    { word: "bijou",        article: "le",  gender: "m", definition: "ornement précieux porté sur le corps" },
    { word: "bracelet",     article: "le",  gender: "m", definition: "bijou porté au poignet" },
    { word: "collier",      article: "le",  gender: "m", definition: "bijou porté autour du cou" },
    { word: "parapluie",    article: "le",  gender: "m", definition: "accessoire pour se protéger de la pluie" },
    { word: "portefeuille", article: "le",  gender: "m", definition: "petit étui pour ranger argent et cartes" },
    { word: "cravate",      article: "la",  gender: "f", definition: "bande de tissu nouée au cou des hommes" },
    { word: "bague",        article: "la",  gender: "f", definition: "anneau bijou porté au doigt" },
  ],
  sentences: [
    { sentence: "Il pleut, prends ton ___ avant de sortir.",             answer: "parapluie" },
    { sentence: "Elle porte un beau ___ en or au poignet.",              answer: "bracelet" },
    { sentence: "Il met sa ___ pour aller au bureau.",                   answer: "cravate" },
    { sentence: "Ses ___ de soleil la protègent de la lumière.",         answer: "lunettes" },
    { sentence: "Il a perdu son ___ avec ses cartes bancaires.",         answer: "portefeuille" },
  ],
};
