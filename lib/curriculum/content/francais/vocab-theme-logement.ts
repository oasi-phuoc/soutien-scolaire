import type { VocabTheme } from "../../vocabulary-data";

export const LOGEMENT_THEME: VocabTheme = {
  slug: "a1-voc-l17",
  code: "V.10",
  title: "Le logement",
  section: "A1",
  words: [
    { word: "salon",         article: "le",  gender: "m", definition: "pièce principale pour se détendre" },
    { word: "cuisine",       article: "la",  gender: "f", definition: "pièce où on prépare les repas" },
    { word: "chambre",       article: "la",  gender: "f", definition: "pièce où on dort" },
    { word: "salle de bain", article: "la",  gender: "f", definition: "pièce pour se laver" },
    { word: "balcon",        article: "le",  gender: "m", definition: "espace extérieur relié à l'appartement" },
    { word: "canapé",        article: "le",  gender: "m", definition: "grand siège confortable dans le salon" },
    { word: "frigo",         article: "le",  gender: "m", definition: "appareil pour conserver les aliments au froid" },
    { word: "lit",           article: "le",  gender: "m", definition: "meuble pour dormir" },
    { word: "armoire",       article: "l'",  gender: "f", definition: "grand meuble pour ranger les vêtements" },
    { word: "loyer",         article: "le",  gender: "m", definition: "somme payée chaque mois pour son logement" },
    { word: "studio",        article: "le",  gender: "m", definition: "petit appartement d'une seule pièce" },
    { word: "appartement",   article: "l'",  gender: "m", definition: "logement dans un immeuble" },
  ],
  sentences: [
    { sentence: "Je me repose sur le ___ du salon.", answer: "canapé" },
    { sentence: "Mon ___ mensuel est de 800 euros.", answer: "loyer" },
    { sentence: "Je range mes vêtements dans l'___.", answer: "armoire" },
    { sentence: "Le ___ conserve la nourriture au froid.", answer: "frigo" },
    { sentence: "J'habite dans un petit ___ près du centre-ville.", answer: "appartement" },
  ],
};
