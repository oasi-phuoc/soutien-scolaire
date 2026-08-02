import type { GrammarLesson } from "../../grammar-data";

/** Unité 43 — L'accord du participe passé (G4.13) */
export const A1_GR_ACCORD_PARTICIPE_PASSE: GrammarLesson = {
  slug: "a1-gr-accord-participe-passe",
  code: "G4.13",
  level: "A1",
  title: "L'accord du participe passé",
  theory: [
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "highlight",
      label: "Avec être",
      items: [
        "Le participe s'accorde avec le sujet. → Vous êtes allé(e)(s) au cinéma ? — Oui, nous y sommes allé(e)(s).",
      ],
    },
    {
      type: "highlight",
      label: "Avec avoir",
      items: [
        "Le participe ne s'accorde jamais avec le sujet. → Il a réservé les places. ; Elle a réservé les places.",
        "Il s'accorde avec le COD s'il est placé {a}avant{/a} l'auxiliaire. → Je les ai prises. ; Je les ai réservées.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "COD pronominal : {a}m', t', l', les, nous, vous{/a}. → Pierre a invité Marie. → Pierre l'a invitée.",
        "Pronom relatif {a}que{/a}. → Voici les places que j'ai prises.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Avec le pronom {a}en{/a}, pas d'accord. → Des billets, j'en ai réservé plusieurs.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Si le participe se termine par une consonne, le féminin se fait entendre. → J'ai pris les places. ≠ Je les ai prises.",
        "Exemple : Regarde les photos que j'ai faites ! (le {a}t{/a} se prononce)",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Accord du participe passé",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Nous y sommes ___ . (aller, mixtes)", choices: ["allés", "allé", "allée", "aller"], correctIdx: 0 },
        { sentence: "Elle a ___ les places. (réserver)", choices: ["réservé", "réservée", "réservés", "réservées"], correctIdx: 0 },
        { sentence: "Je les ai ___ . (prendre, places)", choices: ["prises", "pris", "prise", "prisés"], correctIdx: 0 },
        { sentence: "Je les ai ___ sur Internet. (réserver)", choices: ["réservées", "réservé", "réservée", "réservés"], correctIdx: 0 },
        { sentence: "Pierre l'a ___ . (inviter, Marie)", choices: ["invitée", "invité", "invités", "invitées"], correctIdx: 0 },
        { sentence: "Voici les places que j'ai ___ .", choices: ["prises", "pris", "prise", "prendre"], correctIdx: 0 },
        { sentence: "Des billets, j'en ai ___ plusieurs.", choices: ["réservé", "réservés", "réservée", "réservées"], correctIdx: 0 },
        { sentence: "Avec être, le participe s'accorde avec ___ .", choices: ["le sujet", "le COD", "rien", "en"], correctIdx: 0 },
        { sentence: "Avec avoir, accord si le COD est ___ .", choices: ["avant", "après", "absent", "en"], correctIdx: 0 },
        { sentence: "Regarde les photos que j'ai ___ !", choices: ["faites", "fait", "faite", "faits"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le participe passé correctement accordé.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Marie est ___ . (arriver)", hint: "être + fs", answer: "arrivée" },
        { sentence: "Ils sont ___ . (partir)", hint: "être + mp", answer: "partis" },
        { sentence: "Elle a ___ un billet. (acheter)", hint: "avoir, pas d'accord", answer: "acheté" },
        { sentence: "Je les ai ___ . (prendre, fpl)", hint: "COD avant", answer: "prises" },
        { sentence: "Je les ai ___ . (réserver, fpl)", hint: "COD avant", answer: "réservées" },
        { sentence: "Pierre l'a ___ . (voir, Marie)", hint: "l' = fs", answer: "vue" },
        { sentence: "Les places que j'ai ___ . (prendre)", hint: "que = COD", answer: "prises" },
        { sentence: "Des photos, j'en ai ___ trois. (faire)", hint: "en → pas d'accord", answer: "fait" },
        { sentence: "Nous sommes ___ au cinéma. (aller, fpl)", hint: "être", answer: "allées" },
        { sentence: "Les lettres qu'il a ___ . (écrire)", hint: "que = COD fpl", answer: "écrites" },
      ],
    },
  ],
};
