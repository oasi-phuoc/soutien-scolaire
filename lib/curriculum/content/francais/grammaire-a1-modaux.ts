import type { GrammarLesson } from "../../grammar-data";

/** Unité 6 — Pouvoir, vouloir, devoir et falloir (G1.7) */
export const A1_GR_MODAUX: GrammarLesson = {
  slug: "a1-gr-modaux",
  code: "G1.7",
  level: "A1",
  title: "Les verbes pouvoir, vouloir, devoir et falloir",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "highlight",
      label: "Vouloir + infinitif ou nom",
      items: [
        "exprimer un désir ou une volonté.",
        "Je {a}veux{/a} aller avec toi en Italie.",
        "Il {a}veut{/a} une chambre avec terrasse.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Pouvoir + infinitif",
      items: [
        "exprimer une capacité : Vous {a}pouvez{/a} parler sept langues !?",
        "exprimer une autorisation : Est-ce que nous {a}pouvons{/a} entrer ?",
        "exprimer une interdiction (à la forme négative) : Non, vous {a}ne pouvez pas{/a} entrer !",
      ],
    },
    {
      type: "highlight",
      label: "Devoir + infinitif",
      items: [
        "exprimer une obligation ou une nécessité : Ils {a}doivent{/a} aller à l'aéroport.",
        "exprimer une interdiction (à la forme négative) : On {a}ne doit pas{/a} fumer dans l'avion.",
        "dans les situations d'achat : Je {a}dois{/a} combien ? — 10 euros.",
      ],
    },
    {
      type: "highlight",
      label: "Il faut (verbe falloir) + infinitif ou nom",
      items: [
        "exprimer une nécessité générale : Il {a}faut{/a} faire la queue. / Il {a}faut{/a} un passeport pour voyager.",
        "exprimer une interdiction (à la forme négative) : Il {a}ne faut pas{/a} fumer dans la gare.",
      ],
    },
    {
      type: "note",
      text: "Le verbe falloir est conjugué seulement avec le pronom sujet impersonnel il.",
    },
    {
      type: "heading",
      text: "Conjugaison",
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "grid",
      headers: ["Pronom", "Vouloir", "Pouvoir", "Devoir"],
      boldFirstCol: true,
      rows: [
        ["Je", "veux", "peux", "dois"],
        ["Tu", "veux", "peux", "dois"],
        ["Il / Elle / On", "veut", "peut", "doit"],
        ["Nous", "voulons", "pouvons", "devons"],
        ["Vous", "voulez", "pouvez", "devez"],
        ["Ils / Elles", "veulent", "peuvent", "doivent"],
      ],
    },
    {
      type: "note",
      text: "Attention à l'ordre des mots dans la phrase négative ! Je ne veux pas partir.",
    },
    {
      type: "heading",
      text: "Remarques",
      trans: { en: "Notes", ar: "ملاحظات", fa: "نکات", ti: "መተሓሳሰቢታት", uk: "Зауваження" },
    },
    {
      type: "plain_list",
      items: [
        "Pour demander quelque chose de façon polie, on utilise souvent {a}Je voudrais{/a} à la place de {a}Je veux{/a}.",
        "{a}Je voudrais{/a} un ticket de métro, s'il vous plaît.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pouvoir, vouloir, devoir",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ aller avec toi.", choices: ["veux", "veut", "voulons", "peux"], correctIdx: 0 },
        { sentence: "Tu ___ parler français ?", choices: ["peux", "peut", "dois", "veux"], correctIdx: 0 },
        { sentence: "Il ___ être à l'aéroport avant 10 h.", choices: ["doit", "dois", "peut", "veut"], correctIdx: 0 },
        { sentence: "Nous ___ entrer ?", choices: ["pouvons", "pouvez", "devons", "voulons"], correctIdx: 0 },
        { sentence: "Vous ___ une chambre ?", choices: ["voulez", "veulent", "pouvez", "devez"], correctIdx: 0 },
        { sentence: "Ils ___ aller à l'aéroport.", choices: ["doivent", "doit", "peuvent", "veulent"], correctIdx: 0 },
        { sentence: "On ___ pas fumer dans l'avion.", choices: ["ne doit", "ne dois", "ne peut", "ne veut"], correctIdx: 0 },
        { sentence: "Il ___ faire la queue.", choices: ["faut", "dois", "peut", "veut"], correctIdx: 0 },
        { sentence: "Elle ___ une terrasse.", choices: ["veut", "veux", "peut", "doit"], correctIdx: 0 },
        { sentence: "Vous ___ parler sept langues !", choices: ["pouvez", "pouvons", "devez", "voulez"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez le verbe",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (vouloir) un ticket.", hint: "vouloir → je", answer: "veux" },
        { sentence: "Tu ___ (pouvoir) m'aider ?", hint: "pouvoir → tu", answer: "peux" },
        { sentence: "Il ___ (devoir) partir.", hint: "devoir → il", answer: "doit" },
        { sentence: "Nous ___ (pouvoir) entrer ?", hint: "pouvoir → nous", answer: "pouvons" },
        { sentence: "Vous ___ (vouloir) un café ?", hint: "vouloir → vous", answer: "voulez" },
        { sentence: "Ils ___ (devoir) faire la queue.", hint: "devoir → ils", answer: "doivent" },
        { sentence: "Elle ___ (pouvoir) venir.", hint: "pouvoir → elle", answer: "peut" },
        { sentence: "On ___ (devoir) attendre.", hint: "devoir → on", answer: "doit" },
        { sentence: "Il ___ (falloir) un passeport.", hint: "falloir → il", answer: "faut" },
        { sentence: "Je ___ (devoir) combien ?", hint: "devoir → je", answer: "dois" },
      ],
    },
  ],
};
