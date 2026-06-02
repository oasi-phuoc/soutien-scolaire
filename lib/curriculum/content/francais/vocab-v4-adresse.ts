import type { VocabTheme } from "../../vocabulary-data";

export const V4_ADRESSE_THEME: VocabTheme = {
  slug: "v4-adresse",
  code: "V4.2",
  title: "L'adresse",
  section: "V4",
  words: [
    { word: "rue", image: "rue.jpg",          article: "la",  gender: "f", definition: "voie publique bordée de maisons" },
    { word: "avenue", image: "avenue.jpg",       article: "l'",  gender: "f", definition: "large voie plantée d'arbres" },
    { word: "boulevard", image: "boulevard.jpg",    article: "le",  gender: "m", definition: "large voie urbaine" },
    { word: "place", image: "place.jpg",        article: "la",  gender: "f", definition: "espace public ouvert en ville" },
    { word: "quartier", image: "quartier.jpg",     article: "le",  gender: "m", definition: "zone d'une ville avec ses habitants" },
    { word: "centre-ville", image: "centre-ville.jpg", article: "le",  gender: "m", definition: "partie centrale d'une ville" },
    { word: "village", image: "village.jpg",      article: "le",  gender: "m", definition: "petit regroupement d'habitations" },
    { word: "numéro", image: "numéro.jpg",       article: "le",  gender: "m", definition: "chiffre identifiant une adresse" },
    { word: "code postal", image: "code-postal.jpg",  article: "le",  gender: "m", definition: "code à cinq chiffres pour le courrier" },
    { word: "ville", image: "ville.jpg",        article: "la",  gender: "f", definition: "agglomération urbaine importante" },
    { word: "pays", image: "pays.jpg",         article: "le",  gender: "m", definition: "territoire avec un gouvernement" },
    { word: "étage", image: "étage.jpg",        article: "l'",  gender: "m", definition: "niveau d'un bâtiment au-dessus du sol" },
    { word: "escalier", image: "escalier.jpg",     article: "l'",  gender: "m", definition: "suite de marches pour monter ou descendre" },
    { word: "coin", image: "coin.jpg",         article: "le",  gender: "m", definition: "angle ou intersection de rues" },
    { word: "entrée", image: "entrée.jpg",       article: "l'",  gender: "f", definition: "porte principale donnant accès à un lieu" },
  ],
  sentences: [
    { sentence: "Il habite au 12, ___ de la Paix.",                       answer: "rue" },
    { sentence: "Le ___ indique dans quelle ville la lettre doit arriver.", answer: "code postal" },
    { sentence: "Son appartement est au deuxième ___.",                    answer: "étage" },
    { sentence: "Le marché se trouve sur la grande ___ centrale.",         answer: "place" },
    { sentence: "Ils habitent dans le même ___ depuis vingt ans.",         answer: "quartier" },
  ],
};
