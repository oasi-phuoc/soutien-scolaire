import type { GrammarLesson } from "../../grammar-data";

/** Unité 5 — Les verbes pronominaux (G1.6) */
export const A1_GR_PRONOMINAUX: GrammarLesson = {
  slug: "a1-gr-pronominaux",
  code: "G1.6",
  level: "A1",
  title: "Les verbes pronominaux",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "highlight",
      label: "Les verbes réfléchis",
      items: [
        "Le sujet du verbe fait l'action sur lui-même.",
        "Elle {a}se{/a} regarde. → Elle se regarde dans le miroir.",
      ],
      noBulletItems: [1],
    },
    {
      type: "highlight",
      label: "Les verbes réciproques",
      items: [
        "Plusieurs personnes font l'action les unes sur les autres. On conjugue seulement avec les pronoms pluriels ({a}on, nous, vous, ils, elles{/a}).",
        "Ils {a}se{/a} regardent.",
      ],
      noBulletItems: [1],
    },
    {
      type: "heading",
      text: "Conjugaison",
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "plain_list",
      items: [
        "Les verbes pronominaux se conjuguent avec deux pronoms : le pronom sujet + un second pronom de la même personne.",
        "À l'infinitif, on utilise le pronom {a}se{/a} : se lever, se doucher.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Pronom sujet", "Pronom", "Verbe / phrase"],
      boldFirstCol: true,
      rows: [
        ["Je", "me", "réveille à 8 h."],
        ["Tu", "te", "lèves tôt."],
        ["Il / Elle / On", "se", "douche le soir."],
        ["Nous", "nous", "préparons vite."],
        ["Vous", "vous", "coiffez comment ?"],
        ["Ils / Elles", "se", "couchent tard."],
      ],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", ti: "ኣደማምጻን ኣጸሓሕፋን", uk: "Вимова та правопис" },
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms {a}me, te, se{/a} deviennent {a}m', t', s'{/a} devant une voyelle ou un h muet.",
        "{s}Je me habille{/s} → {a}Je m'habille{/a}.",
        "{s}Tu te amuses{/s} → {a}Tu t'amuses{/a}.",
        "{s}Elle se arrête{/s} → {a}Elle s'arrête{/a}.",
        "{s}Ils se embrassent{/s} → {a}Ils s'embrassent{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Attention à l'ordre des mots dans la phrase négative : Je ne me lève pas tôt. (sujet + ne + pronom + verbe + pas)",
    },
    {
      type: "plain_list",
      label: "À l'oral, le e de je, me, te, se et ne n'est pas toujours prononcé :",
      items: [
        "Je me couche. / Tu te douches. / Il ne se douche pas.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms réfléchis",
      instruction: "Choisissez le bon pronom.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ réveille à 8 h.", choices: ["me", "te", "se", "nous"], correctIdx: 0 },
        { sentence: "Tu ___ lèves tôt.", choices: ["te", "me", "se", "vous"], correctIdx: 0 },
        { sentence: "Elle ___ douche le soir.", choices: ["se", "me", "te", "nous"], correctIdx: 0 },
        { sentence: "Nous ___ préparons vite.", choices: ["nous", "vous", "se", "me"], correctIdx: 0 },
        { sentence: "Vous ___ coiffez comment ?", choices: ["vous", "nous", "se", "te"], correctIdx: 0 },
        { sentence: "Ils ___ couchent tard.", choices: ["se", "me", "nous", "vous"], correctIdx: 0 },
        { sentence: "On ___ regarde dans le miroir.", choices: ["se", "me", "te", "nous"], correctIdx: 0 },
        { sentence: "Je ___ habille.", choices: ["m'", "t'", "s'", "nous"], correctIdx: 0 },
        { sentence: "Tu ___ amuses.", choices: ["t'", "m'", "s'", "vous"], correctIdx: 0 },
        { sentence: "Elle ___ arrête.", choices: ["s'", "m'", "t'", "se"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez les verbes pronominaux",
      instruction: "Complétez avec le pronom et le verbe conjugués (ex. me lève).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (se lever) tôt.", hint: "se lever → je", answer: "me lève" },
        { sentence: "Tu ___ (se coucher) tard.", hint: "se coucher → tu", answer: "te couches" },
        { sentence: "Il ___ (se doucher) le soir.", hint: "se doucher → il", answer: "se douche" },
        { sentence: "Nous ___ (se préparer) vite.", hint: "se préparer → nous", answer: "nous préparons" },
        { sentence: "Vous ___ (se lever) à quelle heure ?", hint: "se lever → vous", answer: "vous levez" },
        { sentence: "Ils ___ (se regarder).", hint: "se regarder → ils", answer: "se regardent" },
        { sentence: "Elle ___ (s'habiller).", hint: "s'habiller → elle", answer: "s'habille" },
        { sentence: "Je ___ (s'appeler) Leila.", hint: "s'appeler → je", answer: "m'appelle" },
        { sentence: "On ___ (se coucher) tôt.", hint: "se coucher → on", answer: "se couche" },
        { sentence: "Tu ___ (s'amuser) bien ?", hint: "s'amuser → tu", answer: "t'amuses" },
      ],
    },
  ],
};
