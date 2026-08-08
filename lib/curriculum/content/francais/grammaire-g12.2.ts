import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_L35 } from "./grammaire-g12.2-les-pronoms-cod-et-coi";

/** G12.2 — Les pronoms COD et COI (enrichi avec l'ancien G5.2 / a2-gr-l35) */
export const A1_GR_PRONOMS_COD_COI: GrammarLesson = {
  slug: "a1-gr-pronoms-cod-coi",
  code: "G12.2",
  level: "A1",
  title: "Les pronoms COD et COI",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms compléments évitent de répéter un nom complément (personne ou chose).",
        "Le choix dépend de la construction du verbe. → Je préviens madame Dupuy → Je la préviens. ; Je téléphone à madame Dupuy → Je lui téléphone.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Place et structure",
    },
    {
      type: "plain_list",
      items: [
        "Devant le verbe ou l'auxiliaire. → Oui, je l'ai. ; Elle m'a téléphoné.",
        "Avec deux verbes : devant l'infinitif. → Le directeur va nous recevoir et nous expliquer le problème.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Négation : Je ne les ai pas. ; Elle ne m'a pas téléphoné. ; Il ne va pas nous recevoir.",
    },
    {
      type: "heading",
      text: "Pronoms compléments directs (COD)",
    },
    {
      type: "plain_list",
      items: [
        "Avec un verbe sans préposition (aimer, connaître, voir…).",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["personnes", "Il me regarde. ; Je te préviens. ; Nous le/la connaissons. ; Il nous invite. ; Je vous remercie. ; On les attend."],
        ["choses", "Le rapport, je le termine. ; L'information, je la communique. ; Les documents, je les ai."],
      ],
    },
    {
      type: "note",
      text: "Avec aimer / détester + chose → {a}ça{/a} (pas le/la/les). → Tu aimes le ski ? — Oui, j'aime ça.",
    },
    {
      type: "heading",
      text: "Pronoms compléments indirects (COI)",
    },
    {
      type: "plain_list",
      items: [
        "Remplacent seulement des personnes ; verbes avec {a}à{/a} (parler à, téléphoner à…). → Je lui ai téléphoné.",
        "Il me parle. ; Je te parle. ; Il lui parle. ; Ils nous parlent. ; On vous parle. ; Je leur parle.",
        "{a}Lui{/a} = une personne (ms ou fs). → Je parle à mon frère / à ma sœur → Je lui parle.",
        "{a}Leur{/a} = des personnes (mp ou fp). → Je réponds à mes amis / à mes amies → Je leur réponds.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Certains verbes avec {a}à{/a} gardent {a}à + pronom tonique{/a}. → Il pense à ses amis → Il pense à eux. (voir unité 56)",
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Liaison / enchaînement avec {a}les, nous, vous, leur{/a} devant voyelle ou {a}h{/a} muet. → Je les imprime. ; Elle nous attend.",
        "{a}me, te, le, la → m', t', l'{/a} devant voyelle ou {a}h{/a} muet. → Il m'a téléphoné. ; Je l'imprime.",
      ],
      allBullets: true,
    },
    ...A2_GR_L35.theory,
  ],
  // Exercices de l'ancien G5.2 (a2-gr-l35) via generatedGrammarExercises.
  exercises: [],
};
