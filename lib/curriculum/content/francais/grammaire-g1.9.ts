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
      type: "text",
      text: "Les verbes avec un infinitif en {a}-ir{/a} n'ont pas tous la même conjugaison. Il y a quatre modèles de conjugaison.",
      transText: {
        en: "Verbs with an infinitive ending in {a}-ir{/a} do not all have the same conjugation. There are four conjugation patterns.",
        ar: "الأفعال التي ينتهي مصدرها بـ {a}-ir{/a} لا تتصرف كلها بالطريقة نفسها. هناك أربعة نماذج للتصريف.",
        fa: "فعل‌هایی که مصدرشان به {a}-ir{/a} ختم می‌شود، همگی صرف یکسانی ندارند. چهار الگوی صرف وجود دارد.",
        pt: "Os verbos com infinitivo terminado em {a}-ir{/a} não têm todos a mesma conjugação. Há quatro modelos de conjugação.",
        so: "Falalka uu falka aan la rogin ku dhammaado {a}-ir{/a} dhammaantood isku qorid ma laha. Waxaa jira afar qaab oo qorid fal ah.",
        ti: "መሰረታዊ ቅርጾም ብ {a}-ir{/a} ዝውዳእ ግሲታት ኩሎም ሓደ ዓይነት ኣይጽረዩን። ኣርባዕተ ሞዴላት ምጽራይ ኣለዉ።",
        tr: "Mastarı {a}-ir{/a} ile biten fiillerin hepsi aynı çekime sahip değildir. Dört çekim modeli vardır.",
        ps: "هغه فعلونه چې مصدر يې په {a}-ir{/a} پای ته رسېږي، ټول يو شان ګردان نه لري. د ګردان څلور بېلګې شته.",
        uk: "Дієслова з інфінітивом на {a}-ir{/a} відмінюються не однаково. Існує чотири моделі дієвідміни.",
      },
    },

    {
      type: "heading",
      text: "Modèle finir",
      trans: { en: "The finir pattern", ar: "نموذج finir", fa: "الگوی finir", pt: "O modelo finir", so: "Qaabka finir", ti: "ሞዴል finir", tr: "Finir modeli", ps: "د finir بېلګه", uk: "Модель finir" },
    },
    {
      type: "text",
      text: "Ce verbe a deux radicaux : {a}fini-{/a} au singulier et {a}finiss-{/a} au pluriel.",
      transText: {
        en: "This verb has two stems: {a}fini-{/a} in the singular and {a}finiss-{/a} in the plural.",
        ar: "لهذا الفعل جذران: {a}fini-{/a} في المفرد و{a}finiss-{/a} في الجمع.",
        fa: "این فعل دو بن دارد: {a}fini-{/a} در مفرد و {a}finiss-{/a} در جمع.",
        pt: "Este verbo tem dois radicais: {a}fini-{/a} no singular e {a}finiss-{/a} no plural.",
        so: "Fal-kani wuxuu leeyahay laba jirridood: {a}fini-{/a} kelida iyo {a}finiss-{/a} jamaca.",
        ti: "እዚ ግሲ ክልተ ሱራት ኣለዎ፦ {a}fini-{/a} ኣብ ንጽልን {a}finiss-{/a} ኣብ ብዙሕን።",
        tr: "Bu fiilin iki kökü vardır: tekilde {a}fini-{/a}, çoğulda {a}finiss-{/a}.",
        ps: "دا فعل دوه بنونه لري: په مفرد کې {a}fini-{/a} او په جمع کې {a}finiss-{/a}.",
        uk: "Це дієслово має дві основи: {a}fini-{/a} в однині та {a}finiss-{/a} у множині.",
      },
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "finir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "finir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "finis" },
                    { pronoun: "tu", form: "finis" },
                    { pronoun: "il / elle / on", form: "finit" },
                    { pronoun: "nous", form: "finissons" },
                    { pronoun: "vous", form: "finissez" },
                    { pronoun: "ils / elles", form: "finissent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "choisir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "choisir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "choisis" },
                    { pronoun: "tu", form: "choisis" },
                    { pronoun: "il / elle / on", form: "choisit" },
                    { pronoun: "nous", form: "choisissons" },
                    { pronoun: "vous", form: "choisissez" },
                    { pronoun: "ils / elles", form: "choisissent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "réfléchir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "réfléchir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "réfléchis" },
                    { pronoun: "tu", form: "réfléchis" },
                    { pronoun: "il / elle / on", form: "réfléchit" },
                    { pronoun: "nous", form: "réfléchissons" },
                    { pronoun: "vous", form: "réfléchissez" },
                    { pronoun: "ils / elles", form: "réfléchissent" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    
    {
      type: "heading",
      text: "Modèle ouvrir",
      trans: { en: "The ouvrir pattern", ar: "نموذج ouvrir", fa: "الگوی ouvrir", pt: "O modelo ouvrir", so: "Qaabka ouvrir", ti: "ሞዴል ouvrir", tr: "Ouvrir modeli", ps: "د ouvrir بېلګه", uk: "Модель ouvrir" },
    },
    {
      type: "text",
      text: "Le radical est le même que l'infinitif : {a}ouvr-{/a}. Les terminaisons sont les mêmes que pour les verbes en {a}-er{/a}.",
      transText: {
        en: "The stem is the same as the infinitive : {a}ouvr-{/a}). The endings are the same as for verbs ending in {a}-er{/a}.",
        ar: "الجذر هو نفسه جذر المصدر : {a}ouvr-{/a}. والنهايات هي نفسها نهايات الأفعال المنتهية بـ {a}-er{/a}.",
        fa: "بن فعل همان بن مصدر است : {a}ouvr-{/a}. شناسه‌ها مانند فعل‌های پایان‌یافته به {a}-er{/a} هستند.",
        pt: "O radical é o mesmo que o infinitivo : {a}ouvr-{/a}. As terminações são as mesmas dos verbos terminados em {a}-er{/a}.",
        so: "Jirriddu waa la mid tan falka aan la rogin : {a}ouvr-{/a}. Dhammaadyadu waa la mid kuwa falalka ku dhammaada {a}-er{/a}.",
        ti: "እቲ ሱር ምስ መሰረታዊ ቅርጺ ሓደ እዩ : {a}ouvr-{/a}። መወዳእታታቱ ምስ ናይ {a}-er{/a} ግሲታት ሓደ እዮም።",
        tr: "Kök, mastarla aynıdır : {a}ouvr-{/a}. Ekler {a}-er{/a} ile biten fiillerle aynıdır.",
        ps: "بن د مصدر په څېر دی : {a}ouvr-{/a}. پایونه د {a}-er{/a} پای ته رسېدونکو فعلونو په شان دي.",
        uk: "Основа така сама, як в інфінітиві : {a}ouvr-{/a}. Закінчення такі самі, як у дієслів на {a}-er{/a}.",
      },
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "ouvrir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "ouvrir",
                  accentForms: true,
                  rows: [
                    { pronoun: "j'", form: "ouvre" },
                    { pronoun: "tu", form: "ouvres" },
                    { pronoun: "il / elle / on", form: "ouvre" },
                    { pronoun: "nous", form: "ouvrons" },
                    { pronoun: "vous", form: "ouvrez" },
                    { pronoun: "ils / elles", form: "ouvrent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "offrir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "offrir",
                  accentForms: true,
                  rows: [
                    { pronoun: "j'", form: "offre" },
                    { pronoun: "tu", form: "offres" },
                    { pronoun: "il / elle / on", form: "offre" },
                    { pronoun: "nous", form: "offrons" },
                    { pronoun: "vous", form: "offrez" },
                    { pronoun: "ils / elles", form: "offrent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "découvrir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "découvrir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "découvre" },
                    { pronoun: "tu", form: "découvres" },
                    { pronoun: "il / elle / on", form: "découvre" },
                    { pronoun: "nous", form: "découvrons" },
                    { pronoun: "vous", form: "découvrez" },
                    { pronoun: "ils / elles", form: "découvrent" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      type: "heading",
      text: "Modèle partir, dormir, servir",
      trans: { en: "The partir, dormir, servir pattern", ar: "نموذج partir وdormir وservir", fa: "الگوی partir، dormir و servir", pt: "O modelo partir, dormir, servir", so: "Qaabka partir, dormir, servir", ti: "ሞዴል partir፣ dormir፣ servir", tr: "Partir, dormir, servir modeli", ps: "د partir، dormir، servir بېلګه", uk: "Модель partir, dormir, servir" },
    },
    {
      type: "text",
      text: "Ces verbes ont deux radicaux : au singulier {a}par- / dor- / ser-{/a} ; au pluriel comme l'infinitif {a}part- / dorm- / serv-{/a}.",
      transText: {
        en: "These verbs have two stems: in the singular, {a}par- / dor- / ser-{/a}; in the plural, the same as the infinitive, {a}part- / dorm- / serv-{/a}.",
        ar: "لهذه الأفعال جذران: في المفرد {a}par- / dor- / ser-{/a}؛ وفي الجمع مثل المصدر {a}part- / dorm- / serv-{/a}.",
        fa: "این فعل‌ها دو بن دارند: در مفرد {a}par- / dor- / ser-{/a}؛ و در جمع مانند مصدر {a}part- / dorm- / serv-{/a}.",
        pt: "Estes verbos têm dois radicais: no singular, {a}par- / dor- / ser-{/a}; no plural, o mesmo que o infinitivo, {a}part- / dorm- / serv-{/a}.",
        so: "Ficilladani waxay leeyihiin laba jirridood: kelida, {a}par- / dor- / ser-{/a}; jamaca, sida falka aan la rogin, {a}part- / dorm- / serv-{/a}.",
        ti: "እዞም ግሲታት ክልተ ሱራት ኣለዎም፦ ኣብ ንጽል {a}par- / dor- / ser-{/a}፣ ኣብ ብዙሕ ከም መሰረታዊ ቅርጺ {a}part- / dorm- / serv-{/a}።",
        tr: "Bu fiillerin iki kökü vardır: tekilde {a}par- / dor- / ser-{/a}; çoğulda mastarla aynı, {a}part- / dorm- / serv-{/a}.",
        ps: "دا فعلونه دوه بنونه لري: په مفرد کې {a}par- / dor- / ser-{/a}؛ په جمع کې د مصدر په څېر {a}part- / dorm- / serv-{/a}.",
        uk: "Ці дієслова мають дві основи: в однині {a}par- / dor- / ser-{/a}; у множині — як в інфінітиві: {a}part- / dorm- / serv-{/a}.",
      },
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "partir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "partir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "pars" },
                    { pronoun: "tu", form: "pars" },
                    { pronoun: "il / elle / on", form: "part" },
                    { pronoun: "nous", form: "partons" },
                    { pronoun: "vous", form: "partez" },
                    { pronoun: "ils / elles", form: "partent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "dormir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "dormir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "dors" },
                    { pronoun: "tu", form: "dors" },
                    { pronoun: "il / elle / on", form: "dort" },
                    { pronoun: "nous", form: "dormons" },
                    { pronoun: "vous", form: "dormez" },
                    { pronoun: "ils / elles", form: "dorment" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "servir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "servir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "sers" },
                    { pronoun: "tu", form: "sers" },
                    { pronoun: "il / elle / on", form: "sert" },
                    { pronoun: "nous", form: "servons" },
                    { pronoun: "vous", form: "servez" },
                    { pronoun: "ils / elles", form: "servent" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Modèle venir et tenir",
      trans: { en: "The venir and tenir pattern", ar: "نموذج venir وtenir", fa: "الگوی venir و tenir", pt: "O modelo venir e tenir", so: "Qaabka venir iyo tenir", ti: "ሞዴል venirን tenirን", tr: "Venir ve tenir modeli", ps: "د venir او tenir بېلګه", uk: "Модель venir і tenir" },
    },
    {
      type: "text",
      text: "Ces verbes ont trois radicaux, avec des prononciations différentes.",
      transText: {
        en: "These verbs have three stems, with different pronunciations.",
        ar: "لهذه الأفعال ثلاثة جذور بنطق مختلف.",
        fa: "این فعل‌ها سه بن با تلفظ‌های متفاوت دارند.",
        pt: "Estes verbos têm três radicais, com pronúncias diferentes.",
        so: "Ficilladani waxay leeyihiin saddex jirridood, oo leh ku dhawaaqid kala duwan.",
        ti: "እዞም ግሲታት ዝተፈላለየ ኣደማምጻ ዘለዎም ሰለስተ ሱራት ኣለዎም።",
        tr: "Bu fiillerin farklı telaffuzlara sahip üç kökü vardır.",
        ps: "دا فعلونه درې بنونه لري، چې تلفظونه يې توپير لري.",
        uk: "Ці дієслова мають три основи з різною вимовою.",
      },
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "venir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "venir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "viens" },
                    { pronoun: "tu", form: "viens" },
                    { pronoun: "il / elle / on", form: "vient" },
                    { pronoun: "nous", form: "venons" },
                    { pronoun: "vous", form: "venez" },
                    { pronoun: "ils / elles", form: "viennent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "tenir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "tenir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "tiens" },
                    { pronoun: "tu", form: "tiens" },
                    { pronoun: "il / elle / on", form: "tient" },
                    { pronoun: "nous", form: "tenons" },
                    { pronoun: "vous", form: "tenez" },
                    { pronoun: "ils / elles", form: "tiennent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "obtenir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "obtenir",
                  accentForms: true,
                  rows: [
                    { pronoun: "j'", form: "obtiens" },
                    { pronoun: "tu", form: "obtiens" },
                    { pronoun: "il / elle / on", form: "obtient" },
                    { pronoun: "nous", form: "obtenons" },
                    { pronoun: "vous", form: "obtenez" },
                    { pronoun: "ils / elles", form: "obtiennent" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  exercises: G1_EXERCISES["G1.9"](),
};
