import type { VocabTheme } from "../../vocabulary-data";

export const SANTE_THEME: VocabTheme = {
  slug: "a2-voc-l02",
  code: "V.14",
  title: "La santé et le médecin",
  section: "A2",
  words: [
    { word: "médecin",      article: "le",  gender: "m", definition: "docteur qui soigne les malades" },
    { word: "ordonnance",   article: "l'",  gender: "f", definition: "document du médecin pour les médicaments" },
    { word: "médicament",   article: "le",  gender: "m", definition: "produit pour guérir une maladie" },
    { word: "comprimé",     article: "le",  gender: "m", definition: "médicament solide à avaler" },
    { word: "fièvre",       article: "la",  gender: "f", definition: "température du corps trop élevée" },
    { word: "tousser",      article: "le",  gender: "m", definition: "faire le son « touh touh »" },
    { word: "pharmacie",    article: "la",  gender: "f", definition: "magasin où on achète les médicaments" },
    { word: "rendez-vous",  article: "le",  gender: "m", definition: "heure fixée pour voir le médecin" },
    { word: "infirmier",    article: "l'",  gender: "m", definition: "professionnel de santé qui assiste le médecin" },
    { word: "blessé",       article: "le",  gender: "m", definition: "personne qui a une blessure physique" },
    { word: "prise de sang",article: "la",  gender: "f", definition: "analyse médicale du sang" },
    { word: "sirop",        article: "le",  gender: "m", definition: "médicament liquide contre la toux" },
  ],
  sentences: [
    { sentence: "Le ___ me donne une ordonnance pour les médicaments.", answer: "médecin" },
    { sentence: "J'ai de la ___ : ma température est à 39 degrés.", answer: "fièvre" },
    { sentence: "Je prends ce ___ deux fois par jour après les repas.", answer: "comprimé" },
    { sentence: "J'ai pris un ___ chez le médecin pour demain matin.", answer: "rendez-vous" },
    { sentence: "J'achète mes médicaments à la ___ du quartier.", answer: "pharmacie" },
  ],
};
