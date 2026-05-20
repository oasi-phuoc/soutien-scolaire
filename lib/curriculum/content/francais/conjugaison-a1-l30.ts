import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L30: ConjLesson = {
  slug: "a1-conj-l30",
  code: "G.26",
  level: "A1",
  title: "Passé composé avec être",
  theory: [
    { type: "heading", text: "Le passé composé avec être" },
    {
      type: "plain_list",
      items: [
        "Certains verbes utilisent {a}être{/a} (et non avoir) comme auxiliaire.",
        "Structure : {a}être{/a} (présent) + {a}participe passé{/a} (accordé avec le sujet)",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "aller — exemple avec être",
          accentForms: true,
          rows: [
            { pronoun: "je (masc.)", form: "suis allé" },
            { pronoun: "je (fém.)", form: "suis allée" },
            { pronoun: "tu (masc.)", form: "es allé" },
            { pronoun: "il / on", form: "est allé" },
            { pronoun: "elle", form: "est allée" },
            { pronoun: "nous (masc.)", form: "sommes allés" },
            { pronoun: "vous (mixte)", form: "êtes allés" },
            { pronoun: "ils", form: "sont allés" },
            { pronoun: "elles", form: "sont allées" },
          ],
        },
      ],
    },
    { type: "heading", text: "Les 17 verbes avec être (DR MRS VANDERTRAMP)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Infinitif", "Participe passé", "Infinitif", "Participe passé"],
      rows: [
        ["{a}D{/a}escendre", "descendu(e)", "{a}V{/a}enir", "venu(e)"],
        ["{a}R{/a}ester", "resté(e)", "{a}A{/a}ller", "allé(e)"],
        ["{a}M{/a}onter", "monté(e)", "{a}N{/a}aître", "né(e)"],
        ["{a}R{/a}etourner", "retourné(e)", "{a}D{/a}evenir", "devenu(e)"],
        ["{a}S{/a}ortir", "sorti(e)", "{a}E{/a}ntrer", "entré(e)"],
        ["{a}V{/a}enir", "venu(e)", "{a}R{/a}evenir", "revenu(e)"],
        ["{a}A{/a}rriver", "arrivé(e)", "{a}T{/a}omber", "tombé(e)"],
        ["{a}N{/a}aître", "né(e)", "{a}R{/a}entrer", "rentré(e)"],
        ["{a}P{/a}artir", "parti(e)", "{a}A{/a}ller", "allé(e)"],
        ["{a}M{/a}ourir", "mort(e)", "{a}P{/a}asser", "passé(e)"],
      ],
    },
    { type: "heading", text: "Accord du participe passé avec être", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Sujet", "Participe", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "→ (base)", "Il est parti."],
        ["Féminin singulier", "→ + {a}e{/a}", "Elle est partie{a}e{/a}."],
        ["Masculin pluriel", "→ + {a}s{/a}", "Ils sont partis{a}s{/a}."],
        ["Féminin pluriel", "→ + {a}es{/a}", "Elles sont parties{a}es{/a}."],
      ],
    },
    {
      type: "highlight",
      label: "Tous les verbes pronominaux utilisent aussi être",
      items: [
        "Elle {a}s'est levée{/a}. (se lever → participe accordé avec elle)",
        "Ils {a}se sont parlé{/a}. (se parler → COI, pas d'accord)",
        "Nous {a}nous sommes rencontrés{/a}.",
      ],
    },
  ],
  exercises: [],
};
