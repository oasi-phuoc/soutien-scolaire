import type { VocabTheme } from "../../vocabulary-data";

export const V4_APPAREILS_ELECTROMENAGERS_THEME: VocabTheme = {
  slug: "v4-appareils-electromenagers",
  code: "V4.4",
  title: "Les appareils électroménagers",
  section: "V4",
  words: [
    { word: "réfrigérateur",   image: "frigo.png",          article: "le",  gender: "m", definition: "appareil pour conserver les aliments au frais" },
    { word: "congélateur",     image: "congelateur.png",   article: "le",  gender: "m", definition: "appareil pour conserver les aliments surgelés" },
    { word: "four",            image: "four.jpg",          article: "le",  gender: "m", definition: "appareil pour cuire les aliments" },
    { word: "cuisinière",      image: "cuisiniere.png",    article: "la",  gender: "f", definition: "appareil avec plaques de cuisson et four" },
    { word: "lave-linge",      image: "lave-linge.png",    article: "le",  gender: "m", definition: "appareil pour laver le linge" },
    { word: "lave-vaisselle",  image: "lave-vaiselle.png", article: "le",  gender: "m", definition: "appareil pour laver la vaisselle" },
    { word: "aspirateur",      image: "aspirateur.png",    article: "l'",  gender: "m", definition: "appareil pour aspirer la poussière" },
    { word: "fer à repasser",  image: "fer-a-repasser.png", article: "le", gender: "m", definition: "appareil pour lisser les vêtements" },
    { word: "micro-ondes",     image: "micro-onde.png",    article: "le",  gender: "m", definition: "appareil pour réchauffer rapidement les aliments" },
    { word: "ventilateur",     image: "ventilateur.png",   article: "le",  gender: "m", definition: "appareil qui brasse l'air pour rafraîchir" },
    { word: "bouilloire",      image: "bouilloire.png",    article: "la",  gender: "f", definition: "appareil pour faire bouillir de l'eau" },
    { word: "cafetière",       image: "cafetiere.png",     article: "la",  gender: "f", definition: "appareil électrique pour préparer le café" },
  ],
  sentences: [
    { sentence: "Elle met le gâteau dans le ___.",              answer: "four" },
    { sentence: "Le ___ lave le linge automatiquement.",        answer: "lave-linge" },
    { sentence: "Je réchauffe ma soupe au ___.",                answer: "micro-ondes" },
    { sentence: "Il aspire le salon avec l'___.",               answer: "aspirateur" },
    { sentence: "La ___ fait bouillir l'eau en deux minutes.",  answer: "bouilloire" },
    { sentence: "Je mets le lait dans le ___ pour le garder frais.", answer: "réfrigérateur" },
    { sentence: "Elle repasse sa chemise avec le ___.",         answer: "fer à repasser" },
  ],
};
