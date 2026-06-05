import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A2_2: SubmoduleTrad = {
  submoduleId: "A2-2",
  title: {
    fr: "Soustraction",
    en: "Subtraction",
    ar: "الطرح",
    fa: "تفریق",
    pt: "Subtração",
    ti: "ምቅናስ",
    uk: "Віднімання",
  },
  blocks: [
    {
      text: {
        fr: "La soustraction permet de **retirer** une quantité d'une autre.",
        en: "Subtraction removes a quantity from another.",
        ar: "الطرح يزيل كمية من أخرى.",
        fa: "تفریق مقداری را از مقدار دیگری کم می‌کند.",
        pt: "A subtração permite retirar uma quantidade de outra.",
        ti: "ምቅናስ ሓደ መጠን ካብ ካሊእ ይቀንስ።",
        uk: "Віднімання вилучає одну величину з іншої.",
      }
    },
    {
      items: {
        fr: [
          "Le signe de la soustraction est le signe « − » **moins**",
          "Les nombres de la soustraction sont les **termes**.",
          "Le résultat de la soustraction est la **différence**.",
        ],
      }
    },
    {
      headers: {
        fr: ["8", "−", "3", "=", "5"],
      }
    },
    {
      text: {
        fr: "Propriétés de la soustraction",
      }
    },
    {
      text: {
        fr: "Non-commutativité",
        en: "Non-commutativity",
        ar: "عدم التبادلية",
        fa: "جابجایی‌ناپذیری",
        pt: "Não comutatividade",
        ti: "ዘይ ቅደምሰዓባዊ",
        uk: "Некомутативність",
      }
    },
    {
      items: {
        fr: [
          "La soustraction n'est PAS commutative.",
          "• 57 − 49 **≠** 49 − 57",
        ],
      }
    },
    {},
    {
      text: {
        fr: "Soustraction en colonnes",
      }
    },
    {
      items: {
        fr: [
          "Aligner les unités sous les unités, dizaines sous dizaines.",
          "Si soustraction impossible → faire un **emprunt** à la colonne de gauche.",
          "La colonne empruntée diminue de 1, la colonne courante gagne 10.",
        ],
      }
    },
    {},
  ],
};
