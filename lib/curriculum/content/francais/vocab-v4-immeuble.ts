import type { VocabTheme } from "../../vocabulary-data";

export const V4_IMMEUBLE_THEME: VocabTheme = {
  slug: "v4-immeuble",
  code: "V4.4",
  title: "L'immeuble",
  section: "V4",
  words: [
    { word: "hall", image: "hall.jpg",             article: "le",  gender: "m", definition: "espace d'entrée commun de l'immeuble" },
    { word: "escalier", image: "escalier.jpg",         article: "l'",  gender: "m", definition: "suite de marches pour monter ou descendre" },
    { word: "ascenseur", image: "ascenseur.jpg",        article: "l'",  gender: "m", definition: "cabine pour monter et descendre dans un immeuble" },
    { word: "couloir", image: "couloir.jpg",          article: "le",  gender: "m", definition: "passage entre les appartements" },
    { word: "porte", image: "porte.jpg",            article: "la",  gender: "f", definition: "ouverture fermée par un panneau" },
    { word: "cave", image: "cave.jpg",             article: "la",  gender: "f", definition: "espace de stockage en sous-sol" },
    { word: "boîte aux lettres", image: "boîte-aux-lettres.jpg",article: "la",  gender: "f", definition: "boîte pour recevoir le courrier" },
    { word: "interphone", image: "interphone.jpg",       article: "l'",  gender: "m", definition: "appareil pour communiquer avec la porte d'entrée" },
    { word: "parking", image: "parking.jpg",          article: "le",  gender: "m", definition: "espace pour garer les voitures" },
    { word: "voisin", image: "voisin.jpg",           article: "le",  gender: "m", definition: "personne qui habite à côté" },
    { word: "concierge", image: "concierge.jpg",        article: "le",  gender: "m", definition: "gardien d'un immeuble" },
    { word: "local", image: "local.jpg",            article: "le",  gender: "m", definition: "espace commun de l'immeuble (poubelles, vélos)" },
    { word: "étage", image: "étage.jpg",            article: "l'",  gender: "m", definition: "niveau du bâtiment au-dessus du sol" },
    { word: "sonnette", image: "sonnette.jpg",         article: "la",  gender: "f", definition: "bouton pour signaler son arrivée" },
    { word: "fenêtre", image: "fenêtre.jpg",          article: "la",  gender: "f", definition: "ouverture vitrée dans un mur" },
  ],
  sentences: [
    { sentence: "Il appuie sur la ___ pour prévenir ses voisins.",        answer: "sonnette" },
    { sentence: "L'___ est en panne, il faut prendre l'escalier.",        answer: "ascenseur" },
    { sentence: "Elle vérifie sa ___ aux lettres chaque matin.",          answer: "boîte aux lettres" },
    { sentence: "Le ___ gère les problèmes de l'immeuble.",               answer: "concierge" },
    { sentence: "Il parle à son ___ dans le couloir.",                    answer: "voisin" },
  ],
};
