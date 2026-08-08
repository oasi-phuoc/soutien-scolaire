import type { GrammarLesson } from "../../grammar-data";

/** Unité 27 — Les adjectifs indéfinis (G3.7) */
export const A1_GR_ADJECTIFS_INDEFINIS: GrammarLesson = {
  slug: "a1-gr-adjectifs-indefinis",
  code: "G3.7",
  level: "A1",
  title: "Les adjectifs indéfinis",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les adjectifs indéfinis expriment en général une quantité : la totalité ou la pluralité. → J'ai vu tous les films de Jean-Luc Godard. ; J'ai vu plusieurs films de Jean-Luc Godard.",
        "Ils peuvent aussi exprimer la ressemblance ou la différence. → Ton ami et moi, nous avons les mêmes goûts.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Tout, chaque et aucun(e)",
    },
    {
      type: "highlight",
      label: "Tout",
      items: [
        "{a}Tout{/a} exprime la totalité d'un ensemble. Il est suivi d'un nom avec déterminant et s'accorde en genre et en nombre.",
        "tout le spectacle ; tous les spectacles ; toute la journée ; toutes ces chansons.",
        "{a}Tout le monde{/a} est suivi d'un verbe au singulier. → Tout le monde chante.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Chaque",
      items: [
        "{a}Chaque{/a} présente les éléments un par un. Il est invariable et suivi d'un nom singulier.",
        "Le chanteur a présenté chaque musicien de son groupe.",
      ],
      noBulletItems: [1],
    },
    {
      type: "highlight",
      label: "Aucun(e)",
      items: [
        "{a}Aucun{/a} / {a}aucune{/a} : nom singulier sans article, quantité zéro, toujours avec {a}ne{/a}.",
        "Il n'y a aucune fille dans le groupe de musiciens.",
      ],
      noBulletItems: [1],
    },
    {
      type: "note",
      text: "Répétition dans le temps : Il va au concert tous les mois. = Il va au concert chaque mois. On ne dit pas ~~chaque trois mois~~, mais {a}tous les trois mois{/a}.",
    },
    {
      type: "heading",
      text: "Plusieurs et quelques",
    },
    {
      type: "plain_list",
      items: [
        "Invariables, toujours au pluriel, suivis d'un nom sans article.",
        "{a}Plusieurs{/a} : quantité supérieure à deux, sans précision. → J'ai plusieurs amis musiciens.",
        "{a}Quelques{/a} : petit nombre (souvent ≈ des). → J'ai quelques amis musiciens. (= je n'en ai pas beaucoup)",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Même(s) et autre(s)",
    },
    {
      type: "plain_list",
      items: [
        "Singulier ou pluriel ; précédés d'un déterminant et suivis d'un nom.",
        "{a}Même{/a} : ressemblance. → J'aime la même chanson que toi. ; nous aimons les mêmes chanteurs.",
        "{a}Autre{/a} : différence. → Mon frère aîné est chanteur et mon autre frère est guitariste.",
        "Le pluriel de un/une autre est {a}d'autres{/a} (pas des autres). → J'aimerais écouter d'autres chansons.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "On ne prononce pas le {a}s{/a} final de {a}tous{/a} devant un nom. → Vous connaissez tous les artistes ?",
        "Liaison avec {a}quelques{/a} et {a}plusieurs{/a} devant une voyelle ou un h muet. → quelques artistes ; plusieurs artistes.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Adjectifs indéfinis",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "J'ai vu ___ les films de Godard.", choices: ["tous", "tout", "toutes"], correctIdx: 0 },
        { sentence: "Elle écoute cette chanson ___ la journée.", choices: ["toute", "tout", "tous"], correctIdx: 0 },
        { sentence: "___ le monde chante.", choices: ["Tout", "Tous", "Toute"], correctIdx: 0 },
        { sentence: "Il a présenté ___ musicien.", choices: ["chaque", "chacun", "tous"], correctIdx: 0 },
        { sentence: "Il n'y a ___ fille dans le groupe.", choices: ["aucune", "aucun", "chaque"], correctIdx: 0 },
        { sentence: "J'ai ___ amis musiciens. (plus de deux)", choices: ["plusieurs", "chaque", "aucun"], correctIdx: 0 },
        { sentence: "J'ai ___ amis musiciens. (pas beaucoup)", choices: ["quelques", "chaque", "tout"], correctIdx: 0 },
        { sentence: "J'aime la ___ chanson que toi.", choices: ["même", "mêmes", "autre"], correctIdx: 0 },
        { sentence: "J'aimerais écouter ___ chansons.", choices: ["d'autres", "des autres", "autres"], correctIdx: 0 },
        { sentence: "Il va au concert ___ trois mois.", choices: ["tous les", "chaque", "toutes les"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'adjectif indéfini qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Vous avez vu ___ le spectacle.", hint: "totalité ms", answer: "tout" },
        { sentence: "Vous avez aimé ___ ces chansons ?", hint: "totalité fp", answer: "toutes" },
        { sentence: "Il a présenté ___ musicien.", hint: "un par un", answer: "chaque" },
        { sentence: "Il n'y a ___ musicienne.", hint: "zéro + fs", answer: "aucune" },
        { sentence: "J'ai ___ amis musiciens. (> 2)", hint: "pluralité", answer: "plusieurs" },
        { sentence: "J'ai ___ amis musiciens. (peu)", hint: "petit nombre", answer: "quelques" },
        { sentence: "nous aimons les ___ chanteurs.", hint: "ressemblance", answer: "mêmes" },
        { sentence: "mon ___ frère est guitariste.", hint: "différence", answer: "autre" },
        { sentence: "écouter ___ chansons (pluriel de un autre)", hint: "d'autres", answer: "d'autres" },
        { sentence: "___ les mois (= chaque mois)", hint: "répétition", answer: "tous" },
      ],
    },
  ],
};
