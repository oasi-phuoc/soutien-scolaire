import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A8_5: SubmoduleTrad = {
  submoduleId: "A8-5",
  title: {
    fr: "Valeur approchée d'une racine",
    en: "Approximate value of a root",
    ar: "القيمة التقريبية لجذر",
    fa: "مقدار تقریبی جذر",
    ti: "ናይ ስርወ ቀረባ ዋጋ",
    uk: "Наближене значення кореня",
  },
  blocks: [
    {
      text: {
        fr: "Racines irrationnelles",
      }
    },
    {
      text: {
        fr: "Quand un nombre n'est pas un carré parfait, sa racine carrée est un nombre irrationnel : elle n'a pas de valeur décimale exacte et finie.",
      }
    },
    {
      text: {
        fr: "√2, √3, √5, √7 sont des nombres irrationnels. On ne peut les écrire qu'avec le signe √ ou par une valeur approchée.",
      }
    },
    {
      text: {
        fr: "Encadrement d'une racine",
      }
    },
    {
      text: {
        fr: "Pour encadrer √n, on cherche les deux carrés parfaits consécutifs qui encadrent n.",
      }
    },
    {
      text: {
        fr: "Méthode d'encadrement",
      },
      items: {
        fr: [
            "1. Trouver deux entiers a et b tels que a² < n < b²",
            "2. Alors : a < √n < b",
            "3. Utiliser la calculatrice pour la valeur décimale approchée",
          ],
      }
    },
    {
      text: {
        fr: "Encadrer √7 :\n2² = 4 < 7 < 9 = 3²\nDonc : 2 < √7 < 3\nValeur approchée : √7 ≈ 2,646",
      }
    },
    {
      headers: {
        fr: ["Racine", "Encadrement", "Valeur approchée"],
      }
    },
  ],
};
