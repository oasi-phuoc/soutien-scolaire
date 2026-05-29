import type { VocabTheme } from "../../vocabulary-data";

export const V9_TRAIN_THEME: VocabTheme = {
  slug: "v9-train",
  code: "V9.5",
  title: "Le train",
  section: "V9",
  words: [
    { word: "gare",           article: "la",  gender: "f", definition: "bâtiment principal pour les trains" },
    { word: "quai",           article: "le",  gender: "m", definition: "plateforme où monte et descend le train" },
    { word: "guichet",        article: "le",  gender: "m", definition: "comptoir pour acheter les billets" },
    { word: "billet",         article: "le",  gender: "m", definition: "titre de transport pour le train" },
    { word: "aller-retour",   article: "l'",  gender: "m", definition: "billet pour partir et revenir" },
    { word: "départ",         article: "le",  gender: "m", definition: "moment où le train quitte la gare" },
    { word: "arrivée",        article: "l'",  gender: "f", definition: "moment où le train arrive en gare" },
    { word: "wagon",          article: "le",  gender: "m", definition: "voiture d'un train" },
    { word: "contrôleur",     article: "le",  gender: "m", definition: "agent qui vérifie les billets" },
    { word: "place",          article: "la",  gender: "f", definition: "siège réservé dans le train" },
    { word: "grève",          article: "la",  gender: "f", definition: "arrêt de travail du personnel de train" },
    { word: "retard",         article: "le",  gender: "m", definition: "arrivée après l'heure prévue" },
    { word: "correspondance", article: "la",  gender: "f", definition: "changement de train en cours de route" },
    { word: "voie",           article: "la",  gender: "f", definition: "rails sur lesquels roule le train" },
    { word: "horaire",        article: "l'",  gender: "m", definition: "tableau des heures de départ et d'arrivée" },
  ],
  sentences: [
    { sentence: "Le train part du ___ numéro 3.",                        answer: "quai" },
    { sentence: "Il achète un ___ aller-retour pour Paris.",             answer: "billet" },
    { sentence: "Le ___ passe dans les wagons pour vérifier les billets.", answer: "contrôleur" },
    { sentence: "A cause de la ___, il n'y a pas de train ce matin.",    answer: "grève" },
    { sentence: "Le train a 20 minutes de ___ sur la ligne.",            answer: "retard" },
  ],
};
