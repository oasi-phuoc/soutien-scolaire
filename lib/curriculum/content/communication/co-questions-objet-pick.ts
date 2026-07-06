import { buildObjectPickTask, type COObjectPickCard } from "./co-questions-helpers";

export type COObjetPickDef = {
  cards: [COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard];
};

function slugify(label: string): string {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function opImg(label: string): string {
  return `/assets/expression/images/${slugify(label)}.webp`;
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
};

export function buildObjetPickTask(groupId: string) {
  const def = CO_OBJET_PICK[groupId];
  if (!def) return null;
  return buildObjectPickTask(def.cards);
}
