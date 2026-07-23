import { buildObjectPickTask, type COObjectPickCard } from "./co-questions-helpers";
import { resolveCeCoWordImage } from "../../word-image-resolver";

export type COObjetPickDef = {
  cards: [COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard];
};

function opImg(label: string): string {
  return resolveCeCoWordImage(label) ?? "";
}

function opCards(
  groupId: string,
  defs: [Omit<COObjectPickCard, "image">, Omit<COObjectPickCard, "image">, Omit<COObjectPickCard, "image">, Omit<COObjectPickCard, "image">, Omit<COObjectPickCard, "image">],
): COObjetPickDef["cards"] {
  return defs.map((card) => ({ ...card, image: opImg(card.label) })) as COObjetPickDef["cards"];
}

/** Cartes image 5× (3 + 2) — A1 base « Identifier des objets ». */
export const CO_OBJET_PICK: Record<string, COObjetPickDef> = {
  "base-objet-1": {
    cards: opCards("base-objet-1", [
      { label: "lampe", heard: false },
      { label: "poubelle", heard: true },
      { label: "fleur", heard: true },
      { label: "table", heard: true },
      { label: "clé", heard: true },
    ]),
  },
  "base-objet-2": {
    cards: opCards("base-objet-2", [
      { label: "guitare", heard: true },
      { label: "piano", heard: false },
      { label: "sac", heard: false },
      { label: "robe", heard: true },
      { label: "talon", heard: false },
    ]),
  },
  "base-objet-3": {
    cards: opCards("base-objet-3", [
      { label: "carte d'étudiant", heard: true },
      { label: "passeport", heard: false },
      { label: "photo", heard: true },
      { label: "carte de crédit", heard: false },
      { label: "carte d'identité", heard: true },
    ]),
  },
  "base-objet-4": {
    cards: opCards("base-objet-4", [
      { label: "cahier", heard: false },
      { label: "surligneur", heard: false },
      { label: "stylo", heard: true },
      { label: "règle", heard: true },
      { label: "carte", heard: false },
    ]),
  },
  "base-objet-5": {
    cards: opCards("base-objet-5", [
      { label: "voiture", heard: true },
      { label: "avion", heard: false },
      { label: "États-Unis", heard: true },
      { label: "hélicoptère", heard: true },
      { label: "appareil photo", heard: true },
    ]),
  },
  "base-objet-6": {
    cards: opCards("base-objet-6", [
      { label: "scotch", heard: true },
      { label: "feuille", heard: false },
      { label: "ciseaux", heard: false },
      { label: "colle", heard: false },
      { label: "crayon de couleur", heard: true },
    ]),
  },
  "base-objet-7": {
    cards: opCards("base-objet-7", [
      { label: "gâteau", heard: true },
      { label: "poulet", heard: true },
      { label: "radis", heard: false },
      { label: "salade", heard: true },
      { label: "gratin", heard: false },
    ]),
  },
  "base-objet-8": {
    cards: opCards("base-objet-8", [
      { label: "chaise", heard: true },
      { label: "bureau", heard: true },
      { label: "lunettes", heard: false },
      { label: "médicament", heard: true },
      { label: "ordinateur", heard: true },
    ]),
  },
  "base-objet-9": {
    cards: opCards("base-objet-9", [
      { label: "fleur", heard: true },
      { label: "table", heard: false },
      { label: "plume", heard: true },
      { label: "cheval", heard: false },
      { label: "gâteau", heard: true },
    ]),
  },
  "base-objet-10": {
    cards: opCards("base-objet-10", [
      { label: "page", heard: false },
      { label: "corde", heard: true },
      { label: "livre", heard: false },
      { label: "fleur", heard: false },
      { label: "stylo", heard: true },
    ]),
  },
  "base-objet-11": {
    cards: opCards("base-objet-11", [
      { label: "pizza", heard: true },
      { label: "macaron", heard: false },
      { label: "jus", heard: false },
      { label: "fromage", heard: false },
      { label: "fruit", heard: false },
    ]),
  },
  "base-objet-12": {
    cards: opCards("base-objet-12", [
      { label: "cadeau", heard: true },
      { label: "seau", heard: false },
      { label: "élastique", heard: true },
      { label: "tapis", heard: false },
      { label: "haltère", heard: false },
    ]),
  },
  /** CO base scolaire — exercice 5 (sac à dos, veste, appareil photo, chips, pomme). */
  "base-scolaire-objet-5": {
    cards: opCards("base-scolaire-objet-5", [
      { label: "sac à dos", heard: false },
      { label: "veste", heard: false },
      { label: "appareil photo", heard: true },
      { label: "chips", heard: false },
      { label: "pomme", heard: false },
    ]),
  },
  /** CO base scolaire — exercice 10 (guitare, salade de fruits, livre, pizza, jeu de société). */
  "base-scolaire-objet-10": {
    cards: opCards("base-scolaire-objet-10", [
      { label: "guitare", heard: true },
      { label: "salade de fruits", heard: false },
      { label: "livre", heard: false },
      { label: "pizza", heard: true },
      { label: "jeu de société", heard: true },
    ]),
  },
  /** CO base scolaire — exercice 12 (sortie scolaire en forêt). */
  "base-scolaire-objet-12": {
    cards: opCards("base-scolaire-objet-12", [
      { label: "chaussures de sport", heard: true },
      { label: "casquette", heard: true },
      { label: "sandwich", heard: true },
      { label: "bouteille d'eau", heard: true },
      { label: "gâteau", heard: true },
    ]),
  },
  /** CO base scolaire — exercice 18 (post-it, ciseaux, stylo, crayon de couleur, peinture). */
  "base-scolaire-objet-18": {
    cards: opCards("base-scolaire-objet-18", [
      { label: "post-it", heard: false },
      { label: "ciseaux", heard: true },
      { label: "stylo", heard: false },
      { label: "crayon de couleur", heard: true },
      { label: "peinture", heard: false },
    ]),
  },
};

export function buildObjetPickTask(groupId: string) {
  const def = CO_OBJET_PICK[groupId];
  if (!def) return null;
  return buildObjectPickTask(def.cards);
}
