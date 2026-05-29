import type { VocabTheme } from "../../vocabulary-data";

export const V3_SPORT_THEME: VocabTheme = {
  slug: "v3-sport",
  code: "V3.1",
  title: "Le sport",
  section: "V3",
  words: [
    { word: "football",     article: "le",  gender: "m", definition: "sport collectif joué avec un ballon rond" },
    { word: "basket-ball",  article: "le",  gender: "m", definition: "sport collectif avec un panier" },
    { word: "tennis",       article: "le",  gender: "m", definition: "sport de raquette sur un court" },
    { word: "natation",     article: "la",  gender: "f", definition: "sport de nage dans l'eau" },
    { word: "vélo",         article: "le",  gender: "m", definition: "sport et moyen de transport à deux roues" },
    { word: "course",       article: "la",  gender: "f", definition: "compétition de vitesse à pied" },
    { word: "danse",        article: "la",  gender: "f", definition: "art de bouger le corps en rythme" },
    { word: "yoga",         article: "le",  gender: "m", definition: "discipline de relaxation et de stretching" },
    { word: "randonnée",    article: "la",  gender: "f", definition: "longue marche en pleine nature" },
    { word: "judo",         article: "le",  gender: "m", definition: "art martial japonais" },
    { word: "gymnastique",  article: "la",  gender: "f", definition: "sport d'agilité et de souplesse" },
    { word: "ski",          article: "le",  gender: "m", definition: "sport de glisse sur la neige" },
    { word: "handball",     article: "le",  gender: "m", definition: "sport collectif avec un ballon et les mains" },
    { word: "volley-ball",  article: "le",  gender: "m", definition: "sport collectif où l'on frappe un ballon par-dessus un filet" },
    { word: "escalade",     article: "l'",  gender: "f", definition: "sport consistant à grimper une paroi" },
  ],
  sentences: [
    { sentence: "Il joue au ___ avec ses amis dans le parc.",            answer: "football" },
    { sentence: "La ___ est un sport très bon pour la santé cardio.",    answer: "natation" },
    { sentence: "En hiver, beaucoup de gens pratiquent le ___ en montagne.", answer: "ski" },
    { sentence: "Elle fait du ___ chaque matin pour se détendre.",       answer: "yoga" },
    { sentence: "L'___ demande beaucoup de force et de technique.",      answer: "escalade" },
  ],
};
