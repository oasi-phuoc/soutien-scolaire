import type { VocabTheme } from "../../vocabulary-data";

export const V7_RESTAURANT_THEME: VocabTheme = {
  slug: "v7-restaurant",
  code: "V7.3",
  title: "Le restaurant",
  section: "V7",
  words: [
    { word: "service",    image: "/vocab/images/V1/serveur.jpg",   article: "le",  gender: "m", feminine: "serveuse",   definition: "personne qui sert les clients au restaurant (serveur / serveuse)" },
    { word: "cuisine",    image: "/vocab/images/V1/cuisinier.jpg", article: "la",  gender: "f", feminine: "cuisinière", definition: "personne qui prépare les plats (cuisinier / cuisinière)" },
    { word: "table",      image: "table.png",      article: "la",  gender: "f", definition: "meuble où l'on mange au restaurant" },
    { word: "chaise",                              article: "la",  gender: "f", definition: "siège avec dossier pour s'asseoir à table" },
    { word: "assiette",   image: "assiette.png",   article: "l'",  gender: "f", definition: "plat creux ou plat pour servir les aliments" },
    { word: "couvert",    image: "couvert.png",    article: "le",  gender: "m", definition: "ensemble couteau, fourchette, cuillère" },
    { word: "cuillère",   image: "cuillere.png",   article: "la",  gender: "f", definition: "ustensile pour les soupes et desserts" },
    { word: "couteau",    image: "couteau.png",    article: "le",  gender: "m", definition: "ustensile tranchant pour couper" },
    { word: "fourchette", image: "fourchette.png", article: "la",  gender: "f", definition: "ustensile à dents pour piquer les aliments" },
    { word: "verre",      image: "verre.png",      article: "le",  gender: "m", definition: "récipient pour boire les liquides" },
    { word: "serviette",  image: "serviette.png",  article: "la",  gender: "f", definition: "tissu pour s'essuyer la bouche" },
    { word: "plat",       image: "plat.png",       article: "le",  gender: "m", definition: "plat principal d'un repas" },
    { word: "dessert",    image: "dessert.png",    article: "le",  gender: "m", definition: "dernier plat sucré d'un repas" },
    { word: "menu",       image: "menu.png",       article: "le",  gender: "m", definition: "liste des plats proposés" },
    { word: "addition",   image: "addition.png",   article: "l'",  gender: "f", definition: "note à payer à la fin du repas" },
    { word: "boisson",    image: "boisson.png",    article: "la",  gender: "f", definition: "liquide à boire" },
  ],
  sentences: [
    { sentence: "Je voudrais l'___, s'il vous plaît.",              answer: "addition" },
    { sentence: "Le ___ apporte les plats aux clients.",            answer: "serveur" },
    { sentence: "Il regarde le ___ pour choisir son plat.",         answer: "menu" },
    { sentence: "Quelle ___ prenez-vous, de l'eau ou du jus ?",    answer: "boisson" },
    { sentence: "Le ___ prépare les plats dans la cuisine.",        answer: "cuisinier" },
  ],
};
