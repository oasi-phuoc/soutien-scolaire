import type { GrammarLesson } from "../../grammar-data";

/** Unité 37 — Le passé composé avec avoir (G4.7) */
export const A1_GR_PASSE_COMPOSE_AVOIR: GrammarLesson = {
  slug: "a1-gr-passe-compose-avoir",
  code: "G4.7",
  level: "A1",
  title: "Le passé composé avec avoir",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le passé composé est le temps principal pour parler d'une action passée.",
        "On emploie souvent un indicateur de temps : hier, la semaine dernière…",
        "Exemple : Qu'est-ce que tu as fait hier ? — Avec Léa, nous avons préparé l'anniversaire de Julien.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation",
    },
    {
      type: "plain_list",
      items: [
        "Auxiliaire {a}avoir{/a} ou {a}être{/a} au présent + participe passé du verbe.",
        "Le choix de l'auxiliaire dépend du verbe. → Nous avons préparé la fête. ; Marc est allé à l'anniversaire de Julien.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison avec avoir",
    },
    {
      type: "plain_list",
      items: [
        "Verbes en {a}-er{/a} : le participe passé se forme en remplaçant {a}-er{/a} par {a}-é{/a}.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "avoir", "participe", "complément"],
      boldFirstCol: true,
      rows: [
        ["j'", "ai", "organisé", "la fête d'anniversaire."],
        ["tu", "as", "rangé", "la salle."],
        ["il / elle / on", "a", "préparé", "le repas."],
        ["nous", "avons", "déplacé", "les tables."],
        ["vous", "avez", "commandé", "les boissons."],
        ["ils / elles", "ont", "vérifié", "la sono."],
      ],
    },
    {
      type: "note",
      text: "Avec {a}avoir{/a}, le participe passé ne s'accorde pas avec le sujet.",
    },
    {
      type: "note",
      text: "Négation : {a}ne{/a} et {a}pas{/a} encadrent l'auxiliaire. → Je n'ai pas changé la décoration. ; Vous n'avez pas oublié les bougies.",
    },
    {
      type: "heading",
      text: "Formes du participe passé (-ir, -re, -oir)",
    },
    {
      type: "highlight",
      label: "Finale -i",
      items: ["choisir → choisi ; finir → fini"],
    },
    {
      type: "highlight",
      label: "Finale -u",
      items: [
        "attendre → attendu ; boire → bu ; connaître → connu ; courir → couru ; devoir → dû ; entendre → entendu ; lire → lu ; perdre → perdu ; pleuvoir → plu ; pouvoir → pu ; recevoir → reçu ; répondre → répondu ; savoir → su ; tenir → tenu ; vivre → vécu ; voir → vu ; vouloir → voulu",
      ],
    },
    {
      type: "highlight",
      label: "Finale -is",
      items: ["apprendre → appris ; comprendre → compris ; mettre → mis ; prendre → pris"],
    },
    {
      type: "highlight",
      label: "Finale -it",
      items: ["conduire → conduit ; dire → dit ; écrire → écrit ; interdire → interdit"],
    },
    {
      type: "highlight",
      label: "Finale -ert",
      items: ["découvrir → découvert ; offrir → offert ; ouvrir → ouvert ; souffrir → souffert"],
    },
    {
      type: "highlight",
      label: "Formes particulières",
      items: ["avoir → eu ; être → été ; faire → fait"],
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Pour les verbes en {a}-er{/a}, l'infinitif et le participe passé se prononcent pareil. → organiser / organisé.",
        "Présent ≠ passé composé : Je prépare. ≠ J'ai préparé.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Passé composé avec avoir",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Hier, j'___ organisé la fête.", choices: ["ai", "as", "a"], correctIdx: 0 },
        { sentence: "Tu ___ rangé la salle.", choices: ["as", "ai", "a"], correctIdx: 0 },
        { sentence: "Nous ___ préparé le repas.", choices: ["avons", "avez", "ont"], correctIdx: 0 },
        { sentence: "Ils ___ vérifié la sono.", choices: ["ont", "avez", "avons"], correctIdx: 0 },
        { sentence: "Je n'___ pas changé la décoration.", choices: ["ai", "as", "a"], correctIdx: 0 },
        { sentence: "finir → participe : ___", choices: ["fini", "finé", "finis"], correctIdx: 0 },
        { sentence: "prendre → participe : ___", choices: ["pris", "prendu", "prit"], correctIdx: 0 },
        { sentence: "ouvrir → participe : ___", choices: ["ouvert", "ouvri", "ouvru"], correctIdx: 0 },
        { sentence: "faire → participe : ___", choices: ["fait", "fairé", "fais"], correctIdx: 0 },
        { sentence: "Avec avoir, le participe ___ avec le sujet.", choices: ["ne s'accorde pas", "s'accorde toujours", "s'accorde au féminin"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'auxiliaire ou le participe passé.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Hier, j'___ préparé le repas.", hint: "avoir", answer: "ai" },
        { sentence: "Vous ___ commandé les boissons.", hint: "avoir", answer: "avez" },
        { sentence: "Elle a ___ la salle. (ranger)", hint: "-er → -é", answer: "rangé" },
        { sentence: "Nous n'___ pas oublié les bougies.", hint: "avoir", answer: "avons" },
        { sentence: "Ils ont ___ un cadeau. (choisir)", hint: "-i", answer: "choisi" },
        { sentence: "Tu as ___ le livre. (lire)", hint: "-u", answer: "lu" },
        { sentence: "J'ai ___ le train. (prendre)", hint: "-is", answer: "pris" },
        { sentence: "Elle a ___ une lettre. (écrire)", hint: "-it", answer: "écrit" },
        { sentence: "Il a ___ la porte. (ouvrir)", hint: "-ert", answer: "ouvert" },
        { sentence: "Nous avons ___ un gâteau. (faire)", hint: "irrégulier", answer: "fait" },
      ],
    },
  ],
};
