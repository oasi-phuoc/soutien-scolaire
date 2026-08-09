import type { GrammarLesson } from "../../grammar-data";

/** Unité 63 — Les pronoms relatifs composés (G4.33) */
export const A1_GR_PRONOMS_RELATIFS_COMPOSES: GrammarLesson = {
  slug: "a1-gr-pronoms-relatifs-composes",
  code: "G4.33",
  level: "A1",
  title: "Les pronoms relatifs composés",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Les pronoms relatifs composés remplacent un nom (chose ou personne) et permettent de réunir deux phrases.",
        "Le château dans lequel le comte de Méreux s'est marié date du XVIIe siècle.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      text: "Construction : préposition + {a}lequel / laquelle / lesquels / lesquelles{/a}.",
    },
    {
      type: "grid",
      headers: ["", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["ms", "dans lequel", "Le château dans lequel…"],
        ["fs", "dans laquelle", "La mairie dans laquelle…"],
        ["mp", "avec lesquels", "Les invités avec lesquels…"],
        ["fp", "avec lesquelles", "Les amies avec lesquelles…"],
      ],
    },
    {
      type: "text",
      label: "Contractions avec à et de",
      items: [
        "{a}à + lequel → auquel{/a} ; {a}à + laquelle{/a} ; {a}à + lesquels → auxquels{/a} ; {a}à + lesquelles → auxquelles{/a}.",
        "{a}de + lequel → duquel{/a} ; {a}de + laquelle{/a} ; {a}de + lesquels → desquels{/a} ; {a}de + lesquelles → desquelles{/a}.",
        "Exemple : un mariage auquel les journalistes étaient invités et au sujet duquel la presse a beaucoup écrit.",
      ],
    },
    {
      type: "note",
      text: "{a}Duquel / de laquelle / desquels / desquelles{/a} seulement après une préposition composée ({a}au sujet de, près de…{/a}). Avec {a}de{/a} seul → {a}dont{/a}. → un mariage dont la presse a parlé.",
    },
    {
      type: "note",
      text: "Pour une personne, en langue courante : {a}avec qui{/a} ≈ {a}avec laquelle{/a}. → La femme avec qui / avec laquelle il se marie.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Relatifs composés",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le château ___ il s'est marié.", choices: ["dans lequel", "dans laquelle", "dont"], correctIdx: 0 },
        { sentence: "La mairie ___ a lieu la cérémonie.", choices: ["dans laquelle", "dans lequel", "auquel"], correctIdx: 0 },
        { sentence: "Les invités ___ il parle.", choices: ["avec lesquels", "avec lesquelles", "dont"], correctIdx: 0 },
        { sentence: "Les amies ___ elle voyage.", choices: ["avec lesquelles", "avec lesquels", "dont"], correctIdx: 0 },
        { sentence: "Un mariage ___ les journalistes étaient invités.", choices: ["auquel", "à lequel", "dont"], correctIdx: 0 },
        { sentence: "Le sujet ___ la presse a écrit. (au sujet de)", choices: ["duquel", "dont", "auquel"], correctIdx: 0 },
        { sentence: "Un mariage ___ la presse a parlé. (parler de)", choices: ["dont", "duquel", "auquel"], correctIdx: 0 },
        { sentence: "La femme ___ il se marie. (courant)", choices: ["avec qui", "dont", "duquel"], correctIdx: 0 },
        { sentence: "à + lesquels → ___", choices: ["auxquels", "à lesquels", "desquels"], correctIdx: 0 },
        { sentence: "de + lesquelles → ___", choices: ["desquelles", "de lesquelles", "auxquelles"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez lequel, laquelle, auquel, duquel, dont, etc.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le parc dans ___ nous jouons.", hint: "ms", answer: "lequel" },
        { sentence: "La ville dans ___ j'habite.", hint: "fs", answer: "laquelle" },
        { sentence: "Les amis avec ___ je voyage.", hint: "mp", answer: "lesquels" },
        { sentence: "Les amies avec ___ je dîne.", hint: "fp", answer: "lesquelles" },
        { sentence: "Le projet ___ je pense. (à)", hint: "contraction", answer: "auquel" },
        { sentence: "Les idées ___ je pense. (à)", hint: "mp", answer: "auxquels" },
        { sentence: "Le film au sujet ___ on parle.", hint: "de + lequel", answer: "duquel" },
        { sentence: "Le film ___ on parle. (parler de)", hint: "de seul", answer: "dont" },
        { sentence: "La femme avec ___ il se marie.", hint: "courant", answer: "qui" },
        { sentence: "Les livres près ___ je suis assis.", hint: "de + mp", answer: "desquels" },
      ],
    },
  ],
};
