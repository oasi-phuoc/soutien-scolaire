import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 8 — Les verbes en -ir (G1.9) */
export const A1_GR_VERBES_IR: GrammarLesson = {
  slug: "a1-gr-verbes-ir",
  code: "G1.9",
  level: "A1",
  title: "Les verbes en -ir",
  theory: [
    {
      type: "plain_list",
      items: [
        "Les verbes avec un infinitif en {a}-ir{/a} n'ont pas tous la même conjugaison. Il y a quatre modèles de conjugaison.",
      ],
      transItems: {
        en: ["Verbs with an infinitive ending in {a}-ir{/a} do not all have the same conjugation. There are four conjugation patterns."],
        ar: ["الأفعال التي ينتهي مصدرها بـ {a}-ir{/a} لا تتصرف كلها بالطريقة نفسها. هناك أربعة نماذج للتصريف."],
        fa: ["فعل‌هایی که مصدرشان به {a}-ir{/a} ختم می‌شود، همگی صرف یکسانی ندارند. چهار الگوی صرف وجود دارد."],
        ti: ["መሰረታዊ ቅርጾም ብ {a}-ir{/a} ዝውዳእ ግሲታት ኩሎም ሓደ ዓይነት ኣይጽረዩን። ኣርባዕተ ሞዴላት ምጽራይ ኣለዉ።"],
        uk: ["Дієслова з інфінітивом на {a}-ir{/a} відмінюються не однаково. Існує чотири моделі дієвідміни."],
      },
    },

    {
      type: "heading",
      text: "Modèle finir",
      trans: { en: "The finir pattern", ar: "نموذج finir", fa: "الگوی finir", ti: "ሞዴል finir", uk: "Модель finir" },
    },
    {
      type: "plain_list",
      items: [
        "Ce verbe a deux radicaux : {a}fini-{/a} au singulier et {a}finiss-{/a} au pluriel.",
      ],
      transItems: {
        en: ["This verb has two stems: {a}fini-{/a} in the singular and {a}finiss-{/a} in the plural."],
        ar: ["لهذا الفعل جذران: {a}fini-{/a} في المفرد و{a}finiss-{/a} في الجمع."],
        fa: ["این فعل دو بن دارد: {a}fini-{/a} در مفرد و {a}finiss-{/a} در جمع."],
        ti: ["እዚ ግሲ ክልተ ሱራት ኣለዎ፦ {a}fini-{/a} ኣብ ንጽልን {a}finiss-{/a} ኣብ ብዙሕን።"],
        uk: ["Це дієслово має дві основи: {a}fini-{/a} в однині та {a}finiss-{/a} у множині."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "finir", radical: "fini",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons", radical: "finiss" },
            { pronoun: "vous", ending: "ez", radical: "finiss" },
            { pronoun: "ils / elles", ending: "ent", radical: "finiss" },
          ],
        },
        {
          infinitive: "choisir", radical: "choisi",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons", radical: "choisiss" },
            { pronoun: "vous", ending: "ez", radical: "choisiss" },
            { pronoun: "ils / elles", ending: "ent", radical: "choisiss" },
          ],
        },
        {
          infinitive: "réfléchir", radical: "réfléchi",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons", radical: "réfléchiss" },
            { pronoun: "vous", ending: "ez", radical: "réfléchiss" },
            { pronoun: "ils / elles", ending: "ent", radical: "réfléchiss" },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
      accent: true,
      trans: { en: "Pronunciation", ar: "النطق", fa: "تلفظ", ti: "ኣደማምጻ", uk: "Вимова" },
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On ne prononce pas le {a}s{/a} et le {a}t{/a} finaux au singulier (fini{a}s{/a}, fini{a}t{/a}).",
      ],
      transItems: {
        en: ["{a}1.{/a} The final {a}s{/a} and {a}t{/a} are not pronounced in the singular (fini{a}s{/a}, fini{a}t{/a})."],
        ar: ["{a}1.{/a} لا يُنطق حرفا {a}s{/a} و{a}t{/a} في نهاية صيغة المفرد (fini{a}s{/a}، fini{a}t{/a})."],
        fa: ["{a}1.{/a} حروف پایانی {a}s{/a} و {a}t{/a} در مفرد تلفظ نمی‌شوند (fini{a}s{/a}، fini{a}t{/a})."],
        ti: ["{a}1.{/a} ኣብ ንጽል እቶም ናይ መወዳእታ {a}s{/a}ን {a}t{/a}ን ኣይድመጹን (fini{a}s{/a}፣ fini{a}t{/a})።"],
        uk: ["{a}1.{/a} Кінцеві {a}s{/a} і {a}t{/a} в однині не вимовляються (fini{a}s{/a}, fini{a}t{/a})."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} Au pluriel, on prononce le {a}ss{/a} pour distinguer : il finit / ils fini{a}ss{/a}ent.",
      ],
      transItems: {
        en: ["{a}2.{/a} In the plural, {a}ss{/a} is pronounced to distinguish: il finit / ils fini{a}ss{/a}ent."],
        ar: ["{a}2.{/a} في الجمع، يُنطق {a}ss{/a} للتمييز بين: il finit / ils fini{a}ss{/a}ent."],
        fa: ["{a}2.{/a} در جمع، {a}ss{/a} تلفظ می‌شود تا این دو شکل متمایز شوند: il finit / ils fini{a}ss{/a}ent."],
        ti: ["{a}2.{/a} ኣብ ብዙሕ፣ ንምፍላይ {a}ss{/a} ይድመጽ፦ il finit / ils fini{a}ss{/a}ent።"],
        uk: ["{a}2.{/a} У множині {a}ss{/a} вимовляється, щоб розрізнити: il finit / ils fini{a}ss{/a}ent."],
      },
    },

    {
      type: "heading",
      text: "Modèle ouvrir",
      trans: { en: "The ouvrir pattern", ar: "نموذج ouvrir", fa: "الگوی ouvrir", ti: "ሞዴል ouvrir", uk: "Модель ouvrir" },
    },
    {
      type: "plain_list",
      items: [
        "Le radical est le même que l'infinitif ({a}ouvr-{/a}). Les terminaisons sont les mêmes que pour les verbes en {a}-er{/a}.",
      ],
      transItems: {
        en: ["The stem is the same as the infinitive ({a}ouvr-{/a}). The endings are the same as for verbs ending in {a}-er{/a}."],
        ar: ["الجذر هو نفسه جذر المصدر ({a}ouvr-{/a}). والنهايات هي نفسها نهايات الأفعال المنتهية بـ {a}-er{/a}."],
        fa: ["بن فعل همان بن مصدر است ({a}ouvr-{/a}). شناسه‌ها مانند فعل‌های پایان‌یافته به {a}-er{/a} هستند."],
        ti: ["እቲ ሱር ምስ መሰረታዊ ቅርጺ ሓደ እዩ ({a}ouvr-{/a})። መወዳእታታቱ ምስ ናይ {a}-er{/a} ግሲታት ሓደ እዮም።"],
        uk: ["Основа така сама, як в інфінітиві ({a}ouvr-{/a}). Закінчення такі самі, як у дієслів на {a}-er{/a}."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "ouvrir", radical: "ouvr",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "offrir", radical: "offr",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "découvrir", radical: "découvr",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },

    {
      type: "heading",
      text: "Modèle partir, dormir, servir",
      trans: { en: "The partir, dormir, servir pattern", ar: "نموذج partir وdormir وservir", fa: "الگوی partir، dormir و servir", ti: "ሞዴል partir፣ dormir፣ servir", uk: "Модель partir, dormir, servir" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes ont deux radicaux : au singulier {a}par- / dor- / ser-{/a} ; au pluriel comme l'infinitif {a}part- / dorm- / serv-{/a}.",
      ],
      transItems: {
        en: ["These verbs have two stems: in the singular, {a}par- / dor- / ser-{/a}; in the plural, the same as the infinitive, {a}part- / dorm- / serv-{/a}."],
        ar: ["لهذه الأفعال جذران: في المفرد {a}par- / dor- / ser-{/a}؛ وفي الجمع مثل المصدر {a}part- / dorm- / serv-{/a}."],
        fa: ["این فعل‌ها دو بن دارند: در مفرد {a}par- / dor- / ser-{/a}؛ و در جمع مانند مصدر {a}part- / dorm- / serv-{/a}."],
        ti: ["እዞም ግሲታት ክልተ ሱራት ኣለዎም፦ ኣብ ንጽል {a}par- / dor- / ser-{/a}፣ ኣብ ብዙሕ ከም መሰረታዊ ቅርጺ {a}part- / dorm- / serv-{/a}።"],
        uk: ["Ці дієслова мають дві основи: в однині {a}par- / dor- / ser-{/a}; у множині — як в інфінітиві: {a}part- / dorm- / serv-{/a}."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "partir", radical: "part",
          rows: [
            { pronoun: "je", ending: "s", radical: "par" },
            { pronoun: "tu", ending: "s", radical: "par" },
            { pronoun: "il / elle / on", ending: "t", radical: "par" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "dormir", radical: "dorm",
          rows: [
            { pronoun: "je", ending: "s", radical: "dor" },
            { pronoun: "tu", ending: "s", radical: "dor" },
            { pronoun: "il / elle / on", ending: "t", radical: "dor" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "servir", radical: "serv",
          rows: [
            { pronoun: "je", ending: "s", radical: "ser" },
            { pronoun: "tu", ending: "s", radical: "ser" },
            { pronoun: "il / elle / on", ending: "t", radical: "ser" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
      accent: true,
      trans: { en: "Pronunciation", ar: "النطق", fa: "تلفظ", ti: "ኣደማምጻ", uk: "Вимова" },
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On ne prononce pas le {a}s{/a} et le {a}t{/a} finaux au singulier.",
      ],
      transItems: {
        en: ["{a}1.{/a} The final {a}s{/a} and {a}t{/a} are not pronounced in the singular."],
        ar: ["{a}1.{/a} لا يُنطق حرفا {a}s{/a} و{a}t{/a} في نهاية صيغة المفرد."],
        fa: ["{a}1.{/a} حروف پایانی {a}s{/a} و {a}t{/a} در مفرد تلفظ نمی‌شوند."],
        ti: ["{a}1.{/a} ኣብ ንጽል እቶም ናይ መወዳእታ {a}s{/a}ን {a}t{/a}ን ኣይድመጹን።"],
        uk: ["{a}1.{/a} Кінцеві {a}s{/a} і {a}t{/a} в однині не вимовляються."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} On prononce la consonne du 2e radical au pluriel (il part / ils par{a}tent{/a}).",
      ],
      transItems: {
        en: ["{a}2.{/a} The consonant of the second stem is pronounced in the plural (il part / ils par{a}tent{/a})."],
        ar: ["{a}2.{/a} يُنطق الحرف الساكن من الجذر الثاني في الجمع (il part / ils par{a}tent{/a})."],
        fa: ["{a}2.{/a} همخوانِ بن دوم در جمع تلفظ می‌شود (il part / ils par{a}tent{/a})."],
        ti: ["{a}2.{/a} ኣብ ብዙሕ እቲ ናይ ካልኣይ ሱር ተነባቢ ፊደል ይድመጽ (il part / ils par{a}tent{/a})።"],
        uk: ["{a}2.{/a} У множині вимовляється приголосний другої основи (il part / ils par{a}tent{/a})."],
      },
    },

    {
      type: "heading",
      text: "Modèle venir et tenir",
      trans: { en: "The venir and tenir pattern", ar: "نموذج venir وtenir", fa: "الگوی venir و tenir", ti: "ሞዴል venirን tenirን", uk: "Модель venir і tenir" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes ont trois radicaux, avec des prononciations différentes.",
      ],
      transItems: {
        en: ["These verbs have three stems, with different pronunciations."],
        ar: ["لهذه الأفعال ثلاثة جذور بنطق مختلف."],
        fa: ["این فعل‌ها سه بن با تلفظ‌های متفاوت دارند."],
        ti: ["እዞም ግሲታት ዝተፈላለየ ኣደማምጻ ዘለዎም ሰለስተ ሱራት ኣለዎም።"],
        uk: ["Ці дієслова мають три основи з різною вимовою."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "venir", radical: "v",
          rows: [
            { pronoun: "je", ending: "iens" },
            { pronoun: "tu", ending: "iens" },
            { pronoun: "il / elle / on", ending: "ient" },
            { pronoun: "nous", ending: "enons" },
            { pronoun: "vous", ending: "enez" },
            { pronoun: "ils / elles", ending: "iennent" },
          ],
        },
        {
          infinitive: "tenir", radical: "t",
          rows: [
            { pronoun: "je", ending: "iens" },
            { pronoun: "tu", ending: "iens" },
            { pronoun: "il / elle / on", ending: "ient" },
            { pronoun: "nous", ending: "enons" },
            { pronoun: "vous", ending: "enez" },
            { pronoun: "ils / elles", ending: "iennent" },
          ],
        },
        {
          infinitive: "obtenir", radical: "obt",
          rows: [
            { pronoun: "j'", ending: "iens" },
            { pronoun: "tu", ending: "iens" },
            { pronoun: "il / elle / on", ending: "ient" },
            { pronoun: "nous", ending: "enons" },
            { pronoun: "vous", ending: "enez" },
            { pronoun: "ils / elles", ending: "iennent" },
          ],
        },
      ],
    },
  ],
  exercises: G1_EXERCISES["G1.9"](),
};
