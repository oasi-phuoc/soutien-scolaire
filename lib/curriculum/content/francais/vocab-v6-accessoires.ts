import type { VocabTheme } from "../../vocabulary-data";

export const V6_ACCESSOIRES_THEME: VocabTheme = {
  slug: "v6-accessoires",
  code: "V6.2",
  title: "Les accessoires",
  section: "V6",
  words: [
    { word: "sac",          image: "sac-a-main.png",    article: "le",  gender: "m", definition: "poche ou sacoche pour transporter des objets" },
    { word: "chapeau",     image: "chapeau.png",       article: "le",  gender: "m", definition: "coiffure rigide qui protège la tête" },
    { word: "casquette",   image: "casquette.png",     article: "la",  gender: "f", definition: "coiffure souple avec visière" },
    { word: "écharpe",     image: "echarpe.png",       article: "l'",  gender: "f", definition: "longue pièce de tissu pour le cou" },
    { word: "ceinture",    image: "ceinture.png",      article: "la",  gender: "f", definition: "bande pour tenir le pantalon" },
    { word: "gants",                                   article: "les", gender: "m", definition: "vêtements pour couvrir les mains" },
    { word: "lunettes",    image: "lunettes.png",      article: "les", gender: "f", definition: "verres correcteurs portés sur le nez" },
    { word: "montre",      image: "montre.png",        article: "la",  gender: "f", definition: "bijou au poignet indiquant l'heure" },
    { word: "bijou",                                   article: "le",  gender: "m", definition: "ornement précieux porté sur le corps" },
    { word: "bracelet",    image: "bracelet.png",      article: "le",  gender: "m", definition: "bijou porté au poignet" },
    { word: "collier",     image: "collier.png",       article: "le",  gender: "m", definition: "bijou porté autour du cou" },
    { word: "parapluie",                               article: "le",  gender: "m", definition: "accessoire pour se protéger de la pluie" },
    { word: "portefeuille", image: "portefeuille.png", article: "le",  gender: "m", definition: "petit étui pour ranger argent et cartes" },
    { word: "cravate",                                 article: "la",  gender: "f", definition: "bande de tissu nouée au cou des hommes" },
    { word: "bague",       image: "bague.png",         article: "la",  gender: "f", definition: "anneau bijou porté au doigt" },
  ],
  sentences: [
    { sentence: "Il pleut, prends ton ___ avant de sortir.",             answer: "parapluie" },
    { sentence: "Elle porte un beau ___ en or au poignet.",              answer: "bracelet" },
    { sentence: "Il met sa ___ pour aller au bureau.",                   answer: "cravate" },
    { sentence: "Ses ___ de soleil la protègent de la lumière.",         answer: "lunettes" },
    { sentence: "Il a perdu son ___ avec ses cartes bancaires.",         answer: "portefeuille" },
  ],
};
