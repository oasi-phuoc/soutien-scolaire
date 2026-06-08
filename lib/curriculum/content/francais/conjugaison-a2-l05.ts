import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L05: ConjLesson = {
  slug: "a2-conj-l05",
  code: "G.34",
  level: "A2",
  title: "L'impératif",
  theory: [
    { type: "heading", text: "L'impératif présent" },
    {
      type: "plain_list",
      items: [
        "L'impératif exprime un {a}ordre, un conseil, une interdiction ou une invitation{/a}.",
        "Il n'a que 3 personnes : {a}tu, nous, vous{/a} — sans pronom sujet.",
        "Formation : présent de l'indicatif, sans le pronom.",
      ],
    },
    {
      type: "grid",
      headers: ["Personne", "Verbes en -er (parler)", "Verbes en -ir 2e (finir)", "Verbes en -ir 3e (partir)"],
      boldFirstCol: true,
      rows: [
        ["tu", "{a}Parle !{/a} (pas de -s)", "{a}Finis !{/a}", "{a}Pars !{/a}"],
        ["nous", "{a}Parlons !{/a}", "{a}Finissons !{/a}", "{a}Partons !{/a}"],
        ["vous", "{a}Parlez !{/a}", "{a}Finissez !{/a}", "{a}Partez !{/a}"],
      ],
    },
    {
      type: "highlight",
      label: "Attention : verbes en -er → pas de -s à la 2e personne du singulier",
      items: [
        "Parle ! (pas Parles !)",
        "Mange ! (pas Manges !)",
        "Exception : va-s-y, manges-en (devant -y et -en, on garde le -s pour la liaison).",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Impératifs irréguliers", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Infinitif", "tu", "nous", "vous"],
      boldFirstCol: true,
      rows: [
        ["être", "{a}sois{/a}", "{a}soyons{/a}", "{a}soyez{/a}"],
        ["avoir", "{a}aie{/a}", "{a}ayons{/a}", "{a}ayez{/a}"],
        ["aller", "{a}va{/a}", "{a}allons{/a}", "{a}allez{/a}"],
        ["savoir", "{a}sache{/a}", "{a}sachons{/a}", "{a}sachez{/a}"],
        ["vouloir", "{a}veuille{/a}", "—", "{a}veuillez{/a} (poli)"],
      ],
    },
    { type: "heading", text: "Forme négative", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Parle !", "{a}Ne{/a} parle {a}pas{/a} !"],
        ["Mangez !", "{a}Ne{/a} mangez {a}pas{/a} !"],
        ["Soyons patients !", "{a}Ne{/a} soyons {a}pas{/a} impatients !"],
      ],
    },
    { type: "heading", text: "Impératif + pronoms", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Affirmatif : verbe + pronom (après)", "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !"],
        ["Négatif : pronom avant le verbe", "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !"],
      ],
    },
  ],
  exercises: [],
};
