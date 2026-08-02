import type { GrammarLesson } from "../../grammar-data";

/** Unité 53 — Les pronoms compléments directs et indirects (G4.23) */
export const A1_GR_PRONOMS_COD_COI: GrammarLesson = {
  slug: "a1-gr-pronoms-cod-coi",
  code: "G4.23",
  level: "A1",
  title: "Les pronoms compléments directs et indirects",
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
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms COD / COI",
      instruction: "Choisissez le pronom correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Vous avez les documents ? — Oui, je ___ ai.", choices: ["les", "leur", "lui", "la"], correctIdx: 0 },
        { sentence: "Je préviens madame Dupuy. → Je ___ préviens.", choices: ["la", "lui", "les", "leur"], correctIdx: 0 },
        { sentence: "Je téléphone à madame Dupuy. → Je ___ téléphone.", choices: ["lui", "la", "les", "leur"], correctIdx: 0 },
        { sentence: "Le directeur va ___ recevoir.", choices: ["nous", "notre", "on", "leur"], correctIdx: 0 },
        { sentence: "Je ne ___ ai pas.", choices: ["les", "leur", "lui", "des"], correctIdx: 0 },
        { sentence: "Tu aimes le ski ? — Oui, j'aime ___ .", choices: ["ça", "le", "la", "les"], correctIdx: 0 },
        { sentence: "Je parle à mon frère. → Je ___ parle.", choices: ["lui", "le", "la", "leur"], correctIdx: 0 },
        { sentence: "Je réponds à mes amis. → Je ___ réponds.", choices: ["leur", "lui", "les", "eux"], correctIdx: 0 },
        { sentence: "Il pense à ses amis. → Il pense ___ .", choices: ["à eux", "leur", "les", "eux"], correctIdx: 0 },
        { sentence: "Oui, je ___ imprime. (le document)", choices: ["l'", "le", "la", "les"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le, la, l', les, lui, leur, me, te, nous, vous ou ça.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Les documents, je ___ ai.", hint: "COD pl.", answer: "les" },
        { sentence: "Je ___ téléphone tout de suite. (à elle)", hint: "COI", answer: "lui" },
        { sentence: "Elle ___ a téléphoné. (à moi)", hint: "élision", answer: "m'" },
        { sentence: "Il ne va pas ___ recevoir.", hint: "nous", answer: "nous" },
        { sentence: "Le rapport, je ___ termine ce soir.", hint: "COD ms", answer: "le" },
        { sentence: "Tu aimes le chocolat ? — J'aime ___ .", hint: "chose", answer: "ça" },
        { sentence: "Je parle à ma sœur. → Je ___ parle.", hint: "COI", answer: "lui" },
        { sentence: "Je réponds à mes amies. → Je ___ réponds.", hint: "COI pl.", answer: "leur" },
        { sentence: "On ___ attend. (eux)", hint: "COD", answer: "les" },
        { sentence: "Je ___ remercie.", hint: "vous", answer: "vous" },
      ],
    },
  ],
};
